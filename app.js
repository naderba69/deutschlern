const root = document.getElementById('app-root');
const toastNode = document.getElementById('toast');
const STORAGE_KEY = 'deutsch-pfad-state-v1';

const ICONS = {
  logo: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5z"/><path d="M8 8h8M8 12h5M8 16h3"/><circle cx="17" cy="16" r="2.5"/><path d="M17 14.8v2.4m-1.2-1.2h2.4"/>',
  home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9M9 20v-6h6v6"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21z"/><path d="M4 5.5v13A2.5 2.5 0 0 1 6.5 16H20M8 7h8M8 10h7"/>',
  refresh: '<path d="M20 7v5h-5"/><path d="M4.8 9A7.5 7.5 0 0 1 18 6.4L20 12M4 17v-5h5"/><path d="M19.2 15A7.5 7.5 0 0 1 6 17.6L4 12"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.3 1-1.4 2.4-1.6-.6a7.4 7.4 0 0 1-1.5.9l-.3 1.7h-2.8l-.3-1.7a7.4 7.4 0 0 1-1.5-.9l-1.6.6-1.4-2.4 1.3-1a7.5 7.5 0 0 1 0-1.8l-1.3-1 1.4-2.4 1.6.6a7.4 7.4 0 0 1 1.5-.9l.3-1.7h2.8l.3 1.7a7.4 7.4 0 0 1 1.5.9l1.6-.6 1.4 2.4-1.3 1a7.5 7.5 0 0 1-.1 1.7Z" transform="translate(-1.5 -1.5) scale(1.13)"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  flame: '<path d="M12 22c4 0 7-2.8 7-6.7 0-2.6-1.3-4.8-3.5-7.3-.3 2.5-1.8 3.5-2.2 3.7.3-3.1-.6-6.2-3.2-9.2C10.2 7.4 5 9.9 5 15.3 5 19.2 8 22 12 22Z"/><path d="M12 22c-1.5-1-2.3-2.2-2.3-3.7 0-1.4.8-2.5 2.3-3.6 1.6 1.2 2.4 2.3 2.4 3.7S13.6 21 12 22Z"/>',
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="m19 16 .9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowLeft: '<path d="M19 12H5m6 6-6-6 6-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  volume: '<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>',
  bulb: '<path d="M9 18h6M10 22h4M8 14c-1.2-.9-2-2.4-2-4a6 6 0 1 1 12 0c0 1.6-.8 3.1-2 4-.8.7-1 1.4-1 2h-6c0-.6-.2-1.3-1-2Z"/>',
  chart: '<path d="M4 19V5M4 19h17"/><path d="m7 15 3-4 3 2 5-7"/><path d="M18 6h1v1"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 6H4v2a4 4 0 0 0 4 4M17 6h3v2a4 4 0 0 1-4 4"/>',
  shield: '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
  trash: '<path d="M3 6h18M8 6V4h8v2m3 0-.8 14H5.8L5 6"/><path d="M10 11v5m4-5v5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5m0-8h.01"/>',
  play: '<path d="m8 5 11 7-11 7z"/>',
  smile: '<circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  bookmark: '<path d="M6 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17l-6-4-6 4z"/>',
  wand: '<path d="m15 4 5 5M4 20l11-11M4 7v3M2.5 8.5h3M19 14v3M17.5 15.5h3"/><path d="m7 4 .7 1.8L9.5 6.5l-1.8.7L7 9l-.7-1.8-1.8-.7 1.8-.7z"/>',
  headset: '<path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M5 14h2v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Zm14 0h-2v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z"/>',
  star: '<path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>'
};

function icon(name, size = 20) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ICONS.spark}</svg>`;
}

const DAILY_TIME_REFERENCE_DEFAULT = 120;
const DAILY_TIME_REFERENCE_MIN = 5;
const DAILY_TIME_REFERENCE_MAX = 1440;
const DAILY_PLAN_STATUSES = ['pending', 'done', 'deferred'];
const STUDY_IDLE_TIMEOUT_MS = 5 * 60 * 1000;
const STUDY_TIMER_TICK_MS = 1000;
const STUDY_PERSIST_INTERVAL_MS = 15 * 1000;
const STUDY_SESSION_KINDS = ['lesson', 'gate', 'review'];
const STUDY_SESSION_STATUSES = ['active', 'paused', 'completed'];

function normalizeDailyMinutes(value) {
  const minutes = Number(value);
  if (!Number.isFinite(minutes) || minutes < DAILY_TIME_REFERENCE_MIN) return DAILY_TIME_REFERENCE_DEFAULT;
  return Math.round(Math.min(minutes, DAILY_TIME_REFERENCE_MAX));
}

function validDateKey(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function normalizeDailyPlanTask(task, planDate) {
  if (!task || typeof task !== 'object' || !DAILY_PLAN_STATUSES.includes(task.status)) return null;
  const originDate = validDateKey(task.originDate) ? task.originDate : planDate;
  const carriedDays = Number.isInteger(task.carriedDays) && task.carriedDays >= 0 ? Math.min(task.carriedDays, 3650) : 0;
  if (task.kind === 'review' && task.key === 'review') {
    return { key: 'review', kind: 'review', status: task.status, originDate, carriedDays, noWork: task.noWork === true };
  }
  if (task.kind === 'lesson' && typeof task.targetId === 'string' && task.targetId.trim()) {
    return { key: `lesson:${task.targetId}`, kind: 'lesson', targetId: task.targetId, status: task.status, originDate, carriedDays };
  }
  if (task.kind === 'gate' && task.targetId === 'A0-A1') {
    return { key: 'gate:A0-A1', kind: 'gate', targetId: 'A0-A1', status: task.status, originDate, carriedDays };
  }
  return null;
}

function normalizeDailyPlan(value) {
  if (!value || typeof value !== 'object' || !validDateKey(value.date) || !Array.isArray(value.coreTasks)) return null;
  const tasks = [];
  const seen = new Set();
  for (const rawTask of value.coreTasks.slice(0, 8)) {
    const task = normalizeDailyPlanTask(rawTask, value.date);
    if (!task || seen.has(task.key)) continue;
    seen.add(task.key);
    tasks.push(task);
  }
  return {
    version: 1,
    date: value.date,
    coreTasks: tasks,
    deferredAt: typeof value.deferredAt === 'string' ? value.deferredAt : null,
  };
}

function normalizeStudyDays(value) {
  if (!Array.isArray(value)) return [];
  const days = new Map();
  for (const item of value) {
    if (!item || typeof item !== 'object' || !validDateKey(item.date)) continue;
    const actualMilliseconds = Number(item.actualMilliseconds ?? (Number(item.actualSeconds) * 1000));
    const legacyEstimatedMinutes = Number(item.legacyEstimatedMinutes ?? item.minutes);
    const previous = days.get(item.date) || { date: item.date, actualMilliseconds: 0, legacyEstimatedMinutes: 0 };
    days.set(item.date, {
      date: item.date,
      actualMilliseconds: previous.actualMilliseconds + (Number.isFinite(actualMilliseconds) && actualMilliseconds > 0 ? actualMilliseconds : 0),
      legacyEstimatedMinutes: previous.legacyEstimatedMinutes + (Number.isFinite(legacyEstimatedMinutes) && legacyEstimatedMinutes > 0 ? legacyEstimatedMinutes : 0),
    });
  }
  return [...days.values()].sort((left, right) => left.date.localeCompare(right.date));
}

function normalizeStudySessions(value) {
  if (!Array.isArray(value)) return [];
  const sessions = [];
  const seen = new Set();
  for (const item of value) {
    if (!item || typeof item !== 'object' || typeof item.id !== 'string' || !item.id || seen.has(item.id)
      || !STUDY_SESSION_KINDS.includes(item.kind) || typeof item.targetId !== 'string'
      || !STUDY_SESSION_STATUSES.includes(item.status) || !Number.isFinite(new Date(item.startedAt).getTime())) continue;
    seen.add(item.id);
    const activeMilliseconds = Number(item.activeMilliseconds);
    const status = item.status === 'active' ? 'paused' : item.status;
    sessions.push({
      id: item.id,
      kind: item.kind,
      targetId: item.targetId,
      startedAt: item.startedAt,
      updatedAt: typeof item.updatedAt === 'string' ? item.updatedAt : item.startedAt,
      endedAt: typeof item.endedAt === 'string' ? item.endedAt : null,
      pausedAt: typeof item.pausedAt === 'string' ? item.pausedAt : null,
      activeMilliseconds: Number.isFinite(activeMilliseconds) && activeMilliseconds > 0 ? Math.min(activeMilliseconds, 1e12) : 0,
      status,
      pauseReason: item.status === 'active' ? 'reload' : (typeof item.pauseReason === 'string' ? item.pauseReason : null),
    });
  }
  return sessions;
}

function normalizeActiveStudySessionId(value, sessions) {
  if (typeof value !== 'string') return null;
  return sessions.some((session) => session.id === value && session.status !== 'completed') ? value : null;
}

function freshLearningSessions() {
  return { currentView: 'dashboard', selectedLevel: 'A0', active: null, lessons: {}, gate: null };
}

function normalizeLearningSessions(value) {
  const defaults = freshLearningSessions();
  if (!value || typeof value !== 'object' || Array.isArray(value)) return defaults;
  const active = value.active && typeof value.active === 'object' && !Array.isArray(value.active)
    && (value.active.type === 'lesson' || value.active.type === 'gate')
    ? { type: value.active.type, id: typeof value.active.id === 'string' ? value.active.id : '' }
    : null;
  return {
    currentView: typeof value.currentView === 'string' ? value.currentView : defaults.currentView,
    selectedLevel: typeof value.selectedLevel === 'string' ? value.selectedLevel : defaults.selectedLevel,
    active,
    lessons: value.lessons && typeof value.lessons === 'object' && !Array.isArray(value.lessons) ? value.lessons : {},
    gate: value.gate && typeof value.gate === 'object' && !Array.isArray(value.gate) ? value.gate : null,
  };
}

function freshState() {
  return {
    profile: { name: 'متعلّم', dailyGoal: DAILY_TIME_REFERENCE_DEFAULT, focus: 'المحادثة', startLevel: 'A0' },
    completedLessons: {},
    levelChecks: {},
    wordReviews: {},
    audioTranscriptUnlocks: {},
    performanceEvidence: {},
    learningSessions: freshLearningSessions(),
    dailyPlan: null,
    xp: 0,
    studyDays: [],
    studySessions: [],
    activeStudySessionId: null
  };
}

function normalizeProfile(profile = {}) {
  const normalized = { ...freshState().profile, ...profile, startLevel: 'A0' };
  normalized.dailyGoal = normalizeDailyMinutes(normalized.dailyGoal);
  delete normalized.placementScore;
  delete normalized.placementDate;
  return normalized;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return freshState();
    const base = freshState();
    const studySessions = normalizeStudySessions(saved.studySessions);
    return {
      ...base,
      ...saved,
      profile: normalizeProfile(saved.profile),
      completedLessons: saved.completedLessons && typeof saved.completedLessons === 'object' ? saved.completedLessons : {},
      levelChecks: saved.levelChecks && typeof saved.levelChecks === 'object' ? saved.levelChecks : {},
      wordReviews: saved.wordReviews && typeof saved.wordReviews === 'object' ? saved.wordReviews : {},
      audioTranscriptUnlocks: saved.audioTranscriptUnlocks && typeof saved.audioTranscriptUnlocks === 'object' ? saved.audioTranscriptUnlocks : {},
      performanceEvidence: saved.performanceEvidence && typeof saved.performanceEvidence === 'object' ? saved.performanceEvidence : {},
      learningSessions: normalizeLearningSessions(saved.learningSessions),
      dailyPlan: normalizeDailyPlan(saved.dailyPlan),
      studyDays: normalizeStudyDays(saved.studyDays),
      studySessions,
      activeStudySessionId: normalizeActiveStudySessionId(saved.activeStudySessionId, studySessions)
    };
  } catch {
    return freshState();
  }
}

let state = loadState();
let course = null;
let currentView = 'dashboard';
let selectedLevel = 'A0';
let lessonSession = null;
let gateSession = null;
let reviewSession = null;
let mobileMenuOpen = false;
let toastTimer = null;
let activeAudio = null;
let audioPlaybackToken = 0;
let deferredInstallPrompt = null;
let studyTimerInterval = null;
let studyTimerLastTick = null;
let studyTimerLastTickWall = null;
let studyTimerLastActivity = null;
let studyTimerLastSavedAt = null;

function copySessionForStorage(session) {
  if (!session || typeof session !== 'object') return null;
  return {
    ...session,
    answers: Array.isArray(session.answers) ? session.answers.map((answer) => ({ ...answer })) : [],
  };
}

function captureLearningSessions() {
  const sessions = normalizeLearningSessions(state.learningSessions);
  if (lessonSession?.id) sessions.lessons[lessonSession.id] = copySessionForStorage(lessonSession);
  if (gateSession) sessions.gate = copySessionForStorage(gateSession);
  sessions.currentView = currentView;
  sessions.selectedLevel = selectedLevel;
  if (currentView === 'lesson' && lessonSession?.id) sessions.active = { type: 'lesson', id: lessonSession.id };
  else if (currentView === 'a0-gate' && gateSession) sessions.active = { type: 'gate', id: 'A0-A1' };
  state.learningSessions = sessions;
}

function saveState() {
  captureLearningSessions();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    showToast('تعذّر حفظ التقدم محليًا. ربما مساحة المتصفح ممتلئة.');
  }
}

function escapeHTML(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function dateKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function addDaysToKey(key, days) {
  const date = new Date(`${key}T12:00:00`);
  date.setDate(date.getDate() + days);
  return dateKey(date);
}

function studyDayRecord(key) {
  return state.studyDays.find((entry) => entry.date === key);
}

function studyClockNow() {
  return typeof performance !== 'undefined' && typeof performance.now === 'function' ? performance.now() : Date.now();
}

function studyPageIsVisible() {
  const visible = typeof document.visibilityState !== 'string' || document.visibilityState === 'visible';
  const focused = typeof document.hasFocus !== 'function' || document.hasFocus();
  return visible && focused;
}

function currentStudyContext() {
  if (currentView === 'lesson' && lessonSession?.id) return { kind: 'lesson', targetId: lessonSession.id };
  if (currentView === 'a0-gate' && gateSession) return { kind: 'gate', targetId: 'A0-A1' };
  if (currentView === 'review') return { kind: 'review', targetId: 'vocabulary' };
  return null;
}

function studySessionById(id) {
  return typeof id === 'string' ? state.studySessions.find((session) => session.id === id) || null : null;
}

function currentStudySession() {
  const session = studySessionById(state.activeStudySessionId);
  return session && session.status !== 'completed' ? session : null;
}

function ensureStudyDay(date) {
  let item = studyDayRecord(date);
  if (!item) {
    item = { date, actualMilliseconds: 0, legacyEstimatedMinutes: 0 };
    state.studyDays.push(item);
    state.studyDays.sort((left, right) => left.date.localeCompare(right.date));
  }
  return item;
}

function addActualTimeToStudyDays(startWallMilliseconds, durationMilliseconds) {
  let cursor = Number(startWallMilliseconds);
  let remaining = Math.max(0, Number(durationMilliseconds) || 0);
  if (!Number.isFinite(cursor) || !Number.isFinite(remaining) || remaining <= 0) return;
  while (remaining > 0) {
    const currentDate = new Date(cursor);
    const key = dateKey(currentDate);
    const nextDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1).getTime();
    const chunk = Math.min(remaining, Math.max(1, nextDay - cursor));
    ensureStudyDay(key).actualMilliseconds += chunk;
    cursor += chunk;
    remaining -= chunk;
  }
}

function accrueStudyTime(untilMonotonic) {
  const session = currentStudySession();
  if (!session || session.status !== 'active' || studyTimerLastTick === null) return 0;
  const idleDeadline = (studyTimerLastActivity ?? studyTimerLastTick) + STUDY_IDLE_TIMEOUT_MS;
  const end = Math.min(untilMonotonic, idleDeadline);
  const duration = Math.max(0, end - studyTimerLastTick);
  if (!duration) return 0;
  const startWall = studyTimerLastTickWall ?? Date.now();
  session.activeMilliseconds += duration;
  session.updatedAt = new Date(startWall + duration).toISOString();
  addActualTimeToStudyDays(startWall, duration);
  studyTimerLastTick = end;
  studyTimerLastTickWall = startWall + duration;
  return duration;
}

function stopStudyTimerRuntime() {
  if (studyTimerInterval !== null) clearInterval(studyTimerInterval);
  studyTimerInterval = null;
  studyTimerLastTick = null;
  studyTimerLastTickWall = null;
  studyTimerLastActivity = null;
  studyTimerLastSavedAt = null;
}

function startStudyTimerRuntime(session, resetActivity = false) {
  if (!session || session.status !== 'active') return;
  if (!studyPageIsVisible()) {
    pauseStudyTimer('hidden');
    return;
  }
  if (studyTimerInterval !== null) return;
  const now = studyClockNow();
  studyTimerLastTick = now;
  studyTimerLastTickWall = Date.now();
  if (resetActivity || studyTimerLastActivity === null) studyTimerLastActivity = now;
  studyTimerLastSavedAt = now;
  studyTimerInterval = setInterval(tickStudyTimer, STUDY_TIMER_TICK_MS);
}

function pauseStudyTimer(reason, { alreadyAccrued = false, persist = true } = {}) {
  const session = currentStudySession();
  if (!session || session.status !== 'active') return;
  const now = studyClockNow();
  const idleDeadline = (studyTimerLastActivity ?? now) + STUDY_IDLE_TIMEOUT_MS;
  if (!alreadyAccrued) accrueStudyTime(Math.min(now, idleDeadline));
  session.status = 'paused';
  session.pauseReason = now >= idleDeadline ? 'idle' : reason;
  session.pausedAt = new Date().toISOString();
  session.updatedAt = session.pausedAt;
  stopStudyTimerRuntime();
  if (persist) saveState();
  updateStudyTimerControl();
}

function finishCurrentStudySession(reason = 'navigation') {
  const session = currentStudySession();
  if (!session) {
    state.activeStudySessionId = null;
    stopStudyTimerRuntime();
    return;
  }
  if (session.status === 'active') pauseStudyTimer(reason, { persist: false });
  session.status = 'completed';
  session.pauseReason = reason;
  session.endedAt = new Date().toISOString();
  session.updatedAt = session.endedAt;
  state.activeStudySessionId = null;
  stopStudyTimerRuntime();
  saveState();
}

function resumeStudyTimer({ quiet = false } = {}) {
  const session = currentStudySession();
  if (!session || session.status !== 'paused') return false;
  if (!studyPageIsVisible()) {
    if (!quiet) showToast('افتح صفحة التعلّم لتستأنف احتساب الوقت.');
    return false;
  }
  session.status = 'active';
  session.pauseReason = null;
  session.pausedAt = null;
  session.updatedAt = new Date().toISOString();
  startStudyTimerRuntime(session, true);
  saveState();
  updateStudyTimerControl();
  return true;
}

function syncStudyTimerForCurrentView() {
  if (!course) return;
  const context = currentStudyContext();
  const session = currentStudySession();
  if (!context) {
    if (session) finishCurrentStudySession('navigation');
    return;
  }
  if (session && session.kind === context.kind && session.targetId === context.targetId) {
    if (session.status === 'active') startStudyTimerRuntime(session);
    return;
  }
  if (session) finishCurrentStudySession('navigation');
  const now = new Date().toISOString();
  const nextSession = {
    id: `study-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    kind: context.kind,
    targetId: context.targetId,
    startedAt: now,
    updatedAt: now,
    endedAt: null,
    pausedAt: null,
    activeMilliseconds: 0,
    status: 'active',
    pauseReason: null,
  };
  state.studySessions.push(nextSession);
  state.activeStudySessionId = nextSession.id;
  startStudyTimerRuntime(nextSession, true);
  saveState();
}

