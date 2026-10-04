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
  assert.equal(vm.runInContext("course.audioAssets.length", context), 117, "the generated A0, A1, A2, and B1.1 through B1.4 audio assets must be carried into the course bundle");
  assert.equal(courseData.audioAssets.reduce((count, asset) => count + asset.segments.length, 0), 260, "the audio manifest must contain all two hundred sixty generated clips");
  assert.equal(courseData.lessons.filter((lesson) => lesson.assessment?.status === "ready").length, 33, "the course bundle must carry the thirty-three ready lesson assessments");
  assert.equal(courseData.lessons.reduce((count, lesson) => count + lesson.quiz.length, 0), 330, "the course bundle must carry all three hundred thirty scored lesson questions");
  assert.equal(courseData.lessons.reduce((count, lesson) => count + lesson.performanceTasks.length, 0), 66, "the course bundle must carry all sixty-six lesson performance tasks");
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
  assert.equal(b1Lessons.slice(4).every((lesson) => lesson.assessment?.status === "not_ready"), true, "B1.5 and later B1 lessons must remain unassessed until their production batches");
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

  console.log("PASS: A0-only start, sequential A0/A1/A2/B1 locks through B1.4, 80% scoring, practical-evidence locks, legacy migration, final lesson-mapped A0/A1/A2/B1.1/B1.2/B1.3/B1.4 audio display, audio playback and character-voice consistency through B1.4, pending-playback fallback, transcript unlock, the A0→A1 gate, all local A1/A2 assessments, and local B1.1/B1.2/B1.3/B1.4 assessments.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
