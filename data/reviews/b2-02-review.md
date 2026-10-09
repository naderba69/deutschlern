# CR44 — مراجعة B2.2 الفردية والتراكمية

## إيصال رفع CR44 — 2026-10-09

- **التنفيذ:** `4d84421c0ab548dd2654e266afa5aa1f5e79df91`؛ **التقرير والفحوص:** `07f5abe81649e3484f4ff4efa1b7153371fae6ae`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR44 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `07f5abe`. النشر في Vercel محكوم بحد النشر اليومي (`Deployment rate limited — retry in 24 hours.` و`deployments=[]`)؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و44 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,158,066` بايت، `b2-02-v2`، `v93`. **189 حالة axe** وصفر مخالفات للقواعد المختارة مع **135 ظهورًا غير حاسم/334 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 100 وحدة/40 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و10 مراجع مقروءة بالكامل (مع استبعاد رابط 404 واحد). وُسّع جدول `Konjunktiv I` بإضافة `sollen → solle` و`helfen → helfe` مع 10 نقاط مساعدة، ووُسّع `T02` إلى 4 بنود (بإضافة بديل `Konjunktiv II` في الجمع `hätten`) و`T04` إلى 5 بنود و`T07` إلى 4 بنود (بإضافة جملة `dass` مع الفعل في النهاية `sei`). `P01` ملخص مكتوب من 5 جمل لمحادثة استشارية (`580` حرفًا)، و`P02` إحاطة مهنية من 5 جمل لزميل استنادًا إلى `T06` مع الجهر (`553` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 160/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و591 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.2؛ خمسة أصول/11 مقطعًا بأصوات `Nora` (`voice-02`) و`Fadi` (`voice-03`) من `A2.11` والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-02-review.*` والحارس والفهرس والتوثيق والخطة `2.50` ووثيقتا التسليم محدثة. التغطية **43/53 درسًا والبوابة منفصلة، 10 دروس متبقية في B2**. التالي **CR45/B2.3** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


**أحدث مراجعة محتوى CR44 — 2026-10-09:** رُوجع **B2.2 — العمل والمسار المهني والتواصل الرسمي: Konjunktiv I** في **100 وحدة و40 بندًا داخل التمارين و10 أجزاء نموذج، و30 خيارًا و6 معايير**، بالاستناد إلى **10 مراجع مقروءة بالكامل** (واستبعاد رابط 404 واحد). أُضيف تنبيه مفردات عن `Werdegang` و`anstreben` مقابل `vereinbaren`/`übernehmen`، ووُسّع جدول `Konjunktiv I` بإضافة `sollen → solle` و`helfen → helfe` مع 10 نقاط مساعدة قبل النصوص، ووُسّع `T02` إلى 4 بنود (بإضافة بديل `Konjunktiv II` في الجمع `hätten`) و`T04` إلى 5 بنود و`T07` إلى 4 بنود (بإضافة جملة `dass` مع الفعل في النهاية `sei`). صارت **P01 ملخصًا مكتوبًا من 5 جمل لمحادثة مع مستشار مهني (580 حرفًا، كتابة فقط)** و**P02 إحاطة مهنية من 5 جمل لزميل استنادًا إلى T06 مع خطوة تالية مقترحة كتابة وجهر (553 حرفًا)**. الخيارات الـ30 والفهارس والروابط و80% وحدا 160/180 محفوظة؛ `b2-02-v2` و`v93`، وخمسة أصول/11 مقطعًا معلقة بأصوات `Nora`/`Fadi` المحفوظة من `A2.11` دون توليد أو استماع أو اعتماد. **الحملة 43/53 درسًا والبوابة منفصلة؛ تبقى 10 دروس في B2، والتالي CR45/B2.3.** الفحوص لا تعني دمج PR#1 أو اكتمال المشروع.

**التنفيذ المرفوع:** `4d84421c0ab548dd2654e266afa5aa1f5e79df91` على `arena/01a1036f-deutschlern`. يرفع هذا التقرير فور فحصه بعنوان `Record CR44 granular B2.2 review and cumulative checks` ثم يُوثّق إيصال الرفع. PR#1 غير مدمجة.

## التصحيحات وحدود الاستنتاج

- أُضيف تنبيه مفردات تحت `## 1)` عن إفراد `Werdegang` وندرة جمعه `Werdegänge`، وانفصال `anstreben` مقابل عدم انفصال `vereinbaren` و`übernehmen`.
- وُسّع جدول `Konjunktiv I` في `## 2)` بإضافة `sollen → solle` و`helfen → helfe`، وأُضيفت 10 نقاط مساعدة قبل النصوص والمهمات.
- وُسّع `T02` إلى 4 بنود (بإضافة بديل `Konjunktiv II` في الجمع `hätten`) و`T04` إلى 5 بنود و`T07` إلى 4 بنود (بإضافة جملة `dass` مع الفعل في النهاية `sei`).
- فُصلت `P01` (ملخص مكتوب من 5 جمل لمحادثة استشارية: كتابة فقط) عن `P02` (إحاطة مهنية من 5 جمل لزميل استنادًا إلى `T06` مع خطوة تالية مقترحة: كتابة وجهر)، وطُوبق نص التمرين والمعايير والنموذجان.

## الفحوص التراكمية — CR44

