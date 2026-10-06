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
  let lastExportBlob = null;
  const downloads = [];
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
  class FakeAudio {
    constructor() { this.listeners = {}; }
    addEventListener(name, callback) { this.listeners[name] = callback; }
    play() { return Promise.resolve(); }
    pause() {}
  }
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
      createObjectURL: (blob) => { lastExportBlob = blob; return "blob:test-backup"; },
      revokeObjectURL() {},
    },
    setTimeout,
    clearTimeout,
    FileReader: FakeFileReader,
    document: {
      getElementById: (id) => elements[id] || { addEventListener() {} },
      body: { appendChild() {} },
      createElement: () => ({ href: "", download: "", click() { downloads.push(this.download); }, remove() {} }),
    },
    localStorage: {
      getItem: () => serialized,
      setItem: (_key, value) => { serialized = value; },
    },
    window: { addEventListener() {}, scrollTo() {}, confirm: () => true },
    navigator: {},
    Audio: FakeAudio,
    location: { protocol: "file:", hostname: "" },
    fetch: async () => ({ ok: true, json: async () => JSON.parse(JSON.stringify(courseData)) }),
  };
  vm.createContext(context);
  vm.runInContext(appSource, context, { filename: "app.js" });
  return {
    context,
    elements,
    readState: () => serialized ? JSON.parse(serialized) : null,
    readExport: async () => lastExportBlob ? lastExportBlob.text() : null,
    downloads,
  };
}

async function boot(savedState) {
  const harness = makeHarness(savedState);
  await new Promise((resolve) => setImmediate(resolve));
  return harness;
}

function click(context, action, data = {}) {
  const dataset = { action, ...Object.fromEntries(Object.entries(data).map(([key, value]) => [key, String(value)])) };
  context.__testClickEvent = { target: { closest: () => ({ dataset }) } };
  vm.runInContext("handleClick(__testClickEvent)", context);
  delete context.__testClickEvent;
}

function appValue(context, expression) {
  return vm.runInContext(expression, context);
}

