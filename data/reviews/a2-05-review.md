# مراجعة CR23 — A2.5: الروتين والتدريب المهني وwenn

رُوجع **A2.5 — الروتين والتدريب المهني وجمل wenn** في **94 وحدة و34 بندًا أو مطلبًا**، مع **9 مراجع:8 صفحات كاملة وجزء محدد من صفحة رسمية**. ضُبط ترتيبwenn المتقدمة والمتأخرة وحدودdann، وأزيل استنتاج غير مسند من القراءة، وفُرق بينam liebsten والتكرار، وحُصرت علاقات التوصيل بمعطيات صريحة. **P01/T08 أربع جمل كتابة فقط**؛ **P02/T07 ثلاث جمل من مواقف معطاة مع الجهر**، بمعايير ونموذجين مطابقين. Q02/Q10→T04 وQ08→T03؛تغير خيارQ05 الصحيح إلى«فنّي إلكترونيات» مع حفظ29 خيارًا وفهارس المفاتيح و80%. الإصدار `a2-05-v2` والمخزن `v70`. خمسة أصول/10 مقاطع دون تغيير أو توليد أو استماع أو اعتماد جديد. **الحملة22/53 درسًا والبوابة منفصلة؛تبقى31 درسًا،والتاليCR24/A2.6.** لا شهادة مستوى أو إعلان دمج.

## الملفات والرفع والخطوة التالية

