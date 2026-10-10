# مراجعة CR29 — A2.11: السكن والجوار وWo/Wohin

## إيصال الرفع والتحقق — CR29، 2026-10-08

- رُفع التنفيذ **`21ce2e4867e3640d3692f8cde4ec813cc128e248`**، ثم سجل المراجعة **`faa380dee811f2c3d3fa7272ae94b1ab3a48f6b1`** إلى `arena/01a1036f-deutschlern`. تطابق HEAD مع origin بعد كل دفع، وكانت شجرة العمل نظيفة بعد رفع السجل.
- PASS:29 حارس مراجعة وخمس مجموعات Node والبناء والتحقق والصياغة وdiff. نجحت مجموعات المتصفح الخمس **مع إعادة موثقة للنماذج**: المحاولة الأولى نجحت عند1440 ثم انتهت مهلةfilechooser عند390؛ الإعادة دون تعديل الاختبار أو التطبيق نجحت عند العرضين. **التذبذب غير محلول، ونجاح الإعادة لا يثبت إصلاحه.** حدود الفحوص مفصلة أدناه.
- السجل122 وحدة و35 بندًا، مع30 بديلًا وستة معايير. المقارنة تحفظ52 درسًا آخر و474 ملف MP3 وكتلة فحوص الاتساق الصوتي السابقة. لا استماع أو توليد أو اعتماد صوتي جديد؛ خمسة أصول/10 مقاطع A2.11 بكلماتها وأصواتها وروابطها وحالاتها محفوظة. قيدا A2.8/A2.9 الصوتيان السابقان لم يُصلحا في التسجيلات.
- PR#1 **OPEN**، وmergedAt=null، ورأسه وقت الفحص `faa380d`. لا دمج ولا إعلان اكتمال المشروع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR29 delivery and documented browser retry`؛ معرفه في git log بعد الدفع. حالة نشر الإيصال نفسه لم تُفحص.
- التنفيذ `21ce2e4` له Vercel **success** وPreview deployment **6944181790** بحالةsuccess: https://deutschlern-cruzrcrdh-balinader-2671s-projects.vercel.app . هذه بيانات نشر فقط، وليست فحص واجهة بعيدة أو نشر Production.
- سجل المراجعة `faa380d` له Vercel **failure** برسالة `Deployment rate limited — retry in 24 hours.`؛ واستعلام deployments له أعاد قائمة فارغة. لا نجاح نشر مدّعى لهذا السجل، ولا إعادة نشر متكررة أو ترقية مدفوعة؛ رفع GitHub ناجح ومستقل.
- الحملة **28/53 درسًا** والبوابة منفصلة؛ تبقى25. التالي **CR30/A2.12 — العطلات والمهرجانات والثقافة، bevor/nachdem**. اقرأ المصدر والتقييم والأصول كاملة، واحفظ Laila02/Omar03 واتساق الأصوات. لا تعد A2.11 أو تسجيلاته؛ حدّث ملفّي التسليم وارفع كل مجموعة فور فحصها، دون مراجع بشري شرطًا للمتابعة ومع استمرار جميع القرارات أدناه.

رُوجع **A2.11 — المدن والسكن والجيران: Wo أم Wohin؟** في **122 وحدة و35 بندًا أو مطلبًا داخل التمارين**، مع **9 مراجع مقروءة كاملة**. قُيدت قاعدة المكان/الوجهة بحروف الجر المتغيرة، وفُصلت الحركة داخل المكان عن الانتقال إليه، مع دعم liegen/legen وstehen/stellen وhängen والمفعول والمصدر. صُحح شرح Q10 وربطه→T02، وأضيف بند محطة الترام T05.5 لدعمQ07. **P01/T08 أربع جمل لوصف غرفة مع الجهر**؛ **P02/T07ب أربع جمل عن جوار خيالي وطلب مهذب، كتابة فقط**، بنموذجين ومعايير متطابقة. الخيارات الثلاثون والمفاتيح وعتبة80% محفوظة. الإصدار `a2-11-v2` والمخزن `v76`. خمسة أصول/10 مقاطع محفوظة دون توليد أو استماع أو اعتماد جديد. **الحملة28/53 درسًا والبوابة منفصلة؛ تبقى25، والتالي CR30/A2.12.** هذا سجل مراجعة وفحوص وحدود معلنة، لا شهادة مستوى أو إعلان اكتمال الدمج.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم: `content/A2/lesson-11-housing-neighborhood-wohin.md/.assessment.json`؛ الحزمة `data/course.json`؛20 صفًا في `data/production-task-catalog.csv` وخمسة صفوف مرجعية فقط في `data/audio-asset-register.csv`.
- `service-worker.js` واختباراه؛ `tools/test_progression.cjs` و`tools/test_accessibility_audit.cjs`؛ الحارس الجديد `tools/test_a2_11_review.py`. اختبار filechooser لم يُغيّر.
- السجلان `data/reviews/a2-11-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.35 وتقرير المتصفح وملفا التسليم. لا تعديلplaylist أوMP3 أوapp.js أوCSS أوpackage/lock.
- رُفع التنفيذ **`21ce2e4867e3640d3692f8cde4ec813cc128e248`** إلى الفرع الوحيد `arena/01a1036f-deutschlern`، وتطابقHEAD معorigin. مجموعة السجل والفحوص بعنوان `Record CR29 granular A2.11 review and cumulative checks` تُرفع فور فحصها؛ معرفها فيgit log ثم يوثق إيصالها.
- لا تبديل فرع أو دمج PR#1 أو ادعاء اكتمال المشروع. حالة PR وVercel ستُثبت باستعلام التسليم؛ لا تنسب نجاحًا قديمًا لأحدثcommit. رفعGitHub مستقل عن النشر، ولا إعادة نشر متكررة أو ترقية مدفوعة بسبب حدود الخدمة.
- في بداية الدور قورنت707 ملفات بخط الأساس بعدfetch بصفر اختلاف أو إضافات، ثم استعيدتmetadata بـreset --mixed دون فقد عمل. لا تكرر الاستعادة أو التنظيف دون مقارنة جديدة.
- **التالي CR30/A2.12 — العطلات والمهرجانات والثقافة:** اقرأ مصدر `lesson-12-holidays-festivals-culture` وتقييمه وأصوله كاملة، وراجع ترتيب الأنشطة وbevor/nachdem وكل نص وتمرين وبديل ومعيار بالمراجع. احفظ Laila02/Omar03 والأصوات المتسقة. لا حاجة لإعادة A2.11 أو تسجيلاته.
- القرارات مستمرة: كل تعديل يُرفع فور فحص مجموعته؛ المحتوى والتقييم والتطبيق قبل الصوت؛ لا مراجع بشري شرطًا. لا إخفاء أو إعادة توليد أو تعيينready/نهائي بلا موافقة؛ حد10 طلبات صوت/رد. B1.9/B1.10 معلقان واختيار B1.11 محفوظ. احفظ A2.7 Q08→T05 وفحوص اتساق A2.9 والأصوات المقررة وتاريخ B2.6 دون إعادة تسميته B2.7.

## حدود المعنى والنصوص والصوت

- **الحركة ليست قاعدة الحالة وحدها:** في `Im Innenhof spielen zwei Kinder` يحدث اللعب داخل مكان بداتيف؛ `in den Innenhof` وجهة مع حرف متغير، أما `zur Haltestelle` فوجهة معzu والداتيف. حالات المفعول وعبارة الجر وظائف مختلفة.
- أريكة Fadi بجانب النافذة وأريكة Salma بمحاذاة الجدار؛ موضع الساحة في العبارة العامة مستقل عن موضعها في القراءة. القاموس فوق الطاولة، والمساحة الخضراء خلف المنزل، ومحطة الترام عند الزاوية. لا مسافات أو أزمنة رحلة أو هوية متكلم من الصوت مستنتجة.
- möchte … stellen رغبة لا وضع منجز؛ freundlich وصف لا دليل مساعدة أو موافقة؛ طلب leiser خفض للصوت قليلًا لا صمت مطلق أو حكم قانوني. النص لا يختبر تعيين المتكلمة من Sie sagt وحدها.
- **لم يُجرَ استماع أو توليد أو اعتماد صوتي جديد.** الأصول الخمسة ومقاطعها العشرة وكلماتها محفوظة؛ وقيدا A2.8/A2.9 السابقان لم يُصلحا في التسجيلات، وبقي توضيحهما المكتوب كما هو.
- المهمتان خياليتان: لا عنوان حقيقي أو نقل أثاث أو شكوى مرسلة أو شريك أو تسجيل. الجهر فيP01 فقط؛ P02 كتابة فقط. الإقرار والحد الحرفي لا يصححان اللغة أو النطق.

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

## منهج العد والمراجعة

122 وحدة تغطي المصدر والتقييم والأصول؛ البنود35 داخل التمارين ليست35 تمرينًا. T07 اختيار واحد وأربع جمل إنتاج، وT08 أربعة مطالب للجمل؛ T05 خمسة أحكام بعد إضافة المحطة. لكل بديل ومعيار وبند نتيجة مستقلة أدناه. قُرئت9 صفحات كاملة؛ صفحات «غير موجود» الأربعة لا تُحسب مراجع، ولا استُخدمت نتائج البحث الأخرى المتناقضة دليلًا.

## المراجع التي قُرئت — 2026-10-08

- **LOCAL — [Lingolia — Lokale Präpositionen](https://deutsch.lingolia.com/de/grammatik/praepositionen/lokal)**: حروف الجر المتغيرة التسعة؛ مكان مقابل وجهة، وzu تتطلب الداتيف مع اتجاه. لا نعتمد تعميمات صفحة المرجع عن جميع أسماء المدن أوكل استعمالauf Bahnhof؛ ليست محل التدريس هنا. قراءة كاملة؛ الأجزاء [0, 1].
- **PREP — [Lingolia — Präpositionen](https://deutsch.lingolia.com/de/grammatik/praepositionen)**: الحالة تتبع حرف الجر واستعماله، واختصارات im/in dem وzur/zu der؛ الحركة ليست اختبارًا وحيدًا للحالة. قراءة كاملة؛ الأجزاء [0, 1].
- **CASE — [Lingolia — Deklination von Nomen und Artikeln](https://deutsch.lingolia.com/de/grammatik/nomen/deklination)**: جدول الأدوات المعرفة في المفرد والجمع؛ n في الداتيف الجمع إلا مع جمع منتهٍ بـn/s. جلب عنوانakkusativ انتقل إلى هذه الصفحة الكاملة. قراءة كاملة؛ الأجزاء [0].
- **STAND — [Lingolia — stehen/stellen](https://deutsch.lingolia.com/de/wortschatz/verwechselbar/stehen-stellen)**: وصف الموضع مقابل وضع شيء، والفاعل والمفعول، واستثناء zu من التبسيط المنسوب إلى وجهة الفعل؛ لا تدريس كل المعاني المجازية. قراءة كاملة؛ الأجزاء [0].
- **LIE — [Lingolia — liegen/legen](https://deutsch.lingolia.com/de/wortschatz/verwechselbar/liegen-legen)**: liegen مع موضع وlegen مع مفعول أو ضمير انعكاسي ووجهة؛ الفعل وحرف الجر لا يختزلان إلى أي حركة مقابل سكون. قراءة كاملة؛ الأجزاء [0].
- **SEPARATE — [Lingolia — Trennbare und untrennbare Verben](https://deutsch.lingolia.com/de/grammatik/verben/trennbare)**: ein- منفصلة في richtet … ein؛ المصادر والجمل المركبة لا تخضع لتعميم فصل البادئة دائمًا. قراءة كاملة؛ الأجزاء [0].
- **MODAL — [Lingolia — Modalverben](https://deutsch.lingolia.com/de/grammatik/verben/modalverben)**: möchte وkönnten مع مصدر؛ حفظ المصدر stellen/sein في النمط المدروس وعدم مساواة الرغبة أوالطلب بالتنفيذ. قراءة كاملة؛ الأجزاء [0].
- **NEIGHBOR — [Duden — Nachbarschaft](https://www.duden.de/rechtschreibung/Nachbarschaft)**: الجيران كجماعة، وعلاقتهم، والجوار المكاني؛ جمع Nachbarschaften قليل الاستعمال لا حي إداري محدد بالضرورة. قراءة كاملة؛ الأجزاء [0].
- **HANG — [Duden — hängen: transitiver oder intransitiver Gebrauch](https://www.duden.de/sprachwissen/sprachratgeber/Das-Verb-h%C3%A4ngen-transitiver-oder-intransitiver-Gebrauch)**: يميز استعمال التعليق المتعدي عن وصف كون الشيء معلقًا؛ المصدر يعرض hängte/gehängt مقابل hing/gehangen. لا نفرض تعلم الماضي هنا؛ التركيز على المعنى والمفعول في المضارع. قراءة كاملة؛ الأجزاء [0].

مقال Duden عنhängen عُثر عليه في نتيجة البحث [2](https://www.duden.de/sprachwissen/sprachratgeber/Das-Verb-h%C3%A4ngen-transitiver-oder-intransitiver-Gebrauch)، ثم جُلب وقُرئ كاملًا؛ لا اعتماد على مقتطف وحده.

**روابط مستبعدة:**

- `https://deutsch.lingolia.com/de/grammatik/nomen/deklination/dativ` أعاد محتوى صفحة غير موجودة رغم نجاح الجلب؛ لم يستخدم دليلًا.
- `https://www.duden.de/rechtschreibung/haengen_befestigen_heften` أعاد محتوى صفحة غير موجودة رغم نجاح الجلب؛ لم يستخدم دليلًا.
- `https://www.duden.de/rechtschreibung/haengen` أعاد محتوى صفحة غير موجودة رغم نجاح الجلب؛ لم يستخدم دليلًا.
- `https://www.duden.de/rechtschreibung/Regal` أعاد محتوى صفحة غير موجودة رغم نجاح الجلب؛ لم يستخدم دليلًا.

