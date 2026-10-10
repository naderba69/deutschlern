#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const rootDir = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(rootDir, "app.js"), "utf8");
const courseData = JSON.parse(fs.readFileSync(path.join(rootDir, "data/course.json"), "utf8"));

function makeHarness(savedState) {
  let serialized = savedState ? JSON.stringify(savedState) : null;
  let exportedBlob = null;
  class FakeFileReader {
    readAsText(file) {
      this.result = file.contents;
      this.onload?.();
    }
  }
  const elements = {
    "app-root": { innerHTML: "", addEventListener() {} },
    toast: { textContent: "", classList: { add() {}, remove() {} } },
  };
  const context = {
    console,
    Date,
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
    URL: {
      createObjectURL: (blob) => { exportedBlob = blob; return "blob:daily-plan-test"; },
      revokeObjectURL() {},
    },
    setTimeout,
    clearTimeout,
    setInterval: () => 1,
    clearInterval() {},
    FileReader: FakeFileReader,
    document: {
      getElementById: (id) => elements[id] || { addEventListener() {} },
      body: { appendChild() {} },
      createElement: () => ({ href: "", download: "", click() {}, remove() {} }),
    },
    localStorage: {
      getItem: () => serialized,
      setItem: (_key, value) => { serialized = value; },
    },
    window: { addEventListener() {}, scrollTo() {}, confirm: () => true },
    navigator: {},
    location: { protocol: "file:", hostname: "" },
    fetch: async () => ({ ok: true, json: async () => JSON.parse(JSON.stringify(courseData)) }),
  };
  vm.createContext(context);
  vm.runInContext(appSource, context, { filename: "app.js" });
  return {
    context,
    elements,
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
  const fresh = await boot(null);
  const freshState = fresh.readState();
  assert.equal(freshState.profile.dailyGoal, 120, "two hours should be the editable starting estimate for a new learner");
  assert.equal(freshState.dailyPlan.date, appValue(fresh.context, "dateKey()"), "the current day plan should be initialized and saved locally");
  assert.deepEqual(freshState.dailyPlan.coreTasks.map((task) => task.kind), ["review", "lesson"], "the required sequence should begin with review and then one learning task");
  assert.equal(freshState.dailyPlan.coreTasks[0].noWork, true, "a new learner should not be asked to review words from lessons they have not studied");
  assert.equal(appValue(fresh.context, "dueWordsCount()"), 0, "review counts should include only studied vocabulary or words explicitly added for review");
  assert.equal(freshState.dailyPlan.coreTasks[1].targetId, courseData.lessons[0].id, "the plan should name the next accessible lesson");
  assert.equal(appValue(fresh.context, "dailyPlanCoreComplete()"), false, "unfinished core tasks must not unlock optional follow-up");
  assert.match(fresh.elements["app-root"].innerHTML, /خطة اليوم على قدر طاقتك/, "the dashboard should show the daily plan");
  assert.match(fresh.elements["app-root"].innerHTML, /الشرح وتدرّب/, "the learning task should say to study the explanation and practice");
  assert.match(fresh.elements["app-root"].innerHTML, /إثبات الإتقان|أثبت الإتقان/, "the learning task should require learning evidence");
  const settingsMarkup = appValue(fresh.context, "renderSettings()");
  assert.match(settingsMarkup, /type="number"/, "the daily estimate should accept values beyond the old fixed options");
  assert.match(settingsMarkup, /value="120"/, "two hours should be the initial estimate in settings");
  assert.match(settingsMarkup, /لا سقفًا/, "settings should make clear that the estimate is not a study limit");

  const seededState = fresh.readState();
  for (const lesson of courseData.lessons.slice(0, 2)) {
    seededState.completedLessons[lesson.id] = {
      score: 100,
      mastered: true,
      goalMet: true,
      performanceEvidenceCompleted: true,
      assessmentVersion: lesson.assessment.version,
    };
  }
  seededState.dailyPlan = null;
  const first = await boot(seededState);
  const initial = first.readState();
  assert.ok(appValue(first.context, "dueWordsCount()") > 0, "review should include words from previously learned lessons");
  assert.equal(initial.dailyPlan.coreTasks[0].status, "pending", "previously learned vocabulary should make the short review task due");
  assert.equal(initial.dailyPlan.coreTasks[1].targetId, courseData.lessons[2].id, "the plan should continue with the next unlocked lesson");

  click(first.context, "defer-daily-plan");
  assert.ok(first.readState().dailyPlan.coreTasks.every((task) => task.status === "deferred"), "the learner should be able to defer every unfinished core task");
  assert.match(first.elements["app-root"].innerHTML, /تعبت؟ رحّل الباقي/, "the plan should provide an explicit no-penalty pause action");

  const carriedState = first.readState();
  const yesterday = appValue(first.context, "addDaysToKey(dateKey(), -1)");
  carriedState.dailyPlan.date = yesterday;
  carriedState.dailyPlan.coreTasks.forEach((task) => { task.originDate = yesterday; task.carriedDays = 0; });
  const nextDay = await boot(carriedState);
  const carriedPlan = nextDay.readState().dailyPlan;
  assert.equal(carriedPlan.date, appValue(nextDay.context, "dateKey()"), "the plan should roll over to the current day");
  assert.ok(carriedPlan.coreTasks.every((task) => task.status === "pending"), "deferred work should return as resumable tasks on the next day");
  assert.ok(carriedPlan.coreTasks.every((task) => task.carriedDays === 1 && task.originDate === yesterday), "rollover should preserve where the unfinished tasks came from");
  assert.match(nextDay.elements["app-root"].innerHTML, /مُرحّل من/, "carried tasks should be visibly identified without blame");

  click(nextDay.context, "open-daily-task", { taskKey: "review" });
  assert.equal(appValue(nextDay.context, "currentView"), "review", "the review task should resume into its short review session");
  assert.ok(appValue(nextDay.context, "reviewSession.cards.length") <= 12, "the daily review task should remain short and capped at twelve cards per session");
  assert.equal(appValue(nextDay.context, "state.dailyPlan.coreTasks.find((task) => task.kind === 'review').status"), "pending", "opening a carried task should resume it");
  while (appValue(nextDay.context, "reviewSession.index < reviewSession.cards.length")) {
    vm.runInContext("reviewSession.revealed = true; rateCurrentWord('know');", nextDay.context);
  }
  assert.equal(appValue(nextDay.context, "state.dailyPlan.coreTasks.find((task) => task.kind === 'review').status"), "done", "finishing the short review batch should complete its core task");
  click(nextDay.context, "navigate", { view: "dashboard" });

  const lessonId = appValue(nextDay.context, "state.dailyPlan.coreTasks.find((task) => task.kind === 'lesson').targetId");
  const assessmentVersion = appValue(nextDay.context, `findLesson(${JSON.stringify(lessonId)}).assessment.version`);
  vm.runInContext(`state.completedLessons[${JSON.stringify(lessonId)}] = { score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true, assessmentVersion: ${JSON.stringify(assessmentVersion)} }; ensureDailyPlan();`, nextDay.context);
  assert.equal(appValue(nextDay.context, "dailyPlanCoreComplete()"), true, "the plan should finish only when review and the mastered learning objective are complete");
  const optionalLessonId = appValue(nextDay.context, "nextOptionalPlanStep().lesson.id");
  assert.notEqual(optionalLessonId, lessonId, "optional follow-up should be the next step, not a hidden prerequisite");
  assert.equal(appValue(nextDay.context, "state.dailyPlan.coreTasks.length"), 2, "optional follow-up should not be added to or required by the core plan");
  vm.runInContext("render()", nextDay.context);
  assert.match(nextDay.elements["app-root"].innerHTML, /توسّع اختياري/, "optional follow-up should appear after core completion");
  assert.match(nextDay.elements["app-root"].innerHTML, /تابع اختياريًا/, "the optional task should remain actionable");

  vm.runInContext("state.profile.dailyGoal = 180; saveState(); render();", nextDay.context);
  assert.match(nextDay.elements["app-root"].innerHTML, /3 ساعات/, "the plan should allow the guide to be raised beyond two hours");
  assert.equal(appValue(nextDay.context, "dailyPlanCoreComplete()"), true, "changing the time estimate must not alter or cap task completion");
  vm.runInContext("exportProgress()", nextDay.context);
  const backup = JSON.parse(await nextDay.readExport());
  assert.equal(backup.dailyPlan.date, carriedPlan.date, "the JSON backup should include the current daily plan");
  assert.equal(backup.dailyPlan.coreTasks.length, 2, "the backup should preserve its core tasks and completion state");

  const imported = await boot(null);
  imported.context.__testChangeEvent = { target: { id: "restore-file", files: [{ contents: JSON.stringify(backup) }], closest: () => null } };
  vm.runInContext("handleChange(__testChangeEvent)", imported.context);
  delete imported.context.__testChangeEvent;
  assert.deepEqual(imported.readState().dailyPlan.coreTasks.map((task) => task.status), ["done", "done"], "restoring a backup should keep the completed daily plan");

  console.log("PASS: review only covers due vocabulary from studied lessons, persistent daily plan, flexible estimate, task rollover/resume, optional follow-up, and JSON backup round-trip.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
