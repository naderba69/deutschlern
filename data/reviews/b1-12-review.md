# CR42 — مراجعة B1.12 الفردية والتراكمية

**أحدث مراجعة محتوى CR42 — 2026-10-09:** رُوجع **B1.12 — الابتكار والإبداع والبحث: التوقّعات بـFutur I** (ختام مستوى B1) في **102 وحدة و41 بندًا داخل التمارين و10 أجزاء نموذج، و30 خيارًا و6 معايير**، بالاستناد إلى **10 مراجع مقروءة بالكامل** (واستبعاد 4 روابط 404). قُيّدت قاعدة `Futur I` بالجمل الرئيسية البسيطة مع توضيح ترتيب الفعل في السؤال والجملة التابعة (`helfen wird`)، وأُضيفت قيود معنوية عربية في `T04` لتمييز `Vielleicht` و`wahrscheinlich` و`Vermutlich`، ووُسّع `T07` إلى 6 بنود ليضم مقارنة `Präsens` للمستقبل المتفق عليه و`Präsens Passiv` مع ظرف زمني مستقبلي. صارت **P01 عرضًا مكتوبًا من 5 جمل عن مشروع ابتكار خيالي (348 حرفًا، كتابة فقط)** و**P02 إحاطة من 5 جمل عن مشروع الظل في ساحة المدرسة كتابة وجهر (325 حرفًا)**. الخيارات الـ30 والفهارس والروابط و80% وحدا 130/145 محفوظة؛ `b1-12-v2` و`v91`، وخمسة أصول/12 مقطعًا معلقة بأصوات `Rana`/`Timo` المحفوظة دون توليد أو استماع أو اعتماد. **اكتملت مراجعة دروس A0 وA1 وA2 وB1 كلها (41/53 درسًا والبوابة منفصلة)؛ تبقى 12 درسًا في B2، والتالي CR43/B2.1.** الفحوص لا تعني دمج PR#1 أو اكتمال المشروع.

**التنفيذ المرفوع:** `b32d49fa33411a7cb9f600de81f45ceb9786cc02` على `arena/01a1036f-deutschlern`. يرفع هذا التقرير فور فحصه بعنوان `Record CR42 granular B1.12 review and cumulative checks` ثم يُوثّق إيصال الرفع. PR#1 غير مدمجة.

## التصحيحات وحدود الاستنتاج

- قُيّدت قاعدة `Futur I` بالجمل الرئيسية البسيطة مع توضيح ترتيب الفعل في السؤال والجملة التابعة (`dass der Prototyp beim Planen der Gartenarbeit helfen wird`).
- أُضيفت قيود معنوية عربية في `T04` لتمييز `Vielleicht` و`wahrscheinlich` و`Vermutlich` دون التباس.
- وُسّع `T07` إلى 6 بنود ليضم مقارنة `Präsens` للمستقبل المتفق عليه (`Das Team testet den Prototyp nächste Woche.`) و`Präsens Passiv` مع ظرف زمني مستقبلي (`Im nächsten Monat wird der Prototyp im Garten getestet.`).
- فُصلت `P01` (5 جمل عرض لمشروع ابتكار خيالي: كتابة فقط) عن `P02` (5 جمل إحاطة عن مشروع الظل في ساحة المدرسة: كتابة وجهر)، وطُوبق نص التمرين والمعايير والنموذجان.

## الفحوص التراكمية — CR42

