#!/usr/bin/env node
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const rootDir = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(rootDir, "app.js"), "utf8");
const courseData = JSON.parse(fs.readFileSync(path.join(rootDir, "data/course.json"), "utf8"));
const savedState = {
  profile: { name: "اختبار", dailyGoal: 15, focus: "الدراسة", startLevel: "B2", placementScore: 5 },
  completedLessons: {
    "a0-01-alphabet": { score: null, completedAt: "2026-01-01" },
    "a0-02-greetings": { score: 100, completedAt: "2026-01-02" },
    "a1-lesson-01": { score: 100, completedAt: "2026-01-03" },
  },
  wordReviews: {},
  studyDays: [],
};
const elements = {
  "app-root": { innerHTML: "", addEventListener() {} },
  toast: { textContent: "", classList: { add() {}, remove() {} } },
};
class FakeAudio {
  static instances = [];
  constructor(src) { this.src = src; this.listeners = {}; this.playbackRate = 1; this.preservesPitch = false; FakeAudio.instances.push(this); }
  addEventListener(name, callback) { this.listeners[name] = callback; }
  play() { this.started = true; return Promise.resolve(); }
  pause() { this.paused = true; }
  emit(name) { this.listeners[name]?.(); }
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
  URL,
  setTimeout,
  clearTimeout,
  document: { getElementById: (id) => elements[id] || { addEventListener() {} } },
  localStorage: {
    getItem: () => JSON.stringify(savedState),
    setItem() {},
  },
  window: { addEventListener() {}, scrollTo() {}, confirm: () => true },
  navigator: {},
  Audio: FakeAudio,
  location: { protocol: "file:", hostname: "" },
  fetch: async () => ({ ok: true, json: async () => structuredClone(courseData) }),
};
vm.createContext(context);
vm.runInContext(appSource, context, { filename: "app.js" });