## سجل الوحدات الفردية

### scope-01

**النص:**

> # A2.11 — المدن والسكن والجيران: Wo أم Wohin؟

**نتيجة المراجعة:** العنوان يطابق السكن والجوار والمكان والوجهة؛ لا جغرافيا فعلية أو قواعد قانونية للسكن.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### scope-02

**النص:**

> **المدة:** نحو 40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري

**نتيجة المراجعة:** أضيفت الكتابة والكلام والاستماع الاختياري؛ أربعون دقيقة تقدير مرن وليس ضمانًا زمنيًا.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### scope-03

**النص:**

> **الهدف:** أستطيع أن أصف مكان الأثاث وأسأل إلى أين يوضع، وأتحدث عن الحيّ والجيران.

**نتيجة المراجعة:** الهدف موضع الأثاث ووجهته والجوار؛ مهمتان مختلفتان تسندان الوصف المكاني والطلب المهذب.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### scope-04

**النص:**

> نتدرب على حروف الجر المكانية المتغيرة **in, auf, an, neben, unter, über, vor, hinter, zwischen**. في استعمال المكان/الوجهة المعروض هنا نميز بين السؤالين؛ هذه ليست قاعدة لكل حرف جر أو لكل معنى له:

**نتيجة المراجعة:** أضيف zwischen لإكمال المجموعة، وقُيدت القاعدة بحروف متغيرة في استعمالها المكاني، لا كل حرف جر أو كل معنى مجازي.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### scope-05

**النص:**

> - **Wo? أين؟** عندما نحدد مكان الشيء أو مكان حدوث النشاط مع هذه الحروف، نستعمل **Dativ**. لا يشترط أن يكون كل ما داخل المكان بلا حركة.

**نتيجة المراجعة:** Wo يسأل عن المكان وقد يكون داخله نشاط؛ أزيل ربط الداتيف بسكون كل الأشياء فقط.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### scope-06

**النص:**

> - **Wohin? إلى أين؟** عندما نحدد وجهة وضع الشيء أو انتقاله مع هذه الحروف، نستعمل **Akkusativ**. المهم علاقة الوجهة بالمكان، لا مجرد وجود فعل حركة.

**نتيجة المراجعة:** Wohin يحدد وجهة مع الحروف المتغيرة هنا؛ لا يجعل كل جواب اتجاه منصوبًا، كما يبين مثال zu.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### scope-07

**النص:**

> احفظ اختلاف الفعل في الأمثلة: **liegen/stehen** يصفان موضع الشيء، و**legen/stellen** يصفان وضع شيء في موضع. في **Ich stelle den Schrank an die Wand.** الخزانة den Schrank مفعول به، وan die Wand عبارة وجهة؛ لا نختار حالة المفعول بسؤال Wo. هذه معاني الاستعمال المدروس، لا كل المعاني المجازية للأفعال.

**نتيجة المراجعة:** الفرق بين liegen/stehen و legen/stellen واضح مع المفعول den Schrank وعبارة الوجهة an die Wand؛ حالتان لوظيفتين مختلفتين.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### scope-08

**النص:**

> النموذجان مكتوبان وغير مسجلين، ولا يستبدلان التسجيلات القائمة. الغرفة وموقف الجوار خياليان؛ لا ندمج تفاصيلهما مع منزل Fadi أو Salma، ولا يثبت الطلب تنفيذ حل. لا تصحيح لغوي أو اعتماد نطق آلي.

**نتيجة المراجعة:** النموذجان خياليان غير مسجلين؛ لا تدمج تفاصيلهما مع النصوص، ولا تعتبر الطلب موافقة أو تنفيذًا.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### vocab-01

**النص:**

> | der Nachbar / die Nachbarin | die Nachbarn / Nachbarinnen | الجار / الجارة |

**نتيجة المراجعة:** Nachbar/Nachbarin مذكر ومؤنث، وجمعاهما Nachbarn/Nachbarinnen؛ زوجان في صف واحد لا هوية متعلم.

### vocab-02

**النص:**

> | die Nachbarschaft | die Nachbarschaften (جمع قليل الاستعمال) | الجوار / الجيرة والعلاقة بين الجيران |

**نتيجة المراجعة:** وُضحت دلالات الجوار والجيرة والعلاقات، وأن جمع Nachbarschaften قليل الاستعمال وفق المرجع.

**المراجع ذات الصلة:** NEIGHBOR.

### vocab-03

**النص:**

> | die Innenstadt | die Innenstädte | وسط المدينة |

**نتيجة المراجعة:** Innenstadt مؤنث وجمعه Innenstädte؛ وسط المدينة، لا اسم مدينة بعينها.

### vocab-04

**النص:**

> | die Straßenbahnhaltestelle | die Straßenbahnhaltestellen | محطة الترام |

**نتيجة المراجعة:** Straßenbahnhaltestelle مؤنث وجمعه Straßenbahnhaltestellen؛ محطة ترام، وليس زمن رحلة أو مسافة.

### vocab-05

**النص:**

> | die Miete | die Mieten | الإيجار |

**نتيجة المراجعة:** Miete مؤنث وجمعه Mieten؛ قيمة/بدل الإيجار هنا، لا إثبات سعر أو عقد.

### vocab-06

**النص:**

> | der Umzug | die Umzüge | الانتقال إلى مسكن جديد |

**نتيجة المراجعة:** Umzug مذكر وجمعه Umzüge؛ الانتقال إلى مسكن في السياق، لا كل معنى للكلمة.

### vocab-07

**النص:**

> | der Schrank | die Schränke | الخزانة |

**نتيجة المراجعة:** Schrank مذكر وجمعه Schränke؛ خزانة مع اختلاف الأداة والحالة حسب الوظيفة.

### vocab-08

**النص:**

> | das Regal | die Regale | وحدة رفوف / رفّ |

**نتيجة المراجعة:** Regal محايد وجمعه Regale؛ وُسعت الترجمة إلى وحدة رفوف/رف دون تغيير لفظ التسجيل.

### vocab-09

**النص:**

> | das Sofa | die Sofas | الأريكة |

**نتيجة المراجعة:** Sofa محايد وجمعه Sofas؛ الأريكة، و neben das Sofa يحدد وجهة في المثال.

### vocab-10

**النص:**

> | der Teppich | die Teppiche | السجادة |

**نتيجة المراجعة:** Teppich مذكر وجمعه Teppiche؛ سجادة موضعها على الأرض في الحوار.

### vocab-11

**النص:**

> | die Wand | die Wände | الجدار |

**نتيجة المراجعة:** Wand مؤنث وجمعه Wände؛ an der لمكان و an die لوجهة التعليق أو الوضع.

### vocab-12

**النص:**

> | der Boden | die Böden | الأرضية |

**نتيجة المراجعة:** Boden مذكر وجمعه Böden؛ أرضية في السياق لا سطح طاولة.

### vocab-13

**النص:**

> | der Innenhof | die Innenhöfe | ساحة داخلية |

**نتيجة المراجعة:** Innenhof مذكر وجمعه Innenhöfe؛ ساحة داخلية، وتختلف علاقتها المكانية بين الأمثلة المستقلة.

### vocab-14

**النص:**

> | die Grünfläche | die Grünflächen | مساحة خضراء |

**نتيجة المراجعة:** Grünfläche مؤنث وجمعها Grünflächen؛ مساحة خضراء، لا دليل أنها حديقة عامة كبيرة.