- **PASS:** البناء والتحقق، و42 حارسًا (بما فيها `tools/test_b1_12_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,136,864 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout`.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v91` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b1-12-v1` محفوظ لكنه لا يمنح إتقان `b1-12-v2` أو يفتح `B2.1`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b2-01-time-management-habits-reading` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 348/325 حرفًا فوق حدَّي 130/145 حرفًا.
- **axe والعرض الضيق:** **181 حالة** وصفر مخالفات للقواعد المختارة، مع **128 ظهورًا غير حاسم تشمل 305 ظهورات لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **النشر والـPR:** رُفع التنفيذ `b32d49fa33411a7cb9f600de81f45ceb9786cc02` وتطابق HEAD/origin. أظهر الاستعلام الصريح بالـSHA فشل Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

## الحفظ والحدود

مقارنة بالأساس `04d7980219fad2b944e2299fdc4b0113a0688af0`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B1.12 وبقي `DL-B1-12-AUD-PHR-01` ثابتًا. حُفظت 590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Rana` (`voice-02`) و`Timo` (`voice-03`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/12 مقطعًا تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

- مراجعة نصية مصدرية بالذكاء الاصطناعي؛ ليست شهادة CEFR أو WCAG أو اختبارًا لمتعلمين حقيقيين، ولا مراجع بشري شرطًا للاستمرار.
- عشرة مراجع مقروءة بالكامل تشمل جزأي Passiv؛ واستُبعدت 4 روابط Duden أعادت 404. المراجع المعجمية المباشرة تخص الألفاظ المسماة (Forschung وPrototyp وLabor وExperiment وVersuch وErgebnis وtesten وvermutlich) لا كل كلمة في الجدول.
- خمسة أصول/12 مقطعًا معلقة ومحفوظة بأصوات Rana (voice-02) وTimo (voice-03) والسرد (voice-02) والاستماع (voice-03)؛ فحص MP3 والتشغيل الآلي الصامت ومطابقة التفريغ ليست استماعًا أو اعتمادًا صوتيًا.
- الحد الأدنى للحروف (130/145) والإقرارات الذاتية والجهر في P02 لا تصحح عدد الجمل أو القواعد أو النطق آليًا؛ المشاريع والمختبر خيالية تمامًا.
- 181 حالة axe وصفر مخالفات للقواعد المختارة، مع 128 ظهورًا غير حاسم تشمل 305 ظهورات لعقد؛ ليست مخالفات مؤكدة ولا شهادة وصول شاملة.
- فحوص 320×900 و568×320 و1440×900 و390×844 تتم عبر CSS viewports في Chromium وليست هواتف فعلية أو تكبير متصفح أصليًا؛ تحديث v42 إلى v91 fixture محدد وليس كل مسار تاريخي.
- نشر التنفيذ b32d49f فشل في Vercel بسبب حد النشر اليومي (Deployment rate limited — retry in 24 hours.) وdeployments=[]؛ لا إعادة نشر آلية ولا شراء ترقية، ولم تختبر الواجهة البعيدة أو Production، وPR#1 غير مدمجة.

## المراجع ونطاق القراءة

- **FUTUR — Lingolia — Futur I – deutsche Zeitform für die Zukunft** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1): Futur I يتكون من تصريف werden (werde/wirst/wird/werden/werdet/werden) مع المصدر في نهاية الجملة الرئيسية، ويعبر عن نية مستقبلية أو توقع/ظن، ويمكن التعبير عن التوقع أيضًا بالمضارع مع كلمات الاحتمال. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **PRAESENS — Lingolia — Präsens – deutsche Zeitform für die Gegenwart** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens): Präsens يعبر عن الحاضر وكذلك عن أحداث مستقبلية محددة أو متفق عليها مع ظرف زمني، فلا يلزم استخدام Futur I في كل جملة مستقبلية. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **PASSIV — Lingolia — Das Passiv in der deutschen Grammatik** [PASSIV](https://deutsch.lingolia.com/de/grammatik/verben/passiv): المبني للمجهول في المضارع يتكون من تصريف werden مع Partizip II مثل wird getestet، بخلاف Futur I الذي يجمع werden مع المصدر testen. **قرئت كاملة**؛ الأجزاء [0, 1] من 2، بتاريخ 2026-10-09.
- **FORSCHUNG — Duden — Forschung** [FORSCHUNG](https://www.duden.de/rechtschreibung/Forschung): اسم مؤنث يستعمل بلا جمع لمعنى العلم البحثي العام، وله جمع die Forschungen للدراسات والأعمال البحثية المتعددة. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **PROTOTYP — Duden — Prototyp** [PROTOTYP](https://www.duden.de/rechtschreibung/Prototyp): اسم مذكر جمعُه die Prototypen؛ يدل في التقنية على النموذج الأولي المخصص للتجريب والتطوير قبل الإنتاج. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **LABOR — Duden — Labor** [LABOR](https://www.duden.de/rechtschreibung/Labor): اسم محايد جمعُه die Labore أو die Labors؛ مكان العمل للتجارب والفحوص العلمية أو التقنية. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **EXPERIMENT — Duden — Experiment** [EXPERIMENT](https://www.duden.de/rechtschreibung/Experiment): اسم محايد جمعُه die Experimente؛ تجربة علمية يُراد بها اكتشاف شيء أو التحقق منه. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **VERSUCH — Duden — Versuch** [VERSUCH](https://www.duden.de/rechtschreibung/Versuch): اسم مذكر جمعُه die Versuche؛ محاولة أو تجربة/اختبار علمي. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **ERGEBNIS — Duden — Ergebnis** [ERGEBNIS](https://www.duden.de/rechtschreibung/Ergebnis): اسم محايد جمعُه die Ergebnisse؛ نتيجة أو حصيلة تجربة أو قياس أو فحص. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **VERMUTLICH — Duden — vermutlich** [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich): ظرف يفيد التقدير المبني على الظن (wie zu vermuten ist / aller Voraussicht nach)، ويقارن بـwahrscheinlich في التعبير عن عدم الجزم. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.

**صفحات مستبعدة، وليست مراجع:**
- https://www.duden.de/rechtschreibung/wahrscheinlich — صفحة خطأ 404؛ استُبعدت ولم تُحتسب مرجعًا
- https://www.duden.de/rechtschreibung/vermutlich — صفحة خطأ 404؛ استُبعدت ولم تُحتسب مرجعًا
- https://www.duden.de/rechtschreibung/vielleicht — صفحة خطأ 404؛ استُبعدت ولم تُحتسب مرجعًا
- https://www.duden.de/rechtschreibung/kuenftig_zukuenftig_kommende — صفحة خطأ 404؛ استُبعدت ولم تُحتسب مرجعًا

## الوحدات الفردية — 102 وحدة

التقسيم: 6 نطاقات، 16 صف مفردات، 6 أمثلة قواعد، 10 مساعدات، 8 أدوار حوار، 8 جمل قراءة و6 أسئلة، 6 جمل استماع و5 أسئلة، 8 تمارين، 10 أسئلة تقييم، مهمتا أداء، نموذجان مفصلان إلى 10 أجزاء، 4 بطاقات، 5 أصول صوت. بنود التمارين 41 بتوزيع 4/5/3/3/5/5/6/10.

### scope-01

**المدة المقترحة:** 40–45 دقيقة، ويمكن تقسيم العمل · **المهارات:** قراءة، استماع اختياري، قواعد، مفردات البحث، كتابة وجهر<br>

**نتيجة المراجعة:** المدة مقترحة قابلة للتقسيم؛ الاستماع المسجل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### scope-02

**الهدف:** أستطيع أن أتحدث عن توقع أو خطة مستقبلية باستخدام **Futur I**، وأن أوضح درجة التأكد بكلمات مثل **vielleicht** و**wahrscheinlich**.

**نتيجة المراجعة:** الهدف التعبير عن خطة أو توقع بـFutur I مع كلمات الاحتمال؛ لا يمنح الاختبار شهادة B1 أو تقييمًا علميًا.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### scope-03

تنبيه مفردات: Forschung تُستعمل غالبًا بالمفرد لمعنى البحث العلمي العام، ويوجد جمع Forschungen للأبحاث أو الدراسات المتعددة. كلمة Labor تجمع على Labore أو Labors. الكلمتان wahrscheinlich وvermutlich تدلان على ترجيح أو تقدير غير جازم، وvielleicht تدل على احتمال مفتوح، أما künftig فظرف زمني بمعنى مستقبلًا ولا يفيد وحده درجة احتمال. هذه توضيحات مكتوبة لا تغييرات في التسجيل.

**نتيجة المراجعة:** وُضح استعمال Forschung بالمفرد والجمع Forschungen، وجمعا Labor (Labore/Labors)، والفرق بين كلمات الاحتمال والظرف الزمني künftig.


**مصادر القاعدة/المعنى:** [FORSCHUNG](https://www.duden.de/rechtschreibung/Forschung), [LABOR](https://www.duden.de/rechtschreibung/Labor), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### scope-04

يتكوّن **Futur I** من الفعل المساعد **werden** مصرّفًا مع الفاعل، وفي الجمل الرئيسية البسيطة المدروسة يأتي المصدر في نهاية الإطار الفعلي. لا ننقل هذا الترتيب حرفيًا إلى الجمل التابعة. نستخدمه للحديث عن توقّعات أو خطط مستقبلية، لكنه ليس لازمًا لكل جملة تشير إلى المستقبل؛ يمكن أيضًا استعمال **Präsens** مع وقت محدد لخطة متفق عليها، مثل: **Das Team testet den Prototyp nächste Woche.** وتوضح كلمات مثل **vielleicht, wahrscheinlich, vermutlich** أن التوقّع ليس حقيقة مؤكدة.

**نتيجة المراجعة:** قُيّدت قاعدة werden + المصدر بالجمل الرئيسية البسيطة، مع بيان جواز Präsens لخطة مستقبلية ذات موعد محدد مثل Das Team testet den Prototyp nächste Woche.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### scope-05

| ich | werde | · | du | wirst | · | er / sie / es | wird | · | wir | werden | · | ihr | werdet | · | sie / Sie | werden |

**نتيجة المراجعة:** جدول تصريف werden الكامل في المضارع لبناء Futur I مع الضمائر الستة وصيغة الاحترام Sie.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### scope-06

في الجملة الرئيسية الخبرية يأتي **werden** المصرف في الموقع الثاني ويأتي المصدر في نهاية الإطار الفعلي: **wird … testen**؛ أما في سؤال نعم/لا فيتقدم الفعل المصرف، وفي الجملة التابعة يتأخر الفعل المصرف إلى آخر التابعة بعد المصدر. انتبه إلى الفرق:

**نتيجة المراجعة:** تمييز موقع الفعل المصرف والمصدر بين الجملة الرئيسية الخبرية وسؤال نعم/لا والجملة التابعة، مع المقارنة المباشرة بين Futur I (wird ... testen) وPräsens Passiv (wird getestet).


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PASSIV](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### vocab-01

| die Forschung | — | البحث العلمي |

**نتيجة المراجعة:** Forschung مؤنث؛ تستعمل غالبًا بالمفرد للبحث العلمي العام، ويوجد جمع Forschungen للأبحاث المتعددة.


**مصادر القاعدة/المعنى:** [FORSCHUNG](https://www.duden.de/rechtschreibung/Forschung)

### vocab-02

| die Entwicklung | die Entwicklungen | التطوير / التطوّر |

**نتيجة المراجعة:** Entwicklung مؤنث وجمعها Entwicklungen؛ التطوير أو التطور بحسب السياق.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-03

| die Erfindung | die Erfindungen | الاختراع |

**نتيجة المراجعة:** Erfindung مؤنث وجمعها Erfindungen؛ اختراع جديد، ولا تعني مجرد فحص جهاز قائم.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-04

| das Experiment | die Experimente | التجربة |

**نتيجة المراجعة:** Experiment محايد وجمعه Experimente؛ تجربة علمية أو عملية.


**مصادر القاعدة/المعنى:** [EXPERIMENT](https://www.duden.de/rechtschreibung/Experiment)

### vocab-05

| der Versuch | die Versuche | المحاولة / الاختبار |

**نتيجة المراجعة:** Versuch مذكر وجمعه Versuche؛ محاولة أو اختبار تجريبي.


**مصادر القاعدة/المعنى:** [VERSUCH](https://www.duden.de/rechtschreibung/Versuch)

### vocab-06

| das Ergebnis | die Ergebnisse | النتيجة |

**نتيجة المراجعة:** Ergebnis محايد وجمعه Ergebnisse؛ نتيجة قياس أو تجربة.


**مصادر القاعدة/المعنى:** [ERGEBNIS](https://www.duden.de/rechtschreibung/Ergebnis)

### vocab-07

| die Anwendung | die Anwendungen | التطبيق |

**نتيجة المراجعة:** Anwendung مؤنث وجمعها Anwendungen؛ تطبيق عملي أو برمجي.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-08

| die Lösung | die Lösungen | الحل |

**نتيجة المراجعة:** Lösung مؤنث وجمعها Lösungen؛ حل لمشكلة أو سؤال بحثي.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-09

| der Prototyp | die Prototypen | النموذج الأولي |

**نتيجة المراجعة:** Prototyp مذكر وجمعه Prototypen؛ نموذج أولي للتجريب قبل التعميم.


**مصادر القاعدة/المعنى:** [PROTOTYP](https://www.duden.de/rechtschreibung/Prototyp)

### vocab-10

| das Labor | die Labore | المختبر |

**نتيجة المراجعة:** Labor محايد وجمعه Labore (وكذلك Labors)؛ مختبر للتجارب.


**مصادر القاعدة/المعنى:** [LABOR](https://www.duden.de/rechtschreibung/Labor)

### vocab-11

| entwickeln | entwickelt | يطوّر |

**نتيجة المراجعة:** entwickeln فعل ضعيف غير منفصل حاضرُه مع المفرد الغائب entwickelt؛ يطور.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-12

| erforschen | erforscht | يبحث في / يستكشف علميًا |

**نتيجة المراجعة:** erforschen فعل ضعيف غير منفصل حاضرُه erforscht؛ يستكشف علميًا أو يبحث في موضوع.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-13

| testen | testet | يختبر |

**نتيجة المراجعة:** testen فعل ضعيف حاضرُه testet مع -e- بعد t؛ يختبر أو يجرب.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-14

| verbessern | verbessert | يحسّن |

**نتيجة المراجعة:** verbessern فعل ضعيف حاضرُه verbessert؛ يحسن أو يطور نموذجًا بعد التجربة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-15

| wahrscheinlich / vermutlich | — | على الأرجح |

**نتيجة المراجعة:** wahrscheinlich وvermutlich ظرفان للترجيح والتقدير غير الجازم؛ يوضحان أن التوقع ليس يقينًا.


**مصادر القاعدة/المعنى:** [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich), [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### vocab-16

| vielleicht / künftig | — | ربما / مستقبلًا |

**نتيجة المراجعة:** vielleicht ظرف احتمال مفتوح بمعنى ربما، وkünftig ظرف زمني بمعنى مستقبلًا.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### grammar-01

Das Team testet den Prototyp nächste Woche.

**نتيجة المراجعة:** Das Team testet den Prototyp nächste Woche: مضارع Präsens مع ظرف زمني مستقبلي لخطة متفق عليها.


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### grammar-02

Das Team wird den Prototyp nächste Woche testen.

**نتيجة المراجعة:** Das Team wird den Prototyp nächste Woche testen: Futur I؛ الفاعل المفرد Das Team مع wird والمصدر testen في النهاية.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### grammar-03

In Zukunft werden Forschende neue Lösungen entwickeln.

**نتيجة المراجعة:** In Zukunft werden Forschende neue Lösungen entwickeln: تقدم الظرف الزمني ثم werden للجمع والمصدر entwickeln في النهاية.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### grammar-04

Vielleicht wird das Experiment länger dauern.

**نتيجة المراجعة:** Vielleicht wird das Experiment länger dauern: تقدم ظرف الاحتمال Vielleicht ثم wird والمصدر dauern في النهاية.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### grammar-05

Das Team wird den Sensor testen.

**نتيجة المراجعة:** Das Team wird den Sensor testen: Futur I للمعلوم لأن testen مصدر في نهاية الإطار الفعلي.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### grammar-06

Der Sensor wird getestet.

**نتيجة المراجعة:** Der Sensor wird getestet: مبني للمجهول في المضارع Präsens Passiv لأن getestet صيغة Partizip II.


**مصادر القاعدة/المعنى:** [PASSIV](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### helper-01

- **المصدر مقابل Partizip II:** Futur I يجمع werden المصرف مع المصدر في نهاية الإطار مثل wird … testen وwerden … entwickeln. أما Präsens Passiv فيجمع werden المصرف مع Partizip II مثل wird getestet وwerden veröffentlicht، وPräteritum Passiv مع wurde/wurden + Partizip II كما في B1.11.

**نتيجة المراجعة:** المقارنة الحاسمة بين المصدر في Futur I وPartizip II في Präsens Passiv وPräteritum Passiv.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PASSIV](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### helper-02

- **Präsens للمستقبل المتفق عليه:** مع ظرف زمني واضح مثل nächste Woche أو im nächsten Monat يمكن استعمال Präsens لخطة محددة: Das Team testet den Prototyp nächste Woche. لذلك لا نعد كل جملة مستقبلية بلا werden خطأً، لكن في بنود تدريبات Futur I المحددة نلتزم بصيغة werden + المصدر المطلوبة.

**نتيجة المراجعة:** بيان متى يصح Präsens للمستقبل المتفق عليه ومتى يجب الالتزام بصيغة werden + المصدر في تدريبات Futur I.


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens), [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### helper-03

- **الموقع في الرئيسية والسؤال والتابعة:** في Nächste Woche werden wir den Prototyp in zwei Beeten testen تقع عبارة الزمن في الموقع الأول ثم werden في الموقع الثاني والمصدر testen في النهاية. في السؤال Wird der Sensor die Arbeit im Garten ersetzen? يبدأ السؤال بـWird. أما في التابعة dass der Prototyp beim Planen der Gartenarbeit helfen wird فيأتي المصدر helfen قبل الفعل المصرف wird في آخر التابعة.

**نتيجة المراجعة:** توضيح موقع الفعل في الجملة الرئيسية والسؤال والجملة التابعة أنموذج dass der Prototyp ... helfen wird.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### helper-04

- **شرط الحاضر وجواب المستقبل:** في Wenn ein Teil nicht zuverlässig funktioniert, werden sie das Modell verändern جاء فعل الشرط funktioniert في آخر جملة wenn بالمضارع، ثم بدأت الجملة الرئيسية الجوابية بـwerden الفعلي فاعلها sie والمصدر verändern في النهاية.

**نتيجة المراجعة:** توضيح تركيب الشرط Wenn ... funktioniert بالمضارع وجوابه werden sie ... verändern بـFutur I.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### helper-05

- **درجات اليقين والظرف الزمني:** vielleicht تفيد احتمالًا مفتوحًا (ربما)، وwahrscheinlich ترجيحًا أقوى (على الأرجح)، وvermutlich تقديرًا مبنيًا على ظن معقول (وفق التقدير/فيما يُظن)؛ ثلاثتها تمنع عرض التوقع كحقيقة مضمونة. أما künftig وin Zukunft وim nächsten Monat فتحدد الزمن المستقبلي ولا تفيد وحدها عدم اليقين.

**نتيجة المراجعة:** التفريق الدلالي بين vielleicht وwahrscheinlich وvermutlich وبين الظروف الزمنية المحضة مثل künftig.


**مصادر القاعدة/المعنى:** [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich), [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### helper-06

- **موقع كلمات التوقع وحروفها:** إذا جاءت Vielleicht أو Wahrscheinlich أو Vermutlich في أول الجملة كُتبت بحرف كبير وتلاها الفعل المصرف مباشرة: Vielleicht wird das Experiment länger dauern. وإذا جاءت داخل الجملة كُتبت بحرف صغير بعد الفعل المصرف أو المفعول: Das Team wird wahrscheinlich einen zweiten Prototyp bauen.

**نتيجة المراجعة:** بيان موقع كتابة كلمات الاحتمال وحرفها الكبير في بداية الجملة والصغير داخلها.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### helper-07

- **الفاعل المفرد والجمع والاسم المشتق:** Das Team وdie Gruppe وeine Schülergruppe أسماء مفردة نحويًا فتأخذ wird في المفرد، بينما die Schülerinnen und Schüler وForschende وwir وsie (هم) تأخذ werden. وفي سؤال الاحترام نكتب Werden Sie …؟ بحرف كبير في الضمير Sie.

**نتيجة المراجعة:** مطابقة wird مع الأسماء المفردة نحويًا مثل Das Team وdie Gruppe وwerden مع الجمع وصيغة الاحترام Sie.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### helper-08

- **صيغ إضافية في النصوص:** يضم نص القراءة صيغة مصدر مع zu: nicht, sofort ein perfektes Gerät zu bauen, sondern eine Frage Schritt für Schritt zu untersuchen؛ هذه ليست Futur I. ويضم نص الاستماع جملتين غير مباشرتين في الحاضر: wie auf dem Schulhof mehr Schatten entstehen kann وwelche Idee am besten funktioniert.

**نتيجة المراجعة:** تمييز المصدر مع zu والجمل غير المباشرة في الحاضر عن صيغة Futur I.


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### helper-09

- **حدود القصص وعدم الخلط:** حوار Rana وTimo يجري في ورشة ابتكار حول مستشعر للحديقة المشتركة في حوضين، ونص القراءة عن مجموعة طلابية في المختبر الخيالي Zukunftslabor، ونص الاستماع عن دورة ابتكار تدرس زيادة الظل في ساحة المدرسة بنماذج من الكرتون. لا ندمج مشروع المستشعر بمشروع الظل، ولا ننسب المختبر أو المدرسة إلى مؤسسة حقيقية.

**نتيجة المراجعة:** فصل قصص الحوار والقراءة والاستماع ومنع خلط مستشعر التربة بمشروع الظل في ساحة المدرسة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### helper-10

- **دليل فردي مستقل عن الصوت:** P01 عرض مكتوب من خمس جمل عن مشروع ابتكار خيالي (كتابة فقط دون جهر)، وP02 إحاطة من خمس جمل عن مشروع الظل في ساحة المدرسة كتابة ثم قراءة بصوت واضح بالنفس (دون شريك أو تسجيل). الحد الأدنى 130/145 حرفًا والإقرارات الثلاثة لا تصحح عدد الجمل أو القواعد أو النطق آليًا؛ والتسجيلات تبقى معلقة ومتاحة دون توليد أو استماع أو اعتماد.

**نتيجة المراجعة:** تحديد P01 كتابة فقط وP02 كتابة وجهر بالنفس، وبيان حدود التحقق الذاتي واستقلال التقييم عن ملفات الصوت.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### dialogue-01

Woran arbeitet euer Team gerade?

**نتيجة المراجعة:** Rana تسأل بالمضارع عما يعمل عليه الفريق الآن؛ Woran أداة استفهام مع الجار والمجرور.


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### dialogue-02

Wir entwickeln einen kleinen Sensor für den Gemeinschaftsgarten.

**نتيجة المراجعة:** Timo يصف العمل الحالي بالمضارع: تطوير مستشعر صغير للحديقة المشتركة.


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### dialogue-03

Was werdet ihr als Nächstes machen?

**نتيجة المراجعة:** سؤال مستقبلي بـFutur I مع ihr: Was werdet ihr als Nächstes machen?


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### dialogue-04

Nächste Woche werden wir den Prototyp in zwei Beeten testen.

**نتيجة المراجعة:** خطة الأسبوع المقبل بـFutur I: werden wir ... testen في حوضين للزراعة.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### dialogue-05

Wird der Sensor die Arbeit im Garten ersetzen?

**نتيجة المراجعة:** سؤال نعم/لا بـFutur I يبدأ بـWird: هل سيحل المستشعر محل العمل في الحديقة؟


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### dialogue-06

Nein. Er wird nur Messwerte liefern. Wir werden prüfen, ob die Werte hilfreich sind.

**نتيجة المراجعة:** نفي واضح ثم جملتا Futur I: سيوفر قيم قياس فقط، وسيفحص الفريق ما إذا كانت القيم مفيدة (ob ... sind).


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PROTOTYP](https://www.duden.de/rechtschreibung/Prototyp)

### dialogue-07

Und was passiert, wenn der erste Versuch nicht klappt?

**نتيجة المراجعة:** سؤال شرطي بالمضارع: ماذا يحدث إذا لم تنجح المحاولة الأولى؟


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens), [VERSUCH](https://www.duden.de/rechtschreibung/Versuch)

### dialogue-08

Dann werden wir das Modell verbessern. Ein Versuch, der nicht funktioniert, wird uns trotzdem etwas zeigen.

**نتيجة المراجعة:** جواب بـFutur I: سنحسن النموذج، والمحاولة التي لا تنجح ستُظهر لنا مع ذلك شيئًا مفيدًا.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [VERSUCH](https://www.duden.de/rechtschreibung/Versuch)

### reading-01

Eine Schülergruppe im fiktiven „Zukunftslabor“ entwickelt einen Sensor für einen Gemeinschaftsgarten.

**نتيجة المراجعة:** مجموعة طلابية في المختبر الخيالي Zukunftslabor تطور مستشعرًا لحديقة مشتركة.


**مصادر القاعدة/المعنى:** [LABOR](https://www.duden.de/rechtschreibung/Labor)

### reading-02

Zuerst baut sie einen Prototyp, der die Feuchtigkeit in der Erde misst.

**نتيجة المراجعة:** تبني أولًا نموذجًا أوليًا يقيس رطوبة التربة؛ جملة موصولة في المضارع.


**مصادر القاعدة/المعنى:** [PROTOTYP](https://www.duden.de/rechtschreibung/Prototyp), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### reading-03

Im nächsten Monat wird das Team den Sensor in zwei Beeten testen und die Messwerte notieren.

**نتيجة المراجعة:** في الشهر المقبل سيختبر الفريق المستشعر في حوضين ويدون القياسات؛ مصدران testen وnotieren مع wird.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### reading-04

Die Gruppe erwartet, dass der Prototyp beim Planen der Gartenarbeit helfen wird; er wird die Erfahrung der Gärtnerinnen und Gärtner aber nicht ersetzen.

**نتيجة المراجعة:** تتوقع المجموعة أن يساعد النموذج الأولي في تخطيط عمل الحديقة (helfen wird في آخر التابعة)، لكنه لن يحل محل خبرة البستانيات والبستانيين.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PROTOTYP](https://www.duden.de/rechtschreibung/Prototyp)

### reading-05

Nach dem ersten Versuch werden die Schülerinnen und Schüler die Ergebnisse vergleichen.

**نتيجة المراجعة:** بعد التجربة الأولى سيقارن الطلاب النتائج؛ werden ... vergleichen.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [VERSUCH](https://www.duden.de/rechtschreibung/Versuch), [ERGEBNIS](https://www.duden.de/rechtschreibung/Ergebnis)

### reading-06

Wenn ein Teil nicht zuverlässig funktioniert, werden sie das Modell verändern.

**نتيجة المراجعة:** إذا لم يعمل جزء بموثوقية فسيغيرون النموذج؛ شرط حاضر وجواب Futur I.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### reading-07

Vielleicht entsteht daraus eine neue Idee.

**نتيجة المراجعة:** ربما تنشأ من ذلك فكرة جديدة؛ مضارع مع Vielleicht للدلالة على احتمال مفتوح.


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### reading-08

Das Ziel des Projekts ist nicht, sofort ein perfektes Gerät zu bauen, sondern eine Frage Schritt für Schritt zu untersuchen.

**نتيجة المراجعة:** هدف المشروع ليس بناء جهاز مثالي فورًا، بل فحص سؤال خطوة بخطوة؛ مصدر مع zu وليس Futur I.


**مصادر القاعدة/المعنى:** [FORSCHUNG](https://www.duden.de/rechtschreibung/Forschung)

### reading-question-01

Wer entwickelt den Sensor?

**نتيجة المراجعة:** Eine Schülergruppe im fiktiven Zukunftslabor. — المطور في النص هو مجموعة طلابية في المختبر الخيالي Zukunftslabor.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-02

Was misst der Prototyp?

**نتيجة المراجعة:** Die Feuchtigkeit in der Erde. — يقيس النموذج الأولي رطوبة التربة في الحديقة المشتركة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-03

Was wird das Team im nächsten Monat tun?

**نتيجة المراجعة:** Sie wird den Sensor in zwei Beeten testen und die Messwerte notieren. — في الشهر المقبل سيختبر الفريق المستشعر في حوضين ويدون قيم القياس.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-04

Was wird der Sensor laut Text nicht ersetzen?

**نتيجة المراجعة:** Die Erfahrung der Gärtnerinnen und Gärtner. — لن يحل المستشعر محل خبرة البستانيات والبستانيين.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-05

Was macht die Gruppe, wenn ein Teil nicht zuverlässig funktioniert?

**نتيجة المراجعة:** Sie werden das Modell verändern. — عند عدم عمل جزء بموثوقية سيغير الطلاب النموذج.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-06

Was ist das Ziel des Projekts?

**نتيجة المراجعة:** Eine Frage Schritt für Schritt zu untersuchen. — الهدف هو فحص سؤال خطوة بخطوة لا بناء جهاز مثالي فورًا.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-01

In unserem Innovationskurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann.

**نتيجة المراجعة:** في دورة الابتكار نفحص كيف يمكن أن ينشأ ظل أكبر في ساحة المدرسة؛ سؤال غير مباشر مع kann.


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### listening-02

In zwei Wochen werden wir Modelle aus Karton vorstellen.

**نتيجة المراجعة:** بعد أسبوعين سنعرض نماذج من الكرتون؛ werden wir ... vorstellen.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### listening-03

Danach werden wir Rückmeldungen sammeln.

**نتيجة المراجعة:** بعد ذلك سنجمع ملاحظات وآراء راجعة؛ werden wir Rückmeldungen sammeln.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### listening-04

Wahrscheinlich werden wir zwei Entwürfe verbessern.

**نتيجة المراجعة:** على الأرجح سنحسن تصميمين؛ Wahrscheinlich werden wir zwei Entwürfe verbessern.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### listening-05

Vielleicht wird die Gruppe am Ende nicht das schönste, sondern das praktischste Modell auswählen.

**نتيجة المراجعة:** ربما تختار المجموعة في النهاية النموذج الأكثر عملية لا الأجمل؛ Vielleicht wird die Gruppe ... auswählen.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### listening-06

Wir wissen noch nicht, welche Idee am besten funktioniert.

**نتيجة المراجعة:** لا نعرف بعد أي فكرة تعمل على أفضل وجه؛ جملة غير مباشرة في المضارع.


**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### listening-question-01

Was untersucht die Gruppe?

**نتيجة المراجعة:** Wie auf dem Schulhof mehr Schatten entstehen kann. — موضوع البحث هو كيفية توفير ظل أكبر في ساحة المدرسة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-question-02

Was wird sie in zwei Wochen vorstellen?

**نتيجة المراجعة:** Modelle aus Karton. — ستعرض المجموعة بعد أسبوعين نماذج مصنوعة من الكرتون.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-question-03

Was wird sie danach sammeln?

**نتيجة المراجعة:** Rückmeldungen. — ستجمع المجموعة بعد العرض ملاحظات وآراء راجعة Rückmeldungen.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-question-04

Was wird sie wahrscheinlich verbessern?

**نتيجة المراجعة:** Zwei Entwürfe. — ستحسن المجموعة على الأرجح تصميمين اثنين Zwei Entwürfe.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-question-05

Welches Modell wird die Gruppe vielleicht auswählen?

**نتيجة المراجعة:** Vielleicht wird die Gruppe das praktischste Modell auswählen. — ربما تختار المجموعة في النهاية النموذج الأكثر عملية das praktischste Modell.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-T01

1. نموذج أولي لمنتج أو فكرة: **der Prototyp / das Ergebnis**
2. مكان تُجرى فيه التجارب: **das Labor / die Anwendung**
3. ما ينتج عن تجربة أو اختبار: **das Ergebnis / die Entwicklung**
4. فحص فكرة أو جهاز للتأكد من عمله: **testen / erfinden**

**نتيجة المراجعة:** أربع مفردات أساسية تميز Prototyp وLabor وErgebnis وtesten.

- **1.** نموذج أولي لمنتج أو فكرة: **der Prototyp / das Ergebnis**
  - **المفتاح:** der Prototyp؛ النموذج الأولي لفكرة أو جهاز هو der Prototyp لا das Ergebnis.
- **2.** مكان تُجرى فيه التجارب: **das Labor / die Anwendung**
  - **المفتاح:** das Labor؛ المكان الذي تُجرى فيه التجارب هو das Labor لا die Anwendung.
- **3.** ما ينتج عن تجربة أو اختبار: **das Ergebnis / die Entwicklung**
  - **المفتاح:** das Ergebnis؛ ما ينتج عن تجربة أو اختبار هو das Ergebnis لا die Entwicklung.
- **4.** فحص فكرة أو جهاز للتأكد من عمله: **testen / erfinden**
  - **المفتاح:** testen؛ فحص جهاز للتأكد من عمله هو testen لا erfinden.

**مصادر القاعدة/المعنى:** [PROTOTYP](https://www.duden.de/rechtschreibung/Prototyp), [LABOR](https://www.duden.de/rechtschreibung/Labor), [ERGEBNIS](https://www.duden.de/rechtschreibung/Ergebnis)

### DL-B1-12-T02

1. Ich ______ die Ergebnisse morgen vergleichen.
2. Du ______ den Prototyp nächste Woche testen.
3. Das Team ______ vielleicht eine neue Lösung entwickeln.
4. Wir ______ die Anwendung später verbessern.
5. ______ Sie das Experiment wiederholen?

**نتيجة المراجعة:** خمس جمل تدرب تصريف werden مع الضمائر والاسم المفرد وصيغة الاحترام.

- **1.** Ich ______ die Ergebnisse morgen vergleichen.
  - **المفتاح:** werde؛ مع الضمير ich نصرف werden إلى werde.
- **2.** Du ______ den Prototyp nächste Woche testen.
  - **المفتاح:** wirst؛ مع الضمير du نصرف werden إلى wirst.
- **3.** Das Team ______ vielleicht eine neue Lösung entwickeln.
  - **المفتاح:** wird؛ الفاعل Das Team مفرد نحويًا فيأخذ wird.
- **4.** Wir ______ die Anwendung später verbessern.
  - **المفتاح:** werden؛ مع الضمير wir نصرف werden إلى werden.
- **5.** ______ Sie das Experiment wiederholen?
  - **المفتاح:** Werden؛ في سؤال الاحترام مع Sie في بداية الجملة نكتب Werden بحرف كبير.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### DL-B1-12-T03

1. Die Gruppe wird den Sensor morgen ______. (testen)
2. Wir werden die Ergebnisse später ______. (vergleichen)
3. Die Forscherin wird eine neue Lösung ______. (entwickeln)

**نتيجة المراجعة:** ثلاث جمل تثبت وضع المصدر في نهاية الجملة الرئيسية في Futur I.

- **1.** Die Gruppe wird den Sensor morgen ______. (testen)
  - **المفتاح:** testen؛ بعد wird يأتي المصدر testen في نهاية الجملة.
- **2.** Wir werden die Ergebnisse später ______. (vergleichen)
  - **المفتاح:** vergleichen؛ بعد werden يأتي المصدر vergleichen في نهاية الجملة.
- **3.** Die Forscherin wird eine neue Lösung ______. (entwickeln)
  - **المفتاح:** entwickeln؛ بعد wird يأتي المصدر entwickeln في نهاية الجملة.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### DL-B1-12-T04

استخدم **wahrscheinlich** أو **vielleicht** أو **vermutlich**:

1. ______ wird das Experiment länger dauern. *(احتمال مفتوح: ربما)*
2. Das Team wird ______ einen zweiten Prototyp bauen. *(ترجيح: على الأرجح)*
3. ______ werden die Ergebnisse neue Fragen aufwerfen. *(تقدير مبني على الظن: فيما يُظن / وفق التقدير)*

**نتيجة المراجعة:** ثلاث جمل مقيدة معنويًا لتمييز Vielleicht وwahrscheinlich وVermutlich دون التباس.

- **1.** ______ wird das Experiment länger dauern. *(احتمال مفتوح: ربما)*
  - **المفتاح:** Vielleicht؛ القيد العربي (احتمال مفتوح: ربما) وفي بداية الجملة يحدد Vielleicht بحرف كبير.
- **2.** Das Team wird ______ einen zweiten Prototyp bauen. *(ترجيح: على الأرجح)*
  - **المفتاح:** wahrscheinlich؛ القيد العربي (ترجيح: على الأرجح) وداخل الجملة يحدد wahrscheinlich بحرف صغير.
- **3.** ______ werden die Ergebnisse neue Fragen aufwerfen. *(تقدير مبني على الظن: فيما يُظن / وفق التقدير)*
  - **المفتاح:** Vermutlich؛ القيد العربي (تقدير مبني على الظن: فيما يُظن / وفق التقدير) وفي بداية الجملة يحدد Vermutlich بحرف كبير.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### DL-B1-12-T05

حدّد صحيحًا أو خطأ:

1. المشروع البحثي مذكور بوصفه مشروعًا حقيقيًا في مختبر معروف.
2. يقيس النموذج الأولي رطوبة التربة.
3. سيختبر الفريق المستشعر في حوضين للزراعة.
4. سيحل المستشعر محل خبرة البستانيين.
5. سيغيّر الطلاب النموذج إذا لم يعمل جزء منه بموثوقية.

**نتيجة المراجعة:** خمس عبارات فهم قراءة تفصل الطبيعة الخيالية للمشروع وتوقعاته وحدوده.

- **1.** المشروع البحثي مذكور بوصفه مشروعًا حقيقيًا في مختبر معروف.
  - **المفتاح:** خطأ؛ خطأ؛ النص يصرح بأن المختبر Zukunftslabor خيالي.
- **2.** يقيس النموذج الأولي رطوبة التربة.
  - **المفتاح:** صحيح؛ صحيح؛ يقيس النموذج الأولي رطوبة التربة.
- **3.** سيختبر الفريق المستشعر في حوضين للزراعة.
  - **المفتاح:** صحيح؛ صحيح؛ سيختبر الفريق المستشعر في حوضين للزراعة.
- **4.** سيحل المستشعر محل خبرة البستانيين.
  - **المفتاح:** خطأ؛ خطأ؛ لن يحل المستشعر محل خبرة البستانيين.
- **5.** سيغيّر الطلاب النموذج إذا لم يعمل جزء منه بموثوقية.
  - **المفتاح:** صحيح؛ صحيح؛ سيغير الطلاب النموذج إذا لم يعمل جزء بموثوقية.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-T06

أكمل بالألمانية الكلمات الناقصة فقط؛ لا تكرر أداة موجودة خارج الفراغ:

1. Die Gruppe untersucht, wie auf dem Schulhof mehr ______ entstehen kann.
2. In zwei Wochen werden sie Modelle aus ______ vorstellen.
3. Danach werden sie ______ sammeln.
4. Wahrscheinlich wird die Gruppe zwei ______ verbessern.
5. Vielleicht wird die Gruppe am Ende das ______ Modell auswählen.

**نتيجة المراجعة:** خمسة فراغات استماع مع تعليمات صريحة بعدم تكرار الكلمات المعطاة خارج الفراغ.

- **1.** Die Gruppe untersucht, wie auf dem Schulhof mehr ______ entstehen kann.
  - **المفتاح:** Schatten؛ الكلمة الناقصة هي Schatten (ظل أكبر في ساحة المدرسة).
- **2.** In zwei Wochen werden sie Modelle aus ______ vorstellen.
  - **المفتاح:** Karton؛ الكلمة الناقصة بعد aus هي Karton (نماذج من الكرتون).
- **3.** Danach werden sie ______ sammeln.
  - **المفتاح:** Rückmeldungen؛ الكلمة الناقصة هي Rückmeldungen (الملاحظات الراجعة).
- **4.** Wahrscheinlich wird die Gruppe zwei ______ verbessern.
  - **المفتاح:** Entwürfe؛ الكلمة الناقصة بعد zwei هي Entwürfe (تصميمين).
- **5.** Vielleicht wird die Gruppe am Ende das ______ Modell auswählen.
  - **المفتاح:** praktischste؛ الأداة das موجودة قبل الفراغ والاسم Modell بعده، فنكتب صفة التفضيل praktischste وحدها.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-T07

اكتب **Futur I** أو **Präsens Passiv** أو **Präsens**:

1. **Das Team wird den Sensor testen.**
2. **Der Sensor wird getestet.**
3. **Forscherinnen werden eine Lösung entwickeln.**
4. **Die Ergebnisse werden veröffentlicht.**
5. **Das Team testet den Prototyp nächste Woche.**
6. **Im nächsten Monat wird der Prototyp im Garten getestet.**

**نتيجة المراجعة:** ست جمل تقارن بين Futur I وPräsens Passiv وPräsens للمستقبل المتفق عليه.

- **1.** **Das Team wird den Sensor testen.**
  - **المفتاح:** Futur I؛ wird ... testen تجمع werden مع المصدر فهي Futur I.
- **2.** **Der Sensor wird getestet.**
  - **المفتاح:** Präsens Passiv؛ wird getestet تجمع werden مع Partizip II فهي Präsens Passiv.
- **3.** **Forscherinnen werden eine Lösung entwickeln.**
  - **المفتاح:** Futur I؛ werden ... entwickeln تجمع werden مع المصدر فهي Futur I.
- **4.** **Die Ergebnisse werden veröffentlicht.**
  - **المفتاح:** Präsens Passiv؛ werden veröffentlicht تجمع werden مع Partizip II فهي Präsens Passiv.
- **5.** **Das Team testet den Prototyp nächste Woche.**
  - **المفتاح:** Präsens؛ testet ... nächste Woche مضارع Präsens يدل على خطة مستقبلية ذات موعد محدد.
- **6.** **Im nächsten Monat wird der Prototyp im Garten getestet.**
  - **المفتاح:** Präsens Passiv؛ Im nächsten Monat wird ... getestet مبني للمجهول في المضارع Präsens Passiv مع ظرف زمني مستقبلي لأن getestet صيغة Partizip II.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PASSIV](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens)

### DL-B1-12-T08

**أ — P01: خمس جمل كتابة فقط**

اكتب عرضًا قصيرًا من خمس جمل ألمانية عن مشروع ابتكار خيالي (مثل مستشعر رطوبة لحديقة تعليمية خيالية): اذكر في الجملة الأولى هدف المشروع الخيالي في الحاضر، وفي الثانية خطة ذات موعد متفق عليه بصيغة Präsens مع تعبير زمني، وفي الثالثة والرابعة توقعين بصيغة Futur I بدرجتي يقين مختلفتين باستخدام wahrscheinlich وvielleicht، وفي الخامسة الخطوة التالية بصيغة Futur I إذا لم يعمل جزء كما هو متوقع. هذه المهمة كتابة فقط دون جهر أو تسجيل، ولا تعرض التوقعات كحقائق مؤكدة أو تنسبها إلى بحث حقيقي.

**ب — P02: خمس جمل كتابة وجهر**

استنادًا إلى نص الاستماع المكتوب عن مشروع الظل في ساحة المدرسة، اكتب إحاطة قصيرة لفريقك من خمس جمل ألمانية ثم اقرأها بصوت واضح بنفسك: اذكر في الجملة الأولى ما تدرسه المجموعة في ساحة المدرسة، وفي الثانية ما ستعرضه بعد أسبوعين من نماذج الكرتون، وفي الثالثة ما ستجمعه بعدها من ملاحظات، وفي الرابعة توقعًا بصيغة Futur I مع wahrscheinlich عن تحسين تصميمين، وفي الخامسة توقعًا بصيغة Futur I مع vielleicht عن اختيار النموذج الأكثر عملية. لا يلزم شريك أو تسجيل، ولا تحتاج إلى تشغيل MP3.

**نتيجة المراجعة:** مهمتا التمرين 8 مفصلتان إلى P01 كتابة فقط (5 جمل، 348 حرفًا) وP02 كتابة وجهر (5 جمل، 325 حرفًا).

- **1.** Unsere fiktive Projektgruppe entwickelt im Lernlabor einen kleinen Feuchtigkeitssensor für Schulgärten.
  - **المفتاح:** Unsere fiktive Projektgruppe entwickelt im Lernlabor einen kleinen Feuchtigkeitssensor für Schulgärten.؛ الجملة الأولى في P01 تعرف مشروع المستشعر الخيالي في المختبر التعليمي بصيغة المضارع.
- **2.** Nächste Woche testet das Team den ersten Prototyp im Garten.
  - **المفتاح:** Nächste Woche testet das Team den ersten Prototyp im Garten.؛ الجملة الثانية تذكر خطة الأسبوع المقبل المتفق عليها بصيغة Präsens: testet ... nächste Woche.
- **3.** Wahrscheinlich wird der Sensor nützliche Messwerte liefern.
  - **المفتاح:** Wahrscheinlich wird der Sensor nützliche Messwerte liefern.؛ الجملة الثالثة تذكر توقعًا مرجحًا بصيغة Futur I مع Wahrscheinlich: wird ... liefern.
- **4.** Vielleicht wird das Experiment bei Regen länger dauern.
  - **المفتاح:** Vielleicht wird das Experiment bei Regen länger dauern.؛ الجملة الرابعة تذكر احتمالًا مفتوحًا بصيغة Futur I مع Vielleicht: wird ... dauern.
- **5.** Nach dem Test werden wir das Modell Schritt für Schritt verbessern.
  - **المفتاح:** Nach dem Test werden wir das Modell Schritt für Schritt verbessern.؛ الجملة الخامسة تذكر خطوة التحسين التالية بصيغة Futur I: werden wir ... verbessern.
- **6.** In unserem fiktiven Kurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann.
  - **المفتاح:** In unserem fiktiven Kurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann.؛ الجملة الأولى في P02 تذكر موضوع الدراسة في ساحة المدرسة الخيالية بصيغة المضارع.
- **7.** In zwei Wochen werden wir Modelle aus Karton vorstellen.
  - **المفتاح:** In zwei Wochen werden wir Modelle aus Karton vorstellen.؛ الجملة الثانية تذكر عرض نماذج الكرتون بعد أسبوعين بصيغة Futur I: werden wir ... vorstellen.
- **8.** Danach werden wir Rückmeldungen von der Gruppe sammeln.
  - **المفتاح:** Danach werden wir Rückmeldungen von der Gruppe sammeln.؛ الجملة الثالثة تذكر جمع الملاحظات بعد العرض بصيغة Futur I: werden wir ... sammeln.
- **9.** Wahrscheinlich werden wir zwei Entwürfe verbessern.
  - **المفتاح:** Wahrscheinlich werden wir zwei Entwürfe verbessern.؛ الجملة الرابعة تذكر توقع تحسين تصميمين بصيغة Futur I مع Wahrscheinlich.
- **10.** Vielleicht wird das Team am Ende das praktischste Modell auswählen.
  - **المفتاح:** Vielleicht wird das Team am Ende das praktischste Modell auswählen.؛ الجملة الخامسة تذكر احتمال اختيار النموذج الأكثر عملية بصيغة Futur I مع Vielleicht.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### DL-B1-12-Q01

أي كلمة ألمانية تعني «نموذجًا أوليًا»؟

**نتيجة المراجعة:** der Prototyp هو نموذج أولي لاختبار فكرة أو جهاز؛ أما Ergebnis فتعني النتيجة وLabor المختبر.

**المفتاح:** der Prototyp

**الربط:** DL-B1-12-T01

- **الخيار 1 — صحيح:** der Prototyp — der Prototyp تعني النموذج الأولي المخصص للتجريب.
- **الخيار 2 — ليس المطلوب:** das Ergebnis — das Ergebnis تعني النتيجة لا النموذج الأولي.
- **الخيار 3 — ليس المطلوب:** das Labor — das Labor تعني المختبر لا النموذج الأولي.

**مصادر القاعدة/المعنى:** [PROTOTYP](https://www.duden.de/rechtschreibung/Prototyp)

### DL-B1-12-Q02

أكمل بصيغة Futur I الصحيحة: Du ___ den Prototyp nächste Woche testen.

**نتيجة المراجعة:** مع du نصرف werden إلى wirst: Du wirst den Prototyp testen.

**المفتاح:** wirst

**الربط:** DL-B1-12-T02

- **الخيار 1 — ليس المطلوب:** wird — wird للمفرد الغائب لا للمخاطب du.
- **الخيار 2 — صحيح:** wirst — wirst هي الصيغة الصحيحة مع du في Futur I.
- **الخيار 3 — ليس المطلوب:** werden — werden للجمع أو المصدر لا للمخاطب المفرد du.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### DL-B1-12-Q03

اختر المصدر المناسب لإكمال الجملة: Die Gruppe wird den Sensor morgen ___.

**نتيجة المراجعة:** في Futur I يأتي werden مصرفًا في الموقع الثاني، ثم المصدر testen في نهاية الجملة.

**المفتاح:** testen

**الربط:** DL-B1-12-T03

- **الخيار 1 — ليس المطلوب:** testet — testet صيغة مضارع مصرف لا مصدر بعد wird.
- **الخيار 2 — صحيح:** testen — testen مصدر في نهاية الجملة بعد wird، وهو الصحيح في Futur I.
- **الخيار 3 — ليس المطلوب:** getestet — getestet صيغة Partizip II تعطي المبني للمجهول لا Futur I المعلوم.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### DL-B1-12-Q04

في جملة **Wahrscheinlich werden die Forschenden eine Lösung finden**، ماذا تعني كلمة **wahrscheinlich**؟

**نتيجة المراجعة:** wahrscheinlich تعني «على الأرجح»؛ فهي تشير إلى توقع مرجح لا إلى حقيقة مضمونة.

**المفتاح:** على الأرجح، لكن ليس على سبيل اليقين

**الربط:** DL-B1-12-T04

- **الخيار 1 — صحيح:** على الأرجح، لكن ليس على سبيل اليقين — wahrscheinlich تفيد الترجيح (على الأرجح) مع بقاء النتيجة غير مضمونة يقينًا.
- **الخيار 2 — ليس المطلوب:** من المؤكد دون احتمال آخر — الكلمة لا تعني يقينًا قاطعًا بلا احتمال آخر.
- **الخيار 3 — ليس المطلوب:** حدث ذلك في الماضي — الجملة والظرف لا يدلان على حدث وقع في الماضي.

**مصادر القاعدة/المعنى:** [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich), [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### DL-B1-12-Q05

ماذا يقيس النموذج الأولي في مشروع المختبر الخيالي؟

**نتيجة المراجعة:** يذكر نص القراءة أن المستشعر الأولي يقيس رطوبة التربة في الحديقة المشتركة.

**المفتاح:** رطوبة التربة

**الربط:** DL-B1-12-T05

- **الخيار 1 — صحيح:** رطوبة التربة — ينص نص القراءة على أن النموذج الأولي يقيس رطوبة التربة في الحديقة المشتركة.
- **الخيار 2 — ليس المطلوب:** درجة حرارة الصف — درجة حرارة الصف غير مذكورة في النص.
- **الخيار 3 — ليس المطلوب:** سرعة نهر البلدة — سرعة نهر البلدة غير مذكورة في النص.

**مصادر القاعدة/المعنى:** [PROTOTYP](https://www.duden.de/rechtschreibung/Prototyp)

### DL-B1-12-Q06

ما الشيء الذي لن يحل المستشعر محله بحسب النص؟

**نتيجة المراجعة:** يتوقع الفريق أن يساعد المستشعر في التخطيط، لكنه لن يحل محل خبرة البستانيات والبستانيين.

**المفتاح:** خبرة البستانيات والبستانيين

**الربط:** DL-B1-12-T05

- **الخيار 1 — صحيح:** خبرة البستانيات والبستانيين — يؤكد النص أن المستشعر لن يحل محل خبرة البستانيات والبستانيين.
- **الخيار 2 — ليس المطلوب:** النموذج الأولي — المستشعر نفسه هو النموذج الأولي الذي يُختبر.
- **الخيار 3 — ليس المطلوب:** النتائج التي سيقارنها الطلاب — الطلاب سيقارنون النتائج بعد التجربة الأولى، وليس هذا ما ينفي النص استبداله.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-Q07

ماذا ستعرض المجموعة في غضون أسبوعين بحسب نص الاستماع؟

**نتيجة المراجعة:** تقول المجموعة إنها ستعرض نماذج من الكرتون بعد أسبوعين؛ ويمكن الإجابة من النص المكتوب دون تشغيل MP3.

**المفتاح:** نماذج مصنوعة من الكرتون

**الربط:** DL-B1-12-T06

- **الخيار 1 — صحيح:** نماذج مصنوعة من الكرتون — تذكر المجموعة أنها ستعرض بعد أسبوعين نماذج مصنوعة من الكرتون.
- **الخيار 2 — ليس المطلوب:** نتائج اختبار المستشعر — نتائج مستشعر التربة تخص نص القراءة لا عرض الكرتون في الاستماع.
- **الخيار 3 — ليس المطلوب:** تصميمًا نهائيًا جاهزًا للبيع — النص يتحدث عن نماذج أولية من الكرتون ومقارنة أفكار، لا منتج نهائي جاهز للبيع.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-Q08

ما الذي ستجمعه المجموعة بعد عرض النماذج؟

**نتيجة المراجعة:** بعد العرض ستجمع المجموعة Rückmeldungen، أي الملاحظات والآراء الراجعة.

**المفتاح:** ملاحظات وآراء المشاركين

**الربط:** DL-B1-12-T06

- **الخيار 1 — صحيح:** ملاحظات وآراء المشاركين — بعد عرض النماذج ستجمع المجموعة Rückmeldungen أي ملاحظات وآراء المشاركين.
- **الخيار 2 — ليس المطلوب:** قطعًا من جهاز قديم — جمع قطع جهاز قديم غير مذكور في النص.
- **الخيار 3 — ليس المطلوب:** صورًا تاريخية عن الجسر — جمع صور الجسر التاريخي يخص درس B1.11 لا هذا النص.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-Q09

أي جملة تستخدم Futur I بمعنى أن الفريق سيختبر المستشعر؟

**نتيجة المراجعة:** في الجملة الأولى يأتي المصدر testen في النهاية بعد werden المصرف، فهي Futur I. أما الجملتان الأخريان ففيهما Partizip II (getestet / veröffentlicht) وتصفان المبني للمجهول في المضارع.

**المفتاح:** Das Team wird den Sensor testen.

**الربط:** DL-B1-12-T07

- **الخيار 1 — صحيح:** Das Team wird den Sensor testen. — Das Team wird den Sensor testen تجمع wird مع المصدر testen فهي Futur I.
- **الخيار 2 — ليس المطلوب:** Der Sensor wird getestet. — Der Sensor wird getestet تجمع wird مع Partizip II فهي مبني للمجهول في المضارع.
- **الخيار 3 — ليس المطلوب:** Die Ergebnisse werden veröffentlicht. — Die Ergebnisse werden veröffentlicht تجمع werden مع Partizip II فهي مبني للمجهول في المضارع.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PASSIV](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-12-Q10

أي جملة تعبّر عن خطة مستقبلية ذات موعد محدد بصيغة Präsens، لا بصيغة Futur I أو المبني للمجهول؟

**نتيجة المراجعة:** تدل عبارة nächste Woche على الموعد، لذلك يمكن أن يستعمل الألماني Präsens للخطة المستقبلية المتفق عليها. الثانية Futur I، والثالثة مبني للمجهول في المضارع.

**المفتاح:** Das Team testet den Prototyp nächste Woche.

**الربط:** DL-B1-12-T07

- **الخيار 1 — صحيح:** Das Team testet den Prototyp nächste Woche. — Das Team testet den Prototyp nächste Woche تستعمل Präsens مع ظرف زمني مستقبلي لخطة محددة.
- **الخيار 2 — ليس المطلوب:** Das Team wird den Prototyp nächste Woche testen. — wird ... testen صيغة Futur I وليست Präsens.
- **الخيار 3 — ليس المطلوب:** Der Prototyp wird nächste Woche getestet. — wird ... getestet صيغة مبني للمجهول في المضارع.

**مصادر القاعدة/المعنى:** [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens), [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PASSIV](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-12-P01

اكتب عرضًا قصيرًا من خمس جمل ألمانية عن مشروع ابتكار خيالي (مثل مستشعر رطوبة لحديقة تعليمية خيالية): اذكر في الجملة الأولى هدف المشروع الخيالي في الحاضر، وفي الثانية خطة ذات موعد متفق عليه بصيغة Präsens مع تعبير زمني، وفي الثالثة والرابعة توقعين بصيغة Futur I بدرجتي يقين مختلفتين باستخدام wahrscheinlich وvielleicht، وفي الخامسة الخطوة التالية بصيغة Futur I إذا لم يعمل جزء كما هو متوقع. هذه المهمة كتابة فقط دون جهر أو تسجيل، ولا تعرض التوقعات كحقائق مؤكدة أو تنسبها إلى بحث حقيقي.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة فقط دون جهر.

**الربط:** DL-B1-12-T08

- **المعيار taskCompletion:** خمس جمل ألمانية عن مشروع ابتكار خيالي تشمل الهدف الحالي، وخطة ذات موعد متفق عليه بصيغة Präsens، وتوقعين بصيغة Futur I مع wahrscheinlich وvielleicht، وخطوة تحسين تالية؛ كتابة فقط. — يتحقق من خمس جمل تشمل هدف المشروع الخيالي وخطة بموعد في Präsens وتوقعين في Futur I وخطوة تحسين؛ الحد 130 حرفًا والنموذج 348 حرفًا.
- **المعيار meaningClarity:** يفصل الناتج بين الخطة المتفق عليها والتوقعات غير المضمونة، ويُبقي المشروع والمختبر خياليين دون نسبتهما إلى مؤسسة أو دراسة حقيقية. — يضمن الفصل بين الخطة والتوقع غير المضمون وبقاء المشروع خياليًا.
- **المعيار targetSkill:** يستخدم Futur I ثلاث مرات على الأقل في النموذج (ومرتين على الأقل كحد أدنى للمهمة) بصيغة werden الصحيحة والمصدر في نهاية الإطار الفعلي، ويوظف Präsens للموعد المتفق عليه وكلمتَي wahrscheinlich وvielleicht توظيفًا سليمًا. — يركز على صحة werden والمصدر في النهاية وتوظيف wahrscheinlich وvielleicht وPräsens للموعد المتفق عليه؛ كتابة فقط دون جهر.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 130, "speakAloud": false, "audioRequired": false}

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### DL-B1-12-P02

استنادًا إلى نص الاستماع المكتوب عن مشروع الظل في ساحة المدرسة، اكتب إحاطة قصيرة لفريقك من خمس جمل ألمانية ثم اقرأها بصوت واضح بنفسك: اذكر في الجملة الأولى ما تدرسه المجموعة في ساحة المدرسة، وفي الثانية ما ستعرضه بعد أسبوعين من نماذج الكرتون، وفي الثالثة ما ستجمعه بعدها من ملاحظات، وفي الرابعة توقعًا بصيغة Futur I مع wahrscheinlich عن تحسين تصميمين، وفي الخامسة توقعًا بصيغة Futur I مع vielleicht عن اختيار النموذج الأكثر عملية. لا يلزم شريك أو تسجيل، ولا تحتاج إلى تشغيل MP3.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة وجهر مع تغطية نقاط مشروع الظل الخمس وروابط T06/T08.

**الربط:** DL-B1-12-T06, DL-B1-12-T08

- **المعيار taskCompletion:** خمس جمل ألمانية تغطي دراسة زيادة الظل في ساحة المدرسة، وعرض نماذج الكرتون بعد أسبوعين، وجمع الملاحظات، وتوقع تحسين تصميمين، وتوقع اختيار النموذج الأكثر عملية؛ كتابة ثم جهر. — يتحقق من خمس جمل تغطي النقاط الخمس في مشروع الظل بساحة المدرسة؛ الحد 145 حرفًا والنموذج 325 حرفًا مع الجهر.
- **المعيار meaningClarity:** يعرض معلومات نص الاستماع بدقة دون خلطها بمشروع مستشعر الحديقة، ويبقي النجاح المتوقع احتمالًا لا حقيقة مؤكدة. — يضمن عدم خلط مشروع الظل بمشروع المستشعر وعدم عرض التوقعات كحقائق مؤكدة.
- **المعيار targetSkill:** يستخدم Futur I في أربع جمل في النموذج (وفي جملتين على الأقل كحد أدنى للمهمة) مع المصدر في نهاية الجملة الرئيسية، ويقرن التوقعين بـwahrscheinlich وvielleicht مع القراءة الجهرية الذاتية دون تسجيل. — يركز على Futur I مع المصدر في النهاية وتوظيف wahrscheinlich وvielleicht والقراءة الجهرية الذاتية دون تسجيل.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 145, "speakAloud": true, "audioRequired": false}

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### pitch-model-01

Unsere fiktive Projektgruppe entwickelt im Lernlabor einen kleinen Feuchtigkeitssensor für Schulgärten.
Nächste Woche testet das Team den ersten Prototyp im Garten.
Wahrscheinlich wird der Sensor nützliche Messwerte liefern.
Vielleicht wird das Experiment bei Regen länger dauern.
Nach dem Test werden wir das Modell Schritt für Schritt verbessern.

**نتيجة المراجعة:** نموذج مكتوب: 348 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** Unsere fiktive Projektgruppe entwickelt im Lernlabor einen kleinen Feuchtigkeitssensor für Schulgärten.
  - الجملة الأولى في P01 تعرف مشروع المستشعر الخيالي في المختبر التعليمي بصيغة المضارع.
- **2.** Nächste Woche testet das Team den ersten Prototyp im Garten.
  - الجملة الثانية تذكر خطة الأسبوع المقبل المتفق عليها بصيغة Präsens: testet ... nächste Woche.
- **3.** Wahrscheinlich wird der Sensor nützliche Messwerte liefern.
  - الجملة الثالثة تذكر توقعًا مرجحًا بصيغة Futur I مع Wahrscheinlich: wird ... liefern.
- **4.** Vielleicht wird das Experiment bei Regen länger dauern.
  - الجملة الرابعة تذكر احتمالًا مفتوحًا بصيغة Futur I مع Vielleicht: wird ... dauern.
- **5.** Nach dem Test werden wir das Modell Schritt für Schritt verbessern.
  - الجملة الخامسة تذكر خطوة التحسين التالية بصيغة Futur I: werden wir ... verbessern.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### schoolyard-model-01

In unserem fiktiven Kurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann.
In zwei Wochen werden wir Modelle aus Karton vorstellen.
Danach werden wir Rückmeldungen von der Gruppe sammeln.
Wahrscheinlich werden wir zwei Entwürfe verbessern.
Vielleicht wird das Team am Ende das praktischste Modell auswählen.

**نتيجة المراجعة:** نموذج مكتوب: 325 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** In unserem fiktiven Kurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann.
  - الجملة الأولى في P02 تذكر موضوع الدراسة في ساحة المدرسة الخيالية بصيغة المضارع.
- **2.** In zwei Wochen werden wir Modelle aus Karton vorstellen.
  - الجملة الثانية تذكر عرض نماذج الكرتون بعد أسبوعين بصيغة Futur I: werden wir ... vorstellen.
- **3.** Danach werden wir Rückmeldungen von der Gruppe sammeln.
  - الجملة الثالثة تذكر جمع الملاحظات بعد العرض بصيغة Futur I: werden wir ... sammeln.
- **4.** Wahrscheinlich werden wir zwei Entwürfe verbessern.
  - الجملة الرابعة تذكر توقع تحسين تصميمين بصيغة Futur I مع Wahrscheinlich.
- **5.** Vielleicht wird das Team am Ende das praktischste Modell auswählen.
  - الجملة الخامسة تذكر احتمال اختيار النموذج الأكثر عملية بصيغة Futur I مع Vielleicht.

**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1), [PRAESENS](https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens), [1](https://www.duden.de/rechtschreibung/vermutlich_wahrscheinlich)

### card-01

- **Das Team wird den Prototyp testen.** → سيختبر الفريق النموذج الأولي.

**نتيجة المراجعة:** نموذج Futur I الأساسي: wird + المصدر testen في نهاية الجملة.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### card-02

- **Vielleicht wird das Experiment länger dauern.** → ربما تستغرق التجربة وقتًا أطول.

**نتيجة المراجعة:** نموذج التوقع غير الجازم مع Vielleicht في بداية الجملة.


**مصادر القاعدة/المعنى:** [FUTUR](https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1)

### card-03

- **der Versuch / das Ergebnis** → المحاولة أو الاختبار / النتيجة.

**نتيجة المراجعة:** مراجعة مفردتين أساسيتين: der Versuch (المحاولة/الاختبار) وdas Ergebnis (النتيجة).


**مصادر القاعدة/المعنى:** [VERSUCH](https://www.duden.de/rechtschreibung/Versuch), [ERGEBNIS](https://www.duden.de/rechtschreibung/Ergebnis)

### card-04

- **Der Sensor wird getestet.** → يُختبر المستشعر.

**نتيجة المراجعة:** نموذج المبني للمجهول في المضارع للمقارنة مع Futur I: Der Sensor wird getestet.


**مصادر القاعدة/المعنى:** [PASSIV](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-12-AUD-PHR-01

Die Forschung. Die Entwicklung, die Entwicklungen. Die Erfindung, die Erfindungen. Das Experiment, die Experimente. Der Versuch, die Versuche. Das Ergebnis, die Ergebnisse. Die Anwendung, die Anwendungen. Die Lösung, die Lösungen. Der Prototyp, die Prototypen. Das Labor, die Labore. Entwickeln, entwickelt. Erforschen, erforscht. Testen, testet. Verbessern, verbessert. Wahrscheinlich. Vermutlich. Vielleicht. Künftig.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 18 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Die Forschung.
  - Forschung مؤنث؛ تستعمل غالبًا بالمفرد للبحث العلمي العام، ويوجد جمع Forschungen للأبحاث المتعددة.
- **2.** Die Entwicklung, die Entwicklungen.
  - Entwicklung مؤنث وجمعها Entwicklungen؛ التطوير أو التطور بحسب السياق.
- **3.** Die Erfindung, die Erfindungen.
  - Erfindung مؤنث وجمعها Erfindungen؛ اختراع جديد، ولا تعني مجرد فحص جهاز قائم.
- **4.** Das Experiment, die Experimente.
  - Experiment محايد وجمعه Experimente؛ تجربة علمية أو عملية.
- **5.** Der Versuch, die Versuche.
  - Versuch مذكر وجمعه Versuche؛ محاولة أو اختبار تجريبي.
- **6.** Das Ergebnis, die Ergebnisse.
  - Ergebnis محايد وجمعه Ergebnisse؛ نتيجة قياس أو تجربة.
- **7.** Die Anwendung, die Anwendungen.
  - Anwendung مؤنث وجمعها Anwendungen؛ تطبيق عملي أو برمجي.
- **8.** Die Lösung, die Lösungen.
  - Lösung مؤنث وجمعها Lösungen؛ حل لمشكلة أو سؤال بحثي.
- **9.** Der Prototyp, die Prototypen.
  - Prototyp مذكر وجمعه Prototypen؛ نموذج أولي للتجريب قبل التعميم.
- **10.** Das Labor, die Labore.
  - Labor محايد وجمعه Labore (وكذلك Labors)؛ مختبر للتجارب.
- **11.** Entwickeln, entwickelt.
  - entwickeln فعل ضعيف غير منفصل حاضرُه مع المفرد الغائب entwickelt؛ يطور.
- **12.** Erforschen, erforscht.
  - erforschen فعل ضعيف غير منفصل حاضرُه erforscht؛ يستكشف علميًا أو يبحث في موضوع.
- **13.** Testen, testet.
  - testen فعل ضعيف حاضرُه testet مع -e- بعد t؛ يختبر أو يجرب.
- **14.** Verbessern, verbessert.
  - verbessern فعل ضعيف حاضرُه verbessert؛ يحسن أو يطور نموذجًا بعد التجربة.
- **15.** Wahrscheinlich.
  - wahrscheinlich ظرف ترجيح بمعنى على الأرجح.
- **16.** Vermutlich.
  - vermutlich ظرف تقدير وظن بمعنى فيما يُظن / على الأرجح.
- **17.** Vielleicht.
  - vielleicht ظرف احتمال مفتوح بمعنى ربما.
- **18.** Künftig.
  - künftig ظرف زمني بمعنى مستقبلًا.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-AUD-MODEL-01

Das Team testet den Prototyp nächste Woche. Das Team wird den Prototyp nächste Woche testen. In Zukunft werden Forschende neue Lösungen entwickeln. Vielleicht wird das Experiment länger dauern. Das Team wird den Sensor testen. Der Sensor wird getestet.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 6 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Das Team testet den Prototyp nächste Woche.
  - Das Team testet den Prototyp nächste Woche: مضارع Präsens مع ظرف زمني مستقبلي لخطة متفق عليها.
- **2.** Das Team wird den Prototyp nächste Woche testen.
  - Das Team wird den Prototyp nächste Woche testen: Futur I؛ الفاعل المفرد Das Team مع wird والمصدر testen في النهاية.
- **3.** In Zukunft werden Forschende neue Lösungen entwickeln.
  - In Zukunft werden Forschende neue Lösungen entwickeln: تقدم الظرف الزمني ثم werden للجمع والمصدر entwickeln في النهاية.
- **4.** Vielleicht wird das Experiment länger dauern.
  - Vielleicht wird das Experiment länger dauern: تقدم ظرف الاحتمال Vielleicht ثم wird والمصدر dauern في النهاية.
- **5.** Das Team wird den Sensor testen.
  - Das Team wird den Sensor testen: Futur I للمعلوم لأن testen مصدر في نهاية الإطار الفعلي.
- **6.** Der Sensor wird getestet.
  - Der Sensor wird getestet: مبني للمجهول في المضارع Präsens Passiv لأن getestet صيغة Partizip II.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-AUD-DLG-01

Woran arbeitet euer Team gerade? Wir entwickeln einen kleinen Sensor für den Gemeinschaftsgarten. Was werdet ihr als Nächstes machen? Nächste Woche werden wir den Prototyp in zwei Beeten testen. Wird der Sensor die Arbeit im Garten ersetzen? Nein. Er wird nur Messwerte liefern. Wir werden prüfen, ob die Werte hilfreich sind. Und was passiert, wenn der erste Versuch nicht klappt? Dann werden wir das Modell verbessern. Ein Versuch, der nicht funktioniert, wird uns trotzdem etwas zeigen.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 8 وحدة داخل 8 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Woran arbeitet euer Team gerade?
  - Rana تسأل بالمضارع عما يعمل عليه الفريق الآن؛ Woran أداة استفهام مع الجار والمجرور.
- **2.** Wir entwickeln einen kleinen Sensor für den Gemeinschaftsgarten.
  - Timo يصف العمل الحالي بالمضارع: تطوير مستشعر صغير للحديقة المشتركة.
- **3.** Was werdet ihr als Nächstes machen?
  - سؤال مستقبلي بـFutur I مع ihr: Was werdet ihr als Nächstes machen?
- **4.** Nächste Woche werden wir den Prototyp in zwei Beeten testen.
  - خطة الأسبوع المقبل بـFutur I: werden wir ... testen في حوضين للزراعة.
- **5.** Wird der Sensor die Arbeit im Garten ersetzen?
  - سؤال نعم/لا بـFutur I يبدأ بـWird: هل سيحل المستشعر محل العمل في الحديقة؟
- **6.** Nein. Er wird nur Messwerte liefern. Wir werden prüfen, ob die Werte hilfreich sind.
  - نفي واضح ثم جملتا Futur I: سيوفر قيم قياس فقط، وسيفحص الفريق ما إذا كانت القيم مفيدة (ob ... sind).
- **7.** Und was passiert, wenn der erste Versuch nicht klappt?
  - سؤال شرطي بالمضارع: ماذا يحدث إذا لم تنجح المحاولة الأولى؟
- **8.** Dann werden wir das Modell verbessern. Ein Versuch, der nicht funktioniert, wird uns trotzdem etwas zeigen.
  - جواب بـFutur I: سنحسن النموذج، والمحاولة التي لا تنجح ستُظهر لنا مع ذلك شيئًا مفيدًا.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-AUD-READ-01

Eine Schülergruppe im fiktiven „Zukunftslabor“ entwickelt einen Sensor für einen Gemeinschaftsgarten. Zuerst baut sie einen Prototyp, der die Feuchtigkeit in der Erde misst. Im nächsten Monat wird das Team den Sensor in zwei Beeten testen und die Messwerte notieren. Die Gruppe erwartet, dass der Prototyp beim Planen der Gartenarbeit helfen wird; er wird die Erfahrung der Gärtnerinnen und Gärtner aber nicht ersetzen. Nach dem ersten Versuch werden die Schülerinnen und Schüler die Ergebnisse vergleichen. Wenn ein Teil nicht zuverlässig funktioniert, werden sie das Modell verändern. Vielleicht entsteht daraus eine neue Idee. Das Ziel des Projekts ist nicht, sofort ein perfektes Gerät zu bauen, sondern eine Frage Schritt für Schritt zu untersuchen.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 8 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Eine Schülergruppe im fiktiven „Zukunftslabor“ entwickelt einen Sensor für einen Gemeinschaftsgarten.
  - مجموعة طلابية في المختبر الخيالي Zukunftslabor تطور مستشعرًا لحديقة مشتركة.
- **2.** Zuerst baut sie einen Prototyp, der die Feuchtigkeit in der Erde misst.
  - تبني أولًا نموذجًا أوليًا يقيس رطوبة التربة؛ جملة موصولة في المضارع.
- **3.** Im nächsten Monat wird das Team den Sensor in zwei Beeten testen und die Messwerte notieren.
  - في الشهر المقبل سيختبر الفريق المستشعر في حوضين ويدون القياسات؛ مصدران testen وnotieren مع wird.
- **4.** Die Gruppe erwartet, dass der Prototyp beim Planen der Gartenarbeit helfen wird; er wird die Erfahrung der Gärtnerinnen und Gärtner aber nicht ersetzen.
  - تتوقع المجموعة أن يساعد النموذج الأولي في تخطيط عمل الحديقة (helfen wird في آخر التابعة)، لكنه لن يحل محل خبرة البستانيات والبستانيين.
- **5.** Nach dem ersten Versuch werden die Schülerinnen und Schüler die Ergebnisse vergleichen.
  - بعد التجربة الأولى سيقارن الطلاب النتائج؛ werden ... vergleichen.
- **6.** Wenn ein Teil nicht zuverlässig funktioniert, werden sie das Modell verändern.
  - إذا لم يعمل جزء بموثوقية فسيغيرون النموذج؛ شرط حاضر وجواب Futur I.
- **7.** Vielleicht entsteht daraus eine neue Idee.
  - ربما تنشأ من ذلك فكرة جديدة؛ مضارع مع Vielleicht للدلالة على احتمال مفتوح.
- **8.** Das Ziel des Projekts ist nicht, sofort ein perfektes Gerät zu bauen, sondern eine Frage Schritt für Schritt zu untersuchen.
  - هدف المشروع ليس بناء جهاز مثالي فورًا، بل فحص سؤال خطوة بخطوة؛ مصدر مع zu وليس Futur I.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-12-AUD-LST-01

In unserem Innovationskurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann. In zwei Wochen werden wir Modelle aus Karton vorstellen. Danach werden wir Rückmeldungen sammeln. Wahrscheinlich werden wir zwei Entwürfe verbessern. Vielleicht wird die Gruppe am Ende nicht das schönste, sondern das praktischste Modell auswählen. Wir wissen noch nicht, welche Idee am besten funktioniert.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 6 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** In unserem Innovationskurs untersuchen wir, wie auf dem Schulhof mehr Schatten entstehen kann.
  - في دورة الابتكار نفحص كيف يمكن أن ينشأ ظل أكبر في ساحة المدرسة؛ سؤال غير مباشر مع kann.
- **2.** In zwei Wochen werden wir Modelle aus Karton vorstellen.
  - بعد أسبوعين سنعرض نماذج من الكرتون؛ werden wir ... vorstellen.
- **3.** Danach werden wir Rückmeldungen sammeln.
  - بعد ذلك سنجمع ملاحظات وآراء راجعة؛ werden wir Rückmeldungen sammeln.
- **4.** Wahrscheinlich werden wir zwei Entwürfe verbessern.
  - على الأرجح سنحسن تصميمين؛ Wahrscheinlich werden wir zwei Entwürfe verbessern.
- **5.** Vielleicht wird die Gruppe am Ende nicht das schönste, sondern das praktischste Modell auswählen.
  - ربما تختار المجموعة في النهاية النموذج الأكثر عملية لا الأجمل؛ Vielleicht wird die Gruppe ... auswählen.
- **6.** Wir wissen noch nicht, welche Idee am besten funktioniert.
  - لا نعرف بعد أي فكرة تعمل على أفضل وجه؛ جملة غير مباشرة في المضارع.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

