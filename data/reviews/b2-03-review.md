# CR45 — مراجعة B2.3 الفردية والتراكمية

## إيصال رفع CR45 — 2026-10-09

- **التنفيذ:** `3c5920edf73a028b97018771bd2c60ce23259e8f`؛ **التقرير والفحوص:** `6aa1c11185fdb2bcbed40607e0967bdc2e1a70b7`. رُفع الاثنان إلى `arena/01a1036f-deutschlern` وتطابق HEAD/origin بعد كل رفع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR45 delivery receipt`؛ معرفه في `git log` ولم يُستعلم عن نشره.
- **آخر استعلام بالـSHA الصريح:** PR#1 `OPEN` و`mergedAt=null` والرأس `6aa1c11`. النشر في Vercel محكوم بحد النشر اليومي (`Deployment rate limited — retry in 24 hours.` و`deployments=[]`)؛ لا إعادة نشر متكررة ولا شراء ترقية. لم تختبر الواجهة البعيدة أو Production، ولا دمج.
- **الفحوص PASS:** البناء والتحقق، و45 حارسًا، ومجموعات Node الخمس، ومجموعات المتصفح الخمس؛ `2,168,500` بايت، `b2-03-v2`، `v94`. **193 حالة axe** وصفر مخالفات للقواعد المختارة مع **138 ظهورًا غير حاسم/344 ظهورًا لعقد**، و**126 حالة عرض ضيق**. ليست شهادة WCAG أو CEFR أو أجهزة فعلية.
- **المراجعة:** 95 وحدة/40 بندًا/10 أجزاء نموذج/30 خيارًا/6 معايير، و10 مراجع مقروءة بالكامل (مع استبعاد رابط 404 واحد). قُيّدت قاعدة `Passiv mit Modalverben` بين الجملة الرئيسية والتابعة مع إضافة `nicht müssen` و10 نقاط مساعدة، ووُسّعت `T03` و`T04` و`T07` إلى 4 بنود لكل منها. `P01` خطة مكتوبة من 5 جمل لمتجر أو مقهى خيالي (`515` حرفًا)، و`P02` إحاطة من 5 جمل لفريق مقهى استنادًا إلى `T06` مع الجهر (`566` حرفًا)؛ الخيارات الـ30 والفهارس والروابط و80% وحدا 150/180 محفوظة.
- **الحفظ:** 52 درسًا آخر وكل مفاتيح الحزمة الأخرى و592 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` بالبايت ثابتة. أربعة تحديثات `source_line` فقط في سجل B2.3؛ خمسة أصول/10 مقاطع بأصوات `Nadia` (`voice-02`) من `B1.4` و`Verkäufer` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) تبقى معلقة ومتاحة دون معاينة جديدة أو توليد أو استماع أو اعتماد.
- **التسليم والتالي:** سجلا `data/reviews/b2-03-review.*` والحارس والفهرس والتوثيق والخطة `2.51` ووثيقتا التسليم محدثة. التغطية **44/53 درسًا والبوابة منفصلة، 9 دروس متبقية في B2**. التالي **CR46/B2.4** فرديًا وتراكميًا مع المصادر دون انتظار مراجع بشري ومع الحفاظ على الأصوات والمقاطع الموجودة.


**أحدث مراجعة محتوى CR45 — 2026-10-09:** رُوجع **B2.3 — الاستهلاك والبدائل البيئية: المبني للمجهول مع الأفعال الناقصة** في **95 وحدة و40 بندًا داخل التمارين و10 أجزاء نموذج، و30 خيارًا و6 معايير**، بالاستناد إلى **10 مراجع مقروءة بالكامل** (واستبعاد رابط 404 واحد). أُضيف تنبيه مفردات عن `Verbrauch` و`Wiederverwendung` و`Kreislaufwirtschaft` و`wiederverwenden` مقابل `vermeiden`/`entsorgen`، وقُيّدت قاعدة `Passiv mit Modalverben` بين الجملة الرئيسية والجملة التابعة مع إضافة `nicht müssen` و10 نقاط مساعدة، ووُسّعت `T03` و`T04` و`T07` إلى 4 بنود لكل منها. صارت **P01 خطة مكتوبة من 5 جمل لمتجر أو مقهى خيالي (515 حرفًا، كتابة فقط)** و**P02 إحاطة من 5 جمل لفريق مقهى استنادًا إلى T06 مع خطوة تالية مقترحة كتابة وجهر (566 حرفًا)**. الخيارات الـ30 والفهارس والروابط و80% وحدا 150/180 محفوظة؛ `b2-03-v2` و`v94`، وخمسة أصول/10 مقاطع معلقة بأصوات `Nadia`/`Verkäufer` المحفوظة دون توليد أو استماع أو اعتماد. **الحملة 44/53 درسًا والبوابة منفصلة؛ تبقى 9 دروس في B2، والتالي CR46/B2.4.** الفحوص لا تعني دمج PR#1 أو اكتمال المشروع.

**التنفيذ المرفوع:** `3c5920edf73a028b97018771bd2c60ce23259e8f` على `arena/01a1036f-deutschlern`. يرفع هذا التقرير فور فحصه بعنوان `Record CR45 granular B2.3 review and cumulative checks` ثم يُوثّق إيصال الرفع. PR#1 غير مدمجة.

## التصحيحات وحدود الاستنتاج

- أُضيف تنبيه مفردات تحت `## 1)` عن `Verbrauch` و`Wiederverwendung` و`Kreislaufwirtschaft` و`wiederverwenden` مقابل `vermeiden`/`entsorgen`.
- قُيّدت قاعدة `Passiv mit Modalverben` في `## 2)` بين الجملة الرئيسية والجملة التابعة، وأُضيف `nicht müssen` في الجدول مع 10 نقاط مساعدة قبل النصوص والمهمات.
- وُسّعت `T03` و`T04` و`T07` إلى 4 بنود لكل منها (شاملة ترتيب الجملة التابعة `ob sie repariert werden können`).
- فُصلت `P01` (خطة مكتوبة من 5 جمل لمتجر أو مقهى خيالي: كتابة فقط) عن `P02` (إحاطة من 5 جمل لفريق مقهى استنادًا إلى `T06` مع خطوة تالية مقترحة: كتابة وجهر)، وطُوبق نص التمرين والمعايير والنموذجان.

## الفحوص التراكمية — CR45

