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
  setInterval: () => 1,
  clearInterval() {},
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
  assert.equal(vm.runInContext("course.audioAssets.length", context), 217, "all audio assets through B2.12 must be carried into the course bundle");
  assert.equal(courseData.audioAssets.reduce((count, asset) => count + asset.segments.length, 0), 474, "the audio manifest must contain all four hundred seventy-four clips");
  assert.equal(courseData.lessons.filter((lesson) => lesson.assessment?.status === "ready").length, 53, "the course bundle must carry all fifty-three ready lesson assessments through B2.12");
  assert.equal(courseData.lessons.reduce((count, lesson) => count + lesson.quiz.length, 0), 530, "the course bundle must carry all five hundred thirty scored lesson questions");
  assert.equal(courseData.lessons.reduce((count, lesson) => count + lesson.performanceTasks.length, 0), 106, "the course bundle must carry all one hundred six lesson performance tasks");
  // CR1: A0.1 source-backed corrections, independent of prerecorded audio.
  const reviewedA0 = courseData.lessons.find(lesson => lesson.id === 'a0-01-alphabet');
  assert.equal(reviewedA0.assessment.version, 'a0-01-v2');
  assert.equal(reviewedA0.quiz[9].options[reviewedA0.quiz[9].answerIndex], 'El – I – En – A');
  assert.deepEqual(reviewedA0.performanceTasks[1].modality, ['writing']);
  assert.equal(vm.runInContext(`performanceTaskEvidenceReady(course.lessons[0].performanceTasks[1], {
    response: 'Mina, Berlin, sieben, Schule', checks: {taskCompletion:true, meaningClarity:true, targetSkill:true}, spokenAloud:false
  })`, context), true, 'A0.1 P02 must accept a complete written self-check without speech');
  assert.equal(vm.runInContext(`performanceTaskEvidenceReady(course.lessons[0].performanceTasks[1], {
    response: 'Mina, Berlin, sieben, Schule', checks: {taskCompletion:true, meaningClarity:true, targetSkill:false}, spokenAloud:false
  })`, context), false, 'written task still requires its declared checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([course.lessons[0].performanceTasks[1]], 'lesson:a0-01-alphabet', 'a0-01-v2')`, context), /data-performance-spoken/, 'written recall must not render a speech checkbox');
  assert.equal(vm.runInContext(`(() => {
    const lesson = course.lessons[0], prior = state.completedLessons[lesson.id];
    try {
      const oldRecord = {score:100, mastered:true, goalMet:true, performanceEvidenceCompleted:true, assessmentVersion:'a0-01-v1'};
      state.completedLessons[lesson.id] = oldRecord;
      return !isLessonMastered(lesson) && !isLessonAccessible(course.lessons[1]) && state.completedLessons[lesson.id] === oldRecord;
    } finally {
      if (prior === undefined) delete state.completedLessons[lesson.id];
      else state.completedLessons[lesson.id] = prior;
    }
  })()`, context), true, 'A0.1 v1 mastery must remain stored but not unlock the corrected course');

  // CR2: the revised A0.2 tasks must match the source and versioned gates.
  const reviewedGreetings = courseData.lessons.find(lesson => lesson.id === 'a0-02-greetings');
  assert.equal(reviewedGreetings.assessment.version, 'a0-02-v2');
  assert.deepEqual(reviewedGreetings.quiz[7].sourceTaskIds, ['DL-A0-02-T05']);
  assert.deepEqual(reviewedGreetings.performanceTasks[1].sourceTaskIds, ['DL-A0-02-T08']);
  assert.equal(vm.runInContext(`performanceTaskEvidenceReady(course.lessons[1].performanceTasks[1], {
    response:'Hallo!\\nIch heiße Lina.\\nTschüss!', checks:{taskCompletion:true, meaningClarity:true, targetSkill:true}, spokenAloud:false
  })`, context), true, 'A0.2 written P02 must not require speech');
  assert.equal(vm.runInContext(`performanceTaskEvidenceReady(course.lessons[1].performanceTasks[1], {
    response:'Hallo!\\nIch heiße Lina.\\nTschüss!', checks:{taskCompletion:true, meaningClarity:false, targetSkill:true}, spokenAloud:false
  })`, context), false, 'P02 still requires all its declared checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([course.lessons[1].performanceTasks[1]], 'lesson:a0-02-greetings', 'a0-02-v2')`, context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`performanceTaskEvidenceReady(course.lessons[1].performanceTasks[0], {
    response:'A'.repeat(120), checks:{taskCompletion:true, meaningClarity:true, targetSkill:true}, spokenAloud:false
  })`, context), false, 'the P01 spoken practice still requires explicit self-confirmation');
  assert.equal(vm.runInContext(`(() => {
    const prior = state.completedLessons;
    try {
      const oldRecord = {score:100, mastered:true, goalMet:true, performanceEvidenceCompleted:true, assessmentVersion:'a0-02-v1'};
      state.completedLessons = {
        [course.lessons[0].id]: {score:100, mastered:true, goalMet:true, performanceEvidenceCompleted:true, assessmentVersion:course.lessons[0].assessment.version},
        [course.lessons[1].id]: oldRecord
      };
      const rejected = !isLessonMastered(course.lessons[1]) && !isLessonAccessible(course.lessons[2]) && state.completedLessons[course.lessons[1].id] === oldRecord;
      state.completedLessons[course.lessons[1].id] = {...oldRecord, assessmentVersion:'a0-02-v2'};
      return rejected && isLessonAccessible(course.lessons[2]);
    } finally {state.completedLessons = prior;}
  })()`, context), true, 'reject v1, keep its record, and accept current-version mastery for progression');

  // CR3: core-number scope, explicit written/oral evidence, and v1/v2 invalidation.
  const reviewedNumbers = courseData.lessons.find(lesson => lesson.id === 'a0-03-numbers-personal-info');
  assert.equal(reviewedNumbers.assessment.version, 'a0-03-v3');
  assert.deepEqual(reviewedNumbers.quiz[5].sourceTaskIds, ['DL-A0-03-T02']);
  assert.equal(reviewedNumbers.performanceTasks[0].selfCheck.minimumResponseCharacters, 120);
  assert.equal(reviewedNumbers.performanceTasks[1].selfCheck.minimumResponseCharacters, 50);
  assert.equal(vm.runInContext(`(() => {
    const tasks = course.lessons[2].performanceTasks;
    const responses = [
      'Wie heißt du? Ich heiße Salma. Wie alt bist du? Ich bin 18 Jahre alt. Woher kommst du? Ich komme aus Tunesien. Wo wohnst du? Ich wohne in Nabeul.\\nIch heiße Salma.\\nIch komme aus Tunesien.\\nIch wohne in Nabeul.\\nIch bin 18 Jahre alt.',
      'Wie ist deine Telefonnummer? Meine Nummer ist 26 41 08. zwei sechs vier eins null acht'
    ];
    return tasks.every((task, i) => {
      const evidence = {response:responses[i], checks:{taskCompletion:true, meaningClarity:true, targetSkill:true}, spokenAloud:true};
      return performanceTaskEvidenceReady(task, evidence)
        && !performanceTaskEvidenceReady(task, {...evidence, spokenAloud:false})
        && !performanceTaskEvidenceReady(task, {...evidence, response:'26 41 08'})
        && task.selfCheck.requiredChecks.every(key => !performanceTaskEvidenceReady(task, {...evidence, checks:{...evidence.checks, [key]:false}}));
    });
  })()`, context), true, 'both A0.3 tasks need adequate drafts, all self-checks and speech confirmation, not audio uploads');
  assert.equal(vm.runInContext(`(() => {
    const prior = state.completedLessons;
    try {
      return ['a0-03-v1', 'a0-03-v2'].every(version => {
        const oldRecord = {score:100, mastered:true, goalMet:true, performanceEvidenceCompleted:true, assessmentVersion:version};
        state.completedLessons = Object.fromEntries(course.lessons.slice(0,2).map(l => [l.id, {...oldRecord, assessmentVersion:l.assessment.version}]));
        state.completedLessons[course.lessons[2].id] = oldRecord;
        const rejected = !isLessonMastered(course.lessons[2]) && !isLessonAccessible(course.lessons[3]) && state.completedLessons[course.lessons[2].id] === oldRecord;
        state.completedLessons[course.lessons[2].id] = {...oldRecord, assessmentVersion:'a0-03-v3'};
        return rejected && isLessonAccessible(course.lessons[3]);
      });
    } finally { state.completedLessons = prior; }
  })()`, context), true, 'keep old A0.3 records but require v3 before A0.4');

  // CR4: writing about another person and completing the actual T08 dialogue.
  const reviewedFirstSentences = courseData.lessons.find(l => l.id === 'a0-04-first-sentences');
  assert.equal(reviewedFirstSentences.assessment.version, 'a0-04-v2');
  assert.deepEqual(reviewedFirstSentences.quiz[7].sourceTaskIds, ['DL-A0-04-T02']);
  assert.equal(vm.runInContext(`(() => {
    const responses = [
      'Ich bin hier. Ich habe eine Frage. Mila ist Studentin. Sie hat ein Handy.',
      'A: Bist du neu hier? B: Ja, ich bin neu. Ich habe eine Frage. A: Natürlich. Hast du Zeit? B: Ja, ich habe Zeit. Danke!'
    ];
    return course.lessons[3].performanceTasks.every((task, i) => {
      const evidence = {response:responses[i], checks:{taskCompletion:true, meaningClarity:true, targetSkill:true}, spokenAloud:true};
      return performanceTaskEvidenceReady(task, evidence)
        && !performanceTaskEvidenceReady(task, {...evidence, spokenAloud:false})
        && !performanceTaskEvidenceReady(task, {...evidence, response:'bin habe Hast habe'})
        && task.selfCheck.requiredChecks.every(key => !performanceTaskEvidenceReady(task, {...evidence, checks:{...evidence.checks, [key]:false}}));
    });
  })()`, context), true, 'A0.4 requires full-enough drafts and all oral/self-check confirmations, not just gap words');
  assert.equal(vm.runInContext(`(() => {
    const prior = state.completedLessons;
    try {
      const oldRecord = {score:100, mastered:true, goalMet:true, performanceEvidenceCompleted:true, assessmentVersion:'a0-04-v1'};
      state.completedLessons = Object.fromEntries(course.lessons.slice(0,3).map(l => [l.id, {...oldRecord, assessmentVersion:l.assessment.version}]));
      state.completedLessons[course.lessons[3].id] = oldRecord;
      const rejected = !isLessonMastered(course.lessons[3]) && !isLessonAccessible(course.lessons[4]) && state.completedLessons[course.lessons[3].id] === oldRecord;
      state.completedLessons[course.lessons[3].id] = {...oldRecord, assessmentVersion:'a0-04-v2'};
      return rejected && isLessonAccessible(course.lessons[4]);
    } finally { state.completedLessons = prior; }
  })()`, context), true, 'keep A0.4 v1 record but require v2 plus previous lessons before A0.5');

  // CR5: five requested acts in P01; P02 is a written retrieval card, not speech.
  const reviewedClassroom = courseData.lessons.find(l => l.id === 'a0-05-classroom-phrases');
  assert.equal(reviewedClassroom.assessment.version, 'a0-05-v2');
  assert.deepEqual(reviewedClassroom.quiz[9].sourceTaskIds, ['DL-A0-05-T03']);
  assert.deepEqual(reviewedClassroom.performanceTasks[1].sourceTaskIds, ['DL-A0-05-T08']);
  assert.equal(vm.runInContext(`(() => {
    const tasks = course.lessons[4].performanceTasks;
    const responses = [
      'Ich verstehe das Wort nicht. Können Sie den Satz bitte wiederholen? Langsamer, bitte. Was bedeutet Unterricht? Wie schreibt man Unterricht?',
      'Ich verstehe nicht. — لا أفهم. Langsamer, bitte. — أبطأ، من فضلك. Ich habe eine Frage. — لدي سؤال.'
    ];
    return tasks.every((task, i) => {
      const evidence = {response:responses[i], checks:{taskCompletion:true, meaningClarity:true, targetSkill:true}, spokenAloud:i === 0};
      return performanceTaskEvidenceReady(task, evidence)
        && !performanceTaskEvidenceReady(task, {...evidence, response:'bitte'})
        && task.selfCheck.requiredChecks.every(key => !performanceTaskEvidenceReady(task, {...evidence, checks:{...evidence.checks, [key]:false}}))
        && (i !== 0 || !performanceTaskEvidenceReady(task, {...evidence, spokenAloud:false}));
    });
  })()`, context), true, 'P01 requires speech confirmation; P02 accepts written evidence without it; both still need all checks and length');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([course.lessons[4].performanceTasks[1]], 'lesson:a0-05-classroom-phrases', 'a0-05-v2')`, context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior = state.completedLessons;
    const priorChecks = state.levelChecks;
    try {
      const oldRecord = {score:100, mastered:true, goalMet:true, performanceEvidenceCompleted:true, assessmentVersion:'a0-05-v1'};
      state.levelChecks = {};
      state.completedLessons = Object.fromEntries(course.lessons.slice(0,4).map(l => [l.id, {...oldRecord, assessmentVersion:l.assessment.version}]));
      state.completedLessons[course.lessons[4].id] = oldRecord;
      const rejected = !isLessonMastered(course.lessons[4]) && !isLevelMastered('A0') && !isLevelUnlocked('A1')
        && nextLearningStep().lesson.id === course.lessons[4].id
        && state.completedLessons[course.lessons[4].id] === oldRecord;
      state.completedLessons[course.lessons[4].id] = {...oldRecord, assessmentVersion:'a0-05-v2'};
      const gateRequired = isLevelMastered('A0') && nextLearningStep().type === 'a0-gate' && !isLevelUnlocked('A1');
      state.levelChecks['A0-A1'] = {...oldRecord, assessmentVersion:course.a0TransitionCheck.assessment.version};
      return rejected && gateRequired && isLevelUnlocked('A1');
    } finally { state.completedLessons = prior; state.levelChecks = priorChecks; }
  })()`, context), true, 'retain A0.5 v1 but require v2, then the separate gate; this is not a content review of the gate');

  // CR6: gate-specific evidence, current-version mastery, and stale draft isolation.
  assert.equal(courseData.a0TransitionCheck.assessment.version, 'a0-gate-v2');
  assert.equal(vm.runInContext(`(() => {
    const tasks = course.a0TransitionCheck.performanceTasks;
    const responses = [
      'Ich heiße Lina. Ich bin 18 Jahre alt. Ich komme aus Tunesien. Ich wohne in Nabeul. Wie heißt du? Ich heiße Lina. Wie alt bist du? Ich bin 18 Jahre alt.',
      'Ich verstehe nicht. Können Sie das bitte wiederholen? Langsamer, bitte.',
      'Ich heiße Lina. Ich bin 18 Jahre alt. Ich komme aus Tunesien.'
    ];
    return tasks.every((task, i) => {
      const ev = {response:responses[i], checks:{taskCompletion:true, meaningClarity:true, targetSkill:true}, spokenAloud:i < 2};
      return performanceTaskEvidenceReady(task, ev)
        && !performanceTaskEvidenceReady(task, {...ev, response:'Lina 18 Tunesien'})
        && task.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(task, {...ev, checks:{...ev.checks, [k]:false}}))
        && (i === 2 || !performanceTaskEvidenceReady(task, {...ev, spokenAloud:false}));
    });
  })()`, context), true, 'gate examples must fit thresholds; only P01/P02 require speech');
  assert.equal(vm.runInContext(`performanceTaskEvidenceReady(course.a0TransitionCheck.performanceTasks[1], {response:'Ich verstehe nicht. Bitte wiederholen Sie das. Langsamer, bitte.', checks:{taskCompletion:true, meaningClarity:true, targetSkill:true}, spokenAloud:true})`, context), true, 'shorter valid formal repeat request must not fail the length floor');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([course.a0TransitionCheck.performanceTasks[2]], 'gate:A0-A1', 'a0-gate-v2')`, context), /data-performance-spoken/);
  assert.match(vm.runInContext('renderA0GateScopeNote()', context), /الاستماع غير مقاس/);
  assert.equal(vm.runInContext(`(() => {
    const priorLessons = state.completedLessons, priorChecks = state.levelChecks, priorEvidence = state.performanceEvidence;
    try {
      const old = {score:100, mastered:true, goalMet:true, performanceEvidenceCompleted:true, assessmentVersion:'a0-gate-v1'};
      state.completedLessons = Object.fromEntries(getLessonsInLevel('A0').map(l => [l.id, {...old, assessmentVersion:l.assessment.version}]));
      state.levelChecks = {'A0-A1':old};
      const rejected = !isA0TransitionMastered() && !isLevelUnlocked('A1') && state.levelChecks['A0-A1'] === old;
      state.levelChecks['A0-A1'] = {...old, assessmentVersion:'a0-gate-v2'};
      const accepted = isA0TransitionMastered() && isLevelUnlocked('A1');
      state.levelChecks['A0-A1'].performanceEvidenceCompleted = false;
      const requiresEvidence = !isLevelUnlocked('A1');
      state.performanceEvidence = {'gate:A0-A1': {assessmentVersion:'a0-gate-v1', tasks:{}}};
      const isolated = !allPerformanceTasksComplete(course.a0TransitionCheck.performanceTasks,'gate:A0-A1','a0-gate-v2')
        && state.performanceEvidence['gate:A0-A1'].assessmentVersion === 'a0-gate-v1';
      const draft = {id:'A0-A1', assessmentVersion:'a0-gate-v1', mode:'quiz', questionIndex:0, selected:null, checked:false, answers:[], completed:false};
      const stale = restoreAssessmentSession(draft,course.a0TransitionCheck.assessment,course.a0TransitionCheck.quiz,'A0-A1','gate') === null;
      draft.assessmentVersion = 'a0-gate-v2';
      return rejected && accepted && requiresEvidence && isolated && stale
        && !!restoreAssessmentSession(draft,course.a0TransitionCheck.assessment,course.a0TransitionCheck.quiz,'A0-A1','gate');
    } finally { state.completedLessons=priorLessons; state.levelChecks=priorChecks; state.performanceEvidence=priorEvidence; }
  })()`, context), true, 'gate v1 result/draft cannot grant v2 mastery; validation preserves old result; current drafts work');

  // CR7: written card vs mandatory spoken dialogue, and A1.1 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-01-introductions-languages-hobbies').assessment.version, 'a1-01-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-01-introductions-languages-hobbies');
    const responses = [
      'Ich heiße Lina. Ich komme aus Tunesien. Ich wohne in Nabeul. Ich spreche Arabisch und Französisch. Ich lerne Deutsch. Ich lese gern.',
      'Woher kommst du? Ich komme aus Tunesien. Wo wohnst du? Ich wohne in Sousse. Welche Sprachen sprichst du? Ich spreche Arabisch und Französisch. Was machst du gern? Ich lese gern. Mila wohnt in Sousse. Sie liest gern.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.1 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-01-introductions-languages-hobbies').performanceTasks[0]], 'lesson:a1-01-introductions-languages-hobbies', 'a1-01-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-01-introductions-languages-hobbies');
      const next=findLesson('a1-02-work-family');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-01-v1'};
      state.completedLessons=Object.fromEntries(getLessonsInLevel('A0').map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-01-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-01-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-01-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.1 old record but require current score/evidence/version; reject stale drafts');

  // CR8: five-sentence family profile vs mandatory spoken dialogue, and A1.2 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-02-work-family').assessment.version, 'a1-02-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-02-work-family');
    const responses = [
      'Das ist mein Vater. Er heißt Ali. Er ist Koch. Das ist meine Mutter. Das ist mein Bruder.',
      'Hast du Geschwister? Ja, ich habe einen Bruder. Was ist dein Vater von Beruf? Mein Vater ist Koch. Wo arbeitet dein Vater? Mein Vater arbeitet in einem Hotel. Der Vater ist Koch. Er arbeitet in einem Hotel.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.2 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-02-work-family').performanceTasks[0]], 'lesson:a1-02-work-family', 'a1-02-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-02-work-family');
      const next=findLesson('a1-03-city-cafe-hotel');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-02-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-02-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-02-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-02-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.2 old record but require current score/evidence/version; reject stale drafts');

  // CR9: oral cafe acts vs a written supplied route, and A1.3 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-03-city-cafe-hotel').assessment.version, 'a1-03-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-03-city-cafe-hotel');
    const responses = [
      'Guten Tag! Ich möchte einen Tee und eine Suppe, bitte. Was kostet das alles? Danke!',
      'Gehen Sie bitte geradeaus bis zur Apotheke. Gehen Sie dort rechts. Gehen Sie geradeaus bis zum Café. Das Café ist neben dem Museum.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.3 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-03-city-cafe-hotel').performanceTasks[1]], 'lesson:a1-03-city-cafe-hotel', 'a1-03-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-03-city-cafe-hotel');
      const next=findLesson('a1-04-daily-routine-time');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-03-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-03-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-03-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-03-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.3 old record but require current score/evidence/version; reject stale drafts');

  // CR10: written day vs spoken interview, and A1.4 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-04-daily-routine-time').assessment.version, 'a1-04-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-04-daily-routine-time');
    const responses = [
      'Ich stehe um sieben Uhr auf. Um halb acht frühstücke ich. Von neun bis drei arbeite ich. Am Nachmittag kaufe ich ein. Am Abend lerne ich Deutsch. Um elf Uhr gehe ich schlafen.',
      'Wann stehst du auf? Ich stehe um sieben Uhr auf. Wann lernst du Deutsch? Ich lerne am Abend Deutsch. Was machst du am Abend? Ich rufe meine Schwester an. Sami steht um sieben Uhr auf. Er lernt am Abend Deutsch.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.4 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-04-daily-routine-time').performanceTasks[0]], 'lesson:a1-04-daily-routine-time', 'a1-04-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-04-daily-routine-time');
      const next=findLesson('a1-05-food-drink');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-04-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-04-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-04-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-04-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.4 old record but require current score/evidence/version; reject stale drafts');

  // CR11: written menu vs formal cafe dialogue, and A1.5 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-05-food-drink').assessment.version, 'a1-05-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-05-food-drink');
    const responses = [
      'Zum Frühstück esse ich Brot. Am Mittag esse ich Reis. Am Abend esse ich Suppe. Ich trinke Wasser. Ich mag Obst. Ich möchte einen Tee, bitte.',
      'Was essen Sie gern? Ich mag Gemüsesuppe. Was möchten Sie? Ich möchte eine Gemüsesuppe und einen Tee, bitte.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.5 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-05-food-drink').performanceTasks[0]], 'lesson:a1-05-food-drink', 'a1-05-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-05-food-drink');
      const next=findLesson('a1-06-yesterday-perfekt');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-05-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-05-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-05-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-05-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.5 old record but require current score/evidence/version; reject stale drafts');

  // CR12: written narrative vs spoken tense transfer, and A1.6 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-06-yesterday-perfekt').assessment.version, 'a1-06-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-06-yesterday-perfekt');
    const responses = [
      'Gestern habe ich Deutsch gelernt. Danach habe ich Musik gehört. Am Nachmittag bin ich nach Tunis gefahren. Am Abend habe ich meine Großmutter besucht.',
      'Gestern habe ich Deutsch gelernt. Gestern habe ich Musik gehört. Gestern bin ich nach Tunis gefahren.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.6 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-06-yesterday-perfekt').performanceTasks[0]], 'lesson:a1-06-yesterday-perfekt', 'a1-06-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-06-yesterday-perfekt');
      const next=findLesson('a1-07-travel-weather');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-06-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-06-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-06-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-06-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.6 old record but require current score/evidence/version; reject stale drafts');

  // CR13: written trip vs spoken traveller role, and A1.7 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-07-travel-weather').assessment.version, 'a1-07-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-07-travel-weather');
    const responses = [
      'Ich fahre morgen nach Sousse. Ich fahre mit dem Zug. Der Zug fährt um neun Uhr. Das Wetter ist sonnig und warm.',
      'Guten Tag. Eine Fahrkarte nach Sousse, bitte. Hin und zurück, bitte. Wann fährt der Zug? Wie ist das Wetter in Sousse?'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.7 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-07-travel-weather').performanceTasks[0]], 'lesson:a1-07-travel-weather', 'a1-07-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-07-travel-weather');
      const next=findLesson('a1-08-shopping-clothes');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-07-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-07-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-07-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-07-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.7 old record but require current score/evidence/version; reject stale drafts');

  // CR14: spoken customer role vs written list/action, and A1.8 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-08-shopping-clothes').assessment.version, 'a1-08-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-08-shopping-clothes');
    const responses = [
      'Ich brauche eine Jacke. Blau, bitte. Haben Sie Größe M? Wie viel kostet die Jacke? Kann ich die Jacke anprobieren? Die Jacke passt gut.',
      'eine Jacke; ein Hemd; Schuhe. Ich brauche eine Jacke. Ich muss die Jacke anprobieren.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.8 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-08-shopping-clothes').performanceTasks[1]], 'lesson:a1-08-shopping-clothes', 'a1-08-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-08-shopping-clothes');
      const next=findLesson('a1-09-work-appointments');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-08-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-08-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-08-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-08-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.8 old record but require current score/evidence/version; reject stale drafts');

  // CR15: spoken appointment vs written problem/effect/alternative, and A1.9 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-09-work-appointments').assessment.version, 'a1-09-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-09-work-appointments');
    const responses = [
      'Hast du am Dienstag Zeit? Ja. Ich kann um zehn Uhr. Gut, am Dienstag um zehn Uhr. Der Drucker ist kaputt. Wir können eine E-Mail schicken.',
      'Der Drucker funktioniert nicht. Ich kann heute nicht drucken. Ich kann eine E-Mail schicken.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.9 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-09-work-appointments').performanceTasks[1]], 'lesson:a1-09-work-appointments', 'a1-09-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-09-work-appointments');
      const next=findLesson('a1-10-hobbies-health');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-09-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-09-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-09-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-09-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.9 old record but require current score/evidence/version; reject stale drafts');

  // CR16: spoken clinic vs written fictional note, and A1.10 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-10-hobbies-health').assessment.version, 'a1-10-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-10-hobbies-health');
    const responses = [
      'Was fehlt Ihnen? Ich habe Halsschmerzen. Haben Sie Fieber? Nein. Sie sollen heute zu Hause bleiben. Ich soll heute zu Hause bleiben.',
      'Ich lese gern. Ich habe Kopfschmerzen. Meine Mutter sagt: „Du sollst heute zu Hause bleiben.“'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.10 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-10-hobbies-health').performanceTasks[1]], 'lesson:a1-10-hobbies-health', 'a1-10-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-10-hobbies-health');
      const next=findLesson('a1-11-home-directions');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-10-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-10-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-10-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-10-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.10 old record but require current score/evidence/version; reject stale drafts');

  // CR17: written home vs spoken fictional route, and A1.11 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-11-home-directions').assessment.version, 'a1-11-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-11-home-directions');
    const responses = [
      'Es gibt ein Wohnzimmer. Es gibt eine Küche. Im Wohnzimmer gibt es einen Tisch. Die Wohnung ist hell.',
      'Entschuldigung, wie komme ich zum Bahnhof? Gehen Sie geradeaus bis zur Ampel. Gehen Sie an der Ampel nach links. Gehen Sie an der nächsten Kreuzung nach rechts. Der Bahnhof ist gegenüber dem Park.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.11 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-11-home-directions').performanceTasks[0]], 'lesson:a1-11-home-directions', 'a1-11-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-11-home-directions');
      const next=findLesson('a1-12-trip-invitations');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-11-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-11-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-11-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-11-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.11 old record but require current score/evidence/version; reject stale drafts');

  // CR18: written reply vs spoken invitation/confirmation, and A1.12 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a1-12-trip-invitations').assessment.version, 'a1-12-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a1-12-trip-invitations');
    const responses = [
      'Ja, ich komme gern. Um wie viel Uhr beginnt die Feier?',
      'Am Samstag mache ich eine Feier bei mir zu Hause. Die Feier beginnt um 16 Uhr. Möchtest du kommen? Kannst du bitte Wasser mitbringen? Ja, ich komme am Samstag um 16 Uhr. Ich bringe Wasser mit.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A1.12 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a1-12-trip-invitations').performanceTasks[0]], 'lesson:a1-12-trip-invitations', 'a1-12-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a1-12-trip-invitations');
      const next=findLesson('a2-01-routines-abilities-experiences');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a1-12-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a1-12-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a1-12-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a1-12-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A1.12 old record but require current score/evidence/version; reject stale drafts');

  assert.equal(vm.runInContext(`performanceTaskEvidenceReady(findLesson('a1-12-trip-invitations').performanceTasks[0], {response:'Leider kann ich nicht kommen. Ich muss arbeiten.',checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:false})`,context),true,'A1.12 written refusal model also fits threshold without speech');

  // CR19: written learning record vs spoken routine and experiences, and A2.1 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-01-routines-abilities-experiences').assessment.version, 'a2-01-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-01-routines-abilities-experiences');
    const responses = [
      'Ich lerne seit einem Jahr Deutsch. Ich nehme zweimal pro Woche an einem Sprachkurs teil. Ich kann kurze Texte lesen. Letzte Woche habe ich einen Brief auf Deutsch geschrieben.',
      'Ich lerne seit sechs Monaten Deutsch. Vor sechs Monaten habe ich mit einem Kurs angefangen. Ich kann einfache Texte lesen. Letztes Wochenende habe ich einen Freund besucht.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i===0?1:0], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.1 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-01-routines-abilities-experiences').performanceTasks[1]], 'lesson:a2-01-routines-abilities-experiences', 'a2-01-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-01-routines-abilities-experiences');
      const next=findLesson('a2-02-travel-comparisons');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-01-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-01-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-01-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-01-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.1 old record but require current score/evidence/version; reject stale drafts');

  // CR20: written choice vs spoken table comparison, and A2.2 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-02-travel-comparisons').assessment.version, 'a2-02-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-02-travel-comparisons');
    const responses = [
      'Der Zug ist schneller als der Bus. Ich möchte nicht lange fahren. Ich nehme den Zug, denn er ist schneller. Deshalb fahre ich mit dem Zug nach Bremen.',
      'Der Zug ist schneller als der Bus. Der Bus ist so bequem wie der Zug. Der Zug ist am schnellsten. Ich nehme den Zug, denn er ist am schnellsten.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i===0?1:0], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.2 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-02-travel-comparisons').performanceTasks[1]], 'lesson:a2-02-travel-comparisons', 'a2-02-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-02-travel-comparisons');
      const next=findLesson('a2-03-food-nutrition-shopping');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-02-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-02-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-02-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-02-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.2 old record but require current score/evidence/version; reject stale drafts');

  // CR21: written shopping list vs spoken restaurant exchange, and A2.3 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-03-food-nutrition-shopping').assessment.version, 'a2-03-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-03-food-nutrition-shopping');
    const responses = [
      'ein Kilo Kartoffeln; eine Flasche Wasser; eine Packung Reis; 200 Gramm Käse. Wie viel Käse brauchen wir?',
      'Guten Abend. Ich hätte gern eine Gemüsesuppe und ein Glas Wasser. Gern. Ist die Suppe vegetarisch? Ja, sie ist vegetarisch. Man kann hier vegetarisch essen.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.3 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-03-food-nutrition-shopping').performanceTasks[0]], 'lesson:a2-03-food-nutrition-shopping', 'a2-03-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-03-food-nutrition-shopping');
      const next=findLesson('a2-04-office-phone-appointments');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-03-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-03-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-03-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-03-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.3 old record but require current score/evidence/version; reject stale drafts');

  // CR22: spoken appointment call vs written email, and A2.4 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-04-office-phone-appointments').assessment.version, 'a2-04-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-04-office-phone-appointments');
    const responses = [
      'Guten Tag, hier spricht Amal Ben Ali. Ich möchte einen Termin vereinbaren. An welchem Tag möchten Sie kommen? Können Sie mir sagen, ob am Donnerstag um 14 Uhr ein Termin frei ist? Leider ist um 14 Uhr kein Termin frei. Am Donnerstag um 15 Uhr ist ein Termin frei. Das passt mir gut. Vielen Dank. Ich bestätige den Termin am Donnerstag um 15 Uhr.',
      'Guten Tag, Frau Weber, leider kann ich am Dienstag um 9 Uhr nicht zu unserem Termin kommen. Ich habe eine andere Besprechung. Können wir den Termin auf Mittwoch um 11 Uhr verschieben? Bitte teilen Sie mir mit, ob der Termin möglich ist. Ich möchte wissen, wann die Besprechung endet. Vielen Dank und freundliche Grüße Amal Ben Ali'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.4 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-04-office-phone-appointments').performanceTasks[1]], 'lesson:a2-04-office-phone-appointments', 'a2-04-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-04-office-phone-appointments');
      const next=findLesson('a2-05-training-routine-wenn');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-04-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-04-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-04-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-04-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.4 old record but require current score/evidence/version; reject stale drafts');

  // CR23: written weekly schedule vs spoken given situations, and A2.5 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-05-training-routine-wenn').assessment.version, 'a2-05-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-05-training-routine-wenn');
    const responses = [
      'Am Montag arbeite ich im Betrieb. Am Dienstag habe ich Unterricht in der Berufsschule. Wenn ich am Abend Zeit habe, lerne ich Deutsch. Ich mache eine Pause, wenn ich müde bin.',
      'Wenn ich frei habe, besuche ich meine Familie. Wenn der Bus zu spät kommt, nehme ich einen späteren Zug. Ich mache eine Pause, wenn ich lange lerne.'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.5 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-05-training-routine-wenn').performanceTasks[0]], 'lesson:a2-05-training-routine-wenn', 'a2-05-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-05-training-routine-wenn');
      const next=findLesson('a2-06-family-happiness-gifts');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-05-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-05-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-05-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-05-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.5 old record but require current score/evidence/version; reject stale drafts');

  // CR24: spoken celebration description vs written invitation, and A2.6 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-06-family-happiness-gifts').assessment.version, 'a2-06-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-06-family-happiness-gifts');
    const responses = [
      'Am Samstag feiern wir den Geburtstag meiner Großmutter bei meinen Eltern. Ich bringe einen Kuchen mit. Ich hoffe, dass meine Cousins kommen. Ich freue mich, dass wir zusammen sein können.',
      'Lieber Sami, ich lade dich zur Feier am Samstag um 18 Uhr bei meinen Eltern ein. Wir feiern den Geburtstag meiner Großmutter. Ich freue mich auf die Feier. Ich hoffe, dass du kommen kannst. Liebe Grüße Mariam'
    ];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.6 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-06-family-happiness-gifts').performanceTasks[1]], 'lesson:a2-06-family-happiness-gifts', 'a2-06-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-06-family-happiness-gifts');
      const next=findLesson('a2-07-language-learning-travel-purpose');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-06-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-06-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-06-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-06-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.6 old record but require current score/evidence/version; reject stale drafts');

  // CR25: spoken language trip vs written preparation, and A2.7 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-07-language-learning-travel-purpose').assessment.version, 'a2-07-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-07-language-learning-travel-purpose');
    const responses = ["Im Sommer mache ich eine Sprachreise nach Wien. Ich besuche eine Sprachschule, um Deutsch zu üben. Ich besuche Museen, um mehr über die Stadt zu erfahren. Ich spreche mit meiner Gastfamilie, um die Sprache im Alltag zu benutzen.", "Ich lerne Deutsch, um mich auf die Reise vorzubereiten. Ich nehme ein Wörterbuch mit, um neue Wörter nachzuschlagen. Ich informiere mich über die Stadt, um passende Orte zu finden."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.7 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-07-language-learning-travel-purpose').performanceTasks[1]], 'lesson:a2-07-language-learning-travel-purpose', 'a2-07-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-07-language-learning-travel-purpose');
      const next=findLesson('a2-08-media-news-passive');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-07-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-07-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-07-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-07-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.7 old record but require current score/evidence/version; reject stale drafts');

  // CR26: spoken fictional news vs written passive transformation, and A2.8 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-08-media-news-passive').assessment.version, 'a2-08-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-08-media-news-passive');
    const responses = ["Am Mittwoch wird eine Sitzung organisiert. Die Fragen werden beantwortet. Am nächsten Tag werden die Informationen auf der Webseite der Stadt veröffentlicht.", "Der Bericht wird veröffentlicht. Die Nachrichten werden gesendet. Die Einwohner werden eingeladen."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.8 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-08-media-news-passive').performanceTasks[1]], 'lesson:a2-08-media-news-passive', 'a2-08-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-08-media-news-passive');
      const next=findLesson('a2-09-products-technology-complaints');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-08-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-08-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-08-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-08-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.8 old record but require current score/evidence/version; reject stale drafts');

  // CR27: written complaint vs spoken service roles, and A2.9 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-09-products-technology-complaints').assessment.version, 'a2-09-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-09-products-technology-complaints');
    const responses = ["Guten Tag, vor sieben Tagen habe ich bei Ihnen einen Kopfhörer gekauft. Seit gestern funktioniert der rechte Lautsprecher nicht. Ich habe den Kassenbon noch. Könnten Sie das Gerät bitte prüfen? Ich möchte wissen, ob ein Umtausch möglich ist. Vielen Dank Nora", "Kundin: Guten Tag. Mein Tablet ist defekt. Könnten Sie das Gerät bitte prüfen? Mitarbeiter: Haben Sie den Kassenbon? Kundin: Ja, hier ist der Kassenbon. Mitarbeiter: Das Gerät ist noch unter Garantie. Wir können es reparieren oder umtauschen."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.9 models fit thresholds; P01 is writing only, P02 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-09-products-technology-complaints').performanceTasks[0]], 'lesson:a2-09-products-technology-complaints', 'a2-09-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-09-products-technology-complaints');
      const next=findLesson('a2-10-sports-health-feelings-weil');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-09-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-09-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-09-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-09-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.9 old record but require current score/evidence/version; reject stale drafts');

  // CR28: spoken fictional activity vs written causal transformations, and A2.10 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-10-sports-health-feelings-weil').assessment.version, 'a2-10-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-10-sports-health-feelings-weil');
    const responses = ["Ich spiele zweimal pro Woche Basketball. Heute bin ich erschöpft, weil ich lange trainiert habe. Trotzdem bin ich zufrieden, denn meine Mannschaft hat gut gespielt. Weil meine Muskeln müde sind, mache ich morgen eine Pause.", "Ich mache eine Pause, weil ich müde bin. Weil ich müde bin, mache ich eine Pause. Ich mache eine Pause, denn ich bin müde."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.10 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-10-sports-health-feelings-weil').performanceTasks[1]], 'lesson:a2-10-sports-health-feelings-weil', 'a2-10-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-10-sports-health-feelings-weil');
      const next=findLesson('a2-11-housing-neighborhood-wohin');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-10-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-10-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-10-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-10-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.10 old record but require current score/evidence/version; reject stale drafts');

  // CR29: spoken room description vs written neighbor request, and A2.11 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-11-housing-neighborhood-wohin').assessment.version, 'a2-11-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-11-housing-neighborhood-wohin');
    const responses = ["Das Sofa steht an der Wand. Das Buch liegt auf dem Tisch. Ich stelle den Sessel neben das Sofa. Ich lege die Zeitung auf den Nachttisch.", "Ich wohne in der Innenstadt. Der Innenhof ist neben dem Eingang. Heute ist es im Innenhof laut. Könnten Sie bitte etwas leiser sein?"];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.11 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-11-housing-neighborhood-wohin').performanceTasks[1]], 'lesson:a2-11-housing-neighborhood-wohin', 'a2-11-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-11-housing-neighborhood-wohin');
      const next=findLesson('a2-12-holidays-festivals-culture');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-11-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-11-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-11-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-11-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.11 old record but require current score/evidence/version; reject stale drafts');

  // CR30: spoken cultural plan vs written temporal transformations, and A2.12 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'a2-12-holidays-festivals-culture').assessment.version, 'a2-12-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('a2-12-holidays-festivals-culture');
    const responses = ["Am Samstag besuchen wir ein Kulturfest in Linden. Um vier Uhr besuchen wir eine Ausstellung. Bevor das Konzert beginnt, treffen wir uns am Eingang. Nachdem wir das Konzert gehört haben, essen wir auf dem Markt. Am Abend fahren wir nach Hause.", "Wir essen zu Hause, bevor wir zum Konzert gehen. Nachdem wir gegessen haben, gehen wir zum Konzert. Nachdem wir das Konzert gehört haben, treffen wir unsere Freunde auf dem Markt."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===0};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===1 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'A2.12 models fit thresholds; P02 is writing only, P01 needs speech and all checks');
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('a2-12-holidays-festivals-culture').performanceTasks[1]], 'lesson:a2-12-holidays-festivals-culture', 'a2-12-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('a2-12-holidays-festivals-culture');
      const next=findLesson('b1-01-daily-life-hobbies-experiences');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'a2-12-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'a2-12-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='a2-12-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'a2-12-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain A2.12 old record but require current score/evidence/version; reject stale drafts');

  // CR31: five-sentence story and four-turn dialogue; both need speech; B1.1 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-01-daily-life-hobbies-experiences').assessment.version, 'b1-01-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-01-daily-life-hobbies-experiences');
    const responses = ["Als ich zwölf Jahre alt war, besuchte ich meinen ersten Malkurs. Dort lernte ich neue Freunde kennen. Wenn wir früher am Samstag Zeit hatten, malten wir zusammen im Park. Heute male ich noch gern. Ich erinnere mich an diesen Kurs.", "A: Wann hast du zum ersten Mal Schach gespielt? B: Als ich zehn Jahre alt war, spielte ich zum ersten Mal Schach. A: Was hast du früher gemacht, wenn du am Sonntag Zeit hattest? B: Wenn ich am Sonntag Zeit hatte, spielte ich oft mit meiner Schwester. Ich erinnere mich an diese Nachmittage."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:true};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && !performanceTaskEvidenceReady(t,{...e,spokenAloud:false});
    });
  })()`, context), true, 'B1.1 models fit thresholds; both tasks need speech and all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-01-daily-life-hobbies-experiences').performanceTasks[1]], 'lesson:b1-01-daily-life-hobbies-experiences', 'b1-01-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-01-daily-life-hobbies-experiences');
      const next=findLesson('b1-02-food-habits-obwohl');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-01-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-01-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-01-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-01-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.1 old record but require current score/evidence/version; reject stale drafts');

  // CR32: food paragraph and canteen dialogue; both require speech; B1.2 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-02-food-habits-obwohl').assessment.version, 'b1-02-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-02-food-habits-obwohl');
    const responses = ["Ich esse mittags oft Reis mit Gemüse. Ich mag dieses Essen, weil es mir gut schmeckt. Obwohl ich wenig Zeit habe, koche ich meistens selbst. Manchmal ist das Kochen anstrengend. Trotzdem bereite ich mein Essen gern zu Hause zu.", "A: Isst du heute in der Kantine? B: Obwohl die Kantine praktisch ist, bringe ich heute Essen von zu Hause mit. A: Das Essen dort ist manchmal teuer. B: Trotzdem gehe ich morgen mit meinen Kollegen dorthin."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:true};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && !performanceTaskEvidenceReady(t,{...e,spokenAloud:false});
    });
  })()`, context), true, 'B1.2 models fit thresholds; both tasks need speech and all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-02-food-habits-obwohl').performanceTasks[1]], 'lesson:b1-02-food-habits-obwohl', 'b1-02-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-02-food-habits-obwohl');
      const next=findLesson('b1-03-work-communication-konjunktiv');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-02-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-02-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-02-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-02-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.2 old record but require current score/evidence/version; reject stale drafts');

  // CR33: written application and spoken meeting; B1.3 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-03-work-communication-konjunktiv').assessment.version, 'b1-03-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-03-work-communication-konjunktiv');
    const responses = ["Sehr geehrte Damen und Herren, hiermit bewerbe ich mich um die Teilzeitstelle als Assistenz im Kulturzentrum. Ich kann Termine zuverlässig planen. Ich habe in einem Projektteam E-Mails beantwortet. Ich würde gern meine Erfahrung in Ihr Team einbringen. Könnten Sie mir einen Termin für ein Vorstellungsgespräch anbieten? Mit freundlichen Grüßen", "A: Heute ist Montag, und wir müssen den Bericht bis Freitag abgeben. Was würden Sie vorschlagen? B: Ich würde den Text prüfen und Sie könnten die Zahlen kontrollieren. A: Könnten wir morgen die Ergebnisse vergleichen? B: Ja, ich schicke Ihnen meinen Teil bis morgen Vormittag."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.3 models fit thresholds; letter is writing only, meeting requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-03-work-communication-konjunktiv').performanceTasks[1]], 'lesson:b1-03-work-communication-konjunktiv', 'b1-03-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-03-work-communication-konjunktiv').performanceTasks[0]], 'lesson:b1-03-work-communication-konjunktiv', 'b1-03-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-03-work-communication-konjunktiv');
      const next=findLesson('b1-04-continuing-education-damit');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-03-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-03-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-03-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-03-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.3 old record but require current score/evidence/version; reject stale drafts');

  // CR34: written learning plan and spoken coaching dialogue; B1.4 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-04-continuing-education-damit').assessment.version, 'b1-04-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-04-continuing-education-damit');
    const responses = ["Ich möchte meine Computerkenntnisse verbessern. Ich besuche einen Onlinekurs, um neue Funktionen zu lernen. Ich wiederhole die Aufgaben, um mich auf den nächsten Unterricht vorzubereiten. Die Lehrkraft gibt mir Beispiele, damit ich die Funktionen selbstständig anwenden kann.", "Lernender: Ich mache einen Onlinekurs, um meine Computerkenntnisse zu verbessern. Trainerin: Ich gebe dir praktische Aufgaben, damit du neue Funktionen üben kannst. Lernender: Wann besprechen wir meine Fragen? Trainerin: Wir besprechen sie morgen nach dem Kurs."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.4 models fit thresholds; plan is writing only, dialogue requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-04-continuing-education-damit').performanceTasks[1]], 'lesson:b1-04-continuing-education-damit', 'b1-04-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-04-continuing-education-damit').performanceTasks[0]], 'lesson:b1-04-continuing-education-damit', 'b1-04-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-04-continuing-education-damit');
      const next=findLesson('b1-05-cities-relative-clauses');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-04-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-04-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-04-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-04-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.4 old record but require current score/evidence/version; reject stale drafts');

  // CR35: written neighborhood and spoken tour; B1.5 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-05-cities-relative-clauses').assessment.version, 'b1-05-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-05-cities-relative-clauses');
    const responses = ["Mein fiktives Viertel liegt südlich der Innenstadt. Ich besuche gern den Marktplatz, der im Zentrum liegt. Die Bibliothek befindet sich neben dem Marktplatz. Der Park, den viele Familien besuchen, liegt neben der Bibliothek. Am Wochenende gehe ich gern durch die ruhigen Straßen.", "Besucherin: Wo beginnt unsere Runde? Stadtführer: Wir beginnen auf dem Marktplatz, der direkt am Fluss liegt. Besucherin: Welchen Ort besuchen wir danach? Stadtführer: Danach besuchen wir den Park, den viele Familien mögen. Er liegt neben dem Marktplatz."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.5 models fit thresholds; description is writing only, dialogue requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-05-cities-relative-clauses').performanceTasks[1]], 'lesson:b1-05-cities-relative-clauses', 'b1-05-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-05-cities-relative-clauses').performanceTasks[0]], 'lesson:b1-05-cities-relative-clauses', 'b1-05-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-05-cities-relative-clauses');
      const next=findLesson('b1-06-health-fitness-advice');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-05-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-05-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-05-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-05-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.5 old record but require current score/evidence/version; reject stale drafts');

  // CR36: written advice and spoken break agreement; B1.6 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-06-health-fitness-advice').assessment.version, 'b1-06-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-06-health-fitness-advice');
    const responses = ["Du solltest regelmäßige Pausen in deinen Tag einplanen. Du könntest in einer Pause einen kurzen Spaziergang machen. Du könntest ein Tempo wählen, das zu dir passt. Bei gesundheitlichen Fragen solltest du eine qualifizierte Fachperson um Rat bitten.", "Kollegin: Ich möchte morgen eine Pause einplanen. Kollege: Wir sollten einen Zeitpunkt wählen, der für uns beide passt. Kollegin: Wir könnten in der Mittagspause um dreizehn Uhr kurz nach draußen gehen. Kollege: Das passt für mich. Die Teilnahme ist freiwillig."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.6 models fit thresholds; advice is writing only, dialogue requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-06-health-fitness-advice').performanceTasks[1]], 'lesson:b1-06-health-fitness-advice', 'b1-06-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-06-health-fitness-advice').performanceTasks[0]], 'lesson:b1-06-health-fitness-advice', 'b1-06-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-06-health-fitness-advice');
      const next=findLesson('b1-07-lifestyles-customs-cultures');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-06-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-06-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-06-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-06-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.6 old record but require current score/evidence/version; reject stale drafts');

  // CR37: written comparison and spoken chore agreement; B1.7 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-07-lifestyles-customs-cultures').assessment.version, 'b1-07-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-07-lifestyles-customs-cultures');
    const responses = ["Mina und Samir wohnen in einer fiktiven Wohngemeinschaft. Mina kocht sowohl am Dienstag als auch am Donnerstag. Samir liest nicht nur Romane, sondern auch Sachbücher. Mina trinkt am Abend weder Kaffee noch schwarzen Tee. Samir trinkt dagegen am Abend gern schwarzen Tee.", "Mina: Wann planen wir die Aufgaben für diese Woche? Samir: Wir können entweder am Montag oder am Dienstag darüber sprechen. Mina: Am Montag habe ich Zeit. Samir: Gut, dann treffen wir uns am Montag um achtzehn Uhr. Mina: Am Dienstag übernehme ich sowohl das Kochen als auch den Einkauf. Samir: Einverstanden. Dann räume ich am Dienstag die Küche auf."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.7 models fit thresholds; comparison is writing only, dialogue requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-07-lifestyles-customs-cultures').performanceTasks[1]], 'lesson:b1-07-lifestyles-customs-cultures', 'b1-07-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-07-lifestyles-customs-cultures').performanceTasks[0]], 'lesson:b1-07-lifestyles-customs-cultures', 'b1-07-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-07-lifestyles-customs-cultures');
      const next=findLesson('b1-08-consumption-advertising-je-desto');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-07-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-07-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-07-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-07-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.7 old record but require current score/evidence/version; reject stale drafts');

  // CR38: written comparison and spoken recommendation; B1.8 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-08-consumption-advertising-je-desto').assessment.version, 'b1-08-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-08-consumption-advertising-je-desto');
    const responses = ["Flasche A kostet zwanzig Euro und ist günstiger als Flasche B für vierundzwanzig Euro. Mit dreihundert Gramm ist A leichter als B mit vierhundert Gramm. A fasst sechshundert Milliliter, B dagegen achthundert Milliliter. Die Werbung nennt A die beste Flasche für alle, aber das ist eine allgemeine Werbeaussage. Je genauer ich vor dem Kauf das angegebene Gewicht prüfe, desto besser kann ich diese Angabe beurteilen.", "Nach den fiktiven Angaben empfehle ich Nora Flasche A, weil sie eine günstige und leichte Flasche sucht. Je niedriger der Endpreis ist, desto weniger Geld muss Nora ausgeben. Je leichter die Flasche ist, umso einfacher kann sie sie tragen. Die Angabe von dreihundert Gramm ist überprüfbar, aber die Werbung mit der besten Flasche für alle beweist keine bessere Qualität."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.8 models fit thresholds; comparison is writing only, dialogue requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-08-consumption-advertising-je-desto').performanceTasks[1]], 'lesson:b1-08-consumption-advertising-je-desto', 'b1-08-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-08-consumption-advertising-je-desto').performanceTasks[0]], 'lesson:b1-08-consumption-advertising-je-desto', 'b1-08-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-08-consumption-advertising-je-desto');
      const next=findLesson('b1-09-travel-transport-environment');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-08-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-08-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-08-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-08-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.8 old record but require current score/evidence/version; reject stale drafts');

  // CR39: written plan and spoken fallback; B1.9 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-09-travel-transport-environment').assessment.version, 'b1-09-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-09-travel-transport-environment');
    const responses = ["Am Samstag planen wir eine Fahrt in die fiktive Stadt Uferstadt. Bevor wir losfahren, prüfen wir den Fahrplan. Wir fahren zuerst mit dem Zug nach Uferstadt. Nachdem wir angekommen sind, suchen wir den Anschlussbus zum Museum. Während wir auf den Bus warten, lesen wir einen Stadtplan.", "Heute fällt mein erster Bus aus. Bevor ich das Haus verlasse, sehe ich mir den Fahrplan an. In dieser erfundenen Situation kann ich den Zug oder einen späteren Bus nehmen. Während ich auf den Zug warte, prüfe ich den Anschluss. Nachdem ich in den Zug eingestiegen bin, lese ich die Nachrichten. Wenn die Strecke kurz ist, gehe ich zu Fuß."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.9 models fit thresholds; comparison is writing only, dialogue requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-09-travel-transport-environment').performanceTasks[1]], 'lesson:b1-09-travel-transport-environment', 'b1-09-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-09-travel-transport-environment').performanceTasks[0]], 'lesson:b1-09-travel-transport-environment', 'b1-09-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-09-travel-transport-environment');
      const next=findLesson('b1-10-media-news-formal-communication');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-09-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-09-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-09-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-09-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.9 old record but require current score/evidence/version; reject stale drafts');

  // CR40: written email and spoken caller script; B1.10 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-10-media-news-formal-communication').assessment.version, 'b1-10-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-10-media-news-formal-communication');
    const responses = ["Betreff: Anfrage zu einem Ausstellungsbeitrag Sehr geehrte Damen und Herren, ich schreibe an Ihre fiktive Redaktion wegen eines Beitrags über eine Ausstellung. Könnten Sie mir mitteilen, wann der Beitrag als Podcast verfügbar ist? Können Sie mir sagen, ob eine vollständige Quellenliste auf Ihrer Webseite steht? Ich freue mich auf Ihre Antwort. Ich danke Ihnen im Voraus. Mit freundlichen Grüßen Rana", "Guten Tag, können Sie mir sagen, wann die nächste Ausgabe Ihres Stadtmagazins erscheint? Könnten Sie mir mitteilen, ob das vollständige Transkript online verfügbar ist? Ich möchte außerdem wissen, wo ich das Archiv finde. Vielen Dank für Ihre Auskunft und auf Wiederhören."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.10 models fit thresholds; email is writing only, caller script requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-10-media-news-formal-communication').performanceTasks[1]], 'lesson:b1-10-media-news-formal-communication', 'b1-10-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-10-media-news-formal-communication').performanceTasks[0]], 'lesson:b1-10-media-news-formal-communication', 'b1-10-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-10-media-news-formal-communication');
      const next=findLesson('b1-11-history-politics-passive-past');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-10-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-10-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-10-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-10-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.10 old record but require current score/evidence/version; reject stale drafts');

  // CR41: written timeline and spoken museum presentation; B1.11 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-11-history-politics-passive-past').assessment.version, 'b1-11-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-11-history-politics-passive-past');
    const responses = ["1970 wurde in der fiktiven Gemeinde Morgenhain eine Brücke gebaut. 1985 wurde dort eine Bibliothek eröffnet. 2004 wurden zwei Jugendgruppen gegründet. 2018 wurde der Marktplatz von der Gemeinde renoviert.", "Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet. Für die Ausstellung wurden Fotos von Einwohnern gesammelt. Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut. In einem Gästebuch wurden Erinnerungen an die Brücke notiert. Viele Schulklassen wurden durch die Ausstellung geführt."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.11 models fit thresholds; timeline is writing only, presentation requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-11-history-politics-passive-past').performanceTasks[1]], 'lesson:b1-11-history-politics-passive-past', 'b1-11-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-11-history-politics-passive-past').performanceTasks[0]], 'lesson:b1-11-history-politics-passive-past', 'b1-11-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-11-history-politics-passive-past');
      const next=findLesson('b1-12-innovation-research-future');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-11-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-11-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-11-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-11-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.11 old record but require current score/evidence/version; reject stale drafts');

  // CR42: written innovation pitch and spoken schoolyard briefing; B1.12 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b1-12-innovation-research-future').assessment.version, 'b1-12-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b1-12-innovation-research-future');
    const responses = ["Unsere fiktive Projektgruppe entwickelt im Lernlabor einen kleinen Feuchtigkeitssensor für Schulgärten. Nächste Woche testet das Team den ersten Prototyp im Garten. Wahrscheinlich wird der Sensor nützliche Messwerte liefern. Vielleicht wird das Experiment bei Regen länger dauern. Nach dem Test werden wir das Modell Schritt für Schritt verbessern.", "In unserem fiktiven Kurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann. In zwei Wochen werden wir Modelle aus Karton vorstellen. Danach werden wir Rückmeldungen von der Gruppe sammeln. Wahrscheinlich werden wir zwei Entwürfe verbessern. Vielleicht wird das Team am Ende das praktischste Modell auswählen."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B1.12 models fit thresholds; pitch is writing only, briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b1-12-innovation-research-future').performanceTasks[1]], 'lesson:b1-12-innovation-research-future', 'b1-12-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b1-12-innovation-research-future').performanceTasks[0]], 'lesson:b1-12-innovation-research-future', 'b1-12-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b1-12-innovation-research-future');
      const next=findLesson('b2-01-time-management-habits-reading');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b1-12-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b1-12-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b1-12-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b1-12-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B1.12 old record but require current score/evidence/version; reject stale drafts');

  // CR43: written habit paragraph and spoken colleague briefing; B2.1 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-01-time-management-habits-reading').assessment.version, 'b2-01-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-01-time-management-habits-reading');
    const responses = ["Früher habe ich beim Lesen oft zwischen Nachrichten und langen Texten gewechselt. Jetzt wähle ich am Abend zuerst zwei feste Zeitblöcke für meinen Kurs aus. Ich bleibe konzentriert, indem ich mein Telefon ausschalte und nach jedem Abschnitt eine kurze Notiz mache. Außerdem führe ich eine kurze Prioritätenliste, um keine wichtige Aufgabe zu vergessen. Meinen Plan passe ich schrittweise an, damit er im Alltag realistisch bleibt.", "In der Aufnahme berichtet die Person, dass sie früher oft zwischen mehreren Aufgaben gewechselt hat und jetzt zwei Zeitblöcke für konzentrierte Arbeit plant. Sie erledigt ähnliche Aufgaben nacheinander und notiert bei längeren Texten Fragen am Rand. Dadurch, dass sie kurze Pausen einplant, kann sie sich besser auf den nächsten Abschnitt konzentrieren. Zusätzlich können wir Ablenkungen verringern, indem wir während eines Zeitblocks alle Benachrichtigungen am Telefon ausschalten. Wir legen feste Ruhezeiten für Nachrichten fest, um schwierige Texte ohne ständige Unterbrechung zu bewältigen."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich lerne.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.1 models fit thresholds; habit paragraph is writing only, briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-01-time-management-habits-reading').performanceTasks[1]], 'lesson:b2-01-time-management-habits-reading', 'b2-01-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-01-time-management-habits-reading').performanceTasks[0]], 'lesson:b2-01-time-management-habits-reading', 'b2-01-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b2-01-time-management-habits-reading');
      const next=findLesson('b2-02-career-formal-communication-konjunktiv1');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b2-01-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b2-01-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b2-01-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b2-01-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B2.1 old record but require current score/evidence/version; reject stale drafts');

  // CR44: written career counseling summary and spoken colleague briefing; B2.2 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-02-career-formal-communication-konjunktiv1').assessment.version, 'b2-02-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-02-career-formal-communication-konjunktiv1');
    const responses = ["Die Beraterin erklärt, meine Bewerbung sei klar strukturiert und passe gut zum Anforderungsprofil der Stelle. Sie fügt hinzu, ich habe viel Berufserfahrung in der Kundenbetreuung, solle aber im Lebenslauf zwei konkrete Projektergebnisse ergänzen. Der Coach meint, ein kurzes Anschreiben könne meinen Wechselwunsch verständlich erläutern. Die Kolleginnen sagen außerdem, sie hätten mit einer klaren Übersicht über ihre Zuständigkeiten gute Erfahrungen gemacht. Aus meiner Sicht ist dieser Hinweis sehr hilfreich, deshalb überarbeite ich heute meinen Lebenslauf Schritt für Schritt.", "Laut dem Coach im Seminar müsse ein berufliches Ziel konkret formuliert werden. Er erklärt außerdem, der Lebenslauf solle wichtige Aufgaben und Ergebnisse nennen. Eine Teilnehmerin berichtet, sie habe im letzten Jahr ein kleines Team koordiniert, und laut dem Coach zeige dieses Beispiel ihre Organisationsfähigkeit. Schließlich fügt der Coach hinzu, ein Anschreiben könne die Motivation kurz erläutern. Ich empfehle der Bewerberin als nächsten Schritt, zwei konkrete Projektergebnisse im Lebenslauf zu ergänzen und das Anschreiben kurz zu überarbeiten."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ich arbeite.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.2 models fit thresholds; counseling summary is writing only, colleague briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-02-career-formal-communication-konjunktiv1').performanceTasks[1]], 'lesson:b2-02-career-formal-communication-konjunktiv1', 'b2-02-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-02-career-formal-communication-konjunktiv1').performanceTasks[0]], 'lesson:b2-02-career-formal-communication-konjunktiv1', 'b2-02-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b2-02-career-formal-communication-konjunktiv1');
      const next=findLesson('b2-03-consumption-environment-passive-modal');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b2-02-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b2-02-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b2-02-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b2-02-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B2.2 old record but require current score/evidence/version; reject stale drafts');

  // CR45: written store sustainability plan and spoken cafe team briefing; B2.3 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-03-consumption-environment-passive-modal').assessment.version, 'b2-03-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-03-consumption-environment-passive-modal');
    const responses = ["In unserem fiktiven Nachbarschaftsladen sollen Einwegverpackungen schrittweise reduziert werden. Heißgetränke und Suppen können in langlebigen Mehrwegbehältern gegen Pfand angeboten werden. Kundinnen und Kunden können außerdem eigene Dosen für trockene Lebensmittel mitbringen. Beschädigte Küchengeräte müssen nicht sofort entsorgt werden, sondern sollten zuerst in einer kleinen Partnerwerkstatt geprüft und repariert werden. Das Team sammelt Rückmeldungen im Alltag, ohne vorab feste Einsparquoten zu versprechen.", "In unserem Café werden Getränke in Mehrwegbechern angeboten, die gegen Pfand ausgeliehen und später zurückgegeben werden können. Essensreste werden in der Küche getrennt gesammelt. Beschädigte Tabletts müssen nicht sofort ersetzt werden, weil zuerst geprüft wird, ob sie repariert werden können. Das Team sammelt Rückmeldungen der Gäste, um praktische Vorschläge kennenzulernen und weniger Material zu verschwenden. Als nächster Schritt sollten an der Theke kurze Hinweise zur Rückgabe angebracht werden, damit die Mehrwegbecher noch einfacher genutzt werden können."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Wir sparen.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.3 models fit thresholds; store plan is writing only, cafe briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-03-consumption-environment-passive-modal').performanceTasks[1]], 'lesson:b2-03-consumption-environment-passive-modal', 'b2-03-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-03-consumption-environment-passive-modal').performanceTasks[0]], 'lesson:b2-03-consumption-environment-passive-modal', 'b2-03-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b2-03-consumption-environment-passive-modal');
      const next=findLesson('b2-04-cities-housing-participles');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b2-03-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b2-03-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b2-03-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b2-03-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B2.3 old record but require current score/evidence/version; reject stale drafts');

  // CR46: written building/quarter description and spoken visitor briefing; B2.4 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-04-cities-housing-participles').assessment.version, 'b2-04-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-04-cities-housing-participles');
    const responses = ["In unserem fiktiven Wohnviertel am Kanal steht ein kürzlich saniertes Mehrfamilienhaus mit einer neu gedämmten Fassade. Neben dem Altbau liegen zwei derzeit entstehende Wohnhäuser mit einem barrierefrei gestalteten Eingang. Die im Erdgeschoss liegenden Räume teilen sich einen gemeinschaftlich genutzten Innenhof. Im Informationsblatt werden auch die voraussichtlich steigenden Nebenkosten für das Gebäude transparent genannt. Ob die angebotenen Wohnungen langfristig für alle interessierten Familien bezahlbar bleiben, hängt von der jeweiligen Wohnfläche und Ausstattung ab.", "Im fiktiven Wohnviertel Parkbogen wird derzeit ein alter Häuserblock schrittweise erneuert. Das bereits sanierte Eckhaus besitzt eine helle Fassade und einen barrierefrei gestalteten Eingang. Daneben liegen drei derzeit entstehende Wohnhäuser mit unterschiedlich großen Wohnungen und einem gemeinschaftlich genutzten Innenhof. Eine Bewohnerin begrüßt die renovierten Häuser, fragt aber, ob die steigenden Mieten für alle Haushalte bezahlbar bleiben. Bei unserem Rundgang können Sie sowohl einen möblierten Musterraum als auch eine noch nicht fertiggestellte Wohnung besichtigen und eigene Fragen notieren."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ein Haus.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.4 models fit thresholds; quarter description is writing only, visitor briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-04-cities-housing-participles').performanceTasks[1]], 'lesson:b2-04-cities-housing-participles', 'b2-04-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-04-cities-housing-participles').performanceTasks[0]], 'lesson:b2-04-cities-housing-participles', 'b2-04-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b2-04-cities-housing-participles');
      const next=findLesson('b2-05-health-fitness-medical-information');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b2-04-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b2-04-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b2-04-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b2-04-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B2.4 old record but require current score/evidence/version; reject stale drafts');

  // CR47: written fictional health-survey evaluation and spoken T05 briefing; B2.5 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-05-health-fitness-medical-information').assessment.version, 'b2-05-v3');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-05-health-fitness-medical-information');
    const responses = ["In einem fiktiven Kurzbericht wurde eine kleine Befragung über Schlaf- und Bewegungsgewohnheiten vorgestellt. Dabei nahmen nur 18 Freiwillige aus demselben Sportverein teil, und objektive Messwerte wurden überhaupt nicht erhoben. Die Stichprobe war sehr klein, sodass die vorläufigen Ergebnisse nicht für die gesamte Bevölkerung repräsentativ sind. Aufgrund der fehlenden Kontrollgruppe lässt sich aus den Antworten kein Ursache-Wirkungs-Zusammenhang ableiten. Deshalb beschreibt der Bericht nur persönliche Angaben und darf nicht als medizinische Empfehlung oder Diagnose verstanden werden.", "Im fiktiven Kurzbericht wurden 24 freiwillige Mitglieder einer örtlichen Gehgruppe dazu befragt, wo sie Informationen über Bewegung finden. Erfasst wurden ausschließlich ihre Antworten, während Fitnesswerte und medizinische Ergebnisse nicht gemessen wurden. Alle Teilnehmenden kamen aus derselben Gruppe, weshalb die kleine Stichprobe nicht repräsentativ für die gesamte Bevölkerung war. Aufgrund der fehlenden Kontrollgruppe und des vorläufigen Ergebnisses lässt sich keine Ursache für gesundheitliche Veränderungen nachweisen. Deshalb zeigt der Bericht nur die genannten Informationsquellen und ersetzt bei persönlichen Fragen keine Rücksprache mit einer qualifizierten Fachperson."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Eine Studie.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.5 models fit thresholds; survey evaluation is writing only, T05 briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-05-health-fitness-medical-information').performanceTasks[1]], 'lesson:b2-05-health-fitness-medical-information', 'b2-05-v3')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-05-health-fitness-medical-information').performanceTasks[0]], 'lesson:b2-05-health-fitness-medical-information', 'b2-05-v3')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b2-05-health-fitness-medical-information');
      const next=findLesson('b2-06-study-applications-verb-noun-phrases');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b2-05-v2'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b2-05-v2',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b2-05-v3';
      state.completedLessons[l.id]={...old,assessmentVersion:'b2-05-v3'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B2.5 old record but require current score/evidence/version; reject stale drafts');

  // CR48: written academic inquiry and spoken T05/T06 applicant briefing; B2.6 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-06-study-applications-verb-noun-phrases').assessment.version, 'b2-06-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-06-study-applications-verb-noun-phrases');
    const responses = ["Sehr geehrtes Team der Studienberatung an der fiktiven Campus-Akademie, ich ziehe den Studiengang „Kommunikation und Gesellschaft“ im kommenden Jahr ernsthaft in Betracht. Vorab möchte ich prüfen, ob ich mit meinem bisherigen Abschluss bereits alle Voraussetzungen für das Programm erfülle. Könnten Sie mir bitte mitteilen, welche Unterlagen ich zusammen mit dem Motivationsschreiben einreichen muss, bevor ich einen Antrag auf Zulassung stelle? Außerdem würde ich gern wissen, unter welchen Bedingungen ich einen noch fehlenden Leistungsnachweis später nachreichen kann. Vielen Dank für Ihre Auskunft, damit ich nach Ihrer Rückmeldung eine gut informierte Entscheidung treffen kann.", "Wenn du den fiktiven Studiengang „Kommunikation und Gesellschaft“ in Betracht ziehst, solltest du zuerst prüfen, ob du alle Zulassungsvoraussetzungen erfüllst. Danach musst du eine Bewerbung einreichen und einen Antrag auf Zulassung stellen, wofür ein Formular, ein Motivationsschreiben und ein Nachweis über den vorherigen Abschluss erforderlich sind. Fehlende Unterlagen können nur dann nachgereicht werden, wenn die Studienberatung der fiktiven Campus-Akademie dies schriftlich bestätigt. Alle Informationen zum Verfahren stehen auf der Webseite und in der fiktiven Ausschreibung zur Verfügung, und im Beratungsgespräch lassen sich offene Fragen klären, um eine gut informierte Entscheidung zu treffen. Nach der Zulassung schließen die Studierenden die Immatrikulation ab, erwerben im Studium fachliche Kenntnisse und legen am Ende mehrere Leistungsnachweise ab."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Eine Bewerbung.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.6 models fit thresholds; inquiry is writing only, applicant briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-06-study-applications-verb-noun-phrases').performanceTasks[1]], 'lesson:b2-06-study-applications-verb-noun-phrases', 'b2-06-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-06-study-applications-verb-noun-phrases').performanceTasks[0]], 'lesson:b2-06-study-applications-verb-noun-phrases', 'b2-06-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b2-06-study-applications-verb-noun-phrases');
      const next=findLesson('b2-07-travel-experiences-prepositional-relatives');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b2-06-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b2-06-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b2-06-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b2-06-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B2.6 old record but require current score/evidence/version; reject stale drafts');

  // CR49: written fictional trip description and spoken T05/T06 island briefing; B2.7 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-07-travel-experiences-prepositional-relatives').assessment.version, 'b2-07-v3');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-07-travel-experiences-prepositional-relatives');
    const responses = ["Unsere fiktive Wochenendreise beginnt an einem kleinen Hafen, von dem aus wir am Morgen zur Nachbarinsel aufbrechen. Die Fähre, mit der wir über das ruhige Meer fahren, erreicht nach einer Stunde eine stille Bucht. Danach führt unsere Route durch ein abgelegenes Dorf, in dem wir in einer gemütlichen Pension übernachten. Am zweiten Tag folgen wir den schmalen Wegen, auf denen man zwischen alten Steinmauern bis zur Küste wandern kann. Am Nachmittag erreichen wir den höchsten Aussichtspunkt, über den wir schon in unserem Reiseführer viel gelesen haben.", "Die Reise über die fiktive Insel Morgenküste beginnt mit einer Fähre, mit der Lina und ihre Freunde im Hafen West ablegen. Anschließend fahren sie durch ein Dorf, in dem sie in einer kleinen Pension ruhig übernachten. Am nächsten Tag wandern sie auf einem Weg mit alten Steinmauern bis zu einer Bucht, an der mehrere Fischerboote liegen. Die Route, über die Lina zuvor in ihrem Reiseführer gelesen hat, endet an einem Aussichtspunkt, von dem aus man die Küste sehen kann, bevor die Gruppe den Bewohnerinnen zuhört. Auch im Hörtext besucht die Gruppe zuerst einen kleinen Hafen, fährt mit dem Bus an mehreren Aussichtspunkten vorbei, bewundert die im Reiseführer beschriebene Bucht und bleibt schließlich in einer Unterkunft, in der sie zwei Nächte verbringt."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Eine Reise.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.7 models fit thresholds; trip description is writing only, island briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-07-travel-experiences-prepositional-relatives').performanceTasks[1]], 'lesson:b2-07-travel-experiences-prepositional-relatives', 'b2-07-v3')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-07-travel-experiences-prepositional-relatives').performanceTasks[0]], 'lesson:b2-07-travel-experiences-prepositional-relatives', 'b2-07-v3')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b2-07-travel-experiences-prepositional-relatives');
      const next=findLesson('b2-08-food-nutrition-data-passives');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b2-07-v2'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b2-07-v2',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b2-07-v3';
      state.completedLessons[l.id]={...old,assessmentVersion:'b2-07-v3'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B2.7 old record but require current score/evidence/version; reject stale drafts');

  // CR50: written fictional food-data experiment and spoken T05/T06 table briefing; B2.8 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-08-food-nutrition-data-passives').assessment.version, 'b2-08-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-08-food-nutrition-data-passives');
    const responses = ["In unserer Lehrküche werden heute drei fiktive Proben für eine Sprachübung vorbereitet. Zuerst werden alle Zutaten genau abgewogen und jede Probe wird deutlich gekennzeichnet. Danach werden der Zuckergehalt und der Anteil an Ballaststoffen pro Portion in eine Tabelle eingetragen. Jetzt sind die Zutaten abgewogen und die Tabelle ist vollständig geprüft. Diese fiktiven Nährwerte dienen nur dem Sprachtraining und sind keine persönliche Ernährungsempfehlung.", "In der fiktiven Tabelle aus der Leseübung hat Mischung B je 100 Gramm einen Zuckergehalt von 11 Gramm und 4 Gramm Ballaststoffe, während Mischung A 8 Gramm Zucker und 6 Gramm Ballaststoffe enthält. Vor der Eingabe werden die Zutaten in der Lehrküche abgewogen und die Proben werden einzeln gekennzeichnet. Anschließend werden die Messwerte je 100 Gramm erfasst und in die Tabelle eingetragen. Nach der Kontrolle ist die Tabelle geprüft und für unsere Sprachübung freigegeben, aber die weiteren Ergebnisse sind noch nicht ausgewertet. Alle Zahlen in dieser Übersicht sind rein fiktiv für das Sprachtraining und liefern keine persönliche Gesundheits- oder Ernährungsempfehlung."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Ein Test.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.8 models fit thresholds; experiment description is writing only, table briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-08-food-nutrition-data-passives').performanceTasks[1]], 'lesson:b2-08-food-nutrition-data-passives', 'b2-08-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-08-food-nutrition-data-passives').performanceTasks[0]], 'lesson:b2-08-food-nutrition-data-passives', 'b2-08-v2')`,context), /data-performance-spoken/);

  // CR51: written fictional company/campaign profile and spoken T05/T06 Nordwerk briefing; B2.9 version isolation.
  assert.equal(courseData.lessons.find(l => l.id === 'b2-09-business-marketing-employment-prepositions').assessment.version, 'b2-09-v2');
  assert.equal(vm.runInContext(`(() => {
    const l = findLesson('b2-09-business-marketing-employment-prepositions');
    const responses = ["Das fiktive Unternehmen „Südtechnik“ spezialisiert sich auf wartungsfreundliche Haushaltsgeräte und richtet sich mit einer neuen Kampagne an technische Fachkräfte. Worauf legt die Personalabteilung in der neuen Stellenanzeige besonderen Wert? Sie legt großen Wert darauf, dass die Arbeitsbedingungen und die Aufgaben im Team transparent beschrieben werden. Die Kampagne wirbt außerdem damit, dass neue Mitarbeitende in den ersten Wochen systematisch eingearbeitet werden. Ob sich viele passende Fachkräfte bewerben, hängt davon ab, ob die Zielgruppe das fiktive Angebot klar und glaubwürdig findet, denn ein Erfolg ist nicht garantiert.", "In der fiktiven Leseübung bietet das erfundene Unternehmen „Nordwerk“ Reparaturdienste und Ausbildungsplätze an und richtet sich an Menschen, die Geräte länger nutzen möchten, sowie an technische Fachkräfte. Worauf legt „Nordwerk“ in der Kampagne Wert, und womit wirbt das Unternehmen? Es legt Wert darauf, dass Aufgaben, Arbeitszeiten und Auswahlverfahren klar erklärt werden, und wirbt damit, dass neue Mitarbeitende eine strukturierte Einarbeitung erhalten. Im Hörtext erklärt die Personalchefin außerdem, dass die Auswahl bei Bewerbungen nicht nur von einem Zeugnis abhängt, sondern auch davon, ob eine Bewerberin praktische Erfahrung mit konkreten Beispielen aus der Praxis belegen kann. Ob die fiktive Kampagne erfolgreich ist, hängt davon ab, ob die Zielgruppe alle Informationen verständlich findet; ein garantierter Erfolg wird im Text ausdrücklich nicht versprochen."];
    return l.performanceTasks.every((t,i) => {
      const e = {response:responses[i], checks:{taskCompletion:true,meaningClarity:true,targetSkill:true},spokenAloud:i===1};
      return performanceTaskEvidenceReady(t,e) && !performanceTaskEvidenceReady(t,{...e,response:'Eine Firma.'})
        && t.selfCheck.requiredChecks.every(k => !performanceTaskEvidenceReady(t,{...e,checks:{...e.checks,[k]:false}}))
        && (i===0 || !performanceTaskEvidenceReady(t,{...e,spokenAloud:false}));
    });
  })()`, context), true, 'B2.9 models fit thresholds; company profile is writing only, Nordwerk briefing requires speech, both require all checks');
  assert.match(vm.runInContext(`renderPerformanceTasks([findLesson('b2-09-business-marketing-employment-prepositions').performanceTasks[1]], 'lesson:b2-09-business-marketing-employment-prepositions', 'b2-09-v2')`,context), /data-performance-spoken/);
  assert.doesNotMatch(vm.runInContext(`renderPerformanceTasks([findLesson('b2-09-business-marketing-employment-prepositions').performanceTasks[0]], 'lesson:b2-09-business-marketing-employment-prepositions', 'b2-09-v2')`,context), /data-performance-spoken/);
  assert.equal(vm.runInContext(`(() => {
    const prior=state.completedLessons, checks=state.levelChecks;
    try {
      const l=findLesson('b2-09-business-marketing-employment-prepositions');
      const next=findLesson('b2-10-wishes-probabilities-technology-konjunktiv2-past');
      const old={score:100,mastered:true,goalMet:true,performanceEvidenceCompleted:true,assessmentVersion:'b2-09-v1'};
      state.completedLessons=Object.fromEntries(course.lessons.slice(0,course.lessons.findIndex(x=>x.id===l.id)).map(x=>[x.id,{...old,assessmentVersion:x.assessment.version}]));
      state.levelChecks={'A0-A1':{...old,assessmentVersion:course.a0TransitionCheck.assessment.version}};
      state.completedLessons[l.id]=old;
      const blocked=!isLessonMastered(l)&&!isLessonAccessible(next)&&state.completedLessons[l.id]===old;
      const draft={id:l.id,assessmentVersion:'b2-09-v1',mode:'quiz',questionIndex:0,selected:null,checked:false,answers:[],completed:false};
      const stale=restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson')===null;
      draft.assessmentVersion='b2-09-v2';
      state.completedLessons[l.id]={...old,assessmentVersion:'b2-09-v2'};
      const current=isLessonMastered(l)&&isLessonAccessible(next)&&!!restoreAssessmentSession(draft,l.assessment,l.quiz,l.id,'lesson');
      state.completedLessons[l.id].performanceEvidenceCompleted=false;
      return blocked&&stale&&current&&!isLessonAccessible(next);
    } finally {state.completedLessons=prior;state.levelChecks=checks;}
  })()`,context),true,'retain B2.9 old record but require current score/evidence/version; reject stale drafts');

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
    "DL-B1-10": "b1-10-media-news-formal-communication",
    "DL-B1-11": "b1-11-history-politics-passive-past",
    "DL-B1-12": "b1-12-innovation-research-future",
    "DL-B2-01": "b2-01-time-management-habits-reading",
    "DL-B2-02": "b2-02-career-formal-communication-konjunktiv1",
    "DL-B2-03": "b2-03-consumption-environment-passive-modal",
    "DL-B2-04": "b2-04-cities-housing-participles",
    "DL-B2-05": "b2-05-health-fitness-medical-information",
    "DL-B2-06": "b2-06-study-applications-verb-noun-phrases",
    "DL-B2-07": "b2-07-travel-experiences-prepositional-relatives",
    "DL-B2-08": "b2-08-food-nutrition-data-passives",
    "DL-B2-09": "b2-09-business-marketing-employment-prepositions",
    "DL-B2-10": "b2-10-wishes-probabilities-technology-konjunktiv2-past",
    "DL-B2-11": "b2-11-humans-nature-environment-nominalization",
    "DL-B2-12": "b2-12-leisure-media-reported-speech",
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
  const sourceB1HealthModels = b1HealthSourceForAudio.split("## 2) تقديم نصيحة بـsollte وkönnte")[1].split("### مساعدة قبل النصوص والمهمات")[0].split("## 3)")[0]
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
  assert.equal(vm.runInContext("course.audioAssets.filter((asset) => asset.status === 'ready').length", context), 217, "all 217 audio assets must have ready status");
  assert.equal(vm.runInContext("course.audioAssets.filter((asset) => asset.status === 'generated_pending_acoustic_review').length", context), 0, "no audio assets remain pending after user approval");
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
  // CR35 replaces the obsolete oral-only alternative with source/evidence parity.
  assert.doesNotMatch(b1CitiesSource, /أو قدّمه شفهيًا/);
  for (const task of b1CitiesAssessment.performanceTasks) assert.ok(b1CitiesSource.includes(task.prompt));
  assert.deepEqual(b1CitiesAssessment.performanceTasks.map(task => task.selfCheck.speakAloud), [false, true]);
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
  assert.equal(b1HealthAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-06-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing")), true, "B1.6 tasks must map to the source and work without recorded audio");
  assert.doesNotMatch(b1HealthSource, /أو قدّم النصائح شفهيًا/);
  for (const task of b1HealthAssessment.performanceTasks) assert.ok(b1HealthSource.includes(task.prompt));
  assert.deepEqual(b1HealthAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.deepEqual(b1HealthAssessment.performanceTasks.map(t => t.selfCheck.speakAloud), [false,true]);
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
  assert.equal(b1LifestylesAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-07-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing")), true, "B1.7 tasks must map to the source and work without recorded audio");
  assert.doesNotMatch(b1LifestylesSource, /تقديمها شفهيًا/);
  for (const t of b1LifestylesAssessment.performanceTasks) assert.ok(b1LifestylesSource.includes(t.prompt));
  assert.deepEqual(b1LifestylesAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.deepEqual(b1LifestylesAssessment.performanceTasks.map(t => t.selfCheck.speakAloud), [false,true]);
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
  assert.equal(b1ConsumptionAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-08-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing")), true, "B1.8 tasks map to T08 and work without recording");
  const b1ConsumptionQuestionSources = new Set(b1ConsumptionAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b1ConsumptionQuestionSources.has(`DL-B1-08-T0${task}`), `B1.8 quiz must cover source task T0${task}`);
  assert.equal(b1ConsumptionAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B1-08-G01")), true, "all B1.8 questions must map to the lesson objective");
  assert.deepEqual(b1ConsumptionAssessment.quiz.find((question) => question.id === "DL-B1-08-Q08").sourceTaskIds, ["DL-B1-08-T05", "DL-B1-08-T07"], "B1.8 Q08 must link to reading T05 and advertising task T07");
  assert.match(b1ConsumptionSource, /اكتب خمس جمل تقارن بين منتجين خياليين/);
  assert.doesNotMatch(b1ConsumptionSource, /تقديمها شفهيًا/);
  for (const t of b1ConsumptionAssessment.performanceTasks) assert.ok(b1ConsumptionSource.includes(t.prompt));
  assert.deepEqual(b1ConsumptionAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.deepEqual(b1ConsumptionAssessment.performanceTasks.map(t => t.selfCheck.speakAloud), [false,true]);
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
  assert.ok(b1TravelAudioAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.9 audio must remain playable for preview with transcripts available until voice approval");
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
  assert.match(b1TravelAudioMarkup, /النسخة النهائية/);
  assert.match(b1TravelAudioMarkup, /نهائي/);
  assert.doesNotMatch(b1TravelAudioMarkup, /للمراجعة/);
  assert.match(b1TravelAudioMarkup, /اعرض النص الألماني/);
  const b1TravelQuestionSources = new Set(b1TravelAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b1TravelQuestionSources.has(`DL-B1-09-T0${task}`), `B1.9 quiz must cover source task T0${task}`);
  assert.ok(b1TravelAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B1-09-G01")), "all B1.9 questions must map to the lesson objective");
  assert.ok(b1TravelAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-09-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing")), "B1.9 tasks map to source and work without recorded audio");
  assert.deepEqual(b1TravelAssessment.performanceTasks.find((task) => task.id === "DL-B1-09-P02").sourceTaskIds, ["DL-B1-09-T06", "DL-B1-09-T08"], "B1.9 P02 must link its cancelled-bus scenario to the written listening source and trip-plan task");
  assert.doesNotMatch(b1TravelSource, /يمكنك كتابة الخطة أو تقديمها شفهيًا/);
  for (const t of b1TravelAssessment.performanceTasks) assert.ok(b1TravelSource.includes(t.prompt));
  assert.deepEqual(b1TravelAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.deepEqual(b1TravelAssessment.performanceTasks.map(t => t.selfCheck.speakAloud), [false,true]);
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
  assert.ok(b1MediaAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-10-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing")), "B1.10 tasks map to T08 and require no recorded audio");
  assert.deepEqual(b1MediaAssessment.performanceTasks.find((task) => task.id === "DL-B1-10-P02").sourceTaskIds, ["DL-B1-10-T06", "DL-B1-10-T08"], "B1.10 P02 must link its phone inquiry scenario to T06 and T08");
  const b1MediaAudioAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b1MediaAssessment.id);
  assert.equal(b1MediaAudioAssets.length, 5, "B1.10 must expose vocabulary, models, dialogue, reading, and listening");
  assert.equal(b1MediaAudioAssets.reduce((count, asset) => count + asset.segments.length, 0), 12, "B1.10 must expose twelve generated clips");
  assert.ok(b1MediaAudioAssets.every((asset) => asset.status === "ready"), "B1.10 recordings must remain previews until the user approves the generated tracks");
  const b1MediaPhrase = b1MediaAudioAssets.find((asset) => asset.assetId === "DL-B1-10-AUD-PHR-01");
  assert.equal(b1MediaPhrase.segments[0].speaker, "Narrator");
  assert.equal(b1MediaPhrase.segments[0].voiceId, "voice-02", "B1.10 vocabulary must keep the selected course narrator");
  for (const term of ["Die Redaktion", "Die Meldung", "Der Beitrag", "Die Quelle", "Die Anfrage", "Die Auskunft", "Die Ausgabe", "Das Archiv", "Die Rückfrage", "Die Berichtigung", "Mitteilen", "Bestätigen", "Sich beziehen auf", "Veröffentlichen", "Zuverlässig", "Im Voraus"]) {
    assert.ok(b1MediaPhrase.segments[0].text.includes(term), `B1.10 vocabulary audio must include ${term}`);
  }
  const b1MediaModel = b1MediaAudioAssets.find((asset) => asset.assetId === "DL-B1-10-AUD-MODEL-01");
  assert.equal(b1MediaModel.segments[0].voiceId, "voice-02", "B1.10 model sentences must keep the selected course narrator");
  for (const model of ["ob der Beitrag online ist", "wann die nächste Ausgabe erscheint", "welche Quellen der Bericht nennt"]) {
    assert.ok(b1MediaModel.segments[0].text.includes(model), `B1.10 model audio must include ${model}`);
  }
  const b1MediaDialogue = b1MediaAudioAssets.find((asset) => asset.assetId === "DL-B1-10-AUD-DLG-01");
  const sourceB1MediaDialogue = b1MediaSource.split("## 3) حوار أصلي في مكتب تحرير")[1].split("## 4) رسالة استفسار رسمية أصلية")[0]
    .split(/\r?\n/).filter((line) => /^\*\*(Leila|Redakteur):\*\*/.test(line))
    .map((line) => line.slice(line.indexOf(":**") + 3).trim());
  assert.deepEqual(b1MediaDialogue.segments.map((segment) => segment.text), sourceB1MediaDialogue, "B1.10 dialogue transcripts must match all eight source turns");
  assert.deepEqual(b1MediaDialogue.segments.map((segment) => segment.speaker), ["Leila", "Redakteur", "Leila", "Redakteur", "Leila", "Redakteur", "Leila", "Redakteur"], "B1.10 dialogue speaker order must match the lesson");
  assert.ok(b1MediaDialogue.segments.filter((segment) => segment.speaker === "Leila").every((segment) => segment.voiceId === "voice-02"), "Leila must keep voice-02 throughout the dialogue");
  assert.ok(b1MediaDialogue.segments.filter((segment) => segment.speaker === "Redakteur").every((segment) => segment.voiceId === "voice-03"), "the editor must keep voice-03 throughout the dialogue");
  const mediaReading = b1MediaAudioAssets.find((asset) => asset.kind === "reading");
  const mediaListening = b1MediaAudioAssets.find((asset) => asset.kind === "listening");
  const sourceMediaReading = b1MediaSource.split("## 4) رسالة استفسار رسمية أصلية")[1].split("### أسئلة الفهم")[0]
    .split(/\r?\n/).filter((line) => line.startsWith("> ")).map((line) => line.slice(2).replaceAll("**", "").trim()).filter(Boolean).join(" ");
  const normalizedWords = (text) => text.replace(/[.,:?!]/g, "").replace(/\s+/g, " ").trim();
  assert.equal(normalizedWords(mediaReading.segments[0].text), normalizedWords(sourceMediaReading), "B1.10 reading must preserve every source word, including subject, greeting and signature; only spoken punctuation differs");
  assert.equal(mediaReading.segments[0].voiceId, "voice-02");
  assert.equal(mediaReading.segments[0].speaker, "Narrator");
  const sourceMediaListening = b1MediaSource.split("## 5) نص استماع معدّ للنطق")[1].split("أجب:")[0]
    .split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim();
  assert.equal(mediaListening.segments[0].text, sourceMediaListening, "B1.10 listening must exactly match its source");
  assert.equal(mediaListening.segments[0].voiceId, "voice-03");
  assert.equal(mediaListening.segments[0].speaker, "Erzählperson");
  const mediaLayout = vm.runInContext("renderLessonAudioContent(course.lessons.find((lesson) => lesson.id === 'b1-10-media-news-formal-communication'))", context);
  assert.equal(mediaLayout.audioPanel, "", "all five B1.10 assets should be placed inline, not duplicated above the lesson");
  const sourceMediaHeadings = b1MediaSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(b1MediaAudioAssets.map((asset) => asset.sectionHeading), sourceMediaHeadings);
  for (const asset of b1MediaAudioAssets) {
    const start = mediaLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    const next = mediaLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = mediaLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`), `${asset.assetId} must be in its own source section`);
    assert.equal(mediaLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2, "exactly two rate buttons, with no duplicate card");
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
  }
  const fallbackLayout = vm.runInContext("renderLessonAudioContent({id: 'b1-10-media-news-formal-communication', contentHtml: '<p>Changed source</p>'})", context);
  assert.equal(fallbackLayout.contentHtml, '<p>Changed source</p>');
  for (const asset of b1MediaAudioAssets) assert.ok(fallbackLayout.audioPanel.includes(asset.assetId), "stale headings must never hide audio");
  const legacyAudioLayout = vm.runInContext("renderLessonAudioContent(course.lessons[0])", context);
  assert.equal(legacyAudioLayout.contentHtml, courseData.lessons[0].contentHtml, "other lessons must retain their content and panel placement");
  assert.match(legacyAudioLayout.audioPanel, /DL-A0-01-AUD-ABC-01/);
  for (const asset of [mediaReading, mediaListening]) {
    const index = FakeAudio.instances.length;
    vm.runInContext(`playAudioAsset('${asset.assetId}', 0.8)`, context);
    assert.equal(FakeAudio.instances[index].src, asset.segments[0].src);
    assert.equal(FakeAudio.instances[index].playbackRate, 0.8);
    assert.equal(FakeAudio.instances[index].started, true);
    vm.runInContext('stopAudioPlayback()', context);
  }
  assert.equal(b1MediaAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), true, "B1.10 self-check tasks must remain independent of optional lesson audio");
  assert.deepEqual(b1MediaAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  for (const task of b1MediaAssessment.performanceTasks) assert.ok(b1MediaSource.includes(task.prompt));
  assert.match(b1MediaSource, /دون تسجيل/);
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
  assert.ok(b1CivicAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-11-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), "B1.11 performance tasks must map to T08 and remain independent of audio files");
  assert.deepEqual(b1CivicAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.deepEqual(b1CivicAssessment.performanceTasks.find((task) => task.id === "DL-B1-11-P02").sourceTaskIds, ["DL-B1-11-T06", "DL-B1-11-T08"], "B1.11 P02 must link the museum listening script to the timeline task");
  const civicAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b1CivicAssessment.id);
  assert.equal(civicAssets.length, 5, "B1.11 must expose five audio assets");
  assert.equal(civicAssets.reduce((count, asset) => count + asset.segments.length, 0), 10, "B1.11 must expose exactly ten clips");
  assert.ok(civicAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.11 stays playable with transcripts, without final approval");
  assert.deepEqual(civicAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  const civicHeadings = b1CivicSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(civicAssets.map((asset) => asset.sectionHeading), civicHeadings);
  const civicPhrase = civicAssets[0].segments[0];
  assert.equal(civicPhrase.voiceId, "voice-02");
  for (const word of ["Die Epoche, die Epochen", "Das Ereignis, die Ereignisse", "Die Gemeinde, die Gemeinden", "Die Verfassung, die Verfassungen", "Der Stadtrat, die Stadträte", "Der Beschluss, die Beschlüsse", "Die Abstimmung, die Abstimmungen", "Die Mehrheit, die Mehrheiten", "Die Bürgerin, die Bürgerinnen", "Der Bürger, die Bürger", "Das Denkmal, die Denkmäler", "Die Zeitleiste, die Zeitleisten", "Wählen, wählt", "Beschließen, beschließt", "Gründen, gründet", "Einführen, führt ein", "Historisch", "Demokratisch"]) {
    assert.ok(civicPhrase.text.includes(word), `B1.11 vocabulary must include ${word}`);
  }
  const civicModelSource = b1CivicSource.split("## " + civicHeadings[1])[1].split("## " + civicHeadings[2])[0];
  const civicModelTexts = [...civicModelSource.matchAll(/\*\*(Das Museum wurde 1985 eröffnet\.|Die Brücken wurden renoviert\.|Der Beschluss wurde vom Stadtrat gefasst\.|Das Dorf wurde größer\.)\*\*/g)].map((match) => match[1]);
  assert.equal(civicModelTexts.length, 4);
  assert.equal(civicAssets[1].segments[0].text, civicModelTexts.join(" "));
  assert.equal(civicAssets[1].segments[0].voiceId, "voice-02");
  const civicDialogueSource = [...b1CivicSource.matchAll(/^\*\*(Mira|Archivarin):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(civicDialogueSource.length, 6);
  assert.deepEqual(civicAssets[2].segments.map(({speaker, text}) => ({speaker, text})), civicDialogueSource);
  for (const segment of civicAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Mira" ? "voice-02" : "voice-00", "B1.11 must retain the user-selected character voices");
  const earlierMira = courseData.audioAssets.find((asset) => asset.assetId === "DL-B1-08-AUD-DLG-01").segments.find((segment) => segment.speaker === "Mira");
  assert.equal(civicAssets[2].segments[0].voiceId, earlierMira.voiceId, "Mira must retain her previous voice");
  for (const [index, voice, speaker] of [[3, "voice-02", "Narrator"], [4, "voice-03", "Erzählperson"]]) {
    const sourceText = b1CivicSource.split("## " + civicHeadings[index])[1].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim();
    assert.equal(civicAssets[index].segments[0].text, sourceText, "B1.11 reading/listening transcripts must exactly match their source");
    assert.equal(civicAssets[index].segments[0].voiceId, voice);
    assert.equal(civicAssets[index].segments[0].speaker, speaker);
  }
  const civicLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B1')[10])", context);
  assert.equal(civicLayout.audioPanel, "", "B1.11 assets must not be duplicated above the lesson");
  for (const asset of civicAssets) {
    const start = civicLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    const next = civicLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = civicLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`), `${asset.assetId} belongs below its source heading`);
    assert.equal(civicLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2, "one card with two rate buttons per asset");
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(civicLayout.contentHtml, /data-audio-id="DL-B1-10-/);

  for (const task of b1CivicAssessment.performanceTasks) assert.ok(b1CivicSource.includes(task.prompt));
  assert.match(b1CivicSource, /دون شريك أو تسجيل/);
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
  assert.ok(b1FutureAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B1-12-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), "B1.12 performance tasks must map to T08 and remain independent of audio files");
  assert.deepEqual(b1FutureAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.deepEqual(b1FutureAssessment.performanceTasks.find((task) => task.id === "DL-B1-12-P02").sourceTaskIds, ["DL-B1-12-T06", "DL-B1-12-T08"], "B1.12 P02 must link the schoolyard listening text and T08 presentation");
  const futureAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b1FutureAssessment.id);
  assert.equal(futureAssets.length, 5, "B1.12 must expose vocabulary, models, dialogue, reading and listening");
  assert.equal(futureAssets.reduce((count, asset) => count + asset.segments.length, 0), 12, "B1.12 must contain all twelve clips");
  assert.ok(futureAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B1.12 must stay playable with transcripts but not be marked final");
  assert.deepEqual(futureAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  const futureHeadings = b1FutureSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(futureAssets.map((asset) => asset.sectionHeading), futureHeadings);
  assert.equal(futureAssets[0].segments[0].voiceId, "voice-02");
  for (const term of ["Die Forschung", "Die Entwicklung, die Entwicklungen", "Die Erfindung, die Erfindungen", "Das Experiment, die Experimente", "Der Versuch, die Versuche", "Das Ergebnis, die Ergebnisse", "Die Anwendung, die Anwendungen", "Die Lösung, die Lösungen", "Der Prototyp, die Prototypen", "Das Labor, die Labore", "Entwickeln, entwickelt", "Erforschen, erforscht", "Testen, testet", "Verbessern, verbessert", "Wahrscheinlich", "Vermutlich", "Vielleicht", "Künftig"]) {
    assert.ok(futureAssets[0].segments[0].text.includes(term), `B1.12 vocabulary must include ${term}`);
  }
  const futureModelSource = b1FutureSource.split("## " + futureHeadings[1])[1].split("## " + futureHeadings[2])[0];
  const futureModels = [...futureModelSource.matchAll(/\*\*([^*]+\.)\*\*/g)].map((match) => match[1]);
  assert.equal(futureModels.length, 6, "models must include the present-tense plan and Futur/Passiv contrast");
  assert.equal(futureAssets[1].segments[0].text, futureModels.join(" "));
  assert.equal(futureAssets[1].segments[0].voiceId, "voice-02");
  const futureDialogue = [...b1FutureSource.matchAll(/^\*\*(Rana|Timo):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(futureDialogue.length, 8);
  assert.deepEqual(futureAssets[2].segments.map(({speaker, text}) => ({speaker, text})), futureDialogue);
  for (const segment of futureAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Rana" ? "voice-02" : "voice-03", "B1.12 preview voices must remain consistent");
  for (const [index, code, voice, speaker] of [[3, "READ", "voice-02", "Narrator"], [4, "LST", "voice-03", "Erzählperson"]]) {
    const asset = futureAssets[index];
    const sourceText = b1FutureSource.split("## " + futureHeadings[index])[1].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim();
    assert.equal(asset.assetId, `DL-B1-12-AUD-${code}-01`);
    assert.equal(asset.segments.length, 1);
    assert.equal(asset.segments[0].text, sourceText, "B1.12 reading/listening must match the complete source verbatim");
    assert.equal(asset.segments[0].voiceId, voice, "B1.12 narrators must follow the established pattern");
    assert.equal(asset.segments[0].speaker, speaker);
    assert.equal(asset.segments[0].src, `assets/audio/DL-B1-12-AUD-${code}-01.mp3`);
  }
  const futureLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B1')[11])", context);
  assert.equal(futureLayout.audioPanel, "", "B1.12 assets must not duplicate the inline players at the top");
  for (const asset of futureAssets) {
    const start = futureLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    const next = futureLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = futureLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`), `${asset.assetId} must be under its source heading`);
    assert.equal(futureLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(futureLayout.contentHtml, /data-audio-id="DL-B1-11-/);
  assert.ok(b1FutureAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B1.12 assessment stays independent of optional audio");

  for (const task of b1FutureAssessment.performanceTasks) assert.ok(b1FutureSource.includes(task.prompt));
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
  assert.ok(b2MethodAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-01-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), "B2.1 performance tasks must map to T08 and remain independent of audio files");
  assert.deepEqual(b2MethodAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.deepEqual(b2MethodAssessment.performanceTasks.find((task) => task.id === "DL-B2-01-P02").sourceTaskIds, ["DL-B2-01-T06", "DL-B2-01-T08"], "B2.1 P02 must link the written listening text and T08 method description");
  const methodAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2MethodAssessment.id);
  assert.equal(methodAssets.length, 5);
  assert.equal(methodAssets.reduce((count, asset) => count + asset.segments.length, 0), 12);
  assert.deepEqual(methodAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"], "B2.1 must expose all five lesson audio categories");
  assert.ok(methodAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"), "B2.1 previews remain playable with transcripts and no final status");
  const methodHeadings = b2MethodSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(methodAssets.map((asset) => asset.sectionHeading), methodHeadings);
  for (const term of ["Die Zeiteinteilung", "Die Priorität, die Prioritäten", "Der Zeitblock, die Zeitblöcke", "Die Ablenkung, die Ablenkungen", "Die Unterbrechung, die Unterbrechungen", "Die Lesestrategie, die Lesestrategien", "Der Überblick", "Die Notiz, die Notizen", "Priorisieren, priorisiert", "Bündeln, bündelt", "Sich konzentrieren auf, konzentriert sich", "Abschalten, schaltet ab", "Bewältigen, bewältigt", "Realistisch", "Schrittweise"]) {
    assert.ok(methodAssets[0].segments[0].text.includes(term), `B2.1 vocabulary must include ${term}`);
  }
  assert.equal(methodAssets[0].segments[0].voiceId, "voice-02");
  const methodExamplesSource = b2MethodSource.split("## " + methodHeadings[1])[1].split("### مساعدة قبل النصوص والمهمات")[0];
  const methodExamples = [...methodExamplesSource.matchAll(/^- \*\*(.+?)\*\*/gm)].map((match) => match[1]);
  assert.equal(methodExamples.length, 5);
  assert.equal(methodAssets[1].segments[0].text, methodExamples.join(" "), "B2.1 models must include all five source examples, including method vs purpose");
  assert.equal(methodAssets[1].segments[0].voiceId, "voice-02");
  const methodDialogue = [...b2MethodSource.matchAll(/^\*\*(Hana|Karim):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(methodDialogue.length, 8);
  assert.deepEqual(methodAssets[2].segments.map(({speaker, text}) => ({speaker, text})), methodDialogue);
  for (const segment of methodAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Hana" ? "voice-02" : "voice-03");
  const previousKarim = courseData.audioAssets.find((asset) => asset.assetId === "DL-B1-01-AUD-DLG-01").segments.find((segment) => segment.speaker === "Karim");
  assert.equal(methodAssets[2].segments[1].voiceId, previousKarim.voiceId, "Karim must retain his established voice");
  for (const [index, code, voice, speaker] of [[3, "READ", "voice-02", "Narrator"], [4, "LST", "voice-03", "Erzählperson"]]) {
    const asset = methodAssets[index];
    const sourceText = b2MethodSource.split("## " + methodHeadings[index])[1].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim();
    assert.equal(asset.assetId, `DL-B2-01-AUD-${code}-01`);
    assert.equal(asset.segments.length, 1);
    assert.equal(asset.segments[0].text, sourceText, "B2.1 reading/listening must exactly match the complete source text");
    assert.equal(asset.segments[0].speaker, speaker);
    assert.equal(asset.segments[0].voiceId, voice, "B2.1 narrators must follow the established pattern");
    assert.equal(asset.segments[0].src, `assets/audio/DL-B2-01-AUD-${code}-01.mp3`);
  }
  const methodLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[0])", context);
  assert.equal(methodLayout.audioPanel, "");
  for (const asset of methodAssets) {
    const start = methodLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    const next = methodLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = methodLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(methodLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2, "one card with two rate buttons per source section");
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(methodLayout.contentHtml, /data-audio-id="DL-B1-/);
  assert.ok(b2MethodAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.1 assessment remains independent of optional recordings");

  assert.match(b2MethodSource, /أو قدّم شرحًا شفهيًا مماثلًا/);
  assert.match(b2MethodSource, /اكتب النص ثم اقرأه بصوت واضح/);
  assert.match(b2MethodSource, /لا يلزم تسجيل/);
  const b2T08Line = b2MethodSource.split("\n").find((line) => line.startsWith("اكتب فقرة من خمس إلى سبع جمل"));
  assert.ok(b2T08Line?.includes("**indem** أو **dadurch, dass**") && b2T08Line.includes("**um … zu**"), "B2.1 T08 must require a method link and a purpose link explicitly");
  assert.deepEqual(b2MethodAssessment.performanceTasks.find((task) => task.id === "DL-B2-01-P01").sourceTaskIds, ["DL-B2-01-T08"], "B2.1 P01 must link directly to the T08 practice");
  assert.ok(b2MethodAssessment.performanceTasks.every((task) => /indem أو dadurch, dass/.test(task.prompt) && /um … zu/.test(task.prompt)), "both B2.1 performance prompts must explicitly require a method link and an um … zu purpose link");
  assert.ok(b2MethodAssessment.performanceTasks.every((task) => /indem أو dadurch, dass/.test(task.criteria?.targetSkill) && /um … zu/.test(task.criteria?.targetSkill) && /الغاية/.test(task.criteria?.meaningClarity)), "both B2.1 local rubrics must explicitly assess the method/purpose distinction");
  const b2MethodRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[0].performanceTasks, 'lesson:b2-01-time-management-habits-reading', 'b2-01-v2')", context);
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
  assert.ok(b2CareerAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-02-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false), "B2.2 performance tasks must map to T08 and remain independent of audio files");
  assert.deepEqual(b2CareerAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.ok(b2CareerAssessment.performanceTasks.every((task) => /أربع إلى ست جمل/.test(task.prompt) && /Konjunktiv I/.test(task.criteria?.targetSkill) && task.selfCheck?.requiredChecks?.length === 3 && task.selfCheck?.minimumResponseCharacters >= 160), "B2.2 tasks must have explicit sentence/form criteria and local self-check thresholds");
  assert.deepEqual(b2CareerAssessment.performanceTasks.find((task) => task.id === "DL-B2-02-P02").sourceTaskIds, ["DL-B2-02-T06", "DL-B2-02-T08"], "B2.2 P02 must link the written listening script and T08 summary");
  assert.deepEqual(b2CareerAssessment.performanceTasks.find((task) => task.id === "DL-B2-02-P01").sourceTaskIds, ["DL-B2-02-T08"], "B2.2 P01 must link directly to T08");
  const careerAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2CareerAssessment.id);
  assert.equal(careerAssets.length, 5);
  assert.equal(careerAssets.reduce((n, asset) => n + asset.segments.length, 0), 11);
  assert.deepEqual(careerAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"], "B2.2 must expose all five audio categories");
  assert.ok(careerAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const careerHeadings = b2CareerSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(careerAssets.map((asset) => asset.sectionHeading), careerHeadings);
  for (const term of ["Der Berufsweg, die Berufswege", "Der Werdegang, die Werdegänge", "Die Qualifikation, die Qualifikationen", "Die Berufserfahrung", "Das Anforderungsprofil, die Anforderungsprofile", "Die Stellenausschreibung, die Stellenausschreibungen", "Die Führungskraft, die Führungskräfte", "Die Weiterentwicklung, die Weiterentwicklungen", "Die Zuständigkeit, die Zuständigkeiten", "Die Empfehlung, die Empfehlungen", "Anstreben, strebt an", "Sich beruflich orientieren, orientiert sich", "Vereinbaren, vereinbart", "Übernehmen, übernimmt", "Strukturiert", "Ausführlich"]) assert.ok(careerAssets[0].segments[0].text.includes(term), `B2.2 vocabulary must include ${term}`);
  for (const index of [0, 1, 3]) assert.equal(careerAssets[index].segments[0].voiceId, "voice-02");
  const careerModelsSection = b2CareerSource.split("## " + careerHeadings[1])[1].split("### مساعدة قبل النصوص والمهمات")[0];
  const careerModels = [...careerModelsSection.matchAll(/\*\*([^*]+)\*\*/g)].map((match) => match[1]).filter((text) => /^(Der Coach|Die Beraterin|Der Mentor|Sie sagen)/.test(text)).map((text) => text.replace(" → ", " "));
  assert.equal(careerModels.length, 9, "source models include six direct/reported examples, two dass contrasts and the plural contrast");
  assert.equal(careerAssets[1].segments[0].text, careerModels.join(" "), "B2.2 model words must match the source, omitting only the comparison arrow");
  const careerDialogue = [...b2CareerSource.matchAll(/^\*\*(Nora|Fadi):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(careerDialogue.length, 7);
  assert.deepEqual(careerAssets[2].segments.map(({speaker, text}) => ({speaker, text})), careerDialogue);
  for (const segment of careerAssets[2].segments) {
    assert.equal(segment.voiceId, segment.speaker === "Nora" ? "voice-02" : "voice-03");
    const earlier = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-11-AUD-DLG-01").segments.find((item) => item.speaker === segment.speaker);
    assert.ok(earlier, "Nora and Fadi must have their established A2.11 voices");
    assert.equal(segment.voiceId, earlier.voiceId);
  }
  const careerReadingLines = b2CareerSource.split("## " + careerHeadings[3])[1].split("### أسئلة الفهم")[0].split(/\r?\n/).filter((line) => line.startsWith("> ")).map((line) => line.slice(2).replaceAll("**", "").trim()).filter(Boolean);
  assert.equal(careerAssets[3].segments[0].text, careerReadingLines[0] + ". " + careerReadingLines.slice(1).join(" "), "the full reading includes its title with only a spoken full stop added");
  const careerListening = careerAssets[4];
  const careerListeningSource = b2CareerSource.split("## " + careerHeadings[4])[1].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim();
  assert.equal(careerListening.assetId, "DL-B2-02-AUD-LST-01");
  assert.equal(careerListening.segments.length, 1);
  assert.equal(careerListening.segments[0].text, careerListeningSource, "B2.2 listening must match the entire source script verbatim");
  assert.equal(careerListening.segments[0].speaker, "Erzählperson");
  assert.equal(careerListening.segments[0].voiceId, "voice-03");
  assert.equal(careerListening.segments[0].src, "assets/audio/DL-B2-02-AUD-LST-01.mp3");
  const careerLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[1])", context);
  assert.equal(careerLayout.audioPanel, "");
  for (const asset of careerAssets) {
    const start = careerLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    const next = careerLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = careerLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(careerLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(careerLayout.contentHtml, /data-audio-id="DL-B2-01-/);
  assert.ok(b2CareerAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.2 assessment stays independent of optional audio");

  assert.match(b2CareerSource, /اكتب أو قدّم ملخّصًا مهنيًا قصيرًا/);
  assert.match(b2CareerSource, /أربع إلى ست جمل ألمانية/);
  assert.match(b2CareerSource, /نسبة أربعة أقوال أو معلومات/);
  assert.match(b2CareerSource, /اكتب النص ثم اقرأه بصوت واضح/);
  assert.match(b2CareerSource, /لا يلزم تسجيل/);
  assert.match(b2CareerSource, /Konjunktiv II.*عند الحاجة/);
  const b2CareerRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[1].performanceTasks, 'lesson:b2-02-career-formal-communication-konjunktiv1', 'b2-02-v2')", context);
  assert.match(b2CareerRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2CareerRubricHtml, /Konjunktiv I/);
  assert.match(b2CareerRubricHtml, /مصدر/);
  const b2ConsumptionSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-03-consumption-environment-passive-modal.md"), "utf8");
  const b2ConsumptionAssessment = b2Lessons[2];
  assert.equal(b2ConsumptionAssessment.id, "b2-03-consumption-environment-passive-modal", "B2.3 must stay in its source order");
  assert.equal(b2ConsumptionAssessment.assessment?.status, "ready", "B2.3 must have a ready local assessment");
  assert.equal(b2ConsumptionAssessment.assessment?.version, "b2-03-v2", "B2.3 must use its stable assessment version");
  assert.equal(b2ConsumptionAssessment.assessment?.minimumScore, 80, "B2.3 must retain the 80 percent mastery threshold");
  assert.equal(b2ConsumptionAssessment.assessment?.minimumItems, 10, "B2.3 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[2])", context), true, "B2.3 must pass the app's full local assessment-readiness check");
  assert.equal(b2ConsumptionAssessment.quiz?.length, 10, "B2.3 must include exactly ten scored questions");
  assert.equal(b2ConsumptionAssessment.performanceTasks?.length, 2, "B2.3 must include two practical self-check tasks");
  const b2ConsumptionQuestionSources = new Set(b2ConsumptionAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2ConsumptionQuestionSources.has(`DL-B2-03-T0${task}`), `B2.3 quiz must cover source task T0${task}`);
  assert.ok(b2ConsumptionAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-03-G01")), "all B2.3 questions must map to the lesson objective");
  assert.ok(b2ConsumptionAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-03-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.3 performance tasks must map to T08 and remain independent of audio files");
  assert.deepEqual(b2ConsumptionAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.ok(b2ConsumptionAssessment.performanceTasks.every((task) => /خمس(?: جمل| إلى ست جمل)/.test(task.prompt) && /المبني للمجهول مع فعل ناقص مرتين على الأقل/.test(task.prompt) && /المبني للمجهول/.test(task.criteria?.targetSkill) && task.selfCheck?.minimumResponseCharacters >= 150), "B2.3 tasks must state minimum output, target-form criteria, and local self-check thresholds");
  assert.deepEqual(b2ConsumptionAssessment.performanceTasks.find((task) => task.id === "DL-B2-03-P02").sourceTaskIds, ["DL-B2-03-T06", "DL-B2-03-T08"], "B2.3 P02 must link the written listening script and T08 practice");
  assert.deepEqual(b2ConsumptionAssessment.performanceTasks.find((task) => task.id === "DL-B2-03-P01").sourceTaskIds, ["DL-B2-03-T08"], "B2.3 P01 must link directly to T08");
  const consumptionAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2ConsumptionAssessment.id);
  assert.equal(consumptionAssets.length, 5);
  assert.equal(consumptionAssets.reduce((n, asset) => n + asset.segments.length, 0), 10);
  assert.deepEqual(consumptionAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(consumptionAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const consumptionHeadings = b2ConsumptionSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(consumptionAssets.map((asset) => asset.sectionHeading), consumptionHeadings);
  const consumptionSections = consumptionHeadings.map((heading) => b2ConsumptionSource.split("## " + heading)[1].split("\n## ")[0]);
  const consumptionTerms = consumptionSections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const consumptionPhrase = consumptionTerms.map(([term, form]) => {
    const parts = term.split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(consumptionAssets[0].segments[0].text, consumptionPhrase, "all source vocabulary forms must be preserved");
  const consumptionModels = [...consumptionSections[1].split("### مساعدة قبل النصوص والمهمات")[0].matchAll(/\*\*([^*]+)\*\*/g)].map((match) => match[1]).filter((text) => text.endsWith("."));
  assert.equal(consumptionModels.length, 5);
  assert.equal(consumptionAssets[1].segments[0].text, consumptionModels.join(" "));
  const consumptionDialogue = [...b2ConsumptionSource.matchAll(/^\*\*(Nadia|Verkäufer):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(consumptionDialogue.length, 6);
  assert.deepEqual(consumptionAssets[2].segments.map(({speaker, text}) => ({speaker, text})), consumptionDialogue);
  const earlierNadia = courseData.audioAssets.find((asset) => asset.assetId === "DL-B1-04-AUD-DLG-01").segments.find((segment) => segment.speaker === "Nadia");
  for (const segment of consumptionAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Nadia" ? earlierNadia.voiceId : "voice-03");
  for (const index of [0, 1, 3]) assert.equal(consumptionAssets[index].segments[0].voiceId, "voice-02");
  assert.equal(consumptionAssets[4].segments[0].voiceId, "voice-03");
  for (const index of [3, 4]) {
    assert.equal(consumptionAssets[index].segments.length, 1);
    assert.equal(consumptionAssets[index].segments[0].text, consumptionSections[index].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full reading and listening scripts must match source verbatim");
  }
  const consumptionLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[2])", context);
  assert.equal(consumptionLayout.audioPanel, "");
  for (const asset of consumptionAssets) {
    const start = consumptionLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = consumptionLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = consumptionLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(consumptionLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(consumptionLayout.contentHtml, /data-audio-id="DL-B2-0[12]-/);
  assert.ok(b2ConsumptionAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.3 assessment remains independent of optional audio");
  assert.match(b2ConsumptionSource, /اكتب خمس جمل ألمانية على الأقل.*أو اعرض خمس جمل مكافئة شفهيًا/);
  assert.match(b2ConsumptionSource, /اكتب الإجابة ثم اقرأها بصوت واضح/);
  assert.match(b2ConsumptionSource, /لا يلزم تسجيل/);
  const b2ConsumptionRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[2].performanceTasks, 'lesson:b2-03-consumption-environment-passive-modal', 'b2-03-v2')", context);
  assert.match(b2ConsumptionRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2ConsumptionRubricHtml, /أنجزت كل أجزاء المهمة المطلوبة/);
  assert.match(b2ConsumptionRubricHtml, /إجابتي أو كلامي واضح ويمكن فهمه/);
  assert.match(b2ConsumptionRubricHtml, /استخدمت المهارة أو الصيغة المستهدفة/);
  assert.match(b2ConsumptionRubricHtml, /المبني للمجهول/);
  const b2HousingSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-04-cities-housing-participles.md"), "utf8");
  const b2HousingAssessment = b2Lessons[3];
  assert.equal(b2HousingAssessment.id, "b2-04-cities-housing-participles", "B2.4 must stay in its source order");
  assert.equal(b2HousingAssessment.assessment?.status, "ready", "B2.4 must have a ready local assessment");
  assert.equal(b2HousingAssessment.assessment?.version, "b2-04-v2", "B2.4 must use its stable assessment version");
  assert.equal(b2HousingAssessment.assessment?.minimumScore, 80, "B2.4 must retain the 80 percent mastery threshold");
  assert.equal(b2HousingAssessment.assessment?.minimumItems, 10, "B2.4 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[3])", context), true, "B2.4 must pass the app's full local assessment-readiness check");
  assert.equal(b2HousingAssessment.quiz?.length, 10, "B2.4 must include exactly ten scored questions");
  assert.equal(b2HousingAssessment.performanceTasks?.length, 2, "B2.4 must include two practical self-check tasks");
  const b2HousingQuestionSources = new Set(b2HousingAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2HousingQuestionSources.has(`DL-B2-04-T0${task}`), `B2.4 quiz must cover source task T0${task}`);
  assert.ok(b2HousingAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-04-G01")), "all B2.4 questions must map to the lesson objective");
  assert.ok(b2HousingAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-04-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.4 performance tasks must map to T08 and remain independent of audio files");
  assert.deepEqual(b2HousingAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.ok(b2HousingAssessment.performanceTasks.every((task) => /خمس إلى ست جمل/.test(task.prompt) && /Partizip I/.test(task.prompt) && /Partizip II/.test(task.prompt) && /Partizip I/.test(task.criteria?.targetSkill) && /Partizip II/.test(task.criteria?.targetSkill) && task.selfCheck?.minimumResponseCharacters >= 150), "B2.4 tasks must specify sentence output and both target participles with local self-check thresholds");
  assert.deepEqual(b2HousingAssessment.performanceTasks.find((task) => task.id === "DL-B2-04-P01").sourceTaskIds, ["DL-B2-04-T08"], "B2.4 P01 must link directly to T08");
  assert.deepEqual(b2HousingAssessment.performanceTasks.find((task) => task.id === "DL-B2-04-P02").sourceTaskIds, ["DL-B2-04-T05", "DL-B2-04-T08"], "B2.4 P02 must link the reading text and T08 practice");
  const housingAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2HousingAssessment.id);
  assert.equal(housingAssets.length, 5);
  assert.equal(housingAssets.reduce((n, asset) => n + asset.segments.length, 0), 11);
  assert.deepEqual(housingAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(housingAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const housingHeadings = b2HousingSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(housingAssets.map((asset) => asset.sectionHeading), housingHeadings);
  const housingSections = housingHeadings.map((heading) => b2HousingSource.split("## " + heading)[1].split("\n## ")[0]);
  const housingTerms = housingSections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const housingPhrase = housingTerms.map(([term, form]) => {
    const parts = term.split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(housingAssets[0].segments[0].text, housingPhrase, "all source vocabulary forms must be preserved");
  const housingModels = housingSections[1].split("### مساعدة قبل النصوص والمهمات")[0].split(/\r?\n/).filter((line) => line.startsWith("- **")).flatMap((line) => line.split("**")[1].split(" → ")).map((text) => text[0].toUpperCase() + text.slice(1) + ".");
  assert.equal(housingModels.length, 11);
  assert.equal(housingAssets[1].segments[0].text, housingModels.join(" "), "only arrows, sentence punctuation and initial capitals may differ from the model source");
  const housingDialogue = [...b2HousingSource.matchAll(/^\*\*(Architektin|Samir):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(housingDialogue.length, 7);
  assert.deepEqual(housingAssets[2].segments.map(({speaker, text}) => ({speaker, text})), housingDialogue);
  const earlierSamir = courseData.audioAssets.find((asset) => asset.assetId === "DL-A1-09-AUD-DLG-01").segments.find((segment) => segment.speaker === "Samir");
  for (const segment of housingAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Samir" ? earlierSamir.voiceId : "voice-02");
  for (const index of [0, 1, 3]) assert.equal(housingAssets[index].segments[0].voiceId, "voice-02");
  for (const index of [3, 4]) {
    assert.equal(housingAssets[index].segments.length, 1);
    assert.equal(housingAssets[index].segments[0].text, housingSections[index].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full reading and listening scripts must match source verbatim");
  }
  assert.equal(housingAssets[4].assetId, "DL-B2-04-AUD-LST-01");
  assert.equal(housingAssets[4].segments[0].speaker, "Erzählperson");
  assert.equal(housingAssets[4].segments[0].voiceId, "voice-03");
  assert.equal(housingAssets[4].segments[0].src, "assets/audio/DL-B2-04-AUD-LST-01.mp3");
  const housingLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[3])", context);
  assert.equal(housingLayout.audioPanel, "");
  for (const asset of housingAssets) {
    const start = housingLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = housingLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = housingLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(housingLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(housingLayout.contentHtml, /data-audio-id="DL-B2-0[123]-/);
  assert.ok(b2HousingAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.4 assessment remains independent of optional audio");
  assert.match(b2HousingSource, /اكتب خمس جمل ألمانية على الأقل.*أو اعرض خمس جمل مكافئة شفهيًا/);
  assert.match(b2HousingSource, /اكتب الإجابة ثم اقرأها بصوت واضح/);
  assert.match(b2HousingSource, /لا يلزم تسجيل/);
  assert.match(b2HousingSource, /لا تستخدم بيانات سكن حقيقية/);
  const b2HousingRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[3].performanceTasks, 'lesson:b2-04-cities-housing-participles', 'b2-04-v2')", context);
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
  assert.equal(b2HealthAssessment.assessment?.version, "b2-05-v3", "B2.5 must use its stable assessment version");
  assert.equal(b2HealthAssessment.assessment?.minimumScore, 80, "B2.5 must retain the 80 percent mastery threshold");
  assert.equal(b2HealthAssessment.assessment?.minimumItems, 10, "B2.5 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[4])", context), true, "B2.5 must pass the app's full local assessment-readiness check");
  assert.equal(b2HealthAssessment.quiz?.length, 10, "B2.5 must include exactly ten scored questions");
  assert.equal(b2HealthAssessment.performanceTasks?.length, 2, "B2.5 must include two practical self-check tasks");
  const b2HealthQuestionSources = new Set(b2HealthAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2HealthQuestionSources.has(`DL-B2-05-T0${task}`), `B2.5 quiz must cover source task T0${task}`);
  assert.ok(b2HealthAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-05-G01")), "all B2.5 questions must map to the lesson objective");
  assert.ok(b2HealthAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-05-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.5 performance tasks must map to T08 and remain independent of audio files");
  assert.deepEqual(b2HealthAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.ok(b2HealthAssessment.performanceTasks.every((task) => /خمس إلى ست جمل/.test(task.prompt) && /sodass أو weshalb/.test(task.prompt) && /aufgrund \+ Genitiv/.test(task.prompt) && /حدّين/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 160), "B2.5 tasks must specify sentence output, causal connectors, evidence limits, and local self-check thresholds");
  assert.deepEqual(b2HealthAssessment.performanceTasks.find((task) => task.id === "DL-B2-05-P01").sourceTaskIds, ["DL-B2-05-T08"], "B2.5 P01 must link directly to T08");
  assert.deepEqual(b2HealthAssessment.performanceTasks.find((task) => task.id === "DL-B2-05-P02").sourceTaskIds, ["DL-B2-05-T05", "DL-B2-05-T08"], "B2.5 P02 must link the reading text and T08 practice");
  const healthAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2HealthAssessment.id);
  assert.equal(healthAssets.length, 5);
  assert.equal(healthAssets.reduce((n, asset) => n + asset.segments.length, 0), 10);
  assert.deepEqual(healthAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(healthAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const healthHeadings = b2HealthSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(healthAssets.map((asset) => asset.sectionHeading), healthHeadings);
  const healthSections = healthHeadings.map((heading) => b2HealthSource.split("## " + heading)[1].split("\n## ")[0]);
  const healthTerms = healthSections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const healthPhrase = healthTerms.map(([term, form]) => {
    const parts = term.replace(" + ", ", ").split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(healthAssets[0].segments[0].text, healthPhrase, "all source vocabulary forms must be preserved");
  const healthModels = [...healthSections[1].split("### مساعدة قبل النصوص والمهمات")[0].matchAll(/\*\*([^*]+)\*\*/g)].map((match) => match[1]).filter((text) => text.endsWith(".") || /^aufgrund (der|des) /.test(text)).flatMap((text) => text.split(" / ")).map((text) => text.endsWith(".") ? text : text[0].toUpperCase() + text.slice(1) + ".");
  assert.equal(healthModels.length, 9, "four table examples plus five Genitiv phrases, retaining the source repetition");
  assert.equal(healthAssets[1].segments[0].text, healthModels.join(" "));
  const healthDialogue = [...b2HealthSource.matchAll(/^\*\*(Rima|Nabil):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(healthDialogue.length, 6);
  assert.deepEqual(healthAssets[2].segments.map(({speaker, text}) => ({speaker, text})), healthDialogue);
  for (const segment of healthAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Rima" ? "voice-02" : "voice-03");
  for (const index of [0, 1, 3]) assert.equal(healthAssets[index].segments[0].voiceId, "voice-02");
  assert.equal(healthAssets[4].segments[0].voiceId, "voice-03");
  for (const index of [3, 4]) {
    assert.equal(healthAssets[index].segments.length, 1);
    assert.equal(healthAssets[index].segments[0].text, healthSections[index].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full reading and listening scripts must match source verbatim");
  }
  const healthLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[4])", context);
  assert.equal(healthLayout.audioPanel, "");
  for (const asset of healthAssets) {
    const start = healthLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = healthLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = healthLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(healthLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(healthLayout.contentHtml, /data-audio-id="DL-B2-0[1234]-/);
  assert.ok(b2HealthAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.5 assessment remains independent of optional audio");
  assert.match(healthAssets[3].segments[0].text, /frei erfunden und dienen nur dem Sprachtraining/);
  assert.match(healthAssets[4].segments[0].text, /nicht als medizinische Empfehlung/);
  assert.equal(vm.runInContext(`(() => {
    const lesson = getLessonsInLevel('B2')[4];
    const prior = state.completedLessons[lesson.id];
    try {
      state.completedLessons[lesson.id] = { score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true, assessmentVersion: 'b2-05-v1' };
      return isLessonMastered(lesson);
    } finally {
      if (prior === undefined) delete state.completedLessons[lesson.id];
      else state.completedLessons[lesson.id] = prior;
    }
  })()`, context), false, "the corrected B2.5 assessment must reject stale v1 mastery");
  const healthQ03 = b2HealthAssessment.quiz.find((question) => question.id === "DL-B2-05-Q03");
  assert.equal(healthQ03.prompt.match(/\*\*([^*]+)\*\*/)[1].replace("___", healthQ03.options[healthQ03.answerIndex]), "Die Daten sind vorläufig. Deshalb sollte man die Aussage vorsichtig lesen.", "B2.5 Q03 must not duplicate man when the correct option is inserted");
  assert.match(b2HealthSource, /اكتب خمس جمل ألمانية على الأقل.*أو قدّم عرضًا شفهيًا من خمس جمل مكافئة/);
  assert.match(b2HealthSource, /إذا اخترت الكتابة فاقرأ إجابتك بصوت مسموع لنفسك/);
  assert.match(b2HealthSource, /لا يلزم تسجيلها أو إرسال صوت/);
  assert.match(b2HealthSource, /لا تقدّم تشخيصًا أو توصية طبية شخصية/);
  assert.match(b2HealthSource, /aufgrund des unklaren Messwerts/);
  assert.match(b2HealthSource, /aufgrund des vorläufigen Ergebnisses/);
  assert.doesNotMatch(b2HealthSource, /Weshalb man die Ursache nicht sicher bestimmen kann\./);
  const b2HealthRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[4].performanceTasks, 'lesson:b2-05-health-fitness-medical-information', 'b2-05-v3')", context);
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
  assert.equal(b2StudyAssessment.assessment?.version, "b2-06-v2", "B2.6 must use its stable assessment version");
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
  assert.ok(b2StudyAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-06-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.6 tasks must map to T08 and offer visible local self-checks without recording");
  assert.deepEqual(b2StudyAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.ok(b2StudyAssessment.performanceTasks.every((task) => /خمس جمل|خمس إلى ست جمل/.test(task.prompt) && /ثلاثة تراكيب/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 160), "B2.6 tasks must state practical output and target-collocation criteria");
  assert.deepEqual(b2StudyAssessment.performanceTasks.find((task) => task.id === "DL-B2-06-P01").sourceTaskIds, ["DL-B2-06-T08"], "B2.6 P01 must link directly to T08");
  assert.deepEqual(b2StudyAssessment.performanceTasks.find((task) => task.id === "DL-B2-06-P02").sourceTaskIds, ["DL-B2-06-T03", "DL-B2-06-T05", "DL-B2-06-T06", "DL-B2-06-T08"], "B2.6 P02 must link the source rewrite, reading, written listening script, and T08");
  const studyAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2StudyAssessment.id);
  assert.equal(studyAssets.length, 5);
  assert.equal(studyAssets.reduce((n, asset) => n + asset.segments.length, 0), 11);
  assert.deepEqual(studyAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(studyAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const studyHeadings = b2StudySource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(studyAssets.map((asset) => asset.sectionHeading), studyHeadings);
  const studySections = studyHeadings.map((heading) => b2StudySource.split("## " + heading)[1].split("\n## ")[0]);
  const studyTerms = studySections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const studyPhrase = studyTerms.map(([term, form]) => {
    const parts = term.split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(studyAssets[0].segments[0].text, studyPhrase, "all source vocabulary forms must be preserved");
  const studyModels = [...studySections[1].split("### مساعدة قبل النصوص والمهمات")[0].matchAll(/\*\*([^*]+)\*\*/g)].slice(1).map((match) => match[1].replace(" + Akkusativ ", ", Akkusativ, ")).map((text) => text[0].toUpperCase() + text.slice(1) + (text.endsWith(".") ? "" : "."));
  assert.equal(studyModels.length, 18, "eight collocations and their examples plus two final preposition reminders");
  assert.equal(studyAssets[1].segments[0].text, studyModels.join(" "));
  const studyDialogue = [...b2StudySource.matchAll(/^\*\*(Meryem|Berater):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(studyDialogue.length, 7);
  assert.deepEqual(studyAssets[2].segments.map(({speaker, text}) => ({speaker, text})), studyDialogue);
  for (const segment of studyAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Meryem" ? "voice-02" : "voice-03");
  for (const index of [0, 1, 3]) assert.equal(studyAssets[index].segments[0].voiceId, "voice-02");
  const studyReading = studySections[3].split(/\r?\n/).filter((line) => line.startsWith("> ")).map((line) => line.slice(2).replaceAll("**", "").trim());
  assert.equal(studyAssets[3].segments.length, 1);
  assert.equal(studyAssets[3].segments[0].text, studyReading[0] + ". " + studyReading.slice(1).join(" "), "full reading including title; only a spoken full stop is added");
  assert.match(studyAssets[3].segments[0].text, /nur dann nachgereicht werden, wenn die Studienberatung dies schriftlich bestätigt/);
  const studyListening = studyAssets[4];
  assert.equal(studyListening.assetId, "DL-B2-06-AUD-LST-01");
  assert.equal(studyListening.segments.length, 1);
  assert.equal(studyListening.segments[0].text, studySections[4].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full B2.6 listening script must match source verbatim");
  assert.equal(studyListening.segments[0].speaker, "Erzählperson");
  assert.equal(studyListening.segments[0].voiceId, "voice-03");
  assert.equal(studyListening.segments[0].src, "assets/audio/DL-B2-06-AUD-LST-01.mp3");
  const studyLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[5])", context);
  assert.equal(studyLayout.audioPanel, "");
  for (const asset of studyAssets) {
    const start = studyLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = studyLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = studyLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(studyLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(studyLayout.contentHtml, /data-audio-id="DL-B2-0[12345]-/);
  assert.ok(b2StudyAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.6 assessment remains independent of optional audio");
  assert.equal(vm.runInContext(`(() => {
    const lesson = getLessonsInLevel('B2')[5];
    const prior = state.completedLessons[lesson.id];
    try {
      state.completedLessons[lesson.id] = { score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true, assessmentVersion: 'b2-06-v1' };
      return isLessonMastered(lesson);
    } finally {
      if (prior === undefined) delete state.completedLessons[lesson.id];
      else state.completedLessons[lesson.id] = prior;
    }
  })()`, context), false, "the updated B2.6 assessment must reject stale v1 mastery");
  assert.match(b2StudySource, /ثلاثة تراكيب على الأقل من الدرس/);
  assert.match(b2StudySource, /يمكن إنجاز المهمة كتابةً أو بعرض شفهي مكافئ/);
  assert.match(b2StudySource, /اقرأها بصوت مسموع لنفسك/);
  assert.match(b2StudySource, /لا يلزم تسجيلها أو إرسال صوت/);
  const b2StudyRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[5].performanceTasks, 'lesson:b2-06-study-applications-verb-noun-phrases', 'b2-06-v2')", context);
  assert.match(b2StudyRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2StudyRubricHtml, /أنجزت كل أجزاء المهمة المطلوبة/);
  assert.match(b2StudyRubricHtml, /إجابتي أو كلامي واضح ويمكن فهمه/);
  assert.match(b2StudyRubricHtml, /استخدمت المهارة أو الصيغة المستهدفة/);
  assert.match(b2StudyRubricHtml, /ثلاثة تراكيب اسمية فعلية/);
  const b2TravelSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-07-travel-experiences-prepositional-relatives.md"), "utf8");
  const b2TravelAssessment = b2Lessons[6];
  assert.equal(b2TravelAssessment.id, "b2-07-travel-experiences-prepositional-relatives", "B2.7 must stay in its source order");
  assert.equal(b2TravelAssessment.assessment?.status, "ready", "B2.7 must have a ready local assessment");
  assert.equal(b2TravelAssessment.assessment?.version, "b2-07-v3", "B2.7 must use its stable assessment version");
  assert.equal(b2TravelAssessment.assessment?.minimumScore, 80, "B2.7 must retain the 80 percent mastery threshold");
  assert.equal(b2TravelAssessment.assessment?.minimumItems, 10, "B2.7 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[6])", context), true, "B2.7 must pass the app's full local assessment-readiness check");
  assert.equal(b2TravelAssessment.quiz?.length, 10, "B2.7 must include exactly ten scored questions");
  assert.equal(b2TravelAssessment.performanceTasks?.length, 2, "B2.7 must include two practical self-check tasks");
  const b2TravelQuestionSources = new Set(b2TravelAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2TravelQuestionSources.has(`DL-B2-07-T0${task}`), `B2.7 quiz must cover source task T0${task}`);
  assert.ok(b2TravelAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-07-G01")), "all B2.7 questions must map to the lesson objective");
  assert.deepEqual([0, 1, 2].map((position) => b2TravelAssessment.quiz.filter((question) => question.answerIndex === position).length), [3, 4, 3], "B2.7 correct answers must be distributed 3/4/3 across the three options");
  assert.ok(b2TravelAssessment.performanceTasks.every((task) => task.sourceTaskIds.includes("DL-B2-07-T08") && task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.7 tasks must map to T08 and offer visible local self-checks without recording");
  assert.deepEqual(b2TravelAssessment.performanceTasks.map(t => t.modality), [["writing"],["writing","speaking"]]);
  assert.ok(b2TravelAssessment.performanceTasks.every((task) => /خمس إلى ست جمل/.test(task.prompt) && /ثلاث جمل موصولة على الأقل/.test(task.prompt) && /حروف جر مختلفة/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 150), "B2.7 tasks must state practical output and varied prepositions");
  assert.deepEqual(b2TravelAssessment.performanceTasks.find((task) => task.id === "DL-B2-07-P01").sourceTaskIds, ["DL-B2-07-T08"], "B2.7 P01 must link directly to T08");
  assert.deepEqual(b2TravelAssessment.performanceTasks.find((task) => task.id === "DL-B2-07-P02").sourceTaskIds, ["DL-B2-07-T03", "DL-B2-07-T05", "DL-B2-07-T06", "DL-B2-07-T08"], "B2.7 P02 must link the sentence-joining task, reading, written listening script, and T08");
  const travelAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2TravelAssessment.id);
  assert.equal(travelAssets.length, 5);
  assert.equal(travelAssets.reduce((n, asset) => n + asset.segments.length, 0), 10);
  assert.deepEqual(travelAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(travelAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const travelHeadings = b2TravelSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(travelAssets.map((asset) => asset.sectionHeading), travelHeadings);
  const travelSections = travelHeadings.map((heading) => b2TravelSource.split("## " + heading)[1].split("\n## ")[0]);
  const travelTerms = travelSections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const travelPhrase = travelTerms.map(([term, form]) => {
    const parts = term.replace(" + ", ", ").split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(travelAssets[0].segments[0].text, travelPhrase, "all source vocabulary forms must be preserved");
  const travelModels = [...travelSections[1].matchAll(/\*\*([^*]+)\*\*/g)].map((match) => match[1]).filter((text) => text.endsWith("."));
  assert.equal(travelModels.length, 5);
  assert.equal(travelAssets[1].segments[0].text, travelModels.join(" "));
  const travelDialogue = [...b2TravelSource.matchAll(/^\*\*(Salma|Jonas):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(travelDialogue.length, 6);
  assert.deepEqual(travelAssets[2].segments.map(({speaker, text}) => ({speaker, text})), travelDialogue);
  const earlierSalma = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-11-AUD-READ-01").segments.find((segment) => segment.speaker === "Salma");
  for (const segment of travelAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Salma" ? earlierSalma.voiceId : "voice-03");
  for (const index of [0, 1, 3]) assert.equal(travelAssets[index].segments[0].voiceId, "voice-02");
  assert.equal(travelAssets[4].segments[0].voiceId, "voice-03");
  for (const index of [3, 4]) {
    assert.equal(travelAssets[index].segments.length, 1);
    assert.equal(travelAssets[index].segments[0].text, travelSections[index].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full reading and listening scripts must match source verbatim");
  }
  const travelLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[6])", context);
  assert.equal(travelLayout.audioPanel, "");
  for (const asset of travelAssets) {
    const start = travelLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = travelLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = travelLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(travelLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(travelLayout.contentHtml, /data-audio-id="DL-B2-0[123456]-/);
  assert.ok(b2TravelAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.7 assessment remains independent of optional audio");
  const travelP02 = b2TravelAssessment.performanceTasks.find((task) => task.id === "DL-B2-07-P02");
  assert.match(travelP02.prompt, /الانطلاق بالعبّارة من Hafen West/);
  assert.doesNotMatch(travelP02.prompt, /الوصول بالعبّارة إلى Hafen West/);
  assert.match(travelAssets[3].segments[0].text, /legt im Hafen West ab/);
  assert.equal(vm.runInContext(`(() => {
    const lesson = getLessonsInLevel('B2')[6];
    const prior = state.completedLessons[lesson.id];
    try {
      state.completedLessons[lesson.id] = { score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true, assessmentVersion: 'b2-07-v1' };
      return isLessonMastered(lesson);
    } finally {
      if (prior === undefined) delete state.completedLessons[lesson.id];
      else state.completedLessons[lesson.id] = prior;
    }
  })()`, context), false, "corrected B2.7 assessment must reject stale v1 mastery");
  assert.match(b2TravelSource, /أو حضّره وقدّمه شفهيًا/);
  assert.match(b2TravelSource, /ثلاث جمل موصولة على الأقل.*حروف جر مختلفة/);
  assert.match(b2TravelSource, /اقرأه بصوت مسموع لنفسك/);
  assert.match(b2TravelSource, /لا يلزم تسجيله أو إرساله/);
  const b2TravelRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[6].performanceTasks, 'lesson:b2-07-travel-experiences-prepositional-relatives', 'b2-07-v3')", context);
  assert.match(b2TravelRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2TravelRubricHtml, /حروف جر مختلفة/);
  const b2FoodSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-08-food-nutrition-data-passives.md"), "utf8");
  const b2FoodAssessment = b2Lessons[7];
  assert.equal(b2FoodAssessment.id, "b2-08-food-nutrition-data-passives", "B2.8 must stay in its source order");
  assert.equal(b2FoodAssessment.assessment?.status, "ready", "B2.8 must have a ready local assessment");
  assert.equal(b2FoodAssessment.assessment?.version, "b2-08-v2", "B2.8 must use its stable assessment version");
  assert.equal(b2FoodAssessment.assessment?.minimumScore, 80, "B2.8 must retain the 80 percent mastery threshold");
  assert.equal(b2FoodAssessment.assessment?.minimumItems, 10, "B2.8 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[7])", context), true, "B2.8 must pass the app's full local assessment-readiness check");
  assert.equal(b2FoodAssessment.quiz?.length, 10, "B2.8 must include exactly ten scored questions");
  assert.equal(b2FoodAssessment.performanceTasks?.length, 2, "B2.8 must include two practical self-check tasks");
  const b2FoodQuestionSources = new Set(b2FoodAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2FoodQuestionSources.has(`DL-B2-08-T0${task}`), `B2.8 quiz must cover source task T0${task}`);
  assert.ok(b2FoodAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-08-G01")), "all B2.8 questions must map to the lesson objective");
  assert.deepEqual([0, 1, 2].map((position) => b2FoodAssessment.quiz.filter((question) => question.answerIndex === position).length), [3, 4, 3], "B2.8 correct answers must be distributed 3/4/3 across the three options");
  assert.ok(b2FoodAssessment.performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.8 tasks must offer visible local self-checks without recording");
  const foodP01 = b2FoodAssessment.performanceTasks.find((task) => task.id === "DL-B2-08-P01");
  const foodP02 = b2FoodAssessment.performanceTasks.find((task) => task.id === "DL-B2-08-P02");
  assert.deepEqual(foodP01.modality, ["writing"], "B2.8 P01 must be a writing-only task");
  assert.equal(foodP01.selfCheck?.speakAloud, false, "B2.8 P01 must not require speaking aloud");
  assert.equal(foodP01.selfCheck?.minimumResponseCharacters, 150, "B2.8 P01 must retain its 150-character floor");
  assert.deepEqual(foodP02.modality, ["writing", "speaking"], "B2.8 P02 must combine writing and speaking");
  assert.equal(foodP02.selfCheck?.speakAloud, true, "B2.8 P02 must require speaking aloud");
  assert.equal(foodP02.selfCheck?.minimumResponseCharacters, 180, "B2.8 P02 must retain its 180-character floor");
  assert.ok(b2FoodAssessment.performanceTasks.every((task) => /5 إلى 6 جمل/.test(task.prompt) && /Vorgangspassiv/.test(task.prompt) && /Zustandspassiv/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 150), "B2.8 tasks must state the 5-6 sentence passive contrast");
  assert.match(foodP02.prompt, /بصوت مسموع/, "B2.8 P02 must include the solo read-aloud instruction");
  assert.deepEqual(foodP01.sourceTaskIds, ["DL-B2-08-T08"], "B2.8 P01 must link directly to T08");
  assert.deepEqual(foodP02.sourceTaskIds, ["DL-B2-08-T04", "DL-B2-08-T05", "DL-B2-08-T06", "DL-B2-08-T07", "DL-B2-08-T08"], "B2.8 P02 must link the source-based data reading, listening, auxiliary choice, transformation, and T08");
  const foodAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2FoodAssessment.id);
  assert.equal(foodAssets.length, 5);
  assert.equal(foodAssets.reduce((n, asset) => n + asset.segments.length, 0), 10);
  assert.deepEqual(foodAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(foodAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const foodHeadings = b2FoodSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(foodAssets.map((asset) => asset.sectionHeading), foodHeadings);
  const foodSections = foodHeadings.map((heading) => b2FoodSource.split("## " + heading)[1].split("\n## ")[0]);
  const foodTerms = foodSections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const foodPhrase = foodTerms.map(([term, form]) => {
    const parts = term.split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(foodAssets[0].segments[0].text, foodPhrase, "all source vocabulary forms must be preserved");
  const foodModels = [...foodSections[1].matchAll(/\*\*([^*]+)\*\*/g)].map((match) => match[1]).filter((text) => text.endsWith(".")).flatMap((text) => text.split(" / "));
  assert.equal(foodModels.length, 7);
  assert.equal(foodAssets[1].segments[0].text, foodModels.join(" "));
  const foodDialogue = [...b2FoodSource.matchAll(/^\*\*(Lina|Koch):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(foodDialogue.length, 6);
  assert.deepEqual(foodAssets[2].segments.map(({speaker, text}) => ({speaker, text})), foodDialogue);
  const earlierLina = courseData.audioAssets.find((asset) => asset.assetId === "DL-B1-01-AUD-DLG-01").segments.find((segment) => segment.speaker === "Lina");
  for (const segment of foodAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Lina" ? earlierLina.voiceId : "voice-03");
  for (const index of [0, 1, 3]) assert.equal(foodAssets[index].segments[0].voiceId, "voice-02");
  assert.equal(foodAssets[4].segments[0].voiceId, "voice-03");
  assert.equal(foodAssets[4].segments.length, 1);
  assert.equal(foodAssets[4].segments[0].text, foodSections[4].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full listening script must match source verbatim");
  const foodReadingSource = foodSections[3].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim();
  const foodRows = [...foodSections[3].matchAll(/^\| ([AB]) \| (\d+) g \| (\d+) g \|$/gm)];
  assert.equal(foodRows.length, 2);
  const foodTableSpeech = foodRows.map((row) => `Mischung ${row[1]}: Zuckergehalt ${row[2]} Gramm, Ballaststoffe ${row[3]} Gramm.`).join(" ");
  const foodReadingExpected = foodReadingSource + " Fiktive Werte je 100 Gramm, nur für das Sprachtraining. " + foodTableSpeech + " Diese Zahlen allein reichen nicht aus, um die Ernährung einer Person zu beurteilen oder gesundheitliche Ratschläge zu geben. Es sind hypothetische Werte, die veranschaulichen, wie Daten erfasst und gelesen werden.";
  assert.equal(foodAssets[3].segments.length, 1);
  assert.equal(foodAssets[3].segments[0].text, foodReadingExpected, "reading includes source paragraph, exact table numbers/units, and German rendering of the source's Arabic disclaimer");
  assert.match(foodSections[3], /قيم خيالية لكل 100 غرام/);
  assert.match(foodSections[3], /لا تكفي هذه الأرقام وحدها لتقييم غذاء شخص أو تقديم نصيحة صحية/);
  const foodLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[7])", context);
  assert.equal(foodLayout.audioPanel, "");
  for (const asset of foodAssets) {
    const start = foodLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = foodLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = foodLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(foodLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(foodLayout.contentHtml, /data-audio-id="DL-B2-0[1234567]-/);
  assert.ok(b2FoodAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.8 assessment remains independent of optional audio");
  assert.equal(vm.runInContext(`(() => {
    const lesson = getLessonsInLevel('B2')[7];
    const prior = state.completedLessons[lesson.id];
    try {
      state.completedLessons[lesson.id] = { score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true, assessmentVersion: 'b2-08-v1' };
      return isLessonMastered(lesson);
    } finally {
      if (prior === undefined) delete state.completedLessons[lesson.id];
      else state.completedLessons[lesson.id] = prior;
    }
  })()`, context), false, "updated B2.8 assessment must reject stale v1 mastery");
  assert.match(b2FoodSource, /الجزء \(أ\) — المهمة الكتابية الأساسية \(`DL-B2-08-P01`/);
  assert.match(b2FoodSource, /الجزء \(ب\) — المهمة التراكمية المتكاملة \(`DL-B2-08-P02`/);
  assert.match(b2FoodSource, /## 8\) نماذج مكتوبة للمهمات العملية/);
  assert.match(b2FoodSource, /## 9\) بطاقات مراجعة/);
  assert.match(b2FoodSource, /Vorgangspassiv.*مرتين على الأقل.*Zustandspassiv/);
  assert.match(b2FoodSource, /اقرأها بصوت مسموع لنفسك/);
  assert.match(b2FoodSource, /لا يلزم تسجيلها أو إرسال صوت/);
  const b2FoodRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[7].performanceTasks, 'lesson:b2-08-food-nutrition-data-passives', 'b2-08-v2')", context);
  assert.match(b2FoodRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2FoodRubricHtml, /Vorgangspassiv/);
  assert.match(b2FoodRubricHtml, /Zustandspassiv/);
  const b2MarketingSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-09-business-marketing-employment-prepositions.md"), "utf8");
  const b2MarketingAssessment = b2Lessons[8];
  assert.equal(b2MarketingAssessment.id, "b2-09-business-marketing-employment-prepositions", "B2.9 must stay in its source order");
  assert.equal(b2MarketingAssessment.assessment?.status, "ready", "B2.9 must have a ready local assessment");
  assert.equal(b2MarketingAssessment.assessment?.version, "b2-09-v2", "B2.9 must use its stable assessment version");
  assert.equal(b2MarketingAssessment.assessment?.minimumScore, 80, "B2.9 must retain the 80 percent mastery threshold");
  assert.equal(b2MarketingAssessment.assessment?.minimumItems, 10, "B2.9 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[8])", context), true, "B2.9 must pass the app's full local assessment-readiness check");
  assert.equal(b2MarketingAssessment.quiz?.length, 10, "B2.9 must include exactly ten scored questions");
  assert.deepEqual(b2MarketingAssessment.quiz.map((question) => question.id), Array.from({ length: 10 }, (_, i) => `DL-B2-09-Q${String(i + 1).padStart(2, "0")}`), "B2.9 questions must retain their stable Q01–Q10 IDs");
  const b2MarketingQuestionSources = new Set(b2MarketingAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2MarketingQuestionSources.has(`DL-B2-09-T0${task}`), `B2.9 quiz must cover source task T0${task}`);
  assert.ok(b2MarketingAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-09-G01")), "all B2.9 questions must map to the lesson objective");
  assert.deepEqual([0, 1, 2].map((position) => b2MarketingAssessment.quiz.filter((question) => question.answerIndex === position).length), [3, 4, 3], "B2.9 correct answers must be distributed 3/4/3 across the three options");
  assert.equal(b2MarketingAssessment.performanceTasks?.length, 2, "B2.9 must include two practical self-check tasks");
  assert.ok(b2MarketingAssessment.performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.9 tasks must offer visible local self-checks without recording");
  const marketingP01 = b2MarketingAssessment.performanceTasks.find((task) => task.id === "DL-B2-09-P01");
  const marketingP02 = b2MarketingAssessment.performanceTasks.find((task) => task.id === "DL-B2-09-P02");
  assert.deepEqual(marketingP01.modality, ["writing"], "B2.9 P01 must be a writing-only task");
  assert.equal(marketingP01.selfCheck?.speakAloud, false, "B2.9 P01 must not require speaking aloud");
  assert.equal(marketingP01.selfCheck?.minimumResponseCharacters, 150, "B2.9 P01 must retain its 150-character floor");
  assert.deepEqual(marketingP02.modality, ["writing", "speaking"], "B2.9 P02 must combine writing and speaking");
  assert.equal(marketingP02.selfCheck?.speakAloud, true, "B2.9 P02 must require speaking aloud");
  assert.equal(marketingP02.selfCheck?.minimumResponseCharacters, 180, "B2.9 P02 must retain its 180-character floor");
  assert.ok(b2MarketingAssessment.performanceTasks.every((task) => /5 إلى 6 جمل/.test(task.prompt) && /wo\(r\)/.test(task.prompt) && /da\(r\)/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 150), "B2.9 tasks must state 5-6 sentence output and the target pronouns");
  assert.match(marketingP02.prompt, /بصوت مسموع/, "B2.9 P02 must include the solo read-aloud instruction");
  assert.deepEqual(marketingP01.sourceTaskIds, ["DL-B2-09-T08"], "B2.9 P01 must link directly to T08");
  assert.deepEqual(marketingP02.sourceTaskIds, ["DL-B2-09-T05", "DL-B2-09-T06", "DL-B2-09-T07", "DL-B2-09-T08"], "B2.9 P02 must link the source reading, written listening transcript, transformation, and T08");
  const marketingAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2MarketingAssessment.id);
  assert.equal(marketingAssets.length, 5);
  assert.equal(marketingAssets.reduce((n, asset) => n + asset.segments.length, 0), 12);
  assert.deepEqual(marketingAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(marketingAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const marketingHeadings = b2MarketingSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(marketingAssets.map((asset) => asset.sectionHeading), marketingHeadings);
  const marketingSections = marketingHeadings.map((heading) => b2MarketingSource.split("## " + heading)[1].split("\n## ")[0]);
  const marketingTerms = marketingSections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const marketingPhrase = marketingTerms.map(([term, form]) => {
    const parts = term.replace(" + ", ", ").split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(marketingAssets[0].segments[0].text, marketingPhrase, "all source vocabulary forms must be preserved");
  const marketingModelRows = marketingSections[1].split(/\r?\n/).filter((line) => /^\| (auf|mit|von|über) \|/.test(line));
  assert.equal(marketingModelRows.length, 4);
  const marketingPairs = marketingModelRows.flatMap((line) => line.split("|").slice(2, 4).map((cell) => cell.trim().replaceAll("**", "")));
  const marketingBold = [...marketingSections[1].matchAll(/\*\*([^*]+)\*\*/g)].map((match) => match[1]);
  const marketingPerson = marketingBold.find((text) => text.startsWith("Mit wem ")).replace(" — ", " ");
  const marketingDarauf = marketingBold.find((text) => text.startsWith("Das Unternehmen achtet"));
  const marketingVerbs = marketingBold.slice(-3).map((text) => text[0].toUpperCase() + text.slice(1) + ".");
  assert.deepEqual(marketingVerbs, ["Sich spezialisieren auf.", "Abhängen von.", "Wert legen auf."]);
  assert.equal(marketingAssets[1].segments[0].text, [...marketingPairs, marketingPerson, marketingDarauf, ...marketingVerbs].join(" "), "B2.9 models include all four question/answer pairs, the person contrast, subordinate-clause example and verb reminders");
  const marketingDialogue = [...b2MarketingSource.matchAll(/^\*\*(Mara|Jonas):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(marketingDialogue.length, 8);
  assert.deepEqual(marketingAssets[2].segments.map(({speaker, text}) => ({speaker, text})), marketingDialogue);
  for (const [speaker, priorId, voice] of [["Mara", "DL-B1-05-AUD-DLG-01", "voice-02"], ["Jonas", "DL-B2-07-AUD-DLG-01", "voice-03"]]) {
    const prior = courseData.audioAssets.find((asset) => asset.assetId === priorId).segments.find((segment) => segment.speaker === speaker);
    assert.equal(prior.voiceId, voice);
    for (const segment of marketingAssets[2].segments.filter((item) => item.speaker === speaker)) assert.equal(segment.voiceId, prior.voiceId);
  }
  for (const index of [0, 1]) assert.equal(marketingAssets[index].segments[0].voiceId, "voice-02");
  for (const [index, suffix, voice, speaker] of [[3, "READ", "voice-02", "Narrator"], [4, "LST", "voice-03", "Erzählperson"]]) {
    const asset = marketingAssets[index];
    assert.equal(asset.assetId, `DL-B2-09-AUD-${suffix}-01`);
    assert.equal(asset.segments.length, 1);
    assert.equal(asset.segments[0].text, marketingSections[index].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "B2.9 reading and listening scripts must match source verbatim");
    assert.equal(asset.segments[0].speaker, speaker);
    assert.equal(asset.segments[0].voiceId, voice);
    assert.equal(asset.segments[0].src, `assets/audio/DL-B2-09-AUD-${suffix}-01.mp3`);
  }
  assert.match(marketingAssets[3].segments[0].text, /Alle Beispiele zu „Nordwerk“ sind erfunden/);
  assert.match(marketingAssets[4].segments[0].text, /nicht nur von einem Zeugnis abhängt/);
  const marketingLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[8])", context);
  assert.equal(marketingLayout.audioPanel, "");
  for (const asset of marketingAssets) {
    const start = marketingLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = marketingLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = marketingLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(marketingLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(marketingLayout.contentHtml, /data-audio-id="DL-B2-0[12345678]-/);
  assert.ok(b2MarketingAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.9 assessment remains independent of optional audio");
  assert.equal(vm.runInContext(`(() => {
    const lesson = getLessonsInLevel('B2')[8];
    const prior = state.completedLessons[lesson.id];
    try {
      state.completedLessons[lesson.id] = { score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true, assessmentVersion: 'b2-09-v1' };
      return isLessonMastered(lesson);
    } finally {
      if (prior === undefined) delete state.completedLessons[lesson.id];
      else state.completedLessons[lesson.id] = prior;
    }
  })()`, context), false, "updated B2.9 assessment must reject stale v1 mastery");
  assert.match(b2MarketingSource, /الجزء \(أ\) — المهمة الكتابية الأساسية \(`DL-B2-09-P01`/);
  assert.match(b2MarketingSource, /الجزء \(ب\) — المهمة التراكمية المتكاملة \(`DL-B2-09-P02`/);
  assert.match(b2MarketingSource, /## 8\) نماذج مكتوبة للمهمات العملية/);
  assert.match(b2MarketingSource, /## 9\) بطاقات مراجعة/);
  assert.match(b2MarketingSource, /wo\(r\) \+ Präposition.*da\(r\) \+ Präposition/);
  assert.match(b2MarketingSource, /اقرأها بصوت مسموع لنفسك/);
  assert.match(b2MarketingSource, /لا يلزم تسجيلها أو إرسال صوت/);
  const b2MarketingRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[8].performanceTasks, 'lesson:b2-09-business-marketing-employment-prepositions', 'b2-09-v2')", context);
  assert.match(b2MarketingRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2MarketingRubricHtml, /wo\(r\)-/);
  assert.match(b2MarketingRubricHtml, /da\(r\)-/);
  const b2TechnologySource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-10-wishes-probabilities-technology-konjunktiv2-past.md"), "utf8");
  const b2TechnologyAssessment = b2Lessons[9];
  assert.equal(b2TechnologyAssessment.id, "b2-10-wishes-probabilities-technology-konjunktiv2-past", "B2.10 must stay in its source order");
  assert.equal(b2TechnologyAssessment.assessment?.status, "ready", "B2.10 must have a ready local assessment");
  assert.equal(b2TechnologyAssessment.assessment?.version, "b2-10-v2", "B2.10 must use its reviewed assessment version");
  assert.equal(b2TechnologyAssessment.assessment?.minimumScore, 80, "B2.10 must retain the 80 percent mastery threshold");
  assert.equal(b2TechnologyAssessment.assessment?.minimumItems, 10, "B2.10 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[9])", context), true, "B2.10 must pass the app's full local assessment-readiness check");
  assert.equal(b2TechnologyAssessment.quiz?.length, 10, "B2.10 must include exactly ten scored questions");
  assert.deepEqual(b2TechnologyAssessment.quiz.map((question) => question.id), Array.from({ length: 10 }, (_, i) => `DL-B2-10-Q${String(i + 1).padStart(2, "0")}`), "B2.10 questions must retain their stable Q01–Q10 IDs");
  const b2TechnologyQuestionSources = new Set(b2TechnologyAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2TechnologyQuestionSources.has(`DL-B2-10-T0${task}`), `B2.10 quiz must cover source task T0${task}`);
  assert.ok(b2TechnologyAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-10-G01")), "all B2.10 questions must map to the lesson objective");
  assert.deepEqual([0, 1, 2].map((position) => b2TechnologyAssessment.quiz.filter((question) => question.answerIndex === position).length), [3, 4, 3], "B2.10 correct answers must be distributed 3/4/3 across the three options");
  assert.equal(b2TechnologyAssessment.performanceTasks?.length, 2, "B2.10 must include two practical self-check tasks");
  const b2TechnologyP01 = b2TechnologyAssessment.performanceTasks.find((task) => task.id === "DL-B2-10-P01");
  const b2TechnologyP02 = b2TechnologyAssessment.performanceTasks.find((task) => task.id === "DL-B2-10-P02");
  assert.deepEqual(b2TechnologyP01.modality, ["writing"], "B2.10 P01 must be writing-only");
  assert.equal(b2TechnologyP01.selfCheck?.speakAloud, false, "B2.10 P01 must not require speaking aloud");
  assert.deepEqual(b2TechnologyP02.modality, ["writing", "speaking"], "B2.10 P02 must combine writing and speaking");
  assert.equal(b2TechnologyP02.selfCheck?.speakAloud, true, "B2.10 P02 must require speaking aloud");
  assert.ok(b2TechnologyAssessment.performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.10 tasks must offer visible local self-checks without recording");
  assert.ok(b2TechnologyAssessment.performanceTasks.every((task) => /خمس جمل|خمس إلى ست جمل/.test(task.prompt) && /شرطًا ماضيًا/.test(task.prompt) && /أمنية/.test(task.prompt) && /احتمال/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 180), "B2.10 tasks must state the output, past conditional, wish, and possibility");
  assert.match(b2TechnologyP02.prompt, /شفهيًا.*بصوت مسموع|بصوت مسموع.*شفهيًا/);
  assert.deepEqual(b2TechnologyP01.sourceTaskIds, ["DL-B2-10-T08"], "B2.10 P01 must link directly to T08");
  assert.deepEqual(b2TechnologyP02.sourceTaskIds, ["DL-B2-10-T05", "DL-B2-10-T06", "DL-B2-10-T07", "DL-B2-10-T08"], "B2.10 P02 must link the source reading, written listening transcript, T07, and T08");
  const technologyAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2TechnologyAssessment.id);
  assert.equal(technologyAssets.length, 5);
  assert.equal(technologyAssets.reduce((n, asset) => n + asset.segments.length, 0), 10);
  assert.deepEqual(technologyAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(technologyAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const technologyHeadings = b2TechnologySource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(technologyAssets.map((asset) => asset.sectionHeading), technologyHeadings);
  const technologySections = technologyHeadings.map((heading) => b2TechnologySource.split("## " + heading)[1].split("\n## ")[0]);
  const technologyTerms = technologySections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const technologyPhrase = technologyTerms.map(([term, form]) => {
    const parts = term.split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(technologyAssets[0].segments[0].text, technologyPhrase, "all source vocabulary forms must be preserved");
  const technologyModels = [...technologySections[1].matchAll(/\*\*([^*]+)\*\*/g)].map((match) => match[1]).filter((text) => text.endsWith("."));
  assert.equal(technologyModels.length, 5);
  assert.equal(technologyAssets[1].segments[0].text, technologyModels.join(" "));
  const technologyDialogue = [...b2TechnologySource.matchAll(/^\*\*(Lea|Murat):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(technologyDialogue.length, 6);
  assert.deepEqual(technologyAssets[2].segments.map(({speaker, text}) => ({speaker, text})), technologyDialogue);
  const earlierLea = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-02-AUD-DLG-01").segments.find((segment) => segment.speaker === "Lea");
  for (const segment of technologyAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Lea" ? earlierLea.voiceId : "voice-03");
  for (const index of [0, 1, 3]) assert.equal(technologyAssets[index].segments[0].voiceId, "voice-02");
  assert.equal(technologyAssets[4].segments[0].voiceId, "voice-03");
  for (const index of [3, 4]) {
    assert.equal(technologyAssets[index].segments.length, 1);
    assert.equal(technologyAssets[index].segments[0].text, technologySections[index].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full reading and listening scripts must match source verbatim");
  }
  const technologyLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[9])", context);
  assert.equal(technologyLayout.audioPanel, "");
  for (const asset of technologyAssets) {
    const start = technologyLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = technologyLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = technologyLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(technologyLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(technologyLayout.contentHtml, /data-audio-id="DL-B2-0[1-9]-/);
  assert.ok(b2TechnologyAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.10 assessment remains independent of optional audio");
  assert.match(technologyAssets[3].segments[0].text, /Das Update wurde noch nicht veröffentlicht/);
  assert.match(technologyAssets[3].segments[0].text, /Sicher ist das jedoch nicht/);
  assert.match(technologyAssets[3].segments[0].text, /Die Beispiele in diesem Text sind erfunden/);
  assert.match(technologyAssets[4].segments[0].text, /ältere Geräte trotzdem nicht unterstützt werden/);
  assert.match(b2TechnologySource, /أو حضّرها وقدّمها شفهيًا/);
  assert.match(b2TechnologySource, /فرضية غير واقعية عن الحاضر/);
  assert.match(b2TechnologySource, /شرطًا ماضيًا لم يتحقق/);
  assert.match(b2TechnologySource, /اقرأها بصوت مسموع لنفسك/);
  assert.match(b2TechnologySource, /لا يلزم تسجيلها أو إرسال صوت/);
  assert.match(b2TechnologySource, /Eine Entwicklerin wünscht sich, dass die Testphase länger gewesen wäre/);
  assert.match(b2TechnologySource, /الجزء \(أ\) — المهمة الكتابية الأساسية \(`DL-B2-10-P01`/);
  assert.match(b2TechnologySource, /الجزء \(ب\) — المهمة التراكمية المتكاملة \(`DL-B2-10-P02`/);
  assert.match(b2TechnologySource, /## 8\) نماذج مكتوبة للمهمات العملية/);
  assert.match(b2TechnologySource, /## 9\) بطاقات مراجعة/);
  assert.equal(vm.runInContext(`(() => {
    const lesson = getLessonsInLevel('B2')[9];
    const prior = state.completedLessons[lesson.id];
    try {
      state.completedLessons[lesson.id] = { score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true, assessmentVersion: 'b2-10-v1' };
      return isLessonMastered(lesson);
    } finally {
      if (prior === undefined) delete state.completedLessons[lesson.id];
      else state.completedLessons[lesson.id] = prior;
    }
  })()`, context), false, "updated B2.10 assessment must reject stale v1 mastery");
  const b2TechnologyRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[9].performanceTasks, 'lesson:b2-10-wishes-probabilities-technology-konjunktiv2-past', 'b2-10-v2')", context);
  assert.match(b2TechnologyRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2TechnologyRubricHtml, /Partizip II/);
  const b2EnvironmentSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-11-humans-nature-environment-nominalization.md"), "utf8");
  const b2EnvironmentAssessment = b2Lessons[10];
  assert.equal(b2EnvironmentAssessment.id, "b2-11-humans-nature-environment-nominalization", "B2.11 must stay in its source order");
  assert.equal(b2EnvironmentAssessment.assessment?.status, "ready", "B2.11 must have a ready local assessment");
  assert.equal(b2EnvironmentAssessment.assessment?.version, "b2-11-v2", "B2.11 must use its reviewed assessment version");
  assert.equal(b2EnvironmentAssessment.assessment?.minimumScore, 80, "B2.11 must retain the 80 percent mastery threshold");
  assert.equal(b2EnvironmentAssessment.assessment?.minimumItems, 10, "B2.11 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[10])", context), true, "B2.11 must pass the app's full local assessment-readiness check");
  assert.equal(b2EnvironmentAssessment.quiz?.length, 10, "B2.11 must include exactly ten scored questions");
  assert.deepEqual(b2EnvironmentAssessment.quiz.map((question) => question.id), Array.from({ length: 10 }, (_, i) => `DL-B2-11-Q${String(i + 1).padStart(2, "0")}`), "B2.11 questions must retain their stable Q01–Q10 IDs");
  const b2EnvironmentQuestionSources = new Set(b2EnvironmentAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2EnvironmentQuestionSources.has(`DL-B2-11-T0${task}`), `B2.11 quiz must cover source task T0${task}`);
  assert.ok(b2EnvironmentAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-11-G01")), "all B2.11 questions must map to the lesson objective");
  assert.deepEqual([0, 1, 2].map((position) => b2EnvironmentAssessment.quiz.filter((question) => question.answerIndex === position).length), [3, 4, 3], "B2.11 correct answers must be distributed 3/4/3 across the three options");
  assert.equal(b2EnvironmentAssessment.performanceTasks?.length, 2, "B2.11 must include two practical self-check tasks");
  const b2EnvironmentP01 = b2EnvironmentAssessment.performanceTasks.find((task) => task.id === "DL-B2-11-P01");
  const b2EnvironmentP02 = b2EnvironmentAssessment.performanceTasks.find((task) => task.id === "DL-B2-11-P02");
  assert.deepEqual(b2EnvironmentP01.modality, ["writing"], "B2.11 P01 must be writing-only");
  assert.equal(b2EnvironmentP01.selfCheck?.speakAloud, false, "B2.11 P01 must not require speaking aloud");
  assert.deepEqual(b2EnvironmentP02.modality, ["writing", "speaking"], "B2.11 P02 must combine writing and speaking");
  assert.equal(b2EnvironmentP02.selfCheck?.speakAloud, true, "B2.11 P02 must require speaking aloud");
  assert.ok(b2EnvironmentAssessment.performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.selfCheck?.requiredChecks?.length === 3), "B2.11 tasks must offer visible local self-checks without recording");
  assert.ok(b2EnvironmentAssessment.performanceTasks.every((task) => /خمس جمل|خمس إلى ست جمل/.test(task.prompt) && /صيغتين اسميتين/.test(task.prompt) && /أثرًا محتملًا/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 180), "B2.11 tasks must state the output, two nominal forms, and possible impact");
  assert.match(b2EnvironmentP02.prompt, /شفهيًا.*بصوت مسموع|بصوت مسموع.*شفهيًا/);
  assert.deepEqual(b2EnvironmentP01.sourceTaskIds, ["DL-B2-11-T08"], "B2.11 P01 must link directly to T08");
  assert.deepEqual(b2EnvironmentP02.sourceTaskIds, ["DL-B2-11-T05", "DL-B2-11-T06", "DL-B2-11-T07", "DL-B2-11-T08"], "B2.11 P02 must link the source reading, written listening transcript, T07, and T08");
  const environmentAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2EnvironmentAssessment.id);
  assert.equal(environmentAssets.length, 5);
  assert.equal(environmentAssets.reduce((n, asset) => n + asset.segments.length, 0), 11);
  assert.deepEqual(environmentAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(environmentAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const environmentHeadings = b2EnvironmentSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(environmentAssets.map((asset) => asset.sectionHeading), environmentHeadings);
  const environmentSections = environmentHeadings.map((heading) => b2EnvironmentSource.split("## " + heading)[1].split("\n## ")[0]);
  const environmentTerms = environmentSections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const environmentPhrase = environmentTerms.map(([term, form]) => {
    const parts = term.split(" / ").map((part) => part[0].toUpperCase() + part.slice(1));
    return parts.join(". ") + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(environmentAssets[0].segments[0].text, environmentPhrase, "all source vocabulary forms must be preserved");
  const environmentNominals = environmentSections[1].split(/\r?\n/).filter((line) => line.startsWith("| **")).map((line) => line.split("|")[2].trim().replaceAll("**", "").replace(" …", "."));
  const environmentDerivations = [...environmentSections[1].matchAll(/\*\*([^*]+ → [^*]+)\*\*/g)].map((match) => {
    const text = match[1].replace(" → ", ", ");
    return text[0].toUpperCase() + text.slice(1) + ".";
  });
  assert.equal(environmentNominals.length, 4);
  assert.equal(environmentDerivations.length, 3);
  assert.equal(environmentAssets[1].segments[0].text, [...environmentNominals, ...environmentDerivations].join(" "));
  const environmentDialogue = [...b2EnvironmentSource.matchAll(/^\*\*(Amir|Lea):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2]}));
  assert.equal(environmentDialogue.length, 7);
  assert.deepEqual(environmentAssets[2].segments.map(({speaker, text}) => ({speaker, text})), environmentDialogue);
  const earlierEnvironmentLea = courseData.audioAssets.find((asset) => asset.assetId === "DL-A2-02-AUD-DLG-01").segments.find((segment) => segment.speaker === "Lea");
  for (const segment of environmentAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Lea" ? earlierEnvironmentLea.voiceId : "voice-03");
  for (const index of [0, 1, 3]) assert.equal(environmentAssets[index].segments[0].voiceId, "voice-02");
  for (const index of [3, 4]) {
    assert.equal(environmentAssets[index].segments.length, 1);
    assert.equal(environmentAssets[index].segments[0].text, environmentSections[index].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full B2.11 reading and listening scripts must match source verbatim");
  }
  const environmentLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[10])", context);
  assert.equal(environmentLayout.audioPanel, "");
  for (const asset of environmentAssets) {
    const start = environmentLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = environmentLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = environmentLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(environmentLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(environmentLayout.contentHtml, /data-audio-id="DL-B2-0[1-9]-/);
  assert.ok(b2EnvironmentAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.11 assessment remains independent of optional audio");
  assert.match(environmentAssets[3].segments[0].text, /könnten neue Rückzugsorte/);
  assert.match(environmentAssets[3].segments[0].text, /noch keine endgültige Entscheidung/);
  assert.match(environmentAssets[3].segments[0].text, /fiktiv und stellen keinen Plan für einen realen Ort dar/);
  assert.equal(environmentAssets[4].assetId, "DL-B2-11-AUD-LST-01");
  assert.equal(environmentAssets[4].segments[0].voiceId, "voice-03");
  assert.equal(environmentAssets[4].segments[0].speaker, "Erzählperson");
  assert.equal(environmentAssets[4].segments[0].src, "assets/audio/DL-B2-11-AUD-LST-01.mp3");
  assert.match(environmentAssets[4].segments[0].text, /kann die Belastung der Umgebung sinken/);
  assert.match(environmentAssets[4].segments[0].text, /erst nach der Prüfung möglicher Auswirkungen/);
  assert.doesNotMatch(environmentLayout.contentHtml, /data-audio-id="DL-B2-10-/);
  assert.match(b2EnvironmentSource, /اكتب أو قدّم فقرة عن إجراء بيئي/);
  assert.match(b2EnvironmentSource, /خمس جمل ألمانية على الأقل/);
  assert.match(b2EnvironmentSource, /أو حضّرها وقدّمها شفهيًا/);
  assert.match(b2EnvironmentSource, /صيغتين اسميتين على الأقل/);
  assert.match(b2EnvironmentSource, /اقرأها بصوت مسموع لنفسك/);
  assert.match(b2EnvironmentSource, /لا يلزم تسجيلها أو إرسال صوت/);
  assert.match(b2EnvironmentSource, /الجزء \(أ\) — المهمة الكتابية الأساسية \(`DL-B2-11-P01`/);
  assert.match(b2EnvironmentSource, /الجزء \(ب\) — المهمة التراكمية المتكاملة \(`DL-B2-11-P02`/);
  assert.match(b2EnvironmentSource, /## 8\) نماذج مكتوبة للمهمات العملية/);
  assert.match(b2EnvironmentSource, /## 9\) بطاقات مراجعة/);
  assert.equal(vm.runInContext(`(() => {
    const lesson = getLessonsInLevel('B2')[10];
    const prior = state.completedLessons[lesson.id];
    try {
      state.completedLessons[lesson.id] = { score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true, assessmentVersion: 'b2-11-v1' };
      return isLessonMastered(lesson);
    } finally {
      if (prior === undefined) delete state.completedLessons[lesson.id];
      else state.completedLessons[lesson.id] = prior;
    }
  })()`, context), false, "updated B2.11 assessment must reject stale v1 mastery");
  const b2EnvironmentRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[10].performanceTasks, 'lesson:b2-11-humans-nature-environment-nominalization', 'b2-11-v2')", context);
  assert.match(b2EnvironmentRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2EnvironmentRubricHtml, /صيغتين اسميتين/);

  const b2MediaSource = fs.readFileSync(path.join(rootDir, "content/B2/lesson-12-leisure-media-reported-speech.md"), "utf8");
  const b2MediaAssessment = b2Lessons[11];
  assert.equal(b2MediaAssessment.id, "b2-12-leisure-media-reported-speech", "B2.12 must stay in its source order");
  assert.equal(b2MediaAssessment.assessment?.status, "ready", "B2.12 must have a ready local assessment");
  assert.equal(b2MediaAssessment.assessment?.version, "b2-12-v2", "B2.12 must use its stable assessment version");
  assert.equal(b2MediaAssessment.assessment?.minimumScore, 80, "B2.12 must retain the 80 percent mastery threshold");
  assert.equal(b2MediaAssessment.assessment?.minimumItems, 10, "B2.12 must require ten scored questions");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[11])", context), true, "B2.12 must pass the app's full local assessment-readiness check");
  assert.equal(b2MediaAssessment.quiz?.length, 10, "B2.12 must include exactly ten scored questions");
  assert.deepEqual(b2MediaAssessment.quiz.map((question) => question.id), Array.from({ length: 10 }, (_, i) => `DL-B2-12-Q${String(i + 1).padStart(2, "0")}`), "B2.12 questions must retain their stable Q01–Q10 IDs");
  const b2MediaQuestionSources = new Set(b2MediaAssessment.quiz.flatMap((question) => question.sourceTaskIds));
  for (let task = 1; task <= 7; task += 1) assert.ok(b2MediaQuestionSources.has(`DL-B2-12-T0${task}`), `B2.12 quiz must cover source task T0${task}`);
  assert.ok(b2MediaAssessment.quiz.every((question) => question.objectiveIds.includes("DL-B2-12-G01")), "all B2.12 questions must map to the lesson objective");
  assert.deepEqual([0, 1, 2].map((position) => b2MediaAssessment.quiz.filter((question) => question.answerIndex === position).length), [3, 4, 3], "B2.12 correct answers must be distributed 3/4/3 across the three options");
  assert.equal(b2MediaAssessment.performanceTasks?.length, 2, "B2.12 must include two practical self-check tasks");
  assert.ok(b2MediaAssessment.performanceTasks.every((task) => task.evaluationStatus === "ready" && task.selfCheck?.method === "local_self_check" && task.selfCheck?.audioRequired === false && task.modality?.includes("writing") && task.selfCheck?.requiredChecks?.length === 3), "B2.12 tasks must offer visible local self-checks without recording");
  assert.deepEqual(b2MediaAssessment.performanceTasks[0].modality, ["writing"], "B2.12 P01 must be writing-only");
  assert.equal(b2MediaAssessment.performanceTasks[0].selfCheck?.speakAloud, false, "B2.12 P01 must not require speaking aloud");
  assert.equal(b2MediaAssessment.performanceTasks[0].selfCheck?.minimumResponseCharacters, 220, "B2.12 P01 must require at least 220 characters");
  assert.deepEqual(b2MediaAssessment.performanceTasks[1].modality, ["writing", "speaking"], "B2.12 P02 must combine writing and speaking aloud");
  assert.equal(b2MediaAssessment.performanceTasks[1].selfCheck?.speakAloud, true, "B2.12 P02 must require speaking aloud");
  assert.equal(b2MediaAssessment.performanceTasks[1].selfCheck?.minimumResponseCharacters, 250, "B2.12 P02 must require at least 250 characters");
  assert.ok(b2MediaAssessment.performanceTasks.every((task) => /خمس إلى ست جمل/.test(task.prompt) && /ثلاثة أقوال/.test(task.prompt) && /Meiner Meinung nach/.test(task.prompt) && task.selfCheck?.minimumResponseCharacters >= 220), "B2.12 tasks must state the output, three attributed views, and personal opinion");
  assert.deepEqual(b2MediaAssessment.performanceTasks.find((task) => task.id === "DL-B2-12-P01").sourceTaskIds, ["DL-B2-12-T08"], "B2.12 P01 must link directly to T08");
  assert.deepEqual(b2MediaAssessment.performanceTasks.find((task) => task.id === "DL-B2-12-P02").sourceTaskIds, ["DL-B2-12-T05", "DL-B2-12-T06", "DL-B2-12-T07", "DL-B2-12-T08"], "B2.12 P02 must link the source reading, written listening transcript, T07 reporting verbs, and T08");
  const finalMediaAssets = courseData.audioAssets.filter((asset) => asset.lessonId === b2MediaAssessment.id);
  assert.equal(finalMediaAssets.length, 5);
  assert.equal(finalMediaAssets.reduce((n, asset) => n + asset.segments.length, 0), 10);
  assert.deepEqual(finalMediaAssets.map((asset) => asset.kind), ["phrase_bank", "model_sentences", "dialogue", "reading", "listening"]);
  assert.ok(finalMediaAssets.every((asset) => asset.status === "ready" && asset.transcriptPolicy === "offer"));
  const finalMediaHeadings = b2MediaSource.split(/\r?\n/).filter((line) => line.startsWith("## ")).slice(0, 5).map((line) => line.slice(3));
  assert.deepEqual(finalMediaAssets.map((asset) => asset.sectionHeading), finalMediaHeadings);
  const finalMediaSections = finalMediaHeadings.map((heading) => b2MediaSource.split("## " + heading)[1].split("\n## ")[0]);
  const finalMediaTerms = finalMediaSections[0].split(/\r?\n/).filter((line) => line.startsWith("| ")).slice(1).map((line) => line.split("|").slice(1, 3).map((cell) => cell.trim()));
  const finalMediaPhrase = finalMediaTerms.map(([term, form]) => {
    if (term === "die Moderatorin / der Moderator") {
      assert.equal(form, "die Moderatorinnen / Moderatoren");
      return "Die Moderatorin, die Moderatorinnen. Der Moderator, die Moderatoren.";
    }
    const spokenTerm = term.replaceAll(" + ", ", ").replace("Dativ/Genitiv", "Dativ oder Genitiv").replace("; ", ". ");
    return spokenTerm[0].toUpperCase() + spokenTerm.slice(1) + (form === "—" ? "" : ", " + form) + ".";
  }).join(" ");
  assert.equal(finalMediaTerms.length, 16);
  assert.equal(finalMediaAssets[0].segments[0].text, finalMediaPhrase);
  const finalMediaModels = [...finalMediaSections[1].matchAll(/\*\*([^*]+)\*\*/g)].map((match) => match[1]).filter((text) => /[.!?]“?$/.test(text));
  assert.equal(finalMediaModels.length, 6, "five complete examples plus one question/answer pair");
  assert.equal(finalMediaAssets[1].segments[0].text, finalMediaModels.join(" ").replace(" — ", " "));
  const finalMediaDialogue = [...b2MediaSource.matchAll(/^\*\*(Moderatorin|Gast):\*\* (.+?)\s*$/gm)].map((match) => ({speaker: match[1], text: match[2].replace(/<br\s*\/?>/g, "").trim()}));
  assert.equal(finalMediaDialogue.length, 6);
  assert.deepEqual(finalMediaAssets[2].segments.map(({speaker, text}) => ({speaker, text})), finalMediaDialogue);
  for (const segment of finalMediaAssets[2].segments) assert.equal(segment.voiceId, segment.speaker === "Moderatorin" ? "voice-02" : "voice-03");
  assert.equal(finalMediaAssets[2].segments[1].text, "Ich finde die Bilder eindrucksvoll, aber die Erklärung ist manchmal zu kurz.", "the guest's own opinion must stay in the indicative");
  for (const index of [0, 1, 3]) assert.equal(finalMediaAssets[index].segments[0].voiceId, "voice-02");
  for (const index of [3, 4]) {
    assert.equal(finalMediaAssets[index].segments.length, 1);
    assert.equal(finalMediaAssets[index].segments[0].text, finalMediaSections[index].split(/\r?\n/).find((line) => line.startsWith("> ")).slice(2).trim(), "full B2.12 reading and listening scripts must match source verbatim");
  }
  const finalMediaLayout = vm.runInContext("renderLessonAudioContent(getLessonsInLevel('B2')[11])", context);
  assert.equal(finalMediaLayout.audioPanel, "");
  for (const asset of finalMediaAssets) {
    const start = finalMediaLayout.contentHtml.indexOf(`<h2 dir="auto">${asset.sectionHeading}</h2>`);
    assert.ok(start >= 0);
    const next = finalMediaLayout.contentHtml.indexOf('<h2 dir="auto">', start + 1);
    const section = finalMediaLayout.contentHtml.slice(start, next < 0 ? undefined : next);
    assert.ok(section.includes(`data-audio-id="${asset.assetId}"`));
    assert.equal(finalMediaLayout.contentHtml.split(`data-audio-id="${asset.assetId}"`).length - 1, 2);
    assert.match(section, /نهائي/);
    assert.doesNotMatch(section, /is-review/);
    for (const rate of [1, 0.8]) {
      vm.runInContext(`playAudioAsset('${asset.assetId}', ${rate})`, context);
      for (const segment of asset.segments) {
        const audio = FakeAudio.instances.at(-1);
        assert.equal(audio.src, segment.src);
        assert.equal(audio.started, true);
        assert.equal(audio.playbackRate, rate);
        audio.emit('ended');
      }
      vm.runInContext('stopAudioPlayback()', context);
    }
  }
  assert.doesNotMatch(finalMediaLayout.contentHtml, /data-audio-id="DL-B2-0[1-9]-/);
  assert.ok(b2MediaAssessment.performanceTasks.every((task) => task.selfCheck?.audioRequired === false), "B2.12 assessment remains independent of optional audio");
  assert.match(finalMediaAssets[3].segments[0].text, /erfundenen Sendung und aus fiktiven Kommentaren/);
  assert.match(finalMediaAssets[3].segments[0].text, /ohne sie als einheitliche Bewertung des Publikums auszugeben/);
  assert.equal(finalMediaAssets[4].assetId, "DL-B2-12-AUD-LST-01");
  assert.equal(finalMediaAssets[4].segments[0].voiceId, "voice-03");
  assert.equal(finalMediaAssets[4].segments[0].speaker, "Erzählperson");
  assert.equal(finalMediaAssets[4].segments[0].src, "assets/audio/DL-B2-12-AUD-LST-01.mp3");
  assert.match(finalMediaAssets[4].segments[0].text, /Die Autorin räumt ein, der Schluss könne Fragen offenlassen/);
  assert.doesNotMatch(finalMediaLayout.contentHtml, /data-audio-id="DL-B2-1[01]-/);
  assert.match(b2MediaSource, /Wie finden Sie die neue Dokumentation/);
  assert.match(b2MediaSource, /Ich finde die Bilder eindrucksvoll, aber die Erklärung ist manchmal zu kurz/);
  assert.doesNotMatch(b2MediaSource, /Die Bilder seien eindrucksvoll/);
  assert.match(b2MediaSource, /Die Gäste sagen, sie würden den Podcast regelmäßig hören/);
  assert.match(b2MediaSource, /Andere sagen, ihnen seien die Folgen zu lang/);
  assert.match(b2MediaSource, /Konjunktiv II.*Präteritum/);
  assert.match(b2MediaSource, /اكتب ملخصًا من خمس إلى ست جمل ألمانية/);
  assert.match(b2MediaSource, /أو حضّره وقدّمه شفهيًا/);
  assert.match(b2MediaSource, /Meiner Meinung nach/);
  assert.match(b2MediaSource, /اقرأه بصوت مسموع لنفسك/);
  assert.match(b2MediaSource, /لا يلزم تسجيله أو إرسال صوت/);
  const b2MediaRubricHtml = vm.runInContext("renderPerformanceTasks(getLessonsInLevel('B2')[11].performanceTasks, 'lesson:b2-12-leisure-media-reported-speech', 'b2-12-v2')", context);
  assert.match(b2MediaRubricHtml, /معايير التحقق المحلي/);
  assert.match(b2MediaRubricHtml, /ثلاثة أقوال/);


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
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[6])", context), true, "B2.7 readiness must be independent of its B2.6 prerequisite lock");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[6])", context), false, "B2.7 must remain locked until B2.6 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-06-study-applications-verb-noun-phrases")}] = {
      score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[5].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[6])", context), true, "B2.7 assessment must remain ready after B2.6 mastery");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[6])", context), true, "B2.7 must open after B2.6 mastery because its own assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[6].id, "B2.7 must be the next required step after mastering B2.6");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[7])", context), true, "B2.8 readiness must be independent of its B2.7 prerequisite lock");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[7])", context), false, "B2.8 must remain locked until B2.7 is mastered");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-07-travel-experiences-prepositional-relatives")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[6].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[7])", context), true, "B2.8 assessment must remain ready after B2.7 mastery");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[7])", context), true, "B2.8 must open after B2.7 mastery because its own assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[7].id, "B2.8 must be the next required step after mastering B2.7");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[8])", context), true, "B2.9 assessment must be ready while it remains behind the B2.8 prerequisite");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[8])", context), false, "B2.9 must remain locked until B2.8 is mastered");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[9])", context), true, "B2.10 assessment must be ready while it remains behind the B2.9 prerequisite");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[9])", context), false, "B2.10 must remain locked until B2.9 is mastered");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[10])", context), true, "B2.11 assessment must be ready behind the B2.10 prerequisite lock");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[10])", context), false, "B2.11 must remain locked");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-08-food-nutrition-data-passives")}] = {
      score: 80, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[7].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[8])", context), true, "B2.9 must remain ready after valid B2.8 mastery");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[8])", context), true, "B2.9 must open after B2.8 mastery because its assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[8].id, "B2.9 must be the next required step after mastering B2.8");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[9])", context), true, "B2.10 must be assessment-ready while B2.9 is in progress");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[9])", context), false, "B2.10 must remain locked until B2.9 mastery");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-09-business-marketing-employment-prepositions")}] = {
      score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[8].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonMastered(getLessonsInLevel('B2')[8])", context), true, "synthetic valid B2.9 mastery should reach the readiness boundary");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[9])", context), true, "B2.10 must open after B2.9 mastery because its assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[9].id, "B2.10 must be the next required step after mastering B2.9");
  assert.equal(vm.runInContext("lessonAssessmentReady(getLessonsInLevel('B2')[10])", context), true, "B2.11 assessment must remain ready after B2.9 mastery");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[10])", context), false, "B2.11 must remain locked until B2.10 mastery");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-10-wishes-probabilities-technology-konjunktiv2-past")}] = {
      score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[9].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonMastered(getLessonsInLevel('B2')[9])", context), true, "synthetic valid B2.10 mastery should reach the readiness boundary");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[10])", context), true, "B2.11 must open after B2.10 mastery because its assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[10].id, "B2.11 must be the next required step after mastering B2.10");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[11])", context), false, "B2.12 must remain locked until B2.11 mastery");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-11-humans-nature-environment-nominalization")}] = {
      score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[10].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonMastered(getLessonsInLevel('B2')[10])", context), true, "synthetic valid B2.11 mastery should reach the readiness boundary");
  assert.equal(vm.runInContext("isLessonAccessible(getLessonsInLevel('B2')[11])", context), true, "B2.12 must open after B2.11 mastery because its assessment is ready");
  assert.equal(vm.runInContext("nextLearningStep().lesson.id", context), b2Lessons[11].id, "B2.12 must be the next required step after mastering B2.11");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-12-leisure-media-reported-speech")}] = {
      score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: 'b2-12-v1',
    };
  `, context);
  assert.equal(vm.runInContext("isLessonMastered(getLessonsInLevel('B2')[11])", context), false, "stale b2-12-v1 completion must not count as B2.12 mastery");
  vm.runInContext(`
    state.completedLessons[${JSON.stringify("b2-12-leisure-media-reported-speech")}] = {
      score: 100, mastered: true, goalMet: true, performanceEvidenceCompleted: true,
      assessmentVersion: getLessonsInLevel('B2')[11].assessment.version,
    };
  `, context);
  assert.equal(vm.runInContext("isLessonMastered(getLessonsInLevel('B2')[11])", context), true, "valid b2-12-v2 completion must mark the final B2.12 lesson mastered");

  console.log("PASS: A0-only start, sequential locks through ready B2.12, 80% scoring, practical-evidence locks, legacy migration, lesson-mapped preview audio through B2.12 (217 assets/474 clips; 217 ready; B2.12 has five assets/ten clips), stable dialogue voices, exact B1.7/B1.8/B1.9 reading and listening transcripts/narrators plus B1.10/B1.11 dialogue/reading/listening, B1.12 vocabulary/models/eight-turn dialogue/reading/listening and inline section placement, pending-playback fallback, transcript availability, local B1.8–B2.12 written/oral assessments independent of audio, visible task-specific performance rubrics, B2.1 method/purpose connector criteria and section-mapped vocabulary/models/eight-turn dialogue/reading/listening, B2.2 Konjunktiv I/source-attribution criteria and section-mapped vocabulary/models/seven-turn dialogue/reading/listening, B2.3 passive-with-modals criteria and section-mapped vocabulary/models/six-turn dialogue/reading/listening, B2.4 Partizip I/II adjective criteria and section-mapped vocabulary/models/seven-turn dialogue/reading/listening, B2.5 cause/effect and Genitiv criteria, corrected Q03 in v2, and section-mapped vocabulary/models/six-turn dialogue/reading/listening, B2.6 academic Nomen-Verb-Verbindungen criteria and section-mapped vocabulary/models/seven-turn dialogue/reading/listening, B2.7 prepositional-relative-clause criteria, corrected P02 departure in v2, and section-mapped vocabulary/models/six-turn dialogue/reading/listening, B2.8 Vorgangspassiv/Zustandspassiv criteria and section-mapped vocabulary/models/six-turn dialogue/reading with spoken fictional table and disclaimer/listening, B2.9 wo(r)/da(r)-preposition criteria and section-mapped vocabulary/models/eight-turn dialogue/reading/listening, B2.10 present/past hypotheses, wishes and possibility with section-mapped vocabulary/models/six-turn dialogue/reading/listening, B2.11 nominal style, and B2.12 media attribution and reported speech.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
