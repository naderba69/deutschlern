# CR41 — مراجعة B1.11 الفردية والتراكمية

**أحدث مراجعة محتوى CR41 — 2026-10-09:** رُوجع **B1.11 — التاريخ والسياسة: المبني للمجهول في Präteritum** في **99 وحدة و42 بندًا داخل التمارين و9 أجزاء نموذج، و30 خيارًا و6 معايير**، بالاستناد إلى **10 مراجع مقروءة بالكامل** (واستبعاد رابط 404 واحد). صُحح مفتاح T06.4 من `einem Gästebuch` إلى `Gästebuch` لأن `einem` معطاة قبل الفراغ، وقُيّد جدول `wurde/wurden` بالغائب المفرد/الجمع مع بيان التصريف الكامل، وقُيّد موقع `Partizip II` بالجمل الرئيسية البسيطة مع مثال تابع، ووُضّح المجهول غير الشخصي `wurde ... über den Vorschlag abgestimmt` والفرق عن `wurde größer` و`war geöffnet`. أضيفت 3 بنود في T02 وبندان في T07، وصارت **P01 خطًا زمنيًا من 4 جمل كتابة فقط (204 حروف)** و**P02 تقديم المعرض من 5 جمل تشمل المعلومات الخمس كلها كتابة وجهر (327 حرفًا)**. الخيارات الـ30 والفهارس والروابط و80% وحدا 100/125 محفوظة؛ `b1-11-v2` و`v90`، وخمسة أصول/10 مقاطع معلقة بأصوات `Mira`/`Archivarin` المحفوظة دون توليد أو استماع أو اعتماد. **الحملة 40/53 درسًا والبوابة منفصلة؛ تبقى 13 درسًا، والتالي CR42/B1.12.** الفحوص لا تعني دمج PR#1 أو اكتمال المشروع.

**التنفيذ المرفوع:** `c4cd3c7e1ab78b78f654f18646bb1b2d29eb9074` على `arena/01a1036f-deutschlern`. يرفع هذا التقرير فور فحصه بعنوان `Record CR41 granular B1.11 review and cumulative checks` ثم يُوثّق إيصال الرفع. PR#1 غير مدمجة.

## التصحيحات وحدود الاستنتاج

- صُحح مفتاح T06.4 إلى `Gästebuch` وحدها لأن `In einem` مكتوبة قبل الفراغ.
- قُيّد جدول المساعد بالغائب المفرد/الجمع مع بيان التصريف الكامل، وقُيّد موضع `Partizip II` بالجمل الرئيسية البسيطة مع مثال تابع `Mira weiß, dass das Kulturhaus 1985 eröffnet wurde.`.
- وُضّح المجهول غير الشخصي `Danach wurde in einer Sitzung über den Vorschlag abgestimmt.`، والفرق بين حدث المجهول `wurde eröffnet` والفعل التام `wurde größer` وحالة `war geöffnet`.
- أضيفت `renovieren/einführen/eröffnen` إلى T02، وجملتا `Das Dorf wurde größer.` و`Danach wurde in einer Sitzung über den Vorschlag abgestimmt.` إلى T07.
- فُصلت P01 (4 جمل خط زمني كتابة فقط) عن P02 (5 جمل تذكر معلومات المعرض الخمس كلها مع الجهر)، وطُوبق نص التمرين والمعايير والنموذجان.

## الفحوص التراكمية — CR41

- **PASS:** البناء والتحقق، و41 حارسًا (بما فيها `tools/test_b1_11_review.py`)، وخمس مجموعات Node (`progression` و`service_worker` و`daily_plan` و`session_persistence` و`study_time`)، وفحص صياغة JS و`git diff --check`. حجم الحزمة **2,126,109 بايت**؛ 53 درسًا، 428 عنوان تمرين، 61 قسم حوار، 754 مفردة، 530 سؤال درس + 10 بوابة، 109 مهمات أداء، 1080 صف catalog، 217 أصلًا/474 مقطعًا (137 `ready` و80 معلقة).
- **المتصفح:** Chromium 143.0.7499.0، Playwright 1.58.2، axe-core 4.11.0؛ نجحت `browser` و`accessibility_update` و`accessibility_audit` و`forms_keyboard` و`narrow_layout` بعد تثبيت بيئة المتصفح المؤقتة في الحاوية.
- **دون اتصال والتحديث:** تحديث Service Worker من fixture `v42` إلى `v90` دون إعادة تحميل قسرية، مع حفظ التقدم والإجابات وعزل المخازن و503 للصوت غير المخزن وإعادة تخزينه عند الاتصال.
- **الدليل والتدرج:** سجل `b1-11-v1` محفوظ لكنه لا يمنح إتقان `b1-11-v2` أو يفتح `B1.12`؛ المسودة القديمة تُرفض، والدرجة والدليل الحاليان يفتحان `b1-12-innovation-research-future` وحذف الدليل يغلقه. `P01` كتابة فقط دون مربع جهر، و`P02` كتابة وجهر، والنموذجان 204/327 حرفًا فوق حدَّي 100/125 حرفًا.
- **axe والعرض الضيق:** **177 حالة** وصفر مخالفات للقواعد المختارة، مع **125 ظهورًا غير حاسم تشمل 295 ظهورًا لعقد**؛ و**126 حالة عرض ضيق** (63 في `320×900` و63 في `568×320`). ليست شهادة WCAG أو اختبار أجهزة حقيقية.
- **التعثرات التي حُلّت:** حُدّثت عبارتان قديمتان في `tools/test_progression.cjs` لتطابق كون P01 كتابة فقط وP02 كتابة وجهر، وثُبّتت حزم Playwright/Chromium المؤقتة بعد غيابها في الحاوية الجديدة، ثم نجحت الفحوص كلها.
- **النشر والـPR:** رُفع التنفيذ `c4cd3c7e1ab78b78f654f18646bb1b2d29eb9074` وتطابق HEAD/origin. أظهر الاستعلام الصريح بالـSHA فشل Vercel بسبب `Deployment rate limited — retry in 24 hours.` و`deployments=[]`؛ PR#1 ما تزال `OPEN` و`mergedAt=null`. لا إعادة نشر متكررة ولا شراء ترقية.

## الحفظ والحدود

مقارنة بالأساس `96cdc1e98432483f45d44f914720a168e8145308`: **52 درسًا آخر وكل مفاتيح الحزمة الأخرى و1060 صف catalog و212 صف سجل صوت ثابتة تمامًا**؛ لم يتغير في سجل الصوت سوى `source_line` لأربعة أصول في B1.11 وبقي `DL-B1-11-AUD-PHR-01` ثابتًا. حُفظت 590 ملفًا محميًا تشمل 474 ملف MP3 و`data/audio-playlists.json` مطابقة بالبايت. أصوات `Mira` (`voice-02`) و`Archivarin` (`voice-00`) والسرد (`voice-02`) والاستماع (`voice-03`) وخمسة أصول/10 مقاطع تبقى `generated_pending_acoustic_review` و`offer` ومتاحة في أقسامها دون معاينة جديدة أو توليد أو استماع أو اعتماد.

- مراجعة نصية مصدرية بالذكاء الاصطناعي؛ ليست شهادة CEFR أو WCAG أو اختبارًا لمتعلمين حقيقيين، ولا مراجع بشري شرطًا للاستمرار.
- عشرة مراجع مقروءة بالكامل تشمل جزأي Passiv وجزأي Partizipien؛ لم تُقرأ ملفات PDF أو التمارين التفاعلية الخارجية. المراجع المعجمية المباشرة تخص الألفاظ المسماة (werden وStadtrat وMehrheit وbeschließen وDenkmal وabstimmen وEreignis وGemeinde وVerfassung وAbstimmung) لا كل كلمة في الجدول.
- خمسة أصول/10 مقاطع معلقة ومحفوظة بأصوات Mira (voice-02) وArchivarin (voice-00) والسرد (voice-02) والاستماع (voice-03)؛ فحص MP3 والتشغيل الآلي الصامت ومطابقة التفريغ ليست استماعًا أو اعتمادًا صوتيًا.
- الحد الأدنى للحروف (100/125) والإقرارات الذاتية والجهر في P02 لا تصحح عدد الجمل أو القواعد أو النطق آليًا؛ البلدة والوقائع خيالية تمامًا.
- 177 حالة axe وصفر مخالفات للقواعد المختارة، مع 125 ظهورًا غير حاسم تشمل 295 ظهورًا لعقد؛ ليست مخالفات مؤكدة ولا شهادة وصول شاملة.
- فحوص 320×900 و568×320 و1440×900 و390×844 تتم عبر CSS viewports في Chromium وليست هواتف فعلية أو تكبير متصفح أصليًا؛ تحديث v42 إلى v90 fixture محدد وليس كل مسار تاريخي.
- نشر التنفيذ c4cd3c7 فشل في Vercel بسبب حد النشر اليومي (Deployment rate limited — retry in 24 hours.) وdeployments=[]؛ لا إعادة نشر آلية ولا شراء ترقية، ولم تختبر الواجهة البعيدة أو Production، وPR#1 غير مدمجة.

## المراجع ونطاق القراءة