function tickStudyTimer() {
  const session = currentStudySession();
  if (!session || session.status !== 'active' || studyTimerInterval === null) return;
  if (!studyPageIsVisible()) {
    pauseStudyTimer('hidden');
    return;
  }
  const now = studyClockNow();
  const idleDeadline = (studyTimerLastActivity ?? now) + STUDY_IDLE_TIMEOUT_MS;
  accrueStudyTime(Math.min(now, idleDeadline));
  if (now >= idleDeadline) {
    pauseStudyTimer('idle', { alreadyAccrued: true });
    return;
  }
  if (studyTimerLastSavedAt === null || now - studyTimerLastSavedAt >= STUDY_PERSIST_INTERVAL_MS) {
    saveState();
    studyTimerLastSavedAt = now;
  }
  updateStudyTimerControl();
}

function noteStudyActivity(event) {
  if (event?.target?.closest?.('[data-action="toggle-study-timer"]')) return;
  if (!currentStudyContext() || !studyPageIsVisible()) return;
  const session = currentStudySession();
  if (!session) {
    syncStudyTimerForCurrentView();
    return;
  }
  if (session.status === 'paused') {
    if (session.pauseReason !== 'manual') resumeStudyTimer({ quiet: true });
    return;
  }
  if (session.status !== 'active') return;
  tickStudyTimer();
  if (session.status === 'active') {
    studyTimerLastActivity = studyClockNow();
    updateStudyTimerControl();
  } else if (session.pauseReason !== 'manual') {
    resumeStudyTimer({ quiet: true });
  }
}

function toggleStudyTimer() {
  const session = currentStudySession();
  if (!session) return;
  if (session.status === 'active') pauseStudyTimer('manual');
  else resumeStudyTimer();
  updateStudyTimerControl();
}

function formatStudyDuration(milliseconds) {
  const seconds = Math.max(0, Math.floor((Number(milliseconds) || 0) / 1000));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  return [hours, minutes, remainder].map((value) => String(value).padStart(2, '0')).join(':');
}

function studySessionElapsedMilliseconds(session) {
  if (!session) return 0;
  let elapsed = session.activeMilliseconds || 0;
  if (session.status === 'active' && studyTimerInterval !== null && studyTimerLastTick !== null) {
    const now = studyClockNow();
    const deadline = (studyTimerLastActivity ?? now) + STUDY_IDLE_TIMEOUT_MS;
    elapsed += Math.max(0, Math.min(now, deadline) - studyTimerLastTick);
  }
  return elapsed;
}

function studyPauseMessage(session) {
  if (!session || session.status === 'active') return 'يتوقف عند إخفاء الصفحة أو فقدان التركيز أو بعد 5 دقائق بلا تفاعل.';
  if (session.pauseReason === 'manual') return 'أوقفتَ المؤقت يدويًا؛ استأنفه عندما تتابع الدراسة.';
  if (session.pauseReason === 'idle') return 'توقف المؤقت بعد 5 دقائق بلا تفاعل؛ يستأنف مع عودتك للنشاط.';
  if (session.pauseReason === 'hidden') return 'توقف المؤقت عند مغادرة الصفحة؛ يستأنف عند عودتك إلى التطبيق.';
  if (session.pauseReason === 'pagehide' || session.pauseReason === 'reload') return 'حُفظت الجلسة متوقفة؛ استأنفها عند متابعة التعلّم.';
  return 'المؤقت متوقف مؤقتًا؛ استأنفه عند متابعة الدراسة.';
}

function renderStudyTimerControl() {
  if (!currentStudyContext()) return '';
  const session = currentStudySession();
  if (!session) return '';
  const running = session.status === 'active' && studyTimerInterval !== null;
  return `<section class="study-timer-control ${running ? 'is-running' : 'is-paused'}" aria-label="وقت الدراسة الفعلي"><div class="study-timer-copy"><small>وقت الدراسة الفعلي في هذه الجلسة</small><strong id="study-timer-count">${formatStudyDuration(studySessionElapsedMilliseconds(session))}</strong><span id="study-timer-status">${escapeHTML(studyPauseMessage(session))}</span></div><button type="button" class="${running ? 'button-quiet' : 'button-outline'} button-small" data-action="toggle-study-timer">${running ? 'أوقف مؤقتًا' : 'استأنف احتساب الوقت'}</button></section>`;
}

function updateStudyTimerControl() {
  const session = currentStudySession();
  const counter = document.getElementById('study-timer-count');
  if (!session || !counter) return;
  counter.textContent = formatStudyDuration(studySessionElapsedMilliseconds(session));
  const status = document.getElementById('study-timer-status');
  if (status) status.textContent = studyPauseMessage(session);
  const button = root.querySelector?.('[data-action="toggle-study-timer"]');
  if (button) {
    const running = session.status === 'active' && studyTimerInterval !== null;
    button.textContent = running ? 'أوقف مؤقتًا' : 'استأنف احتساب الوقت';
    button.className = `${running ? 'button-quiet' : 'button-outline'} button-small`;
    const control = button.closest('.study-timer-control');
    if (control) control.className = `study-timer-control ${running ? 'is-running' : 'is-paused'}`;
  }
}

function studyDayActualMilliseconds(item) {
  return Math.max(0, Number(item?.actualMilliseconds) || 0);
}

function currentStreak() {
  const activeDays = new Set(state.studyDays.filter((item) => studyDayActualMilliseconds(item) > 0 || (Number(item.legacyEstimatedMinutes) || 0) > 0).map((item) => item.date));
  let cursor = dateKey();
  if (!activeDays.has(cursor)) cursor = addDaysToKey(cursor, -1);
  let count = 0;
  while (activeDays.has(cursor)) {
    count += 1;
    cursor = addDaysToKey(cursor, -1);
  }
  return count;
}

function weekStats() {
  const today = new Date();
  const items = [];
  const weekdayNames = ['أح', 'إث', 'ثل', 'أر', 'خم', 'جم', 'سب'];
  for (let offset = 6; offset >= 0; offset -= 1) {
    const day = new Date(today);
    day.setDate(today.getDate() - offset);
    const key = dateKey(day);
    const item = studyDayRecord(key);
    const actualMilliseconds = studyDayActualMilliseconds(item);
    items.push({
      key,
      label: weekdayNames[day.getDay()],
      actualMilliseconds,
      minutes: Math.floor(actualMilliseconds / 60000),
      legacyEstimatedMinutes: Math.max(0, Number(item?.legacyEstimatedMinutes) || 0),
      isToday: offset === 0,
    });
  }
  return items;
}

function getLevel(levelId) {
  return course?.levels.find((item) => item.id === levelId) || course?.levels[0];
}

function getLessonsInLevel(levelId) {
  return (course?.lessons || []).filter((lesson) => lesson.level === levelId);
}

const MASTERY_THRESHOLD = 80;

function scorePercent(correct, total) {
  return total > 0 ? Math.round((correct / total) * 10000) / 100 : 0;
}

function meetsMasteryThreshold(correct, total) {
  return total > 0 && correct / total >= MASTERY_THRESHOLD / 100;
}

function performanceTaskPathReady(task) {
  const selfCheck = task?.selfCheck;
  return task?.evaluationStatus === 'ready'
    && selfCheck?.method === 'local_self_check'
    && Array.isArray(selfCheck.requiredChecks)
    && selfCheck.requiredChecks.length === 3
    && ['taskCompletion', 'meaningClarity', 'targetSkill'].every((criterion) => selfCheck.requiredChecks.includes(criterion))
    && Number.isInteger(selfCheck.minimumResponseCharacters)
    && selfCheck.minimumResponseCharacters > 0
    && typeof selfCheck.speakAloud === 'boolean'
    && selfCheck.speakAloud === (Array.isArray(task.modality) && task.modality.includes('speaking'))
    && selfCheck.audioRequired === false;
}

function assessmentReady(assessment, questions, performanceTasks = []) {
  if (!assessment || assessment.status !== 'ready' || !assessment.version || assessment.goalCriteriaVerified !== true) return false;
  if (typeof assessment.performanceEvidenceRequired !== 'boolean' || typeof assessment.performanceEvidenceImplemented !== 'boolean') return false;
  if (assessment.performanceEvidenceRequired) {
    if (assessment.performanceEvidenceImplemented !== true || !Array.isArray(performanceTasks) || !performanceTasks.length) return false;
    if (performanceTasks.some((task) => !performanceTaskPathReady(task))) return false;
  }
  const minimumItems = Number(assessment.minimumItems);
  if (Number(assessment.minimumScore) !== MASTERY_THRESHOLD || !Number.isInteger(minimumItems) || minimumItems < 1) return false;
  if (!Array.isArray(assessment.objectiveIds) || !assessment.objectiveIds.length || assessment.objectiveIds.some((id) => typeof id !== 'string' || !id.trim())) return false;
  if (!Array.isArray(questions) || questions.length < minimumItems) return false;
  const objectives = new Set(assessment.objectiveIds);
  const covered = new Set();
  const validQuestions = questions.every((question) => {
    if (!question || typeof question.prompt !== 'string' || !question.prompt.trim()) return false;
    if (!Array.isArray(question.options) || question.options.length < 2 || question.options.some((option) => typeof option !== 'string' || !option.trim())) return false;
    if (!Number.isInteger(question.answerIndex) || question.answerIndex < 0 || question.answerIndex >= question.options.length) return false;
    if (typeof question.explanation !== 'string' || !question.explanation.trim()) return false;
    if (!Array.isArray(question.objectiveIds) || !question.objectiveIds.length) return false;
    for (const objectiveId of question.objectiveIds) {
      if (typeof objectiveId !== 'string' || !objectives.has(objectiveId)) return false;
      covered.add(objectiveId);
    }
    return true;
  });
  return validQuestions && [...objectives].every((objectiveId) => covered.has(objectiveId));
}

function performanceEvidenceFor(scopeKey, version, taskId) {
  const group = state.performanceEvidence?.[scopeKey];
  if (!group || group.assessmentVersion !== version) return { response: '', checks: {}, spokenAloud: false, completed: false };
  return group.tasks?.[taskId] || { response: '', checks: {}, spokenAloud: false, completed: false };
}

function savePerformanceEvidence(scopeKey, version, taskId, patch) {
  if (!state.performanceEvidence || typeof state.performanceEvidence !== 'object') state.performanceEvidence = {};
  let group = state.performanceEvidence[scopeKey];
  if (!group || group.assessmentVersion !== version) {
    group = { assessmentVersion: version, tasks: {} };
    state.performanceEvidence[scopeKey] = group;
  }
  const current = group.tasks[taskId] || { response: '', checks: {}, spokenAloud: false, completed: false };
  const updated = { ...current, ...patch };
  if (!Object.prototype.hasOwnProperty.call(patch, 'completed')) updated.completed = false;
  group.tasks[taskId] = updated;
  saveState();
  return group.tasks[taskId];
}

function performanceTaskEvidenceReady(task, evidence) {
  const check = task?.selfCheck;
  if (!check || check.method !== 'local_self_check') return false;
  const response = String(evidence?.response || '').trim();
  const minimumCharacters = Number(check.minimumResponseCharacters) || 12;
  const requiredChecks = Array.isArray(check.requiredChecks) ? check.requiredChecks : [];
  return response.length >= minimumCharacters
    && requiredChecks.length > 0
    && requiredChecks.every((criterion) => evidence?.checks?.[criterion] === true)
    && (check.speakAloud !== true || evidence?.spokenAloud === true);
}

function allPerformanceTasksComplete(tasks, scopeKey, version) {
  return Array.isArray(tasks) && tasks.length > 0 && tasks.every((task) => {
    const evidence = performanceEvidenceFor(scopeKey, version, task.id);
    return evidence.completed === true && performanceTaskEvidenceReady(task, evidence);
  });
}

function isGermanTextSnippet(text) {
  const value = String(text || '').trim();
  return Boolean(value) && !/[\u0600-\u06FF]/.test(value) && /[A-Za-zÄÖÜäöüß]/.test(value);
}

function renderPerformanceTasks(tasks, scopeKey, version) {
  const checkLabels = {
    taskCompletion: 'أنجزت كل أجزاء المهمة المطلوبة',
    meaningClarity: 'إجابتي أو كلامي واضح ويمكن فهمه',
    targetSkill: 'استخدمت المهارة أو الصيغة المستهدفة'
  };
  return `<section class="performance-check-panel"><div class="performance-check-heading"><div><small><span lang="de">AUFGABE</span> · الأداء العملي</small><h2>طبّق ما تعلمته</h2><p>اكتب إجابتك أولًا. إذا طُلب منك الكلام، قُلها بصوت مرتفع بنفسك ثم راجع المعايير. لا يسجّل التطبيق صوتك ولا يستخدم خدمة خارجية؛ هذا تحقق ذاتي للتعلّم.</p></div><span>${tasks.length} مهام</span></div><div class="performance-task-list">${tasks.map((task, index) => {
    const evidence = performanceEvidenceFor(scopeKey, version, task.id);
    const selfCheck = task.selfCheck || {};
    const checks = (selfCheck.requiredChecks || ['taskCompletion', 'meaningClarity', 'targetSkill']).map((key) => `<label class="performance-check-option"><input type="checkbox" data-performance-check data-scope="${escapeHTML(scopeKey)}" data-version="${escapeHTML(version)}" data-task-id="${escapeHTML(task.id)}" data-criterion="${escapeHTML(key)}" ${evidence.checks?.[key] === true ? 'checked' : ''}><span>${escapeHTML(checkLabels[key] || key)}</span></label>`).join('');
    const speakCheck = selfCheck.speakAloud === true
      ? `<label class="performance-check-option performance-spoken-check"><input type="checkbox" data-performance-spoken data-scope="${escapeHTML(scopeKey)}" data-version="${escapeHTML(version)}" data-task-id="${escapeHTML(task.id)}" ${evidence.spokenAloud === true ? 'checked' : ''}><span>أديت المهمة بصوت مرتفع</span></label>`
      : '';
    const rubricItems = ['taskCompletion', 'meaningClarity', 'targetSkill'].map((key) => {
      const detail = task.criteria?.[key];
      return typeof detail === 'string' && detail.trim()
        ? `<li dir="auto"><strong>${escapeHTML(checkLabels[key])}:</strong> ${escapeHTML(detail)}</li>`
        : '';
    }).filter(Boolean).join('');
    const rubric = rubricItems
      ? `<section class="performance-task-rubric"><h4>معايير التحقق المحلي</h4><ul>${rubricItems}</ul></section>`
      : '';
    const status = evidence.completed === true ? '<span class="performance-task-status is-done">اكتمل التحقق الذاتي</span>' : '<span class="performance-task-status">بانتظار إجابتك ومعايير التحقق</span>';
    return `<article class="performance-task-card"><div class="performance-task-title"><strong>المهمة ${index + 1}</strong>${status}</div><p dir="auto">${escapeHTML(task.prompt)}</p>${rubric}<label class="performance-response-label" for="response-${escapeHTML(task.id)}">اكتب إجابتك أو مسودة ما ستقوله</label><textarea id="response-${escapeHTML(task.id)}" dir="auto" data-performance-response data-scope="${escapeHTML(scopeKey)}" data-version="${escapeHTML(version)}" data-task-id="${escapeHTML(task.id)}" maxlength="1200" rows="3" placeholder="اكتب هنا؛ تحفظ إجابتك على هذا الجهاز">${escapeHTML(evidence.response || '')}</textarea><div class="performance-check-list">${checks}${speakCheck}</div><button type="button" class="button-outline button-small" data-action="complete-performance-task" data-scope="${escapeHTML(scopeKey)}" data-version="${escapeHTML(version)}" data-task-id="${escapeHTML(task.id)}">${evidence.completed === true ? 'تم التحقق' : 'تحقّق من المهمة'}</button></article>`;
  }).join('')}</div><p class="performance-self-check-note">التطبيق يتحقق من إكمال خطوات المراجعة فقط، ولا يحكم آليًا على جودة النطق أو صدق الإجابة. لا تُمنح علامة إتقان حتى تؤكد المعايير بنفسك.</p></section>`;
}

