#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const rootDir = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(rootDir, "app.js"), "utf8");
const courseData = JSON.parse(fs.readFileSync(path.join(rootDir, "data/course.json"), "utf8"));
let wallNow = new Date(2026, 9, 6, 12, 0, 0).getTime();
let monotonicNow = 0;

class FakeDate extends Date {
  constructor(...args) { super(...(args.length ? args : [wallNow])); }
  static now() { return wallNow; }
}

function advance(milliseconds) {
  wallNow += milliseconds;
  monotonicNow += milliseconds;
}

function makeHarness(savedState) {
  let serialized = savedState ? JSON.stringify(savedState) : null;
  let exportedBlob = null;
  let timerId = 0;
  const intervals = new Map();
  const documentListeners = new Map();
  const windowListeners = new Map();
  let focused = true;
  const elements = {
    "app-root": { innerHTML: "", addEventListener() {}, querySelector() { return null; } },
    toast: { textContent: "", classList: { add() {}, remove() {} } },
  };
  class FakeFileReader {
    readAsText(file) { this.result = file.contents; this.onload?.(); }
  }
  const context = {
    console,
    Date: FakeDate,
    Math,
    JSON,
    Object,
    Array,
    String,
    Number,
    Set,
    Map,
    Promise,
    Intl,
    RegExp,
    Error,
    Blob,
    performance: { now: () => monotonicNow },
    setTimeout: () => 0,
    clearTimeout() {},
    setInterval: (callback, delay) => { const id = ++timerId; intervals.set(id, { callback, delay }); return id; },
    clearInterval: (id) => intervals.delete(id),
    FileReader: FakeFileReader,
    URL: {
      createObjectURL: (blob) => { exportedBlob = blob; return "blob:study-time-test"; },
      revokeObjectURL() {},
    },
    document: {
      visibilityState: "visible",
      hasFocus: () => focused,
      getElementById: (id) => elements[id] || { addEventListener() {} },
      addEventListener: (name, callback) => documentListeners.set(name, callback),
      body: { appendChild() {} },
      createElement: () => ({ href: "", download: "", click() {}, remove() {} }),
    },
    localStorage: {
      getItem: () => serialized,
      setItem: (_key, value) => { serialized = value; },
    },
    window: {
      addEventListener: (name, callback) => windowListeners.set(name, callback),
      scrollTo() {},
      confirm: () => true,
    },
    navigator: {},
    location: { protocol: "file:", hostname: "" },
    fetch: async () => ({ ok: true, json: async () => JSON.parse(JSON.stringify(courseData)) }),
  };
  vm.createContext(context);
  vm.runInContext(appSource, context, { filename: "app.js" });
  return {
    context,
    elements,
    intervals,
    documentListeners,
    windowListeners,
    setFocused: (value) => { focused = Boolean(value); },
    readState: () => serialized ? JSON.parse(serialized) : null,
    readExport: async () => exportedBlob ? exportedBlob.text() : null,
  };
}

async function boot(savedState) {
  const harness = makeHarness(savedState);
  await new Promise((resolve) => setImmediate(resolve));
  return harness;
}

function appValue(context, expression) {
  return vm.runInContext(expression, context);
}

function click(context, action, data = {}) {
  const dataset = { action, ...Object.fromEntries(Object.entries(data).map(([key, value]) => [key, String(value)])) };
  context.__testClickEvent = { target: { closest: () => ({ dataset }) } };
  vm.runInContext("handleClick(__testClickEvent)", context);
  delete context.__testClickEvent;
}

