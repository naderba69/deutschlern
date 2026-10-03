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

function freshState() {
  return {
    profile: { name: 'متعلّم', dailyGoal: 15, focus: 'المحادثة', startLevel: 'A0', placementScore: null },
    completedLessons: {},
    wordReviews: {},
    xp: 0,
    studyDays: []
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (!saved || typeof saved !== 'object') return freshState();
    const base = freshState();
    return {
      ...base,
      ...saved,
      profile: { ...base.profile, ...(saved.profile || {}) },
      completedLessons: saved.completedLessons && typeof saved.completedLessons === 'object' ? saved.completedLessons : {},
      wordReviews: saved.wordReviews && typeof saved.wordReviews === 'object' ? saved.wordReviews : {},
      studyDays: Array.isArray(saved.studyDays) ? saved.studyDays : []
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
let diagnosticSession = null;
let reviewSession = null;
let mobileMenuOpen = false;
let toastTimer = null;
let deferredInstallPrompt = null;

function saveState() {
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

function recordStudy(minutes) {
  const key = dateKey();
  const existing = studyDayRecord(key);
  if (existing) existing.minutes += Math.max(1, minutes);
  else state.studyDays.push({ date: key, minutes: Math.max(1, minutes) });
  state.studyDays = state.studyDays.filter((entry) => entry.date >= addDaysToKey(key, -60));
  saveState();
}

function currentStreak() {
  const activeDays = new Set(state.studyDays.filter((item) => item.minutes > 0).map((item) => item.date));
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
    items.push({ key, label: weekdayNames[day.getDay()], minutes: item ? item.minutes : 0, isToday: offset === 0 });
  }
  return items;
}

function getLevel(levelId) {
  return course?.levels.find((item) => item.id === levelId) || course?.levels[0];
}

function getLessonsInLevel(levelId) {
  return (course?.lessons || []).filter((lesson) => lesson.level === levelId);
}

function getLevelProgress(levelId) {
  const lessons = getLessonsInLevel(levelId);
  const done = lessons.filter((lesson) => state.completedLessons[lesson.id]).length;
  return { done, total: lessons.length, percent: lessons.length ? Math.round((done / lessons.length) * 100) : 0 };
}

function totalCompleted() {
  return (course?.lessons || []).filter((lesson) => state.completedLessons[lesson.id]).length;
}

function allWords() {
  return (course?.lessons || []).flatMap((lesson) => (lesson.vocabulary || []).map((word) => ({ ...word, level: lesson.level, lessonTitle: lesson.title })));
}

function masteredWordsCount() {
  return Object.values(state.wordReviews).filter((item) => item && item.reps >= 3).length;
}

function dueWordsCount() {
  const today = dateKey();
  return allWords().filter((word) => !state.wordReviews[word.id] || state.wordReviews[word.id].dueDate <= today).length;
}

function recommendedLesson() {
  const lessons = course?.lessons || [];
  if (!lessons.length) return null;
  const levels = course.levels.map((level) => level.id);
  let startAt = levels.indexOf(state.profile.startLevel);
  if (startAt < 0) startAt = 0;
  const ordered = [...lessons].sort((a, b) => levels.indexOf(a.level) - levels.indexOf(b.level));
  for (let i = startAt; i < levels.length; i += 1) {
    const next = ordered.find((lesson) => lesson.level === levels[i] && !state.completedLessons[lesson.id]);
    if (next) return next;
  }
  return ordered.find((lesson) => !state.completedLessons[lesson.id]) || ordered[ordered.length - 1];
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
    lesson: ['جلسة التعلّم', lessonSession ? `${getLevel(findLesson(lessonSession.id)?.level)?.id || ''} · ${lessonSession.mode === 'quiz' ? 'تدريب تفاعلي' : findLesson(lessonSession.id)?.title || 'الدرس'}` : 'الدرس'],
    diagnostic: ['تحديد نقطة البداية', 'اختبر مستواك'],
    review: ['مراجعة قصيرة', 'مراجعة المفردات'],
    settings: ['تخصيص التجربة', 'الإعدادات']
  };
  return titles[currentView] || titles.dashboard;
}

function findLesson(id) {
  return course?.lessons.find((lesson) => lesson.id === id) || null;
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
  const currentGoal = Number(state.profile.dailyGoal) || 15;
  const viewContent = renderView();
  root.innerHTML = `
    ${mobileMenuOpen ? '<button class="mobile-scrim show" type="button" data-action="close-menu" aria-label="إغلاق القائمة"></button>' : '<button class="mobile-scrim" type="button" data-action="close-menu" aria-label="إغلاق القائمة"></button>'}
    <div class="layout-shell">
      <aside class="sidebar ${mobileMenuOpen ? 'open' : ''}" aria-label="التنقل الرئيسي">
        <div class="brand-lockup">
          <div class="brand-mark">${icon('logo', 25)}</div>
          <div><span class="brand-title">دويتش</span><span class="brand-subtitle">مساري الشخصي للألمانية</span></div>
        </div>
        <div class="nav-caption">مساحة التعلّم</div>
        <nav class="nav-list">
          ${navButton('dashboard', 'لوحتي', 'home', currentView === 'dashboard' || currentView === 'diagnostic')}
          ${navButton('tracks', 'المسارات', 'book', currentView === 'tracks' || currentView === 'level' || (currentView === 'lesson' && lessonSession?.mode !== 'quiz'))}
          ${navButton('review', 'مراجعة الكلمات', 'refresh', currentView === 'review', dueWordsCount())}
          ${navButton('settings', 'إعداداتي', 'settings', currentView === 'settings')}
        </nav>
        <div class="sidebar-spacer"></div>
        <div class="local-status"><div class="local-status-line"><span class="status-dot"></span> يعمل محليًا</div><p>تقدمك محفوظ على هذا الجهاز. لا نحتاج إلى حساب أو واجهة مدفوعة.</p></div>
        <div class="side-version"><span>منهج A0–B2</span><span>53 درسًا</span></div>
      </aside>
      <main class="main-panel">
        <header class="topbar">
          <div class="topbar-title">
            <button type="button" class="mobile-menu" data-action="toggle-menu" aria-label="فتح القائمة">${icon('menu', 19)}</button>
            <div><small>${section}</small><strong>${title}</strong></div>
          </div>
          <div class="topbar-actions">
            ${deferredInstallPrompt ? `<button type="button" class="button-outline button-small" data-action="install">تثبيت الأداة</button>` : ''}
            <span class="plan-chip">${icon('target', 14)}<span>هدفك اليومي ${currentGoal} دقيقة</span></span>
            <div class="avatar" title="${profileName}">${escapeHTML(initials)}</div>
          </div>
        </header>
        <div class="page-container">${viewContent}</div>
      </main>
    </div>`;
}

function render() {
  renderShell();
}

function renderView() {
  if (!course) return `<div class="empty-state"><div class="empty-state-icon">${icon('book')}</div><h2>جارٍ تجهيز المسار…</h2><p>لحظة واحدة، نقوم بتحميل دروس المنهج الكامل.</p></div>`;
  switch (currentView) {
    case 'tracks': return renderTracks();
    case 'level': return renderLevelPage();
    case 'lesson': return renderLesson();
    case 'diagnostic': return renderDiagnostic();
    case 'review': return renderReview();
    case 'settings': return renderSettings();
    default: return renderDashboard();
  }
}

function renderDashboard() {
  const lesson = recommendedLesson();
  const level = lesson ? getLevel(lesson.level) : getLevel('A0');
  const completed = totalCompleted();
  const total = course.lessons.length;
  const percent = total ? Math.round((completed / total) * 100) : 0;
  const thisWeek = weekStats().reduce((sum, day) => sum + day.minutes, 0);
  const goal = Number(state.profile.dailyGoal) || 15;
  const weekGoal = goal * 5;
  const name = escapeHTML(state.profile.name || 'متعلّم');
  const lessonTitle = lesson ? escapeHTML(lesson.title) : 'مراجعة ما تعلمته';
  const lessonId = lesson ? escapeHTML(lesson.id) : '';
  const chosenLevel = state.profile.startLevel || 'A0';

  return `
    <section class="hero-banner">
      <div class="hero-copy">
        <div class="hero-kicker"><span class="kicker-mark"></span><span>مسار يتقدّم معك — من A0 حتى B2</span></div>
        <h1>مرحبًا ${name}،<br><span>Deutsch على مقاسك.</span></h1>
        <p>تعلّم الألمانية بخطوات صغيرة عبر 53 درسًا تشمل الشرح والحوارات والتمارين ومفاتيح الإجابة، مع مراجعة مفردات تحفظ تقدمك على جهازك.</p>
        <div class="hero-actions">
          <button type="button" class="button-primary" data-action="open-lesson" data-id="${lessonId}">${icon('play', 17)} ${lesson && state.completedLessons[lesson.id] ? 'راجع درس اليوم' : 'تابع التعلّم'}</button>
          <button type="button" class="button-secondary" data-action="start-diagnostic">${icon('target', 16)} حدّد مستواك</button>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="art-circle"></div><div class="art-sun"></div><span class="hero-spark one">✳</span><span class="hero-spark two">✦</span>
        <div class="art-card"><div class="art-card-top"><span>WORTSCHATZ · 01</span><span class="art-card-dots"><i></i><i></i><i></i></span></div><div class="art-word">Guten Tag!</div><div class="art-translation">مرحبًا / نهارك سعيد</div><div class="art-divider"></div><div class="art-example">Wie geht es dir heute?</div></div>
        <div class="art-levels"><span>A0</span><span>→</span><span>B2</span></div>
      </div>
    </section>

    <section class="stats-grid" aria-label="إحصاءات التقدم">
      <div class="stat-card"><div class="stat-icon mint">${icon('chart', 20)}</div><div><span class="stat-value">${completed}<span class="stat-foot"> / ${total}</span></span><span class="stat-label">دروس مكتملة · ${percent}% من المنهج</span></div></div>
      <div class="stat-card"><div class="stat-icon gold">${icon('flame', 20)}</div><div><span class="stat-value">${currentStreak()}</span><span class="stat-label">أيام متتالية من التعلّم</span></div></div>
      <div class="stat-card"><div class="stat-icon coral">${icon('bookmark', 20)}</div><div><span class="stat-value">${masteredWordsCount()}</span><span class="stat-label">كلمات راسخة في ذاكرتك</span></div></div>
      <div class="stat-card"><div class="stat-icon blue">${icon('star', 20)}</div><div><span class="stat-value">${Number(state.xp) || 0}</span><span class="stat-label">نقاط التعلّم المكتسبة</span></div></div>
    </section>

    <section class="section-block">
      <div class="section-heading"><div><h2>رحلتك من A0 إلى B2</h2><p>خمس محطات واضحة — اختر نقطة البداية أو تقدّم بالتدريج.</p></div><button class="button-quiet" type="button" data-action="navigate" data-view="tracks">عرض كل الدروس ${icon('arrowLeft', 15)}</button></div>
      <div class="level-grid">${course.levels.map((item) => renderLevelCard(item, chosenLevel)).join('')}</div>
    </section>

    <section class="dashboard-bottom">
      <div class="panel">
        <div class="week-panel-head"><div><h3 class="panel-title">إيقاعك هذا الأسبوع</h3><p class="panel-subtitle">كل دقيقة صغيرة تصنع فرقًا.</p></div><div class="week-total"><strong>${thisWeek}</strong><span>دقيقة</span></div></div>
        <div class="week-chart">${renderWeekChart()}</div>
        <div class="week-footnote">${icon('calendar', 15)} هدفك الأسبوعي المقترح ${weekGoal} دقيقة · ${thisWeek >= weekGoal ? 'أحسنت، حققت هدفك!' : `أنجزت ${Math.min(100, Math.round((thisWeek / Math.max(weekGoal, 1)) * 100))}% منه`}</div>
      </div>
      <div class="panel nudge-panel">
        <div class="nudge-badge">${icon('spark', 19)}</div>
        <h3>${lesson ? `خطوتك التالية: ${lessonTitle}` : 'أحسنت! أتممت كل دروس المنهج.'}</h3>
        <p>${lesson ? `${level?.id} · ${level?.name} — ${escapeHTML(lesson.objective)}` : 'يمكنك إعادة اختبار تحديد المستوى أو مراجعة أي وحدة من صفحة المسارات.'}</p>
        <button type="button" class="button-outline" data-action="open-lesson" data-id="${lessonId}">${icon('play', 15)} ${lesson ? `ابدأ درس ${level?.id}` : 'راجع آخر درس'}</button>
      </div>
    </section>

    <div class="source-note">${icon('info', 16)}<span><strong>عن المحتوى:</strong> يضم التطبيق جميع وحدات A0–B2 الـ53، مع حوارات وتمارين ومفاتيح إجابة. الشروح والأمثلة هنا مواد تعليمية أصلية وليست نسخًا حرفيًا من صفحات الكتب. <a href="./data/source-plan.md">خريطة المنهج والمصادر</a>.</span></div>`;
}

function renderWeekChart() {
  const days = weekStats();
  const maxMinutes = Math.max(30, Number(state.profile.dailyGoal) || 15);
  return days.map((day) => {
    const height = day.minutes ? Math.max(6, Math.min(100, (day.minutes / maxMinutes) * 100)) : 3;
    return `<div class="chart-day ${day.isToday ? 'today' : ''}"><div class="chart-bar-wrap"><span class="chart-bar" style="height:${height}%"></span></div><span>${day.label}</span></div>`;
  }).join('');
}

function renderLevelCard(level, suggestedLevel) {
  const progress = getLevelProgress(level.id);
  const isSuggested = level.id === suggestedLevel;
  const theme = `theme-${level.theme}`;
  const stateText = progress.percent === 100 ? 'مكتمل' : isSuggested ? 'الخطوة التالية' : progress.done ? 'قيد التقدّم' : 'جاهز للاستكشاف';
  return `<article class="level-card ${theme} ${isSuggested ? 'suggested' : ''}">
    <div class="level-top"><span class="level-token">${level.id}</span><span class="level-state">${stateText}</span></div>
    <h3>${escapeHTML(level.name)}</h3><p>${escapeHTML(level.subtitle)}</p>
    <div class="level-progress"><span>${progress.done} من ${progress.total} درس</span><span>${progress.percent}%</span></div>
    <div class="progress-track"><span style="width:${progress.percent}%"></span></div>
    <div class="level-bottom"><span>${escapeHTML(level.goal)}</span><button type="button" data-action="open-level" data-level="${level.id}" aria-label="افتح ${level.id}">افتح ${icon('arrowLeft', 14)}</button></div>
  </article>`;
}

function renderTracks() {
  return `<div class="page-header"><div><h1>المسارات التعليمية</h1><p>53 درسًا كاملًا من A0 حتى B2. افتح أي وحدة لقراءة المفردات والقواعد والحوارات والتمارين ومفتاح الإجابات.</p></div><div class="page-header-actions"><button type="button" class="button-outline" data-action="start-diagnostic">${icon('target', 16)} اختبار تحديد المستوى</button></div></div>
    <div>${course.levels.map((level) => renderTrackLevel(level)).join('')}</div>
    <div class="source-note">${icon('info', 16)}<span>تُعرض الدروس داخل التطبيق من ملفات Markdown في مجلد <b>content/</b>، ويُعاد بناء حزمة البيانات محليًا بالأمر <code>python3 tools/build_course.py</code>. الشروح والتمارين المضافة أصلية؛ راجع <a href="./data/source-plan.md">خريطة المنهج والمصادر</a>.</span></div>`;
}

function renderTrackLevel(level) {
  const lessons = getLessonsInLevel(level.id);
  const progress = getLevelProgress(level.id);
  return `<section class="track-level ${`theme-${level.theme}`}">
    <div class="track-level-head"><div class="track-level-label"><span class="level-token">${level.id}</span><div><h2>${escapeHTML(level.name)} <span style="color:#99a39b;font-weight:400">· ${escapeHTML(level.subtitle)}</span></h2><p>${escapeHTML(level.goal)}</p></div></div><span>${progress.done}/${progress.total} مكتمل</span></div>
    ${lessons.length ? lessons.map((lesson, i) => renderLessonRow(lesson, i)).join('') : '<div class="empty-state">لا توجد دروس مسجلة لهذا المستوى.</div>'}
  </section>`;
}

function renderLessonRow(lesson, index) {
  const completed = state.completedLessons[lesson.id];
  const duration = lesson.durationLabel || `${lesson.minutes} دقيقة`;
  return `<div class="lesson-row ${completed ? 'is-complete' : ''}"><div class="lesson-row-number">${completed ? icon('check', 16) : String(index + 1).padStart(2, '0')}</div><div><h3>${escapeHTML(lesson.title)}</h3><p>${escapeHTML(lesson.objective)} · ${escapeHTML(duration)}</p></div><button type="button" class="button-outline" data-action="open-lesson" data-id="${escapeHTML(lesson.id)}">${completed ? 'إعادة الدرس' : 'افتح الدرس'} ${icon('arrowLeft', 14)}</button></div>`;
}

function renderLevelPage() {
  const level = getLevel(selectedLevel);
  if (!level) return renderTracks();
  const progress = getLevelProgress(level.id);
  const transitionCheck = level.id === 'A0' ? renderA0TransitionCheck() : '';
  return `<button class="lesson-back" type="button" data-action="navigate" data-view="tracks">${icon('arrow', 15)} عودة إلى كل المسارات</button>
    <div class="page-header"><div><span class="level-token theme-${level.theme}">${level.id}</span><h1 style="margin-top:10px">${escapeHTML(level.name)} — ${escapeHTML(level.subtitle)}</h1><p>${escapeHTML(level.description)} ${escapeHTML(level.goal)}</p></div><div class="page-header-actions"><span class="plan-chip">${icon('chart', 14)} ${progress.done}/${progress.total} درس مكتمل</span></div></div>
    <section class="track-level theme-${level.theme}">${getLessonsInLevel(level.id).map((lesson, i) => renderLessonRow(lesson, i)).join('')}</section>${transitionCheck}`;
}

function renderA0TransitionCheck() {
  const check = course?.a0TransitionCheck;
  if (!check) return '';
  return `<section class="transition-check-panel"><div class="transition-check-heading"><div><small>A0 · ABSCHLUSSTEST</small><h2>${escapeHTML(check.title)}</h2><p>عشرة أسئلة لمراجعة الوحدات التأسيسية. جرّب الحل أولًا، ثم افتح مفتاح الإجابات؛ الدرجة المقترحة للانتقال إلى A1 هي 7/10.</p></div><span>${escapeHTML(check.durationLabel)}</span></div><article class="lesson-document" dir="rtl">${check.contentHtml}</article></section>`;
}

function openLesson(id) {
  const lesson = findLesson(id);
  if (!lesson) {
    showToast('تعذّر العثور على هذا الدرس؛ أعد تحميل صفحة المسارات.');
    return;
  }
  lessonSession = { id, mode: 'overview', questionIndex: 0, selected: null, checked: false, correct: 0, answers: [], startedAt: Date.now(), completed: false };
  currentView = 'lesson';
  mobileMenuOpen = false;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderLesson() {
  if (!lessonSession) return `<div class="empty-state"><div class="empty-state-icon">${icon('book')}</div><h2>اختر درسًا لتبدأ</h2><p>افتح أحد المسارات التعليمية للعثور على الدرس المناسب.</p><button type="button" class="button-primary" data-action="navigate" data-view="tracks">استعرض المسارات</button></div>`;
  const lesson = findLesson(lessonSession.id);
  if (!lesson) return `<div class="empty-state"><h2>لم نعثر على هذا الدرس</h2><button type="button" class="button-outline" data-action="navigate" data-view="tracks">العودة للمسارات</button></div>`;
  if (lessonSession.mode === 'quiz') return renderLessonQuiz(lesson);
  if (lessonSession.mode === 'result') return renderLessonResult(lesson);
  return renderLessonOverview(lesson);
}

function renderLessonOverview(lesson) {
  const level = getLevel(lesson.level) || { id: lesson.level, theme: 'sage' };
  const words = lesson.vocabulary || [];
  const completed = Boolean(state.completedLessons[lesson.id]);
  const duration = lesson.durationLabel || `${lesson.minutes} دقيقة`;
  const vocabularyDrawer = words.length ? `<section class="lesson-section lesson-vocab-section"><details class="vocab-review-drawer"><summary><span><small>WORTSCHATZ · بطاقات المراجعة</small><strong>تدرّب على مفردات الدرس</strong></span><span class="count">${words.length} كلمة/عبارة</span></summary><div class="vocab-grid">${words.map((word) => `<article class="vocab-card"><div class="vocab-card-top"><div class="german-word" dir="ltr">${escapeHTML(word.word)}</div><div class="word-controls"><button class="icon-button" type="button" data-action="pronounce" data-word="${escapeHTML(word.word)}" title="استمع للنطق" aria-label="استمع إلى ${escapeHTML(word.word)}">${icon('volume', 14)}</button><button class="icon-button" type="button" data-action="quick-word-known" data-word-id="${escapeHTML(word.id)}" title="أضف للمراجعة" aria-label="أضف ${escapeHTML(word.word)} للمراجعة">${icon(state.wordReviews[word.id] ? 'check' : 'bookmark', 14)}</button></div></div><div class="word-translation">${escapeHTML(word.translation)}</div>${word.example ? `<div class="word-example" dir="ltr">${escapeHTML(word.example)}</div>` : ''}</article>`).join('')}</div></details></section>` : '';
  return `<button class="lesson-back" type="button" data-action="back-to-level">${icon('arrow', 15)} عودة إلى ${lesson.level}</button>
    <section class="lesson-hero"><div><div class="lesson-level-tag"><span class="level-token theme-${level.theme}">${level.id}</span><span>محتوى الدرس الكامل · ${escapeHTML(duration)}</span></div><h1>${escapeHTML(lesson.title)}</h1><p>${escapeHTML(lesson.objective)}</p></div><div class="lesson-time">${icon('clock', 16)} ${escapeHTML(duration)}</div></section>
    <div class="lesson-layout">
      <div class="lesson-main-column">
        <section class="lesson-section lesson-content-panel"><div class="lesson-section-heading"><div><small>LEKTION · الدرس الكامل</small><h2>الشرح والحوارات والتمارين</h2></div><span class="count">مفتاح الإجابات قابل للفتح</span></div><article class="lesson-document" dir="rtl">${lesson.contentHtml || '<p>محتوى الدرس غير متاح. أعد بناء بيانات المنهج.</p>'}</article></section>
        ${vocabularyDrawer}
        <section class="lesson-finish-panel"><div><strong>${completed ? 'هل راجعت الدرس مرة أخرى؟' : 'أنهيت قراءة الدرس وحل التمارين؟'}</strong><span>يُحفظ التقدم ووقت الدراسة على هذا الجهاز فقط.</span></div><button type="button" class="button-primary" data-action="complete-lesson">${completed ? 'سجّل مراجعة الدرس' : 'سجّل إكمال الدرس'} ${icon('check', 16)}</button></section>
      </div>
      <aside class="lesson-aside">
        <div class="study-aside-card"><div class="study-objective">${icon('target', 18)}</div><h3>هدف هذا الدرس</h3><p>${escapeHTML(lesson.objective)}</p></div>
        <div class="study-aside-card"><h3>طريقة الدراسة</h3><p>اقرأ الشرح والحوار، ثم حلّ التمارين قبل فتح مفتاح الإجابات. سجّل إكمال الدرس في نهاية الصفحة.</p></div>
        <div class="study-aside-card"><h3>التقدّم محلي</h3><p>${completed ? 'هذا الدرس مسجّل ضمن إنجازاتك.' : 'عند إنهائه سيُحفظ التقدم ووقت الدراسة على هذا الجهاز.'} بطاقات المفردات متاحة للمراجعة أيضًا.</p></div>
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
    return `<button type="button" class="${classes}" data-action="select-lesson-answer" data-index="${index}" ${lessonSession.checked ? 'disabled' : ''}><span class="option-letter">${letters[index] || index + 1}</span><span class="option-text" dir="auto">${escapeHTML(option)}</span>${lessonSession.checked && index === q.answerIndex ? `<span class="option-check">${icon('check', 17)}</span>` : ''}</button>`;
  }).join('');
  const feedback = lessonSession.checked ? `<div class="quiz-feedback ${isCorrect ? 'good' : 'try-again'}">${isCorrect ? '<strong>إجابة صحيحة!</strong> ' : '<strong>ليس تمامًا.</strong> '}${escapeHTML(q.explanation)}</div>` : '';
  const nextLabel = current === total ? 'عرض النتيجة' : 'السؤال التالي';
  return `<div class="quiz-wrap"><button class="lesson-back" type="button" data-action="quiz-exit">${icon('arrow', 15)} العودة إلى شرح الدرس</button>
    <div class="quiz-top"><div style="flex:1"><div class="quiz-progress-label">السؤال <strong>${current}</strong> من ${total}</div><div class="quiz-progress"><span style="width:${percent}%"></span></div></div><span class="plan-chip">${icon('clock', 14)} ${lesson.minutes} د</span></div>
    <section class="quiz-card"><div class="quiz-card-kicker"><span></span>تدريب تفاعلي · ${escapeHTML(lesson.level)}</div><h1 dir="auto">${escapeHTML(q.prompt)}</h1><div class="quiz-options">${options}</div>${feedback}<div class="quiz-card-actions"><button type="button" class="button-quiet" data-action="quiz-exit">إنهاء التدريب</button>${lessonSession.checked ? `<button type="button" class="button-primary" data-action="next-lesson-question">${nextLabel} ${icon('arrowLeft', 16)}</button>` : `<button type="button" class="button-primary" data-action="check-lesson-answer" ${lessonSession.selected === null ? 'disabled' : ''}>تحقّق من الإجابة ${icon('check', 16)}</button>`}</div></section>
  </div>`;
}

function renderLessonResult(lesson) {
  const total = lesson.quiz.length;
  const score = total ? Math.round((lessonSession.correct / total) * 100) : 0;
  const title = score >= 80 ? 'ممتاز! خطوة قوية إلى الأمام' : score >= 50 ? 'أحسنت، التقدّم يأتي بالممارسة' : 'بداية جيدة — أعد المحاولة عندما تحب';
  const message = score >= 80 ? 'أجبت عن معظم الأسئلة بشكل صحيح. يمكنك متابعة المستوى أو تثبيت المفردات بالمراجعة.' : 'راجع الشرح والأمثلة ثم جرّب مرة أخرى. كل محاولة تساعد على تثبيت المعلومة.';
  return `<div class="quiz-wrap"><section class="result-card"><div class="result-medal">${icon(score >= 80 ? 'trophy' : 'spark', 31)}</div><div class="score-ring">${score}%</div><h1>${title}</h1><p>${message}<br>إجابات صحيحة: ${lessonSession.correct} من ${total} · اكتسبت نقاط تعلّم وأُضيف وقت الجلسة إلى سجلّك.</p><div class="result-actions"><button type="button" class="button-primary" data-action="navigate" data-view="dashboard">العودة إلى لوحتي ${icon('arrowLeft', 16)}</button><button type="button" class="button-outline" data-action="retake-lesson">أعد الدرس ${icon('refresh', 15)}</button><button type="button" class="button-quiet" data-action="navigate" data-view="review">راجع الكلمات ${icon('book', 15)}</button></div></section></div>`;
}

function beginQuiz() {
  if (!lessonSession) return;
  lessonSession.mode = 'quiz';
  lessonSession.questionIndex = 0;
  lessonSession.selected = null;
  lessonSession.checked = false;
  lessonSession.correct = 0;
  lessonSession.answers = [];
  render();
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
  render();
}

function finishLesson(lesson) {
  if (!lessonSession || lessonSession.completed) return;
  const score = Math.round((lessonSession.correct / Math.max(lesson.quiz.length, 1)) * 100);
  const previous = state.completedLessons[lesson.id];
  state.completedLessons[lesson.id] = {
    score,
    completedAt: dateKey(),
    attempts: (previous?.attempts || 0) + 1
  };
  state.xp = (Number(state.xp) || 0) + Math.max(5, Math.round(8 + score / 10));
  recordStudy(lesson.minutes || 1);
  lessonSession.completed = true;
  lessonSession.mode = 'result';
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function completeLesson() {
  const lesson = lessonSession ? findLesson(lessonSession.id) : null;
  if (!lesson) return;
  const previous = state.completedLessons[lesson.id];
  state.completedLessons[lesson.id] = {
    score: previous?.score ?? null,
    completedAt: dateKey(),
    attempts: (previous?.attempts || 0) + 1
  };
  state.xp = (Number(state.xp) || 0) + (previous ? 3 : 8);
  recordStudy(lesson.minutes || 1);
  saveState();
  selectedLevel = lesson.level;
  currentView = 'level';
  lessonSession = null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast(previous ? 'سُجّلت مراجعة الدرس وأُضيف وقتها إلى تقدمك.' : 'أُكمل الدرس وسُجّل تقدمك.');
}

function startDiagnostic() {
  diagnosticSession = { index: 0, selected: null, checked: false, correct: 0, result: null };
  currentView = 'diagnostic';
  mobileMenuOpen = false;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDiagnostic() {
  if (!diagnosticSession) startDiagnostic();
  if (diagnosticSession.result) return renderDiagnosticResult();
  const q = course.diagnostic[diagnosticSession.index];
  const total = course.diagnostic.length;
  const current = diagnosticSession.index + 1;
  const letters = ['أ', 'ب', 'ج', 'د'];
  const options = q.options.map((option, index) => {
    let classes = 'quiz-option';
    if (diagnosticSession.selected === index) classes += ' selected';
    if (diagnosticSession.checked && index === q.answerIndex) classes += ' correct';
    else if (diagnosticSession.checked && index === diagnosticSession.selected) classes += ' incorrect';
    return `<button type="button" class="${classes}" data-action="select-diagnostic-answer" data-index="${index}" ${diagnosticSession.checked ? 'disabled' : ''}><span class="option-letter">${letters[index] || index + 1}</span><span class="option-text" dir="auto">${escapeHTML(option)}</span>${diagnosticSession.checked && index === q.answerIndex ? `<span class="option-check">${icon('check', 17)}</span>` : ''}</button>`;
  }).join('');
  const feedback = diagnosticSession.checked ? `<div class="quiz-feedback ${diagnosticSession.selected === q.answerIndex ? 'good' : 'try-again'}">${diagnosticSession.selected === q.answerIndex ? '<strong>صحيح.</strong> ' : '<strong>الإجابة الصحيحة موضحة.</strong> '}${escapeHTML(q.explanation)}</div>` : '';
  return `<div class="diagnostic-shell"><div class="page-header"><div><h1>اختبار تحديد نقطة البداية</h1><p>خمس أسئلة سريعة تساعد على اقتراح مستوى انطلاق مناسب.</p></div></div><div class="diagnostic-info">${icon('info', 18)}<span>هذا اختبار تمهيدي قصير وليس تقييمًا رسميًا. يمكنك دائمًا تغيير نقطة البداية من إعداداتك أو استكشاف كل المستويات.</span></div>
    <div class="quiz-top"><div style="flex:1"><div class="quiz-progress-label">السؤال <strong>${current}</strong> من ${total}</div><div class="quiz-progress"><span style="width:${Math.round((current / total) * 100)}%"></span></div></div></div>
    <section class="quiz-card"><div class="quiz-card-kicker"><span></span>اختبار تحديد المستوى</div><h1 dir="auto">${escapeHTML(q.prompt)}</h1><div class="quiz-options">${options}</div>${feedback}<div class="quiz-card-actions"><button type="button" class="button-quiet" data-action="navigate" data-view="dashboard">ليس الآن</button>${diagnosticSession.checked ? `<button type="button" class="button-primary" data-action="next-diagnostic-question">${current === total ? 'اعرض اقتراحي' : 'السؤال التالي'} ${icon('arrowLeft', 16)}</button>` : `<button type="button" class="button-primary" data-action="check-diagnostic-answer" ${diagnosticSession.selected === null ? 'disabled' : ''}>تحقّق ${icon('check', 16)}</button>`}</div></section></div>`;
}

function finishDiagnostic() {
  const recommendedIndex = Math.min(diagnosticSession.correct, course.levels.length - 1);
  const level = course.levels[recommendedIndex];
  state.profile.startLevel = level.id;
  state.profile.placementScore = diagnosticSession.correct;
  state.profile.placementDate = dateKey();
  saveState();
  diagnosticSession.result = { level, score: diagnosticSession.correct };
  render();
}

function renderDiagnosticResult() {
  const { level, score } = diagnosticSession.result;
  return `<div class="diagnostic-shell"><section class="diagnostic-result"><div class="diagnostic-level">${level.id}</div><h2>اقتراح البداية: ${escapeHTML(level.name)}</h2><p>${escapeHTML(level.goal)} حصلت على ${score} من ${course.diagnostic.length} إجابات صحيحة. هذا تقدير مبدئي قابل للتغيير، وليس شهادة أو اختبارًا معياريًا.</p><div class="result-actions"><button type="button" class="button-primary" data-action="open-suggested">ابدأ من ${level.id} ${icon('arrowLeft', 16)}</button><button type="button" class="button-outline" data-action="navigate" data-view="settings">عدّل إعداداتي</button><button type="button" class="button-quiet" data-action="navigate" data-view="tracks">استكشف كل المستويات</button></div></section></div>`;
}

function startReviewSession() {
  const all = allWords();
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
  const example = reviewSession.revealed ? `<div class="flash-example">${escapeHTML(word.example)}</div>` : '';
  return `<section class="flashcard"><small>${escapeHTML(word.level)} · ${escapeHTML(word.lessonTitle)}</small><div class="flash-word">${escapeHTML(word.word)}</div><div class="flash-translation">${translation}</div>${example}
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
  if (reviewSession.index >= reviewSession.cards.length) reviewSession.done = true;
  render();
}

function renderSettings() {
  const profile = state.profile;
  const goals = [10, 15, 20, 30];
  const focusOptions = ['المحادثة', 'السفر', 'العمل', 'الدراسة', 'الحياة اليومية'];
  return `<div class="page-header"><div><h1>إعداداتك، على مقاسك</h1><p>عدّل الاسم والهدف ونقطة البداية. تحفظ هذه النسخة بياناتك في متصفح هذا الجهاز فقط.</p></div></div>
    <div class="settings-layout">
      <section class="panel"><h2 class="panel-title">خطة التعلّم</h2><p class="panel-subtitle">تغييراتك تؤثر في توصيات المسار ولا تُرسل إلى خادم خارجي.</p>
        <form id="settings-form" class="settings-form" style="margin-top:19px">
          <div class="field"><label for="profile-name">كيف نناديك؟</label><input id="profile-name" name="name" maxlength="32" value="${escapeHTML(profile.name || '')}" placeholder="اسمك أو لقبك"><small>يظهر الاسم في لوحة المتابعة فقط.</small></div>
          <div class="field"><label for="daily-goal">الوقت الذي يناسبك يوميًا</label><select id="daily-goal" name="dailyGoal">${goals.map((goal) => `<option value="${goal}" ${Number(profile.dailyGoal) === goal ? 'selected' : ''}>${goal} دقيقة</option>`).join('')}</select></div>
          <div class="field"><label for="learning-focus">ما هدفك الأقرب؟</label><select id="learning-focus" name="focus">${focusOptions.map((focus) => `<option value="${focus}" ${profile.focus === focus ? 'selected' : ''}>${focus}</option>`).join('')}</select></div>
          <div class="field"><label for="start-level">نقطة البداية المفضلة</label><select id="start-level" name="startLevel">${course.levels.map((level) => `<option value="${level.id}" ${profile.startLevel === level.id ? 'selected' : ''}>${level.id} — ${escapeHTML(level.name)}</option>`).join('')}</select><small>يمكنك فتح جميع المستويات من صفحة المسارات في أي وقت.</small></div>
          <div class="form-actions"><button type="submit" class="button-primary">حفظ الإعدادات ${icon('check', 16)}</button><button type="button" class="button-quiet" data-action="navigate" data-view="dashboard">إلغاء</button></div>
        </form>
      </section>
      <aside class="panel"><h2 class="panel-title">الخصوصية والنسخ الاحتياطي</h2><p class="panel-subtitle">مصممة لتبقى بسيطة ومجانية.</p>
        <div class="privacy-list"><div class="privacy-row">${icon('shield', 17)}<span>لا يوجد حساب أو قاعدة بيانات أو API مدفوع في التطبيق.</span></div><div class="privacy-row">${icon('bookmark', 17)}<span>التقدم والمفردات محفوظة على هذا الجهاز داخل المتصفح.</span></div><div class="privacy-row">${icon('download', 17)}<span>صدّر نسخة JSON إذا أردت نقل تقدمك إلى جهاز آخر يدويًا.</span></div></div>
        <div class="data-tools"><button type="button" class="button-outline" data-action="export-progress">${icon('download', 16)} تنزيل نسخة احتياطية</button><label class="button-outline file-label">${icon('upload', 16)} استيراد نسخة JSON<input id="restore-file" type="file" accept="application/json,.json"></label><button type="button" class="button-danger" data-action="reset-progress">${icon('trash', 16)} مسح التقدم من هذا الجهاز</button></div>
        <div class="warning-box">عند نشر المشروع على GitHub/Vercel، تأكد أن إذن الكتب يسمح بتضمين محتواها في الموقع المنشور. اجعل المستودع خاصًا أو استخدم محتوى مرخّصًا إذا لزم ذلك.</div>
      </aside>
    </div>`;
}

function handleClick(event) {
  const button = event.target.closest('[data-action]');
  if (!button) return;
  const action = button.dataset.action;
  switch (action) {
    case 'navigate':
      currentView = button.dataset.view || 'dashboard';
      if (currentView === 'review') startReviewSession();
      mobileMenuOpen = false;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'toggle-menu':
      mobileMenuOpen = !mobileMenuOpen;
      render();
      break;
    case 'close-menu':
      mobileMenuOpen = false;
      render();
      break;
    case 'open-lesson': openLesson(button.dataset.id); break;
    case 'open-level':
      selectedLevel = button.dataset.level || 'A0';
      currentView = 'level';
      mobileMenuOpen = false;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'start-diagnostic': startDiagnostic(); break;
    case 'open-suggested':
      const next = recommendedLesson();
      if (next) openLesson(next.id);
      else { currentView = 'tracks'; render(); }
      break;
    case 'complete-lesson': completeLesson(); break;
    case 'begin-quiz': beginQuiz(); break;
    case 'select-lesson-answer':
      if (lessonSession && !lessonSession.checked) { lessonSession.selected = Number(button.dataset.index); render(); }
      break;
    case 'check-lesson-answer': checkLessonAnswer(); break;
    case 'next-lesson-question': nextLessonQuestion(); break;
    case 'quiz-exit':
      if (lessonSession) lessonSession.mode = 'overview';
      render();
      break;
    case 'retake-lesson':
      if (lessonSession) openLesson(lessonSession.id);
      break;
    case 'back-to-level':
      if (lessonSession) selectedLevel = findLesson(lessonSession.id)?.level || 'A0';
      currentView = 'level';
      render();
      break;
    case 'select-diagnostic-answer':
      if (diagnosticSession && !diagnosticSession.checked) { diagnosticSession.selected = Number(button.dataset.index); render(); }
      break;
    case 'check-diagnostic-answer':
      if (diagnosticSession && !diagnosticSession.checked && diagnosticSession.selected !== null) {
        const q = course.diagnostic[diagnosticSession.index];
        diagnosticSession.checked = true;
        if (diagnosticSession.selected === q.answerIndex) diagnosticSession.correct += 1;
        render();
      }
      break;
    case 'next-diagnostic-question':
      if (!diagnosticSession?.checked) break;
      if (diagnosticSession.index >= course.diagnostic.length - 1) finishDiagnostic();
      else {
        diagnosticSession.index += 1;
        diagnosticSession.selected = null;
        diagnosticSession.checked = false;
        render();
      }
      break;
    case 'flip-card':
      if (reviewSession) { reviewSession.revealed = true; render(); }
      break;
    case 'rate-word': rateCurrentWord(button.dataset.rating); break;
    case 'pronounce': pronounce(button.dataset.word); break;
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
  window.speechSynthesis.cancel();
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
  state.profile.dailyGoal = Number(form.get('dailyGoal')) || 15;
  state.profile.focus = String(form.get('focus') || 'المحادثة');
  state.profile.startLevel = String(form.get('startLevel') || 'A0');
  saveState();
  currentView = 'dashboard';
  render();
  showToast('حُفظت إعداداتك على هذا الجهاز.');
}

function handleChange(event) {
  if (event.target.id !== 'restore-file' || !event.target.files?.[0]) return;
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      if (!parsed || typeof parsed !== 'object' || !parsed.profile || typeof parsed.completedLessons !== 'object') throw new Error('invalid');
      const base = freshState();
      state = {
        ...base,
        ...parsed,
        profile: { ...base.profile, ...parsed.profile },
        completedLessons: parsed.completedLessons || {},
        wordReviews: parsed.wordReviews || {},
        studyDays: Array.isArray(parsed.studyDays) ? parsed.studyDays : []
      };
      saveState();
      currentView = 'dashboard';
      render();
      showToast('تم استيراد النسخة الاحتياطية.');
    } catch {
      showToast('هذا الملف ليس نسخة احتياطية صالحة من الأداة.');
    }
  };
  reader.readAsText(file);
}

function exportProgress() {
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
  state = freshState();
  saveState();
  currentView = 'dashboard';
  lessonSession = null;
  diagnosticSession = null;
  reviewSession = null;
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

root.addEventListener('click', handleClick);
root.addEventListener('submit', handleSubmit);
root.addEventListener('change', handleChange);

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (course) render();
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenuOpen) {
    mobileMenuOpen = false;
    render();
  }
});

async function startApp() {
  renderShell();
  try {
    const response = await fetch('./data/course.json');
    if (!response.ok) throw new Error('course data unavailable');
    course = await response.json();
    render();
    if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1')) {
      navigator.serviceWorker.register('./service-worker.js').catch(() => {});
    }
  } catch (error) {
    root.innerHTML = `<main class="page-container"><div class="empty-state"><div class="empty-state-icon">${icon('info')}</div><h2>تعذّر تحميل بيانات الدروس</h2><p>شغّل الموقع عبر خادم محلي (مثل python3 -m http.server) بدل فتح الملف مباشرة، ثم أعد المحاولة.</p></div></main>`;
  }
}

startApp();