- **PASS:** البناء والتحقق، و45 حارسًا (بما فيها `tools/test_b2_03_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,168,500 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` من المحاولة الأولى.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v94` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b2-03-v1` محفوظ لكنه لا يمنح إتقان `b2-03-v2` أو يفتح `B2.4`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-04-cities-housing-participles` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 515/566 حرفًا فوق حدَّي 150/180 حرفًا.
- **axe والعرض الضيق:** **193 حالة** وصفر مخالفات للقواعد المختارة، مع **138 ظهورًا غير حاسم تشمل 344 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `3c5920edf73a028b97018771bd2c60ce23259e8f` وتطابق HEAD/origin. النشر في Vercel محكوم بحد النشر اليومي (`deployments=[]`)؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

## الحفظ والحدود

مقارنة بالأساس `7998c7a5f61fcc95b48e250bacb6788acea500f5`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B2.3 وبقي `DL-B2-03-AUD-PHR-01` ثابتًا. حُفظت 592 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Nadia` (`voice-02`) من `B1.4` و`Verkäufer` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

- مراجعة نصية مصدرية بالذكاء الاصطناعي؛ ليست شهادة CEFR أو WCAG أو اختبارًا لمتعلمين حقيقيين، ولا مراجع بشري شرطًا للاستمرار.
- 10 مراجع مقروءة بالكامل (مرجع Lingolia Passive بجزأيه 0 و1 من 2، ومرجع Lingolia Modal Verbs بجزئه 0 من 1، و8 مراجع Duden بجزئها الكامل 0 من 1)، واستُبعد رابط Duden واحد أعاد 404. المراجع المعجمية المباشرة تخص الألفاظ المسماة (Verbrauch وRessource وMehrwegsystem وWiederverwendung وAbfall وKreislaufwirtschaft وvermeiden وwiederverwenden وentsorgen) لا كل كلمة في الجدول.
- خمسة أصول/10 مقاطع معلقة ومحفوظة بأصوات Nadia (voice-02) من B1.4 وVerkäufer (voice-03) والسرد (voice-02) والاستماع (voice-03)؛ فحص MP3 والتشغيل الآلي الصامت ومطابقة التفريغ ليست استماعًا أو اعتمادًا صوتيًا.
- الحد الأدنى للحروف (150/180) والإقرارات الذاتية والجهر في P02 لا تصحح عدد الجمل أو القواعد أو النطق آليًا.
- 193 حالة axe وصفر مخالفات للقواعد المختارة، مع 138 ظهورًا غير حاسم تشمل 344 ظهورًا لعقد؛ ليست مخالفات مؤكدة ولا شهادة وصول شاملة.
- فحوص 320×900 و568×320 و1440×900 و390×844 تتم عبر CSS viewports في Chromium وليست هواتف فعلية أو تكبير متصفح أصليًا؛ تحديث v42 إلى v94 fixture محدد وليس كل مسار تاريخي.
- نشر التنفيذ 3c5920e محكوم بحد النشر اليومي في Vercel (deployments=[])؛ لا إعادة نشر آلية ولا شراء ترقية، ولم تختبر الواجهة البعيدة أو Production، وPR#1 غير مدمجة.

## المراجع ونطاق القراءة

- **PASSIV — Lingolia — Passive Voice in German Grammar** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive): قُرئ الجزآن 0 و1 من 2 بالكامل: يشرح المبني للمجهول الإجرائي (Vorgangspassiv) مع werden، وتحويل المفعول المنصوب إلى فاعل مرفوع، وصيغة المبني للمجهول مع الأفعال الناقصة (Modalverb مصرف + Partizip II + werden)، وبدائل المبني للمجهول مثل جملة man والصفات المنتهية بـ-bar. **قرئت كاملة**؛ الأجزاء [0, 1] من 2، بتاريخ 2026-10-09.
- **MODAL — Lingolia — Modal Verbs in German Grammar** [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs): قُرئ الجزء 0 من 1 بالكامل: يشرح دلالات الأفعال الناقصة (können للإمكانية، müssen للضرورة، sollen/sollten للتوصية أو الواجب المقترح) وجداول تصريفها في المضارع والماضي وKonjunktiv II. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **VERBRAUCH — Duden — Verbrauch** [VERBRAUCH](https://www.duden.de/rechtschreibung/Verbrauch): اسم مذكر يُستعمل بلا جمع في المعنى العام للاستهلاك (وجمعه الاصطلاحي النادر die Verbräuche). **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **RESSOURCE — Duden — Ressource** [RESSOURCE](https://www.duden.de/rechtschreibung/Ressource): اسم مؤنث جمعُه الشائع die Ressourcen؛ يدل على الموارد الطبيعية أو المادية اللازمة للإنتاج والحياة. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **MEHRWEGSYSTEM — Duden — Mehrwegsystem** [MEHRWEGSYSTEM](https://www.duden.de/rechtschreibung/Mehrwegsystem): اسم محايد جمعُه die Mehrwegsysteme؛ منظومة إرجاع العبوات وجمعها لإعادة استخدامها. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **WIEDERVERWENDUNG — Duden — Wiederverwendung** [WIEDERVERWENDUNG](https://www.duden.de/rechtschreibung/Wiederverwendung): اسم مؤنث جمعُه النادر die Wiederverwendungen؛ يدل على إعادة استخدام الشيء بعد استعماله الأول. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **ABFALL — Duden — Abfall** [ABFALL](https://www.duden.de/rechtschreibung/Abfall): اسم مذكر جمعُه die Abfälle؛ البقايا أو النفايات الناتجة عن الاستهلاك أو التصنيع. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **KREISLAUFWIRTSCHAFT — Duden — Kreislaufwirtschaft** [KREISLAUFWIRTSCHAFT](https://www.duden.de/rechtschreibung/Kreislaufwirtschaft): اسم مؤنث بلا جمع؛ نظام اقتصادي يعتمد إعادة الاستخدام والإصلاح والتدوير لتقليل استهلاك الموارد والنفايات. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **VERMEIDEN — Duden — vermeiden** [VERMEIDEN](https://www.duden.de/rechtschreibung/vermeiden): فعل قوي غير منفصل تصريفه vermeidet، vermied، hat vermieden؛ يدل على تجنب حدوث شيء مثل النفايات أو الأخطاء. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **WIEDERVERWENDEN — Duden — wiederverwenden** [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden): فعل منفصل تصريفه verwendet wieder، verwendete wieder، واسم المفعول منه hat wiederverwendet بلا ge-؛ يدل على استخدام الشيء مرة أخرى بعد استعماله. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.

**صفحات مستبعدة، وليست مراجع:**
- https://www.duden.de/rechtschreibung/Einwegprodukt — صفحة خطأ 404؛ استُبعدت ولم تُحتسب مرجعًا

## الوحدات الفردية — 95 وحدة

التقسيم: 5 نطاقات، 15 صف مفردات، 5 جمل نماذج قواعد، 10 مساعدات، 6 أدوار حوار، 7 جمل قراءة و6 أسئلة، 5 جمل استماع و5 أسئلة، 8 تمارين، 10 أسئلة تقييم، مهمتا أداء، نموذجان مفصلان إلى 10 أجزاء، 4 بطاقات، 5 أصول صوت. بنود التمارين 40 بتوزيع 4/4/4/4/5/5/4/10.

### scope-01

**المدة المقترحة:** 45–50 دقيقة (مرنة؛ يمكن تقسيمها إلى جلستين) · **المهارات:** قراءة، استماع، قواعد المبني للمجهول مع الأفعال الناقصة، تحليل خيارات استهلاك، كتابة وعرض شفهي (الصوت المسجّل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط دون شريك أو تسجيل)

**نتيجة المراجعة:** المدة مقترحة قابلة للتقسيم؛ الصوت المسجل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### scope-02

**الهدف:** أستطيع أن أصف ما ينبغي أو يمكن أو يُوصى بفعله بالمنتجات والمواد باستخدام **Passiv mit Modalverben** في الجملة الرئيسية والجملة التابعة، وأن أميّز بين الإجراءات التجريبية والنتائج المثبتة. هذا الدرس وتقييمه المحلي للتعلّم الذاتي ولا يمنحان شهادة رسمية لمستوى B2.

**نتيجة المراجعة:** الهدف وصف ما ينبغي أو يمكن أو يوصى بفعله بـPassiv mit Modalverben في الجملة الرئيسية والتابعة مع التمييز بين التجربة والنتيجة المثبتة؛ لا يمنح الدرس شهادة B2.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### scope-03

تنبيه مفردات: يُستعمل **der Verbrauch** و**die Wiederverwendung** في سياق الاستهلاك اليومي بالمفرد عادةً (وإن وُجد في الفصحى أو الاصطلاح جمعان نادران: **die Verbräuche** و**die Wiederverwendungen**)، أما **die Kreislaufwirtschaft** فبلا جمع. والفعل **wiederverwenden** منفصل في المضارع والماضي البسيط (**verwendet wieder, verwendete wieder**)، واسم المفعول منه **wiederverwendet** من غير **ge-** لوجود البادئة غير المنفصلة **ver-**. أما **vermeiden** ففعل قوي غير منفصل (**vermeidet, vermied, hat vermieden**)، و**entsorgen** فعل ضعيف غير منفصل (**entsorgt, entsorgte, hat entsorgt**).

**نتيجة المراجعة:** وُضح إفراد Verbrauch وWiederverwendung في الاستعمال اليومي وعدم جمع Kreislaufwirtschaft، وانفصال wiederverwenden مع اسم المفعول wiederverwendet بلا ge- مقابل عدم انفصال vermeiden وentsorgen.


**مصادر القاعدة/المعنى:** [VERBRAUCH](https://www.duden.de/rechtschreibung/Verbrauch), [WIEDERVERWENDUNG](https://www.duden.de/rechtschreibung/Wiederverwendung), [KREISLAUFWIRTSCHAFT](https://www.duden.de/rechtschreibung/Kreislaufwirtschaft), [VERMEIDEN](https://www.duden.de/rechtschreibung/vermeiden), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### scope-04

نستخدم المبني للمجهول مع الفعل الناقص عندما نركّز على الإجراء المطلوب أو الممكن، لا على من ينفّذه. في الجملة الرئيسية الخبرية يأتي الفعل الناقص مصرّفًا في الموقع الثاني، ثم **Partizip II + werden** في نهاية الجملة؛ أما في الجملة التابعة (مثل **ob / weil / wenn / die**) فيتأخر الفعل الناقص المصرّف إلى آخر الجملة بعد **Partizip II + werden**.

**نتيجة المراجعة:** قُيّدت القاعدة بمجيء الفعل الناقص في الموضع الثاني من الجملة الرئيسية وبقاء Partizip II + werden في النهاية، مقابل تأخر الفعل الناقص إلى آخر الجملة التابعة بعد Partizip II + werden.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### scope-05

قارن بالمعلوم: **Man kann Glasflaschen wiederverwenden.** — يمكن للمرء إعادة استخدام القوارير الزجاجية.  

**نتيجة المراجعة:** مقابلة مباشرة بين الجملة الفاعلة بـman (Man kann Glasflaschen wiederverwenden) والجملة المبنية للمجهول (Glasflaschen können wiederverwendet werden).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### vocab-01

| der Verbrauch | — | الاستهلاك |

**نتيجة المراجعة:** Verbrauch مذكر ويستعمل هنا بلا جمع؛ الاستهلاك.


**مصادر القاعدة/المعنى:** [VERBRAUCH](https://www.duden.de/rechtschreibung/Verbrauch)

### vocab-02

| die Ressource | die Ressourcen | مورد |

**نتيجة المراجعة:** Ressource مؤنث وجمعها الشائع Ressourcen؛ مورد طبيعي أو مادي.


**مصادر القاعدة/المعنى:** [RESSOURCE](https://www.duden.de/rechtschreibung/Ressource)

### vocab-03

| die Verpackung | die Verpackungen | عبوة / تغليف |

**نتيجة المراجعة:** Verpackung مؤنث وجمعها Verpackungen؛ عبوة أو تغليف.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-04

| das Einwegprodukt | die Einwegprodukte | منتج للاستعمال مرة واحدة |

**نتيجة المراجعة:** Einwegprodukt محايد وجمعه Einwegprodukte؛ منتج للاستعمال مرة واحدة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-05

| das Mehrwegsystem | die Mehrwegsysteme | نظام إعادة الاستخدام |

**نتيجة المراجعة:** Mehrwegsystem محايد وجمعه Mehrwegsysteme؛ نظام إعادة الاستخدام.


**مصادر القاعدة/المعنى:** [MEHRWEGSYSTEM](https://www.duden.de/rechtschreibung/Mehrwegsystem)

### vocab-06

| die Rückgabe | die Rückgaben | إعادة / إرجاع |

**نتيجة المراجعة:** Rückgabe مؤنث وجمعها Rückgaben؛ إعادة أو إرجاع العبوات.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-07

| die Wiederverwendung | — | إعادة الاستخدام |

**نتيجة المراجعة:** Wiederverwendung مؤنث وتستعمل هنا بلا جمع؛ إعادة الاستخدام.


**مصادر القاعدة/المعنى:** [WIEDERVERWENDUNG](https://www.duden.de/rechtschreibung/Wiederverwendung)

### vocab-08

| die Reparatur | die Reparaturen | إصلاح |

**نتيجة المراجعة:** Reparatur مؤنث وجمعها Reparaturen؛ إصلاح.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-09

| der Abfall | die Abfälle | نفاية |

**نتيجة المراجعة:** Abfall مذكر وجمعه Abfälle؛ نفاية أو مخلفات.


**مصادر القاعدة/المعنى:** [ABFALL](https://www.duden.de/rechtschreibung/Abfall)

### vocab-10

| die Kreislaufwirtschaft | — | الاقتصاد الدائري |

**نتيجة المراجعة:** Kreislaufwirtschaft مؤنث بلا جمع؛ الاقتصاد الدائري.


**مصادر القاعدة/المعنى:** [KREISLAUFWIRTSCHAFT](https://www.duden.de/rechtschreibung/Kreislaufwirtschaft)

### vocab-11

| vermeiden | vermeidet | يتجنّب |

**نتيجة المراجعة:** vermeiden فعل قوي غير منفصل حاضرُه vermeidet واسم مفعوله vermieden؛ يتجنب.


**مصادر القاعدة/المعنى:** [VERMEIDEN](https://www.duden.de/rechtschreibung/vermeiden)

### vocab-12

| wiederverwenden | verwendet wieder | يعيد الاستخدام |

**نتيجة المراجعة:** wiederverwenden فعل منفصل حاضرُه verwendet wieder واسم مفعوله wiederverwendet؛ يعيد الاستخدام.


**مصادر القاعدة/المعنى:** [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### vocab-13

| trennen | trennt | يفرز |

**نتيجة المراجعة:** trennen فعل ضعيف حاضرُه trennt واسم مفعوله getrennt؛ يفرز.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-14

| entsorgen | entsorgt | يتخلّص من |

**نتيجة المراجعة:** entsorgen فعل ضعيف غير منفصل حاضرُه entsorgt واسم مفعوله entsorgt؛ يتخلص من النفايات.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### vocab-15

| langlebig / wiederverwendbar | — | طويل العمر / قابل لإعادة الاستخدام |

**نتيجة المراجعة:** langlebig طويل العمر وwiederverwendbar قابل لإعادة الاستخدام؛ صفتان لوصف البدائل المستدامة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive)

### grammar-01

Einwegverpackungen müssen reduziert werden.

**نتيجة المراجعة:** Einwegverpackungen müssen reduziert werden: ضرورة بصيغة الجمع müssen، ثم Partizip II (reduziert) + werden في النهاية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### grammar-02

Mehrwegbehälter können mehrfach verwendet werden.

**نتيجة المراجعة:** Mehrwegbehälter können mehrfach verwendet werden: إمكانية بصيغة الجمع können، ثم verwendet werden في النهاية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### grammar-03

Beschädigte Geräte sollten repariert werden.

**نتيجة المراجعة:** Beschädigte Geräte sollten repariert werden: توصية بصيغة sollten، ثم repariert werden في النهاية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### grammar-04

Man kann Glasflaschen wiederverwenden.

**نتيجة المراجعة:** Man kann Glasflaschen wiederverwenden: جملة معلوم بالفاعل العام man والمصدر المنفصل المتصل في النهاية wiederverwenden.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### grammar-05

Glasflaschen können wiederverwendet werden.

**نتيجة المراجعة:** Glasflaschen können wiederverwendet werden: الجملة المقابلة بالمبني للمجهول بعد تحويل Glasflaschen إلى فاعل مرفوع.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### helper-01

- **التركيز الدلالي في المبني للمجهول:** نركّز على الشيء أو المادة والإجراء الواقع عليها (**Einwegverpackungen, Mehrwegbecher, Geräte, Abfälle**)، بينما يُطوى الفاعل العام (**man**) أو يُذكر عند الحاجة فقط.

**نتيجة المراجعة:** بيان تركيز المبني للمجهول على المادة أو المنتج والإجراء المطلوب بدل الفاعل العام.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive)

### helper-02

- **تحويل المفعول به إلى فاعل مرفوع:** يتحول المفعول المنصوب في جملة **man** إلى فاعل مرفوع (**Nominativ**) في الجملة المبنية للمجهول، فيتطابق معه الفعل الناقص إفرادًا وجمعًا (**Man muss die Abfälle trennen → Die Abfälle müssen getrennt werden**).

**نتيجة المراجعة:** شرح تحويل المفعول المنصوب في جملة man إلى فاعل مرفوع يطابقه الفعل الناقص إفرادًا وجمعًا.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [ABFALL](https://www.duden.de/rechtschreibung/Abfall)

### helper-03

- **ترتيب نهاية الجملة الرئيسية:** في الجملة الرئيسية الخبرية يقف **Partizip II** قبل المصدر **werden** في نهاية الجملة (**gereinigt werden**، **wiederverwendet werden**، **repariert werden**).

**نتيجة المراجعة:** تثبيت ترتيب نهاية الجملة الرئيسية: Partizip II + werden.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### helper-04

- **ترتيب نهاية الجملة التابعة:** في الجمل التابعة المبدوءة بـ**ob / weil / wenn / damit** أو ضمير الوصل يقف **Partizip II + werden** ثم الفعل الناقص المصرّف في آخر الجملة (**ob sie repariert werden können**).

**نتيجة المراجعة:** تثبيت ترتيب نهاية الجملة التابعة: Partizip II + werden + Modalverb مصرف.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### helper-05

- **الفروق الدلالية بين الأفعال الناقصة:** يفيد **müssen** الضرورة أو الإلزام، ويفيد **können** الإمكانية، وتفيد **sollen / sollten** التوصية أو الإجراء المخطط أو المقترح.

**نتيجة المراجعة:** تمييز الدلالات الثلاث: müssen للضرورة، وkönnen للإمكانية، وsollen/sollten للتوصية.


**مصادر القاعدة/المعنى:** [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### helper-06

- **انتبه لنفي `nicht müssen`:** تعني **Beschädigte Tabletts müssen nicht sofort ersetzt werden** أنها «لا يلزم استبدالها فورًا» (نفي الضرورة)، لا التحريم.

**نتيجة المراجعة:** توضيح معنى النفي غير الإلزامي في nicht müssen (عدم وجوب الاستبدال الفوري لا التحريم).


**مصادر القاعدة/المعنى:** [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### helper-07

- **صياغة `Partizip II` لأفعال الدرس:** الأفعال المنتهية بـ**-ieren** والأفعال ذات البادئات غير المنفصلة (**ver-, ent-**) لا تأخذ **ge-** (**reduziert, repariert, sortiert, organisiert, verwendet, wiederverwendet, vermieden, entsorgt**)، بينما تأخذها الأفعال البسيطة والمنفصلة القياسية (**gereinigt, getrennt, geprüft, gesammelt, zurückgegeben, ausgeliehen, weggeworfen**).

**نتيجة المراجعة:** جمع أنماط Partizip II لأفعال الدرس بين الأفعال الخالية من ge- والأفعال البسيطة والمنفصلة القياسية.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [VERMEIDEN](https://www.duden.de/rechtschreibung/vermeiden), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### helper-08

- **مقابلة الجملة الفاعلة بـ`man` والجملة المجهولة:** تؤدي **Man kann Glasflaschen wiederverwenden** و**Glasflaschen können wiederverwendet werden** المعنى العملي نفسه مع إبراز المادة (**Glasflaschen**) في صدر الجملة الثانية.

**نتيجة المراجعة:** المقابلة الوظيفية بين جملة man المعلومة والجملة المبنية للمجهول.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### helper-09

- **الأمانة المنهجية في وصف التجارب البيئية:** نفرّق بين تجربة قيد الاختبار (**erprobt / werden zunächst getestet**) وبين النتائج المنشورة؛ فلا نضيف نسبًا مئوية أو وعودًا بيئية غير موثقة.

**نتيجة المراجعة:** ضبط الأمانة المنهجية بالتفريق بين التجربة الجارية والنتائج المثبتة ومنع الأرقام غير الموثقة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### helper-10

- **أداء المهمتين T08 (`P01` و`P02`):** المهمة الأولى **P01** كتابة فقط دون جهر، والمهمة الثانية **P02** كتابة مع قراءة جهرية ذاتية دون شريك أو تسجيل؛ والتقييم يعتمد على النصوص المكتوبة والتحقق الذاتي المحلي ولا يتوقف على تشغيل ملفات الصوت.

**نتيجة المراجعة:** تحديد P01 كتابة فقط وP02 كتابة وجهر ذاتي، وبيان استقلال التقييم عن ملفات الصوت.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-01

Was passiert mit den Mehrwegbechern nach dem Verkauf?

**نتيجة المراجعة:** Nadia تسأل عما يحدث للأكواب المتعددة الاستخدام بعد البيع.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-02

Sie können an der Kasse zurückgegeben werden. Danach werden sie gereinigt.

**نتيجة المراجعة:** البائع يوضح إمكانية إرجاعها عند الصندوق (können … zurückgegeben werden) ثم تنظيفها (werden sie gereinigt).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### dialogue-03

Und was ist mit den Verpackungen?

**نتيجة المراجعة:** سؤال عن التعامل مع العبوات والتغليف.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### dialogue-04

Ein Teil kann vermieden werden, wenn Kundinnen eigene Behälter mitbringen. Verpackungen, die noch gebraucht werden, müssen richtig getrennt werden.

**نتيجة المراجعة:** البائع يبين إمكان تجنب جزء منها (kann vermieden werden) ووجوب فرز الباقي (müssen richtig getrennt werden).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [VERMEIDEN](https://www.duden.de/rechtschreibung/vermeiden)

### dialogue-05

Werden beschädigte Produkte gleich weggeworfen?

**نتيجة المراجعة:** سؤال بالمبني للمجهول في المضارع عن رمي المنتجات المتضررة فورًا.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive)

### dialogue-06

Nicht immer. Manche Gegenstände können repariert werden. Wir prüfen zuerst, ob sich die Reparatur lohnt.

**نتيجة المراجعة:** نفي التعميم وبيان إمكان إصلاح بعض الأشياء (können repariert werden) بعد فحص جدوى الإصلاح.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### reading-01

Der fiktive Laden „Kreislauf“ erprobt mehrere Möglichkeiten, Materialien länger zu nutzen.

**نتيجة المراجعة:** يختبر المتجر الخيالي Kreislauf عدة إمكانات لإطالة استخدام المواد.


**مصادر القاعدة/المعنى:** [KREISLAUFWIRTSCHAFT](https://www.duden.de/rechtschreibung/Kreislaufwirtschaft)

### reading-02

Getränke können in Mehrwegbechern verkauft werden; die Becher werden nach der Rückgabe gereinigt und erneut verwendet.

**نتيجة المراجعة:** يمكن بيع المشروبات في أكواب متعددة الاستخدام وتُنظف بعد إرجاعها وتُستخدم مجددًا.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### reading-03

Einige Verpackungen können vermieden werden, wenn Kundinnen und Kunden eigene Behälter mitbringen.

**نتيجة المراجعة:** يمكن تجنب بعض العبوات إذا أحضر الزبائن حاوياتهم الخاصة.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [VERMEIDEN](https://www.duden.de/rechtschreibung/vermeiden)

### reading-04

Beschädigte Gegenstände sollen zuerst geprüft werden, bevor sie entsorgt werden.

**نتيجة المراجعة:** ينبغي فحص الأشياء المتضررة أولًا قبل التخلص منها (sollen zuerst geprüft werden, bevor sie entsorgt werden).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### reading-05

Wenn eine Reparatur sinnvoll ist, kann sie in einer örtlichen Werkstatt organisiert werden.

**نتيجة المراجعة:** إذا كان الإصلاح مجديًا فيمكن تنظيمه في ورشة محلية (kann sie … organisiert werden).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### reading-06

Das Team sammelt Rückmeldungen, um herauszufinden, welche Schritte im Alltag gut funktionieren.

**نتيجة المراجعة:** يجمع الفريق ملاحظات الزبائن لمعرفة الخطوات الناجحة في الحياة اليومية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-07

Es veröffentlicht noch keine Ergebnisse; die Möglichkeiten werden zunächst getestet.

**نتيجة المراجعة:** لم ينشر الفريق نتائج بعد؛ فالإمكانات تُختبر مبدئيًا (werden zunächst getestet).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive)

### reading-question-01

Welche Möglichkeiten erprobt der fiktive Laden?

**نتيجة المراجعة:** Mehrere Möglichkeiten, Materialien länger zu nutzen. — يختبر المتجر طرقًا لإطالة استخدام المواد.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-02

Was geschieht mit den Mehrwegbechern nach der Rückgabe?

**نتيجة المراجعة:** Sie werden gereinigt und erneut verwendet. — تُنظف الأكواب بعد إرجاعها وتُستخدم من جديد.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-03

Wie können einige Verpackungen vermieden werden?

**نتيجة المراجعة:** Indem Kundinnen und Kunden eigene Behälter mitbringen. — يمكن تجنب بعض العبوات بإحضار الزبائن حاوياتهم الخاصة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-04

Was soll mit beschädigten Gegenständen zuerst passieren?

**نتيجة المراجعة:** Sie sollen zuerst geprüft werden. — ينبغي فحص الأشياء المتضررة أولًا قبل التخلص منها.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-05

Was wird das Team sammeln?

**نتيجة المراجعة:** Rückmeldungen. — يجمع الفريق ملاحظات الزبائن وردودهم.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### reading-question-06

Hat das Team bereits Ergebnisse veröffentlicht?

**نتيجة المراجعة:** Nein, es veröffentlicht noch keine Ergebnisse; die Möglichkeiten werden zunächst getestet. — لا، لم ينشر نتائج بعد وما زالت الإمكانات قيد الاختبار.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-01

In unserem Café werden Getränke in Mehrwegbechern angeboten.

**نتيجة المراجعة:** تُقدم المشروبات في المقهى في أكواب متعددة الاستخدام (werden … angeboten).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive)

### listening-02

Die Becher können gegen Pfand ausgeliehen und später zurückgegeben werden.

**نتيجة المراجعة:** يمكن استعارة الأكواب مقابل تأمين مسترد وإعادتها لاحقًا (können … ausgeliehen und später zurückgegeben werden).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### listening-03

Essensreste werden getrennt gesammelt.

**نتيجة المراجعة:** تُجمع بقايا الطعام مفروزة (werden getrennt gesammelt).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive)

### listening-04

Beschädigte Tabletts müssen nicht sofort ersetzt werden; zuerst wird geprüft, ob sie repariert werden können.

**نتيجة المراجعة:** لا يلزم استبدال الصواني المتضررة فورًا؛ يُفحص أولًا هل يمكن إصلاحها (ob sie repariert werden können).


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### listening-05

Das Team sammelt Rückmeldungen, um Vorschläge der Gäste kennenzulernen und weniger Material zu verschwenden.

**نتيجة المراجعة:** يجمع الفريق الملاحظات للتعرف إلى مقترحات الضيوف وتقليل هدر المواد.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-01

In welchen Bechern werden Getränke angeboten?

**نتيجة المراجعة:** In Mehrwegbechern. — تُقدم المشروبات في أكواب متعددة الاستخدام.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-02

Wie können Gäste die Becher nutzen?

**نتيجة المراجعة:** Gegen Pfand ausleihen und später zurückgeben. — يمكن للضيوف استعارتها مقابل تأمين مسترد ثم إعادتها.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-03

Was geschieht mit Essensresten?

**نتيجة المراجعة:** Sie werden getrennt gesammelt. — تُجمع بقايا الطعام مفروزة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-04

Was wird vor dem Ersatz beschädigter Tabletts geprüft?

**نتيجة المراجعة:** Ob sie repariert werden können. — يُفحص قبل الاستبدال ما إذا كان يمكن إصلاح الصواني.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### listening-question-05

Warum sammelt das Team Rückmeldungen?

**نتيجة المراجعة:** Um Vorschläge der Gäste kennenzulernen und weniger Material zu verschwenden. — يجمع الفريق الملاحظات لمعرفة مقترحات الضيوف وتقليل هدر المواد.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-T01

1. منتج يمكن استعماله أكثر من مرة: **wiederverwendbar / beschädigt**
2. ما يُلقى بعد انتهاء الحاجة إليه: **der Abfall / die Ressource**
3. إصلاح شيء بدل استبداله: **die Reparatur / die Verpackung**
4. نظام يستخدم فيه المنتج أو الحاوية مرارًا: **das Mehrwegsystem / das Einwegprodukt**

**نتيجة المراجعة:** أربعة بنود مفردات تثبت wiederverwendbar وAbfall وReparatur وMehrwegsystem.

- **1.** منتج يمكن استعماله أكثر من مرة: **wiederverwendbar / beschädigt**
  - **المفتاح:** wiederverwendbar؛ الصفة الدالة على قابلية إعادة الاستخدام أكثر من مرة هي wiederverwendbar لا beschädigt.
- **2.** ما يُلقى بعد انتهاء الحاجة إليه: **der Abfall / die Ressource**
  - **المفتاح:** der Abfall؛ ما يُلقى بعد انتهاء الحاجة إليه هو der Abfall لا die Ressource.
- **3.** إصلاح شيء بدل استبداله: **die Reparatur / die Verpackung**
  - **المفتاح:** die Reparatur؛ إصلاح الشيء بدل استبداله هو die Reparatur لا die Verpackung.
- **4.** نظام يستخدم فيه المنتج أو الحاوية مرارًا: **das Mehrwegsystem / das Einwegprodukt**
  - **المفتاح:** das Mehrwegsystem؛ النظام الذي تُستخدم فيه الحاوية مرارًا هو das Mehrwegsystem لا das Einwegprodukt.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [ABFALL](https://www.duden.de/rechtschreibung/Abfall), [MEHRWEGSYSTEM](https://www.duden.de/rechtschreibung/Mehrwegsystem)

### DL-B2-03-T02

1. Einwegverpackungen ______ stärker reduziert werden. (sollen)
2. Glas kann gut ______ werden. (wiederverwenden)
3. Beschädigte Geräte ______ nicht sofort entsorgt werden. (müssen، نفي الضرورة)
4. Die Materialien ______ getrennt gesammelt werden. (können)

**نتيجة المراجعة:** أربع جمل تدرب تصريف الفعل الناقص وصوغ Partizip II (wiederverwendet) ونفي الضرورة (nicht müssen).

- **1.** Einwegverpackungen ______ stärker reduziert werden. (sollen)
  - **المفتاح:** sollen؛ صيغة الجمع من sollen مع Einwegverpackungen هي sollen.
- **2.** Glas kann gut ______ werden. (wiederverwenden)
  - **المفتاح:** wiederverwendet؛ قبل werden نضع Partizip II من الفعل المنفصل wiederverwenden بلا ge-: wiederverwendet.
- **3.** Beschädigte Geräte ______ nicht sofort entsorgt werden. (müssen، نفي الضرورة)
  - **المفتاح:** müssen؛ مع النفي غير الإلزامي (nicht sofort) والفاعل الجمع Geräte نكتب müssen.
- **4.** Die Materialien ______ getrennt gesammelt werden. (können)
  - **المفتاح:** können؛ صيغة الجمع من können مع Die Materialien هي können.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### DL-B2-03-T03

1. Die Becher können nach der Rückgabe ______ ______. (reinigen)
2. Einige Produkte müssen sorgfältig ______ ______. (sortieren)
3. Die Verpackungen sollten wieder ______ ______. (verwenden)
4. Zuerst wird geprüft, ob die Tabletts ______ ______ ______. (reparieren / können)

**نتيجة المراجعة:** أربع جمل تثبت ترتيب نهاية الجملة الرئيسية (Partizip II + werden) والجملة التابعة (Partizip II + werden + Modalverb).

- **1.** Die Becher können nach der Rückgabe ______ ______. (reinigen)
  - **المفتاح:** gereinigt werden؛ في نهاية الجملة الرئيسية بعد können يأتي Partizip II ثم werden: gereinigt werden.
- **2.** Einige Produkte müssen sorgfältig ______ ______. (sortieren)
  - **المفتاح:** sortiert werden؛ من الفعل sortieren نصوغ Partizip II بلا ge- ثم werden: sortiert werden.
- **3.** Die Verpackungen sollten wieder ______ ______. (verwenden)
  - **المفتاح:** verwendet werden؛ من الفعل غير المنفصل verwenden نصوغ Partizip II بلا ge- ثم werden: verwendet werden.
- **4.** Zuerst wird geprüft, ob die Tabletts ______ ______ ______. (reparieren / können)
  - **المفتاح:** repariert werden können؛ في الجملة التابعة المبدوءة بـob يأتي Partizip II + werden ثم الفعل الناقص المصرف في النهاية: repariert werden können.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### DL-B2-03-T04

1. **Man muss die Abfälle trennen.** → Die Abfälle ______ ______ ______.
2. **Man kann die Behälter wiederverwenden.** → Die Behälter ______ ______ ______.
3. **Man sollte beschädigte Geräte reparieren.** → Beschädigte Geräte ______ ______ ______.
4. **Man kann einige Verpackungen vermeiden.** → Einige Verpackungen ______ ______ ______.

**نتيجة المراجعة:** أربع جمل تحول جمل man المعلومة إلى المبني للمجهول مع فعل ناقص.

- **1.** **Man muss die Abfälle trennen.** → Die Abfälle ______ ______ ______.
  - **المفتاح:** müssen getrennt werden؛ تحويل die Abfälle إلى فاعل جمع مع müssen ثم getrennt werden.
- **2.** **Man kann die Behälter wiederverwenden.** → Die Behälter ______ ______ ______.
  - **المفتاح:** können wiederverwendet werden؛ تحويل die Behälter إلى فاعل جمع مع können ثم wiederverwendet werden.
- **3.** **Man sollte beschädigte Geräte reparieren.** → Beschädigte Geräte ______ ______ ______.
  - **المفتاح:** sollten repariert werden؛ تحويل beschädigte Geräte إلى فاعل جمع مع sollten ثم repariert werden.
- **4.** **Man kann einige Verpackungen vermeiden.** → Einige Verpackungen ______ ______ ______.
  - **المفتاح:** können vermieden werden؛ تحويل einige Verpackungen إلى فاعل جمع مع können ثم vermieden werden.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### DL-B2-03-T05

حدّد صحيحًا أو خطأ:

1. «Kreislauf» متجر حقيقي في مدينة معروفة.
2. تُنظّف الأكواب المتعددة الاستخدام بعد إعادتها.
3. لا يمكن تجنّب أي نوع من التغليف في المتجر.
4. ينبغي فحص الأشياء المتضررة قبل التخلص منها.
5. نشر الفريق نتائج نهائية للتجربة بالفعل.

**نتيجة المراجعة:** خمس عبارات تتحقق من فهم نص متجر Kreislauf الخيالي والتمييز بين الاختبار والنتائج.

- **1.** «Kreislauf» متجر حقيقي في مدينة معروفة.
  - **المفتاح:** خطأ؛ خطأ؛ ينص الدرس صراحةً على أن المتجر خيالي (Der fiktive Laden „Kreislauf“).
- **2.** تُنظّف الأكواب المتعددة الاستخدام بعد إعادتها.
  - **المفتاح:** صحيح؛ صحيح؛ تُنظف الأكواب المتعددة الاستخدام بعد إرجاعها وتُستخدم مجددًا.
- **3.** لا يمكن تجنّب أي نوع من التغليف في المتجر.
  - **المفتاح:** خطأ؛ خطأ؛ يمكن تجنب بعض العبوات بإحضار الزبائن حاوياتهم الخاصة.
- **4.** ينبغي فحص الأشياء المتضررة قبل التخلص منها.
  - **المفتاح:** صحيح؛ صحيح؛ ينبغي فحص الأشياء المتضررة أولًا قبل التخلص منها.
- **5.** نشر الفريق نتائج نهائية للتجربة بالفعل.
  - **المفتاح:** خطأ؛ خطأ؛ لم ينشر الفريق نتائج بعد وما زالت الإمكانات تُختبر مبدئيًا.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-T06

أكمل بالألمانية:

1. Die Getränke werden in ______ angeboten.
2. Die Becher können gegen ______ ausgeliehen werden.
3. Essensreste werden getrennt ______.
4. Vor einem Ersatz wird geprüft, ob die Tabletts ______ werden können.
5. Das Team möchte weniger Material ______.

**نتيجة المراجعة:** خمس جمل ألمانية تتحقق من الكلمات المحورية في نص استماع المقهى.

- **1.** Die Getränke werden in ______ angeboten.
  - **المفتاح:** Mehrwegbechern؛ تُقدم المشروبات في المقهى في Mehrwegbechern.
- **2.** Die Becher können gegen ______ ausgeliehen werden.
  - **المفتاح:** Pfand؛ تُستعار الأكواب مقابل تأمين مسترد: Pfand.
- **3.** Essensreste werden getrennt ______.
  - **المفتاح:** gesammelt؛ تُجمع بقايا الطعام مفروزة: gesammelt.
- **4.** Vor einem Ersatz wird geprüft, ob die Tabletts ______ werden können.
  - **المفتاح:** repariert؛ يُفحص قبل الاستبدال هل يمكن إصلاح الصواني: repariert.
- **5.** Das Team möchte weniger Material ______.
  - **المفتاح:** verschwenden؛ يريد الفريق تقليل هدر المواد: verschwenden.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-T07

استخدم **müssen**, **können** أو **sollten**:

1. كإمكانية: **Mehrwegbecher ______ mehrfach verwendet werden.**
2. كتوصية: **Beschädigte Geräte ______ zuerst geprüft werden.**
3. كضرورة: **Gefährliche Abfälle ______ fachgerecht entsorgt werden.**
4. كإمكانية: **Getränke ______ im Café gegen Pfand ausgeliehen werden.**

**نتيجة المراجعة:** أربع جمل تميز دلاليًا بين können وsollten وmüssen.

- **1.** كإمكانية: **Mehrwegbecher ______ mehrfach verwendet werden.**
  - **المفتاح:** können؛ للتعبير عن الإمكانية مع الفاعل الجمع Mehrwegbecher نختار können.
- **2.** كتوصية: **Beschädigte Geräte ______ zuerst geprüft werden.**
  - **المفتاح:** sollten؛ للتعبير عن التوصية مع الفاعل الجمع Beschädigte Geräte نختار sollten.
- **3.** كضرورة: **Gefährliche Abfälle ______ fachgerecht entsorgt werden.**
  - **المفتاح:** müssen؛ للتعبير عن الضرورة الملزمة مع Gefährliche Abfälle نختار müssen.
- **4.** كإمكانية: **Getränke ______ im Café gegen Pfand ausgeliehen werden.**
  - **المفتاح:** können؛ للتعبير عن الإمكانية مع الفاعل الجمع Getränke نختار können.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### DL-B2-03-T08

اكتب خمس جمل ألمانية على الأقل عن متجر أو مقهى خيالي، أو اعرض خمس جمل مكافئة شفهيًا. ينقسم هذا التدريب العملي إلى مهمتين متكاملتين للتعلّم الذاتي:

1. **المهمة الأولى (P01 — كتابة فقط):** اكتب خطة قصيرة من خمس جمل ألمانية على الأقل لمتجر أو مقهى خيالي. اقترح ثلاثة إجراءات مناسبة للسياق، على أن يتضمن أحدها خيارًا لإعادة الاستخدام أو الإصلاح، واستخدم المبني للمجهول مع فعل ناقص مرتين على الأقل. لا تذكر أرقامًا أو وعودًا بيئية غير موثقة. هذه المهمة كتابية فقط؛ لا يلزم شريك ولا تسجيل.
2. **المهمة الثانية (P02 — كتابة + قراءة جهرية ذاتية استنادًا إلى T06):** استنادًا إلى نص `T06` المكتوب، اكتب إحاطة قصيرة لفريق مقهى من خمس إلى ست جمل ألمانية ثم اقرأها بصوت واضح. انقل ثلاثة تفاصيل صحيحة على الأقل، مثل إعارة الأكواب متعددة الاستخدام مقابل تأمين مسترد (`Pfand`) ثم إعادتها، أو جمع بقايا الطعام منفصلة، أو فحص إمكان إصلاح الصواني المتضررة. اقترح خطوة تالية واحدة مناسبة، واستخدم المبني للمجهول مع فعل ناقص مرتين على الأقل. ميّز بين ما ورد في النص وما تقترحه أنت؛ لا تضف أرقامًا أو وعودًا بيئية غير موثقة. لا يلزم تشغيل MP3. إذا كنت تتعلم وحدك فاكتب الإجابة ثم اقرأها بصوت واضح؛ لا يلزم تسجيل.

**نتيجة المراجعة:** مهمتا التمرين 8 مفصلتان إلى P01 كتابة فقط (5 جمل، 515 حرفًا) وP02 كتابة وجهر (5 جمل، 566 حرفًا).

- **1.** In unserem fiktiven Nachbarschaftsladen sollen Einwegverpackungen schrittweise reduziert werden.
  - **المفتاح:** In unserem fiktiven Nachbarschaftsladen sollen Einwegverpackungen schrittweise reduziert werden.؛ الجملة الأولى في P01 تقترح بـsollen … reduziert werden تقليل عبوات الاستعمال الواحد تدريجيًا في متجر خيالي.
- **2.** Heißgetränke und Suppen können in langlebigen Mehrwegbehältern gegen Pfand angeboten werden.
  - **المفتاح:** Heißgetränke und Suppen können in langlebigen Mehrwegbehältern gegen Pfand angeboten werden.؛ الجملة الثانية تقترح بـkönnen … angeboten werden تقديم المشروبات والحساء في حاويات متعددة الاستخدام مقابل تأمين.
- **3.** Kundinnen und Kunden können außerdem eigene Dosen für trockene Lebensmittel mitbringen.
  - **المفتاح:** Kundinnen und Kunden können außerdem eigene Dosen für trockene Lebensmittel mitbringen.؛ الجملة الثالثة تذكر إمكان إحضار الزبائن علبهم الخاصة للمواد الجافة.
- **4.** Beschädigte Küchengeräte müssen nicht sofort entsorgt werden, sondern sollten zuerst in einer kleinen Partnerwerkstatt geprüft und repariert werden.
  - **المفتاح:** Beschädigte Küchengeräte müssen nicht sofort entsorgt werden, sondern sollten zuerst in einer kleinen Partnerwerkstatt geprüft und repariert werden.؛ الجملة الرابعة تجمع بين نفي الضرورة الفورية (müssen nicht sofort entsorgt werden) والتوصية بالفحص والإصلاح (sollten … geprüft und repariert werden).
- **5.** Das Team sammelt Rückmeldungen im Alltag, ohne vorab feste Einsparquoten zu versprechen.
  - **المفتاح:** Das Team sammelt Rückmeldungen im Alltag, ohne vorab feste Einsparquoten zu versprechen.؛ الجملة الخامسة تؤكد جمع الملاحظات في الواقع اليومي دون إطلاق وعود أو نسب توفير غير موثقة.
- **6.** In unserem Café werden Getränke in Mehrwegbechern angeboten, die gegen Pfand ausgeliehen und später zurückgegeben werden können.
  - **المفتاح:** In unserem Café werden Getränke in Mehrwegbechern angeboten, die gegen Pfand ausgeliehen und später zurückgegeben werden können.؛ الجملة الأولى في P02 تنقل تقديم المشروبات في أكواب متعددة الاستخدام وإمكان استعارتها وإرجاعها مقابل Pfand في جملة وصل تابعة (… werden können).
- **7.** Essensreste werden in der Küche getrennt gesammelt.
  - **المفتاح:** Essensreste werden in der Küche getrennt gesammelt.؛ الجملة الثانية تنقل جمع بقايا الطعام مفروزة في المطبخ.
- **8.** Beschädigte Tabletts müssen nicht sofort ersetzt werden, weil zuerst geprüft wird, ob sie repariert werden können.
  - **المفتاح:** Beschädigte Tabletts müssen nicht sofort ersetzt werden, weil zuerst geprüft wird, ob sie repariert werden können.؛ الجملة الثالثة تنقل عدم وجوب استبدال الصواني المتضررة فورًا وفحص إمكان إصلاحها في جملة تابعة (ob sie repariert werden können).
- **9.** Das Team sammelt Rückmeldungen der Gäste, um praktische Vorschläge kennenzulernen und weniger Material zu verschwenden.
  - **المفتاح:** Das Team sammelt Rückmeldungen der Gäste, um praktische Vorschläge kennenzulernen und weniger Material zu verschwenden.؛ الجملة الرابعة تنقل غاية جمع ملاحظات الضيوف لتقليل هدر المواد.
- **10.** Als nächster Schritt sollten an der Theke kurze Hinweise zur Rückgabe angebracht werden, damit die Mehrwegbecher noch einfacher genutzt werden können.
  - **المفتاح:** Als nächster Schritt sollten an der Theke kurze Hinweise zur Rückgabe angebracht werden, damit die Mehrwegbecher noch einfacher genutzt werden können.؛ الجملة الخامسة تفصل الخطوة المقترحة بـsollten … angebracht werden وdamit … genutzt werden können دون أرقام غير موثقة.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### DL-B2-03-Q01

أي مصطلح ألماني يعني «نظام إعادة الاستخدام»؟

**نتيجة المراجعة:** das Mehrwegsystem هو نظام يستخدم فيه المنتج أو الحاوية مرات متعددة؛ أما Einweg فيشير إلى الاستعمال مرة واحدة.

**المفتاح:** das Mehrwegsystem

**الربط:** DL-B2-03-T01

- **الخيار 1 — ليس المطلوب:** das Einwegprodukt — das Einwegprodukt يعني منتجًا للاستعمال مرة واحدة لا نظام إعادة الاستخدام.
- **الخيار 2 — صحيح:** das Mehrwegsystem — das Mehrwegsystem هو المصطلح الصحيح لنظام إعادة الاستخدام.
- **الخيار 3 — ليس المطلوب:** die Verpackung — die Verpackung تعني العبوة أو التغليف بوجه عام.

**مصادر القاعدة/المعنى:** [MEHRWEGSYSTEM](https://www.duden.de/rechtschreibung/Mehrwegsystem)

### DL-B2-03-Q02

أكمل الصيغة: **Glas kann gut ___ werden.**

**نتيجة المراجعة:** يأتي Partizip II، وهو wiederverwendet، قبل werden في المبني للمجهول مع الفعل الناقص.

**المفتاح:** wiederverwendet

**الربط:** DL-B2-03-T02

- **الخيار 1 — ليس المطلوب:** wiederverwenden — wiederverwenden مصدر وليس اسم مفعول قبل werden.
- **الخيار 2 — صحيح:** wiederverwendet — wiederverwendet هو اسم المفعول الصحيح (Partizip II) قبل werden.
- **الخيار 3 — ليس المطلوب:** wiederverwendeten — wiederverwendeten صيغة ماضٍ أو صفة مصرفه لا تصلح في مركب المبني للمجهول.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### DL-B2-03-Q03

اختر المجموعة الصحيحة لإكمال نهاية الجملة: **Die Becher können nach der Rückgabe ___.**

**نتيجة المراجعة:** بعد الفعل الناقص يأتي Partizip II ثم werden: Die Becher können nach der Rückgabe gereinigt werden.

**المفتاح:** gereinigt werden

**الربط:** DL-B2-03-T03

- **الخيار 1 — صحيح:** gereinigt werden — gereinigt werden يضع Partizip II قبل werden في نهاية الجملة الرئيسية.
- **الخيار 2 — ليس المطلوب:** werden gereinigt — werden gereinigt يعكس الترتيب القياسي في نهاية الجملة بعد الفعل الناقص.
- **الخيار 3 — ليس المطلوب:** reinigen werden — reinigen werden يضع المصدر بدل Partizip II.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### DL-B2-03-Q04

حوّل إلى المبني للمجهول مع الفعل الناقص: **Man muss die Abfälle trennen.**

**نتيجة المراجعة:** تصبح Abfälle فاعل الجملة المبنية للمجهول، ويأتي Partizip II getrennt قبل werden: Die Abfälle müssen getrennt werden.

**المفتاح:** Die Abfälle müssen getrennt werden.

**الربط:** DL-B2-03-T04

- **الخيار 1 — صحيح:** Die Abfälle müssen getrennt werden. — Die Abfälle müssen getrennt werden تحول المفعول إلى فاعل وتضع getrennt قبل werden.
- **الخيار 2 — ليس المطلوب:** Die Abfälle müssen trennen werden. — trennen werden تترك الفعل في صيغة المصدر بدل Partizip II.
- **الخيار 3 — ليس المطلوب:** Die Abfälle müssen werden getrennt. — müssen werden getrennt تعكس ترتيب Partizip II + werden.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [ABFALL](https://www.duden.de/rechtschreibung/Abfall)

### DL-B2-03-Q05

اختر التحويل الصحيح: **Man sollte beschädigte Geräte reparieren.**

**نتيجة المراجعة:** مع توصية بشأن أجهزة متعددة نستخدم sollten، ثم Partizip II repariert وwerden في نهاية الجملة.

**المفتاح:** Beschädigte Geräte sollten repariert werden.

**الربط:** DL-B2-03-T04

- **الخيار 1 — صحيح:** Beschädigte Geräte sollten repariert werden. — Beschädigte Geräte sollten repariert werden تطابق الفاعل الجمع وتضع repariert werden في النهاية.
- **الخيار 2 — ليس المطلوب:** Beschädigte Geräte sollten reparieren werden. — reparieren werden تستعمل المصدر بدل اسم المفعول repariert.
- **الخيار 3 — ليس المطلوب:** Beschädigte Geräte repariert sollten werden. — repariert sollten werden تخل بموضع الفعل الناقص في الموضع الثاني.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### DL-B2-03-Q06

بحسب نص متجر «Kreislauf» الخيالي، ما الذي ينبغي فعله بالأشياء المتضررة قبل التخلص منها؟

**نتيجة المراجعة:** يذكر النص أن الأشياء المتضررة ينبغي فحصها أولًا قبل التخلص منها؛ ولا يضمن أن جميعها قابلة للإصلاح.

**المفتاح:** فحصها أولًا.

**الربط:** DL-B2-03-T05

- **الخيار 1 — صحيح:** فحصها أولًا. — ينص القراءة على وجوب فحص الأشياء المتضررة أولًا قبل التخلص منها.
- **الخيار 2 — ليس المطلوب:** التخلص منها فورًا دون فحص. — التخلص الفوري دون فحص يخالف جملة sollen zuerst geprüft werden.
- **الخيار 3 — ليس المطلوب:** التأكيد أنها كلها قابلة للإصلاح. — النص يشترط جدوى الإصلاح (Wenn eine Reparatur sinnvoll ist) ولا يؤكد أن جميعها قابلة للإصلاح.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-Q07

هل نشر فريق المتجر الخيالي نتائج التجربة بالفعل؟

**نتيجة المراجعة:** يقول النص إن الفريق لم ينشر نتائج بعد وإن الإمكانات ما زالت تُختبر.

**المفتاح:** لا، لم ينشر نتائج بعد وما زال يختبر الإمكانات.

**الربط:** DL-B2-03-T05

- **الخيار 1 — ليس المطلوب:** نعم، نشر نتائج نهائية تثبت نجاح التجربة. — لم ينشر الفريق نتائج نهائية بعد.
- **الخيار 2 — صحيح:** لا، لم ينشر نتائج بعد وما زال يختبر الإمكانات. — ينص القراءة صراحة على أنه لم ينشر نتائج بعد وما زال يختبر الإمكانات (Es veröffentlicht noch keine Ergebnisse).
- **الخيار 3 — ليس المطلوب:** لا، أوقف التجربة قبل جمع الملاحظات. — الفريق لم يوقف التجربة بل يجمع الملاحظات ويختبر الإمكانات.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-Q08

بحسب نص T06 المكتوب، في أي نوع من الأكواب تُقدَّم المشروبات في المقهى؟

**نتيجة المراجعة:** يذكر النص المكتوب أن المشروبات تُقدَّم في أكواب متعددة الاستخدام. يمكن الإجابة دون تشغيل أي ملف صوتي.

**المفتاح:** In Mehrwegbechern.

**الربط:** DL-B2-03-T06

- **الخيار 1 — صحيح:** In Mehrwegbechern. — ينص الاستماع على تقديم المشروبات في أكواب متعددة الاستخدام: In Mehrwegbechern.
- **الخيار 2 — ليس المطلوب:** In Einwegbechern. — الأكواب ذات الاستعمال الواحد تخالف نص المقهى.
- **الخيار 3 — ليس المطلوب:** In Pappbechern. — الأكواب الورقية غير مذكورة في النص.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-Q09

ما الذي يفحصه الفريق قبل استبدال الصواني المتضررة؟

**نتيجة المراجعة:** يفحص الفريق أولًا ما إذا كان يمكن إصلاح الصواني قبل استبدالها. يعتمد السؤال على نص الاستماع المكتوب، لا على MP3.

**المفتاح:** هل يمكن إصلاح الصواني؟

**الربط:** DL-B2-03-T06

- **الخيار 1 — ليس المطلوب:** هل جُمعت ملاحظات الضيوف بالفعل؟ — جمع الملاحظات ليس هو ما يُفحص قبل استبدال الصواني.
- **الخيار 2 — صحيح:** هل يمكن إصلاح الصواني؟ — ينص الاستماع على أنه يُفحص أولًا هل يمكن إصلاح الصواني (ob sie repariert werden können).
- **الخيار 3 — ليس المطلوب:** هل يجب التخلص من جميع الأكواب؟ — التخلص من جميع الأكواب غير مذكور ويخالف سياق المقهى.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### DL-B2-03-Q10

أكمل بتوصية مناسبة: **Beschädigte Geräte ___ zuerst geprüft werden.**

**نتيجة المراجعة:** sollten تعبر عن توصية أو إجراء مقترح، وهو المعنى المطلوب هنا.

**المفتاح:** sollten

**الربط:** DL-B2-03-T07

- **الخيار 1 — ليس المطلوب:** können — können تفيد الإمكانية لا التوصية المطلوبة في السؤال.
- **الخيار 2 — صحيح:** sollten — sollten هي الصيغة الصحيحة للتعبير عن التوصية أو الإجراء المقترح.
- **الخيار 3 — ليس المطلوب:** müssen — müssen تفيد الضرورة الملزمة لا التوصية.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### DL-B2-03-P01

اكتب خطة قصيرة من خمس جمل ألمانية على الأقل لمتجر أو مقهى خيالي. اقترح ثلاثة إجراءات مناسبة للسياق، على أن يتضمن أحدها خيارًا لإعادة الاستخدام أو الإصلاح، واستخدم المبني للمجهول مع فعل ناقص مرتين على الأقل. لا تذكر أرقامًا أو وعودًا بيئية غير موثقة. هذه المهمة كتابية فقط؛ لا يلزم شريك ولا تسجيل.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة فقط دون جهر.

**الربط:** DL-B2-03-T08

- **المعيار taskCompletion:** خطة مكتوبة من خمس جمل ألمانية على الأقل، تتضمن ثلاثة إجراءات مناسبة لمتجر أو مقهى خيالي، وأحدها على الأقل يعتمد إعادة الاستخدام أو الإصلاح. — يتحقق من خطة مكتوبة من خمس جمل على الأقل تتضمن ثلاثة إجراءات أحدها لإعادة الاستخدام أو الإصلاح؛ الحد 150 حرفًا والنموذج 515 حرفًا (كتابة فقط).
- **المعيار meaningClarity:** ترتبط الإجراءات بسياق المتجر أو المقهى وتُفهم بوصفها مقترحات عملية؛ لا تُعرض أرقام أو نتائج أو وعود بيئية غير موثقة على أنها حقائق. — يضمن ارتباط المقترحات بسياق المتجر أو المقهى وعدم عرض أرقام أو وعود غير موثقة.
- **المعيار targetSkill:** يستخدم المبني للمجهول مع فعل ناقص مرتين على الأقل، مع تصريف الناقص المناسب وترتيب Partizip II + werden في نهاية الجملة. — يركز على استخدام المبني للمجهول مع فعل ناقص مرتين على الأقل بترتيب Partizip II + werden.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 150, "speakAloud": false, "audioRequired": false}

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### DL-B2-03-P02

استنادًا إلى نص T06 المكتوب، اكتب إحاطة قصيرة لفريق مقهى من خمس إلى ست جمل ألمانية ثم اقرأها بصوت واضح. انقل ثلاثة تفاصيل صحيحة على الأقل، مثل إعارة الأكواب متعددة الاستخدام مقابل تأمين مسترد (Pfand) ثم إعادتها، أو جمع بقايا الطعام منفصلة، أو فحص إمكان إصلاح الصواني المتضررة. اقترح خطوة تالية واحدة مناسبة، واستخدم المبني للمجهول مع فعل ناقص مرتين على الأقل. ميّز بين ما ورد في النص وما تقترحه أنت؛ لا تضف أرقامًا أو وعودًا بيئية غير موثقة. لا يلزم تشغيل MP3. إذا كنت تتعلم وحدك فاكتب الإجابة ثم اقرأها بصوت واضح؛ لا يلزم تسجيل.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة وجهر مع الاستناد إلى T06 وروابط T06/T08.

**الربط:** DL-B2-03-T06, DL-B2-03-T08

- **المعيار taskCompletion:** إحاطة من خمس إلى ست جمل ألمانية تنقل ثلاثة تفاصيل على الأقل من نص T06 (الأكواب متعددة الاستخدام والتأمين وإعادتها، أو الجمع المنفصل لبقايا الطعام، أو فحص إمكان إصلاح الصواني) وتقترح خطوة تالية مناسبة لمقهى. — يتحقق من إحاطة من خمس إلى ست جمل تنقل ثلاثة تفاصيل من T06 وتقترح خطوة تالية؛ الحد 180 حرفًا والنموذج 566 حرفًا مع الجهر.
- **المعيار meaningClarity:** تُنقل تفاصيل النص بدقة، وتُفصل بوضوح عن الخطوة المقترحة؛ ولا تُضاف أرقام أو وعود بيئية غير موثقة أو تُعرض الإمكانات كأنها نتائج مثبتة. — يضمن دقة نقل تفاصيل النص وفصلها عن الخطوة المقترحة دون أرقام أو وعود غير موثقة.
- **المعيار targetSkill:** يستخدم المبني للمجهول مع فعل ناقص مرتين على الأقل؛ يطابق تصريف الناقص المعنى، ويضع Partizip II + werden في نهاية الجملة، ويقرأ المتعلم النص بصوت واضح دون تسجيل. — يركز على استخدام المبني للمجهول مع فعل ناقص مرتين على الأقل مع القراءة الجهرية الذاتية دون تسجيل.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 180, "speakAloud": true, "audioRequired": false}

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### store-plan-model-01

In unserem fiktiven Nachbarschaftsladen sollen Einwegverpackungen schrittweise reduziert werden.
Heißgetränke und Suppen können in langlebigen Mehrwegbehältern gegen Pfand angeboten werden.
Kundinnen und Kunden können außerdem eigene Dosen für trockene Lebensmittel mitbringen.
Beschädigte Küchengeräte müssen nicht sofort entsorgt werden, sondern sollten zuerst in einer kleinen Partnerwerkstatt geprüft und repariert werden.
Das Team sammelt Rückmeldungen im Alltag, ohne vorab feste Einsparquoten zu versprechen.

**نتيجة المراجعة:** نموذج مكتوب: 515 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** In unserem fiktiven Nachbarschaftsladen sollen Einwegverpackungen schrittweise reduziert werden.
  - الجملة الأولى في P01 تقترح بـsollen … reduziert werden تقليل عبوات الاستعمال الواحد تدريجيًا في متجر خيالي.
- **2.** Heißgetränke und Suppen können in langlebigen Mehrwegbehältern gegen Pfand angeboten werden.
  - الجملة الثانية تقترح بـkönnen … angeboten werden تقديم المشروبات والحساء في حاويات متعددة الاستخدام مقابل تأمين.
- **3.** Kundinnen und Kunden können außerdem eigene Dosen für trockene Lebensmittel mitbringen.
  - الجملة الثالثة تذكر إمكان إحضار الزبائن علبهم الخاصة للمواد الجافة.
- **4.** Beschädigte Küchengeräte müssen nicht sofort entsorgt werden, sondern sollten zuerst in einer kleinen Partnerwerkstatt geprüft und repariert werden.
  - الجملة الرابعة تجمع بين نفي الضرورة الفورية (müssen nicht sofort entsorgt werden) والتوصية بالفحص والإصلاح (sollten … geprüft und repariert werden).
- **5.** Das Team sammelt Rückmeldungen im Alltag, ohne vorab feste Einsparquoten zu versprechen.
  - الجملة الخامسة تؤكد جمع الملاحظات في الواقع اليومي دون إطلاق وعود أو نسب توفير غير موثقة.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### cafe-briefing-model-01

In unserem Café werden Getränke in Mehrwegbechern angeboten, die gegen Pfand ausgeliehen und später zurückgegeben werden können.
Essensreste werden in der Küche getrennt gesammelt.
Beschädigte Tabletts müssen nicht sofort ersetzt werden, weil zuerst geprüft wird, ob sie repariert werden können.
Das Team sammelt Rückmeldungen der Gäste, um praktische Vorschläge kennenzulernen und weniger Material zu verschwenden.
Als nächster Schritt sollten an der Theke kurze Hinweise zur Rückgabe angebracht werden, damit die Mehrwegbecher noch einfacher genutzt werden können.

**نتيجة المراجعة:** نموذج مكتوب: 566 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** In unserem Café werden Getränke in Mehrwegbechern angeboten, die gegen Pfand ausgeliehen und später zurückgegeben werden können.
  - الجملة الأولى في P02 تنقل تقديم المشروبات في أكواب متعددة الاستخدام وإمكان استعارتها وإرجاعها مقابل Pfand في جملة وصل تابعة (… werden können).
- **2.** Essensreste werden in der Küche getrennt gesammelt.
  - الجملة الثانية تنقل جمع بقايا الطعام مفروزة في المطبخ.
- **3.** Beschädigte Tabletts müssen nicht sofort ersetzt werden, weil zuerst geprüft wird, ob sie repariert werden können.
  - الجملة الثالثة تنقل عدم وجوب استبدال الصواني المتضررة فورًا وفحص إمكان إصلاحها في جملة تابعة (ob sie repariert werden können).
- **4.** Das Team sammelt Rückmeldungen der Gäste, um praktische Vorschläge kennenzulernen und weniger Material zu verschwenden.
  - الجملة الرابعة تنقل غاية جمع ملاحظات الضيوف لتقليل هدر المواد.
- **5.** Als nächster Schritt sollten an der Theke kurze Hinweise zur Rückgabe angebracht werden, damit die Mehrwegbecher noch einfacher genutzt werden können.
  - الجملة الخامسة تفصل الخطوة المقترحة بـsollten … angebracht werden وdamit … genutzt werden können دون أرقام غير موثقة.

**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### card-01

- **Die Becher können wiederverwendet werden.** → يمكن إعادة استخدام الأكواب.

**نتيجة المراجعة:** نموذج إمكانية بالمبني للمجهول مع können: Die Becher können wiederverwendet werden.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [WIEDERVERWENDEN](https://www.duden.de/rechtschreibung/wiederverwenden)

### card-02

- **Abfälle müssen getrennt gesammelt werden.** → يجب فرز النفايات وجمعها.

**نتيجة المراجعة:** نموذج ضرورة بالمبني للمجهول مع müssen: Abfälle müssen getrennt gesammelt werden.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs), [ABFALL](https://www.duden.de/rechtschreibung/Abfall)

### card-03

- **Beschädigte Geräte sollten repariert werden.** → من الأفضل إصلاح الأجهزة المتضررة.

**نتيجة المراجعة:** نموذج توصية بالمبني للمجهول مع sollten: Beschädigte Geräte sollten repariert werden.


**مصادر القاعدة/المعنى:** [1](https://deutsch.lingolia.com/en/grammar/verbs/passive), [MODAL](https://deutsch.lingolia.com/en/grammar/verbs/modal-verbs)

### card-04

- **das Mehrwegsystem** → نظام إعادة الاستخدام.

**نتيجة المراجعة:** مراجعة المفردة المحورية das Mehrwegsystem (نظام إعادة الاستخدام).


**مصادر القاعدة/المعنى:** [MEHRWEGSYSTEM](https://www.duden.de/rechtschreibung/Mehrwegsystem)

### DL-B2-03-AUD-PHR-01

Der Verbrauch. Die Ressource, die Ressourcen. Die Verpackung, die Verpackungen. Das Einwegprodukt, die Einwegprodukte. Das Mehrwegsystem, die Mehrwegsysteme. Die Rückgabe, die Rückgaben. Die Wiederverwendung. Die Reparatur, die Reparaturen. Der Abfall, die Abfälle. Die Kreislaufwirtschaft. Vermeiden, vermeidet. Wiederverwenden, verwendet wieder. Trennen, trennt. Entsorgen, entsorgt. Langlebig. Wiederverwendbar.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 16 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Der Verbrauch.
  - Verbrauch مذكر ويستعمل هنا بلا جمع؛ الاستهلاك.
- **2.** Die Ressource, die Ressourcen.
  - Ressource مؤنث وجمعها الشائع Ressourcen؛ مورد طبيعي أو مادي.
- **3.** Die Verpackung, die Verpackungen.
  - Verpackung مؤنث وجمعها Verpackungen؛ عبوة أو تغليف.
- **4.** Das Einwegprodukt, die Einwegprodukte.
  - Einwegprodukt محايد وجمعه Einwegprodukte؛ منتج للاستعمال مرة واحدة.
- **5.** Das Mehrwegsystem, die Mehrwegsysteme.
  - Mehrwegsystem محايد وجمعه Mehrwegsysteme؛ نظام إعادة الاستخدام.
- **6.** Die Rückgabe, die Rückgaben.
  - Rückgabe مؤنث وجمعها Rückgaben؛ إعادة أو إرجاع العبوات.
- **7.** Die Wiederverwendung.
  - Wiederverwendung مؤنث وتستعمل هنا بلا جمع؛ إعادة الاستخدام.
- **8.** Die Reparatur, die Reparaturen.
  - Reparatur مؤنث وجمعها Reparaturen؛ إصلاح.
- **9.** Der Abfall, die Abfälle.
  - Abfall مذكر وجمعه Abfälle؛ نفاية أو مخلفات.
- **10.** Die Kreislaufwirtschaft.
  - Kreislaufwirtschaft مؤنث بلا جمع؛ الاقتصاد الدائري.
- **11.** Vermeiden, vermeidet.
  - vermeiden فعل قوي غير منفصل حاضرُه vermeidet واسم مفعوله vermieden؛ يتجنب.
- **12.** Wiederverwenden, verwendet wieder.
  - wiederverwenden فعل منفصل حاضرُه verwendet wieder واسم مفعوله wiederverwendet؛ يعيد الاستخدام.
- **13.** Trennen, trennt.
  - trennen فعل ضعيف حاضرُه trennt واسم مفعوله getrennt؛ يفرز.
- **14.** Entsorgen, entsorgt.
  - entsorgen فعل ضعيف غير منفصل حاضرُه entsorgt واسم مفعوله entsorgt؛ يتخلص من النفايات.
- **15.** Langlebig.
  - langlebig صفة بمعنى طويل العمر أو متين.
- **16.** Wiederverwendbar.
  - wiederverwendbar صفة بمعنى قابل لإعادة الاستخدام.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-AUD-MODEL-01

Einwegverpackungen müssen reduziert werden. Mehrwegbehälter können mehrfach verwendet werden. Beschädigte Geräte sollten repariert werden. Man kann Glasflaschen wiederverwenden. Glasflaschen können wiederverwendet werden.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 5 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Einwegverpackungen müssen reduziert werden.
  - Einwegverpackungen müssen reduziert werden: ضرورة بصيغة الجمع müssen، ثم Partizip II (reduziert) + werden في النهاية.
- **2.** Mehrwegbehälter können mehrfach verwendet werden.
  - Mehrwegbehälter können mehrfach verwendet werden: إمكانية بصيغة الجمع können، ثم verwendet werden في النهاية.
- **3.** Beschädigte Geräte sollten repariert werden.
  - Beschädigte Geräte sollten repariert werden: توصية بصيغة sollten، ثم repariert werden في النهاية.
- **4.** Man kann Glasflaschen wiederverwenden.
  - Man kann Glasflaschen wiederverwenden: جملة معلوم بالفاعل العام man والمصدر المنفصل المتصل في النهاية wiederverwenden.
- **5.** Glasflaschen können wiederverwendet werden.
  - Glasflaschen können wiederverwendet werden: الجملة المقابلة بالمبني للمجهول بعد تحويل Glasflaschen إلى فاعل مرفوع.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-AUD-DLG-01

Was passiert mit den Mehrwegbechern nach dem Verkauf? Sie können an der Kasse zurückgegeben werden. Danach werden sie gereinigt. Und was ist mit den Verpackungen? Ein Teil kann vermieden werden, wenn Kundinnen eigene Behälter mitbringen. Verpackungen, die noch gebraucht werden, müssen richtig getrennt werden. Werden beschädigte Produkte gleich weggeworfen? Nicht immer. Manche Gegenstände können repariert werden. Wir prüfen zuerst, ob sich die Reparatur lohnt.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 6 وحدة داخل 6 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Was passiert mit den Mehrwegbechern nach dem Verkauf?
  - Nadia تسأل عما يحدث للأكواب المتعددة الاستخدام بعد البيع.
- **2.** Sie können an der Kasse zurückgegeben werden. Danach werden sie gereinigt.
  - البائع يوضح إمكانية إرجاعها عند الصندوق (können … zurückgegeben werden) ثم تنظيفها (werden sie gereinigt).
- **3.** Und was ist mit den Verpackungen?
  - سؤال عن التعامل مع العبوات والتغليف.
- **4.** Ein Teil kann vermieden werden, wenn Kundinnen eigene Behälter mitbringen. Verpackungen, die noch gebraucht werden, müssen richtig getrennt werden.
  - البائع يبين إمكان تجنب جزء منها (kann vermieden werden) ووجوب فرز الباقي (müssen richtig getrennt werden).
- **5.** Werden beschädigte Produkte gleich weggeworfen?
  - سؤال بالمبني للمجهول في المضارع عن رمي المنتجات المتضررة فورًا.
- **6.** Nicht immer. Manche Gegenstände können repariert werden. Wir prüfen zuerst, ob sich die Reparatur lohnt.
  - نفي التعميم وبيان إمكان إصلاح بعض الأشياء (können repariert werden) بعد فحص جدوى الإصلاح.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-AUD-READ-01

Der fiktive Laden „Kreislauf“ erprobt mehrere Möglichkeiten, Materialien länger zu nutzen. Getränke können in Mehrwegbechern verkauft werden; die Becher werden nach der Rückgabe gereinigt und erneut verwendet. Einige Verpackungen können vermieden werden, wenn Kundinnen und Kunden eigene Behälter mitbringen. Beschädigte Gegenstände sollen zuerst geprüft werden, bevor sie entsorgt werden. Wenn eine Reparatur sinnvoll ist, kann sie in einer örtlichen Werkstatt organisiert werden. Das Team sammelt Rückmeldungen, um herauszufinden, welche Schritte im Alltag gut funktionieren. Es veröffentlicht noch keine Ergebnisse; die Möglichkeiten werden zunächst getestet.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 7 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Der fiktive Laden „Kreislauf“ erprobt mehrere Möglichkeiten, Materialien länger zu nutzen.
  - يختبر المتجر الخيالي Kreislauf عدة إمكانات لإطالة استخدام المواد.
- **2.** Getränke können in Mehrwegbechern verkauft werden; die Becher werden nach der Rückgabe gereinigt und erneut verwendet.
  - يمكن بيع المشروبات في أكواب متعددة الاستخدام وتُنظف بعد إرجاعها وتُستخدم مجددًا.
- **3.** Einige Verpackungen können vermieden werden, wenn Kundinnen und Kunden eigene Behälter mitbringen.
  - يمكن تجنب بعض العبوات إذا أحضر الزبائن حاوياتهم الخاصة.
- **4.** Beschädigte Gegenstände sollen zuerst geprüft werden, bevor sie entsorgt werden.
  - ينبغي فحص الأشياء المتضررة أولًا قبل التخلص منها (sollen zuerst geprüft werden, bevor sie entsorgt werden).
- **5.** Wenn eine Reparatur sinnvoll ist, kann sie in einer örtlichen Werkstatt organisiert werden.
  - إذا كان الإصلاح مجديًا فيمكن تنظيمه في ورشة محلية (kann sie … organisiert werden).
- **6.** Das Team sammelt Rückmeldungen, um herauszufinden, welche Schritte im Alltag gut funktionieren.
  - يجمع الفريق ملاحظات الزبائن لمعرفة الخطوات الناجحة في الحياة اليومية.
- **7.** Es veröffentlicht noch keine Ergebnisse; die Möglichkeiten werden zunächst getestet.
  - لم ينشر الفريق نتائج بعد؛ فالإمكانات تُختبر مبدئيًا (werden zunächst getestet).

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

### DL-B2-03-AUD-LST-01

In unserem Café werden Getränke in Mehrwegbechern angeboten. Die Becher können gegen Pfand ausgeliehen und später zurückgegeben werden. Essensreste werden getrennt gesammelt. Beschädigte Tabletts müssen nicht sofort ersetzt werden; zuerst wird geprüft, ob sie repariert werden können. Das Team sammelt Rückmeldungen, um Vorschläge der Gäste kennenzulernen und weniger Material zu verschwenden.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 5 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** In unserem Café werden Getränke in Mehrwegbechern angeboten.
  - تُقدم المشروبات في المقهى في أكواب متعددة الاستخدام (werden … angeboten).
- **2.** Die Becher können gegen Pfand ausgeliehen und später zurückgegeben werden.
  - يمكن استعارة الأكواب مقابل تأمين مسترد وإعادتها لاحقًا (können … ausgeliehen und später zurückgegeben werden).
- **3.** Essensreste werden getrennt gesammelt.
  - تُجمع بقايا الطعام مفروزة (werden getrennt gesammelt).
- **4.** Beschädigte Tabletts müssen nicht sofort ersetzt werden; zuerst wird geprüft, ob sie repariert werden können.
  - لا يلزم استبدال الصواني المتضررة فورًا؛ يُفحص أولًا هل يمكن إصلاحها (ob sie repariert werden können).
- **5.** Das Team sammelt Rückmeldungen, um Vorschläge der Gäste kennenzulernen und weniger Material zu verschwenden.
  - يجمع الفريق الملاحظات للتعرف إلى مقترحات الضيوف وتقليل هدر المواد.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس.