- **PASS:** البناء والتحقق، و44 حارسًا (بما فيها `tools/test_b2_02_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,158,066 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` من المحاولة الأولى.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v93` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-02-v1` محفوظ لكنه لا يمنح إتقان `b2-02-v2` أو يفتح `B2.3`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-03-consumption-environment-passive-modal` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 580/553 حرفًا فوق حدَّي 160/180 حرفًا.
- **axe والعرض الضيق:** **189 حالة** وصفر مخالفات للقواعد المختارة، مع **135 ظهورًا غير حاسم تشمل 334 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `4d84421c0ab548dd2654e266afa5aa1f5e79df91` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

## الحفظ والحدود

مقارنة بالأساس `4b704b338df9fdf2c44eefaa7df4ee995c3da713`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.2 وبقي `DL-B2-02-AUD-PHR-01` ثابتًا. حُفظت 591 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Nora` (`voice-02`) و`Fadi` (`voice-03`) من `A2.11` والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/11 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

- مراجعة نصية مصدرية بالذكاء الاصطناعي؛ ليست شهادة CEFR أو WCAG أو اختبارًا لمتعلمين حقيقيين، ولا مراجع بشري شرطًا للاستمرار.
- 10 مراجع مقروءة بالكامل (مرجعا Lingolia بجزأيهما 0 و1 من 2، و8 مراجع Duden بجزئها الكامل 0 من 1)، واستُبعد رابط Duden واحد أعاد 404. المراجع المعجمية المباشرة تخص الألفاظ المسماة (Werdegang وQualifikation وAnforderungsprofil وStellenausschreibung وFührungskraft وZuständigkeit وEmpfehlung وanstreben وvereinbaren) لا كل كلمة في الجدول.
- خمسة أصول/11 مقطعًا معلقة ومحفوظة بأصوات Nora (voice-02) وFadi (voice-03) من A2.11 والسرد (voice-02) والاستماع (voice-03)؛ فحص MP3 والتشغيل الآلي الصامت ومطابقة التفريغ ليست استماعًا أو اعتمادًا صوتيًا.
- الحد الأدنى للحروف (160/180) والإقرارات الذاتية والجهر في P02 لا تصحح عدد الجمل أو القواعد أو النطق آليًا.
- 189 حالة axe وصفر مخالفات للقواعد المختارة، مع 135 ظهورًا غير حاسم تشمل 334 ظهورًا لعقد؛ ليست مخالفات مؤكدة ولا شهادة وصول شاملة.
- فحوص 320×900 و568×320 و1440×900 و390×844 تتم عبر CSS viewports في Chromium وليست هواتف فعلية أو تكبير متصفح أصليًا؛ تحديث v42 إلى v93 fixture محدد وليس كل مسار تاريخي.
- نشر التنفيذ 4d84421 محكوم بحد النشر اليومي في Vercel (deployments=[])؛ لا إعادة نشر آلية ولا شراء ترقية، ولم تختبر الواجهة البعيدة أو Production، وPR#1 غير مدمجة.

## المراجع ونطاق القراءة

- **INDIR — Lingolia — Indirect Speech in German Grammar** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech): قُرئ الجزآن 0 و1 من 2 بالكامل: يشرح أفعال النقل (sagt/meint/erklärt/berichtet)، واختيارية dass مع تغير موضع الفعل بين الثاني والنهاية، وحياد Konjunktiv I، واستبداله بـKonjunktiv II عند تطابق الصيغة مع المضارع المرفوع (مثل sie haben → sie hätten). **قرئت كاملة**؛ الأجزاء [0, 1] من 2، بتاريخ 2026-10-09.
- **KONJ — Lingolia — Konjunktiv – the Subjunctive Mood in German Grammar** [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive): قُرئ الجزآن 0 و1 من 2 بالكامل: يشرح اشتقاق الغائب المفرد في Konjunktiv I بحذف -n من المصدر (haben → habe، können → könne)، وتصريف sein الخاص (ich/er/sie/es sei، wir/sie seien)، واستعمال Konjunktiv II بديلًا عند تطابق الصيغة مع المضارع. **قرئت كاملة**؛ الأجزاء [0, 1] من 2، بتاريخ 2026-10-09.
- **WERDEGANG — Duden — Werdegang** [WERDEGANG](https://www.duden.de/rechtschreibung/Werdegang): اسم مذكر جمعُه النادر die Werdegänge؛ يدل على مسار التطور التعليمي والمهني للفرد (seinen beruflichen Werdegang schildern). **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **QUALIFIKATION — Duden — Qualifikation** [QUALIFIKATION](https://www.duden.de/rechtschreibung/Qualifikation): اسم مؤنث جمعُه die Qualifikationen؛ يدل على الكفاءة أو المؤهل المكتسب بالتعليم أو الخبرة لمزاولة عمل معين. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **ANFORDERUNGSPROFIL — Duden — Anforderungsprofil** [ANFORDERUNGSPROFIL](https://www.duden.de/rechtschreibung/Anforderungsprofil): اسم محايد جمعُه die Anforderungsprofile؛ مجموع المتطلبات التي ينبغي أن يستوفيها المتقدم لوظيفة معينة. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **STELLENAUSSCHREIBUNG — Duden — Stellenausschreibung** [STELLENAUSSCHREIBUNG](https://www.duden.de/rechtschreibung/Stellenausschreibung): اسم مؤنث جمعُه die Stellenausschreibungen؛ الإعلان الرسمي عن وظيفة شاغرة. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **FUEHRUNGSKRAFT — Duden — Führungskraft** [FUEHRUNGSKRAFT](https://www.duden.de/rechtschreibung/Fuehrungskraft): اسم مؤنث جمعُه die Führungskräfte؛ شخص يشغل منصبًا قياديًا أو إداريًا في مؤسسة. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **ZUSTAENDIGKEIT — Duden — Zuständigkeit** [ZUSTAENDIGKEIT](https://www.duden.de/rechtschreibung/Zustaendigkeit): اسم مؤنث جمعُه die Zuständigkeiten؛ الاختصاص أو مجال المسؤولية والصلاحية. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **EMPFEHLUNG — Duden — Empfehlung** [EMPFEHLUNG](https://www.duden.de/rechtschreibung/Empfehlung): اسم مؤنث جمعُه die Empfehlungen؛ نصيحة أو توصية أو تزكية مهنية. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **ANSTREBEN — Duden — anstreben** [ANSTREBEN](https://www.duden.de/rechtschreibung/anstreben): فعل ضعيف منفصل تصريفه strebt an، strebte an، hat angestrebt؛ يدل على السعي إلى تحقيق هدف أو منصب (eine bessere Stellung / ein Ziel anstreben). **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.

**صفحات مستبعدة، وليست مراجع:**
- https://www.duden.de/rechtschreibung/uebernehmen — صفحة خطأ 404؛ استُبعدت ولم تُحتسب مرجعًا

## الوحدات الفردية — 100 وحدة

التقسيم: 6 نطاقات، 15 صف مفردات، 10 جمل نماذج قواعد، 10 مساعدات، 7 أدوار حوار، 6 جمل قراءة و5 أسئلة، 5 جمل استماع و5 أسئلة، 8 تمارين، 10 أسئلة تقييم، مهمتا أداء، نموذجان مفصلان إلى 10 أجزاء، 4 بطاقات، 5 أصول صوت. بنود التمارين 40 بتوزيع 4/4/3/5/5/5/4/10.

### scope-01

**المدة المقترحة:** 45–50 دقيقة (مرنة؛ يمكن تقسيمها إلى جلستين) · **المهارات:** قراءة محضر مهني، استماع، قواعد الكلام المنقول، عرض خبرة، كتابة مهنية وإحاطة شفهية (الصوت المسجّل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط دون شريك أو تسجيل)

**نتيجة المراجعة:** المدة مقترحة قابلة للتقسيم؛ الصوت المسجل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### scope-02

**الهدف:** أستطيع أن أنقل أقوالًا ومعلومات مهنية مع نسبتها إلى مصدرها بأسلوب محايد، مستخدمًا صيغًا شائعة من **Konjunktiv I** (مع بديل **Konjunktiv II** عند تطابق الصيغة مع المضارع)، وأن أميّز بين الكلام المنقول والمعلومة أو التوصية التي أؤكدها بنفسي. هذا الدرس وتقييمه المحلي للتعلّم الذاتي ولا يمنحان شهادة رسمية لمستوى B2.

**نتيجة المراجعة:** الهدف نقل الأقوال والمعلومات المهنية بحياد بـKonjunktiv I (مع بديل Konjunktiv II عند التطابق) والتمييز بين النقل والمؤكد؛ لا يمنح الدرس شهادة B2.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### scope-03

تنبيه مفردات: يُستعمل **der Werdegang** في الأغلب بالمفرد بمعنى المسيرة المهنية أو التعليمية (**seinen beruflichen Werdegang schildern**)، وجمعه **die Werdegänge** نادر. والفعل **anstreben** فعل ضعيف منفصل (**strebt an, strebte an, hat angestrebt**) متعدٍّ إلى المفعول به (**eine Stelle / ein Ziel anstreben**). أما **vereinbaren** و**übernehmen** ففعلان غير منفصلين لأن البادئتين **ver-** و**über-** لا تنفصلان هنا (**vereinbart, hat vereinbart**؛ **übernimmt, übernahm, hat übernommen**).

**نتيجة المراجعة:** وُضح إفراد Werdegang في الأغلب وندرة جمعه Werdegänge، وانفصال anstreben مقابل عدم انفصال vereinbaren وübernehmen.


**مصادر القاعدة/المعنى:** [WERDEGANG](https://www.duden.de/rechtschreibung/Werdegang), [ANSTREBEN](https://www.duden.de/rechtschreibung/anstreben)

### scope-04

يُستخدم **Konjunktiv I** في التقارير والمحاضر لنقل ما قاله شخص آخر من دون عرضه على أنه رأي الكاتب أو حقيقة مؤكدة. في الكلام المنقول من دون **dass** يأتي الفعل المصرف في الموضع الثاني كما في الجملة الرئيسية، أما مع **dass** فيتأخر الفعل المصرف إلى نهاية الجملة التابعة.

**نتيجة المراجعة:** قُيّد موضع الفعل المصرف في الكلام المنقول بين الموضع الثاني من دون dass ونهاية الجملة التابعة مع dass.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### scope-05

يمكن نقل الكلام من دون **dass** بترتيب الجملة الرئيسية: **Der Coach sagt, der Lebenslauf sei klar.** ويمكن أيضًا استعمال **dass**، وعندها يأتي الفعل في نهاية الجملة التابعة: **Der Coach sagt, dass der Lebenslauf klar sei.**

**نتيجة المراجعة:** مقابلة مباشرة بين Der Coach sagt, der Lebenslauf sei klar وبين Der Coach sagt, dass der Lebenslauf klar sei.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### scope-06

قد تتطابق صيغة **Konjunktiv I** في الجمع مع المضارع. عند الحاجة إلى تمييز الكلام المنقول، تُستعمل أحيانًا صيغة **Konjunktiv II** بديلًا: **Sie sagen: „Wir haben klare Ziele.“ → Sie sagen, sie hätten klare Ziele.**

**نتيجة المراجعة:** قاعدة اللجوء إلى Konjunktiv II في الجمع عند تطابق Konjunktiv I مع المضارع (Sie sagen, sie hätten klare Ziele).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### vocab-01

| der Berufsweg | die Berufswege | المسار المهني |

**نتيجة المراجعة:** Berufsweg مذكر وجمعه Berufswege؛ المسار المهني.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-02

| der Werdegang | die Werdegänge | السيرة / المسيرة المهنية |

**نتيجة المراجعة:** Werdegang مذكر وجمعه النادر Werdegänge؛ السيرة أو المسيرة المهنية والتعليمية.


**مصادر القاعدة/المعنى:** [WERDEGANG](https://www.duden.de/rechtschreibung/Werdegang)

### vocab-03

| die Qualifikation | die Qualifikationen | المؤهل / الكفاءة |

**نتيجة المراجعة:** Qualifikation مؤنث وجمعها Qualifikationen؛ المؤهل أو الكفاءة المهنية.


**مصادر القاعدة/المعنى:** [QUALIFIKATION](https://www.duden.de/rechtschreibung/Qualifikation)

### vocab-04

| die Berufserfahrung | — | الخبرة المهنية |

**نتيجة المراجعة:** Berufserfahrung مؤنث وتُستعمل هنا بلا جمع؛ الخبرة المهنية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-05

| das Anforderungsprofil | die Anforderungsprofile | ملف متطلبات الوظيفة |

**نتيجة المراجعة:** Anforderungsprofil محايد وجمعه Anforderungsprofile؛ ملف متطلبات الوظيفة.


**مصادر القاعدة/المعنى:** [ANFORDERUNGSPROFIL](https://www.duden.de/rechtschreibung/Anforderungsprofil)

### vocab-06

| die Stellenausschreibung | die Stellenausschreibungen | إعلان الوظيفة |

**نتيجة المراجعة:** Stellenausschreibung مؤنث وجمعها Stellenausschreibungen؛ إعلان الوظيفة الشاغرة.


**مصادر القاعدة/المعنى:** [STELLENAUSSCHREIBUNG](https://www.duden.de/rechtschreibung/Stellenausschreibung)

### vocab-07

| die Führungskraft | die Führungskräfte | مسؤول إداري / قائد فريق |

**نتيجة المراجعة:** Führungskraft مؤنث وجمعها Führungskräfte؛ مسؤول إداري أو قائد فريق.


**مصادر القاعدة/المعنى:** [FUEHRUNGSKRAFT](https://www.duden.de/rechtschreibung/Fuehrungskraft)

### vocab-08

| die Weiterentwicklung | die Weiterentwicklungen | التطوّر المهني |

**نتيجة المراجعة:** Weiterentwicklung مؤنث وجمعها Weiterentwicklungen؛ التطور المهني.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-09

| die Zuständigkeit | die Zuständigkeiten | مجال المسؤولية |

**نتيجة المراجعة:** Zuständigkeit مؤنث وجمعها Zuständigkeiten؛ مجال المسؤولية أو الاختصاص.


**مصادر القاعدة/المعنى:** [ZUSTAENDIGKEIT](https://www.duden.de/rechtschreibung/Zustaendigkeit)

### vocab-10

| die Empfehlung | die Empfehlungen | التوصية |

**نتيجة المراجعة:** Empfehlung مؤنث وجمعها Empfehlungen؛ التوصية أو النصيحة.


**مصادر القاعدة/المعنى:** [EMPFEHLUNG](https://www.duden.de/rechtschreibung/Empfehlung)

### vocab-11

| anstreben | strebt an | يسعى إلى |

**نتيجة المراجعة:** anstreben فعل ضعيف منفصل حاضرُه strebt an؛ يسعى إلى منصب أو هدف.


**مصادر القاعدة/المعنى:** [ANSTREBEN](https://www.duden.de/rechtschreibung/anstreben)

### vocab-12

| sich beruflich orientieren | orientiert sich | يحدّد توجهه المهني |

**نتيجة المراجعة:** sich beruflich orientieren فعل انعكاسي حاضرُه orientiert sich؛ يحدد توجهه المهني.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-13

| vereinbaren | vereinbart | يتفق على / ينسّق |

**نتيجة المراجعة:** vereinbaren فعل ضعيف غير منفصل حاضرُه vereinbart؛ يتفق على أو ينسق.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-14

| übernehmen | übernimmt | يتولى |

**نتيجة المراجعة:** übernehmen فعل قوي غير منفصل حاضرُه übernimmt؛ يتولى مهمة أو مسؤولية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-15

| strukturiert / ausführlich | — | منظّم / مفصّل |

**نتيجة المراجعة:** strukturiert منظم وausführlich مفصل؛ صفتان لوصف العرض المهني والسيرة الذاتية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### grammar-01

Der Coach sagt: „Der Lebenslauf ist klar strukturiert.“

**نتيجة المراجعة:** Der Coach sagt: „Der Lebenslauf ist klar strukturiert.“: قول مباشر بين علامتي اقتباس במضارع Indikativ (ist).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech)

### grammar-02

Der Coach sagt, der Lebenslauf sei klar strukturiert.

**نتيجة المراجعة:** Der Coach sagt, der Lebenslauf sei klar strukturiert: نقل غير مباشر من دون dass، فجاء الفعل sei في الموضع الثاني.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### grammar-03

Die Beraterin sagt: „Die Bewerberin kann das Projekt leiten.“

**نتيجة المراجعة:** Die Beraterin sagt: „Die Bewerberin kann das Projekt leiten.“: قول مباشر بالفعل الناقص المرفوع kann.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech)

### grammar-04

Die Beraterin sagt, die Bewerberin könne das Projekt leiten.

**نتيجة المراجعة:** Die Beraterin sagt, die Bewerberin könne das Projekt leiten: نقل بـKonjunktiv I (könne) في الموضع الثاني والمصدر leiten في النهاية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### grammar-05

Der Mentor sagt: „Die Berufserfahrung hilft.“

**نتيجة المراجعة:** Der Mentor sagt: „Die Berufserfahrung hilft.“: قول مباشر بالفعل القوي المرفوع hilft.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech)

### grammar-06

Der Mentor sagt, die Berufserfahrung helfe.

**نتيجة المراجعة:** Der Mentor sagt, die Berufserfahrung helfe: نقل بـKonjunktiv I المشتق من جذر المصدر (helfe) بلا تغير حركة الجذر.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### grammar-07

Der Coach sagt, der Lebenslauf sei klar.

**نتيجة المراجعة:** Der Coach sagt, der Lebenslauf sei klar: نقل من دون dass بترتيب الجملة الرئيسية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### grammar-08

Der Coach sagt, dass der Lebenslauf klar sei.

**نتيجة المراجعة:** Der Coach sagt, dass der Lebenslauf klar sei: نقل مع الرابط dass وتأخير الفعل المصرف sei إلى نهاية الجملة التابعة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### grammar-09

Sie sagen: „Wir haben klare Ziele.“

**نتيجة المراجعة:** Sie sagen: „Wir haben klare Ziele.“: قول مباشر بصيغة المتكلمين الجمع (Wir haben).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech)

### grammar-10

Sie sagen, sie hätten klare Ziele.

**نتيجة المراجعة:** Sie sagen, sie hätten klare Ziele: تحويل الضمير إلى sie واستعمال Konjunktiv II (hätten) لأن sie haben في Konjunktiv I تطابق المضارع.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### helper-01

- **الوظيفة الدلالية لـKonjunktiv I:** يدلّ على نقل كلام مصدر آخر بحياد (**Sie sagt / erklärt / meint / berichtet / fügt hinzu, …** أو **Laut …**) من دون تبنّي القول كحقيقة يقرّرها الكاتب بنفسه.

**نتيجة المراجعة:** بيان الوظيفة الحيادية لـKonjunktiv I في نسبة الأقوال إلى أصحابها دون تبنيها كحقيقة يؤكدها الكاتب.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### helper-02

- **اشتقاق الغائب المفرد (`er/sie/es`):** يُشتق في معظم الأفعال بحذف **-n** من المصدر (**haben → habe**، **können → könne**، **müssen → müsse**، **sollen → solle**، **wollen → wolle**، **helfen → helfe**، **passen → passe**، **zeigen → zeige**، **enthalten → enthalte**)، بلا تغير الحركة الداخلية كما في المضارع المرفوع (**kann / hilft / enthält**). والفعل **sein** خاص: **er/sie/es sei** (وفي الجمع **sie seien**).

**نتيجة المراجعة:** توضيح قاعدة اشتقاق الغائب المفرد بحذف -n من المصدر دون تغير حركة الجذر، مع تمييز تصريف sein الخاص.


**مصادر القاعدة/المعنى:** [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### helper-03

- **ترتيب الفعل مع `dass` ومن دونه:** من دون **dass** يقع الفعل المصرف في الموضع الثاني (**Der Coach sagt, der Lebenslauf sei klar.**)، ومع **dass** يتأخر الفعل المصرف إلى نهاية الجملة التابعة (**Der Coach sagt, dass der Lebenslauf klar sei.**).

**نتيجة المراجعة:** المقابلة التركيبية بين غياب dass (الفعل في الموضع الثاني) وحضور dass (الفعل في نهاية الجملة التابعة).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### helper-04

- **الأفعال الناقصة والمصدر في النهاية:** عند استعمال **könne / müsse / solle / wolle** يبقى المصدر أو مركّب المبني للمجهول في آخر الجملة (**das Projekt leiten**، **konkret formuliert werden**).

**نتيجة المراجعة:** تثبيت بقاء المصدر أو مركب المبني للمجهول في نهاية الجملة مع الأفعال الناقصة könne/müsse/solle/wolle.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### helper-05

- **نقل الماضي بصيغة Perfekt في Konjunktiv I:** يُنقل الماضي (سواء أكان في الأصل **Präteritum** أم **Perfekt** أم **Plusquamperfekt**) باستعمال **habe** أو **sei** مع اسم المفعول في نهاية الجملة (**sie habe im letzten Jahr ein kleines Team koordiniert**).

**نتيجة المراجعة:** بيان نقل الماضي بصيغة Perfekt في Konjunktiv I (habe/sei + Partizip II).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### helper-06

- **تحويل الضمائر والملكية:** يتغير الضمير بحسب منظور الناقل؛ فقول المتحدث عن نفسه **„Ich möchte …“** يتحول عند الحديث عنه إلى **sie wolle / er wolle**، وقول الجماعة **„Wir haben klare Ziele.“** يتحول إلى **sie hätten klare Ziele**.

**نتيجة المراجعة:** ضبط تحويل الضمائر من المتكلم المفرد والجمع إلى الغائب المفرد والجمع عند النقل.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech)

### helper-07

- **متى نستعمل Konjunktiv II بديلًا؟** عندما تتطابق صيغة **Konjunktiv I** مع المضارع المرفوع (**Indikativ**)، ولا سيما مع **ich** و**wir** و**sie/Sie** في الجمع (**sie haben → sie hätten**)، لنحافظ على وضوح أن الكلام منقول.

**نتيجة المراجعة:** تحديد مواضع اللجوء إلى Konjunktiv II عند تطابق Konjunktiv I مع المضارع المرفوع.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### helper-08

- **الفصل بين الاقتباس والنقل والرأي الشخصي:** الاقتباس المباشر يوضع بين علامتي اقتباس ألمانيتين **„…“**، والكلام المنقول يُنسب إلى صاحبه بـ**Konjunktiv I/II**، أما رأي الكاتب أو خطوته المقترحة فيُصاغ بوضوح بصيغة المؤكد مثل **Aus meiner Sicht ist …** أو **Ich empfehle …**.

**نتيجة المراجعة:** التمييز العملي بين الاقتباس المباشر („…“) والكلام المنقول بـKonjunktiv I/II والرأي الشخصي المصاغ بالمؤكد.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech)

### helper-09

- **تنبيه معجمي:** نفرّق بين **der Lebenslauf** (جدول السيرة الذاتية) و**das Anschreiben** (رسالة التقديم المرفقة)، وبين **das Anforderungsprofil** (متطلبات الوظيفة المعلنة) و**die Qualifikation / die Berufserfahrung** (ما يحمله المتقدم من مؤهلات وخبرة).

**نتيجة المراجعة:** التفريق المعجمي بين Lebenslauf وAnschreiben وبين Anforderungsprofil وQualifikation/Berufserfahrung.


**مصادر القاعدة/المعنى:** [QUALIFIKATION](https://www.duden.de/rechtschreibung/Qualifikation), [ANFORDERUNGSPROFIL](https://www.duden.de/rechtschreibung/Anforderungsprofil)

### helper-10

- **أداء المهمتين T08 (`P01` و`P02`):** المهمة الأولى **P01** كتابة فقط دون جهر، والمهمة الثانية **P02** كتابة مع قراءة جهرية ذاتية دون شريك أو تسجيل؛ والتقييم يعتمد على النصوص المكتوبة والتحقق الذاتي المحلي ولا يتوقف على تشغيل ملفات الصوت.

**نتيجة المراجعة:** تحديد P01 كتابة فقط وP02 كتابة وجهر ذاتي، وبيان استقلال التقييم عن ملفات الصوت.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-01

Was sagte die Beraterin über Amiras Lebenslauf?

**نتيجة المراجعة:** Nora تسأل عما قالته المستشارة بشأن سيرة Amira الذاتية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-02

Sie sagte, Amiras Werdegang sei klar dargestellt.

**نتيجة المراجعة:** Fadi ينقل رأي المستشارة بـKonjunktiv I: Amiras Werdegang sei klar dargestellt.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive), [WERDEGANG](https://www.duden.de/rechtschreibung/Werdegang)

### dialogue-03

Und was soll Amira noch ergänzen?

**نتيجة المراجعة:** Nora تسأل عما ينبغي لـAmira أن تضيفه بعد.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-04

Sie meinte, Amira habe viel Erfahrung in der Kundenbetreuung und solle zwei konkrete Beispiele hinzufügen.

**نتيجة المراجعة:** Fadi ينقل معلومتين معطوفتين بـKonjunktiv I: Amira habe viel Erfahrung … und solle zwei konkrete Beispiele hinzufügen.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### dialogue-05

Hat sie auch etwas über die Stelle gesagt?

**نتيجة المراجعة:** سؤال نعم/لا عن رأي المستشارة في الوظيفة الشاغرة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-06

Ja. Das Anforderungsprofil sei anspruchsvoll, aber Amiras Profil passe dazu.

**نتيجة المراجعة:** نقل تقييم متوازن بـKonjunktiv I: Das Anforderungsprofil sei anspruchsvoll, aber Amiras Profil passe dazu.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive), [ANFORDERUNGSPROFIL](https://www.duden.de/rechtschreibung/Anforderungsprofil)

### dialogue-07

Dann werde ich Amira beim Überarbeiten helfen.

**نتيجة المراجعة:** Nora تختم بعزمها المباشر في المستقبل (werde … helfen) على مساعدة Amira في المراجعة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-01

Gesprächsnotiz — Berufsberatung.

**نتيجة المراجعة:** عنوان المحضر المهني: Gesprächsnotiz — Berufsberatung.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-02

Die Beraterin erklärt, die Bewerberin habe mehrere Jahre Erfahrung im Kundenservice.

**نتيجة المراجعة:** تنقل المستشارة خبرة المتقدمة بـKonjunktiv I: die Bewerberin habe mehrere Jahre Erfahrung im Kundenservice.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### reading-03

Ihr Lebenslauf sei übersichtlich, enthalte aber noch zu wenige konkrete Beispiele.

**نتيجة المراجعة:** تنقل المستشارة تقويم السيرة الذاتية بفعلي Konjunktiv I: Ihr Lebenslauf sei übersichtlich, enthalte aber noch zu wenige konkrete Beispiele.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### reading-04

Die Bewerberin könne ihre Zuständigkeiten im letzten Projekt genauer beschreiben.

**نتيجة المراجعة:** تنقل إمكان تفصيل المسؤوليات بـkönne: Die Bewerberin könne ihre Zuständigkeiten im letzten Projekt genauer beschreiben.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive), [ZUSTAENDIGKEIT](https://www.duden.de/rechtschreibung/Zustaendigkeit)

### reading-05

Die Beraterin ergänzt, ein kurzes Anschreiben helfe dabei, den Wechselwunsch zu erklären.

**نتيجة المراجعة:** تضيف المستشارة دور رسالة التقديم بـhelfe: ein kurzes Anschreiben helfe dabei, den Wechselwunsch zu erklären.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### reading-06

Die Bewerberin sagt, sie wolle künftig mehr Verantwortung übernehmen und strebe eine Stelle im Projektmanagement an.

**نتيجة المراجعة:** تنقل المتقدمة هدفها المهني بـwolle وstrebe … an: sie wolle künftig mehr Verantwortung übernehmen und strebe eine Stelle im Projektmanagement an.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive), [ANSTREBEN](https://www.duden.de/rechtschreibung/anstreben)

### reading-question-01

Wie viel Erfahrung hat die Bewerberin laut Notiz?

**نتيجة المراجعة:** Sie habe mehrere Jahre Erfahrung im Kundenservice. — لديها عدة سنوات من الخبرة في خدمة العملاء.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-02

Wie beurteilt die Beraterin den Lebenslauf?

**نتيجة المراجعة:** Ihr Lebenslauf sei übersichtlich, enthalte aber zu wenige konkrete Beispiele. — سيرتها الذاتية واضحة التنظيم لكنها تفتقر إلى أمثلة محددة كافية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-03

Was könne die Bewerberin genauer beschreiben?

**نتيجة المراجعة:** Sie könne ihre Zuständigkeiten im letzten Projekt genauer beschreiben. — تستطيع وصف مسؤولياتها في المشروع الأخير بمزيد من الدقة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-04

Wobei helfe ein kurzes Anschreiben?

**نتيجة المراجعة:** Es helfe dabei, den Wechselwunsch zu erklären. — تساعد رسالة التقديم القصيرة على شرح رغبتها في التغيير الوظيفي.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-05

Welches berufliche Ziel strebe die Bewerberin an?

**نتيجة المراجعة:** Sie strebe eine Stelle im Projektmanagement an. — تسعى إلى وظيفة في إدارة المشاريع.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-01

Im Seminar über Bewerbungen sagte der Coach, ein berufliches Ziel müsse konkret formuliert werden.

**نتيجة المراجعة:** في ندوة التقديم للوظائف نقل المدرب بـmüsse والمبني للمجهول أن الهدف المهني يجب أن يصاغ بصورة محددة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### listening-02

Der Lebenslauf solle wichtige Aufgaben und Ergebnisse nennen.

**نتيجة المراجعة:** نقل بـsolle أن السيرة الذاتية ينبغي أن تذكر المهام والنتائج المهمة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### listening-03

Eine Teilnehmerin erklärte, sie habe im letzten Jahr ein kleines Team koordiniert.

**نتيجة المراجعة:** نقلت مشاركة بصيغة الماضي المنقول (habe … koordiniert) أنها نسقت فريقًا صغيرًا في العام الماضي.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### listening-04

Der Coach meinte, dieses Beispiel zeige ihre Organisationsfähigkeit.

**نتيجة المراجعة:** رأى المدرب بـzeige أن هذا المثال يظهر قدرتها التنظيمية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### listening-05

Er fügte hinzu, ein Anschreiben könne die Motivation kurz erläutern.

**نتيجة المراجعة:** أضاف المدرب بـkönne أن رسالة التقديم تستطيع شرح الدافع بإيجاز.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### listening-question-01

Was müsse laut Coach konkret formuliert werden?

**نتيجة المراجعة:** Ein berufliches Ziel. — الذي يجب صياغته بصورة محددة هو الهدف المهني.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-02

Was solle der Lebenslauf nennen?

**نتيجة المراجعة:** Wichtige Aufgaben und Ergebnisse. — ينبغي للسيرة الذاتية أن تذكر المهام والنتائج المهمة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-03

Was habe eine Teilnehmerin im letzten Jahr gemacht?

**نتيجة المراجعة:** Sie habe ein kleines Team koordiniert. — نسقت المشاركة فريقًا صغيرًا في العام الماضي.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-04

Welche Fähigkeit zeige dieses Beispiel?

**نتيجة المراجعة:** Ihre Organisationsfähigkeit. — يُظهر هذا المثال قدرتها التنظيمية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-05

Was könne ein Anschreiben erläutern?

**نتيجة المراجعة:** Die Motivation. — تستطيع رسالة التقديم شرح الدافع بإيجاز.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-T01

1. Die Beraterin sagt, der Lebenslauf ______ übersichtlich. (sein)
2. Der Coach meint, die Bewerberin ______ viel Erfahrung. (haben)
3. Die Führungskraft erklärt, der Mitarbeiter ______ das Projekt leiten. (können)
4. Der Mentor sagt, ein klares Ziel ______ hilfreich. (sein)

**نتيجة المراجعة:** أربع جمل تدرب صيغ الغائب المفرد الأساسية في Konjunktiv I: sei وhabe وkönne.

- **1.** Die Beraterin sagt, der Lebenslauf ______ übersichtlich. (sein)
  - **المفتاح:** sei؛ صيغة الغائب المفرد من sein في Konjunktiv I مع der Lebenslauf هي sei.
- **2.** Der Coach meint, die Bewerberin ______ viel Erfahrung. (haben)
  - **المفتاح:** habe؛ صيغة الغائب المفرد من haben في Konjunktiv I مع die Bewerberin هي habe.
- **3.** Die Führungskraft erklärt, der Mitarbeiter ______ das Projekt leiten. (können)
  - **المفتاح:** könne؛ صيغة الغائب المفرد من können في Konjunktiv I مع der Mitarbeiter هي könne.
- **4.** Der Mentor sagt, ein klares Ziel ______ hilfreich. (sein)
  - **المفتاح:** sei؛ صيغة الغائب المفرد من sein في Konjunktiv I مع ein klares Ziel هي sei.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-T02

1. **Der Coach sagt: „Das Anschreiben ist wichtig.“** → Der Coach sagt, das Anschreiben ______ wichtig.
2. **Die Beraterin sagt: „Die Bewerberin hat gute Qualifikationen.“** → Die Beraterin sagt, die Bewerberin ______ gute Qualifikationen.
3. **Der Mentor sagt: „Der Mitarbeiter kann die Aufgabe übernehmen.“** → Der Mentor sagt, der Mitarbeiter ______ die Aufgabe übernehmen.
4. **Sie sagen: „Wir haben klare Ziele.“** → Sie sagen, sie ______ klare Ziele. *(استخدم بديل Konjunktiv II لإزالة الالتباس في الجمع)*

**نتيجة المراجعة:** أربع جمل تحول الكلام المباشر إلى منقول بـsei وhabe وkönne وبديل الجمع hätten.

- **1.** **Der Coach sagt: „Das Anschreiben ist wichtig.“** → Der Coach sagt, das Anschreiben ______ wichtig.
  - **المفتاح:** sei؛ يتحول الفعل ist في الكلام المباشر إلى sei في الكلام المنقول.
- **2.** **Die Beraterin sagt: „Die Bewerberin hat gute Qualifikationen.“** → Die Beraterin sagt, die Bewerberin ______ gute Qualifikationen.
  - **المفتاح:** habe؛ يتحول الفعل hat في الكلام المباشر إلى habe في الكلام المنقول.
- **3.** **Der Mentor sagt: „Der Mitarbeiter kann die Aufgabe übernehmen.“** → Der Mentor sagt, der Mitarbeiter ______ die Aufgabe übernehmen.
  - **المفتاح:** könne؛ يتحول الفعل kann في الكلام المباشر إلى könne في الكلام المنقول.
- **4.** **Sie sagen: „Wir haben klare Ziele.“** → Sie sagen, sie ______ klare Ziele. *(استخدم بديل Konjunktiv II لإزالة الالتباس في الجمع)*
  - **المفتاح:** hätten؛ في الجمع تتطابق sie haben مع المضارع، فنستعمل بديل Konjunktiv II للتوضيح: hätten.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-T03

1. Die Beraterin erklärt, die Bewerberin ______ künftig mehr Verantwortung übernehmen. (wollen)
2. Der Coach sagt, das Team ______ klare Zuständigkeiten. (haben)
3. Die Führungskraft meint, die neue Stelle ______ anspruchsvoll. (sein)

**نتيجة المراجعة:** ثلاث جمل تثبت تصريف wolle وhabe وsei في سياق مهني.

- **1.** Die Beraterin erklärt, die Bewerberin ______ künftig mehr Verantwortung übernehmen. (wollen)
  - **المفتاح:** wolle؛ صيغة الغائب المفرد من wollen في Konjunktiv I هي wolle مع بقاء المصدر übernehmen في النهاية.
- **2.** Der Coach sagt, das Team ______ klare Zuständigkeiten. (haben)
  - **المفتاح:** habe؛ الفاعل das Team مفرد، فصيغة Konjunktiv I من haben هي habe.
- **3.** Die Führungskraft meint, die neue Stelle ______ anspruchsvoll. (sein)
  - **المفتاح:** sei؛ صيغة الغائب المفرد من sein مع die neue Stelle هي sei.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-T04

اكتب **مباشر** أو **منقول**:

1. **Der Coach sagt: „Ihr Profil passt zur Stelle.“**
2. **Der Coach sagt, das Profil passe zur Stelle.**
3. **Die Bewerberin erklärt, sie habe ein Praktikum absolviert.**
4. **Die Bewerberin sagt: „Ich möchte mich weiterentwickeln.“**
5. **Die Kolleginnen berichten, sie hätten die Aufgaben klar verteilt.**

**نتيجة المراجعة:** خمس جمل تميز بين الاقتباس المباشر والكلام المنقول بـKonjunktiv I أو بديل Konjunktiv II.

- **1.** **Der Coach sagt: „Ihr Profil passt zur Stelle.“**
  - **المفتاح:** مباشر؛ وجود علامتي الاقتباس „…“ والفعل المرفوع passt يعين الكلام المباشر.
- **2.** **Der Coach sagt, das Profil passe zur Stelle.**
  - **المفتاح:** منقول؛ غياب علامتي الاقتباس واستعمال صيغة passe يعين الكلام المنقول.
- **3.** **Die Bewerberin erklärt, sie habe ein Praktikum absolviert.**
  - **المفتاح:** منقول؛ استعمال صيغة الماضي المنقول habe … absolviert يعين الكلام المنقول.
- **4.** **Die Bewerberin sagt: „Ich möchte mich weiterentwickeln.“**
  - **المفتاح:** مباشر؛ وجود علامتي الاقتباس „…“ والضمير Ich يعين الكلام المباشر.
- **5.** **Die Kolleginnen berichten, sie hätten die Aufgaben klar verteilt.**
  - **المفتاح:** منقول؛ استعمال بديل Konjunktiv II في الجمع (sie hätten … verteilt) بعد berichten يعين الكلام المنقول.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-T05

حدّد صحيحًا أو خطأ:

1. لدى المتقدمة عدة سنوات من الخبرة في خدمة العملاء.
2. يرى الملخص أن سيرتها الذاتية غير منظّمة.
3. تستطيع المتقدمة أن تصف مسؤولياتها في المشروع السابق بمزيد من التفصيل.
4. ترغب المتقدمة مستقبلًا في تولي مسؤولية أكبر.
5. تسعى المتقدمة إلى وظيفة في إدارة المشاريع.

**نتيجة المراجعة:** خمس عبارات تتحقق من فهم محضر الاستشارة المهنية.

- **1.** لدى المتقدمة عدة سنوات من الخبرة في خدمة العملاء.
  - **المفتاح:** صحيح؛ صحيح؛ ينص المحضر على mehrere Jahre Erfahrung im Kundenservice.
- **2.** يرى الملخص أن سيرتها الذاتية غير منظّمة.
  - **المفتاح:** خطأ؛ خطأ؛ السيرة الذاتية واضحة التنظيم (übersichtlich) لكنها تفتقر إلى أمثلة محددة كافية.
- **3.** تستطيع المتقدمة أن تصف مسؤولياتها في المشروع السابق بمزيد من التفصيل.
  - **المفتاح:** صحيح؛ صحيح؛ تستطيع المتقدمة وصف مسؤولياتها في المشروع الأخير بدقة أكبر.
- **4.** ترغب المتقدمة مستقبلًا في تولي مسؤولية أكبر.
  - **المفتاح:** صحيح؛ صحيح؛ ترغب مستقبلًا في تولي مسؤولية أكبر (mehr Verantwortung übernehmen).
- **5.** تسعى المتقدمة إلى وظيفة في إدارة المشاريع.
  - **المفتاح:** صحيح؛ صحيح؛ تسعى إلى وظيفة في إدارة المشاريع (eine Stelle im Projektmanagement).

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-T06

أكمل بالألمانية:

1. Ein berufliches Ziel müsse ______ formuliert werden.
2. Der Lebenslauf solle wichtige Aufgaben und ______ nennen.
3. Die Teilnehmerin habe ein kleines Team ______.
4. Das Beispiel zeige ihre ______.
5. Ein Anschreiben könne die ______ kurz erläutern.

**نتيجة المراجعة:** خمس جمل ألمانية تتحقق من الكلمات المحورية في نص الاستماع.

- **1.** Ein berufliches Ziel müsse ______ formuliert werden.
  - **المفتاح:** konkret؛ الصفة الظرفية قبل formuliert werden في نص الاستماع هي konkret.
- **2.** Der Lebenslauf solle wichtige Aufgaben und ______ nennen.
  - **المفتاح:** Ergebnisse؛ الاسم المعطوف على Aufgaben في نص الاستماع هو Ergebnisse.
- **3.** Die Teilnehmerin habe ein kleines Team ______.
  - **المفتاح:** koordiniert؛ اسم المفعول في نهاية الجملة المنقولة عن المشاركة هو koordiniert.
- **4.** Das Beispiel zeige ihre ______.
  - **المفتاح:** Organisationsfähigkeit؛ المهارة التي يظهرها المثال بحسب المدرب هي Organisationsfähigkeit.
- **5.** Ein Anschreiben könne die ______ kurz erläutern.
  - **المفتاح:** Motivation؛ المفعول الذي تشرحه رسالة التقديم بإيجاز هو Motivation.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-T07

حوّل الجمل بين القوسين إلى Konjunktiv I:

1. Die Beraterin sagt: „Der Werdegang ist interessant.“ → Die Beraterin sagt, der Werdegang ______ interessant. (sein)
2. Der Coach sagt: „Die Bewerberin kann die Aufgabe übernehmen.“ → Der Coach sagt, sie ______ die Aufgabe übernehmen. (können)
3. Der Mentor sagt: „Das Anschreiben hilft.“ → Der Mentor sagt, das Anschreiben ______. (helfen)
4. Die Beraterin erklärt: „Der Lebenslauf ist klar.“ → Die Beraterin erklärt, dass der Lebenslauf klar ______. (sein)

**نتيجة المراجعة:** أربع جمل تدرب التحويل إلى Konjunktiv I معhelfe وترتيب الفعل مع dass ومن دونه.

- **1.** Die Beraterin sagt: „Der Werdegang ist interessant.“ → Die Beraterin sagt, der Werdegang ______ interessant. (sein)
  - **المفتاح:** sei؛ تحويل ist إلى sei في الموضع الثاني من الجملة المنقولة.
- **2.** Der Coach sagt: „Die Bewerberin kann die Aufgabe übernehmen.“ → Der Coach sagt, sie ______ die Aufgabe übernehmen. (können)
  - **المفتاح:** könne؛ تحويل kann إلى könne في الموضع الثاني مع بقاء المصدر übernehmen في النهاية.
- **3.** Der Mentor sagt: „Das Anschreiben hilft.“ → Der Mentor sagt, das Anschreiben ______. (helfen)
  - **المفتاح:** helfe؛ تحويل hilft إلى helfe بحذف -n من المصدر helfen دون تغير حركة الجذر.
- **4.** Die Beraterin erklärt: „Der Lebenslauf ist klar.“ → Die Beraterin erklärt, dass der Lebenslauf klar ______. (sein)
  - **المفتاح:** sei؛ تحويل ist إلى sei مع وضعها في نهاية الجملة التابعة بعد الرابط dass.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-T08

ينقسم هذا التدريب العملي إلى مهمتين متكاملتين للتعلّم الذاتي:

1. **المهمة الأولى (P01 — كتابة فقط):** اكتب ملخصًا مهنيًا من أربع إلى ست جمل ألمانية عن محادثة خيالية مع مستشار مهني. انسب أربعة أقوال أو معلومات على الأقل إلى أصحابها، واستخدم شكلين مناسبين على الأقل من **Konjunktiv I** مثل **sei** أو **habe** أو **könne** أو **wolle** (أو بديل **Konjunktiv II** مثل **hätten** عند تطابق صيغة الجمع مع المضارع وعند الحاجة إلى التوضيح). ميّز بوضوح بين الكلام المنقول وما تؤكده بنفسك، ولا تعرض الرأي أو الخطة كحقيقة مؤكدة. هذه المهمة كتابية فقط؛ لا يلزم شريك ولا تسجيل صوتي.
2. **المهمة الثانية (P02 — كتابة + قراءة جهرية ذاتية استنادًا إلى T06):** استنادًا إلى نص الاستماع المكتوب في `T06`، اكتب إحاطة مهنية من أربع إلى ست جمل لزميل ثم اقرأها بصوت واضح. انسب نصيحتي المدرّب بشأن الهدف والسيرة الذاتية، ومعلومة المشاركة عن تنسيق الفريق، ومعلومة المدرّب عن دور رسالة التقديم، واستخدم شكلين مناسبين على الأقل من **Konjunktiv I** مثل **müsse** أو **solle** أو **habe** أو **könne**. اختم بخطوة تالية مناسبة للمتقدمة، وافصل بوضوح بين ما ورد في النص وما تقترحه أنت. لا تحتاج إلى تشغيل ملف MP3؛ اكتب النص ثم اقرأه بصوت واضح؛ لا يلزم تسجيل.

**نتيجة المراجعة:** مهمتا التمرين 8 مفصلتان إلى P01 كتابة فقط (5 جمل، 580 حرفًا) وP02 كتابة وجهر (5 جمل، 553 حرفًا).

- **1.** Die Beraterin erklärt, meine Bewerbung sei klar strukturiert und passe gut zum Anforderungsprofil der Stelle.
  - **المفتاح:** Die Beraterin erklärt, meine Bewerbung sei klar strukturiert und passe gut zum Anforderungsprofil der Stelle.؛ الجملة الأولى في P01 تنسب إلى المستشارة بصيغتي sei وpasse وضوح الطلب وملاءمته لملف المتطلبات.
- **2.** Sie fügt hinzu, ich habe viel Berufserfahrung in der Kundenbetreuung, solle aber im Lebenslauf zwei konkrete Projektergebnisse ergänzen.
  - **المفتاح:** Sie fügt hinzu, ich habe viel Berufserfahrung in der Kundenbetreuung, solle aber im Lebenslauf zwei konkrete Projektergebnisse ergänzen.؛ الجملة الثانية تنسب إلى المستشارة بصيغتي habe وsolle خبرة خدمة العملاء والحاجة إلى إضافة نتيجتين محددتين.
- **3.** Der Coach meint, ein kurzes Anschreiben könne meinen Wechselwunsch verständlich erläutern.
  - **المفتاح:** Der Coach meint, ein kurzes Anschreiben könne meinen Wechselwunsch verständlich erläutern.؛ الجملة الثالثة تنسب إلى المدرب بصيغة könne دور رسالة التقديم في شرح الرغبة في التغيير.
- **4.** Die Kolleginnen sagen außerdem, sie hätten mit einer klaren Übersicht über ihre Zuständigkeiten gute Erfahrungen gemacht.
  - **المفتاح:** Die Kolleginnen sagen außerdem, sie hätten mit einer klaren Übersicht über ihre Zuständigkeiten gute Erfahrungen gemacht.؛ الجملة الرابعة تنسب إلى الزميلات بصيغة البديل hätten خبرتهن الإيجابية في عرض المسؤوليات بوضوح.
- **5.** Aus meiner Sicht ist dieser Hinweis sehr hilfreich, deshalb überarbeite ich heute meinen Lebenslauf Schritt für Schritt.
  - **المفتاح:** Aus meiner Sicht ist dieser Hinweis sehr hilfreich, deshalb überarbeite ich heute meinen Lebenslauf Schritt für Schritt.؛ الجملة الخامسة تفصل رأي المتعلم وخطته الذاتية بصيغة المضارع المؤكد (ist … überarbeite).
- **6.** Laut dem Coach im Seminar müsse ein berufliches Ziel konkret formuliert werden.
  - **المفتاح:** Laut dem Coach im Seminar müsse ein berufliches Ziel konkret formuliert werden.؛ الجملة الأولى في P02 تنسب إلى المدرب بصيغة müsse وجوب صياغة الهدف المهني بصورة محددة.
- **7.** Er erklärt außerdem, der Lebenslauf solle wichtige Aufgaben und Ergebnisse nennen.
  - **المفتاح:** Er erklärt außerdem, der Lebenslauf solle wichtige Aufgaben und Ergebnisse nennen.؛ الجملة الثانية تنسب إلى المدرب بصيغة solle ضرورة ذكر المهام والنتائج المهمة في السيرة الذاتية.
- **8.** Eine Teilnehmerin berichtet, sie habe im letzten Jahr ein kleines Team koordiniert, und laut dem Coach zeige dieses Beispiel ihre Organisationsfähigkeit.
  - **المفتاح:** Eine Teilnehmerin berichtet, sie habe im letzten Jahr ein kleines Team koordiniert, und laut dem Coach zeige dieses Beispiel ihre Organisationsfähigkeit.؛ الجملة الثالثة تنسب إلى المشاركة خبرة تنسيق الفريق بصيغة habe … koordiniert وإلى المدرب دلالتها بصيغة zeige.
- **9.** Schließlich fügt der Coach hinzu, ein Anschreiben könne die Motivation kurz erläutern.
  - **المفتاح:** Schließlich fügt der Coach hinzu, ein Anschreiben könne die Motivation kurz erläutern.؛ الجملة الرابعة تنسب إلى المدرب بصيغة könne دور رسالة التقديم في شرح الدافع بإيجاز.
- **10.** Ich empfehle der Bewerberin als nächsten Schritt, zwei konkrete Projektergebnisse im Lebenslauf zu ergänzen und das Anschreiben kurz zu überarbeiten.
  - **المفتاح:** Ich empfehle der Bewerberin als nächsten Schritt, zwei konkrete Projektergebnisse im Lebenslauf zu ergänzen und das Anschreiben kurz zu überarbeiten.؛ الجملة الخامسة تقدم توصية المتعلم المباشرة بصيغة المؤكد (Ich empfehle …) كخطوة تالية مفصولة عن النص.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive), [ANFORDERUNGSPROFIL](https://www.duden.de/rechtschreibung/Anforderungsprofil), [ZUSTAENDIGKEIT](https://www.duden.de/rechtschreibung/Zustaendigkeit)

### DL-B2-02-Q01

اختر صيغة Konjunktiv I المناسبة: Die Führungskraft erklärt, die Bewerberin ___ das Projekt leiten.

**نتيجة المراجعة:** صيغة الغائب المفرد من können في Konjunktiv I هي könne؛ وتُستخدم هنا لنقل كلام المسؤولة عن المتقدمة.

**المفتاح:** könne

**الربط:** DL-B2-02-T01

- **الخيار 1 — ليس المطلوب:** kann — kann صيغة مضارع مرفوع (Indikativ) لا صيغة نقل بـKonjunktiv I.
- **الخيار 2 — صحيح:** könne — könne هي صيغة الغائب المفرد الصحيحة في Konjunktiv I لنقل قول المسؤولة.
- **الخيار 3 — ليس المطلوب:** können — können صيغة مصدر أو جمع لا تطابق الفاعل المفرد die Bewerberin.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-Q02

حوّل الاقتباس إلى كلام منقول: Der Coach sagt: „Das Anschreiben ist wichtig.“

**نتيجة المراجعة:** نستخدم sei لنقل ist بصيغة Konjunktiv I: Der Coach sagt, das Anschreiben sei wichtig.

**المفتاح:** Der Coach sagt, das Anschreiben sei wichtig.

**الربط:** DL-B2-02-T02

- **الخيار 1 — ليس المطلوب:** Der Coach sagt, das Anschreiben ist wichtig. — ist تبقي الجملة في المضارع المرفوع ولا تحقق صيغة Konjunktiv I المطلوبة.
- **الخيار 2 — ليس المطلوب:** Der Coach sagt, das Anschreiben habe wichtig. — habe من الفعل haben ولا تصلح خبرًا للصفة wichtig.
- **الخيار 3 — صحيح:** Der Coach sagt, das Anschreiben sei wichtig. — Der Coach sagt, das Anschreiben sei wichtig تحول ist إلى sei بصورة صحيحة.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-Q03

أكمل بصيغة الفعل المناسبة: Die Beraterin erklärt, die Bewerberin ___ künftig mehr Verantwortung übernehmen. (wollen)

**نتيجة المراجعة:** صيغة الغائب المفرد من wollen في Konjunktiv I هي wolle؛ ويأتي المصدر übernehmen في نهاية العبارة.

**المفتاح:** wolle

**الربط:** DL-B2-02-T03

- **الخيار 1 — ليس المطلوب:** will — will صيغة المضارع المرفوع لا Konjunktiv I.
- **الخيار 2 — صحيح:** wolle — wolle هي صيغة الغائب المفرد الصحيحة في Konjunktiv I من الفعل wollen.
- **الخيار 3 — ليس المطلوب:** wollen — wollen صيغة جمع أو مصدر لا تطابق الفاعل المفرد die Bewerberin.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-Q04

ما نوع الجملة **Der Coach sagt, das Profil passe zur Stelle.**؟

**نتيجة المراجعة:** الجملة تنقل كلام المدرّب من دون اقتباس مباشر؛ وتظهر صيغة passe من Konjunktiv I.

**المفتاح:** كلام منقول

**الربط:** DL-B2-02-T04

- **الخيار 1 — ليس المطلوب:** كلام مباشر بين علامتي اقتباس — الجملة تخلو من علامتي الاقتباس ولا تورد لفظ المتحدث حرفيًا.
- **الخيار 2 — صحيح:** كلام منقول — كلام منقول؛ لغياب علامتي الاقتباس ومجيء الفعل بصيغة passe في Konjunktiv I.
- **الخيار 3 — ليس المطلوب:** جملة استفهامية — الجملة خبرية منقولة مختومة بنقطة وليست استفهامية.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-Q05

كم تبلغ خبرة المتقدمة في خدمة العملاء بحسب محضر الاستشارة؟

**نتيجة المراجعة:** يذكر المحضر أن المتقدمة لديها عدة سنوات من الخبرة في خدمة العملاء: mehrere Jahre Erfahrung im Kundenservice.

**المفتاح:** عدة سنوات

**الربط:** DL-B2-02-T05

- **الخيار 1 — ليس المطلوب:** عدة أشهر — النص لا يذكر عدة أشهر بل عدة سنوات.
- **الخيار 2 — صحيح:** عدة سنوات — ينص المحضر على mehrere Jahre Erfahrung im Kundenservice (عدة سنوات).
- **الخيار 3 — ليس المطلوب:** عشر سنوات بالضبط — النص لا يحدد عشر سنوات بالضبط.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-Q06

ما الذي تستطيع المتقدمة وصفه بمزيد من الدقة وفق المحضر؟

**نتيجة المراجعة:** تستطيع المتقدمة أن تصف مسؤولياتها في المشروع الأخير بصورة أدق: ihre Zuständigkeiten im letzten Projekt genauer beschreiben.

**المفتاح:** مسؤولياتها في المشروع الأخير

**الربط:** DL-B2-02-T05

- **الخيار 1 — ليس المطلوب:** هواياتها في عطلة نهاية الأسبوع — الهوايات في عطلة نهاية الأسبوع غير مذكورة في المحضر.
- **الخيار 2 — صحيح:** مسؤولياتها في المشروع الأخير — ينص المحضر على قدرتها على وصف مسؤولياتها في المشروع الأخير بدقة أكبر (ihre Zuständigkeiten im letzten Projekt).
- **الخيار 3 — ليس المطلوب:** راتبها في وظيفتها القادمة — الراتب في الوظيفة القادمة غير مذكور في المحضر.

**مصادر القاعدة/المعنى:** [ZUSTAENDIGKEIT](https://www.duden.de/rechtschreibung/Zustaendigkeit)

### DL-B2-02-Q07

ما الذي ينبغي صياغته بصورة محددة بحسب المدرّب في نص الاستماع؟

**نتيجة المراجعة:** يقول المدرّب إن الهدف المهني يجب أن يصاغ بصورة محددة: ein berufliches Ziel müsse konkret formuliert werden. يمكن الإجابة من النص المكتوب دون تشغيل MP3.

**المفتاح:** الهدف المهني

**الربط:** DL-B2-02-T06

- **الخيار 1 — صحيح:** الهدف المهني — ينص الاستماع على أن الهدف المهني (ein berufliches Ziel) يجب أن يصاغ بصورة محددة.
- **الخيار 2 — ليس المطلوب:** عنوان السيرة الذاتية فقط — عنوان السيرة الذاتية وحده غير مذكور في النص.
- **الخيار 3 — ليس المطلوب:** موعد المقابلة — موعد المقابلة غير مذكور في النص.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-Q08

ماذا فعلت إحدى المشاركات في العام الماضي بحسب النص؟

**نتيجة المراجعة:** تقول المشاركة إنها نسّقت فريقًا صغيرًا في العام الماضي: sie habe im letzten Jahr ein kleines Team koordiniert. لا يلزم تشغيل ملف صوتي للإجابة.

**المفتاح:** نسّقت فريقًا صغيرًا

**الربط:** DL-B2-02-T06

- **الخيار 1 — صحيح:** نسّقت فريقًا صغيرًا — ينص الاستماع على أنها نسقت فريقًا صغيرًا في العام الماضي (ein kleines Team koordiniert).
- **الخيار 2 — ليس المطلوب:** كتبت إعلان وظيفة — كتابة إعلان وظيفة غير مذكورة في النص.
- **الخيار 3 — ليس المطلوب:** تولت منصبًا إداريًا جديدًا — تولي منصب إداري جديد غير مذكور في النص.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-Q09

أكمل التحويل إلى كلام منقول: Der Mentor sagt: „Das Anschreiben hilft.“ → Der Mentor sagt, das Anschreiben ___.

**نتيجة المراجعة:** صيغة الغائب المفرد من helfen في Konjunktiv I هي helfe، ولذلك نقول: Der Mentor sagt, das Anschreiben helfe.

**المفتاح:** helfe

**الربط:** DL-B2-02-T07

- **الخيار 1 — ليس المطلوب:** hilft — hilft صيغة المضارع المرفوع لا Konjunktiv I.
- **الخيار 2 — صحيح:** helfe — helfe هي صيغة الغائب المفرد الصحيحة في Konjunktiv I من الفعل helfen.
- **الخيار 3 — ليس المطلوب:** helfen — helfen صيغة مصدر أو جمع لا تطابق الفاعل المفرد das Anschreiben.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-Q10

قال الزملاء: **„Wir haben klare Ziele.“** أي جملة تميّز الكلام المنقول بوضوح عندما تتطابق صيغة **Konjunktiv I** في الجمع مع المضارع؟

**نتيجة المراجعة:** صيغة الجمع haben في Konjunktiv I تطابق المضارع، لذلك يمكن استعمال Konjunktiv II هنا للتوضيح: sie hätten klare Ziele.

**المفتاح:** Sie sagen, sie hätten klare Ziele.

**الربط:** DL-B2-02-T02

- **الخيار 1 — صحيح:** Sie sagen, sie hätten klare Ziele. — Sie sagen, sie hätten klare Ziele تميز الكلام المنقول باستعمال Konjunktiv II لأن sie haben تطابق المضارع.
- **الخيار 2 — ليس المطلوب:** Sie sagen, sie haben klare Ziele. — Sie sagen, sie haben klare Ziele تطابق المضارع المرفوع فلا يظهر فيها تمييز الصيغة.
- **الخيار 3 — ليس المطلوب:** Sie sagen, sie hätt klare Ziele. — hätt صيغة غير قياسية ناقصة التصريف مع الفاعل الجمع sie.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-P01

اكتب ملخصًا مهنيًا من أربع إلى ست جمل ألمانية عن محادثة خيالية مع مستشار مهني. انسب أربعة أقوال أو معلومات على الأقل إلى أصحابها، واستخدم شكلين مناسبين على الأقل من Konjunktiv I مثل sei أو habe أو könne أو wolle (أو بديل Konjunktiv II مثل hätten عند تطابق صيغة الجمع مع المضارع وعند الحاجة إلى التوضيح). ميّز بوضوح بين الكلام المنقول وما تؤكده بنفسك، ولا تعرض الرأي أو الخطة كحقيقة مؤكدة. هذه المهمة كتابية فقط؛ لا يلزم شريك ولا تسجيل صوتي.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة فقط دون جهر.

**الربط:** DL-B2-02-T08

- **المعيار taskCompletion:** ملخص مهني مكتوب من أربع إلى ست جمل ألمانية عن محادثة مهنية، يتضمن أربعة أقوال أو معلومات منسوبة على الأقل. — يتحقق من ملخص مكتوب من أربع إلى ست جمل يتضمن أربعة أقوال أو معلومات منسوبة؛ الحد 160 حرفًا والنموذج 580 حرفًا (كتابة فقط).
- **المعيار meaningClarity:** تظهر بوضوح هوية مصدر الأقوال، ويُفصل الكلام المنقول عن المعلومة التي يؤكدها الكاتب بنفسه؛ ولا تُعرض الآراء أو الخطط كحقائق مؤكدة. — يضمن وضوح هوية المصدر وفصل الكلام المنقول عن رأي الكاتب أو خطته المؤكدة.
- **المعيار targetSkill:** يستخدم شكلين مناسبين على الأقل من Konjunktiv I مثل sei/habe/könne/wolle، مع تصريف وترتيب فعل مناسبين، وعند تطابق صيغة الجمع مع المضارع يستعمل Konjunktiv II مثل hätten لإزالة الالتباس عند الحاجة. — يركز على استخدام صيغتين مناسبتين على الأقل من Konjunktiv I (مع بديل Konjunktiv II مثل hätten عند التطابق في الجمع).

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 160, "speakAloud": false, "audioRequired": false}

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### DL-B2-02-P02

استنادًا إلى نص الاستماع المكتوب في `T06`، اكتب إحاطة مهنية من أربع إلى ست جمل لزميل ثم اقرأها بصوت واضح. انسب نصيحتي المدرّب بشأن الهدف والسيرة الذاتية، ومعلومة المشاركة عن تنسيق الفريق، ومعلومة المدرّب عن دور رسالة التقديم، واستخدم شكلين مناسبين على الأقل من Konjunktiv I مثل müsse أو solle أو habe أو könne. اختم بخطوة تالية مناسبة للمتقدمة، وافصل بوضوح بين ما ورد في النص وما تقترحه أنت. لا تحتاج إلى تشغيل ملف MP3؛ اكتب النص ثم اقرأه بصوت واضح؛ لا يلزم تسجيل.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة وجهر مع الاستناد إلى T06 وروابط T06/T08.

**الربط:** DL-B2-02-T06, DL-B2-02-T08

- **المعيار taskCompletion:** إحاطة من أربع إلى ست جمل تنقل نصيحتي المدرّب بشأن الهدف والسيرة الذاتية، ومعلومة المشاركة عن تنسيق فريق صغير، ومعلومة المدرّب عن رسالة التقديم، وتقترح خطوة تالية للمتقدمة. — يتحقق من إحاطة من أربع إلى ست جمل تنقل النقاط الأربع في T06 وتقترح خطوة تالية؛ الحد 180 حرفًا والنموذج 553 حرفًا مع الجهر.
- **المعيار meaningClarity:** تُنسب النصائح والمعلومات الأربع إلى أصحابها، وتُفصل الخطوة المقترحة بوضوح عن المعلومات الواردة في نص الاستماع. — يضمن نسبة النصائح والمعلومات إلى أصحابها وفصل الخطوة المقترحة عن نص الاستماع.
- **المعيار targetSkill:** يستخدم شكلين مناسبين على الأقل من Konjunktiv I مثل müsse/solle/habe/könne، مع تصريف وترتيب مناسبين، ويقرأ المتعلم النص بصوت واضح دون تسجيل. — يركز على استخدام صيغتين مناسبتين على الأقل من Konjunktiv I مع القراءة الجهرية الذاتية دون تسجيل.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 180, "speakAloud": true, "audioRequired": false}

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### counseling-model-01

Die Beraterin erklärt, meine Bewerbung sei klar strukturiert und passe gut zum Anforderungsprofil der Stelle.
Sie fügt hinzu, ich habe viel Berufserfahrung in der Kundenbetreuung, solle aber im Lebenslauf zwei konkrete Projektergebnisse ergänzen.
Der Coach meint, ein kurzes Anschreiben könne meinen Wechselwunsch verständlich erläutern.
Die Kolleginnen sagen außerdem, sie hätten mit einer klaren Übersicht über ihre Zuständigkeiten gute Erfahrungen gemacht.
Aus meiner Sicht ist dieser Hinweis sehr hilfreich, deshalb überarbeite ich heute meinen Lebenslauf Schritt für Schritt.

**نتيجة المراجعة:** نموذج مكتوب: 580 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** Die Beraterin erklärt, meine Bewerbung sei klar strukturiert und passe gut zum Anforderungsprofil der Stelle.
  - الجملة الأولى في P01 تنسب إلى المستشارة بصيغتي sei وpasse وضوح الطلب وملاءمته لملف المتطلبات.
- **2.** Sie fügt hinzu, ich habe viel Berufserfahrung in der Kundenbetreuung, solle aber im Lebenslauf zwei konkrete Projektergebnisse ergänzen.
  - الجملة الثانية تنسب إلى المستشارة بصيغتي habe وsolle خبرة خدمة العملاء والحاجة إلى إضافة نتيجتين محددتين.
- **3.** Der Coach meint, ein kurzes Anschreiben könne meinen Wechselwunsch verständlich erläutern.
  - الجملة الثالثة تنسب إلى المدرب بصيغة könne دور رسالة التقديم في شرح الرغبة في التغيير.
- **4.** Die Kolleginnen sagen außerdem, sie hätten mit einer klaren Übersicht über ihre Zuständigkeiten gute Erfahrungen gemacht.
  - الجملة الرابعة تنسب إلى الزميلات بصيغة البديل hätten خبرتهن الإيجابية في عرض المسؤوليات بوضوح.
- **5.** Aus meiner Sicht ist dieser Hinweis sehr hilfreich, deshalb überarbeite ich heute meinen Lebenslauf Schritt für Schritt.
  - الجملة الخامسة تفصل رأي المتعلم وخطته الذاتية بصيغة المضارع المؤكد (ist … überarbeite).

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### seminar-briefing-model-01

Laut dem Coach im Seminar müsse ein berufliches Ziel konkret formuliert werden.
Er erklärt außerdem, der Lebenslauf solle wichtige Aufgaben und Ergebnisse nennen.
Eine Teilnehmerin berichtet, sie habe im letzten Jahr ein kleines Team koordiniert, und laut dem Coach zeige dieses Beispiel ihre Organisationsfähigkeit.
Schließlich fügt der Coach hinzu, ein Anschreiben könne die Motivation kurz erläutern.
Ich empfehle der Bewerberin als nächsten Schritt, zwei konkrete Projektergebnisse im Lebenslauf zu ergänzen und das Anschreiben kurz zu überarbeiten.

**نتيجة المراجعة:** نموذج مكتوب: 553 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** Laut dem Coach im Seminar müsse ein berufliches Ziel konkret formuliert werden.
  - الجملة الأولى في P02 تنسب إلى المدرب بصيغة müsse وجوب صياغة الهدف المهني بصورة محددة.
- **2.** Er erklärt außerdem, der Lebenslauf solle wichtige Aufgaben und Ergebnisse nennen.
  - الجملة الثانية تنسب إلى المدرب بصيغة solle ضرورة ذكر المهام والنتائج المهمة في السيرة الذاتية.
- **3.** Eine Teilnehmerin berichtet, sie habe im letzten Jahr ein kleines Team koordiniert, und laut dem Coach zeige dieses Beispiel ihre Organisationsfähigkeit.
  - الجملة الثالثة تنسب إلى المشاركة خبرة تنسيق الفريق بصيغة habe … koordiniert وإلى المدرب دلالتها بصيغة zeige.
- **4.** Schließlich fügt der Coach hinzu, ein Anschreiben könne die Motivation kurz erläutern.
  - الجملة الرابعة تنسب إلى المدرب بصيغة könne دور رسالة التقديم في شرح الدافع بإيجاز.
- **5.** Ich empfehle der Bewerberin als nächsten Schritt, zwei konkrete Projektergebnisse im Lebenslauf zu ergänzen und das Anschreiben kurz zu überarbeiten.
  - الجملة الخامسة تقدم توصية المتعلم المباشرة بصيغة المؤكد (Ich empfehle …) كخطوة تالية مفصولة عن النص.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### card-01

- **Die Beraterin sagt, der Lebenslauf sei klar strukturiert.** → تقول المستشارة إن السيرة الذاتية منظّمة بوضوح.

**نتيجة المراجعة:** نموذج كلام منقول بـsei في الموضع الثاني بعد فعل القول.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### card-02

- **Die Bewerberin habe mehrere Jahre Erfahrung.** → يُقال إن المتقدمة لديها عدة سنوات من الخبرة.

**نتيجة المراجعة:** نموذج كلام منقول بـhabe لنقل الخبرة المهنية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### card-03

- **Konjunktiv I** → صيغة شائعة لنقل كلام الآخرين في التقارير.

**نتيجة المراجعة:** تثبيت الوظيفة الاصطلاحية لـKonjunktiv I في نقل كلام الآخرين في التقارير.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/sentence-structure/dependent-clauses/indirect-speech), [2](https://deutsch.lingolia.com/en/grammar/verbs/subjunctive)

### card-04

- **das Anforderungsprofil** → ملف متطلبات الوظيفة.

**نتيجة المراجعة:** مراجعة المفردة المحورية das Anforderungsprofil (ملف متطلبات الوظيفة).


**مصادر القاعدة/المعنى:** [ANFORDERUNGSPROFIL](https://www.duden.de/rechtschreibung/Anforderungsprofil)

### DL-B2-02-AUD-PHR-01

Der Berufsweg, die Berufswege. Der Werdegang, die Werdegänge. Die Qualifikation, die Qualifikationen. Die Berufserfahrung. Das Anforderungsprofil, die Anforderungsprofile. Die Stellenausschreibung, die Stellenausschreibungen. Die Führungskraft, die Führungskräfte. Die Weiterentwicklung, die Weiterentwicklungen. Die Zuständigkeit, die Zuständigkeiten. Die Empfehlung, die Empfehlungen. Anstreben, strebt an. Sich beruflich orientieren, orientiert sich. Vereinbaren, vereinbart. Übernehmen, übernimmt. Strukturiert. Ausführlich.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 16 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Der Berufsweg, die Berufswege.
  - Berufsweg مذكر وجمعه Berufswege؛ المسار المهني.
- **2.** Der Werdegang, die Werdegänge.
  - Werdegang مذكر وجمعه النادر Werdegänge؛ السيرة أو المسيرة المهنية والتعليمية.
- **3.** Die Qualifikation, die Qualifikationen.
  - Qualifikation مؤنث وجمعها Qualifikationen؛ المؤهل أو الكفاءة المهنية.
- **4.** Die Berufserfahrung.
  - Berufserfahrung مؤنث وتُستعمل هنا بلا جمع؛ الخبرة المهنية.
- **5.** Das Anforderungsprofil, die Anforderungsprofile.
  - Anforderungsprofil محايد وجمعه Anforderungsprofile؛ ملف متطلبات الوظيفة.
- **6.** Die Stellenausschreibung, die Stellenausschreibungen.
  - Stellenausschreibung مؤنث وجمعها Stellenausschreibungen؛ إعلان الوظيفة الشاغرة.
- **7.** Die Führungskraft, die Führungskräfte.
  - Führungskraft مؤنث وجمعها Führungskräfte؛ مسؤول إداري أو قائد فريق.
- **8.** Die Weiterentwicklung, die Weiterentwicklungen.
  - Weiterentwicklung مؤنث وجمعها Weiterentwicklungen؛ التطور المهني.
- **9.** Die Zuständigkeit, die Zuständigkeiten.
  - Zuständigkeit مؤنث وجمعها Zuständigkeiten؛ مجال المسؤولية أو الاختصاص.
- **10.** Die Empfehlung, die Empfehlungen.
  - Empfehlung مؤنث وجمعها Empfehlungen؛ التوصية أو النصيحة.
- **11.** Anstreben, strebt an.
  - anstreben فعل ضعيف منفصل حاضرُه strebt an؛ يسعى إلى منصب أو هدف.
- **12.** Sich beruflich orientieren, orientiert sich.
  - sich beruflich orientieren فعل انعكاسي حاضرُه orientiert sich؛ يحدد توجهه المهني.
- **13.** Vereinbaren, vereinbart.
  - vereinbaren فعل ضعيف غير منفصل حاضرُه vereinbart؛ يتفق على أو ينسق.
- **14.** Übernehmen, übernimmt.
  - übernehmen فعل قوي غير منفصل حاضرُه übernimmt؛ يتولى مهمة أو مسؤولية.
- **15.** Strukturiert.
  - strukturiert صفة بمعنى منظم أو واضح البنية.
- **16.** Ausführlich.
  - ausführlich صفة بمعنى مفصل أو وافٍ.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-AUD-MODEL-01

Der Coach sagt: „Der Lebenslauf ist klar strukturiert.“ Der Coach sagt, der Lebenslauf sei klar strukturiert. Die Beraterin sagt: „Die Bewerberin kann das Projekt leiten.“ Die Beraterin sagt, die Bewerberin könne das Projekt leiten. Der Mentor sagt: „Die Berufserfahrung hilft.“ Der Mentor sagt, die Berufserfahrung helfe. Der Coach sagt, der Lebenslauf sei klar. Der Coach sagt, dass der Lebenslauf klar sei. Sie sagen: „Wir haben klare Ziele.“ Sie sagen, sie hätten klare Ziele.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 10 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Der Coach sagt: „Der Lebenslauf ist klar strukturiert.“
  - Der Coach sagt: „Der Lebenslauf ist klar strukturiert.“: قول مباشر بين علامتي اقتباس במضارع Indikativ (ist).
- **2.** Der Coach sagt, der Lebenslauf sei klar strukturiert.
  - Der Coach sagt, der Lebenslauf sei klar strukturiert: نقل غير مباشر من دون dass، فجاء الفعل sei في الموضع الثاني.
- **3.** Die Beraterin sagt: „Die Bewerberin kann das Projekt leiten.“
  - Die Beraterin sagt: „Die Bewerberin kann das Projekt leiten.“: قول مباشر بالفعل الناقص المرفوع kann.
- **4.** Die Beraterin sagt, die Bewerberin könne das Projekt leiten.
  - Die Beraterin sagt, die Bewerberin könne das Projekt leiten: نقل بـKonjunktiv I (könne) في الموضع الثاني والمصدر leiten في النهاية.
- **5.** Der Mentor sagt: „Die Berufserfahrung hilft.“
  - Der Mentor sagt: „Die Berufserfahrung hilft.“: قول مباشر بالفعل القوي المرفوع hilft.
- **6.** Der Mentor sagt, die Berufserfahrung helfe.
  - Der Mentor sagt, die Berufserfahrung helfe: نقل بـKonjunktiv I المشتق من جذر المصدر (helfe) بلا تغير حركة الجذر.
- **7.** Der Coach sagt, der Lebenslauf sei klar.
  - Der Coach sagt, der Lebenslauf sei klar: نقل من دون dass بترتيب الجملة الرئيسية.
- **8.** Der Coach sagt, dass der Lebenslauf klar sei.
  - Der Coach sagt, dass der Lebenslauf klar sei: نقل مع الرابط dass وتأخير الفعل المصرف sei إلى نهاية الجملة التابعة.
- **9.** Sie sagen: „Wir haben klare Ziele.“
  - Sie sagen: „Wir haben klare Ziele.“: قول مباشر بصيغة المتكلمين الجمع (Wir haben).
- **10.** Sie sagen, sie hätten klare Ziele.
  - Sie sagen, sie hätten klare Ziele: تحويل الضمير إلى sie واستعمال Konjunktiv II (hätten) لأن sie haben في Konjunktiv I تطابق المضارع.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-AUD-DLG-01

Was sagte die Beraterin über Amiras Lebenslauf? Sie sagte, Amiras Werdegang sei klar dargestellt. Und was soll Amira noch ergänzen? Sie meinte, Amira habe viel Erfahrung in der Kundenbetreuung und solle zwei konkrete Beispiele hinzufügen. Hat sie auch etwas über die Stelle gesagt? Ja. Das Anforderungsprofil sei anspruchsvoll, aber Amiras Profil passe dazu. Dann werde ich Amira beim Überarbeiten helfen.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 7 وحدة داخل 7 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Was sagte die Beraterin über Amiras Lebenslauf?
  - Nora تسأل عما قالته المستشارة بشأن سيرة Amira الذاتية.
- **2.** Sie sagte, Amiras Werdegang sei klar dargestellt.
  - Fadi ينقل رأي المستشارة بـKonjunktiv I: Amiras Werdegang sei klar dargestellt.
- **3.** Und was soll Amira noch ergänzen?
  - Nora تسأل عما ينبغي لـAmira أن تضيفه بعد.
- **4.** Sie meinte, Amira habe viel Erfahrung in der Kundenbetreuung und solle zwei konkrete Beispiele hinzufügen.
  - Fadi ينقل معلومتين معطوفتين بـKonjunktiv I: Amira habe viel Erfahrung … und solle zwei konkrete Beispiele hinzufügen.
- **5.** Hat sie auch etwas über die Stelle gesagt?
  - سؤال نعم/لا عن رأي المستشارة في الوظيفة الشاغرة.
- **6.** Ja. Das Anforderungsprofil sei anspruchsvoll, aber Amiras Profil passe dazu.
  - نقل تقييم متوازن بـKonjunktiv I: Das Anforderungsprofil sei anspruchsvoll, aber Amiras Profil passe dazu.
- **7.** Dann werde ich Amira beim Überarbeiten helfen.
  - Nora تختم بعزمها المباشر في المستقبل (werde … helfen) على مساعدة Amira في المراجعة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-AUD-READ-01

Gesprächsnotiz — Berufsberatung. Die Beraterin erklärt, die Bewerberin habe mehrere Jahre Erfahrung im Kundenservice. Ihr Lebenslauf sei übersichtlich, enthalte aber noch zu wenige konkrete Beispiele. Die Bewerberin könne ihre Zuständigkeiten im letzten Projekt genauer beschreiben. Die Beraterin ergänzt, ein kurzes Anschreiben helfe dabei, den Wechselwunsch zu erklären. Die Bewerberin sagt, sie wolle künftig mehr Verantwortung übernehmen und strebe eine Stelle im Projektmanagement an.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 6 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Gesprächsnotiz — Berufsberatung.
  - عنوان المحضر المهني: Gesprächsnotiz — Berufsberatung.
- **2.** Die Beraterin erklärt, die Bewerberin habe mehrere Jahre Erfahrung im Kundenservice.
  - تنقل المستشارة خبرة المتقدمة بـKonjunktiv I: die Bewerberin habe mehrere Jahre Erfahrung im Kundenservice.
- **3.** Ihr Lebenslauf sei übersichtlich, enthalte aber noch zu wenige konkrete Beispiele.
  - تنقل المستشارة تقويم السيرة الذاتية بفعلي Konjunktiv I: Ihr Lebenslauf sei übersichtlich, enthalte aber noch zu wenige konkrete Beispiele.
- **4.** Die Bewerberin könne ihre Zuständigkeiten im letzten Projekt genauer beschreiben.
  - تنقل إمكان تفصيل المسؤوليات بـkönne: Die Bewerberin könne ihre Zuständigkeiten im letzten Projekt genauer beschreiben.
- **5.** Die Beraterin ergänzt, ein kurzes Anschreiben helfe dabei, den Wechselwunsch zu erklären.
  - تضيف المستشارة دور رسالة التقديم بـhelfe: ein kurzes Anschreiben helfe dabei, den Wechselwunsch zu erklären.
- **6.** Die Bewerberin sagt, sie wolle künftig mehr Verantwortung übernehmen und strebe eine Stelle im Projektmanagement an.
  - تنقل المتقدمة هدفها المهني بـwolle وstrebe … an: sie wolle künftig mehr Verantwortung übernehmen und strebe eine Stelle im Projektmanagement an.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-02-AUD-LST-01

Im Seminar über Bewerbungen sagte der Coach, ein berufliches Ziel müsse konkret formuliert werden. Der Lebenslauf solle wichtige Aufgaben und Ergebnisse nennen. Eine Teilnehmerin erklärte, sie habe im letzten Jahr ein kleines Team koordiniert. Der Coach meinte, dieses Beispiel zeige ihre Organisationsfähigkeit. Er fügte hinzu, ein Anschreiben könne die Motivation kurz erläutern.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 5 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Im Seminar über Bewerbungen sagte der Coach, ein berufliches Ziel müsse konkret formuliert werden.
  - في ندوة التقديم للوظائف نقل المدرب بـmüsse والمبني للمجهول أن الهدف المهني يجب أن يصاغ بصورة محددة.
- **2.** Der Lebenslauf solle wichtige Aufgaben und Ergebnisse nennen.
  - نقل بـsolle أن السيرة الذاتية ينبغي أن تذكر المهام والنتائج المهمة.
- **3.** Eine Teilnehmerin erklärte, sie habe im letzten Jahr ein kleines Team koordiniert.
  - نقلت مشاركة بصيغة الماضي المنقول (habe … koordiniert) أنها نسقت فريقًا صغيرًا في العام الماضي.
- **4.** Der Coach meinte, dieses Beispiel zeige ihre Organisationsfähigkeit.
  - رأى المدرب بـzeige أن هذا المثال يظهر قدرتها التنظيمية.
- **5.** Er fügte hinzu, ein Anschreiben könne die Motivation kurz erläutern.
  - أضاف المدرب بـkönne أن رسالة التقديم تستطيع شرح الدافع بإيجاز.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