- **PASSIVE — Lingolia — Das Passiv in der deutschen Grammatik** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv): werden في Präteritum يصبح wurde/wurden مع Partizip II، ويتحول مفعول Akkusativ في الأفعال المتعدية المعتادة إلى فاعل نحوي، ويذكر المنفذ بـvon + Dativ، كما يشرح المجهول غير الشخصي والفرق عن Zustandspassiv بـsein + Partizip II. **قرئت كاملة**؛ الأجزاء [0, 1] من 2، بتاريخ 2026-10-09.
- **PART — Lingolia — Partizip I und II in der deutschen Grammatik** [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien): قواعد بناء Partizip II بـge-...-t/-en، و-et بعد d/t، وحذف ge- مع -ieren والسوابق غير المنفصلة، ووضع ge- بعد السابقة المنفصلة. **قرئت كاملة**؛ الأجزاء [0, 1] من 2، بتاريخ 2026-10-09.
- **MAIN — Lingolia — Positive Aussagesätze in der deutschen Grammatik** [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze): في الجمل الرئيسية الخبرية يقع الفعل المصرف في الموضع الثاني وتأتي الصيغة غير المصرفة كـPartizip II في نهاية الإطار الفعلي، مع إمكان تقدم ظرف الزمان أو المكان في الموضع الأول. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **WERDEN — Duden — werden (Vollverb)** [1](https://www.duden.de/rechtschreibung/werden_Vollverb): استعمال werden فعلًا تامًا بمعنى التحول إلى حالة أو اكتساب صفة مثل wurde schlechter/größer، مع الإحالة إلى werden فعلًا مساعدًا. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **STADTRAT — Duden — Stadtrat** [STADTRAT](https://www.duden.de/rechtschreibung/Stadtrat): اسم مذكر جمعُه die Stadträte؛ يدل على هيئة تمثيل البلدية/مجلس المدينة، وقد يدل في سياق آخر على عضو المجلس. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **MEHRHEIT — Duden — Mehrheit** [MEHRHEIT](https://www.duden.de/rechtschreibung/Mehrheit): اسم مؤنث جمعُه die Mehrheiten؛ يدل على الجزء الأكبر من الأصوات أو الأشخاص، وليس مرادفًا للإجماع، ويختلف نوع الأغلبية بحسب السياق القانوني. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **BESCHLIESSEN — Duden — beschließen** [BESCHLIESSEN](https://www.duden.de/rechtschreibung/beschlieszen): فعل قوي تصريفه beschließt، beschloss، hat beschlossen؛ يدل على اتخاذ قرار أو التصويت عليه، وله معنى آخر هو الإنهاء/الختم خارج سياق الدرس. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **DENKMAL — Duden — Denkmal** [DENKMAL](https://www.duden.de/rechtschreibung/Denkmal): اسم محايد جمعُه الشائع die Denkmäler والجمع الفصيح Denkmale؛ يدل على نصب تذكاري أو أثر شاهد على حقبة سابقة. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **ABSTIMMEN — Duden — abstimmen** [ABSTIMMEN](https://www.duden.de/rechtschreibung/abstimmen): فعل ضعيف منفصل stimmt ab، stimmte ab، hat abgestimmt؛ يدل على التصويت über etwas، وله معانٍ أخرى كالمواءمة والتنسيق خارج سياق الدرس. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.
- **EREIGNIS — Duden — Ereignis** [EREIGNIS](https://www.duden.de/rechtschreibung/Ereignis): اسم محايد جمعُه die Ereignisse؛ يدل على حدث بارز أو واقعة، ويرتبط كثيرًا بالصفة historisch. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-09.

**صفحات مستبعدة، وليست مراجع:**
- https://www.duden.de/rechtschreibung/werden — صفحة خطأ 404؛ استُبعدت واستُبدلت بصفحة werden_Vollverb الفعلية

## الوحدات الفردية — 99 وحدة

التقسيم: 7 نطاقات، 16 صف مفردات، 4 أمثلة قواعد، 10 مساعدات، 6 أدوار حوار، 9 جمل قراءة و6 أسئلة، 5 جمل استماع و5 أسئلة، 8 تمارين، 10 أسئلة تقييم، مهمتا أداء، نموذجان مفصلان إلى 9 أجزاء، 4 بطاقات، 5 أصول صوت. بنود التمارين 42 بتوزيع 4/7/3/3/5/5/6/9.

### scope-01

**المدة المقترحة:** 40–45 دقيقة، ويمكن تقسيم العمل · **المهارات:** قراءة خطّ زمني، استماع اختياري، قواعد، مفردات مدنية، كتابة وجهر

**نتيجة المراجعة:** المدة مقترحة قابلة للتقسيم؛ الاستماع المسجل اختياري، والجهر مطلوب في P02 فقط بينما P01 كتابة فقط.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### scope-02

**الهدف:** أستطيع أن أسرد أحداثًا تاريخية أو مدنية بصيغة المبني للمجهول في الماضي.

**نتيجة المراجعة:** الهدف سرد أحداث ماضية بصيغة Vorgangspassiv في Präteritum؛ لا يمنح الاختبار شهادة B1 أو توثيقًا تاريخيًا.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### scope-03

> **ملاحظة:** المدينة والأحداث في هذه الوحدة خيالية، والأمثلة لغوية محايدة لا تتناول حزبًا أو موقفًا سياسيًا حقيقيًا.

**نتيجة المراجعة:** المدينة والوقائع خيالية ومحايدة؛ لا تمثل حزبًا أو مدينة أو واقعة سياسية حقيقية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### scope-04

تنبيه مفردات: Stadtrat هنا مجلس المدينة، وقد يدل على عضو المجلس في سياق آخر. Mehrheit أغلبية وليست إجماعًا، ولا تحدد الكلمة وحدها نسبة التصويت أو القاعدة القانونية. Denkmäler جمع شائع، وDenkmale جمع فصيح موجود أيضًا. هذه توضيحات مكتوبة لا تغييرات في التسجيل.

**نتيجة المراجعة:** وُضح أن Stadtrat هيئة مفردة نحويًا هنا، وأن Mehrheit ليست إجماعًا، وأن Denkmäler هو الجمع الشائع مع وجود Denkmale فصيحًا.


**مصادر القاعدة/المعنى:** [STADTRAT](https://www.duden.de/rechtschreibung/Stadtrat), [MEHRHEIT](https://www.duden.de/rechtschreibung/Mehrheit), [DENKMAL](https://www.duden.de/rechtschreibung/Denkmal)

### scope-05

نستخدم المبني للمجهول في **Präteritum** لسرد حدث ماضٍ عندما نركّز على ما حدث، لا على من قام به. نصرّف **werden** في Präteritum ونطابقه مع الفاعل النحوي إن وجد؛ في الجمل الرئيسية البسيطة المدروسة يشكل Partizip II نهاية الإطار الفعلي. لا ننقل هذا الترتيب حرفيًا إلى كل جملة تابعة.

**نتيجة المراجعة:** قُيّدت القاعدة بمطابقة الفاعل النحوي إن وجد وبنهاية الإطار الفعلي في الجمل الرئيسية البسيطة، دون تعميمها على الجمل التابعة.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### scope-06

| غائب مفرد: das Museum / die Brücke | wurde | · | غائب جمع: die Museen / die Brücken | wurden |

**نتيجة المراجعة:** قُيّد الجدول بالغائب المفرد والجمع حتى لا يُتوهم أن du تأخذ wurde؛ التصريف الكامل موضح في المساعدة.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### scope-07

قارن بين **wurde + Partizip II** للمبني للمجهول، و**wurde** وحدها بمعنى «أصبح»: **Das Dorf wurde größer.** — أصبحت القرية أكبر.

**نتيجة المراجعة:** المقارنة تفصل حدث المبني للمجهول wurde eröffnet عن الفعل التام wurde größer بمعنى أصبح أكبر.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [1](https://www.duden.de/rechtschreibung/werden_Vollverb)

### vocab-01

| die Epoche | die Epochen | حقبة |

**نتيجة المراجعة:** Epoche مؤنث وجمعها Epochen؛ حقبة زمنية، ولا تحدد وحدها قرونًا معينة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-02

| das Ereignis | die Ereignisse | حدث |

**نتيجة المراجعة:** Ereignis محايد وجمعه Ereignisse؛ حدث أو واقعة، وليس بالضرورة حدثًا سياسيًا.


**مصادر القاعدة/المعنى:** [EREIGNIS](https://www.duden.de/rechtschreibung/Ereignis)

### vocab-03

| die Gemeinde | die Gemeinden | بلدة / بلدية |

**نتيجة المراجعة:** Gemeinde مؤنث وجمعها Gemeinden؛ بلدة أو بلدية هنا، ولها في الألمانية معانٍ دينية أخرى خارج سياق الدرس.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-04

| die Verfassung | die Verfassungen | دستور |

**نتيجة المراجعة:** Verfassung مؤنث وجمعها Verfassungen؛ دستور بالمعنى المدني هنا، ولها معنى الحالة الجسدية/النفسية بلا جمع.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-05

| der Stadtrat | die Stadträte | مجلس المدينة |

**نتيجة المراجعة:** Stadtrat مذكر وجمعه Stadträte بأوملاوت؛ مجلس المدينة هنا، وقد يدل على عضو المجلس.


**مصادر القاعدة/المعنى:** [STADTRAT](https://www.duden.de/rechtschreibung/Stadtrat)

### vocab-06

| der Beschluss | die Beschlüsse | قرار |

**نتيجة المراجعة:** Beschluss مذكر وجمعه Beschlüsse بأوملاوت؛ قرار رسمي، ويرتبط بالفعل fassen أو beschließen.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-07

| die Abstimmung | die Abstimmungen | تصويت |

**نتيجة المراجعة:** Abstimmung مؤنث وجمعها Abstimmungen؛ تصويت هنا، ولها معنى التنسيق والمواءمة في سياقات أخرى.


**مصادر القاعدة/المعنى:** [ABSTIMMEN](https://www.duden.de/rechtschreibung/abstimmen)

### vocab-08

| die Mehrheit | die Mehrheiten | أغلبية |

**نتيجة المراجعة:** Mehrheit مؤنث وجمعها Mehrheiten؛ أغلبية الأصوات أو المجموعة، وليست إجماعًا.


**مصادر القاعدة/المعنى:** [MEHRHEIT](https://www.duden.de/rechtschreibung/Mehrheit)

### vocab-09

| die Bürgerin / der Bürger | die Bürgerinnen / die Bürger | مواطنة / مواطن |

**نتيجة المراجعة:** Bürgerin مؤنث وجمعها Bürgerinnen، وBürger مذكر وجمعه Bürger؛ صيغتا المواطنة والمواطن.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-10

| das Denkmal | die Denkmäler | نصب تذكاري |

**نتيجة المراجعة:** Denkmal محايد وجمعه الشائع Denkmäler؛ نصب تذكاري أو معلم تاريخي.


**مصادر القاعدة/المعنى:** [DENKMAL](https://www.duden.de/rechtschreibung/Denkmal)

### vocab-11

| die Zeitleiste | die Zeitleisten | خطّ زمني |

**نتيجة المراجعة:** Zeitleiste مؤنث وجمعها Zeitleisten؛ خط زمني يرتب الأحداث.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-12

| wählen | wählt | ينتخب |

**نتيجة المراجعة:** wählen حاضرُه مع المفرد الغائب wählt وPartizip II gewählt؛ ينتخب أو يختار.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-13

| beschließen | beschließt | يقرّر / يعتمد |

**نتيجة المراجعة:** beschließen فعل قوي حاضرُه beschließt وماضيه beschloss وPartizip II beschlossen؛ يقرر أو يعتمد.


**مصادر القاعدة/المعنى:** [BESCHLIESSEN](https://www.duden.de/rechtschreibung/beschlieszen)

### vocab-14

| gründen | gründet | يؤسّس |

**نتيجة المراجعة:** gründen حاضرُه gründet مع -e- بعد d وPartizip II gegründet؛ يؤسس.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### vocab-15

| einführen | führt ein | يطبّق / يستحدث |

**نتيجة المراجعة:** einführen فعل منفصل حاضرُه führt ein وPartizip II eingeführt؛ يطبق أو يستحدث.


**مصادر القاعدة/المعنى:** [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien)

### vocab-16

| historisch / demokratisch | — | تاريخيّ / ديمقراطيّ |

**نتيجة المراجعة:** historisch تاريخي وdemokratisch ديمقراطي؛ صفتان بلا جمع معجمي هنا، وتستعملان في أمثلة محايدة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### grammar-01

Das Museum wurde 1985 eröffnet.

**نتيجة المراجعة:** Das Museum فاعل نحوي مفرد، فجاءت wurde ثم الظرف الزمني 1985 وPartizip II eröffnet في النهاية.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### grammar-02

Die Brücken wurden renoviert.

**نتيجة المراجعة:** Die Brücken فاعل نحوي جمع، فجاءت wurden وPartizip II renoviert دون ge- لأنه ينتهي بـ-ieren.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien)

### grammar-03

Der Beschluss wurde vom Stadtrat gefasst.

**نتيجة المراجعة:** Der Beschluss فاعل نحوي مفرد، وذكر المنفذ بـvom Stadtrat أي von dem Stadtrat في Dativ، وgefasst في النهاية.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [STADTRAT](https://www.duden.de/rechtschreibung/Stadtrat)

### grammar-04

Das Dorf wurde größer.

**نتيجة المراجعة:** Das Dorf wurde größer جملة معلوم بفعل تام بمعنى أصبح، وليست مبنيًا للمجهول لأن größer صفة مقارنة لا Partizip II.


**مصادر القاعدة/المعنى:** [1](https://www.duden.de/rechtschreibung/werden_Vollverb), [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### helper-01

- **التحويل والمطابقة:** في أمثلة T03 يصبح مفعول Akkusativ في المعلوم فاعلًا نحويًا Nominativ في المجهول؛ نطابق المساعد معه لا مع المنفذ بعد von. Die Jugendvertretung مفرد ولو كان المؤسسون جمعًا. Der Stadtrat اسم مفرد لجماعة، وليس جمعًا نحويًا لمجرد تعدد أعضائه. لا نطبق تحويل المفعول على كل فعل ألماني بلا قيد.

**نتيجة المراجعة:** تحويل مفعول المعلوم إلى فاعل المجهول مقيد بالأفعال المتعدية المعتادة، والمطابقة مع الفاعل النحوي لا مع المنفذ بعد von.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [STADTRAT](https://www.duden.de/rechtschreibung/Stadtrat)

### helper-02

- **تصريف المساعد:** جدول الدرس للغائب المفرد والجمع. التصريف الكامل: ich wurde، du wurdest، er/sie/es wurde، wir wurden، ihr wurdet، sie/Sie wurden. فلا تعني عبارة مفرد أن du تأخذ wurde. نميز wurden الماضي عن werden الحاضر في Q01، وwurde عن würde ذات الأوملاوت، وهي ليست صيغة الماضي المطلوبة.

**نتيجة المراجعة:** التصريف الكامل لـwerden في Präteritum يمنع تعميم wurde على du وihr، ويميز wurden عن werden وwürde.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### helper-03

- **تشكيل Partizip II:** bauen → gebaut، wählen → gewählt، gründen → gegründet، beschließen → beschlossen، eröffnen → eröffnet، renovieren → renoviert، einführen → eingeführt. لا نضيف ge مع البادئة غير المنفصلة be-/er- أو مع -ieren، وتدخل ge بعد البادئة المنفصلة في eingeführt. gegründet فيها -et؛ beschloss ماضٍ مصرف لا Partizip II. ليست كل صيغة تبدأ بـge مبنيًا للمجهول بمفردها.

**نتيجة المراجعة:** الأمثلة السبعة تغطي gebaut/gewählt/gegründet/beschlossen/eröffnet/renoviert/eingeführt وتمنع مساواة كل ge- بالمجهول.


**مصادر القاعدة/المعنى:** [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien), [BESCHLIESSEN](https://www.duden.de/rechtschreibung/beschlieszen)

### helper-04

- **الموقع لا الكلمة الثانية:** في Im Jahr 1974 wurde die alte Brücke gebaut، عبارة الزمن وحدة أولى ثم wurde ثم الفاعل، وgebaut نهاية الإطار. في Wann wurde … eröffnet? أداة السؤال أولًا، وفي Wurden die Fotos … gesammelt? يبدأ السؤال بالمصرف. مثال تابع للمقارنة: **Mira weiß, dass das Kulturhaus 1985 eröffnet wurde.** هنا المصرف بعد Partizip II داخل التابعة، لا قبلها.

**نتيجة المراجعة:** الفعل المصرف في الموضع الثاني للجملة الرئيسية حتى مع تقدم الزمن، ويتأخر إلى آخر الجملة التابعة في مثال dass ... eröffnet wurde.


**مصادر القاعدة/المعنى:** [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### helper-05

- **المنفذ والحالة:** von + Dativ: vom = von dem، von den Bewohnern، von einer örtlichen Werkstatt. Bewohnern جمع Dativ مع -n، وörtlichen نعت بعد einer في هذا السياق. أما durch die Ausstellung في الاستماع فمسار الجولة عبر المعرض، لا اسم منفذ؛ لا نعمم أن كل durch في المبني للمجهول تعني السبب أو الوسيلة.

**نتيجة المراجعة:** von + Dativ للمنفذ في أمثلة الدرس، أما durch die Ausstellung فمسار مكاني عبر المعرض لا سبب أو وسيلة.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### helper-06

- **مجهول بلا فاعل اسمي:** **Danach wurde in einer Sitzung über den Vorschlag abgestimmt.** مبني للمجهول غير شخصي؛ über den Vorschlag جار ومجرور متعلق بموضوع التصويت، لا فاعل ولا مفعول مباشر يتحول إلى فاعل. نستخدم wurde هنا دون فاعل اسمي. قارن **Eine Mehrheit stimmte dafür.**: معلوم، وstimmte يطابق Mehrheit المفردة في هذا النص؛ لا يعني وجود المعنى المدني أن الجملة مجهولة.

**نتيجة المراجعة:** wurde ... über den Vorschlag abgestimmt مجهول غير شخصي بلا فاعل اسمي، بينما Eine Mehrheit stimmte dafür معلوم.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [ABSTIMMEN](https://www.duden.de/rechtschreibung/abstimmen), [MEHRHEIT](https://www.duden.de/rechtschreibung/Mehrheit)

### helper-07

- **حدث أم تغيّر أم حالة:** Das Museum wurde eröffnet حدث افتتاح بالمجهول؛ Das Dorf wurde größer تغيّر بمعنى أصبح أكبر وgrößer صفة مقارنة، لا Partizip II. ولتمييز الحالة: **Das Museum war geöffnet.** تصف حالة كونه مفتوحًا في السياق المقصود؛ ليست صيغة حدث الافتتاح المطلوبة في مهمات هذا الدرس. الأمثلة السياسية الخيالية ليست مواقف سياسية أو وقائع تاريخية موثقة.

**نتيجة المراجعة:** تمييز حدث Vorgangspassiv (wurde eröffnet) عن تغير الصفة (wurde größer) وعن حالة Zustandspassiv (war geöffnet).


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [1](https://www.duden.de/rechtschreibung/werden_Vollverb)

### helper-08

- **حدود الزمن والقصص:** في القراءة الجسر1974 والأرشيف1985 وممثلية الشباب2004؛ في الحوار Kulturhaus عام1985 وJugendrat عام2004. تشابه السنوات لا يجعل المباني أو المؤسسات متطابقة. في القراءة نقصد بـZwei Jahre später عامين بعد2018، أي2020؛ هذا توضيح لإحالة النص لا تاريخ خارجي. معرض الاستماع2021 مستقل، ولا يحدد النص تاريخ بناء النموذج أو كل نشاط آخر.

**نتيجة المراجعة:** فصل سنوات وقائع الحوار عن خط القراءة ومعرض الاستماع، وتوضيح أن Zwei Jahre später بعد 2018 تعني 2020 داخل النص.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### helper-09

- **لا تضف معلومات:** المناقشة ثم التصويت ثم موافقة أغلبية ليست أعداد أصوات أو إجماعًا أو دليلًا على قانون بلد حقيقي. الصور من السكان في الاستماع لا تحدد هوية كل مصور، ولا يجوز نقل فعل التبرع gespendet من الحوار إلى كل صور المعرض. افتتاح معرض عن الجسر لا يعني أن الجسر نفسه بُني عام2021. في T06.4 كلمة einem موجودة، فاكتب Gästebuch وحدها.

**نتيجة المراجعة:** منع استنتاج أعداد الأصوات أو الإجماع أو تعميم gespendet على صور المعرض، وتنبيه المتعلم إلى عدم تكرار einem في T06.4.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### helper-10

- **دليل فردي مستقل عن الصوت:** P01 أربع جمل خط زمني كتابة فقط؛ P02 خمس جمل عن المعرض كتابة ثم جهر بالنفس، دون شريك أو تسجيل. ثلاثة إقرارات وحد أدنى100/125 حرفًا لا تصحح عدد الجمل أو القواعد أو النطق آليًا. التسجيلات المتاحة تبقى معلقة دون توليد أو استماع أو اعتماد جديد؛ يمكن الإجابة من النص المكتوب.

**نتيجة المراجعة:** تحديد P01 كتابة فقط وP02 كتابة وجهر بالنفس، وبيان حدود التحقق المحلي واستقلال التقييم عن ملفات الصوت.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### dialogue-01

Wann wurde das alte Kulturhaus eröffnet?

**نتيجة المراجعة:** Mira تسأل عن سنة افتتاح Kulturhaus القديم؛ das alte Kulturhaus فاعل نحوي مفرد وeröffnet في النهاية.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### dialogue-02

Es wurde 1985 eröffnet. Damals wurde dort eine kleine Ausstellung gezeigt.

**نتيجة المراجعة:** أمينة الأرشيف تجيب بـ1985 وتضيف أنه عُرضت هناك آنذاك معرض صغير؛ eine kleine Ausstellung فاعل مفرد لـwurde ... gezeigt.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### dialogue-03

Wurden die Fotos auch im Stadtarchiv gesammelt?

**نتيجة المراجعة:** سؤال نعم/لا في المجهول يبدأ بـWurden لأن die Fotos جمع؛ يسأل عن جمع الصور في أرشيف المدينة.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### dialogue-04

Ja. Viele Bilder wurden von Einwohnerinnen und Einwohnern gespendet.

**نتيجة المراجعة:** تأكيد مع ذكر المتبرعين بـvon Einwohnerinnen und Einwohnern في Dativ جمع؛ gespendet تخص صور الحوار لا بالضرورة كل صور الاستماع.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### dialogue-05

Und wann wurde der Jugendrat gegründet?

**نتيجة المراجعة:** سؤال عن سنة تأسيس Jugendrat المفرد؛ لا يطابق هذا المجلس تلقائيًا Jugendvertretung في نص القراءة رغم اشتراك سنة 2004.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### dialogue-06

2004. Die wichtigsten Daten wurden auf einer Zeitleiste zusammengestellt.

**نتيجة المراجعة:** الجواب 2004، ثم wurden ... zusammengestellt لأن die wichtigsten Daten جمع؛ zusammengestellt بادئة منفصلة.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien)

### reading-01

Die folgende Zeitleiste gehört zur fiktiven Gemeinde Sonnenfeld.

**نتيجة المراجعة:** افتتاحية معلوم تربط الخط الزمني ببلدة Sonnenfeld الخيالية صراحة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-02

Im Jahr 1974 wurde die alte Brücke über den Fluss gebaut.

**نتيجة المراجعة:** تقدم الظرف الزمني Im Jahr 1974 ثم wurde والفاعل المفرد die alte Brücke über den Fluss وgebaut في النهاية.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### reading-03

1985 wurde ein kleines Gemeindearchiv eröffnet.

**نتيجة المراجعة:** عام 1985 افتُتح أرشيف بلدي صغير؛ ein kleines Gemeindearchiv مفرد مع wurde ... eröffnet.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### reading-04

1996 wurde der Stadtrat neu gewählt.

**نتيجة المراجعة:** عام 1996 انتُخب مجلس المدينة من جديد؛ der Stadtrat مفرد نحويًا فجاءت wurde ... gewählt.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [STADTRAT](https://www.duden.de/rechtschreibung/Stadtrat)

### reading-05

Eine Jugendvertretung wurde 2004 gegründet.

**نتيجة المراجعة:** تأسست ممثلية للشباب عام 2004؛ Eine Jugendvertretung مفرد مع wurde ... gegründet.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien)

### reading-06

Im Jahr 2018 wurde ein Vorschlag zur Neugestaltung des Marktplatzes öffentlich diskutiert.

**نتيجة المراجعة:** عام 2018 نوقش اقتراح لإعادة تصميم ساحة السوق علنًا؛ ein Vorschlag مفرد وdiskutiert بلا ge-.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien)

### reading-07

Danach wurde in einer Sitzung über den Vorschlag abgestimmt.

**نتيجة المراجعة:** بعد ذلك صُوّت في جلسة على الاقتراح؛ مجهول غير شخصي بلا فاعل اسمي، وüber den Vorschlag جار ومجرور مع Akkusativ.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [ABSTIMMEN](https://www.duden.de/rechtschreibung/abstimmen)

### reading-08

Eine Mehrheit stimmte dafür.

**نتيجة المراجعة:** أغلبية صوتت لصالح الاقتراح؛ جملة معلوم ماضية stimmte dafür وليست مبنيًا للمجهول.


**مصادر القاعدة/المعنى:** [MEHRHEIT](https://www.duden.de/rechtschreibung/Mehrheit)

### reading-09

Zwei Jahre später wurde der neue Platz eröffnet.

**نتيجة المراجعة:** بعد عامين افتُتحت الساحة الجديدة؛ الإحالة الزمنية تتبع 2018 فتدل على 2020 داخل تسلسل النص.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### reading-question-01

Zu welcher Gemeinde gehört die Zeitleiste?

**نتيجة المراجعة:** Zur fiktiven Gemeinde Sonnenfeld. — ينسب النص الخط الزمني صراحة إلى بلدة Sonnenfeld الخيالية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-02

Was wurde 1974 gebaut?

**نتيجة المراجعة:** Die alte Brücke über den Fluss. — الذي بُني عام 1974 هو الجسر القديم فوق النهر، لا الأرشيف.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-03

Was wurde 1985 eröffnet?

**نتيجة المراجعة:** Ein kleines Gemeindearchiv. — الذي افتُتح عام 1985 في هذا النص هو أرشيف بلدي صغير.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-04

Wann wurde die Jugendvertretung gegründet?

**نتيجة المراجعة:** Im Jahr 2004. — تأسست ممثلية الشباب عام 2004 بحسب الجملة الخامسة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-05

Worüber wurde 2018 diskutiert?

**نتيجة المراجعة:** Über einen Vorschlag zur Neugestaltung des Marktplatzes. — موضوع النقاش العلني عام 2018 هو اقتراح إعادة تصميم ساحة السوق.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### reading-question-06

Wann wurde der neue Platz eröffnet?

**نتيجة المراجعة:** Im Jahr 2020. — افتُتحت الساحة بعد عامين من نقاش 2018 والتصويت اللاحق له، أي عام 2020 بحسب تسلسل النص.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-01

Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet.

**نتيجة المراجعة:** افتُتح عام 2021 في متحف Sonnenfeld معرض عن الجسر القديم؛ التاريخ للمعرض لا لبناء الجسر.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### listening-02

Für die Ausstellung wurden Fotos von Einwohnern gesammelt.

**نتيجة المراجعة:** جُمعت صور للمعرض من السكان؛ Fotos جمع مع wurden ... gesammelt، وvon Einwohnern في Dativ جمع.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### listening-03

Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut.

**نتيجة المراجعة:** بُني نموذج للجسر بواسطة ورشة محلية؛ Ein Modell مفرد وvon einer örtlichen Werkstatt يذكر المنفذ بـDativ.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### listening-04

In einem Gästebuch wurden Erinnerungen an die Brücke notiert.

**نتيجة المراجعة:** دُوّنت ذكريات عن الجسر في دفتر زوار؛ Erinnerungen جمع فجاءت wurden ... notiert.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien)

### listening-05

Viele Schulklassen wurden durch die Ausstellung geführt.

**نتيجة المراجعة:** قيدت صفوف مدرسية كثيرة عبر المعرض؛ Viele Schulklassen جمع، وdurch die Ausstellung مسار الجولة لا المنفذ.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### listening-question-01

Wann wurde die Ausstellung eröffnet?

**نتيجة المراجعة:** 2021. — سنة افتتاح المعرض في النص هي 2021.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-question-02

Wozu wurden Fotos gesammelt?

**نتيجة المراجعة:** Für die Ausstellung. — الغرض المذكور لجمع الصور هو للمعرض Für die Ausstellung.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-question-03

Wer baute das Modell der Brücke?

**نتيجة المراجعة:** Eine örtliche Werkstatt. — السؤال بصيغة المعلوم Wer baute يستخرج المنفذ المذكور بعد von في النص: ورشة محلية.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-question-04

Was wurde in das Gästebuch geschrieben?

**نتيجة المراجعة:** Erinnerungen an die Brücke. — المكتوب في دفتر الزوار هو ذكريات عن الجسر.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### listening-question-05

Wer wurde durch die Ausstellung geführt?

**نتيجة المراجعة:** Viele Schulklassen. — الذين اصطحبوا في الجولة عبر المعرض هم صفوف مدرسية كثيرة.


**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-T01

1. Das Gemeindearchiv ______ 1985 eröffnet.
2. Die alten Brücken ______ renoviert.
3. Der Beschluss ______ in einer Sitzung gefasst.
4. Die Bürgerinnen und Bürger ______ zur Versammlung eingeladen.

**نتيجة المراجعة:** أربع جمل تدرب مطابقة wurde/wurden مع الفاعل النحوي المفرد والجمع.

- **1.** Das Gemeindearchiv ______ 1985 eröffnet.
  - **المفتاح:** wurde؛ Das Gemeindearchiv مفرد محايد فيأخذ wurde.
- **2.** Die alten Brücken ______ renoviert.
  - **المفتاح:** wurden؛ Die alten Brücken جمع فيأخذ wurden.
- **3.** Der Beschluss ______ in einer Sitzung gefasst.
  - **المفتاح:** wurde؛ Der Beschluss مفرد مذكر فيأخذ wurde.
- **4.** Die Bürgerinnen und Bürger ______ zur Versammlung eingeladen.
  - **المفتاح:** wurden؛ Die Bürgerinnen und Bürger فاعل جمع معطوف فيأخذ wurden.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-11-T02

1. bauen → ______
2. wählen → ______
3. gründen → ______
4. beschließen → ______
5. renovieren → ______
6. einführen → ______
7. eröffnen → ______

**نتيجة المراجعة:** سبعة أفعال تغطي صيغ Partizip II القياسية والقوية والمنفصلة وغير المنفصلة و-ieren.

- **1.** bauen → ______
  - **المفتاح:** gebaut؛ bauen فعل ضعيف: ge- + bau + -t → gebaut.
- **2.** wählen → ______
  - **المفتاح:** gewählt؛ wählen فعل ضعيف: ge- + wähl + -t → gewählt.
- **3.** gründen → ______
  - **المفتاح:** gegründet؛ gründen ينتهي جذره بـd فيأخذ -et: gegründet.
- **4.** beschließen → ______
  - **المفتاح:** beschlossen؛ beschließen فعل قوي ببادئة غير منفصلة be-: beschlossen بلا ge-.
- **5.** renovieren → ______
  - **المفتاح:** renoviert؛ renovieren ينتهي بـ-ieren فلا يأخذ ge-: renoviert.
- **6.** einführen → ______
  - **المفتاح:** eingeführt؛ einführen فعل منفصل تدخل فيه ge- بعد البادئة: eingeführt.
- **7.** eröffnen → ______
  - **المفتاح:** eröffnet؛ eröffnen يبدأ ببادئة غير منفصلة er- وينتهي جذره بـn: eröffnet بلا ge-.

**مصادر القاعدة/المعنى:** [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien), [BESCHLIESSEN](https://www.duden.de/rechtschreibung/beschlieszen)

### DL-B1-11-T03

1. **Die Gemeinde eröffnete die Bibliothek im Jahr 1985.** → Die Bibliothek ______ im Jahr 1985 ______.
2. **Die Bewohner gründeten die Jugendvertretung.** → Die Jugendvertretung ______ von den Bewohnern ______.
3. **Der Stadtrat beschloss die Umgestaltung des Platzes.** → Die Umgestaltung des Platzes ______ vom Stadtrat ______.

**نتيجة المراجعة:** ثلاث تحويلات من المعلوم إلى المجهول مع مطابقة الفاعل الجديد وذكر المنفذ بـvon + Dativ.

- **1.** **Die Gemeinde eröffnete die Bibliothek im Jahr 1985.** → Die Bibliothek ______ im Jahr 1985 ______.
  - **المفتاح:** Die Bibliothek wurde im Jahr 1985 eröffnet.؛ Die Bibliothek تصبح الفاعل المفرد مع wurde، ويبقى الظرف الزمني ثم eröffnet في النهاية.
- **2.** **Die Bewohner gründeten die Jugendvertretung.** → Die Jugendvertretung ______ von den Bewohnern ______.
  - **المفتاح:** Die Jugendvertretung wurde von den Bewohnern gegründet.؛ Die Jugendvertretung فاعل مفرد مع wurde رغم أن von den Bewohnern جمع، وgegründet في النهاية.
- **3.** **Der Stadtrat beschloss die Umgestaltung des Platzes.** → Die Umgestaltung des Platzes ______ vom Stadtrat ______.
  - **المفتاح:** Die Umgestaltung des Platzes wurde vom Stadtrat beschlossen.؛ Die Umgestaltung des Platzes فاعل مفرد مع wurde، وvom Stadtrat يذكر المنفذ، وbeschlossen في النهاية.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-11-T04

1. Das Denkmal ______ im Frühjahr restauriert. (**wurde / wurden**)
2. Mehrere Gebäude ______ im alten Stadtplan markiert. (**wurde / wurden**)
3. Die Wahl ______ im Gemeindearchiv dokumentiert. (**wurde / wurden**)

**نتيجة المراجعة:** ثلاث جمل اختيار مباشر بين wurde وwurden مع أفعال تنتهي بـ-ieren.

- **1.** Das Denkmal ______ im Frühjahr restauriert. (**wurde / wurden**)
  - **المفتاح:** wurde؛ Das Denkmal مفرد محايد فيأخذ wurde مع restauriert.
- **2.** Mehrere Gebäude ______ im alten Stadtplan markiert. (**wurde / wurden**)
  - **المفتاح:** wurden؛ Mehrere Gebäude جمع فيأخذ wurden مع markiert.
- **3.** Die Wahl ______ im Gemeindearchiv dokumentiert. (**wurde / wurden**)
  - **المفتاح:** wurde؛ Die Wahl مفرد مؤنث فيأخذ wurde مع dokumentiert.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-11-T05

حدّد صحيحًا أو خطأ:

1. تنتمي الوقائع المذكورة إلى بلدة خيالية.
2. بُني الجسر القديم عام 1985.
3. تأسست ممثلية الشباب عام 2004.
4. نوقش اقتراح إعادة تنظيم ساحة السوق عام 2018.
5. افتُتحت الساحة الجديدة بعد عام واحد من النقاش.

**نتيجة المراجعة:** خمس عبارات فهم قراءة تفصل سنوات الخط الزمني الخيالي بدقة.

- **1.** تنتمي الوقائع المذكورة إلى بلدة خيالية.
  - **المفتاح:** صحيح؛ النص يصرح بأن بلدة Sonnenfeld خيالية.
- **2.** بُني الجسر القديم عام 1985.
  - **المفتاح:** خطأ؛ خطأ؛ الجسر القديم بُني عام 1974، بينما عام 1985 افتُتح أرشيف البلدية.
- **3.** تأسست ممثلية الشباب عام 2004.
  - **المفتاح:** صحيح؛ صحيح؛ تأسست ممثلية الشباب عام 2004.
- **4.** نوقش اقتراح إعادة تنظيم ساحة السوق عام 2018.
  - **المفتاح:** صحيح؛ صحيح؛ نوقش اقتراح إعادة تصميم ساحة السوق علنًا عام 2018.
- **5.** افتُتحت الساحة الجديدة بعد عام واحد من النقاش.
  - **المفتاح:** خطأ؛ خطأ؛ افتُتحت الساحة الجديدة بعد عامين من نقاش 2018، أي عام 2020.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-T06

أكمل بالألمانية الكلمات الناقصة فقط؛ لا تكرر أداة موجودة خارج الفراغ:

1. Die Ausstellung wurde im Jahr ______ eröffnet.
2. Für die Ausstellung wurden Fotos von ______ gesammelt.
3. Ein Modell der Brücke wurde von einer ______ Werkstatt gebaut.
4. In einem ______ wurden Erinnerungen notiert.
5. Viele ______ wurden durch die Ausstellung geführt.

**نتيجة المراجعة:** خمسة فراغات استماع مع تعليمات صريحة ومفتاح مصحح لـGästebuch دون تكرار einem.

- **1.** Die Ausstellung wurde im Jahr ______ eröffnet.
  - **المفتاح:** 2021؛ سنة افتتاح المعرض في النص هي 2021.
- **2.** Für die Ausstellung wurden Fotos von ______ gesammelt.
  - **المفتاح:** Einwohnern؛ بعد von يأتي جمع Dativ: Einwohnern.
- **3.** Ein Modell der Brücke wurde von einer ______ Werkstatt gebaut.
  - **المفتاح:** örtlichen؛ بعد من حرف الجر وأداة المؤنث المفرد في Dativ تأتي الصفة örtlichen.
- **4.** In einem ______ wurden Erinnerungen notiert.
  - **المفتاح:** Gästebuch؛ كلمة einem موجودة قبل الفراغ، لذلك نكتب Gästebuch وحدها دون تكرار الأداة.
- **5.** Viele ______ wurden durch die Ausstellung geführt.
  - **المفتاح:** Schulklassen؛ بعد Viele يأتي جمع الفاعل النحوي: Schulklassen.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-T07

اكتب **معلوم** أو **مجهول**:

1. **Die Gemeinde eröffnete das Museum.**
2. **Das Museum wurde eröffnet.**
3. **Der Stadtrat beschloss den Vorschlag.**
4. **Der Vorschlag wurde beschlossen.**
5. **Das Dorf wurde größer.**
6. **Danach wurde in einer Sitzung über den Vorschlag abgestimmt.**

**نتيجة المراجعة:** ست جمل تميز المعلوم والمجهول الشخصي وغير الشخصي واستعمال wurde بمعنى أصبح.

- **1.** **Die Gemeinde eröffnete das Museum.**
  - **المفتاح:** معلوم؛ eröffnete ماضٍ معلوم فاعله Die Gemeinde ومفعوله das Museum.
- **2.** **Das Museum wurde eröffnet.**
  - **المفتاح:** مجهول؛ wurde eröffnet مبني للمجهول في الماضي وفاعلُه النحوي Das Museum.
- **3.** **Der Stadtrat beschloss den Vorschlag.**
  - **المفتاح:** معلوم؛ beschloss ماضٍ معلوم فاعله Der Stadtrat ومفعوله den Vorschlag.
- **4.** **Der Vorschlag wurde beschlossen.**
  - **المفتاح:** مجهول؛ wurde beschlossen مبني للمجهول في الماضي وفاعلُه النحوي Der Vorschlag.
- **5.** **Das Dorf wurde größer.**
  - **المفتاح:** معلوم؛ wurde größer معلوم بفعل تام بمعنى أصبح أكبر؛ größer صفة مقارنة لا Partizip II.
- **6.** **Danach wurde in einer Sitzung über den Vorschlag abgestimmt.**
  - **المفتاح:** مجهول؛ wurde ... über den Vorschlag abgestimmt مبني للمجهول غير شخصي بلا فاعل اسمي.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [1](https://www.duden.de/rechtschreibung/werden_Vollverb), [ABSTIMMEN](https://www.duden.de/rechtschreibung/abstimmen)

### DL-B1-11-T08

**أ — P01: أربع جمل كتابة فقط**

اكتب خطًا زمنيًا خياليًا في أربع جمل ألمانية:1970 بناء جسر في بلدة سمّها وصرّح بأنها خيالية؛1985 افتتاح مكتبة فيها؛2004 تأسيس مجموعتين للشباب؛2018 ترميم ساحة السوق بواسطة البلدية. استخدم المبني للمجهول في Präteritum ثلاث مرات على الأقل، بينها مفرد وجمع، واذكر السنوات بالترتيب. هذه كتابة فقط دون جهر أو تسجيل، ولا تنسب الوقائع إلى بلدة حقيقية.

**ب — P02: خمس جمل كتابة وجهر**

قدّم معرض Sonnenfeld الخيالي من نص الاستماع في خمس جمل ألمانية مكتوبة ثم اقرأها بصوت واضح بنفسك. اذكر المعلومات الخمس: افتتاح المعرض عن الجسر عام2021 في المتحف؛ جمع صور للمعرض من السكان؛ بناء ورشة محلية نموذج الجسر؛ تدوين ذكريات في دفتر الزوار؛ اصطحاب صفوف مدرسية في جولة عبر المعرض. استعمل المبني للمجهول في Präteritum ثلاث مرات على الأقل، بينها مفرد وجمع، وvon + Dativ للورشة مرة واحدة على الأقل. لا تخترع تاريخًا لبناء الجسر أو أسماء الزوار، ولا يلزم شريك أو تسجيل.

**نتيجة المراجعة:** مهمتا التمرين 8 مفصلتان إلى P01 كتابة فقط (4 جمل) وP02 كتابة وجهر (5 جمل تشمل المعلومات الخمس كلها).

- **1.** 1970 wurde in der fiktiven Gemeinde Morgenhain eine Brücke gebaut.
  - **المفتاح:** 1970 wurde in der fiktiven Gemeinde Morgenhain eine Brücke gebaut.؛ الجملة الأولى في P01 تذكر عام 1970 وبناء جسر في بلدة Morgenhain الموصوفة صراحة بأنها خيالية بصيغة wurde ... gebaut.
- **2.** 1985 wurde dort eine Bibliothek eröffnet.
  - **المفتاح:** 1985 wurde dort eine Bibliothek eröffnet.؛ الجملة الثانية تذكر عام 1985 وافتتاح مكتبة بصيغة المفرد wurde ... eröffnet.
- **3.** 2004 wurden zwei Jugendgruppen gegründet.
  - **المفتاح:** 2004 wurden zwei Jugendgruppen gegründet.؛ الجملة الثالثة تذكر عام 2004 وتأسيس مجموعتين للشباب بصيغة الجمع wurden ... gegründet.
- **4.** 2018 wurde der Marktplatz von der Gemeinde renoviert.
  - **المفتاح:** 2018 wurde der Marktplatz von der Gemeinde renoviert.؛ الجملة الرابعة تذكر عام 2018 وترميم ساحة السوق بواسطة البلدية بصيغة wurde ... von der Gemeinde renoviert.
- **5.** Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet.
  - **المفتاح:** Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet.؛ الجملة الأولى في P02 تذكر افتتاح معرض الجسر القديم عام 2021 في متحف Sonnenfeld بصيغة wurde ... eröffnet.
- **6.** Für die Ausstellung wurden Fotos von Einwohnern gesammelt.
  - **المفتاح:** Für die Ausstellung wurden Fotos von Einwohnern gesammelt.؛ الجملة الثانية تذكر جمع صور للمعرض من السكان بصيغة الجمع wurden ... von Einwohnern gesammelt.
- **7.** Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut.
  - **المفتاح:** Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut.؛ الجملة الثالثة تذكر بناء نموذج الجسر بواسطة ورشة محلية بصيغة المفرد مع المنفذ: wurde von einer örtlichen Werkstatt gebaut.
- **8.** In einem Gästebuch wurden Erinnerungen an die Brücke notiert.
  - **المفتاح:** In einem Gästebuch wurden Erinnerungen an die Brücke notiert.؛ الجملة الرابعة تذكر تدوين ذكريات عن الجسر في دفتر الزوار بصيغة الجمع wurden ... notiert.
- **9.** Viele Schulklassen wurden durch die Ausstellung geführt.
  - **المفتاح:** Viele Schulklassen wurden durch die Ausstellung geführt.؛ الجملة الخامسة تذكر اصطحاب صفوف مدرسية كثيرة عبر المعرض بصيغة الجمع wurden ... geführt.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-11-Q01

اختر صيغة الماضي المناسبة: Die alten Brücken ___ renoviert.

**نتيجة المراجعة:** Brücken جمع، لذلك نستخدم wurden؛ أما werden فيعطي المبني للمجهول في المضارع لا الماضي.

**المفتاح:** wurden

**الربط:** DL-B1-11-T01

- **الخيار 1 — ليس المطلوب:** wurde — wurde للمفرد ولا تطابق الجمع Brücken.
- **الخيار 2 — صحيح:** wurden — wurden تطابق الفاعل النحوي الجمع Die alten Brücken في الماضي.
- **الخيار 3 — ليس المطلوب:** werden — werden صيغة مضارع لا Präteritum المطلوب في السؤال.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-11-Q02

اختر الصيغة الماضية الصحيحة: Das Denkmal ___ im Frühjahr restauriert.

**نتيجة المراجعة:** Denkmal مفرد محايد، لذلك نستخدم wurde في Präteritum، ثم يأتي Partizip II restauriert.

**المفتاح:** wurde

**الربط:** DL-B1-11-T04

- **الخيار 1 — ليس المطلوب:** wurden — wurden للجمع بينما Das Denkmal مفرد محايد.
- **الخيار 2 — صحيح:** wurde — wurde تطابق المفرد المحايد Das Denkmal في Präteritum.
- **الخيار 3 — ليس المطلوب:** wird — wird مضارع لا ماضٍ.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [DENKMAL](https://www.duden.de/rechtschreibung/Denkmal)

### DL-B1-11-Q03

ما صيغة Partizip II الصحيحة للفعل beschließen؟

**نتيجة المراجعة:** Partizip II من beschließen هو beschlossen، مثل: Der Beschluss wurde gefasst / Die Umgestaltung wurde beschlossen.

**المفتاح:** beschlossen

**الربط:** DL-B1-11-T02

- **الخيار 1 — ليس المطلوب:** beschloss — beschloss صيغة Präteritum للمعلوم، وليست Partizip II.
- **الخيار 2 — ليس المطلوب:** beschließt — beschließt صيغة المضارع للمفرد الغائب.
- **الخيار 3 — صحيح:** beschlossen — beschlossen هي Partizip II الصحيحة للفعل القوي beschließen.

**مصادر القاعدة/المعنى:** [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien), [BESCHLIESSEN](https://www.duden.de/rechtschreibung/beschlieszen)

### DL-B1-11-Q04

اختر التحويل السليم: Die Gemeinde eröffnete die Bibliothek im Jahr 1985.

**نتيجة المراجعة:** تصبح Bibliothek المفردة الفاعل النحوي، فنستخدم wurde، ويأتي Partizip II eröffnet في نهاية الجملة.

**المفتاح:** Die Bibliothek wurde im Jahr 1985 eröffnet.

**الربط:** DL-B1-11-T03

- **الخيار 1 — صحيح:** Die Bibliothek wurde im Jahr 1985 eröffnet. — Die Bibliothek تصبح الفاعل المفرد مع wurde، ويأتي Partizip II eröffnet في النهاية.
- **الخيار 2 — ليس المطلوب:** Die Bibliothek wurden im Jahr 1985 eröffnen. — wurden للجمع وeröffnen مصدر، وكلاهما غير صحيح هنا.
- **الخيار 3 — ليس المطلوب:** Die Gemeinde wurde im Jahr 1985 die Bibliothek eröffnet. — أبقت Die Gemeinde مع die Bibliothek دون تحويل نحوي سليم للمفعول إلى فاعل.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-11-Q05

أكمل المبني للمجهول بصيغة von + Dativ الصحيحة: Die Jugendvertretung wurde ___ gegründet.

**نتيجة المراجعة:** بعد von يأتي Dativ؛ وصيغة الجمع هي den Bewohnern.

**المفتاح:** von den Bewohnern

**الربط:** DL-B1-11-T03

- **الخيار 1 — صحيح:** von den Bewohnern — von يطلب Dativ، وجمع Die Bewohner في Dativ هو den Bewohnern.
- **الخيار 2 — ليس المطلوب:** von die Bewohner — die Bewohner في Nominativ/Akkusativ لا Dativ بعد von.
- **الخيار 3 — ليس المطلوب:** von der Bewohner — der Bewohner ليست صيغة Dativ للجمع بعد von.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-11-Q06

أي جملة تستخدم المبني للمجهول؟

**نتيجة المراجعة:** الجملة الأولى معلوم. الثانية مبني للمجهول: wurde + Partizip II. أما wurde größer فتعني أصبح أكبر؛ تلا wurde هنا صفة لا Partizip II.

**المفتاح:** Das Museum wurde eröffnet.

**الربط:** DL-B1-11-T07

- **الخيار 1 — ليس المطلوب:** Die Gemeinde eröffnete das Museum. — eröffnete جملة معلوم في الماضي.
- **الخيار 2 — صحيح:** Das Museum wurde eröffnet. — wurde eröffnet تجمع المساعد wurde مع Partizip II فهي مبني للمجهول.
- **الخيار 3 — ليس المطلوب:** Das Dorf wurde größer. — wurde größer تستعمل werden فعلًا تامًا بمعنى أصبح مع صفة مقارنة، لا مبنيًا للمجهول.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [1](https://www.duden.de/rechtschreibung/werden_Vollverb)

### DL-B1-11-Q07

بحسب الخط الزمني لبلدة Sonnenfeld الخيالية، ما الذي بُني عام 1974؟

**نتيجة المراجعة:** يذكر الخط الزمني أن الجسر القديم فوق النهر بُني عام 1974.

**المفتاح:** الجسر القديم فوق النهر.

**الربط:** DL-B1-11-T05

- **الخيار 1 — صحيح:** الجسر القديم فوق النهر. — ينص الخط الزمني على أن الجسر القديم فوق النهر بُني عام 1974.
- **الخيار 2 — ليس المطلوب:** أرشيف البلدية. — أرشيف البلدية افتُتح عام 1985 لا عام 1974.
- **الخيار 3 — ليس المطلوب:** الساحة الجديدة. — الساحة الجديدة افتُتحت بعد عامين من نقاش 2018، أي عام 2020.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-Q08

ما الموضوع الذي نوقش علنًا في Sonnenfeld عام 2018؟

**نتيجة المراجعة:** في عام 2018 نوقش علنًا اقتراح إعادة تصميم ساحة السوق؛ تأسست ممثلية الشباب عام 2004 وافتُتح الأرشيف عام 1985.

**المفتاح:** اقتراح إعادة تصميم ساحة السوق.

**الربط:** DL-B1-11-T05

- **الخيار 1 — صحيح:** اقتراح إعادة تصميم ساحة السوق. — اقتراح إعادة تصميم ساحة السوق هو الموضوع الذي نوقش علنًا عام 2018.
- **الخيار 2 — ليس المطلوب:** تأسيس ممثلية الشباب. — ممثلية الشباب تأسست عام 2004.
- **الخيار 3 — ليس المطلوب:** افتتاح أرشيف البلدية. — أرشيف البلدية افتُتح عام 1985.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-Q09

اقرأ نص الاستماع: متى افتُتح معرض الجسر القديم؟

**نتيجة المراجعة:** يذكر نص الاستماع المكتوب أن المعرض افتُتح عام 2021؛ لا يلزم تشغيل MP3 للإجابة.

**المفتاح:** عام 2021.

**الربط:** DL-B1-11-T06

- **الخيار 1 — ليس المطلوب:** عام 1985. — عام 1985 يخص الأرشيف/دار الثقافة في نصوص أخرى لا معرض الجسر عام 2021.
- **الخيار 2 — ليس المطلوب:** عام 2018. — عام 2018 يخص مناقشة اقتراح الساحة في الخط الزمني.
- **الخيار 3 — صحيح:** عام 2021. — ينص نص الاستماع على أن المعرض افتُتح عام 2021.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-Q10

من بنى نموذج الجسر في نص الاستماع؟

**نتيجة المراجعة:** بنت ورشة محلية نموذج الجسر. يذكر النص ذلك في المبني للمجهول: Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut.

**المفتاح:** ورشة محلية.

**الربط:** DL-B1-11-T06

- **الخيار 1 — ليس المطلوب:** سكان البلدة. — السكان جُمعت منهم الصور للمعرض، ولم يُذكر أنهم بنوا النموذج.
- **الخيار 2 — صحيح:** ورشة محلية. — ينص الاستماع على أن النموذج بُني بواسطة ورشة محلية: von einer örtlichen Werkstatt.
- **الخيار 3 — ليس المطلوب:** الصفوف المدرسية. — الصفوف المدرسية قيدت في جولة عبر المعرض ولم تبنِ النموذج.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### DL-B1-11-P01

اكتب خطًا زمنيًا خياليًا في أربع جمل ألمانية:1970 بناء جسر في بلدة سمّها وصرّح بأنها خيالية؛1985 افتتاح مكتبة فيها؛2004 تأسيس مجموعتين للشباب؛2018 ترميم ساحة السوق بواسطة البلدية. استخدم المبني للمجهول في Präteritum ثلاث مرات على الأقل، بينها مفرد وجمع، واذكر السنوات بالترتيب. هذه كتابة فقط دون جهر أو تسجيل، ولا تنسب الوقائع إلى بلدة حقيقية.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة فقط دون جهر.

**الربط:** DL-B1-11-T08

- **المعيار taskCompletion:** أربع جمل بالأحداث الأربعة المحددة وسنوات1970/1985/2004/2018، مع بلدة مسماة خيالية؛ كتابة فقط. — يتحقق من أربع جمل بالأحداث الأربعة وسنوات 1970/1985/2004/2018 وبلدة خيالية مسماة؛ الحد 100 حرف والنموذج 204 حروف.
- **المعيار meaningClarity:** الترتيب الزمني والمباني والمجموعتان واضحة، ولا تخلط المعطيات الخيالية بتاريخ بلدة حقيقية. — يضمن وضوح التسلسل الزمني وبقاء البلدة والوقائع خيالية دون خلط بتاريخ حقيقي.
- **المعيار targetSkill:** ثلاث صيغ على الأقل من Vorgangspassiv في Präteritum، مع مفرد وجمع ومطابقة المساعد، وPartizip II في نهاية الإطار الفعلي للجمل الرئيسية. — يركز على ثلاث صيغ Vorgangspassiv على الأقل في Präteritum بين مفرد وجمع مع موقع Partizip II الصحيح؛ تحقق ذاتي لا مصحح آلي.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 100, "speakAloud": false, "audioRequired": false}

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-11-P02

قدّم معرض Sonnenfeld الخيالي من نص الاستماع في خمس جمل ألمانية مكتوبة ثم اقرأها بصوت واضح بنفسك. اذكر المعلومات الخمس: افتتاح المعرض عن الجسر عام2021 في المتحف؛ جمع صور للمعرض من السكان؛ بناء ورشة محلية نموذج الجسر؛ تدوين ذكريات في دفتر الزوار؛ اصطحاب صفوف مدرسية في جولة عبر المعرض. استعمل المبني للمجهول في Präteritum ثلاث مرات على الأقل، بينها مفرد وجمع، وvon + Dativ للورشة مرة واحدة على الأقل. لا تخترع تاريخًا لبناء الجسر أو أسماء الزوار، ولا يلزم شريك أو تسجيل.

**نتيجة المراجعة:** مطابقة T08 ونموذجها؛ كتابة وجهر مع تغطية المعلومات الخمس وروابط T06/T08.

**الربط:** DL-B1-11-T06, DL-B1-11-T08

- **المعيار taskCompletion:** خمس جمل تذكر الافتتاح2021 والصور ونموذج الورشة والذكريات في دفتر الزوار والصفوف المدرسية؛ كتابة ثم جهر. — يطابق الآن مطالب السؤال الخمسة كلها في خمس جمل بدل الاكتفاء بثلاث معلومات؛ الحد 125 حرفًا والنموذج 327 حرفًا مع الجهر.
- **المعيار meaningClarity:** تقديم معلومات المعرض الخيالي كما في النص، لا تغيير افتتاح المعرض إلى بناء الجسر ولا اختراع أزمنة أو أسماء. — يحفظ دقة وقائع المعرض الخيالي فلا يحول افتتاح المعرض عام 2021 إلى تاريخ بناء الجسر.
- **المعيار targetSkill:** ثلاث صيغ على الأقل من المبني للمجهول في Präteritum مع مفرد وجمع؛von + Dativ للورشة، وPartizip II في نهاية الإطار الفعلي للجمل الرئيسية. — يطلب ثلاث صيغ مجهول على الأقل بين مفرد وجمع وvon + Dativ للورشة وموقع Partizip II؛ الجهر إقرار ذاتي بلا تسجيل.

**الدليل المحلي:** {"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 125, "speakAloud": true, "audioRequired": false}

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### timeline-model-01

1970 wurde in der fiktiven Gemeinde Morgenhain eine Brücke gebaut.
1985 wurde dort eine Bibliothek eröffnet.
2004 wurden zwei Jugendgruppen gegründet.
2018 wurde der Marktplatz von der Gemeinde renoviert.

**نتيجة المراجعة:** نموذج مكتوب: 204 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** 1970 wurde in der fiktiven Gemeinde Morgenhain eine Brücke gebaut.
  - الجملة الأولى في P01 تذكر عام 1970 وبناء جسر في بلدة Morgenhain الموصوفة صراحة بأنها خيالية بصيغة wurde ... gebaut.
- **2.** 1985 wurde dort eine Bibliothek eröffnet.
  - الجملة الثانية تذكر عام 1985 وافتتاح مكتبة بصيغة المفرد wurde ... eröffnet.
- **3.** 2004 wurden zwei Jugendgruppen gegründet.
  - الجملة الثالثة تذكر عام 2004 وتأسيس مجموعتين للشباب بصيغة الجمع wurden ... gegründet.
- **4.** 2018 wurde der Marktplatz von der Gemeinde renoviert.
  - الجملة الرابعة تذكر عام 2018 وترميم ساحة السوق بواسطة البلدية بصيغة wurde ... von der Gemeinde renoviert.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### museum-model-01

Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet.
Für die Ausstellung wurden Fotos von Einwohnern gesammelt.
Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut.
In einem Gästebuch wurden Erinnerungen an die Brücke notiert.
Viele Schulklassen wurden durch die Ausstellung geführt.

**نتيجة المراجعة:** نموذج مكتوب: 327 حرفًا عند الجمع بمسافات؛ كل جملة روجعت أدناه دون تصحيح آلي للطالب.

- **1.** Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet.
  - الجملة الأولى في P02 تذكر افتتاح معرض الجسر القديم عام 2021 في متحف Sonnenfeld بصيغة wurde ... eröffnet.
- **2.** Für die Ausstellung wurden Fotos von Einwohnern gesammelt.
  - الجملة الثانية تذكر جمع صور للمعرض من السكان بصيغة الجمع wurden ... von Einwohnern gesammelt.
- **3.** Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut.
  - الجملة الثالثة تذكر بناء نموذج الجسر بواسطة ورشة محلية بصيغة المفرد مع المنفذ: wurde von einer örtlichen Werkstatt gebaut.
- **4.** In einem Gästebuch wurden Erinnerungen an die Brücke notiert.
  - الجملة الرابعة تذكر تدوين ذكريات عن الجسر في دفتر الزوار بصيغة الجمع wurden ... notiert.
- **5.** Viele Schulklassen wurden durch die Ausstellung geführt.
  - الجملة الخامسة تذكر اصطحاب صفوف مدرسية كثيرة عبر المعرض بصيغة الجمع wurden ... geführt.

**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien), [MAIN](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### card-01

- **Das Museum wurde eröffnet.** → افتُتح المتحف.

**نتيجة المراجعة:** نموذج مبني للمجهول للمفرد: Das Museum wurde eröffnet.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv)

### card-02

- **Die Brücken wurden renoviert.** → رُمّمت الجسور.

**نتيجة المراجعة:** نموذج مبني للمجهول للجمع: Die Brücken wurden renoviert.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [PART](https://deutsch.lingolia.com/de/grammatik/verben/partizipien)

### card-03

- **Der Beschluss wurde vom Stadtrat gefasst.** → اتخذ مجلس المدينة القرار.

**نتيجة المراجعة:** نموذج ذكر المنفذ بـvon + Dativ: vom Stadtrat gefasst.


**مصادر القاعدة/المعنى:** [PASSIVE](https://deutsch.lingolia.com/de/grammatik/verben/passiv), [STADTRAT](https://www.duden.de/rechtschreibung/Stadtrat)

### card-04

- **die Abstimmung / die Mehrheit** → التصويت / الأغلبية.

**نتيجة المراجعة:** مراجعة مفردتين مدنيتين محوريتين: die Abstimmung (التصويت) وdie Mehrheit (الأغلبية، لا الإجماع).


**مصادر القاعدة/المعنى:** [ABSTIMMEN](https://www.duden.de/rechtschreibung/abstimmen), [MEHRHEIT](https://www.duden.de/rechtschreibung/Mehrheit)

### DL-B1-11-AUD-PHR-01

Die Epoche, die Epochen. Das Ereignis, die Ereignisse. Die Gemeinde, die Gemeinden. Die Verfassung, die Verfassungen. Der Stadtrat, die Stadträte. Der Beschluss, die Beschlüsse. Die Abstimmung, die Abstimmungen. Die Mehrheit, die Mehrheiten. Die Bürgerin, die Bürgerinnen. Der Bürger, die Bürger. Das Denkmal, die Denkmäler. Die Zeitleiste, die Zeitleisten. Wählen, wählt. Beschließen, beschließt. Gründen, gründet. Einführen, führt ein. Historisch. Demokratisch.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 18 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات المختارة محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Die Epoche, die Epochen.
  - Epoche مؤنث وجمعها Epochen؛ حقبة زمنية، ولا تحدد وحدها قرونًا معينة.
- **2.** Das Ereignis, die Ereignisse.
  - Ereignis محايد وجمعه Ereignisse؛ حدث أو واقعة، وليس بالضرورة حدثًا سياسيًا.
- **3.** Die Gemeinde, die Gemeinden.
  - Gemeinde مؤنث وجمعها Gemeinden؛ بلدة أو بلدية هنا، ولها في الألمانية معانٍ دينية أخرى خارج سياق الدرس.
- **4.** Die Verfassung, die Verfassungen.
  - Verfassung مؤنث وجمعها Verfassungen؛ دستور بالمعنى المدني هنا، ولها معنى الحالة الجسدية/النفسية بلا جمع.
- **5.** Der Stadtrat, die Stadträte.
  - Stadtrat مذكر وجمعه Stadträte بأوملاوت؛ مجلس المدينة هنا، وقد يدل على عضو المجلس.
- **6.** Der Beschluss, die Beschlüsse.
  - Beschluss مذكر وجمعه Beschlüsse بأوملاوت؛ قرار رسمي، ويرتبط بالفعل fassen أو beschließen.
- **7.** Die Abstimmung, die Abstimmungen.
  - Abstimmung مؤنث وجمعها Abstimmungen؛ تصويت هنا، ولها معنى التنسيق والمواءمة في سياقات أخرى.
- **8.** Die Mehrheit, die Mehrheiten.
  - Mehrheit مؤنث وجمعها Mehrheiten؛ أغلبية الأصوات أو المجموعة، وليست إجماعًا.
- **9.** Die Bürgerin, die Bürgerinnen.
  - Bürgerin مؤنث وجمعها Bürgerinnen للمواطنة.
- **10.** Der Bürger, die Bürger.
  - Bürger مذكر وجمعه Bürger للمواطن.
- **11.** Das Denkmal, die Denkmäler.
  - Denkmal محايد وجمعه الشائع Denkmäler؛ نصب تذكاري أو معلم تاريخي.
- **12.** Die Zeitleiste, die Zeitleisten.
  - Zeitleiste مؤنث وجمعها Zeitleisten؛ خط زمني يرتب الأحداث.
- **13.** Wählen, wählt.
  - wählen حاضرُه مع المفرد الغائب wählt وPartizip II gewählt؛ ينتخب أو يختار.
- **14.** Beschließen, beschließt.
  - beschließen فعل قوي حاضرُه beschließt وماضيه beschloss وPartizip II beschlossen؛ يقرر أو يعتمد.
- **15.** Gründen, gründet.
  - gründen حاضرُه gründet مع -e- بعد d وPartizip II gegründet؛ يؤسس.
- **16.** Einführen, führt ein.
  - einführen فعل منفصل حاضرُه führt ein وPartizip II eingeführt؛ يطبق أو يستحدث.
- **17.** Historisch.
  - historisch صفة بمعنى تاريخي في سياق أمثلة محايدة.
- **18.** Demokratisch.
  - demokratisch صفة بمعنى ديمقراطي في سياق لغوي محايد.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-AUD-MODEL-01

Das Museum wurde 1985 eröffnet. Die Brücken wurden renoviert. Der Beschluss wurde vom Stadtrat gefasst. Das Dorf wurde größer.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 4 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات المختارة محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Das Museum wurde 1985 eröffnet.
  - Das Museum فاعل نحوي مفرد، فجاءت wurde ثم الظرف الزمني 1985 وPartizip II eröffnet في النهاية.
- **2.** Die Brücken wurden renoviert.
  - Die Brücken فاعل نحوي جمع، فجاءت wurden وPartizip II renoviert دون ge- لأنه ينتهي بـ-ieren.
- **3.** Der Beschluss wurde vom Stadtrat gefasst.
  - Der Beschluss فاعل نحوي مفرد، وذكر المنفذ بـvom Stadtrat أي von dem Stadtrat في Dativ، وgefasst في النهاية.
- **4.** Das Dorf wurde größer.
  - Das Dorf wurde größer جملة معلوم بفعل تام بمعنى أصبح، وليست مبنيًا للمجهول لأن größer صفة مقارنة لا Partizip II.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-AUD-DLG-01

Wann wurde das alte Kulturhaus eröffnet? Es wurde 1985 eröffnet. Damals wurde dort eine kleine Ausstellung gezeigt. Wurden die Fotos auch im Stadtarchiv gesammelt? Ja. Viele Bilder wurden von Einwohnerinnen und Einwohnern gespendet. Und wann wurde der Jugendrat gegründet? 2004. Die wichtigsten Daten wurden auf einer Zeitleiste zusammengestellt.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 6 وحدة داخل 6 مقطع. الحالة pending والسياسة offer والأصوات المختارة محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Wann wurde das alte Kulturhaus eröffnet?
  - Mira تسأل عن سنة افتتاح Kulturhaus القديم؛ das alte Kulturhaus فاعل نحوي مفرد وeröffnet في النهاية.
- **2.** Es wurde 1985 eröffnet. Damals wurde dort eine kleine Ausstellung gezeigt.
  - أمينة الأرشيف تجيب بـ1985 وتضيف أنه عُرضت هناك آنذاك معرض صغير؛ eine kleine Ausstellung فاعل مفرد لـwurde ... gezeigt.
- **3.** Wurden die Fotos auch im Stadtarchiv gesammelt?
  - سؤال نعم/لا في المجهول يبدأ بـWurden لأن die Fotos جمع؛ يسأل عن جمع الصور في أرشيف المدينة.
- **4.** Ja. Viele Bilder wurden von Einwohnerinnen und Einwohnern gespendet.
  - تأكيد مع ذكر المتبرعين بـvon Einwohnerinnen und Einwohnern في Dativ جمع؛ gespendet تخص صور الحوار لا بالضرورة كل صور الاستماع.
- **5.** Und wann wurde der Jugendrat gegründet?
  - سؤال عن سنة تأسيس Jugendrat المفرد؛ لا يطابق هذا المجلس تلقائيًا Jugendvertretung في نص القراءة رغم اشتراك سنة 2004.
- **6.** 2004. Die wichtigsten Daten wurden auf einer Zeitleiste zusammengestellt.
  - الجواب 2004، ثم wurden ... zusammengestellt لأن die wichtigsten Daten جمع؛ zusammengestellt بادئة منفصلة.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-AUD-READ-01

Die folgende Zeitleiste gehört zur fiktiven Gemeinde Sonnenfeld. Im Jahr 1974 wurde die alte Brücke über den Fluss gebaut. 1985 wurde ein kleines Gemeindearchiv eröffnet. 1996 wurde der Stadtrat neu gewählt. Eine Jugendvertretung wurde 2004 gegründet. Im Jahr 2018 wurde ein Vorschlag zur Neugestaltung des Marktplatzes öffentlich diskutiert. Danach wurde in einer Sitzung über den Vorschlag abgestimmt. Eine Mehrheit stimmte dafür. Zwei Jahre später wurde der neue Platz eröffnet.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 9 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات المختارة محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Die folgende Zeitleiste gehört zur fiktiven Gemeinde Sonnenfeld.
  - افتتاحية معلوم تربط الخط الزمني ببلدة Sonnenfeld الخيالية صراحة.
- **2.** Im Jahr 1974 wurde die alte Brücke über den Fluss gebaut.
  - تقدم الظرف الزمني Im Jahr 1974 ثم wurde والفاعل المفرد die alte Brücke über den Fluss وgebaut في النهاية.
- **3.** 1985 wurde ein kleines Gemeindearchiv eröffnet.
  - عام 1985 افتُتح أرشيف بلدي صغير؛ ein kleines Gemeindearchiv مفرد مع wurde ... eröffnet.
- **4.** 1996 wurde der Stadtrat neu gewählt.
  - عام 1996 انتُخب مجلس المدينة من جديد؛ der Stadtrat مفرد نحويًا فجاءت wurde ... gewählt.
- **5.** Eine Jugendvertretung wurde 2004 gegründet.
  - تأسست ممثلية للشباب عام 2004؛ Eine Jugendvertretung مفرد مع wurde ... gegründet.
- **6.** Im Jahr 2018 wurde ein Vorschlag zur Neugestaltung des Marktplatzes öffentlich diskutiert.
  - عام 2018 نوقش اقتراح لإعادة تصميم ساحة السوق علنًا؛ ein Vorschlag مفرد وdiskutiert بلا ge-.
- **7.** Danach wurde in einer Sitzung über den Vorschlag abgestimmt.
  - بعد ذلك صُوّت في جلسة على الاقتراح؛ مجهول غير شخصي بلا فاعل اسمي، وüber den Vorschlag جار ومجرور مع Akkusativ.
- **8.** Eine Mehrheit stimmte dafür.
  - أغلبية صوتت لصالح الاقتراح؛ جملة معلوم ماضية stimmte dafür وليست مبنيًا للمجهول.
- **9.** Zwei Jahre später wurde der neue Platz eröffnet.
  - بعد عامين افتُتحت الساحة الجديدة؛ الإحالة الزمنية تتبع 2018 فتدل على 2020 داخل تسلسل النص.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

### DL-B1-11-AUD-LST-01

Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet. Für die Ausstellung wurden Fotos von Einwohnern gesammelt. Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut. In einem Gästebuch wurden Erinnerungen an die Brücke notiert. Viele Schulklassen wurden durch die Ausstellung geführt.

**نتيجة المراجعة:** مطابقة نصية فقط؛ 5 وحدة داخل 1 مقطع. الحالة pending والسياسة offer والأصوات المختارة محفوظة؛ لا استماع أو توليد أو اعتماد.

- **1.** Im Museum von Sonnenfeld wurde 2021 eine Ausstellung über die alte Brücke eröffnet.
  - افتُتح عام 2021 في متحف Sonnenfeld معرض عن الجسر القديم؛ التاريخ للمعرض لا لبناء الجسر.
- **2.** Für die Ausstellung wurden Fotos von Einwohnern gesammelt.
  - جُمعت صور للمعرض من السكان؛ Fotos جمع مع wurden ... gesammelt، وvon Einwohnern في Dativ جمع.
- **3.** Ein Modell der Brücke wurde von einer örtlichen Werkstatt gebaut.
  - بُني نموذج للجسر بواسطة ورشة محلية؛ Ein Modell مفرد وvon einer örtlichen Werkstatt يذكر المنفذ بـDativ.
- **4.** In einem Gästebuch wurden Erinnerungen an die Brücke notiert.
  - دُوّنت ذكريات عن الجسر في دفتر زوار؛ Erinnerungen جمع فجاءت wurden ... notiert.
- **5.** Viele Schulklassen wurden durch die Ausstellung geführt.
  - قيدت صفوف مدرسية كثيرة عبر المعرض؛ Viele Schulklassen جمع، وdurch die Ausstellung مسار الجولة لا المنفذ.

**مصادر القاعدة/المعنى:** مراجعة لغوية ومقارنة داخلية بنص الدرس الخيالي.

