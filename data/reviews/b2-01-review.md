# CR43 — مراجعة B2.1 الفردية والتراكمية

## إيصال رفع CR43 — 2026-10-09

- **التنفيذ:** `db74c45b218cd8c795bdd1edda3201d9b10ccfa8`؛ **التقرير والفحوص:** `0861e14d26acddd36c1a2d62f7d71d25a78714ee`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR43 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `0861e14`. أظهر GitHub فشل نشر التنفيذ `db74c45` والتقرير `0861e14` في Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و43 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,147,924` بايت، `b2-01-v2`، `v92`. **185 حالة axe** وصفر مخالفات للقواعد المختارة مع **132 ظهورًا غير حاسم/324 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 99 وحدة/39 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و9 مراجع مقروءة بالكامل ومرجع بجزأين 0 و1 من 4 (مع استبعاد رابط 404 واحد). قُيّد `T02.1` بـ`*(رابط من كلمة واحدة)*`، وحُوّلت جمل `T06` إلى الألمانية لتطابق المفاتيح الألمانية مع حذف تكرار `am Rand` و`den` من المفتاح، ووُسّع `T04` إلى 5 بنود و`T07` إلى 4 بنود. `P01` فقرة من 5 جمل كتابة فقط (`430` حرفًا)، و`P02` إحاطة من 5 جمل لزميل استنادًا إلى `T06` مع الجهر (`594` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 160/190 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.1؛ خمسة أصول/12 مقطعًا بأصوات `Hana` (`voice-02`) و`Karim` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-01-review.*` والحارس والفهرس والتوثيق والخطة `2.49` ووثيقتا التسليم محدثة. التغطية **42/53 درسًا والبوابة منفصلة، 11 درسًا متبقيًا في B2**. التالي **CR44/B2.2** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


**أحدث مراجعة محتوى CR43 — 2026-10-09:** رُوجع **B2.1 — إدارة الوقت والعادات والقراءة: indem وdadurch, dass** (أول دروس B2) في **99 وحدة و39 بندًا داخل التمارين و10 أجزاء نموذج، و30 خيارًا و6 معايير**، بالاستناد إلى **9 مراجع مقروءة بالكامل ومرجع واحد قُرئ منه الجزآن 0 و1 من 4** (واستبعاد رابط 404 واحد). قُيّد البند الأول في `T02` بـ`*(رابط من كلمة واحدة)*` ليتعين `indem`، وحُوّلت جمل `T06` إلى الألمانية لتطابق المفاتيح الألمانية مع حذف تكرار `am Rand` و`den` من المفتاح، ووُسّع `T04` إلى 5 بنود و`T07` إلى 4 بنود. صارت **P01 فقرة مكتوبة من 5 جمل عن تحسين عادة في الوقت أو القراءة (430 حرفًا، كتابة فقط)** و**P02 إحاطة من 5 جمل لزميل استنادًا إلى T06 مع اقتراح لتقليل الإشعارات كتابة وجهر (594 حرفًا)**. الخيارات الـ30 والفهارس والروابط و80% وحدا 160/190 محفوظة؛ `b2-01-v2` و`v92`، وخمسة أصول/12 مقطعًا معلقة بأصوات `Hana`/`Karim` المحفوظة دون توليد أو استماع أو اعتماد. **الحملة 42/53 درسًا والبوابة منفصلة؛ تبقى 11 درسًا في B2، والتالي CR44/B2.2.** الفحوص لا تعني دمج PR#1 أو اكتمال المشروع.

**التنفيذ المرفوع:** `db74c45b218cd8c795bdd1edda3201d9b10ccfa8` على `arena/01a1036f-deutschlern`. يرفع هذا التقرير فور فحصه بعنوان `Record CR43 granular B2.1 review and cumulative checks` ثم يُوثّق إيصال الرفع. PR#1 غير مدمجة.

## التصحيحات وحدود الاستنتاج

- قُيّد البند الأول في `T02` بـ`*(رابط من كلمة واحدة)*` ليتعين `indem`.
- حُوّلت جمل `T06` إلى الألمانية لتطابق المفاتيح الألمانية الخمسة، وحُذف تكرار `am Rand` و`den` من المفتاح.
- وُسّع `T04` إلى 5 بنود و`T07` إلى 4 بنود ليشمل `indem` و`dadurch, dass` في موقعين و`um … zu` للغاية.
- فُصلت `P01` (فقرة من 5 جمل عن تحسين عادة: كتابة فقط) عن `P02` (إحاطة من 5 جمل لزميل استنادًا إلى `T06` مع اقتراح لتقليل الإشعارات: كتابة وجهر)، وطُوبق نص التمرين والمعايير والنموذجان.

## الفحوص التراكمية — CR43