- `content/A2/lesson-05-training-routine-wenn.md/.assessment.json` و`data/course.json`،و20 صفًا في`data/production-task-catalog.csv` وخمسة صفوف مرجعية فقط في`data/audio-asset-register.csv`.
- `service-worker.js` و`tools/test_service_worker.cjs` و`tools/test_accessibility_update.cjs`،وتوسعة`test_progression.cjs` و`test_accessibility_audit.cjs`،والحارس`tools/test_a2_05_review.py`.
- `data/reviews/a2-05-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.29 وتقرير المتصفح وملفا التسليم. لا تغييرplaylist أوMP3 أوapp.js أوCSS.
- التنفيذ **00580af492ccdab9440fb5b231884efc22ea3035** رُفع وتطابق معorigin. دفعة السجل بعنوان `Record CR23 granular A2.5 review and cumulative checks`؛معرفها فيgit log بعد الدفع،ثم يسجل إيصالها.
- الفرع الوحيد`arena/01a1036f-deutschlern`؛لا تبديل أو دمجPR#1. استردادmetadata عند البداية تم بعد تطابق689 ملفًا وصفر إضافات،لاreset أعمى أو حذف عمل.
- قيدVercel السابق حد معدل النشر مع طلب24ساعة؛لا إعادة نشر متكررة أو ترقية مدفوعة. يستمر رفعGitHub،ولا تُنسب إشارة نشر قديمة إلى هذه الدفعة أو يُدعى اختبار واجهة بعيدة.
- التالي **CR24/A2.6 — الأسرة والسعادة والهدايا**: راجع كل نص ودور وتمرين وتقييم بالمراجع. احفظMariam02/Sami03 ولا تعد توليد الموجود؛لا حاجة إلى تكرار إيصالCR23 قبل الاستمرار.
- القرارات مستمرة:كل تعديل يُرفع فور فحص مجموعته؛المحتوى والتقييم والتطبيق قبل الصوت؛لا مراجع بشري شرطًا للمتابعة. لا إعادة توليد أو إخفاء أو تغيير صوت أوready/نهائي بلا موافقة؛حد10طلبات صوت/رد. B1.9/B1.10 معلقان واختيارB1.11 محفوظ. احفظA2.7Q08→T05 واتساقA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

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

## المنهج والمراجع وحدود القراءة

مراجعة نصية للمساعد، مع مصادر وفحوص؛ليست شهادة لغة أو اعتمادًا صوتيًا. روجع كل نص ودور وتمرين ومفتاح ومشتت ومعيار. النصوص والبصمات في [JSON](a2-05-review.json). المراجع تدعم النقاط المحددة ولا تعني أن كل كلمة مدققة من ناشر خارجي. لا ننقل تعميمًا مرجعيًا دون تقييد أو نفرض مراجعة بشرية لاحقة شرطًا للمتابعة.

1. **WENN — [Duden — wenn](https://www.duden.de/rechtschreibung/wenn)**: شرط ووقت وتكرار بحسب السياق، ووجود dann الاختيارية؛لا ننقل بقية الاستعمالات المتقدمة إلى التدريب.
2. **END — [Duden — Feierabend](https://www.duden.de/rechtschreibung/Feierabend)**: نهاية العمل ووقت الفراغ بعدها؛جمع Feierabende، لا ساعة مساء ثابتة.
3. **PREP — [Duden — vorbereiten](https://www.duden.de/rechtschreibung/vorbereiten)**: الاستعداد لـauf/für وصيغ bereitet vor؛في الدرس استعمال انعكاسي مع auf.
4. **PREFER — [Duden — gern](https://www.duden.de/rechtschreibung/gern)**: درجات gern/lieber/am liebsten؛التفضيل ليس مرادفًا للتكرار.
5. **JOB — [Duden — Elektroniker](https://www.duden.de/rechtschreibung/Elektroniker)**: فني في مجال الإلكترونيات وجمع Elektroniker؛لا نحوله إلى اسم عام لكل كهربائي.
6. **MAIN — [Lingolia — Hauptsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)**: الفعل المصرف ثاني مكون؛يمكن تقديم ظرف أو مكون آخر؛لا نعتمد كل تبسيط متقدم عن ترتيب المفاعيل على أنه مطلق.
7. **SUB — [Lingolia — Nebensätze](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze)**: فاصلة وفعل تابع في النهاية في النمط البسيط؛التابعة المتقدمة تشغل موقعًا كاملًا، لا كلمة واحدة.
8. **COND — [Lingolia — Konditionalsätze](https://deutsch.lingolia.com/de/grammatik/satzbau/konditionalsaetze)**: الجزآن كاملان؛الشرط الممكن بالحاضر والتقديم والتأخير، والفرق بين wenn وnur wenn. مقدمة الصفحة تبسط الشرط بلفظ nur؛لا ننقلها كدليل على العكس المنطقي، وقسم القيود يميز nur wenn صراحة.
9. **DUAL — [Die Duale — Eine duale Berufsausbildung](https://www.die-duale.de/DE/duale-ausbildung/eine-duale-berufsausbildung/eine-duale-berufsausbildung_node.html)**: قُرئ الجزء0 من16 فقط: المقدمة تصف تعدد أشكال التدريب ومؤسستي التعلم في النمط المزدوج. لا ادعاء قراءة الصفحة الكاملة أو مراجعة قانونية أو نقل النسب/الإحصاءات إلى درس اللغة.

تاريخ القراءة2026-10-08. ثماني صفحات كاملة،منها جزآKonditionalsätze؛أماDie Duale فقُرئ الجزء0 من16 فقط،بما فيه المقدمة ذات الصلة. لا ادعاء قراءة بقية الصفحة أو نص قانوني كامل. رابطاLingolia الفرعي الخاطئ وMake-it-in-Germany أعادا404 واستُبعدا؛البحث الاستكشافي ليس مراجع إضافية مقروءة.

## الوحدات الفردية —94

### scope-01

**النص:** # A2.5 — الروتين والتدريب المهني وجمل wenn

موضوع تدريب وروتين وربط شرط/وقت؛ليس دليل قبول مهني.

**المراجع الداعمة:** WENN, MAIN, SUB, COND.

### scope-02

**النص:** **المدة:** نحو 35–40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** قراءة، كتابة، قواعد، وصف جدول، كلام، واستماع اختياري

المدة تقديرية والمهارات تشمل الكتابة والكلام؛الاستماع فرصة اختيارية وليس شرط تقييم.

**المراجع الداعمة:** WENN, MAIN, SUB, COND.

### scope-03

**النص:** **الهدف:** أستطيع أن أصف يومي الدراسي أو المهني، وأربط نشاطًا بشرط أو وقت متكرر.

الهدف وصف الروتين وربط نشاط بشرط أو وقت؛يُدرّب بالنمطين الكتابي والمنطوق.

**المراجع الداعمة:** WENN, MAIN, SUB, COND.

### scope-04

**النص:** تُستخدم **wenn** للشرط بمعنى «إذا»، أو للوقت بمعنى «عندما/كلما» بحسب السياق. نركز هنا على الروتين والشرط الممكن بصيغة الحاضر؛ليست كل جملة wenn تكرارًا، فقد تتعلق بوقت آتٍ. ليست wenn سؤال «متى؟» الذي نصوغه بـ wann، ولا نترجمها دائمًا «لأن». في الجمل البسيطة المدروسة يأتي الفعل المصرف في نهاية الجزء التابع:

wenn شرط أو وقت، وليس كل استعمال تكرارًا ولا هو سؤال wann؛الحاضر هنا لا يثبت وقوع النشاط.

**المراجع الداعمة:** WENN, MAIN, SUB, COND.

### scope-05

**النص:** نضع فاصلة بين التابعة والرئيسية. في النمط المدروس **دون dann**: إذا بدأت الجملة بـ wenn تشغل التابعة الموقع الأول، فيأتي الفعل المصرف بعدها ثم الفاعل: **Wenn ich Zeit habe, lerne ich.** الموقع هنا مكوّن نحوي لا الكلمة الثانية. ويصح أيضًا **Wenn ich Zeit habe, dann lerne ich.**؛لا نعد dann خطأ، لكننا لا نضيفها في تمارين الترتيب المحددة.

الموقع الثاني مكون؛قُيد قلب الرئيسية بالنمط دون dann مع الاعتراف بصحة dann lerne ich.

**المراجع الداعمة:** WENN, MAIN, SUB, COND.

### scope-06

**النص:** إذا جاءت wenn بعد الرئيسية، لا نقلب ترتيب الرئيسية: **Ich lerne, wenn ich Zeit habe.** الفعل habe في نهاية التابعة في الحالتين. الشرط لا يعني «فقط إذا»: قول Rami إنه يلعب عند توفر الوقت لا يثبت وحده أنه لا يلعب في أي ظرف آخر، ولا أنه لعب فعلًا في سبت معين.

عند تأخر التابعة تبقى الرئيسية بترتيبها؛الشرط وحده ليس «فقط إذا» ولا يثبت وقوع حدث معين.

**المراجع الداعمة:** WENN, MAIN, SUB, COND.

### scope-07

**النص:** النموذجان نصيان ولا يستبدلان مقطع الأمثلة الموجود. قارن الوظائف والفاصلة وتصريف الفعل وموقعه، ثم سجّل تحققك الذاتي؛لا يعد ذلك تصحيحًا آليًا للغة أو النطق.

النموذجان النصيان لا يستبدلان الصوت، والتحقق الذاتي لا يصحح اللغة أو النطق آليًا.

**المراجع الداعمة:** WENN, MAIN, SUB, COND.

### vocab-01

**النص:** | die Ausbildung | die Ausbildungen | التكوين/التدريب المهني |

Ausbildung مؤنث وجمع Ausbildungen؛التكوين المهني هو المقصود لا شكل تدريب وحيد عالميًا.

**المراجع الداعمة:** DUAL.

### vocab-02

**النص:** | der Betrieb | die Betriebe | مكان العمل/المؤسسة |

Betrieb مذكر وجمع Betriebe؛مؤسسة التدريب في السياق، لا مكان عمل فعلي للمتعلم.

**المراجع الداعمة:** DUAL.

### vocab-03

**النص:** | die Berufsschule | die Berufsschulen | المدرسة المهنية |

Berufsschule مدرسة مهنية؛واحدة من مؤسستي التعلم في المثال، لا جامعة.

**المراجع الداعمة:** DUAL.

### vocab-04

**النص:** | der Stundenplan | die Stundenpläne | جدول الدروس |

Stundenplan مذكر وجمع Stundenpläne؛جدول حصص لا تذكرة نقل.

### vocab-05

**النص:** | die Prüfung | die Prüfungen | الامتحان |

Prüfung امتحان/اختبار، جمع Prüfungen؛لا نفترض أنه دائمًا في نهاية الفصل.

### vocab-06

**النص:** | das Fach | die Fächer | المادة الدراسية |

Fach محايد وجمع Fächer؛المادة الدراسية هنا لا كل معاني الكلمة.

### vocab-07

**النص:** | der Feierabend | die Feierabende | نهاية الدوام / وقت الفراغ بعده |

أضيف Feierabende والمعنيان: نهاية الدوام ووقت الفراغ بعدها؛ليس يوم عطلة أسبوعية.

**المراجع الداعمة:** END.

### vocab-08

**النص:** | pünktlich | — | في الموعد |

pünktlich في الموعد، لا بالضرورة früh مبكرًا.

### vocab-09

**النص:** | praktisch / theoretisch | — | عملي / نظري |

praktisch/theoretisch عملي/نظري؛قد يجتمعان ولا نربط أحدهما حصرًا بكل مؤسسة.

### vocab-10

**النص:** | üben | übt | يتدرّب |

üben يتدرب/يتمرن، وصيغته übt؛لا إثبات إتقان من مجرد وقت التدريب.

### vocab-11

**النص:** | sich vorbereiten auf + Akkusativ | bereitet sich vor | يستعدّ لـ |

sich vorbereiten auf مع Akkusativ؛الضمير يتغير بحسب الفاعل وvor تنفصل في الرئيسية.

**المراجع الداعمة:** PREP.

### vocab-12

**النص:** | der Elektroniker / die Elektronikerin | die Elektroniker / die Elektronikerinnen | فنّي/فنّية إلكترونيات |

صُحح المعنى إلى فني/فنية إلكترونيات وأضيف الجمعان؛لا ادعاء أن Rami حصل على المؤهل بعد.

**المراجع الداعمة:** JOB.

### grammar-01

**النص:** **Ich lerne, wenn ich Zeit habe.** — أدرس عندما يكون لدي وقت.

الرئيسية تسبق wenn؛habe في نهاية التابعة ولا قلب لـIch lerne.

**المراجع الداعمة:** WENN, SUB, MAIN.

### grammar-02

**النص:** **Wenn ich Zeit habe, lerne ich eine Stunde.** — إذا كان لدي وقت، أدرس ساعة.

التابعة أولًا، يليها lerne ثم ich؛eine Stunde مدة الدراسة لا ساعة بدايتها.

**المراجع الداعمة:** WENN, SUB, MAIN.

### grammar-03

**النص:** **Wenn der Unterricht endet, fährt Rami nach Hause.** — عندما ينتهي الدرس، يذهب رامي إلى البيت.

endet مفرد مع Unterricht، وfährt مفرد مع Rami؛نقل النشاط مرتبط بانتهاء الدرس.

**المراجع الداعمة:** WENN, SUB, MAIN.

### audio-model-01

**النص:** **Wenn Rami am Samstag Zeit hat, spielt er Fußball.** — إذا توفر وقت لرامي يوم السبت يلعب كرة القدم؛hat مفرد مع Rami.

نص المثال المسجل الكامل أضيف كما هو؛hat يناسب Rami واللعب مشروط بوقت السبت.

**المراجع الداعمة:** WENN, COND.

### audio-model-02

**النص:** **Wenn der Unterricht um drei Uhr endet, fahre ich nach Hause.** — عندما/إذا ينتهي الدرس عند الثالثة أعود إلى البيت؛نحافظ على قيد wenn ولا نستنتج وقت نهاية كل الدروس.

المثال المسجل محفوظ؛نهاية الدرس عند الثالثة قيد في wenn لا تقرير لوقت كل درس.

**المراجع الداعمة:** WENN, COND.

### helper-01

**النص:** **Ausbildung / Betrieb / Berufsschule** — تدريب مهني / مؤسسة تدريب أو عمل / مدرسة مهنية. المثال قريب من التدريب المزدوج في ألمانيا الذي يجمع المؤسسة والمدرسة، لكنه ليس الشكل الوحيد للتدريب. توزيع ثلاثة أيام ويومين يخص Rami في النص، لا قاعدة لكل متدرب أو بلد.

التوزيع ثلاثة أيام/يومان يخص Rami؛المصدر الرسمي يثبت وجود مؤسستي تعلم لا هذا الجدول لكل متدرب.

**المراجع الداعمة:** DUAL, END, PREFER, PREP, WENN, SUB.

### helper-02

**النص:** **Feierabend / frei haben / Freizeit** — نهاية العمل أو وقت الفراغ بعدها / لا دوام لديه / وقت فراغ. Feierabend لا يلزم أن يبدأ مساءً بساعة ثابتة، ولا هو نهاية عطلة نهاية الأسبوع.

تمييز Feierabend ووقت الفراغ وfrei haben؛لا ساعة نهاية عمل ثابتة.

**المراجع الداعمة:** DUAL, END, PREFER, PREP, WENN, SUB.

### helper-03

**النص:** **gern / lieber / am liebsten** — يحب / يفضّل / يفضّل أكثر. **Er lernt am liebsten in der Bibliothek.** يحدد المكان المفضّل، لا عدد مرات الدراسة فيه. **Dort ist es ruhig.** هادئ هناك، لا صاخب.

am liebsten يحدد المفضل لا الأكثر تكرارًا؛Dort يعود إلى المكتبة وruhig هادئ.

**المراجع الداعمة:** DUAL, END, PREFER, PREP, WENN, SUB.

### helper-04

**النص:** **Sich auf eine Prüfung vorbereiten.** — الاستعداد لامتحان. نقول **Ich bereite mich auf eine Prüfung vor.**؛mich مع ich و sich مع er/sie، وينفصل vor في هذه الرئيسية. بعد auf هنا Akkusativ. وفي الجدول **Praktisch und theoretisch** تعني عملي ونظري، لا أنهما لا يجتمعان في التعلم.

عبارة PHR الانعكاسية صارت كاملة في المصدر؛mich مع ich وauf eine Prüfung في النمط المدروس.

**المراجع الداعمة:** DUAL, END, PREFER, PREP, WENN, SUB.

### helper-05

**النص:** **Wie sieht deine Woche aus? / Wann lernst du? / früh / pünktlich** — كيف يبدو أسبوعك؟ / متى تدرس؟ / مبكرًا / في الموعد. سؤال wann يطلب وقتًا؛الجواب بـ wenn قد يربط النشاط بتوفر الوقت بدل إعطاء ساعة ثابتة.

Wann سؤال وقت وwenn يربط شرطًا أو حدثًا؛früh ليس pünktlich.

**المراجع الداعمة:** DUAL, END, PREFER, PREP, WENN, SUB.

### helper-06

**النص:** **die Aufgaben / die Notizen / wiederholen / noch Energie haben** — الواجبات أو المهام / الملاحظات / يراجع أو يكرر / تبقى لديه طاقة. **Wenn ich am Abend noch Energie habe, wiederhole ich meine Notizen.** فيها habe في التابعة و wiederhole في الرئيسية؛Energie اسم لا فعل.

Notizen ملاحظات وAufgaben واجبات/مهام؛habe تابع وwiederhole رئيسي وEnergie اسم.

**المراجع الداعمة:** DUAL, END, PREFER, PREP, WENN, SUB.

### helper-07

**النص:** **حدود النصوص:** الحوار والقراءة عن Rami؛التدرب مع صديق واللعب يوم السبت لا يتناقضان لعدم تحديد ساعة واحدة. الاستماع لا يسمي صاحبه، وجدوله مختلف؛sie في السؤال تتبع die Person نحويًا، لا دليل جنس. و Rami في بيانات صوت القراءة اسم الراوي، مع بقاء النص بضمير الغائب.

لا تعارض لازم بين التدريب والكرة في السبت؛جدول الاستماع مستقل وهويته غير مسماة.

**المراجع الداعمة:** DUAL, END, PREFER, PREP, WENN, SUB.

### helper-08

**النص:** **طريقة العمل:** P01 أربع جمل كتابة فقط من بيانات خيالية؛P02 ثلاث جمل تربط المواقف المعطاة وتُقرأ جهرًا. لا شريك أو تسجيل أو تدريب مهني فعلي مطلوب. جرّب الاستماع قبل فتح التفريغ؛قراءته لا تثبت فهمًا مسموعًا مستقلًا، والطول والإقرار لا يصححان اللغة أو النطق.

P01 كتابة وP02 مع الجهر؛كشف التفريغ لا يثبت الاستماع المستقل، ولا تسجيل مطلوب.

**المراجع الداعمة:** DUAL, END, PREFER, PREP, WENN, SUB.

### dialogue-01

**النص:** Wie sieht deine Woche aus, Rami?

سؤال عن شكل أسبوع Rami؛sieht…aus منفصل، وليس سؤال الساعة فقط.

**المراجع الداعمة:** JOB, WENN, DUAL.

### dialogue-02

**النص:** Ich mache eine Ausbildung zum Elektroniker. Montag bis Mittwoch bin ich im Betrieb. Am Donnerstag und Freitag habe ich Unterricht in der Berufsschule.

تدريب إلكترونيات؛الاثنين إلى الأربعاء بالمؤسسة والخميس والجمعة بالمدرسة، لا نظام إلزامي عام.

**المراجع الداعمة:** JOB, WENN, DUAL.

### dialogue-03

**النص:** Wann lernst du für Prüfungen?

Wann سؤال عن وقت التحضير للامتحانات؛ليس سؤالًا عن تاريخ امتحان محدد.

**المراجع الداعمة:** JOB, WENN, DUAL.

### dialogue-04

**النص:** Wenn ich am Abend Zeit habe, lerne ich eine Stunde. Am Samstag übe ich mit einem Freund.

الدراسة ساعة إذا توفر وقت مساءً؛التدرب مع صديق السبت غير مؤقت بالساعة ولا يحدد نوع التدريب.

**المراجع الداعمة:** JOB, WENN, DUAL.

### dialogue-05

**النص:** Und was machst du nach dem Unterricht?

سؤال النشاط بعد الدروس؛لا سؤال مكان التدريب المهني.

**المراجع الداعمة:** JOB, WENN, DUAL.

### dialogue-06

**النص:** Wenn der Unterricht früh endet, gehe ich in die Bibliothek.

إذا انتهى الدرس مبكرًا يذهب للمكتبة؛لا يلزم الذهاب كل يوم أو نهاية مبكرة دائمة.

**المراجع الداعمة:** JOB, WENN, DUAL.

### reading-01

**النص:** Rami macht eine Ausbildung zum Elektroniker.

يتدرب ليصبح Elektroniker؛لا يقول النص إنه فني مؤهل بالفعل.

**المراجع الداعمة:** WENN, PREFER, JOB, DUAL.

### reading-02

**النص:** Er arbeitet drei Tage pro Woche in einem Betrieb und hat an zwei Tagen Unterricht in der Berufsschule.

ثلاثة أيام عمل ويومان مدرسة؛يدعم Q06 مباشرة، ولا أسماء أيام هنا.

**المراجع الداعمة:** WENN, PREFER, JOB, DUAL.

### reading-03

**النص:** Wenn er am Morgen Unterricht hat, fährt er mit dem Bus.

الحافلة عند دروس الصباح؛لا حصر كل تنقله في الحافلة.

**المراجع الداعمة:** WENN, PREFER, JOB, DUAL.

### reading-04

**النص:** Nach dem Unterricht macht er seine Aufgaben.

واجبات/مهام بعد الدروس؛لا تصريح بمكان أدائها في هذه الجملة.

**المراجع الداعمة:** WENN, PREFER, JOB, DUAL.

### reading-05

**النص:** Er lernt am liebsten in der Bibliothek.

المكتبة المكان المفضل am liebsten؛أُصلح شرح Q07 الذي قال «غالبًا».

**المراجع الداعمة:** WENN, PREFER, JOB, DUAL.

### reading-06

**النص:** Dort ist es ruhig.

Dort المكتبة وruhig هادئ؛دليل صريح لبند T05.4 الجديد.

**المراجع الداعمة:** WENN, PREFER, JOB, DUAL.

### reading-07

**النص:** Wenn er am Samstag Zeit hat, spielt er Fußball.

الكرة إذا توفر وقت السبت؛لا نستنتج نفيها عند كل ظرف آخر أو وقوعها سبتًا بعينه.

**المراجع الداعمة:** WENN, PREFER, JOB, DUAL.

### reading-question-01

**النص:** Welche Ausbildung macht Rami?

Eine Ausbildung zum Elektroniker؛اسم التدريب وارد صراحة.

### reading-question-02

**النص:** Wie viele Tage pro Woche arbeitet er im Betrieb?

Drei Tage؛لا تخلط أيام المؤسسة بيومي المدرسة.

### reading-question-03

**النص:** Was macht er, wenn er am Morgen Unterricht hat?

Er fährt mit dem Bus؛مع الحفاظ على قيد دروس الصباح في السؤال.

### reading-question-04

**النص:** Wo lernt er am liebsten?

In der Bibliothek؛يسأل عن المكان المفضل لا عدد المرات.

### reading-question-05

**النص:** Was macht er, wenn er am Samstag Zeit hat?

Er spielt Fußball؛الجواب تابع للشرط الموجود في السؤال لا قاعدة غير مشروطة.

### listening-01

**النص:** Mein Stundenplan ist diese Woche voll.

جدول مزدحم هذا الأسبوع، لا كل الأسابيع ولا يوم بلا راحة.

**المراجع الداعمة:** WENN, SUB.

### listening-02

**النص:** Am Montag und Dienstag habe ich Unterricht.

دروس الاثنين والثلاثاء؛جدول شخص غير مسمى لا جدول Rami السابق.

**المراجع الداعمة:** WENN, SUB.

### listening-03

**النص:** Wenn der Unterricht um drei Uhr endet, fahre ich nach Hause und mache eine Pause.

إذا/عندما انتهى الدرس الثالثة يرجع ويستريح؛فعلان رئيسيان بعد قيد واحد، لا وقت نهاية مؤكد لكل الدروس.

**المراجع الداعمة:** WENN, SUB.

### listening-04

**النص:** Am Mittwoch arbeite ich im Betrieb.

الأربعاء عمل بالمؤسسة؛لا يذكر جدول بقية الأيام.

**المراجع الداعمة:** WENN, SUB.

### listening-05

**النص:** Wenn ich am Abend noch Energie habe, wiederhole ich meine Notizen.

يراجع الملاحظات مساءً عند بقاء طاقة؛ليس تأكيدًا للمراجعة في كل مساء.

**المراجع الداعمة:** WENN, SUB.

### listening-question-01

**النص:** An welchen Tagen hat die Person Unterricht?

Am Montag und Dienstag؛المقصود صاحبة/صاحب الجدول غير المسمى، لا افتراض الهوية.

### listening-question-02

**النص:** Wann fährt sie nach Hause?

Wenn der Unterricht um drei Uhr endet؛لا نحذف القيد لنعطي موعدًا عامًا قطعيًا.

### listening-question-03

**النص:** Was macht sie, wenn sie noch Energie hat?

Sie wiederholt ihre Notizen؛sie تتبع Person، والمراجعة تحت شرط الطاقة.

### writing-model-01

**النص:** Am Montag arbeite ich im Betrieb.

العمل بالمؤسسة يوم الاثنين؛arbeite بعد ظرف الوقت ثم ich.

**المراجع الداعمة:** MAIN, SUB, WENN.

### writing-model-02

**النص:** Am Dienstag habe ich Unterricht in der Berufsschule.

دراسة الثلاثاء بالمدرسة المهنية؛habe Unterricht لا arbeitet Unterricht.

**المراجع الداعمة:** MAIN, SUB, WENN.

### writing-model-03

**النص:** Wenn ich am Abend Zeit habe, lerne ich Deutsch.

Wenn أولًا وhabe آخر التابعة، ثم lerne ich؛قيد الوقت مساءً حاضر.

**المراجع الداعمة:** MAIN, SUB, WENN.

### writing-model-04

**النص:** Ich mache eine Pause, wenn ich müde bin.

الرئيسية أولًا: Ich mache، ثم wenn…bin؛لا نقلب الرئيسية السابقة للتابعة.

**المراجع الداعمة:** MAIN, SUB, WENN.

### speaking-model-01

**النص:** Wenn ich frei habe, besuche ich meine Familie.

يربط الفراغ بزيارة الأسرة بحسب الخطة؛habe ثم besuche ich.

**المراجع الداعمة:** MAIN, SUB, WENN.

### speaking-model-02

**النص:** Wenn der Bus zu spät kommt, nehme ich einen späteren Zug.

يربط تأخر الحافلة بقطار لاحق؛تعليمات السيناريو تحصر هذه العلاقة دون ادعاء عمومها.

**المراجع الداعمة:** MAIN, SUB, WENN.

### speaking-model-03

**النص:** Ich mache eine Pause, wenn ich lange lerne.

الرئيسية تسبق wenn؛lerne آخر التابعة، ولا ich mache بعد الفاصلة.

**المراجع الداعمة:** MAIN, SUB, WENN.

### card-01

**النص:** **Wenn ich Zeit habe, lerne ich.** → إذا كان لدي وقت، أدرس.

Wenn الشرطية مع الفعل الأخير ثم lerne ich؛لا يلزم وقوع الدراسة فعلًا.

**المراجع الداعمة:** WENN, SUB.

### card-02

**النص:** **Ich übe, wenn der Unterricht endet.** → أتدرّب عندما ينتهي الدرس.

Ich übe رئيسية تسبق التابعة؛نهاية الدرس تحدد وقت التدريب في المثال.

**المراجع الداعمة:** WENN, SUB.

### card-03

**النص:** **die Berufsschule** → المدرسة المهنية.

Berufsschule اسم مؤنث للمدرسة المهنية؛لا تنقل شروط قبول غير مذكورة.

**المراجع الداعمة:** WENN, SUB.

### card-04

**النص:** **die Prüfung** → الامتحان.

Prüfung الامتحان؛لا معنى الإقامة أو مكان العمل.

**المراجع الداعمة:** WENN, SUB.

### DL-A2-05-T01

**النص:** 1. مكان التدريب العملي: **der Betrieb / das Geschenk**
2. جدول الحصص: **der Stundenplan / die Fahrkarte**
3. مكان الدروس النظرية والمهنية: **die Berufsschule / die Bäckerei**
4. اختبار لتقييم المعرفة أو المهارة: **die Prüfung / die Unterkunft**

كل بند ومفتاحه ودليله أو ترتيب كلماته مراجع في items.

- **1. مكان التدريب العملي: **der Betrieb / das Geschenk**** — الجواب: der Betrieb. المؤسسة موضع التدريب؛Geschenk هدية.
- **2. جدول الحصص: **der Stundenplan / die Fahrkarte**** — الجواب: der Stundenplan. جدول حصص لا تذكرة نقل.
- **3. مكان الدروس النظرية والمهنية: **die Berufsschule / die Bäckerei**** — الجواب: die Berufsschule. مدرسة مهنية لا مخبز؛لا ندعي انعدام التدريب العملي في المدرسة.
- **4. اختبار لتقييم المعرفة أو المهارة: **die Prüfung / die Unterkunft**** — الجواب: die Prüfung. استبدلت عبارة نهاية الفصل بتعريف الاختبار، لتجنب تعميم موعد الامتحان.

### DL-A2-05-T02

**النص:** 1. ______ ich müde bin, mache ich eine Pause.
2. Ich übe Deutsch, ______ ich Freizeit habe.
3. ______ der Unterricht beginnt, sind alle pünktlich.

كل بند ومفتاحه ودليله أو ترتيب كلماته مراجع في items.

**المراجع الداعمة:** WENN, SUB.

- **1. ______ ich müde bin, mache ich eine Pause.** — الجواب: Wenn. بداية الجملة Wenn كبيرة، وbin آخر التابعة.
- **2. Ich übe Deutsch, ______ ich Freizeit habe.** — الجواب: wenn. wenn وسط الجملة صغيرة، مع بقاء Ich übe.
- **3. ______ der Unterricht beginnt, sind alle pünktlich.** — الجواب: Wenn. Wenn قبل التابعة؛مثال افتراضي عن الانضباط لا حقيقة عن كل المتعلمين.

### DL-A2-05-T03

**النص:** 1. Wenn Rami am Samstag Zeit ______, spielt er Fußball. (haben)
2. Mira lernt, wenn sie zu Hause ______. (sein)
3. Wenn der Unterricht ______, fahren die Lernenden nach Hause. (enden)
4. في Wenn ich am Abend noch Energie habe, wiederhole ich meine Notizen، ما الفعل المصرف في نهاية جزء wenn؟

كل بند ومفتاحه ودليله أو ترتيب كلماته مراجع في items.

**المراجع الداعمة:** WENN, SUB.

- **1. Wenn Rami am Samstag Zeit ______, spielt er Fußball. (haben)** — الجواب: hat. haben مع Rami يصبح hat.
- **2. Mira lernt, wenn sie zu Hause ______. (sein)** — الجواب: ist. sein مع sie يصبح ist.
- **3. Wenn der Unterricht ______, fahren die Lernenden nach Hause. (enden)** — الجواب: endet. enden مع Unterricht يصبح endet؛الجمع في الرئيسية لا يغيره.
- **4. في Wenn ich am Abend noch Energie habe, wiederhole ich meine Notizen، ما الفعل المصرف في نهاية جزء wenn؟** — الجواب: habe. habe فعل التابعة، لا wiederhole الرئيسية أو Energie الاسم؛يدعم Q08.

### DL-A2-05-T04

**النص:** استعمل كل كتلة مرة، وأضف الفاصلة والنقطة وحرف البداية الكبير. ابدأ بـ Wenn في 1–2، وبـ Ich في 3؛لا تضف dann في هذا التمرين:

1. wenn / ich / Zeit / habe / lerne / ich / Deutsch
2. der Unterricht / wenn / endet / fährt / Rami / nach Hause
3. wenn / Zeit / ich / lerne / ich / habe / Deutsch

كل بند ومفتاحه ودليله أو ترتيب كلماته مراجع في items.

**المراجع الداعمة:** WENN, SUB.

- **1. wenn / ich / Zeit / habe / lerne / ich / Deutsch** — الجواب: Wenn ich Zeit habe, lerne ich Deutsch.. حُدد البدء بـWenn فلا نتجاهل إمكان ترتيب آخر في مهمة مختلفة.
- **2. der Unterricht / wenn / endet / fährt / Rami / nach Hause** — الجواب: Wenn der Unterricht endet, fährt Rami nach Hause.. Wenn أولًا؛فعل التابعة endet والرئيسية fährt Rami.
- **3. wenn / Zeit / ich / lerne / ich / habe / Deutsch** — الجواب: Ich lerne Deutsch, wenn ich Zeit habe.. Ich أولًا؛تدريب حقيقي على تأخير wenn يوافق P01.

### DL-A2-05-T05

**النص:** حدّد صحيحًا أو خطأ:

1. Rami macht eine Ausbildung zum Elektroniker.
2. Er hat fünf Tage pro Woche Unterricht in der Berufsschule.
3. Wenn er morgens Unterricht hat, fährt er mit dem Bus.
4. In der Bibliothek ist es laut.
5. Rami arbeitet drei Tage pro Woche im Betrieb.
6. Er lernt am liebsten in der Bibliothek.

كل بند ومفتاحه ودليله أو ترتيب كلماته مراجع في items.

- **1. Rami macht eine Ausbildung zum Elektroniker.** — الجواب: صحيح. المهنة منصوصة.
- **2. Er hat fünf Tage pro Woche Unterricht in der Berufsschule.** — الجواب: خطأ: يومان لا خمسة. عدد أيام المدرسة اثنان؛الخمسة مجموع المؤسسة والمدرسة لا المدرسة وحدها.
- **3. Wenn er morgens Unterricht hat, fährt er mit dem Bus.** — الجواب: صحيح. الحافلة تحت قيد دروس الصباح كما في النص.
- **4. In der Bibliothek ist es laut.** — الجواب: خطأ: ruhig لا laut. المكتبة هادئة صراحة؛أزيل الاستنتاج القديم من شرط اللعب.
- **5. Rami arbeitet drei Tage pro Woche im Betrieb.** — الجواب: صحيح: ثلاثة أيام. أضيف دليل مباشر لثلاثة أيام المؤسسة وQ06.
- **6. Er lernt am liebsten in der Bibliothek.** — الجواب: صحيح: المكتبة. أضيف تدريب المكان المفضل لـQ07، لا التكرار.

### DL-A2-05-T06

**النص:** أكمل من البنك، واستعمل كل عنصر مرة: **Dienstag — drei — Notizen**.

1. Die Person hat am Montag und ______ Unterricht.
2. Wenn der Unterricht um ______ Uhr endet, fährt die Person nach Hause und macht eine Pause.
3. Wenn sie am Abend noch Energie hat, wiederholt sie ihre ______.

كل بند ومفتاحه ودليله أو ترتيب كلماته مراجع في items.

- **1. Die Person hat am Montag und ______ Unterricht.** — الجواب: Dienstag. الثلاثاء من الجملة الثانية.
- **2. Wenn der Unterricht um ______ Uhr endet, fährt die Person nach Hause und macht eine Pause.** — الجواب: drei. الثالثة داخل wenn؛بقي القيد ولم يُحوّل إلى خبر قطعي عام.
- **3. Wenn sie am Abend noch Energie hat, wiederholt sie ihre ______.** — الجواب: Notizen. الملاحظات تحت شرط بقاء الطاقة مساءً.

### DL-A2-05-T07

**النص الكامل:** في وحدةJSON المطابقة والمصدر الأصلي.

أربعة بنود توصيل/معنى ثم ثلاثة مطالب إنتاج؛العلاقات صريحة في المعطيات، فلا يُرفض بديل منطقي في سياق آخر باعتباره خطأ لغويًا.

**المراجع الداعمة:** WENN, SUB.

- **1. Wenn ich frei habe, …** — الجواب: ج. طبق العلاقة المعطاة واستعمل كل نهاية مرة؛لا استدلال على سلوك كل الناس.
- **2. Wenn der Bus zu spät kommt, …** — الجواب: ب. طبق العلاقة المعطاة واستعمل كل نهاية مرة؛لا استدلال على سلوك كل الناس.
- **3. Ich mache eine Pause, wenn …** — الجواب: أ. طبق العلاقة المعطاة واستعمل كل نهاية مرة؛لا استدلال على سلوك كل الناس.
- **4. في سياق هذه المواقف، قد تعني wenn: **إذا أو عندما/كلما بحسب السياق / لأن دائمًا**.** — الجواب: إذا أو عندما/كلما بحسب السياق. طبق العلاقة المعطاة واستعمل كل نهاية مرة؛لا استدلال على سلوك كل الناس.
- **5. صياغة موقف الفراغ وزيارة الأسرة** — الجواب: Wenn ich frei habe, besuche ich meine Familie.. P02 ثلاث جمل بالترتيب المحدد مع قراءة الجميع جهرًا؛لا تسجيل مطلوب.
- **6. صياغة موقف تأخر الحافلة والقطار اللاحق** — الجواب: Wenn der Bus zu spät kommt, nehme ich einen späteren Zug.. P02 ثلاث جمل بالترتيب المحدد مع قراءة الجميع جهرًا؛لا تسجيل مطلوب.
- **7. صياغة موقف الدراسة الطويلة والاستراحة، وقراءة الجميع جهرًا** — الجواب: Ich mache eine Pause, wenn ich lange lerne.. P02 ثلاث جمل بالترتيب المحدد مع قراءة الجميع جهرًا؛لا تسجيل مطلوب.

### DL-A2-05-T08

**النص:** اكتب أربع جمل عن أسبوع خيالي بضمير ich، كتابة فقط: الجملة 1 عن العمل في مؤسسة يوم الاثنين؛الجملة 2 عن الدراسة في المدرسة المهنية يوم الثلاثاء؛الجملة 3 تبدأ بـ Wenn وتربط تعلم الألمانية بتوفر الوقت مساءً؛الجملة 4 تبدأ بالرئيسية وتربط أخذ استراحة بالشعور بالتعب، مع wenn بعد الفاصلة. حافظ على الفعل المصرف في نهاية التابعة في الجملتين 3–4؛لا تضف dann في هذا التدريب. لا جهر أو تسجيل أو بيانات شخصية مطلوبة.

أربع جمل كتابة فقط من بيانات خيالية؛يتدرب التقديم والتأخير دون تعميم شرط قلب الرئيسية على النمطين.

**المراجع الداعمة:** WENN, SUB, MAIN.

- **1. عمل الاثنين في المؤسسة** — الجواب: Am Montag arbeite ich im Betrieb.. مطابقة P01 كتابة فقط؛الفاصلة وتصريف الفعل بحسب موضع التابعة.
- **2. دراسة الثلاثاء بالمدرسة المهنية** — الجواب: Am Dienstag habe ich Unterricht in der Berufsschule.. مطابقة P01 كتابة فقط؛الفاصلة وتصريف الفعل بحسب موضع التابعة.
- **3. تعلم الألمانية إذا توفر وقت مساءً؛Wenn أولًا** — الجواب: Wenn ich am Abend Zeit habe, lerne ich Deutsch.. مطابقة P01 كتابة فقط؛الفاصلة وتصريف الفعل بحسب موضع التابعة.
- **4. استراحة عند التعب؛الرئيسية أولًا** — الجواب: Ich mache eine Pause, wenn ich müde bin.. مطابقة P01 كتابة فقط؛الفاصلة وتصريف الفعل بحسب موضع التابعة.

### DL-A2-05-Q01

**النص:** ما معنى **die Berufsschule**؟

المدرسة المهنية هي الجواب؛المحطة والقائمة مختلفتان في المعنى.

**الخيارات:** مدرسة مهنية. / محطة قطار. / قائمة الطعام.

**الجواب:** مدرسة مهنية.

### DL-A2-05-Q02

**النص:** اختر الجملة الصحيحة:

bin آخر التابعة ثم mache ich؛الرابط T04 ترتيب فعل لا مجرد ملء wenn في T02.

**الخيارات:** Wenn ich bin müde, mache ich eine Pause. / Wenn ich müde bin, mache ich eine Pause. / Wenn ich müde bin, ich mache eine Pause.

**الجواب:** Wenn ich müde bin, mache ich eine Pause.

### DL-A2-05-Q03

**النص:** أكمل: Wenn der Unterricht um drei Uhr ___, fährt sie nach Hause.

endet يناسب Unterricht؛فعل fährt لا يؤدي معنى انتهاء الدرس وUnterricht اسم.

**الخيارات:** fährt / Unterricht / endet

**الجواب:** endet

### DL-A2-05-Q04

**النص:** أي جملة صحيحة؟

habe آخر التابعة ثم lerne ich؛المشتتان يخلطان موضعي الفعل والفاعل.

**الخيارات:** Wenn ich Zeit habe, ich lerne eine Stunde. / Wenn ich Zeit habe, lerne ich eine Stunde. / Wenn ich habe Zeit, lerne ich eine Stunde.

**الجواب:** Wenn ich Zeit habe, lerne ich eine Stunde.

### DL-A2-05-Q05

**النص:** ما التدريب المهني الذي يقوم به Rami؟

صُحح نص الجواب إلى فني إلكترونيات؛الفهرس0 ثابت والنص لا يذكر طاهيًا أو موظف فندق.

**الخيارات:** فنّي إلكترونيات. / طاهٍ. / موظف في فندق.

**الجواب:** فنّي إلكترونيات.

### DL-A2-05-Q06

**النص:** كم يومًا يعمل Rami في المؤسسة أسبوعيًا؟

ثلاثة أيام بالمؤسسة، وT05.5 يدرب المعلومة صراحة.

**الخيارات:** يومًا واحدًا. / خمسة أيام. / ثلاثة أيام.

**الجواب:** ثلاثة أيام.

### DL-A2-05-Q07

**النص:** أين يفضّل Rami الدراسة؟

المكان المفضل المكتبة؛شرح am liebsten صُحح من «غالبًا» إلى التفضيل.

**الخيارات:** في المطعم. / في المكتبة. / في محطة القطار.

**الجواب:** في المكتبة.

### DL-A2-05-Q08

**النص:** في الجملة **Wenn ich am Abend noch Energie habe, wiederhole ich meine Notizen**، ما الفعل في نهاية جملة wenn؟

habe فعل التابعة؛Energie اسم وwiederhole فعل الرئيسية؛Q08→T03.4 لا ادعاء قياس الاستماع.

**الخيارات:** habe / Energie / wiederhole

**الجواب:** habe

### DL-A2-05-Q09

**النص:** في سياق الروتين، قد تعني **wenn**:

إذا أو عندما/كلما بحسب السياق؛ليست دائمًا لأن ولا قبل أن. T07.4 يدرب المعنى.

**الخيارات:** لأن دائمًا. / قبل أن. / إذا أو عندما/كلما بحسب السياق.

**الجواب:** إذا أو عندما/كلما بحسب السياق.

### DL-A2-05-Q10

**النص:** اختر الترتيب الصحيح:

نفس تركيب T04.2؛Q10→T04 بدل الكتابة الحرة، مع قيد النمط دون dann.

**الخيارات:** Wenn der Unterricht endet, Rami fährt nach Hause. / Wenn der Unterricht endet, fährt Rami nach Hause. / Wenn endet der Unterricht, Rami nach Hause fährt.

**الجواب:** Wenn der Unterricht endet, fährt Rami nach Hause.

### DL-A2-05-P01

**النص:** اكتب أربع جمل عن أسبوع خيالي بضمير ich، كتابة فقط: الجملة 1 عن العمل في مؤسسة يوم الاثنين؛الجملة 2 عن الدراسة في المدرسة المهنية يوم الثلاثاء؛الجملة 3 تبدأ بـ Wenn وتربط تعلم الألمانية بتوفر الوقت مساءً؛الجملة 4 تبدأ بالرئيسية وتربط أخذ استراحة بالشعور بالتعب، مع wenn بعد الفاصلة. حافظ على الفعل المصرف في نهاية التابعة في الجملتين 3–4؛لا تضف dann في هذا التدريب. لا جهر أو تسجيل أو بيانات شخصية مطلوبة.

التعليمات مطابقة حرفيًا لمصدرها والمودالية والنموذج والمعايير متسقة؛فحص الطول والإقرار لا يصحح اللغة أو النطق.

### DL-A2-05-P02

**النص:** اكتب ثلاث جمل كاملة من مواقف التوصيل الثلاثة نفسها، دون تغيير العلاقة المعطاة: فراغ من الدوام وزيارة الأسرة؛تأخر الحافلة وأخذ قطار لاحق؛دراسة طويلة وأخذ استراحة. ابدأ الجملتين 1–2 بـ Wenn دون dann، واجعل الجملة 3 تبدأ بـ Ich mache eine Pause ثم wenn بعد الفاصلة. استعمل كل موقف مرة، ثم اقرأ الجمل الثلاث بصوت مرتفع. لا حاجة إلى شريك أو تسجيل أو رحلة حقيقية.

التعليمات مطابقة حرفيًا لمصدرها والمودالية والنموذج والمعايير متسقة؛فحص الطول والإقرار لا يصحح اللغة أو النطق.

### DL-A2-05-AUD-PHR-01

**النص:** Die Ausbildung. Der Betrieb. Die Berufsschule. Der Stundenplan. Die Prüfung. Das Fach. Der Feierabend. Pünktlich. Praktisch und theoretisch. Üben. Sich auf eine Prüfung vorbereiten. Der Elektroniker. Die Elektronikerin. Ich lerne, wenn ich Zeit habe. Wenn ich Zeit habe, lerne ich eine Stunde. Wenn der Unterricht endet, fährt Rami nach Hause.

الكلمات والأصوات والمسارات والحالات محفوظة؛تغير source_line/source_heading فقط. اسم Rami في بيانات القراءة لا يحول السرد بضمير الغائب إلى رواية شخصية مسماة في الاستماع.

- **1. Die Ausbildung.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **2. Der Betrieb.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **3. Die Berufsschule.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **4. Der Stundenplan.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **5. Die Prüfung.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **6. Das Fach.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **7. Der Feierabend.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **8. Pünktlich.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **9. Praktisch und theoretisch.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **10. Üben.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **11. Sich auf eine Prüfung vorbereiten.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **12. Der Elektroniker.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **13. Die Elektronikerin.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **14. Ich lerne, wenn ich Zeit habe.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **15. Wenn ich Zeit habe, lerne ich eine Stunde.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **16. Wenn der Unterricht endet, fährt Rami nach Hause.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.

### DL-A2-05-AUD-DLG-01

**النص:** Wie sieht deine Woche aus, Rami?
Ich mache eine Ausbildung zum Elektroniker. Montag bis Mittwoch bin ich im Betrieb. Am Donnerstag und Freitag habe ich Unterricht in der Berufsschule.
Wann lernst du für Prüfungen?
Wenn ich am Abend Zeit habe, lerne ich eine Stunde. Am Samstag übe ich mit einem Freund.
Und was machst du nach dem Unterricht?
Wenn der Unterricht früh endet, gehe ich in die Bibliothek.

الكلمات والأصوات والمسارات والحالات محفوظة؛تغير source_line/source_heading فقط. اسم Rami في بيانات القراءة لا يحول السرد بضمير الغائب إلى رواية شخصية مسماة في الاستماع.

### DL-A2-05-AUD-READ-01

**النص:** Rami macht eine Ausbildung zum Elektroniker. Er arbeitet drei Tage pro Woche in einem Betrieb und hat an zwei Tagen Unterricht in der Berufsschule. Wenn er am Morgen Unterricht hat, fährt er mit dem Bus. Nach dem Unterricht macht er seine Aufgaben. Er lernt am liebsten in der Bibliothek. Dort ist es ruhig. Wenn er am Samstag Zeit hat, spielt er Fußball.

الكلمات والأصوات والمسارات والحالات محفوظة؛تغير source_line/source_heading فقط. اسم Rami في بيانات القراءة لا يحول السرد بضمير الغائب إلى رواية شخصية مسماة في الاستماع.

### DL-A2-05-AUD-LST-01

**النص:** Mein Stundenplan ist diese Woche voll. Am Montag und Dienstag habe ich Unterricht. Wenn der Unterricht um drei Uhr endet, fahre ich nach Hause und mache eine Pause. Am Mittwoch arbeite ich im Betrieb. Wenn ich am Abend noch Energie habe, wiederhole ich meine Notizen.

الكلمات والأصوات والمسارات والحالات محفوظة؛تغير source_line/source_heading فقط. اسم Rami في بيانات القراءة لا يحول السرد بضمير الغائب إلى رواية شخصية مسماة في الاستماع.

### DL-A2-05-AUD-MODEL-01

**النص:** Ich lerne, wenn ich Zeit habe. Wenn ich Zeit habe, lerne ich eine Stunde. Wenn der Unterricht endet, fährt Rami nach Hause. Wenn Rami am Samstag Zeit hat, spielt er Fußball. Wenn der Unterricht um drei Uhr endet, fahre ich nach Hause.

الكلمات والأصوات والمسارات والحالات محفوظة؛تغير source_line/source_heading فقط. اسم Rami في بيانات القراءة لا يحول السرد بضمير الغائب إلى رواية شخصية مسماة في الاستماع.

- **1. Ich lerne, wenn ich Zeit habe.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **2. Wenn ich Zeit habe, lerne ich eine Stunde.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **3. Wenn der Unterricht endet, fährt Rami nach Hause.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **4. Wenn Rami am Samstag Zeit hat, spielt er Fußball.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.
- **5. Wenn der Unterricht um drei Uhr endet, fahre ich nach Hause.** — طابق المصدر نصيًا؛المفردات/الأمثلة موجودة دون توليد أو استماع أو تغيير التفريغ.

## حدود النتيجة

العدد34 يخص بنود التمارين ومطالب الإنتاج،ولا يضم عباراتPHR وأمثلةMODEL الموثقة داخل أصليهما. الفحوص تحفظ البنية والتدرج ولا تمنح شهادةCEFR/WCAG أو تصحيح نطق. الحملة22/53 والبوابة منفصلة؛تبقى31 درسًا،التاليA2.6. لا دمج أو إعلان اكتمال المنهج.