(async () => {
  const legacy = await boot({
    profile: { name: "مجرّب", dailyGoal: 120, focus: "الدراسة" },
    studyDays: [
      { date: "2026-10-05", minutes: 20 },
      { date: "2026-07-01", minutes: 90 },
    ],
  });
  const legacyDays = legacy.readState().studyDays;
  assert.equal(legacyDays.find((day) => day.date === "2026-10-05").actualMilliseconds, 0, "old estimated durations must not be relabeled as actual time");
  assert.equal(legacyDays.find((day) => day.date === "2026-10-05").legacyEstimatedMinutes, 20, "old estimates should be preserved separately");
  assert.ok(legacyDays.some((day) => day.date === "2026-07-01"), "history older than sixty days must not be deleted");
  assert.equal(appValue(legacy.context, "weekStats().find((day) => day.key === dateKey()).minutes"), 0, "legacy estimates must not inflate the actual-time chart");
  assert.match(legacy.elements["app-root"].innerHTML, /دقيقة فعلية/, "the dashboard should label the new total as actual time");
  assert.match(legacy.elements["app-root"].innerHTML, /تقديرات محفوظة من السجل السابق: 110 دقيقة، ولا تدخل في الوقت الفعلي/, "the dashboard should show legacy estimates separately and explicitly");

  const lessonId = courseData.lessons[0].id;
  vm.runInContext(`openLesson(${JSON.stringify(lessonId)});`, legacy.context);
  assert.equal(appValue(legacy.context, "currentStudySession().status"), "active", "entering a lesson should start an actual study session");
  assert.match(legacy.elements["app-root"].innerHTML, /وقت الدراسة الفعلي في هذه الجلسة/, "the learning view should show an actual session timer");
  assert.match(appValue(legacy.context, "renderStudyTimerControl()"), /00:00:00/, "the timer should start at zero rather than the lesson estimate");

  advance(70_000);
  vm.runInContext("tickStudyTimer()", legacy.context);
  assert.equal(appValue(legacy.context, "currentStudySession().activeMilliseconds"), 70_000, "visible active time should accrue in the session log");
  assert.equal(appValue(legacy.context, "studyDayRecord(dateKey()).actualMilliseconds"), 70_000, "actual milliseconds should be added to the local daily aggregate");

  advance(240_000);
  vm.runInContext("tickStudyTimer()", legacy.context);
  assert.equal(appValue(legacy.context, "currentStudySession().status"), "paused", "five minutes without activity should pause the timer automatically");
  assert.equal(appValue(legacy.context, "currentStudySession().pauseReason"), "idle", "the pause reason should be recorded as idle");
  assert.equal(appValue(legacy.context, "currentStudySession().activeMilliseconds"), 300_000, "time after the five-minute idle limit must not be counted");
  const afterIdle = appValue(legacy.context, "currentStudySession().activeMilliseconds");
  advance(30 * 60_000);
  vm.runInContext("tickStudyTimer()", legacy.context);
  assert.equal(appValue(legacy.context, "currentStudySession().activeMilliseconds"), afterIdle, "a long idle period must not inflate study time");

  vm.runInContext("render()", legacy.context);
  assert.match(legacy.elements["app-root"].innerHTML, /استأنف احتساب الوقت/, "a paused session should provide an explicit resume control");
  click(legacy.context, "toggle-study-timer");
  advance(30_000);
  vm.runInContext("tickStudyTimer()", legacy.context);
  assert.equal(appValue(legacy.context, "currentStudySession().activeMilliseconds"), 330_000, "resuming should continue the same study session");

  click(legacy.context, "toggle-study-timer");
  assert.equal(appValue(legacy.context, "currentStudySession().pauseReason"), "manual", "the learner should be able to pause the timer manually");
  const afterManualPause = appValue(legacy.context, "currentStudySession().activeMilliseconds");
  advance(120_000);
  vm.runInContext("tickStudyTimer()", legacy.context);
  assert.equal(appValue(legacy.context, "currentStudySession().activeMilliseconds"), afterManualPause, "manually paused time must not accrue");
  click(legacy.context, "toggle-study-timer");
  advance(15_000);
  vm.runInContext("tickStudyTimer()", legacy.context);
  assert.equal(appValue(legacy.context, "currentStudySession().activeMilliseconds"), afterManualPause + 15_000, "manual resume should restart from the saved total");

  advance(40_000);
  legacy.setFocused(false);
  legacy.context.document.visibilityState = "hidden";
  legacy.documentListeners.get("visibilitychange")();
  const afterHiddenPause = appValue(legacy.context, "currentStudySession().activeMilliseconds");
  assert.equal(appValue(legacy.context, "currentStudySession().pauseReason"), "hidden", "hiding the page should pause the timer");
  advance(2 * 60 * 60_000);
  legacy.setFocused(true);
  legacy.context.document.visibilityState = "visible";
  legacy.documentListeners.get("visibilitychange")();
  assert.equal(appValue(legacy.context, "currentStudySession().activeMilliseconds"), afterHiddenPause, "time while the page is hidden must not accrue");
  assert.equal(appValue(legacy.context, "currentStudySession().status"), "active", "returning to a visible, focused page should resume automatically");
  vm.runInContext("noteStudyActivity({ target: { closest() { return null; } } })", legacy.context);
  advance(10_000);
  vm.runInContext("tickStudyTimer()", legacy.context);
  assert.equal(appValue(legacy.context, "currentStudySession().activeMilliseconds"), afterHiddenPause + 10_000, "returning activity should resume a hidden session without counting the gap");

  legacy.windowListeners.get("pagehide")();
  const beforeReload = legacy.readState();
  const savedSessionId = beforeReload.activeStudySessionId;
  const savedMilliseconds = beforeReload.studySessions.find((session) => session.id === savedSessionId).activeMilliseconds;
  assert.equal(beforeReload.studySessions.find((session) => session.id === savedSessionId).status, "paused", "pagehide should persist an unfinished paused session");
  const reloaded = await boot(beforeReload);
  assert.equal(appValue(reloaded.context, "currentView"), "lesson", "the lesson session should remain resumable after reload");
  assert.equal(appValue(reloaded.context, "currentStudySession().status"), "paused", "a persisted active timer must not count reload time");
  assert.equal(appValue(reloaded.context, "currentStudySession().activeMilliseconds"), savedMilliseconds, "reload should restore the exact accumulated active time");
  vm.runInContext("noteStudyActivity({ target: { closest() { return null; } } })", reloaded.context);
  advance(2_000);
  vm.runInContext("tickStudyTimer()", reloaded.context);
  assert.equal(appValue(reloaded.context, "currentStudySession().activeMilliseconds"), savedMilliseconds + 2_000, "a reloaded paused session should resume without resetting its clock");

  click(reloaded.context, "navigate", { view: "dashboard" });
  assert.equal(appValue(reloaded.context, "currentStudySession()"), null, "leaving the learning view should close the current time segment");
  assert.equal(reloaded.readState().studySessions.find((session) => session.id === savedSessionId).status, "completed", "the completed segment should remain in the local history");
  assert.equal(appValue(reloaded.context, "weekStats().find((day) => day.key === dateKey()).minutes"), 6, "the chart should report only measured active minutes");
  assert.equal(appValue(reloaded.context, "weekStats().find((day) => day.key === '2026-10-05').legacyEstimatedMinutes"), 20, "legacy estimates should remain separately available");

  vm.runInContext("exportProgress()", reloaded.context);
  const backup = JSON.parse(await reloaded.readExport());
  assert.ok(backup.studySessions.some((session) => session.id === savedSessionId), "the backup should include session-level time records");
  assert.ok(backup.studyDays.some((day) => day.date === "2026-07-01"), "the backup should retain long-term time history");
  const backupText = await reloaded.readExport();
  const restored = await boot();
  restored.context.__restoreEvent = { target: { id: "restore-file", files: [{ contents: backupText }], closest: () => null } };
  vm.runInContext("handleChange(__restoreEvent)", restored.context);
  const restoredState = restored.readState();
  assert.ok(restoredState.studySessions.some((session) => session.id === savedSessionId), "import should restore session-level time records");
  assert.ok(restoredState.studyDays.some((day) => day.date === "2026-07-01"), "import should restore records older than sixty days");
  assert.equal(restoredState.studyDays.find((day) => day.date === "2026-10-05").legacyEstimatedMinutes, 20, "import should preserve legacy estimates under their separate label");

  wallNow = new Date(2026, 9, 7, 23, 59, 30).getTime();
  monotonicNow = 0;
  const midnight = await boot();
  vm.runInContext(`openLesson(${JSON.stringify(lessonId)});`, midnight.context);
  advance(90_000);
  vm.runInContext("tickStudyTimer()", midnight.context);
  assert.equal(appValue(midnight.context, "studyDayRecord('2026-10-07').actualMilliseconds"), 30_000, "active time before local midnight should stay on the first day");
  assert.equal(appValue(midnight.context, "studyDayRecord('2026-10-08').actualMilliseconds"), 60_000, "active time after local midnight should roll into the next day");

  console.log("PASS: measured active time, five-minute idle pause, manual pause/resume, hidden-page pause, reload recovery, midnight splitting, actual-only weekly totals, separated legacy estimates, long-term retention, and backup export/import.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