- **PASS:** البناء والتحقق، و43 حارسًا (بما فيها `tools/test_b2_01_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,147,924 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` (ظهر التذبذب التاريخي لمحدد الملفات في 390px مرة واحدة ثم نجح عند الإعادة دون تعديل `tools/test_forms_keyboard.cjs`).
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v92` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-01-v1` محفوظ لكنه لا يمنح إتقان `b2-01-v2` أو يفتح `B2.2`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-02-career-formal-communication-konjunktiv1` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 430/594 حرفًا فوق حدَّي 160/190 حرفًا.
- **axe والعرض الضيق:** **185 حالة** وصفر مخالفات للقواعد المختارة، مع **132 ظهورًا غير حاسم تشمل 324 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `db74c45b218cd8c795bdd1edda3201d9b10ccfa8` وتطابق HEAD/origin. أظهر الاستعلام الصريح بالـSHA فشل Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

## الحفظ والحدود

مقارنة بالأساس `c1fc4482eb42247b0175339d42f93427e95ee2f7`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.1 وبقي `DL-B2-01-AUD-PHR-01` ثابتًا. حُفظت 590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Hana` (`voice-02`) و`Karim` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/12 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

- مراجعة نصية مصدرية بالذكاء الاصطناعي؛ ليست شهادة CEFR أو WCAG أو اختبارًا لمتعلمين حقيقيين، ولا مراجع بشري شرطًا للاستمرار.
- 9 مراجع مقروءة بالكامل ومرجع واحد (Lingolia Commas) قُرئ منه الجزآن 0 و1 من 4 فقط؛ واستُبعد رابط Duden واحد أعاد 404. المراجع المعجمية المباشرة تخص الألفاظ المسماة (Priorität وAblenkung وUnterbrechung وÜberblick وNotiz وbündeln وbewältigen وpriorisieren وabschalten) لا كل كلمة في الجدول.
- خمسة أصول/12 مقطعًا معلقة ومحفوظة بأصوات Hana (voice-02) وKarim (voice-03) والسرد (voice-02) والاستماع (voice-03)؛ فحص MP3 والتشغيل الآلي الصامت ومطابقة التفريغ ليست استماعًا أو اعتمادًا صوتيًا.
- الحد الأدنى للحروف (160/190) والإقرارات الذاتية والجهر في P02 لا تصحح عدد الجمل أو القواعد أو النطق آليًا.
- 185 حالة axe وصفر مخالفات للقواعد المختارة، مع 132 ظهورًا غير حاسم تشمل 324 ظهورًا لعقد؛ ليست مخالفات مؤكدة ولا شهادة وصول شاملة.
- فحوص 320×900 و568×320 و1440×900 و390×844 تتم عبر CSS viewports في Chromium وليست هواتف فعلية أو تكبير متصفح أصليًا؛ تحديث v42 إلى v92 fixture محدد وليس كل مسار تاريخي. حدث التذبذب التاريخي المعروف لمحدد الملفات الأصلي في 390px مرة واحدة ثم نجح عند الإعادة دون تعديل ملف الاختبار.
- نشر التنفيذ db74c45 فشل في Vercel بسبب حد النشر اليومي (Deployment rate limited — retry in 24 hours.) وdeployments=[]؛ لا إعادة نشر آلية ولا شراء ترقية، ولم تختبر الواجهة البعيدة أو Production، وPR#1 غير مدمجة.

## المراجع ونطاق القراءة

- **CONJ — Lingolia — Conjunctions – Word Order in German** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions): يصنف indem وdass وdamit ضمن الروابط التابعة (Subjunctions) التي يتأخر فيها الفعل المصرف إلى نهاية الجملة التابعة، ويصنف dadurch ضمن الظروف الرابطة (Conjunctive Adverbs) التي يتقدم بعدها الفعل المصرف في الجملة الرئيسية. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **COMMA — Lingolia — When to Use Commas in German** [3](https://deutsch.lingolia.com/en/writing/commas): قُرئ الجزآن 0 و1 من 4: وجوب الفاصلة بين الجملة الرئيسية والجملة التابعة المبدوءة بـdass، ووجوب الفاصلة قبل um وohne عندما تقدمان مصدرًا مع zu وبعد ظروف الإشارة الحرفية مثل daran/darum/darauf (وبالقياس البنيوي dadurch, dass). لم يُقرأ الجزآن 2 و3. **قرئت أجزاء محددة فقط**؛ الأجزاء [0, 1] من 4، بتاريخ 2026-10-09.
- **INF — Lingolia — Der Infinitiv mit/ohne zu in der deutschen Sprache** [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv): يشرح المصدر مع zu، ودخول zu بين جزأي الفعل المنفصل (مثل auszuschalten وnachzuschlagen)، والإحالة إلى جمل المصدر مع um … zu. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **PRIORITAET — Duden — Priorität** [PRIORITAET](https://www.duden.de/rechtschreibung/Prioritaet): اسم مؤنث جمعُه die Prioritäten؛ يدل على الأولوية أو الأسبقية، وشاع في الجمع بتعبير Prioritäten setzen/festlegen. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **ABLENKUNG — Duden — Ablenkung** [ABLENKUNG](https://www.duden.de/rechtschreibung/Ablenkung): اسم مؤنث جمعُه die Ablenkungen؛ يدل على صرف الانتباه أو التشتيت. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **UNTERBRECHUNG — Duden — Unterbrechung** [UNTERBRECHUNG](https://www.duden.de/rechtschreibung/Unterbrechung): اسم مؤنث جمعُه die Unterbrechungen؛ يدل على انقطاع سير العمل أو المقاطعة. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **UEBERBLICK — Duden — Überblick** [UEBERBLICK](https://www.duden.de/rechtschreibung/Ueberblick): اسم مذكر جمعُه النادر die Überblicke؛ يدل على الإحاطة الشاملة أو الصورة العامة، ويرتبط كثيرًا بـden Überblick behalten. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **NOTIZ — Duden — Notiz** [NOTIZ](https://www.duden.de/rechtschreibung/Notiz): اسم مؤنث جمعُه die Notizen؛ ملاحظة مكتوبة موجزة لحفظ الفكرة، ويرتبط بتعبير Notizen machen. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **BUENDELN — Duden — bündeln** [BUENDELN](https://www.duden.de/rechtschreibung/buendeln): فعل ضعيف تصريفه bündelt، bündelte، hat gebündelt، ويجوز مع ich صيغتا ich bündele وich bündle؛ يدل على جمع عناصر أو مهام متشابهة في حزمة واحدة. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **BEWAELTIGEN — Duden — bewältigen** [BEWAELTIGEN](https://www.duden.de/rechtschreibung/bewaeltigen): فعل ضعيف غير منفصل تصريفه bewältigt، bewältigte، hat bewältigt؛ يدل على إنجاز عمل صعب أو التغلب عليه بنجاح. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.

**صفحات مستبعدة، وليست مراجع:**
- https://www.duden.de/rechtschreibung/indem — صفحة خطأ 404؛ استُبعدت ولم تُحتسب مرجعًا

## الوحدات الفردية — 99 وحدة

التقسيم: 5 نطاقات، 14 صف مفردات، 5 أمثلة قواعد، 10 مساعدات، 8 أدوار حوار، 9 جمل قراءة و6 أسئلة، 6 جمل استماع و5 أسئلة، 8 تمارين، 10 أسئلة تقييم، مهمتا أداء، نموذجان مفصلان إلى 10 أجزاء، 4 بطاقات، 5 أصول صوت. بنود التمارين 39 بتوزيع 4/3/3/5/5/5/4/10.

### scope-01

**المدة المقترحة:** 45–50 دقيقة، ويمكن تقسيم العمل · **المهارات:** قراءة مركّزة، استماع اختياري، قواعد، تنظيم المهام، كتابة وجهر<br>

**نتيجة المراجعة:** المدة مقترحة قابلة للتقسيم؛ الاستماع المسجل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### scope-02

**الهدف:** أستطيع أن أشرح طريقةً لتحسين عادة باستخدام **indem** أو **dadurch, dass**، وأذكر الغاية باستخدام **um … zu**، وأميّز بين الطريقة والغاية كتابةً أو شفهيًا.

**نتيجة المراجعة:** الهدف شرح الطريقة بـindem أو dadurch, dass وذكر الغاية بـum … zu والتمييز بينهما؛ لا يمنح الاختبار شهادة B2.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### scope-03

تنبيه مفردات: Überblick مذكر وجمعه النادر Überblicke، ويستعمل في الدرس بالمفرد في تعبير den Überblick behalten. الفعلان abschalten وausschalten منفصلان (schaltet ab / schaltet aus؛ وفي الجملة التابعة ausschaltet موصولًا)، ولـabschalten معنى مجازي في المحادثة هو الاسترخاء وفصل الذهن عن العمل، أما في الدرس فالمقصود إيقاف الهاتف أو الإشعارات. الكلمة bündeln يجوز فيها مع ich صيغتا ich bündele وich bündle. هذه توضيحات مكتوبة لا تغييرات في التسجيل.

**نتيجة المراجعة:** وُضح إفراد Überblick في الاستعمال المعتاد وجمعه النادر Überblicke، والفرق بين المعنى الحرفي والمجازي لـabschalten، وصيغتا bündele/bündle.


**مصادر القاعدة/المعنى:** [UEBERBLICK](https://www.duden.de/rechtschreibung/Ueberblick), [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### scope-04

نستعمل **indem** و**dadurch, dass** لشرح الوسيلة أو الطريقة التي نحقق بها نتيجةً؛ وغالبًا يجيبان عن سؤال **Wie? — كيف؟** يأتي الفعل المصرف في نهاية جملة **indem** أو جملة **dass**؛ وإذا تقدمت الجملة التابعة في بداية الجملة المركبة جاء الفعل المصرف في الجملة الرئيسية مباشرة بعد الفاصلة.

**نتيجة المراجعة:** قُيّدت القاعدة بتأخر الفعل المصرف في جملة indem أو dass وبتقدم الفعل المصرف في الجملة الرئيسية مباشرة بعد الفاصلة إذا تقدمت التابعة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### scope-05

قارن بين الطريقة والغاية:

**نتيجة المراجعة:** تمييز وظيفي مباشر بين الغاية (um … zu) والطريقة أو الوسيلة (indem / dadurch, dass).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### vocab-01

| die Zeiteinteilung | — | تنظيم الوقت |

**نتيجة المراجعة:** Zeiteinteilung مؤنث؛ تنظيم الوقت وتوزيعه على المهام.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-02

| die Priorität | die Prioritäten | الأولوية |

**نتيجة المراجعة:** Priorität مؤنث وجمعها Prioritäten؛ الأولوية التي تقدم على غيرها.


**مصادر القاعدة/المعنى:** [PRIORITAET](https://www.duden.de/rechtschreibung/Prioritaet)

### vocab-03

| der Zeitblock | die Zeitblöcke | فترة زمنية مخصّصة لمهمة |

**نتيجة المراجعة:** Zeitblock مذكر وجمعه Zeitblöcke بأوملاوت؛ فترة زمنية مخصصة لمهمة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-04

| die Ablenkung | die Ablenkungen | مصدر تشتيت |

**نتيجة المراجعة:** Ablenkung مؤنث وجمعها Ablenkungen؛ مصدر تشتيت يصرف الانتباه.


**مصادر القاعدة/المعنى:** [ABLENKUNG](https://www.duden.de/rechtschreibung/Ablenkung)

### vocab-05

| die Unterbrechung | die Unterbrechungen | مقاطعة |

**نتيجة المراجعة:** Unterbrechung مؤنث وجمعها Unterbrechungen؛ مقاطعة أو توقف مؤقت في العمل.


**مصادر القاعدة/المعنى:** [UNTERBRECHUNG](https://www.duden.de/rechtschreibung/Unterbrechung)

### vocab-06

| die Lesestrategie | die Lesestrategien | استراتيجية القراءة |

**نتيجة المراجعة:** Lesestrategie مؤنث وجمعها Lesestrategien؛ استراتيجية القراءة الملائمة لنوع النص.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-07

| der Überblick | — | الصورة العامة / الإحاطة |

**نتيجة المراجعة:** Überblick مذكر (وجمعه النادر Überblicke)؛ الصورة العامة أو الإحاطة في تعبير den Überblick behalten.


**مصادر القاعدة/المعنى:** [UEBERBLICK](https://www.duden.de/rechtschreibung/Ueberblick)

### vocab-08

| die Notiz | die Notizen | ملاحظة مكتوبة |

**نتيجة المراجعة:** Notiz مؤنث وجمعها Notizen؛ ملاحظة مكتوبة قصيرة.


**مصادر القاعدة/المعنى:** [NOTIZ](https://www.duden.de/rechtschreibung/Notiz)

### vocab-09

| priorisieren | priorisiert | يحدّد الأولويات |

**نتيجة المراجعة:** priorisieren فعل ضعيف ينتهي بـ-ieren حاضرُه priorisiert؛ يحدد الأولويات ويرتبها.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-10

| bündeln | bündelt | يجمع مهامًا متشابهة |

**نتيجة المراجعة:** bündeln فعل ضعيف حاضرُه bündelt ومع المتكلم المفرد bündele/bündle؛ يجمع مهامًا متشابهة معًا.


**مصادر القاعدة/المعنى:** [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### vocab-11

| sich konzentrieren auf + Akkusativ | konzentriert sich | يركّز على |

**نتيجة المراجعة:** sich konzentrieren auf + Akkusativ فعل انعكاسي حاضرُه konzentriert sich؛ يركز على شيء.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-12

| abschalten | schaltet ab | يطفئ / يعطّل |

**نتيجة المراجعة:** abschalten فعل ضعيف منفصل حاضرُه schaltet ab؛ يطفئ أو يعطل جهازًا أو إشعارات في سياق الدرس.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-13

| bewältigen | bewältigt | ينجز / يتعامل مع |

**نتيجة المراجعة:** bewältigen فعل ضعيف غير منفصل حاضرُه bewältigt؛ ينجز مهمة صعبة أو يتعامل معها بنجاح.


**مصادر القاعدة/المعنى:** [BEWAELTIGEN](https://www.duden.de/rechtschreibung/bewaeltigen)

### vocab-14

| realistisch / schrittweise | — | واقعيّ / تدريجيًا |

**نتيجة المراجعة:** realistisch واقعي وschrittweise تدريجيًا؛ مفردتان لوصف التخطيط المرن القابل للتنفيذ.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### grammar-01

Ich behalte den Überblick, indem ich meine Aufgaben nach Priorität ordne.

**نتيجة المراجعة:** Ich behalte den Überblick, indem ich meine Aufgaben nach Priorität ordne: جملة طريقة بـindem بعد الرئيسية، والفعل المصرف ordne في النهاية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [UEBERBLICK](https://www.duden.de/rechtschreibung/Ueberblick), [PRIORITAET](https://www.duden.de/rechtschreibung/Prioritaet)

### grammar-02

Dadurch, dass sie Benachrichtigungen ausschaltet, kann sie sich besser auf das Lesen konzentrieren.

**نتيجة المراجعة:** Dadurch, dass sie Benachrichtigungen ausschaltet, kann sie sich besser auf das Lesen konzentrieren: تقدمت جملة dadurch, dass بفاصلة ونهاية الفعل المتصل ausschaltet، ثم تلاها الفعل المصرف kann في الجملة الرئيسية مباشرة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### grammar-03

Ich spare Zeit dadurch, dass ich ähnliche Aufgaben bündele.

**نتيجة المراجعة:** Ich spare Zeit dadurch, dass ich ähnliche Aufgaben bündele: جاءت dadurch في نهاية الرئيسية قبل الفاصلة، ثم dass والفعل المصرف bündele في آخر التابعة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### grammar-04

Ich schreibe eine Liste, um nichts zu vergessen.

**نتيجة المراجعة:** Ich schreibe eine Liste, um nichts zu vergessen: جملة مصدرية بـum … zu تذكر الغاية لا الطريقة.


**مصادر القاعدة/المعنى:** [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### grammar-05

Ich vergesse weniger, indem ich eine Liste führe.

**نتيجة المراجعة:** Ich vergesse weniger, indem ich eine Liste führe: جملة طريقة بـindem تقابل جملة الغاية السابقة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### helper-01

- **الطريقة مقابل الغاية:** indem وdadurch, dass يجيبان عن سؤال Wie? / Wodurch? (كيف/بأي وسيلة؟)، بينما um … zu وdamit يجيبان عن سؤال Wozu? / Warum? (لماذا/لأي غاية؟). مثال: Ich führe eine Liste, um nichts zu vergessen (غاية) مقابل Ich vergesse weniger, indem ich eine Liste führe (طريقة).

**نتيجة المراجعة:** التفريق الدلالي بين سؤال الطريقة (Wie?/Wodurch?) وسؤال الغاية (Wozu?/Warum?).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### helper-02

- **بنية dadurch, dass والفاصلة:** تتكون الصيغة من ظرف الإشارة الموصول بحرف الجر dadurch في الجملة الرئيسية أو في مطلع الجملة، متبوعًا بفاصلة ثم أداة الربط التابعة dass والفعل المصرف في نهاية التابعة: Dadurch, dass sie Benachrichtigungen ausschaltet, kann sie sich besser konzentrieren. أو: Ich spare Zeit dadurch, dass ich ähnliche Aufgaben bündele.

**نتيجة المراجعة:** شرح التركيب المزدوج في dadurch, dass وموضع الفاصلة بين جزأيه.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### helper-03

- **موضع الجملة التابعة وترتيب الرئيسية:** إذا جاءت جملة indem أو dadurch, dass بعد الجملة الرئيسية سبقتها فاصلة: Ich behalte den Überblick, indem ich meine Aufgaben nach Priorität ordne. وإذا تقدمت في البداية تلاها بعد الفاصلة الفعل المصرف في الجملة الرئيسية مباشرة: Indem ich ähnliche Aufgaben nacheinander erledige, werde ich seltener unterbrochen.

**نتيجة المراجعة:** بيان أثر تقدم الجملة التابعة في تقديم الفعل المصرف للجملة الرئيسية مباشرة بعد الفاصلة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### helper-04

- **الأفعال المنفصلة والانعكاسية:** في الجملة الرئيسية ينفصل الجزء الأمامي: Sie schaltet Benachrichtigungen aus / Ich plane Pausen ein. وفي الجملة التابعة يتصل بالفعل المصرف في النهاية: dass sie Benachrichtigungen ausschaltet / dass ich Pausen einplane. ومع المصدر المسبوق بـzu تدخل zu بين الجزأين: um Benachrichtigungen auszuschalten / ohne jedes Wort nachzuschlagen. والفعل sich konzentrieren يأخذ حرف الجر auf مع Akkusativ: auf das Lesen / auf den nächsten Abschnitt.

**نتيجة المراجعة:** جمع قواعد الأفعال المنفصلة في الرئيسية والتابعة ومع zu (ausschaltet / einplane / auszuschalten / nachzuschlagen) وتعدية sich konzentrieren auf + Akkusativ.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### helper-05

- **المصدر مع um … zu وohne … zu:** يستعمل um … zu وohne … zu عندما يكون فاعل المصدر مطابقًا لفاعل الجملة الرئيسية أو مفهومًا منه بوضوح، وتوضع فاصلة قبل um أو ohne: versteht sie den Text besser, ohne jedes Wort nachzuschlagen. وعند اختلاف الفاعل أو الرغبة في جملة تابعة كاملة نستعمل damit أو ohne dass كما في مفتاح الفهم: Damit sie den Text besser versteht.

**نتيجة المراجعة:** توضيح شرط اتحاد الفاعل المفهوم في um … zu وohne … zu والفاصلة الإلزامية قبل um وohne.


**مصادر القاعدة/المعنى:** [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### helper-06

- **الظرف dadurch وحده مقابل الرابط التابع:** في جملة Sie bündelt ähnliche Termine. Dadurch spart sie Zeit. تقع Dadurch وحدها ظرفًا رابطًا في بداية جملة رئيسية مستقلة فيليها الفعل المصرف spart مباشرة؛ أما في Dadurch, dass sie ähnliche Termine bündelt, … فالرابط تابع يوجب تأخير الفعل bündelt إلى آخر جملة dass.

**نتيجة المراجعة:** التمييز الحاسم بين الظرف الرابط Dadurch في بداية جملة رئيسية مستقلة وبين الرابط التابع Dadurch, dass.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions)

### helper-07

- **تمييز أزمنة النصوص وصيغها:** يضم نص القراءة ماضيًا بسيطًا (Früher begann sie …) ومضارعًا للعادة الحالية (Jetzt wählt sie …)، ويضم نص الاستماع ماضيًا تامًا (Ich habe früher oft … gewechselt) ومبنيًا للمجهول في المضارع (werde ich seltener unterbrochen). لا نخلط بين العادة السابقة والطريقة الحالية.

**نتيجة المراجعة:** فصل أزمنة العادة السابقة (begann / habe gewechselt) عن العادة الحالية والمبني للمجهول (werde unterbrochen).


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### helper-08

- **فروق المفردات الدقيقة:** die Ablenkung ما يصرف الانتباه أو يشتته، وdie Unterbrechung انقطاع سير العمل أو المقاطعة؛ der Zeitblock فترة زمنية مخصصة لمهمة، وdie Priorität الأولوية؛ der Sachtext نص معلوماتي/غير سردي يقابله في القراءة der Roman (الرواية).

**نتيجة المراجعة:** تحديد الفروق المعجمية بين Ablenkung وUnterbrechung وبين Sachtext وRoman.


**مصادر القاعدة/المعنى:** [ABLENKUNG](https://www.duden.de/rechtschreibung/Ablenkung), [UNTERBRECHUNG](https://www.duden.de/rechtschreibung/Unterbrechung)

### helper-09

- **حدود القصص وعدم التعميم:** حوار Hana وKarim ونص قراءة Hana ونص الاستماع تعرض تجارب تنظيمية فردية خيالية، ويصرح نص الاستماع بأن الطريقة لا تناسب كل شخص (Meine Methode passt nicht für jede Person). لذلك لا نقدم أي جدول زمني كقاعدة ملزمة للجميع.

**نتيجة المراجعة:** منع تعميم خطة واحدة على جميع المتعلمين انسجامًا مع عبارة Meine Methode passt nicht für jede Person.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### helper-10

- **دليل فردي مستقل عن الصوت:** P01 فقرة من خمس جمل عن تحسين عادة في تنظيم الوقت أو القراءة (كتابة فقط دون جهر)، وP02 إحاطة من خمس جمل لزميل استنادًا إلى نص الاستماع مع اقتراح لتقليل تشتيت الإشعارات (كتابة ثم قراءة بصوت واضح بالنفس دون شريك أو تسجيل). الحد الأدنى 160/190 حرفًا والإقرارات الثلاثة لا تصحح عدد الجمل أو القواعد أو النطق آليًا؛ والتسجيلات تبقى معلقة ومتاحة دون توليد أو استماع أو اعتماد.

**نتيجة المراجعة:** تحديد P01 كتابة فقط وP02 كتابة وجهر بالنفس، وبيان حدود التحقق الذاتي واستقلال التقييم عن ملفات الصوت.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-01

Wie schaffst du es, Arbeit und Lesen in deiner Woche zu verbinden?

**نتيجة المراجعة:** Hana تسأل كيف ينجح Karim في الجمع بين العمل والقراءة خلال الأسبوع؛ مصدر مع zu بعد schaffst.


**مصادر القاعدة/المعنى:** [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### dialogue-02

Ich plane feste Zeitblöcke ein. Dadurch, dass ich ähnliche Aufgaben bündele, habe ich abends mehr freie Zeit.

**نتيجة المراجعة:** Karim يذكر تخطيط فترات زمنية ثابتة، ثم يشرح الوسيلة بـDadurch, dass ich ähnliche Aufgaben bündele وتقدم الفعل habe في الرئيسية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### dialogue-03

Und wie bleibst du beim Lesen konzentriert?

**نتيجة المراجعة:** سؤال عن كيفية الحفاظ على التركيز أثناء القراءة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-04

Ich schalte mein Telefon aus und mache nach jedem Abschnitt kurze Notizen.

**نتيجة المراجعة:** إجراءان عمليان في المضارع: إيقاف الهاتف وتدوين ملاحظات قصيرة بعد كل مقطع.


**مصادر القاعدة/المعنى:** [NOTIZ](https://www.duden.de/rechtschreibung/Notiz)

### dialogue-05

Liest du immer gleich schnell?

**نتيجة المراجعة:** سؤال نعم/لا عن ثبات سرعة القراءة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-06

Nein. Ich passe meine Lesestrategie an den Text an, indem ich bei einem schwierigen Kapitel langsamer lese.

**نتيجة المراجعة:** نفي ثم شرح الطريقة بـindem: يكيّف استراتيجية القراءة مع النص بأن يقرأ الفصول الصعبة ببطء أكبر.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### dialogue-07

Das klingt realistisch.

**نتيجة المراجعة:** تعليق يؤكد واقعية الخطة (realistisch).


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-08

Ja, ich plane auch Pausen ein. Nicht jede Stunde muss vollständig verplant sein.

**نتيجة المراجعة:** إضافة تخطيط الاستراحات وتجنب ملء كل ساعة بالكامل.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-01

Hana arbeitet und besucht abends einen Kurs.

**نتيجة المراجعة:** تعمل Hana وتحضر دورة مسائية؛ سياق واقعي لتنظيم الوقت.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-02

Früher begann sie jeden Tag mit einer langen Aufgabenliste.

**نتيجة المراجعة:** في السابق كانت تبدأ كل يوم بقائمة مهام طويلة؛ ماضٍ بسيط begann.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-03

Jetzt wählt sie zuerst drei Prioritäten aus.

**نتيجة المراجعة:** الآن تختار أولًا ثلاث أولويات؛ فعل منفصل wählt … aus.


**مصادر القاعدة/المعنى:** [PRIORITAET](https://www.duden.de/rechtschreibung/Prioritaet)

### reading-04

Sie bündelt kurze Erledigungen, indem sie mehrere Telefonate hintereinander führt.

**نتيجة المراجعة:** تجمع الأعمال القصيرة بأن تجري عدة مكالمات هاتفية متتالية؛ indem … führt.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### reading-05

Während ihrer Lesezeit schaltet sie Benachrichtigungen aus.

**نتيجة المراجعة:** أثناء وقت القراءة تعطل الإشعارات؛ schaltet … aus.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-06

Bei einem Sachtext notiert sie nach jedem Abschnitt eine Kernidee; bei einem Roman liest sie dagegen in längeren Abschnitten.

**نتيجة المراجعة:** في النص المعلوماتي تدون فكرة رئيسة بعد كل مقطع، أما في الرواية فتقرأ في مقاطع أطول.


**مصادر القاعدة/المعنى:** [NOTIZ](https://www.duden.de/rechtschreibung/Notiz)

### reading-07

Dadurch, dass sie die Lesestrategie an die Textsorte anpasst, versteht sie den Text besser, ohne jedes Wort nachzuschlagen.

**نتيجة المراجعة:** من خلال تكييف استراتيجية القراءة مع نوع النص تفهم النص أفضل دون البحث عن كل كلمة في القاموس؛ Dadurch, dass … وohne … nachzuschlagen.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### reading-08

Hana plant außerdem freie Zeit ein.

**نتيجة المراجعة:** تخطط Hana أيضًا لوقت حر.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-09

Sie betrachtet ihren Plan als Orientierung, nicht als starre Vorschrift.

**نتيجة المراجعة:** تعد خطتها توجيهًا مرنًا لا قاعدة جامدة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-01

Was wählt Hana am Anfang des Tages aus?

**نتيجة المراجعة:** Drei Prioritäten. — تختار Hana في بداية اليوم ثلاث أولويات.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-02

Wie bündelt sie kurze Erledigungen?

**نتيجة المراجعة:** Indem sie mehrere Telefonate hintereinander führt. — تجمع الأعمال القصيرة بإجراء عدة مكالمات هاتفية متتالية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-03

Was macht sie während ihrer Lesezeit?

**نتيجة المراجعة:** Sie schaltet Benachrichtigungen aus. — أثناء وقت القراءة تعطل الإشعارات.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-04

Wie liest sie einen Sachtext anders als einen Roman?

**نتيجة المراجعة:** Bei einem Sachtext notiert sie nach jedem Abschnitt eine Kernidee; einen Roman liest sie in längeren Abschnitten. — تفرق بين النص المعلوماتي (فكرة رئيسة بعد كل مقطع) والرواية (مقاطع أطول).


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-05

Warum passt sie ihre Lesestrategie an?

**نتيجة المراجعة:** Damit sie den Text besser versteht, ohne jedes Wort nachzuschlagen. — الغاية من تكييف الاستراتيجية هي فهم النص بصورة أفضل دون البحث عن كل كلمة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-06

Wie versteht Hana ihren Plan?

**نتيجة المراجعة:** Als Orientierung, nicht als starre Vorschrift. — ترى خطتها توجيهًا مرنًا لا قاعدة جامدة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-01

Ich habe früher oft zwischen mehreren Aufgaben gewechselt.

**نتيجة المراجعة:** في السابق كان المتحدث يتنقل كثيرًا بين عدة مهام؛ Perfekt مع habe … gewechselt.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-02

Jetzt plane ich zwei Zeitblöcke für konzentrierte Arbeit.

**نتيجة المراجعة:** الآن يخطط لفترتين زمنيتين للعمل المركز.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-03

Indem ich ähnliche Aufgaben nacheinander erledige, werde ich seltener unterbrochen.

**نتيجة المراجعة:** بإنجاز المهام المتشابهة تباعًا تقل مقاطعته؛ تقدمت جملة Indem فتلاها الفعل المصرف werde.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [UNTERBRECHUNG](https://www.duden.de/rechtschreibung/Unterbrechung)

### listening-04

Für längere Texte notiere ich am Rand Fragen.

**نتيجة المراجعة:** للنصوص الطويلة يدون أسئلة على الهامش.


**مصادر القاعدة/المعنى:** [NOTIZ](https://www.duden.de/rechtschreibung/Notiz)

### listening-05

Dadurch, dass ich Pausen einplane, kann ich mich besser auf den nächsten Abschnitt konzentrieren.

**نتيجة المراجعة:** من خلال تخطيط الاستراحات يستطيع التركيز بصورة أفضل على المقطع التالي؛ Dadurch, dass … kann ich mich … konzentrieren.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### listening-06

Meine Methode passt nicht für jede Person, aber für meinen Alltag ist sie hilfreich.

**نتيجة المراجعة:** طريقته لا تناسب كل شخص، لكنها مفيدة لحياته اليومية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-01

Was machte die Person früher häufig?

**نتيجة المراجعة:** Zwischen mehreren Aufgaben. — كان المتحدث يتنقل سابقًا بين عدة مهام.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-02

Wie viele Zeitblöcke plant sie jetzt?

**نتيجة المراجعة:** Zwei Zeitblöcke. — يخطط الآن لفترتين زمنيتين للعمل المركز.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-03

Wie wird sie seltener unterbrochen?

**نتيجة المراجعة:** Indem sie ähnliche Aufgaben nacheinander erledigt. — تقل مقاطعته بإنجاز المهام المتشابهة تباعًا.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-04

Was notiert sie bei längeren Texten?

**نتيجة المراجعة:** Fragen am Rand. — يدون عند النصوص الطويلة أسئلة على الهامش.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-05

Warum plant sie Pausen ein?

**نتيجة المراجعة:** Damit sie sich besser auf den nächsten Abschnitt konzentrieren kann. — يخطط للاستراحات لكي يتمكن من التركيز بصورة أفضل على المقطع التالي.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-T01

1. مهمة مهمة ينبغي إنجازها قبل غيرها: **die Priorität / die Unterbrechung**
2. فعل جمع أعمال متشابهة معًا: **bündeln / abschalten**
3. وقت مخصّص لمهمة واحدة: **der Zeitblock / die Notiz**
4. ما يساعد على متابعة الأفكار العامة في نص: **die Lesestrategie / die Ablenkung**

**نتيجة المراجعة:** أربع مفردات أساسية تميز Priorität وbündeln وZeitblock وLesestrategie.

- **1.** مهمة مهمة ينبغي إنجازها قبل غيرها: **die Priorität / die Unterbrechung**
  - **المفتاح:** die Priorität؛ المهمة التي ينبغي إنجازها قبل غيرها هي die Priorität لا die Unterbrechung.
- **2.** فعل جمع أعمال متشابهة معًا: **bündeln / abschalten**
  - **المفتاح:** bündeln؛ جمع أعمال متشابهة معًا هو الفعل bündeln لا abschalten.
- **3.** وقت مخصّص لمهمة واحدة: **der Zeitblock / die Notiz**
  - **المفتاح:** der Zeitblock؛ الفترة المخصصة لمهمة واحدة هي der Zeitblock لا die Notiz.
- **4.** ما يساعد على متابعة الأفكار العامة في نص: **die Lesestrategie / die Ablenkung**
  - **المفتاح:** die Lesestrategie؛ ما يساعد على متابعة الأفكار في النص هو die Lesestrategie لا die Ablenkung.

**مصادر القاعدة/المعنى:** [PRIORITAET](https://www.duden.de/rechtschreibung/Prioritaet), [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### DL-B2-01-T02

1. Ich verbessere meinen Überblick, ______ ich die Aufgaben nach Wichtigkeit ordne. *(رابط من كلمة واحدة)*
2. ______ sie ihr Telefon in der Lesezeit ausschaltet, wird sie seltener abgelenkt.
3. Er spart Zeit ______, ______ er ähnliche Termine zusammenlegt.

**نتيجة المراجعة:** ثلاث جمل تدرب indem وDadurch, dass وdadurch, dass مع إزالة التباس البند الأول.

- **1.** Ich verbessere meinen Überblick, ______ ich die Aufgaben nach Wichtigkeit ordne. *(رابط من كلمة واحدة)*
  - **المفتاح:** indem؛ القيد العربي (رابط من كلمة واحدة) بعد الفاصلة يعين indem.
- **2.** ______ sie ihr Telefon in der Lesezeit ausschaltet, wird sie seltener abgelenkt.
  - **المفتاح:** Dadurch, dass؛ في بداية الجملة قبل الفاعل sie وتأخر الفعل ausschaltet نكتب Dadurch, dass.
- **3.** Er spart Zeit ______, ______ er ähnliche Termine zusammenlegt.
  - **المفتاح:** dadurch, dass؛ وجود فراغين مفصولين بفاصلة بعد Er spart Zeit يعين dadurch, dass.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### DL-B2-01-T03

1. Ich konzentriere mich besser, indem ich mein Telefon ______. (ausschalten)
2. Dadurch, dass wir Aufgaben ______, vermeiden wir unnötige Wechsel. (bündeln)
3. Sie merkt sich mehr, indem sie kurze Notizen ______. (machen)

**نتيجة المراجعة:** ثلاث جمل تثبت تأخير الفعل المصرف واتصال الفعل المنفصل في جملتي indem وdass.

- **1.** Ich konzentriere mich besser, indem ich mein Telefon ______. (ausschalten)
  - **المفتاح:** ausschalte؛ في جملة indem يتصل الفعل المنفصل ويصرف مع ich في النهاية: ausschalte.
- **2.** Dadurch, dass wir Aufgaben ______, vermeiden wir unnötige Wechsel. (bündeln)
  - **المفتاح:** bündeln؛ بعد dass ومع الضمير wir يأتي الفعل المصرف في النهاية: bündeln.
- **3.** Sie merkt sich mehr, indem sie kurze Notizen ______. (machen)
  - **المفتاح:** macht؛ في جملة indem ومع الضمير المفرد sie يأتي الفعل المصرف في النهاية: macht.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### DL-B2-01-T04

اكتب **طريقة** أو **غاية**:

1. **Ich lese den Text zweimal, um die Hauptaussage zu verstehen.**
2. **Ich verstehe den Text besser, indem ich unbekannte Begriffe im Kontext prüfe.**
3. **Er erstellt einen Wochenplan, um seine Zeit sinnvoll zu nutzen.**
4. **Dadurch, dass sie Benachrichtigungen ausschaltet, liest sie konzentrierter.**
5. **Sie versteht den Sachtext besser, indem sie nach jedem Abschnitt eine Kernidee notiert.**

**نتيجة المراجعة:** خمس جمل تميز بين الطريقة (indem / dadurch, dass) والغاية (um … zu).

- **1.** **Ich lese den Text zweimal, um die Hauptaussage zu verstehen.**
  - **المفتاح:** غاية؛ um die Hauptaussage zu verstehen تذكر الغاية من قراءة النص مرتين.
- **2.** **Ich verstehe den Text besser, indem ich unbekannte Begriffe im Kontext prüfe.**
  - **المفتاح:** طريقة؛ indem ich unbekannte Begriffe im Kontext prüfe تشرح طريقة فهم النص بصورة أفضل.
- **3.** **Er erstellt einen Wochenplan, um seine Zeit sinnvoll zu nutzen.**
  - **المفتاح:** غاية؛ um seine Zeit sinnvoll zu nutzen تذكر الغاية من إعداد خطة الأسبوع.
- **4.** **Dadurch, dass sie Benachrichtigungen ausschaltet, liest sie konzentrierter.**
  - **المفتاح:** طريقة؛ Dadurch, dass sie Benachrichtigungen ausschaltet تشرح الوسيلة التي تقرأ بها بتركيز أكبر.
- **5.** **Sie versteht den Sachtext besser, indem sie nach jedem Abschnitt eine Kernidee notiert.**
  - **المفتاح:** طريقة؛ indem sie nach jedem Abschnitt eine Kernidee notiert تشرح طريقة فهم النص المعلوماتي.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### DL-B2-01-T05

حدّد صحيحًا أو خطأ:

1. تضع هناء قائمة طويلةً من المهام من دون ترتيب الأولويات.
2. تجمع هناء المكالمات الهاتفية المتشابهة.
3. تعطّل الإشعارات أثناء وقت القراءة.
4. تستخدم استراتيجية القراءة نفسها لكل النصوص.
5. ترى أن خطتها توجيه وليست قاعدة جامدة.

**نتيجة المراجعة:** خمس عبارات فهم قراءة تتحقق من خطة Hana واستراتيجيتها.

- **1.** تضع هناء قائمة طويلةً من المهام من دون ترتيب الأولويات.
  - **المفتاح:** خطأ؛ خطأ؛ تختار Hana الآن ثلاث أولويات أولًا بدل القائمة الطويلة غير المرتبة.
- **2.** تجمع هناء المكالمات الهاتفية المتشابهة.
  - **المفتاح:** صحيح؛ صحيح؛ تجمع المكالمات الهاتفية المتشابهة وتجريها تباعًا.
- **3.** تعطّل الإشعارات أثناء وقت القراءة.
  - **المفتاح:** صحيح؛ صحيح؛ تعطل الإشعارات أثناء وقت القراءة.
- **4.** تستخدم استراتيجية القراءة نفسها لكل النصوص.
  - **المفتاح:** خطأ؛ خطأ؛ تغير استراتيجية القراءة بحسب نوع النص بين النص المعلوماتي والرواية.
- **5.** ترى أن خطتها توجيه وليست قاعدة جامدة.
  - **المفتاح:** صحيح؛ صحيح؛ ترى خطتها توجيهًا مرنًا لا قاعدة جامدة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-T06

أكمل بالألمانية الكلمات الناقصة فقط؛ لا تكرر كلمات موجودة خارج الفراغ:

1. Früher hat die Person oft zwischen mehreren ______ gewechselt.
2. Jetzt plant sie zwei Zeitblöcke für ______.
3. Indem sie ähnliche Aufgaben ______ erledigt, wird sie seltener unterbrochen.
4. Für längere Texte notiert sie am Rand ______.
5. Durch Pausen kann sie sich besser auf den ______ konzentrieren.

**نتيجة المراجعة:** خمس جمل استماع بالألمانية متطابقة مع المفاتيح الألمانية الخمسة دون تكرار الكلمات المعطاة.

- **1.** Früher hat die Person oft zwischen mehreren ______ gewechselt.
  - **المفتاح:** Aufgaben؛ الكلمة الناقصة بعد mehreren هي Aufgaben.
- **2.** Jetzt plant sie zwei Zeitblöcke für ______.
  - **المفتاح:** konzentrierte Arbeit؛ العبارة الناقصة بعد für هي konzentrierte Arbeit.
- **3.** Indem sie ähnliche Aufgaben ______ erledigt, wird sie seltener unterbrochen.
  - **المفتاح:** nacheinander؛ الظرف الناقص قبل erledigt هو nacheinander.
- **4.** Für längere Texte notiert sie am Rand ______.
  - **المفتاح:** Fragen؛ عبارة am Rand موجودة قبل الفراغ، فنكتب Fragen وحدها دون تكرار.
- **5.** Durch Pausen kann sie sich besser auf den ______ konzentrieren.
  - **المفتاح:** nächsten Abschnitt؛ الأداة den موجودة قبل الفراغ، فنكتب nächsten Abschnitt دون تكرار الأداة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-T07

1. **Ich prüfe die wichtigsten Aufgaben. So behalte ich den Überblick.** → **indem**
2. **Sie fasst nach jedem Abschnitt die Kernaussage zusammen. So erinnert sie sich besser an den Text.** → **dadurch, dass** *(في بداية الجملة)*
3. **Ich bündele ähnliche Aufgaben. So spare ich Zeit.** → **dadurch, dass** *(بعد الجملة الرئيسية)*
4. **Ich schreibe eine kurze Aufgabenliste. Ich möchte nichts Wichtiges vergessen.** → **um … zu**

**نتيجة المراجعة:** أربع جمل دمج تغطي indem وdadurch, dass في موقعين وum … zu للغاية.

- **1.** **Ich prüfe die wichtigsten Aufgaben. So behalte ich den Überblick.** → **indem**
  - **المفتاح:** Ich behalte den Überblick, indem ich die wichtigsten Aufgaben prüfe.؛ دمج الجملتين بـindem بعد الرئيسية مع تأخير الفعل prüfe إلى النهاية.
- **2.** **Sie fasst nach jedem Abschnitt die Kernaussage zusammen. So erinnert sie sich besser an den Text.** → **dadurch, dass** *(في بداية الجملة)*
  - **المفتاح:** Dadurch, dass sie nach jedem Abschnitt die Kernaussage zusammenfasst, erinnert sie sich besser an den Text.؛ دمج الجملتين بـDadurch, dass في البداية مع اتصال zusammenfasst وتقدم الفعل erinnert في الرئيسية.
- **3.** **Ich bündele ähnliche Aufgaben. So spare ich Zeit.** → **dadurch, dass** *(بعد الجملة الرئيسية)*
  - **المفتاح:** Ich spare Zeit dadurch, dass ich ähnliche Aufgaben bündele.؛ دمج الجملتين بـdadurch, dass بعد الجملة الرئيسية مع تأخير الفعل bündele إلى النهاية.
- **4.** **Ich schreibe eine kurze Aufgabenliste. Ich möchte nichts Wichtiges vergessen.** → **um … zu**
  - **المفتاح:** Ich schreibe eine kurze Aufgabenliste, um nichts Wichtiges zu vergessen.؛ دمج الجملتين بـum … zu لبيان الغاية مع وضع zu قبل المصدر vergessen.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### DL-B2-01-T08

اكتب فقرة من خمس إلى سبع جمل ألمانية في كل مهمة، واستخدم **indem** أو **dadurch, dass** لشرح الطريقة و**um … zu** لذكر الغاية:

**أ — P01: خمس جمل كتابة فقط**

اكتب فقرة من خمس إلى سبع جمل ألمانية عن عادة في تنظيم الوقت أو القراءة تريد تحسينها: اذكر في الجملة الأولى العادة الحالية أو التحدي، وفي الثانية خطوتك اليومية الأولى، وفي الثالثة الطريقة باستخدام indem أو dadurch, dass مع الفعل المصرف في نهاية التابعة، وفي الرابعة الغاية باستخدام um … zu مع المصدر، وفي الخامسة كيف تراجع الخطة بمرونة. هذه المهمة كتابة فقط دون جهر أو تسجيل، ووضّح الفرق بين كيفية تنفيذ الطريقة والنتيجة التي تريدها.

**ب — P02: خمس جمل كتابة وجهر**

استنادًا إلى نص الاستماع المكتوب T06 عن التركيز، اكتب إحاطة من خمس إلى سبع جمل ألمانية لزميل أو قدّم شرحًا شفهيًا مماثلًا ثم اقرأ النص بصوت واضح بنفسك: اذكر في الجملة الأولى الانتقال السابق بين المهام وتخطيط فترتين للعمل المركّز، وفي الثانية إنجاز المهام المتشابهة تباعًا وتدوين الأسئلة على الهامش، وفي الثالثة فائدة الاستراحات، وفي الرابعة طريقة إضافية واقعية لتقليل تشتيت الإشعارات باستخدام indem أو dadurch, dass، وفي الخامسة الغاية من هذه الطريقة باستخدام um … zu مع الإشارة إلى أن الطريقة قابلة للتكييف. لا يلزم تسجيل أو تشغيل MP3.

**نتيجة المراجعة:** مهمتا التمرين 8 مفصلتان إلى P01 كتابة فقط (5 جمل، 430 حرفًا) وP02 كتابة وجهر (5 جمل، 594 حرفًا).

- **1.** Früher habe ich beim Lesen oft zwischen Nachrichten und langen Texten gewechselt.
  - **المفتاح:** Früher habe ich beim Lesen oft zwischen Nachrichten und langen Texten gewechselt.؛ الجملة الأولى في P01 تصف التحدي السابق في التنقل بين الرسائل والنصوص الطويلة.
- **2.** Jetzt wähle ich am Abend zuerst zwei feste Zeitblöcke für meinen Kurs aus.
  - **المفتاح:** Jetzt wähle ich am Abend zuerst zwei feste Zeitblöcke für meinen Kurs aus.؛ الجملة الثانية تذكر اختيار فترتين زمنيتين ثابتتين للدورة المسائية.
- **3.** Ich bleibe konzentriert, indem ich mein Telefon ausschalte und nach jedem Abschnitt eine kurze Notiz mache.
  - **المفتاح:** Ich bleibe konzentriert, indem ich mein Telefon ausschalte und nach jedem Abschnitt eine kurze Notiz mache.؛ الجملة الثالثة تشرح الطريقة بـindem: إيقاف الهاتف وتدوين ملاحظة قصيرة بعد كل مقطع.
- **4.** Außerdem führe ich eine kurze Prioritätenliste, um keine wichtige Aufgabe zu vergessen.
  - **المفتاح:** Außerdem führe ich eine kurze Prioritätenliste, um keine wichtige Aufgabe zu vergessen.؛ الجملة الرابعة تذكر الغاية بـum … zu: إعداد قائمة أولويات لعدم نسيان مهمة مهمة.
- **5.** Meinen Plan passe ich schrittweise an, damit er im Alltag realistisch bleibt.
  - **المفتاح:** Meinen Plan passe ich schrittweise an, damit er im Alltag realistisch bleibt.؛ الجملة الخامسة تؤكد تكييف الخطة تدريجيًا بمرونة.
- **6.** In der Aufnahme berichtet die Person, dass sie früher oft zwischen mehreren Aufgaben gewechselt hat und jetzt zwei Zeitblöcke für konzentrierte Arbeit plant.
  - **المفتاح:** In der Aufnahme berichtet die Person, dass sie früher oft zwischen mehreren Aufgaben gewechselt hat und jetzt zwei Zeitblöcke für konzentrierte Arbeit plant.؛ الجملة الأولى في P02 تلخص انتقال المتحدث سابقًا بين المهام وتخطيطه الآن لفترتين للعمل المركز.
- **7.** Sie erledigt ähnliche Aufgaben nacheinander und notiert bei längeren Texten Fragen am Rand.
  - **المفتاح:** Sie erledigt ähnliche Aufgaben nacheinander und notiert bei längeren Texten Fragen am Rand.؛ الجملة الثانية تذكر إنجاز المهام المتشابهة تباعًا وتدوين الأسئلة على الهامش.
- **8.** Dadurch, dass sie kurze Pausen einplant, kann sie sich besser auf den nächsten Abschnitt konzentrieren.
  - **المفتاح:** Dadurch, dass sie kurze Pausen einplant, kann sie sich besser auf den nächsten Abschnitt konzentrieren.؛ الجملة الثالثة تشرح بـDadurch, dass فائدة الاستراحات للتركيز في المقطع التالي.
- **9.** Zusätzlich können wir Ablenkungen verringern, indem wir während eines Zeitblocks alle Benachrichtigungen am Telefon ausschalten.
  - **المفتاح:** Zusätzlich können wir Ablenkungen verringern, indem wir während eines Zeitblocks alle Benachrichtigungen am Telefon ausschalten.؛ الجملة الرابعة تقترح بـindem إيقاف إشعارات الهاتف أثناء فترة العمل لتقليل التشتيت.
- **10.** Wir legen feste Ruhezeiten für Nachrichten fest, um schwierige Texte ohne ständige Unterbrechung zu bewältigen.
  - **المفتاح:** Wir legen feste Ruhezeiten für Nachrichten fest, um schwierige Texte ohne ständige Unterbrechung zu bewältigen.؛ الجملة الخامسة تذكر الغاية بـum … zu: تحديد أوقات هدوء لإنجاز النصوص الصعبة دون مقاطعة مستمرة.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### DL-B2-01-Q01

ما معنى **der Zeitblock** في درس تنظيم الوقت؟

**نتيجة المراجعة:** der Zeitblock هو فترة زمنية تخصص للعمل على مهمة أو مجموعة مهام.

**المفتاح:** فترة زمنية مخصصة لمهمة

**الربط:** DL-B2-01-T01

- **الخيار 1 — ليس المطلوب:** مقاطعة غير متوقعة — المقاطعة غير المتوقعة هي die Unterbrechung لا der Zeitblock.
- **الخيار 2 — صحيح:** فترة زمنية مخصصة لمهمة — der Zeitblock يعني فترة زمنية مخصصة لمهمة أو عمل مركز.
- **الخيار 3 — ليس المطلوب:** قائمة بأهم الأولويات — قائمة الأولويات ترتبط بـPrioritätenliste لا Zeitblock.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-Q02

أكمل بتركيب يوضح طريقة ترتيب المهام: Ich behalte den Überblick, ___ ich Aufgaben nach Priorität ordne.

**نتيجة المراجعة:** تشرح indem الوسيلة أو الطريقة التي نحافظ بها على الصورة العامة؛ ويأتي الفعل المصرف ordne في نهاية الجملة التابعة.

**المفتاح:** indem

**الربط:** DL-B2-01-T02

- **الخيار 1 — ليس المطلوب:** um — um تحتاج إلى zu ومصدر ولا تأتي هنا مع الفاعل ich والفعل المصرف ordne.
- **الخيار 2 — ليس المطلوب:** obwohl — obwohl تفيد التضاد لا شرح الطريقة.
- **الخيار 3 — صحيح:** indem — indem تشرح الطريقة أو الوسيلة ويتأخر معها الفعل المصرف ordne إلى نهاية الجملة التابعة.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### DL-B2-01-Q03

اختر ترتيب الكلمات الصحيح: Dadurch, dass ___, kann ich mich besser konzentrieren.

**نتيجة المراجعة:** بعد dass يأتي الفعل المصرف في نهاية الجملة التابعة: Dadurch, dass ich Pausen einplane, …

**المفتاح:** ich Pausen einplane

**الربط:** DL-B2-01-T03

- **الخيار 1 — صحيح:** ich Pausen einplane — بعد dass يتأخر الفعل المنفصل ويتصل في نهاية التابعة: ich Pausen einplane.
- **الخيار 2 — ليس المطلوب:** ich plane Pausen ein — plane … ein ترتيب جملة رئيسية لا جملة تابعة بعد dass.
- **الخيار 3 — ليس المطلوب:** ich Pausen einplanen — einplanen مصدر غير مصرف مع الفاعل المفرد ich.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### DL-B2-01-Q04

أي جملة تذكر الغاية التي من أجلها نُفذت المهمة، لا طريقة تنفيذها؟

**نتيجة المراجعة:** um … zu تذكر الغاية: أكتب قائمة لكيلا أنسى شيئًا. أما indem وdadurch, dass فيشرحان الطريقة أو الوسيلة.

**المفتاح:** Ich mache eine Liste, um nichts zu vergessen.

**الربط:** DL-B2-01-T04

- **الخيار 1 — ليس المطلوب:** Ich spare Zeit, indem ich ähnliche Aufgaben bündele. — indem تشرح الطريقة التي يوفر بها الوقت لا الغاية.
- **الخيار 2 — صحيح:** Ich mache eine Liste, um nichts zu vergessen. — um nichts zu vergessen تذكر الغاية التي من أجلها تُكتب القائمة.
- **الخيار 3 — ليس المطلوب:** Ich merke mir mehr dadurch, dass ich kurze Notizen mache. — dadurch, dass تشرح الوسيلة التي يتذكر بها أكثر لا الغاية.

**مصادر القاعدة/المعنى:** [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### DL-B2-01-Q05

كيف تجمع هناء بعض الأعمال القصيرة بحسب نص القراءة؟

**نتيجة المراجعة:** يجمع النص المكالمات الهاتفية في سلسلة، فتجري هناء عدة مكالمات متتابعة بدل التنقل بين أنواع مختلفة من المهام.

**المفتاح:** تجري عدة مكالمات هاتفية تباعًا

**الربط:** DL-B2-01-T05

- **الخيار 1 — ليس المطلوب:** تكتب كل مكالمة في يوم مختلف — توزيع كل مكالمة على يوم مختلف يخالف معنى التجميع bündeln.
- **الخيار 2 — ليس المطلوب:** تترك جميع الأعمال حتى نهاية الأسبوع — النص لا يذكر تأجيل جميع الأعمال إلى نهاية الأسبوع.
- **الخيار 3 — صحيح:** تجري عدة مكالمات هاتفية تباعًا — ينص القراءة على أنها تجمع الأعمال القصيرة بإجراء عدة مكالمات هاتفية متتالية.

**مصادر القاعدة/المعنى:** [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### DL-B2-01-Q06

كيف تقرأ هناء الرواية مقارنةً بالنص المعلوماتي؟

**نتيجة المراجعة:** تدوّن هناء فكرة رئيسة بعد كل مقطع في النص المعلوماتي، بينما تقرأ الرواية في مقاطع أطول.

**المفتاح:** تقرأها في مقاطع أطول

**الربط:** DL-B2-01-T05

- **الخيار 1 — صحيح:** تقرأها في مقاطع أطول — تقرأ Hana الرواية في مقاطع أطول مقارنة بالنص المعلوماتي.
- **الخيار 2 — ليس المطلوب:** تدوّن فكرة رئيسة بعد كل فقرة كما تفعل في النص المعلوماتي — تدوين فكرة رئيسة بعد كل مقطع يخص النص المعلوماتي Sachtext لا الرواية.
- **الخيار 3 — ليس المطلوب:** تبحث عن معنى كل كلمة قبل متابعة القراءة — يذكر النص أنها تفهم النص دون البحث عن معنى كل كلمة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-Q07

كم فترة زمنية للعمل المركّز يخطط لها المتحدث في نص الاستماع؟

**نتيجة المراجعة:** يذكر المتحدث أنه يخطط لفترتين للعمل المركّز؛ ويمكن الإجابة من النص المكتوب دون تشغيل MP3.

**المفتاح:** فترتان

**الربط:** DL-B2-01-T06

- **الخيار 1 — ليس المطلوب:** واحدة — النص يذكر فترتين اثنتين لا فترة واحدة.
- **الخيار 2 — صحيح:** فترتان — ينص الاستماع على تخطيط فترتين للعمل المركز: zwei Zeitblöcke.
- **الخيار 3 — ليس المطلوب:** أربع فترات — أربع فترات غير مذكورة في النص.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-Q08

ماذا يدوّن المتحدث على هامش النصوص الطويلة؟

**نتيجة المراجعة:** يكتب أسئلة على الهامش عند قراءة النصوص الطويلة، ثم يستخدم الاستراحات للتركيز في المقطع التالي.

**المفتاح:** أسئلة يطرحها أثناء القراءة

**الربط:** DL-B2-01-T06

- **الخيار 1 — ليس المطلوب:** مواعيد الاجتماعات التالية — مواعيد الاجتماعات غير مذكورة في نص الاستماع.
- **الخيار 2 — ليس المطلوب:** قائمة المشتريات — قائمة المشتريات غير مذكورة في نص الاستماع.
- **الخيار 3 — صحيح:** أسئلة يطرحها أثناء القراءة — ينص الاستماع على تدوين أسئلة على الهامش عند قراءة النصوص الطويلة: Fragen am Rand.

**مصادر القاعدة/المعنى:** [NOTIZ](https://www.duden.de/rechtschreibung/Notiz)

### DL-B2-01-Q09

ادمج الجملتين بطريقة صحيحة باستخدام **indem**: Sie bündelt ähnliche Termine. Dadurch spart sie Zeit.

**نتيجة المراجعة:** الجملة المطلوبة تشرح كيف توفّر الوقت: تجمع المواعيد المتشابهة. لذلك يناسبها indem مع الفعل bündelt في النهاية.

**المفتاح:** Sie spart Zeit, indem sie ähnliche Termine bündelt.

**الربط:** DL-B2-01-T07

- **الخيار 1 — صحيح:** Sie spart Zeit, indem sie ähnliche Termine bündelt. — Sie spart Zeit, indem sie ähnliche Termine bündelt تشرح الطريقة بـindem مع تأخير الفعل bündelt.
- **الخيار 2 — ليس المطلوب:** Sie spart Zeit, um ähnliche Termine zu bündeln. — um … zu bündeln تحول الوسيلة إلى غاية فتغير العلاقة المنطقية.
- **الخيار 3 — ليس المطلوب:** Sie bündelt ähnliche Termine, indem sie Zeit spart. — عكست الجملة بين النتيجة والوسيلة فجعلت توفير الوقت وسيلة لتجميع المواعيد.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### DL-B2-01-Q10

ادمج الجملتين باستخدام **dadurch, dass**: Sie schaltet Benachrichtigungen aus. Dadurch arbeitet sie konzentrierter.

**نتيجة المراجعة:** بعد الجملة التابعة التي تبدأ بـDadurch, dass يأتي الفعل المصرف في الجملة الرئيسة مباشرة: arbeitet sie konzentrierter.

**المفتاح:** Dadurch, dass sie Benachrichtigungen ausschaltet, arbeitet sie konzentrierter.

**الربط:** DL-B2-01-T07

- **الخيار 1 — ليس المطلوب:** Dadurch, dass sie Benachrichtigungen ausschaltet, sie arbeitet konzentrierter. — بعد الجملة التابعة المتقدمة يجب أن يلي الفاصلة الفعل المصرف arbeitet قبل الفاعل sie.
- **الخيار 2 — صحيح:** Dadurch, dass sie Benachrichtigungen ausschaltet, arbeitet sie konzentrierter. — Dadurch, dass sie Benachrichtigungen ausschaltet, arbeitet sie konzentrierter تطبق تأخير الفعل في التابعة وتقديم الفعل في الرئيسية.
- **الخيار 3 — ليس المطلوب:** Um Benachrichtigungen auszuschalten, arbeitet sie konzentrierter. — Um … auszuschalten تحول الوسيلة إلى غاية غير مطابقة لمعنى الجملتين.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### DL-B2-01-P01

اكتب فقرة من خمس إلى سبع جمل ألمانية عن عادة في تنظيم الوقت أو القراءة تريد تحسينها: اذكر في الجملة الأولى العادة الحالية أو التحدي، وفي الثانية خطوتك اليومية الأولى، وفي الثالثة الطريقة باستخدام indem أو dadurch, dass مع الفعل المصرف في نهاية التابعة، وفي الرابعة الغاية باستخدام um … zu مع المصدر، وفي الخامسة كيف تراجع الخطة بمرونة. هذه المهمة كتابة فقط دون جهر أو تسجيل، ووضّح الفرق بين كيفية تنفيذ الطريقة والنتيجة التي تريدها.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة فقط دون جهر.

**الربط:** DL-B2-01-T08

- **المعيار taskCompletion:** فقرة ألمانية من خمس إلى سبع جمل عن عادة محددة في تنظيم الوقت أو القراءة يرغب المتعلم في تحسينها، تشمل التحدي والخطوة اليومية والطريقة والغاية والمرونة؛ كتابة فقط. — يتحقق من فقرة من خمس إلى سبع جمل عن تحسين عادة في الوقت أو القراءة؛ الحد 160 حرفًا والنموذج 430 حرفًا (كتابة فقط).
- **المعيار meaningClarity:** تُفهم الطريقة التي سيطبّقها المتعلم، والغاية أو النتيجة التي يرجوها، ويظهر الفرق بين كيفية التنفيذ ولماذا يفعله. — يضمن وضوح الفرق بين كيفية تنفيذ الطريقة والغاية المرجوة منها.
- **المعيار targetSkill:** يستخدم رابطًا للطريقة مرةً على الأقل: indem أو dadurch, dass، مع فاصلة ونهاية الفعل المصرف في الجملة التابعة؛ ويستخدم um … zu مرةً على الأقل لذكر الغاية مع مصدر مناسب، ويميّز استخدامها من رابط الطريقة. — يركز على استخدام indem أو dadurch, dass مع الفاصلة ونهاية الفعل المصرف، واستخدام um … zu مع المصدر.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 160, "speakAloud": false, "audioRequired": false}

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### DL-B2-01-P02

استنادًا إلى نص الاستماع المكتوب T06 عن التركيز، اكتب إحاطة من خمس إلى سبع جمل ألمانية لزميل أو قدّم شرحًا شفهيًا مماثلًا ثم اقرأ النص بصوت واضح بنفسك: اذكر في الجملة الأولى الانتقال السابق بين المهام وتخطيط فترتين للعمل المركّز، وفي الثانية إنجاز المهام المتشابهة تباعًا وتدوين الأسئلة على الهامش، وفي الثالثة فائدة الاستراحات، وفي الرابعة طريقة إضافية واقعية لتقليل تشتيت الإشعارات باستخدام indem أو dadurch, dass، وفي الخامسة الغاية من هذه الطريقة باستخدام um … zu مع الإشارة إلى أن الطريقة قابلة للتكييف. لا يلزم تسجيل أو تشغيل MP3.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة وجهر مع الاستناد إلى T06 وروابط T06/T08.

**الربط:** DL-B2-01-T06, DL-B2-01-T08

- **المعيار taskCompletion:** إحاطة ألمانية من خمس إلى سبع جمل تستند إلى تفاصيل T06 (الانتقال السابق، فترتا العمل، تجميع المهام والأسئلة على الهامش، الاستراحات) وتقترح طريقة إضافية واقعية لتقليل تشتيت الإشعارات؛ كتابة ثم جهر. — يتحقق من إحاطة من خمس إلى سبع جمل تستند إلى T06 وتقترح طريقة لتقليل الإشعارات؛ الحد 190 حرفًا والنموذج 594 حرفًا مع الجهر.
- **المعيار meaningClarity:** يفصل الناتج بوضوح بين ما فعله المتحدث في T06 والاقتراح الجديد، ويشرح الطريقة والغاية منها من دون تعميم أن طريقة واحدة تناسب الجميع. — يضمن الفصل بين ما ورد في T06 والاقتراح الإضافي دون تعميم الطريقة على الجميع.
- **المعيار targetSkill:** يستخدم رابطًا للطريقة مرةً على الأقل: indem أو dadurch, dass، مع الفاصلة ونهاية الفعل المصرف في الجملة التابعة؛ ويستخدم um … zu مرةً على الأقل لذكر الغاية مع مصدر مناسب، ويميّز رابط الغاية من رابط الطريقة مع القراءة الجهرية الذاتية. — يركز على استخدام indem أو dadurch, dass للطريقة وum … zu للغاية مع القراءة الجهرية الذاتية دون تسجيل.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 190, "speakAloud": true, "audioRequired": false}

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### habit-model-01

Früher habe ich beim Lesen oft zwischen Nachrichten und langen Texten gewechselt.
Jetzt wähle ich am Abend zuerst zwei feste Zeitblöcke für meinen Kurs aus.
Ich bleibe konzentriert, indem ich mein Telefon ausschalte und nach jedem Abschnitt eine kurze Notiz mache.
Außerdem führe ich eine kurze Prioritätenliste, um keine wichtige Aufgabe zu vergessen.
Meinen Plan passe ich schrittweise an, damit er im Alltag realistisch bleibt.

**نتيجة المراجعة:** نموذج مكتوب: 430 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** Früher habe ich beim Lesen oft zwischen Nachrichten und langen Texten gewechselt.
  - الجملة الأولى في P01 تصف التحدي السابق في التنقل بين الرسائل والنصوص الطويلة.
- **2.** Jetzt wähle ich am Abend zuerst zwei feste Zeitblöcke für meinen Kurs aus.
  - الجملة الثانية تذكر اختيار فترتين زمنيتين ثابتتين للدورة المسائية.
- **3.** Ich bleibe konzentriert, indem ich mein Telefon ausschalte und nach jedem Abschnitt eine kurze Notiz mache.
  - الجملة الثالثة تشرح الطريقة بـindem: إيقاف الهاتف وتدوين ملاحظة قصيرة بعد كل مقطع.
- **4.** Außerdem führe ich eine kurze Prioritätenliste, um keine wichtige Aufgabe zu vergessen.
  - الجملة الرابعة تذكر الغاية بـum … zu: إعداد قائمة أولويات لعدم نسيان مهمة مهمة.
- **5.** Meinen Plan passe ich schrittweise an, damit er im Alltag realistisch bleibt.
  - الجملة الخامسة تؤكد تكييف الخطة تدريجيًا بمرونة.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### briefing-model-01

In der Aufnahme berichtet die Person, dass sie früher oft zwischen mehreren Aufgaben gewechselt hat und jetzt zwei Zeitblöcke für konzentrierte Arbeit plant.
Sie erledigt ähnliche Aufgaben nacheinander und notiert bei längeren Texten Fragen am Rand.
Dadurch, dass sie kurze Pausen einplant, kann sie sich besser auf den nächsten Abschnitt konzentrieren.
Zusätzlich können wir Ablenkungen verringern, indem wir während eines Zeitblocks alle Benachrichtigungen am Telefon ausschalten.
Wir legen feste Ruhezeiten für Nachrichten fest, um schwierige Texte ohne ständige Unterbrechung zu bewältigen.

**نتيجة المراجعة:** نموذج مكتوب: 594 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** In der Aufnahme berichtet die Person, dass sie früher oft zwischen mehreren Aufgaben gewechselt hat und jetzt zwei Zeitblöcke für konzentrierte Arbeit plant.
  - الجملة الأولى في P02 تلخص انتقال المتحدث سابقًا بين المهام وتخطيطه الآن لفترتين للعمل المركز.
- **2.** Sie erledigt ähnliche Aufgaben nacheinander und notiert bei längeren Texten Fragen am Rand.
  - الجملة الثانية تذكر إنجاز المهام المتشابهة تباعًا وتدوين الأسئلة على الهامش.
- **3.** Dadurch, dass sie kurze Pausen einplant, kann sie sich besser auf den nächsten Abschnitt konzentrieren.
  - الجملة الثالثة تشرح بـDadurch, dass فائدة الاستراحات للتركيز في المقطع التالي.
- **4.** Zusätzlich können wir Ablenkungen verringern, indem wir während eines Zeitblocks alle Benachrichtigungen am Telefon ausschalten.
  - الجملة الرابعة تقترح بـindem إيقاف إشعارات الهاتف أثناء فترة العمل لتقليل التشتيت.
- **5.** Wir legen feste Ruhezeiten für Nachrichten fest, um schwierige Texte ohne ständige Unterbrechung zu bewältigen.
  - الجملة الخامسة تذكر الغاية بـum … zu: تحديد أوقات هدوء لإنجاز النصوص الصعبة دون مقاطعة مستمرة.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [INF](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)

### card-01

- **Ich spare Zeit, indem ich ähnliche Aufgaben bündele.** → أوفّر الوقت بجمع المهام المتشابهة.

**نتيجة المراجعة:** نموذج شرح الطريقة بـindem بعد الجملة الرئيسية مع تأخير الفعل bündele.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas), [BUENDELN](https://www.duden.de/rechtschreibung/buendeln)

### card-02

- **Dadurch, dass ich Pausen einplane, bleibe ich konzentriert.** → من خلال تخطيط الاستراحات، أحافظ على تركيزي.

**نتيجة المراجعة:** نموذج شرح الطريقة بـDadurch, dass في بداية الجملة مع تقديم الفعل bleibe في الرئيسية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/conjunctions), [3](https://deutsch.lingolia.com/en/writing/commas)

### card-03

- **die Priorität** → الأولوية.

**نتيجة المراجعة:** مراجعة المفردة المحورية die Priorität (الأولوية).


**مصادر القاعدة/المعنى:** [PRIORITAET](https://www.duden.de/rechtschreibung/Prioritaet)

### card-04

- **die Lesestrategie** → استراتيجية القراءة.

**نتيجة المراجعة:** مراجعة المفردة المحورية die Lesestrategie (استراتيجية القراءة).


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-AUD-PHR-01

Die Zeiteinteilung. Die Priorität, die Prioritäten. Der Zeitblock, die Zeitblöcke. Die Ablenkung, die Ablenkungen. Die Unterbrechung, die Unterbrechungen. Die Lesestrategie, die Lesestrategien. Der Überblick. Die Notiz, die Notizen. Priorisieren, priorisiert. Bündeln, bündelt. Sich konzentrieren auf, konzentriert sich. Abschalten, schaltet ab. Bewältigen, bewältigt. Realistisch. Schrittweise.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 15 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Die Zeiteinteilung.
  - Zeiteinteilung مؤنث؛ تنظيم الوقت وتوزيعه على المهام.
- **2.** Die Priorität, die Prioritäten.
  - Priorität مؤنث وجمعها Prioritäten؛ الأولوية التي تقدم على غيرها.
- **3.** Der Zeitblock, die Zeitblöcke.
  - Zeitblock مذكر وجمعه Zeitblöcke بأوملاوت؛ فترة زمنية مخصصة لمهمة.
- **4.** Die Ablenkung, die Ablenkungen.
  - Ablenkung مؤنث وجمعها Ablenkungen؛ مصدر تشتيت يصرف الانتباه.
- **5.** Die Unterbrechung, die Unterbrechungen.
  - Unterbrechung مؤنث وجمعها Unterbrechungen؛ مقاطعة أو توقف مؤقت في العمل.
- **6.** Die Lesestrategie, die Lesestrategien.
  - Lesestrategie مؤنث وجمعها Lesestrategien؛ استراتيجية القراءة الملائمة لنوع النص.
- **7.** Der Überblick.
  - Überblick مذكر (وجمعه النادر Überblicke)؛ الصورة العامة أو الإحاطة في تعبير den Überblick behalten.
- **8.** Die Notiz, die Notizen.
  - Notiz مؤنث وجمعها Notizen؛ ملاحظة مكتوبة قصيرة.
- **9.** Priorisieren, priorisiert.
  - priorisieren فعل ضعيف ينتهي بـ-ieren حاضرُه priorisiert؛ يحدد الأولويات ويرتبها.
- **10.** Bündeln, bündelt.
  - bündeln فعل ضعيف حاضرُه bündelt ومع المتكلم المفرد bündele/bündle؛ يجمع مهامًا متشابهة معًا.
- **11.** Sich konzentrieren auf, konzentriert sich.
  - sich konzentrieren auf + Akkusativ فعل انعكاسي حاضرُه konzentriert sich؛ يركز على شيء.
- **12.** Abschalten, schaltet ab.
  - abschalten فعل ضعيف منفصل حاضرُه schaltet ab؛ يطفئ أو يعطل جهازًا أو إشعارات في سياق الدرس.
- **13.** Bewältigen, bewältigt.
  - bewältigen فعل ضعيف غير منفصل حاضرُه bewältigt؛ ينجز مهمة صعبة أو يتعامل معها بنجاح.
- **14.** Realistisch.
  - realistisch صفة بمعنى واقعي وقابل للتطبيق.
- **15.** Schrittweise.
  - schrittweise ظرف بمعنى تدريجيًا خطوة بخطوة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-AUD-MODEL-01

Ich behalte den Überblick, indem ich meine Aufgaben nach Priorität ordne. Dadurch, dass sie Benachrichtigungen ausschaltet, kann sie sich besser auf das Lesen konzentrieren. Ich spare Zeit dadurch, dass ich ähnliche Aufgaben bündele. Ich schreibe eine Liste, um nichts zu vergessen. Ich vergesse weniger, indem ich eine Liste führe.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 5 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Ich behalte den Überblick, indem ich meine Aufgaben nach Priorität ordne.
  - Ich behalte den Überblick, indem ich meine Aufgaben nach Priorität ordne: جملة طريقة بـindem بعد الرئيسية، والفعل المصرف ordne في النهاية.
- **2.** Dadurch, dass sie Benachrichtigungen ausschaltet, kann sie sich besser auf das Lesen konzentrieren.
  - Dadurch, dass sie Benachrichtigungen ausschaltet, kann sie sich besser auf das Lesen konzentrieren: تقدمت جملة dadurch, dass بفاصلة ونهاية الفعل المتصل ausschaltet، ثم تلاها الفعل المصرف kann في الجملة الرئيسية مباشرة.
- **3.** Ich spare Zeit dadurch, dass ich ähnliche Aufgaben bündele.
  - Ich spare Zeit dadurch, dass ich ähnliche Aufgaben bündele: جاءت dadurch في نهاية الرئيسية قبل الفاصلة، ثم dass والفعل المصرف bündele في آخر التابعة.
- **4.** Ich schreibe eine Liste, um nichts zu vergessen.
  - Ich schreibe eine Liste, um nichts zu vergessen: جملة مصدرية بـum … zu تذكر الغاية لا الطريقة.
- **5.** Ich vergesse weniger, indem ich eine Liste führe.
  - Ich vergesse weniger, indem ich eine Liste führe: جملة طريقة بـindem تقابل جملة الغاية السابقة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-AUD-DLG-01

Wie schaffst du es, Arbeit und Lesen in deiner Woche zu verbinden? Ich plane feste Zeitblöcke ein. Dadurch, dass ich ähnliche Aufgaben bündele, habe ich abends mehr freie Zeit. Und wie bleibst du beim Lesen konzentriert? Ich schalte mein Telefon aus und mache nach jedem Abschnitt kurze Notizen. Liest du immer gleich schnell? Nein. Ich passe meine Lesestrategie an den Text an, indem ich bei einem schwierigen Kapitel langsamer lese. Das klingt realistisch. Ja, ich plane auch Pausen ein. Nicht jede Stunde muss vollständig verplant sein.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 8 وحدة داخل 8 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Wie schaffst du es, Arbeit und Lesen in deiner Woche zu verbinden?
  - Hana تسأل كيف ينجح Karim في الجمع بين العمل والقراءة خلال الأسبوع؛ مصدر مع zu بعد schaffst.
- **2.** Ich plane feste Zeitblöcke ein. Dadurch, dass ich ähnliche Aufgaben bündele, habe ich abends mehr freie Zeit.
  - Karim يذكر تخطيط فترات زمنية ثابتة، ثم يشرح الوسيلة بـDadurch, dass ich ähnliche Aufgaben bündele وتقدم الفعل habe في الرئيسية.
- **3.** Und wie bleibst du beim Lesen konzentriert?
  - سؤال عن كيفية الحفاظ على التركيز أثناء القراءة.
- **4.** Ich schalte mein Telefon aus und mache nach jedem Abschnitt kurze Notizen.
  - إجراءان عمليان في المضارع: إيقاف الهاتف وتدوين ملاحظات قصيرة بعد كل مقطع.
- **5.** Liest du immer gleich schnell?
  - سؤال نعم/لا عن ثبات سرعة القراءة.
- **6.** Nein. Ich passe meine Lesestrategie an den Text an, indem ich bei einem schwierigen Kapitel langsamer lese.
  - نفي ثم شرح الطريقة بـindem: يكيّف استراتيجية القراءة مع النص بأن يقرأ الفصول الصعبة ببطء أكبر.
- **7.** Das klingt realistisch.
  - تعليق يؤكد واقعية الخطة (realistisch).
- **8.** Ja, ich plane auch Pausen ein. Nicht jede Stunde muss vollständig verplant sein.
  - إضافة تخطيط الاستراحات وتجنب ملء كل ساعة بالكامل.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-AUD-READ-01

Hana arbeitet und besucht abends einen Kurs. Früher begann sie jeden Tag mit einer langen Aufgabenliste. Jetzt wählt sie zuerst drei Prioritäten aus. Sie bündelt kurze Erledigungen, indem sie mehrere Telefonate hintereinander führt. Während ihrer Lesezeit schaltet sie Benachrichtigungen aus. Bei einem Sachtext notiert sie nach jedem Abschnitt eine Kernidee; bei einem Roman liest sie dagegen in längeren Abschnitten. Dadurch, dass sie die Lesestrategie an die Textsorte anpasst, versteht sie den Text besser, ohne jedes Wort nachzuschlagen. Hana plant außerdem freie Zeit ein. Sie betrachtet ihren Plan als Orientierung, nicht als starre Vorschrift.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 9 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Hana arbeitet und besucht abends einen Kurs.
  - تعمل Hana وتحضر دورة مسائية؛ سياق واقعي لتنظيم الوقت.
- **2.** Früher begann sie jeden Tag mit einer langen Aufgabenliste.
  - في السابق كانت تبدأ كل يوم بقائمة مهام طويلة؛ ماضٍ بسيط begann.
- **3.** Jetzt wählt sie zuerst drei Prioritäten aus.
  - الآن تختار أولًا ثلاث أولويات؛ فعل منفصل wählt … aus.
- **4.** Sie bündelt kurze Erledigungen, indem sie mehrere Telefonate hintereinander führt.
  - تجمع الأعمال القصيرة بأن تجري عدة مكالمات هاتفية متتالية؛ indem … führt.
- **5.** Während ihrer Lesezeit schaltet sie Benachrichtigungen aus.
  - أثناء وقت القراءة تعطل الإشعارات؛ schaltet … aus.
- **6.** Bei einem Sachtext notiert sie nach jedem Abschnitt eine Kernidee; bei einem Roman liest sie dagegen in längeren Abschnitten.
  - في النص المعلوماتي تدون فكرة رئيسة بعد كل مقطع، أما في الرواية فتقرأ في مقاطع أطول.
- **7.** Dadurch, dass sie die Lesestrategie an die Textsorte anpasst, versteht sie den Text besser, ohne jedes Wort nachzuschlagen.
  - من خلال تكييف استراتيجية القراءة مع نوع النص تفهم النص أفضل دون البحث عن كل كلمة في القاموس؛ Dadurch, dass … وohne … nachzuschlagen.
- **8.** Hana plant außerdem freie Zeit ein.
  - تخطط Hana أيضًا لوقت حر.
- **9.** Sie betrachtet ihren Plan als Orientierung, nicht als starre Vorschrift.
  - تعد خطتها توجيهًا مرنًا لا قاعدة جامدة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-01-AUD-LST-01

Ich habe früher oft zwischen mehreren Aufgaben gewechselt. Jetzt plane ich zwei Zeitblöcke für konzentrierte Arbeit. Indem ich ähnliche Aufgaben nacheinander erledige, werde ich seltener unterbrochen. Für längere Texte notiere ich am Rand Fragen. Dadurch, dass ich Pausen einplane, kann ich mich besser auf den nächsten Abschnitt konzentrieren. Meine Methode passt nicht für jede Person, aber für meinen Alltag ist sie hilfreich.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 6 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Ich habe früher oft zwischen mehreren Aufgaben gewechselt.
  - في السابق كان المتحدث يتنقل كثيرًا بين عدة مهام؛ Perfekt مع habe … gewechselt.
- **2.** Jetzt plane ich zwei Zeitblöcke für konzentrierte Arbeit.
  - الآن يخطط لفترتين زمنيتين للعمل المركز.
- **3.** Indem ich ähnliche Aufgaben nacheinander erledige, werde ich seltener unterbrochen.
  - بإنجاز المهام المتشابهة تباعًا تقل مقاطعته؛ تقدمت جملة Indem فتلاها الفعل المصرف werde.
- **4.** Für längere Texte notiere ich am Rand Fragen.
  - للنصوص الطويلة يدون أسئلة على الهامش.
- **5.** Dadurch, dass ich Pausen einplane, kann ich mich besser auf den nächsten Abschnitt konzentrieren.
  - من خلال تخطيط الاستراحات يستطيع التركيز بصورة أفضل على المقطع التالي؛ Dadurch, dass … kann ich mich … konzentrieren.
- **6.** Meine Methode passt nicht für jede Person, aber für meinen Alltag ist sie hilfreich.
  - طريقته لا تناسب كل شخص، لكنها مفيدة لحياته اليومية.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