function performanceAssessmentForScope(scopeKey) {
  if (scopeKey === 'gate:A0-A1') return course?.a0TransitionCheck || null;
  if (typeof scopeKey === 'string' && scopeKey.startsWith('lesson:')) return findLesson(scopeKey.slice('lesson:'.length));
  return null;
}

function completePerformanceTask(scopeKey, version, taskId) {
  const assessment = performanceAssessmentForScope(scopeKey);
  const task = assessment?.performanceTasks?.find((item) => item.id === taskId);
  if (!task || assessment.assessment?.version !== version) {
    showToast('تعذّر العثور على هذه المهمة؛ أعد تحميل التقييم.');
    return;
  }
  const evidence = performanceEvidenceFor(scopeKey, version, taskId);
  if (!performanceTaskEvidenceReady(task, evidence)) {
    showToast('أكمل الإجابة، وضع علامات التحقق المطلوبة، ثم أعد المحاولة.');
    return;
  }
  savePerformanceEvidence(scopeKey, version, taskId, { completed: true, completedAt: new Date().toISOString() });
  render();
}

function finishLessonPerformance() {
  if (!lessonSession || lessonSession.mode !== 'performance') return;
  const lesson = findLesson(lessonSession.id);
  if (!lesson || !allPerformanceTasksComplete(lesson.performanceTasks, `lesson:${lesson.id}`, lesson.assessment.version)) {
    showToast('أكمل مهام الأداء المطلوبة أولًا.');
    return;
  }
  lessonSession.performanceEvidenceCompleted = true;
  finishLesson(lesson);
}

function finishGatePerformance() {
  const gate = course?.a0TransitionCheck;
  if (!gateSession || gateSession.mode !== 'performance' || !gate) return;
  if (!allPerformanceTasksComplete(gate.performanceTasks, 'gate:A0-A1', gate.assessment.version)) {
    showToast('أكمل مهام الأداء المطلوبة أولًا.');
    return;
  }
  gateSession.performanceEvidenceCompleted = true;
  finishA0Gate(gate);
}

function lessonAssessmentReady(lesson) {
  return assessmentReady(lesson?.assessment, lesson?.quiz, lesson?.performanceTasks);
}

function isLessonMastered(lesson) {
  if (!lesson || !lessonAssessmentReady(lesson)) return false;
  const record = state.completedLessons[lesson.id];
  return Boolean(record && record.mastered === true && record.goalMet === true
    && Number(record.score) >= MASTERY_THRESHOLD
    && record.assessmentVersion === lesson.assessment.version
    && (!lesson.assessment.performanceEvidenceRequired || record.performanceEvidenceCompleted === true));
}

function isLevelMastered(levelId) {
  const lessons = getLessonsInLevel(levelId);
  return lessons.length > 0 && lessons.every(isLessonMastered);
}

function isA0TransitionMastered() {
  const gate = course?.a0TransitionCheck;
  const record = state.levelChecks?.['A0-A1'];
  return Boolean(assessmentReady(gate?.assessment, gate?.quiz, gate?.performanceTasks)
    && record?.mastered === true && record.goalMet === true
    && Number(record.score) >= MASTERY_THRESHOLD
    && record.assessmentVersion === gate.assessment.version
    && (!gate.assessment.performanceEvidenceRequired || record.performanceEvidenceCompleted === true));
}

function isLevelUnlocked(levelId) {
  const levels = course?.levels || [];
  const index = levels.findIndex((level) => level.id === levelId);
  if (index < 0) return false;
  if (index === 0) return true;
  for (let previous = 0; previous < index; previous += 1) {
    if (!isLevelMastered(levels[previous].id)) return false;
  }
  return isA0TransitionMastered();
}

function nextLearningStep() {
  const levels = course?.levels || [];
  if (!levels.length) return null;
  for (const level of levels) {
    if (!isLevelUnlocked(level.id)) {
      if (level.id === 'A1' && isLevelMastered('A0')) return { type: 'a0-gate', gate: course.a0TransitionCheck };
      return { type: 'blocked', level };
    }
    const lesson = getLessonsInLevel(level.id).find((item) => !isLessonMastered(item));
    if (lesson) {
      if (!lessonAssessmentReady(lesson)) return { type: 'blocked', level, lesson };
      return { type: 'lesson', lesson };
    }
  }
  return { type: 'complete' };
}

function isLessonAccessible(lesson) {
  if (isLessonMastered(lesson)) return true;
  const step = nextLearningStep();
  return step?.type === 'lesson' && step.lesson.id === lesson.id;
}

function dailyLearningTaskForStep(step = nextLearningStep()) {
  if (step?.type === 'lesson') return { key: `lesson:${step.lesson.id}`, kind: 'lesson', targetId: step.lesson.id };
  if (step?.type === 'a0-gate') return { key: 'gate:A0-A1', kind: 'gate', targetId: 'A0-A1' };
  return null;
}

function dailyTaskIsComplete(task) {
  if (!task) return false;
  if (task.kind === 'review') return task.status === 'done';
  if (task.kind === 'lesson') return isLessonMastered(findLesson(task.targetId));
  if (task.kind === 'gate') return isA0TransitionMastered();
  return false;
}

function createDailyPlanTask(spec, date, previous = null, previousDate = null) {
  const isReviewWithoutWork = spec.kind === 'review' && spec.noWork === true;
  if (isReviewWithoutWork) return { ...spec, status: 'done', originDate: date, carriedDays: 0 };
  if (previous && !dailyTaskIsComplete(previous) && previous.status !== 'done') {
    return {
      ...spec,
      status: 'pending',
      originDate: previous.originDate || previousDate || date,
      carriedDays: Math.min(3650, (previous.carriedDays || 0) + (previousDate && previousDate < date ? 1 : 0)),
    };
  }
  return { ...spec, status: dailyTaskIsComplete(spec) ? 'done' : 'pending', originDate: date, carriedDays: 0 };
}

function createDailyPlan(date = dateKey(), previous = null) {
  const previousPlan = normalizeDailyPlan(previous);
  const previousTasks = previousPlan?.coreTasks || [];
  const coreTasks = [];
  const previousReview = previousTasks.find((task) => task.kind === 'review');
  const reviewSpec = { key: 'review', kind: 'review', noWork: dueWordsCount() === 0 };
  coreTasks.push(createDailyPlanTask(reviewSpec, date, reviewSpec.noWork ? null : previousReview, previousPlan?.date));

  for (const oldTask of previousTasks.filter((task) => ['lesson', 'gate'].includes(task.kind))) {
    if (dailyTaskIsComplete(oldTask)) continue;
    const accessible = oldTask.kind === 'lesson'
      ? isLessonAccessible(findLesson(oldTask.targetId))
      : isLevelMastered('A0') && !isA0TransitionMastered();
    if (!accessible) continue;
    coreTasks.push(createDailyPlanTask({ key: oldTask.key, kind: oldTask.kind, targetId: oldTask.targetId }, date, oldTask, previousPlan.date));
  }
  const currentTask = dailyLearningTaskForStep();
  if (currentTask && !coreTasks.some((task) => task.key === currentTask.key)) {
    const oldTask = previousTasks.find((task) => task.key === currentTask.key);
    coreTasks.push(createDailyPlanTask(currentTask, date, oldTask, previousPlan?.date));
  }
  return { version: 1, date, coreTasks, deferredAt: null };
}

function syncDailyPlan(plan) {
  let changed = false;
  for (const task of plan.coreTasks) {
    if (task.kind === 'review') {
      if (task.status !== 'done' && dueWordsCount() === 0) {
        task.status = 'done';
        task.noWork = true;
        changed = true;
      }
      continue;
    }
    if (dailyTaskIsComplete(task) && task.status !== 'done') {
      task.status = 'done';
      changed = true;
    } else if (!dailyTaskIsComplete(task) && task.status === 'done') {
      task.status = 'pending';
      changed = true;
    }
  }
  return changed;
}

function ensureDailyPlan() {
  if (!course) return null;
  const today = dateKey();
  let plan = normalizeDailyPlan(state.dailyPlan);
  let changed = false;
  if (!plan) {
    plan = createDailyPlan(today);
    changed = true;
  } else if (plan.date !== today) {
    plan = createDailyPlan(today, plan);
    changed = true;
  }
  if (syncDailyPlan(plan)) changed = true;
  state.dailyPlan = plan;
  if (changed) saveState();
  return plan;
}

function dailyPlanCoreComplete(plan = ensureDailyPlan()) {
  return Boolean(plan && plan.coreTasks.every(dailyTaskIsComplete));
}

function nextOptionalPlanStep(plan = ensureDailyPlan()) {
  if (!dailyPlanCoreComplete(plan)) return null;
  const step = nextLearningStep();
  if (step?.type === 'lesson') return { type: 'lesson', lesson: step.lesson };
  if (step?.type === 'a0-gate') return { type: 'gate', gate: step.gate };
  if (step?.type === 'complete') return { type: 'review' };
  return null;
}

function completeDailyReviewTask() {
  const plan = ensureDailyPlan();
  const task = plan?.coreTasks.find((item) => item.kind === 'review');
  if (!task || task.noWork || task.status === 'done') return;
  task.status = 'done';
  plan.deferredAt = null;
  saveState();
}

function deferDailyPlan() {
  const plan = ensureDailyPlan();
  if (!plan) return;
  let deferred = 0;
  for (const task of plan.coreTasks) {
    if (dailyTaskIsComplete(task) || task.status === 'done') continue;
    task.status = 'deferred';
    deferred += 1;
  }
  if (!deferred) {
    showToast('أنجزت مهام اليوم الأساسية بالفعل؛ يمكنك متابعة التوسع الاختياري.');
    return;
  }
  plan.deferredAt = new Date().toISOString();
  saveState();
  render();
  showToast('أُجّلت المهام الأساسية؛ ستُرحّل تلقائيًا إلى خطة الغد بلا عقوبة. ويمكنك استئنافها اليوم إن رغبت.');
}

function openDailyPlanTask(taskKey) {
  const plan = ensureDailyPlan();
  const task = plan?.coreTasks.find((item) => item.key === taskKey);
  if (!task || dailyTaskIsComplete(task)) return;
  if (task.status === 'deferred') task.status = 'pending';
  plan.deferredAt = null;
  saveState();
  if (task.kind === 'review') {
    if (dueWordsCount() === 0) {
      completeDailyReviewTask();
      render();
      return;
    }
    startReviewSession();
    currentView = 'review';
    saveState();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (task.kind === 'lesson') {
    openLesson(task.targetId);
  } else if (task.kind === 'gate') {
    startA0GateQuiz();
  }
}

function formatStudyEstimate(minutes) {
  const value = normalizeDailyMinutes(minutes);
  if (value === 120) return '120 دقيقة (ساعتان)';
  if (value > 60 && value % 60 === 0) return `${value / 60} ساعات`;
  return `${value} دقيقة`;
}

function getDailyPlanTaskDescription(task) {
  if (task.kind === 'review') {
    return task.noWork ? 'لا توجد بطاقات مستحقة؛ يمكنك متابعة هدف التعلّم مباشرة.' : `مراجعة قصيرة لما استحق من المفردات، حتى ${Math.min(12, dueWordsCount())} بطاقة.`;
  }
  if (task.kind === 'lesson') {
    const lesson = findLesson(task.targetId);
    return lesson ? `${lesson.level} · الهدف: ${lesson.objective} ادرس الشرح وتدرّب، ثم أثبت الإتقان بالمهام والتقييم. المدة ${lesson.durationLabel || `${lesson.minutes} دقيقة`} تقديرية ويمكن تقسيمها على جلسات.` : 'تابع الدرس المتاح من موضع توقفك.';
  }
  if (task.kind === 'gate') return `تقييم انتقال A0 إلى A1 مع مهام أداء تثبت الإتقان · ${course?.a0TransitionCheck?.durationLabel || 'مدة تقديرية'}؛ ليس حدًا زمنيًا.`;
  return '';
}

function renderDailyPlanTask(task, index) {
  const done = dailyTaskIsComplete(task);
  const status = done ? 'أُنجز' : task.status === 'deferred' ? 'مؤجّل' : task.carriedDays > 0 ? 'مُرحّل' : 'أساسي';
  const classes = `daily-plan-task ${done ? 'is-done' : task.status === 'deferred' ? 'is-deferred' : ''}`;
  const carryNote = !done && task.carriedDays > 0 ? `<small class="daily-plan-carry">مُرحّل من ${escapeHTML(task.originDate)} بلا عقوبة</small>` : '';
  const title = task.kind === 'review'
    ? 'مراجعة الكلمات المستحقة'
    : task.kind === 'lesson'
      ? findLesson(task.targetId)?.title || 'الدرس المتاح'
      : 'بوابة الإتقان A0 → A1';
  const action = done
    ? '<span class="daily-plan-done">تمت المهمة</span>'
    : `<button type="button" class="button-outline button-small" data-action="open-daily-task" data-task-key="${escapeHTML(task.key)}">${task.status === 'deferred' ? 'تابع الآن' : task.kind === 'review' ? 'ابدأ مراجعة قصيرة' : task.kind === 'gate' ? 'ابدأ التقييم' : 'تابع الدرس'}</button>`;
  return `<li class="${classes}"><span class="daily-plan-index">${done ? icon('check', 15) : String(index + 1).padStart(2, '0')}</span><div class="daily-plan-task-copy"><div class="daily-plan-task-heading"><strong dir="auto">${escapeHTML(title)}</strong><span class="daily-plan-status ${done ? 'is-done' : task.status === 'deferred' ? 'is-deferred' : ''}">${status}</span></div><p>${escapeHTML(getDailyPlanTaskDescription(task))}</p>${carryNote}</div>${action}</li>`;
}

function renderDailyPlan() {
  const plan = ensureDailyPlan();
  if (!plan) return '';
  const coreTasks = plan.coreTasks;
  const doneCount = coreTasks.filter(dailyTaskIsComplete).length;
  const coreComplete = dailyPlanCoreComplete(plan);
  const optional = nextOptionalPlanStep(plan);
  const optionalMarkup = coreComplete
    ? optional?.type === 'lesson'
      ? `<div class="daily-plan-optional"><div><small>توسّع اختياري · لا يغيّر عتبة الإتقان</small><strong dir="auto">${escapeHTML(optional.lesson.title)}</strong><p>أكملت الأساسيات؛ يمكنك متابعة الخطوة التالية اليوم أو تركها لخطة لاحقة.</p></div><button type="button" class="button-primary button-small" data-action="open-lesson" data-id="${escapeHTML(optional.lesson.id)}">تابع اختياريًا ${icon('arrowLeft', 15)}</button></div>`
      : optional?.type === 'gate'
        ? `<div class="daily-plan-optional"><div><small>توسّع اختياري اليوم · يبقى شرط التقدم قائمًا</small><strong>بوابة الإتقان A0 → A1</strong><p>لا يُفتح A1 إلا بعد اجتياز البوابة؛ ويمكنك البدء بها الآن أو في وقت آخر.</p></div><button type="button" class="button-primary button-small" data-action="begin-a0-gate">ابدأ البوابة ${icon('arrowLeft', 15)}</button></div>`
        : optional?.type === 'review'
          ? `<div class="daily-plan-optional"><div><small>اختياري</small><strong>راجع درسًا متقنًا</strong><p>الخطوات الأساسية لليوم منجزة. اختر مراجعة إضافية إذا رغبت.</p></div><button type="button" class="button-outline button-small" data-action="navigate" data-view="tracks">اختر درسًا للمراجعة ${icon('arrowLeft', 15)}</button></div>`
          : '<p class="daily-plan-optional-note">ستظهر المتابعة الاختيارية بعد إتاحة الخطوة التالية.</p>'
    : `<div class="daily-plan-defer"><p>يمكنك التوقف الآن؛ لا نفقد الإجابات ولا نعتبر التأجيل فشلًا. تبقى المهام الأساسية معلقة حتى تستأنفها.</p><button type="button" class="button-quiet button-small" data-action="defer-daily-plan">تعبت؟ رحّل الباقي إلى الغد</button></div>`;
  return `<section class="daily-plan-panel" aria-labelledby="daily-plan-title"><div class="daily-plan-header"><div><small><span lang="de">TAGESPLAN</span> · خطة مرنة</small><h2 id="daily-plan-title">خطة اليوم على قدر طاقتك</h2><p>المراجعة أولًا، ثم هدف تعلّم أساسي. يمكنك تقسيمهما على أكثر من جلسة.</p></div><div class="daily-plan-progress"><strong>${doneCount}<span> / ${coreTasks.length}</span></strong><small>مهام أساسية</small></div></div><ul class="daily-plan-list">${coreTasks.map((task, index) => renderDailyPlanTask(task, index)).join('')}</ul>${optionalMarkup}<p class="daily-plan-note">وقتك الاسترشادي ${formatStudyEstimate(state.profile.dailyGoal)} قابل للتعديل، وليس سقفًا أو شرطًا للإنجاز. أوقات الدروس تقديرية، بينما يُحتسب وقت الدراسة الفعلي تلقائيًا أثناء الجلسة النشطة.</p></section>`;
}

function getLevelProgress(levelId) {
  const lessons = getLessonsInLevel(levelId);
  const done = lessons.filter(isLessonMastered).length;
  return { done, total: lessons.length, percent: lessons.length ? Math.round((done / lessons.length) * 100) : 0 };
}

function totalCompleted() {
  return (course?.lessons || []).filter(isLessonMastered).length;
}

function allWords() {
  return (course?.lessons || []).flatMap((lesson) => (lesson.vocabulary || []).map((word) => ({ ...word, lessonId: lesson.id, level: lesson.level, lessonTitle: lesson.title })));
}

function reviewableWords() {
  return allWords().filter((word) => Boolean(state.completedLessons[word.lessonId] || state.wordReviews[word.id]));
}

function masteredWordsCount() {
  return Object.values(state.wordReviews).filter((item) => item && item.reps >= 3).length;
}

function dueWordsCount() {
  const today = dateKey();
  return reviewableWords().filter((word) => !state.wordReviews[word.id] || state.wordReviews[word.id].dueDate <= today).length;
}

function showToast(message) {
  if (!toastNode) return;
  toastNode.textContent = message;
  toastNode.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastNode.classList.remove('show'), 2700);
}