### vocab-15

**النص:**

> | der Sessel | die Sessel | كرسي بذراعين |

**نتيجة المراجعة:** Sessel مذكر وجمعه ثابت الشكل؛ كرسي بذراعين، غير لفظ Stuhl الأعم.

### vocab-16

**النص:**

> | der Schreibtisch | die Schreibtische | مكتب |

**نتيجة المراجعة:** Schreibtisch مذكر وجمعه Schreibtische؛ مكتب/طاولة كتابة، لا غرفة مكتب.

### vocab-17

**النص:**

> | der Nachttisch | die Nachttische | منضدة بجانب السرير |

**نتيجة المراجعة:** Nachttisch مذكر وجمعه Nachttische؛ منضدة بجانب السرير، وهي وجهة الكتاب في الاستماع.

### vocab-18

**النص:**

> | einrichten | richtet ein | يرتّب/يؤثث |

**نتيجة المراجعة:** einrichten مصدر و richtet ein مضارع مفرد غائب في سياق التأثيث؛ ليس مصدرًا مع ein مفصولة.

**المراجع ذات الصلة:** SEPARATE.

### vocab-19

**النص:**

> | hängen | hängt | يعلّق / يكون معلّقًا |

**نتيجة المراجعة:** hängen / hängt يصلحان لمعنى التعليق أو الموضع؛ لا تختار الحالة من شكل الفعل وحده.

**المراجع ذات الصلة:** HANG.

### vocab-20

**النص:**

> | laut / leise | — | صاخب / هادئ |

**نتيجة المراجعة:** laut/leise متعلقان بالصوت هنا: صاخب/هادئ؛ leiser خفض نسبي للصوت لا صمت مطلق.

### case-01

**النص:**

> | المذكر der | dem | den |

**نتيجة المراجعة:** المذكر يتحول من der إلى dem مع داتيف المكان وإلى den مع نصب الوجهة في هذا الجدول.

**المراجع ذات الصلة:** CASE, LOCAL.

### case-02

**النص:**

> | المؤنث die | der | die |

**نتيجة المراجعة:** المؤنث der للداتيف و die للنصب؛ لا تستعمل dem مع Wand في هذه الأمثلة.

**المراجع ذات الصلة:** CASE, LOCAL.

### case-03

**النص:**

> | المحايد das | dem | das |

**نتيجة المراجعة:** المحايد dem مقابل das؛ يميز neben dem Sofa عن neben das Sofa.

**المراجع ذات الصلة:** CASE, LOCAL.

### case-04

**النص:**

> | الجمع die (للمقارنة) | den | die |

**نتيجة المراجعة:** أضيف الجمع للمقارنة:den للداتيف و die للنصب؛ n في الاسم مفصلة بمثال Stühlen، وليست زيادة تلقائية لكل اسم.

**المراجع ذات الصلة:** CASE, LOCAL.

### grammar-01

**النص:**

> Wo liegt das Buch?

**نتيجة المراجعة:** السؤال Wo عن موضع الكتاب، و liegt فاعله das Buch؛ ليس سؤال اتجاه أو وقت.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### grammar-02

**النص:**

> Auf dem Tisch.

**نتيجة المراجعة:** جواب مختصر على Wo:auf dem Tisch، والداتيف للمذكر؛ ليس جملة ناقصة يجب رفضها في حوار.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### grammar-03

**النص:**

> Wohin lege ich das Buch?

**نتيجة المراجعة:** Wohin مع lege يطلب وجهة وضع الكتاب؛ ich فاعل و das Buch مفعول.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### grammar-04

**النص:**

> Auf den Tisch.

**نتيجة المراجعة:** auf den Tisch وجهة مع حرف متغير؛ لا يعني أن كل Wohin مع كل حرف يفرض den.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### grammar-05

**النص:**

> Der Schrank steht an der Wand.

**نتيجة المراجعة:** Der Schrank فاعل و steht يصف موضعه بمحاذاة الجدار؛ an der Wand مكان.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### grammar-06

**النص:**

> Ich stelle den Schrank an die Wand.

**نتيجة المراجعة:** Ich فاعل و den Schrank مفعول و an die Wand وجهة؛ stelle ليست stehe.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### phrase-01

**النص:**

> Ich wohne in einer ruhigen Nachbarschaft.

**نتيجة المراجعة:** حي هادئ/جوار هادئ:in einer ruhigen Nachbarschaft، عبارة مكان بداتيف مؤنث مع تنكير وصفة معطاة، لا درس شامل في تصريف الصفات.

**المراجع ذات الصلة:** LOCAL, CASE, NEIGHBOR, MODAL.

### phrase-02

**النص:**

> Die Miete ist hoch.

**نتيجة المراجعة:** ارتفاع الإيجار مثال لغوي لا سعر فعلي أو مقارنة بين مدن.

**المراجع ذات الصلة:** LOCAL, CASE, NEIGHBOR, MODAL.

### phrase-03

**النص:**

> Der Innenhof ist neben dem Haus.

**نتيجة المراجعة:** الساحة بجانب المنزل في هذا المثال المستقل؛ لا يبدل مكانها بجانب المدخل في القراءة.

**المراجع ذات الصلة:** LOCAL, CASE, NEIGHBOR, MODAL.

### phrase-04

**النص:**

> Meine Nachbarin ist sehr freundlich.

**نتيجة المراجعة:** جارتي ودودة مثال بضمير الملكية، لا صفة لجميع الجيران أو دليل مساعدة محددة.

**المراجع ذات الصلة:** LOCAL, CASE, NEIGHBOR, MODAL.

### phrase-05

**النص:**

> Könnten Sie bitte etwas leiser sein?

**نتيجة المراجعة:** طلب مهذب بصيغة الاحترام؛ leiser أقل صوتًا و sein مصدر، وليس تصريحًا بأن الجار التزم.

**المراجع ذات الصلة:** LOCAL, CASE, NEIGHBOR, MODAL.

### helper-01

**النص:**

> - **حركة داخل مكان أم انتقال إليه؟** **Im Innenhof spielen zwei Kinder.** لعب داخل الساحة: Wo? وim = in dem. أما **Die Kinder gehen in den Innenhof.** فوجهة: Wohin? لا نقول إن spielen يفرض النصب لمجرد الحركة. **Ich gehe zur Haltestelle.** وجهة أيضًا، لكن zur = zu der وzu تتطلب Dativ؛ قاعدة التبديل تخص الحروف التسعة المذكورة، لا كل جواب عن Wohin.

**نتيجة المراجعة:** يربط الداتيف بمكان اللعب لا سكون الأطفال؛ يبين in den Innenhof كوجهة، و zu der كوجهة بداتيف خارج مجموعة التبديل.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-02

**النص:**

> - **الأداة والاسم:** der Tisch → auf dem Tisch / auf den Tisch؛ die Wand → an der Wand / an die Wand؛ das Sofa → neben dem Sofa / neben das Sofa. للمقارنة فقط: der Stuhl، die Stühle؛ **zwischen den Stühlen** مكان و**zwischen die Stühle** وجهة. في الداتيف الجمع نضيف n إلى الاسم إن لم ينته جمعه أصلًا بـn أوs؛ لا نعمم تغيير نهاية كل اسم مفرد.

**نتيجة المراجعة:** مطابقة أدوات المذكر والمؤنث والمحايد، مع مثال الجمع وشرط n؛ المقارنة ليست فرضًا على كل إجابة أداء.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-03

**النص:**

> - **liegen / legen:** **Das Buch liegt auf dem Tisch.** الكتاب هو الفاعل وموضعه موصوف؛ **Ich lege das Buch auf den Tisch.** ich الفاعل وdas Buch المفعول. liegen يصف وضع الكتاب مستلقيًا هنا، وlegen عملية وضعه؛ ليست صيغة واحدة مع تبديل حرف عشوائي.

**نتيجة المراجعة:** يفصل فاعل liegt عن فاعل lege ومفعوله؛ المصدران ليسا بديلين اعتباطيين.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-04

**النص:**

> - **stehen / stellen / hängen:** **Die Lampe steht neben dem Bett.** مقابل **Ich stelle die Lampe neben das Bett.** أما **Das Bild hängt an der Wand.** فيصف موضع الصورة، و**Ich hänge das Bild an die Wand.** يصف تعليقها. hängen له استعمالان؛ لا يكفي شكله وحده لاختيار الحالة، بل ننظر إلى الفاعل والمفعول ومعنى المكان أو الوجهة. التدريب هنا في المضارع.

**نتيجة المراجعة:** يتقابل موضع المصباح ووضعه، و hängen اللازم والمتعدي؛ لا يضيف الماضي إلى تقييم المضارع.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-05

**النص:**

> - **einrichten والمصدر:** **Nach dem Umzug richtet sie ihr Wohnzimmer ein.** تعني أنها تؤثث غرفة الجلوس بعد الانتقال؛ ein جزء الفعل المنفصل. **Ich möchte das Regal neben das Sofa stellen.** فيها stellen مصدر أخير دون zu، وmöchte تعبر عن رغبة؛ لا دليل أن الرف وُضع فعلًا هناك.

**نتيجة المراجعة:** ein منفصلة في الرئيسية، و stellen مصدر مع möchte؛ الرغبة ليست وضعًا تم بالفعل.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-06

**النص:**

> - **الحي والاتجاهات:** Nachbarschaft قد تعني الجوار أو مجموع الجيران أو العلاقة بينهم، وليست دائمًا حيًا إداريًا محددًا؛ جمعها قليل الاستعمال. **an der Ecke** عند الزاوية؛ **der Eingang** المدخل؛ **neben** بجانب، و**hinter** خلف، و**über** فوق. لا نحول قرب محطة الترام إلى مسافة أو مدة مشي غير مذكورة.

**نتيجة المراجعة:** يوضح الجوار والزاوية والمدخل والاتجاهات، دون اختلاق مسافة للمحطة أوحي إداري.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-07

**النص:**

> - **الطلب المهذب:** **Könnten Sie bitte etwas leiser sein?** طلب خفض الصوت قليلًا؛ Sie للاحترام حتى مع جار واحد، وsein مصدر في النهاية. leiser صيغة مقارنة من leise، لا طلب صمت مطلق. الطلب لا يثبت استجابة الجار، ولا يمثل قاعدة قانونية لساعات الهدوء.

**نتيجة المراجعة:** الطلب موجه باحترام ومحدود بخفض الصوت قليلًا؛ ليس صمتًا مطلقًا أو تفسيرًا لقانون الهدوء.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-08

**النص:**

