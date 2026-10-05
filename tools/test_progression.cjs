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
  assert.equal(vm.runInContext("course.audioAssets.length", context), 142, "all generated audio assets through B1.9 must be carried into the course bundle");
  assert.equal(courseData.audioAssets.reduce((count, asset) => count + asset.segments.length, 0), 312, "the audio manifest must contain all three hundred twelve generated clips");
  assert.equal(courseData.lessons.filter((lesson) => lesson.assessment?.status === "ready").length, 47, "the course bundle must carry forty-seven ready lesson assessments through B2.6");
  assert.equal(courseData.lessons.reduce((count, lesson) => count + lesson.quiz.length, 0), 470, "the course bundle must carry all four hundred seventy scored lesson questions");
  assert.equal(courseData.lessons.reduce((count, lesson) => count + lesson.performanceTasks.length, 0), 94, "the course bundle must carry all ninety-four lesson performance tasks");
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
    "DL-A2-07": "a2-07-language-learning-travel-purpose",
    "DL-A2-08": "a2-08-media-news-passive",
    "DL-A2-09": "a2-09-products-technology-complaints",
    "DL-A2-10": "a2-10-sports-health-feelings-weil",
    "DL-A2-11": "a2-11-housing-neighborhood-wohin",
    "DL-A2-12": "a2-12-holidays-festivals-culture",
    "DL-B1-01": "b1-01-daily-life-hobbies-experiences",
    "DL-B1-02": "b1-02-food-habits-obwohl",
    "DL-B1-03": "b1-03-work-communication-konjunktiv",
    "DL-B1-04": "b1-04-continuing-education-damit",
    "DL-B1-05": "b1-05-cities-relative-clauses",
    "DL-B1-06": "b1-06-health-fitness-advice",
    "DL-B1-07": "b1-07-lifestyles-customs-cultures",
    "DL-B1-08": "b1-08-consumption-advertising-je-desto",
    "DL-B1-09": "b1-09-travel-transport-environment",
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
    const markup = audioMarkupByLesson[asset.lessonId];
    const pendingVoiceApproval = asset.status === 'generated_pending_acoustic_review';
    assert.ok(markup?.includes(asset.title), `${asset.assetId} must remain visible in its assigned lesson`);
    assert.ok(markup.includes(pendingVoiceApproval ? 'للمراجعة' : 'نهائي'), `${asset.assetId} must show the label matching its approval status`);
    if (pendingVoiceApproval) {
      assert.ok(markup.includes('متاحة للمراجعة'), `${asset.assetId} must remain playable for user preview until voice approval`);
      assert.ok(!markup.includes('نهائي'), `${asset.assetId} must not be labeled final before voice approval`);
    } else {
      assert.ok(!markup.includes('للمراجعة'), `${asset.assetId} must not show a review label after approval`);
    }
    for (const [lessonId, otherMarkup] of Object.entries(audioMarkupByLesson)) {
      if (lessonId !== asset.lessonId) assert.ok(!otherMarkup.includes(asset.title), `${asset.assetId} must not appear in ${lessonId}`);
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
  const a2PurposeAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-07-"));
  assert.equal(a2PurposeAssets.length, 4, "A2.7's audio batch must expose four linked lesson assets");
  assert.equal(a2PurposeAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.7 must expose all ten generated clips");
  const a2PurposeDialogue = a2PurposeAssets.find((asset) => asset.assetId === "DL-A2-07-AUD-DLG-01");
  assert.equal(a2PurposeDialogue.segments.length, 7, "the language-trip dialogue must keep all seven source turns");
  assert.ok(a2PurposeDialogue.segments.filter((segment) => segment.speaker === "Hiba").every((segment) => segment.voiceId === "voice-02"), "Hiba must retain one selected voice throughout the dialogue");
  assert.ok(a2PurposeDialogue.segments.filter((segment) => segment.speaker === "Maha").every((segment) => segment.voiceId === "voice-00"), "Maha must retain one selected voice throughout the dialogue");
  assert.equal(a2PurposeAssets.find((asset) => asset.assetId === "DL-A2-07-AUD-READ-01").segments[0].voiceId, "voice-00", "Maha must keep the same selected voice in the reading and dialogue");
  assert.equal(a2PurposeAssets.find((asset) => asset.assetId === "DL-A2-07-AUD-LST-01").segments[0].voiceId, "voice-03", "A2.7 listening must retain the established listening narrator voice");
  const a2PurposeLesson = courseData.lessons.find((lesson) => lesson.id === "a2-07-language-learning-travel-purpose");
  const a2PurposeQ08 = a2PurposeLesson.quiz.find((question) => question.id === "DL-A2-07-Q08");
  assert.deepEqual(a2PurposeQ08.sourceTaskIds, ["DL-A2-07-T05"], "the Maha sentence question must stay linked to reading T05, not listening T06");
  const a2PassiveAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-08-"));
  assert.equal(a2PassiveAssets.length, 4, "A2.8's audio batch must expose four linked lesson assets");
  assert.equal(a2PassiveAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.8 must expose all ten generated clips");
  const a2PassivePhrases = a2PassiveAssets.find((asset) => asset.assetId === "DL-A2-08-AUD-PHR-01");
  const a2PassiveModels = a2PassiveAssets.find((asset) => asset.assetId === "DL-A2-08-AUD-MODEL-01");
  const a2PassiveReading = a2PassiveAssets.find((asset) => asset.assetId === "DL-A2-08-AUD-READ-01");
  const a2PassiveListening = a2PassiveAssets.find((asset) => asset.assetId === "DL-A2-08-AUD-LST-01");
  assert.equal(a2PassivePhrases.segments.length, 2, "A2.8's vocabulary track must preserve both noun and verb groups");
  assert.equal(a2PassiveModels.segments.length, 4, "A2.8's grammar track must preserve all four model/practice clips");
  assert.equal(a2PassiveReading.segments.length, 2, "A2.8 reading must retain both consecutive source sections");
  assert.equal(a2PassiveListening.segments.length, 2, "A2.8 listening must retain both consecutive source sections");
  assert.ok([...a2PassivePhrases.segments, ...a2PassiveModels.segments, ...a2PassiveReading.segments].every((segment) => segment.voiceId === "voice-02"), "A2.8 phrase, model, and reading clips must keep the selected narrator voice");
  assert.ok(a2PassiveListening.segments.every((segment) => segment.voiceId === "voice-03"), "A2.8 listening clips must keep the established listening narrator voice");
  const a2ComplaintAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-09-"));
  assert.equal(a2ComplaintAssets.length, 4, "A2.9's audio batch must expose four linked lesson assets");
  assert.equal(a2ComplaintAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.9 must expose all ten generated clips");
  const a2ComplaintDialogue = a2ComplaintAssets.find((asset) => asset.assetId === "DL-A2-09-AUD-DLG-01");
  assert.equal(a2ComplaintDialogue.segments.length, 7, "the customer-service dialogue must keep all seven source turns");
  assert.ok(a2ComplaintDialogue.segments.filter((segment) => segment.speaker === "Kundin").every((segment) => segment.voiceId === "voice-03"), "Kundin must keep the established customer voice in every turn");
  assert.ok(a2ComplaintDialogue.segments.filter((segment) => segment.speaker === "Mitarbeiter").every((segment) => segment.voiceId === "voice-02"), "Mitarbeiter must keep the established course staff voice in every turn");
  const a1ShoppingDialogue = courseData.audioAssets.find((asset) => asset.assetId === "DL-A1-08-AUD-DLG-01");
  assert.equal(a2ComplaintDialogue.segments.find((segment) => segment.speaker === "Kundin").voiceId, a1ShoppingDialogue.segments.find((segment) => segment.speaker === "Kundin").voiceId, "the selected Kundin voice must remain consistent with A1 shopping");
  const a2ComplaintReading = a2ComplaintAssets.find((asset) => asset.assetId === "DL-A2-09-AUD-READ-01");
  assert.equal(a2ComplaintReading.segments[0].speaker, "Salma", "the complaint letter must retain its named writer");
  assert.equal(a2ComplaintReading.segments[0].voiceId, "voice-02", "Salma must reuse her selected A2.3 reading voice");
  const a2ComplaintListening = a2ComplaintAssets.find((asset) => asset.assetId === "DL-A2-09-AUD-LST-01");
  assert.equal(a2ComplaintListening.segments[0].speaker, "Karim", "the A2.9 listening script must retain Karim as its speaker");
  assert.equal(a2ComplaintListening.segments[0].voiceId, a1KarimVoice, "Karim must retain his selected voice across A1 and A2");
  const a2SportAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-10-"));
  assert.equal(a2SportAssets.length, 5, "A2.10's audio batch must expose five linked lesson assets");
  assert.equal(a2SportAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.10 must expose all ten generated clips");
  const a2SportDialogue = a2SportAssets.find((asset) => asset.assetId === "DL-A2-10-AUD-DLG-01");
  assert.equal(a2SportDialogue.segments.length, 6, "the post-training dialogue must keep all six source turns");
  assert.deepEqual(a2SportDialogue.segments.map((segment) => segment.speaker), ["Lina", "Omar", "Lina", "Omar", "Lina", "Omar"], "A2.10 dialogue speaker order must follow the source");
  const a2SportSource = fs.readFileSync(path.join(rootDir, "content/A2/lesson-10-sports-health-feelings-weil.md"), "utf8");
  const sourceDialogueTexts = a2SportSource.split("## 3) حوار أصلي بعد التدريب")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => line.startsWith("**Lina:**") || line.startsWith("**Omar:**"))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(a2SportDialogue.segments.map((segment) => segment.text), sourceDialogueTexts, "A2.10 dialogue transcripts must match all six source turns");
  const a0LinaVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A0-02-AUD-DLG-01").segments.find((segment) => segment.speaker === "Lina").voiceId;
  const a1LinaVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A1-11-AUD-DLG-01").segments.find((segment) => segment.speaker === "Lina").voiceId;
  assert.ok(a2SportDialogue.segments.filter((segment) => segment.speaker === "Lina").every((segment) => segment.voiceId === a0LinaVoice && segment.voiceId === a1LinaVoice), "Lina must retain one selected voice across A0.2, A1.11, and A2.10");
  assert.equal(a2SportDialogue.segments.find((segment) => segment.speaker === "Lina").voiceId, "voice-00", "Lina's selected cross-course voice must remain pinned");
  assert.ok(a2SportDialogue.segments.filter((segment) => segment.speaker === "Omar").every((segment) => segment.voiceId === "voice-03"), "Omar must keep the selected A2.10 voice assignment for reuse in A2.12");
  const a1RaniaReading = courseData.audioAssets.find((asset) => asset.assetId === "DL-A1-02-AUD-READ-01");
  const a2SportReading = a2SportAssets.find((asset) => asset.assetId === "DL-A2-10-AUD-READ-01");
  assert.equal(a2SportReading.segments[0].speaker, "Rania", "the A2.10 source reading must retain Rania as its protagonist");
  const sourceReadingBlock = a2SportSource.split("## 4) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0];
  const sourceReadingText = sourceReadingBlock.split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(a2SportReading.segments[0].text, sourceReadingText, "the A2.10 reading transcript must match its source passage");
  assert.equal(a2SportReading.segments[0].voiceId, a1RaniaReading.segments.find((segment) => segment.speaker === "Rania").voiceId, "Rania must retain her selected voice across A1.2 and A2.10");
  const a2SportNarrated = [
    a2SportAssets.find((asset) => asset.assetId === "DL-A2-10-AUD-PHR-01"),
    a2SportAssets.find((asset) => asset.assetId === "DL-A2-10-AUD-MODEL-01"),
  ];
  assert.ok(a2SportNarrated.every((asset) => asset.segments.every((segment) => segment.voiceId === "voice-02")), "A2.10 phrase and model tracks must use the established course narrator");
  const a2SportModel = a2SportAssets.find((asset) => asset.assetId === "DL-A2-10-AUD-MODEL-01");
  assert.equal(a2SportModel.segments[0].text, [
    "Ich gehe spazieren, weil ich Bewegung brauche.",
    "Mina ist erschöpft, weil sie lange trainiert hat.",
    "Weil ich müde bin, mache ich eine Pause.",
    "Ich mache eine Pause, denn ich bin müde.",
    "Ich bin müde. Deshalb mache ich eine Pause.",
  ].join(" "), "the A2.10 grammar audio must cover the sourced weil, denn, and deshalb examples");
  const a2SportListening = a2SportAssets.find((asset) => asset.assetId === "DL-A2-10-AUD-LST-01");
  assert.equal(a2SportListening.segments[0].speaker, "Erzählperson", "A2.10 listening must keep its anonymous narrator role");
  const sourceListeningBlock = a2SportSource.split("## 5) نص استماع معدّ للنطق")[1].split("## 6) التمارين")[0];
  const sourceListeningText = sourceListeningBlock.split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(a2SportListening.segments[0].text, sourceListeningText, "the A2.10 listening transcript must match its source passage");
  const a2PassiveListeningVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-08-AUD-LST-01").segments[0].voiceId;
  assert.equal(a2SportListening.segments[0].voiceId, a2PassiveListeningVoice, "A2.10 listening must retain the established listening narrator voice");
  const a2HousingAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-11-"));
  assert.equal(a2HousingAssets.length, 5, "A2.11's audio batch must expose five linked lesson assets");
  assert.equal(a2HousingAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.11 must expose all ten generated clips");
  const a2HousingSource = fs.readFileSync(path.join(rootDir, "content/A2/lesson-11-housing-neighborhood-wohin.md"), "utf8");
  const a2HousingDialogue = a2HousingAssets.find((asset) => asset.assetId === "DL-A2-11-AUD-DLG-01");
  assert.equal(a2HousingDialogue.segments.length, 6, "the moving-home dialogue must keep all six source turns");
  assert.deepEqual(a2HousingDialogue.segments.map((segment) => segment.speaker), ["Nora", "Fadi", "Nora", "Fadi", "Nora", "Fadi"], "A2.11 dialogue speaker order must follow the source");
  const sourceHousingDialogue = a2HousingSource.split("## 4) حوار أصلي بعد الانتقال")[1].split("## 5)")[0]
    .split(/\r?\n/).filter((line) => line.startsWith("**Nora:**") || line.startsWith("**Fadi:**"))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(a2HousingDialogue.segments.map((segment) => segment.text), sourceHousingDialogue, "A2.11 dialogue transcripts must match all six source turns");
  const a0NoraVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A0-02-AUD-DLG-02").segments.find((segment) => segment.speaker === "Nora").voiceId;
  assert.ok(a2HousingDialogue.segments.filter((segment) => segment.speaker === "Nora").every((segment) => segment.voiceId === a0NoraVoice && segment.voiceId === "voice-02"), "Nora must retain her selected voice from A0.2");
  assert.ok(a2HousingDialogue.segments.filter((segment) => segment.speaker === "Fadi").every((segment) => segment.voiceId === "voice-03"), "Fadi must keep one selected voice throughout the dialogue");
  const a2HousingReading = a2HousingAssets.find((asset) => asset.assetId === "DL-A2-11-AUD-READ-01");
  const a2HousingPriorSalmaReading = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-09-AUD-READ-01");
  assert.equal(a2HousingReading.segments[0].speaker, "Salma", "the A2.11 reading must retain Salma as its protagonist");
  const sourceHousingReading = a2HousingSource.split("## 5) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(a2HousingReading.segments[0].text, sourceHousingReading, "the A2.11 reading transcript must match its source passage");
  assert.equal(a2HousingReading.segments[0].voiceId, a2HousingPriorSalmaReading.segments[0].voiceId, "Salma must retain her selected voice across A2.9 and A2.11");
  const a2HousingPhrase = a2HousingAssets.find((asset) => asset.assetId === "DL-A2-11-AUD-PHR-01");
  const a2HousingModel = a2HousingAssets.find((asset) => asset.assetId === "DL-A2-11-AUD-MODEL-01");
  assert.ok([a2HousingPhrase, a2HousingModel].every((asset) => asset.segments[0].voiceId === "voice-02"), "A2.11 phrase and model tracks must use the established narrator");
  assert.equal(a2HousingModel.segments[0].text, "Wo liegt das Buch? Auf dem Tisch. Wohin lege ich das Buch? Auf den Tisch. Der Schrank steht an der Wand. Ich stelle den Schrank an die Wand. Ich wohne in einer ruhigen Nachbarschaft. Die Miete ist hoch. Der Innenhof ist neben dem Haus. Meine Nachbarin ist sehr freundlich. Könnten Sie bitte etwas leiser sein?", "the A2.11 model audio must preserve the sourced location and neighborhood examples");
  const a2HousingListening = a2HousingAssets.find((asset) => asset.assetId === "DL-A2-11-AUD-LST-01");
  const sourceHousingListening = a2HousingSource.split("## 6) نص استماع معدّ للنطق")[1].split("## 7)")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(a2HousingListening.segments[0].text, sourceHousingListening, "the A2.11 listening transcript must match its source passage");
  const a2EstablishedListeningVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-08-AUD-LST-01").segments[0].voiceId;
  assert.equal(a2HousingListening.segments[0].voiceId, a2EstablishedListeningVoice, "A2.11 listening must retain the established listening narrator voice");
  const a2FestivalAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-A2-12-"));
  assert.equal(a2FestivalAssets.length, 4, "A2.12's audio batch must expose four linked lesson assets");
  assert.equal(a2FestivalAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "A2.12 must expose all ten generated clips");
  const a2FestivalSource = fs.readFileSync(path.join(rootDir, "content/A2/lesson-12-holidays-festivals-culture.md"), "utf8");
  const a2FestivalDialogue = a2FestivalAssets.find((asset) => asset.assetId === "DL-A2-12-AUD-DLG-01");
  assert.equal(a2FestivalDialogue.segments.length, 7, "the festival dialogue must keep all seven source turns");
  assert.deepEqual(a2FestivalDialogue.segments.map((segment) => segment.speaker), ["Laila", "Omar", "Laila", "Omar", "Laila", "Omar", "Laila"], "A2.12 dialogue speaker order must follow the source");
  const sourceFestivalDialogue = a2FestivalSource.split("## 3) حوار أصلي عن مهرجان")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => line.startsWith("**Laila:**") || line.startsWith("**Omar:**"))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(a2FestivalDialogue.segments.map((segment) => segment.text), sourceFestivalDialogue, "A2.12 dialogue transcripts must match all seven source turns");
  assert.ok(a2FestivalDialogue.segments.filter((segment) => segment.speaker === "Laila").every((segment) => segment.voiceId === "voice-02"), "Laila must keep one selected voice throughout the dialogue");
  assert.ok(a2FestivalDialogue.segments.filter((segment) => segment.speaker === "Omar").every((segment) => segment.voiceId === "voice-03"), "Omar must retain the voice selected in A2.10");
  const a2SportOmarVoice = a2SportDialogue.segments.find((segment) => segment.speaker === "Omar").voiceId;
  assert.equal(a2FestivalDialogue.segments.find((segment) => segment.speaker === "Omar").voiceId, a2SportOmarVoice, "Omar's voice must match A2.10 in the final A2 dialogue");
  const a2FestivalCombined = a2FestivalAssets.find((asset) => asset.assetId === "DL-A2-12-AUD-PHR-01");
  assert.equal(a2FestivalCombined.kind, "phrase_bank", "the vocabulary/model track should remain one asset within the ten-request cap");
  assert.equal(a2FestivalCombined.segments[0].voiceId, "voice-02", "the combined festival vocabulary/model track must use the established narrator");
  assert.equal(a2FestivalCombined.segments[0].text, "Das Kulturfest. Die Tradition. Der Brauch. Die Ausstellung. Die Parade. Die Eintrittskarte. Das Konzert. Die Bühne. Der Eintritt. Die Veranstaltung. Das Feuerwerk. Stattfinden. Findet statt. Teilnehmen an. Nimmt teil. Gemeinsam. Kostenlos. Feiern. Bevor das Konzert beginnt, treffen wir uns am Eingang. Wir treffen uns am Eingang, bevor das Konzert beginnt. Nachdem wir das Konzert gehört haben, können wir auf dem Markt etwas essen. Bevor das Fest beginnt, kaufen wir Eintrittskarten.", "the combined A2.12 track must preserve the source vocabulary and models");
  const a2FestivalReading = a2FestivalAssets.find((asset) => asset.assetId === "DL-A2-12-AUD-READ-01");
  const sourceFestivalReading = a2FestivalSource.split("## 4) نص قراءة أصلي: برنامج المدينة")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(a2FestivalReading.segments[0].text, sourceFestivalReading, "the A2.12 reading transcript must match the city-program passage");
  assert.equal(a2FestivalReading.segments[0].voiceId, "voice-02", "the reading must retain the established course narrator voice");
  const a2FestivalListening = a2FestivalAssets.find((asset) => asset.assetId === "DL-A2-12-AUD-LST-01");
  const sourceFestivalListening = a2FestivalSource.split("## 5) نص استماع معدّ للنطق")[1].split("## 6)")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(a2FestivalListening.segments[0].text, sourceFestivalListening, "the A2.12 listening transcript must match its source passage");
  assert.equal(a2FestivalListening.segments[0].voiceId, "voice-03", "A2.12 listening must keep the established listening narrator voice");
  const b1HobbyAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-B1-01-"));
  assert.equal(b1HobbyAssets.length, 5, "B1.1's audio batch must expose five lesson assets");
  assert.equal(b1HobbyAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.1 must expose all ten generated clips");
  const b1HobbySource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-01-daily-life-hobbies-experiences.md"), "utf8");
  const b1HobbyVocabulary = b1HobbyAssets.find((asset) => asset.assetId === "DL-B1-01-AUD-PHR-01");
  assert.equal(b1HobbyVocabulary.kind, "phrase_bank", "B1.1 vocabulary must be available as a source-backed phrase track");
  assert.equal(b1HobbyVocabulary.segments[0].voiceId, "voice-02", "B1.1 vocabulary must use the established narrator voice");
  assert.equal(b1HobbyVocabulary.segments[0].text, "Das Erlebnis, die Erlebnisse. Der Verein, die Vereine. Das Schachturnier, die Schachturniere. Die Erinnerung, die Erinnerungen. Die Freizeit. Das Hobby, die Hobbys. Damals. Inzwischen. Zum ersten Mal. Sich erinnern an. Teilnehmen an. Regelmäßig. Allein und gemeinsam.", "the B1.1 vocabulary track must preserve its generated transcript");
  const b1HobbyModels = b1HobbyAssets.find((asset) => asset.assetId === "DL-B1-01-AUD-MODEL-01");
  assert.equal(b1HobbyModels.kind, "model_sentences", "B1.1 grammar examples must remain a separate model-sentence track");
  assert.equal(b1HobbyModels.segments[0].voiceId, "voice-02", "B1.1 grammar models must use the established narrator voice");
  assert.equal(b1HobbyModels.segments[0].text, "Als ich sechzehn Jahre alt war, bekam ich meine erste Kamera. Als wir zum ersten Mal allein reisten, waren wir nervös. Wenn Lina am Wochenende Zeit hatte, fotografierte sie im Park. Wenn ich heute frei habe, treffe ich meine Freunde.", "the B1.1 model track must preserve the generated als/wenn examples");
  const b1HobbyDialogue = b1HobbyAssets.find((asset) => asset.assetId === "DL-B1-01-AUD-DLG-01");
  assert.equal(b1HobbyDialogue.segments.length, 6, "the B1.1 dialogue must keep all six source turns");
  assert.deepEqual(b1HobbyDialogue.segments.map((segment) => segment.speaker), ["Lina", "Karim", "Lina", "Karim", "Lina", "Karim"], "B1.1 dialogue speaker order must follow the source");
  const sourceB1Dialogue = b1HobbySource.split("## 3) حوار أصلي عن هواية قديمة")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => line.startsWith("**Lina:**") || line.startsWith("**Karim:**"))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim().replace(/\b17\b/g, "siebzehn"));
  assert.deepEqual(b1HobbyDialogue.segments.map((segment) => segment.text), sourceB1Dialogue, "B1.1 dialogue transcripts must match all six source turns");
  assert.ok(b1HobbyDialogue.segments.filter((segment) => segment.speaker === "Lina").every((segment) => segment.voiceId === "voice-00"), "Lina must retain voice-00 throughout B1.1");
  assert.equal(b1HobbyDialogue.segments.find((segment) => segment.speaker === "Lina").voiceId, a2SportDialogue.segments.find((segment) => segment.speaker === "Lina").voiceId, "Lina must retain her selected voice from A2.10 into B1.1");
  assert.ok(b1HobbyDialogue.segments.filter((segment) => segment.speaker === "Karim").every((segment) => segment.voiceId === a1KarimVoice && segment.voiceId === "voice-03"), "Karim must retain his selected voice from A1/A2 through B1.1");
  const b1HobbyReading = b1HobbyAssets.find((asset) => asset.assetId === "DL-B1-01-AUD-READ-01");
  const sourceB1Reading = b1HobbySource.split("## 4) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim().replace(/\b14\b/g, "vierzehn");
  assert.equal(b1HobbyReading.segments[0].text, sourceB1Reading, "B1.1 reading transcript must match the source passage");
  assert.equal(b1HobbyReading.segments[0].voiceId, "voice-02", "B1.1 reading must retain the established course narrator voice");
  const b1HobbyListening = b1HobbyAssets.find((asset) => asset.assetId === "DL-B1-01-AUD-LST-01");
  const sourceB1Listening = b1HobbySource.split("## 5) نص استماع معدّ للنطق")[1].split("## 6)")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(b1HobbyListening.segments[0].text, sourceB1Listening, "B1.1 listening transcript must match the source passage");
  assert.equal(b1HobbyListening.segments[0].voiceId, "voice-03", "B1.1 listening must keep the established listening narrator voice");
  const b1FoodAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-B1-02-"));
  assert.equal(b1FoodAssets.length, 5, "B1.2 must expose five lesson-mapped audio assets");
  assert.equal(b1FoodAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.2 must expose all ten generated clips");
  assert.ok(b1FoodAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.2 recordings must be final and transcripts must not be hidden");
  const b1FoodSourceForAudio = fs.readFileSync(path.join(rootDir, "content/B1/lesson-02-food-habits-obwohl.md"), "utf8");
  const b1FoodVocabulary = b1FoodAssets.find((asset) => asset.assetId === "DL-B1-02-AUD-PHR-01");
  assert.equal(b1FoodVocabulary.segments[0].voiceId, "voice-02", "B1.2 vocabulary must use the established course narrator");
  assert.equal(b1FoodVocabulary.segments[0].text, "Die Ernährung. Die Gewohnheit, die Gewohnheiten. Die Mahlzeit, die Mahlzeiten. Die Zutat, die Zutaten. Die Auswahl. Ausgewogen. Sättigend. Enthalten, enthält. Verzichten auf, verzichtet auf. Sich ernähren, ernährt sich. Auswärts essen. Der Geschmack, die Geschmäcker. Inzwischen.", "B1.2 vocabulary transcript must match its source list");
  const b1FoodModels = b1FoodAssets.find((asset) => asset.assetId === "DL-B1-02-AUD-MODEL-01");
  assert.equal(b1FoodModels.kind, "model_sentences", "B1.2 connector examples must remain a source-backed model track");
  assert.equal(b1FoodModels.segments[0].text, "Obwohl ich wenig Zeit habe, koche ich oft selbst. Ich koche oft selbst, obwohl ich wenig Zeit habe. Ich habe wenig Zeit. Trotzdem koche ich oft selbst.", "B1.2 model track must preserve both source connectors and word order");
  const b1FoodDialogue = b1FoodAssets.find((asset) => asset.assetId === "DL-B1-02-AUD-DLG-01");
  const sourceB1FoodDialogue = b1FoodSourceForAudio.split("## 3) حوار أصلي عن وجبة العمل")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => line.startsWith("**Mira:**") || line.startsWith("**Tarek:**"))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1FoodDialogue.segments.map((segment) => segment.text), sourceB1FoodDialogue, "B1.2 dialogue transcript must match the six source turns");
  assert.deepEqual(b1FoodDialogue.segments.map((segment) => segment.speaker), ["Mira", "Tarek", "Mira", "Tarek", "Mira", "Tarek"], "B1.2 dialogue speakers must follow the source");
  assert.ok(b1FoodDialogue.segments.filter((segment) => segment.speaker === "Mira").every((segment) => segment.voiceId === "voice-02"), "Mira must keep her A2.5 voice in B1.2");
  const a2MiraDialogue = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-05-AUD-DLG-01");
  assert.equal(b1FoodDialogue.segments.find((segment) => segment.speaker === "Mira").voiceId, a2MiraDialogue.segments.find((segment) => segment.speaker === "Mira").voiceId, "Mira's B1.2 voice must stay consistent with A2.5");
  assert.ok(b1FoodDialogue.segments.filter((segment) => segment.speaker === "Tarek").every((segment) => segment.voiceId === "voice-03"), "Tarek must keep one voice across all dialogue turns");
  const b1FoodReading = b1FoodAssets.find((asset) => asset.assetId === "DL-B1-02-AUD-READ-01");
  const sourceB1FoodReading = b1FoodSourceForAudio.split("## 4) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(b1FoodReading.segments[0].text, sourceB1FoodReading, "B1.2 reading transcript must match the source passage");
  assert.equal(b1FoodReading.segments[0].voiceId, "voice-02", "B1.2 reading must use the established narrator");
  const b1FoodListening = b1FoodAssets.find((asset) => asset.assetId === "DL-B1-02-AUD-LST-01");
  const sourceB1FoodListening = b1FoodSourceForAudio.split("## 5) نص استماع معدّ للنطق")[1].split("## 6)")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith(">")).trim().slice(1).trim();
  assert.equal(b1FoodListening.segments[0].text, sourceB1FoodListening, "B1.2 listening transcript must match the source passage");
  assert.equal(b1FoodListening.segments[0].voiceId, "voice-03", "B1.2 listening must use the established listening narrator");
  const b1FoodAudioMarkup = vm.runInContext("renderAudioAssets('b1-02-food-habits-obwohl')", context);
  assert.match(b1FoodAudioMarkup, /حوار: Mira وTarek عن وجبة العمل/);
  assert.match(b1FoodAudioMarkup, /نهائي/);
  assert.doesNotMatch(b1FoodAudioMarkup, /للمراجعة/);
  const b1WorkAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-B1-03-"));
  assert.equal(b1WorkAssets.length, 4, "B1.3 must keep four lesson-mapped audio assets with grammar examples included in its vocabulary track");
  assert.equal(b1WorkAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.3 must expose all ten generated clips");
  assert.ok(b1WorkAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.3 recordings must be final and transcripts must remain available");
  const b1WorkSourceForAudio = fs.readFileSync(path.join(rootDir, "content/B1/lesson-03-work-communication-konjunktiv.md"), "utf8");
  const b1WorkPhrase = b1WorkAssets.find((asset) => asset.assetId === "DL-B1-03-AUD-PHR-01");
  assert.equal(b1WorkPhrase.segments[0].voiceId, "voice-02", "B1.3 vocabulary and grammar track must use the established narrator");
  assert.match(b1WorkPhrase.segments[0].text, /Ich würde vorschlagen, dass wir zuerst die Aufgaben verteilen/);
  const b1WorkDialogue = b1WorkAssets.find((asset) => asset.assetId === "DL-B1-03-AUD-DLG-01");
  const sourceB1WorkDialogue = b1WorkSourceForAudio.split("## 3) حوار أصلي في اجتماع عمل")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => /^\*\*(Leiterin|Nora|Omar):\*\*/.test(line))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1WorkDialogue.segments.map((segment) => segment.text), sourceB1WorkDialogue, "B1.3 dialogue transcript must match all seven source turns");
  assert.deepEqual(b1WorkDialogue.segments.map((segment) => segment.speaker), ["Leiterin", "Nora", "Omar", "Leiterin", "Omar", "Nora", "Leiterin"], "B1.3 dialogue speakers must follow the source");
  assert.ok(b1WorkDialogue.segments.filter((segment) => segment.speaker === "Nora").every((segment) => segment.voiceId === "voice-02"), "Nora must keep her A2.11 voice in B1.3");
  assert.ok(b1WorkDialogue.segments.filter((segment) => segment.speaker === "Omar").every((segment) => segment.voiceId === "voice-03"), "Omar must keep his A2.12 voice in B1.3");
  assert.ok(b1WorkDialogue.segments.filter((segment) => segment.speaker === "Leiterin").every((segment) => segment.voiceId === "voice-00"), "Leiterin must keep one voice across all turns");
  const a2NoraDialogue = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-11-AUD-DLG-01");
  const a2OmarDialogue = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-12-AUD-DLG-01");
  assert.equal(b1WorkDialogue.segments.find((segment) => segment.speaker === "Nora").voiceId, a2NoraDialogue.segments.find((segment) => segment.speaker === "Nora").voiceId, "Nora's B1.3 voice must stay consistent with A2.11");
  assert.equal(b1WorkDialogue.segments.find((segment) => segment.speaker === "Omar").voiceId, a2OmarDialogue.segments.find((segment) => segment.speaker === "Omar").voiceId, "Omar's B1.3 voice must stay consistent with A2.12");
  const b1WorkReading = b1WorkAssets.find((asset) => asset.assetId === "DL-B1-03-AUD-READ-01");
  const sourceB1WorkReading = b1WorkSourceForAudio.split("## 4) إعلان وظيفة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).map((line) => line.trim()).find((line) => line.startsWith("> Wir suchen"))
    .slice(2).trim();
  assert.equal(b1WorkReading.segments[0].text, sourceB1WorkReading, "B1.3 reading transcript must match the source advertisement");
  assert.equal(b1WorkReading.segments[0].voiceId, "voice-02", "B1.3 reading must use the established narrator");
  const b1WorkListening = b1WorkAssets.find((asset) => asset.assetId === "DL-B1-03-AUD-LST-01");
  const sourceB1WorkListening = b1WorkSourceForAudio.split("## 5) نص استماع معدّ للنطق")[1].split("أجب:")[0]
    .split(/\r?\n/).map((line) => line.trim()).find((line) => line.startsWith("> ")).slice(2).trim();
  assert.equal(b1WorkListening.segments[0].text, sourceB1WorkListening, "B1.3 listening transcript must match the source script");
  assert.equal(b1WorkListening.segments[0].voiceId, "voice-03", "B1.3 listening must use the established listening narrator");
  const b1WorkAudioMarkup = vm.runInContext("renderAudioAssets('b1-03-work-communication-konjunktiv')", context);
  assert.match(b1WorkAudioMarkup, /حوار: Nora وOmar ومديرة الفريق/);
  assert.match(b1WorkAudioMarkup, /نهائي/);
  assert.doesNotMatch(b1WorkAudioMarkup, /للمراجعة/);
  const b1EducationAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-B1-04-"));
  assert.equal(b1EducationAssets.length, 5, "B1.4 must expose five lesson-mapped audio assets");
  assert.equal(b1EducationAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.4 must expose all ten generated clips");
  assert.ok(b1EducationAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.4 recordings must be final and their transcripts available");
  const b1EducationSourceForAudio = fs.readFileSync(path.join(rootDir, "content/B1/lesson-04-continuing-education-damit.md"), "utf8");
  const b1EducationPhrase = b1EducationAssets.find((asset) => asset.assetId === "DL-B1-04-AUD-PHR-01");
  assert.equal(b1EducationPhrase.segments[0].voiceId, "voice-02", "B1.4 vocabulary must use the established narrator");
  assert.match(b1EducationPhrase.segments[0].text, /Die Weiterbildung, die Weiterbildungen/);
  const b1EducationModel = b1EducationAssets.find((asset) => asset.assetId === "DL-B1-04-AUD-MODEL-01");
  assert.equal(b1EducationModel.segments[0].voiceId, "voice-02", "B1.4 grammar examples must use the established narrator");
  assert.match(b1EducationModel.segments[0].text, /damit die Teilnehmenden selbstständig lernen können/);
  const b1EducationDialogue = b1EducationAssets.find((asset) => asset.assetId === "DL-B1-04-AUD-DLG-01");
  const sourceB1EducationDialogue = b1EducationSourceForAudio.split("## 3) حوار أصلي عن دورة مهنية")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => /^\*\*(Nadia|Farid):\*\*/.test(line))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1EducationDialogue.segments.map((segment) => segment.text), sourceB1EducationDialogue, "B1.4 dialogue transcript must match all six source turns");
  assert.deepEqual(b1EducationDialogue.segments.map((segment) => segment.speaker), ["Nadia", "Farid", "Nadia", "Farid", "Nadia", "Farid"], "B1.4 dialogue speakers must follow the source");
  assert.ok(b1EducationDialogue.segments.filter((segment) => segment.speaker === "Nadia").every((segment) => segment.voiceId === "voice-02"), "Nadia must keep one voice throughout the dialogue");
  assert.ok(b1EducationDialogue.segments.filter((segment) => segment.speaker === "Farid").every((segment) => segment.voiceId === "voice-03"), "Farid must keep voice-03 throughout the dialogue");
  assert.equal(b1EducationDialogue.segments.find((segment) => segment.speaker === "Farid").voiceId, b1WorkListening.segments[0].voiceId, "Farid must retain the established B1.3 speaker voice");
  const b1EducationReading = b1EducationAssets.find((asset) => asset.assetId === "DL-B1-04-AUD-READ-01");
  const sourceB1EducationReading = b1EducationSourceForAudio.split("## 4) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1EducationReading.segments[0].text, sourceB1EducationReading, "B1.4 reading transcript must match the source passage");
  assert.equal(b1EducationReading.segments[0].voiceId, "voice-02", "B1.4 reading must use the established narrator");
  const b1EducationListening = b1EducationAssets.find((asset) => asset.assetId === "DL-B1-04-AUD-LST-01");
  const sourceB1EducationListening = b1EducationSourceForAudio.split("## 5) نص استماع معدّ للنطق")[1].split("أجب:")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1EducationListening.segments[0].text, sourceB1EducationListening, "B1.4 listening transcript must match the source passage");
  assert.equal(b1EducationListening.segments[0].voiceId, "voice-03", "B1.4 listening must use the established listening narrator");
  const b1EducationAudioMarkup = vm.runInContext("renderAudioAssets('b1-04-continuing-education-damit')", context);
  assert.match(b1EducationAudioMarkup, /حوار: Nadia وFarid عن دورة مهنية/);
  assert.match(b1EducationAudioMarkup, /نهائي/);
  assert.doesNotMatch(b1EducationAudioMarkup, /للمراجعة/);
  const b1CitiesAudioAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-B1-05-"));
  assert.equal(b1CitiesAudioAssets.length, 5, "B1.5 must expose five lesson-mapped audio assets");
  assert.equal(b1CitiesAudioAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.5 must expose all ten generated clips");
  assert.ok(b1CitiesAudioAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.5 recordings must be final and their transcripts available");
  const b1CitiesSourceForAudio = fs.readFileSync(path.join(rootDir, "content/B1/lesson-05-cities-relative-clauses.md"), "utf8");
  const b1CitiesPhrase = b1CitiesAudioAssets.find((asset) => asset.assetId === "DL-B1-05-AUD-PHR-01");
  assert.equal(b1CitiesPhrase.segments[0].voiceId, "voice-02", "B1.5 vocabulary must use the established narrator");
  assert.match(b1CitiesPhrase.segments[0].text, /Die Fußgängerzone, die Fußgängerzonen/);
  const b1CitiesModel = b1CitiesAudioAssets.find((asset) => asset.assetId === "DL-B1-05-AUD-MODEL-01");
  assert.equal(b1CitiesModel.segments[0].voiceId, "voice-02", "B1.5 model sentences must use the established narrator");
  assert.equal(b1CitiesModel.segments[0].text, "Der Marktplatz, der im Zentrum liegt, ist sehr lebendig. Der Aussichtspunkt, den viele Gäste besuchen, liegt am Fluss. Die Straße, die ich besonders mag, ist verkehrsberuhigt. Die Viertel, die am Stadtrand liegen, sind gut angebunden.");
  const b1CitiesDialogue = b1CitiesAudioAssets.find((asset) => asset.assetId === "DL-B1-05-AUD-DLG-01");
  const sourceB1CitiesDialogue = b1CitiesSourceForAudio.split("## 3) حوار أصلي عن جولة في المدينة")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => /^\*\*(Mara|Yusuf):\*\*/.test(line))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1CitiesDialogue.segments.map((segment) => segment.text), sourceB1CitiesDialogue, "B1.5 dialogue transcript must match all six source turns");
  assert.deepEqual(b1CitiesDialogue.segments.map((segment) => segment.speaker), ["Mara", "Yusuf", "Mara", "Yusuf", "Mara", "Yusuf"], "B1.5 dialogue speakers must follow the source");
  assert.ok(b1CitiesDialogue.segments.filter((segment) => segment.speaker === "Mara").every((segment) => segment.voiceId === "voice-02"), "Mara must keep one voice throughout the dialogue");
  assert.ok(b1CitiesDialogue.segments.filter((segment) => segment.speaker === "Yusuf").every((segment) => segment.voiceId === "voice-03"), "Yusuf must keep one voice throughout the dialogue");
  const b1CitiesReading = b1CitiesAudioAssets.find((asset) => asset.assetId === "DL-B1-05-AUD-READ-01");
  const sourceB1CitiesReading = b1CitiesSourceForAudio.split("## 4) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1CitiesReading.segments[0].text, sourceB1CitiesReading, "B1.5 reading transcript must match the source passage");
  assert.equal(b1CitiesReading.segments[0].voiceId, "voice-02", "B1.5 reading must use the established narrator");
  const b1CitiesListening = b1CitiesAudioAssets.find((asset) => asset.assetId === "DL-B1-05-AUD-LST-01");
  const sourceB1CitiesListening = b1CitiesSourceForAudio.split("## 5) نص استماع معدّ للنطق")[1].split("أجب:")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1CitiesListening.segments[0].text, sourceB1CitiesListening, "B1.5 listening transcript must match the source passage");
  assert.equal(b1CitiesListening.segments[0].voiceId, "voice-03", "B1.5 listening must use the established listening narrator");
  const b1CitiesAudioMarkup = vm.runInContext("renderAudioAssets('b1-05-cities-relative-clauses')", context);
  assert.match(b1CitiesAudioMarkup, /حوار: Mara وYusuf في جولة بالمدينة/);
  assert.match(b1CitiesAudioMarkup, /نهائي/);
  assert.doesNotMatch(b1CitiesAudioMarkup, /للمراجعة/);
  const b1HealthAudioAssets = courseData.audioAssets.filter((asset) => asset.assetId.startsWith("DL-B1-06-"));
  assert.equal(b1HealthAudioAssets.length, 5, "B1.6 must expose five lesson-mapped audio assets");
  assert.equal(b1HealthAudioAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.6 must expose all ten generated clips");
  assert.ok(b1HealthAudioAssets.every((asset) => asset.lessonId === "b1-06-health-fitness-advice" && asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.6 audio must stay lesson-mapped, final, and transcript-enabled");
  const b1HealthSourceForAudio = fs.readFileSync(path.join(rootDir, "content/B1/lesson-06-health-fitness-advice.md"), "utf8");
  const b1HealthPhrase = b1HealthAudioAssets.find((asset) => asset.assetId === "DL-B1-06-AUD-PHR-01");
  assert.equal(b1HealthPhrase.segments[0].voiceId, "voice-02", "B1.6 vocabulary must use the established narrator");
  for (const term of ["Die Ausdauer", "die Bewegung", "das Aufwärmen", "der Spaziergang", "die Beschwerde", "Etwas allmählich steigern"]) {
    assert.ok(b1HealthPhrase.segments[0].text.includes(term), `B1.6 vocabulary audio must include ${term}`);
  }
  const b1HealthModel = b1HealthAudioAssets.find((asset) => asset.assetId === "DL-B1-06-AUD-MODEL-01");
  const sourceB1HealthModels = b1HealthSourceForAudio.split("## 2) تقديم نصيحة بـsollte وkönnte")[1].split("## 3)")[0]
    .split(/\r?\n/).filter((line) => line.startsWith("- **"))
    .map((line) => line.match(/^- \*\*(.*?)\*\*/)[1]).join(" ");
  assert.equal(b1HealthModel.segments[0].text, sourceB1HealthModels, "B1.6 model sentences must match the selected source examples");
  assert.equal(b1HealthModel.segments[0].voiceId, "voice-02", "B1.6 model sentences must use the established narrator");
  const b1HealthDialogue = b1HealthAudioAssets.find((asset) => asset.assetId === "DL-B1-06-AUD-DLG-01");
  const sourceB1HealthDialogue = b1HealthSourceForAudio.split("## 3) حوار أصلي عن إدخال الحركة في اليوم")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => /^\*\*(Hiba|Fares):\*\*/.test(line))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1HealthDialogue.segments.map((segment) => segment.text), sourceB1HealthDialogue, "B1.6 dialogue audio must match all six source turns");
  assert.deepEqual(b1HealthDialogue.segments.map((segment) => segment.speaker), ["Hiba", "Fares", "Hiba", "Fares", "Hiba", "Fares"], "B1.6 dialogue speakers must follow the source");
  assert.ok(b1HealthDialogue.segments.filter((segment) => segment.speaker === "Hiba").every((segment) => segment.voiceId === "voice-02"), "Hiba must retain voice-02 from A2.7");
  assert.ok(b1HealthDialogue.segments.filter((segment) => segment.speaker === "Fares").every((segment) => segment.voiceId === "voice-03"), "Fares must keep voice-03 throughout the dialogue");
  const a2HibaVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-07-AUD-DLG-01").segments.find((segment) => segment.speaker === "Hiba").voiceId;
  assert.equal(b1HealthDialogue.segments.find((segment) => segment.speaker === "Hiba").voiceId, a2HibaVoice, "Hiba must keep the same selected voice from A2.7");
  const b1HealthReading = b1HealthAudioAssets.find((asset) => asset.assetId === "DL-B1-06-AUD-READ-01");
  const sourceB1HealthReading = b1HealthSourceForAudio.split("## 4) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1HealthReading.segments[0].text, sourceB1HealthReading, "B1.6 reading transcript must match the source passage");
  assert.equal(b1HealthReading.segments[0].voiceId, "voice-02", "B1.6 reading must use the established narrator");
  const b1HealthListening = b1HealthAudioAssets.find((asset) => asset.assetId === "DL-B1-06-AUD-LST-01");
  const sourceB1HealthListening = b1HealthSourceForAudio.split("## 5) نص استماع معدّ للنطق")[1].split("أجب:")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1HealthListening.segments[0].text, sourceB1HealthListening, "B1.6 listening transcript must match the source script");
  assert.equal(b1HealthListening.segments[0].voiceId, "voice-03", "B1.6 listening must use the established listening narrator");
  const b1HealthAudioMarkup = vm.runInContext("renderAudioAssets('b1-06-health-fitness-advice')", context);
  assert.match(b1HealthAudioMarkup, /حوار: Hiba وFares عن الحركة اليومية/);
  assert.match(b1HealthAudioMarkup, /نهائي/);
  assert.doesNotMatch(b1HealthAudioMarkup, /للمراجعة/);
  assert.equal(vm.runInContext("course.audioAssets.filter((asset) => asset.status === 'ready').length", context), 137, "previously approved audio assets must retain their ready status");
  assert.equal(vm.runInContext("course.audioAssets.filter((asset) => asset.status === 'generated_pending_acoustic_review').length", context), 5, "B1.9 assets must await user voice approval while remaining playable");
  assert.equal(vm.runInContext("course.audioAssets.every((asset) => ['ready', 'generated_pending_acoustic_review'].includes(asset.status))", context), true, "audio assets must have a valid approved or preview-pending status");
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
  const b1Lessons = vm.runInContext("getLessonsInLevel('B1')", context);
  assert.equal(b1Lessons.length, 12, "the B1 level must retain all twelve lessons");
  assert.equal(b1Lessons[0].assessment?.status, "ready", "B1.1 must be the first ready B1 lesson assessment");
  assert.equal(b1Lessons[0].assessment?.minimumScore, 80, "B1.1 must retain the 80 percent mastery threshold");
  assert.equal(b1Lessons[0].quiz?.length, 10, "B1.1 must include ten scored questions");
  const b1Source = fs.readFileSync(path.join(rootDir, "content/B1/lesson-01-daily-life-hobbies-experiences.md"), "utf8");
  assert.match(b1Source, /Als Lina 14 Jahre alt war, bekam sie eine Kamera/, "B1.1's reading evidence must remain in the lesson source");
  const b1ReadingQuestion = b1Lessons[0].quiz.find((question) => question.id === "DL-B1-01-Q06");
  assert.ok(b1ReadingQuestion.sourceTaskIds.includes("DL-B1-01-T05"), "the B1.1 age question must link to its source reading task");
  assert.equal(b1ReadingQuestion.options[b1ReadingQuestion.answerIndex], "Sie war 14 Jahre alt.", "the B1.1 reading answer must agree with the source");
  const b1ConnectorQuestion = b1Lessons[0].quiz.find((question) => question.id === "DL-B1-01-Q10");
  assert.equal(b1ConnectorQuestion.options[b1ConnectorQuestion.answerIndex], "Als ich zum ersten Mal nach Wien kam, war ich sehr aufgeregt.", "the B1.1 correction question must use als for a unique past event");
  assert.equal(b1Lessons[0].performanceTasks?.length, 2, "B1.1 must include two practical self-check tasks");
  assert.equal(b1Lessons[0].performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-01-T08")), true, "B1.1 performance tasks must link to the source experience-writing task");
  assert.equal(b1Lessons[0].performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), true, "B1.1 performance tasks must work locally without generated audio");
  assert.equal(b1Lessons[1].assessment?.status, "ready", "B1.2 must keep its ready assessment alongside the completed audio");
  assert.equal(b1Lessons[1].assessment?.minimumScore, 80, "B1.2 must retain the 80 percent mastery threshold");
  assert.equal(b1Lessons[1].quiz?.length, 10, "B1.2 must include ten scored questions");
  assert.equal(b1Lessons[1].performanceTasks?.length, 2, "B1.2 must include two practical self-check tasks");
  assert.equal(b1Lessons[1].performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-02-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), true, "B1.2 performance tasks must map to the source activity and work locally without generated audio");
  const b1FoodSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-02-food-habits-obwohl.md"), "utf8");
  assert.match(b1FoodSource, /Er wählt häufig Gemüse und Hülsenfrüchte/);
  const b1FoodReadingQuestion = b1Lessons[1].quiz.find((question) => question.id === "DL-B1-02-Q07");
  assert.ok(b1FoodReadingQuestion.sourceTaskIds.includes("DL-B1-02-T05"), "B1.2 frequency question must link to the source reading task");
  assert.equal(b1FoodReadingQuestion.options[b1FoodReadingQuestion.answerIndex], "Drei- oder viermal.", "the B1.2 reading answer must agree with the source passage");
  const b1FoodListeningQuestion = b1Lessons[1].quiz.find((question) => question.id === "DL-B1-02-Q09");
  assert.ok(b1FoodListeningQuestion.sourceTaskIds.includes("DL-B1-02-T06"), "B1.2 listening question must link to its source listening task");
  assert.equal(b1FoodListeningQuestion.options[b1FoodListeningQuestion.answerIndex], "Am Sonntag.", "the B1.2 listening answer must agree with its source passage");
  const b1WorkSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-03-work-communication-konjunktiv.md"), "utf8");
  const b1WorkAssessment = b1Lessons[2];
  assert.equal(b1WorkAssessment.assessment?.status, "ready", "B1.3 must have a ready local assessment before its audio batch");
  assert.equal(b1WorkAssessment.assessment?.minimumScore, 80, "B1.3 must retain the 80 percent mastery threshold");
  assert.equal(b1WorkAssessment.quiz?.length, 10, "B1.3 must include ten scored questions");
  assert.equal(b1WorkAssessment.performanceTasks?.length, 2, "B1.3 must include two practical self-check tasks");
  assert.equal(b1WorkAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-03-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), true, "B1.3 performance tasks must map to the source application/meeting activity and work without audio");
  assert.match(b1WorkSource, /Wir suchen eine zuverlässige Person für unser Team/);
  const b1WorkReadingQuestion = b1WorkAssessment.quiz.find((question) => question.id === "DL-B1-03-Q07");
  assert.ok(b1WorkReadingQuestion.sourceTaskIds.includes("DL-B1-03-T05"), "B1.3 job question must link to the source advertisement task");
  assert.equal(b1WorkReadingQuestion.options[b1WorkReadingQuestion.answerIndex], "Eine Teilzeitstelle als Assistenz.", "the B1.3 reading answer must agree with the source advertisement");
  const b1WorkListeningQuestion = b1WorkAssessment.quiz.find((question) => question.id === "DL-B1-03-Q09");
  assert.ok(b1WorkListeningQuestion.sourceTaskIds.includes("DL-B1-03-T06"), "B1.3 caller question must link to the source listening task");
  assert.equal(b1WorkListeningQuestion.options[b1WorkListeningQuestion.answerIndex], "Farid aus dem Projektteam.", "the B1.3 listening answer must agree with its source script");
  const b1EducationSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-04-continuing-education-damit.md"), "utf8");
  const b1EducationAssessment = b1Lessons[3];
  assert.equal(b1EducationAssessment.assessment?.status, "ready", "B1.4 must have a ready local assessment before its audio batch");
  assert.equal(b1EducationAssessment.assessment?.minimumScore, 80, "B1.4 must retain the 80 percent mastery threshold");
  assert.equal(b1EducationAssessment.quiz?.length, 10, "B1.4 must include ten scored questions");
  assert.equal(b1EducationAssessment.performanceTasks?.length, 2, "B1.4 must include two practical self-check tasks");
  assert.equal(b1EducationAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-04-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), true, "B1.4 performance tasks must map to the learning-plan source task and work without audio");
  assert.match(b1EducationSource, /Die Lehrkraft gibt Beispiele/);
  const b1EducationReadingQuestion = b1EducationAssessment.quiz.find((question) => question.id === "DL-B1-04-Q05");
  assert.ok(b1EducationReadingQuestion.sourceTaskIds.includes("DL-B1-04-T05"), "B1.4 reading question must link to the source reading activity");
  assert.equal(b1EducationReadingQuestion.options[b1EducationReadingQuestion.answerIndex], "Für Tabellenkalkulation.", "the B1.4 reading answer must agree with the source passage");
  const b1EducationListeningQuestion = b1EducationAssessment.quiz.find((question) => question.id === "DL-B1-04-Q08");
  assert.ok(b1EducationListeningQuestion.sourceTaskIds.includes("DL-B1-04-T06"), "B1.4 listening question must link to the source listening activity");
  assert.equal(b1EducationListeningQuestion.options[b1EducationListeningQuestion.answerIndex], "Im Bereich Kommunikation.", "the B1.4 listening answer must agree with the source script");
  const b1CitiesSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-05-cities-relative-clauses.md"), "utf8");
  const b1CitiesAssessment = b1Lessons[4];
  assert.equal(b1CitiesAssessment.assessment?.status, "ready", "B1.5 must retain its ready local assessment after the audio batch");
  assert.equal(b1CitiesAssessment.assessment?.minimumScore, 80, "B1.5 must retain the 80 percent mastery threshold");
  assert.equal(b1CitiesAssessment.quiz?.length, 10, "B1.5 must include ten scored questions");
  assert.equal(b1CitiesAssessment.performanceTasks?.length, 2, "B1.5 must include two practical self-check tasks");
  assert.equal(b1CitiesAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-05-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), true, "B1.5 performance tasks must map to the city-description activity and work without audio");
  assert.match(b1CitiesSource, /أو قدّمه شفهيًا/);
  const b1CitiesGrammarQuestion = b1CitiesAssessment.quiz.find((question) => question.id === "DL-B1-05-Q02");
  assert.ok(b1CitiesGrammarQuestion.sourceTaskIds.includes("DL-B1-05-T02"), "B1.5 relative-pronoun question must map to its source fill-in task");
  assert.equal(b1CitiesGrammarQuestion.options[b1CitiesGrammarQuestion.answerIndex], "den", "the B1.5 masculine accusative relative pronoun must be den");
  const b1CitiesCaseQuestion = b1CitiesAssessment.quiz.find((question) => question.id === "DL-B1-05-Q04");
  assert.ok(b1CitiesCaseQuestion.sourceTaskIds.includes("DL-B1-05-T07"), "B1.5 case-identification question must map to its source case task");
  const b1CitiesReadingQuestion = b1CitiesAssessment.quiz.find((question) => question.id === "DL-B1-05-Q07");
  assert.ok(b1CitiesReadingQuestion.sourceTaskIds.includes("DL-B1-05-T05"), "B1.5 reading question must link to the source reading activity");
  assert.equal(b1CitiesReadingQuestion.options[b1CitiesReadingQuestion.answerIndex], "Auf dem Marktplatz.", "the B1.5 reading answer must agree with the source passage");
  const b1CitiesListeningQuestion = b1CitiesAssessment.quiz.find((question) => question.id === "DL-B1-05-Q09");
  assert.ok(b1CitiesListeningQuestion.sourceTaskIds.includes("DL-B1-05-T06"), "B1.5 listening question must link to the source listening activity");
  assert.equal(b1CitiesListeningQuestion.options[b1CitiesListeningQuestion.answerIndex], "Südlich der Innenstadt.", "the B1.5 listening answer must agree with its source script");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b1CitiesAssessment.id), true, "B1.5 audio must remain bundled with its assessed lesson");
  const b1HealthSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-06-health-fitness-advice.md"), "utf8");
  const b1HealthAssessment = b1Lessons[5];
  assert.equal(b1HealthAssessment.assessment?.status, "ready", "B1.6 must retain its ready local assessment alongside the integrated audio");
  assert.equal(b1HealthAssessment.assessment?.minimumScore, 80, "B1.6 must enforce the 80 percent mastery threshold");
  assert.equal(b1HealthAssessment.quiz?.length, 10, "B1.6 must include ten scored questions");
  assert.equal(b1HealthAssessment.performanceTasks?.length, 2, "B1.6 must include two practical self-check tasks");
  assert.equal(b1HealthAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-06-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking")), true, "B1.6 performance tasks must map to the general-advice source task, offer oral and written modes, and work without audio");
  assert.match(b1HealthSource, /أو قدّم النصائح شفهيًا/);
  const b1HealthQuestionSources = new Set(b1HealthAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b1HealthQuestionSources.has(`DL-B1-06-T0${task}`), `B1.6 quiz must cover source task T0${task}`);
  const b1HealthReadingQuestion = b1HealthAssessment.quiz.find((question) => question.id === "DL-B1-06-Q06");
  assert.ok(b1HealthReadingQuestion.sourceTaskIds.includes("DL-B1-06-T05"), "B1.6 reading question must map to the source reading activity");
  assert.equal(b1HealthReadingQuestion.options[b1HealthReadingQuestion.answerIndex], "Zweimal pro Woche.", "the B1.6 reading answer must agree with the lesson source");
  const b1HealthListeningQuestion = b1HealthAssessment.quiz.find((question) => question.id === "DL-B1-06-Q08");
  assert.ok(b1HealthListeningQuestion.sourceTaskIds.includes("DL-B1-06-T06"), "B1.6 listening question must map to the source listening activity");
  assert.equal(b1HealthListeningQuestion.options[b1HealthListeningQuestion.answerIndex], "Seit vier Wochen.", "the B1.6 listening answer must agree with the source script");
  const b1HealthRewriteQuestion = b1HealthAssessment.quiz.find((question) => question.id === "DL-B1-06-Q10");
  assert.ok(b1HealthRewriteQuestion.sourceTaskIds.includes("DL-B1-06-T07"), "B1.6 paraphrase question must map to the source transformation activity");
  assert.equal(b1HealthRewriteQuestion.options[b1HealthRewriteQuestion.answerIndex], "Du könntest in der Pause einen Spaziergang machen.", "the B1.6 answer must correctly place the modal infinitive at the sentence end");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b1HealthAssessment.id), true, "B1.6 audio must be integrated with its ready assessment");
  const b1LifestylesSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-07-lifestyles-customs-cultures.md"), "utf8");
  const b1LifestylesAssessment = b1Lessons[6];
  assert.equal(b1LifestylesAssessment.assessment?.status, "ready", "B1.7 must have a ready local assessment before any audio batch");
  assert.equal(b1LifestylesAssessment.assessment?.minimumScore, 80, "B1.7 must enforce the 80 percent mastery threshold");
  assert.equal(b1LifestylesAssessment.quiz?.length, 10, "B1.7 must include ten scored questions");
  assert.equal(b1LifestylesAssessment.performanceTasks?.length, 2, "B1.7 must include two practical self-check tasks");
  assert.equal(b1LifestylesAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-07-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true), true, "B1.7 performance tasks must map to the routine-description activity, offer oral and written modes, and work locally without audio");
  assert.match(b1LifestylesSource, /تقديمها شفهيًا/);
  assert.match(b1LifestylesSource, /لا تعمّم عادةً على ثقافة أو بلد كامل/);
  const b1LifestylesQuestionSources = new Set(b1LifestylesAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (const task of [1, 2, 3, 4, 5, 6, 7]) assert.ok(b1LifestylesQuestionSources.has(`DL-B1-07-T0${task}`), `B1.7 quiz must cover source task T0${task}`);
  const b1LifestylesLinkQuestion = b1LifestylesAssessment.quiz.find((question) => question.id === "DL-B1-07-Q02");
  assert.equal(b1LifestylesLinkQuestion.options[b1LifestylesLinkQuestion.answerIndex], "sowohl / als auch", "B1.7 both-and question must use the source connector correctly");
  const b1LifestylesReadingQuestion = b1LifestylesAssessment.quiz.find((question) => question.id === "DL-B1-07-Q09");
  assert.ok(b1LifestylesReadingQuestion.sourceTaskIds.includes("DL-B1-07-T05"), "B1.7 Noura question must map to the source reading activity");
  assert.equal(b1LifestylesReadingQuestion.options[b1LifestylesReadingQuestion.answerIndex], "لأنها تعمل متأخرة أحيانًا.", "B1.7 reading answer must agree with the lesson source");
  const b1LifestylesScriptQuestion = b1LifestylesAssessment.quiz.find((question) => question.id === "DL-B1-07-Q08");
  assert.ok(b1LifestylesScriptQuestion.sourceTaskIds.includes("DL-B1-07-T06"), "B1.7 script-comprehension question must map to the source listening script");
  assert.equal(b1LifestylesAssessment.performanceTasks.every((task) => /تعمّم|تعميم/.test(task.prompt)), true, "B1.7 performance prompts must keep examples specific and avoid cultural generalizations");
  const b1LifestylesAudioAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b1LifestylesAssessment.id);
  assert.equal(b1LifestylesAudioAssets.length, 5, "B1.7 must expose all five completed audio assets");
  assert.equal(b1LifestylesAudioAssets.reduce((count, asset) => count + asset.segments.length, 0), 12, "B1.7 must include vocabulary, model examples, all eight dialogue turns, reading, and listening");
  assert.deepEqual(b1LifestylesAudioAssets.map((asset) => asset.assetId), ["DL-B1-07-AUD-PHR-01", "DL-B1-07-AUD-MODEL-01", "DL-B1-07-AUD-DLG-01", "DL-B1-07-AUD-READ-01", "DL-B1-07-AUD-LST-01"], "all planned B1.7 audio categories must be visible in lesson order");
  assert.ok(b1LifestylesAudioAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "all B1.7 assets must be ready and transcript-enabled in the lesson");
  const b1LifestylesPhrase = b1LifestylesAudioAssets.find((asset) => asset.assetId === "DL-B1-07-AUD-PHR-01");
  assert.equal(b1LifestylesPhrase.segments[0].voiceId, "voice-02", "B1.7 vocabulary must use the established narrator");
  for (const term of ["Der Lebensstil", "Die Alltagsroutine", "Die Begegnung", "Der Austausch", "Die Gemeinschaft", "Die Vielfalt", "Die Tradition", "Die Verabredung", "Die Rücksicht", "Individuell", "Gemeinsam", "Unterschiedlich"]) {
    assert.ok(b1LifestylesPhrase.segments[0].text.includes(term), `B1.7 vocabulary audio must include ${term}`);
  }
  const b1LifestylesModel = b1LifestylesAudioAssets.find((asset) => asset.assetId === "DL-B1-07-AUD-MODEL-01");
  const sourceB1LifestylesExamples = b1LifestylesSource.split("## 2) الروابط الثنائية")[1].split("## 3)")[0]
    .split(/\r?\n/).filter((line) => line.startsWith("| **"))
    .map((line) => [...line.matchAll(/\*\*(.*?)\*\*/g)].map((match) => match[1]).at(-1)).join(" ");
  const sourceB1LifestylesPluralExample = b1LifestylesSource.match(/(Sowohl die Nachbarn als auch die Gäste helfen beim Fest\.)/)[1];
  assert.equal(b1LifestylesModel.segments[0].text, `${sourceB1LifestylesExamples} ${sourceB1LifestylesPluralExample}`, "B1.7 model audio must match all source connector examples");
  assert.equal(b1LifestylesModel.segments[0].voiceId, "voice-02", "B1.7 model examples must use the established narrator");
  const b1LifestylesDialogue = b1LifestylesAudioAssets.find((asset) => asset.assetId === "DL-B1-07-AUD-DLG-01");
  const sourceB1LifestylesTurns = b1LifestylesSource.split("## 3) حوار أصلي عن الروتين في سكن مشترك")[1].split("## 4) نص قراءة أصلي")[0]
    .split(/\r?\n/).filter((line) => /^\*\*(Laila|Omar):\*\*/.test(line))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1LifestylesDialogue.segments.map((segment) => segment.text), sourceB1LifestylesTurns, "B1.7 dialogue must preserve all eight source turns");
  assert.deepEqual(b1LifestylesDialogue.segments.map((segment) => segment.speaker), ["Laila", "Omar", "Laila", "Omar", "Laila", "Omar", "Laila", "Omar"], "B1.7 dialogue speaker order must match the lesson");
  assert.ok(b1LifestylesDialogue.segments.filter((segment) => segment.speaker === "Laila").every((segment) => segment.voiceId === "voice-02"), "Laila must retain voice-02 from A2.12");
  assert.ok(b1LifestylesDialogue.segments.filter((segment) => segment.speaker === "Omar").every((segment) => segment.voiceId === "voice-03"), "Omar must retain voice-03 from A2.12");
  const a2LailaVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-12-AUD-DLG-01").segments.find((segment) => segment.speaker === "Laila").voiceId;
  const a2OmarVoice = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-12-AUD-DLG-01").segments.find((segment) => segment.speaker === "Omar").voiceId;
  assert.equal(b1LifestylesDialogue.segments.find((segment) => segment.speaker === "Laila").voiceId, a2LailaVoice, "Laila must keep the selected voice from A2.12");
  assert.equal(b1LifestylesDialogue.segments.find((segment) => segment.speaker === "Omar").voiceId, a2OmarVoice, "Omar must keep the selected voice from A2.12");
  const b1LifestylesReading = b1LifestylesAudioAssets.find((asset) => asset.assetId === "DL-B1-07-AUD-READ-01");
  const sourceB1LifestylesReading = b1LifestylesSource.split("## 4) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).map((line) => line.trim()).find((line) => line.startsWith("> ")).slice(2);
  assert.equal(b1LifestylesReading.segments[0].text, sourceB1LifestylesReading, "B1.7 reading audio must preserve the complete source text");
  assert.equal(b1LifestylesReading.segments[0].voiceId, "voice-02", "B1.7 reading must use the established narrator");
  const b1LifestylesListening = b1LifestylesAudioAssets.find((asset) => asset.assetId === "DL-B1-07-AUD-LST-01");
  const sourceB1LifestylesListening = b1LifestylesSource.split("## 5) نص استماع معدّ للنطق")[1].split("أجب:")[0]
    .split(/\r?\n/).map((line) => line.trim()).find((line) => line.startsWith("> ")).slice(2);
  assert.equal(b1LifestylesListening.segments[0].text, sourceB1LifestylesListening, "B1.7 listening audio must preserve the complete source script");
  assert.equal(b1LifestylesListening.segments[0].voiceId, "voice-03", "B1.7 listening must use the established listening voice");
  const b1LifestylesAudioMarkup = vm.runInContext("renderAudioAssets('b1-07-lifestyles-customs-cultures')", context);
  assert.match(b1LifestylesAudioMarkup, /حوار: Laila وOmar عن الروتين في السكن المشترك/);
  assert.match(b1LifestylesAudioMarkup, /نهائي/);
  assert.doesNotMatch(b1LifestylesAudioMarkup, /للمراجعة/);
  const b1ConsumptionSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-08-consumption-advertising-je-desto.md"), "utf8");
  const b1ConsumptionAssessment = b1Lessons[7];
  assert.equal(b1ConsumptionAssessment.id, "b1-08-consumption-advertising-je-desto", "B1.8 must stay in its source order");
  assert.equal(b1ConsumptionAssessment.assessment?.status, "ready", "B1.8 must have a ready local assessment");
  assert.equal(b1ConsumptionAssessment.assessment?.minimumScore, 80, "B1.8 must retain the 80 percent mastery threshold");
  assert.equal(b1ConsumptionAssessment.assessment?.minimumItems, 10, "B1.8 must require ten scored questions");
  assert.equal(b1ConsumptionAssessment.assessment?.performanceEvidenceRequired, true, "B1.8 mastery must require its two practical tasks");
  assert.equal(b1ConsumptionAssessment.assessment?.performanceEvidenceImplemented, true, "B1.8 practical checks must be implemented locally");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[7])", context), true, "B1.8 must pass the app's full local assessment-readiness check");
  assert.equal(b1ConsumptionAssessment.quiz?.length, 10, "B1.8 must include exactly ten scored questions");
  assert.equal(b1ConsumptionAssessment.performanceTasks?.length, 2, "B1.8 must include two practical self-check tasks");
  assert.equal(b1ConsumptionAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-08-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true), true, "B1.8 performance tasks must map to T08 and offer local written/oral work without requiring a recording");
  const b1ConsumptionQuestionSources = new Set(b1ConsumptionAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b1ConsumptionQuestionSources.has(`DL-B1-08-T0${task}`), `B1.8 quiz must cover source task T0${task}`);
  assert.equal(b1ConsumptionAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B1-08-G01")), true, "all B1.8 questions must map to the lesson objective");
  assert.deepEqual(b1ConsumptionAssessment.quiz.find((question) => question.id === "DL-B1-08-Q08").sourceTaskIds, ["DL-B1-08-T05", "DL-B1-08-T07"], "B1.8 Q08 must link to reading T05 and advertising task T07");
  assert.match(b1ConsumptionSource, /اكتب خمس جمل تقارن بين منتجين خياليين/);
  assert.match(b1ConsumptionSource, /تقديمها شفهيًا/);
  assert.match(b1ConsumptionSource, /اكتبها ثم اقرأها بصوت واضح/);
  assert.match(b1ConsumptionSource, /لا يلزم تسجيل الصوت/);
  assert.equal(b1ConsumptionAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), true, "B1.8 assessment must not depend on its optional lesson recordings");
  const b1ConsumptionAudioAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b1ConsumptionAssessment.id);
  assert.equal(b1ConsumptionAudioAssets.length, 5, "B1.8 must expose five lesson-mapped audio assets");
  assert.equal(b1ConsumptionAudioAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.8 must expose all ten generated audio clips");
  assert.ok(b1ConsumptionAudioAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.8 recordings must be ready in the lesson with transcripts available");
  const b1ConsumptionPhrase = b1ConsumptionAudioAssets.find((asset) => asset.assetId === "DL-B1-08-AUD-PHR-01");
  const b1ConsumptionModel = b1ConsumptionAudioAssets.find((asset) => asset.assetId === "DL-B1-08-AUD-MODEL-01");
  assert.equal(b1ConsumptionPhrase.segments[0].voiceId, "voice-02", "B1.8 vocabulary must retain the established narrator");
  assert.equal(b1ConsumptionModel.segments[0].voiceId, "voice-02", "B1.8 model sentences must retain the established narrator");
  assert.ok(["Die Zielgruppe", "Der Rabatt", "Die Kundenbewertung", "Der Endpreis"].every((term) => b1ConsumptionPhrase.segments[0].text.includes(term)), "B1.8 vocabulary audio must include the assessed product terms");
  const b1ConsumptionDialogue = b1ConsumptionAudioAssets.find((asset) => asset.assetId === "DL-B1-08-AUD-DLG-01");
  const sourceB1ConsumptionDialogue = b1ConsumptionSource.split("## 3) حوار أصلي عن مقارنة منتجين")[1].split("## 4)")[0]
    .split(/\r?\n/).filter((line) => /^\*\*(Mira|Bilal):\*\*/.test(line))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1ConsumptionDialogue.segments.map((segment) => segment.text), sourceB1ConsumptionDialogue, "B1.8 dialogue must preserve all six source turns");
  assert.deepEqual(b1ConsumptionDialogue.segments.map((segment) => segment.speaker), ["Mira", "Bilal", "Mira", "Bilal", "Mira", "Bilal"], "B1.8 dialogue speakers must follow the source");
  assert.ok(b1ConsumptionDialogue.segments.filter((segment) => segment.speaker === "Mira").every((segment) => segment.voiceId === "voice-02"), "Mira must keep her established B1.2 voice in B1.8");
  assert.ok(b1ConsumptionDialogue.segments.filter((segment) => segment.speaker === "Bilal").every((segment) => segment.voiceId === "voice-05"), "Bilal must keep the selected new masculine voice throughout the dialogue");
  const b1ConsumptionReading = b1ConsumptionAudioAssets.find((asset) => asset.assetId === "DL-B1-08-AUD-READ-01");
  const sourceB1ConsumptionReading = b1ConsumptionSource.split("## 4) نص قراءة أصلي: إعلان ومعلومات المنتج")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1ConsumptionReading.segments[0].text, sourceB1ConsumptionReading, "B1.8 reading transcript must match the source passage");
  assert.equal(b1ConsumptionReading.segments[0].speaker, "Erzählerin B1.8", "B1.8 reading must use its distinct reading narrator, not replace the Salma character's established voice");
  assert.equal(b1ConsumptionReading.segments[0].voiceId, "voice-04", "B1.8 reading must use the selected feminine voice");
  const b1ConsumptionListening = b1ConsumptionAudioAssets.find((asset) => asset.assetId === "DL-B1-08-AUD-LST-01");
  const sourceB1ConsumptionListening = b1ConsumptionSource.split("## 5) نص استماع معدّ للنطق")[1].split("أجب:")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1ConsumptionListening.segments[0].text, sourceB1ConsumptionListening, "B1.8 listening transcript must match the source script");
  assert.equal(b1ConsumptionListening.segments[0].voiceId, "voice-03", "B1.8 listening must keep the established listening narrator voice");
  const b1TravelSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-09-travel-transport-environment.md"), "utf8");
  const b1TravelAssessment = b1Lessons[8];
  assert.equal(b1TravelAssessment.id, "b1-09-travel-transport-environment", "B1.9 must stay in its source order");
  assert.equal(b1TravelAssessment.assessment?.status, "ready", "B1.9 must have a ready local assessment");
  assert.equal(b1TravelAssessment.assessment?.minimumScore, 80, "B1.9 must retain the 80 percent mastery threshold");
  assert.equal(b1TravelAssessment.assessment?.minimumItems, 10, "B1.9 must require ten scored questions");
  assert.equal(b1TravelAssessment.assessment?.performanceEvidenceRequired, true, "B1.9 mastery must require practical tasks");
  assert.equal(b1TravelAssessment.assessment?.performanceEvidenceImplemented, true, "B1.9 practical checks must be implemented locally");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[8])", context), true, "B1.9 must pass the app's full local assessment-readiness check");
  assert.equal(b1TravelAssessment.quiz?.length, 10, "B1.9 must include exactly ten scored questions");
  assert.equal(b1TravelAssessment.performanceTasks?.length, 2, "B1.9 must include two practical self-check tasks");
  const b1TravelAudioAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b1TravelAssessment.id);
  assert.equal(b1TravelAudioAssets.length, 5, "B1.9 must expose five lesson-mapped audio assets");
  assert.equal(b1TravelAudioAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.9 must expose all ten generated clips");
  assert.ok(b1TravelAudioAssets.every((asset) => asset.status === "generated_pending_acoustic_review" && asset.transcriptPolicy === "offer"), "B1.9 audio must remain playable for preview with transcripts available until voice approval");
  assert.deepEqual(b1TravelAudioAssets.map((asset) => asset.assetId), ["DL-B1-09-AUD-PHR-01", "DL-B1-09-AUD-MODEL-01", "DL-B1-09-AUD-DLG-01", "DL-B1-09-AUD-READ-01", "DL-B1-09-AUD-LST-01"], "B1.9 must expose all five audio categories in lesson order");
  const b1TravelPhrase = b1TravelAudioAssets.find((asset) => asset.assetId === "DL-B1-09-AUD-PHR-01");
  const b1TravelModel = b1TravelAudioAssets.find((asset) => asset.assetId === "DL-B1-09-AUD-MODEL-01");
  assert.equal(b1TravelPhrase.segments[0].voiceId, "voice-02", "B1.9 vocabulary must retain the established course narrator");
  assert.equal(b1TravelModel.segments[0].voiceId, "voice-02", "B1.9 model sentences must retain the established course narrator");
  for (const term of ["Der Fahrplan", "Die Abfahrt", "Der Anschluss", "Der Umstieg", "Die Verspätung", "Das Verkehrsmittel", "Der Nahverkehr", "Die Fahrkarte", "Die Umwelt", "Die Emission", "Umsteigen", "Ausfallen", "Sich verspäten", "Klimafreundlich", "Pünktlich"]) {
    assert.ok(b1TravelPhrase.segments[0].text.includes(term), `B1.9 vocabulary audio must include ${term}`);
  }
  assert.match(b1TravelModel.segments[0].text, /Nachdem der Zug angekommen war, suchten wir den Anschluss/);
  const b1TravelDialogue = b1TravelAudioAssets.find((asset) => asset.assetId === "DL-B1-09-AUD-DLG-01");
  const sourceB1TravelDialogue = b1TravelSource.split("## 3) حوار أصلي لتخطيط رحلة")[1].split("## 4) نص قراءة أصلي")[0]
    .split(/\r?\n/).filter((line) => /^\*\*(Mina|Karim):\*\*/.test(line))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1TravelDialogue.segments.map((segment) => segment.text), sourceB1TravelDialogue, "B1.9 dialogue transcript must match all six source turns");
  assert.deepEqual(b1TravelDialogue.segments.map((segment) => segment.speaker), ["Mina", "Karim", "Mina", "Karim", "Mina", "Karim"], "B1.9 dialogue speaker order must match the lesson");
  assert.ok(b1TravelDialogue.segments.filter((segment) => segment.speaker === "Mina").every((segment) => segment.voiceId === "voice-02"), "Mina must use the established feminine dialogue voice");
  assert.ok(b1TravelDialogue.segments.filter((segment) => segment.speaker === "Karim").every((segment) => segment.voiceId === "voice-03"), "Karim must use the established masculine dialogue voice");
  const b1TravelReading = b1TravelAudioAssets.find((asset) => asset.assetId === "DL-B1-09-AUD-READ-01");
  const sourceB1TravelReading = b1TravelSource.split("## 4) نص قراءة أصلي")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1TravelReading.segments[0].text, sourceB1TravelReading, "B1.9 reading transcript must match the source passage");
  assert.equal(b1TravelReading.segments[0].voiceId, "voice-02", "B1.9 reading must keep the established reading narrator");
  const b1TravelListening = b1TravelAudioAssets.find((asset) => asset.assetId === "DL-B1-09-AUD-LST-01");
  const sourceB1TravelListening = b1TravelSource.split("## 5) نص استماع معدّ للنطق")[1].split("أجب:")[0]
    .split(/\r?\n/).find((line) => line.trim().startsWith("> ")).trim().slice(1).trim();
  assert.equal(b1TravelListening.segments[0].text, sourceB1TravelListening, "B1.9 listening transcript must match the source script");
  assert.equal(b1TravelListening.segments[0].voiceId, "voice-03", "B1.9 listening must keep the established listening narrator");
  const b1TravelAudioMarkup = vm.runInContext("renderAudioAssets('b1-09-travel-transport-environment')", context);
  assert.match(b1TravelAudioMarkup, /حوار: Mina وKarim يخططان رحلة/);
  assert.match(b1TravelAudioMarkup, /متاحة للمراجعة/);
  assert.match(b1TravelAudioMarkup, /للمراجعة/);
  assert.doesNotMatch(b1TravelAudioMarkup, /نهائي/);
  assert.match(b1TravelAudioMarkup, /اعرض النص الألماني/);
  const b1TravelQuestionSources = new Set(b1TravelAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b1TravelQuestionSources.has(`DL-B1-09-T0${task}`), `B1.9 quiz must cover source task T0${task}`);
  assert.ok(b1TravelAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B1-09-G01")), "all B1.9 questions must map to the lesson objective");
  assert.ok(b1TravelAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-09-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true), "B1.9 performance tasks must map to T08 and offer local written/oral work without requiring a recording");
  assert.deepEqual(b1TravelAssessment.performanceTasks.find((task) => task.id === "DL-B1-09-P02").sourceTaskIds, ["DL-B1-09-T06", "DL-B1-09-T08"], "B1.9 P02 must link its cancelled-bus scenario to the written listening source and trip-plan task");
  assert.match(b1TravelSource, /يمكنك كتابة الخطة أو تقديمها شفهيًا/);
  assert.match(b1TravelSource, /اكتبها ثم اقرأها بصوت واضح/);
  assert.match(b1TravelSource, /لا يلزم تسجيل الصوت/);
  assert.equal(b1TravelAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), true, "B1.9 assessment must not depend on its optional lesson recordings");
  const b1MediaSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-10-media-news-formal-communication.md"), "utf8");
  const b1MediaAssessment = b1Lessons[9];
  assert.equal(b1MediaAssessment.id, "b1-10-media-news-formal-communication", "B1.10 must stay in its source order");
  assert.equal(b1MediaAssessment.assessment?.status, "ready", "B1.10 must have a ready local assessment");
  assert.equal(b1MediaAssessment.assessment?.minimumScore, 80, "B1.10 must retain the 80 percent mastery threshold");
  assert.equal(b1MediaAssessment.assessment?.minimumItems, 10, "B1.10 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[9])", context), true, "B1.10 must pass the app's full local assessment-readiness check");
  assert.equal(b1MediaAssessment.quiz?.length, 10, "B1.10 must include exactly ten scored questions");
  assert.equal(b1MediaAssessment.performanceTasks?.length, 2, "B1.10 must include two practical self-check tasks");
  const b1MediaQuestionSources = new Set(b1MediaAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b1MediaQuestionSources.has(`DL-B1-10-T0${task}`), `B1.10 quiz must cover source task T0${task}`);
  assert.ok(b1MediaAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B1-10-G01")), "all B1.10 questions must map to the lesson objective");
  assert.ok(b1MediaAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-10-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true), "B1.10 performance tasks must map to T08 and offer local written/oral work without requiring a recording");
  assert.deepEqual(b1MediaAssessment.performanceTasks.find((task) => task.id === "DL-B1-10-P02").sourceTaskIds, ["DL-B1-10-T06", "DL-B1-10-T08"], "B1.10 P02 must link its phone inquiry scenario to T06 and T08");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b1MediaAssessment.id), false, "B1.10 assessment must remain independent of generated audio");
  assert.match(b1MediaSource, /تقديم الاستفسار شفهيًا في محاكاة اتصال هاتفي/);
  assert.match(b1MediaSource, /اكتب نص الاتصال ثم اقرأه بصوت واضح/);
  assert.match(b1MediaSource, /لا يلزم تسجيل/);
  assert.equal(b1MediaAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), true, "B1.10 assessment must not depend on optional lesson recordings");
  const b1CivicSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-11-history-politics-passive-past.md"), "utf8");
  const b1CivicAssessment = b1Lessons[10];
  assert.equal(b1CivicAssessment.id, "b1-11-history-politics-passive-past", "B1.11 must stay in its source order");
  assert.equal(b1CivicAssessment.assessment?.status, "ready", "B1.11 must have a ready local assessment");
  assert.equal(b1CivicAssessment.assessment?.minimumScore, 80, "B1.11 must retain the 80 percent mastery threshold");
  assert.equal(b1CivicAssessment.assessment?.minimumItems, 10, "B1.11 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[10])", context), true, "B1.11 must pass the app's full local assessment-readiness check");
  assert.equal(b1CivicAssessment.quiz?.length, 10, "B1.11 must include exactly ten scored questions");
  assert.equal(b1CivicAssessment.performanceTasks?.length, 2, "B1.11 must include two practical self-check tasks");
  const b1CivicQuestionSources = new Set(b1CivicAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b1CivicQuestionSources.has(`DL-B1-11-T0${task}`), `B1.11 quiz must cover source task T0${task}`);
  assert.ok(b1CivicAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B1-11-G01")), "all B1.11 questions must map to the lesson objective");
  assert.ok(b1CivicAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-11-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true), "B1.11 performance tasks must map to T08 and offer local written/oral work without requiring a recording");
  assert.deepEqual(b1CivicAssessment.performanceTasks.find((task) => task.id === "DL-B1-11-P02").sourceTaskIds, ["DL-B1-11-T06", "DL-B1-11-T08"], "B1.11 P02 must link the museum listening script to the timeline task");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b1CivicAssessment.id), false, "B1.11 assessment must remain independent of generated audio");
  assert.match(b1CivicSource, /اكتب أو اعرض شفهيًا خطًّا زمنيًا/);
  assert.match(b1CivicSource, /لا يلزم تسجيل/);
  assert.equal(b1CivicAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), true, "B1.11 assessment must not depend on optional lesson recordings");
  const b1FutureSource = fs.readFileSync(path.join(rootDir, "content/B1/lesson-12-innovation-research-future.md"), "utf8");
  const b1FutureAssessment = b1Lessons[11];
  assert.equal(b1Lessons.length, 12, "B1 must retain all twelve lessons");
  assert.equal(b1FutureAssessment.id, "b1-12-innovation-research-future", "B1.12 must stay in its source order");
  assert.equal(b1FutureAssessment.assessment?.status, "ready", "B1.12 must have a ready local assessment");
  assert.equal(b1FutureAssessment.assessment?.minimumScore, 80, "B1.12 must retain the 80 percent mastery threshold");
  assert.equal(b1FutureAssessment.assessment?.minimumItems, 10, "B1.12 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[11])", context), true, "B1.12 must pass the app's full local assessment-readiness check");
  assert.equal(b1FutureAssessment.quiz?.length, 10, "B1.12 must include exactly ten scored questions");
  assert.equal(b1FutureAssessment.performanceTasks?.length, 2, "B1.12 must include two practical self-check tasks");
  const b1FutureQuestionSources = new Set(b1FutureAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b1FutureQuestionSources.has(`DL-B1-12-T0${task}`), `B1.12 quiz must cover source task T0${task}`);
  assert.ok(b1FutureAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B1-12-G01")), "all B1.12 questions must map to the lesson objective");
  assert.ok(b1FutureAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-12-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true), "B1.12 performance tasks must map to T08 and offer local written/oral work without requiring a recording");
  assert.deepEqual(b1FutureAssessment.performanceTasks.find((task) => task.id === "DL-B1-12-P02").sourceTaskIds, ["DL-B1-12-T06", "DL-B1-12-T08"], "B1.12 P02 must link the schoolyard listening text and T08 presentation");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b1FutureAssessment.id), false, "B1.12 assessment must remain independent of generated audio");
  assert.match(b1FutureSource, /أو قدّمه شفهيًا/);
  assert.match(b1FutureSource, /اكتب النص ثم اقرأه بصوت واضح/);
  assert.match(b1FutureSource, /لا يلزم تسجيل/);
  assert.match(b1FutureSource, /Präsens.*وقت محدد لخطة متفق عليها/);
  const b2Lessons = vm.runInContext("getLessonsInLevel('B2')", context);
  assert.equal(b2Lessons.length, 12, "B2 must retain all twelve lessons");
  const b2MethodSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-01-time-management-habits-reading.md"), "utf8");
  const b2MethodAssessment = b2Lessons[0];
  assert.equal(b2MethodAssessment.id, "b2-01-time-management-habits-reading", "B2.1 must stay in its source order");
  assert.equal(b2MethodAssessment.assessment?.status, "ready", "B2.1 must have a ready local assessment");
  assert.equal(b2MethodAssessment.assessment?.minimumScore, 80, "B2.1 must retain the 80 percent mastery threshold");
  assert.equal(b2MethodAssessment.assessment?.minimumItems, 10, "B2.1 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[0])", context), true, "B2.1 must pass the app's full local assessment-readiness check");
  assert.equal(b2MethodAssessment.quiz?.length, 10, "B2.1 must include exactly ten scored questions");
  assert.equal(b2MethodAssessment.performanceTasks?.length, 2, "B2.1 must include two practical self-check tasks");
  const b2MethodQuestionSources = new Set(b2MethodAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2MethodQuestionSources.has(`DL-B2-01-T0${task}`), `B2.1 quiz must cover source task T0${task}`);
  assert.ok(b2MethodAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-01-G01")), "all B2.1 questions must map to the lesson objective");
  assert.ok(b2MethodAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-01-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true), "B2.1 performance tasks must map to T08 and offer written/oral self-checks without recording");
  assert.deepEqual(b2MethodAssessment.performanceTasks.find((task) => task.id === "DL-B2-01-P02").sourceTaskIds, ["DL-B2-01-T06", "DL-B2-01-T08"], "B2.1 P02 must link the written listening text and T08 method description");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b2MethodAssessment.id), false, "B2.1 assessment must remain independent of generated audio");
  assert.match(b2MethodSource, /أو قدّم شرحًا شفهيًا مماثلًا/);
  assert.match(b2MethodSource, /اكتب النص ثم اقرأه بصوت واضح/);
  assert.match(b2MethodSource, /لا يلزم تسجيل/);
  const b2T08Line = b2MethodSource.split("\n").find((line) => line.startsWith("اكتب فقرة من خمس إلى سبع جمل"));
  assert.ok(b2T08Line?.includes("**indem** أو **dadurch, dass**") && b2T08Line.includes("**um … zu**"), "B2.1 T08 must require a method link and a purpose link explicitly");
  assert.deepEqual(b2MethodAssessment.performanceTasks.find((task) => task.id === "DL-B2-01-P01").sourceTaskIds, ["DL-B2-01-T08"], "B2.1 P01 must link directly to the T08 practice");
  assert.ok(b2MethodAssessment.performanceTasks.every((task) => /indem أو dadurch, dass/.test(task.prompt) && /um … zu/.test(task.prompt)), "both B2.1 performance prompts must explicitly require a method link and an um … zu purpose link");
  assert.ok(b2MethodAssessment.performanceTasks.every((task) => /indem أو dadurch, dass/.test(task.criteria?.targetSkill) && /um … zu/.test(task.criteria?.targetSkill) && /الغاية/.test(task.criteria?.meaningClarity)), "both B2.1 local rubrics must explicitly assess the method/purpose distinction");
  const b2MethodRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[0].performanceTasks, 'lesson:b2-01-time-management-habits-reading', 'b2-01-v1')", context);
  assert.match(b2MethodRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2MethodRubricHtml, /indem/);
  assert.match(b2MethodRubricHtml, /dadurch, dass/);
  assert.match(b2MethodRubricHtml, /um … zu/);
  const b2CareerSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-02-career-formal-communication-konjunktiv1.md"), "utf8");
  const b2CareerAssessment = b2Lessons[1];
  assert.equal(b2CareerAssessment.id, "b2-02-career-formal-communication-konjunktiv1", "B2.2 must stay in its source order");
  assert.equal(b2CareerAssessment.assessment?.status, "ready", "B2.2 must have a ready local assessment");
  assert.equal(b2CareerAssessment.assessment?.minimumScore, 80, "B2.2 must retain the 80 percent mastery threshold");
  assert.equal(b2CareerAssessment.assessment?.minimumItems, 10, "B2.2 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[1])", context), true, "B2.2 must pass the app's full local assessment-readiness check");
  assert.equal(b2CareerAssessment.quiz?.length, 10, "B2.2 must include exactly ten scored questions");
  assert.equal(b2CareerAssessment.performanceTasks?.length, 2, "B2.2 must include two practical self-check tasks");
  const b2CareerQuestionSources = new Set(b2CareerAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2CareerQuestionSources.has(`DL-B2-02-T0${task}`), `B2.2 quiz must cover source task T0${task}`);
  assert.ok(b2CareerAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-02-G01")), "all B2.2 questions must map to the lesson objective");
  assert.ok(b2CareerAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-02-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true), "B2.2 performance tasks must map to T08 and offer written/oral self-checks without recording");
  assert.ok(b2CareerAssessment.performanceTasks.every((task) => /أربع إلى ست جمل/.test(task.prompt) && /Konjunktiv I/.test(task.criteria?.targetSkill) && task.selfCheck?.requiredChecks?.length === 3 && task.selfCheck?.minimumResponseCharacters >= 160), "B2.2 tasks must have explicit sentence/form criteria and local self-check thresholds");
  assert.deepEqual(b2CareerAssessment.performanceTasks.find((task) => task.id === "DL-B2-02-P02").sourceTaskIds, ["DL-B2-02-T06", "DL-B2-02-T08"], "B2.2 P02 must link the written listening script and T08 summary");
  assert.deepEqual(b2CareerAssessment.performanceTasks.find((task) => task.id === "DL-B2-02-P01").sourceTaskIds, ["DL-B2-02-T08"], "B2.2 P01 must link directly to T08");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b2CareerAssessment.id), false, "B2.2 assessment must remain independent of generated audio");
  assert.match(b2CareerSource, /اكتب أو قدّم ملخّصًا مهنيًا قصيرًا/);
  assert.match(b2CareerSource, /أربع إلى ست جمل ألمانية/);
  assert.match(b2CareerSource, /نسبة أربعة أقوال أو معلومات/);
  assert.match(b2CareerSource, /اكتب النص ثم اقرأه بصوت واضح/);
  assert.match(b2CareerSource, /لا يلزم تسجيل/);
  assert.match(b2CareerSource, /Konjunktiv II.*عند الحاجة/);
  const b2CareerRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[1].performanceTasks, 'lesson:b2-02-career-formal-communication-konjunktiv1', 'b2-02-v1')", context);
  assert.match(b2CareerRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2CareerRubricHtml, /Konjunktiv I/);
  assert.match(b2CareerRubricHtml, /مصدر/);
  const b2ConsumptionSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-03-consumption-environment-passive-modal.md"), "utf8");
  const b2ConsumptionAssessment = b2Lessons[2];
  assert.equal(b2ConsumptionAssessment.id, "b2-03-consumption-environment-passive-modal", "B2.3 must stay in its source order");
  assert.equal(b2ConsumptionAssessment.assessment?.status, "ready", "B2.3 must have a ready local assessment");
  assert.equal(b2ConsumptionAssessment.assessment?.version, "b2-03-v1", "B2.3 must use its stable assessment version");
  assert.equal(b2ConsumptionAssessment.assessment?.minimumScore, 80, "B2.3 must retain the 80 percent mastery threshold");
  assert.equal(b2ConsumptionAssessment.assessment?.minimumItems, 10, "B2.3 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[2])", context), true, "B2.3 must pass the app's full local assessment-readiness check");
  assert.equal(b2ConsumptionAssessment.quiz?.length, 10, "B2.3 must include exactly ten scored questions");
  assert.equal(b2ConsumptionAssessment.performanceTasks?.length, 2, "B2.3 must include two practical self-check tasks");
  const b2ConsumptionQuestionSources = new Set(b2ConsumptionAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2ConsumptionQuestionSources.has(`DL-B2-03-T0${task}`), `B2.3 quiz must cover source task T0${task}`);
  assert.ok(b2ConsumptionAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-03-G01")), "all B2.3 questions must map to the lesson objective");
  assert.ok(b2ConsumptionAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-03-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true && task.selfCheck?.requiredChecks?.length === 3), "B2.3 performance tasks must map to T08 and offer visible written/oral local self-checks without recording");
  assert.ok(b2ConsumptionAssessment.performanceTasks.every((task) => /خمس(?: جمل| إلى ست جمل)/.test(task.prompt) && /المبني للمجهول مع فعل ناقص مرتين على الأقل/.test(task.prompt) && /المبني للمجهول/.test(task.criteria?.targetSkill) && task.selfCheck?.minimumResponseCharacters >= 150), "B2.3 tasks must state minimum output, target-form criteria, and local self-check thresholds");
  assert.deepEqual(b2ConsumptionAssessment.performanceTasks.find((task) => task.id === "DL-B2-03-P02").sourceTaskIds, ["DL-B2-03-T06", "DL-B2-03-T08"], "B2.3 P02 must link the written listening script and T08 practice");
  assert.deepEqual(b2ConsumptionAssessment.performanceTasks.find((task) => task.id === "DL-B2-03-P01").sourceTaskIds, ["DL-B2-03-T08"], "B2.3 P01 must link directly to T08");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b2ConsumptionAssessment.id), false, "B2.3 assessment must remain independent of generated audio");
  assert.match(b2ConsumptionSource, /اكتب خمس جمل ألمانية على الأقل.*أو اعرض خمس جمل مكافئة شفهيًا/);
  assert.match(b2ConsumptionSource, /اكتب الإجابة ثم اقرأها بصوت واضح/);
  assert.match(b2ConsumptionSource, /لا يلزم تسجيل/);
  const b2ConsumptionRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[2].performanceTasks, 'lesson:b2-03-consumption-environment-passive-modal', 'b2-03-v1')", context);
  assert.match(b2ConsumptionRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2ConsumptionRubricHtml, /أنجزت كل أجزاء المهمة المطلوبة/);
  assert.match(b2ConsumptionRubricHtml, /إجابتي أو كلامي واضح ويمكن فهمه/);
  assert.match(b2ConsumptionRubricHtml, /استخدمت المهارة أو الصيغة المستهدفة/);
  assert.match(b2ConsumptionRubricHtml, /المبني للمجهول/);
  const b2HousingSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-04-cities-housing-participles.md"), "utf8");
  const b2HousingAssessment = b2Lessons[3];
  assert.equal(b2HousingAssessment.id, "b2-04-cities-housing-participles", "B2.4 must stay in its source order");
  assert.equal(b2HousingAssessment.assessment?.status, "ready", "B2.4 must have a ready local assessment");
  assert.equal(b2HousingAssessment.assessment?.version, "b2-04-v1", "B2.4 must use its stable assessment version");
  assert.equal(b2HousingAssessment.assessment?.minimumScore, 80, "B2.4 must retain the 80 percent mastery threshold");
  assert.equal(b2HousingAssessment.assessment?.minimumItems, 10, "B2.4 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[3])", context), true, "B2.4 must pass the app's full local assessment-readiness check");
  assert.equal(b2HousingAssessment.quiz?.length, 10, "B2.4 must include exactly ten scored questions");
  assert.equal(b2HousingAssessment.performanceTasks?.length, 2, "B2.4 must include two practical self-check tasks");
  const b2HousingQuestionSources = new Set(b2HousingAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2HousingQuestionSources.has(`DL-B2-04-T0${task}`), `B2.4 quiz must cover source task T0${task}`);
  assert.ok(b2HousingAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-04-G01")), "all B2.4 questions must map to the lesson objective");
  assert.ok(b2HousingAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-04-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true && task.selfCheck?.requiredChecks?.length === 3), "B2.4 performance tasks must map to T08 and offer visible written/oral local self-checks without recording");
  assert.ok(b2HousingAssessment.performanceTasks.every((task) => /خمس إلى ست جمل/.test(task.prompt) && /Partizip I/.test(task.prompt) && /Partizip II/.test(task.prompt) && /Partizip I/.test(task.criteria?.targetSkill) && /Partizip II/.test(task.criteria?.targetSkill) && task.selfCheck?.minimumResponseCharacters >= 150), "B2.4 tasks must specify sentence output and both target participles with local self-check thresholds");
  assert.deepEqual(b2HousingAssessment.performanceTasks.find((task) => task.id === "DL-B2-04-P01").sourceTaskIds, ["DL-B2-04-T08"], "B2.4 P01 must link directly to T08");
  assert.deepEqual(b2HousingAssessment.performanceTasks.find((task) => task.id === "DL-B2-04-P02").sourceTaskIds, ["DL-B2-04-T05", "DL-B2-04-T08"], "B2.4 P02 must link the reading text and T08 practice");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b2HousingAssessment.id), false, "B2.4 assessment must remain independent of generated audio");
  assert.match(b2HousingSource, /اكتب خمس جمل ألمانية على الأقل.*أو اعرض خمس جمل مكافئة شفهيًا/);
  assert.match(b2HousingSource, /اكتب الإجابة ثم اقرأها بصوت واضح/);
  assert.match(b2HousingSource, /لا يلزم تسجيل/);
  assert.match(b2HousingSource, /لا تستخدم بيانات سكن حقيقية/);
  const b2HousingRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[3].performanceTasks, 'lesson:b2-04-cities-housing-participles', 'b2-04-v1')", context);
  assert.match(b2HousingRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2HousingRubricHtml, /أنجزت كل أجزاء المهمة المطلوبة/);
  assert.match(b2HousingRubricHtml, /إجابتي أو كلامي واضح ويمكن فهمه/);
  assert.match(b2HousingRubricHtml, /استخدمت المهارة أو الصيغة المستهدفة/);
  assert.match(b2HousingRubricHtml, /Partizip I/);
  assert.match(b2HousingRubricHtml, /Partizip II/);
  const b2HealthSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-05-health-fitness-medical-information.md"), "utf8");
  const b2HealthAssessment = b2Lessons[4];
  assert.equal(b2HealthAssessment.id, "b2-05-health-fitness-medical-information", "B2.5 must stay in its source order");
  assert.equal(b2HealthAssessment.assessment?.status, "ready", "B2.5 must have a ready local assessment");
  assert.equal(b2HealthAssessment.assessment?.version, "b2-05-v1", "B2.5 must use its stable assessment version");
  assert.equal(b2HealthAssessment.assessment?.minimumScore, 80, "B2.5 must retain the 80 percent mastery threshold");
  assert.equal(b2HealthAssessment.assessment?.minimumItems, 10, "B2.5 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[4])", context), true, "B2.5 must pass the app's full local assessment-readiness check");
  assert.equal(b2HealthAssessment.quiz?.length, 10, "B2.5 must include exactly ten scored questions");
  assert.equal(b2HealthAssessment.performanceTasks?.length, 2, "B2.5 must include two practical self-check tasks");
  const b2HealthQuestionSources = new Set(b2HealthAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2HealthQuestionSources.has(`DL-B2-05-T0${task}`), `B2.5 quiz must cover source task T0${task}`);
  assert.ok(b2HealthAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-05-G01")), "all B2.5 questions must map to the lesson objective");
  assert.ok(b2HealthAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-05-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true && task.selfCheck?.requiredChecks?.length === 3), "B2.5 performance tasks must map to T08 and offer visible written/oral local self-checks without recording");
  assert.ok(b2HealthAssessment.performanceTasks.every((task) => /خمس إلى ست جمل/.test(task.prompt) && /sodass أو weshalb/.test(task.prompt) && /aufgrund \+ Genitiv/.test(task.prompt) && /حدّين/.test(task.prompt) && /بصوت مسموع/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 160), "B2.5 tasks must specify sentence output, causal connectors, evidence limits, and local self-check thresholds");
  assert.deepEqual(b2HealthAssessment.performanceTasks.find((task) => task.id === "DL-B2-05-P01").sourceTaskIds, ["DL-B2-05-T08"], "B2.5 P01 must link directly to T08");
  assert.deepEqual(b2HealthAssessment.performanceTasks.find((task) => task.id === "DL-B2-05-P02").sourceTaskIds, ["DL-B2-05-T05", "DL-B2-05-T08"], "B2.5 P02 must link the reading text and T08 practice");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b2HealthAssessment.id), false, "B2.5 assessment must remain independent of generated audio");
  assert.match(b2HealthSource, /اكتب خمس جمل ألمانية على الأقل.*أو قدّم عرضًا شفهيًا من خمس جمل مكافئة/);
  assert.match(b2HealthSource, /إذا اخترت الكتابة فاقرأ إجابتك بصوت مسموع لنفسك/);
  assert.match(b2HealthSource, /لا يلزم تسجيلها أو إرسال صوت/);
  assert.match(b2HealthSource, /لا تقدّم تشخيصًا أو توصية طبية شخصية/);
  assert.match(b2HealthSource, /aufgrund des unklaren Messwerts/);
  assert.match(b2HealthSource, /aufgrund des vorläufigen Ergebnisses/);
  assert.doesNotMatch(b2HealthSource, /Weshalb man die Ursache nicht sicher bestimmen kann\./);
  const b2HealthRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[4].performanceTasks, 'lesson:b2-05-health-fitness-medical-information', 'b2-05-v1')", context);
  assert.match(b2HealthRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2HealthRubricHtml, /أنجزت كل أجزاء المهمة المطلوبة/);
  assert.match(b2HealthRubricHtml, /إجابتي أو كلامي واضح ويمكن فهمه/);
  assert.match(b2HealthRubricHtml, /استخدمت المهارة أو الصيغة المستهدفة/);
  assert.match(b2HealthRubricHtml, /aufgrund/);
  assert.match(b2HealthRubricHtml, /Genitiv/);

  const b2StudySource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-06-study-applications-verb-noun-phrases.md"), "utf8");
  const b2StudyAssessment = b2Lessons[5];
  assert.equal(b2StudyAssessment.id, "b2-06-study-applications-verb-noun-phrases", "B2.6 must stay in its source order");
  assert.equal(b2StudyAssessment.assessment?.status, "ready", "B2.6 must have a ready local assessment");
  assert.equal(b2StudyAssessment.assessment?.version, "b2-06-v1", "B2.6 must use its stable assessment version");
  assert.equal(b2StudyAssessment.assessment?.minimumScore, 80, "B2.6 must retain the 80 percent mastery threshold");
  assert.equal(b2StudyAssessment.assessment?.minimumItems, 10, "B2.6 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[5])", context), true, "B2.6 must pass the app's full local assessment-readiness check");
  assert.equal(b2StudyAssessment.quiz?.length, 10, "B2.6 must include exactly ten scored questions");
  assert.equal(b2StudyAssessment.performanceTasks?.length, 2, "B2.6 must include two practical self-check tasks");
  const b2StudyQuestionSources = new Set(b2StudyAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2StudyQuestionSources.has(`DL-B2-06-T0${task}`), `B2.6 quiz must cover source task T0${task}`);
  assert.ok(b2StudyAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-06-G01")), "all B2.6 questions must map to the lesson objective");
  const b2StudyAnswerPositions = new Set(b2StudyAssessment.quiz.map((question) => question.answerIndex));
  assert.ok(b2StudyAnswerPositions.size >= 2, "B2.6 correct-answer positions must be varied");
  assert.deepEqual([0, 1, 2].map((position) => b2StudyAssessment.quiz.filter((question) => question.answerIndex === position).length), [3, 4, 3], "B2.6 correct answers must be distributed 3/4/3 across the three options");
  assert.ok(b2StudyAssessment.performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.modality?.includes("speaking") && task.selfCheck?.speakAloud === true && task.selfCheck?.requiredChecks?.length === 3), "B2.6 tasks must offer visible written/oral local self-checks without recording");
  assert.ok(b2StudyAssessment.performanceTasks.every((task) => /خمس جمل|خمس إلى ست جمل/.test(task.prompt) && /ثلاثة تراكيب/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 150), "B2.6 tasks must state practical output and target-collocation criteria");
  assert.deepEqual(b2StudyAssessment.performanceTasks.find((task) => task.id === "DL-B2-06-P01").sourceTaskIds, ["DL-B2-06-T08"], "B2.6 P01 must link directly to T08");
  assert.deepEqual(b2StudyAssessment.performanceTasks.find((task) => task.id === "DL-B2-06-P02").sourceTaskIds, ["DL-B2-06-T03", "DL-B2-06-T05", "DL-B2-06-T06", "DL-B2-06-T08"], "B2.6 P02 must link the source rewrite, reading, written listening script, and T08");
  assert.equal(courseData.audioAssets.some((asset) => asset.lessonId === b2StudyAssessment.id), false, "B2.6 assessment must remain independent of generated audio");
  assert.match(b2StudySource, /ثلاثة تراكيب على الأقل من الدرس/);
  assert.match(b2StudySource, /يمكن إنجاز المهمة كتابةً أو بعرض شفهي مكافئ/);
  assert.match(b2StudySource, /اقرأها بصوت مسموع لنفسك/);
  assert.match(b2StudySource, /لا يلزم تسجيلها أو إرسال صوت/);
  const b2StudyRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[5].performanceTasks, 'lesson:b2-06-study-applications-verb-noun-phrases', 'b2-06-v1')", context);
  assert.match(b2StudyRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2StudyRubricHtml, /ثلاثة تراكيب اسمية فعلية/);
  assert.equal(b2Lessons.slice(6).every((lesson) => lesson.assessment?.status === "not_ready"), true, "B2.7–B2.12 must remain without ready assessments");
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
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[0])", context), false, "B1.1 must stay locked until the full A2 level is mastered");
  vm.runInContext(`
    for (const lesson of getLessonsInLevel('A2')) {
      state.completedLessons[lesson.id] = {
        score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
        assessmentVersion: lesson.assessment.version,
      };
    }
  `, context);
  assert.equal(vm.runInContext("isLevelUnlocked('B1')", context), true, "B1 may unlock only after all A2 lessons are mastered");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[0])", context), true, "B1.1 must open as the first B1 step after A2 mastery");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[1])", context), false, "B1.2 must stay locked until B1.1 is mastered even though its assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[0].id, "B1.1 must be the next required step after all A2 lessons");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-01-daily-life-hobbies-experiences")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[0].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[1])", context), true, "B1.2 may open once B1.1 is mastered and its ready assessment is available");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[1].id, "B1.2 must be the next required step after mastering B1.1");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-02-food-habits-obwohl")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[1].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[2])", context), true, "B1.3 may open only after B1.2 is mastered and its ready assessment is available");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[2].id, "B1.3 must be the next required step after mastering B1.2");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[3])", context), false, "B1.4 must remain locked until B1.3 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-03-work-communication-konjunktiv")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[2].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[3])", context), true, "B1.4 may open only after B1.3 is mastered and its ready assessment is available");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[3].id, "B1.4 must be the next required step after mastering B1.3");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[4])", context), false, "B1.5 must remain locked until B1.4 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-04-continuing-education-damit")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[3].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[4])", context), true, "B1.5 may open only after B1.4 is mastered and its ready assessment is available");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[4].id, "B1.5 must be the next required step after mastering B1.4");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[5])", context), false, "B1.6 must remain locked until B1.5 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-05-cities-relative-clauses")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[4].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[5])", context), true, "B1.6 may open only after B1.5 mastery and its ready assessment is available");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[5].id, "B1.6 must be the next required step after mastering B1.5");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[6])", context), false, "B1.7 must remain locked until B1.6 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-06-health-fitness-advice")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[5].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[6])", context), true, "B1.7 may open after B1.6 mastery because its ready assessment is available");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[6].id, "B1.7 must be the next required step after mastering B1.6");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[7])", context), false, "B1.8 must remain locked until B1.7 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-07-lifestyles-customs-cultures")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[6].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[7])", context), true, "B1.8 may open after B1.7 mastery because its local assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[7].id, "B1.8 must be the next required step after mastering B1.7");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[8])", context), false, "B1.9 must not be reachable before B1.8 mastery");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[8])", context), true, "B1.9 assessment readiness is independent of its prerequisite lock");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[9])", context), true, "B1.10 assessment readiness is independent of its prerequisite lock");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[9])", context), false, "B1.10 must remain locked until B1.9 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-08-consumption-advertising-je-desto")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[7].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[8])", context), true, "B1.9 may open after B1.8 mastery because its local assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[8].id, "B1.9 must be the next required step after mastering B1.8");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[9])", context), false, "B1.10 must remain inaccessible until B1.9 mastery");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-09-travel-transport-environment")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[8].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[9])", context), true, "B1.10 may open after B1.9 mastery because its local assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[9].id, "B1.10 must be the next required step after mastering B1.9");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[10])", context), true, "B1.11 assessment readiness is independent of its prerequisite lock");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[10])", context), false, "B1.11 must remain locked until B1.10 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-10-media-news-formal-communication")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[9].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[10])", context), true, "B1.11 may open after B1.10 mastery because its local assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[10].id, "B1.11 must be the next required step after mastering B1.10");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B1')[11])", context), true, "B1.12 assessment readiness is independent of its prerequisite lock");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[11])", context), false, "B1.12 must remain locked until B1.11 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-11-history-politics-passive-past")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[10].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B1')[11])", context), true, "B1.12 may open after B1.11 mastery because its local assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b1Lessons[11].id, "B1.12 must be the next required step after mastering B1.11");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[0])", context), true, "B2.1 assessment readiness is independent of the B1.12 prerequisite lock");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[0])", context), false, "B2.1 must remain locked until B1.12 is mastered");
  const b2LessonRowHtml = vm.runInContext("renderLessonRow(getLessonsInLevel('B2')[4], 4)", context);
  assert.match(b2LessonRowHtml, /يتطلب إتقان المتطلبات السابقة/, "B2.5 must remain locked behind the earlier B2 lessons while its assessment is ready");
  assert.doesNotMatch(b2LessonRowHtml, /التقييم غير جاهز بعد/, "B2.5 must not be presented as unfinished after its assessment is ready");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b1-12-innovation-research-future")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B1')[11].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[0])", context), true, "B2.1 may open after B1.12 mastery because its local assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[0].id, "B2.1 must be the next required step after mastering B1.12");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[1])", context), false, "B2.2 must remain locked until B2.1 is mastered");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[1])", context), true, "B2.2 assessment readiness is independent of the B2.1 prerequisite lock");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-01-time-management-habits-reading")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[0].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[1])", context), true, "B2.2 must open after B2.1 mastery because its assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[1].id, "B2.2 must be the next required step after mastering B2.1");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-02-career-formal-communication-konjunktiv1")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[1].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[2])", context), true, "B2.3 must open after B2.2 mastery because its assessment is ready");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[2])", context), true, "B2.3 assessment readiness must be independent of its B2.2 prerequisite lock");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[2].id, "B2.3 must be the next required step after mastering B2.2");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-03-consumption-environment-passive-modal")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[2].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[3])", context), true, "B2.4 must open after B2.3 mastery because its assessment is ready");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[3])", context), true, "B2.4 assessment readiness must be independent of its B2.3 prerequisite lock");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[3].id, "B2.4 must be the next required step after mastering B2.3");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-04-cities-housing-participles")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[3].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[4])", context), true, "B2.5 must open after B2.4 mastery because its local assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[4].id, "B2.5 must be the next required step after mastering B2.4");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[5])", context), true, "B2.6 assessment readiness must be independent of its B2.5 prerequisite lock");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[5])", context), false, "B2.6 must remain locked until B2.5 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-05-health-fitness-medical-information")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[4].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[5])", context), true, "B2.6 must open after B2.5 mastery because its own assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[5].id, "B2.6 must be the next required step after mastering B2.5");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-06-study-applications-verb-noun-phrases")}] = {
      score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[5].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[6])", context), false, "B2.7 must remain not ready after B2.6 mastery");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[6])", context), false, "B2.7 must remain locked until its assessment is produced");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-07-travel-experiences-prepositional-relatives")}] = {
      score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
    };
  `, context);
  assert.equal(vm.runInContext("getLessonsInLevel('B2').slice(6).every((lesson) => lesson.assessment?.status === 'not_ready' && !lessonAssessmentReady(lesson) && !isLessonAccessible(lesson))", context), true, "B2.7–B2.12 must remain not ready and locked after B2.6 mastery or synthetic completion data");

  console.log("PASS: A0-only start, sequential locks through ready B2.6, 80% scoring, practical-evidence locks, legacy migration, lesson-mapped preview audio through B1.9 (142 assets/312 clips; five awaiting voice approval), stable dialogue voices, exact B1.7/B1.8/B1.9 reading and listening transcripts/narrators, pending-playback fallback, transcript availability, local B1.8–B2.6 written/oral assessments independent of audio, visible task-specific performance rubrics, B2.1 method/purpose connector criteria, B2.2 Konjunktiv I/source-attribution criteria, B2.3 passive-with-modals criteria, B2.4 Partizip I/II adjective criteria, B2.5 cause/effect and Genitiv criteria, B2.6 academic Nomen-Verb-Verbindungen criteria, and not-ready/locked assessments from B2.7 through B2.12.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