function headerTitle() {
  const titles = {
    dashboard: ['مساحة التعلّم', 'لوحتي'],
    tracks: ['خريطة الطريق', 'المسارات التعليمية'],
    level: ['خريطة الطريق', `${selectedLevel} · ${getLevel(selectedLevel)?.name || ''}`],
    lesson: ['جلسة التعلّم', lessonSession ? `${getLevel(findLesson(lessonSession.id)?.level)?.id || ''} · ${lessonSession.mode === 'quiz' ? 'تقييم الإتقان' : findLesson(lessonSession.id)?.title || 'الدرس'}` : 'الدرس'],
    'a0-gate': ['بوابة الإتقان', 'A0 → A1'],
    review: ['مراجعة قصيرة', 'مراجعة المفردات'],
    settings: ['تخصيص التجربة', 'الإعدادات']
  };
  return titles[currentView] || titles.dashboard;
}

function findLesson(id) {
  return course?.lessons.find((lesson) => lesson.id === id) || null;
}

function restoreAssessmentSession(candidate, assessment, quiz, id, kind) {
  if (!candidate || typeof candidate !== 'object' || !assessment?.version || !Array.isArray(quiz) || !quiz.length) return null;
  if (candidate.id !== id || candidate.assessmentVersion !== assessment.version) return null;
  const allowedModes = kind === 'lesson' ? ['overview', 'quiz', 'performance', 'result'] : ['quiz', 'performance', 'result'];
  if (!allowedModes.includes(candidate.mode)) return null;
  const questionIndex = candidate.questionIndex;
  if (!Number.isInteger(questionIndex) || questionIndex < 0 || questionIndex >= quiz.length) return null;
  const checked = candidate.checked === true;
  if (candidate.checked !== true && candidate.checked !== false) return null;
  const selected = candidate.selected === null ? null : candidate.selected;
  if (selected !== null && (!Number.isInteger(selected) || selected < 0 || selected >= (quiz[questionIndex]?.options?.length || 0))) return null;
  if (checked && selected === null) return null;
  const pausedMode = kind === 'lesson' && candidate.mode === 'overview' && ['quiz', 'performance'].includes(candidate.pausedMode)
    ? candidate.pausedMode
    : null;
  const answersRaw = Array.isArray(candidate.answers) ? candidate.answers : null;
  if (!answersRaw || answersRaw.length > quiz.length) return null;
  const answers = [];
  for (let index = 0; index < answersRaw.length; index += 1) {
    const answer = answersRaw[index];
    const answerIndex = answer?.selected;
    const options = quiz[index]?.options || [];
    if (!Number.isInteger(answerIndex) || answerIndex < 0 || answerIndex >= options.length) return null;
    answers.push({ selected: answerIndex, correct: answerIndex === quiz[index].answerIndex });
  }
  const quizIsPaused = candidate.mode === 'quiz' || pausedMode === 'quiz';
  const isOverview = candidate.mode === 'overview' && !pausedMode;
  const requiresFullQuiz = candidate.mode === 'performance' || candidate.mode === 'result' || pausedMode === 'performance';
  const expectedAnswers = quizIsPaused
    ? questionIndex + (checked ? 1 : 0)
    : isOverview ? 0 : quiz.length;
  if (answers.length !== expectedAnswers) return null;
  if (checked && answers[answers.length - 1]?.selected !== selected) return null;
  if (isOverview && (questionIndex !== 0 || checked || selected !== null)) return null;
  if (requiresFullQuiz && (questionIndex !== quiz.length - 1 || !checked)) return null;
  const correct = answers.filter((answer) => answer.correct).length;
  if ((candidate.mode === 'performance' || pausedMode === 'performance')
    && (assessment.performanceEvidenceRequired !== true || !meetsMasteryThreshold(correct, quiz.length))) return null;
  if (candidate.mode === 'result' && candidate.completed !== true) return null;
  if (candidate.mode !== 'result' && candidate.completed === true) return null;
  const performanceEvidenceCompleted = candidate.performanceEvidenceCompleted === true;
  const passed = candidate.mode === 'result' && candidate.passed === true
    && meetsMasteryThreshold(correct, quiz.length)
    && (!assessment.performanceEvidenceRequired || performanceEvidenceCompleted);
  const startedAt = Number(candidate.startedAt);
  return {
    id,
    assessmentVersion: assessment.version,
    mode: candidate.mode,
    pausedMode,
    questionIndex,
    selected,
    checked,
    correct,
    answers,
    startedAt: Number.isFinite(startedAt) && startedAt > 0 ? startedAt : Date.now(),
    completed: candidate.mode === 'result',
    score: candidate.mode === 'result' ? scorePercent(correct, quiz.length) : undefined,
    passed,
    previouslyMastered: candidate.previouslyMastered === true,
    performanceEvidenceCompleted,
  };
}

function restoreLessonDraft(lesson) {
  if (!lesson || !lessonAssessmentReady(lesson)) return null;
  const snapshot = state.learningSessions?.lessons?.[lesson.id];
  return restoreAssessmentSession(snapshot, lesson.assessment, lesson.quiz, lesson.id, 'lesson');
}

function restoreGateDraft() {
  const gate = course?.a0TransitionCheck;
  if (!gate || !assessmentReady(gate.assessment, gate.quiz, gate.performanceTasks)) return null;
  return restoreAssessmentSession(state.learningSessions?.gate, gate.assessment, gate.quiz, 'A0-A1', 'gate');
}

function restoreLearningPosition() {
  const sessions = normalizeLearningSessions(state.learningSessions);
  state.learningSessions = sessions;
  selectedLevel = course?.levels.some((level) => level.id === sessions.selectedLevel && isLevelUnlocked(level.id))
    ? sessions.selectedLevel
    : 'A0';
  const active = sessions.active;
  let activeRestored = false;
  if (active?.type === 'lesson') {
    const lesson = findLesson(active.id);
    const session = restoreLessonDraft(lesson);
    if (lesson && session && isLessonAccessible(lesson)) {
      lessonSession = session;
      activeRestored = true;
      if (sessions.currentView === 'lesson') {
        currentView = 'lesson';
        selectedLevel = lesson.level;
      }
    }
  } else if (active?.type === 'gate') {
    const session = restoreGateDraft();
    if (session && isLevelMastered('A0')) {
      gateSession = session;
      activeRestored = true;
      if (sessions.currentView === 'a0-gate') {
        currentView = 'a0-gate';
        selectedLevel = 'A0';
      }
    }
  }
  if (sessions.currentView === 'tracks' || sessions.currentView === 'dashboard' || sessions.currentView === 'settings') {
    currentView = sessions.currentView;
  } else if (sessions.currentView === 'level' && isLevelUnlocked(selectedLevel)) {
    currentView = 'level';
  } else if (!activeRestored || !['lesson', 'a0-gate'].includes(sessions.currentView)) {
    currentView = 'dashboard';
  }
  if (['lesson', 'a0-gate'].includes(sessions.currentView) && !activeRestored) currentView = 'dashboard';
}

function navButton(view, label, iconName, active, count = null) {
  return `<button type="button" class="nav-button ${active ? 'active' : ''}" data-action="navigate" data-view="${view}">
    ${icon(iconName, 19)}<span>${label}</span>${count !== null ? `<span class="nav-count">${count}</span>` : ''}
  </button>`;
}

function renderShell() {
  const [section, title] = headerTitle();
  const profileName = escapeHTML(state.profile.name || 'متعلّم');
  const initials = [...(state.profile.name || 'م')].slice(0, 1).join('') || 'م';
  const currentGoal = normalizeDailyMinutes(state.profile.dailyGoal);
  const viewContent = renderView();
  root.innerHTML = `
    <a class="skip-link" href="#main-content" ${mobileMenuOpen ? 'inert' : ''}>انتقل إلى المحتوى</a>
    ${mobileMenuOpen ? '<button class="mobile-scrim show" tabindex="-1" type="button" data-action="close-menu" aria-label="إغلاق القائمة"></button>' : '<button class="mobile-scrim" tabindex="-1" type="button" data-action="close-menu" aria-label="إغلاق القائمة"></button>'}
    <div class="layout-shell">
      <aside id="navigation-panel" class="sidebar ${mobileMenuOpen ? 'open' : ''}" aria-label="التنقل الرئيسي" ${mobileMenuOpen ? 'role="dialog" aria-modal="true"' : ''}>
        <button type="button" class="mobile-menu-close button-quiet" data-action="close-menu" aria-label="إغلاق القائمة">إغلاق القائمة ${icon('close', 18)}</button>
        <div class="brand-lockup">
          <div class="brand-mark">${icon('logo', 25)}</div>
          <div><span class="brand-title">دويتش</span><span class="brand-subtitle">مساري الشخصي للألمانية</span></div>
        </div>
        <div class="nav-caption">مساحة التعلّم</div>
        <nav class="nav-list">
          ${navButton('dashboard', 'لوحتي', 'home', currentView === 'dashboard')}
          ${navButton('tracks', 'المسارات', 'book', currentView === 'tracks' || currentView === 'level' || currentView === 'a0-gate' || (currentView === 'lesson' && lessonSession?.mode !== 'quiz'))}
          ${navButton('review', 'مراجعة الكلمات', 'refresh', currentView === 'review', dueWordsCount())}
          ${navButton('settings', 'إعداداتي', 'settings', currentView === 'settings')}
        </nav>
        <div class="sidebar-spacer"></div>
        <div class="local-status"><div class="local-status-line"><span class="status-dot"></span> يعمل محليًا</div><p>تقدمك محفوظ على هذا الجهاز. لا نحتاج إلى حساب أو واجهة مدفوعة.</p></div>
        <div class="side-version"><span>منهج A0–B2</span><span>53 درسًا</span></div>
      </aside>
      <main class="main-panel" ${mobileMenuOpen ? 'inert' : ''}>
        <header class="topbar">
          <div class="topbar-title">
            <button type="button" class="mobile-menu" data-action="toggle-menu" aria-label="فتح القائمة" aria-controls="navigation-panel" aria-expanded="${mobileMenuOpen}">${icon('menu', 19)}</button>
            <div><small>${section}</small><strong>${title}</strong></div>
          </div>
          <div class="topbar-actions">
            ${deferredInstallPrompt ? `<button type="button" class="button-outline button-small" data-action="install">تثبيت الأداة</button>` : ''}
            <span class="plan-chip">${icon('target', 14)}<span>تقديرك اليومي ${formatStudyEstimate(currentGoal)}</span></span>
            <div class="avatar" title="${profileName}">${escapeHTML(initials)}</div>
          </div>
        </header>
        <div id="main-content" class="page-container" tabindex="-1">${renderStudyTimerControl()}${viewContent}</div>
      </main>
    </div>`;
}