(async () => {
  await new Promise((resolve) => setImmediate(resolve));

  assert.equal(vm.runInContext("state.profile.startLevel", context), "A0", "legacy start level must be pinned to A0");
  assert.equal(vm.runInContext("state.profile.placementScore", context), undefined, "legacy placement data must be discarded");
  assert.equal(vm.runInContext("course.diagnostic", context), undefined, "placement questions must not ship in the app bundle");
  assert.equal(vm.runInContext("totalCompleted()", context), 0, "manual/legacy completion records must not count as mastery");
  assert.equal(vm.runInContext("course.lessons[0].quiz.length", context), 10, "the first A0 assessment must build from its source sidecar");
  assert.equal(vm.runInContext("course.lessons[0].performanceTasks.length", context), 2, "local performance tasks and rubrics must be carried into the bundle");
  assert.equal(vm.runInContext("lessonAssessmentReady(course.lessons[0])", context), true, "the no-audio local assessment path must be available after review");
  assert.equal(vm.runInContext("course.lessons[0].performanceTasks.every((task) => task.selfCheck.audioRequired === false)", context), true, "A0 assessments must not depend on audio during the content-production batch");
  assert.equal(vm.runInContext("course.audioAssets.length", context), 72, "the generated A0, A1, and current A2 audio assets must be carried into the course bundle");
  assert.equal(courseData.audioAssets.reduce((count, asset) => count + asset.segments.length, 0), 160, "the audio manifest must contain all one hundred sixty generated clips");
  const expectedAudioLessonByPrefix = {
    "DL-A0-01": "a0-01-alphabet",
    "DL-A0-02": "a0-02-greetings",
    "DL-A0-03": "a0-03-numbers-personal-info",
    "DL-A0-04": "a0-04-first-sentences",
    "DL-A0-05": "a0-05-classroom-phrases",
    "DL-A0-GATE": "a0-a1-gate",
    "DL-A1-01": "a1-01-introductions-languages-hobbies",
    "DL-A1-02": "a1-02-work-family",
    "DL-A1-03": "a1-03-city-cafe-hotel",
    "DL-A1-04": "a1-04-daily-routine-time",
    "DL-A1-05": "a1-05-food-drink",
    "DL-A1-06": "a1-06-yesterday-perfekt",
    "DL-A1-07": "a1-07-travel-weather",
    "DL-A1-08": "a1-08-shopping-clothes",
    "DL-A1-09": "a1-09-work-appointments",
    "DL-A1-10": "a1-10-hobbies-health",
    "DL-A1-11": "a1-11-home-directions",
    "DL-A1-12": "a1-12-trip-invitations",
    "DL-A2-01": "a2-01-routines-abilities-experiences",
    "DL-A2-02": "a2-02-travel-comparisons",
    "DL-A2-03": "a2-03-food-nutrition-shopping",
    "DL-A2-04": "a2-04-office-phone-appointments",
    "DL-A2-05": "a2-05-training-routine-wenn",
    "DL-A2-06": "a2-06-family-happiness-gifts",
  };
  for (const asset of courseData.audioAssets) {
    const prefix = asset.assetId.split("-").slice(0, 3).join("-");
    assert.equal(asset.lessonId, expectedAudioLessonByPrefix[prefix], `${asset.assetId} must be assigned to its exact lesson`);
    for (const segment of asset.segments) {
      const fileStem = segment.src.split("/").pop().replace(/\.mp3$/i, "");
      assert.ok(fileStem === asset.assetId || fileStem.startsWith(`${asset.assetId}-`), `${segment.src} must belong to ${asset.assetId}`);
    }
  }
  const audioMarkupByLesson = Object.fromEntries(Object.values(expectedAudioLessonByPrefix).map((lessonId) => [
    lessonId,
    vm.runInContext(`renderAudioAssets(${JSON.stringify(lessonId)})`, context),
  ]));
  for (const asset of courseData.audioAssets) {
    assert.ok(audioMarkupByLesson[asset.lessonId]?.includes(asset.title), `${asset.assetId} must be visible in its assigned lesson in final form`);
    assert.ok(audioMarkupByLesson[asset.lessonId].includes('نهائي'), `${asset.assetId} must carry the final label`);
    assert.ok(!audioMarkupByLesson[asset.lessonId].includes('للمراجعة'), `${asset.assetId} must not show a review label in its assigned lesson`);
    for (const [lessonId, markup] of Object.entries(audioMarkupByLesson)) {
      if (lessonId !== asset.lessonId) assert.ok(!markup.includes(asset.title), `${asset.assetId} must not appear in ${lessonId}`);
    }
  }
  const a1KarimVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A1-01-AUD-LST-01").segments.find((segment) => segment.speaker === "Karim").voiceId;
  const a2KarimVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-01-AUD-DLG-01").segments.find((segment) => segment.speaker === "Karim").voiceId;
  assert.equal(a2KarimVoice, a1KarimVoice, "Karim must keep the same selected voice across A1 and A2");
  const a2TravelDialogue = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-02-AUD-DLG-01");
  assert.equal(a2TravelDialogue.segments.find((segment) => segment.speaker === "Lea").voiceId, "voice-02", "Lea must keep her selected feminine voice throughout the dialogue");
  assert.equal(a2TravelDialogue.segments.find((segment) => segment.speaker === "Ben").voiceId, "voice-03", "Ben must keep his selected masculine voice throughout the dialogue");
  const a2FoodAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-03-"));
  assert.equal(a2FoodAssets.length, 4, "A2.3's approved batch must expose four linked lesson assets");
  assert.equal(a2FoodAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.3 must expose all ten generated clips");
  const a2FoodDialogue = a2FoodAssets.find((asset) => asset.assetId === "DL-A2-03-AUD-DLG-01");
  assert.equal(a2FoodDialogue.segments.length, 7, "the restaurant dialogue must keep all seven source turns");
  assert.ok(a2FoodDialogue.segments.filter((segment) => segment.speaker === "Kellnerin").every((segment) => segment.voiceId === "voice-02"), "Kellnerin must keep the selected feminine voice throughout the dialogue");
  assert.ok(a2FoodDialogue.segments.filter((segment) => segment.speaker === "Gast").every((segment) => segment.voiceId === "voice-03"), "Gast must keep the selected masculine voice throughout the dialogue");
  const a2OfficeAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-04-"));
  assert.equal(a2OfficeAssets.length, 4, "A2.4's approved batch must expose four linked lesson assets");
  assert.equal(a2OfficeAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.4 must expose all ten generated clips");
  const a2OfficeDialogue = a2OfficeAssets.find((asset) => asset.assetId === "DL-A2-04-AUD-DLG-01");
  assert.equal(a2OfficeDialogue.segments.length, 7, "the phone dialogue must keep all seven source turns");
  assert.ok(a2OfficeDialogue.segments.filter((segment) => segment.speaker === "Amal").every((segment) => segment.voiceId === "voice-00"), "Amal must keep the same selected voice in the dialogue");
  assert.ok(a2OfficeDialogue.segments.filter((segment) => segment.speaker === "Mitarbeiter").every((segment) => segment.voiceId === "voice-02"), "Mitarbeiter must retain the established selected voice across lessons");
  for (const asset of a2OfficeAssets.filter((item) => item.assetId !== "DL-A2-04-AUD-PHR-01")) {
    for (const segment of asset.segments.filter((item) => item.speaker === "Amal")) assert.equal(segment.voiceId, "voice-00", "Amal's dialogue, reading, and listening tracks must stay voice-consistent");
  }
  const a2TrainingAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-05-"));
  assert.equal(a2TrainingAssets.length, 5, "A2.5's audio batch must expose five linked lesson assets");
  assert.equal(a2TrainingAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.5 must expose all ten generated clips");
  const a2TrainingDialogue = a2TrainingAssets.find((asset) => asset.assetId === "DL-A2-05-AUD-DLG-01");
  assert.equal(a2TrainingDialogue.segments.length, 6, "the training dialogue must keep all six source turns");
  assert.ok(a2TrainingDialogue.segments.filter((segment) => segment.speaker === "Mira").every((segment) => segment.voiceId === "voice-02"), "Mira must retain her selected feminine voice");
  assert.ok(a2TrainingDialogue.segments.filter((segment) => segment.speaker === "Rami").every((segment) => segment.voiceId === "voice-03"), "Rami must retain his selected masculine voice in the dialogue");
  const a2TrainingReading = a2TrainingAssets.find((asset) => asset.assetId === "DL-A2-05-AUD-READ-01");
  assert.equal(a2TrainingReading.segments[0].voiceId, "voice-03", "Rami must keep the same voice in the reading and dialogue");
  const a2FamilyAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-06-"));
  assert.equal(a2FamilyAssets.length, 5, "A2.6's audio batch must expose five linked lesson assets");
  assert.equal(a2FamilyAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.6 must expose all ten generated clips");
  const a2FamilyDialogue = a2FamilyAssets.find((asset) => asset.assetId === "DL-A2-06-AUD-DLG-01");
  assert.equal(a2FamilyDialogue.segments.length, 6, "the family dialogue must keep all six source turns");
  assert.ok(a2FamilyDialogue.segments.filter((segment) => segment.speaker === "Mariam").every((segment) => segment.voiceId === "voice-02"), "Mariam must retain one selected voice throughout the dialogue");
  assert.ok(a2FamilyDialogue.segments.filter((segment) => segment.speaker === "Sami").every((segment) => segment.voiceId === "voice-03"), "Sami must retain one selected voice throughout the dialogue");
  assert.equal(a2FamilyDialogue.segments[5].text, "Ich glaube, dass der Abend schön wird.", "A2.6 audio must follow the corrected future-event source sentence");
  assert.equal(a2FamilyAssets.find((asset) => asset.assetId === "DL-A2-06-AUD-READ-01").segments[0].voiceId, "voice-02", "the A2.6 reading must retain the selected narrator voice");
  assert.equal(a2FamilyAssets.find((asset) => asset.assetId === "DL-A2-06-AUD-LST-01").segments[0].voiceId, "voice-03", "A2.6 listening must retain the established listening narrator voice");
  assert.equal(vm.runInContext("course.audioAssets.every((asset) => asset.status === 'ready')", context), true, "all generated audio assets must carry their final ready status");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), "a0-01-alphabet", "the first required step must be A0.1");
  assert.equal(vm.runInContext("isLessonAccessible(course.lessons[0])", context), true, "the first A0 lesson must be accessible");
  assert.equal(vm.runInContext("isLessonAccessible(course.lessons[1])", context), false, "later A0 lessons must remain sequentially locked");
  assert.equal(vm.runInContext("isLevelUnlocked('A1')", context), false, "A1 must start locked");
  assert.equal(vm.runInContext("typeof completeLesson", context), "undefined", "there must be no manual completion function");
  assert.match(elements["app-root"].innerHTML, /يبدأ المسار من A0/);
  assert.doesNotMatch(elements["app-root"].innerHTML, /اختبار تحديد المستوى|data-action=\"complete-lesson\"/);
  vm.runInContext("openLesson(course.lessons[1].id)", context);
  assert.equal(vm.runInContext("lessonSession", context), null, "opening a later lesson must be rejected by the app logic");
  vm.runInContext("openLesson(course.lessons[0].id)", context);
  const alphabetLessonAudio = vm.runInContext("renderAudioAssets('a0-01-alphabet')", context);
  const greetingLessonAudio = vm.runInContext("renderAudioAssets('a0-02-greetings')", context);
  assert.match(alphabetLessonAudio, /أسماء الحروف الألمانية/);
  assert.doesNotMatch(alphabetLessonAudio, /عبارات التحية والتعارف/, "a lesson must not receive another lesson's recording");
  assert.match(greetingLessonAudio, /عبارات التحية والتعارف/);
  assert.doesNotMatch(greetingLessonAudio, /أسماء الحروف الألمانية/, "recordings must appear only in their assigned lesson");
  assert.match(alphabetLessonAudio, /النسخة النهائية/);
  assert.match(alphabetLessonAudio, /نهائي/);
  assert.doesNotMatch(alphabetLessonAudio, /للمراجعة/);
  assert.match(elements["app-root"].innerHTML, /استمع بالسرعة الطبيعية/);
  assert.match(elements["app-root"].innerHTML, /استمع ببطء/);
  const finalClipStart = FakeAudio.instances.length;
  vm.runInContext("playAudioAsset('DL-A0-01-AUD-ABC-01', 1)", context);
  assert.ok(FakeAudio.instances[finalClipStart]?.started, "final recordings must be playable");
  FakeAudio.instances[finalClipStart].emit("ended");
  const pendingClipStart = FakeAudio.instances.length;
  vm.runInContext(`
    course.audioAssets[0].status = 'generated_pending_acoustic_review';
    playAudioAsset('DL-A0-01-AUD-ABC-01', 1);
  `, context);
  assert.ok(FakeAudio.instances[pendingClipStart]?.started, "pending recordings must remain playable when that state is used");
  FakeAudio.instances[pendingClipStart].emit("ended");
  vm.runInContext("course.audioAssets[0].status = 'ready'", context);
  vm.runInContext(`
    lessonSession = null;
    currentView = 'dashboard';
    render();
  `, context);
  assert.doesNotMatch(elements["app-root"].innerHTML, /استمع بالسرعة الطبيعية/, "lesson recordings must not appear outside their assigned lesson");
  const dialogueAudioStart = FakeAudio.instances.length;
  vm.runInContext(`
    course.audioAssets.find((asset) => asset.assetId === 'DL-A0-02-AUD-DLG-01').status = 'generated_pending_acoustic_review';
    playAudioAsset('DL-A0-02-AUD-DLG-01', 0.8);
  `, context);
  for (let index = dialogueAudioStart; index < dialogueAudioStart + 4; index += 1) {
    const clip = FakeAudio.instances[index];
    assert.ok(clip?.started, `audio dialogue segment ${index - dialogueAudioStart + 1} should start`);
    assert.equal(clip.playbackRate, 0.8, "slow listening must use the requested rate");
    assert.equal(clip.preservesPitch, true, "slow playback should preserve pitch when supported");
    clip.emit("ended");
  }
  assert.equal(FakeAudio.instances.length - dialogueAudioStart, 4, "dialogue segments must play in order, not overlap");
  const gateAudioStart = FakeAudio.instances.length;
  vm.runInContext(`course.audioAssets.find((asset) => asset.assetId === 'DL-A0-GATE-AUD-LST-01').status = 'generated_pending_acoustic_review'`, context);
  const gateAudioBeforeListen = vm.runInContext("renderAudioAssets('a0-a1-gate')", context);
  assert.match(gateAudioBeforeListen, /سيظهر النص بعد الاستماع/);
  assert.doesNotMatch(gateAudioBeforeListen, /Guten Tag! Ich heiße Nora/);
  vm.runInContext("playAudioAsset('DL-A0-GATE-AUD-LST-01', 1)", context);
  FakeAudio.instances[gateAudioStart].emit("ended");
  const gateAudioAfterListen = vm.runInContext("renderAudioAssets('a0-a1-gate')", context);
  assert.match(gateAudioAfterListen, /Guten Tag! Ich heiße Nora/);
  vm.runInContext(`
    stopAudioPlayback();
    course.audioAssets.find((asset) => asset.assetId === 'DL-A0-02-AUD-DLG-01').status = 'generated_pending_acoustic_review';
    course.audioAssets.find((asset) => asset.assetId === 'DL-A0-GATE-AUD-LST-01').status = 'not_generated';
  `, context);

  const assessmentSetup = `
    function readyAssessment(version, objectiveIds, minimumItems = 10) {
      return { status: 'ready', version, minimumScore: 80, minimumItems, objectiveIds, goalCriteriaVerified: true, performanceEvidenceRequired: false, performanceEvidenceImplemented: false };
    }
    function readyQuestions(objectiveIds) {
      return Array.from({ length: 10 }, (_, index) => ({
        prompt: 'سؤال ' + index,
        options: ['صحيح', 'بديل'],
        answerIndex: 0,
        explanation: 'تفسير واضح.',
        objectiveIds: [objectiveIds[index % objectiveIds.length]],
      }));
    }
    for (const lesson of getLessonsInLevel('A0')) {
      lesson.assessment = readyAssessment('v1-' + lesson.id, ['ziel-' + lesson.id]);
      lesson.quiz = readyQuestions(lesson.assessment.objectiveIds);
    }
    course.a0TransitionCheck.assessment = readyAssessment('gate-v1', ['gate-objective']);
    course.a0TransitionCheck.quiz = readyQuestions(course.a0TransitionCheck.assessment.objectiveIds);
  `;
  vm.runInContext(assessmentSetup, context);
  vm.runInContext(`
    course.lessons[0].assessment.performanceEvidenceRequired = true;
    course.lessons[0].assessment.performanceEvidenceImplemented = false;
  `, context);
  assert.equal(vm.runInContext("lessonAssessmentReady(course.lessons[0])", context), false, "a lesson requiring practical evidence must stay closed until its assessment path exists");
  vm.runInContext(`
    course.lessons[0].assessment.performanceEvidenceImplemented = true;
    course.lessons[0].performanceTasks[0].evaluationStatus = 'blocked';
  `, context);
  assert.equal(vm.runInContext("lessonAssessmentReady(course.lessons[0])", context), false, "a required assessment must stay closed while its performance tasks are blocked");
  vm.runInContext(`
    course.lessons[0].performanceTasks = [{
      id: 'test-task', modality: ['speaking'], evaluationStatus: 'ready',
      criteria: { taskCompletion: 'done', meaningClarity: 'clear', targetSkill: 'used' },
      selfCheck: { method: 'local_self_check', requiredChecks: ['taskCompletion', 'meaningClarity', 'targetSkill'], minimumResponseCharacters: 12, speakAloud: true, audioRequired: false }
    }];
  `, context);
  assert.equal(vm.runInContext("lessonAssessmentReady(course.lessons[0])", context), true, "the assessment may open once its no-cost local performance path is ready");
  vm.runInContext("lessonSession = { id: 'a0-01-alphabet', correct: 10, completed: false }; currentView = 'lesson'; finishLesson(course.lessons[0]);", context);
  assert.equal(vm.runInContext("lessonSession.mode", context), 'performance', "a high quiz score must lead to the practical self-check");
  assert.equal(vm.runInContext("state.completedLessons['a0-01-alphabet']?.mastered === true", context), false, "a high quiz score must not pass before practical self-checks");
  assert.equal(vm.runInContext("isLessonAccessible(course.lessons[1])", context), false, "missing practical evidence must keep the next lesson locked");
  assert.match(elements["app-root"].innerHTML, /طبّق ما تعلمته/);
  vm.runInContext(`
    savePerformanceEvidence('lesson:a0-01-alphabet', course.lessons[0].assessment.version, 'test-task', {
      response: 'قصير', checks: { taskCompletion: true, meaningClarity: true, targetSkill: true }, spokenAloud: true
    });
    completePerformanceTask('lesson:a0-01-alphabet', course.lessons[0].assessment.version, 'test-task');
  `, context);
  assert.equal(vm.runInContext("performanceEvidenceFor('lesson:a0-01-alphabet', course.lessons[0].assessment.version, 'test-task').completed", context), false, "a short response must not pass the task self-check");
  const localEvidence = `
    savePerformanceEvidence('lesson:a0-01-alphabet', course.lessons[0].assessment.version, 'test-task', {
      response: 'Ich heiße Lina und buchstabiere meinen Namen.',
      checks: { taskCompletion: true, meaningClarity: true, targetSkill: true },
      spokenAloud: true
    });
    completePerformanceTask('lesson:a0-01-alphabet', course.lessons[0].assessment.version, 'test-task');
    finishLessonPerformance();
  `;
  vm.runInContext(localEvidence, context);
  assert.equal(vm.runInContext("isLessonMastered(course.lessons[0])", context), true, "mastery must require completed local performance evidence when configured");
  assert.equal(vm.runInContext("isLessonAccessible(course.lessons[1])", context), true, "verified practical evidence plus quiz mastery may unlock the next lesson");
  vm.runInContext(`
    delete state.completedLessons['a0-01-alphabet'];
    delete state.performanceEvidence['lesson:a0-01-alphabet'];
    course.lessons[0].assessment.performanceEvidenceRequired = false;
    course.lessons[0].assessment.performanceEvidenceImplemented = false;
    course.lessons[0].performanceTasks = [];
    lessonSession = null;
    state.xp = 0;
    state.studyDays = [];
  `, context);
  assert.equal(vm.runInContext("totalCompleted()", context), 0, "temporary performance-evidence fixture must not leak into progression tests");
  assert.equal(vm.runInContext("meetsMasteryThreshold(35, 44)", context), false, "rounding 79.55 percent must not accidentally pass the 80 percent threshold");
  assert.equal(vm.runInContext("meetsMasteryThreshold(36, 44)", context), true, "the raw score must pass once it reaches 80 percent");

  const firstLessonId = "a0-01-alphabet";
  vm.runInContext(`lessonSession = { id: '${firstLessonId}', correct: 7, completed: false }; finishLesson(course.lessons[0]);`, context);
  assert.equal(vm.runInContext("state.completedLessons['a0-01-alphabet'].mastered", context), false, "70 percent must not satisfy mastery");
  assert.equal(vm.runInContext("totalCompleted()", context), 0, "a failed attempt must remain in progress");
  vm.runInContext(`lessonSession = { id: '${firstLessonId}', correct: 8, completed: false }; finishLesson(course.lessons[0]);`, context);
  assert.equal(vm.runInContext("state.completedLessons['a0-01-alphabet'].score", context), 80, "the passing score must be retained");
  assert.equal(vm.runInContext("isLessonMastered(course.lessons[0])", context), true, "80 percent plus verified goal evidence must satisfy mastery");
  assert.equal(vm.runInContext("isLessonAccessible(course.lessons[1])", context), true, "mastery must unlock only the next lesson");
  assert.equal(vm.runInContext("isLessonAccessible(course.lessons[2])", context), false, "mastery must not unlock lessons out of sequence");

  vm.runInContext(`
    for (const lesson of getLessonsInLevel('A0')) {
      if (lesson.id !== '${firstLessonId}') state.completedLessons[lesson.id] = { score: 80, mastered: true, goalMet: true, assessmentVersion: lesson.assessment.version };
    }
  `, context);
  assert.equal(vm.runInContext("nextLearningStep().type", context), "a0-gate", "A0 completion must lead to a separate final gate");
  assert.equal(vm.runInContext("isLevelUnlocked('A1')", context), false, "A0 lesson completion alone must not open A1");
  vm.runInContext("currentView = 'level'; selectedLevel = 'A0'; render();", context);
  assert.match(elements["app-root"].innerHTML, /data-action=\"begin-a0-gate\"/, "the ready A0 gate must be available after all five lessons");
  vm.runInContext("startA0GateQuiz()", context);
  assert.equal(vm.runInContext("currentView", context), "a0-gate", "the A0 final gate must open in its own assessment view");
  assert.match(elements["app-root"].innerHTML, /تقييم ختامي · A0/);
  vm.runInContext("gateSession = { mode: 'quiz', correct: 7, completed: false }; finishA0Gate(course.a0TransitionCheck);", context);
  assert.equal(vm.runInContext("isLevelUnlocked('A1')", context), false, "70 percent on the transition gate must not open A1");
  vm.runInContext("gateSession = { mode: 'quiz', correct: 8, completed: false }; finishA0Gate(course.a0TransitionCheck);", context);
  assert.equal(vm.runInContext("isLevelUnlocked('A1')", context), true, "A1 must unlock only after an 80 percent A0 gate result");
  vm.runInContext(`
    course.a0TransitionCheck.assessment.performanceEvidenceRequired = true;
    course.a0TransitionCheck.assessment.performanceEvidenceImplemented = true;
    course.a0TransitionCheck.performanceTasks = [{
      id: 'gate-task-test', modality: [], evaluationStatus: 'ready',
      selfCheck: { method: 'local_self_check', requiredChecks: ['taskCompletion', 'meaningClarity', 'targetSkill'], minimumResponseCharacters: 12, speakAloud: false, audioRequired: false }
    }];
    state.levelChecks['A0-A1'].performanceEvidenceCompleted = false;
  `, context);
  assert.equal(vm.runInContext("isA0TransitionMastered()", context), false, "the A0 gate must not count as mastered without required practical evidence");
  assert.equal(vm.runInContext("isLevelUnlocked('A1')", context), false, "A1 must remain locked when gate performance evidence is missing");
  vm.runInContext("state.levelChecks['A0-A1'].performanceEvidenceCompleted = true", context);
  assert.equal(vm.runInContext("isA0TransitionMastered()", context), true, "the gate must be recognized after its evidence is recorded");
  assert.equal(vm.runInContext("isLevelUnlocked('A1')", context), true, "A1 may unlock only after the quiz and practical gate evidence are recorded");
  const a1Lessons = vm.runInContext("getLessonsInLevel('A1')", context);
  assert.equal(a1Lessons.length, 12, "the assessment batch must cover all twelve A1 lessons");
  for (const lesson of a1Lessons) {
    assert.equal(lesson.assessment?.status, "ready", `${lesson.id} must have a ready assessment`);
    assert.equal(lesson.quiz?.length, 10, `${lesson.id} must have ten scored questions`);
    assert.equal(lesson.performanceTasks?.length, 2, `${lesson.id} must have two practical self-check tasks`);
    assert.equal(lesson.performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.audioRequired === false), true, `${lesson.id} tasks must work locally without audio`);
  }
  const a2Lessons = vm.runInContext("getLessonsInLevel('A2')", context);
  assert.equal(a2Lessons.length, 12, "the A2 assessment batch must cover all twelve lessons");
  for (const lesson of a2Lessons) {
    assert.equal(lesson.assessment?.status, "ready", `${lesson.id} must have a ready A2 assessment`);
    assert.equal(lesson.assessment?.minimumScore, 80, `${lesson.id} must enforce the 80 percent A2 mastery threshold`);
    assert.equal(lesson.assessment?.performanceEvidenceRequired, true, `${lesson.id} mastery must require completed practical self-checks`);
    assert.equal(lesson.assessment?.performanceEvidenceImplemented, true, `${lesson.id} practical checks must be implemented`);
    assert.equal(lesson.quiz?.length, 10, `${lesson.id} must have ten scored A2 questions`);
    assert.equal(lesson.performanceTasks?.length, 2, `${lesson.id} must have two practical A2 self-check tasks`);
    assert.equal(lesson.performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), true, `${lesson.id} A2 tasks must work locally without audio`);
  }
  assert.equal(vm.runInContext("isLessonAccessible(course.lessons.find((lesson) => lesson.level === 'A1'))", context), true, "the first A1 lesson must open after the A0 gate");
  assert.equal(vm.runInContext("isLessonAccessible(course.lessons.find((lesson) => lesson.level === 'A1' && lesson.unit === 2))", context), false, "later A1 lessons must remain sequentially locked");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), a1Lessons[0].id, "the first A1 lesson must be the next required step after the gate");
  assert.equal(vm.runInContext("isLevelUnlocked('A2')", context), false, "A2 must remain locked until every A1 lesson is mastered");
  vm.runInContext(`
    for (const lesson of getLessonsInLevel('A1')) {
      state.completedLessons[lesson.id] = {
        score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
        assessmentVersion: lesson.assessment.version,
      };
    }
  `, context);
  assert.equal(vm.runInContext("isLevelUnlocked('A2')", context), true, "A2 may unlock only after A1 mastery and the A0 transition gate");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('A2')[0])", context), true, "the first A2 lesson must open after all prerequisites are mastered");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('A2')[1])", context), false, "later A2 lessons must remain sequentially locked");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), a2Lessons[0].id, "A2.1 must be the next required step after all A1 lessons");

  console.log("PASS: A0-only start, sequential A0/A1/A2 locks, 80% scoring, practical-evidence locks, legacy migration, final lesson-mapped A0/A1/A2 audio display, audio playback and character-voice consistency, pending-playback fallback, transcript unlock, the A0→A1 gate, and all twelve local A1 and A2 assessments.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