> - **ثلاثة سياقات مستقلة:** أريكة Fadi بجانب النافذة، وأريكة Salma بمحاذاة الجدار. في القراءة الساحة بجانب المدخل، وفي عبارة الحي المثال بجانب المنزل؛ لا نجمع المواقع في خريطة واحدة. في الاستماع طفلان يلعبان في الساحة، ولا يحدد النص جنس المتكلم أو اسمه. sie في أسئلته تعود إلى die Person نحويًا.

**نتيجة المراجعة:** يفصل Fadi و Salma والاستماع والعبارة العامة؛ لا خريطة واحدة أو جنس متكلم مفترض.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-09

**النص:**

> - **حدود الفهم:** القاموس على الطاولة لا على الأرض؛ المساحة الخضراء خلف المنزل، لا محطة الترام. جارة Salma تساعدها؛ معلومة الساحة صريحة داخل الاقتباس، ولا نختبر تعيين المتكلمة من Sie sagt وحدها. وصف الجيران بالود لا يثبت أنهم ساعدوا المتكلم أو وافقوا على طلبه.

**نتيجة المراجعة:** ينقل مواقع القراءة والمساعدة الصريحة؛ لا يتوقف الاختبار على حسم مرجع Sie sagt، ولا يستنتج فعل مساعدة من freundlich وحدها.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### helper-10

**النص:**

> - **طريقة العمل والخصوصية:** P01 أربع جمل عن غرفة متخيلة مع الجهر؛ P02 ثلاث جمل وطلب مهذب كتابة فقط، عن موقف خيالي. لا عنوان حقيقي أو نقل أثاث فعلي أو شكوى مرسلة أو شريك أو تسجيل مطلوب. حاول الاستماع قبل التفريغ؛ قراءته لا تثبت فهمًا مسموعًا مستقلًا. الطول والإقرار ليسا تصحيحًا آليًا للغة أو النطق.

**نتيجة المراجعة:** مهام خيالية بلا بيانات عنوان أو نشاط بدني أو شكوى حقيقية؛ الكتابة والجهر مختلفان، والتفريغ والإقرار لهما حدود.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE, HANG, SEPARATE, MODAL, NEIGHBOR.

### dialogue-01

**النص:**

> Wie gefällt dir die neue Wohnung?

**نتيجة المراجعة:** Nora تسأل Fadi عن إعجابه بالمسكن؛ dir مع gefällt، لا طلب تغيير موقع أثاث.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL, NEIGHBOR.

### dialogue-02

**النص:**

> Sehr gut. Das Sofa steht neben dem Fenster, und der Teppich liegt auf dem Boden.

**نتيجة المراجعة:** Fadi معجب؛ الأريكة بجانب النافذة والسجادة على الأرض، مع steht/liegt بحسب الغرض؛ لا ننقل موضع أريكة Salma إلى هنا.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL, NEIGHBOR.

### dialogue-03

**النص:**

> Wo steht der Schrank?

**نتيجة المراجعة:** Wo تسأل عن موضع الخزانة تحديدًا، لا وجهة نقلها.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL, NEIGHBOR.

### dialogue-04

**النص:**

> Er steht an der Wand. Ich möchte das Regal neben das Sofa stellen.

**نتيجة المراجعة:** Er يعود إلى Schrank بمحاذاة الجدار؛ möchte … stellen رغبة في وضع Regal بجانب الأريكة، لا إخبار بأنه موضوع هناك الآن.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL, NEIGHBOR.

### dialogue-05

**النص:**

> Und wie sind die Nachbarn?

**نتيجة المراجعة:** سؤال عن الجيران بصيغة Wie، لا أين يسكنون أو عددهم.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL, NEIGHBOR.

### dialogue-06

**النص:**

> Sehr freundlich. Die Nachbarschaft ist ruhig, und es gibt einen kleinen Innenhof.

**نتيجة المراجعة:** يصفهم بالود والحي بالهدوء ويذكر وجود ساحة صغيرة؛ لا موضع محدد لهذه الساحة أو وعد بالمساعدة.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL, NEIGHBOR.

### reading-01

**النص:**

> Salma wohnt in der Innenstadt.

**نتيجة المراجعة:** Salma تسكن وسط المدينة؛ لا اسم مدينة أو عنوان شخصي.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-02

**النص:**

> Die nächste Straßenbahnhaltestelle ist an der Ecke.

**نتيجة المراجعة:** أقرب محطة ترام عند الزاوية؛ لا زمن مشي أو خلف المنزل.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-03

**النص:**

> Nach dem Umzug richtet sie ihr Wohnzimmer ein.

**نتيجة المراجعة:** تؤثث غرفة الجلوس بعد الانتقال؛ richtet … ein وليس تغيير ترتيب الكلمات كيفما اتفق.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-04

**النص:**

> Das Sofa steht an der Wand.

**نتيجة المراجعة:** أريكتها بمحاذاة الجدار؛ هذا موضع لا فعل نقل.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-05

**النص:**

> Ein kleiner Tisch steht vor dem Sofa, und das Wörterbuch liegt auf dem Tisch.

**نتيجة المراجعة:** طاولة صغيرة أمام الأريكة، والقاموس على الطاولة؛ لا على الأرض أو بجانب المدخل.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-06

**النص:**

> Salma hängt ein Bild über das Sofa.

**نتيجة المراجعة:** تعلق صورة فوق الأريكة؛ das Sofa بعدüber وجهة في النصب، لا وصف لحالة الصورة قبل التعليق.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-07

**النص:**

> Ihre Nachbarin hilft ihr.

**نتيجة المراجعة:** جارتها تساعدها؛ ihr تشير إلى Salma، وليس إلى جماعة جيران غير مذكورة.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-08

**النص:**

> Sie sagt: „Die Grünfläche ist hinter dem Haus, und der Innenhof ist neben dem Eingang.“

**نتيجة المراجعة:** الاقتباس يحدد المساحة الخضراء خلف المنزل والساحة بجانب المدخل؛ لا يُسأل عن حسم هوية المتكلمة من Sie وحدها.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-09

**النص:**

> Salma ist froh, denn die Nachbarschaft ist ruhig.

**نتيجة المراجعة:** Salma سعيدة بسبب هدوء الجوار؛ denn يربط السبب، لا نتيجة سعر الإيجار أو مساحة الشقة.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG, SEPARATE, NEIGHBOR.

### reading-question-01

**النص:**

> Was steht an der Wand?

**نتيجة المراجعة:** Das Sofa؛ موضعه بمحاذاة الجدار في القراءة.

**المراجع ذات الصلة:** LOCAL, CASE, HANG.

### reading-question-02

**النص:**

> Wo liegt das Wörterbuch?

**نتيجة المراجعة:** Auf dem Tisch؛ القاموس فوق الطاولة، لا السجادة.

**المراجع ذات الصلة:** LOCAL, CASE, HANG.

### reading-question-03

**النص:**

> Wohin hängt Salma das Bild?

**نتيجة المراجعة:** Über das Sofa؛ وجهة التعليق، وليست أداة dem الخاصة بوصف موضع بعد التعليق.

**المراجع ذات الصلة:** LOCAL, CASE, HANG.

### reading-question-04

**النص:**

> Wer hilft Salma?

**نتيجة المراجعة:** Ihre Nachbarin؛ المساعدة مذكورة صراحة لا استنتاج من الود.

**المراجع ذات الصلة:** LOCAL, CASE, HANG.

### reading-question-05

**النص:**

> Wo ist der Innenhof?

**نتيجة المراجعة:** Neben dem Eingang؛ مرجعها الاقتباس وليس عبارة الساحة بجانب المنزل العامة.

**المراجع ذات الصلة:** LOCAL, CASE, HANG.

### reading-question-06

**النص:**

> Wo ist die nächste Straßenbahnhaltestelle?

**نتيجة المراجعة:** An der Ecke؛ أضيف تدريب مباشر T05.5 يدعم هذا التفصيل و Q07.

**المراجع ذات الصلة:** LOCAL, CASE, HANG.

### listening-01

**النص:**

> Im Schlafzimmer steht das Bett an der Wand.

**نتيجة المراجعة:** السرير بمحاذاة الجدار داخل غرفة النوم؛ Im = in dem، وليس اتجاه نقل السرير.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### listening-02

**النص:**

> Eine Lampe steht neben dem Bett.

**نتيجة المراجعة:** مصباح بجانب السرير، مع neben dem Bett؛ لا نحوله إلى وجهة نصبية.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### listening-03

**النص:**

> Ich lege mein Buch auf den Nachttisch.

**نتيجة المراجعة:** المتكلم يضع كتابه على منضدة السرير؛ على den Nachttisch وجهة، ولا نص يحدد اسم الشخص أو جنسه.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### listening-04

**النص:**

> Dann stelle ich den Stuhl vor den Schreibtisch.

**نتيجة المراجعة:** ثم يضع الكرسي أمام المكتب؛ Stuhl مفعول و vor den Schreibtisch وجهة، لا جانب المكتب.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### listening-05

**النص:**

> Im Innenhof spielen zwei Kinder.

**نتيجة المراجعة:** طفلان يلعبان في الساحة؛ الحركة داخلها لا تنفي الداتيف Im Innenhof.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### listening-06

**النص:**

> Die Nachbarn sind freundlich.

**نتيجة المراجعة:** الجيران ودودون؛ لا يقول إنهم ساعدوا في نقل الأثاث أو وافقوا على طلب خفض الصوت.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, STAND, LIE.

### listening-question-01

**النص:**

> Wo steht das Bett?

**نتيجة المراجعة:** An der Wand؛ مكان السرير.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### listening-question-02

**النص:**

> Wo steht die Lampe?

**نتيجة المراجعة:** Neben dem Bett؛ مكان المصباح لا وجهة وضعه.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### listening-question-03

**النص:**

> Wohin legt die Person das Buch?

**نتيجة المراجعة:** Auf den Nachttisch؛ وجهة الكتاب باسم منضدة السرير.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### listening-question-04

**النص:**

> Wohin stellt sie den Stuhl?

**نتيجة المراجعة:** Vor den Schreibtisch؛ وجهة الكرسي؛ sie يعود إلى die Person نحويًا ولا يثبت جنس المتكلم.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### listening-question-05

**النص:**

> Wie sind die Nachbarn?

**نتيجة المراجعة:** Sie sind freundlich؛ نص مباشر لا وعد بالمساعدة.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### speaking-model-01

**النص:**

> Das Sofa steht an der Wand.

**نتيجة المراجعة:** الجملة 1 تصف موضع الأريكة بـ steht و an der Wand في الداتيف المؤنث.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### speaking-model-02

**النص:**

> Das Buch liegt auf dem Tisch.

**نتيجة المراجعة:** الجملة 2 تصف موضع كتاب بـ liegt و auf dem Tisch في الداتيف المذكر.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### speaking-model-03

