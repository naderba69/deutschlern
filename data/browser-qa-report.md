# تقرير اختبار المتصفح والعمل دون اتصال — 2026-10-10

## الفحوص التراكمية — CR64 (`daf-pedagogical-tricks-quiz-reading-mistake-bank-review` — شفرات وحيل `DaF` الـ`53`، ومشغلات الاستماع الـ`36/36` ونصوص القراءة الـ`94` داخل الاختبارات، وشريط `Umlaute` والفحص الفوري للمسودات، ودفتر الأخطاء الذكي، والترديد الصوتي السطري الـ`474`)

- **PASS:** البناء والتحقق (`tools/build_course.py` و`tools/verify_course.py`)، و**64 حارس مراجعة** (بما فيها `tools/test_daf_pedagogical_tricks_quiz_reading_mistake_bank_review.py` الجديد)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,419,161 بايت**؛ **53 درسًا مزودًا بصندوق شفرات الإتقان السريع وحيل `DaF` وتنبيهات التداخل اللغوي (`<details class="lesson-daf-tricks-box">`)**، **428 تمرينًا مزودًا بمساحة تطبيق ذاتي وشريط حروف ألمانية (`ä, ö, ü, ß, Ä, Ö, Ü`) وفحص ذاتي فوري للمسودة (`analyzeExerciseDraftAgainstKey`) ومفتاح تحقق فوري**، **61 قسم حوار مزودًا بدليل تقمّص الأدوار**، **48 قسم استماع محجوب النص قبل المحاولة**، **754 مفردة مشروحة بالكامل مع شارات جنس الاسم عالية التباين (`der / die / das` عبر `.noun-gender-badge`) وتدريب الإملاء النشط (`#flash-spell-input`)**، **540 سؤال تقييم (منها `36/36` سؤال استماع بمشغّل صوتي فوري `.quiz-audio-helper` و`94` سؤال قراءة/حوار بنص مرجعي قابل للطي `<details class="quiz-reading-helper">` وتوزيع متوازن لمواقع الخيارات الصحيحة)**، **دفتر أخطاء ذكي مستمر (`state.mistakeBank`)**، و**474 زر استماع سطري مباشر (`.transcript-segment-btn`) عبر 217 أصلًا صوتيًا**.
- **المتصفح (تغطية شاملة 100% لكامل المشروع دون عينات):** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v114` (`deutsch-pfad-v114`) بعد تحديث `app.js` و`styles.css`، دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات ومسودات التمارين ودفتر الأخطاء وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **axe والعرض الضيق (فحص شامل لكامل الدروس الـ53 وبوابة A0 والمستويات الـ5 دون أخذ عينات):** **349 حالة شاشة كاملة في `axe-core`** (`174` حالة عند `1440×900` و`175` حالة عند `390×844`) بـ**صفر مخالفات (`wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `best-practice`) وصفر فحوص غير حاسمة (`0` قواعد و`0` عقد)**؛ و**348 حالة عرض ضيق شاملة لكامل المشروع** (`174` حالة في `320×900` عمودي و`174` حالة في `568×320` أفقي) بـ**صفر تجاوز أفقي**. ليست شهادة WCAG أو اختبار أجهزة حقيقية.

[تفاصيل مراجعة شفرات وحيل DaF ونصوص الاختبارات المرجعية ودفتر الأخطاء الذكي والترديد السطري](reviews/daf-pedagogical-tricks-quiz-reading-mistake-bank-review.md).

---

## إيصال رفع CR63 — 2026-10-10

- **الالتزام المرفوع:** `d3038336827f6f9c5cbcfa812eaa63c2303a9de4` (`d303833`) وإيصال التسليم `dd82bbe5a846d948b71a4b0a3696d3ed8580e18f` (`dd82bbe`) على الفرع الوحيد `arena/01a1036f-deutschlern`.
- **معاينة Vercel:** `Deployment has completed` (`state: success`، Deployment ID `6981101156`، Status ID `19565972313`، المعاينة `https://deutschlern-45e3ejxha-balinader-2671s-projects.vercel.app`).
- **PASS:** 63 حارس مراجعة (`tools/test_exercise_self_practice_and_study_diagnostics_review.py`)، و5 مجموعات Node، و5 مجموعات Chromium عبر 349 حالة `axe-core` و348 حالة عرض ضيق بصفر مخالفات وصفر تجاوز (`deutsch-pfad-v112`).

## الفحوص التراكمية — CR63 (`exercise-self-practice-and-study-diagnostics-review` — مساحات الحل والتطبيق الذاتي للتمارين الـ`428`، ودليل تقمّص الأدوار للحوارات الـ`61`، وتشخيص الأخطاء ومؤشرات التمكّن التراكمية)

- **PASS:** البناء والتحقق (`tools/build_course.py` و`tools/verify_course.py`)، و**63 حارس مراجعة** (بما فيها `tools/test_exercise_self_practice_and_study_diagnostics_review.py` الجديد)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,419,161 بايت**؛ 53 درسًا، **428 تمرينًا مزودًا بمساحة تطبيق ذاتي تفاعلية (`<details class="exercise-practice-workspace">`) ومفتاح تحقق فوري (`<details class="exercise-inline-key">`)**، **61 قسم حوار مزودًا بدليل تقمّص الأدوار (`<details class="dialogue-roleplay-guide">`)**، **48 قسم استماع محجوب النص قبل المحاولة (`<details class="listening-script-guard">`)**، **159 مرحلة درس تفاعلية (`3 × 53`)**، **754 مفردة مشروحة بالكامل (100%: `541` مثالًا مصدريًا + `213` سياقًا مشتقًا عبر `getWordContextHint`)**، **96 جدولًا (`273` رأس `<th scope="col" dir="auto">` و`2,938` خلية `<td>`)**، 540 سؤال تقييم (`1,622` خيارًا) مع تشخيص فوري للأخطاء بعد المحاولة (`renderQuizMistakeDiagnostics`)، و109 مهمات أداء مزودة بمؤشرات إرشادية فورية (`analyzePerformanceDraft`) ونماذج مقارنة استرشادية (`<details class="performance-model-compare">`)، و1080 صف catalog، و217 أصلًا/474 مقطعًا صوتيًا.
- **المتصفح (تغطية شاملة 100% لكامل المشروع دون عينات):** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v112` (`deutsch-pfad-v112`) بعد تحديث `app.js` و`styles.css`، دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات ومسودات التمارين وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **axe والعرض الضيق (فحص شامل لكامل الدروس الـ53 وبوابة A0 والمستويات الـ5 دون أخذ عينات):** **349 حالة شاشة كاملة في `axe-core`** (`174` حالة عند `1440×900` و`175` حالة عند `390×844`) بـ**صفر مخالفات (`wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `best-practice`) وصفر فحوص غير حاسمة (`0` قواعد و`0` عقد)**؛ و**348 حالة عرض ضيق شاملة لكامل المشروع** (`174` حالة في `320×900` عمودي و`174` حالة في `568×320` أفقي) بـ**صفر تجاوز أفقي**. ليست شهادة WCAG أو اختبار أجهزة حقيقية.

[تفاصيل مراجعة مساحات التطبيق الذاتي للتمارين ودليل الحوارات وتشخيص الأخطاء والمهارات](reviews/exercise-self-practice-and-study-diagnostics-review.md).

---

## إيصال رفع CR62 — 2026-10-10

- **الالتزام المرفوع:** `af5ed2551d838397a61eb3a4f5ebd28d854b0ded` (`af5ed25`) وإيصال التسليم `d7552cdd64aa528dd684e88adf9d28d786436ff3` (`d7552cd`) على الفرع الوحيد `arena/01a1036f-deutschlern` (`Implement CR62 cumulative pedagogical, study-plan, lesson, assessment & lexicon upgrades`).
- **معاينة Vercel:** `Deployment has completed` (`state: success`، Deployment ID `6980641944`، Status ID `19565022570`، المعاينة `https://deutschlern-e49apoeg5-balinader-2671s-projects.vercel.app`، الفحص `https://vercel.com/balinader-2671s-projects/deutschlern/B67R36v425W374r9t59n1C5w5k8Z`).
- **PASS:** 62 حارس مراجعة (`tools/test_pedagogical_methodology_interactive_learning_review.py`)، و5 مجموعات Node، و5 مجموعات Chromium عبر 349 حالة `axe-core` و348 حالة عرض ضيق بصفر مخالفات وصفر تجاوز (`deutsch-pfad-v111`).

[تفاصيل الترقية المنهجية والتربوية والتفاعلية الشاملة عبر المحاور الخمسة](reviews/pedagogical-methodology-interactive-learning-review.md).

---

## الفحوص التراكمية — CR61 (`full-project-exhaustive-audit-review` — التدقيق والتحقق والفحص الشامل لكامل المشروع بنسبة 100% دون عينات وتنسيق Markdown المضمّن في التقييمات)

- **PASS:** البناء والتحقق (`tools/build_course.py` و`tools/verify_course.py`)، و**61 حارس مراجعة** (بما فيها `tools/test_full_project_exhaustive_audit_review.py` الجديد)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,419,161 بايت**؛ 53 درسًا (**53 هدف درس نظيفًا دون `**` أو `` ` `` أو `.؛` ومتزامنًا في جميع أعمدة `data/curriculum-file-audit.csv` الـ29**)، 428 عنوان تمرين في الدروس + 3 مهام مصدرية صريحة في بوابة A0 (`431 T`)، 61 قسم حوار، **754 مفردة (541 بتفصيل جمع/تصريف/مثال، منها 521 بسمة `lang="de"` و754 ترجمة بسمة `dir="auto"`)**، **96 جدولًا (`273` رأس `<th scope="col" dir="auto">` منها `21` بسمة `lang="de"`، و`2,938` خلية `<td>` منها `1,848` بسمة `lang="de"`)**، **`109/118` اقتباس `<blockquote dir="auto" lang="de">`**، **`210/1,137` فقرة `<p dir="auto" lang="de">`**، **`1,750/3,821` بند `<li dir="auto" lang="de">`**، **`2,430` عبارة `<strong lang="de">` و`32` عبارة `<em lang="de">` داخل الكتل المختلطة**، 530 سؤال درس + 10 بوابة (`540 Q`: **`26` سؤالًا ألمانيًا بسمة `<h1 dir="auto" lang="de">`، و`137` سؤالًا بعلامات تنسيق مضمّنة تُعرض عبر `formatInlineMarkdown` في `147` عبارة `<strong lang="de">` وعبارة `<strong>` واحدة بصفر علامات `**` خام، و`1,622` خيارًا منها `1,070` بسمة `lang="de"`، و`1` تفسير ألماني `DL-A2-08-Q07` بسمة `<span dir="auto" lang="de">`، و`65` تفسيرًا بعلامات تنسيق مضمّنة تُعرض في `258` عبارة `<strong lang="de">` بصفر علامات خام**)، 109 مهمات أداء (`109 P`، **`12` مهمة بعلامات تنسيق مضمّنة تُعرض في `38` عبارة `<strong lang="de">` وعبارة `<code dir="ltr" lang="de">T06</code>` واحدة**، و`327` معيار تحقق محلي بسمة `dir="auto"`)، 1080 صف catalog متزامنة في جميع أعمدتها الـ15، 217 أصلًا/474 مقطعًا متزامنة في جميع أعمدتها الـ23 (`474/474` سطر تفريغ بسمة `lang="de"` و`466/474` متحدثًا ألمانيًا بسمة `lang="de"`؛ 137 `ready` / 302 مقاطع و80 معلقة / 172 مقطعًا).
- **المتصفح (تغطية شاملة 100% لكامل المشروع دون عينات):** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v110` (`deutsch-pfad-v110`) بعد تحديث `app.js` و`styles.css`، دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **axe والعرض الضيق (فحص شامل لكامل الدروس الـ53 وبوابة A0 والمستويات الـ5 دون أخذ عينات):** **349 حالة شاشة كاملة في `axe-core`** (`174` حالة عند `1440×900` و`175` حالة عند `390×844` تشمل النظرة العامة مع فتح جميع تفريغات الصوت الـ217 + شاشة الاختبار مع إجابة مختارة وتفسير مفتوح + شاشة المهام العملية لكل درس من الدروس الـ`53/53` وبوابة `A0` وصفحات المستويات الـ`5` والواجهة، بالإضافة إلى التحقق المباشر في DOM من جميع الأسئلة الـ`540` والخيارات الـ`1,622` والتفسيرات الـ`540` والمهام العملية الـ`109`) بـ**صفر مخالفات (`wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`, `best-practice`) وصفر فحوص غير حاسمة (`0` قواعد و`0` عقد)**؛ و**348 حالة عرض ضيق شاملة لكامل المشروع** (`174` حالة في `320×900` عمودي و`174` حالة في `568×320` أفقي عبر جميع الدروس الـ`53/53` وبوابة `A0` والمستويات الـ`5`) بـ**صفر تجاوز أفقي** بعد إصلاح `minmax(0, 1fr)` و`overflow-wrap: anywhere` لبطاقات المفردات في `A2.9` عند عرض `320px`. ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **الحفظ:** بقيت حزمة `data/course.json` (`2,419,161` بايت) وجميع ملفات الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات السابقة محفوظة دون إعادة توليد صوت.

[تفاصيل التدقيق والتحقق والفحص الشامل لكامل المشروع دون عينات](reviews/full-project-exhaustive-audit-review.md).

---

## إيصال رفع CR60 — 2026-10-10

- **الالتزام المرفوع:** `9b8eb2ecd956acf4f95cd3575eb0f8965cc45b77` (`9b8eb2e`) وإيصال التسليم `1e2da65d6e28fbf6102eb2d4a4182048756e0dfb` (`1e2da65`) على الفرع الوحيد `arena/01a1036f-deutschlern` (`Clean lesson objectives, add WCAG lang=de on quiz prompts/UI kickers & bidi isolation (CR60)`).
- **معاينة Vercel:** `Deployment has completed` (`state: success`، Deployment ID `6972542845`، Status ID `19545915344`، المعاينة `https://deutschlern-1hov4a5wm-balinader-2671s-projects.vercel.app`، الفحص `https://vercel.com/balinader-2671s-projects/deutschlern/49hmXS5rTLZfKDJnRJpdQJGR3gSZ`؛ ومعاينة الإيصال Deployment ID `6972560132`، Status ID `19545950967`، `https://deutschlern-k94dn4ec8-balinader-2671s-projects.vercel.app`).
- **PR#1:** مفتوح وغير مدمج (`headRefOid: 1e2da65d6e28fbf6102eb2d4a4182048756e0dfb`).

[تفاصيل مراجعة أهداف الدروس وأسئلة التقييم الألمانية وشارات الواجهة وعزل الاتجاه](reviews/objective-quiz-prompt-bidi-review.md).

---

## إيصال رفع CR59 — 2026-10-09

- **الالتزام المرفوع:** `79234769c8e755c4b5ef89712886a3287e120b56` (`7923476`) على الفرع الوحيد `arena/01a1036f-deutschlern` (`Add WCAG table scope=col & lang=de across lesson blocks and audio speakers (CR59)`).
- **معاينة Vercel:** `Deployment has completed` (`state: success`، Deployment ID `6971558521`، Status ID `19543592466`، المعاينة `https://deutschlern-rctiix4i8-balinader-2671s-projects.vercel.app`، الفحص `https://vercel.com/balinader-2671s-projects/deutschlern/J5MbNpqHWZuetgYxBM7brTQr7gYm`).
- **PR#1:** مفتوح وغير مدمج (`headRefOid: 79234769c8e755c4b5ef89712886a3287e120b56`).

## الفحوص التراكمية — CR59 (`table-block-lang-scope-review` — وسوم النطاق `scope="col"` واللغة `lang="de"` في جداول الدروس وفقرات الحوار والقراءة والبنود التدريبية ومتحدثي الصوت)

- **PASS:** البناء والتحقق (`tools/build_course.py` و`tools/verify_course.py`)، و**59 حارس مراجعة** (بما فيها `tools/test_table_block_lang_scope_review.py` الجديد)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,419,328 بايت**؛ 53 درسًا، 428 عنوان تمرين في الدروس + 3 مهام مصدرية صريحة في بوابة A0 (`431 T`)، 61 قسم حوار، **754 مفردة (541 بتفصيل جمع/تصريف/مثال، منها 521 ألمانية خالصة بسمة `lang="de"`)**، **96 جدولًا (`273` رأس `<th scope="col" dir="auto">` منها `21` بسمة `lang="de"`، و`2,938` خلية `<td>` منها `1,848` بسمة `lang="de"`)**، **`109/118` اقتباس قراءة/استماع `<blockquote dir="auto" lang="de">`**، **`210/1,137` فقرة `<p dir="auto" lang="de">`**، **`1,750/3,821` بند `<li dir="auto" lang="de">`**، **`2,430` عبارة `<strong lang="de">` و`32` عبارة `<em lang="de">` داخل الكتل المختلطة**، 530 سؤال درس + 10 بوابة (`540 Q`، `1,622` خيارًا منها `1,070` بسمة `lang="de"`)، 109 مهمات أداء (`109 P`، `327` معيار تحقق محلي بسمة `dir="auto"`), 1080 صف catalog، 217 أصلًا/474 مقطعًا (`466/474` متحدثًا ألمانيًا بسمة `lang="de"`؛ 137 `ready` / 302 مقاطع و80 معلقة / 172 مقطعًا).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v108` (`deutsch-pfad-v108`) بعد تحديث `data/course.json` و`app.js`، دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **axe والعرض الضيق:** **231 حالة شاشة** (`115` عند `1440px` و`116` عند `390px` تغطي جميع الدروس الـ`53/53` + بوابة `A0`) و**صفر مخالفات للقواعد المختارة وصفر فحوص غير حاسمة (`0` قواعد و`0` عقد)**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **الحفظ:** بقيت جميع ملفات الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/production-task-catalog.csv` و`data/audio-asset-register.csv` و`data/curriculum-file-audit.csv` و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات السابقة محفوظة دون إعادة توليد صوت.

[تفاصيل مراجعة جداول الدروس والكتل النصية ومتحدثي الصوت](reviews/table-block-lang-scope-review.md).

---

## إيصال رفع CR58 — 2026-10-09

- **التنفيذ والتقرير والفحوص:** `4a7f6da5b8fc777d5df5629898dddf0c837bb4b5`. رُفع إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد الرفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR58 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `4a7f6da5b8fc777d5df5629898dddf0c837bb4b5`. اكتمل نشر Preview في Vercel (`Deployment has completed`، Deployment ID `6971192429`، Status ID `19542783937`، `https://deutschlern-krbe57ao3-balinader-2671s-projects.vercel.app`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و58 حارسًا (بما فيها `tools/test_code_quiz_a11y_review.py`)، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,338,706` بايت، `code-quiz-a11y-v1`، `v107`. **231 حالة axe** (`53/53` درسًا + بوابة `A0`) و**صفر مخالفات للقواعد المختارة وصفر فحوص غير حاسمة (`0` قواعد و`0` عقد)** (بانخفاض من `120` ظهور قاعدة / `266` عقدة في CR57 و`169` ظهور قاعدة / `460` عقدة في CR56)، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة والتحسين:** 62 وحدة مراجعة تراكمية (53 وحدة درس + وحدة بوابة `A0→A1` + 8 وحدات حزم وواجهة ولغة وتباين وفحوص شاملة)، و14 مرجعًا مقروءًا بالكامل في 17 جزءًا + 4 استعلامات بحث (واستبعاد رابطين 404). أُضيفت السمة `lang="de"` لـ`910` عبارات ألمانية داخل `<code>` و`dir="auto"` لصيغتين عربيتين في `B2.9` و`B2.11` و`dir="ltr"` لـ`14` عنصرًا رقميًا/رمزيًا (`926` عنصر `<code>` في المجموع)، ودُمج `</strong> → <strong>` في `22` بند تحويل نحوي، وأُضيفت السمة `lang="de"` لـ`1,070` خيارًا ألمانيًا خالصًا من أصل `1,622` خيارًا في أسئلة التقييم (`540` سؤالًا)، و`dir="auto"` مع `unicode-bidi: plaintext` لتفسيرات التقييم (`.quiz-feedback`) ولنصوص مهام الأداء الـ`109` ومعايير التحقق المحلية الـ`327`، وعُولجت الحالات الثلاث المتبقية للفحوص غير الحاسمة (`incomplete`) في `axe-core` حتى أصبحت `0` عبر جميع حالات الشاشة الـ`231`.
- **الحفظ:** بقيت جميع ملفات الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/production-task-catalog.csv` و`data/audio-asset-register.csv` و`data/curriculum-file-audit.csv` و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات السابقة مطابقة بالبايت دون أي تغيير أو إعادة توليد صوت.
- **التسليم والتالي:** سجلا `data/reviews/code-quiz-a11y-review.*` والحارس `tools/test_code_quiz_a11y_review.py` والتوثيق والخطة `2.64` ووثيقتا التسليم محدثة. التغطية **53/53 درسًا (`A0.1–5`، `A1.1–12`، `A2.1–12`، `B1.1–12`، `B2.1–12`) + بوابة `A0→A1` + نظرة `A0` العامة + مزامنة الفهارس وإمكانية الوصول + بطاقات المفردات ووسوم اللغة وتباين الألوان + الشفرات المضمّنة وأسئلة التقييم وتصفير الفحوص غير الحاسمة؛ 58 حارس مراجعة**. تبقى المراجعة السمعية لـ80 أصلًا صوتيًا معلقًا (`B1.9–B2.12`) ودمج PR#1 خارج نطاق الاعتماد التلقائي.

## الفحوص التراكمية — CR58 (`code-quiz-a11y-review` — وسوم اللغة والاتجاه في الشفرات المضمّنة وأسئلة التقييم ومعايير الأداء وتصفير الفحوص غير الحاسمة)

- **PASS:** البناء والتحقق (`tools/build_course.py` و`tools/verify_course.py`)، و**58 حارس مراجعة** (بما فيها `tools/test_code_quiz_a11y_review.py` الجديد)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,338,706 بايت**؛ 53 درسًا، 428 عنوان تمرين في الدروس + 3 مهام مصدرية صريحة في بوابة A0 (`431 T`)، 61 قسم حوار، **754 مفردة (منها 541 مفردة مزودة ببيانات جمع أو تصريف أو ملاحظة أو مثال عبر 45 درسًا)**، **926 عنصر `<code>` مضمّن (`910` ألمانية بسمة `dir="ltr" lang="de"` و`2` عربية بسمة `dir="auto"` و`14` رقمية/رمزية بسمة `dir="ltr"`)**، 530 سؤال درس + 10 بوابة (`540 Q`، `1,622` خيارًا: `1,070` خيارًا ألمانيًا بسمة `lang="de"` و`552` خيارًا عربيًا/مختلطًا بسمة `dir="auto"`، و`540` تفسيرًا بسمة `dir="auto"`)، 109 مهمات أداء (`109 P`، `327` معيار تحقق محلي بسمة `dir="auto"`)، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` / 302 مقاطع و80 معلقة / 172 مقطعًا).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v107` (`deutsch-pfad-v107`) بعد تحديث `data/course.json` و`app.js` و`styles.css`، دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **axe والعرض الضيق:** **231 حالة شاشة** (`115` عند `1440px` و`116` عند `390px` تغطي جميع الدروس الـ`53/53` + بوابة `A0`) و**صفر مخالفات للقواعد المختارة وصفر فحوص غير حاسمة (`0` قواعد و`0` عقد)** (انخفاضًا من `120` ظهور قاعدة / `266` عقدة في CR57 و`169` ظهور قاعدة / `460` عقدة في CR56)؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **الحفظ:** بقيت جميع ملفات الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/production-task-catalog.csv` و`data/audio-asset-register.csv` و`data/curriculum-file-audit.csv` و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات السابقة محفوظة دون إعادة توليد صوت.

[تفاصيل مراجعة الشفرات المضمّنة وأسئلة التقييم ومعايير الأداء وتصفير الفحوص غير الحاسمة](reviews/code-quiz-a11y-review.md).

---

## إيصال رفع CR57 — 2026-10-09

- **التنفيذ والتقرير والفحوص:** `1009013fc2d177b3ac815e5c9f14a85b3f4f7712`. رُفع إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد الرفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR57 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `1009013fc2d177b3ac815e5c9f14a85b3f4f7712`. اكتمل نشر Preview في Vercel (`Deployment has completed`، Deployment ID `6970483094`، Status ID `19541111465`، `https://deutschlern-aez867x7m-balinader-2671s-projects.vercel.app`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و57 حارسًا (بما فيها `tools/test_vocab_contrast_bidi_review.py`)، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,328,158` بايت، `vocab-contrast-bidi-v1`، `v106`. **231 حالة axe** (`53/53` درسًا + بوابة `A0`) وصفر مخالفات للقواعد المختارة مع **120 ظهورًا غير حاسم/266 ظهورًا لعقد** (بانخفاض `-49` قاعدة و`-194` عقدة عن CR56، وخلو `94/104` من حالات الدروس النصية من أي فحص غير حاسم)، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة والتحسين:** 56 وحدة مراجعة تراكمية (45 وحدة مفردات دروس `A1.1–B2.12` + 11 وحدة حزم وواجهة ولغة وتباين وفحوص شاملة)، و12 مرجعًا مقروءًا بالكامل في 15 جزءًا + 4 استعلامات بحث. ارتفع عدد المفردات المزودة ببيانات جمع أو تصريف أو ملاحظة أو مثال في `data/course.json` من `24` مفردة في درسين (`A1.1` و`A1.4`) إلى **`541` مفردة في `45` درسًا (`A1.1–B2.12`)** (`517` مفردة إضافية) دون تغيير العدد الكلي `754`، وأُضيفت السمة `lang="de"` لعناصر `.german-word` و`.flash-word` و`.art-word` و`.art-example` و`.audio-transcript-line span` (وفق `WCAG 2.1 SC 3.1.2`)، والسمة `dir="auto"` مع `unicode-bidi: plaintext` لعنصري `.word-example` و`.flash-example` مع إخفاء `.flash-example` عند فراغه، والتنسيق المتبادل بين `stopAudioPlayback()` و`window.speechSynthesis.cancel()`، واستبدال الخلفيات المتدرجة الشفافة والعناصر الزائفة في `styles.css` بخلفيات صلبة محققة التباين (`4.55:1` إلى `9.09:1`).
- **الحفظ:** بقيت جميع ملفات الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/production-task-catalog.csv` و`data/audio-asset-register.csv` و`data/curriculum-file-audit.csv` و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات السابقة مطابقة بالبايت دون أي تغيير أو إعادة توليد صوت.
- **التسليم والتالي:** سجلا `data/reviews/vocab-contrast-bidi-review.*` والحارس `tools/test_vocab_contrast_bidi_review.py` والتوثيق والخطة `2.63` ووثيقتا التسليم محدثة. التغطية **53/53 درسًا (`A0.1–5`، `A1.1–12`، `A2.1–12`، `B1.1–12`، `B2.1–12`) + بوابة `A0→A1` + نظرة `A0` العامة + مزامنة الفهارس وإمكانية الوصول + بطاقات المفردات ووسوم اللغة وتباين الألوان؛ 57 حارس مراجعة**. تبقى المراجعة السمعية لـ80 أصلًا صوتيًا معلقًا (`B1.9–B2.12`) ودمج PR#1 خارج نطاق الاعتماد التلقائي.

## الفحوص التراكمية — CR57 (`vocab-contrast-bidi-review` — بطاقات المفردات ووسوم `lang="de"` و`dir="auto"` وتباين الألوان الحتمي)

- **PASS:** البناء والتحقق (`tools/build_course.py` و`tools/verify_course.py`)، و**57 حارس مراجعة** (بما فيها `tools/test_vocab_contrast_bidi_review.py` الجديد)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,328,158 بايت**؛ 53 درسًا، 428 عنوان تمرين في الدروس + 3 مهام مصدرية صريحة في بوابة A0 (`431 T`)، 61 قسم حوار، **754 مفردة (منها 541 مفردة مزودة ببيانات جمع أو تصريف أو ملاحظة أو مثال عبر 45 درسًا)**، 530 سؤال درس + 10 بوابة (`540 Q`)، 109 مهمات أداء (`109 P`)، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` / 302 مقاطع و80 معلقة / 172 مقطعًا).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v106` (`deutsch-pfad-v106`) بعد تحديث `data/course.json` و`app.js` و`styles.css`، دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **بطاقات المفردات ووسوم اللغة والصوت:** وُسّعت دالة `vocab_table` في `tools/build_course.py` لتقرأ أعمدة `("مثال", "الجمع", "التصريف", "ملاحظة")` مع استثناء `"—"` و`"-"`, فارتفع عدد المفردات المزودة بحقل `example` من `24` مفردة في درسين (`A1.1` و`A1.4`) إلى **`541` مفردة في `45` درسًا (`A1.1–B2.12`)** (`517` مفردة إضافية) دون تغيير العدد الكلي `754`. وأُضيفت السمة `lang="de"` لعناصر `.german-word` و`.flash-word` و`.art-word` و`.art-example` و`.audio-transcript-line span` (وفق `WCAG 2.1 SC 3.1.2`)، والسمة `dir="auto"` مع `unicode-bidi: plaintext` لعنصري `.word-example` و`.flash-example` مع إخفاء `.flash-example` عند فراغه، والتنسيق المتبادل بين `stopAudioPlayback()` و`window.speechSynthesis.cancel()`.
- **axe والعرض الضيق:** **231 حالة شاشة** (`115` عند `1440px` و`116` عند `390px` تغطي جميع الدروس الـ`53/53` + بوابة `A0`) وصفر مخالفات للقواعد المختارة، مع انخفاض الفحوص غير الحاسمة (`incomplete`) من **`169` ظهور قاعدة (`460` عقدة) إلى `120` ظهور قاعدة (`266` عقدة، بانخفاض `-49` قاعدة و`-194` عقدة)** بعد استبدال الخلفيات المتدرجة الشفافة والعناصر الزائفة بخلفيات صلبة محققة التباين (`4.55:1` إلى `9.09:1`) في `styles.css`، وخلو **`94/104` من حالات الدروس النصية (`96/106` شاملة التفريغ الصوتي)** من أي فحص غير حاسم؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **الحفظ:** بقيت جميع ملفات الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/production-task-catalog.csv` و`data/audio-asset-register.csv` و`data/curriculum-file-audit.csv` و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات السابقة محفوظة دون إعادة توليد صوت.

[تفاصيل مراجعة بطاقات المفردات ووسوم اللغة وتباين الألوان](reviews/vocab-contrast-bidi-review.md).

---

## إيصال رفع CR56 — 2026-10-09

- **التنفيذ والتقرير والفحوص:** `8b209a1505ef95a33825911ba8e62795bc3da3b8`. رُفع إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد الرفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR56 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `8b209a1505ef95a33825911ba8e62795bc3da3b8`. اكتمل نشر Preview في Vercel (`Deployment has completed`، Deployment ID `6969739919`، Status ID `19539395105`، `https://deutschlern-omkz5d7sv-balinader-2671s-projects.vercel.app`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و56 حارسًا (بما فيها `tools/test_catalog_accessibility_review.py`)، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,320,648` بايت، `catalog-accessibility-v2`، `v105`. **231 حالة axe** (`53/53` درسًا + بوابة `A0`) وصفر مخالفات للقواعد المختارة مع **169 ظهورًا غير حاسم/460 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة والمزامنة:** 42 وحدة مراجعة تراكمية (3 صفوف كتالوج مهام + 31 صف سجل صوت في `A0.1–A1.9` + 8 ثوابت واجهة وإمكانية وصول ومفحوصات شاملة)، و17 مرجعًا مقروءًا بالكامل في 32 جزءًا + 3 استعلامات بحث. زُومنت `data/production-task-catalog.csv` (`1080` صفًا) و`data/audio-asset-register.csv` (`217` صفًا)، وأُضيف `dir="auto"` لحقل `<textarea data-performance-response>` وحقل `<input id="profile-name">` وإعادة التمرير إلى أعلى الصفحة في `app.js`، ووُسّع `tools/test_accessibility_audit.cjs` ليشمل `a0-02-greetings`، وأُضيفت فحوص مطابقة شاملة للكتالوج وسجل الصوت في `tools/verify_course.py`.
- **الحفظ:** بقيت حزمة `data/course.json` (`2,320,648` بايت) وجميع الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات الـ55 السابقة (`a0-01`..`b2-12` + `a0-gate` + `a0-overview`) مطابقة بالبايت دون أي تغيير أو إعادة توليد صوت.
- **التسليم والتالي:** سجلا `data/reviews/catalog-accessibility-review.*` والحارس `tools/test_catalog_accessibility_review.py` والتوثيق والخطة `2.62` ووثيقتا التسليم محدثة. التغطية **53/53 درسًا (`A0.1–5`، `A1.1–12`، `A2.1–12`، `B1.1–12`، `B2.1–12`) + بوابة `A0→A1` + نظرة `A0` العامة + مزامنة الفهارس وإمكانية الوصول الشاملة؛ 56 حارس مراجعة**. تبقى المراجعة السمعية لـ80 أصلًا صوتيًا معلقًا (`B1.9–B2.12`) ودمج PR#1 خارج نطاق الاعتماد التلقائي.

## الفحوص التراكمية — CR56 (`catalog-accessibility-review` — مزامنة سجل المهام وسجل الصوت وإمكانية الوصول وواجهة RTL)

- **PASS:** البناء والتحقق (`tools/build_course.py` و`tools/verify_course.py`)، و**56 حارس مراجعة** (بما فيها `tools/test_catalog_accessibility_review.py` الجديد)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,320,648 بايت**؛ 53 درسًا، 428 عنوان تمرين في الدروس + 3 مهام مصدرية صريحة في بوابة A0 (`431 T`)، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة (`540 Q`)، 109 مهمات أداء (`109 P`)، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` / 302 مقاطع و80 معلقة / 172 مقطعًا).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v105` (`deutsch-pfad-v105`) بعد تحديث `app.js`، دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **مزامنة السجلات وواجهة RTL:** زُومنت في `data/production-task-catalog.csv` حالة `DL-A0-03-T05` (`planned -> active`) وعنوان `DL-B2-03-T02` وربط `DL-B2-11-P02` (`5;6;7;8` مطابقًا لـ`T05;T06;T07;T08` في ملف التقييم)، وزُومنت في `data/audio-asset-register.csv` أرقام الأسطر وعناوين الأقسام لـ31 صفًا عبر `A0.1–A1.9` لتطابق ملفات Markdown المراجعة (`a0-01-v2`..`a1-09-v2`) بنسبة 100%، وأُضيفت فحوص مطابقة شاملة للكتالوج وسجل الصوت في `tools/verify_course.py`. كما أُضيف `dir="auto"` لحقل `<textarea data-performance-response>` وحقل `<input id="profile-name">` في `app.js` (مع تحقق آلي في `tools/test_forms_keyboard.cjs`) وإعادة التمرير إلى أعلى الصفحة عند الانتقال بين أوضاع الدرس والاختبار ومهام الأداء.
- **axe والعرض الضيق:** **231 حالة شاشة** (`115` عند `1440px` و`116` عند `390px` بعد إضافة `A0.2-reviewed-source` و`A0.2-practical-form-fixture` لتغطية جميع الدروس الـ`53/53` + بوابة `A0`) وصفر مخالفات للقواعد المختارة، مع **169 ظهورًا غير حاسم تشمل 460 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **الحفظ:** بقيت حزمة `data/course.json` (`2,320,648` بايت) وجميع الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات الـ55 السابقة (`a0-01`..`b2-12` + `a0-gate` + `a0-overview`) مطابقة بالبايت دون أي تغيير أو إعادة توليد صوت.

[تفاصيل مراجعة مزامنة السجلات وإمكانية الوصول وواجهة RTL](reviews/catalog-accessibility-review.md).

---

## إيصال رفع CR55 — 2026-10-09

- **التنفيذ والتقرير والفحوص:** `0a091eed4cd6427f535a6d37acc9a59c169ef813`. رُفع إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد الرفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR55 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `0a091eed4cd6427f535a6d37acc9a59c169ef813`. اكتمل نشر Preview في Vercel (`Deployment has completed`، Deployment ID `6968333027`، Status ID `19536114681`، `https://deutschlern-ihiiq4iam-balinader-2671s-projects.vercel.app`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و55 حارسًا (بما فيها `tools/test_a0_overview_review.py`)، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,320,648` بايت، `a0-overview-audit-v2`، `v104`. **227 حالة axe** وصفر مخالفات للقواعد المختارة مع **166 ظهورًا غير حاسم/454 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة والمزامنة:** 12 وحدة مراجعة نصية وتراكمية، و25 مرجعًا مقروءًا بالكامل في 32 جزءًا + 3 استعلامات بحث (مع استبعاد رابط 404 واحد `/rechtschreibung/Alphabet`). زُومنت `content/A0/lesson-01-overview.md`، و`data/source-plan.md`، و`data/curriculum-production-matrix.md` (الإصدار `1.5`)، و`data/curriculum-audit.md`، و`data/curriculum-file-audit.csv` (`53` صفًا، `428` تمرينًا، `61` قسم حوار، `473` مقطعًا في الدروس + مقطع البوابة = `474` مقطعًا؛ إزالة `0` / `not_generated` القديمة في `B1.10–B2.12` وتحديث `A1.12` إلى `11` مقطعًا وإزالة إشارات `v1` القديمة)، وأُضيفت فحوص مطابقة تلقائية لها في `tools/verify_course.py`.
- **الحفظ:** بقيت حزمة `data/course.json` (`2,320,648` بايت) وجميع الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/production-task-catalog.csv` و`data/audio-asset-register.csv` و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات الـ54 السابقة (`a0-01`..`b2-12` + `a0-gate`) مطابقة بالبايت دون أي تغيير أو إعادة توليد صوت.
- **التسليم والتالي:** سجلا `data/reviews/a0-overview-review.*` والحارس `tools/test_a0_overview_review.py` والتوثيق والخطة `2.61` ووثيقتا التسليم محدثة. التغطية **53/53 درسًا (`A0.1–5`، `A1.1–12`، `A2.1–12`، `B1.1–12`، `B2.1–12`) + بوابة `A0→A1` + نظرة `A0` العامة ومزامنة السجلات التراكمية؛ 55 حارس مراجعة**. تبقى المراجعة السمعية لـ80 أصلًا صوتيًا معلقًا (`B1.9–B2.12`) ودمج PR#1 خارج نطاق الاعتماد التلقائي.

## الفحوص التراكمية — CR55 (`a0-01-overview` ومزامنة السجلات التراكمية)

- **PASS:** البناء والتحقق (`tools/build_course.py` و`tools/verify_course.py`)، و**55 حارس مراجعة** (بما فيها `tools/test_a0_overview_review.py` الجديد)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,320,648 بايت**؛ 53 درسًا، 428 عنوان تمرين في الدروس + 3 مهام مصدرية صريحة في بوابة A0 (`431 T`)، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة (`540 Q`)، 109 مهمات أداء (`109 P`)، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` / 302 مقاطع و80 معلقة / 172 مقطعًا).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v104` (`deutsch-pfad-v104`) بعد تحديث `./data/source-plan.md` المضمّن في `APP_SHELL`، دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **المزامنة التراكمية:** زُومنت `content/A0/lesson-01-overview.md`، و`data/source-plan.md`، و`data/curriculum-production-matrix.md` (الإصدار `1.5`)، و`data/curriculum-audit.md`، و`data/curriculum-file-audit.csv` (`53` صفًا، `428` تمرينًا، `61` قسم حوار، `473` مقطعًا في الدروس + مقطع البوابة = `474` مقطعًا؛ إزالة `0` / `not_generated` القديمة في `B1.10–B2.12` وتحديث `A1.12` إلى `11` مقطعًا وإزالة إشارات `v1` القديمة)، وأُضيفت فحوص مطابقة تلقائية لها في `tools/verify_course.py`.
- **axe والعرض الضيق:** **227 حالة** وصفر مخالفات للقواعد المختارة، مع **166 ظهورًا غير حاسم تشمل 454 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **الحفظ:** بقيت حزمة `data/course.json` (`2,320,648` بايت) وجميع الدروس الـ53 وبوابة `A0` وملفات التقييم الـ54 و`data/production-task-catalog.csv` و`data/audio-asset-register.csv` و`data/audio-playlists.json` وملفات MP3 الـ474 وبصمات المراجعات الـ54 السابقة (`a0-01`..`b2-12` + `a0-gate`) مطابقة بالبايت دون أي تغيير أو إعادة توليد صوت.

[تفاصيل مراجعة نظرة A0 العامة ومزامنة السجلات التراكمية](reviews/a0-overview-review.md).

---

## إيصال رفع CR54 — 2026-10-09

- **التنفيذ:** `67df18827281ab1a0f5a9e8c5afaba275a838b62`؛ **التقرير والفحوص:** `11d0d545469689c72cd469d8092f0f840a14e563`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR54 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `11d0d54`. اكتمل نشر Preview في Vercel للتنفيذ (`Deployment has completed`، Deployment ID `6967371952`، Status ID `56007001787`، `https://vercel.com/balinader-2671s-projects/deutschlern/8vcoyEYQLLAbcMumWunreyiMvxT2`) وللتقرير (`Deployment has completed`، Deployment ID `6967548035`، Status ID `56007624412`، `https://vercel.com/balinader-2671s-projects/deutschlern/37uf1FvvfvWfeNyWzZV5HF8tSMar`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و54 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,320,648` بايت، `b2-12-v2`، `v103`. **227 حالة axe** وصفر مخالفات للقواعد المختارة مع **166 ظهورًا غير حاسم/454 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 89 وحدة/43 بندًا/11 جزء نموذج/30 خيارًا/6 معايير، و55 مرجعًا مقروءًا بالكامل في 60 جزءًا + 3 استعلامات بحث (مع استبعاد 4 روابط 404/إعادة توجيه). أُضيف تنبيه مفردات وصرف عن الأسماء (`die Rezension / Aussage / Sendung / Behauptung / Redewiedergabe / Moderatorin`، و`der Podcast / Kommentar / Moderator → die Moderatoren`، و`das Interview, -s` و`das Publikum` مفردًا جامعًا) وأفعال نقل الكلام والموافقة (`berichten / behaupten / erklären` بلا `ge-` مقابل المنفصلة `einräumen → hat eingeräumt` و`zustimmen + Dat → hat zugestimmt` و`mitteilen → hat mitgeteilt` و`offenlassen → hat offengelassen`) وحروف جر النسبة (`laut + Dat/Gen` قبل الاسم مقابل `Dat + zufolge` بعده)، مع 3 فقرات مساعدة قبل النصوص والمهمات توضّح متى نستخدم `Konjunktiv I` (`sei / seien / habe / beginne / arbeite / schreibe / wolle / könne / werde ergänzt`) ومتى ننتقل إلى البديل المميّز (`hätten / verstünden / fänden`) أو `würden + Infinitiv` في الأفعال الضعيفة لتجنّب التباس `hörten` بالماضي البسيط `Präteritum`، ونقل الأحداث الماضية (`habe / sei / hätten + Partizip II`)، وموقع الفعل مع `dass` ومن دونها، والتمييز بين القول المنقول والرأي الشخصي المباشر بصيغة الخبر (`Ich finde … ist …` / `Meiner Meinung nach ist …`)، ووُسّعت مفاتيح القراءة والاستماع إلى جمل كاملة، ووُسّعت `T01` إلى 5 بنود و`T02` إلى 4 بنود و`T03` إلى 5 بنود و`T04` إلى 5 بنود ونُسّق `T06` في 5 بنود مرقمة مع ترقيم مفتاحه. `P01` ملخص مكتوب من 5 جمل لمقابلة ثقافية خيالية (`634` حرفًا)، و`P02` إحاطة تحريرية من 6 جمل لمجلة ثقافية خيالية استنادًا إلى `T05` و`T06` و`T07` مع الجهر (`910` أحرف)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 220/250 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى وجميع ملفات MP3 الـ474 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` وربط `P02` فقط في سجل B2.12؛ خمسة أصول/10 مقاطع بأصوات `Moderatorin` (`voice-02`) و`Gast` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-12-review.*` والحارس والفهرس والتوثيق والخطة `2.60` ووثيقتا التسليم محدثة. التغطية **53/53 درسًا (`A0.1–5`، `A1.1–12`، `A2.1–12`، `B1.1–12`، `B2.1–12`) والبوابة `A0→A1` منفصلة؛ 54 حارس مراجعة**. تبقى المراجعة السمعية لـ80 أصلًا صوتيًا معلقًا (`B1.9–B2.12`) ودمج PR#1 خارج نطاق الاعتماد التلقائي.

## الفحوص التراكمية — CR54

- **PASS:** البناء والتحقق، و54 حارسًا (بما فيها `tools/test_b2_12_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,320,648 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v103` (`deutsch-pfad-v103`) دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-12-v1` محفوظ لكنه لا يمنح إتقان `b2-12-v2`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يمنحان إتقان `b2-12-leisure-media-reported-speech` (آخر دروس المسار الـ53) وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 634/910 أحرف فوق حدَّي 220/250 حرفًا.
- **axe والعرض الضيق:** **227 حالة** وصفر مخالفات للقواعد المختارة، مع **166 ظهورًا غير حاسم تشمل 454 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.

مقارنة بالأساس `d9def94`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1070 صف catalog و213 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` وربط `P02` لأربعة أصول في B2.12 وبقي `DL-B2-12-AUD-PHR-01` ثابتًا. حُفظت جميع ملفات MP3 الـ474 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Moderatorin` (`voice-02`) و`Gast` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.12](reviews/b2-12-review.md).

---

## إيصال رفع CR53 — 2026-10-09

- **التنفيذ:** `ba8202a1d11c482994417a5f643528bf36be95ae`؛ **التقرير والفحوص:** `93de44ba212f023999484359af8bf74b0ee4bd86`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR53 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `93de44b`. اكتمل نشر Preview في Vercel للتنفيذ وللتقرير (`Deployment has completed`، Status ID `56005307336`، `https://vercel.com/balinader-2671s-projects/deutschlern/7xuqvmbNrSoKnjkZdKvA3qLnTpMX`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و53 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,276,845` بايت، `b2-11-v2`، `v102`. **225 حالة axe** وصفر مخالفات للقواعد المختارة مع **164 ظهورًا غير حاسم/450 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 91 وحدة/42 بندًا/11 جزء نموذج/30 خيارًا/6 معايير، و52 مرجعًا مقروءًا بالكامل في 54 جزءًا + 3 استعلامات بحث (مع استبعاد 5 روابط 404/إعادة توجيه). أُضيف تنبيه مفردات وصرف عن `der Schutz → des Schutzes` و`der Verbrauch → des Verbrauchs` و`der Erhalt → des Erhalts` و`die Artenvielfalt` (بلا جمع) و`der Lebensraum → des Lebensraums, die Lebensräume` (`von Lebensräumen` في `Dativ Plural`) والأسماء المؤنثة المنتهية بـ`-ung` (`die Renaturierung / Verringerung / Wiederherstellung / Flächennutzung / Auswirkung (auf + Akk) / Beteiligung, -en`) و`die Maßnahme, -n` والأفعال `schützen → geschützt` و`wiederherstellen → wiederhergestellt` و`beeinträchtigen → beeinträchtigt` و`abwägen → abgewogen`، مع 3 فقرات مساعدة قبل النصوص والمهمات توضّح خريطة التحويل بين الروابط الفعلية وحروف الجر الاسمية وتحويل الفاعل/المفعول به إلى مضاف إليه (`Genitivattribut` مقابل `von + Dativ Plural`) ووجوب استكمال الجملة بفعل مصرف في الموقع الثاني `V2`، وصُحح مفتاح سؤال القراءة 2 ووُسّعت مفاتيح القراءة والاستماع إلى جمل كاملة، ووُسّعت `T01` إلى 5 بنود و`T03` و`T04` و`T07` إلى 4 بنود لكل منها ونُسّق `T06` في 5 بنود مرقمة مع ترقيم مفتاحه، وصُحّحت مسارات `content/B2/lesson-11-...assessment.json` في الكتالوج. `P01` عرض مكتوب من 5 جمل لمقترح بيئي خيالي (`621` حرفًا)، و`P02` إحاطة من 6 جمل لمشارك في نقاش مجتمعي استنادًا إلى `T05` و`T06` و`T07` مع الجهر (`1153` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 180/220 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى وجميع ملفات MP3 الـ474 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.11؛ خمسة أصول/11 مقطعًا بأصوات `Lea` (`voice-02`) و`Amir` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-11-review.*` والحارس والفهرس والتوثيق والخطة `2.59` ووثيقتا التسليم محدثة. التغطية **52/53 درسًا والبوابة منفصلة، درس واحد متبقٍّ في B2 (`B2.12`)**. التالي **CR54/B2.12** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.

## الفحوص التراكمية — CR53

- **PASS:** البناء والتحقق، و53 حارسًا (بما فيها `tools/test_b2_11_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,276,845 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v102` (`deutsch-pfad-v102`) دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-11-v1` محفوظ لكنه لا يمنح إتقان `b2-11-v2` أو يفتح `B2.12`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-12-leisure-media-reported-speech` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 621/1153 حرفًا فوق حدَّي 180/220 حرفًا.
- **axe والعرض الضيق:** **225 حالة** وصفر مخالفات للقواعد المختارة، مع **164 ظهورًا غير حاسم تشمل 450 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `ba8202a1d11c482994417a5f643528bf36be95ae` وتطابق HEAD/origin. PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `00a130a`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1068 صف catalog و213 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.11 وبقي `DL-B2-11-AUD-PHR-01` ثابتًا. حُفظت جميع ملفات MP3 الـ474 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Lea` (`voice-02`) و`Amir` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/11 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.11](reviews/b2-11-review.md).

---

## إيصال رفع CR52 — 2026-10-09

- **التنفيذ:** `0bc79e76e536023cf81d9df7efa6c040f604e55d`؛ **التقرير والفحوص:** `0e4e7d343b8fc574f08fb860983e86b05a23f9bd`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR52 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `0e4e7d3`. اكتمل نشر Preview في Vercel للتنفيذ وللتقرير (`Deployment has completed`، Preview ID `6962394939`، `https://vercel.com/balinader-2671s-projects/deutschlern/4YnMKJ6zFJDrTgvFWwXWgF8UXNqg`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و52 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,274,361` بايت، `b2-10-v2`، `v101`. **221 حالة axe** وصفر مخالفات للقواعد المختارة مع **160 ظهورًا غير حاسم/422 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 91 وحدة/41 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و40 مرجعًا مقروءًا بالكامل في 44 جزءًا + 4 استعلامات بحث (مع استبعاد 4 روابط 404). أُضيف تنبيه مفردات وصرف عن `das Update, -s` و`die Schnittstelle, -n` و`die Einstellung, -en` و`der Zugriff, -e (auf + Akk)` و`die Störung, -en` و`die Ausfallzeit, -en` و`die Funktion, -en` و`die Voraussetzung, -en` و`kompatibel mit + Dat` واختيار المساعد في `Konjunktiv II` للماضي (`wäre aufgetreten / wäre aufgefallen` مع أفعال التغيّر والحدوث اللازمة مقابل `hätte überprüft / entdeckt / verschoben` مع المتعدية) والأفعال المنفصلة (`zurückgesetzt / freigegeben / wiederhergestellt`) مقابل غير المنفصلة والمنتهية بـ`-ieren` بلا `ge-` (`überprüft / übertragen / unterstützt / wiederholt / installiert`؛ وتمييز `wiederholen → hat wiederholt` بمعنى «كرّر» عن الجناس المنفصل `hat wiedergeholt`)، مع 5 نقاط مساعدة قبل النصوص والمهمات (بما فيها صيغة المصدر المزدوج `Ersatzinfinitiv` مع الأفعال الناقصة `hätte … wiederherstellen können` والمبني للمجهول `wäre … übertragen worden / geprüft worden wäre` وحذف `wenn`)، وحُدّدت أسئلة القراءة والاستماع وأجوبتها الكاملة بالألمانية، ووُسّعت `T01` إلى 5 بنود و`T03` و`T04` و`T07` إلى 4 بنود لكل منها ونُسّق `T06` في 5 بنود مرقمة مع ترقيم مفتاحه. `P01` فقرة مكتوبة من 5 جمل عن مشروع تقني خيالي لم يسر كما خُطط له (`637` حرفًا)، و`P02` إحاطة من 5 جمل لفريق تطوير خيالي استنادًا إلى `T05` و`T06` و`T07` مع الجهر (`945` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 180/200 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى وجميع ملفات MP3 الـ474 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.10؛ خمسة أصول/10 مقاطع بأصوات `Lea` (`voice-02`) و`Murat` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-10-review.*` والحارس والفهرس والتوثيق والخطة `2.58` ووثيقتا التسليم محدثة. التغطية **51/53 درسًا والبوابة منفصلة، درسان متبقيان في B2 (`B2.11–B2.12`)**. التالي **CR53/B2.11** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.

## الفحوص التراكمية — CR52

- **PASS:** البناء والتحقق، و52 حارسًا (بما فيها `tools/test_b2_10_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,274,361 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v101` (`deutsch-pfad-v101`) دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-10-v1` محفوظ لكنه لا يمنح إتقان `b2-10-v2` أو يفتح `B2.11`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-11-humans-nature-environment-nominalization` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 637/945 حرفًا فوق حدَّي 180/200 حرفًا.
- **axe والعرض الضيق:** **221 حالة** وصفر مخالفات للقواعد المختارة، مع **160 ظهورًا غير حاسم تشمل 422 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `0bc79e76e536023cf81d9df7efa6c040f604e55d` وتطابق HEAD/origin. PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `c8c5029`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.10 وبقي `DL-B2-10-AUD-PHR-01` ثابتًا. حُفظت جميع ملفات MP3 الـ474 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Lea` (`voice-02`) و`Murat` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.10](reviews/b2-10-review.md).

---

## إيصال رفع CR51 — 2026-10-09

- **التنفيذ:** `adb678474c903152a5c309029ef8e222e9af33fc`؛ **التقرير والفحوص:** `b5ca7ccb31d0a4c5b4e1e390c57c0d5c952df494`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR51 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `b5ca7cc`. اكتمل نشر Preview في Vercel للتقرير (`Deployment has completed`، Preview ID `6961874348`، `https://vercel.com/balinader-2671s-projects/deutschlern/E8MXRAgi27VyE5d1P6boykw8pUWd`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و51 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,249,674` بايت، `b2-09-v2`، `v100`. **217 حالة axe** وصفر مخالفات للقواعد المختارة مع **157 ظهورًا غير حاسم/412 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 95 وحدة/41 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و34 مرجعًا مقروءًا بالكامل في 39 جزءًا + استعلامَي بحث (مع استبعاد 3 روابط 404). أُضيف تنبيه مفردات وصرف عن `das Unternehmen, —` و`der Umsatz → die Umsätze` و`die Nachfrage` و`der Wettbewerb` (في المفرد بالمعنى الاقتصادي) و`die Arbeitsbedingungen` (جمع غالبًا) و`die Fachkraft → die Fachkräfte` و`sich spezialisieren auf + Akk` و`Wert legen auf + Akk` و`werben mit + Dat` مقابل `für + Akk` و`abhängen von + Dat` (`hing ab, hat abgehangen` مقابل الضعيف `hängte ab, hat abgehängt`) و`sich richten an + Akk` مقابل `nach + Dat`، مع 6 ملاحظات مساعدة قبل النصوص والمهمات (إقحام `-r-` قبل الصوائت، غير العاقل مقابل الأشخاص `An wen / Mit wem`، وظيفة `da(r)-` كضمير تمهيدي `Korrelat` مع الفاصلة والفعل في آخر الجملة التابعة، وصيغة `Konjunktiv I` في الاستماع)، وحُدّد سؤالا القراءة 1 والاستماع 4، ووُسّع `T01` إلى 5 بنود و`T07` إلى 4 بنود، وأُضيفت تلميحات الأفعال في `T02`، ونُسّق `T06` في 5 بنود مرقمة مع ترقيم مفتاحه، وصُحّحت مسارات `content/B2/lesson-09-...assessment.json` في الكتالوج. `P01` نبذة مكتوبة عن شركة أو حملة خيالية من 5 جمل (`636` حرفًا)، و`P02` إحاطة من 5 جمل لزميل استنادًا إلى `T05` و`T06` و`T07` مع الجهر (`876` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 150/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى وجميع ملفات MP3 الـ474 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.9؛ خمسة أصول/12 مقطعًا بأصوات `Mara` (`voice-02`) و`Jonas` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-09-review.*` والحارس والفهرس والتوثيق والخطة `2.57` ووثيقتا التسليم محدثة. التغطية **50/53 درسًا والبوابة منفصلة، 3 دروس متبقية في B2 (`B2.10–B2.12`)**. التالي **CR52/B2.10** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.

## الفحوص التراكمية — CR51

- **PASS:** البناء والتحقق، و51 حارسًا (بما فيها `tools/test_b2_09_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,249,674 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v100` (`deutsch-pfad-v100`) دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-09-v1` محفوظ لكنه لا يمنح إتقان `b2-09-v2` أو يفتح `B2.10`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-10-wishes-probabilities-technology-konjunktiv2-past` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 636/876 حرفًا فوق حدَّي 150/180 حرفًا.
- **axe والعرض الضيق:** **217 حالة** وصفر مخالفات للقواعد المختارة، مع **157 ظهورًا غير حاسم تشمل 412 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `adb678474c903152a5c309029ef8e222e9af33fc` وتطابق HEAD/origin. PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `788a94e`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.9 وبقي `DL-B2-09-AUD-PHR-01` ثابتًا. حُفظت جميع ملفات MP3 الـ474 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Mara` (`voice-02`) و`Jonas` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/12 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.9](reviews/b2-09-review.md).

---

## إيصال رفع CR50 — 2026-10-09

- **التنفيذ:** `7208fc0a2455783e34c00aec56e10fb5cec1cdc3`؛ **التقرير والفحوص:** `fa7364fec0f8099832d4cc1f1a9f2800cfa16d2d`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR50 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `fa7364f`. اكتمل نشر Preview في Vercel للتنفيذ وللتقرير (`Deployment has completed`، Preview ID `6961360987`، `https://deutschlern-2sv6rlj6p-balinader-2671s-projects.vercel.app`)؛ لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و50 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,230,842` بايت، `b2-08-v2`، `v99`. **213 حالة axe** وصفر مخالفات للقواعد المختارة مع **154 ظهورًا غير حاسم/401 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 97 وحدة/40 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و31 مرجعًا مقروءًا بالكامل في 33 جزءًا (مع استبعاد رابط 404 واحد `/rechtschreibung/Zutatenliste`). أُضيف تنبيه مفردات عن `die Zutatenliste, -n` و`der Ballaststoff → die Ballaststoffe` و`der Zuckergehalt, -e` و`der Messwert, -e` و`die Stichprobe, -n` و`der Eintrag → die Einträge` و`abwiegen → abgewogen` و`erfassen → erfasst` و`auswerten → ausgewertet` و`kennzeichnen → gekennzeichnet` و`ausweisen → ausgewiesen` و`eintragen → eingetragen`، وقُيّدت قاعدة `Vorgangspassiv` (`werden + Partizip II`) مقابل `Zustandspassiv` (`sein + Partizip II`) مع مطابقة المبتدأ المرفوع وموقع `Partizip II` في الجملة الرئيسية والتابعة مع 6 ملاحظات مساعدة، ووُسّعت `T03` و`T04` و`T07` إلى 4 بنود لكل منها ونُسّق `T06` في 5 بنود مرقمة مع ترقيم مفتاحه. `P01` وصف مكتوب لإجراء فحص منتج غذائي خيالي من 5 جمل (`611` حرفًا)، و`P02` إحاطة من 5 جمل لمتعلم آخر استنادًا إلى `T05` و`T06` مع الجهر (`788` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 150/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و650 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.8؛ خمسة أصول/10 مقاطع بأصوات `Lina` (`voice-00`) و`Koch` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-08-review.*` والحارس والفهرس والتوثيق والخطة `2.56` ووثيقتا التسليم محدثة. التغطية **49/53 درسًا والبوابة منفصلة، 4 دروس متبقية في B2**. التالي **CR51/B2.9** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.

## الفحوص التراكمية — CR50

- **PASS:** البناء والتحقق، و50 حارسًا (بما فيها `tools/test_b2_08_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,230,842 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 153.0.8010.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v99` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-08-v1` محفوظ لكنه لا يمنح إتقان `b2-08-v2` أو يفتح `B2.9`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-09-business-marketing-employment-prepositions` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 611/788 حرفًا فوق حدَّي 150/180 حرفًا.
- **axe والعرض الضيق:** **213 حالة** وصفر مخالفات للقواعد المختارة، مع **154 ظهورًا غير حاسم تشمل 401 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `7208fc0a2455783e34c00aec56e10fb5cec1cdc3` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `9e1d2dc`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.8 وبقي `DL-B2-08-AUD-PHR-01` ثابتًا. حُفظت 650 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Lina` (`voice-00`) و`Koch` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.8](reviews/b2-08-review.md).

---

## إيصال رفع CR49 — 2026-10-09

- **التنفيذ:** `aabfa90e8abe5f3a99b07dfaf881deecbed5907f`؛ **التقرير والفحوص:** `0405b81e63e35b3450e07efc12fafeabcd10d947`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR49 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `0405b81`. النشر في Vercel محكوم بحد النشر اليومي (`Deployment rate limited — retry in 24 hours.` و`deployments=[]`)؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و49 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,215,878` بايت، `b2-07-v3`، `v98`. **209 حالات axe** وصفر مخالفات للقواعد المختارة مع **151 ظهورًا غير حاسم/390 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 98 وحدة/42 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و20 مرجعًا مقروءًا بالكامل (مع استبعاد رابطين 404). صُحح التذكير في الهدف (`ضمير موصول يسبقه حرف جر`) ومفتاح `تمرين 2` بند 1 (`in dem` مع `das Hotel` المحايد بدل `in der`)، وأُضيف تنبيه مفردات عن `die Reiseetappe` و`der Reiseführer` و`der Hafen → die Häfen` و`die Unterkunft → die Unterkünfte` و`übernachten` بلا `ge-` و`vorbeifahren an + Dativ` و`sich beziehen auf + Akkusativ`، مع 10 نقاط مساعدة قبل النصوص والمهمات، ووُسّعت `T03` و`T04` إلى 4 بنود لكل منهما ونُسّق `T06` في 5 بنود مرقمة مع ترقيم مفتاحه. `P01` وصف مكتوب لرحلة خيالية من 5 جمل (`582` حرفًا)، و`P02` إحاطة من 5 جمل لمتعلم آخر استنادًا إلى `T05` و`T06` مع الجهر (`766` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 150/180 وتصحيح `Hafen West` محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و647 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.7؛ خمسة أصول/10 مقاطع بأصوات `Salma` (`voice-02`) و`Jonas` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-07-review.*` والحارس والفهرس والتوثيق والخطة `2.55` ووثيقتا التسليم محدثة. التغطية **48/53 درسًا والبوابة منفصلة، 5 دروس متبقية في B2**. التالي **CR50/B2.8** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.

## الفحوص التراكمية — CR49

- **PASS:** البناء والتحقق، و49 حارسًا (بما فيها `tools/test_b2_07_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,215,878 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v98` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجلا `b2-07-v1` و`b2-07-v2` محفوظان لكنهما لا يمنحان إتقان `b2-07-v3` أو يفتحان `B2.8`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-08-food-nutrition-data-passives` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 582/766 حرفًا فوق حدَّي 150/180 حرفًا.
- **axe والعرض الضيق:** **209 حالات** وصفر مخالفات للقواعد المختارة، مع **151 ظهورًا غير حاسم تشمل 390 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `aabfa90e8abe5f3a99b07dfaf881deecbed5907f` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `5cb70ed`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.7 وبقي `DL-B2-07-AUD-PHR-01` ثابتًا. حُفظت 647 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Salma` (`voice-02`) و`Jonas` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.7](reviews/b2-07-review.md).

---

## إيصال رفع CR48 — 2026-10-09

- **التنفيذ:** `551d6e605908926d8a2cc04bdbfbe639923f4cb2`؛ **التقرير والفحوص:** `9c03343674a6a2fee141cd30796c51b8999f2722`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR48 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `9c03343`. النشر في Vercel محكوم بحد النشر اليومي (`Deployment rate limited — retry in 24 hours.` و`deployments=[]`)؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و48 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,201,939` بايت، `b2-06-v2`، `v97`. **205 حالات axe** وصفر مخالفات للقواعد المختارة مع **148 ظهورًا غير حاسم/380 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 101 وحدة/40 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و18 مرجعًا مقروءًا بالكامل (مع استبعاد 4 روابط 404). أُضيف تنبيه مفردات عن `die Unterlagen` (ومفرده `die Unterlage`) و`die Kenntnisse` (ومفرده `die Kenntnis`) و`der Fragebogen → die Fragebogen/Fragebögen` و`einreichen/nachreichen` و`erwerben`، مع 10 نقاط مساعدة قبل النصوص والمهمات، ونُسّق `T06` في 5 بنود مرقمة مع ترقيم مفتاحه. `P01` استفسار رسمي مكتوب من 5 جمل لمكتب إرشاد دراسي خيالي (`606` أحرف)، و`P02` إحاطة من 5 جمل لمتقدم خيالي استنادًا إلى `T05` و`T06` مع الجهر (`782` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 160/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و644 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.6؛ خمسة أصول/11 مقطعًا بأصوات `Meryem` (`voice-02`) و`Berater` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-06-review.*` والحارس والفهرس والتوثيق والخطة `2.54` ووثيقتا التسليم محدثة. التغطية **47/53 درسًا والبوابة منفصلة، 6 دروس متبقية في B2**. التالي **CR49/B2.7** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.

## الفحوص التراكمية — CR48

- **PASS:** البناء والتحقق، و48 حارسًا (بما فيها `tools/test_b2_06_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,201,939 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` من المحاولة الأولى.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v97` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-06-v1` محفوظ لكنه لا يمنح إتقان `b2-06-v2` أو يفتح `B2.7`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-07-travel-experiences-prepositional-relatives` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 606/782 حرفًا فوق حدَّي 160/180 حرفًا.
- **axe والعرض الضيق:** **205 حالات** وصفر مخالفات للقواعد المختارة، مع **148 ظهورًا غير حاسم تشمل 380 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `551d6e605908926d8a2cc04bdbfbe639923f4cb2` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `d1fc4e2`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.6 وبقي `DL-B2-06-AUD-PHR-01` ثابتًا. حُفظت 644 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Meryem` (`voice-02`) و`Berater` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/11 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.6](reviews/b2-06-review.md).

---

## إيصال رفع CR47 — 2026-10-09

- **التنفيذ:** `6faa6e8d58c8cc841827ce8f64488b03052b0933`؛ **التقرير والفحوص:** `e00b35942b02bf1895fd20764b3af5280ed33730`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR47 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `e00b359`. النشر في Vercel محكوم بحد النشر اليومي (`Deployment rate limited — retry in 24 hours.` و`deployments=[]`)؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و47 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,190,639` بايت، `b2-05-v3`، `v96`. **201 حالة axe** وصفر مخالفات للقواعد المختارة مع **145 ظهورًا غير حاسم/370 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 100 وحدة/41 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و16 مرجعًا مقروءًا بالكامل (مع استبعاد رابطين 404). أُضيف تنبيه مفردات عن `Ergebnis → des Ergebnisses` و`Messwert → des Messwerts` و`hinweisen auf + Akkusativ` و`belegen/verallgemeinern` بلا `ge-`، وقُيّدت قاعدة `sodass/weshalb` مقابل `deshalb/daher` و`aufgrund + Genitiv` مع 10 نقاط مساعدة، ووُسّعت `T02` و`T04` و`T07` إلى 4 بنود لكل منها ونُسّق `T06` في 5 بنود مرقمة. `P01` تقييم مكتوب من 5 جمل لاستطلاع صحي خيالي (`591` حرفًا)، و`P02` إحاطة من 5 جمل استنادًا إلى `T05` مع الجهر (`683` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 160/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و641 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.5؛ خمسة أصول/10 مقاطع بأصوات `Rima` (`voice-02`) و`Nabil` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-05-review.*` والحارس والفهرس والتوثيق والخطة `2.53` ووثيقتا التسليم محدثة. التغطية **46/53 درسًا والبوابة منفصلة، 7 دروس متبقية في B2**. التالي **CR48/B2.6** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


## الفحوص التراكمية — CR47

- **PASS:** البناء والتحقق، و47 حارسًا (بما فيها `tools/test_b2_05_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,190,639 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` (مع إعادة فورية ناجحة لـ`narrow_layout` بعد إغلاق عارض لمثيل متصفح في التشغيل المتسلسل).
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v96` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجلا `b2-05-v1` و`b2-05-v2` محفوظان لكنهما لا يمنحان إتقان `b2-05-v3` أو يفتحان `B2.6`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-06-study-applications-verb-noun-phrases` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 591/683 حرفًا فوق حدَّي 160/180 حرفًا.
- **axe والعرض الضيق:** **201 حالة** وصفر مخالفات للقواعد المختارة، مع **145 ظهورًا غير حاسم تشمل 370 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `6faa6e8d58c8cc841827ce8f64488b03052b0933` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `1690fa5b2bc034376bc33c53263d93f56f9e2db4`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.5 وبقي `DL-B2-05-AUD-PHR-01` ثابتًا. حُفظت 641 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Rima` (`voice-02`) و`Nabil` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.5](reviews/b2-05-review.md).

---

## إيصال رفع CR46 — 2026-10-09

- **التنفيذ:** `a613e56847bc456bd1eb24da5a10ac7899838cb1`؛ **التقرير والفحوص:** `9b7be03c33d8291cdb56877f5726332d03c3a510`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR46 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `9b7be03`. النشر في Vercel محكوم بحد النشر اليومي (`Deployment rate limited — retry in 24 hours.` و`deployments=[]`)؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و46 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,178,855` بايت، `b2-04-v2`، `v95`. **197 حالة axe** وصفر مخالفات للقواعد المختارة مع **141 ظهورًا غير حاسم/354 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 98 وحدة/41 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و14 مرجعًا مقروءًا بالكامل (مع استبعاد رابط 404 واحد). أُضيف تنبيه مفردات عن `Nebenkosten` (جمع فقط) و`Barrierefreiheit` (بلا جمع) و`Altbau → Altbauten` و`Wohnviertel` و`sanieren → saniert` بلا `ge-`، وقُيّدت دلالة `Partizip I/II` سياقيًا (بما في ذلك الدلالة الفاعلة التامة لـ`Partizip II` مع أفعال `sein`) مع 10 نقاط مساعدة، ووُضّح مفتاح نهايات `T03`، ووُسّع `T04` إلى 5 بنود و`T07` إلى 4 بنود. `P01` وصف مكتوب من 5 جمل لمبنى أو حيّ خيالي (`575` حرفًا)، و`P02` إحاطة من 5 جمل لزائر مهتم بالحيّ الخيالي استنادًا إلى `T05` مع الجهر (`605` أحرف)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 160/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و640 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.4؛ خمسة أصول/11 مقطعًا بأصوات `Architektin` (`voice-02`) و`Samir` (`voice-03` من `A1.9`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-04-review.*` والحارس والفهرس والتوثيق والخطة `2.52` ووثيقتا التسليم محدثة. التغطية **45/53 درسًا والبوابة منفصلة، 8 دروس متبقية في B2**. التالي **CR47/B2.5** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


## الفحوص التراكمية — CR46

- **PASS:** البناء والتحقق، و46 حارسًا (بما فيها `tools/test_b2_04_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,178,855 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` من المحاولة الأولى.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v95` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-04-v1` محفوظ لكنه لا يمنح إتقان `b2-04-v2` أو يفتح `B2.5`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-05-health-fitness-medical-information` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 575/605 أحرف فوق حدَّي 160/180 حرفًا.
- **axe والعرض الضيق:** **197 حالة** وصفر مخالفات للقواعد المختارة، مع **141 ظهورًا غير حاسم تشمل 354 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `a613e56847bc456bd1eb24da5a10ac7899838cb1` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `fb2ca8141dcf5ba4b28039e78161cd5d4d0d77a9`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.4 وبقي `DL-B2-04-AUD-PHR-01` ثابتًا. حُفظت 640 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Architektin` (`voice-02`) و`Samir` (`voice-03` من `A1.9`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/11 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.4](reviews/b2-04-review.md).

---

## إيصال رفع CR45 — 2026-10-09

- **التنفيذ:** `3c5920edf73a028b97018771bd2c60ce23259e8f`؛ **التقرير والفحوص:** `6aa1c11185fdb2bcbed40607e0967bdc2e1a70b7`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR45 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `6aa1c11`. النشر في Vercel محكوم بحد النشر اليومي (`Deployment rate limited — retry in 24 hours.` و`deployments=[]`)؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و45 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,168,500` بايت، `b2-03-v2`، `v94`. **193 حالة axe** وصفر مخالفات للقواعد المختارة مع **138 ظهورًا غير حاسم/344 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 95 وحدة/40 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و10 مراجع مقروءة بالكامل (مع استبعاد رابط 404 واحد). قُيّدت قاعدة `Passiv mit Modalverben` بين الجملة الرئيسية والتابعة مع إضافة `nicht müssen` و10 نقاط مساعدة، ووُسّعت `T03` و`T04` و`T07` إلى 4 بنود لكل منها. `P01` خطة مكتوبة من 5 جمل لمتجر أو مقهى خيالي (`515` حرفًا)، و`P02` إحاطة من 5 جمل لفريق مقهى استنادًا إلى `T06` مع الجهر (`566` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 150/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و592 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.3؛ خمسة أصول/10 مقاطع بأصوات `Nadia` (`voice-02`) من `B1.4` و`Verkäufer` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-03-review.*` والحارس والفهرس والتوثيق والخطة `2.51` ووثيقتا التسليم محدثة. التغطية **44/53 درسًا والبوابة منفصلة، 9 دروس متبقية في B2**. التالي **CR46/B2.4** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


## الفحوص التراكمية — CR45

- **PASS:** البناء والتحقق، و45 حارسًا (بما فيها `tools/test_b2_03_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,168,500 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` من المحاولة الأولى.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v94` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-03-v1` محفوظ لكنه لا يمنح إتقان `b2-03-v2` أو يفتح `B2.4`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-04-cities-housing-participles` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 515/566 حرفًا فوق حدَّي 150/180 حرفًا.
- **axe والعرض الضيق:** **193 حالة** وصفر مخالفات للقواعد المختارة، مع **138 ظهورًا غير حاسم تشمل 344 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `3c5920edf73a028b97018771bd2c60ce23259e8f` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `7998c7a5f61fcc95b48e250bacb6788acea500f5`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.3 وبقي `DL-B2-03-AUD-PHR-01` ثابتًا. حُفظت 592 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Nadia` (`voice-02`) من `B1.4` و`Verkäufer` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.3](reviews/b2-03-review.md).

---

## إيصال رفع CR44 — 2026-10-09

- **التنفيذ:** `4d84421c0ab548dd2654e266afa5aa1f5e79df91`؛ **التقرير والفحوص:** `07f5abe81649e3484f4ff4efa1b7153371fae6ae`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR44 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `07f5abe`. النشر في Vercel محكوم بحد النشر اليومي (`Deployment rate limited — retry in 24 hours.` و`deployments=[]`)؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و44 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,158,066` بايت، `b2-02-v2`، `v93`. **189 حالة axe** وصفر مخالفات للقواعد المختارة مع **135 ظهورًا غير حاسم/334 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 100 وحدة/40 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و10 مراجع مقروءة بالكامل (مع استبعاد رابط 404 واحد). وُسّع جدول `Konjunktiv I` بإضافة `sollen → solle` و`helfen → helfe` مع 10 نقاط مساعدة، ووُسّع `T02` إلى 4 بنود (بإضافة بديل `Konjunktiv II` في الجمع `hätten`) و`T04` إلى 5 بنود و`T07` إلى 4 بنود (بإضافة جملة `dass` مع الفعل في النهاية `sei`). `P01` ملخص مكتوب من 5 جمل لمحادثة استشارية (`580` حرفًا)، و`P02` إحاطة مهنية من 5 جمل لزميل استنادًا إلى `T06` مع الجهر (`553` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 160/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و591 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.2؛ خمسة أصول/11 مقطعًا بأصوات `Nora` (`voice-02`) و`Fadi` (`voice-03`) من `A2.11` والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-02-review.*` والحارس والفهرس والتوثيق والخطة `2.50` ووثيقتا التسليم محدثة. التغطية **43/53 درسًا والبوابة منفصلة، 10 دروس متبقية في B2**. التالي **CR45/B2.3** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


## الفحوص التراكمية — CR44

- **PASS:** البناء والتحقق، و44 حارسًا (بما فيها `tools/test_b2_02_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,158,066 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` من المحاولة الأولى.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v93` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-02-v1` محفوظ لكنه لا يمنح إتقان `b2-02-v2` أو يفتح `B2.3`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-03-consumption-environment-passive-modal` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 580/553 حرفًا فوق حدَّي 160/180 حرفًا.
- **axe والعرض الضيق:** **189 حالة** وصفر مخالفات للقواعد المختارة، مع **135 ظهورًا غير حاسم تشمل 334 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `4d84421c0ab548dd2654e266afa5aa1f5e79df91` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `4b704b338df9fdf2c44eefaa7df4ee995c3da713`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.2 وبقي `DL-B2-02-AUD-PHR-01` ثابتًا. حُفظت 591 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Nora` (`voice-02`) و`Fadi` (`voice-03`) من `A2.11` والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/11 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.2](reviews/b2-02-review.md).

---

## إيصال رفع CR43 — 2026-10-09

- **التنفيذ:** `db74c45b218cd8c795bdd1edda3201d9b10ccfa8`؛ **التقرير والفحوص:** `0861e14d26acddd36c1a2d62f7d71d25a78714ee`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR43 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `0861e14`. أظهر GitHub فشل نشر التنفيذ `db74c45` والتقرير `0861e14` في Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و43 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,147,924` بايت، `b2-01-v2`، `v92`. **185 حالة axe** وصفر مخالفات للقواعد المختارة مع **132 ظهورًا غير حاسم/324 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 99 وحدة/39 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و9 مراجع مقروءة بالكامل ومرجع بجزأين 0 و1 من 4 (مع استبعاد رابط 404 واحد). قُيّد `T02.1` بـ`*(رابط من كلمة واحدة)*`، وحُوّلت جمل `T06` إلى الألمانية لتطابق المفاتيح الألمانية مع حذف تكرار `am Rand` و`den` من المفتاح، ووُسّع `T04` إلى 5 بنود و`T07` إلى 4 بنود. `P01` فقرة من 5 جمل كتابة فقط (`430` حرفًا)، و`P02` إحاطة من 5 جمل لزميل استنادًا إلى `T06` مع الجهر (`594` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 160/190 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.1؛ خمسة أصول/12 مقطعًا بأصوات `Hana` (`voice-02`) و`Karim` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-01-review.*` والحارس والفهرس والتوثيق والخطة `2.49` ووثيقتا التسليم محدثة. التغطية **42/53 درسًا والبوابة منفصلة، 11 درسًا متبقيًا في B2**. التالي **CR44/B2.2** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


## الفحوص التراكمية — CR43

- **PASS:** البناء والتحقق، و43 حارسًا (بما فيها `tools/test_b2_01_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,147,924 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` (ظهر التذبذب التاريخي لمحدد الملفات في 390px مرة واحدة ثم نجح عند الإعادة دون تعديل `tools/test_forms_keyboard.cjs`).
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v92` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-01-v1` محفوظ لكنه لا يمنح إتقان `b2-01-v2` أو يفتح `B2.2`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-02-career-formal-communication-konjunktiv1` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 430/594 حرفًا فوق حدَّي 160/190 حرفًا.
- **axe والعرض الضيق:** **185 حالة** وصفر مخالفات للقواعد المختارة، مع **132 ظهورًا غير حاسم تشمل 324 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `db74c45b218cd8c795bdd1edda3201d9b10ccfa8` وتطابق HEAD/origin. أظهر الاستعلام الصريح بالـSHA فشل Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `c1fc4482eb42247b0175339d42f93427e95ee2f7`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.1 وبقي `DL-B2-01-AUD-PHR-01` ثابتًا. حُفظت 590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Hana` (`voice-02`) و`Karim` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/12 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B2.1](reviews/b2-01-review.md).

---

## إيصال رفع CR42 — 2026-10-09

- **التنفيذ:** `b32d49fa33411a7cb9f600de81f45ceb9786cc02`؛ **التقرير والفحوص:** `8cc66bfb3028959e8f39cc11a64d531aa5b12544`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR42 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `8cc66bf`. أظهر GitHub فشل نشر التنفيذ `b32d49f` والتقرير `8cc66bf` في Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و42 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,136,864` بايت، `b1-12-v2`، `v91`. **181 حالة axe** وصفر مخالفات للقواعد المختارة مع **128 ظهورًا غير حاسم/305 ظهورات لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 102 وحدة/41 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و10 مراجع مقروءة بالكامل (مع استبعاد 4 روابط 404). قُيّدت قاعدة `Futur I` بالجمل الرئيسية البسيطة مع توضيح الجمل التابعة، وأُضيفت قيود معنوية عربية في `T04` لتمييز `Vielleicht` و`wahrscheinlich` و`Vermutlich`، ووُسّع `T07` إلى 6 بنود. `P01` عرض من 5 جمل كتابة فقط (`348` حرفًا)، و`P02` إحاطة من 5 جمل عن مشروع الظل مع الجهر (`325` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 130/145 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B1.12؛ خمسة أصول/12 مقطعًا بأصوات `Rana` (`voice-02`) و`Timo` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b1-12-review.*` والحارس والفهرس والتوثيق والخطة `2.48` ووثيقتا التسليم محدثة. التغطية **41/53 درسًا والبوابة منفصلة (اكتملت A0–B1)، 12 درسًا متبقيًا في B2**. التالي **CR43/B2.1** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


## الفحوص التراكمية — CR42

- **PASS:** البناء والتحقق، و42 حارسًا (بما فيها `tools/test_b1_12_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,136,864 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v91` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b1-12-v1` محفوظ لكنه لا يمنح إتقان `b1-12-v2` أو يفتح `B2.1`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-01-time-management-habits-reading` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 348/325 حرفًا فوق حدَّي 130/145 حرفًا.
- **axe والعرض الضيق:** **181 حالة** وصفر مخالفات للقواعد المختارة، مع **128 ظهورًا غير حاسم تشمل 305 ظهورات لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `b32d49fa33411a7cb9f600de81f45ceb9786cc02` وتطابق HEAD/origin. أظهر الاستعلام الصريح بالـSHA فشل Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `04d7980219fad2b944e2299fdc4b0113a0688af0`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B1.12 وبقي `DL-B1-12-AUD-PHR-01` ثابتًا. حُفظت 590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Rana` (`voice-02`) و`Timo` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/12 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B1.12](reviews/b1-12-review.md).

---

## إيصال رفع CR41 — 2026-10-09

- **التنفيذ:** `c4cd3c7e1ab78b78f654f18646bb1b2d29eb9074`؛ **التقرير والفحوص:** `66f25c7a44857b909476978b953498564073bb00`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR41 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `66f25c7`. أظهر GitHub فشل نشر التنفيذ `c4cd3c7` والتقرير `66f25c7` في Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و41 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,126,109` بايت، `b1-11-v2`، `v90`. **177 حالة axe** وصفر مخالفات للقواعد المختارة مع **125 ظهورًا غير حاسم/295 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 99 وحدة/42 بندًا/9 أجزاء نموذج/30 خيارًا/6 معايير، و10 مراجع مقروءة بالكامل (مع استبعاد رابط 404 واحد). صُحح مفتاح `T06.4` إلى `Gästebuch`، وقُيّد جدول المساعد وموضع `Partizip II`، ووُضّح المجهول غير الشخصي والفرق عن `wurde größer` و`war geöffnet`. `P01` خط زمني من 4 جمل كتابة فقط (`204` حروف)، و`P02` تقديم المعرض من 5 جمل تغطي المعلومات الخمس مع الجهر (`327` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 100/125 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B1.11؛ خمسة أصول/10 مقاطع بأصوات `Mira` (`voice-02`) و`Archivarin` (`voice-00`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b1-11-review.*` والحارس والفهرس والتوثيق والخطة `2.47` ووثيقتا التسليم محدثة. التغطية **40/53 درسًا والبوابة منفصلة، 13 درسًا متبقيًا**. التالي **CR42/B1.12** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


## الفحوص التراكمية — CR41

- **PASS:** البناء والتحقق، و41 حارسًا (بما فيها `tools/test_b1_11_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,126,109 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` بعد تثبيت بيئة المتصفح المؤقتة في الحاوية.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v90` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b1-11-v1` محفوظ لكنه لا يمنح إتقان `b1-11-v2` أو يفتح `B1.12`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b1-12-innovation-research-future` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 204/327 حرفًا فوق حدَّي 100/125 حرفًا.
- **axe والعرض الضيق:** **177 حالة** وصفر مخالفات للقواعد المختارة، مع **125 ظهورًا غير حاسم تشمل 295 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **التعثرات التي حُلّت:** حُدّثت عبارتان قديمتان في `tools/test_progression.cjs` لتطابق كون P01 كتابة فقط وP02 كتابة وجهر، وثُبّتت حزم Playwright/Chromium المؤقتة بعد غيابها في الحاوية الجديدة، ثم نجحت الفحوص كلها.
- **النشر والـPR:** رُفع التنفيذ `c4cd3c7e1ab78b78f654f18646bb1b2d29eb9074` وتطابق HEAD/origin. أظهر الاستعلام الصريح بالـSHA فشل Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

مقارنة بالأساس `96cdc1e98432483f45d44f914720a168e8145308`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B1.11 وبقي `DL-B1-11-AUD-PHR-01` ثابتًا. حُفظت 590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Mira` (`voice-02`) و`Archivarin` (`voice-00`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

[تفاصيل B1.11](reviews/b1-11-review.md).

---

## إيصال رفع CR40 — 2026-10-09

- **التنفيذ:** `3e75b52b339e6ffcdbea9da4d3eaa7606c3fe829`؛ **التقرير والفحوص:** `2b8f477e5ceec193907ac9d3a8b3594418d3b76a`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. هذا الإيصال يُرفع فور فحصه بعنوان `Record CR40 delivery receipt`؛ معرفه فيgit log ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1OPEN وmergedAt=null والرأس2b8f477. نشر التنفيذ3e75b52 نجح فيPreview رقم6948925300: https://deutschlern-jd04d8jvu-balinader-2671s-projects.vercel.app . لكن نشر التقرير2b8f477 **فشل** بسبب `Deployment rate limited — retry in 24 hours.` وdeployments=[]. لا ننسب نجاح التنفيذ إلى التقرير أو الإيصال، ولا إعادة نشر متكررة أو شراء ترقية. الواجهة البعيدة وProduction لم تختبرا؛ لا دمج.
- **الفحوص PASS:** البناء والتحقق و40 حارسًا ومجموعاتNode الخمس ومجموعات المتصفح الخمس؛2,116,453 بايت،`b1-10-v2`،`v89`. 173 حالةaxe وصفر مخالفات للقواعد المختارة مع122 ظهورًا غير حاسم/285 ظهورًا لعقد، و126 حالة عرض ضيق. ليست شهادةWCAG أو لغة، ولا إصلاحًا لتذبذب اختيار الملف التاريخي.
- **المراجعة:**100 وحدة/36 بندًا/13 جزء نموذج/30 خيارًا/6 معايير،9 صفحات مرجعية كاملة وجزآن0و4 من5 لمرجع عاشر،وأربع صفحات غير موجودة مستبعدة. صُحح مقصد سؤالَي الفهم،وتمييز التابعة والرئيسية،وشرح الفاعل والمفعول والترقيم. P01 رسالة بخمس جمل متن كتابة فقط،P02 أربعة أسطر لجهة المتصل كتابة وجهر؛ النموذجان401/272 حرفًا،وحدا120/125 و80% والخيارات والفهارس والروابط محفوظة.
- **الحفظ:**52 درسًا آخر وكل مفاتيح الحزمة الأخرى و590 ملفًا محميًا تشمل474MP3 وplaylist بالبايت ثابتة. أربعة تغييراتsource_line فقط في سجلB1.10؛ خمسة أصول/12 مقطعًا بأصواتLeila/السرد02 وRedakteur/الاستماع03 تظل معلقة ومتاحة،دون توليد أو استماع أو اعتماد أو اختيار صوت جديد.
- **التسليم والتالي:** سجلا `data/reviews/b1-10-review.*` والحارس والفهرس والتوثيق والخطة2.46 ووثيقتا التسليم محدثة. التغطية **39/53 درسًا والبوابة منفصلة،14 متبقية**. التالي **CR41/B1.11** فرديًا وتراكميًا مع المصادر،دون مراجع بشري شرطًا. احتفظ باختيار `existing`: Archivarin00 وMira02 ومقاطع الدرس العشرة؛لا إعادة توليد أو معاينة جديدة. كل دفعة مفحوصة ترفع فورًا،ولا تغيير فرع أو دمجPR#1 أو إتلافGit؛المحتوى والتقييم والتطبيق قبلالصوت.


## الفحوص التراكمية — CR40

- **PASS:** build/verify و40 حارسًا وخمس مجموعاتNode: progression/service_worker/daily_plan/session_persistence/study_time وسلامةJS وgit diff. الحزمة **2,116,453 بايت**؛53 درسًا،428 عنوان تمرين،61 قسم حوار،754 مفردة،530 سؤال درس+10 بوابة،109 مهمات،1080 صفcatalog،217 أصلًا/474 مقطعًا،137ready و80 معلقة.
- **المتصفح:** Chromium143.0.7499.0،Playwright1.58.2،axe4.11.0؛ نجحت browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout. فحص1440×900 و390×844 شمل RTL والقفل والتفريغات والتشغيل الآلي الصامت بسرعتي1 و0.8 والتوقف عند الانتقال دون أخطاء صفحة في الاختبار العام.
- **دون اتصال والتحديث:** إعادة التحميل والتنقل والصوت الكامل ونطاقات البايت واللاحقة و416/503، وتحديث fixture v42 إلىv89 دون إعادة تحميل قسرية؛ حفظ التقدم والإجابات وعزل المخازن وإعادة تخزين الصوت عند الاتصال. ليس اختبارًا لكل ترقية تاريخية أو ضمان بقاء كل ملف مخزنًا.
- **الدليل والتدرج:** سجلB1.10-v1 محفوظ لكنه لا يمنح إتقانv2 أو يفتحB1.11؛ المسودة القديمة مرفوضة. الدرجة والدليل الحاليان يفتحان التالي وحذف الدليل يغلقه. P01 دون مربع جهر،P02 تتطلبه، وثلاثة إقرارات وحدا120/125. النموذجان401/272 حرفًا؛ لا تصحيح آلي لعدد الجمل أو اللغة أو النطق.
- **axe:**173 حالة وصفر مخالفات للقواعد المختارة؛ **122 ظهورًا غير حاسم تشمل285 ظهورًا لعقد**. أضيف مصدرB1.10 ومهمتاه بالعرضين؛ ليست شهادةWCAG ولا مخالفات مؤكدة ولا مراجع بشري شرطًا للاستمرار.
- **العرض الضيق:**126 حالة،63 لكل من320×900 و568×320، تشمل53 درسًا بتفريغاتها وجداولها والقائمة. ليست هواتف فعلية أو تكبيرًا أصليًا.
- **تعثر حُلّ وحدود ثابتة:** فشل fixture التدرج الجديد أولًا لتهريب الأسطر داخلVM؛ استبدلت الأسطر بمسافات في بيانات الاختبار بنفس عدد الحروف فقط، مع بقاء الرسالة متعددة الأسطر في المصدر. نجحت مجموعاتNode بعده. استعيدت تبعيات المتصفح والمكتبات، ثم نجحت مجموعاته الخمس من أول تنفيذ كامل. لم يعدل اختبارforms_keyboard؛ نجاحه لا يصلح تذبذب اختيار الملف الأصلي التاريخي.
- **النشر:** رُفع التنفيذ **3e75b52b339e6ffcdbea9da4d3eaa7606c3fe829** وتطابقHEAD/origin. نجحPreview رقم6948925300 حسبSHA صريح وAPI: https://deutschlern-jd04d8jvu-balinader-2671s-projects.vercel.app . PR#1OPEN وmergedAt=null؛ لم تختبر الواجهة البعيدة أوProduction. لا ينسب هذا النجاح إلى أيcommit لاحق.

مقارنة بالأساس `96d70c9a65892351f08a56d9b8e07473c5d1a804`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صفcatalog و212 صف سجل صوت ثابتة**؛ أربعة تحديثاتsource_line فقط في سجلB1.10 وPHR ثابت. حُفظت590 ملفًا تشمل474MP3 وplaylist مطابقة بالبايت. Leila/السرد02 وRedakteur/الاستماع03 اختيارات المستخدم السابقة؛ خمسة أصول/12 مقطعًا تبقى generated_pending_acoustic_review وoffer ومتاحة في مواضعها، بلا معاينة أصوات جديدة أو توليد أو استماع أو اعتماد. ترقيم تفريغ الرسالة الصوتي مختلف عن المكتوب كما كان أصلًا، لا تغيير لكلماته أو ملفه.

[تفاصيلB1.10](reviews/b1-10-review.md).

---

## إيصال رفع CR39 — 2026-10-08

- **التنفيذ:** `fa03a2a87698306e14538461f67250d346327c74`، **ملحق الاتساق:** `ed115027a205d2eb57e801841d85d163b5d3e16f`، **التقرير والفحوص:** `5809deb63b766983a9ca5045a4c8ee68c3245353`. رُفعت الثلاثة إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. هذا الإيصال يرفع فور فحصه بعنوان `Record CR39 delivery receipt`؛ معرفه فيgit log، ولم يُستعلم عن نشره.
- **الاستعلام بالـSHA الصريح للتقرير:** PR#1OPEN،mergedAt=null،head=5809deb. نشر التقرير **فشل** بسبب `Deployment rate limited — retry in 24 hours.`،deployments=[]. فشل ملحق التنفيذed11502 للسبب نفسه؛ لا إعادة نشر متكررة أو ترقية مدفوعة. الرفع ليس نشرًا أو دمجًا، والواجهة البعيدة وProduction لم تختبرا.
- **PASS:** البناء والتحقق و39 حارسًا وخمس مجموعاتNode ومجموعات المتصفح الخمس؛ الحزمة2,106,695 بايت،`b1-09-v2`،`v88`. 169 حالةaxe وصفر مخالفات للقواعد المختارة، مع119 ظهورًا غير حاسم/275 ظهورًا لعقد؛126 حالة عرض ضيق. نجاحforms_keyboard لا يصلح تذبذبه التاريخي، وهذه ليست شهادةWCAG أو مراجعة سمعية.
- **المراجعة والحفظ:**110 وحدات/42 بندًا/30 خيارًا/6 معايير،11 صفحة مرجعية كاملة وصفحة404 مستبعدة. P01 خمس جمل كتابة فقط،P02 ست جمل كتابة وجهر؛ النموذجان284/338 حرفًا وحدا130/145. كل الخيارات والفهارس والروابط محفوظة، وكذلك52 درسًا آخر و590 ملفًا محميًا تشمل474MP3 وplaylist بالبايت. أربعة تعديلاتsource_line فقط في سجل B1.9؛ الأصوات Mina02/Karim03 والنماذج/المفردات/القراءة02 والاستماع03. خمسة أصول/10 مقاطع ما زالت معلقة ومتاحة، بلا استماع أو اعتماد أو توليد جديد.
- **الملفات والقرار التالي:** سجلا `data/reviews/b1-09-review.*`،الحارس والتوثيق والخطة2.45 ووثيقتا التسليم محدثة. التغطية **38/53 والبوابة منفصلة،15 متبقية**. التالي **CR40/B1.10** فرديًا وتراكميًا مع المصادر؛ لا انتظار مراجع بشري، ولا دمجPR#1 أو تغيير فرع أو إعادة الصوت. أصوات B1.10 المختارة Leila/السرد02 وRedakteur03 محفوظة؛ لا طلب اختيار جديد. كل دفعة مفحوصة ترفع فورًا، والمحتوى والتقييم والتطبيق قبل الصوت.


## الفحوص التراكمية — CR39

- **PASS:** build/verify و39 حارس مراجعة وخمس مجموعات Node: progression/service_worker/daily_plan/session_persistence/study_time، وnode --check وgit diff. الحزمة **2,106,695 بايت**؛53 درسًا،428 عنوان تمرين،61 قسم حوار،754 مفردة،530 سؤال درس+10 بوابة،109 مهمات،1080 صف catalog،217 أصلًا/474 مقطعًا،137ready و80 معلقة.
- **المتصفح:** Chromium143.0.7499.0، Playwright1.58.2، axe4.11.0. نجحت المجموعات الخمس browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout. فحص1440×900 و390×844 شمل RTL والقفل والتفريغات وتشغيلMP3 آليًا بسرعتي1 و0.8 والتوقف عند الانتقال، دون أخطاء صفحة في الاختبار العام.
- **دون اتصال والتحديث:** إعادة التحميل والتنقل والصوت الكامل ونطاقات البايت/اللاحقة و416/503؛ تحديث fixture v42 إلى **v88** دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن وإعادة تخزين الصوت عند الاتصال. لا ضمان لبقاء كل الملفات أو اختبار لجميع الترقيات التاريخية.
- **الدليل والتدرّج:** سجل B1.9-v1 محفوظ لكنه لا يمنح إتقان v2 أو يفتح B1.10، والمسودة القديمة مرفوضة. الدرجة والدليل الحاليان يفتحان التالي، وحذف الدليل يغلقه. P01 دون مربع جهر وP02 تتطلبه؛ ثلاثة إقرارات وحدا130/145، ونموذجا284/338 حرفًا. لا تصحيح آلي للجمل أو اللغة أو النطق.
- **axe:**169 حالة ممثلة، منها مصدر B1.9 ومهمتاه بالعرضين؛ **صفر مخالفات للقواعد المختارة**، مع **119 ظهورًا غير حاسم تشمل275 ظهورًا لعقد**. ليست شهادةWCAG ولا مخالفات مؤكدة، ولا مراجع بشري شرطًا للاستمرار.
- **العرض الضيق:**126 حالة،63 لكل من320×900 و568×320، تشمل53 درسًا بتفريغاتها وجداولها والقائمة. ليست هواتف فعلية أو تكبيرًا أصليًا.
- **التعثر والحدود:** فشل استدعاء Chromium --version أولًا لغياب libnspr4.so؛ استخرجت مكتبات al2023 المرفقة وضبطت LD_LIBRARY_PATH، ثم نجحت مجموعات المتصفح الخمس من أول تنفيذ كامل. لا تعديل للتطبيق أو لاختبار forms_keyboard بسبب ذلك؛ نجاح اختيار الملف الأصلي بالعرضين لا يصلح تذبذبه التاريخي أو يثبت سببه.
- **الصوت والنشر:** مطابقة نصية وفحصMP3 وتشغيل آلي صامت لا استماع أو اعتماد. نشر التنفيذ الأخير **ed11502 فشل** لحدVercel اليومي بحسبSHA الصريح، وdeployments=[]؛ PR#1OPEN وغير مدمجة. لا اختبار للواجهة البعيدة أوProduction، ولا إعادة نشر متكررة أو ترقية مدفوعة.

مقارنة بالأساس `e0727a6e5e81bf5dfc91e19eba6b066f42bc503b`:52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة؛ أربعة صفوف B1.9 تغير فيها source_line فقط وPHR ثابت. حُفظت590 ملفًا تشمل474MP3، وplaylist مطابقة بالبايت. خمسة أصول/10 مقاطع بأصوات Mina02/Karim03، والمفردات/النماذج/القراءة02 والاستماع03؛ جميعها generated_pending_acoustic_review وtranscriptPolicy=offer، دون إخفاء أو تغيير روابط. النماذج الجديدة284/338 حرفًا مكتوبة غير مسجلة.

[تقرير B1.9 وبنوده](reviews/b1-09-review.md).

---

## إيصال رفع CR38 — 2026-10-08

- **التنفيذ:** `331b7d3fc29fafe05aeab96d7a1f3ec45be0fccb`؛ **السجل والفحوص:** `155907b4d22c5e324396c1d3442ea7d3042f3f0d`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. هذا الإيصال يُرفع فور فحصه بعنوان `Record CR38 delivery receipt`؛ معرفه في git log، ولم يُستعلم عن نشره.
- آخر استعلام بالـSHA الصريح للتقرير: **PR#1 OPEN، mergedAt=null، head=155907b**. نشر **التنفيذ331b7d3 ناجح** إلىPreview رقم6947703129: https://deutschlern-2cmsg88ie-balinader-2671s-projects.vercel.app . نشر **التقرير155907b فشل** بسبب **Deployment rate limited — retry in 24 hours**، وdeployments=[]. لا ننسب نجاح التنفيذ إلى أحدثcommit، ولا إعادة نشر متكررة أو ترقية مدفوعة. الواجهة البعيدة وProduction لم تختبرا؛ الرفع لا يعني الدمج أو النشر.
- **PASS:** البناء والتحقق و38 حارسًا وخمس مجموعاتNode ومجموعات المتصفح الخمس؛ الحزمة **2,094,031 بايت**، `b1-08-v2`، `v86`. فيaxe:165 حالة وصفر مخالفات للقواعد المختارة، مع115 ظهورًا غير حاسم/262 ظهورًا لعقد؛ والعرض الضيق126 حالة. نجاحforms_keyboard هنا لا يصلح تذبذبه التاريخي أو يثبت سببه.
- **المراجعة:**110 وحدات/39 بندًا/30 خيارًا/6 معايير؛9 صفحات مرجعية كاملة وجزآن0و1 من11 لمرجع عاشر، وصفحة غير موجودة مستبعدة. Q05 حاضر صريح وQ07 معلومتان لا مادتان؛ جميع الخيارات30 والفهارس والروابط و80% وحدا150/130 محفوظة. P01 كتابة فقط وP02 كتابة وجهر، بنموذجين415/370 حرفًا؛ لا تصحيح آلي للغة أو الإعلان أو النطق.
- **الحفظ:**52 درسًا آخر و590 ملفًا محميًا تشمل474MP3 وبقية مفاتيح الحزمة وصفوفها خارج الدرس ثابتة. خمسة أصولB1.8/10 مقاطع، Mira02/Bilal05 والقراءة04 والمفردات/النماذج02 والاستماع03؛ لا استماع أو توليد أو اعتماد جديد. أربعة تغييراتsource_line فقط في سجل الصوت، وPHR ثابت؛ جمعQualität وحدودWerbung/nachhaltig إضافات مكتوبة.
- **التغطية:**37/53 درسًا والبوابة منفصلة؛16 متبقية وخطة2.44. **التالي CR39/B1.9 — السفر والمواصلات والبيئة**؛ احفظMina02/Karim03 والرواة02/03، واعتماد معايناتB1.9 ما زال معلقًا. لا إعادة توليد أو اختيار أصوات. كل تعديل يرفع فور فحصه؛ لا مراجع بشري شرطًا أو تبديل فرع أو دمج. الأقسام الأقدم أدناه أرشيف زمني.


## الفحوص التراكمية — CR38

- **PASS:** البناء والتحقق و38 حارس مراجعة وخمس مجموعاتNode وسلامةJS وgit diff. الحزمة **2,094,031 بايت**؛53 درسًا،428 عنوان تمرين،61 قسم حوار،754 مفردة،530 سؤال درس+10 بوابة،109 مهمات،1080 صفcatalog،217 أصلًا/474 مقطعًا،137ready و80 معلقة.
- **المتصفح:** Chromium143.0.7499.0، Playwright1.58.2، axe4.11.0؛ نجحت المجموعات الخمس browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout. فحص1440×900 و390×844 شملRTL والقفل والتنقل والتفريغات وتشغيلMP3 آليًا بسرعتي1 و0.8 والتوقف عند الانتقال، دون أخطاء صفحة في الاختبار العام.
- **دون اتصال والتحديث:** إعادة التحميل والتنقل والصوت الكامل ونطاقات البايت/اللاحقة و416/503؛ تحديثfixture v42 إلىv86 دون إعادة تحميل قسرية، وحفظ التقدم والإجابات وعزل المخازن وإعادة تخزين الصوت عند الاتصال. لا ضمان لبقاء كل الملفات مخزنة أو اختبار لكل ترحيل تاريخي.
- **الدليل والتدرج:** سجلB1.8 القديمv1 محفوظ لكنه لا يمنح إتقانv2 أو يفتحB1.9؛ المسودة القديمة مرفوضة. الدرجة والدليل الحاليان يفتحان التالي، وحذف الدليل يغلقه. P01 دون مربع جهر وP02 تتطلبه؛ ثلاثة إقرارات وحدا150/130 لازمة. النموذجان415/370 حرفًا؛ لا تصحيح آلي لعدد الجمل أو جودة اللغة والنطق.
- **axe:**165 حالة ممثلة وصفر مخالفات للقواعد المختارة؛ **115 ظهورًا غير حاسم تشمل262 ظهورًا لعقد**. ليست شهادةWCAG ولا تأكيدًا بأن غير الحاسم مخالفة؛ لا مراجع بشري شرطًا للاستمرار.
- **العرض الضيق:**126 حالة،63 لكل من320×900 و568×320، تشمل53 درسًا بجميع التفريغات والجداول والقائمة. ليست اختبارات هاتف فعلي أو تكبير أصلي.
- **التعثرات وحدود الإصلاح:** توقف مولدCSV عند اختلاف مسافة عنوان القواعد؛ أعيد العنوان الأصلي ونفذ الجزء المتبقي فقط. فشلprogression الأول قبل وصول التنفيذ إلى تحديث عقد المهمتين ثم نجح؛ وصُحح بحث لفظي في الحارس عن«مستبدلًا». لا تغيير للنص الألماني المسجل بسبب ذلك. نجحت مجموعات المتصفح من أول تشغيل هنا؛ نجحforms_keyboard بالعرضين دون تعديل اختباره، لكن تذبذبnative chooser التاريخي غير محلول.
- **الصوت والنشر:** تشغيل آلي صامت ومطابقة نصية وبنيةMP3، لا استماع أو اعتماد جديد. نجح نشر التنفيذ331b7d3 إلىPreview حسبGitHub API؛ لم تختبر الواجهة البعيدة أوProduction. نجاح التنفيذ لا يُنسب تلقائيًا إلى أيcommit لاحق.

**رفع التنفيذ:**`331b7d3fc29fafe05aeab96d7a1f3ec45be0fccb`، نجاحPreview رقم6947703129 حسبAPI؛ PR#1 مفتوحة وغير مدمجة. لا اختبار للواجهة البعيدة أوProduction. [السجل الفردي](reviews/b1-08-review.md).

---

## إيصال رفع CR37 — 2026-10-08

- **التنفيذ:** `5fb2d98671b6b9bae5b54a5c5610baa4059d70bc`؛ **السجل والفحوص:** `52af008f486c46782b26011efd8c4f61a54d184b`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. هذا الإيصال يُرفع فور فحصه بعنوان `Record CR37 delivery receipt`؛ معرفه في git log، ولم يُستعلم عن نشره.
- الاستعلام الأخير بالـSHA الصريح للتقرير: **PR#1 OPEN، mergedAt=null، head=52af008**. نشر التنفيذ والتقرير فشل بسبب **Deployment rate limited — retry in 24 hours**، وdeployments=[] لكليهما. لا إعادة نشر متكررة أو ترقية مدفوعة؛ لا اختبار للواجهة البعيدة أو Production، والرفع لا يعني الدمج أو النشر.
- **PASS:** البناء والتحقق و37 حارسًا وخمس مجموعات Node وخمس مجموعات متصفح. الحزمة **2,081,619 بايت**، `b1-07-v2`، `v85`. في axe:161 حالة وصفر مخالفات للقواعد المختارة، مع112 ظهورًا غير حاسم/256 ظهورًا لعقد؛ وفي العرض الضيق126 حالة. عولج فقد مكتبة Chromium في البيئة المؤقتة فقط؛ لا إصلاح مزعوم لتذبذب native chooser التاريخي.
- **المراجعة:**114 وحدة/45 بندًا/30 خيارًا/6 معايير/20 صفحة مرجعية كاملة في23 جزءًا؛ خمس صفحات غير موجودة مستبعدة. Alltagsroutine راجعت صرفيًا مع مرجع Routine للرأس، لا صفحة مركب لم تُقرأ. حُفظت29 صيغة خيار والفهارس والروابط و80% وحد160؛ تغير خيار Q10 الصحيح وحده إلى عدم الإلزام بالتمثيل. P01 كتابة فقط وP02 كتابة وجهر، بنموذجين270/350 حرفًا؛ لا تصحيح آلي للغة أو النطق.
- **الصوت والحفظ:** خمسة أصول B1.7/12 مقطعًا وأصوات Laila02/Omar03 والرواة02/03 ثابتة؛ لا استماع أو توليد أو اعتماد جديد. حُفظت52 درسًا آخر و590 ملفًا محميًا تشمل474 MP3، مع بقية مفاتيح الحزمة والصفوف خارج الدرس. توضيح جمع Austausch مكتوب فقط.
- **التغطية:**36/53 درسًا والبوابة منفصلة؛17 متبقية، وخطة2.43. **التالي CR38/B1.8 — الاستهلاك والإعلان: je … desto**؛ احفظ Mira02/Bilal05 وراوية القراءة04 المستقلة والمفردات/النماذج02 والاستماع03. كل تعديل يرفع فور فحص مجموعته؛ لا مراجع بشري شرطًا أو تبديل فرع أو دمج. الأقسام الأقدم أدناه أرشيف زمني.


## الفحوص التراكمية — CR37

- **PASS:** البناء والتحقق و37 حارس مراجعة وخمس مجموعاتNode وسلامةJS وgit diff؛ الحزمة **2,081,619 بايت**. التحقق:53 درسًا،428 عنوان تمرين،61 قسم حوار،754 مفردة،530 سؤال درس+10 بوابة،109 مهمات،1080 صفcatalog،217 أصلًا/474 MP3،137ready و80 معلقة.
- **المتصفح:** Chromium143.0.7499.0، Playwright1.58.2، axe4.11.0؛ المجموعات الخمس browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout نجحت. فحص1440×900 و390×844، RTL والقفل والتنقل والتفريغات وتشغيلMP3 آليًا بسرعتي1 و0.8 والتوقف عند الانتقال؛ لا أخطاء صفحة في الاختبارات العامة.
- **دون اتصال:** إعادة التحميل والتنقل وMP3 الكامل ونطاقات البايت/اللاحقة و416/503؛ تحديثfixture v42 إلىv85 دون إعادة تحميل قسرية، وحفظ التقدم والإجابات وعزل المخازن وإعادة تخزين الصوت المفقود عند الاتصال. ليس ضمانًا لبقاء كل الصوت مخزنًا أو اختبارًا لكل ترحيل تاريخي.
- **الدليل والتدرج:** سجلB1.7 القديمv1 يبقى محفوظًا دون منحه إتقانv2 أو فتحB1.8؛ المسودة القديمة مرفوضة. الدرجة والدليل الحاليان يفتحان التالي، وحذف الدليل يغلقه. مربع الجهر غائب عنP01 ومطلوب فيP02؛ الإقرارات الثلاثة وحد160 لازمة. النموذجان270/350 حرفًا؛ لا يعد التطبيق الجمل والأدوار أو يصحح اللغة والنطق آليًا.
- **axe:**161 حالة ممثلة، صفر مخالفات للقواعد الآلية المختارة؛ **112 ظهورًا غير حاسم تشمل256 ظهورًا لعقد**. هذا ليس اجتيازWCAG كاملًا؛ النتائج غير الحاسمة ليست مخالفات مؤكدة أو عملًا يُشترط له مراجع بشري قبل الاستمرار.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320، تشمل53 درسًا وتفريغاتها والجداول والقائمة. ليست اختبارات هاتف فعلي أو تكبير أصلي للمتصفح.
- **التعثر والإصلاح البيئي:** أول تشغيلChromium فشل قبل فتح التطبيق بسببlibnspr4.so مفقودة؛ استُخرجت مكتباتal2023 المصاحبة في/tmp وضُبطLD_LIBRARY_PATH، ثم نجحت المجموعات الخمس. لم يُعدل التطبيق أو الاختبار بسبب ذلك. forms_keyboard نجح من أول تنفيذ بعد تجهيز المتصفح؛ تذبذبnative chooser التاريخي غير محلول ولا سبب مثبت له.
- **الصوت:** تشغيل آلي صامت ومطابقة تفريغات وبنيةMP3، لا استماع أو اعتماد جديد. الملفات والأصوات والتوفر في الدرس محفوظة. الواجهة البعيدة وProduction لم تختبرا.

**رفع التنفيذ:**5fb2d98671b6b9bae5b54a5c5610baa4059d70bc؛ PR#1 مفتوحة وغير مدمجة. فشل نشره بسببحدVercel، ولاdeployments؛ لا اختبار واجهة بعيدة أوProduction. سجلCR37 المفصل في[المراجعة](reviews/b1-07-review.md).

---

## إيصال رفع CR36 — 2026-10-08

- **التنفيذ:** `08d8237b6e74d3fd9970ada18e203c2be6c6f6de`؛ **السجل والفحوص:** `fbe217c6b997b9211d1e7f5aad9dbd6580462d38`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابقHEAD/origin بعد كل رفع. هذا الإيصال يُرفع فور فحصه بعنوان `Record CR36 delivery receipt`؛ معرفه فيgit log، ونشره غير مستعلم عنه.
- آخر استعلام للرأسfbe217c: **PR#1 OPEN، mergedAt=null**. نشر **تنفيذ08d8237 ناجح** إلىPreview رقم6946734014: https://deutschlern-qq17xcrv2-balinader-2671s-projects.vercel.app . نشر **السجلfbe217c** فشل بسبب **Deployment rate limited — retry in 24 hours**، وdeployments=[]. لا ننسب نجاح التنفيذ إلى أحدثcommit ولا ندعي اختبار الواجهة البعيدة أوProduction؛ لا إعادة نشر متكررة أو ترقية مدفوعة.
- **PASS:** البناء والتحقق و36 حارسًا وخمس مجموعاتNode ومجموعات المتصفح الخمس علىv84؛ الحزمة2,068,845 بايت وb1-06-v2. فُحصت157 حالةaxe بصفر مخالفات للقواعد المختارة، مع108 ظهورات غير حاسمة/243 ظهورًا لعقد، و126 حالة عرض ضيق. تعثر مستخرج أمثلةprogression الأول موثق؛ أعيد العنوان الأصلي وحُدد نطاق الأمثلة دون تخفيف مطابقة التفريغ ثم نجح.
- **التغطية:**107 وحدات/37 بندًا/30 بديل تقييم/6 معايير/10 صفحات مرجعية كاملة؛ **35/53 درسًا والبوابة منفصلة،18 متبقية**. خيارات الأسئلة ومفاتيحها وروابطها و80% وحد110 ثابتة؛ خمسة أصول/10 مقاطعB1.6 وأصواتها محفوظة بلا استماع أو توليد أو اعتماد جديد. النموذجان248/261 حرفًا مكتوبان غير مسجلين.
- WHO وNHS مرجعان للحدود العامة لا تقييمًا لحالة أو تصريحًا بعلاج. Konjunktiv وWHO قرئا بالجزأين؛ لا صفحات فاشلة أوPDF غير مقروءة في العداد. نجاحforms_keyboard من أول تنفيذ هنا لا يصلح تذبذبه التاريخي؛ لا تعديل للتطبيق/اختبارforms أو سبب مثبت.
- **التالي CR37/B1.7 — أساليب الحياة والعادات والثقافات: الروابط الثنائية.** راجع كل نص وتمرين وخيار ومعيار والتوازي والنفي دون تعميم ثقافي، واحفظLaila02/Omar03 والرواة02/03 بلا إعادة توليد أو اختيار جديد. كل تعديل يرفع فور فحص مجموعته؛ لا تبديل فرع أو دمج، ولا مراجع بشري شرطًا. جميع القيود والملفات والنتائج في الأقسام التالية؛ العمل غير المدمج لا يوصف بأنه مكتمل.

## الفحوص وحدودها — CR36

- **PASS: البناء والتحقق**؛ الحزمة **2,068,845 بايت** والمخزن **v84**. 53 درسًا و428 عنوان تمرين و60 عنوانًا يطابق عداد الحوار و754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء و1080 صف كتالوج. زيادة عداد الحوار بسبب عنوانT08 لا تسجيل جديد. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending.
- **PASS:36 حارس مراجعة** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–12 وB1.1–6. الحارس الجديد يطابق107 وحدات و37 بندًا وصفوف التصريف الستة و30 بديل تقييم وستة معايير والنموذجين والمصدر والربط والبصمات والتفريغات؛ البناء لا يُحسب مراجعة فردية للدروس المتبقية.
- **PASS: خمس مجموعاتNode:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs، وgit diff --check.
- **تعثر أول فيprogression:** تغيّر تنسيق عنوان قسم القاعدة فكسرsplit القديم فيالسطر1780. أعيد العنوان الأصلي، وحُدد استخراج أمثلةMODEL قبل قسم المساعدة الجديد كي لا يحسب شروحه تسجيلات. بقيت مقارنة نصMODEL بالملف المسجل حرفية وصار الاختبار ناجحًا. حُدث عقد الأداء القديم إلى مطابقة نص المهمتين ونوعي الدليل وإقراريالجهر[false,true] بدل فرض الكلام على كليهما. لا إضعاف لفحوص الأصوات أوA2.9.
- **PASS: مجموعات المتصفح الخمس** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**، معPlaywright1.58.2 وaxe-core4.11.0. package/lock لم يتغيرا؛ حزمةSparticuz143.0.4 ومكتباتal2023 مؤقتة خارجGit. لا فشل بدءChromium في هذه الجولة.
- العام عند1440×900 و390×844:RTL والتنقل والقفل والتفريغات وتشغيلMP3 بسرعتي1 و0.8 والتوقف عند الانتقال؛ العمل دون اتصال ونطاقات البايت و416/503. تشغيل آلي صامت لا استماع لكل ملف أو ضمان بقاء كل الصوت مخزنًا.
- تحديث عامل الخدمة منfixture v42 إلىv84 دون إعادة تحميل قسرية، وحفظ التقدم والإجابات وعزل المخازن، و503 للصوت المفقود ثم إعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي أوProduction.
- **progression:** يبقى سجلB1.6 القديمv1 دون منحه إتقانv2 أو فتحB1.7؛ ترفض المسودة القديمة. الدرجة والدليل والنسخة الحالية تفتح التالي، وحذف الدليل يمنعه. P01 لا يظهر فيه مربع جهر؛P02 يلزمه. جميع الإقرارات وحد110 مطلوبة، والنموذجان248/261 حرفًا؛ هذه ليست فحوصًا آلية لعدد الجمل أو جودة اللغة أو النطق أو الملاءمة الطبية.
- **axe:**157 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة؛ **108 ظهورات غير حاسمة تشمل243 ظهورًا لعقد**. النتائج غير الحاسمة ليست مخالفات مؤكدة أو نجاحًا شاملًا؛ لا شهادةWCAG أو مراجع بشري شرطًا للاستمرار.
- **forms_keyboard:** نجح1440 و390 من أول تنفيذ فيCR36، بما فيه التصدير والاستيراد والملف غير الصالح والمسودات والتمرير. تذبذبnative filechooser التاريخي فيCR29/CR33 **باقٍ غير محلول**؛ لا تعديل للتطبيق أو اختبارforms أو المهلة ولا سبب سابق مثبت. نجاح الجولة لا يعد إصلاحًا.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320؛ تشمل الدروس والتفريغات والجداول. viewport ليس هاتفًا فعليًا أو تكبير نظام.
- **الحفظ مقابلce5af503e1a89c2b38ae751a38a514ec446e0c92:**52 درسًا أخرى وكل مفاتيحcourse خارجlessons و1060 صف كتالوج أخرى و212 صف سجل صوت أخرى مطابقة. 589 ملفًا محميًا مطابقة بايتًا ببايت، منها474MP3 وplaylist وapp.js/CSS/index/package/lock وأداتاbuild/verify والمصادر المحمية الأخرى.
- تغيرت أربعة صفوف صوت فقط وفيsource_line وحده:MODEL/DLG/READ/LST. صفPHR ثابت، وإجمالي الصفوف الصوتية الثابتة213، منها212 ليست لـB1.6. حالةready تاريخية محفوظة؛ الألفاظ والأصوات والمسارات والتفريغات ثابتة، ولا اعتماد جديد.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم `content/B1/lesson-06-health-fitness-advice.md/.assessment.json` والحزمة `data/course.json`؛20 صفcatalog وأربعة صفوفaudio-register مرجعية فقط. الخيارات الثلاثون والفهارس والروابط و80% محفوظة؛ تغير تفسيرQ07 عربيًا وQ09 لمنع استنتاج جنس الراوي. كلاP مرتبط بـT08.
- عامل الخدمة واختباراه؛progression/accessibility_audit؛ الجديد `tools/test_b1_06_review.py`؛ السجلان `data/reviews/b1-06-review.json/.md` والفهرس وREADME وPROGRESS وخطة التحسين2.42 وتقرير المتصفح وملفا التسليم. لا تغييرapp.js/CSS/playlist/MP3/package/lock/test_forms_keyboard.
- رُفع التنفيذ **08d8237b6e74d3fd9970ada18e203c2be6c6f6de** إلى الفرع الوحيد `arena/01a1036f-deutschlern` وتطابقHEAD/origin. رُفعت مجموعة السجل والفحوص `fbe217c6b997b9211d1e7f5aad9dbd6580462d38`، وتطابقHEAD/origin؛ الإيصال أعلاه يثبت حالة الرفع والنشر.
- آخر استعلامPR#1:OPEN وmergedAt=null والرأس08d8237. **نجح نشر تنفيذ08d8237 إلىPreview**، deployment6946734014، والرابط https://deutschlern-qq17xcrv2-balinader-2671s-projects.vercel.app . الحالة مؤكدة منAPI؛ الواجهة البعيدة وProduction لم تختبرا، ولا يُنسب النجاح إلىcommit التقرير اللاحق. لا إعادة نشر متكررة أو ترقية مدفوعة عند حد الخدمة.
- **التالي CR37/B1.7 — أساليب الحياة والعادات والثقافات: الروابط الثنائية.** اقرأ المصدر والتقييم وأصول الصوت المكتوبة كاملة، وراجع التوازي معsowohl…als auch / nicht nur…sondern auch / entweder…oder / weder…noch، وكل نص وتمرين وخيار ومعيار دون تعميم ثقافي. احفظLaila02/Omar03 والقراءة02 والاستماع03 والمفردات/النماذج02، ولا تعاود اختيار الأصوات أو توليد المقاطع الموجودة. لا حاجة لإعادةB1.6.
- كل تعديل يرفع فور فحص مجموعته؛ لا تبديل فرع أو دمجPR#1 أو إعلان اكتمال غير مدمج. المحتوى والتقييم والتطبيق قبل الصوت، ولا مراجع بشري شرطًا. لا حذف عمل أوreset/clean بلا مقارنة، ولا إخفاء صوت أوready دون موافقة؛ حد10 طلبات صوت/رد. قراراتB1.9/B1.10 المعلقة واختيارB1.11 محفوظة، وكذلكA2.7 Q08→T05 وفحوصA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## أرشيف CR35 — لا ينسخ الحالة أعلاه

## إيصال رفع CR35 — 2026-10-08

- **التنفيذ:** `063068653f5ed1abc5498c325a9770bd15b13a3f`؛ **السجل والفحوص:** `4d4a10edac6df2c5cab9f988f670d702aa8ed22e`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. هذا الإيصال يُرفع فور فحصه بعنوان `Record CR35 delivery receipt`؛ معرفه فيgit log، ونشره غير مستعلم عنه.
- آخر استعلام صريح للرأس4d4a10e: **PR#1 OPEN، mergedAt=null**. نشر **تنفيذ0630686 ناجح** إلىPreview رقم6946403361: https://deutschlern-fg3clft8i-balinader-2671s-projects.vercel.app . أما نشر **السجل4d4a10e** ففشل بسبب **Deployment rate limited — retry in 24 hours**، وdeployments=[]. لا ننسب نجاح التنفيذ إلى أحدثcommit، ولا ندعي اختبار الواجهة البعيدة أوProduction؛ لا إعادة نشر متكررة أو ترقية مدفوعة.
- **PASS:** البناء والتحقق و35 حارسًا وخمس مجموعاتNode ومجموعات المتصفح الخمس علىv83؛ الحزمة2,057,755 بايت وb1-05-v2. فُحصت153 حالةaxe بصفر مخالفات للقواعد المختارة، مع105 ظهورات غير حاسمة/237 ظهورًا لعقد، و126 حالة عرض ضيق. فشلprogression القديم بسبب عبارة الشفهي الملغاة موثق؛ استُبدل باختبارات تطابق المصدر والدليل ثم نجح، دون إضعاف فحوص الصوت.
- **التغطية:**107 وحدات/39 بندًا/30 بديل تقييم/6 معايير/10 صفحات مرجعية كاملة. **34/53 درسًا والبوابة منفصلة،19 متبقية.** جميع سجلات الأسئلة العشرة وخياراتها ومفاتيحها وروابطها ثابتة، وخمسة أصول/10 مقاطعB1.5 وأصواتها محفوظة بلا استماع أو توليد أو اعتماد جديد. النماذج279/254 حرفًا مكتوبة غير مسجلة؛ حد110 محفوظ.
- forms_keyboard نجح من أول تنفيذ فيCR35 عندالعرضين؛ هذا لا يصلح التذبذب التاريخي، ولا تعديل للتطبيق/الاختبار أو سبب مثبت. أربع صفحاتnot found مستبعدة، وVerbindung قرئت فيجزأين0و1؛ لا مراجع بحث مقتطفة أوPDF غير مقروء في العداد.
- **التالي CR36/B1.6 — الصحة واللياقة والنصيحة.** راجع كل نص وتمرين وخيار ومعيار بالمصادر، واحفظHiba02/Fares03 والمفردات/النماذج/القراءة02 والاستماع03 بلا إعادة توليد أو طلب اختيار جديد. كل تعديل يرفع فور فحص مجموعته؛ لا تبديل فرع أو دمج، ولا مراجع بشري شرطًا. بقية القيود والملفات والنتائج في الأقسام التالية؛ العمل غير المدمج لا يوصف بأنه مكتمل.

## الفحوص وحدودها — CR35

- **PASS: البناء والتحقق**؛ الحزمة **2,057,755 بايت** والمخزن **v83**. 53 درسًا و428 عنوان تمرين و59 عنوانًا يطابق عداد الحوار و754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء و1080 صف كتالوج. الزيادة إلى59 عنوان حوار ناتجة عن عنوانT08، وليست تسجيلًا جديدًا. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending.
- **PASS:35 حارس مراجعة** تغطي A0.1–5 والبوابة وA1.1–12 وA2.1–12 وB1.1–5. الحارس الجديد يطابق107 وحدات و39 بندًا، وثماني صيغ في جدول الضمائر، و30 بديل تقييم وستة معايير والمصدر والربط والنموذجين والبصمات والتفريغات. هذه التغطية لا تجعل البناء مراجعة فردية للدروس المتبقية.
- **PASS: خمس مجموعاتNode:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs، وgit diff --check.
- **فشل أول موثق فيprogression:** assertion قديم فيالسطر2044 كان يفرض عبارة «أو قدّمه شفهيًا» الملغاة لتعارضها مع دليل التطبيق. استُبدل بمنع العبارة القديمة ومطابقة نص كل مهمة للمصدر وspeakAloud=[false,true]؛ ثم أعيد الاختبار ونجح. أضيفت فحوصv2/الدليل قبل كتلة الصوت، وبقيت بقية الكتلة التاريخية حرفيًا باستثناء هذا العقد النصي القديم؛ لا تخفيف لفحوص الصوت أوA2.9.
- **PASS: مجموعات المتصفح الخمس** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**، معPlaywright1.58.2 وaxe-core4.11.0. ثُبتت حزمpackage-lock دون تغييره؛ Sparticuz143.0.4 ومكتباتal2023 مؤقتة خارجGit. لم يتعثر تشغيل Chromium فيهذه الجولة.
- العام عند1440×900 و390×844:RTL والتنقل والقفل والتفريغات وتشغيلMP3 بسرعتي1 و0.8 والتوقف عند الانتقال؛ العمل دون اتصال ونطاقات البايت و416/503. التشغيل آلي صامت، لا استماع لكل ملف أو ضمان حفظ الصوت دائمًا.
- تحديث عامل الخدمة منfixture v42 إلىv83 دون إعادة تحميل قسرية، وحفظ التقدم والإجابات وعزل المخازن، و503 للصوت المفقود ثم إعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي أوProduction.
- **progression:** سجلB1.5 القديمv1 يبقى مخزنًا لكنه لا يمنح إتقانv2 أو يفتحB1.6؛ المسودة القديمة مرفوضة. الدرجة والدليل والنسخة الحالية تفتح التالي، وحذف الدليل يمنعه. P01 كتابة فقط دون مربع جهر؛ P02 يطلب الجهر. جميع الإقرارات وحد110 مطلوبان؛ النموذجان279/254 حرفًا. الحروف والإقرارات لا تتحقق آليًا من عدد الجمل أو جودة اللغة أو النطق.
- **axe:**153 حالة ممثلة، وصفر مخالفات للقواعد الآلية المختارة؛ **105 ظهورات غير حاسمة تشمل237 ظهورًا لعقد**. النتائج غير الحاسمة ليست مخالفات مؤكدة أو نجاحًا شاملًا؛ لا شهادةWCAG أو مراجع بشري شرطًا للاستمرار.
- **forms_keyboard:** نجح1440 و390 من أول تنفيذ للاختبار فيCR35، بما فيه التصدير والاستيراد والملف غير الصالح والمسودات والتمرير الضيق. تذبذبnative filechooser التاريخي فيCR29/CR33 **لا يزال غير محلول**؛ لم يتغير التطبيق أو اختبارforms أو المهلة، ولم يثبت سبب العطل السابق. نجاح الجولة لا يعد إصلاحًا.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320؛ تشمل الدروس والتفريغات والجداول. viewport ليس هاتفًا فعليًا أو تكبير نظام.
- **الحفظ مقابل3048537769a6a2523af80066bb04b23f2273ab9e:**52 درسًا أخرى وكل مفاتيحcourse خارجlessons، و1060 صف كتالوج أخرى و212 صف سجل صوت أخرى مطابقة. 589 ملفًا محميًا مطابقة بايتًا ببايت، منها474MP3 وplaylist وapp.js/CSS/index/package/lock وأداتاbuild/verify والمصادر المحمية الأخرى.
- سجل الصوت تغير في **ثلاثة صفوف فقط وفيsource_line وحده:DLG/READ/LST**. صفاPHR/MODEL ثابتان، فيكون إجمالي الصفوف الصوتية الثابتة214، منها212 ليست لـB1.5. الأصوات والحالات والتفريغات والمسارات الفعلية لم تتغير؛ لا اعتماد صوتي جديد.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم `content/B1/lesson-05-cities-relative-clauses.md/.assessment.json` والحزمة `data/course.json`؛20 صفcatalog وثلاثة صفوفaudio-register مرجعية فقط. سجلاتQ01–Q10 كلها مطابقة للخط الأساسي، بما فيها الربط والتفسير والبدائل؛ كلاP مرتبط بـT08.
- عامل الخدمة واختباراه؛progression/accessibility_audit؛ الجديد `tools/test_b1_05_review.py`؛ `data/reviews/b1-05-review.json/.md` والفهرس وREADME وPROGRESS وخطة التحسين2.41 وتقرير المتصفح وملفا التسليم. لا تغييرapp.js/CSS/playlist/MP3/package/lock/test_forms_keyboard.
- رُفع التنفيذ **063068653f5ed1abc5498c325a9770bd15b13a3f** إلى الفرع الوحيد `arena/01a1036f-deutschlern` وتطابقHEAD/origin. رُفعت مجموعة السجل والفحوص `4d4a10edac6df2c5cab9f988f670d702aa8ed22e`، وتطابق HEAD/origin؛ الإيصال أعلاه يثبت حالة الرفع والنشر.
- آخر استعلامPR#1:OPEN وmergedAt=null والرأس0630686. **نجح نشر تنفيذ0630686 إلىPreview**:deployment6946403361، والرابط https://deutschlern-fg3clft8i-balinader-2671s-projects.vercel.app . حالةAPI مؤكدة؛ الواجهة البعيدة وProduction لم تختبرا. لا ننسب هذا النجاح إلىcommit التقرير اللاحق؛ لا إعادة نشر متكررة أو ترقية مدفوعة عند حد الخدمة.
- **التالي CR36/B1.6 — الصحة واللياقة والنصيحة:** اقرأ المصدر والتقييم وأصول الصوت المكتوبة كاملة، وراجع كل نص وتمرين وخيار ومعيار والتمييز بين نصيحة لغوية عامة وادعاء صحي. احفظHiba02 وFares03، والمفردات/النماذج/القراءة02 والاستماع03؛ لا إعادة اختيار أصوات أو توليد التسجيلات الموجودة. لا حاجة لإعادةB1.5.
- كل تعديل يرفع فور فحص مجموعته؛ لا تبديل فرع أو دمجPR#1 أو إعلان اكتمال العمل غير المدمج. المحتوى والتقييم والتطبيق قبل الصوت، ولا مراجع بشري شرطًا. لا حذف عمل أوreset/clean بلا مقارنة، ولا إخفاء تسجيل أوready دون موافقة؛ حد10 طلبات صوت/رد. قراراتB1.9/B1.10 المعلقة واختيارB1.11 محفوظة، وكذلكA2.7 Q08→T05 وفحوصA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## أرشيف CR34 — لا ينسخ الحالة أعلاه

## إيصال رفع CR34 — 2026-10-08

- **التنفيذ:** `8e26cc5bd59f72e2c8eeab260c5a0e5657ba30e3`؛ **توضيح المطابقة والمخزن:** `fb7f91302e95075d213d9a41455f873a37671507`؛ **السجل والفحوص:** `308d1f16f3ce8b870aadd6c4732ce0c531203154`. رُفعت جميعها إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. هذا الإيصال يوثق النتيجة ويُرفع فور فحصه بعنوان `Record CR34 delivery receipt`؛ معرفه فيgit log، ونشره غير مستعلم عنه.
- آخر استعلام صريح للرأس308d1f1: **PR#1 OPEN، mergedAt=null**. **Vercel failure: Deployment rate limited — retry in 24 hours** وdeployments=[]؛ كذلك فشل نشرfb7f913 بالسبب نفسه. لا إعادة نشر يدوية متكررة أو ترقية مدفوعة. نجاحGitHub لا يعني نشرPreview/Production، ولم تختبر الواجهة البعيدة.
- **PASS:** البناء والتحقق و34 حارسًا وخمس مجموعاتNode ومجموعات المتصفح الخمس علىv82؛ الحزمة2,046,201 بايت وb1-04-v2. فُحصت149 حالةaxe بصفر مخالفات للقواعد المختارة، مع102 ظهور غير حاسم/230 ظهورًا لعقد، و126 حالة عرض ضيق. نجاحforms_keyboard فيCR34 لا يصلح تذبذبه السابق؛ لم يتغير التطبيق أو الاختبار ولم يثبت سبب سابق.
- **التغطية:**103 وحدات/34 بندًا/30 بديلًا/6 معايير/10 صفحات مرجعية كاملة؛ **33/53 درسًا والبوابة منفصلة،20 متبقية**. خمسة أصول/10 مقاطعB1.4 والأصوات محفوظة بلا استماع أو توليد أو اعتماد جديد. جمعTabellenkalkulationen مكتوب فقط، وخامسMODEL موضح كصياغة مستقلة، والنموذجان غير مسجلين.
- **التالي CR35/B1.5 — المدن والجمل الموصولة.** راجع كل نص وتمرين وخيار ومعيار مع المصادر، واحفظMara02/Yusuf03 والنماذج/المفردات/القراءة02 والاستماع03. لا إعادة توليد الموجود أو طلب اختيار الأصوات من جديد. كل تعديل يرفع فور فحصه؛ لا تبديل فرع أو دمج، ولا مراجع بشري شرطًا. بقية القيود والملفات والنتائج في الأقسام التالية. لا نصف العمل غير المدمج بأنه مكتمل.

## الفحوص وحدودها — CR34

- **PASS: البناء والتحقق**؛ الحزمة **2,046,201 بايت** والمخزن **v82**. 53 درسًا و428 عنوان تمرين و58 عنوانًا يطابق عداد الحوار و754 مفردة؛ 530 سؤال درس+10 للبوابة، و109 مهمات أداء و1080 صف كتالوج. زيادة عداد عناوين الحوار إلى58 بسبب عنوان T08 الجديد، لا تسجيل جديد. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending.
- **PASS:34 حارس مراجعة** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–12 وB1.1–4. الحارس الجديد يطابق103 وحدات و34 بندًا و30 بديلًا وستة معايير والمصدر والربط والنموذجين والبصمات، وأجزاء التفريغ المكتوب لكل أصل. البناء وحده لا يُحسب مراجعة فردية لباقي الدروس.
- **PASS: خمس مجموعات Node:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغة app.js وservice-worker.js وكل tools/test_*.cjs، وgit diff --check. كتلة اختبارات الصوت التاريخية من expectedAudioLessonByPrefix مطابقة للخط الأساسي، بما فيها A2.9؛ لم تضعف لإمرار الفحص.
- **المتصفح:** نجحت المجموعات الخمس browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout أولًا علىv81 ثم أُعيدت كلها علىv82 بعد توضيح T03. Chromium **143.0.7499.0**، وPlaywright1.58.2 وaxe-core4.11.0. package/lock لم يتغيرا؛ Sparticuz143.0.4 والمكتبات مؤقتة خارجGit.
- **تعثر البيئة قبل الاختبارات:** أول تشغيل Chromium لم يبدأ بسبب libnspr4.so المفقودة. استخرجت al2023 إلى /tmp وأعيد التشغيل؛ ليس عطلًا في التطبيق أو اختبار متصفح ناجحًا قبل تجهيز البيئة.
- العام عند1440×900 و390×844: RTL والتنقل والتفريغات وتشغيل MP3 بسرعتي1 و0.8 والتوقف عند التنقل؛ العمل دون اتصال ونطاقات البايت و416/503. التشغيل آلي صامت، لا مراجعة سمعية لكل ملف أو ضمان بقاء كل الصوت مخزنًا.
- تحديث عامل الخدمة منfixture v42 إلىv82 دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت المفقود ثم إعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل انتقال تاريخي أو اختبارProduction.
- **progression:** سجل B1.4 القديمv1 يبقى مخزنًا لكنه لا يمنح إتقانv2 أو يفتحB1.5؛ ترفض المسودة القديمة. الدرجة والدليل والنسخة الحالية تفتح التالي، وحذف الدليل يعيد المنع. P01 لا يظهر فيه مربع الجهر ولا يلزمه؛ P02 يلزمه. كلاهما يحتاج كل الإقرارات والحد الحرفي. النموذجان275/261 حرفًا فوق220/210؛ هذه ضوابط دليل لا تصحيح لغة أو نطق.
- **axe:**149 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة؛ **102 ظهور غير حاسم تشمل230 ظهورًا لعقد**. هذه ليست مخالفات مؤكدة ولا شهادةWCAG أو نجاحًا شاملًا، ولا تجعل مراجعًا بشريًا شرطًا للاستمرار.
- **forms_keyboard:** نجح1440 و390 علىv81 وعلىv82 من أول تنفيذ لكل منهما، بما فيه التصدير والاستيراد والملف غير الصالح والمسودات. **تذبذب native filechooser السابق فيCR29/CR33 باقٍ غير محلول:** لا تعديل للتطبيق أو الاختبار، ولا تخفيف شروط أو سبب مثبت؛ نجاح هذه الجولة لا يعني إصلاحه. سجلاتCR33 السابقة باقية في الأرشيف.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320؛ تشمل الدروس مع التفريغات والجداول. viewport ليس هاتفًا فعليًا أو تكبير نظام.
- **الحفظ مقابل dc5aae5056bd3acfbe1e4c83b43cb2eeb51a6815:**52 درسًا أخرى وكل مفاتيح course خارجlessons، و1060 صف كتالوج أخرى و212 صف سجل صوت أخرى ثابتة. 589 ملفًا محميًا مطابقة بايتًا ببايت، منها474MP3 وplaylist وapp.js/CSS/package/lock وأداتاbuild/verify والمصادر الأخرى المحمية.
- تغيرت أربعة صفوف صوت فقط: MODEL في source_line وnotes، وDLG في source_line وبادئة planned_output_path، وREAD/LST في source_line. صفPHR ثابت، وكذلك المسارات الفعلية والأصوات والحالات. العدد212 هو الصفوف غير التابعة لـB1.4؛ مجموع الصفوف الثابتة213 بإضافةPHR، ولا نخلط الرقمين.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم `content/B1/lesson-04-continuing-education-damit.md/.assessment.json` والحزمة `data/course.json`؛20 صفًا في catalog وأربعة في audio-register. جميع الخيارات الثلاثين والفهارس و80% محفوظة؛Q02→T01 وQ04→T04/T07 وكلاP→T08.
- عامل الخدمة واختباراه؛ progression/accessibility_audit؛ `tools/test_b1_04_review.py`؛ السجلان `data/reviews/b1-04-review.json/.md` والفهرس وREADME وPROGRESS وخطة التحسين2.40 وتقرير المتصفح وملفا التسليم. لا تعديل app.js/CSS/playlist/MP3/package/lock/test_forms_keyboard.
- رُفع التنفيذ **8e26cc5bd59f72e2c8eeab260c5a0e5657ba30e3** ثم توضيحT03 والمخزن **fb7f91302e95075d213d9a41455f873a37671507** إلى الفرع الوحيد `arena/01a1036f-deutschlern`؛ تطابق HEAD/origin. رُفعت مجموعة السجل والفحوص `308d1f16f3ce8b870aadd6c4732ce0c531203154`، وتطابق HEAD/origin؛ الإيصال أعلاه يثبت حالة الرفع والنشر.
- آخر استعلامPR#1: **OPEN، mergedAt=null**، والرأسfb7f913. Vercel لهذا الرأس **failure: Deployment rate limited — retry in 24 hours** وdeployments=[]؛ نجاحGitHub مستقل عن النشر. لم تُختبر الواجهة البعيدة أوProduction؛ لا إعادة نشر متكررة أو ترقية مدفوعة. نشر مجموعة التقرير لا يستنتج من سابقها.
- **التالي CR35/B1.5 — المدن والجمل الموصولة:** اقرأ المصدر والتقييم وكل أصل صوتي مكتوب، وراجع كل جملة وسؤال وخيار ومعيار وتوافق الحالة الإعرابية والفاعل/المفعول. احفظMara02/Yusuf03 والمفردات/النماذج/القراءة02 والاستماع03؛ لا تعاود طلب الأصوات أو توليد المقاطع الموجودة. لا حاجة لإعادةB1.4.
- كل تعديل يرفع فور فحص مجموعته؛ لا تبديل الفرع أو دمجPR#1 أو وصف المشروع بأنه مكتمل. المحتوى والتقييم والتطبيق قبل الصوت، ولا مراجع بشري شرطًا. لا حذف عمل محلي أوreset/clean دون مقارنة؛ لا إخفاء تسجيل أو تغييرready دون موافقة، وحد10 طلبات صوت/رد. اعتمادB1.9/B1.10 معلق واختيارB1.11 محفوظ؛ احفظ A2.7 Q08→T05 وفحوصA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

## أرشيف CR33 — لا ينسخ الحالة أعلاه

## إيصال رفع CR33 — 2026-10-08

- **التنفيذ:** `f097bb771c9d9d090c200714223ad64e0cf7d387`؛ **المراجعة والفحوص:** `12e5d0364428fca1ae47b0ed587a38fef42e831c`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD وorigin بعد كل رفع. هذا الإيصال تعديل توثيقي يُرفع فور فحصه بعنوان `Record CR33 delivery receipt and browser retry limits`؛ معرفه فيgit log، ولا تنسب إليه حالة نشر سابقه.
- **آخر فحص PR#1:** OPEN، mergedAt=null، والرأس12e5d03. لم يُدمج العمل ولا يوصف المشروع بأنه مكتمل.
- **Vercel للتنفيذf097bb7:** success، وPreview رقم **6945646591** بحالةdeployment ناجحة: https://deutschlern-j9n9s8lhs-balinader-2671s-projects.vercel.app . **للمراجعة12e5d03:** فشل بسبب حد النشر، بلاdeployment. رفعGitHub نجح مستقلًا؛ لا إعادة نشر يدوية متكررة أو ترقية مدفوعة. نجاحPreview للتنفيذ ليس نجاح أحدثcommit أوProduction أو اختبارًا للواجهة البعيدة؛ لم تختبر هذه. نشرcommit الإيصال غير مستعلم عنه.
- **الفحوص:** البناء والتحقق و33 حارسًا وخمس مجموعاتNode PASS؛ مجموعات المتصفح الخمس نجحت في النهاية، **مع فشل أول لا يجوز إخفاؤه**:forms_keyboard نجح1440 ثم تعثر390 بانتظارfilechooser فيالسطر48 لمدة30000ms. أُعيد كامل الاختبار كما هو بملفات معزولة فنجحالعرضان، ثم نجحnarrow_layout. لا تغييرapp/test أو إضعافشرط أو سببمثبت؛ **عاد تذبذبCR29 وبقي غيرمحلول، والإعادة ليست إصلاحًا**.
- الحزمة2,032,618 بايت وv80؛145 حالةaxe وصفر مخالفات للقواعد المختارة، مع99 ظهورًا غير حاسم/223 ظهورًا لعقد؛126 حالة عرض ضيق. هذه ليست شهادةWCAG أو تجربة هاتف فعلي أو استماعًا أو تقييمًا لغويًا آليًا.
- **الحفظ:**52 درسًا أخرى و1060 صف كتالوج أخرى و474MP3 وplaylist ثابتة؛ أربعة أصول/10 مقاطعB1.3 والأصوات محفوظة. أربعة صفوفaudio-register تغيرت فيsource_line فقط. جميع الخيارات30 والفهارس و80% محفوظة. عنوانالوظيفة مكتوب لا منطوق فيقراءةالمتن؛ لا استماع أو توليد أو اعتماد صوتي جديد.
- **التغطية:**110 وحدات/40 بندًا/10 مراجع كاملة؛32/53 درسًا والبوابة منفصلة،21 متبقية. Konjunktiv قُرئ بالجزأين0و1، وثلاث صفحاتnot found مستبعدة. P01 رسالة كتابة فقط، نموذج344حرفًا مع التحيةوالختام (289للمتن)، وP02 اجتماع معالجهر نموذج276؛ الحدّان240/220. الاختبارات لا تصحح جودة اللغة تلقائيًا.
- **التالي CR34/B1.4 — damit وum … zu:** راجع كل نص وتمرين وبديل ومعيار وعلاقة الغرض بالمراجع؛ احفظNadia02/Farid03 والراوي02/الاستماع03 بلا إعادةتوليد للمقاطع الموجودة. لا تعاودB1.3 أو تطلب مراجعًا بشريًا شرطًا للاستمرار. تابع تذبذبملف الاستيراد بشفافية إذاعاد، دون ادعاءإصلاح من نجاحإعادةفقط. كل تعديل يُرفع فورفحص مجموعته؛ لا تبديلفرع أو دمج؛ بقية القرارات والملفات والفحوص في التقريرين وملفي التسليم.

## الفحوص وحدودها — CR33

- **PASS: البناء والتحقق**؛ الحزمة **2,032,618 بايت** والمخزن **v80**.53 درسًا و428 عنوان تمرين و57 عنوانًا يطابق نمط عداد الحوار و754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء،1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending، دون تغيير حالة صوتية.
- **PASS:33 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–12 وB1.1–3. الحارس الجديد يطابق110 وحدات و40 بندًا و30 بديلًا وستة معايير والمصدر والربط والنموذجين والبصمات. فحوص البناء لا تُحسب مراجعة فردية لباقي الدروس.
- **PASS:خمس مجموعاتNode:**progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكل tools/test_*.cjs وgit diff --check.
- **المتصفح:**نجحت المجموعات الخمس في النهاية:browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout، على **Chromium143.0.7499.0**، مع تعثر أول موثق فيforms_keyboard. حزمpackage-lock القائمة دون تغييرها، وSparticuz143.0.4 ومكتباتal2023 خارجGit.
- العام عند1440×900 و390×844:RTL والتنقل والتفريغات وتشغيلMP3 بسرعتي1 و0.8 والإيقاف عند التنقل، والعمل دون اتصال ونطاقات البايت و416/503. تشغيل آلي صامت لا استماع لكل ملف ولا ضمان بقاء كل الصوت مخزنًا.
- تحديث عامل الخدمة منfixture v42 إلىv80 دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت المفقود ثم إعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- **progression:**سجلB1.3 القديمv1 يبقى مخزنًا لكنه لا يمنح إتقانv2 أو يفتحB1.4؛ المسودة القديمة مرفوضة للتقييم الجديد. النسخة الحالية مع الدرجة والدليل تفتح التالي، وحذف الدليل يعيد المنع. P01 لا يتطلب الجهر ولا يظهر مربع الجهر؛P02 يتطلبه. كلاهما يتطلب كل الإقرارات والحد الحرفي. نموذج الرسالة الكامل344 حرفًا (متنه289) والاجتماع276، فوق240/220. الاختبار يستعمل التحية والختام أيضًا، ولا يعدهما ضمن خمس جمل المتن. هذه ضوابط دليل لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**145 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة، مع **99 ظهورًا غير حاسم تشمل223 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة أو نجاحًا شاملًا؛ لا شهادةWCAG أو مراجع بشري شرطًا للاستمرار.
- **النماذج — المحاولة1:**نجح1440، ثم تعثر390 بانتظارfilechooser لمدة30000ms في `tools/test_forms_keyboard.cjs:48:52` عند فتح ملفJSON غير الصالح. هذه عودة للتذبذب الموثق فيCR29، لا نجاح من أول محاولة.
- **المحاولة2:**أُعيدت المجموعة كاملة كما هي بملفات متصفح معزولة جديدة، فنجح1440 و390 والحفظ والتصدير والاستيراد والمسودات. قُرئ كود الاختبار ومسار الفحص؛ **لا تعديلapp/test ولا تخفيف شرط أو زيادة مهلة أو سبب مثبت**. النجاح اللاحق ليس إصلاحًا؛ لا ندعي زوال التذبذب. الاختبار الأصلي وأول سجل فشل لم يستبدلا بنتيجة النجاح.
- **العرض الضيق:**نُفذ بعد الإعادة ونجح126 حالة،63 عند320×900 و63 عند568×320، لكل الدروس مع التفريغات والجداول. viewport ليس هاتفًا فعليًا أو تكبير نظام.
- **الحفظ مقابل `23ea56c8e9ceb5827f0ce6a3fbbb8df727133205`:**52 درسًا أخرى و1060 صف كتالوج أخرى و115 ملفًا محميًا مطابقة، منها المصادر الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. كتلة فحوص الصوت السابقة منexpectedAudioLessonByPrefix ثابتة، ومنهاA2.9 وB1.3؛ أضيفت فحوصv2 قبلها دون إضعافها.
- playlist مطابق بايتًا ببايت؛474 ملفMP3 طابقت بصماتGit. تغيرت أربعة صفوف فيaudio-register فيsource_line فقط، مع جعل مراجع المفردات والأمثلة والأدوار والمتن دقيقة؛213 صفًا أخرى ثابتة. مراجعPHR الآن14 صف مفردات و8 أمثلة؛ لا تستبدل التحليل الصوتي.
- الأصوات محفوظة:Leiterin00،Nora/الراوية02،Omar03،القراءة02 واستماعFarid03. العنوان الوظيفي المكتوب غير منطوق فيمتن تسجيل القراءة؛ لا ننسب المعلومة للصوت. جميع الخيارات30 والفهارس ثابتة؛ تغيرت التعليمات والسياق والربط والمعايير لا المفاتيح.

## حدود المحتوى والصوت والمنهج

- مصدرwürde يقع في نهاية الجزء الرئيسي في النمط المدروس، وقد تتلوه تابعةdass؛ لا نعلّم أنه آخر كل جملة مركبة. verteilen بعدdass معwir فعل مصرف ولو طابق شكل المصدر. würden ليستwurde، وSie الرسمية لا تحدد عدد المخاطبين وحدها.
- hätte للرغبة في الحصول على أوقات، وwäre للرغبة في أن يكون المتحدث جزءًا من فريق؛ كلاهما قد يليه اسم. möchte مهذبة أصلًا. الطلب المهذب قد يكون ممكن التنفيذ؛ لا نساويKonjunktiv II دائمًا بالاستحالة أو الماضي. Wunsch/Vorschlag لا يعني قبولًا أو تنفيذًا.
- T07 يطلب سؤالًا محايدًاKönnten wir…? لا ينكر إمكان سؤال خبري بنبرة استفهام في كلام آخر. والمصدر بلاzu في الأنماط المدروسة لا قاعدة لكل مصدر ألماني.
- الإعلان:العنوان فقط يذكرAssistenz/Teilzeit، ولا ينطقه تسجيل القراءة. helpful خبرة مفيدة لا عدد سنوات إلزامي؛ استقلالية في العمل لا عمل حر. النموذج رسالة لغوية قصيرة لا ملف توظيف كامل أو ضمان وظيفة.
- الحوار:يومان للمهلة العامة ونسخة أولى بحلول الغد؛ الإعلان:خلال أسبوعين؛ الاستماع:رد بحلول بعد ظهر اليوم. لا ساعة أو تاريخ تقويمي أو موعد حقيقي يُحسب من يوم دراسة الدرس. Frist مهلة زمنية وقد يقصد السياق نهايتها.
- عرضNora لفحص التقرير واستعدادOmar للعرض لا يثبتان الإرسال. Kundinnen في الحوار غيرKunde في الاستماع، وFarid مسمى بالنص لا بالصوت. اقتراح الخميس بسبب موعد الأربعاء ليس قبولًا لتغيير الموعد أو عدم تفرغ كامل الأربعاء. kann تحديث التقويم إمكان بعد الرد لا فعل منجز أو وعد قطعي.
- P01 كتابة فقط،P02 كتابة وجهر؛ لا تناقض «إن أمكن» مع بوابة إلزام. المهام والنماذج خيالية بلا بيانات حقيقية أو إرسال أو شريك أو تسجيل. الحد الحرفي والإقرار ليسا تصحيح لغة أو نطق.
- **لا استماع أو توليد أو اعتماد صوتي جديد.** قيداA2.8/A2.9 وبيانB1.2 Geschmäcker المكتوب محفوظة دون ادعاء تصحيح التسجيلات. المراجع اللغوية لا تمنح شهادةCEFR ولا اعتمادًا قانونيًا لإعلان أو طلب.
- قُرئت10 صفحات كاملة؛ صفحةKonjunktiv في جزأين0و1. ثلاث صفحاتnot found استُبعدت رغمstatus success. نتائجالبحث الأخرى وصفحات الإنجليزية وملفاتPDF المرتبطة لم تُقرأ ولا تحسب مراجع. تم اتباع رابطKonjunktiv الصحيح من صفحةModalverben، لا اعتماد مقتطف البحث بدل القراءة.

## أرشيف الفحوص السابقة

## إيصال رفع CR32 — 2026-10-08

- **التنفيذ:** `e1c81db51946b9ca832d88bf292cf8eb0cb5f5a9`؛ **المراجعة والفحوص:** `a24c47fa9261e80809e8306454f5421111c22256`. رُفع الاثنان إلى `arena/01a1036f-deutschlern`، وتطابق HEAD وorigin بعد كل رفع. هذا الإيصال تعديل توثيقي يُرفع فور فحصه بعنوان `Record CR32 delivery receipt and deployment limits`؛ معرفه فيgit log، ولا تنسب إليه حالة نشر سابقه.
- **آخر فحص PR#1:** OPEN، mergedAt=null، والرأسa24c47f. لم يُدمج العمل ولا يوصف المشروع بأنه مكتمل.
- **Vercel:** فشل نشر التنفيذe1c81db والمراجعةa24c47f بسبب حد النشر: `Deployment rate limited — retry in 24 hours.`، وقائمةdeployments فارغة لكليهما. **رفعGitHub نجح مستقلًا**؛ لا ادعاء بوجودPreview جديد لهذه المجموعة أو نجاحProduction. لا إعادة نشر يدوية متكررة أو ترقية مدفوعة. الواجهة البعيدة لم تختبر، ونشرcommit الإيصال غير مستعلم عنه.
- **الفحوص:** البناء والتحقق و32 حارسًا وخمس مجموعاتNode وخمس مجموعاتمتصفح PASS. الحزمة2,019,574 بايت وv79؛141 حالةaxe، صفر مخالفات للقواعد المختارة، مع96 ظهورًا غير حاسم/217 ظهورًا لعقد؛126 حالة عرض ضيق. نجحfilechooser في أول تشغيل هذا الدور، لكن سبب تذبذبه فيCR29 غير محلول.
- **الحفظ:**52 درسًا أخرى و1060 صف كتالوج أخرى و474MP3 وplaylist ثابتة؛ خمسة أصول/10 مقاطعB1.2 والأصوات محفوظة. تغيرت ثلاثة صفوف مرجعية فقط فيsource_line. جميع الخيارات30 وفهارسها و80% محفوظة. لا استماع أو توليد أو اعتماد صوتي جديد. **Geschmäcker المسجلة باقية؛ أضيفGeschmäcke ووسم الصيغة الدارجة المازحة كتابة فقط، لا تصحيح صوتي أو وصف اللفظ بأنه غير موجود.**
- **التغطية:**102 وحدة/35 بندًا/10 مراجع كاملة؛31/53 درسًا والبوابة منفصلة،22 متبقية. استُبعدت صفحة404 عند/trotzdem واستُخدم مدخل الظرف الصحيح. تثبيت الجهر في المهمتين أزال تعارض «إن أمكن» مع شرط التطبيق؛ والنموذجان227/205 حرفًا يطابقان المصدر والمعايير.
- **التالي CR33/B1.3 — المهنة والتواصل: اقتراحات مهذبة:** راجع كل نص وتمرين وبديل ومعيار بالمراجع، مع حفظ Nora/الراوية02 وOmar03 ودورالإدارة00. لا إعادةB1.2 أو تسجيلاته ولا مراجع بشري شرطًا للاستمرار. المحتوى والتقييم والتطبيق أولًا، وكل تعديل يُرفع فور فحص مجموعته. لا تبديل فرع أو دمج؛ بقية القرارات والملفات والفحوص في التقريرين وملفي التسليم.

## الفحوص وحدودها — CR32

- **PASS: البناء والتحقق**؛ الحزمة **2,019,574 بايت** والمخزن **v79**.53 درسًا و428 عنوان تمرين و**57 عنوانًا يطابق نمط عداد الحوار** بدل56 بسبب عنوانT08 الجديد؛ ليس تسجيلًا جديدًا أو تغييرًا للحوار الأصلي.754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء،1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending، دون تغيير حالة صوتية.
- **PASS:32 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–12 وB1.1–2. حارسB1.2 يطابق102 وحدة و35 بندًا و30 بديلًا وستة معايير والمصدر والربط والنموذجين والبصمات. فحوص البناء لا تُحسب مراجعة فردية لباقي الدروس.
- **PASS:خمس مجموعاتNode:**progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكل tools/test_*.cjs وgit diff --check.
- **PASS:خمس مجموعات متصفح** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**. حزمpackage-lock القائمة دون تغييرها، وSparticuz143.0.4 ومكتباتal2023 خارجGit. نجح التشغيل المتسلسل الأول دون إعادة اختبار فاشل هذا الدور.
- العام عند1440×900 و390×844:RTL والتنقل والتفريغات وتشغيلMP3 بسرعتي1 و0.8 والإيقاف عند التنقل، والعمل دون اتصال ونطاقات البايت و416/503. تشغيل آلي صامت لا استماع لكل ملف ولا ضمان بقاء كل الصوت مخزنًا.
- تحديث عامل الخدمة منfixture v42 إلىv79 دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت المفقود ثم إعادة تخزينه عند الاتصال. ليس اختبارًا منفصلًا لكل ترحيل تاريخي.
- **progression:**سجلB1.2 القديمv1 يبقى مخزنًا لكنه لا يمنح إتقانv2 أو يفتحB1.3؛ المسودة القديمة مرفوضة للتقييم الجديد. النسخة الحالية مع الدرجة والدليل تفتح التالي، وحذف الدليل يعيد المنع. كلا المهمتين يحتاج إقرار الجهر وكل المعايير؛ تُرفض الاستجابة القصيرة والإقرارات الناقصة. نموذج227/205 حرفًا فوق190/180. هذا ضبط للدليل لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**141 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة، مع **96 ظهورًا غير حاسم تشمل217 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة أو نجاحًا شاملًا؛ لا شهادةWCAG أو مراجع بشري شرطًا للاستمرار.
- **النماذج:**نجح التشغيل الأول عند1440 و390 في الحفظ وإعادة التحميل والتصدير والاستيراد والمسودات. **سبب تذبذبfilechooser فيCR29 باقٍ غير محلول**؛ نجاح الأدوار التالية ليس إصلاحًا، ولم يُعدّل اختبارforms_keyboard.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320، لكل الدروس مع التفريغات والجداول. viewport ليس هاتفًا فعليًا أو تكبير نظام.
- **الحفظ مقابل `f741ee9136cf6072785bbb6ac383235d359ad9b8`:**52 درسًا أخرى و1060 صف كتالوج أخرى و115 ملفًا محميًا مطابقة، منها المصادر الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. كتلة فحوص الصوت السابقة بدءًا منexpectedAudioLessonByPrefix ثابتة، ومنها فحوصA2.9 وB1.2؛ أضيفت فحوصv2 قبلها دون إضعافها.
- playlist مطابق بايتًا ببايت؛474 ملفMP3 طابقت بصماتGit. فُحصت أصولB1.2 الخمسة؛ تغيرت **ثلاثة صفوف فقط فيaudio-register، فيsource_line وحده** للحوار والقراءة والاستماع؛214 صفًا أخرى ثابتة. المفردات والنماذج قبل المساعدة الجديدة، فأسطرهما لم تتغير رغم توضيح خلايا المفردات وقاعدة المقارنة.
- الأصوات محفوظة:Mira02/Tarek03، والمفردات والنماذج والقراءة02 والاستماع03. المصدر وplaylist يحفظان المحتوى المنطوق؛ إضافةGeschmäcke ووسمGeschmäcker مكتوبة فقط. جميع الخيارات30 وفهارسها ثابتة؛ تغير السؤال والشرح والربط والمعايير لا المفتاح.

## حدود المحتوى والصوت والمنهج

- obwohl في النمط الكتابي المدروس يقدم أمرًا يحدث خلاف المتوقع بسببه، لا مجرد اختلاف أو سببweil. تقديم التابعة يشغل الموقع الأول ثم يأتي مصرف الرئيسية؛ والفاصلة لازمة ولو تأخرت التابعة.
- trotzdem هنا ظرف رابط، لا تابع. إذا تصدرت الرئيسية يليها المصرف ثم الفاعل، لكن يمكن أن تقع وسطها. الفاصلة في آخر الاستماع تربط رئيسيتين كما في مثالDuden، وليست خطأ يوجب تغيير التسجيل.
- **Geschmack:**أضاف الجدول الجمعGeschmäcke ووسمGeschmäcker بالدارج المازح وفقDuden؛ التسجيل يحتوي الثانية فقط. لا نقول إن اللفظ غير موجود أو إننا استمعنا أو صححنا التسجيل. البيان المكتوب يزيل دعوى كونه الجمع المحايد الوحيد.
- تحضير الغداء مساءً ليس تناوله مساءً؛ ثلاث أو أربع مرات أسبوعيًا ليست كل يوم أو عدد وجبات. Tarek والمقصف،David والمطعم، وأسرة الاستماع حكايات مستقلة. الراوي غير مسمى؛ Person/Familie مؤنثتان نحويًا لا دليل جنس الشخص من الصوت.
- الشبع أو شرب الماء مع الطعام الحار وصف في نصوص خيالية، لا علاج أو برنامج تغذية شخصي أو إثبات سلامة حساسية. لم نراجع مرجعًا طبيًا ولم ندّع ذلك. keine Lebensmittelgruppe تنفي استبعاد مجموعة، لا تثبت أكل كل أصنافها يوميًا. الكلفة أحيانًا لا دائمًا، والتطلع للطعام لا يثبت تناوله.
- مهمتان خياليتان بلا حمية أو وزن أو حساسية أو بيانات صحية أو شريك أو تسجيل. خمس جمل مقابل أربعة أدوار، والجهر في كليهما صريح؛ لم يعد خيارًا لفظيًا بينما هو إلزام في التطبيق. اليوم لإحضار طعام البيت والغد للمقصف في النموذج، دون تناقض زمني.
- **لا استماع أو توليد أو اعتماد صوتي جديد.** الأصوات والأصول الخمسة وعشرة المقاطع وحالاتها السابقة ثابتة؛ قيداA2.8/A2.9 السابقان لم يصححا في التسجيلات، وبقي التوضيح المكتوب.
- قُرئت10 صفحات كاملة؛ رابطDuden /trotzdem المباشر أعادصفحة404 رغمstatus success، فاستُبعد واستُخدم مدخل الظرف الصحيح. بقية نتائج البحث وروابط الصفحات لم تُقرأ ولا تحسب مراجع. المراجع اللغوية ليست شهادةCEFR أو دليل صحة طبية.

## أرشيف الفحوص السابقة

## إيصال رفع CR31 — 2026-10-08

- **التنفيذ:** `34e596a17f500cc83364a917268179a5d05065d6`؛ **المراجعة والفحوص:** `9899fa7645ea0cd63ebce75ee0f0d1e1d8fa82a1`. رُفع الاثنان إلى `arena/01a1036f-deutschlern`، وتطابق HEAD وorigin بعد كل رفع. هذا الإيصال تعديل توثيقي يُرفع فور فحصه بعنوان `Record CR31 delivery receipt and deployment limits`؛ معرفه فيgit log، ولا تنسب إليه حالة نشر سابقه.
- **آخر فحص PR#1:** OPEN، mergedAt=null، والرأس9899fa7. لم يُدمج العمل ولا يوصف المشروع بأنه مكتمل.
- **Vercel للتنفيذ34e596a:** success، وPreview رقم **6944923288** بحالةdeployment ناجحة: https://deutschlern-d64p1x83k-balinader-2671s-projects.vercel.app . **للمراجعة9899fa7:** فشل بسبب حد النشر، بلاdeployment. رفعGitHub نجح مستقلًا؛ لا إعادة نشر يدوية متكررة أو ترقية مدفوعة. نجاحPreview للتنفيذ ليس نجاح نشر أحدثcommit أوProduction أو اختبارًا للواجهة البعيدة؛ لم تختبر هذه. نشرcommit الإيصال غير مستعلم عنه.
- **الفحوص:** البناء والتحقق و31 حارسًا وخمس مجموعاتNode وخمس مجموعاتمتصفح PASS. الحزمة2,008,263 بايت وv78؛137 حالةaxe، صفر مخالفات للقواعد المختارة، مع93 ظهورًا غير حاسم/210 ظهورًا لعقد؛126 حالة عرض ضيق. نجحfilechooser في أول تشغيل هذا الدور، لكن سبب تذبذبه فيCR29 غير محلول.
- **الحفظ:**52 درسًا أخرى و1060 صف كتالوج أخرى و474MP3 وplaylist ثابتة؛ خمسة أصول/10 مقاطعB1.1 والأصوات محفوظة. فُحصت الأصول الخمسة لكن تغيرت **ثلاثة صفوف مرجعية فقط** للحوار والقراءة والاستماع فيsource_line، لا خمسة؛ أسطر المفردات والنماذج بقيت ثابتة. جميع الخيارات30 وفهارسها و80% محفوظة. لا استماع أو توليد أو اعتماد صوتي جديد.
- **التغطية:**97 وحدة/33 بندًا/11 مرجعًا كاملًا؛30/53 درسًا والبوابة منفصلة،23 متبقية. استُبعدت صفحةDuden للظرف اللهجيals، واستُخدمت صفحةالرابطالزمني. الفترة معals قد تضم نشاطًا متكررًا، وwenn قد يكون لحدث مستقبلي واحد؛ لا تعميم من صفحة واحدة على كل الاستعمالات.
- **التالي CR32/B1.2 — عادات الطعام وobwohl:** مراجعة كل نص وتمرين وبديل ومعيار، مع حفظ Mira02/Tarek03 والراوي02/الاستماع03. لا إعادة B1.1 أو تسجيلاته ولا مراجع بشري شرطًا للاستمرار. المحتوى والتقييم والتطبيق أولًا، وكل تعديل يُرفع فور فحص مجموعته. لا تبديل فرع أو دمج؛ بقية القرارات والملفات والفحوص في التقريرين وملفي التسليم.

## الفحوص وحدودها — CR31

- **PASS:البناء والتحقق**؛ الحزمة **2,008,263 بايت** والمخزن **v78**.53 درسًا،428 عنوان تمرين، و**56 عنوانًا يحويه نمط عداد الحوار** بدل55: زيادة واحدة بسبب عنوانT08 «فقرة وحوار»، لا تسجيل جديد أو تغيير الحوار الأصلي.754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء،1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending، دون تغيير حالة صوتية.
- **PASS:31 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–12 وB1.1. حارسB1.1 يطابق97 وحدة و33 بندًا و30 بديلًا وستة معايير، والمصدر والربط والنموذجين والبصمات. فحوص البناء لا تُحسب مراجعة فردية لباقي الدروس.
- **PASS:خمس مجموعاتNode:**progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكل tools/test_*.cjs. أُصلحت نهاياتCSV العرضيةCRLF إلىLF الأصلية ومسافة نهاية سطر مضافة قبل الرفع؛ بعدهاgit diff --check PASS. لا تجاهل لفحص فاشل.
- **PASS:خمس مجموعات متصفح** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout، على **Chromium143.0.7499.0**. حزمpackage-lock القائمة دون تغييرها، وSparticuz143.0.4 ومكتباتal2023 خارجGit. لا إعادة تشغيل لاختبار فاشل هذا الدور.
- العام عند1440×900 و390×844:RTL والتنقل والتفريغات وتشغيلMP3 بسرعتي1 و0.8 والإيقاف عند التنقل، والعمل دون اتصال ونطاقات البايت و416/503. تشغيل آلي صامت لا استماع لكل ملف ولا ضمان بقاء كل الصوت مخزنًا.
- تحديث عامل الخدمة منfixture v42 إلىv78 دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت المفقود ثم إعادة تخزينه عند الاتصال. ليس اختبارًا منفصلًا لكل ترحيل تاريخي.
- **progression:**سجلB1.1 القديمv1 يبقى مخزنًا لكنه لا يمنح إتقانv2 أو يفتحB1.2؛ المسودة القديمة لا تُستعاد كتقييم جديد. النسخة الحالية مع الدرجة والدليل تفتح التالي، وحذف الدليل يعيد المنع. P01/P02 يحتاجان إقرار الجهر وكل المعايير؛ تُرفض الاستجابة القصيرة أو الإقرار الناقص. نموذج230/290 حرفًا يتجاوز180/220. هذا ضبط للدليل لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**137 حالة ممثلة، وصفر مخالفات للقواعد الآلية المختارة؛ **93 ظهورًا غير حاسم تشمل210 ظهورًا لعقد**. لا مخالفة مؤكدة من مجردincomplete ولا شهادةWCAG أو إلزام بمراجع بشري قبل الاستمرار.
- **النماذج:**نجح التشغيل الأول عند1440 و390:الحفظ وإعادة التحميل والتصدير والاستيراد والمسودات. **سبب تذبذبfilechooser فيCR29 باقٍ غير محلول**؛ نجاحCR30/CR31 لا يثبت إصلاحه، ولم يُعدّل اختبارforms_keyboard.
- **العرض الضيق:**126 حالة،63 عند320×900 و63 عند568×320، لكل الدروس مع التفريغات والجداول. viewport ليس جهازًا فعليًا أو تكبير نظام.
- **الحفظ مقابل `c5876d7d5e0be70c3baa48bc88926737c368209f`:**52 درسًا أخرى و1060 صف كتالوج أخرى و115 ملفًا محميًا مطابقة؛ تشمل مصادر الدروس الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتيbuild/verify. كتلة فحوص الصوت السابقة بدءًا منexpectedAudioLessonByPrefix ثابتة، ومنها فحوصA2.9 وB1.1؛ أضيفت فحوصv2 قبلها دون إضعافها.
- playlist مطابق بايتًا ببايت؛474 ملفMP3 طابقت بصماتGit. فُحصت أصولB1.1 الخمسة؛ **تغيرت ثلاثة صفوف فقط فيaudio-register، فيsource_line وحده** للحوار والقراءة والاستماع، وبقي214 صفًا. المفردات والنماذج قبل المساعدة الجديدة فلم تتغير أسطرهما؛ هذا يصحح العدد الأولي5 الوارد في إشعار التنفيذ.
- الأصوات محفوظة:Lina00/Karim03، والمفردات والنماذج والقراءة02 والاستماع03. الأرقام16/17/14 تقابلsechzehn/siebzehn/vierzehn لفظًا؛ لا تبديل أعمار أو ترجمة رقم خاطئة. جميع الخيارات30 وفهارسها ثابتة؛ التغيير في السؤال والسياق والربط والمعايير، لا المفتاح.

## حدود المحتوى والصوت والمنهج

- als في الأمثلة الزمنية الماضية المحددة قد تصف فترة كالطفولة، ولا تعني أن اللعب داخلها حدث مرة واحدة فقط. وصف «حدث واحد» مختصر تعليمي، لا عداد لكل فعل في الحياة. يمكن أن تصف الجملة المقدمة فترة بينما تتكرر أنشطة الرئيسية داخلها.
- wenn للتكرار الماضي أو الزمن الحاضر/المستقبل، ومنها حدث مستقبلي واحد، وقد تعني شرطًا. درسنا لا يحصر كل استعمالاتها أو استعمالاتals ولا ينقل تعميم «التزامن دائمًا» من مصدر ثانوي فوق أمثلةDuden التي تبين علاقات متعددة. وجودPräteritum لا يفرضals؛ وwar معhabe teilgenommen طبيعي في الحوار.
- an+Akkusativ معsich erinnern مقابلan+Dativ معteilnehmen؛ ليس اختبارWo/Wohin. اختيار الحالة تابع للفعل. تصريف الضمير والتذكر حاضرًا لا يجعلان الذكرى نفسها حدثًا حاضرًا.
- عمر16 في القاعدة،17 لكريم،14 للينا في القراءة؛ الراوي غير مسمى وsie تعود إلىdie Person نحويًا. النص لا يقول أول كاميرا أو أول عرض في الحياة أو فوزًا بالبطولة أو نشرًا فعليًا للصور. Tante عمة أو خالة، وoft/regelmäßig لا يحددان كل مرة أو العدد. nicht mehr so oft لا تعني التوقف التام.
- كُتبت فقرة الرسم وحوار الشطرنج لشخصيتين خياليتين مستقلتين، بلا بيانات خاصة أو تسجيل أو شريك. الجهر مطلوب لكليهما؛ أربعة أسطر للحوار لا أربعة جمل، فالجواب الأخير قد يضم جملتين. طول النص والإقرارات لا يقيسان جودة اللغة أو النطق.
- **لا استماع أو توليد أو اعتماد صوتي جديد.** خمسة الأصول وعشرة المقاطع والحالات السابقة محفوظة. عنوان الأصلMODEL مختصر لكنه لا يلغي المثال الشرطي الرابع؛ شرح المصدر يوضح الحد. قيدا التسجيل فيA2.8/A2.9 السابقان لم يصححا فيالصوت، وبقي التوضيح المكتوب.
- قرئت11 صفحة كاملة؛ صفحةDuden /als للظرف اللهجي قرئت ثم استبعدت بدل استعمالها دليلًا للرابط. استُخدم/als_temporal الصحيح. نتائج البحث الأخرى وملفاتPDF المرتبطة لم تُقرأ ولا تُحسب مصادر. المراجع ليست شهادةCEFR أو دليل تحقق أحداث الشخصيات.

## أرشيف الفحوص السابقة

## إيصال رفع CR30 — 2026-10-08

- **التنفيذ:** `265d0a8054b478ed4f06bdb8da948330f374c378`؛ **المراجعة والفحوص:** `e1b88183c2549b8b40f0b03d13311d2dfba955d3`. رُفع الاثنان إلى `arena/01a1036f-deutschlern`، وتطابقHEAD وorigin بعد كل رفع. هذا الإيصال تعديل توثيقي يُرفع فور فحصه بعنوان `Record CR30 delivery receipt and Preview status`؛ معرفه فيgit log، ولا تُنسب إليه حالة نشر السابق.
- **آخر فحص PR#1:**OPEN، mergedAt=null، والرأسe1b8818. لم يُدمج العمل ولا يوصف المشروع بأنه مكتمل.
- **Vercel للتنفيذ265d0a8:**فشل بسبب حد النشر، بلاdeployment. **للمراجعةe1b8818:**كان pending ثم أكد آخر استعلام **success** مع Preview رقم **6944610382** وحالةdeployment ناجحة: https://deutschlern-7n7lwrsst-balinader-2671s-projects.vercel.app . لا إعادة نشر يدوية أو ترقية مدفوعة؛ رُفعت مجموعة المراجعة الضرورية فحسب. نجاحPreview ليس نشرProduction أو اختبار الواجهة البعيدة، وهذه لم تختبر. نشرcommit الإيصال غير مستعلم عنه.
- **الفحوص:**البناء والتحقق و30 حارسًا وخمس مجموعاتNode وخمس مجموعاتمتصفح PASS. الحزمة1,997,818 بايت وv77؛133 حالةaxe وصفر مخالفات للقواعد المختارة، مع90 ظهورًا غير حاسم/204 ظهورًا لعقد؛126 حالة عرض ضيق. نجحfilechooser من أول تشغيل هذا الدور، لكن سبب تذبذبه فيCR29 غير محلول.
- **الحفظ:**52 درسًا أخرى و1060 صف كتالوج أخرى و474MP3 وplaylist ثابتة؛ أربعة أصول/10 مقاطعA2.12 والأصوات محفوظة. تغير نص خيارQ10 الصحيح وحده لتصحيحbevor، مع حفظ29 خيارًا والفهارس. لا توليد أو استماع أو اعتماد صوتي جديد.
- **التغطية:**102 وحدة/31 بندًا/10 مراجع كاملة؛29/53 درسًا والبوابة منفصلة،24 متبقية. تقرأ المراجع بوصفها دعمًا للقواعد المذكورة، لا تصديقًا لكل سطر: التعرف على المبني للمجهول في `wird eine Ausstellung eröffnet` تحليل نحوي للنص لا مطلب إنتاج إضافي، ولا يُنسب إلى صفحة مصدر مخصصة للمبني للمجهول لم تُقرأ.
- **التالي CR31/B1.1 — als وwenn:**مراجعة كل نص وتمرين وبديل ومعيار، مع حفظ Lina00/Karim03 ونمط الراوي02/الاستماع03. لا إعادة A2.12 أو تسجيلاته، ولا مراجع بشري شرطًا، ولا تبديلفرع أو دمج. القرارات والملفات والفحوص التفصيلية في التقريرين وبقية هذا التسليم.

## الفحوص وحدودها — CR30

- **PASS:البناء والتحقق**؛ الحزمة **1,997,818 بايت** والمخزن **v77**. بقيت53 درسًا و428 عنوان تمرين و55 عنوان حوار وفق نمط العداد و754 مفردة؛530 سؤال درس+10 للبوابة و109 مهمات أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending. أصول A2 الإجمالية54/120 مقطعًا محفوظة؛ ليست هذه الأعداد اعتمادًا صوتيًا جديدًا.
- **PASS:30 حارس مراجعة تراكميًا** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–12. حارس A2.12 يطابق102 وحدة و31 بندًا و30 بديلًا وستة معايير، والبصمات والكتالوج والنموذجين. داخل PHR22 جزءًا:18 مفردة/صيغة وأربع جمل قواعد، لا22 ملفًا.
- **PASS:خمس مجموعات Node:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغة app.js وservice-worker.js وكل tools/test_*.cjs وgit diff --check.
- **PASS:خمس مجموعات متصفح:** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**؛ حزم package-lock القائمة دون تغييرها، و@sparticuz/chromium143.0.4 ومكتبات al2023 خارجGit. التشغيل آلي صامت، لا استماع أو جهاز فعلي.
- الاختبار العام عند1440×900 و390×844: تنقل وRTL والتفريغات وتشغيلMP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. لا ضمان بقاء كل التسجيلات مخزنة دائمًا أو اختبار سمعي مستقل لكل أصل.
- تحديث عامل الخدمة من fixture الإصدارv42 إلىv77 دون إعادة تحميل قسرية، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد صوت غير مخزن بـ503 وإعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- **progression:** سجل A2.12 القديمv1 محفوظ لكنه لا يمنح إتقانv2 أو يفتحB1.1؛ مسودةv1 مرفوضة. تُقبل النسخة الجديدة مع الدرجة والدليل المطلوبين. P01 يتطلب إقرار الجهر؛ P02 كتابة فقط دون خانة جهر. النموذجان242/179 حرفًا يمران بحدي200/150؛ الإجابة القصيرة أو الإقرارات الناقصة لا تمر. هذا ضبط للدليل المحلي لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**133 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة، مع **90 ظهورًا لفحوص غير حاسمة تشمل204 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة ولا نجاحًا شاملًا أو شهادةWCAG؛ لا مراجع بشري شرطًا للاستمرار.
- **النماذج:**نجح التشغيل المتسلسل الأول عند1440 و390؛ حفظ وإعادة تحميل وتصدير واستيراد ومسودات، دون إعادة هذا الدور أو تعديل الاختبار. **تذبذبfilechooser الموثق فيCR29 لم يُصلح سببه؛ نجاح هذه المحاولة لا يثبت الإصلاح.**
- **العرض الضيق:**PASS؛126 حالة،63 عند320×900 و63 عند568×320، مع كل الدروس والتفريغات والجداول. viewport ليس تكبير نظام أو هاتفًا فعليًا.
- **الحفظ مقابل `10c1f8727d41c309112e159fb4588b421a0d1958`:**52 درسًا آخر و1060 صف كتالوج آخر و115 ملفًا محميًا لم تتغير، بما فيها المصادر الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. تغير20 صفًا تخص A2.12 فقط في الكتالوج. بقيت كتلة فحوص الاتساق الصوتي السابقة من A2.9 فصاعدًا حرفيًا؛ أضيفت اختبارات الإصدار قبلها دون إضعافها.
- playlist مطابق بايتًا ببايت؛474 ملفMP3 طابقت بصماتGit السابقة. تغيرت4 صفوف تخص A2.12 في audio-register في source_line/source_heading فقط، وبقيت213 صفًا أخرى. Laila02/Omar03، وNarrator02 للمفردات والقراءة، وErzählperson03 للاستماع محفوظة بالكلمات والمسارات والحالات.
- **تغيير الخيار مقصود وموثق:**29 خيارًا ثابتة؛ نص Q10 عند الفهرس1 صُحح من جعل التابعة أسبق إلى جعل الرئيسية أسبق معbevor. جميع فهارس المفاتيح ثابتة، ولا نقل للخطأ إلى التسجيل الصحيح. المراجع لا تمنح شهادةCEFR مستقلة أو تثبت برنامج مهرجان حقيقي. لا واجهة بعيدة أو نشرProduction اختُبرا.

## حدود المعنى والنصوص والصوت

- **bevor:** في `Wir essen, bevor das Konzert beginnt` الأكل أولًا ثم بداية الحفل؛ تقديم التابعة لا يجعل حدثها أسبق. **nachdem:** في `Nachdem wir gegessen haben, gehen wir zum Konzert` الأكل في التابعة أولًا ثم الذهاب. النمط المثبت المدروس لا يشمل كل استعمال منفي أو شرطي للرابطين.
- `nachdem + Perfekt` هنا مع خطة أو رئيسية مضارعة، لا قاعدة لكل الأزمنة؛ الاكتمال نسبي للحدث اللاحق وقد يكون داخل خطة مستقبلية. مثال الماضي الأسبق للمقارنة فقط لا مطلب تقييم إضافي.
- الحوار السبت بلقاء الخامسة وحفل السابعة؛ القراءة الأحد بافتتاح14 وحفل17؛ الاستماع السبت فيLinden بزيارة معرض الرابعة. لا نخلط البرامج أو نضيف ساعة نهاية أو ألعاب نارية محددة. erst am Abend تعني لا يعودون إلا مساءً.
- إمكان زيارة السوق ليس إثبات الزيارة؛ مجانية الدخول لا تثبت مجانية الطعام أو النقل. مثال شراء التذاكر في القاعدة مستقل عن برامج الدخول المجاني. Linden اسم مكان في مثال خيالي لا فعالية حقيقية موثقة.
- **لم يُجرَ استماع أو توليد أو اعتماد صوتي جديد.** الأصول الأربعة ومقاطعها العشرة محفوظة؛ أمثلةbevor المسجلة سليمة في ترتيبها، والخطأ المصحح كان في التقييم. قيدا A2.8/A2.9 السابقان لم يُصلحا في التسجيلات، وبقي توضيحهما المكتوب.
- مهمتان خياليتان بلا رحلة أو حجز أو بيانات سفر أو شريك أو تسجيل؛ الجهر فيP01 فقط. الإقرار والحد الحرفي لا يصححان اللغة أو النطق.

## أرشيف الفحوص السابقة

## الفحوص وحدودها — CR29

- **PASS:البناء والتحقق**؛ الحزمة **1,984,262 بايت** والمخزن **v76**. بقيت53 درسًا و428 عنوان تمرين و55 عنوان حوار وفق نمط العداد و754 مفردة؛530 سؤال درس+10 للبوابة و109 مهمات أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending. الأعداد ليست شهادة مراجعة أو اعتماد صوت لكل المنهج.
- **PASS:29 حارس مراجعة تراكميًا** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–11. حارس A2.11 يطابق122 وحدة و35 بندًا و30 بديلًا وستة معايير، والبصمات والكتالوج والنموذجين. داخل PHR24 جزءًا، وداخل MODEL11 وحدة جملة/سؤال/جواب؛ ليست ملفات مستقلة.
- **PASS:خمس مجموعات Node:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغة app.js وservice-worker.js وكل tools/test_*.cjs وgit diff --check.
- **خمس مجموعات متصفح نجحت، مع إعادة موثقة لفحص النماذج:** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**؛ حزم package-lock القائمة دون تغييرها، و@sparticuz/chromium143.0.4 ومكتبات al2023 خارجGit. التشغيل آلي صامت، لا استماع أو جهاز فعلي.
- الاختبار العام عند1440×900 و390×844: تنقل وRTL والتفريغات وتشغيلMP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. لا ضمان بقاء كل التسجيلات مخزنة دائمًا أو اختبار سمعي مستقل لكل أصل.
- تحديث عامل الخدمة من fixture الإصدارv42 إلىv76 دون إعادة تحميل قسرية، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد صوت غير مخزن بـ503 وإعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- **progression:** سجل A2.11 القديمv1 محفوظ لكنه لا يمنح إتقانv2 أو يفتحA2.12؛ مسودةv1 مرفوضة. تقبل النسخة الجديدة مع الدرجة والدليل المطلوبين. P01 يتطلب إقرار الجهر؛ P02 كتابة فقط دون خانة جهر. النموذجان136/132 حرفًا يمران بحدي120/110؛ الإجابة القصيرة أو الإقرارات الناقصة لا تمر. هذا ضبط للدليل المحلي لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**129 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة، مع **87 ظهورًا لفحوص غير حاسمة تشمل198 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة ولا نجاحًا شاملًا أو شهادةWCAG؛ لا مراجع بشري شرطًا للاستمرار.
- **قيد النماذج موثق:** في التشغيل الأول نجح عرض1440، ثم انتهت مهلة30000ms عند انتظارfilechooser على عرض390 في `tools/test_forms_keyboard.cjs:48`. أُعيد الاختبار الكامل نفسه بملفات متصفح جديدة، فنجح عند1440 و390، دون تغيير التطبيق أو الاختبار أو تخفيف شروطه. **سبب التذبذب لم يثبت ولم يُصلح؛ نجاح الإعادة لا يثبت الإصلاح.** فُحص الحفظ وإعادة التحميل والتصدير والاستيراد والمسودات في التشغيل الناجح.
- **العرض الضيق:**PASS؛126 حالة،63 عند320×900 و63 عند568×320، مع كل الدروس والتفريغات والجداول. viewport ليس تكبير نظام أو هاتفًا فعليًا.
- **الحفظ مقابل `ae107375443ae586c2a12444761f34a9e5d8b39c`:**52 درسًا آخر و1060 صف كتالوج آخر و115 ملفًا محميًا لم تتغير، بما فيها المصادر الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. تغير20 صفًا تخص A2.11 فقط في الكتالوج. بقيت كتلة فحوص الاتساق الصوتي السابقة من A2.9 فصاعدًا حرفيًا؛ أضيفت اختبارات الإصدار قبلها دون إضعافها.
- playlist مطابق بايتًا ببايت؛474 ملفMP3 طابقت بصماتGit السابقة. تغيرت5 صفوف تخص A2.11 في audio-register في source_line/source_heading فقط، وبقيت212 صفًا أخرى. Nora02/Fadi03، وSalma02 المتسقة مع A2.9، وNarrator02 للمفردات والنماذج، وErzählperson03 للاستماع محفوظة بالكلمات والمسارات والحالات.
- الخيارات الثلاثون وفهارس المفاتيح العشرة ثابتة. المراجع تسند قواعد ومعاني محددة، لا تصنيفCEFR مستقلًا لكل مفردة أو قانونًا للضجيج والسكن. لا واجهة بعيدة أو نشرProduction اختُبرا.

## حدود المعنى والنصوص والصوت

- **الحركة ليست قاعدة الحالة وحدها:** في `Im Innenhof spielen zwei Kinder` يحدث اللعب داخل مكان بداتيف؛ `in den Innenhof` وجهة مع حرف متغير، أما `zur Haltestelle` فوجهة معzu والداتيف. حالات المفعول وعبارة الجر وظائف مختلفة.
- أريكة Fadi بجانب النافذة وأريكة Salma بمحاذاة الجدار؛ موضع الساحة في العبارة العامة مستقل عن موضعها في القراءة. القاموس فوق الطاولة، والمساحة الخضراء خلف المنزل، ومحطة الترام عند الزاوية. لا مسافات أو أزمنة رحلة أو هوية متكلم من الصوت مستنتجة.
- möchte … stellen رغبة لا وضع منجز؛ freundlich وصف لا دليل مساعدة أو موافقة؛ طلب leiser خفض للصوت قليلًا لا صمت مطلق أو حكم قانوني. النص لا يختبر تعيين المتكلمة من Sie sagt وحدها.
- **لم يُجرَ استماع أو توليد أو اعتماد صوتي جديد.** الأصول الخمسة ومقاطعها العشرة وكلماتها محفوظة؛ وقيدا A2.8/A2.9 السابقان لم يُصلحا في التسجيلات، وبقي توضيحهما المكتوب كما هو.
- المهمتان خياليتان: لا عنوان حقيقي أو نقل أثاث أو شكوى مرسلة أو شريك أو تسجيل. الجهر فيP01 فقط؛ P02 كتابة فقط. الإقرار والحد الحرفي لا يصححان اللغة أو النطق.

## أرشيف الفحوص السابقة

## الفحوص وحدودها — CR28

- **PASS:البناء والتحقق**؛ الحزمة **1,972,214 بايت** والمخزن **v75**. بقيت53 درسًا و428 عنوان تمرين و55 عنوان حوار وفق نمط العداد و754 مفردة؛530 سؤال درس+10 للبوابة و109 مهمات أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending. الأعداد ليست شهادة مراجعة أو اعتماد صوت لكل المنهج.
- **PASS:28 حارس مراجعة تراكميًا** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–10. حارس A2.10 يطابق99 وحدة و28 بندًا، و30 بديلًا وستة معايير والبصمات والكتالوج والنموذجين؛ و14 جزءًا داخل PHR وستة داخل MODEL. صُحح عداد مسودة الحارس من109 إلى مجموع الفئات الفعلي99؛ لم تُحذف فئة أو وحدة، ثم نجحت الحراس كلها.
- **PASS:خمس مجموعات Node:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغة app.js وservice-worker.js وكل tools/test_*.cjs وgit diff --check.
- **PASS:خمس مجموعات متصفح:** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**؛ حزم package-lock القائمة دون تعديلها، و@sparticuz/chromium143.0.4 ومكتبات al2023 خارجGit. التشغيل آلي صامت، لا استماع أو جهاز فعلي.
- الاختبار العام عند1440×900 و390×844: تنقل وRTL والتفريغات وتشغيلMP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. لا ضمان بقاء كل التسجيلات مخزنة دائمًا أو اختبار سمعي مستقل لكل أصل.
- تحديث عامل الخدمة من fixture الإصدارv42 إلىv75 دون إعادة تحميل قسرية، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد صوت غير مخزن بـ503 وإعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- **progression:** سجل A2.10 القديمv1 محفوظ لكنه لا يمنح إتقانv2 أو يفتحA2.11؛ مسودةv1 مرفوضة. تقبل النسخة الجديدة مع الدرجة والدليل المطلوبين. P01 يتطلب إقرار الجهر؛ P02 كتابة فقط دون خانة جهر. النموذجان223/122 حرفًا يمران بحدي150/110؛ الإجابة القصيرة أو الإقرارات الناقصة لا تمر. هذا ضبط للدليل المحلي لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**125 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة، مع **84 ظهورًا لفحوص غير حاسمة تشمل191 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة ولا نجاحًا شاملًا أو شهادةWCAG؛ لا مراجع بشري شرطًا للاستمرار.
- **النماذج:**PASS من أول تشغيل متسلسل عند1440 و390؛ حفظ وإعادة تحميل وتصدير واستيراد ومسودات. لم يظهر تذبذبfilechooser التاريخي في هذا التشغيل، ولا ادعاء بإصلاح سببه.
- **العرض الضيق:**126 حالة؛63 عند320×900 و63 عند568×320، مع كل الدروس والتفريغات والجداول. viewport ليس تكبير نظام أو هاتفًا فعليًا.
- **الحفظ مقابل `caf693a50a76d4ac76d05079341a9535a22aa797`:**52 درسًا آخر و1060 صف كتالوج آخر و115 ملفًا محميًا لم تتغير، بما فيها المصادر الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. تغير20 صفًا تخص A2.10 فقط في الكتالوج، وحُفظت كتلة فحوص اتساق A2.9/A2.10 السابقة حرفيًا.
- playlist مطابق بايتًا ببايت؛474 ملفMP3 طابقت بصماتGit السابقة. تغيرت5 صفوف تخص A2.10 في audio-register في source_line/source_heading فقط، وبقيت212 صفًا أخرى. الكلمات والأصوات والحالات والمسارات محفوظة: Lina00/Omar03، وRania02، وNarrator02 للمفردات والنماذج، وErzählperson03 للاستماع.
- الخيارات الثلاثون وفهارس المفاتيح العشرة ثابتة. المراجع تسند قواعد ومعاني محددة، ولا تمنح شهادةCEFR أو حكمًا طبيًا أو تصنيفًا مستقلًا لكل مفردة. لا واجهة بعيدة أو نشرProduction اختُبرا.

## حدود النصوص والصوت

- مُيّزت ثلاث قصص: جري Omar اليوم وتدريب Lina أمس؛ نشاط Rania وتوترها أحيانًا؛ ثم قصة كرة السلة بلا اسم أو جنس محدد. صوت الراوي وضمير **sie** العائد إلى **die Person** ليسا دليلًا على جنس المتكلم في النص.
- **gut gespielt** لعب جيدًا لا فاز؛ **regelmäßig** بانتظام لا كل يوم؛ **manchmal** أحيانًا لا دائمًا. خطة الاستراحة غدًا ليست فعلًا مكتملًا. عبارة Lina عن فائدة الرياضة لها تخص الشخصية وليست وصفة لكل متعلم.
- جميع كلمات الأصول الخمسة مطابقة للمصدر، وحُفظت الأصوات والروابط والحالة التاريخية. **لم يُجرَ استماع أو توليد أو اعتماد صوتي جديد.** لا إصلاح أو إعادة توليد لقيدي A2.8 وA2.9 السابقين؛ بقيت ملاحظاتهما وتوضيحاتهما المكتوبة كما هي.
- مهام الأداء خيالية؛ لا تمرين بدني فعلي أو معلومات صحية أو شريك أو تسجيل مطلوب. الجهر فيP01 فقط، والتحويل فيP02 كتابة فقط. الحد الحرفي والإقرار لا يقيّمان اللغة أو النطق آليًا.

## أرشيف الفحوص السابقة

## الفحوص وحدودها — CR27

- **PASS:** البناء والتحقق؛ الحزمة **1,960,928 بايت** والمخزن **v74**. بقيت53 درسًا، و428 عنوان تمرين، و55 عنوان حوار وفق نمط العداد، و754 مفردة. 530 سؤال درس+10 للبوابة، و109 مهمات أداء، و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending. الأعداد ليست شهادة مراجعة لكل محتوى المنهج أو للصوت.
- **PASS:27 حارس مراجعة تراكميًا** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–9. حارس A2.9 يطابق109 وحدات و36 بندًا، ومفاتيح الأسئلة و30 بديلًا وستة معايير والبصمات والكتالوج. يراجع سجل PHR في25 وحدة داخل الأصل، بما فيها التعداد الملتبس؛ لا يثبت جودته الصوتية.
- **PASS:خمس مجموعات Node:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغة app.js وservice-worker.js وكل tools/test_*.cjs، وgit diff --check.
- **PASS:خمس مجموعات متصفح:** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**. ثُبتت حزم package-lock القائمة دون تعديلها، واستُخدم @sparticuz/chromium143.0.4 خارج Git. فشل الإطلاق الأول لنقص libnspr4.so؛ استُخرجت مكتبات al2023 المرفقة ثم نجحت المجموعات الخمس، دون تعديل التطبيق لتجاوز خطأ.
- الاختبار العام عند1440×900 و390×844: تنقل وRTL والتفريغات وتشغيل MP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. التشغيل الآلي صامت وليس استماعًا، ولا ضمان تخزين كل التسجيلات إلى الأبد.
- تحديث عامل الخدمة من fixture الإصدارv42 إلىv74 دون إعادة تحميل قسرية، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد صوت غير مخزن بـ503 وإعادة تخزينه عند الاتصال. ليس اختبار كل ترحيل تاريخي منفصلًا.
- **progression:** سجل A2.9 القديمv1 يبقى، لكنه لا يمنح إتقانv2 أو يفتحA2.10؛ ومسودةv1 مرفوضة. تُقبل النسخة الجديدة مع الدرجة والدليل المطلوبين. P01 كتابة فقط دون خانة جهر؛ P02 يتطلب إقرار الجهر. النموذجان258/242 حرفًا يمران بحدي220/180؛ والإجابة القصيرة أو الإقرارات الناقصة لا تمر. هذا ضبط للدليل المحلي لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**121 حالة ممثلة، وصفر مخالفات للقواعد الآلية المختارة؛ مع **81 ظهورًا لفحوص غير حاسمة تشمل185 ظهورًا لعقد**. هذه ليست شهادة WCAG ولا مخالفات مؤكدة؛ لا مراجع بشري شرطًا للاستمرار.
- **النماذج:** PASS من أول تشغيل لاختبار التطبيق بعد إصلاح بيئة المتصفح، عند1440 و390؛ حفظ وإعادة تحميل وتصدير واستيراد ومسودات. لا ادعاء بإصلاح سبب تذبذب filechooser التاريخي.
- **العرض الضيق:**126 حالة؛63 عند320×900 و63 عند568×320، مع جميع الدروس والتفريغات والجداول. viewport ليس تكبير نظام أو جهازًا فعليًا.
- **الحفظ مقابل `368125120421de02fd0a044ac40bcbf81f4cb593`:**52 درسًا آخر و1060 صف كتالوج آخر و115 ملفًا محميًا لم تتغير؛ تشمل المصادر والبوابة وapp.js وCSS وpackage/lock وأداتي build/verify. تغير20 صفًا تخص A2.9 فقط في الكتالوج.
- playlist مطابق بايتًا ببايت؛474 ملف MP3 طابقت بصمات Git السابقة. تغيرت4 صفوف تخص A2.9 في audio-register في source_line/source_heading فقط، وبقيت213 صفًا أخرى. لا تغيير أصوات أو مسارات أو حالات: Narrator02، Kundin03/Mitarbeiter02، Salma02، Karim03. فحوص اتساق A2.9 السابقة محفوظة ولم تُضعف.
- المقارنة تحفظ الخيارات الثلاثين وفهارس المفاتيح العشرة؛ المراجع تسند قواعد ومعاني محددة، ولا تثبت حق ضمان لدولة معينة أو تصنيف CEFR مستقلًا لكل مفردة. لا واجهة بعيدة أو نشر Production اختُبرا.

## قيد نص التسجيل القائم — ليس إصلاحًا صوتيًا

في `DL-A2-09-AUD-PHR-01.mp3` يقول التفريغ **Er und sie könnte.** هذه صياغة تعداد ملتبسة، وليست نموذجًا صحيحًا لجملة ذات فاعل مركب. أضيفت البدائل المنفصلة **Er könnte. Sie könnte. Es könnte.** إلى الشرح، وأضيف es إلى جدول التصريف، مع تمييز sie للجمع وSie للاحترام مع könnten.

**التسجيل والتفريغ لم يتغيرا، ولم يُجرَ استماع أو اعتماد جديد.** لذلك لا يوصف الأصل بأنه صُحح صوتيًا أو خالٍ من الملاحظات. الملاحظة محفوظة في `audioTextIssues` وhelper-09 ووحدة PHR؛ بقي الأصل ظاهرًا بحالته التاريخية. لا إعادة توليد أو تغيير حالة بلا موافقة، ولا تجعل مراجعًا بشريًا شرطًا لمتابعة بقية المحتوى. وقيد MODEL السابق في A2.8 ما زال موثقًا كذلك.

## أرشيف الفحوص السابقة

## الفحوص وحدودها — CR26

- PASS:build/verify؛ الحزمة **1,948,674 بايت** والمخزن **v73**. 53 درسًا و428 عنوان تمرين و55 عنوان حوار وفق نمط العداد و754 مفردة؛530 سؤال درس+10 للبوابة و109 مهمات أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا،137ready و80pending. عداد الحوار لا يحصي جميع الأدوار أو التسجيلات؛ A2.8 فيه عبارات أخبار لا حوار متبادل.
- PASS: **26 حارس مراجعة تراكميًا** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–8. الحارس الجديد يطابق119 وحدة و32 بندًا وروابط المصدر والتقييم والكتالوج والبصمات، مع30 بديلًا وستة معايير، و24 وحدة داخلPHR و17 داخلMODEL. القائمة التصريفية تطابق الجدول ولا تُعامل كلها كجمل كاملة. الحارس يحفظ التنبيه المكتوب لقيدMODEL، ولا يثبت جودة الصوت أو صحة لغوية مستقلة.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan،وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs وgit diff --check.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**،عبر@sparticuz/chromium143.0.4 ومكتباتal2023 خارجGit. التشغيل آلي صامت؛ لا استماع أو هاتف فعلي.
- العام عند1440×900 و390×844: تنقل وRTL والتفريغات وتشغيلMP3 بسرعتي1 و0.8 وإيقافه عند التنقل،والعمل دون اتصال ونطاقات البايت. لا ضمان تخزين جميع التسجيلات دائمًا،ولا ادعاء اختبار استماع مستقل لكل أصل.
- تحديثfixture عامل الخدمةv42→v73 دون تحديث قسري،مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد الصوت بـ503 وإعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- progression: يبقى سجلv1 لكنه لا يمنح إتقانv2 أو يفتحA2.9؛مسودةv1 مرفوضة. يمرv2 مع80% ودليل الأداء. P01 يرفض غياب الجهر وP02 كتابة فقط؛النموذجان بطول157 و98 يمران بحدي130 و90،ولا تمر الإجابة القصيرة أو الإقرارات الناقصة. هذا فحص الدليل المحلي،لا تصحيح اللغة أو النطق.
- axe-core4.11.0: **117 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة**،مع **78 ظهورًا لفحوص غير حاسمة تشمل179 ظهورًا لعقد**. غير الحاسم ليس نجاحًا شاملًا أو مخالفة مؤكدة أو شهادةWCAG؛لا مراجع بشري شرطًا للمتابعة.
- النماذج: **PASS من أول تشغيل متسلسل** عند1440 و390،مع الحفظ وإعادة التحميل والتصدير والاستيراد والمسودات. لم يتكرر تذبذبfilechooser التاريخي،ولا ندعي إصلاح سببه.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320،مع الدروس والتفريغات والجداول. تغييرviewport ليس تكبير نظام أو اختبار جهاز فعلي.
- الحفظ مقابل `bc29869235813d775be19465a22fd19d1ba8a1db`: **52 درسًا آخر و1060 صف كتالوج آخر و114 ملفًا محميًا** لم تتغير،بما فيها المصادر الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. تغير20 صفًا تخصA2.8 فقط في الكتالوج.
- playlist مطابق بايتًا ببايت،و**474MP3** طابقت بصماتGit السابقة. أربعة صفوفA2.8 فيaudio-register تغيرت فيsource_line/source_heading فقط؛بقية213 صفًا وكل الحالات والأصوات والمسارات محفوظة. Narrator02 للمفردات والنماذج والقراءة،وErzählperson03 للاستماع،دون توليد أو استماع أو اعتماد جديد.
- خيارات الأسئلة الثلاثون وفهارس الإجابات العشرة ثابتة. المراجع تسند قواعد ومعاني محددة،لا أخبارًا حقيقية أو تصنيفCEFR مستقلًا.

## قيد واضح في نص التسجيل القائم

في `DL-A2-08-AUD-MODEL-01-01.mp3` يسرد التفريغ **Er, sie und es wird.** هذه صياغة تعداد ملتبسة،وليست نموذجًا صحيحًا لجملة ذات فاعل مركب. أضيفت في الدرس الصيغ المستقلة **Er wird. Sie wird. Es wird.** مع شرح بدائل المفرد،والفرق عنsie الجمع وSie للاحترام. **التسجيل والتفريغ نفسهما لم يتغيرا،ولم يُجرَ استماع أو اعتماد جديد.** لذلك لا يوصف الأصل بأنه صُحح صوتيًا أو خالٍ من الملاحظات. بقيت حالته التاريخية وروابطه متاحة وفق قرار حفظ التسجيلات؛الملاحظة فيJSON تحتaudioTextIssues وفيhelper-07 ووحدةMODEL. لا إعادة توليد أو تغيير صوت أو حالة بلا موافقة،ولا تجعل هذه الملاحظة أو مراجعًا بشريًا شرطًا لمتابعة المراجعة النصية لبقية الدروس.

## سجل تاريخي — CR25 وما قبله

## الفحوص وحدودها — CR25

- PASS: البناء والتحقق؛ الحزمة **1,936,482 بايت** والمخزن **v72**. 53 درسًا و428 عنوان تمرين و55 عنوان حوار وفق نمط العداد و754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء،1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا،137ready و80pending. عداد الحوار لا يحصي جميع الأدوار أو التسجيلات.
- PASS: **25 حارس مراجعة تراكميًا** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–7. الحارس الجديد يطابق94 وحدة و34 بندًا وروابط المصدر والتقييم والكتالوج والبصمات، مع30 بديلًا وستة معايير. داخلPHR روجعت20 عبارة وجملة؛ لاMODEL مسجل مستقل لهذا الدرس. الحراس لا تصحح اللغة مستقلًا عن المراجعة.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs وgit diff --check.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**، عبر@sparticuz/chromium143.0.4 ومكتباتal2023 خارجGit. التشغيل آلي صامت؛ لا استماع أو هاتف فعلي.
- العام عند1440×900 و390×844: تنقل وRTL والتفريغات وتشغيلMP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. لا ضمان لتخزين جميع التسجيلات دائمًا.
- تحديثfixture عامل الخدمةv42→v72 دون تحديث قسري، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد الصوت بـ503 وإعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- progression: يبقى سجلv1 لكنه لا يمنح إتقانv2 أو يفتحA2.8؛ مسودةv1 مرفوضة. يمرv2 مع80% ودليل الأداء. P01 يرفض غياب الجهر وP02 كتابة فقط؛ النموذجان يمران بالطول، ولا تمر الإجابة القصيرة أو الإقرارات الناقصة. هذه فحوص الدليل المحلي، لا تصحيح اللغة أو النطق.
- axe-core4.11.0: **113 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة**؛ بقي **75 ظهورًا لفحوص غير حاسمة تشمل173 ظهورًا لعقد**. غير الحاسم ليس نجاحًا شاملًا أو مخالفة مؤكدة أو شهادةWCAG؛ لا مراجع بشري شرطًا للمتابعة.
- النماذج: **PASS من أول تشغيل متسلسل** عند1440 و390، مع الحفظ وإعادة التحميل والتصدير والاستيراد والمسودات. لم يتكرر تذبذبfilechooser التاريخي، ولا ندعي إصلاح سببه.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320، مع الدروس والتفريغات والجداول. تغييرviewport ليس تكبير نظام أو اختبار جهاز فعلي.
- الحفظ مقابل `cea8a96a293a2c15ff41ecaf68bc7c58080bee85`: **52 درسًا آخر و1060 صف كتالوج آخر و114 ملفًا محميًا** لم تتغير؛ تشمل المصادر الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتيbuild/verify. تغير20 صفًا تخصA2.7 فقط في الكتالوج.
- playlist مطابق بايتًا ببايت، و**474MP3** طابقت بصماتGit السابقة. تغيرت أربعة صفوفA2.7 فيaudio-register فيsource_line/source_heading فقط؛ بقية213 صفًا وكل الحالات والأصوات والمسارات محفوظة. Hiba02/Maha00؛ القراءة00 والمفردات02 والاستماع03، دون توليد أو استماع أو اعتماد جديد.
- خيارات الأسئلة الثلاثون وفهارس الإجابات العشرة ثابتة. المراجع تسند القواعد والمعاني ذات الصلة، لا نتائج تعلم أو سفر حقيقية أو تصنيفCEFR مستقل.

## سجل تاريخي — CR24 وما قبله

## الفحوص وحدودها — CR24

- PASS: البناء والتحقق؛ الحزمة **1,925,590 بايت** والمخزن **v71**. 53 درسًا،428 عنوان تمرين،55 عنوان حوار وفق نمط العداد،754 مفردة؛530 سؤال درس+10 للبوابة،109 مهمات أداء،1080 صف كتالوج. 217 أصلًا صوتيًا/474 مقطعًا،137ready و80pending. عداد الحوار لا يحصي جميع الأدوار أو التسجيلات.
- PASS: **24 حارس مراجعة تراكميًا** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–6. الحارس الجديد يطابق104 وحدات و36 بندًا وبصمات المصدر، وروابط التقييم والكتالوج، و30 بديلًا وستة معايير، والمهمتين والحزمة. داخل الأصلين PHR/MODEL روجعت20 عبارة و6 جمل على التوالي، دون إضافتها مرة ثانية لعدد104. لا يعني الحارس مصحح لغة مستقلًا.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs وgit diff --check.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0** عبر@sparticuz/chromium143.0.4 ومكتباتal2023 خارجGit. التشغيل آلي صامت، لا استماع أو هاتف فعلي.
- العام عند1440×900 و390×844: تنقل وRTL وتفريغات وتشغيل MP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. لا ضمان تخزين جميع التسجيلات دائمًا.
- تحديثfixture عامل الخدمةv42→v71 دون تحديث قسري، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد الصوت بـ503 وإعادة تخزينه عند الاتصال. ليس اختبارًا مستقلًا لكل ترحيل تاريخي.
- progression: إتقانv1 محفوظ كسجل لكنه لا يمنح إتقانv2 أو يفتحA2.7؛ مسودةv1 مرفوضة. يمرv2 مع80% ودليل الأداء. P01 يرفض غياب الجهر، وP02 كتابة فقط؛ النموذجان يمران بالطول، ولا تمر الإجابة القصيرة أو الإقرارات الناقصة. هذا ليس تصحيحًا للغة أو النطق.
- axe-core4.11.0: **109 حالات ممثلة، وصفر مخالفات للقواعد الآلية المختارة**. بقي **72 ظهورًا لفحوص غير حاسمة تشمل167 ظهورًا لعقد**. لا نحول عدم الحسم إلى نجاح شامل أو شهادةWCAG، ولا نجعل مراجعًا بشريًا شرطًا للمتابعة.
- النماذج: **PASS من أول تشغيل متسلسل** عند1440 و390؛ حفظ وإعادة تحميل وتصدير واستيراد ومسودات. تذبذبfilechooser التاريخي لم يتكرر، لكن لم يثبت إصلاح سببه.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320، مع الدروس والتفريغات والجداول. viewport ليس تكبير نظام أو جهازًا فعليًا.
- الحفظ مقابل `0ac548565836255e6f2aa7b3190df01927c52111`: **52 درسًا آخر و1060 صف كتالوج آخر و114 ملفًا محميًا** لم تتغير، بما فيها مصادر الدروس الأخرى والبوابة وapp.js وCSS وpackage/lock وأداتاbuild/verify. تغير20 صفًا تخصA2.6 فقط في الكتالوج.
- playlist مطابق بايتًا ببايت، و**474MP3** طابقت بصماتGit السابقة. خمسة صفوفA2.6 فيaudio-register تغيرت فيsource_line/source_heading فقط؛ بقية212 صفًا وكل الحالات والأصوات والمسارات محفوظة. Mariam02/Sami03، وNarrator02 للمفردات والقراءة والنماذج، وErzählperson03 للاستماع. لا توليد أو استماع أو اعتماد جديد.
- فهارس الإجابات العشرة ثابتة، وتغير نص خيارQ06 الصحيح فقط من الثلاثين. يُراجع كل بديل في السجل، لا المفتاح وحده. لا تنقل جاهزية التسجيل التاريخية إلى اعتماد جديد أو شهادةCEFR.

## سجل تاريخي — CR23 وما قبله

## الفحوص وحدودها — CR23

- PASS:build/verify؛الحزمة **1,914,708 بايت** والمخزن **v70**. 53 درسًا و428 عنوان تمرين و55 عنوان حوار مطابقًا لنمط العداد و754 مفردة؛530 سؤال درس و10 للبوابة و109 مهمات أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا،137ready و80pending. عدّ الحوار يقيس عناوين،لا كل دور أو تسجيل.
- PASS: **23 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–5؛الحارس الجديد يطابق94 وحدة و34 بندًا،و16 عبارةPHR وخمسة أمثلةMODEL داخل أصليهما،وأدوار الحوار والنصين والبصمات وروابط التقييم والكتالوج والمهمتين. لا تصحيح لغوي مستقل مدّعى.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan،وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs وdiff. لا تعديلapp.js أوCSS.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0** من@sparticuz/chromium143.0.4 مع مكتباتal2023 المطابقة خارجGit. التشغيل آلي صامت،لا هاتف فعلي أو استماع.
- العام عند1440×900 و390×844: تنقل وRTL وتفريغ وتشغيل MP3 بسرعة1 و0.8 وإيقافه عند التنقل،والعمل دون اتصال ونطاقات البايت. لا ضمان تخزين كل التسجيلات دائمًا.
- تحديثfixture عامل الخدمةv42→v70 دون تحديث قسري،مع حفظ التقدم والإجابة وعزل المخازن وإعادة تخزين الصوت عند الاتصال إذا لزم. ليس اختبار ترحيل مستقلًا لكل إصدار محتوى تاريخي.
- progression: سجلv1 يبقى لكنه لا يمنح إتقانv2 أو يفتحA2.6؛مسودةv1 مرفوضة،ويمرv2 مع80% ودليل الأداء. P01 لا يطلب الجهر،P02 يرفض غيابه؛النموذجان يمران بالطول،والإجابة القصيرة أو المربعات الناقصة لا تمر. الإقرار والطول لا يصححان اللغة أو النطق.
- axe-core4.11.0: **105 حالات ممثلة وصفر مخالفات للقواعد الآلية المختارة**،مع **69 ظهورًا لفحوص غير حاسمة تشمل160 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة أو شهادةWCAG؛لا مراجع بشري شرطًا لاستمرار العمل.
- النماذج: **PASS من أول تشغيل متسلسل** عند1440 و390،مع الحفظ والتصدير والاستيراد والمسودات. تذبذبfilechooser التاريخي لم يتكرر؛ليس دليل إصلاح سببه.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320،تشمل كل الدروس مع التفريغات والجداول. تغييرviewport ليس تكبير نظام أو جهازًا فعليًا.
- الحفظ مقابل `59a29c0346d54b7a57548f9924a1ee92342a67b0`: **52 درسًا آخر و1060 صف كتالوج آخر** لم تتغير. خيارات29 محفوظة،وتغير نص الخيار الصحيحQ05 فقط،مع بقاء فهارس الإجابات العشرة.
- playlist مطابق بايتًا ببايت و**474MP3** طابقت بصماتGit السابقة. خمسة صفوفA2.5 فيaudio-register تغيرت في **source_line/source_heading فقط**؛بقية212 صفًا والحقول والحالات والمسارات محفوظة. Mira02/Rami03،وNarrator02،والقراءة والاستماع03؛لا توليد أو استماع أو اعتماد جديد.

## أرشيف سابق — لا ينسخ الحالة أعلاه

## الفحوص وحدودها — CR22

- PASS:build/verify؛ الحزمة **1,903,251 بايت** والمخزن **v69**. 53 درسًا و428 عنوان تمرين و55 عنوان حوار مطابقًا لنمط العداد و754 مفردة؛530 سؤال درس و10 للبوابة و109 مهمات أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا،137ready و80pending.
- **تصحيح وصف العداد:** وصوله إلى56 فيCR21 كان بسبب إضافة كلمة«الحوار» إلىعنوانT05، لا بسبب نموذجP02 كما وُصف في تقريرCR21. صار55 هنا لأن عنوانT08 يستعمل«مكالمة» بدل«محادثة». لا حوار أو تسجيل محذوف؛العداد يقيس نمط العناوين، لا عدد المحادثات أو الأدوار.
- PASS: **22 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–4؛ الحارس الجديد يطابق114 وحدة و38 بندًا و24 عبارة داخلPHR، وأدوار الحوار ونص الاستماع وروابط التقييم والكتالوج والبصمات. مقارنة البريد تراعي9/neun و11/elf والترقيم؛ليست شهادة نطق.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وجميعtools/test_*.cjs وdiff. لا تعديلapp.js أوCSS.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**. استُعملت حزمة@sparticuz/chromium143.0.4 ومكتباتal2023 خارجGit؛التشغيل آلي وصامت،لا اختبار هاتف فعلي أو استماع.
- العام عند1440×900 و390×844: التنقل وRTL والتفريغ وتشغيل MP3 بسرعة1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. هذا لا يضمن تخزين جميع التسجيلات دائمًا.
- تحديثfixture عامل الخدمةv42→v69 دون تحديث قسري، مع حفظ التقدم والإجابة وعزل المخازن وإعادة تخزين الصوت عبر الاتصال عند الحاجة. لا تدّعي هذه التجربة اختبار ترحيل كل إصدار محتوى تاريخي.
- progression: يبقى سجلv1 لكن لا يمنح إتقانv2 أو يفتحA2.5؛مسودةv1 مرفوضة،ويمرv2 مع80% ودليل الأداء. P01 يرفض غياب الجهر،P02 لا يطلبه؛النموذجان يمران بالطول،والإجابة القصيرة أو المربعات الناقصة لا تمر. التحقق من الإقرار ليس تصحيحًا للغة أو النطق.
- axe-core4.11.0: **101 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة**، مع **66 ظهورًا لفحوص غير حاسمة تشمل154 ظهورًا لعقد**. غير الحاسم ليس مخالفة مؤكدة أو شهادةWCAG؛لا مراجع بشري شرطًا لمتابعة العمل.
- النماذج: **PASS من أول تشغيل متسلسل** عند1440 و390،مع الحفظ والتصدير والاستيراد والمسودات. تذبذبfilechooser السابق لم يتكرر هنا؛ليس دليل إصلاح سببه.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320،تشمل كل الدروس مع التفريغات والجداول. تغييرviewport ليس تكبير نظام أو تجربة جهاز فعلي.
- الحفظ مقابل `d3109c2ccc327ba3888c3737f5d36eb2993256e3`: **52 درسًا آخر و1060 صف كتالوج آخر** لم تتغير. الخيارات الثلاثون وفهارس الإجابات العشرة محفوظة.
- playlist مطابق بايتًا ببايت و**474MP3** طابقت بصماتGit السابقة. أربعة صفوفA2.4 فيaudio-register تغيرت في **source_line/source_heading فقط**؛بقية213 صفًا وبقية الحقول والحالات والمسارات محفوظة. **Amal00/Mitarbeiter02/Narrator02**؛لا توليد أو استماع أو اعتماد جديد.

## أرشيف سابق — لا ينسخ الحالة أعلاه

## الفحوص وحدودها — CR21

- PASS: البناء والتحقق؛ الحزمة **1,892,977 بايت** والمخزن **v68**. 53 درسًا و428 عنوان تمرين و**56 قسم حوار** (زاد نموذج P02 النصي قسمًا، لا أصلًا صوتيًا) و754 مفردة؛ 530 سؤال درس و10 للبوابة و109 مهام أداء و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا،137ready و80pending.
- PASS: **21 حارس مراجعة** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–3. الحارس الجديد يطابق117 وحدة و39 بندًا، و26 عبارة داخل أصلPHR، والأدوار والنصين والبصمات والروابط والمهمتين. ليس مصححًا لغويًا مستقلًا.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan، وصياغةapp.js وservice-worker.js وكلtools/test_*.cjs وdiff. لا تعديلapp.js أوCSS.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**. فشل تنزيلPlaywright بسببECONNRESET، فاستُخدمت حزمة@sparticuz/chromium143.0.4 ومكتباتal2023 المطابقة خارجGit؛ ليس تعديلًا للتطبيق.
- العام عند1440×900 و390×844: تنقل وRTL وتفريغ وتشغيل آلي صامت بسرعة1 و0.8 وإيقاف عند التنقل، وعمل دون اتصال ونطاقات بايت. لا هاتف فعلي أو استماع أو ضمان تخزين كل الصوت دائمًا.
- تحديثfixture العاملv42→v68 دون تحديث قسري، مع حفظ التقدم والإجابة وعزل المخازن؛ قد يلزم فتح الصوت مع الاتصال لإعادة تخزينه بعد حذف مخزن قديم. هذا ليس اختبار ترحيل مستقلًا لكل إصدار محتوى تاريخي.
- progression: يبقى تاريخv1 لكن لا يمنح إتقانv2 أو يفتحA2.4؛ تُرفض مسودةv1، ويمرv2 مع80% ودليل الأداء. P01 لا يطلب الجهر وP02 يرفض غيابه؛ النموذجان يمران بالطول، والإجابة القصيرة والمربعات الناقصة لا تمر. الإقرار لا يصحح اللغة أو النطق.
- axe-core4.11.0: **97 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة**؛ بقي **63 ظهورًا لفحوص غير حاسمة تشمل148 ظهورًا لعقد**. غير الحاسم ليس مخالفة مثبتة أو شهادةWCAG؛ لا نجعل مراجعًا بشريًا شرطًا للمتابعة.
- النماذج: المحاولة الأولى نجحت عند1440 ثم انتهت مهلةfilechooser عند390 (السطر48). **إعادة المجموعة منفردة نجحت عند1440 و390**، بما يشمل الحفظ والتصدير والاستيراد والمسودات. السبب المتقطع غير مشخص وغير مُصلح؛ لا نحذف النتيجة الأولى من السجل.
- العرض الضيق: **126 حالة**؛63 عند320×900 و63 عند568×320، تشمل كل الدروس والتفريغات والجداول. تغييرviewport ليس تكبير نظام أو تجربة جهاز فعلي.
- الحفظ مقابل `59dd2c9490f1f0636271c6158a5f6472067de168`: **52 درسًا آخر و1060 صف كتالوج آخر** لم تتغير؛ **27 نص خيار** محفوظة، وثلاثة خيارات Q07 صُححت، مع بقاء فهارس الإجابات العشرة.
- playlist مطابق بايتًا ببايت و**474MP3** طابقت بصماتGit السابقة؛ أربعة صفوفA2.3 فيaudio-register تغيرت في **source_line/source_heading فقط**. بقية213 صفًا وحقول الروابط والحالات محفوظة؛ Narrator/Salma/Kellnerin02 وGast03 وErzählperson03. لا استماع أو توليد أو اعتماد جديد.

## أرشيف سابق — لا ينسخ الحالة أعلاه

## الفحوص وحدودها — CR20

- PASS:build/verify؛الحزمة **1,880,848 بايت** وcachev67.53 درسًا،428 عنوان تمرين،55 قسم حوار،754 مفردة،530 سؤال درس و10 للبوابة،109 مهام أداء،1080 معرّفًا في الكتالوج.217 أصلًا صوتيًا/474 مقطعًا،137ready و80pending. سلامة البنية لا تعني مراجعة مفصلة لكل الدروس.
- PASS: **20 حارس مراجعة** تشملA0.1–5 والبوابة وA1.1–12 وA2.1–2. الحارس الجديد يطابق141 وحدة و30 بندًا والمصادر والبصمات والمفاتيح والكتالوج والمهمتين وأدوار الحوار وجدول الرحلة؛ليس مصححًا مستقلًا للألمانية.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan،وصياغةJavaScript وdiff. لا تغييرapp.js أوCSS.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout علىChromium143.0.7499.0. مكتباتal2023 المستعملة من حزمةChromium خارجGit؛المتصفح آلي وصامت،لا استماع أو اعتماد نطق.
- العام:1440×900 و390×844،التنقل وRTL والتفريغ وتشغيل MP3 بسرعة1 و0.8 وإيقافه عند التنقل،والعمل دون اتصال ونطاقات البايت. لا هاتف فعلي أو ضمان تخزين الصوت كله دائمًا.
- تحديثfixture عامل الخدمةv42→v67 نجح دون تحديث قسري،مع حفظ التقدم والإجابة وعزل المخازن. قد يلزم فتح التسجيل مع الاتصال لإعادة تخزينه بعد إزالة مخزن قديم.
- progression يتحقق من بقاء تاريخv1 دون اعتباره إتقانv2 أو فتحA2.3،ورفض مسودته القديمة،وقبولv2 مع80% ودليل الأداء. النموذجان يمران بالطول؛P01 يرفض غياب الجهر،P02 لا يعرض شرطه؛المربعات الناقصة والإجابة القصيرة لا تمر. هذا تحقق إقرارات لا تصحيح اللغة أو النطق.
- axe-core4.11.0: **93 حالة ممثلة وصفر مخالفات للقواعد الآلية المختارة**،مع **60 ظهورًا لفحوص غير حاسمة تشمل142 ظهورًا لعقد**. غير الحاسم ليس نجاحًا شاملًا أو مخالفة مثبتة؛لا شهادةWCAG ولا شرط مراجع بشري.
- النماذج:PASS من أول تشغيل للمجموعة عند1440 و390،مع الحفظ والتصدير والاستيراد والمسودات. تذبذبfilechooser التاريخي لم يتكرر؛سببه غير مشخص ولا ندعي إصلاحه.
- العرض الضيق: **126 حالة**،63 عند320×900 و63 عند568×320،تشمل كل الدروس والتفريغ والجداول ومنها جدولT08. تغييرviewport لا تكبير نظام أو جهاز هاتف فعلي.
- الحفظ مقابل`f158d32dd783d3aae19593d6928673e8552d84c7`: **52 درسًا آخر و1060 صف كتالوج آخر** لم تتغير. الخيارات الثلاثون وفهارس إجاباتA2.2 العشرة محفوظة.
- playlist مطابق بايتًا ببايت و**474MP3** طابقت بصماتGit السابقة. خمسة صفوفA2.2 فيaudio-register تغيرت في **source_line/source_heading فقط**؛212 صفًا آخر وبقية الحقول والروابط والحالات محفوظة. PHR/MODEL/READ02،Lea02/Ben03 بالتناوب،LST03؛لا مراجعة سمعية جديدة.

## أرشيف سابق — CR19 وما قبله

## الفحوص وحدودها — CR19

- PASS:build/verify؛الحزمة **1,867,423 بايت**،وcachev66.53 درسًا،428 عنوان تمرين،55 قسم حوار،754 مفردة،530 سؤال درس و10 للبوابة،109 مهام أداء،1080 معرّفًا في الكتالوج.217 أصلًا صوتيًا/474 مقطعًا،137ready و80pending. هذا تحقق بنية لا مراجعة تفصيلية للدروس غير المسجلة.
- PASS: **19 حارس مراجعة**:A0.1–5 والبوابة وA1.1–12 وA2.1. الحارس الجديد يتحقق من125 وحدة و37 مطلبًا والبصمات والمفاتيح والمصدر والكتالوج والأصوات والعرض،لا صحة لغوية مستقلة.
- PASS: **5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan،وفحوص صياغةJavaScript وdiff. fixtureA2.1 المنسوخ أخفق أولًا بسبب عكس مؤشر الجهر منA1.12؛صُححت بيانات الاختبار وأعيدت المجموعات كلها بنجاح. لا تعديلapp.js أوCSS ولا ادعاء خطأ تطبيق غير مثبت.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout علىChromium143.0.7499.0. استُخدمت مكتباتal2023 المناسبة من حزمةChromium خارجGit؛المتصفح آلي وصامت،لا مراجعة سمعية.
- العام:1440×900 و390×844،التنقل والتفريغ وRTL وتشغيل MP3 بسرعة1 و0.8 وإيقافه عند التنقل،والعمل دون اتصال ونطاقات البايت. لا جهاز هاتف فعلي أو اعتماد نطق.
- تحديثfixture عامل الخدمةv42→v66 نجح دون تحديث قسري،مع حفظ التقدم والإجابة وعزل المخازن. قد يلزم فتح الصوت مع الاتصال لإعادة تخزينه؛لا ضمان ببقاء جميع التسجيلات دائمًا.
- progression يختبر بقاء تاريخv1 دون منحه إتقانv2 أو فتحA2.2،ورفض المسودة القديمة،وقبولv2 مع80% ودليل الأداء. P01 يتطلب إقرار الجهر،P02 لا يعرض شرط الجهر؛النموذجان يمران بالطول ولا تكفي إجابة قصيرة أو مربعات ناقصة. هذه شروط وإقرارات لا تصحيح لغة أو نطق.
- axe-core4.11.0: **89 حالة ممثلة،صفر مخالفات للقواعد الآلية المختارة**،مع **57 ظهورًا لفحوص غير حاسمة تشمل136 ظهورًا لعقد**. غير الحاسم ليس مخالفة مثبتة أو نجاحًا شاملًا؛لا شهادةWCAG ولا شرط مراجع بشري.
- النماذج:PASS من أول تشغيل عند1440 و390،بما فيها الحفظ وإعادة التحميل والتصدير والاستيراد والمسودات. تذبذبfilechooser التاريخي لم يتكرر؛سببه غير مشخص ولا ندعي إصلاحه.
- العرض الضيق: **126 حالة**،63 عند320×900 و63 عند568×320؛كل الدروس والتفريغ والجداول. تغييرviewport لا تكبير نظام أو اختبار هاتف فعلي.
- الحفظ مقابل`17fe5b87e7a3eed76e3c9b7a5bf792213df521ca`: **52 درسًا آخر و1060 صف كتالوج آخر** دون تغيير. فهارس إجاباتA2.1 العشرة و29 خيارًا محفوظة؛تغير فقط نصQ01[0] لإزالة ادعاء انتهاء الدورة.
- ملفplaylist مطابق بايتًا ببايت،و**474MP3** طابقت بصماتGit السابقة. خمسة صفوفA2.1 فيaudio-register تغيرت في **source_line/source_heading فقط**؛212 صفًا آخر وبقية الحقول والروابط والحالات محفوظة. أصواتA2.1:PHR/MODEL/READ02،الحوارKarim03/Nour02،LST03؛لا استماع أو موافقة جديدة.

## أرشيف سابق — CR18 وما قبله

## الفحوص وحدودها — CR18

- PASS: البناء والتحقق؛ الحزمة **1,855,737 بايت**.53 درسًا،428 عنوان تمرين،55 قسم حوار،754 مفردة،530 سؤال درس و10 للبوابة،109 مهام أداء،1080 معرّفًا في الكتالوج؛217 أصلًا صوتيًا/474 مقطعًا،137ready و80pending. الجاهزية البنيوية ليست مراجعة تفصيلية لكل الدروس.
- PASS: **18 حارس مراجعة** منA0.1 إلىA1.12 مع البوابة، و**5 مجموعاتNode**: progression/service_worker/session_persistence/study_time/daily_plan. فحوص الصياغة وgit diff --check ناجحة.
- PASS: **5 مجموعات متصفح**: browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout، علىChromium143.0.7499.0. فشل التشغيل الأول لغيابlibnspr4.so من بيئة التشغيل؛ استُخرجت مكتباتal2023 المصاحبة ثم نجحت المجموعات الخمس. هذا إصلاح بيئة الاختبار لا خطأ تطبيق جرى إخفاؤه.
- المتصفح العام:1440×900 و390×844؛ التنقل وRTL والتفريغ والتشغيل الآلي بسرعة1 و0.8 وإيقاف الصوت عند التنقل، والمخزن وMP3 ونطاقات البايت دون اتصال. المتصفح صامت، فلا يعد استماعًا أو فحص نطق.
- تحديث عامل الخدمة منfixturev42 إلىv65 بلا تحديث قسري، مع حفظ التقدم والإجابة وعزل المخازن. قد يلزم فتح الصوت مع الاتصال لإعادة تخزينه؛ لا ضمان بقاء كل المقاطع دائمًا.
- VM فيprogression يختبر الاحتفاظ بتاريخv1 دون منحه إتقانv2 أو فتحA2.1، ورفض مسودته القديمة، ثم قبولv2 بعد80% ودليل الأداء. نموذجاP01 يمران بالطول دون جهر؛P02 يرفض غياب إقرار الجهر. هذه فحوص شروط وإقرارات لا تصحيح ألمانية أو نطق.
- axe-core4.11.0: **85 حالة ممثلة، صفر مخالفات للقواعد الآلية المختارة**، و**54 ظهورًا لفحوص غير حاسمة تشمل130 ظهورًا لعقد**. لا تُعد النتائج غير الحاسمة مخالفات مثبتة أو نجاحًا شاملًا، ولا شهادةWCAG أو شرط مراجع بشري.
- النماذج: PASS من أول تشغيل للمجموعة عند1440 و390، للحفظ وإعادة التحميل والتصدير والاستيراد والمسودات. لم يتكرر تذبذبfilechooser التاريخي؛ سببه غير مشخص ولا ندعي إصلاحه.
- العرض الضيق: **126 حالة**،63 عند320×900 و63 عند568×320. جميع الدروس والتفريغ والجداول ضمن الاختبار؛ ليس هاتفًا فعليًا أو تكبير نظام التشغيل.
- الحفظ مقابل`73bc64ee4ebb8735c6aacca97175a96ced154db3`: **52 درسًا آخر و1060 صف كتالوج آخر** لم تتغير؛ جميع خيارات ومفاتيحA1.12 محفوظة، وplaylist مطابق بايتًا ببايت، و**474MP3** طابقت بصماتGit السابقة.
- فُحصت مراجع الأصول الأربعة، لكن التغيير الفعلي محصور في **source_line/source_heading لثلاثة صفوف**:READ/LST/DLG؛PHR لم يتغير موضعه. بقية214 صفًا وكل الحقول الأخرى محفوظة. هذا يصحح تعبير «أربعة صفوف» في وصف دفعة التنفيذ الأولى؛ لا تغيير لأربعة أصول الصوت نفسها.

## أرشيف سابق — CR17 وما قبله

## الاختبارات وحدودها — CR17

- PASS: `python3 tools/build_course.py` و`python3 tools/verify_course.py`؛ الحزمة **1,844,030 بايت**.53 درسًا،428 عنوان تمرين،55 قسم حوار،754 مفردة؛530 سؤال درس و 10 للبوابة،106 مهام أداء و 3 للبوابة،1080 معرّفًا بالكتالوج. الجاهزية البنيوية لا تعني مراجعة كل الدروس تفصيليًا.
- PASS: **17 حارس مراجعة** من A0.1 إلى A1.11 والبوابة. الحارس الجديد يثبت اتساق 115 وحدة و 34 مطلبًا والبصمات والمفاتيح والربط، لا صحة لغوية مستقلة أو اعتماد نطق.
- PASS: **5 مجموعات Node**: `progression`, `service_worker`, `session_persistence`, `study_time`, `daily_plan`، وصياغة JavaScript و`git diff --check`.
- PASS: **5 مجموعات متصفح** على Chromium143.0.7499.0: العام،تحديث عامل الخدمة ولوحة المفاتيح،axe،النماذج،والعرض الضيق. المتصفح آلي وصامت، لا استماع أو جهاز هاتف فعلي.
- العام:1440×900 و 390×844؛ التنقل والتفريغ والمخزن وتشغيل MP3 ونطاقات البايت دون اتصال. تحديث fixture v42→v63 نجح دون تحديث قسري ومع حفظ التقدم والإجابة؛ قد يحتاج الصوت فتحه مجددًا مع الاتصال، ولا ضمان لتخزين كل الصوت دائمًا.
- fixture التحديث يستخدم بيانات الدرس الحالية؛VM في progression اختبر بقاء سجل v1 وعدم كفايته لفتح A1.12 ورفض المسودة القديمة، وقبول v2 مع الإتقان ودليل الأداء. النموذجان يمران بحدود الطول، و P01 لا يفرض الجهر، و P02 يرفض غيابه. هذا تحقق إقرارات لا تصحيح لغوي أو صوتي.
- axe-core4.11.0: **81 حالة ممثلة، صفر مخالفات للقواعد الآلية المختارة**، و**51 ظهورًا لفحوص غير حاسمة تشمل 124 ظهورًا لعقد**. التباين غير المحسوم لا يُعد مخالفة مثبتة أو نجاحًا شاملًا؛ لا شهادة WCAG ولا اشتراط مراجع بشري للمتابعة.
- النماذج: نجاح من المحاولة الأولى عند 1440 و 390، بما فيها الحفظ والتصدير والاستيراد والمسودات. تذبذب filechooser التاريخي في CR14 لم يتكرر؛ السبب غير مشخص ولا ندعي إصلاحه.
- العرض الضيق: **126 حالة**،63 عند 320×900 و 63 عند 568×320؛ كل الدروس والتفريغ والجداول. هذا تغيير viewport لا تكبير نظام أو اختبار هاتف فعلي.
- الحفظ مقابل`095d6b10200359d7979714da8badda9f39f18981`: **52 درسًا آخر و 1060 صفًا آخر** لم تتغير، وكل خيارات ومفاتيح A1.11 محفوظة. **474 ملف MP3 طابق بصمات Git السابقة**، وملف playlist مطابق بالكامل، أي 217 أصلًا بنفس الكلمات والأصوات والمسارات والحالات.137ready و 80pending كما كانت.
- تغير register محصور في source_line/source_heading لثلاثة صفوف A1.11؛214 صفًا آخر وروابط المهام والتشغيل محفوظة. أُضيف تحقق للأسطر كي لا تظل تشير إلى مواضع خاطئة بعد توسعة المصدر.


## الاختبارات وحدودها — CR16

- PASS: `python3 tools/build_course.py` و`python3 tools/verify_course.py`؛ الحزمة **1,832,834 بايت**.53 درسًا،428 عنوان تمرين،55 قسم حوار،754 مفردة؛530 سؤال درس و 10 للبوابة،106 مهام أداء و 3 للبوابة،1080 معرّفًا بالكتالوج. هذه الأعداد البنيوية لا تعني مراجعة تفصيلية لكل الدروس.
- PASS: **16 حارس مراجعة** من A0.1 إلى A1.10 والبوابة. الحارس الجديد يتحقق من 119 وحدة و 35 مطلبًا والبصمات والربط، لا يصدر شهادة لغوية أو طبية أو صوتية.
- PASS: **5 مجموعات Node**: `progression`, `service_worker`, `session_persistence`, `study_time`, `daily_plan`، وصياغة JavaScript و`git diff --check`.
- PASS: **5 مجموعات متصفح** على Chromium143.0.7499.0: العام،تحديث عامل الخدمة ولوحة المفاتيح،axe،النماذج،والعرض الضيق. المتصفح آلي وصامت؛ليس استماعًا أو هاتفًا فعليًا.
- العام:1440×900 و 390×844،التفريغ والتنقل والمخزن وتشغيل MP3 ونطاقات البايت دون اتصال. اختبار التحديث من fixture v42 إلى v62 نجح دون تحديث قسري ومع حفظ التقدم والإجابة؛قد يحتاج الصوت فتحه مجددًا مع الاتصال،ولا ضمان لتخزين كل الصوت دائمًا.
- fixture التحديث يستخدم بيانات الدرس الحالية؛VM في progression هو الذي اختبر رفض مسودة v1 وبقاء سجلها وعدم كفايته لفتح A1.11 دون الإتقان ودليل الأداء في v2. الطول والمربعات والجهر ليست تصحيحًا للغة أو النطق.
- axe-core4.11.0: **77 حالة ممثلة،صفر مخالفات للقواعد الآلية المختارة**،و**48 ظهورًا لفحوص غير حاسمة تشمل 118 ظهورًا لعقد**. التباين غير المحسوم لا يُحسب خطأ مثبتًا أو نجاحًا شاملًا؛لا شهادة WCAG ولا شرط مراجع بشري للاستمرار.
- النماذج: نجاح من المحاولة الأولى عند 1440 و 390،بما فيها نافذة استيراد JSON والتصدير والحفظ والمسودات. تذبذب filechooser في CR14 لم يتكرر؛لا سبب مشخص أو إصلاح مزعوم.
- العرض الضيق: **126 حالة**،63 عند 320×900 و 63 عند 568×320؛كل الدروس والتفريغ والجداول. هذا تغيير viewport لا تكبير نظام أو جهاز فعلي.
- الحفظ مقابل`ef54f1d10b28ab3e7005d54007f3e87a7bdc4fc4`: **52 درسًا آخر و 1060 صفًا آخر** لم تتغير؛الخيارات والمفاتيح محفوظة. **474 ملف MP3 طابق بصمات Git السابقة**،وكلمات التسجيلات ومساراتها وأصواتها وحالاتها ثابتة. الفرق في playlist عنوان واحد فقط،وفي register ثلاث سجلات حقولها المرجعية فقط؛217 أصلًا،137ready و 80pending.
- ملاحظة تنفيذية: توقف سكربت التعديل عند BOM في audio-register،ثم صُحح قارئه وأُكمل الجزء المتبقي دون إعادة الجزء السابق. حُفظ BOM في ذلك الملف؛catalog بلا BOM. لا خطأ مخفي أو ادعاء اختبار النسخة الجديدة قبل اكتمال التعديل.


## الاختبارات وحدودها — CR15

- PASS: `python3 tools/build_course.py` و`python3 tools/verify_course.py`؛ الحزمة **1,822,908 بايت**،53 درسًا و428 عنوان تمرين و55 قسم حوار و754 مفردة.530 سؤال درس +10 للبوابة،106 مهمة أداء +3 للبوابة،1080 معرّفًا في الكتالوج. الجاهزية البنيوية لا تعني مراجعة جميع الدروس تفصيليًا.
- PASS: الحراس الـ15، منA0.1 إلىA1.9 والبوابة. الحارس الجديد فشل أولًا على استنتاج الفندق، ثم نجح بعد الإصلاح؛ هو حارس اتساق لا حكم لغوي مستقل.
- PASS: مجموعاتNode الخمس `progression`, `service_worker`, `session_persistence`, `study_time`, `daily_plan`، وصياغةJavaScript و`git diff --check`.
- PASS: المتصفح العام عند1440×900 و390×844؛ التخزين المؤقت والتنقل والتفريغ وتشغيلMP3 ونطاقات البايت دون اتصال. Chromium143.0.7499.0 آلي وصامت؛ ليس استماعًا أو جهاز هاتف حقيقيًا.
- PASS: لوحة المفاتيح وتحديث عامل الخدمة منfixture v42 إلىv60 دون تحديث قسري للصفحة، مع حفظ التقدم والإجابة وعزل المخازن. الصوت القديم قد يحتاج فتحه مجددًا مع الاتصال؛ لا وعد بتخزين كل الصوت دائمًا دون اتصال. fixture التحديث يستخدم بيانات الدرس الحالية؛ رفضv1 يختبرهVM فيprogression، لا محاكاة بيانات قديمة كاملة في المتصفح.
- PASS: axe-core4.11.0 في **73 حالة** ممثلة؛ **صفر مخالفات للقواعد الآلية المختارة**، و**45 ظهورًا لفحوص غير حاسمة تشمل112 ظهورًا لعقد**. معظمها تباين لم يحسمه الفحص؛ لا تُحسب مخالفات مثبتة أو نجاحًا شاملاً، ولا شهادةWCAG أو اشتراط مراجع بشري للاستمرار.
- PASS: النماذج ولوحة المفاتيح والتصدير والاستيراد والمسودات عند1440 و390 من المحاولة الأولى فيCR15. تذبذب نافذة اختيار الملف فيCR14 لم يتكرر، ولا نعرف سببه ولا ندعي إصلاحه.
- PASS:126 حالة ضيقة/قصيرة،63 عند320×900 و63 عند568×320، تتضمن كل الدروس والتفريغ والجداول. هذا تغييرviewport لا تكبير نظام أو اختبار جهاز فعلي.
- PASS: مقارنة الحفظ مقابل`142ef4eb65629a06cb792ab1db3587160ab57eb6`:52 درسًا آخر و1060 صفًا خارجA1.9 لم تتغير؛ الخيارات والمفاتيح محفوظة، و217 كائن صوت وسجلها و474 ملفMP3 دون تغيير. كل الكلمات المسجلة في الحوار والقراءة والاستماع محفوظة؛137 أصلًاready و80pending كما كانت.
- P01/P02: يثبتVM قبول طول النموذج والمربعات والجهر عند طلبه، ورفض المسودات القديمة وعزلv2؛ لا يثبت جودة اللغة أو النطق. سجلv1 يبقى، لكن المتابعة إلىA1.10 تتطلب الإتقان الحالي ودليل الأداء.


## سجل إعادة فحص — CR14/A1.8 وcache v59

- PASS: `build_course.py` و`verify_course.py`؛ الحزمة **1,811,986 بايت**. حراس `tools/test_*_review.py` الأربعة عشر نجحت كاملة: A0.1–5 والبوابة وA1.1–8. وضع `--implementation-only` استُعمل قبل السجل في أول دفعتين فقط ولم يُحسب مراجعة كاملة.
- حارس CR14 فشل قبل إصلاح مثالmuss brauchen؛ ثم أُضيف كشف نفي احتياج البنطال وفشل قبل إصلاحT05.1. السجل النهائي120 وحدة/35 بندًا، مع فحص الخيارات والمفاتيح وروابط المصدر والفهرس والبصمات والتسجيلات وفقرات الحوار.
- PASS لاختبارات Node: `progression` و`session_persistence` و`daily_plan` و`study_time` و`service_worker`؛ وصياغة app.js/service-worker.js و`git diff --check`. VM يقبل النموذجين، يرفض القصر والمعايير الناقصة، ويشترط الجهر لـP01 فقط.
- نتيجة وجلسةA1.8v1 لا تُعاملان كـv2 لفتحA1.9؛ التحقق لا يحذف سجل الإتقان القديم، وأول حفظ جديد قد يستبدل مجموعة مسودات الإصدار السابق. حد الطول والمربعات لا يصححان اللغة أو النطق.
- المتصفح: المحاولة الأولى لـforms-keyboard انتهت بمهلة30 ثانية عند حدثfilechooser الثاني قبل إكمال العرض1440؛ لم نجتزها بصمت. فحص تشخيصي مؤقت أظهر focus علىrestore-file وdocument.hasFocus=true عند1440/390 ونجح. ثم نجح الاختبار الأصلي غير المعدل ثلاث مرات؛ السبب غير محسوم، ولا ادعاء إصلاح خلل تطبيق غير متكرر.
- بعد ذلك PASS للمجموعات الخمس: `forms-keyboard` و`accessibility-audit` و`narrow-layout` و`accessibility-update` و`browser`. Chromium143.0.7499.0،Playwright1.58.2،axe-core4.11.0. npm ci دون تغييرpackage/lock؛ `CHROMIUM_EXECUTABLE_PATH=/tmp/chromium LD_LIBRARY_PATH=/tmp/al2023/lib`.
- axe: **69 حالة، صفر مخالفات للقواعد المختارة،42 ظهورًا لقواعد غير محسومة و106 ظهورات للعقد**. ليست106 عيوب مثبتة فريدة أو شهادةWCAG. أضيف مصدرA1.8 ونموذج أدائه عند1440/390؛ نموذج الأداء fixture مباشر لا رحلة متعلم كاملة. لا انتظار مراجع بشري شرطًا للمتابعة.
- العرض الضيق/القصير126 حالة عند320×900 و568×320. الاختبار العام1440×900 و390×844 يشمل53 درسًا والبوابة/217 أصلًا، ودون اتصال وRange206/416/503 وتشغيل عينةB2.12 بسرعتي1 و0.8. المتصفح مكتوم مع تقديم الزمن؛ لا استماع أو هاتف فعلي.
- التحديث الحقيقي من fixture عاملv42 إلىv59 نجح مع بيانات التقييم الحالية وحفظ التقدم والإجابة دون فرض إعادة تحميل. ليس ترحيل متصفح فعليًا لنتيجةA1.8v1؛ رفضها مغطى فيVM. المخزن الجديد يزيل مخازن التطبيق والصوت السابقة؛ افتح المقاطع المطلوبة متصلًا لإعادة تخزينها، ولا ضمان لتخزين كلMP3 أو دوام الحصة.

مقارنةً مع `172dda637ac945524e775eb4994dcc3213cef2c1`: بقية52 درسًا ومصادرها والبوابة وكائنات الصوت217 وسجلا الصوت و474MP3 ببصماتGit وصفوف الفهرس خارجA1.8 وapp.js/styles.css/package/lock وأداتاbuild/verify واختبارforms-keyboard لم تتغير. تغيرت20 سجلًا فقط تخصA1.8 في الفهرس ذي1080 معرّفًا. أقوال الحوار الأصلي السبعة محفوظة؛ مقارنة الأقوال محصورة بقسم الحوار لا سؤالT07 المعاد تصميمه. الأعداد ثابتة:53 درسًا،530 سؤال درس+10 بوابة،106 مهمات درس+3 بوابة=109،428 عنوان تمرين،55 قسم حوار،754 مفردة؛ الصوت137 ready و80 للمراجعة، دون اعتماد جديد.

## سجل إعادة فحص — CR13/A1.7 وcache v58

- PASS: `build_course.py` و`verify_course.py`؛ الحزمة **1,802,485 بايت**. جميع حراس `tools/test_*_review.py` الثلاثة عشر نجحت: A0.1–5 والبوابة وA1.1–7.
- فشل حارس CR13 قبل الإصلاح لأن T07 لا يحتوي أربعة فراغات فعلية. بعد الإصلاح نجح في118 وحدة و33 بندًا، الخيارات والمفاتيح وروابط المصدر والفهرس والبصمات والنصوص الصوتية، وتمييز عناوين الحوار وبقاء الأقوال منفصلة.
- PASS لاختبارات Node: `progression` و`session_persistence` و`daily_plan` و`study_time` و`service_worker`؛ وصياغة app.js/service-worker.js و`git diff --check`.
- VM يقبل النموذجين عند90 حرفًا، ويرفض القصر والمعايير الناقصة ويشترط الجهر لـP02 فقط. يرفض إتقان وجلسة A1.7v1 كإتقانv2 لفتح A1.8؛ لا يحذف التحقق السجل القديم. أول حفظ جديد قد يستبدل مجموعة مسودات الإصدار السابق. الطول والمربعات ليست تصحيح لغة أو نطق.
- PASS لمجموعات المتصفح الخمس، وأعيدت بعد فصل فقرات الحوار: `forms-keyboard` و`accessibility-audit` و`narrow-layout` و`accessibility-update` و`browser`. Chromium143.0.7499.0،Playwright1.58.2،axe-core4.11.0؛ npm ci دون تغيير package/lock؛ `CHROMIUM_EXECUTABLE_PATH=/tmp/chromium LD_LIBRARY_PATH=/tmp/al2023/lib`.
- axe: **65 حالة، صفر مخالفات للقواعد المختارة،39 ظهورًا لقواعد غير محسومة و100 ظهور للعقد**. ليست100 عيب مثبت فريد أو شهادةWCAG. أضيف مصدر A1.7 ونموذج أدائه عند1440/390؛ نموذج الأداء fixture مباشر لا رحلة متعلم كاملة. لا شرط انتظار مراجع بشري للاستمرار.
- العرض الضيق والقصير126 حالة عند320×900 و568×320؛ المتصفح العام1440×900 و390×844 يشمل53 درسًا والبوابة/217 أصلًا، والعمل دون اتصال وRange206/416/503 وتشغيل عينة B2.12 بسرعتي1 و0.8. متصفح مكتوم مع تقديم الزمن، لا استماع فعلي أو هاتف فعلي.
- نجح التحديث الحقيقي من fixture عاملv42 إلىv58 مع بيانات التقييم الحالية، دون فرض إعادة تحميل ومع حفظ التقدم والإجابة. ليس ترحيلًا فعليًا في المتصفح لنتيجة A1.7v1؛ رفض القديم مغطى فيVM. المخزن الجديد يزيل مخازن التطبيق والصوت السابقة؛ افتح المقاطع المطلوبة متصلًا لإعادة تخزينها، ولا ضمان لتخزين جميع MP3 أو دوام الحصة.

مقارنةً مع `5377df3f9c224081c37d29f35d20d961cb49e6bd`: بقية52 درسًا ومصادرها والبوابة وجميع كائنات الصوت217 وسجلا الصوت و474MP3 ببصماتGit وصفوف الفهرس خارج A1.7 وapp.js/styles.css/package/lock وأداةbuild لم تتغير. أداةverify تغيرت لإصلاح عدّ الحوار كما ذُكر. تغيرت20 سجلًا تخص A1.7 في الفهرس ذي1080 معرّفًا. أقوال الحوار الستة محفوظة مع تغيير الوسم والتنسيق فقط. الأعداد العامة:53 درسًا،530 سؤال درس+10 للبوابة،106 مهمات درس+3 للبوابة=109،428 عنوان تمرين،55 قسم حوار،754 مفردة؛ الصوت137 ready و80 للمراجعة دون اعتماد جديد.

## سجل إعادة فحص — CR12/A1.6 وcache v57

- PASS: `python3 tools/build_course.py` و`python3 tools/verify_course.py`؛ الحزمة **1,792,765 بايت**. جميع حراس `tools/test_*_review.py` الاثني عشر نجحت: A0.1–5 والبوابة وA1.1–6.
- حارس CR12 فشل قبل الإصلاح بسبب احتمال ist أوsind مع sie بينما المفتاح يقبل ist فقط. بعد الإصلاح نجح في108 وحدات و34 بندًا، والمفاتيح وروابط المصدر والفهرس والبصمات والنصين الصوتيين. هذا حارس اتساق، لا حكم لغوي مستقل.
- PASS لاختبارات Node: `progression` و`session_persistence` و`daily_plan` و`study_time` و`service_worker`، وصياغة app.js/service-worker.js و`git diff --check`.
- VM: النموذجان مقبولان عند حد90 حرفًا؛ القصر والمعايير الناقصة مرفوضة، والجهر مطلوب لـP02 فقط. نتيجة A1.6v1 ومسودتها لا تفتحان A1.7 كأنهما v2؛ التحقق لا يحذف سجل الإتقان القديم. أول حفظ جديد قد يستبدل مجموعة المسودات السابقة. هذه ليست آلية تصحيح لغة أو نطق.
- PASS لمجموعات المتصفح الخمس: `forms-keyboard` و`accessibility-audit` و`narrow-layout` و`accessibility-update` و`browser`. البيئة: Chromium143.0.7499.0،Playwright1.58.2،axe-core4.11.0؛ `npm ci` دون تغيير package/lock، مع `CHROMIUM_EXECUTABLE_PATH=/tmp/chromium LD_LIBRARY_PATH=/tmp/al2023/lib`.
- axe: **61 حالة، صفر مخالفات للقواعد المختارة،36 ظهورًا لقواعد غير محسومة و94 ظهورًا للعقد**. ليست94 عيبًا مثبتًا فريدًا، ولا شهادة WCAG. أضيف مصدر A1.6 ونموذج أدائه عند1440/390؛ نموذج الأداء fixture مباشر لا رحلة متعلم كاملة. الأعلام غير المحسومة لا تتحول إلى شرط انتظار مراجع بشري.
- العرض الضيق والقصير:126 حالة عند320×900 و568×320. الاختبار العام عند1440×900 و390×844:53 درسًا والبوابة و217 أصلًا صوتيًا، ودون اتصال وRange206/416/503 وتشغيل عينة B2.12 بسرعتي1 و0.8. متصفح مكتوم مع تقديم الزمن، لا استماع فعلي أو هاتف فعلي.
- نجح التحديث الفعلي من fixture عاملv42 إلىv57 دون فرض إعادة تحميل ومع حفظ التقدم والإجابة، باستخدام بيانات التقييم الحالية. ليس ترحيلًا فعليًا في المتصفح لنتيجة A1.6v1؛ رفض الإصدار القديم مغطى فيVM. المخزن الجديد يزيل مخازن التطبيق والصوت السابقة: افتح المقاطع المطلوبة متصلًا لإعادة تخزينها، ولا ضمان لتخزين جميع MP3 أو دوام الحصة.

مقارنةً مع `ad252994c8852a531e21c9819a1f0bced8b6a720`: بقية52 درسًا ومصادرها والبوابة وجميع كائنات الصوت217 وسجلا الصوت و474MP3 ببصمات Git وصفوف الفهرس خارج A1.6 وapp.js/styles.css/package/lock وأداتاbuild/verify لم تتغير. تغيرت20 سجلًا تخص A1.6 في الفهرس ذي1080 معرّفًا، لا بقية السجلات. الأعداد العامة ثابتة:53 درسًا،530 سؤال درس+10 للبوابة،106 مهمات درس+3 للبوابة،428 عنوان تمرين،55 قسم حوار،754 مفردة. الصوت137 ready و80 للمراجعة، دون اعتماد جديد.

## سجل إعادة فحص — CR11/A1.5 وcache v56

رُوجع A1.5 — الطعام والشراب: **124 وحدة مراجعة و37 بندًا أو مطلبًا في التمارين الثمانية**، مع12مرجعًا. صُحح الاستنتاج غير المسند عن تفضيل الأخت، وضُبط سؤال الشراب بالمساء وأحيانًا، وسؤال Käse بالمفرد. صار T08/P01 ست جمل عن وجبات اليوم والشراب والتفضيل والطلب، وT04/P02 تطبيق خدمة من أربعة أدوار مع أداء فردي. أضيفت رؤوس جدول التصريف وes وصيغ trinken، ووُضحت أسماء المادة والجمع وحدود mag/möchte. الإصدار `a1-05-v2` والمخزن `v56`؛ فهارس الإجابات العشرة وعتبة80% ثابتة مع تصحيح بعض الصياغات والخيارات. التسجيلان وكلمات حوار المقهى المكتوب محفوظة دون استماع أو اعتماد جديد. **الحملة10/53 درسًا والبوابة مراجعة منفصلة؛ تبقى43درسًا، والتالي A1.6.** لا شهادة CEFR أو دمج مدّعى.

- PASS: `build_course.py` و`verify_course.py`، حراس A0.1–5 والبوابة وA1.1–5 (أحد عشر حارسًا)، واختبارات `progression` و`session_persistence` و`daily_plan` و`study_time` و`service_worker`. فحص صياغة app.js/service-worker.js و`git diff --check` نجح.
- حارس CR11 فشل قبل الإصلاح عند السؤال غير المسند عن حب الحساء كثيرًا. بعد التصحيح نجح في124وحدة/37بندًا أو مطلبًا، المفاتيح والخيارات الجديدة وروابط المصدر والفهرس والبصمات والتسجيلين، مع حفظ أقوال الحوار المكتوب الثمانية.
- اختبار VM يقبل النموذجين ويرفض القصر والمعايير الناقصة ويشترط الكلام لـP02 فقط. يرفض إتقان/جلسة A1.5v1 ويشترط v2 والأدلة لفتح A1.6؛ لا حذف لنتيجةv1 بمجرد التحقق ولا تصحيح لغوي مستقل مدّعى.
- PASS للمجموعات الخمس، وأعيدت بعد آخر تعديل: `forms-keyboard` و`accessibility-audit` و`narrow-layout` و`accessibility-update` و`browser`. Chromium143.0.7499.0،Playwright1.58.2،axe-core4.11.0؛ npm ci دون تغيير package/lock.
- axe: **57 حالة، صفر مخالفات للقواعد المختارة،33 ظهورًا لقواعد غير محسومة و87 ظهورًا للعقد**. ليست87عيبًا مثبتًا فريدًا أو شهادة WCAG. أضيف مصدر A1.5 ونموذج الأداء عند عرضي1440/390؛ نموذج الأداء fixture مباشر لا رحلة متعلم كاملة.
- العرض الضيق/القصير126حالة عند320×900 و568×320. المتصفح1440×900 و390×844:53درسًا+البوابة/217أصلًا، دون اتصال وRange206/416/503 وتشغيل عينة B2.12 بسرعتي1/0.8. متصفح مكتوم مع تقديم الزمن، لا استماع فعلي أو هاتف فعلي.
- التحديث الحقيقي من fixture عاملv42 إلىv56 مع بيانات التقييم الحالية، لا ترحيل متصفح حقيقي لنتيجةA1.5v1؛ رفض القديم مغطى منفصلًا فيVM. المخزنv56 يزيل مخازن التطبيق والصوت السابقة؛ افتح المقاطع المطلوبة متصلًا لإعادة تخزينها، ولا ضمان لتخزينها جميعًا أو دوام الحصة.

الحزمة **1,782,318 بايت**:53درسًا،530سؤال درس+10بوابة،106مهمات درس+3بوابة=109،428عنوان تمرين بالدروس و55قسم حوار و754مفردة. الفهرس1080معرّفًا (431T،540Q،109P). الصوت217أصلًا/474MP3،137ready/80pending كما كان. مقارنةً مع `d1a551aa4cdf6af916f7c156f23e8e41f7b6eb04`: بقية52درسًا والبوابة وجميع كائنات الصوت217 وسجلا الصوت و474MP3 (مطابقة بصماتGit) وصفوف الفهرس خارج A1.5 وapp.js/styles.css/package/lock وأداتاbuild/verify لم تتغير. أقوال حوار المقهى الثمانية مطابقة للمصدر السابق، مع توحيد وسم الدور فقط.

التشغيل الأول لاختبار التدرج رفض نموذج P02 لأن حد110حرفًا كان أعلى من طول النموذج دون أسماء المتكلمين. صُحح الحد إلى90 ليقبل النموذج كما هو، ثم نجح التدرج والفحوص النهائية. الحد نفسه ليس تصحيحًا للغة أو عدًا للأدوار. هذا فشل أولي عولج، لا نتيجة نجاح مزعومة قبل الإصلاح.

البيئة المؤقتة: /tmp/cr11-browser و/tmp/chromium مع LD_LIBRARY_PATH=/tmp/al2023/lib؛ تقرير axe في/tmp/cr11-a11y.json. الإيصال في ملفي التسليم.

## سجل إعادة فحص — CR10/A1.4 وcache v55

رُوجع A1.4 — الروتين اليومي والوقت: **123 وحدة مراجعة و34 بندًا أو مطلبًا في التمارين التسعة**، مع9مراجع. صُحح مفتاح القراءة الناقص، ووُحد T08/P01 على كتابة5–7جمل وثلاث عبارات وقت وفعلين منفصلين مختلفين. وُحد T09/P02 على ثلاثة أسئلة وأجوبتها وتلخيص جوابين بجملتين، مع قراءة جهرية وأداء فردي. وُضحت صيغ الوقت وحدود قاعدة الفصل والبدائل الصحيحة، وصُححت روابط أربعة أسئلة. أُصلح عدّ عناوين التمارين في أداة التحقق بدل حذف العناوين التوضيحية. الإصدار `a1-04-v2` والمخزن `v55`؛ المفاتيح العشرة وعتبة80% محفوظة. التسجيلان لم يتغيرا ولم يُجرَ استماع أو اعتماد جديد. **الحملة9/53 درسًا والبوابة مراجعة منفصلة؛ تبقى44درسًا، والتالي A1.5.** لا شهادة CEFR أو دمج مدّعى.

- PASS: `build_course.py` و`verify_course.py`، حراس A0.1–5 والبوابة وA1.1–4 (عشرة حراس)، واختبارات `progression` و`session_persistence` و`daily_plan` و`study_time` و`service_worker`. فحص صياغة app.js/service-worker.js وترجمة verify_course.py و`git diff --check` نجح.
- فشل حارس CR10 قبل الإصلاح عند غياب جوابsechs من T06. بعد التصحيح نجح في123وحدة/34بندًا أو مطلبًا، المفاتيح وروابط المصدر والفهرس والبصمات والتسجيلين. يفحص أيضًا أن12عنوانًا تتضمن كلمة تمرين لكن9فقط هي عناوين تمارين فعلية؛ الثلاثة الأخرى شروح أو نماذج.
- اختبار VM يقبل النموذجين ويرفض القصر والمعايير الناقصة ويطلب الكلام لـP02 فقط. يرفض نتيجة/جلسة A1.4v1 ويشترط v2 والأدلة لفتح A1.5؛ لا حذف لنتيجةv1 بمجرد التحقق، ولا تصحيح لغوي مستقل مدّعى.
- PASS للمجموعات الخمس، وأعيدت بعد آخر تعديل تعليمي: `forms-keyboard` و`accessibility-audit` و`narrow-layout` و`accessibility-update` و`browser`. Chromium143.0.7499.0،Playwright1.58.2،axe-core4.11.0، وnpm ci دون تغيير package/lock.
- axe: **53 حالة، صفر مخالفات للقواعد المختارة،30 ظهورًا لقواعد غير محسومة و81 ظهورًا للعقد**. ليست81عيبًا مثبتًا فريدًا أو شهادة WCAG. أضيف مصدر A1.4 ونموذج الأداء عند عرضي1440/390؛ نموذج الأداء fixture مباشر لا رحلة متعلم كاملة.
- العرض الضيق/القصير126حالة عند320×900 و568×320. المتصفح1440×900 و390×844:53درسًا+البوابة/217أصلًا، دون اتصال وRange206/416/503، وتشغيل عينة B2.12 بسرعتي1/0.8. متصفح مكتوم مع تقديم الزمن، لا مراجعة سمعية أو جهاز فعلي.
- التحديث الحقيقي من fixture عاملv42 إلىv55 مع بيانات التقييم الحالية، لا ترحيل متصفح حقيقي لنتيجةA1.4v1؛ رفض الإصدار القديم في اختبارVM منفصل. المخزنv55 يزيل مخازن التطبيق والصوت السابقة؛ يلزم فتح المقاطع متصلًا لإعادة تخزينها، ولا ضمان لتخزين كل الصوت أو دوام الحصة.

الحزمة **1,770,457 بايت**:53درسًا،530سؤال درس+10بوابة،106مهمات درس+3بوابة=109،428عنوان تمرين بالدروس و55قسم حوار و754مفردة. الفهرس1080معرّفًا (431T،540Q،109P). الصوت217أصلًا/474MP3،137ready/80pending كما كان. مقارنةً مع `57aabfb19fa16a6de6efc254721f6d2f6b991571`: بقية52درسًا والبوابة وجميع كائنات الصوت217 وسجلا الصوت و474MP3 (مطابقة بصماتGit) وصفوف الفهرس خارج A1.4 وapp.js/styles.css/package/lock لم تتغير.

أول تحقق بعد إضافة الشروح أبلغ9عناوين مصدر مقابل12معروضة؛ كان السبب فحص وجود كلمة تمرين في أي عنوان. صُحح المحدد فيverify_course.py لتطابق بداية عنوان التمرين مع معيار المصدر، ونجح التحقق لجميع الدروس. سكريبت إنشاء سجل المراجعة التقط «حدود التحقق» كأنه دور مقابلة تاسع؛ ضُبط على وسوم السائل/Sami/التلخيص، ثم نجح توليد123وحدة والحارس. لم يكن ذلك حوارًا إضافيًا أو خطأ تشغيل في التطبيق. لا تعِد سكريبتات الإنتاج المؤقتة عشوائيًا بعد تحديث التوثيق.

البيئة المؤقتة: /tmp/cr10-browser و/tmp/chromium مع LD_LIBRARY_PATH=/tmp/al2023/lib؛ تقرير axe في/tmp/cr10-a11y.json. الإيصال في ملفي التسليم.

## سجل إعادة فحص — CR9/A1.3 وcache v54

رُوجع A1.3 — المدينة والمقهى والفندق: **119 وحدة مراجعة و34 بندًا داخل التمارين التسعة**. وُحد T08/P01 على أربعة أقوال للزبون تشمل الطعام والشراب وسؤال السعر والتحية والشكر والقراءة الجهرية. صار T09/P02 مسارًا خياليًا محددًا وثلاث تعليمات وجملة مكان، كتابيًا دون اشتراط صورة أو كلام. صُححت روابط أربعة أسئلة وغموض أدوات T01 وترتيب T05 واستنتاج القراءة T06. أضيف تدريب Zimmer وشروح الطلب والمكان، وفُصلت سيناريوهات القراءة والاستماع والطريق. الإصدار `a1-03-v2` والمخزن `v54`؛ مفاتيح الأسئلة العشرة وعتبة80% محفوظة. ثلاثة أصول صوتية/12مقطعًا لم تتغير ولم يُجرَ استماع أو اعتماد جديد. **الحملة8/53 درسًا والبوابة مراجعة منفصلة؛ تبقى45درسًا، والتالي A1.4.** لا شهادة CEFR أو دمج مدّعى.

- PASS: `build_course.py` و`verify_course.py`؛ حراس A0.1–5 والبوابة وA1.1–3؛ اختبارات `progression` و`session_persistence` و`daily_plan` و`study_time` و`service_worker`، وفحص صياغة app.js/service-worker.js و`git diff --check`.
- حارس CR9 فشل قبل الإصلاح فعلًا عند غياب سؤال السعر من P01، ثم نجح بعد المطابقة. يفحص119وحدة/34بندًا، المفاتيح وروابط المصدر والفهرس والبصمات والأصول الصوتية. اختبار VM يقبل النموذجين ويرفض القصر والمعايير الناقصة، ويشترط الكلام لـP01 فقط؛ يرفض إتقان/جلسة A1.3v1 ويشترط v2 والأدلة لفتح A1.4، دون حذف نتيجةv1 بمجرد التحقق.
- PASS للمجموعات الخمس بالتتابع وأعيدت بعد آخر تعديل للمصدر: `forms-keyboard` و`accessibility-audit` و`narrow-layout` و`accessibility-update` و`browser`. Chromium143.0.7499.0،Playwright1.58.2،axe-core4.11.0؛ npm ci دون تغيير package/lock.
- axe: **49 حالة، صفر مخالفات للقواعد المختارة،27 ظهورًا لقواعد غير محسومة و75 ظهورًا للعقد**؛ ليست75عيبًا مثبتًا فريدًا أو شهادة WCAG. أضيف مصدر A1.3 ونموذج المهمتين عند عرضي1440/390. نموذج الأداء fixture مباشر، وليس اختبار رحلة متعلم كاملة أو تصحيح لغة.
- العرض الضيق/القصير126حالة عند320×900 و568×320. المتصفح1440×900 و390×844:53درسًا+البوابة/217أصلًا، دون اتصال وRange206/416/503 وتشغيل عينة B2.12 بسرعتي1/0.8. المتصفح مكتوم مع تقديم الزمن؛ لا مراجعة سمعية أو هاتف فعلي.
- التحديث الحقيقي من fixture عاملv42 إلىv54 مع بيانات التقييم الحالية؛ ليس ترحيلًا حقيقيًا لنتيجة A1.3v1 في متصفح. اختبارVM المنفصل يغطي رفضv1. المخزنv54 يزيل مخازن التطبيق والصوت الأقدم؛ افتح المقاطع المطلوبة متصلًا لإعادة تخزينها، ولا ضمان لتخزين كل الصوت أو دوام الحصة.

الحزمة **1,757,564 بايت**:53درسًا،530سؤال درس+10بوابة،106مهمات درس+3بوابة=109،428عنوان تمرين بالدروس و55قسم حوار و754مفردة. الفهرس1080معرّفًا (431T،540Q،109P). الصوت217أصلًا/474MP3،137ready/80pending كما كان. مقارنةً مع `97bdd61bf700a8fe448765296dcd88ba7da1812f`: بقية52درسًا والبوابة وجميع كائنات الصوت217 وسجلا الصوت و474MP3 (مطابقة بصمات Git) وصفوف الفهرس خارج A1.3 وapp.js/styles.css/package/lock لم تتغير.

فشل أول تشغيل للمتصفح بسبب libnspr4.so: فُك أرشيف al2023 أولًا إلى/tmp/lib بدل/tmp/al2023/lib؛ صُحح مكان الفك ونجحت المجموعات الخمس. فحص الحفظ الأول أخطأ باسم سجل الصوت audio-asset-catalog.csv؛ الاسم الصحيح audio-asset-register.csv، ثم أعيد الفحص الكامل ونجح. لا فشل تطبيق غير محلول من هذين الخطأين، ولا تحويل تشغيل فاشل إلى نجاح مزعوم.

البيئة المؤقتة: /tmp/cr9-browser و/tmp/chromium مع LD_LIBRARY_PATH=/tmp/al2023/lib؛ تقرير axe في/tmp/cr9-a11y.json. الإيصال في ملفي التسليم.

## سجل إعادة فحص — CR8/A1.2 وcache v53

2026-10-07. رُوجع A1.2 — الأسرة والمهن: **133 وحدة مراجعة و35 بندًا داخل التمارين التسعة**. وُحدت T08/P01 إلى خمس جمل كتابية عن ثلاثة أفراد واسم أحدهم ومهنته، وT09/P02 إلى ثلاثة أسئلة وأجوبتها وتلخيص بجملتين مع أداء فردي. قُيد جدول mein/dein بالرفع، ووُضح Akkusativ، وصُحح استنتاج غير مسند في تمرين القراءة. أضيفت مفاتيح أسئلة النصين ورؤوس جدول arbeiten. الإصدار `a1-02-v2` والمخزن `v53`؛ يلزم إعادة إتقان v1 للمتابعة. المفاتيح العشرة وعتبة 80% محفوظة؛ Q08 يوضح مدينة تونس، وQ09 مرتبط بنمط T04. الصوت محفوظ دون تغيير أو استماع جديد. **الحملة 7/53 درسًا، والبوابة مراجعة منفصلة**؛ التالي A1.3، وتبقى46 درسًا. لا شهادة CEFR أو دمج مدّعى.

- PASS: `build_course.py` و`verify_course.py`، حراس A0.1–5 والبوابة وA1.1 وA1.2، والتدرّج وحفظ الجلسة وخطة اليوم ووقت الدراسة وعامل الخدمة، وصياغة app.js/service-worker.js و`git diff --check`.
- حارس CR8 فشل قبل الإصلاح فعلًا عند معيار P02 الذي يقبل سؤالين. بعد التصحيح يراجع ثلاثة أسئلة، وضبط الملكية والمفاتيح والأدلة والمصدر والفهرس والبصمات. اختبار VM يقبل النموذجين، ويرفض القصر والمعايير الناقصة، ويطلب الكلام لـP02 فقط؛ يرفض إتقان/جلسة v1 ويشترط v2 والأدلة لفتح A1.3، دون حذف نتيجة v1 عند مجرد التحقق.
- PASS للمجموعات الخمس بالتتابع: forms-keyboard، accessibility-audit، narrow-layout، accessibility-update، browser. Chromium143.0.7499.0 وPlaywright1.58.2 وaxe-core4.11.0؛ `npm ci` دون تغيير package/lock.
- axe: **45 حالة، صفر مخالفات للقواعد المختارة،24 ظهورًا لقواعد غير محسومة و69 ظهورًا للعقد**. ليست69عيبًا مثبتًا فريدًا أو اعتماد WCAG. أضيف مصدر A1.2 ونموذج مهمتيه عند عرضي1440/390 مع بقاء الحالات السابقة.
- العرض الضيق/القصير:126حالة عند320×900 و568×320. المتصفح1440×900 و390×844:53درسًا+البوابة/217أصلًا، وفحوص دون اتصال وRange206/416/503 وتشغيل عينة B2.12 بسرعتي1/0.8. المتصفح مكتوم مع تقديم الزمن؛ لا استماع أو اختبار جهاز فعلي.
- اختبار التحديث الحقيقي من fixture عامل v42 إلى v53 مع بيانات التقييم الحالية؛ ليس ترحيل متصفح فعليًا لنتيجة A1.2 v1. اختبار VM منفصل يغطي رفض الإصدار القديم. عامل v53 يحذف مخازن التطبيق والصوت السابقة؛ يلزم فتح المقاطع المطلوبة متصلًا لإعادة تخزينها، ولا ضمان لتنزيل كل الصوت أو بقاء الحصة.

الحزمة **1,747,314 بايت**:53درسًا،530سؤال درس+10بوابة،106مهمات درس+3بوابة=109،428عنوان تمرين بالدروس و55قسم حوار و754مفردة. الفهرس1080معرّفًا (431T:428درس+3بوابة؛540Q؛109P). الصوت217أصلًا/474MP3،137ready/80pending كما كان. بالمقارنة مع `38642b5656bb12d82ce18d46b5d9cbbc46636bc4`: بقية52درسًا والبوابة وكائنات الصوت217 وسجلا الصوت و474MP3 وصفوف الفهرس خارج A1.2 وapp.js/styles.css/package/lock دون تغيير.

البيئة المؤقتة: `LD_LIBRARY_PATH=/tmp/al2023/lib CHROMIUM_EXECUTABLE_PATH=/tmp/chromium`؛ Sparticuz143.0.4 خارج المستودع وفك al2023.tar.br. تقرير axe المؤقت `/tmp/cr8-a11y.json` لا يُضمن بقاؤه بعد الاستئناف. حالة الدفع والنشر في ملفي التسليم.

## سجل إعادة فحص — CR7/A1.1 وcache v52

2026-10-07. رُوجع A1.1 وحدةً وحدةً: **124 وحدة مراجعة و 44 بندًا داخل التمارين العشرة**. صُححت كلمة spricht إلى sprichst في T03.4، وروابط Q06/Q07/Q08، وطوبقت مهمتا الأداء مع التدريب: بطاقة كتابية من ستة أسطر، وأربعة أسئلة وأجوبتها وتقديم بجملتين مع كلام فردي. أضيف شرح lesen ومفاتيح أسئلة النصين، ووُضحت حدود gern والترتيب والاستنتاج من القراءة. المفاتيح العشرة وعتبة 80% محفوظة. الإصدار `a1-01-v2` والمخزن `v52`؛ يلزم إعادة إتقان v1 للمتابعة. أصلَا الصوت ومقطعاهما محفوظة دون استماع أو اعتماد جديد. **الحملة 6/53 درسًا، والبوابة مراجعة منفصلة**؛ التالي A1.2، وتبقى 47 درسًا. لا شهادة CEFR أو دمج مدّعى.

- PASS: البناء والتحقق، حراس A0.1–5 والبوابة و A1.1، والتدرّج وحفظ الجلسة وخطة اليوم ووقت الدراسة وعامل الخدمة، وصياغة app.js/service-worker.js و`git diff --check`.
- حارس CR7 فشل قبل الإصلاح فعلًا لأن T03.4 يحوي spricht، ثم نجح مع sprichst. اختبار VM يقبل نموذجي الأداء، ويرفض النص القصير والمعايير الناقصة، ويطلب الكلام لـ P02 فقط. يرفض نتيجة/جلسة A1.1 v1، ويحتفظ بالنتيجة عند التحقق، ويشترط v2 مع الأدلة لفتح A1.2.
- PASS للمجموعات الخمس بالتتابع: forms-keyboard،accessibility-audit،narrow-layout،accessibility-update،browser. Chromium143.0.7499.0 و Playwright1.58.2 و axe-core4.11.0؛ `npm ci` دون تغيير package/lock.
- axe: **41 حالة،صفر مخالفات للقواعد المختارة،21 ظهورًا لقواعد غير محسومة و 63 ظهورًا للعقد**، لا 63 عيبًا مثبتًا فريدًا أو اعتماد WCAG. أضيف مصدر A1.1 ونموذج مهمتيه عند عرضي 1440/390، مع حفظ الحالات السابقة.
- العرض الضيق/القصير:126 حالة عند 320×900 و 568×320. المتصفح 1440×900 و 390×844:53 درسًا+البوابة/217 أصلًا، وفحوص دون اتصال و Range206/416/503 وتشغيل عينة B2.12 بالسرعتين 1/0.8. متصفح مكتوم مع تقديم الزمن، لا استماع أو جهاز فعلي.
- التحديث الحقيقي من fixture عامل v42 إلى v52 مع بيانات التقييم الحالية؛ لا ندعي أنه ترحيل متصفح فعلي لـ A1.1 v1. اختبار VM منفصل يغطي رفض v1. عامل v52 يزيل مخازن التطبيق/الصوت القديمة؛ افتح المقاطع المطلوبة متصلًا لإعادة تخزينها، ولا ضمان لتنزيلها كلها أو الحصة.

الحزمة **1,737,177 بايت**:53 درسًا،530 سؤال درس+10 بوابة،106 مهمات درس+3 بوابة=109،428 عنوان تمرين بالدروس و 55 قسم حوار و 754 مفردة. الفهرس 1080 معرّفًا (431T:428 درس+3 بوابة؛540Q؛109P). الصوت 217 أصلًا/474MP3،137ready/80pending كما كان. مقارنة بـ`cf37611780c2e485dbe3770158dd741adb3f2dcf`: بقية 52 درسًا والبوابة وجميع كائنات الصوت 217 وسجلا الصوت و 474MP3 وصفوف الفهرس خارج A1.1 و app.js/styles.css/package/lock دون تغيير.

البيئة المؤقتة: `LD_LIBRARY_PATH=/tmp/al2023/lib CHROMIUM_EXECUTABLE_PATH=/tmp/chromium`؛ Sparticuz143.0.4 خارج المستودع وفك al2023.tar.br. تقريرaxe المؤقت `/tmp/cr7-a11y.json` لا يُضمن بقاؤه بعد الاستئناف. حالة الدفع والنشر في ملفي التسليم.

## سجل إعادة فحص — CR6/بوابة A0→A1 وcache v51

2026-10-07. رُوجعت بوابة A0→A1: **39 وحدة مراجعة و12 مطلبًا فرعيًا في المهمات الثلاث**. فُصلت الورقة القديمة عن الدليل الحالي، وصارت P01–03 مرتبطة بأنشطة T01–03 فعلية. وُضح طلب البطء والأسئلة والبيانات ومنظور الكتابة. المفاتيح العشرة وعتبة80% محفوظة. الواجهة تصرح بأن الاستماع غير مقاس؛ الصوت محفوظ دون تعديل أو استماع جديد. الإصدار `a0-gate-v2` والمخزن `v51`؛ نتيجةv1 لا تكفي لمتابعة المسار. **الحملة 5/53 درسًا مع البوابة مراجعةً منفصلة**؛ التالي A1.1، وتبقى48 درسًا. لا شهادةCEFR أو اعتماد نطق أو دمج مدّعى.

- نجحت: `build_course.py` و`verify_course.py` وحراس المراجعة A0.1–5 والبوابة، و`test_progression.cjs` و`test_session_persistence.cjs` و`test_daily_plan.cjs` و`test_study_time.cjs` و`test_service_worker.cjs`، وفحص صياغة app.js/service-worker.js و`git diff --check`.
- نجحت مجموعات المتصفح بالتتابع: forms-keyboard،accessibility-audit،narrow-layout،accessibility-update،browser. Chromium143.0.7499.0 وPlaywright1.58.2؛ `npm ci` دون تغيير ملفات الحزم.
- axe: **37 حالة،صفر مخالفات للقواعد المختارة،18 ظهورًا لقواعد غير محسومة و57 ظهورًا للعقد**؛ ليست57عيبًا مثبتًا فريدًا أو اعتمادWCAG. أضيف نموذج أداء البوابة عند عرضي1440/390مع بقاء الحالات السابقة.
- العرض الضيق/القصير:126حالة عند320×900و568×320. المتصفح1440×900و390×844:53درسًا+البوابة/217أصلًا، والعمل دون اتصال وRange206/416/503 وتشغيل عينةB2.12بالسرعتين1/0.8. متصفح مكتوم وتقديم الزمن ليسا استماعًا أو جهازًا فعليًا.
- اختبار التحديث الحقيقي منfixtureعاملv42إلىv51 مع بيانات التقييم الحالية؛ لا ندعي أنه ترحيل متصفح حقيقي لبوابةv1. يختبرVMرفض نتيجة/جلسةv1وبقاء النتيجة عند التحقق، قبولv2، واشتراط الكلام لـP01/P02 دونP03، وقبول صيغة الطلب الأقصر.

الحزمة **1,727,918 بايت**:53درسًا،530سؤال درس+10بوابة،106مهمات درس+3بوابة=109،428عنوان تمرين داخل الدروس و55قسم حوار و754مفردة. الفهرس **1080معرّفًا:431T (428درس+3بوابة)،540Q،109P**؛ أسطر البوابة16بدل13. الصوت217أصلًا/474MP3،137ready/80pending كما كان. مقارنة بـ`c16174f99c1715e4bbdc159d023c8498dcc906c9`: جميع كائنات الدروس53 والصوت217، وسجلا الصوت و474MP3 وصفوف الفهرس الأخرى وstyles/package/lock بلا تغيير. الأرشيف مطابق لعبارات وترتيب الملف القديم بعد تنظيف مسافات نهاية السطر فقط؛ لا تطابق بايتات مدّعى.

أدوات المتصفح المؤقتة: `LD_LIBRARY_PATH=/tmp/al2023/lib CHROMIUM_EXECUTABLE_PATH=/tmp/chromium`؛ تثبيتSparticuz143.0.4خارج المستودع وفكal2023.tar.brعند غياب المكتبات. تقريرaxeالمؤقت `/tmp/cr6-a11y.json`؛ قد لا يبقى بعد استئناف البيئة. عاملv51يحذف مخازن التطبيق/الصوت القديمة؛ يلزم إعادة فتح المقاطع المطلوبة متصلًا، ولا ضمان تنزيل كل الصوت أو بقاء الحصة. التفاصيل وحالة الدفع في ملفي التسليم.

## أحدث إعادة فحص — CR5/A0.5 وcache v50

- **PASS** build/verify:53درسًا،428عنوان تمرين،55قسم حوار،754مفردة،530سؤال درس+10بوابة،109مهمات،217أصلًا/474MP3؛137ready و80pending تاريخيًا. لا اعتماد سمعي جديد.
- **PASS** حراس المراجعات الخمس. CR5 يحفظ63وحدة/28بندًا والمفاتيح والروابط والفهرس والبصمات والتمييز بين الكلام والكتابة. فشل baseline قبل الإصلاح عند غياب طلب المعنى من T07 رغم طلبه في P01؛ ليس الحارس مرجعًا لغويًا مستقلًا.
- **PASS** runtime: P01 تحتاج تأكيد الكلام؛ P02 تقبل الدليل المكتوب بدونه ولا تعرض مربعه. الطول وجميع المعايير مطلوبان. رفض A0.5v1 مع حفظ سجله؛ بعد v2 والسابق تبقى البوابة شرطًا منفصلًا قبل فتح مستوى A1. لا تغيير أو مراجعة تفصيلية لمحتوى البوابة في هذه الدفعة.
- **PASS** forms-keyboard عند1440 و390، وnarrow-layout في126حالة عند320×900 و568×320، بجميع الدروس والتفريغات.
- **PASS** axe4.11.0: **35حالة، صفر مخالفات مختارة،16ظهورًا لقواعد incomplete تشمل51ظهور عقدة غير محسومة**. أضيف مصدر A0.5 ونموذج أدائه عند عرضين إلى31حالة سابقة. ليست51عيبًا مؤكدًا أو فريدًا؛ لا شهادة WCAG أو شرط مراجع بشري للاستمرار.
- **PASS** update: لوحة المفاتيح والتركيز والعزل، وfixture42→50 مع حفظ بيانات معزولة والعمل دون اتصال وإعادة تخزين الصوت. لا يثبت ترحيل A0.5v1 في متصفح مستخدم أو مسار49→50 مستقلًا؛ رفض النسخة القديمة مفحوص في runtime منفصل.
- **PASS** browser عند1440×900 و390×844:53درسًا والبوابة/217أصلًا، RTL والتفريغات والقفل، وعينة حوارB2.12 بسرعتي1/0.8 مع تقديم الزمن، وoffline وRange206/416/503. المتصفح مكتوم؛ لا استماع كامل أو اعتماد نطق أو هاتف فعلي.
- **PASS** session-persistence/daily-plan/study-time/service-worker (حذف49/بقاء50 في المحاكاة) وnode--check وdiff--check. npm ci أبلغ صفر ثغرات معروفة وقت التشغيل. مجموعات Chromium143.0.7499.0/Playwright1.58.2 شُغلت بالتتابع.
- في الجولة الأولى نجحت مجموعات المتصفح ثم أوقف diff--check التسلسل بسبب مسافتين لقطع سطر Markdown في دورين معدلين من T06. فُصلت أدواره الخمسة إلى فقرات دون مسافات نهائية، وحُدثت سطور الفهرس والبصمات والحزمة، ثم أُعيدت **جميع** الفحوص أعلاه بنجاح. لم يُعطّل الفحص أو يُحذف الفصل البصري للأدوار.
- **PASS** مقارنة النطاق مع4b0863b: تغيّر A0.5 وحده في الحزمة؛52درسًا والبوابة مطابقة. playlist وaudio-asset-register و474MP3 مطابقة بايتًا، والفهرس خارج20سجلA0.5 مطابق. app.js/styles.css/package/lock لم تتغير.

الحزمة **1,717,215بايت**. v50 يحذف مخازن التطبيق السابقة وصوتها؛ أعد فتح المقاطع متصلًا، دون تنزيل شامل تلقائيًا أو ضمان السعة. `/tmp/cr5-a11y.json` و`.log` مؤقتان لا يُفترض بقاؤهما. [مراجعة المحتوى](reviews/a0-05-review.md). حالة الدفع في ملفي التسليم؛ لا ادعاء دمج أو نشر ناجح.


## سجل إعادة فحص — CR4/A0.4 وcache v49

- **PASS** البناء والتحقق:53درسًا،428عنوان تمرين،55قسم حوار،754مفردة،530سؤال درس+10بوابة،109مهمات،217أصلًا/474MP3؛137ready و80pending تاريخيًا. لا اعتماد صوت جديد.
- **PASS** حراس المراجعات الأربع. CR4 يحفظ82وحدة/33بندًا، المفاتيح العشرة وتصريفاتsein/haben والشرح المقيد وروابط المهام والفهرس وبصمات المصدر/التفريغ والحزمة. ثبت فشلbaseline عندT07 الذي لا يدرب وصف الشخص الآخر المطلوب فيP01. ليس مرجعًا لغويًا مستقلًا.
- **PASS** runtime: تقبل المهمتان النموذجين الكافيين طولًا مع جميع المعايير والتأكيد الشفهي، وترفضان الكلمات الناقصة وحدها/غياب التأكيد/نقص أي معيار. يُرفض إتقانA0.4v1 دون حذف سجله، ويقبلv2 للمتابعة إلىA0.5 مع استيفاء السابق. لا تصحيح آلي للغة أو الصوت.
- **PASS** forms-keyboard عند1440 و390، وnarrow-layout في126حالة عند320×900 و568×320، بكل الدروس وتفريغاتها.
- **PASS** axe4.11.0: **31حالة، صفر مخالفات مختارة،13ظهورًا لقواعدincomplete تشمل45ظهور عقدة غير محسومة**. أضيفت حالتا مصدرA0.4 ونموذج أدائه عند العرضين إلى27حالة سابقة. العقد قد تتكرر، وليست45عيبًا مؤكدًا أو فريدًا؛ لا مقارنة تحسن كمية مباشرة، ولا شهادةWCAG أو شرط مراجع بشري للاستمرار.
- **PASS** update: لوحة المفاتيح والتركيز والعزل، وfixture42→49 مع حفظ البيانات والعمل دون اتصال وإعادة تخزين الصوت. ليس اختبار ترحيلA0.4v1 بمتصفح مستخدم فعلي أو المسار48→49 مستقلًا؛ رفض الإصدار القديم مفحوص فيruntime منفصل.
- **PASS** browser عند1440×900 و390×844:53درسًا والبوابة/217أصلًا، RTL والتفريغات والقفل، وعينة حوارB2.12 بسرعتي1/0.8 مع تقديم الزمن، وoffline وRange206/416/503. المتصفح مكتوم؛ لا استماع كامل أو اعتماد نطق أو هاتف فعلي.
- **PASS** session-persistence/daily-plan/study-time/service-worker (حذف48/بقاء49 في المحاكاة) وnode--check وdiff--check. npm ci: صفر ثغرات معروفة حسب الأداة وقت الفحص. التشغيل بالتتابع فيChromium143.0.7499.0/Playwright1.58.2.
- **PASS** مقارنة النطاق مع5d5a898: تغييرA0.4 وحده في الحزمة؛52درسًا والبوابة مطابقة. playlist وaudio-asset-register وكل474MP3 مطابقة بايتًا؛ الفهرس خارج20سجلًا لـA0.4 مطابق بايتًا. app.js/styles.css/package/lock لم تتغير.

الحزمة **1,709,449بايت**. v49 يحذف مخازن التطبيق القديمة وصوتها؛ يجب إعادة فتح المقاطع متصلًا، لا تنزيل شامل تلقائيًا أو ضمان سعة التخزين. `/tmp/cr4-a11y.json` و`.log` ملفات تشغيل مؤقتة ليست جزءًا من المستودع. [مراجعة المحتوى](reviews/a0-04-review.md). حالة الدفع في ملفي التسليم؛ لا ادعاء دمج أو نشر ناجح.


## سجل إعادة فحص — CR3/A0.3 وcache v48

- **PASS** البناء والتحقق: 53 درسًا، 428 عنوان تمرين، 55 قسم حوار، 754 مفردة، 530 سؤال درس +10 للبوابة، 109 مهمات أداء، 217 أصلًا/474 MP3؛ 137 ready و80 pending تاريخيًا، بلا اعتماد جديد.
- **PASS** حراس A0.1/A0.2/A0.3. الجديد يحفظ 74 وحدة/40 بندًا، المفاتيح العشرة ومصادرها، حدود التوسعة، الصيغ الرسمية والخصوصية، سطور الفهرس وبصمات المصدر والتفريغ والحزمة. ثبت فشل baseline عند Q06→T01 قبل الإصلاح. ليست الحراس مرجعًا لغويًا مستقلًا.
- **PASS** progression: مسودتا P01/P02، التأكيد الشفهي وجميع مربعات المراجعة؛ الرفض عند نقصها/قصر النص. إتقان A0.3v1 أوv2 لا يفتح A0.4، ويبقى السجل القديم، ويقبل الإصدارv3 مع إتقان السابق. لا تصحيح تلقائي للألمانية أو الصوت.
- **PASS** forms-keyboard عند1440 و390، وnarrow-layout في126 حالة عند320×900 و568×320، بكل الدروس وتفريغاتها.
- **PASS** axe4.11.0: **27 حالة، صفر مخالفات للقواعد المختارة، و10 ظهورات لقواعد incomplete تشمل38 ظهور عقدة غير محسومة**؛ تتكرر العقد بين الشاشات وليست38 عيبًا مؤكدًا أو فريدًا. أضيف مصدر A0.3 ونموذج أدائه عند العرضين إلى الحالات23 السابقة. لا مقارنة تحسين كمية مباشرة بالدفعة السابقة ولا شهادة WCAG. صياغة سجل الاختبار صارت «غير محسومة بهذه الأداة» بدل اشتراط مراجع بشري؛ لم تُحذف قواعد الفحص.
- **PASS** accessibility-update: لوحة المفاتيح والعزل والتركيز، وfixture لعاملv42→v48 مع حفظ بيانات معزولة والعمل دون اتصال وإعادة تخزين الصوت. ليس اختبار مستخدم حقيقي أو مسار47→48 مستقلًا، ولا ترحيل تقييمA0.3v2 في متصفح فعلي؛ ذلك الرفض مفحوص في runtime منفصل.
- **PASS** browser عند1440×900 و390×844: 53 درسًا والبوابة، RTL، التفريغات، قفل البدء، عينة حوارB2.12 بسرعتي1/0.8 مع تقديم الزمن، وعمل دون اتصال وRange206/416/503. المتصفح مكتوم؛ لا استماع كامل أو اعتماد نطق أو جهاز حقيقي.
- **PASS** session-persistence وdaily-plan وstudy-time وعامل الخدمة (حذفv47/إبقاءv48 بالمحاكاة) وnode--check وgit diff--check. npm ci أبلغ صفر ثغرات معروفة وقت التشغيل. شُغّلت مجموعات المتصفح بالتتابع، Chromium143.0.7499.0/Playwright1.58.2.
- **PASS** مقارنة النطاق مع d65c2b2: تغيّر A0.3 وحده في الحزمة؛ بقية52 درسًا والبوابة مطابقة. playlist وaudio-asset-register و474MP3 ثابتة بايتًا؛ الفهرس خارج20 سجلًا لـA0.3 ثابت بايتًا. لم يتغير app.js أوstyles.css أوpackage/lock.

الحزمة **1,703,510 بايت**. v48 يحذف مخازن التطبيق القديمة وصوتها؛ أعد فتح المقاطع المطلوبة متصلًا، ولا تنزيل شامل تلقائيًا أو ضمان سعة تخزين. تقارير التشغيل المؤقتة `/tmp/cr3-a11y.json` و`.log` ليست ملفات مستودع ولا يُفترض بقاؤها. [مراجعة المحتوى](reviews/a0-03-review.md). حالة الدفع موثقة في ملفي التسليم، لا ادعاء دمج أو نشر ناجح.


## سجل إعادة فحص — CR2/A0.2 وcache v47

- **PASS** `test_a0_02_review.py`:62 وحدة/31 بندًا، المفاتيح العشرة، روابط Q08/P02، الشرح والتدريب الرسميان، صيغة المهام، تطابق أدوار الحوار الثمانية مع النصوص الصوتية، بصمات المصدر والصوت والفهرس والحزمة. فشل baseline عند رابط Q08 الخاطئ، قبل فحص الإصدار. حارس ثبات للقرارات لا مرجع لغوي مستقل.
- **PASS** حارس A0.1 السابق؛ ومقارنة الحزمة أثبتت أن A0.2 وحده تغيّر، وبقية52 درسًا والبوابة ثابتة. سجلات الصوت و474MP3 ثابتة بايتًا، والفهرس لم يتغير خارج20سجلًا لـA0.2.
- **PASS** test_progression مع فحوص runtime الجديدة: P02 كتابة تقبل دونspokenAloud وترفض نقص معيار ولا تعرض مربع الكلام؛ P01 يحتفظ بشرط التأكيد الذاتي للكلام؛ إتقانv1 لا يفتح A0.3، والسجل القديم يبقى عند التحقق، والإتقان بالنسخة الحالية يفتح المتابعة مع استيفاء السابق.
- **PASS** forms-keyboard، accessibility-audit (23 حالة دون مخالفات مختارة و31 ظهور incomplete غير محسوم)، narrow-layout (126 حالة)، accessibility-update (fixture42→47)، test:browser لجميع53درسًا+بوابة/217أصلًا وعينة حوارB2.12 بالسرعتين والعمل دون اتصال. Chromium143.0.7499.0/Playwright1.58.2/axe4.11.0؛ شُغّلت المجموعات بالتتابع.
- **PASS** build/verify وsession_persistence وdaily_plan وstudy_time وtest_service_worker (حذف46/بقاء47 في المحاكاة) وnode--check وgit diff--check. npm ci:صفر ثغرات معروفة حسب الأداة وقت الفحص.
- اختبار fixture يستخدم التقييم الحالي في بيانات معزولة؛ لا يثبت ترحيل تقييم A0.2v1 في متصفح مستخدم فعلي، ولا مسار46→47 الحقيقي مستقلاً. فحص رفض الإتقان القديم موجود في runtime المنفصل. المتصفح مكتوم مع تقديم زمن العينة، فلا اعتماد نطق أو استماع كامل أو هاتف حقيقي أو WCAG مدّعى.

الحزمة1,698,383بايت، والمخزنv47 يحذف مخازن التطبيق القديمة وتسجيلاتها؛ أعد فتح المقاطع المطلوبة متصلًا. الرد Und Ihnen المضاف نصيًا غير مسجل في أصل العبارات؛ لم يُخف الصوت أو يُغيّر رابطه. تفاصيل المحتوى في`reviews/a0-02-review.md`، وحالة الرفع في ملفي التسليم.

## سجل إعادة فحص — CR1/A0.1 وcache v46

بعد تصحيح نص A0.1 وتقييمه إلىa0-01-v2، أُعيدت الفحوص الآتية في Chromium143.0.7499.0/Playwright1.58.2، بالتتابع:

- **PASS** forms-keyboard: الإعدادات والتصدير والاستيراد والمسودات والجدول عند1440×900 و390×900.
- **PASS** accessibility-audit معaxe4.11.0:23 حالة، صفر مخالفات للقواعد المختارة؛31 ظهور عقدة incomplete بقي غير محسوم. ليست شهادة WCAG.
- **PASS** narrow-layout:126 حالة عند320×900 و568×320، تشمل جميع الدروس والتفريغات المفتوحة والقائمة القصيرة. ليست تجربة تكبير أصلي أو هاتف فعلي.
- **PASS** accessibility-update:fixture42→46، حفظ الجلسة والبيانات دون forced reload، القشرة الجديدة دون اتصال، حفظ مخزن آخر، ثم503 لصوت المخزن القديم و206 بعد إعادة جلبه. لا اختبار مستقل لمسار45→46 الفعلي؛ fixture يستخدم بيانات التقييم الحالي في سياق معزول، فلا يثبت ترحيل تقييمA0.1v1 الحقيقي.
- **PASS** test:browser:53درسًا+بوابة/217أصلًا عند1440×900 و390×844، عينة الحوار بالسرعتين، العمل دون اتصال والمديات. المتصفح مكتوم مع تقديم الزمن؛ لا مراجعة سمعية.
- **PASS** اختبار عامل الخدمة (حذف45 وبقاء46 في المحاكاة)، والبناء والتحقق، والاختبارات الأربعة القديمة، وnode--check وgit diff--check. الاختبار الجديد `test_a0_01_review.py` يغطي قرارات المراجعة67 وحدة/26 بندًا فرعيًا وبصمات المصدر، لا يمثل مرجعًا لغويًا مستقلًا.
- **فحص runtime مضاف إلى test_progression:** P02 كتابة بلا شرطspokenAloud، رفض نقص معيار، وعدم عرض مربع أداء شفهي لها؛ رفض إتقانA0.1v1 وفتحA0.2 به، مع إبقاء السجل القديم دون حذف بمجرد فحصه.

حجم الحزمة1,691,966بايت؛ لم يتغير سوىA0.1 داخلها مقارنة بـa82511f. بقية52درسًا والبوابة ثابتة معنويًا، وplaylist وCSV و474MP3 ثابتة بايتًا. التفاصيل اللغوية في`reviews/a0-01-review.md` وحالة الرفع في ملفي التسليم. **v46 يحذف مخازن الصوت القديمة؛ أعد جلب المقاطع المطلوبة متصلًا.**

## سجل فحص QA4 — العرض الضيق والقصير، cache v45

- **العيب المثبت قبل الإصلاح:** نجح العرض320×900، لكن اختبار568×320 فشل عند التركيز على آخر زر في القائمة الجانبية؛ كان خارج الجزء المرئي، والقائمة ذات ارتفاع ثابت بلا تمرير داخلي. هذا عيب وصول فعلي في عينة Chromium، وليس استنتاجًا من CSS وحده.
- **الإصلاح:** `styles.css` يضيف overflow-y:auto وoverscroll-behavior:contain للقائمة، وارتفاع100dvh مع100vh احتياطي، ويمنع انكماش أبنائها عدا الفراغ المرن. لا تغيير لأقفال الدروس أو إدارة البيانات. تحديث المخزن إلىv45 لتوزيع CSS؛ منطق العامل ثابت.
- **اختبار جديد:** `tools/test_narrow_layout.cjs`، الأمر `npm run test:narrow-layout`. يتفحص عرض المستند والجسم مقابل عرض النافذة عند320×900 و568×320: لوحة جديدة، المسارات المقفلة، الإعدادات، ثلاث حالات للاختبار، نموذج الأداء، المفردات المكشوفة، بوابةA0، الدروس53 مع كل التفريغات مفتوحة، والقائمة المفتوحة. **63 حالة لكل قياس،126 إجمالًا، PASS.** الجداول أعرض من الشاشة مسموحة داخل غلافها القابل للتركيز والتمرير فقط.
- بعد الإصلاح وُسّع فحص القائمة: فتحها بزرها الحقيقي، ثم Tab بين جميع أزرارها بالترتيب والتحقق من أن كل زر مركّز عليه يظهر ضمن ارتفاع النافذة؛ إثبات تمرير القائمة القصيرة وبقاء موضع الصفحة خلفها، ثم Escape وعودة التركيز للزر. لا أخطاء pageerror في العينة.
- الدخول لشاشات المحتوى وتجهيز نموذج الأداء وسجل الإتقان اختبارية داخل سياق معزول. فحص العرض لا يحكم تلقائيًا على قص كل نص أو كل تداخل داخلي؛ لا اختبار تكبير متصفح أصلي200%/400% أو لوحة مفاتيح على هاتف حقيقي أو قارئ شاشة. هذه حدود مهمة حتى مع نجاح الفحص126 مرة.
- **إعادة الفحوص PASS:** forms-keyboard، accessibility-audit (23 حالة، صفر مخالفات مختارة،31 ظهور عقدة incomplete ما زالت تحتاج بشرًا)، accessibility-update (العامل التاريخيfixture42→45، لا مسار44→45 فعلي مستقل)، test:browser لجميع الدروس53/217 أصلًا وعينة التشغيل ودون اتصال، وtest:service-worker (حذف44 وبقاء45 في المحاكاة).
- نجحت أيضًا build/verify واختباراتprogression/session_persistence/daily_plan/study_time وnode--check وgit diff--check. Chromium143.0.7499.0/Playwright1.58.2/axe4.11.0؛ مجموعات المتصفح شُغّلت بالتتابع.
- قورنت course.json وplaylists وCSV و474MP3 بايتًا معQA3 المستعادة1bb1c52: كلها ثابتة؛ الحجم1,688,637بايت،53درسًا،217أصلًا،137ready و80 للمراجعة. صفر طلبات توليد، ولا اعتماد سمعي.
- **التوزيع:** cache v45 يحذف مخازن التطبيق القديمة وتسجيلاتها؛ يلزم إعادة جلب المقاطع المطلوبة متصلًا. لا تنزيل شامل أو ضمان ضد quota/eviction. حالة Git والرفع في ملفي التسليم؛ نجح رفع QA3 المستعادة، لكن Vercel أرجع `Deployment rate limited — retry in 24 hours.`، ولم تُجر إعادة نشر يدوية.

## سجل فحص QA3 — التباين والنماذج، cache v44

### البيئة وما تغيّر

- Chromium143.0.7499.0 / Playwright1.58.2 / axe-core4.11.0، ملفات متصفح مؤقتة معزولة. تبعية axe للتطوير فقط؛ لا تحميل لها في الموقع. العرضان1440×900 و390×900 للفحصين الجديدين، مقابل390×844 لاختبار المتصفح العام.
- baseline: 23 حالة،14زوج شاشة/قاعدة فاشلًا بسبب `color-contrast` و`scrollable-region-focusable`. اختبار النماذج فشل قبل الإصلاح لأن اختيار ملفJSON مخفي بـdisplay:none وغير قابل للوصول بعد زر التصدير بـTab.
- `styles.css`: ألوان ثانوية أغمق موحّدة عبرmuted، تحسين ألوان التنبيهات والشارات وحروف الاختيارات، واستبدال شفافية البطاقات المقفلة بحد متقطع مع بقاء رمز/نص القفل. توسيع المؤشر المرئي للحقول والقوائم والجداول وlabel الاستيراد. أبقينا native file input في شجرة الوصول وتسلسلTab باستخدام إخفاء بصري بدلdisplay:none، دون تقليده بعنصر قابل للنقر فقط.
- `app.js`: إزالة لونsubtitle المضمّن إلىclass، وربط شرح الاسم والدقائق عبرaria-describedby. لا تغيير لحساب النتيجة أو الاستيراد أو حفظ التقدم أو الأقفال.
- `tools/build_course.py`: أغلفة الجداول تحملtabindex=0/role=region واسمًا عربيًا يشرح التمرير؛ `tools/verify_course.py` يفحص هذه السمات. إعادة البناء تغير90غلافًا داخلcourse.json فقط؛ حجم الحزمة1,688,637بايت. قورنت الحزمة بعد إرجاع هذه السمات بالرأسe3ac818 وكانت متطابقة معنويًا؛474MP3 والـplaylist والسجل مطابقة بايتًا.

### نتائج مثبتة

- **PASS** `npm run test:accessibility-audit`:23حالة؛ dashboard/tracks/A0.1 مع التفريغ/اختبار قبل الاختيار وبعده وبعد التحقق/نموذج الأداء/settings/مفردات مكشوفة/بوابةA0/B2.12 مع التفريغ عندالعرضين، وقائمة الهاتف المفتوحة. القواعد ذاتtagswcag2a/wcag2aa/wcag21a/wcag21aa فقط، دون استثناء قواعد. صفر مخالفات لهذه العينة، لا ادعاء مطابقةWCAG أو تدقيق جميع الشاشات.
- **PASS** `npm run test:forms-keyboard`: Tab/Enter/Space لتعديل الاسم، منع3دقائق، حفظ95دقيقة والاهتمام ثم إعادة التحميل؛ تصديرJSON وتنشيط منتقي الملف الأصلي من لوحة المفاتيح ومؤشرlabel المرئي؛ رفضJSON مكسور دون تغييرالاسم، ثم استيرادالنسخة بعد تعديلالاسم والتأكدمن استعادتها وبقائها بعدreload. اختبار textarea/checkbox ومسودة أداء محفوظة دون منح إتقان؛ تمرير أول جدولA0.1 بسهم اليسار عند390px. الدخول للشاشات والتركيز الأولي وتجهيز نموذجالأداء يستخدمfixture برمجيًا؛ ليس رحلة مستخدم كاملة أو تفاعلًا آليًا داخل نافذة نظام التشغيل نفسها (يختارPlaywright الملف بعد إطلاقfilechooser).
- **PASS** `npm run test:accessibility-update`: حالات لوحة المفاتيح السابقة وتحديث عاملfixturev42 مباشرة إلىv44، بقاء الجلسة/الإجابة/الإتقان الاصطناعي/المفردات/المسودة، وعدم فرضreload، والقشرة الجديدة دون اتصال؛ حفظ مخزن تطبيق آخر و503لصوت المخزن القديم ثم206بعد إعادة جلبه. fixturev42 بقي تاريخيًا كما هو؛ ليس اختبارًا فعليًا مستقلًا لـv43→v44 أو نسخة تاريخية كاملة للواجهة.
- **PASS** `npm run test:browser`:53درسًا+بوابة/217أصلًا والعرضان1440×900 و390×844، RTL/الأقفال/التفريغات/عينة الحوار الستة أدوار1و0.8/العمل دون اتصال والمديات. المتصفح مكتوم وتقديمالزمن لا يعني الاستماعالكامل أو جودةالنطق.
- **PASS** البناء والتحقق وtest_service_worker (حذفv43/بقاءv44 في الاختبار المستقل)، واختباراتprogression/session_persistence/daily_plan/study_time وnode--check وgit diff--check. `npm ci`:صفرثغرات معروفة حسبنتيجةالأداة وقتالفحص، لا ضمانأمني شامل.
- رُصد timeoutواحد لـfilechooser عند390px أثناء تشغيل مجموعتيChromium بالتوازي؛ السبب غيرمحسوم. لم تُخفف التوقعات ولم يُضفretryيتجاهل الفشل. نجح التشغيل المنفرد ثمثلاث إعادات متتابعة إضافية للنماذج. شغّل مجموعات المتصفح بالتتابع، وحقق مجددًا إن تكرر الفشل.

### نقاط المراجعة البشرية المتبقية

بقي `color-contrast` غير محسوم آليًا في **31ظهور عقدة عبر7حالات** (ليست31مخالفة مثبتة أو31عنصرًا فريدًا):

| العرض/الحالة | عدد incomplete | مواضع للمراجعة |
|---|---:|---|
|1440/dashboard|3|`.two`،`.art-word`،`.art-levels > span:nth-child(2)`|
|1440/performance|2|حقلَاtextarea للأداءA0.1|
|390/dashboard|14|نصوصhero وبطاقةالكلمة والشارات ونصوصالخطةاليومية|
|390/A0.1|2|`.level-token` و`.audio-panel-heading > div > small`|
|390/performance|2|حقلَاtextarea للأداءA0.1|
|390/gate|1|عنوانلوحةالصوتالثانوي|
|390/B2.12|7|رمزالمستوى وh1 وخمسةعناوينلوحاتصوتثانوية|

لا تُحذف incomplete أو تُعامل كنجاح؛ الاختبار يطبع المحددات ويحفظها عندتعيينA11Y_REPORT. راجع عرضالتركيز والتباين بالحالات الفعلية والتكبير وقارئالشاشة، ثم هاتفًا حقيقيًا وSafari/Firefox والتثبيتPWA. لم يتكرر تنزيلFirefoxالفاشل، ولم تحدث مراجعةسمعية أو اعتماد80أصلًا.

### إعادة التشغيل وتنبيه التحديث

```bash
npm ci
# ثم Chromium متاح محليًا، أو npx playwright install --with-deps chromium
npm run test:forms-keyboard
A11Y_REPORT=/tmp/accessibility.json npm run test:accessibility-audit
npm run test:accessibility-update
npm run test:browser
npm run test:service-worker
```

فيهذهالبيئة: `LD_LIBRARY_PATH=/tmp/al2023/lib CHROMIUM_EXECUTABLE_PATH=/tmp/chromium` قبلالأوامر؛ runtime من@sparticuz/chromium143.0.4 تحت/tmp فقط، لا تبعيةإنتاجية. **تفعيلv44 يحذف مخازنالتطبيق السابقة وتسجيلاتها؛ أعد فتح المقاطعالمطلوبة متصلًا قبل استعمالها دوناتصال.** لا تنزيل شامل ولا ضمانضدquota/eviction. حالةGitHub والـcommit فيملفيالتسليم؛ تشغيلالمعاينة ودفعGit لا يثبتان النشر.

## سجل QA2 — لوحة المفاتيح وترقية عامل الخدمة v42→v43

- **النتيجة:** نجح `npm run test:accessibility-update` في Chromium143.0.7499.0. فشل أول تشغيل على الإصدار السابق لأن التركيز بقي خارج قائمة الهاتف بعد فتحها. صُحح التطبيق ثم أعيد الفحص بنجاح، مع إعادة فحوص المتصفح السابقة والاختبارات المحلية.
- `app.js`: رابط تجاوز إلى المحتوى أول توقف للوحة المفاتيح؛ aria-controls/expanded للزر، role=dialog وaria-modal للقائمة المفتوحة فقط، زر إغلاق واضح؛ خلفية inert. عند الفتح ينتقل التركيز للداخل، ويلتف Tab/Shift+Tab بين عناصرها، وعند Escape/الإغلاق يعود إلى الزر. عند اختيار وجهة يصل التركيز إلى محتواها. عند توسيع العرض إلى سطح المكتب يُلغى الوضع الحواري والخلفية غير التفاعلية.
- كانت إعادة الرسم تستبدل العقدة المركَّز عليها. صار `render()` يستعيد العنصر بواسطةid أوdataset إن بقي قابلًا للتفاعل، وإلا ينقل التركيز إلى المحتوى؛ اختُبرت إجابة اختبار الدرس قبل/بعد الاختيار والتحقق بلوحة المفاتيح. لا تغيير لدرجة النجاح أو الأقفال أو حساب النتيجة.
- `styles.css`: رابط تجاوز ظاهر عند التركيز، وزر إغلاق الهاتف، ومؤشر focus-visible للروابط وsummary وtextarea إضافةً إلى الأزرار والحقول السابقة. **ليس هذا تدقيق WCAG شاملًا**؛ قارئ الشاشة والتباين وجميع مسارات النماذج ما زالت بحاجة إلى فحص.
- `service-worker.js`: رُفع اسم المخزن فقط إلى**deutsch-pfad-v43** لإيصال إصلاحات التطبيق والأنماط. منطقRange والتخزين من الدفعة السابقة محفوظ.

### اختبار التحديث الفعلي داخل Chromium

خادم الاختبار يقدّم نسخة محفوظة من عاملv42 في `tools/fixtures/service-worker-v42.js` (مطابقة لعامل الفرع عند البداية). القشرة تحمل علامة اختباريةv42؛ هي شيفرة التطبيق الحالية بعلامة اختبار، **وليست نسخة كاملة من واجهة تاريخية أو هاتف المستخدم**. بعد إنشاء إجابة جارية جرى التبديل إلى العامل الحالي وطلبregistration.update، ثم انتظار حالةactivated، وليس controllerchange وحده.

الفحوص الناجحة:
1. بقاء الصفحة المفتوحة دون إعادة تحميل قسرية وبقاء الإجابة المختارة بعد التفعيل.
2. حذف مخزنv42 ووجودv43 مع الحفاظ على مخزن تطبيق آخر.
3. فصل خادم الاختبار وتعطيل الشبكة، ثم إعادة تحميل القشرة الجديدة من المخزن.
4. بقاء الاسم، وسجل إتقان اختبار واحد، ومراجعة مفردات، ومسودة أداء غير مكتملة، والإجابة المتحقق منها وموضع جلسة التقييم. استُخدمت بيانات اختبارية معزولة، لا تقدم المستخدم.
5. إرجاع503 للتسجيل الذي كان في المخزن المحذوف؛ إعادة جلبه متصلًا ثم نجاح طلب206 منه بعد قطع الشبكة مجددًا.

**تنبيه:** عند تفعيلv43 تُزال مخازنdeutsch-pfad السابقة وتسجيلاتها. أعد تشغيل الأدوار المطلوبة متصلًا قبل الاعتماد عليها دون اتصال. لا تنزيل شامل تلقائي ولا ضمان حفظ دائم ضد حصة المتصفح أو إخلاء المخزن.

### إعادة التشغيل والنطاق

```bash
npm ci
npx playwright install --with-deps chromium
npm run test:accessibility-update
npm run test:browser
npm run test:service-worker
```

في هذه البيئة استُعيد Chromium من حزمةnpm المؤقتة المذكورة في السجل السابق؛ الأمر الناجح:

```bash
LD_LIBRARY_PATH=/tmp/al2023/lib CHROMIUM_EXECUTABLE_PATH=/tmp/chromium npm run test:accessibility-update
```

- جُرّب `npx playwright install firefox`؛ فشل تنزيل Firefox146.0.1/build1509 بسببTLS/ECONNRESET. **لم يُشغّل Firefox**. لم يُختبر Safari/WebKit أو هاتف حقيقي أو تثبيتPWA فعلي، ولا يُدّعى نجاحها.
- نجحت build/verify والاختبارات الأربعة السابقة وفحص العامل وفحصا المتصفح وnode--check وgit diff--check. الحزمة ثابتة1,677,657بايت؛217أصلًا/474MP3؛137ready و80للمراجعة. لا صوت مولد أو اعتماد سمعي، ولا تغيير للمصادر/التقييمات/playlist/CSV/course.json.
- لم يُجر استماع بشري أو فحص474مقطعًا كاملة. لا دمجPR#1 ولا تأكيد نشر؛ تفاصيل الـcommit والرفع في ملفي التسليم.

## سجل تاريخي — دفعة فحص المتصفح الأولى (v42)

الفقرات التالية تصف الفحص السابق، لا الحالة الأحدث عند التعارض.

## الخلاصة وحدودها

نُفذت فحوص آلية في **Chromium 143.0.7499.0** عبر Playwright 1.58.2، بملفات متصفح مؤقتة ومعزولة. نجحت بعد تصحيح خدمة التخزين وعرض الهاتف. هذا ليس اختبار هاتف حقيقي أو مراجعة سمعية؛ المتصفح آلي وصوته مكتوم. لم تتغير حالة أي تسجيل إلى `ready` ولم تتغير بيانات المستخدم الفعلية.

الحزمة ثابتة: **53 درسًا،217 أصلًا/474MP3،137 ready و80 للمراجعة**، بحجم1,677,657بايت. لا صوت جديد أو إعادة توليد، ولا تعديل للمحتوى أو التقييم أو app.js. لا دمج PR #1 ولا تأكيد نشر.

## العيوب المثبتة والتصحيح

1. **طلبات أجزاء الصوت دون اتصال:** الاختبار قبل التصحيح أعاد200 بدل206 عند طلب جزء من تسجيل مخزّن. كان العامل يحاول أيضًا حفظ استجابات206 مع أن Cache API لا يقبلها. صار `service-worker.js` يجلب التسجيل المطلوب كاملًا دون Range، ويحفظ200 فقط، ثم يعيد المدى المطلوب مع `Content-Range` و`Content-Length`. يدعم المدى المحدد والمفتوح واللاحقة، ويرجع416 للمدى غير المتاح. الطلبات متعددة المديات أو غير المدعومة تُتجاهل ويُعاد الملف كاملًا200.
2. **HTML بدل مورد مفقود:** كان مسار فشل الشبكة يعيد index.html لأي طلب غير مخزّن. أصبح احتياطي HTML للتنقل فقط؛ الصوت/JS/CSS/JSON غير المخزّن يرجع503 بنص عادي. اختُبر فشل تشغيل قراءة غير مخزنة مع ظهور التنبيه وبقاء سجل الإتقان دون تغيير.
3. **فشل التخزين:** تُربط عملية الحفظ بـ`event.waitUntil` وتُلتقط أخطاء حصة التخزين حتى لا تكسر التشغيل المتصل. لا تُخزّن الاستجابات الجزئية أو أخطاء404/500. يحافظ التفعيل على مخازن التطبيقات الأخرى ويحذف إصدارات deutsch-pfad القديمة فقط.
4. **اتساع الدرس على الهاتف:** عند عرض390px اتسعت صفحة A0.1 إلى495px؛ كان عمود Grid الداخلي يأخذ الحد الأدنى للمحتوى/الجداول. أُضيف `grid-template-columns: minmax(0, 1fr)` إلى `.lesson-main-column`. أصبح اختبار عرض المستند وinnerWidth يقارنهما بعرض الهاتف المطلوب، لا ببعضهما فقط.
5. **القائمة الجانبية المغلقة:** كانت خارج الشاشة فقط؛ أُضيف `visibility: hidden` واستعادتها عند الفتح، حتى لا تبقى روابطها المغلقة قابلة للتركيز. جُرب فتحها وإغلاقها بالنقر على المساحة المكشوفة من الغطاء.

الإصدار الجديد للتخزين: **deutsch-pfad-v42**.

## ما اختُبر بالفعل

| الفحص | النتيجة والنطاق |
|---|---|
| بداية جديدة | A0 ثابت؛ B2 والدرس الثاني مقفلان؛ لا تظهر تسجيلات B2.12 عند محاولة فتحه قبل المتطلبات |
| عرض الدروس | جميع الدروس53 وبوابةA0 وأصولها217 في Chromium بعرض1440×900 ثم390×844، مع زرّين لكل أصل وشارات المراجعة الصحيحة، دون اتساع أفقي للصفحة |
| الوصول للدروس المتأخرة | استُخدم سجل إتقان **اختباري فقط** داخل ملف المتصفح المؤقت؛ لا ادعاء اجتياز التقييمات فعليًا |
| النصوص والقائمة | فتح تفريغ صوتي، وفتح/إغلاق قائمة الهاتف بالنقر الحقيقي |
| التشغيل المتصل | أدوار حوار B2.12 الستة بـHTMLAudioElement الحقيقي عند1 و0.8 على القياسين؛ تحقق من الزمن والمدة، ثم تقديم قرب النهاية لتجربة الانتقال الطبيعي، دون إرسال ended اصطناعي |
| إيقاف الصوت | الانتقال من الدرس يوقف التسجيل الفعّال |
| دون اتصال | حفظ مقطع الحوار الأول، ثم قطع اتصال السياق **وفصل الخادم نفسه** لمنع نجاح زائف؛ إعادة تحميل الحزمة والتنقل، وطلبات الملف الكامل والمديات، وتشغيل أول مقطع ببطء من المخزن |
| المورد غير المخزّن |503 للصوت وJS؛ عدم استبدالهما بصفحة HTML؛ فشل القراءة في واجهة الدرس لا يغيّر الإتقان |
| عامل الخدمة | اختبار Node مستقل للتفعيل وعزل أسماء المخازن، وعدم تحميل مكتبة الصوت مسبقًا، وأخطاء الحصة، وحفظ200 فقط، وIf-Range، واستثناء POST والمصادر الخارجية |
| اختبارات المشروع | build/verify والتدرج وحفظ الجلسة والخطة اليومية والوقت الفعلي كلها PASS؛ وفحوص node --check وgit diff --check |

اختبار المتصفح يفحص ظهور217أصلًا، لكنه **لا يشغّل474مقطعًا كاملة**. التشغيل الفعلي عينة محددة أعلاه؛ لم يُحكم على النطق أو جودة التسجيل. الـ80أصلًا تبقى للمراجعة السمعية.

## إعادة تشغيل الفحوص

يتطلب اختبار المتصفح Node18+ ومتصفح Chromium؛ حزم npm للتطوير والاختبار فقط. تشغيل التطبيق الثابت لا يحتاج npm أو خادم Node أو قاعدة بيانات.

```bash
npm ci
npx playwright install --with-deps chromium
npm run test:browser
npm run test:service-worker
python3 tools/build_course.py
python3 tools/verify_course.py
node tools/test_progression.cjs
node tools/test_session_persistence.cjs
node tools/test_daily_plan.cjs
node tools/test_study_time.cjs
```

اختبار المتصفح يشغّل خادمًا داخليًا مؤقتًا يدعم Range على loopback ومنفذ عشوائي، ثم يغلقه والمتصفح، ولا يحتاج تشغيل خادم منفصل. هذا عنوان لاختبار محلي داخل البيئة فقط؛ لم يُضف إلى شيفرة التطبيق المتاحة للمستخدم.

يمكن استعمال Chromium مثبت مسبقًا:

```bash
CHROMIUM_EXECUTABLE_PATH=/path/to/chromium npm run test:browser
```

في هذه البيئة فشل تنزيل Playwright Chromium بسبب TLS/ECONNRESET، وتعذر الوصول إلى مستودعات Debian. استُخدم بدلًا منه Chromium143 من `@sparticuz/chromium@143.0.4` عبر npm في `/tmp/deutschlern-browser-runtime`، مع استخراج مكتبات al2023 المرفقة. أمر التنفيذ الناجح هنا:

```bash
LD_LIBRARY_PATH=/tmp/al2023/lib CHROMIUM_EXECUTABLE_PATH=/tmp/chromium npm run test:browser
```

هذه الملفات مؤقتة خارج Git وقد تختفي بعد الاستئناف؛ ليست تبعية للتطبيق أو اعتمادًا على مسار ثابت داخل الاختبار. لا تُعد تشغيل تنزيلات فاشلة دون حاجة إذا توفر متصفح آخر. صور الفشل التشخيصية، إن وُجدت تحت `/tmp`، ليست مخرجات تسليم ولا دليل نجاح.

## قواعد العمل دون اتصال للمستخدم

- افتح التطبيق متصلًا مرة حتى يحفظ العامل ملفات الواجهة والحزمة.
- تُحفظ **المقاطع المطلوبة فقط** بعد جلبها كاملة؛ لا تُنزّل المكتبة كلها مسبقًا. الحوار سلسلة ملفات: تشغيل أوله لا يضمن حفظ بقية الأدوار.
- لا يوجد في هذه الدفعة زر تنزيل درس كامل أو ضمان لحفظ474MP3. قد تمنع حصة المتصفح الحفظ أو يحذف نظام الهاتف المخزن لاحقًا؛ يبقى التشغيل المتصل ممكنًا عند فشل الحفظ.
- عند تفعيل v42 تُحذف مخازن deutsch-pfad الأقدم، بما فيها تسجيلاتها؛ أعد فتح التسجيلات المطلوبة وأنت متصل بعد التحديث قبل الاعتماد عليها دون اتصال.

## المتبقي

مراجعة المستخدم السمعية واعتماد الأصول واحدًا واحدًا، وتجربة هاتف حقيقي وSafari/Firefox، والتثبيت كـPWA، والتحديث من جلسة قديمة فعلية وسياسات التخزين على الأجهزة. يلزم لاحقًا اختبار إمكانية الوصول بلوحة المفاتيح وقارئ الشاشة بصورة أوسع. لا تعميم نجاح Chromium على جميع المتصفحات، ولا توسع C1 أو دمج PR #1 دون إذن.

تفاصيل الفرع والـcommit والرفع محدثة في `data/production-handoff.md` و`PROFESSIONAL_CONTINUATION_PROMPT_AR.md`.