function focusMainContent() {
  const target = root.querySelector?.('#main-content h1, #main-content h2') || root.querySelector?.('#main-content');
  if (target) {
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
}

function setMobileMenu(open) {
  mobileMenuOpen = open;
  render();
  const target = root.querySelector?.(open ? '.sidebar [data-action="close-menu"]' : '[data-action="toggle-menu"]');
  if (target?.getClientRects().length) target.focus({ preventScroll: true });
  else focusMainContent();
}

function render() {
  // Rendering replaces the DOM. Preserve the active control where it still
  // exists, rather than dropping keyboard users back to the document body.
  const active = document.activeElement;
  const restoreFocus = active && root.contains?.(active);
  const activeId = restoreFocus ? active.id : '';
  const activeAction = restoreFocus ? active.dataset?.action : '';
  const activeData = activeAction ? JSON.stringify({ ...active.dataset }) : '';
  syncStudyTimerForCurrentView();
  renderShell();
  if (restoreFocus) {
    const target = activeId ? document.getElementById(activeId)
      : activeAction ? [...root.querySelectorAll('[data-action]')].find((element) => JSON.stringify({ ...element.dataset }) === activeData) : null;
    if (target && !target.disabled && !target.closest('[inert]') && target.getClientRects().length && window.getComputedStyle(target).visibility !== 'hidden') {
      target.focus({ preventScroll: true });
    } else focusMainContent();
  }
}

function renderView() {
  if (!course) return `<div class="empty-state"><div class="empty-state-icon">${icon('book')}</div><h2>جارٍ تجهيز المسار…</h2><p>لحظة واحدة، نقوم بتحميل دروس المنهج الكامل.</p></div>`;
  switch (currentView) {
    case 'tracks': return renderTracks();
    case 'level': return renderLevelPage();
    case 'lesson': return renderLesson();
    case 'a0-gate': return renderA0GateAssessment();
    case 'review': return renderReview();
    case 'settings': return renderSettings();
    default: return renderDashboard();
  }
}

function renderDashboard() {
  const step = nextLearningStep();
  const lesson = step?.type === 'lesson' ? step.lesson : null;
  const level = lesson ? getLevel(lesson.level) : getLevel('A0');
  const completed = totalCompleted();
  const total = course.lessons.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const thisWeekMilliseconds = weekStats().reduce((sum, day) => sum + day.actualMilliseconds, 0);
  const thisWeek = Math.floor(thisWeekMilliseconds / 60000);
  const legacyEstimatedTotal = state.studyDays.reduce((sum, day) => sum + Math.max(0, Number(day.legacyEstimatedMinutes) || 0), 0);
  const goal = normalizeDailyMinutes(state.profile.dailyGoal);
  const weekGoal = goal * 5;
  const name = escapeHTML(state.profile.name || 'متعلّم');
  const lessonTitle = lesson ? escapeHTML(lesson.title) : '';
  const lessonId = lesson ? escapeHTML(lesson.id) : '';
  const action = lesson
    ? `<button type="button" class="button-primary" data-action="open-lesson" data-id="${lessonId}">${icon('play', 17)} ${isLessonMastered(lesson) ? 'راجع درس اليوم' : 'تابع التعلّم'}</button>`
    : step?.type === 'a0-gate'
      ? `<button type="button" class="button-primary" data-action="open-level" data-level="A0">${icon('target', 17)} اعرض بوابة إتقان A0</button>`
      : `<button type="button" class="button-primary" data-action="navigate" data-view="tracks">${icon('book', 17)} اعرض المسارات</button>`;
  const nextTitle = lesson
    ? `خطوتك التالية: ${lessonTitle}`
    : step?.type === 'a0-gate'
      ? 'أنهيت دروس A0؛ بقي اختبار الإتقان'
      : step?.type === 'complete'
        ? 'أتممت جميع مراحل المسار.'
        : 'المسار قيد التجهيز';
  const nextDescription = lesson
    ? `${level?.id} · ${level?.name} — ${escapeHTML(lesson.objective)}`
    : step?.type === 'a0-gate'
      ? assessmentReady(step.gate?.assessment, step.gate?.quiz, step.gate?.performanceTasks)
        ? 'أتممت دروس A0. ابدأ التقييم الختامي؛ لا يفتح A1 إلا بعد إتقان أهداف A0 بدرجة 80% على الأقل.'
        : 'لا يفتح A1 إلا بعد إتقان أهداف A0 في تقييم شامل بدرجة 80% على الأقل. التقييم قيد الإنتاج، وورقة المراجعة القديمة لا تُحتسب.'
      : step?.type === 'complete'
        ? 'يمكنك مراجعة أي درس سبق إتقانه من صفحة المسارات.'
        : 'سيظهر الدرس التالي بعد إتقان المتطلبات السابقة.';
  const nextAction = lesson
    ? `<button type="button" class="button-outline" data-action="open-lesson" data-id="${lessonId}">${icon('play', 15)} ابدأ درس ${level?.id}</button>`
    : step?.type === 'a0-gate'
      ? `<button type="button" class="button-outline" data-action="open-level" data-level="A0">${icon('target', 15)} اعرض بوابة A0</button>`
      : `<button type="button" class="button-outline" data-action="navigate" data-view="tracks">${icon('book', 15)} راجع المسارات</button>`;

  return `
    <section class="hero-banner">
      <div class="hero-copy">
        <div class="hero-kicker"><span class="kicker-mark"></span><span>مسار يتقدّم معك — من A0 حتى B2</span></div>
        <h1>مرحبًا ${name}،<br><span><span lang="de">Deutsch</span> على مقاسك.</span></h1>
        <p>تعلّم الألمانية بخطوات صغيرة عبر 53 درسًا تشمل الشرح والحوارات والتمارين ومفاتيح الإجابة، مع مراجعة مفردات تحفظ تقدمك على جهازك.</p>
        <div class="hero-actions">${action}<button type="button" class="button-secondary" data-action="navigate" data-view="tracks">${icon('book', 16)} خريطة المسار</button></div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-circle"></div><div class="art-sun"></div><span class="hero-spark one"></span><span class="hero-spark two"></span>
        <div class="art-card"><div class="art-card-top"><span><span lang="de">WORTSCHATZ</span> · 01</span><span class="art-card-dots"><i></i><i></i><i></i></span></div><div class="art-word" dir="ltr" lang="de">Guten Tag!</div><div class="art-translation">مرحبًا / نهارك سعيد</div><div class="art-divider"></div><div class="art-example" dir="ltr" lang="de">Wie geht es dir heute?</div></div>
        <div class="art-levels" dir="ltr"><span>A0 → B2</span></div>
      </div>
    </section>

    <section class="stats-grid" aria-label="إحصاءات التقدم">
      <div class="stat-card"><div class="stat-icon mint">${icon('chart', 20)}</div><div><span class="stat-value">${completed}<span class="stat-foot"> / ${total}</span></span><span class="stat-label">دروس متقنة · ${percent}% من المنهج</span></div></div>
      <div class="stat-card"><div class="stat-icon gold">${icon('flame', 20)}</div><div><span class="stat-value">${currentStreak()}</span><span class="stat-label">أيام متتالية من التعلّم</span></div></div>
      <div class="stat-card"><div class="stat-icon coral">${icon('bookmark', 20)}</div><div><span class="stat-value">${masteredWordsCount()}</span><span class="stat-label">كلمات راسخة في ذاكرتك</span></div></div>
      <div class="stat-card"><div class="stat-icon blue">${icon('star', 20)}</div><div><span class="stat-value">${Number(state.xp) || 0}</span><span class="stat-label">نقاط التعلّم المكتسبة</span></div></div>
    </section>

    ${renderDailyPlan()}

    <section class="section-block">
      <div class="section-heading"><div><h2>رحلتك من A0 إلى B2</h2><p>يبدأ المسار من A0، ولا تُفتح خطوة جديدة قبل إتقان المتطلبات السابقة.</p></div><button class="button-quiet" type="button" data-action="navigate" data-view="tracks">عرض المسارات ${icon('arrowLeft', 15)}</button></div>
      <div class="level-grid">${course.levels.map((item) => renderLevelCard(item)).join('')}</div>
    </section>

    <section class="dashboard-bottom">
      <div class="panel">
        <div class="week-panel-head"><div><h3 class="panel-title">وقت الدراسة هذا الأسبوع</h3><p class="panel-subtitle">قياس فعلي أثناء الدرس والمراجعة والبوابة؛ يتوقف عند إخفاء الصفحة أو فقدان التركيز أو 5 دقائق خمول.</p></div><div class="week-total"><strong>${thisWeek}</strong><span>دقيقة فعلية</span></div></div>
        <div class="week-chart">${renderWeekChart()}</div>
        <div class="week-footnote">${icon('calendar', 15)} مرجعك الأسبوعي ${weekGoal} دقيقة اختياري.${legacyEstimatedTotal ? ` تقديرات محفوظة من السجل السابق: ${Math.round(legacyEstimatedTotal)} دقيقة، ولا تدخل في الوقت الفعلي.` : ''}</div>
      </div>
      <div class="panel nudge-panel">
        <div class="nudge-badge">${icon('spark', 19)}</div>
        <h3 dir="auto">${nextTitle}</h3>
        <p>${nextDescription}</p>
        ${nextAction}
      </div>
    </section>

    <div class="source-note">${icon('info', 16)}<span><strong>عن المحتوى:</strong> يضم التطبيق جميع وحدات A0–B2 الـ53، مع حوارات وتمارين ومفاتيح إجابة. الشروح والأمثلة هنا مواد تعليمية أصلية وليست نسخًا حرفيًا من صفحات الكتب. <a href="./data/source-plan.md">خريطة المنهج والمصادر</a>.</span></div>`;
}

function renderWeekChart() {
  const days = weekStats();
  const maxMinutes = Math.max(30, normalizeDailyMinutes(state.profile.dailyGoal));
  return days.map((day) => {
    const height = day.minutes ? Math.max(6, Math.min(100, (day.minutes / maxMinutes) * 100)) : 3;
    return `<div class="chart-day ${day.isToday ? 'today' : ''}"><div class="chart-bar-wrap"><span class="chart-bar" style="height:${height}%"></span></div><span>${day.label}</span></div>`;
  }).join('');
}

function renderLevelCard(level) {
  const progress = getLevelProgress(level.id);
  const unlocked = isLevelUnlocked(level.id);
  const step = nextLearningStep();
  const isSuggested = step?.type === 'lesson' && step.lesson.level === level.id;
  const theme = `theme-${level.theme}`;
  const stateText = progress.percent === 100 ? 'متقن' : isSuggested ? 'الخطوة التالية' : unlocked ? 'متاح' : 'مقفل';
  return `<article class="level-card ${theme} ${isSuggested ? 'suggested' : ''} ${unlocked ? '' : 'is-locked'}">
    <div class="level-top"><span class="level-token">${level.id}</span><span class="level-state">${stateText}</span></div>
    <h3>${escapeHTML(level.name)}</h3><p>${escapeHTML(level.subtitle)}</p>
    <div class="level-progress"><span>${progress.done} من ${progress.total} درس</span><span>${progress.percent}%</span></div>
    <div class="progress-track"><span style="width:${progress.percent}%"></span></div>
    <div class="level-bottom"><span>${escapeHTML(level.goal)}</span><button type="button" data-action="open-level" data-level="${level.id}" aria-label="افتح ${level.id}" ${unlocked ? '' : 'disabled title="أتمم المتطلبات السابقة أولًا"'}>${unlocked ? `افتح ${icon('arrowLeft', 14)}` : 'مقفل'}</button></div>
  </article>`;
}

function renderTracks() {
  return `<div class="page-header"><div><h1>المسارات التعليمية</h1><p>53 درسًا من A0 حتى B2. يبدأ المسار من A0، وتُفتح الدروس تباعًا بعد إثبات الإتقان.</p></div></div>
    <div>${course.levels.map((level) => renderTrackLevel(level)).join('')}</div>
    <div class="source-note">${icon('info', 16)}<span>تُعرض الدروس داخل التطبيق من ملفات Markdown في مجلد <b dir="ltr">content/</b>، ويُعاد بناء حزمة البيانات محليًا بالأمر <code dir="ltr">python3 tools/build_course.py</code>. التقييم غير متاح للانتقال حتى يُستكمل ويُراجع؛ لا تُسجّل القراءة وحدها إتقانًا.</span></div>`;
}

function renderTrackLevel(level) {
  const lessons = getLessonsInLevel(level.id);
  const progress = getLevelProgress(level.id);
  const unlocked = isLevelUnlocked(level.id);
  const gateLocked = level.id === 'A1' && isLevelMastered('A0') && !isA0TransitionMastered();
  const note = gateLocked
    ? '<p class="progression-note">أُنجزت دروس A0؛ بوابة الانتقال إلى A1 تتطلب اختبار إتقان شاملًا بدرجة 80% على الأقل.</p>'
    : !unlocked
      ? '<p class="progression-note">مقفل حتى إتقان جميع الدروس والبوابات السابقة.</p>'
      : '';
  return `<section class="track-level ${`theme-${level.theme}`} ${unlocked ? '' : 'is-locked'}">
    <div class="track-level-head"><div class="track-level-label"><span class="level-token">${level.id}</span><div><h2>${escapeHTML(level.name)} <span class="track-level-subtitle">· ${escapeHTML(level.subtitle)}</span></h2><p>${escapeHTML(level.goal)}</p></div></div><span>${progress.done}/${progress.total} متقن</span></div>
    ${note}
    ${lessons.length ? lessons.map((lesson, i) => renderLessonRow(lesson, i)).join('') : '<div class="empty-state">لا توجد دروس مسجلة لهذا المستوى.</div>'}
  </section>`;
}

function renderLessonRow(lesson, index) {
  const mastered = isLessonMastered(lesson);
  const ready = lessonAssessmentReady(lesson);
  const accessible = isLessonAccessible(lesson);
  const duration = lesson.durationLabel || `${lesson.minutes} دقيقة`;
  const actionLabel = mastered ? 'راجع الدرس' : accessible ? 'افتح الدرس' : 'مقفل';
  const statusLabel = mastered ? 'متقن' : !ready ? 'التقييم غير جاهز بعد؛ الدرس مقفل' : accessible ? 'متاح للتعلّم' : 'يتطلب إتقان المتطلبات السابقة';
  return `<div class="lesson-row ${mastered ? 'is-complete' : ''} ${accessible ? '' : 'is-locked'}"><div class="lesson-row-number">${mastered ? icon('check', 16) : String(index + 1).padStart(2, '0')}</div><div><h3 dir="auto">${escapeHTML(lesson.title)}</h3><p dir="auto">${escapeHTML(lesson.objective)} · ${escapeHTML(duration)} · ${statusLabel}</p></div><button type="button" class="button-outline" data-action="open-lesson" data-id="${escapeHTML(lesson.id)}" ${accessible ? '' : 'disabled'}>${actionLabel} ${accessible ? icon('arrowLeft', 14) : ''}</button></div>`;
}

function renderLevelPage() {
  const level = getLevel(selectedLevel);
  if (!level) return renderTracks();
  if (!isLevelUnlocked(level.id)) {
    const gatePending = level.id === 'A1' && isLevelMastered('A0');
    return `<button class="lesson-back" type="button" data-action="navigate" data-view="tracks">${icon('arrow', 15)} عودة إلى المسارات</button><section class="empty-state"><div class="empty-state-icon">${icon('shield', 23)}</div><h1>${escapeHTML(level.id)} ما زال مقفلًا</h1><p>${gatePending ? 'أتقن الدروس الخمسة، ثم حقق 80% على الأقل وأكمل أدلة الأداء العملي المطلوبة في بوابة A0.' : 'أتمم الدروس وبوابات الإتقان السابقة قبل فتح هذا المستوى.'}</p></section>`;
  }
  const progress = getLevelProgress(level.id);
  const transitionCheck = level.id === 'A0' ? renderA0TransitionCheck() : '';
  return `<button class="lesson-back" type="button" data-action="navigate" data-view="tracks">${icon('arrow', 15)} عودة إلى كل المسارات</button>
    <div class="page-header"><div><span class="level-token theme-${level.theme}">${level.id}</span><h1 style="margin-top:10px">${escapeHTML(level.name)} — ${escapeHTML(level.subtitle)}</h1><p>${escapeHTML(level.description)} ${escapeHTML(level.goal)}</p></div><div class="page-header-actions"><span class="plan-chip">${icon('chart', 14)} ${progress.done}/${progress.total} درس متقن</span></div></div>
    <section class="track-level theme-${level.theme}">${getLessonsInLevel(level.id).map((lesson, i) => renderLessonRow(lesson, i)).join('')}</section>${transitionCheck}`;
}

function renderA0GateScopeNote() {
  return '<p class="progression-note">التقييم اختيارات ومهمات كتابة وكلام بتحقق ذاتي، وليس تصحيحًا آليًا للغة أو النطق. التسجيل تدريب إضافي؛ الاستماع غير مقاس بأسئلة محسوبة هنا.</p>';
}

function renderA0TransitionCheck() {
  const check = course?.a0TransitionCheck;
  if (!check) return '';
  const ready = assessmentReady(check.assessment, check.quiz, check.performanceTasks);
  const mastered = isA0TransitionMastered();
  const done = isLevelMastered('A0');
  const gateDraft = gateSession?.assessmentVersion === check.assessment?.version ? gateSession : restoreGateDraft();
  const gateInProgress = Boolean(gateDraft && !gateDraft.completed);
  const status = mastered
    ? 'اجتزت بوابة الانتقال إلى A1.'
    : !done
      ? 'تظهر بوابة الإتقان بعد إتمام الدروس الخمسة.'
      : ready
        ? gateInProgress ? 'لديك تقييم محفوظ؛ يمكنك متابعة الإجابة من موضعك.' : 'اكتمل إعداد التقييم؛ أجب عن أسئلته لتحقيق معيار الانتقال.'
        : 'اختبار الإتقان الشامل قيد الإنتاج. ورقة الأسئلة القديمة لا تُحتسب ولا تفتح A1.';
  const gateAction = done && ready && !mastered
    ? `<button type="button" class="button-primary" data-action="begin-a0-gate">${gateInProgress ? 'تابع تقييم الانتقال' : 'ابدأ تقييم الانتقال'} ${icon('arrowLeft', 15)}</button>`
    : '';
  return `<section class="transition-check-panel"><div class="transition-check-heading"><div><small>A0 · بوابة الإتقان إلى A1</small><h2>التقييم الختامي بعد A0</h2><p>شرط الانتقال: إتقان الدروس الخمسة ثم تحقيق 80% على الأقل في تقييم يغطي الأهداف والمهارات المطلوبة. النجاح هنا لا يعني شهادة أو اعتمادًا رسميًا.</p></div><span>${ready ? escapeHTML(check.durationLabel) : 'قيد الإنتاج'}</span></div><p class="progression-note">${status} ورقة الأسئلة القديمة محفوظة للأرشفة فقط ولا تُحتسب بوابةً للانتقال.</p>${gateAction}${renderA0GateScopeNote()}</section>${done ? renderAudioAssets('a0-a1-gate') : ''}`;
}

function startA0GateQuiz(retry = false) {
  stopAudioPlayback();
  const gate = course?.a0TransitionCheck;
  if (!isLevelMastered('A0')) {
    showToast('أتمم وأتقن الدروس الخمسة في A0 أولًا.');
    return;
  }
  if (!assessmentReady(gate?.assessment, gate?.quiz, gate?.performanceTasks)) {
    showToast('بوابة الإتقان لم تكتمل مراجعتها بعد؛ لن يُسجّل اجتياز يدوي.');
    return;
  }
  const inMemorySession = !retry && gateSession && !gateSession.completed
    ? restoreAssessmentSession(gateSession, gate.assessment, gate.quiz, 'A0-A1', 'gate')
    : null;
  const savedSession = !retry ? (inMemorySession || restoreGateDraft()) : null;
  gateSession = savedSession && !savedSession.completed
    ? savedSession
    : { id: 'A0-A1', assessmentVersion: gate.assessment.version, mode: 'quiz', questionIndex: 0, selected: null, checked: false, correct: 0, answers: [], completed: false, startedAt: Date.now() };
  currentView = 'a0-gate';
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderA0GateAssessment() {
  const gate = course?.a0TransitionCheck;
  if (!gateSession || !assessmentReady(gate?.assessment, gate?.quiz, gate?.performanceTasks) || !isLevelMastered('A0')) {
    return `<section class="empty-state"><h1>بوابة A0 → A1 غير متاحة</h1><p>تظهر بعد إتقان دروس A0 وتجهيز التقييم الختامي.</p><button type="button" class="button-outline" data-action="open-level" data-level="A0">العودة إلى A0</button></section>`;
  }
  if (gateSession.mode === 'performance') return renderA0GatePerformance(gate);
  if (gateSession.mode === 'result') return renderA0GateResult(gate);
  const question = gate.quiz[gateSession.questionIndex];
  if (!question) return '';
  const current = gateSession.questionIndex + 1;
  const total = gate.quiz.length;
  const letters = ['أ', 'ب', 'ج', 'د', 'هـ'];
  const isCorrect = gateSession.checked && gateSession.selected === question.answerIndex;
  const options = question.options.map((option, index) => {
    let classes = 'quiz-option';
    if (gateSession.selected === index) classes += ' selected';
    if (gateSession.checked && index === question.answerIndex) classes += ' correct';
    else if (gateSession.checked && index === gateSession.selected) classes += ' incorrect';
    return `<button type="button" class="${classes}" data-action="select-gate-answer" data-index="${index}" ${gateSession.checked ? 'disabled' : ''}><span class="option-letter">${letters[index] || index + 1}</span><span class="option-text" dir="auto"${isGermanTextSnippet(option) ? ' lang="de"' : ''}>${escapeHTML(option)}</span>${gateSession.checked && index === question.answerIndex ? `<span class="option-check">${icon('check', 17)}</span>` : ''}</button>`;
  }).join('');
  const feedback = gateSession.checked ? `<div class="quiz-feedback ${isCorrect ? 'good' : 'try-again'}" dir="auto">${isCorrect ? '<strong>إجابة صحيحة.</strong> ' : '<strong>راجع هذه النقطة.</strong> '}<span dir="auto"${isGermanTextSnippet(question.explanation) ? ' lang="de"' : ''}>${escapeHTML(question.explanation)}</span></div>` : '';
  return `<div class="quiz-wrap"><button class="lesson-back" type="button" data-action="gate-exit">${icon('arrow', 15)} العودة إلى بوابة A0</button>${renderAudioAssets('a0-a1-gate')}${renderA0GateScopeNote()}<div class="quiz-top"><div style="flex:1"><div class="quiz-progress-label">السؤال <strong>${current}</strong> من ${total}</div><div class="quiz-progress"><span style="width:${Math.round((current / total) * 100)}%"></span></div></div></div><section class="quiz-card"><div class="quiz-card-kicker"><span></span>تقييم ختامي · A0 → A1</div><h1 dir="auto"${isGermanTextSnippet(question.prompt) ? ' lang="de"' : ''}>${escapeHTML(question.prompt)}</h1><div class="quiz-options">${options}</div>${feedback}<div class="quiz-card-actions"><button type="button" class="button-quiet" data-action="gate-exit">إنهاء التقييم</button>${gateSession.checked ? `<button type="button" class="button-primary" data-action="next-gate-question">${current === total ? 'اعرض النتيجة' : 'السؤال التالي'} ${icon('arrowLeft', 16)}</button>` : `<button type="button" class="button-primary" data-action="check-gate-answer" ${gateSession.selected === null ? 'disabled' : ''}>تحقّق ${icon('check', 16)}</button>`}</div></section></div>`;
}

function renderA0GatePerformance(gate) {
  const scopeKey = 'gate:A0-A1';
  const tasks = gate.performanceTasks || [];
  const completedCount = tasks.filter((task) => {
    const evidence = performanceEvidenceFor(scopeKey, gate.assessment.version, task.id);
    return evidence.completed === true && performanceTaskEvidenceReady(task, evidence);
  }).length;
  const allComplete = completedCount === tasks.length && tasks.length > 0;
  const score = scorePercent(gateSession.correct, gate.quiz.length);
  return `<div class="quiz-wrap"><button class="lesson-back" type="button" data-action="gate-exit">${icon('arrow', 15)} العودة إلى A0</button><div class="performance-quiz-score"><strong>نتيجة الأسئلة: ${score}%</strong><span>يلزم 80% على الأقل مع إكمال المهام العملية.</span></div>${renderA0GateScopeNote()}${renderPerformanceTasks(tasks, scopeKey, gate.assessment.version)}<div class="performance-finish-actions"><span>${completedCount} من ${tasks.length} مهام مكتملة</span><button type="button" class="button-primary" data-action="finish-gate-performance" ${allComplete ? '' : 'disabled'}>اعتمد نتيجة التقييم ${icon('check', 16)}</button></div></div>`;
}

function checkA0GateAnswer() {
  if (!gateSession || gateSession.mode !== 'quiz' || gateSession.checked || gateSession.selected === null) return;
  const question = course?.a0TransitionCheck?.quiz?.[gateSession.questionIndex];
  if (!question) return;
  const correct = gateSession.selected === question.answerIndex;
  gateSession.checked = true;
  gateSession.answers.push({ selected: gateSession.selected, correct });
  if (correct) gateSession.correct += 1;
  saveState();
  render();
}

function nextA0GateQuestion() {
  const gate = course?.a0TransitionCheck;
  if (!gateSession?.checked || !gate) return;
  if (gateSession.questionIndex >= gate.quiz.length - 1) {
    finishA0Gate(gate);
    return;
  }
  gateSession.questionIndex += 1;
  gateSession.selected = null;
  gateSession.checked = false;
  saveState();
  render();
}

function finishA0Gate(gate) {
  if (!gateSession || gateSession.completed || !assessmentReady(gate.assessment, gate.quiz, gate.performanceTasks)) return;
  const score = scorePercent(gateSession.correct, gate.quiz.length);
  if (meetsMasteryThreshold(gateSession.correct, gate.quiz.length) && gate.assessment.performanceEvidenceRequired) {
    const evidenceComplete = allPerformanceTasksComplete(gate.performanceTasks, 'gate:A0-A1', gate.assessment.version);
    if (!evidenceComplete) {
      gateSession.mode = 'performance';
      saveState();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    gateSession.performanceEvidenceCompleted = true;
  }
  const previous = state.levelChecks['A0-A1'];
  const previouslyMastered = isA0TransitionMastered();
  const quizPassed = meetsMasteryThreshold(gateSession.correct, gate.quiz.length);
  const performanceEvidenceRequired = gate.assessment.performanceEvidenceRequired === true;
  const performanceEvidenceCompleted = !performanceEvidenceRequired || gateSession.performanceEvidenceCompleted === true;
  const passed = quizPassed && performanceEvidenceCompleted;
  state.levelChecks['A0-A1'] = {
    score: passed ? score : (previous?.score ?? score),
    lastAttemptScore: score,
    mastered: passed || previouslyMastered,
    goalMet: passed || previouslyMastered,
    performanceEvidenceCompleted: performanceEvidenceCompleted || (previouslyMastered && previous?.performanceEvidenceCompleted === true),
    assessmentVersion: gate.assessment.version,
    completedAt: passed || previouslyMastered ? (previous?.completedAt || dateKey()) : null,
    attempts: (previous?.attempts || 0) + 1,
  };
  gateSession.performanceEvidenceCompleted = performanceEvidenceCompleted;
  gateSession.passed = passed;
  gateSession.previouslyMastered = previouslyMastered;
  gateSession.score = score;
  gateSession.completed = true;
  gateSession.mode = 'result';
  state.xp = (Number(state.xp) || 0) + (passed ? Math.max(8, Math.round(8 + score / 10)) : 2);
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderA0GateResult(gate) {
  const score = gateSession.score || 0;
  const passed = gateSession.passed === true;
  const performanceEvidenceMissing = gate.assessment.performanceEvidenceRequired === true && gateSession.performanceEvidenceCompleted !== true;
  const message = passed
    ? `حققت ${score}% واستوفيت دليل الأداء المطلوب؛ أصبح A1 متاحًا.`
    : gateSession.previouslyMastered
      ? `نتيجتك الحالية ${score}%. بقي اجتيازك السابق محفوظًا.`
      : performanceEvidenceMissing
        ? `حققت ${score}% في الأسئلة، لكن لا يمكن اجتياز البوابة قبل إنجاز المهام العملية وتقييمها؛ يلزم أيضًا ${MASTERY_THRESHOLD}% على الأقل.`
        : `حققت ${score}%. يلزم ${MASTERY_THRESHOLD}% على الأقل بعد إتمام A0؛ راجع أهدافك ثم أعد المحاولة.`;
  return `<div class="quiz-wrap"><section class="result-card"><div class="result-medal">${icon(passed ? 'trophy' : 'spark', 31)}</div><div class="score-ring">${score}%</div><h1>${passed ? 'اجتزت بوابة A0' : 'بوابة A0 ما زالت قيد الإنجاز'}</h1><p>${message}<br>إجابات صحيحة: ${gateSession.correct} من ${gate.quiz.length}.</p><div class="result-actions"><button type="button" class="button-primary" data-action="navigate" data-view="dashboard">العودة إلى لوحتي ${icon('arrowLeft', 16)}</button><button type="button" class="button-outline" data-action="retry-a0-gate">أعد التقييم ${icon('refresh', 15)}</button></div></section></div>`;
}

function openLesson(id) {
  stopAudioPlayback();
  const lesson = findLesson(id);
  if (!lesson) {
    showToast('تعذّر العثور على هذا الدرس؛ أعد تحميل صفحة المسارات.');
    return;
  }
  if (!isLessonAccessible(lesson)) {
    showToast('لا يمكن تجاوز الدرس الحالي؛ أتمم المتطلبات السابقة وأثبت إتقانها أولًا.');
    return;
  }
  const savedSession = restoreLessonDraft(lesson);
  lessonSession = savedSession && !savedSession.completed
    ? savedSession
    : { id, assessmentVersion: lesson.assessment?.version || '', mode: 'overview', pausedMode: null, questionIndex: 0, selected: null, checked: false, correct: 0, answers: [], startedAt: Date.now(), completed: false };
  currentView = 'lesson';
  mobileMenuOpen = false;
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLesson() {
  if (!lessonSession) return `<div class="empty-state"><div class="empty-state-icon">${icon('book')}</div><h2>اختر درسًا لتبدأ</h2><p>افتح أحد المسارات التعليمية للعثور على الدرس المناسب.</p><button type="button" class="button-primary" data-action="navigate" data-view="tracks">استعرض المسارات</button></div>`;
  const lesson = findLesson(lessonSession.id);
  if (!lesson) return `<div class="empty-state"><h2>لم نعثر على هذا الدرس</h2><button type="button" class="button-outline" data-action="navigate" data-view="tracks">العودة للمسارات</button></div>`;
  if (lessonSession.mode === 'quiz') return renderLessonQuiz(lesson);
  if (lessonSession.mode === 'performance') return renderLessonPerformance(lesson);
  if (lessonSession.mode === 'result') return renderLessonResult(lesson);
  return renderLessonOverview(lesson);
}

function renderAudioAssets(lessonId, assetIds = null) {
  const playableStatuses = ['ready', 'generated_pending_acoustic_review'];
  const assets = (course?.audioAssets || []).filter((asset) => asset.lessonId === lessonId && playableStatuses.includes(asset.status) && (assetIds === null || assetIds.includes(asset.assetId)));
  if (!assets.length) return '';
  const hasPendingReview = assets.some((asset) => asset.status === 'generated_pending_acoustic_review');
  const reviewNote = hasPendingReview
    ? '<p class="audio-review-note">التسجيلات متاحة لك للاستماع والمراجعة داخل هذا الدرس.</p>'
    : '';
  return `<section class="lesson-audio-panel" aria-label="التسجيلات الصوتية"><div class="audio-panel-heading"><div><small><span lang="de">HÖREN</span> · الاستماع</small><h2>استمع إلى الألمانية</h2></div><span class="count">${hasPendingReview ? 'متاحة للمراجعة' : 'النسخة النهائية'}</span></div>${reviewNote}<div class="audio-assets-list">${assets.map((asset) => {
    const transcript = asset.segments.map((segment) => `<div class="audio-transcript-line"><strong dir="auto"${isGermanTextSnippet(segment.speaker) ? ' lang="de"' : ''}>${escapeHTML(segment.speaker)}</strong><span dir="ltr" lang="de">${escapeHTML(segment.text)}</span></div>`).join('');
    const transcriptLocked = asset.transcriptPolicy === 'hide_until_first_attempt' && state.audioTranscriptUnlocks?.[asset.assetId] !== true;
    const transcriptView = transcriptLocked
      ? '<p class="audio-transcript-locked">سيظهر النص بعد الاستماع إلى التسجيل مرة كاملة.</p>'
      : `<details class="audio-transcript"><summary>اعرض النص الألماني</summary><div>${transcript}</div></details>`;
    const reviewStatus = asset.status === 'ready'
      ? '<span class="audio-asset-status is-final">نهائي</span>'
      : '<span class="audio-asset-status is-review">للمراجعة</span>';
    return `<article class="audio-asset-card"><div class="audio-asset-title"><strong dir="auto">${escapeHTML(asset.title)}</strong><div class="audio-asset-meta"><span>${asset.segments.length > 1 ? 'حوار بأصوات ثابتة' : 'تسجيل الدرس'}</span>${reviewStatus}</div></div><div class="audio-asset-actions"><button type="button" class="button-outline button-small" data-action="play-audio-asset" data-audio-id="${escapeHTML(asset.assetId)}" data-audio-rate="1">استمع بالسرعة الطبيعية</button><button type="button" class="button-quiet button-small" data-action="play-audio-asset" data-audio-id="${escapeHTML(asset.assetId)}" data-audio-rate="0.8">استمع ببطء</button></div>${transcriptView}</article>`;
  }).join('')}</div></section>`;
}

// Place explicitly mapped recordings below their source headings. Unmapped or
// stale headings fall back to the lesson panel so no recording disappears.
function renderLessonAudioContent(lesson) {
  let contentHtml = lesson.contentHtml || '<p>محتوى الدرس غير متاح. أعد بناء بيانات المنهج.</p>';
  const assets = (course?.audioAssets || []).filter((asset) => asset.lessonId === lesson.id);
  const placed = new Set();
  const headings = [...new Set(assets.map((asset) => asset.sectionHeading).filter((heading) => typeof heading === 'string' && heading))];
  for (const heading of headings) {
    const marker = `<h2 dir="auto">${escapeHTML(heading)}</h2>`;
    if (!contentHtml.includes(marker)) continue;
    const ids = assets.filter((asset) => asset.sectionHeading === heading).map((asset) => asset.assetId);
    const panel = renderAudioAssets(lesson.id, ids);
    if (!panel) continue;
    contentHtml = contentHtml.replace(marker, () => marker + panel);
    ids.forEach((id) => placed.add(id));
  }
  return { contentHtml, audioPanel: renderAudioAssets(lesson.id, assets.filter((asset) => !placed.has(asset.assetId)).map((asset) => asset.assetId)) };
}

function renderLessonOverview(lesson) {
  const lessonAudio = renderLessonAudioContent(lesson);
  const level = getLevel(lesson.level) || { id: lesson.level, theme: 'sage' };
  const words = lesson.vocabulary || [];
  const mastered = isLessonMastered(lesson);
  const assessmentIsReady = lessonAssessmentReady(lesson);
  const duration = lesson.durationLabel || `${lesson.minutes} دقيقة`;
  const quizActionLabel = lessonSession.pausedMode === 'performance'
    ? 'تابع مهام الأداء'
    : lessonSession.pausedMode === 'quiz'
      ? 'استأنف التقييم'
      : mastered ? 'أعد تقييم الإتقان' : 'ابدأ تقييم الإتقان';
  const vocabularyDrawer = words.length ? `<section class="lesson-section lesson-vocab-section"><details class="vocab-review-drawer"><summary><span><small><span lang="de">WORTSCHATZ</span> · بطاقات المراجعة</small><strong>تدرّب على مفردات الدرس</strong></span><span class="count">${words.length} كلمة/عبارة</span></summary><div class="vocab-grid">${words.map((word) => `<article class="vocab-card"><div class="vocab-card-top"><div class="german-word" dir="ltr" lang="de">${escapeHTML(word.word)}</div><div class="word-controls"><button class="icon-button" type="button" data-action="pronounce" data-word="${escapeHTML(word.word)}" title="استمع للنطق" aria-label="استمع إلى ${escapeHTML(word.word)}">${icon('volume', 14)}</button><button class="icon-button" type="button" data-action="quick-word-known" data-word-id="${escapeHTML(word.id)}" title="أضف للمراجعة" aria-label="أضف ${escapeHTML(word.word)} للمراجعة">${icon(state.wordReviews[word.id] ? 'check' : 'bookmark', 14)}</button></div></div><div class="word-translation" dir="auto">${escapeHTML(word.translation)}</div>${word.example ? `<div class="word-example" dir="auto"${isGermanTextSnippet(word.example) ? ' lang="de"' : ''}>${escapeHTML(word.example)}</div>` : ''}</article>`).join('')}</div></details></section>` : '';
  return `<button class="lesson-back" type="button" data-action="back-to-level">${icon('arrow', 15)} عودة إلى ${lesson.level}</button>
    <section class="lesson-hero"><div><div class="lesson-level-tag"><span class="level-token theme-${level.theme}">${level.id}</span><span>محتوى الدرس الكامل · ${escapeHTML(duration)}</span></div><h1 dir="auto">${escapeHTML(lesson.title)}</h1><p dir="auto">${escapeHTML(lesson.objective)}</p></div><div class="lesson-time">${icon('clock', 16)} ${escapeHTML(duration)}</div></section>
    <div class="lesson-layout">
      <div class="lesson-main-column">
        ${lessonAudio.audioPanel}
        <section class="lesson-section lesson-content-panel"><div class="lesson-section-heading"><div><small><span lang="de">LEKTION</span> · الدرس الكامل</small><h2>الشرح والحوارات والتمارين</h2></div><span class="count">مفتاح الإجابات قابل للفتح</span></div><article class="lesson-document" dir="rtl">${lessonAudio.contentHtml}</article></section>
        ${vocabularyDrawer}
        <section class="lesson-finish-panel"><div><strong>${mastered ? 'هذا الدرس متقن' : assessmentIsReady ? 'حان وقت التحقق من الإتقان' : 'تقييم هذا الدرس قيد الإعداد'}</strong><span>${mastered ? `أفضل نتيجة معتمدة: ${state.completedLessons[lesson.id].score}%` : assessmentIsReady ? 'يلزم 80% على الأقل وإثبات أهداف الدرس لفتح الخطوة التالية.' : 'يمكنك دراسة المحتوى كاملًا الآن؛ لكن القراءة وحدها لا تسجّل الإتقان ولا تفتح الدرس التالي.'}</span></div>${assessmentIsReady ? `<button type="button" class="button-primary" data-action="begin-quiz">${quizActionLabel} ${icon('check', 16)}</button>` : '<span class="plan-chip">غير متاح بعد</span>'}</section>
      </div>
      <aside class="lesson-aside">
        <div class="study-aside-card"><div class="study-objective">${icon('target', 18)}</div><h3>هدف هذا الدرس</h3><p dir="auto">${escapeHTML(lesson.objective)}</p></div>
        <div class="study-aside-card"><h3>طريقة الدراسة</h3><p>${assessmentIsReady ? 'ابدأ بالأهداف والمراجعة، ثم أجب عن التمارين قبل فتح مفتاح الحل، وأتمم تقييم الإتقان ومهام الأداء العملي.' : 'ابدأ بالأهداف والمراجعة، ثم أجب عن التمارين قبل فتح مفتاح الحل. سيظهر تقييم إتقان مستقل عند اكتمال إعداده.'}</p></div>
        <div class="study-aside-card"><h3>التقدّم محلي</h3><p>${mastered ? 'هذا الدرس مسجّل بوصفه متقنًا.' : 'لا يُسجّل إتقان الدرس بالقراءة أو بزر يدوي؛ يلزم اجتياز التقييم وتحقيق الهدف.'} بطاقات المفردات متاحة للمراجعة أيضًا.</p></div>
      </aside>
    </div>`;
}

function renderLessonQuiz(lesson) {
  const q = lesson.quiz[lessonSession.questionIndex];
  if (!q) return '';
  const current = lessonSession.questionIndex + 1;
  const total = lesson.quiz.length;
  const percent = Math.round((current / total) * 100);
  const letters = ['أ', 'ب', 'ج', 'د', 'هـ'];
  const isCorrect = lessonSession.checked && lessonSession.selected === q.answerIndex;
  const options = q.options.map((option, index) => {
    let classes = 'quiz-option';
    if (lessonSession.selected === index) classes += ' selected';
    if (lessonSession.checked && index === q.answerIndex) classes += ' correct';
    else if (lessonSession.checked && index === lessonSession.selected) classes += ' incorrect';
    return `<button type="button" class="${classes}" data-action="select-lesson-answer" data-index="${index}" ${lessonSession.checked ? 'disabled' : ''}><span class="option-letter">${letters[index] || index + 1}</span><span class="option-text" dir="auto"${isGermanTextSnippet(option) ? ' lang="de"' : ''}>${escapeHTML(option)}</span>${lessonSession.checked && index === q.answerIndex ? `<span class="option-check">${icon('check', 17)}</span>` : ''}</button>`;
  }).join('');
  const feedback = lessonSession.checked ? `<div class="quiz-feedback ${isCorrect ? 'good' : 'try-again'}" dir="auto">${isCorrect ? '<strong>إجابة صحيحة!</strong> ' : '<strong>ليس تمامًا.</strong> '}<span dir="auto"${isGermanTextSnippet(q.explanation) ? ' lang="de"' : ''}>${escapeHTML(q.explanation)}</span></div>` : '';
  const nextLabel = current === total ? 'عرض النتيجة' : 'السؤال التالي';
  return `<div class="quiz-wrap"><button class="lesson-back" type="button" data-action="quiz-exit">${icon('arrow', 15)} العودة إلى شرح الدرس</button>
    <div class="quiz-top"><div style="flex:1"><div class="quiz-progress-label">السؤال <strong>${current}</strong> من ${total}</div><div class="quiz-progress"><span style="width:${percent}%"></span></div></div><span class="plan-chip">${icon('clock', 14)} ${lesson.minutes} د</span></div>
    <section class="quiz-card"><div class="quiz-card-kicker"><span></span>تقييم الإتقان · ${escapeHTML(lesson.level)}</div><h1 dir="auto"${isGermanTextSnippet(q.prompt) ? ' lang="de"' : ''}>${escapeHTML(q.prompt)}</h1><div class="quiz-options">${options}</div>${feedback}<div class="quiz-card-actions"><button type="button" class="button-quiet" data-action="quiz-exit">إنهاء التدريب</button>${lessonSession.checked ? `<button type="button" class="button-primary" data-action="next-lesson-question">${nextLabel} ${icon('arrowLeft', 16)}</button>` : `<button type="button" class="button-primary" data-action="check-lesson-answer" ${lessonSession.selected === null ? 'disabled' : ''}>تحقّق من الإجابة ${icon('check', 16)}</button>`}</div></section>
  </div>`;
}

function renderLessonPerformance(lesson) {
  const scopeKey = `lesson:${lesson.id}`;
  const tasks = lesson.performanceTasks || [];
  const completedCount = tasks.filter((task) => {
    const evidence = performanceEvidenceFor(scopeKey, lesson.assessment.version, task.id);
    return evidence.completed === true && performanceTaskEvidenceReady(task, evidence);
  }).length;
  const allComplete = completedCount === tasks.length && tasks.length > 0;
  const score = scorePercent(lessonSession.correct, lesson.quiz.length);
  return `<div class="quiz-wrap"><button class="lesson-back" type="button" data-action="quiz-exit">${icon('arrow', 15)} العودة إلى شرح الدرس</button><div class="performance-quiz-score"><strong>نتيجة الأسئلة: ${score}%</strong><span>يلزم 80% على الأقل، بالإضافة إلى التحقق من المهام العملية.</span></div>${renderPerformanceTasks(tasks, scopeKey, lesson.assessment.version)}<div class="performance-finish-actions"><span>${completedCount} من ${tasks.length} مهام مكتملة</span><button type="button" class="button-primary" data-action="finish-lesson-performance" ${allComplete ? '' : 'disabled'}>اعتمد نتيجة التقييم ${icon('check', 16)}</button></div></div>`;
}

function renderLessonResult(lesson) {
  const total = lesson.quiz.length;
  const score = lessonSession.score ?? scorePercent(lessonSession.correct, total);
  const passed = lessonSession.passed === true;
  const title = passed ? 'أتقنت هدف الدرس' : 'ما زال هدف الدرس قيد الإنجاز';
  const performanceEvidenceMissing = lesson.assessment.performanceEvidenceRequired === true && lessonSession.performanceEvidenceCompleted !== true;
  const message = passed
    ? `حققت ${score}%، واستوفيت دليل الأداء المطلوب. فُتحت لك الخطوة التالية.`
    : lessonSession.previouslyMastered
      ? `نتيجتك الحالية ${score}%. بقي إتقانك السابق محفوظًا.`
      : performanceEvidenceMissing
        ? `حققت ${score}% في الأسئلة، لكن لا يمكن تسجيل الإتقان قبل إنجاز مهمة الأداء وتقييمها؛ يلزم أيضًا ${MASTERY_THRESHOLD}% على الأقل.`
        : `نتيجتك ${score}%. يلزم ${MASTERY_THRESHOLD}% على الأقل مع استيفاء معيار هدف الدرس؛ راجع الشرح ثم أعد المحاولة.`;
  return `<div class="quiz-wrap"><section class="result-card"><div class="result-medal">${icon(passed ? 'trophy' : 'spark', 31)}</div><div class="score-ring">${score}%</div><h1>${title}</h1><p>${message}<br>إجابات صحيحة: ${lessonSession.correct} من ${total} · سُجّلت المحاولة ووقتها محليًا.</p><div class="result-actions"><button type="button" class="button-primary" data-action="navigate" data-view="dashboard">العودة إلى لوحتي ${icon('arrowLeft', 16)}</button><button type="button" class="button-outline" data-action="retake-lesson">أعد التقييم ${icon('refresh', 15)}</button><button type="button" class="button-quiet" data-action="navigate" data-view="review">راجع الكلمات ${icon('book', 15)}</button></div></section></div>`;
}

function beginQuiz() {
  stopAudioPlayback();
  if (!lessonSession) return;
  const lesson = findLesson(lessonSession.id);
  if (!lesson || !isLessonAccessible(lesson)) {
    showToast('لا يمكن بدء هذا التقييم قبل إتقان المتطلبات السابقة.');
    return;
  }
  if (!lessonAssessmentReady(lesson)) {
    showToast('تقييم هذا الدرس لم يكتمل أو لم يُراجع بعد؛ لم تُسجّل الإتقان يدويًا.');
    return;
  }
  if (lessonSession.pausedMode === 'quiz' || lessonSession.pausedMode === 'performance') {
    lessonSession.mode = lessonSession.pausedMode;
    lessonSession.pausedMode = null;
  } else {
    lessonSession.assessmentVersion = lesson.assessment.version;
    lessonSession.mode = 'quiz';
    lessonSession.pausedMode = null;
    lessonSession.questionIndex = 0;
    lessonSession.selected = null;
    lessonSession.checked = false;
    lessonSession.correct = 0;
    lessonSession.answers = [];
    lessonSession.completed = false;
    lessonSession.passed = false;
    lessonSession.score = undefined;
    lessonSession.performanceEvidenceCompleted = false;
  }
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function checkLessonAnswer() {
  if (!lessonSession || lessonSession.checked || lessonSession.selected === null) return;
  const lesson = findLesson(lessonSession.id);
  const q = lesson?.quiz[lessonSession.questionIndex];
  if (!q) return;
  lessonSession.checked = true;
  const right = lessonSession.selected === q.answerIndex;
  lessonSession.answers.push({ selected: lessonSession.selected, correct: right });
  if (right) lessonSession.correct += 1;
  saveState();
  render();
}

function nextLessonQuestion() {
  if (!lessonSession?.checked) return;
  const lesson = findLesson(lessonSession.id);
  if (!lesson) return;
  if (lessonSession.questionIndex >= lesson.quiz.length - 1) {
    finishLesson(lesson);
    return;
  }
  lessonSession.questionIndex += 1;
  lessonSession.selected = null;
  lessonSession.checked = false;
  saveState();
  render();
}

function finishLesson(lesson) {
  if (!lessonSession || lessonSession.completed || !lessonAssessmentReady(lesson)) return;
  const score = scorePercent(lessonSession.correct, lesson.quiz.length);
  if (meetsMasteryThreshold(lessonSession.correct, lesson.quiz.length) && lesson.assessment.performanceEvidenceRequired) {
    const scopeKey = `lesson:${lesson.id}`;
    const evidenceComplete = allPerformanceTasksComplete(lesson.performanceTasks, scopeKey, lesson.assessment.version);
    if (!evidenceComplete) {
      lessonSession.mode = 'performance';
      saveState();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    lessonSession.performanceEvidenceCompleted = true;
  }
  const previous = state.completedLessons[lesson.id];
  const previouslyMastered = isLessonMastered(lesson);
  const quizPassed = meetsMasteryThreshold(lessonSession.correct, lesson.quiz.length);
  const performanceEvidenceRequired = lesson.assessment.performanceEvidenceRequired === true;
  const performanceEvidenceCompleted = !performanceEvidenceRequired || lessonSession.performanceEvidenceCompleted === true;
  const passed = quizPassed && performanceEvidenceCompleted;
  const attempts = (previous?.attempts || 0) + 1;
  state.completedLessons[lesson.id] = {
    score: passed ? score : (previous?.score ?? score),
    lastAttemptScore: score,
    mastered: passed || previouslyMastered,
    goalMet: passed || previouslyMastered,
    performanceEvidenceCompleted: performanceEvidenceCompleted || (previouslyMastered && previous?.performanceEvidenceCompleted === true),
    assessmentVersion: lesson.assessment.version,
    completedAt: passed || previouslyMastered ? (previous?.completedAt || dateKey()) : null,
    attempts
  };
  lessonSession.score = score;
  lessonSession.performanceEvidenceCompleted = performanceEvidenceCompleted;
  lessonSession.passed = passed;
  lessonSession.previouslyMastered = previouslyMastered;
  lessonSession.completed = true;
  lessonSession.mode = 'result';
  state.xp = (Number(state.xp) || 0) + (passed ? Math.max(8, Math.round(8 + score / 10)) : 2);
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startReviewSession() {
  const all = reviewableWords();
  const today = dateKey();
  const due = all.filter((word) => !state.wordReviews[word.id] || state.wordReviews[word.id].dueDate <= today);
  const cards = (due.length ? due : all).slice(0, 12);
  reviewSession = { cards, index: 0, revealed: false, done: cards.length === 0, optional: due.length === 0 && all.length > 0 };
}

function renderReview() {
  if (!reviewSession) startReviewSession();
  const words = reviewSession.cards;
  const left = Math.max(0, words.length - reviewSession.index);
  return `<section class="review-banner"><div><h1>مراجعة قصيرة، أثرها طويل.</h1><p>بطاقات مفردات بمواعيد مراجعة محلية وبسيطة — بلا حساب وبلا تكلفة API.</p></div><div class="review-count">${left}</div></section>
    <div class="review-content">${reviewSession.done || !words.length ? `<section class="empty-state"><div class="empty-state-icon">${icon('trophy', 23)}</div><h2>${words.length ? 'أنهيت جلسة اليوم!' : 'لا توجد بطاقات مفردات متاحة بعد.'}</h2><p>${words.length ? 'رائع. الكلمات التي صعبت عليك ستعود قريبًا، والكلمات التي أتقنتها ستظهر بفواصل أطول.' : 'افتح أحد الدروس؛ تظهر بطاقات المفردات عند توفرها في محتواه.'}</p><button type="button" class="button-outline" data-action="navigate" data-view="dashboard">العودة إلى لوحتي</button></section>` : renderFlashcard(words[reviewSession.index], left)}</div>`;
}

function renderFlashcard(word, left) {
  if (!word) return '';
  const reviewInfo = state.wordReviews[word.id];
  const translation = reviewSession.revealed ? escapeHTML(word.translation) : 'فكّر بالمعنى، ثم اكشف الإجابة';
  const example = reviewSession.revealed && word.example ? `<div class="flash-example" dir="auto"${isGermanTextSnippet(word.example) ? ' lang="de"' : ''}>${escapeHTML(word.example)}</div>` : '';
  return `<section class="flashcard"><small>${escapeHTML(word.level)} · ${escapeHTML(word.lessonTitle)}</small><div class="flash-word" dir="ltr" lang="de">${escapeHTML(word.word)}</div><div class="flash-translation" dir="auto">${translation}</div>${example}
    <div class="flashcard-actions">${!reviewSession.revealed ? `<button type="button" class="button-primary" data-action="flip-card">اكشف المعنى ${icon('spark', 15)}</button>` : `<button type="button" class="button-outline button-small" data-action="pronounce" data-word="${escapeHTML(word.word)}">${icon('volume', 14)} استمع</button>`}</div>
    ${reviewSession.revealed ? `<div class="review-ratings"><button type="button" class="button-outline" data-action="rate-word" data-rating="again">أحتاج إلى مراجعتها</button><button type="button" class="button-primary" data-action="rate-word" data-rating="know">أتقنتها ${icon('check', 15)}</button></div>` : ''}
    <div class="review-session-meta">البطاقة ${reviewSession.index + 1} من ${reviewSession.cards.length}${reviewInfo?.reps ? ` · راجعتها ${reviewInfo.reps} مرة` : ''}${reviewSession.optional ? ' · مراجعة اختيارية' : ''}</div>
  </section>`;
}

function rateCurrentWord(rating) {
  const word = reviewSession?.cards[reviewSession.index];
  if (!word) return;
  const previous = state.wordReviews[word.id] || { reps: 0 };
  if (rating === 'know') {
    const reps = (previous.reps || 0) + 1;
    const intervals = [1, 3, 7, 14, 30];
    state.wordReviews[word.id] = { reps, dueDate: addDaysToKey(dateKey(), intervals[Math.min(reps - 1, intervals.length - 1)]), lastReviewed: dateKey() };
  } else {
    state.wordReviews[word.id] = { reps: 0, dueDate: addDaysToKey(dateKey(), 1), lastReviewed: dateKey() };
  }
  saveState();
  reviewSession.index += 1;
  reviewSession.revealed = false;
  if (reviewSession.index >= reviewSession.cards.length) {
    reviewSession.done = true;
    if (!reviewSession.optional) completeDailyReviewTask();
  }
  render();
}

function renderSettings() {
  const profile = state.profile;
  const focusOptions = ['المحادثة', 'السفر', 'العمل', 'الدراسة', 'الحياة اليومية'];
  return `<div class="page-header"><div><h1>إعداداتك، على مقاسك</h1><p>عدّل الاسم والوقت الاسترشادي واهتمامك. يبدأ المسار دائمًا من A0 ثم يتقدم بعد الإتقان. تحفظ هذه النسخة بياناتك في متصفح هذا الجهاز فقط.</p></div></div>
    <div class="settings-layout">
      <section class="panel"><h2 class="panel-title">خطة التعلّم</h2><p class="panel-subtitle">يُحفظ الاسم والوقت الاسترشادي والاهتمام محليًا؛ اختيار الاهتمام تفضيل محفوظ ولا يغيّر ترتيب المنهج حاليًا.</p>
        <form id="settings-form" class="settings-form" style="margin-top:19px">
          <div class="field"><label for="profile-name">كيف نناديك؟</label><input id="profile-name" name="name" dir="auto" aria-describedby="profile-name-help" maxlength="32" value="${escapeHTML(profile.name || '')}" placeholder="اسمك أو لقبك"><small id="profile-name-help">يظهر الاسم في لوحة المتابعة فقط.</small></div>
          <div class="field"><label for="daily-goal">وقت دراسة استرشادي في اليوم (بالدقائق)</label><input id="daily-goal" name="dailyGoal" aria-describedby="daily-goal-help" type="number" inputmode="numeric" min="5" step="5" value="${normalizeDailyMinutes(profile.dailyGoal)}"><small id="daily-goal-help">ساعتان (120 دقيقة) نقطة بداية قابلة للتعديل، لا سقفًا. يمكنك متابعة المهام بعدها أو تقسيمها على جلسات.</small></div>
          <div class="field"><label for="learning-focus">ما هدفك الأقرب؟</label><select id="learning-focus" name="focus">${focusOptions.map((focus) => `<option value="${focus}" ${profile.focus === focus ? 'selected' : ''}>${focus}</option>`).join('')}</select></div>
          <div class="form-actions"><button type="submit" class="button-primary">حفظ الإعدادات ${icon('check', 16)}</button><button type="button" class="button-quiet" data-action="navigate" data-view="dashboard">إلغاء</button></div>
        </form>
      </section>
      <aside class="panel"><h2 class="panel-title">الخصوصية والنسخ الاحتياطي</h2><p class="panel-subtitle">مصممة لتبقى بسيطة ومجانية.</p>
        <div class="privacy-list"><div class="privacy-row">${icon('shield', 17)}<span>لا يوجد حساب أو قاعدة بيانات أو API مدفوع في التطبيق.</span></div><div class="privacy-row">${icon('bookmark', 17)}<span>التقدم والمفردات وسجل وقت الدراسة محفوظة على هذا الجهاز داخل المتصفح.</span></div><div class="privacy-row">${icon('clock', 17)}<span>لا تُحذف سجلات الوقت تلقائيًا بعد 60 يومًا؛ تُزال عند مسح بيانات المتصفح أو إعادة ضبط التقدم.</span></div><div class="privacy-row">${icon('download', 17)}<span>صدّر نسخة JSON إذا أردت نقل تقدمك إلى جهاز آخر يدويًا أو الاحتفاظ بنسخة احتياطية.</span></div></div>
        <div class="data-tools"><button type="button" class="button-outline" data-action="export-progress">${icon('download', 16)} تنزيل نسخة احتياطية</button><label class="button-outline file-label">${icon('upload', 16)} استيراد نسخة JSON<input id="restore-file" type="file" accept="application/json,.json"></label><button type="button" class="button-danger" data-action="reset-progress">${icon('trash', 16)} مسح التقدم من هذا الجهاز</button></div>
        <div class="warning-box">عند نشر المشروع على GitHub/Vercel، تأكد أن إذن الكتب يسمح بتضمين محتواها في الموقع المنشور. اجعل المستودع خاصًا أو استخدم محتوى مرخّصًا إذا لزم ذلك.</div>
      </aside>
    </div>`;
}

function stopAudioPlayback() {
  audioPlaybackToken += 1;
  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.speechSynthesis?.cancel === 'function') {
    window.speechSynthesis.cancel();
  }
}

function playAudioAsset(assetId, rate) {
  const asset = (course?.audioAssets || []).find((item) => item.assetId === assetId && ['ready', 'generated_pending_acoustic_review'].includes(item.status));
  if (!asset || !Array.isArray(asset.segments) || !asset.segments.length) {
    showToast('هذا التسجيل لم يكتمل تجهيزه بعد.');
    return;
  }
  if (typeof Audio === 'undefined') {
    showToast('تشغيل التسجيلات غير متاح في هذا المتصفح.');
    return;
  }
  stopAudioPlayback();
  const token = audioPlaybackToken;
  let index = 0;
  const playNext = () => {
    if (token !== audioPlaybackToken) return;
    if (index >= asset.segments.length) {
      activeAudio = null;
      if (asset.transcriptPolicy === 'hide_until_first_attempt' && state.audioTranscriptUnlocks?.[asset.assetId] !== true) {
        state.audioTranscriptUnlocks = { ...(state.audioTranscriptUnlocks || {}), [asset.assetId]: true };
        saveState();
        render();
      }
      return;
    }
    const segment = asset.segments[index++];
    const audio = new Audio(segment.src);
    audio.playbackRate = rate === 0.8 ? 0.8 : 1;
    if ('preservesPitch' in audio) audio.preservesPitch = true;
    if ('webkitPreservesPitch' in audio) audio.webkitPreservesPitch = true;
    activeAudio = audio;
    audio.addEventListener('ended', playNext, { once: true });
    audio.addEventListener('error', () => {
      if (token !== audioPlaybackToken) return;
      stopAudioPlayback();
      showToast('تعذّر تشغيل أحد مقاطع الحوار.');
    }, { once: true });
    audio.play().catch(() => {
      if (token !== audioPlaybackToken) return;
      stopAudioPlayback();
      showToast('تعذّر تشغيل التسجيل؛ جرّب مرة أخرى.');
    });
  };
  playNext();
}

function handleClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  switch (action) {
    case 'navigate':
      stopAudioPlayback();
      currentView = button.dataset.view || 'dashboard';
      if (currentView === 'review') startReviewSession();
      mobileMenuOpen = false;
      saveState();
      render();
      focusMainContent();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'toggle-menu':
      setMobileMenu(!mobileMenuOpen);
      break;
    case 'close-menu':
      setMobileMenu(false);
      break;
    case 'open-lesson': openLesson(button.dataset.id); break;
    case 'open-daily-task': openDailyPlanTask(button.dataset.taskKey); break;
    case 'defer-daily-plan': deferDailyPlan(); break;
    case 'toggle-study-timer': toggleStudyTimer(); break;
    case 'open-level':
      stopAudioPlayback();
      selectedLevel = button.dataset.level || 'A0';
      if (!isLevelUnlocked(selectedLevel)) {
        showToast('هذا المستوى مقفل؛ أتمم المتطلبات السابقة وأثبت الإتقان أولًا.');
        break;
      }
      currentView = 'level';
      mobileMenuOpen = false;
      saveState();
      render();
      focusMainContent();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'begin-quiz': beginQuiz(); break;
    case 'begin-a0-gate': startA0GateQuiz(); break;
    case 'retry-a0-gate': startA0GateQuiz(true); break;
    case 'select-gate-answer':
      if (gateSession && gateSession.mode === 'quiz' && !gateSession.checked) { gateSession.selected = Number(button.dataset.index); saveState(); render(); }
      break;
    case 'check-gate-answer': checkA0GateAnswer(); break;
    case 'next-gate-question': nextA0GateQuestion(); break;
    case 'complete-performance-task': completePerformanceTask(button.dataset.scope, button.dataset.version, button.dataset.taskId); break;
    case 'finish-lesson-performance': finishLessonPerformance(); break;
    case 'finish-gate-performance': finishGatePerformance(); break;
    case 'gate-exit':
      stopAudioPlayback();
      selectedLevel = 'A0';
      currentView = 'level';
      saveState();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'select-lesson-answer':
      if (lessonSession && !lessonSession.checked) { lessonSession.selected = Number(button.dataset.index); saveState(); render(); }
      break;
    case 'check-lesson-answer': checkLessonAnswer(); break;
    case 'next-lesson-question': nextLessonQuestion(); break;
    case 'quiz-exit':
      if (lessonSession && ['quiz', 'performance'].includes(lessonSession.mode)) {
        lessonSession.pausedMode = lessonSession.mode;
        lessonSession.mode = 'overview';
      }
      saveState();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'retake-lesson':
      if (lessonSession) openLesson(lessonSession.id);
      break;
    case 'back-to-level':
      stopAudioPlayback();
      if (lessonSession) selectedLevel = findLesson(lessonSession.id)?.level || 'A0';
      currentView = 'level';
      saveState();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'flip-card':
      if (reviewSession) { reviewSession.revealed = true; render(); }
      break;
    case 'rate-word': rateCurrentWord(button.dataset.rating); break;
    case 'pronounce': pronounce(button.dataset.word); break;
    case 'play-audio-asset': playAudioAsset(button.dataset.audioId, Number(button.dataset.audioRate)); break;
    case 'quick-word-known': quickMarkWord(button.dataset.wordId); break;
    case 'export-progress': exportProgress(); break;
    case 'reset-progress': resetProgress(); break;
    case 'install': installApp(); break;
    default: break;
  }
}

function quickMarkWord(wordId) {
  const previous = state.wordReviews[wordId];
  if (previous && previous.reps >= 3) {
    showToast('هذه الكلمة راسخة بالفعل ضمن قائمة المراجعة.');
    return;
  }
  state.wordReviews[wordId] = { reps: Math.max(3, previous?.reps || 0), dueDate: addDaysToKey(dateKey(), 7), lastReviewed: dateKey() };
  saveState();
  render();
  showToast('أُضيفت الكلمة إلى سجلّك.');
}

function pronounce(text) {
  if (!text || !('speechSynthesis' in window)) {
    showToast('ميزة النطق غير متاحة في هذا المتصفح.');
    return;
  }
  stopAudioPlayback();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.88;
  window.speechSynthesis.speak(utterance);
}

function handleSubmit(event) {
  if (event.target.id !== 'settings-form') return;
  event.preventDefault();
  const form = new FormData(event.target);
  state.profile.name = String(form.get('name') || '').trim().slice(0, 32) || 'متعلّم';
  state.profile.dailyGoal = normalizeDailyMinutes(form.get('dailyGoal'));
  state.profile.focus = String(form.get('focus') || 'المحادثة');
  state.profile.startLevel = 'A0';
  currentView = 'dashboard';
  saveState();
  render();
  showToast('حُفظت إعداداتك على هذا الجهاز.');
}

function handleInput(event) {
  const field = event.target.closest('[data-performance-response]');
  if (!field) return;
  savePerformanceEvidence(field.dataset.scope, field.dataset.version, field.dataset.taskId, { response: field.value });
}

function handleChange(event) {
  const check = event.target.closest('[data-performance-check]');
  if (check) {
    const current = performanceEvidenceFor(check.dataset.scope, check.dataset.version, check.dataset.taskId);
    const checks = { ...(current.checks || {}), [check.dataset.criterion]: check.checked };
    savePerformanceEvidence(check.dataset.scope, check.dataset.version, check.dataset.taskId, { checks });
    return;
  }
  const spoken = event.target.closest('[data-performance-spoken]');
  if (spoken) {
    savePerformanceEvidence(spoken.dataset.scope, spoken.dataset.version, spoken.dataset.taskId, { spokenAloud: spoken.checked });
    return;
  }
  if (event.target.id !== 'restore-file' || !event.target.files?.[0]) return;
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!parsed || typeof parsed !== 'object' || !parsed.profile || typeof parsed.completedLessons !== 'object') throw new Error('invalid');
      const base = freshState();
      const importedStudySessions = normalizeStudySessions(parsed.studySessions);
      state = {
        ...base,
        ...parsed,
        profile: normalizeProfile(parsed.profile),
        completedLessons: parsed.completedLessons || {},
        levelChecks: parsed.levelChecks && typeof parsed.levelChecks === 'object' ? parsed.levelChecks : {},
        wordReviews: parsed.wordReviews || {},
        audioTranscriptUnlocks: parsed.audioTranscriptUnlocks && typeof parsed.audioTranscriptUnlocks === 'object' ? parsed.audioTranscriptUnlocks : {},
        performanceEvidence: parsed.performanceEvidence && typeof parsed.performanceEvidence === 'object' ? parsed.performanceEvidence : {},
        learningSessions: normalizeLearningSessions(parsed.learningSessions),
        dailyPlan: normalizeDailyPlan(parsed.dailyPlan),
        studyDays: normalizeStudyDays(parsed.studyDays),
        studySessions: importedStudySessions,
        activeStudySessionId: normalizeActiveStudySessionId(parsed.activeStudySessionId, importedStudySessions)
      };
      lessonSession = null;
      gateSession = null;
      currentView = 'dashboard';
      selectedLevel = 'A0';
      restoreLearningPosition();
      saveState();
      render();
      showToast('تم استيراد النسخة الاحتياطية.');
    } catch {
      showToast('هذا الملف ليس نسخة احتياطية صالحة من الأداة.');
    }
  };
  reader.readAsText(file);
}

function exportProgress() {
  if (currentStudySession()?.status === 'active') tickStudyTimer();
  saveState();
  const data = { ...state, exportedAt: new Date().toISOString(), app: 'deutsch-pfad' };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `deutsch-pfad-backup-${dateKey()}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast('جهّزنا نسخة تقدمك للتنزيل.');
}

function resetProgress() {
  const confirmed = window.confirm('هل تريد مسح كل التقدم والإعدادات المحفوظة على هذا الجهاز؟');
  if (!confirmed) return;
  stopStudyTimerRuntime();
  state = freshState();
  currentView = 'dashboard';
  selectedLevel = 'A0';
  lessonSession = null;
  gateSession = null;
  reviewSession = null;
  saveState();
  render();
  showToast('تم مسح التقدم المحلي.');
}

async function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  render();
}

root.addEventListener('pointerdown', noteStudyActivity, { passive: true });
root.addEventListener('touchstart', noteStudyActivity, { passive: true });
root.addEventListener('wheel', noteStudyActivity, { passive: true });
root.addEventListener('keydown', noteStudyActivity);
root.addEventListener('input', noteStudyActivity);
root.addEventListener('change', noteStudyActivity);
root.addEventListener('click', noteStudyActivity);
root.addEventListener('click', handleClick);
root.addEventListener('submit', handleSubmit);
root.addEventListener('input', handleInput);
root.addEventListener('change', handleChange);

if (typeof document.addEventListener === 'function') {
  document.addEventListener('visibilitychange', () => {
    if (!studyPageIsVisible()) pauseStudyTimer('hidden');
    else if (currentStudyContext()) noteStudyActivity();
    else updateStudyTimerControl();
  });
}

window.addEventListener('pagehide', () => pauseStudyTimer('pagehide'));
window.addEventListener('blur', () => pauseStudyTimer('hidden'));
window.addEventListener('scroll', noteStudyActivity, { passive: true });
window.addEventListener('focus', () => {
  if (currentStudyContext()) noteStudyActivity();
  else updateStudyTimerControl();
});

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (course) render();
});

window.addEventListener('keydown', (event) => {
  if (!mobileMenuOpen) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    setMobileMenu(false);
  } else if (event.key === 'Tab') {
    const controls = [...(root.querySelectorAll?.('.sidebar button:not([disabled]), .sidebar a[href]') || [])]
      .filter((element) => element.getClientRects().length && window.getComputedStyle(element).visibility !== 'hidden');
    if (!controls.length) return;
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!controls.includes(document.activeElement) || (event.shiftKey && document.activeElement === first) || (!event.shiftKey && document.activeElement === last)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
    }
  }
});

window.addEventListener('resize', () => {
  if (mobileMenuOpen && window.matchMedia?.('(min-width: 901px)').matches) setMobileMenu(false);
});

async function startApp() {
  renderShell();
  try {
    const response = await fetch('./data/course.json');
    if (!response.ok) throw new Error('course data unavailable');
    course = await response.json();
    restoreLearningPosition();
    render();
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    }
  } catch (error) {
    root.innerHTML = `<main class="page-container"><div class="empty-state"><div class="empty-state-icon">${icon('info')}</div><h2>تعذّر تحميل بيانات الدروس</h2><p>شغّل الموقع عبر خادم محلي (مثل python3 -m http.server) بدل فتح الملف مباشرة، ثم أعد المحاولة.</p></div></main>`;
  }
}

startApp();