**النص:**

> Ich stelle den Sessel neben das Sofa.

**نتيجة المراجعة:** الجملة 3 تبدأ Ich stelle؛ den Sessel مفعول و neben das Sofa وجهة في نصب المحايد.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### speaking-model-04

**النص:**

> Ich lege die Zeitung auf den Nachttisch.

**نتيجة المراجعة:** الجملة 4 تبدأ Ich lege؛ die Zeitung مفعول آخر، و auf den Nachttisch وجهة في نصب المذكر.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

### writing-model-01

**النص:**

> Ich wohne in der Innenstadt.

**نتيجة المراجعة:** الجملة 1 تسمي السكن في وسط المدينة مع in der Innenstadt؛ لا اسم مدينة أو عنوان حقيقي.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, MODAL.

### writing-model-02

**النص:**

> Der Innenhof ist neben dem Eingang.

**نتيجة المراجعة:** الجملة 2 تحدد الساحة بجانب المدخل مع neben dem Eingang في الداتيف.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, MODAL.

### writing-model-03

**النص:**

> Heute ist es im Innenhof laut.

**نتيجة المراجعة:** الجملة 3 تضيف ضجيج اليوم في نفس الساحة، مع im؛ ليست نسبة ضجيج حقيقي إلى Fadi أو Salma.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, MODAL.

### writing-model-04

**النص:**

> Könnten Sie bitte etwas leiser sein?

**نتيجة المراجعة:** الجملة 4 طلب خفض الصوت بـ Könnten Sie … sein?؛ لا ادعاء استجابة ولا إلزام بالجهر في هذه المهمة.

**المراجع ذات الصلة:** LOCAL, PREP, CASE, MODAL.

### card-01

**النص:**

> - **Wo? Das Buch liegt auf dem Tisch.** → أين؟ الكتاب على الطاولة.

**نتيجة المراجعة:** Wo ثم وصف موضع الكتاب؛ auf dem Tisch داتيف، ولا تعمم ذلك علىكل حرف جر.

**المراجع ذات الصلة:** LOCAL, CASE, LIE, NEIGHBOR, MODAL.

### card-02

**النص:**

> - **Wohin? Ich lege das Buch auf den Tisch.** → إلى أين؟ أضع الكتاب على الطاولة.

**نتيجة المراجعة:** Wohin ثم عملية وضع الكتاب؛ auf den Tisch وجهة، و das Buch مفعول.

**المراجع ذات الصلة:** LOCAL, CASE, LIE, NEIGHBOR, MODAL.

### card-03

**النص:**

> - **Die Nachbarschaft ist ruhig.** → الحيّ هادئ.

**نتيجة المراجعة:** الهدوء صفة المثال الخيالي، لا حكم على كل حي أو مقارنة مدن.

**المراجع ذات الصلة:** LOCAL, CASE, LIE, NEIGHBOR, MODAL.

### card-04

**النص:**

> - **Könnten Sie bitte etwas leiser sein?** → هل يمكنكم خفض الصوت قليلًا؟

**نتيجة المراجعة:** طلب احترام لخفض الصوت قليلًا؛ المصدر sein أخيرًا، ولا يثبت أنه نُفذ.

**المراجع ذات الصلة:** LOCAL, CASE, LIE, NEIGHBOR, MODAL.

### DL-A2-11-T01

**النص:**

> 1. ______ liegt die Zeitung? — Auf dem Tisch.
> 2. ______ legst du die Zeitung? — Auf den Tisch.
> 3. ______ steht der Schrank? — Neben dem Fenster.
> 4. ______ stellst du den Schrank? — Neben das Fenster.

**نتيجة المراجعة:** أربعة أسئلة تربط المعنى بالأداة والفعل؛ لا تعميم عن كل حركة.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG.

**البنود:**

1. ______ liegt die Zeitung? — Auf dem Tisch.
   - liegt ووصف موضع الصحيفة على الطاولة يدلان على Wo هنا. الجواب: Wo.
2. ______ legst du die Zeitung? — Auf den Tisch.
   - legst ووجهة auf den Tisch يدلان على Wohin. الجواب: Wohin.
3. ______ steht der Schrank? — Neben dem Fenster.
   - steht يصف الخزانة بجانب النافذة، فالسؤال Wo. الجواب: Wo.
4. ______ stellst du den Schrank? — Neben das Fenster.
   - stellst عملية وضع الخزانة بجانب النافذة مع das Fenster، فالسؤال Wohin. الجواب: Wohin.

### DL-A2-11-T02

**النص:**

> 1. Das Buch liegt auf ______ Tisch. (dem / den)
> 2. Ich lege das Buch auf ______ Tisch. (dem / den)
> 3. Das Bild hängt an ______ Wand. (der / die)
> 4. Ich hänge das Bild an ______ Wand. (der / die)
> 5. Der Stuhl steht neben ______ Sofa. (dem / das)
> 6. Wir stellen den Stuhl neben ______ Sofa. (dem / das)

**نتيجة المراجعة:** ستة أمثلة تشمل المذكر والمؤنث والمحايد ومكان/وجهة؛ تدعم Q02/Q03/Q10.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG.

**البنود:**

1. Das Buch liegt auf ______ Tisch. (dem / den)
   - موضع كتاب مع auf وداتيف المذكر dem؛ den خاص بالوجهة هنا. الجواب: dem.
2. Ich lege das Buch auf ______ Tisch. (dem / den)
   - وجهة وضع الكتاب مع auf ونصب المذكر den؛ dem لا يطابق الوجهة المعطاة. الجواب: den.
3. Das Bild hängt an ______ Wand. (der / die)
   - صورة معلقة في موضع مع an وداتيف المؤنث der. الجواب: der.
4. Ich hänge das Bild an ______ Wand. (der / die)
   - شخص يعلق صورة على الجدار؛ an die وجهة مع المؤنث. الجواب: die.
5. Der Stuhl steht neben ______ Sofa. (dem / das)
   - موضع كرسي بجانب أريكة محايدة؛ neben dem Sofa. الجواب: dem.
6. Wir stellen den Stuhl neben ______ Sofa. (dem / das)
   - وضع كرسي بجانب أريكة؛ neben das Sofa وجهة. الجواب: das.

### DL-A2-11-T03

**النص:**

> 1. Das Buch **liegt / legt** auf dem Tisch.
> 2. Ich **stehe / stelle** den Schrank an die Wand.
> 3. Die Lampe **steht / stellt** neben dem Bett.
> 4. Sie **legt / liegt** die Zeitung auf den Tisch.

**نتيجة المراجعة:** أربعة أفعال مناسبة للفاعل والمفعول ووصف الموضع أو عملية الوضع.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG.

**البنود:**

1. Das Buch **liegt / legt** auf dem Tisch.
   - liegt وصف موضع؛ legt يتطلب هنا فاعل وضع ومفعولًا لا توفرهما الجملة. الجواب: liegt.
2. Ich **stehe / stelle** den Schrank an die Wand.
   - Ich stelle den Schrank؛ الخزانة مفعول وليست فاعل وصف موضع. الجواب: stelle.
3. Die Lampe **steht / stellt** neben dem Bett.
   - Lampe مفرد مؤنث و steht يصف موضعها؛ stellt لا يناسب هذا التركيب. الجواب: steht.
4. Sie **legt / liegt** die Zeitung auf den Tisch.
   - Sie legt die Zeitung؛ الصحيفة مفعول والوجهة منصوبة. الجواب: legt.

### DL-A2-11-T04

**النص:**

> ابدأ1 بـDas Buch، و2 بـIch، و3 بـDer Sessel. استعمل كل كتلة مرة وأضف النقطة دون تغيير الصيغ؛ توجد بدايات أخرى صحيحة خارج المطلوب المحدد هنا.
> 
> 1. auf dem Tisch / liegt / Das Buch
> 2. an die Wand / den Schrank / Ich / stelle
> 3. neben dem Fenster / steht / Der Sessel

**نتيجة المراجعة:** قُيدت البدايات دون إنكار ترتيبات ألمانية صحيحة أخرى؛ ثلاثة تراكيب مثبتة.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG.

**البنود:**

1. auf dem Tisch / liegt / Das Buch
   - البداية Das Buch مطلوبة، والفعل ثاني المواقع؛ بدايات أخرى قد تصح لكنها لا تطابق هذه المهمة. الجواب: Das Buch liegt auf dem Tisch..
2. an die Wand / den Schrank / Ich / stelle
   - Ich ثم stelle ثم den Schrank مع an die Wand؛ لا خلط بين المفعول والوجهة. الجواب: Ich stelle den Schrank an die Wand..
3. neben dem Fenster / steht / Der Sessel
   - Der Sessel ثم steht ثم neben dem Fenster؛ المكان داتيف والفعل مفرد. الجواب: Der Sessel steht neben dem Fenster..

### DL-A2-11-T05

**النص:**

> حدّد صحيحًا أو خطأ:
> 
> 1. Das Sofa steht an der Wand.
> 2. Das Wörterbuch liegt auf dem Boden.
> 3. Salma hängt das Bild über das Sofa.
> 4. Der Innenhof ist neben dem Eingang.
> 5. Die nächste Straßenbahnhaltestelle ist an der Ecke.

**نتيجة المراجعة:** خمسة أحكام بحسب نص Salma؛ أضيفت المحطة لدعم Q07 دون استنتاج مسافة.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG.

**البنود:**

1. Das Sofa steht an der Wand.
   - الأريكة بمحاذاة الجدار صراحة. الجواب: صحيح.
2. Das Wörterbuch liegt auf dem Boden.
   - القاموس على الطاولة لا أرضية الغرفة. الجواب: خطأ.
3. Salma hängt das Bild über das Sofa.
   - التعليق فوق الأريكة يتفق مع النص؛ لا وصف مكان سابق للصورة. الجواب: صحيح.
4. Der Innenhof ist neben dem Eingang.
   - الساحة بجانب المدخل كما في الاقتباس. الجواب: صحيح.
5. Die nächste Straßenbahnhaltestelle ist an der Ecke.
   - المحطة عند الزاوية؛ البند الجديد يسند Q07 مباشرة. الجواب: صحيح.

### DL-A2-11-T06

**النص:**

> أكمل من البنك، واستعمل كل كلمة مرة: **Wand — Bett — Nachttisch — Schreibtisch**.
> 
> 1. Das Bett steht an der ______.
> 2. Die Lampe steht neben dem ______.
> 3. Die Person legt das Buch auf den ______.
> 4. Sie stellt den Stuhl vor den ______.

**نتيجة المراجعة:** أربعة فراغات وبنك واضح؛ يميز مكان السرير والمصباح من وجهة الكتاب والكرسي.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, HANG.