(async () => {
  const lessonId = "a0-01-alphabet";
  const overview = await boot(null);
  vm.runInContext(`openLesson(${JSON.stringify(lessonId)});`, overview.context);
  const resumedOverview = await boot(overview.readState());
  assert.equal(appValue(resumedOverview.context, "currentView"), "lesson", "reloading from lesson content should restore the open lesson");
  assert.equal(appValue(resumedOverview.context, "lessonSession.mode"), "overview", "the saved lesson step should return to its overview");

  const first = await boot(null);
  vm.runInContext(`openLesson(${JSON.stringify(lessonId)}); beginQuiz();`, first.context);
  assert.equal(appValue(first.context, "currentView"), "lesson", "opening a lesson should set the resumable lesson route");
  assert.equal(appValue(first.context, "lessonSession.mode"), "quiz", "starting mastery assessment should enter quiz mode");

  const firstCorrect = appValue(first.context, "course.lessons[0].quiz[0].answerIndex");
  click(first.context, "select-lesson-answer", { index: firstCorrect });
  click(first.context, "check-lesson-answer");
  click(first.context, "next-lesson-question");
  const selectedSecond = 0;
  click(first.context, "select-lesson-answer", { index: selectedSecond });

  const firstSaved = first.readState();
  const firstSnapshot = firstSaved.learningSessions.lessons[lessonId];
  assert.equal(firstSaved.learningSessions.currentView, "lesson", "the current lesson route should be saved locally");
  assert.deepEqual(firstSaved.learningSessions.active, { type: "lesson", id: lessonId }, "the active lesson should be included in the local backup data");
  assert.equal(firstSnapshot.questionIndex, 1, "the current question number should be saved");
  assert.equal(firstSnapshot.selected, selectedSecond, "the current selection should be saved before checking it");
  assert.equal(firstSnapshot.checked, false, "the answer-check state should be saved");
  assert.equal(firstSnapshot.answers.length, 1, "answers from completed questions should be retained");
  assert.equal(firstSnapshot.correct, 1, "the accumulated score should be retained");

  vm.runInContext("exportProgress()", first.context);
  const backupJson = await first.readExport();
  const exportedBackup = JSON.parse(backupJson);
  assert.equal(exportedBackup.learningSessions.lessons[lessonId].questionIndex, 1, "downloading a backup should include the current lesson position");
  assert.ok(first.downloads[0]?.endsWith(".json"), "the session backup should download as a JSON file");
  const imported = await boot(null);
  imported.context.__testChangeEvent = {
    target: { id: "restore-file", files: [{ contents: backupJson }], closest: () => null },
  };
  vm.runInContext("handleChange(__testChangeEvent)", imported.context);
  delete imported.context.__testChangeEvent;
  assert.equal(appValue(imported.context, "currentView"), "lesson", "restoring a backup should resume its saved lesson screen");
  assert.equal(appValue(imported.context, "lessonSession.questionIndex"), 1, "restoring a backup should recover the exact question");
  assert.equal(appValue(imported.context, "lessonSession.selected"), selectedSecond, "restoring a backup should recover the selected answer");

  const resumed = await boot(firstSaved);
  assert.equal(appValue(resumed.context, "currentView"), "lesson", "reloading during a lesson should restore the same screen");
  assert.equal(appValue(resumed.context, "lessonSession.questionIndex"), 1, "reloading should restore the current question");
  assert.equal(appValue(resumed.context, "lessonSession.selected"), selectedSecond, "reloading should restore the selected answer");
  assert.equal(appValue(resumed.context, "lessonSession.answers.length"), 1, "reloading should restore the answer history");
  assert.equal(appValue(resumed.context, "lessonSession.correct"), 1, "reloading should restore the running score");
  assert.match(resumed.elements["app-root"].innerHTML, /class="quiz-option selected"/, "the saved selection should be visibly selected after reload");

  click(resumed.context, "quiz-exit");
  assert.equal(appValue(resumed.context, "lessonSession.mode"), "overview", "leaving the quiz should show the lesson overview");
  assert.equal(appValue(resumed.context, "lessonSession.pausedMode"), "quiz", "the in-progress quiz should remain resumable from the overview");
  assert.match(resumed.elements["app-root"].innerHTML, /استأنف التقييم/, "the overview should label the saved assessment as resumable");
  const paused = await boot(resumed.readState());
  assert.equal(appValue(paused.context, "currentView"), "lesson", "a paused quiz should keep the lesson route on reload");
  assert.equal(appValue(paused.context, "lessonSession.pausedMode"), "quiz", "the paused mode should survive reload");
  click(paused.context, "begin-quiz");
  assert.equal(appValue(paused.context, "lessonSession.mode"), "quiz", "the resume control should continue rather than reset the quiz");
  assert.equal(appValue(paused.context, "lessonSession.questionIndex"), 1, "resuming should keep the same question");
  assert.equal(appValue(paused.context, "lessonSession.selected"), selectedSecond, "resuming should keep the selected answer");

  for (let questionIndex = 1; questionIndex < 10; questionIndex += 1) {
    const answer = appValue(paused.context, `course.lessons[0].quiz[${questionIndex}].answerIndex`);
    click(paused.context, "select-lesson-answer", { index: answer });
    click(paused.context, "check-lesson-answer");
    click(paused.context, "next-lesson-question");
  }
  assert.equal(appValue(paused.context, "lessonSession.mode"), "performance", "a qualifying assessment should restore into the practical-task step");
  assert.equal(appValue(paused.context, "lessonSession.answers.length"), 10, "the full answer history should remain attached to the performance step");
  const task = courseData.lessons.find((lesson) => lesson.id === lessonId).performanceTasks[0];
  vm.runInContext(`
    savePerformanceEvidence('lesson:${lessonId}', course.lessons[0].assessment.version, ${JSON.stringify(task.id)}, {
      response: 'Ich heiße Lina und buchstabiere meinen Namen.',
      checks: { taskCompletion: true, meaningClarity: true, targetSkill: true },
      spokenAloud: true
    });
    completePerformanceTask('lesson:${lessonId}', course.lessons[0].assessment.version, ${JSON.stringify(task.id)});
  `, paused.context);
  assert.match(paused.elements["app-root"].innerHTML, /1 من 2 مهام مكتملة/, "completed and remaining practical tasks should be visible before reload");

  const afterPerformanceReload = await boot(paused.readState());
  assert.equal(appValue(afterPerformanceReload.context, "currentView"), "lesson", "reloading during practical tasks should return to the lesson");
  assert.equal(appValue(afterPerformanceReload.context, "lessonSession.mode"), "performance", "the practical-task step should be restored");
  assert.equal(appValue(afterPerformanceReload.context, "lessonSession.correct"), 10, "the assessment score should persist into the practical step");
  assert.equal(appValue(afterPerformanceReload.context, `performanceEvidenceFor('lesson:${lessonId}', course.lessons[0].assessment.version, ${JSON.stringify(task.id)}).completed`), true, "completed performance evidence should remain locally saved");
  assert.match(afterPerformanceReload.elements["app-root"].innerHTML, /1 من 2 مهام مكتملة/, "remaining practical tasks should be recalculated after reload");

  vm.runInContext(`
    for (const lesson of getLessonsInLevel('A0')) {
      state.completedLessons[lesson.id] = {
        score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
        assessmentVersion: lesson.assessment.version,
      };
    }
    startA0GateQuiz();
  `, afterPerformanceReload.context);
  const gateCorrect = appValue(afterPerformanceReload.context, "course.a0TransitionCheck.quiz[0].answerIndex");
  click(afterPerformanceReload.context, "select-gate-answer", { index: gateCorrect });
  click(afterPerformanceReload.context, "check-gate-answer");
  click(afterPerformanceReload.context, "next-gate-question");
  click(afterPerformanceReload.context, "select-gate-answer", { index: 0 });
  const gateSaved = afterPerformanceReload.readState();
  assert.equal(gateSaved.learningSessions.active.type, "gate", "the active A0 gate should be recorded separately");
  assert.equal(gateSaved.learningSessions.gate.questionIndex, 1, "the gate question number should be saved");
  assert.equal(gateSaved.learningSessions.gate.answers.length, 1, "the gate answer history should be saved");

  const resumedGate = await boot(gateSaved);
  assert.equal(appValue(resumedGate.context, "currentView"), "a0-gate", "reloading during the transition gate should restore its screen");
  assert.equal(appValue(resumedGate.context, "gateSession.questionIndex"), 1, "the transition gate should restore its current question");
  assert.equal(appValue(resumedGate.context, "gateSession.selected"), 0, "the transition gate should restore the current selection");
  assert.equal(appValue(resumedGate.context, "gateSession.answers.length"), 1, "the transition gate should restore prior answers");

  const staleState = JSON.parse(JSON.stringify(firstSaved));
  staleState.learningSessions.lessons[lessonId].assessmentVersion = "old-version";
  staleState.learningSessions.currentView = "lesson";
  staleState.learningSessions.active = { type: "lesson", id: lessonId };
  const staleResume = await boot(staleState);
  assert.equal(appValue(staleResume.context, "currentView"), "dashboard", "a session from a different assessment version should not be resumed");
  assert.equal(appValue(staleResume.context, "lessonSession"), null, "a stale question state should be discarded safely");

  console.log("PASS: local lesson and A0-gate session persistence, exact question/answer resumption, paused quiz continuation, practical-task progress, JSON backup export/import round-trip, and stale-assessment rejection.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