**البنود:**

1. Das Bett steht an der ______.
   - الجدار Wand بعد an der؛ موضع السرير. الجواب: Wand.
2. Die Lampe steht neben dem ______.
   - Bett بعد neben dem؛ موضع المصباح. الجواب: Bett.
3. Die Person legt das Buch auf den ______.
   - Nachttisch بعد auf den؛ وجهة الكتاب لا المكتب. الجواب: Nachttisch.
4. Sie stellt den Stuhl vor den ______.
   - Schreibtisch بعد vor den؛ وجهة الكرسي لا مكان المصباح. الجواب: Schreibtisch.

### DL-A2-11-T07

**النص:**

> **أ — اختيار العبارة:** تريد أن تطلب من الجيران خفض الصوت:
> أ. Könnten Sie bitte etwas leiser sein? ب. Du bist mein Nachbar. ج. Ich bin sehr laut.
> 
> **ب — P02: كتابة فقط**
> 
> اكتب أربع جمل لموقف جوار خيالي، كتابة فقط: الجملة1 تقول إنك تسكن وسط المدينة؛ الجملة2 تحدد الساحة بجانب المدخل؛ الجملة3 تذكر أن الساحة صاخبة اليوم؛ الجملة4 تطلب من جار خفض الصوت قليلًا بـKönnten Sie bitte etwas leiser sein? استخدم Dativ للمواقع مع in وneben. لا تضف أن الجار وافق أو أن مشكلة الضجيج انتهت. لا جهر أو شريك أو إرسال شكوى أو معلومات سكن حقيقية مطلوبة.

**نتيجة المراجعة:** اختيار طلب مهذب ثم إنتاج أربعة أقوال كتابية بموقف صريح؛ لم تعد P02 مهمة غير مدعومة تحت وصف الغرفة.

**المراجع ذات الصلة:** LOCAL, PREP, MODAL.

**البنود:**

1. أ. Könnten Sie bitte etwas leiser sein? ب. Du bist mein Nachbar. ج. Ich bin sehr laut.
   - أ يطلب خفض الصوت؛ ب يخبر بعلاقة الجوار، وج يصف صوت المتكلم؛ فلا يطلبان خفضه.
2. P02، الجملة 1: Ich wohne in der Innenstadt.
   - الجملة 1 تسمي السكن في وسط المدينة مع in der Innenstadt؛ لا اسم مدينة أو عنوان حقيقي.
3. P02، الجملة 2: Der Innenhof ist neben dem Eingang.
   - الجملة 2 تحدد الساحة بجانب المدخل مع neben dem Eingang في الداتيف.
4. P02، الجملة 3: Heute ist es im Innenhof laut.
   - الجملة 3 تضيف ضجيج اليوم في نفس الساحة، مع im؛ ليست نسبة ضجيج حقيقي إلى Fadi أو Salma.
5. P02، الجملة 4: Könnten Sie bitte etwas leiser sein?
   - الجملة 4 طلب خفض الصوت بـ Könnten Sie … sein?؛ لا ادعاء استجابة ولا إلزام بالجهر في هذه المهمة.

### DL-A2-11-T08

**النص:**

> اكتب أربع جمل خبرية عن غرفة متخيلة ثم اقرأها جهرًا: الجملة1 تصف موضع أثاث بـstehen وعبارة مكان في Dativ؛ الجملة2 تصف موضع كتاب بـliegen وعبارة مكان في Dativ؛ الجملة3 تبدأ بـIch stelle وتذكر غرضًا ووجهة وضعه في Akkusativ؛ الجملة4 تبدأ بـIch lege وتذكر غرضًا آخر ووجهة وضعه في Akkusativ. اختر حروف الجر من قائمة الدرس. Wo وWohin سؤالان يساعدانك على اختيار المعنى، ولا يلزم إضافتهما كجملتين إلى جوابك. لا نقل أثاث فعلي أو عنوان شخصي أو تسجيل مطلوب.

**نتيجة المراجعة:** أربع جمل خبرية مع الجهر، لا ست جمل بإضافة Wo/Wohin ولا أسئلة إلزامية. النموذج 136 حرفًا فوق حد 120، وطلب الأداء مطابق.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE.

**البنود:**

1. الجملة 1: Das Sofa steht an der Wand.
   - الجملة 1 تصف موضع الأريكة بـ steht و an der Wand في الداتيف المؤنث.
2. الجملة 2: Das Buch liegt auf dem Tisch.
   - الجملة 2 تصف موضع كتاب بـ liegt و auf dem Tisch في الداتيف المذكر.
3. الجملة 3: Ich stelle den Sessel neben das Sofa.
   - الجملة 3 تبدأ Ich stelle؛ den Sessel مفعول و neben das Sofa وجهة في نصب المحايد.
4. الجملة 4: Ich lege die Zeitung auf den Nachttisch.
   - الجملة 4 تبدأ Ich lege؛ die Zeitung مفعول آخر، و auf den Nachttisch وجهة في نصب المذكر.

### DL-A2-11-Q01

**النص:**

> أي سؤال تستخدمه لوصف مكان ثابت للكتاب؟

**نتيجة المراجعة:** Wo يسأل عن موضع الكتاب في هذا المثال؛ لا نحكم بأن كل نشاط داخل مكان يجب أن يكون ساكنًا.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** Wo?

**البدائل:**

1. Wo? — الصحيح
   - Wo يسأل عن موضع الكتاب في المثال.
2. Wohin? — غير المختار في هذا السؤال
   - Wohin يسأل عن الوجهة وليس الموضع المطلوب.
3. Wann? — غير المختار في هذا السؤال
   - Wann يسأل عن الوقت لا المكان.

### DL-A2-11-Q02

**النص:**

> أكمل: Das Buch liegt auf ___ Tisch.

**نتيجة المراجعة:** auf هنا تصف موضع الكتاب، وهي من حروف الجر المتغيرة؛ لذلك نستخدم Dativ للمذكر: auf dem Tisch. لا نعمم ذلك على كل حرف جر.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** dem

**البدائل:**

1. den — غير المختار في هذا السؤال
   - den للمذكر المنصوب؛ هنا وصف موضع على الطاولة.
2. dem — الصحيح
   - dem داتيف مذكر يناسب موضع الكتاب.
3. das — غير المختار في هذا السؤال
   - das لا يطابق جنس Tisch المذكر ولا داتيفه.

### DL-A2-11-Q03

**النص:**

> أكمل: Ich lege das Buch auf ___ Tisch.

**نتيجة المراجعة:** auf هنا تحدد وجهة وضع الكتاب، فتأتي مع Akkusativ للمذكر: auf den Tisch. ليست الحركة وحدها قاعدة لكل حرف جر.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** den

**البدائل:**

1. dem — غير المختار في هذا السؤال
   - dem داتيف مكان، لا وجهة الوضع المحددة.
2. der — غير المختار في هذا السؤال
   - der ليس نصب المذكر Tisch بعد auf هنا.
3. den — الصحيح
   - den نصب المذكر مع وجهة auf.

### DL-A2-11-Q04

**النص:**

> اختر الفعل الصحيح: Die Lampe ___ neben dem Bett.

**نتيجة المراجعة:** steht يصف مكانًا ثابتًا لشيء قائم.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** steht

**البدائل:**

1. stellt — غير المختار في هذا السؤال
   - stellt يحتاج في هذا الاستعمال إلى فاعل وضع ومفعول؛ ليس وصف موضع المصباح.
2. steht — الصحيح
   - steht يصف موضع مصباح قائم.
3. legen — غير المختار في هذا السؤال
   - legen مصدر وليس فعلًا مصرفًا مع Die Lampe، ومعناه الوضع لا الموضع.

### DL-A2-11-Q05

**النص:**

> أي جملة تصف نقل الخزانة إلى الحائط؟

**نتيجة المراجعة:** stellen يصف وضع الخزانة؛ den Schrank مفعول به، و an die Wand عبارة وجهة في Akkusativ مع حرف جر متغير.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** Ich stelle den Schrank an die Wand.

**البدائل:**

1. Ich stelle den Schrank an die Wand. — الصحيح
   - وضع الخزانة بمحاذاة الجدار لا مجرد موقعها؛ المفعول وعبارة الوجهة في النصب.
2. Der Schrank steht an der Wand. — غير المختار في هذا السؤال
   - جملة صحيحة لكنها تصف موضع الخزانة لا عملية وضعها.
3. Ich stehe an den Schrank. — غير المختار في هذا السؤال
   - stehe لا يصف نقل الخزانة، و an den Schrank لا يطابق وصف وقوف هنا.

### DL-A2-11-Q06

**النص:**

> أين يقع القاموس في غرفة Salma؟

**نتيجة المراجعة:** يذكر النص das Wörterbuch liegt auf dem Tisch.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** على الطاولة.

**البدائل:**

1. تحت السرير. — غير المختار في هذا السؤال
   - تحت السرير غير مذكور للقاموس.
2. بجانب المدخل. — غير المختار في هذا السؤال
   - بجانب المدخل موقع الساحة لا القاموس.
3. على الطاولة. — الصحيح
   - على الطاولة يطابق القراءة.

### DL-A2-11-Q07

**النص:**

> أين تقع أقرب محطة ترام؟

**نتيجة المراجعة:** النص يقول an der Ecke.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** عند الزاوية.

**البدائل:**

1. خلف المنزل. — غير المختار في هذا السؤال
   - خلف المنزل موقع المساحة الخضراء لا المحطة.
2. عند الزاوية. — الصحيح
   - عند الزاوية هو التفصيل المذكور.
3. داخل المطبخ. — غير المختار في هذا السؤال
   - داخل المطبخ غير مذكور.

### DL-A2-11-Q08

**النص:**

> في **Ich lege mein Buch auf den Nachttisch**، هل تصف الجملة مكانًا ثابتًا أم انتقالًا؟

**نتيجة المراجعة:** legen مع auf den يشير إلى نقل الكتاب، أي Wohin و Akkusativ.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** انتقال الكتاب إلى مكان.

**البدائل:**

1. انتقال الكتاب إلى مكان. — الصحيح
   - وجهة وضع الكتاب على منضدة السرير؛ الجملة مع lege.
2. مكان الكتاب الثابت. — غير المختار في هذا السؤال
   - ليست مجرد خبر عن موضع الكتاب بفعل liegt.
3. وقت وضع الكتاب فقط. — غير المختار في هذا السؤال
   - لا يوجد وقت وضع محدد، وليست الجملة عن الوقت فقط.

### DL-A2-11-Q09

**النص:**

> كيف تطلب من جار خفض الصوت بأدب؟

**نتيجة المراجعة:** هذه صيغة طلب مهذبة وواضحة.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** Könnten Sie bitte etwas leiser sein?

**البدائل:**

1. Du bist mein Nachbar. — غير المختار في هذا السؤال
   - تصريح بعلاقة جوار لا مطالبة بخفض الصوت.
2. Ich bin sehr laut. — غير المختار في هذا السؤال
   - وصف صوت المتكلم لا طلب للجار.
3. Könnten Sie bitte etwas leiser sein? — الصحيح
   - طلب مهذب بصيغة الاحترام؛ المصدر sein في النهاية.

### DL-A2-11-Q10

**النص:**

> أي مثال يستخدم Dativ لمكان ثابت؟

**نتيجة المراجعة:** المثال الصحيح هو Die Lampe steht neben dem Bett. يصف موضع المصباح؛ neben هنا مع Dativ للمحايد: dem Bett. المثالان الآخران يصفان وجهة وضع شيء.

**المراجع ذات الصلة:** LOCAL, CASE, STAND, LIE, MODAL.

**الجواب:** Die Lampe steht neben dem Bett.

**البدائل:**

1. Ich stelle die Lampe neben das Bett. — غير المختار في هذا السؤال
   - neben das Bett وجهة مع stelle، لا الموضع الداتيف.
2. Die Lampe steht neben dem Bett. — الصحيح
   - Die Lampe steht neben dem Bett هو المثال الصحيح الثاني؛ أُصلحت الإحالة الخاطئة إلى الأول.
3. Ich lege das Buch auf den Tisch. — غير المختار في هذا السؤال
   - auf den Tisch وجهة مع lege لا وصف مكان.

### DL-A2-11-P01

**النص:**

> اكتب أربع جمل خبرية عن غرفة متخيلة ثم اقرأها جهرًا: الجملة1 تصف موضع أثاث بـstehen وعبارة مكان في Dativ؛ الجملة2 تصف موضع كتاب بـliegen وعبارة مكان في Dativ؛ الجملة3 تبدأ بـIch stelle وتذكر غرضًا ووجهة وضعه في Akkusativ؛ الجملة4 تبدأ بـIch lege وتذكر غرضًا آخر ووجهة وضعه في Akkusativ. اختر حروف الجر من قائمة الدرس. Wo وWohin سؤالان يساعدانك على اختيار المعنى، ولا يلزم إضافتهما كجملتين إلى جوابك. لا نقل أثاث فعلي أو عنوان شخصي أو تسجيل مطلوب.

**نتيجة المراجعة:** مطابقة المصدر والمعايير والنموذج ونمط الدليل؛ الحد الحرفي والإقرار ليسا تقييمًا آليًا للغة أو النطق.

**المراجع ذات الصلة:** LOCAL, CASE, MODAL.

**المعايير:**

1. أربع جمل خبرية بالترتيب: أثاث مع stehen، وكتاب مع liegen، ثم غرض مع Ich stelle وآخر مع Ich lege؛ قرأت الوصف جهرًا.
   - أربع جمل بالترتيب نفسه في T08 ونموذج 136 حرفًا فوق 120؛ الجهر شرط صريح في المصدر لا إضافة خفية.
2. يمكن فهم موضع الغرض في الجملتين الأوليين ووجهة وضعه في الأخيرتين؛ الغرفة خيالية ولا يتطلب الجواب عنوانًا أو نقلًا فعليًا.
   - غرفة متخيلة وعلاقتان مكانيتان وعمليتا وضع؛ لا بيانات سكن أو تغيير أثاث واقعي.
3. مع حروف الدرس المتغيرة: عبارتا مكان في Dativ وعبارتا وجهة في Akkusativ؛ الفاعل والمفعول وفعل الموضع أو الوضع مناسبة.
   - الداتيف في الموضع والنصب في الوجهة مع الحروف المحددة؛ المفعول متميز عن عبارة الجر، ولا تصحيح آلي.

**الدليل المحلي:** حد 120 حرفًا؛ الجهر مطلوب؛ لا تسجيل مطلوب.

### DL-A2-11-P02

**النص:**

> اكتب أربع جمل لموقف جوار خيالي، كتابة فقط: الجملة1 تقول إنك تسكن وسط المدينة؛ الجملة2 تحدد الساحة بجانب المدخل؛ الجملة3 تذكر أن الساحة صاخبة اليوم؛ الجملة4 تطلب من جار خفض الصوت قليلًا بـKönnten Sie bitte etwas leiser sein? استخدم Dativ للمواقع مع in وneben. لا تضف أن الجار وافق أو أن مشكلة الضجيج انتهت. لا جهر أو شريك أو إرسال شكوى أو معلومات سكن حقيقية مطلوبة.

**نتيجة المراجعة:** مطابقة المصدر والمعايير والنموذج ونمط الدليل؛ الحد الحرفي والإقرار ليسا تقييمًا آليًا للغة أو النطق.

**المراجع ذات الصلة:** LOCAL, CASE, MODAL.

**المعايير:**

1. أربع جمل: سكن في وسط المدينة، وساحة بجانب المدخل، وضجيج فيها اليوم، ثم طلب خفض الصوت؛ كتابة فقط.
   - ثلاث جمل عن الوسط والساحة والضجيج ثم طلب؛ أربع جمل في T07 ب ونموذج 132 حرفًا فوق 110، كتابة فقط.
2. المكان والمشكلة والطلب واضحة في موقف خيالي؛ لا ادعاء موافقة الجار أو انتهاء الضجيج ولا بيانات سكن حقيقية.
   - لا ينقل ضجيج المثال إلى منزل حقيقي ولا يفترض استجابة الجار.
3. عبارات المواقع مع in/neben في Dativ، وطلب يبدأ بـKönnten Sie مع bitte etwas leiser وsein في النهاية.
   - in der / neben dem / im مواضع، و Könnten Sie … sein? طلب؛ معيار محدد مدعوم بالمصدر.

**الدليل المحلي:** حد 110 حرفًا؛ كتابة فقط دون جهر؛ لا تسجيل مطلوب.

### DL-A2-11-AUD-PHR-01

**النص:**

> Der Nachbar. Die Nachbarin. Die Nachbarschaft. Die Innenstadt. Die Straßenbahnhaltestelle. Die Miete. Der Umzug. Der Schrank. Das Regal. Das Sofa. Der Teppich. Die Wand. Der Boden. Der Innenhof. Die Grünfläche. Der Sessel. Der Schreibtisch. Der Nachttisch. Einrichten. Richtet ein. Hängen. Hängt. Laut. Leise.

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد؛ تعداد المفردات ليس كله جملًا كاملة.

**البنود:**

1. Der Nachbar.
   - Nachbar/Nachbarin مذكر ومؤنث، وجمعاهما Nachbarn/Nachbarinnen؛ زوجان في صف واحد لا هوية متعلم.
2. Die Nachbarin.
   - Nachbar/Nachbarin مذكر ومؤنث، وجمعاهما Nachbarn/Nachbarinnen؛ زوجان في صف واحد لا هوية متعلم.
3. Die Nachbarschaft.
   - وُضحت دلالات الجوار والجيرة والعلاقات، وأن جمع Nachbarschaften قليل الاستعمال وفق المرجع.
4. Die Innenstadt.
   - Innenstadt مؤنث وجمعه Innenstädte؛ وسط المدينة، لا اسم مدينة بعينها.
5. Die Straßenbahnhaltestelle.
   - Straßenbahnhaltestelle مؤنث وجمعه Straßenbahnhaltestellen؛ محطة ترام، وليس زمن رحلة أو مسافة.
6. Die Miete.
   - Miete مؤنث وجمعه Mieten؛ قيمة/بدل الإيجار هنا، لا إثبات سعر أو عقد.
7. Der Umzug.
   - Umzug مذكر وجمعه Umzüge؛ الانتقال إلى مسكن في السياق، لا كل معنى للكلمة.
8. Der Schrank.
   - Schrank مذكر وجمعه Schränke؛ خزانة مع اختلاف الأداة والحالة حسب الوظيفة.
9. Das Regal.
   - Regal محايد وجمعه Regale؛ وُسعت الترجمة إلى وحدة رفوف/رف دون تغيير لفظ التسجيل.
10. Das Sofa.
   - Sofa محايد وجمعه Sofas؛ الأريكة، و neben das Sofa يحدد وجهة في المثال.
11. Der Teppich.
   - Teppich مذكر وجمعه Teppiche؛ سجادة موضعها على الأرض في الحوار.
12. Die Wand.
   - Wand مؤنث وجمعه Wände؛ an der لمكان و an die لوجهة التعليق أو الوضع.
13. Der Boden.
   - Boden مذكر وجمعه Böden؛ أرضية في السياق لا سطح طاولة.
14. Der Innenhof.
   - Innenhof مذكر وجمعه Innenhöfe؛ ساحة داخلية، وتختلف علاقتها المكانية بين الأمثلة المستقلة.
15. Die Grünfläche.
   - Grünfläche مؤنث وجمعها Grünflächen؛ مساحة خضراء، لا دليل أنها حديقة عامة كبيرة.
16. Der Sessel.
   - Sessel مذكر وجمعه ثابت الشكل؛ كرسي بذراعين، غير لفظ Stuhl الأعم.
17. Der Schreibtisch.
   - Schreibtisch مذكر وجمعه Schreibtische؛ مكتب/طاولة كتابة، لا غرفة مكتب.
18. Der Nachttisch.
   - Nachttisch مذكر وجمعه Nachttische؛ منضدة بجانب السرير، وهي وجهة الكتاب في الاستماع.
19. Einrichten.
   - einrichten مصدر و richtet ein مضارع مفرد غائب في سياق التأثيث؛ ليس مصدرًا مع ein مفصولة.
20. Richtet ein.
   - einrichten مصدر و richtet ein مضارع مفرد غائب في سياق التأثيث؛ ليس مصدرًا مع ein مفصولة.
21. Hängen.
   - hängen / hängt يصلحان لمعنى التعليق أو الموضع؛ لا تختار الحالة من شكل الفعل وحده.
22. Hängt.
   - hängen / hängt يصلحان لمعنى التعليق أو الموضع؛ لا تختار الحالة من شكل الفعل وحده.
23. Laut.
   - laut/leise متعلقان بالصوت هنا: صاخب/هادئ؛ leiser خفض نسبي للصوت لا صمت مطلق.
24. Leise.
   - laut/leise متعلقان بالصوت هنا: صاخب/هادئ؛ leiser خفض نسبي للصوت لا صمت مطلق.

### DL-A2-11-AUD-MODEL-01

**النص:**

> Wo liegt das Buch? Auf dem Tisch. Wohin lege ich das Buch? Auf den Tisch. Der Schrank steht an der Wand. Ich stelle den Schrank an die Wand. Ich wohne in einer ruhigen Nachbarschaft. Die Miete ist hoch. Der Innenhof ist neben dem Haus. Meine Nachbarin ist sehr freundlich. Könnten Sie bitte etwas leiser sein?

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد؛ تعداد المفردات ليس كله جملًا كاملة.

**البنود:**

1. Wo liegt das Buch?
   - السؤال Wo عن موضع الكتاب، و liegt فاعله das Buch؛ ليس سؤال اتجاه أو وقت.
2. Auf dem Tisch.
   - جواب مختصر على Wo:auf dem Tisch، والداتيف للمذكر؛ ليس جملة ناقصة يجب رفضها في حوار.
3. Wohin lege ich das Buch?
   - Wohin مع lege يطلب وجهة وضع الكتاب؛ ich فاعل و das Buch مفعول.
4. Auf den Tisch.
   - auf den Tisch وجهة مع حرف متغير؛ لا يعني أن كل Wohin مع كل حرف يفرض den.
5. Der Schrank steht an der Wand.
   - Der Schrank فاعل و steht يصف موضعه بمحاذاة الجدار؛ an der Wand مكان.
6. Ich stelle den Schrank an die Wand.
   - Ich فاعل و den Schrank مفعول و an die Wand وجهة؛ stelle ليست stehe.
7. Ich wohne in einer ruhigen Nachbarschaft.
   - حي هادئ/جوار هادئ:in einer ruhigen Nachbarschaft، عبارة مكان بداتيف مؤنث مع تنكير وصفة معطاة، لا درس شامل في تصريف الصفات.
8. Die Miete ist hoch.
   - ارتفاع الإيجار مثال لغوي لا سعر فعلي أو مقارنة بين مدن.
9. Der Innenhof ist neben dem Haus.
   - الساحة بجانب المنزل في هذا المثال المستقل؛ لا يبدل مكانها بجانب المدخل في القراءة.
10. Meine Nachbarin ist sehr freundlich.
   - جارتي ودودة مثال بضمير الملكية، لا صفة لجميع الجيران أو دليل مساعدة محددة.
11. Könnten Sie bitte etwas leiser sein?
   - طلب مهذب بصيغة الاحترام؛ leiser أقل صوتًا و sein مصدر، وليس تصريحًا بأن الجار التزم.

### DL-A2-11-AUD-DLG-01

**النص:**

> Wie gefällt dir die neue Wohnung? Sehr gut. Das Sofa steht neben dem Fenster, und der Teppich liegt auf dem Boden. Wo steht der Schrank? Er steht an der Wand. Ich möchte das Regal neben das Sofa stellen. Und wie sind die Nachbarn? Sehr freundlich. Die Nachbarschaft ist ruhig, und es gibt einen kleinen Innenhof.

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد؛ تعداد المفردات ليس كله جملًا كاملة.

**البنود:**

1. Wie gefällt dir die neue Wohnung?
   - Nora تسأل Fadi عن إعجابه بالمسكن؛ dir مع gefällt، لا طلب تغيير موقع أثاث.
2. Sehr gut. Das Sofa steht neben dem Fenster, und der Teppich liegt auf dem Boden.
   - Fadi معجب؛ الأريكة بجانب النافذة والسجادة على الأرض، مع steht/liegt بحسب الغرض؛ لا ننقل موضع أريكة Salma إلى هنا.
3. Wo steht der Schrank?
   - Wo تسأل عن موضع الخزانة تحديدًا، لا وجهة نقلها.
4. Er steht an der Wand. Ich möchte das Regal neben das Sofa stellen.
   - Er يعود إلى Schrank بمحاذاة الجدار؛ möchte … stellen رغبة في وضع Regal بجانب الأريكة، لا إخبار بأنه موضوع هناك الآن.
5. Und wie sind die Nachbarn?
   - سؤال عن الجيران بصيغة Wie، لا أين يسكنون أو عددهم.
6. Sehr freundlich. Die Nachbarschaft ist ruhig, und es gibt einen kleinen Innenhof.
   - يصفهم بالود والحي بالهدوء ويذكر وجود ساحة صغيرة؛ لا موضع محدد لهذه الساحة أو وعد بالمساعدة.

### DL-A2-11-AUD-READ-01

**النص:**

> Salma wohnt in der Innenstadt. Die nächste Straßenbahnhaltestelle ist an der Ecke. Nach dem Umzug richtet sie ihr Wohnzimmer ein. Das Sofa steht an der Wand. Ein kleiner Tisch steht vor dem Sofa, und das Wörterbuch liegt auf dem Tisch. Salma hängt ein Bild über das Sofa. Ihre Nachbarin hilft ihr. Sie sagt: „Die Grünfläche ist hinter dem Haus, und der Innenhof ist neben dem Eingang.“ Salma ist froh, denn die Nachbarschaft ist ruhig.

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد؛ تعداد المفردات ليس كله جملًا كاملة.

**البنود:**

1. Salma wohnt in der Innenstadt.
   - Salma تسكن وسط المدينة؛ لا اسم مدينة أو عنوان شخصي.
2. Die nächste Straßenbahnhaltestelle ist an der Ecke.
   - أقرب محطة ترام عند الزاوية؛ لا زمن مشي أو خلف المنزل.
3. Nach dem Umzug richtet sie ihr Wohnzimmer ein.
   - تؤثث غرفة الجلوس بعد الانتقال؛ richtet … ein وليس تغيير ترتيب الكلمات كيفما اتفق.
4. Das Sofa steht an der Wand.
   - أريكتها بمحاذاة الجدار؛ هذا موضع لا فعل نقل.
5. Ein kleiner Tisch steht vor dem Sofa, und das Wörterbuch liegt auf dem Tisch.
   - طاولة صغيرة أمام الأريكة، والقاموس على الطاولة؛ لا على الأرض أو بجانب المدخل.
6. Salma hängt ein Bild über das Sofa.
   - تعلق صورة فوق الأريكة؛ das Sofa بعدüber وجهة في النصب، لا وصف لحالة الصورة قبل التعليق.
7. Ihre Nachbarin hilft ihr.
   - جارتها تساعدها؛ ihr تشير إلى Salma، وليس إلى جماعة جيران غير مذكورة.
8. Sie sagt: „Die Grünfläche ist hinter dem Haus, und der Innenhof ist neben dem Eingang.“
   - الاقتباس يحدد المساحة الخضراء خلف المنزل والساحة بجانب المدخل؛ لا يُسأل عن حسم هوية المتكلمة من Sie وحدها.
9. Salma ist froh, denn die Nachbarschaft ist ruhig.
   - Salma سعيدة بسبب هدوء الجوار؛ denn يربط السبب، لا نتيجة سعر الإيجار أو مساحة الشقة.

### DL-A2-11-AUD-LST-01

**النص:**

> Im Schlafzimmer steht das Bett an der Wand. Eine Lampe steht neben dem Bett. Ich lege mein Buch auf den Nachttisch. Dann stelle ich den Stuhl vor den Schreibtisch. Im Innenhof spielen zwei Kinder. Die Nachbarn sind freundlich.

**نتيجة المراجعة:** مطابقة نصية مع المصدر؛ الكلمات والأصوات والمسارات والحالة التاريخية محفوظة. لا استماع أو توليد أو اعتماد جديد؛ تعداد المفردات ليس كله جملًا كاملة.

**البنود:**

1. Im Schlafzimmer steht das Bett an der Wand.
   - السرير بمحاذاة الجدار داخل غرفة النوم؛ Im = in dem، وليس اتجاه نقل السرير.
2. Eine Lampe steht neben dem Bett.
   - مصباح بجانب السرير، مع neben dem Bett؛ لا نحوله إلى وجهة نصبية.
3. Ich lege mein Buch auf den Nachttisch.
   - المتكلم يضع كتابه على منضدة السرير؛ على den Nachttisch وجهة، ولا نص يحدد اسم الشخص أو جنسه.
4. Dann stelle ich den Stuhl vor den Schreibtisch.
   - ثم يضع الكرسي أمام المكتب؛ Stuhl مفعول و vor den Schreibtisch وجهة، لا جانب المكتب.
5. Im Innenhof spielen zwei Kinder.
   - طفلان يلعبان في الساحة؛ الحركة داخلها لا تنفي الداتيف Im Innenhof.
6. Die Nachbarn sind freundlich.
   - الجيران ودودون؛ لا يقول إنهم ساعدوا في نقل الأثاث أو وافقوا على طلب خفض الصوت.

## البصمات والحفظ

```json
{
  "sourceHashes": {
    "content/A2/lesson-11-housing-neighborhood-wohin.md": "ff56649ddff4557329ba755b0bdc417079c5174d320b1eabb9af283b7e7c78f3",
    "content/A2/lesson-11-housing-neighborhood-wohin.assessment.json": "f68ddaf7cb7b621f917f534ef84626edbdf80446aeb32e5f4050a10bb8f2f839"
  },
  "audioSnapshotHashes": {
    "DL-A2-11-AUD-PHR-01": "5c50c70d5ff0cc7f7ed709e8950859626ccb635efd0f4b392adf79dc5237bcf4",
    "DL-A2-11-AUD-MODEL-01": "29d7de02c33907a5b407db70931fdb4534bfabc007391c64cdc780314eabab74",
    "DL-A2-11-AUD-DLG-01": "316dd6445335d11e1c52c1714d63e209460f261e87695ced97dbdd0d619d667b",
    "DL-A2-11-AUD-READ-01": "bec89a4a62c61b2c34e39d2a7dc2ced823c629acd0c6daf25613fb92be0f5f0b",
    "DL-A2-11-AUD-LST-01": "709c99c346ca53a57f97c921304a28c613699cd01a8b12ec34429940c245862b"
  },
  "preservation": {
    "baseline": "ae107375443ae586c2a12444761f34a9e5d8b39c",
    "otherLessonsUnchanged": 52,
    "otherCatalogRowsUnchanged": 1060,
    "mp3GitHashesUnchanged": 474,
    "playlistBytesUnchanged": true,
    "audioRegisterChanges": [
      {
        "assetId": "DL-A2-11-AUD-PHR-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-11-AUD-MODEL-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-11-AUD-DLG-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-11-AUD-READ-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-11-AUD-LST-01",
        "fields": [
          "source_line"
        ]
      }
    ],
    "answerIndicesUnchanged": true,
    "unchangedOptionTexts": 30,
    "changedOptionTexts": [],
    "protectedFilesCompared": 115,
    "existingAudioConsistencyAssertionsUnchanged": true
  }
}
```
