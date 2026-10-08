# مراجعة CR26 — A2.8: الأخبار والمبني للمجهول

رُوجع **A2.8 — الإعلام والأخبار والسياسة: المبني للمجهول** في **119 وحدة و32 بندًا أو مطلبًا داخل التمارين**، مع **9 مراجع:8 صفحات كاملة وجزء محدد من صفحة تصريف**. ضُبطت مطابقةwerden والحالة الرفعية بعد التحويل، وفُصلت صيغة الحدث عن الحالة والمستقبل. صُحح اقتباسQ06 إلىEin neuer Platz، وقُيدQ10 بـVorgangspassiv دون اعتبارist … organisiert خطأ مطلقًا. **P01/T08 ثلاث جمل خيالية مع الجهر**؛ **P02/T03 تحويل أول ثلاث جمل كاملة كتابة فقط**، بنموذجين ومعايير مطابقة. Q04→T07 وQ10→T04؛ الخيارات الثلاثون وفهارس المفاتيح و80% محفوظة. الإصدار `a2-08-v2` والمخزن `v73`. أربعة أصول/10 مقاطع محفوظة دون توليد أو استماع أو اعتماد جديد؛ نُبّه كتابيًا إلى تعداد الضمائر الملتبس فيMODEL ولم يُصلح التسجيل نفسه. **الحملة25/53 درسًا والبوابة منفصلة؛تبقى28 درسًا،والتاليCR27/A2.9.** هذا سجل مراجعة وفحوص وحدود معلنة، لا شهادة مستوى أو إعلان اكتمال الدمج.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم `content/A2/lesson-08-media-news-passive.md/.assessment.json`،والحزمة `data/course.json`،و20 صفًا في `data/production-task-catalog.csv` وأربعة صفوف مرجعية فقط في `data/audio-asset-register.csv`.
- `service-worker.js` واختباراه،و`tools/test_progression.cjs` و`tools/test_accessibility_audit.cjs` والحارس `tools/test_a2_08_review.py`.
- السجلان `data/reviews/a2-08-review.json/.md`،وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.32 وتقرير المتصفح وملفا التسليم. لا تعديلplaylist أوMP3 أوapp.js أوCSS.
- التنفيذ **6bda98cdc013dc1b800cf291410d2380e2b3e3e4** رُفع وتطابق معorigin. مجموعة السجل بعنوان `Record CR26 granular A2.8 review and cumulative checks` تُرفع فور فحصها؛معرفها فيgit log بعد الدفع،ثم يسجل إيصالها.
- الفرع الوحيد `arena/01a1036f-deutschlern`؛لا تبديل أو دمجPR#1. استعيدتmetadata القديمة بعدfetch ومقارنة698 ملفًا بخط الأساس بصفر اختلاف أو إضافات،ثمreset --mixed دون حذف عمل؛لا تكرر دون مقارنة جديدة.
- لا واجهة بعيدة أو نشرProduction مدّعى. لا تنسب حالةVercel القديمة لهذه المجموعة،ولا إعادة نشر متكررة أو ترقية مدفوعة بسبب حد الخدمة السابق. نجاح دفعGitHub مستقل عن النشر.
- التالي **CR27/A2.9 — المنتجات والتقنية وتقديم شكوى**: افحص العنوان والمصدر الفعلي والتقييم وكل الأصول،وراجع كل نص وتمرين وبديل ومعيار بالمراجع قبل تعديله. احفظ فحوص اتساقA2.9 القائمة؛لا تعِدA2.8 أو تسجيلاته.
- القيود مستمرة:كل تعديل يُرفع فور فحص مجموعته؛المحتوى والتقييم والتطبيق قبل الصوت؛لا مراجع بشري شرطًا للمتابعة. لا إخفاء أو إعادة توليد أو تغييرready/نهائي بلا موافقة؛حد10طلبات صوت/رد. B1.9/B1.10 معلقان،واختيارB1.11 محفوظ. احفظA2.7Q08→T05 والأصوات المقررة وتاريخB2.6 دون إعادة تسميتهB2.7.

## قيد واضح في نص التسجيل القائم

في `DL-A2-08-AUD-MODEL-01-01.mp3` يسرد التفريغ **Er, sie und es wird.** هذه صياغة تعداد ملتبسة،وليست نموذجًا صحيحًا لجملة ذات فاعل مركب. أضيفت في الدرس الصيغ المستقلة **Er wird. Sie wird. Es wird.** مع شرح بدائل المفرد،والفرق عنsie الجمع وSie للاحترام. **التسجيل والتفريغ نفسهما لم يتغيرا،ولم يُجرَ استماع أو اعتماد جديد.** لذلك لا يوصف الأصل بأنه صُحح صوتيًا أو خالٍ من الملاحظات. بقيت حالته التاريخية وروابطه متاحة وفق قرار حفظ التسجيلات؛الملاحظة فيJSON تحتaudioTextIssues وفيhelper-07 ووحدةMODEL. لا إعادة توليد أو تغيير صوت أو حالة بلا موافقة،ولا تجعل هذه الملاحظة أو مراجعًا بشريًا شرطًا لمتابعة المراجعة النصية لبقية الدروس.

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

## طريقة العد وحدود الدليل

119 وحدة:8 للنطاق والشرح العام،23 صف مفردات،6 صفوف تصريف،11 صيغةPartizip II،3 أمثلة قاعدة،4 عبارات أخبار،9 مساعدات،6 جمل قراءة و5 أسئلتها،5 جمل استماع و5 أسئلته،3 جمل نموذج الجهر و3 نموذج الكتابة،4 بطاقات،8 تمارين،10 أسئلة تقييم،مهمتا أداء،و4 أصول صوت. بنود التمارين32 =4+4+4+4+4+4+5+3. مطالبP02 تعيد أول ثلاثة بنود منT03 ولا تُعد مرة أخرى. البدائل والمعايير و24 وحدةPHR و17 وحدةMODEL تظهر متداخلة تحت أصولها ولا تضخم عدد119. لا حوار متبادل في هذا الدرس. أحداث الخبرين خيالية؛دليل الفهم النص المحلي،لا تحقق خارجي من وقائع أو سياسة حالية.

## المراجع — 2026-10-08

- **PASSIVE — Lingolia — Passiv**: https://deutsch.lingolia.com/de/grammatik/verben/passiv
  - المفعول Akkusativ يصير المسند إليه في الرفع، ومطابقة werden وحذف المنفذ، وفرق Vorgangspassiv وZustandspassiv. لا نعمم التبسيط عن الأفعال اللازمة؛ الصفحة نفسها تشرح المبني للمجهول غير الشخصي. صفحة كاملة؛الأجزاء المقروءة [0, 1] من 2.
- **PART — Lingolia — Partizip I und II**: https://deutsch.lingolia.com/de/grammatik/verben/partizipien
  - Partizip II في المبني للمجهول لا يعني وحده الزمن الماضي؛ صيغ غير المنفصل و-ieren بلاge، وge داخل المنفصل. لا تدريس Partizip I أو التوسع في الوصف بالصفة هنا. صفحة كاملة؛الأجزاء المقروءة [0, 1] من 2.
- **FUTUR — Lingolia — Futur I**: https://deutsch.lingolia.com/de/grammatik/zeitformen/futur-1
  - werden مع المصدر يختلف عن werden مع Partizip II؛ جدول التصريف يميز ضمائر المفرد والجمع والاحترام. صفحة كاملة؛الأجزاء المقروءة [0] من 1.
- **PRESENT — Lingolia — Präsens**: https://deutsch.lingolia.com/de/grammatik/zeitformen/praesens
  - المضارع قد يصف سياقًا مستقبليًا؛ لا تستنتج زمنًا مستقبليًا من werden وحدها في المبني للمجهول. صفحة كاملة؛الأجزاء المقروءة [0] من 1.
- **WEB — Duden — Webseite**: https://www.duden.de/rechtschreibung/Webseite
  - صفحة ويب web page، مؤنث وجمعWebseiten؛ تحسين الترجمة بدل مساواتها دائمًا بموقع كامل. صفحة كاملة؛الأجزاء المقروءة [0] من 1.
- **COUNCIL — Duden — Stadtrat**: https://www.duden.de/rechtschreibung/Stadtrat
  - المجلس أو عضو فيه بحسب السياق؛ الجمعStadträte والإضافةdes Stadtrats/Stadtrates. لا تعميم بنية مجلس محلي على كل البلدان. صفحة كاملة؛الأجزاء المقروءة [0] من 1.
- **SEND — Duden — senden**: https://www.duden.de/rechtschreibung/senden
  - gesendet هو النمط المستعمل للبث في الدرس؛ تعرض الصفحةgesandt لمعانٍ أخرى واستعمالًا سويسريًا فلا نصمه بالخطأ في كل السياقات. صفحة كاملة؛الأجزاء المقروءة [0] من 1.
- **ELECTION — Duden — Wahl**: https://www.duden.de/rechtschreibung/Wahl
  - عملية انتخاب في هذا السياق، مع معنى اختيار في غيره؛ مفردWahl وجمعWahlen. صفحة كاملة؛الأجزاء المقروءة [0] من 1.
- **TRANSFER — Netzverb/Verbformen — übertragen**: https://www.verbformen.com/conjugation/u3bertragen.htm
  - قُرئ الجزء0 من5: غير منفصل في معنى نقل/بث، überträgt/übertrug/hat übertragen، ومثال بث الحفل؛ لم تُقرأ الأجزاء1–4 ولم تعتمد. قراءة جزئية فقط،لم تستخدم الأجزاء الباقية؛الأجزاء المقروءة [0] من 5.

**مستبعد:** https://www.duden.de/rechtschreibung/uebertragen أعادمحتوى404؛ليس مرجعًا. عنوانLingolia القديمsatzbau/passiv أعاد صفحةverben/passiv الصحيحة وتابعنا جزأهاالثاني من عنوانها النهائي.

## المراجعة الفردية

### scope-01

# A2.8 — الإعلام والأخبار والسياسة: المبني للمجهول

**الحكم:** عنوان تدريب إعلامي محلي، لا خبر حالي أو موقف حزبي مطلوب.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT.

### scope-02

**المدة:** نحو 35–40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري

**الحكم:** المدة تقدير مرن؛ الكلام والكتابة ظاهران والاستماع اختياري مع بقاء التسجيلات متاحة.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT.

### scope-03

**الهدف:** أستطيع أن أفهم خبرًا قصيرًا، وأصف ما يحدث باستخدام المبني للمجهول في المضارع.

**الحكم:** الهدف فهم خبر قصير وصياغة الحدث، ممثل في خبر خيالي وتحويل محدد.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT.

### scope-04

نركّز هنا على **Vorgangspassiv im Präsens**: المبني للمجهول الذي يصف الحدث في المضارع. يقدّم الحدث أو ما يقع عليه الفعل، وقد يُحذف منفذ الفعل لأنه غير مهم في السياق أو غير مذكور؛ ليس شرطًا أن يكون مجهولًا فعلًا. في الجمل الرئيسية البسيطة هنا نستعمل:

**الحكم:** قُيد الشرح بصيغة الحدث في المضارع؛ حذف المنفذ لا يعني أنه مجهول فعلًا.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT.

### scope-05

**werden مصرّفًا بحسب المسند إليه نحويًا + Partizip II في نهاية الجملة الرئيسية المدروسة**

**الحكم:** الصيغة للمضارع وفي الرئيسية البسيطة المدروسة؛ المطابقة مع المسند إليه لا منفذ الحدث.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT.

### scope-06

في هذا الدرس نركّز على **werden + Partizip II**: **wird veröffentlicht / werden gesendet**. لا تعني تسمية Partizip II أن الجملة في الماضي؛ زمن هذه الصيغة مضارع، وقد تتعلق بخطة لاحقة إذا دلّ السياق عليها. ولا تكفي كلمة werden وحدها لتحديد المبني للمجهول.

**الحكم:** Partizip II ليس دليل الماضي وحده، وwerden ليست علامة مستقبل أو مجهول وحدها.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT.

### scope-07

قد يُختار المبني للمجهول في خبر أو إعلان للتركيز على الحدث بدل منفذه، حتى إذا كان المنفذ معروفًا. لا نختلق فاعلًا لم يذكره النص، ولا نحكم على موثوقية الخبر من بنيته النحوية وحدها.

**الحكم:** اختيار المبني للمجهول قد يوجه التركيز لكنه لا يثبت صحة الخبر أو حياده؛ لا اختلاق منفذ محذوف.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT.

### scope-08

النموذج الأول تدريب خيالي لا خبر منشور. النموذج الثاني تحويل مضبوط مع حذف المنفذ، لا تخمين لمن قام بالفعل. لا استبدال للتسجيلات القائمة أو تصحيح آلي للغة أو النطق.

**الحكم:** النموذج الأول خيالي والثاني تحويل؛ لا نشر أو استبدال تسجيل أو تصحيح آلي للغة والنطق.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT.

### vocab-01

| die Nachricht | die Nachrichten | الخبر / الأخبار |

**الحكم:** خبر مفرد Nachricht وأخبار Nachrichten؛ الأخير جمع نحوي.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-02

| die Schlagzeile | die Schlagzeilen | العنوان الرئيسي |

**الحكم:** Schlagzeile العنوان الرئيسي؛ مؤنث وجمعه Schlagzeilen.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-03

| der Bericht | die Berichte | التقرير |

**الحكم:** Bericht تقرير؛ مذكر وجمعه Berichte، فلا يخلط بالخبر المفرد.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-04

| die Redaktion | die Redaktionen | هيئة التحرير |

**الحكم:** Redaktion هيئة تحرير؛ مؤنث وجمعه Redaktionen، لا شخص معين.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-05

| die Zeitung | die Zeitungen | الصحيفة |

**الحكم:** Zeitung صحيفة؛ مؤنث وجمعه Zeitungen، وليست محطة إذاعة.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-06

| der Radiosender | die Radiosender | محطة الإذاعة |

**الحكم:** Radiosender محطة إذاعة؛ الجمع بالصيغة نفسها، وليس شخصًا بالضرورة.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-07

| das Interview | die Interviews | المقابلة |

**الحكم:** Interview مقابلة؛ محايد وجمعه Interviews.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-08

| die Wahl | die Wahlen | عملية انتخاب/انتخابات (هنا) |

**الحكم:** Wahl عملية انتخاب هنا، وقد تعني اختيارًا؛ الجمع Wahlen.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-09

| der Stadtrat | die Stadträte | مجلس المدينة (هنا) |

**الحكم:** Stadtrat مجلس المدينة هنا، وله أيضًا معنى عضو مجلس بحسب السياق.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-10

| die Sitzung | die Sitzungen | الجلسة |

**الحكم:** Sitzung جلسة؛ الجمع Sitzungen، وorganisiert لا تثبت أنها انعقدت فعلًا.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-11

| die Bevölkerung | — | السكان |

**الحكم:** Bevölkerung السكان؛ اسم جمعي مفرد نحويًا، لا رأس عبارة Fragen aus der Bevölkerung.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-12

| die Webseite | die Webseiten | صفحة ويب |

**الحكم:** Webseite صفحة ويب، وجمعها Webseiten؛ صُححت مساواتها دائمًا بموقع كامل.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-13

| der Vorschlag | die Vorschläge | الاقتراح |

**الحكم:** Vorschlag اقتراح وجمعه Vorschläge؛ جمع الاقتراح لا يعني قبوله.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-14

| der Einwohner / die Einwohnerin | die Einwohner / Einwohnerinnen | الساكن/الساكنة |

**الحكم:** Einwohner وEinwohnerin للساكن والساكنة؛ لا جنسية أو حق تصويت مستنتج.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-15

| veröffentlichen | veröffentlicht | ينشر |

**الحكم:** veröffentlichen ينشر؛ veröffentlicht حاضر أو Partizip II بحسب البناء.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-16

| berichten über | berichtet über | يقدّم تقريرًا عن |

**الحكم:** حُفظ über في التصريف؛ berichten über يقدم تقريرًا عن موضوع.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-17

| beantworten | beantwortet | يجيب عن |

**الحكم:** beantworten يجيب عن؛ beantwortet بلا ge في Partizip II.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-18

| einladen | lädt ein | يدعو |

**الحكم:** einladen يدعو؛ lädt ein منفصل، وPartizip II هو eingeladen.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-19

| organisieren | organisiert | ينظّم |

**الحكم:** organisieren ينظم؛ organisiert دون ge مع -ieren.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-20

| bauen | baut | يبني |

**الحكم:** bauen يبني؛ gebaut صيغة الحدث، لا مجرد تخطيطه.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-21

| eröffnen | eröffnet | يفتتح |

**الحكم:** eröffnen يفتتح؛ eröffnet بلا ge، وهو الحدث المرتبط بالخط.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-22

| senden | sendet | يبث/يرسل |

**الحكم:** senden يبث أو يرسل؛ gesendet للبث هنا دون تعميم على كل المعاني واللهجات.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### vocab-23

| übertragen | überträgt | ينقل/يبث |

**الحكم:** übertragen ينقل أو يبث هنا؛ überträgt حاضر وübertragen صيغة Partizip II غير منفصلة.

مراجع متصلة: WEB, COUNCIL, ELECTION, PART, SEND, TRANSFER.

### conjugation-01

| ich | werde |

**الحكم:** ich مع werde لا wird رغم كونه مفردًا.

مراجع متصلة: FUTUR, PASSIVE.

### conjugation-02

| du | wirst |

**الحكم:** du مع wirst؛ لا تعميم wird على كل مفرد.

مراجع متصلة: FUTUR, PASSIVE.

### conjugation-03

| er / sie / es | wird |

**الحكم:** er أو sie المفردة أو es كل منها مستقل مع wird؛ الشرطات بدائل وليست فاعلًا مركبًا.

مراجع متصلة: FUTUR, PASSIVE.

### conjugation-04

| wir | werden |

**الحكم:** wir مع werden للمتكلمين الجمع.

مراجع متصلة: FUTUR, PASSIVE.

### conjugation-05

| ihr | werdet |

**الحكم:** ihr مع werdet؛ لا تعميم werden على كل جمع.

مراجع متصلة: FUTUR, PASSIVE.

### conjugation-06

| sie / Sie | werden |

**الحكم:** sie الجمع وSie للاحترام مع werden؛ قد تخاطب صيغة الاحترام شخصًا واحدًا.

مراجع متصلة: FUTUR, PASSIVE.

### participle-01

| veröffentlichen | veröffentlicht |

**الحكم:** veröffentlicht بلا ge بسبب البادئة غير المنفصلة.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-02

| beantworten | beantwortet |

**الحكم:** beantwortet بلا ge؛ ليس gebeantwortet.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-03

| organisieren | organisiert |

**الحكم:** organisiert دون ge مع -ieren.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-04

| einladen | eingeladen |

**الحكم:** eingeladen: ge داخل ein- والنهاية -en.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-05

| senden | gesendet |

**الحكم:** gesendet للبث هنا؛ لا رفض مطلق لصيغة gesandt في كل المعاني.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-06

| übertragen | übertragen |

**الحكم:** übertragen غير منفصل في معنى البث، وتساوي صيغته المصدر؛ لا تضاف ge.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-07

| bauen | gebaut |

**الحكم:** gebaut صيغة ضعيفة مع ge و-t.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-08

| eröffnen | eröffnet |

**الحكم:** eröffnet بلا ge ومع نهاية -et.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-09

| planen | geplant |

**الحكم:** geplant لا يعني أن المشروع نُفذ.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-10

| sammeln | gesammelt |

**الحكم:** gesammelt جمع الاقتراحات، لا اعتمادها.

مراجع متصلة: PART, SEND, TRANSFER.

### participle-11

| informieren | informiert |

**الحكم:** informiert بلا ge مع -ieren؛ تظهر مع ihr في T01.4.

مراجع متصلة: PART, SEND, TRANSFER.

### grammar-01

- **Der Bericht wird veröffentlicht.** — يُنشر التقرير.

**الحكم:** Bericht مفرد مع wird وveröffentlicht؛ لا يذكر المنفذ.

مراجع متصلة: PASSIVE, PART, SEND.

### grammar-02

- **Die Nachrichten werden um acht Uhr gesendet.** — تُبثّ الأخبار في الساعة الثامنة.

**الحكم:** Nachrichten جمع مع werden وgesendet؛ الثامنة موعد البث.

مراجع متصلة: PASSIVE, PART, SEND.

### grammar-03

- **Ein Interview wird im Radio gesendet.** — تُبثّ مقابلة في الإذاعة.

**الحكم:** Interview مفرد محايد مع wird؛ im Radio وسيلة البث.

مراجع متصلة: PASSIVE, PART, SEND.

### news-phrase-01

- **Die Zeitung berichtet über die Wahl.** — تقدّم الصحيفة تقريرًا عن الانتخابات.

**الحكم:** معلوم عن الانتخاب؛ über متعلق بالفعل berichtet، ولا werden هنا.

مراجع متصلة: PASSIVE, COUNCIL, ELECTION, TRANSFER.

### news-phrase-02

- **Die Zeitung veröffentlicht einen Bericht.** — تنشر الصحيفة تقريرًا. (مبني للمعلوم)

**الحكم:** معلوم: الصحيفة تنشر einen Bericht في النصب.

مراجع متصلة: PASSIVE, COUNCIL, ELECTION, TRANSFER.

### news-phrase-03

- **Ein Bericht wird veröffentlicht.** — يُنشر تقرير. (مبني للمجهول)

**الحكم:** مجهول: Ein Bericht في الرفع مع wird؛ لا تغيير التنكير إلى التعريف.

مراجع متصلة: PASSIVE, COUNCIL, ELECTION, TRANSFER.

### news-phrase-04

- **Heute wird eine Sitzung übertragen.** — تُنقل جلسة اليوم.

**الحكم:** Heute في البداية وwird بعده؛ eine Sitzung مفرد وübertragen صيغة البث.

مراجع متصلة: PASSIVE, COUNCIL, ELECTION, TRANSFER.

### helper-01

- **التحويل والحالة:** في **Die Zeitung veröffentlicht den Bericht.** المفعول den Bericht يصبح **Der Bericht wird veröffentlicht.** في الرفع. لا يبقى den بعد التحويل. مع الجمع: **Die Einwohner werden eingeladen. Die Fragen werden beantwortet.** يُحذف المنفذ في مهمتنا؛ لا نقلب أسماء الأشخاص أو نغير الحدث والعدد.

**الحكم:** den Bericht يصبح Der Bericht؛ يحفظ التعريف والعدد والحدث، ويحذف المنفذ في المهمة.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### helper-02

- **المطابقة والترتيب:** **Heute wird eine Sitzung übertragen.** يبدأ بظرف، ثم الفعل المصرف، ثم الاسم المفرد. وفي **Es werden zwei Haltestellen gebaut.** المطابقة مع zwei Haltestellen؛ es تمهيد في البداية لا اسم محطة مفردة. السكان في **Fragen aus der Bevölkerung** مصدر الأسئلة؛ المطابقة مع Fragen الجمع لا Bevölkerung.

**الحكم:** المطابقة مع Sitzung المفرد وHaltestellen أوFragen الجمع؛ لا مع es التمهيدية أو Bevölkerung المجرورة.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### helper-03

- **بناء Partizip II:** veröffentlicht وbeantwortet وeröffnet بلا ge-؛ وكذلك organisiert وinformiert المنتهيان بـ-ieren. eingeladen فيه ge داخل الفعل القابل للفصل. übertragen غير منفصل في معنى البث، وصيغته هنا مساوية للمصدر؛ لا نكتب übergetragen. نستعمل gesendet للبث في هذا الدرس؛ لا نعممها وحدها على كل معاني senden ولهجاته.

**الحكم:** تكوين الصيغ دون تعميم ge؛ eingeladen منفصل وübertragen غير منفصل، وgesendet للبث مع حدود المعاني واللهجات.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### helper-04

- **الحدث والحالة والمستقبل:** **Eine Veranstaltung wird organisiert.** يصف عملية التنظيم؛ **Eine Veranstaltung ist organisiert.** قد يصف الحالة الناتجة وهو صحيح في سياقه، لكنه ليس النمط المطلوب هنا. **Die Stadt wird eine Sitzung organisieren.** فيه werden مع المصدر للمستقبل، لا صيغة الحدث المبني للمجهول المدروسة. im Herbst وmorgen يعطيان سياقًا زمنيًا، وليس كل werden علامة مستقبل.

**الحكم:** تمييز الحدث والحالة والمستقبل؛ ist … organisiert ليس خطأ مطلقًا، وwerden مع مصدر ليس النمط المطلوب.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### helper-05

- **كلمات النص:** **planen / sammeln / informieren** يخطط / يجمع / يُعلم. **die Buslinie / die Haltestelle / die Informationsveranstaltung** خط الحافلات / موقف أو محطة توقف / فعالية إعلامية لتقديم معلومات. **Es geht um …** الموضوع هو…؛ ليست هذه العبارة مبنيًا للمجهول. جمع اقتراحات لا يعني قبولها، وتخطيط ساحة لا يعني بناءها.

**الحكم:** المفردات مدعومة؛ es geht um موضوع وليس صيغة مجهول. التخطيط والجمع لا يثبتان البناء أو القبول.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### helper-06

- **معاني السياق:** Stadtrat مجلس المدينة هنا، وقد تعني الكلمة عضوًا في مجلس بحسب السياق. Wahl عملية انتخاب هنا، وقد تعني اختيارًا في سياق آخر. Webseite صفحة ويب، وInternetseite في النص صفحة على الإنترنت؛ لا نحتاج عنوان موقع حقيقي. Einwohner ساكن، لا دليل على جنسيته أو حقه الانتخابي.

**الحكم:** المعاني بحسب السياق؛ لا اختلاق جنسية أو حق تصويت، وWebseite صفحة.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### helper-07

- **تنبيه إلى نص تسجيل التصريف:** ترد فيه **Er, sie und es wird.** هذه صياغة تعداد ملتبسة؛ ليست نموذجًا صحيحًا لجملة ذات فاعل مركب. الصيغ التي نتعلمها هي **Er wird. Sie wird. Es wird.** كل ضمير بديل مفرد مستقل. ومع sie للجمع أو Sie للاحترام نقول werden؛ الجدول يوضح ذلك. التسجيل والتفريغ محفوظان دون تعديل أو استماع جديد، فلا ننسب إلى الصوت تصحيحًا لم يحدث.

**الحكم:** نص التسجيل القديم ملتبس؛ الصيغ الصحيحة مفصولة في الشرح والجدول صحيح. لم يتغير الصوت أو التفريغ ولم يُستمع إليهما مجددًا.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### helper-08

- **حدود الخبرين:** Linden في القراءة مثال خيالي، وخبر خط الحافلات في الاستماع مستقل عنه. لا نستنتج أن الخط في Linden أو أنه موضوع جلسة المجلس. النصوص ليست أخبارًا حالية أو إثباتًا لوقوع الأحداث، والمبني للمجهول لا يجعل الخبر صحيحًا أو محايدًا تلقائيًا. am nächsten Tag تعني اليوم التالي في تسلسل الخبر، لا تاريخًا تقويميًا ثابتًا.

**الحكم:** الخبران خياليان؛ لا دليل على اتحاد مكانهما أو موضوعهما. اليوم التالي ليس تاريخ اليوم الحالي.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### helper-09

- **طريقة العمل:** P01 ثلاث جمل خيالية مع الجهر، وP02 تحويل أول ثلاث جمل من تمرين3 كتابة فقط. لا نشر خبر أو شريك أو تسجيل أو معلومات شخصية مطلوبة. حاول الاستماع قبل فتح التفريغ؛ قراءة النص لا تثبت فهمًا مسموعًا مستقلًا. الطول والإقرار لا يصححان اللغة أو النطق.

**الحكم:** P01 ثلاث جمل مع الجهر وP02 تحويل ثلاث جمل كتابة فقط؛ لا نشر أو تسجيل أو شريك، ولا تقييم للنطق بالطول والإقرار.

مراجع متصلة: PASSIVE, PART, FUTUR, PRESENT, WEB, COUNCIL, ELECTION, SEND, TRANSFER.

### reading-01

In der Stadt Linden wird am Mittwoch eine Sitzung des Stadtrats organisiert.

**الحكم:** تنظيم جلسة المجلس الأربعاء في Linden؛ خبر خيالي لا يسمي المنظم.

مراجع متصلة: PASSIVE, COUNCIL, WEB, PART.

### reading-02

Ein neuer Platz im Zentrum wird geplant.

**الحكم:** تخطيط ساحة جديدة في الوسط؛ Ein neuer Platz مرفوع، لا einen، ولا إثبات للبناء.

مراجع متصلة: PASSIVE, COUNCIL, WEB, PART.

### reading-03

Die Sitzung wird im Internet übertragen.

**الحكم:** النقل عبر الإنترنت صريح؛ لا يستنتج انحصار البث فيه دون نص.

مراجع متصلة: PASSIVE, COUNCIL, WEB, PART.

### reading-04

Fragen aus der Bevölkerung werden beantwortet.

**الحكم:** الأسئلة من السكان هي المسند إليه الجمع مع werden؛ لا نفترض أن السكان يجيبون.

مراجع متصلة: PASSIVE, COUNCIL, WEB, PART.

### reading-05

Am Ende werden mehrere Vorschläge gesammelt.

**الحكم:** تُجمع عدة اقتراحات في النهاية؛ mehrere ليس عددًا دقيقًا، ولا يفيد ذلك الموافقة عليها.

مراجع متصلة: PASSIVE, COUNCIL, WEB, PART.

### reading-06

Die Informationen werden am nächsten Tag auf der Webseite der Stadt veröffentlicht.

**الحكم:** تنشر المعلومات في اليوم التالي على صفحة المدينة؛ جمع Informationen مع werden.

مراجع متصلة: PASSIVE, COUNCIL, WEB, PART.

### reading-question-01

1. Wann wird die Sitzung organisiert?

**الحكم:** موعد التنظيم مذكور؛ لا يستبدل بيوم الجمعة من الاستماع.

**المفتاح:** Am Mittwoch.

### reading-question-02

2. Was wird im Zentrum geplant?

**الحكم:** ساحة جديدة، لا خط الحافلات؛ الجواب في الرفع.

**المفتاح:** Ein neuer Platz.

### reading-question-03

3. Wo wird die Sitzung übertragen?

**الحكم:** وسيلة نقل الجلسة الإنترنت، لا مكان انعقادها أو موقع نشر المعلومات بالتحديد.

**المفتاح:** Im Internet.

### reading-question-04

4. Was wird am Ende gesammelt?

**الحكم:** الاقتراحات هي التي تجمع؛ لا أصوات انتخاب أو قرارات معتمدة.

**المفتاح:** Mehrere Vorschläge.

### reading-question-05

5. Wann werden die Informationen veröffentlicht?

**الحكم:** اليوم التالي هو العلاقة المذكورة؛ لا تاريخ تقويمي محدد.

**المفتاح:** Am nächsten Tag.

### listening-01

In den Nachrichten geht es heute um eine neue Buslinie.

**الحكم:** موضوع الأخبار خط جديد؛ In den Nachrichten geht es … ليست صيغة مجهول.

مراجع متصلة: PASSIVE, PRESENT, WEB.

### listening-02

Die Buslinie wird im Herbst eröffnet.

**الحكم:** افتتاح الخط في الخريف؛ صيغة مضارع مع سياق زمني، لا قاعدة أن werden تعني المستقبل.

مراجع متصلة: PASSIVE, PRESENT, WEB.

### listening-03

Zwei Haltestellen werden gebaut.

**الحكم:** محطتا توقف مذكورتان؛ عدد اثنين وجمع werden، لا محطتا قطار مفترضتان.

مراجع متصلة: PASSIVE, PRESENT, WEB.

### listening-04

Eine Informationsveranstaltung wird am Freitag organisiert.

**الحكم:** فعالية إعلامية تنظم الجمعة؛ مفرد مع wird، لا جلسة الأربعاء في القراءة.

مراجع متصلة: PASSIVE, PRESENT, WEB.

### listening-05

Die Einladung wird auf der Internetseite der Stadt veröffentlicht.

**الحكم:** الدعوة على صفحة المدينة؛ لا وقت نشر أو إثبات أنها صفحة Linden.

مراجع متصلة: PASSIVE, PRESENT, WEB.

### listening-question-01

1. Worum geht es in den Nachrichten?

**الحكم:** السؤال عن موضوع الخبر، لا اسم المدينة أو موقعها.

**المفتاح:** Um eine neue Buslinie.

### listening-question-02

2. Wann wird die Buslinie eröffnet?

**الحكم:** موعد افتتاح الخط الخريف، لا يوم الفعالية.

**المفتاح:** Im Herbst.

### listening-question-03

3. Wie viele Haltestellen werden gebaut?

**الحكم:** محطتان بلفظ Zwei؛ ليس عدد الخطوط.

**المفتاح:** Zwei.

### listening-question-04

4. Wann wird die Informationsveranstaltung organisiert?

**الحكم:** تنظم الفعالية الجمعة؛ لا ساعة بدء معطاة.

**المفتاح:** Am Freitag.

### listening-question-05

5. Wo wird die Einladung veröffentlicht?

**الحكم:** مكان نشر الدعوة صفحة المدينة؛ لا موعد نشر أو عنوان URL مطلوب.

**المفتاح:** Auf der Internetseite der Stadt.

### speaking-model-01

1. Am Mittwoch wird eine Sitzung organisiert.

**الحكم:** المنفذ محذوف؛ Sitzung مفرد مع wird، والأربعاء مطابق للمعطى.

مراجع متصلة: PASSIVE, PART, WEB.

### speaking-model-02

2. Die Fragen werden beantwortet.

**الحكم:** Fragen جمع مع werden وbeantwortet دون ge؛ الحدث الثاني المطلوب.

مراجع متصلة: PASSIVE, PART, WEB.

### speaking-model-03

3. Am nächsten Tag werden die Informationen auf der Webseite der Stadt veröffentlicht.

**الحكم:** المعلومات جمع، ونشرها في اليوم التالي على الصفحة؛ Partizip II أخير. تقرأ الجمل الثلاث جهرًا.

مراجع متصلة: PASSIVE, PART, WEB.

### writing-model-01

1. Der Bericht wird veröffentlicht.

**الحكم:** den Bericht صار Der Bericht مع حفظ التعريف وحذف الصحيفة؛ wird veröffentlicht.

مراجع متصلة: PASSIVE, PART, SEND.

### writing-model-02

2. Die Nachrichten werden gesendet.

**الحكم:** جمع الأخبار محفوظ وحُذف Radiosender؛ werden gesendet للبث.

مراجع متصلة: PASSIVE, PART, SEND.

### writing-model-03

3. Die Einwohner werden eingeladen.

**الحكم:** جمع السكان محفوظ وحُذفت Die Stadt؛ eingeladen لا einladen، والأداء كتابة فقط.

مراجع متصلة: PASSIVE, PART, SEND.

### card-01

- **Der Bericht wird veröffentlicht.** → يُنشر التقرير.

**الحكم:** التقرير مفرد مع wird وPartizip II أخير.

مراجع متصلة: PASSIVE, FUTUR, ELECTION, COUNCIL.

### card-02

- **Die Nachrichten werden gesendet.** → تُبثّ الأخبار.

**الحكم:** الأخبار جمع مع werden وgesendet للبث.

مراجع متصلة: PASSIVE, FUTUR, ELECTION, COUNCIL.

### card-03

- **er/sie/es wird؛ wir/sie/Sie werden؛ ich werde؛ du wirst؛ ihr werdet** — طابق الشخص والعدد؛ لا يكفي وصف «مفرد/جمع» وحده.

**الحكم:** صُحح اختزال المطابقة إلى مفرد وجمع بإظهار الشخص، بما فيه werde وwirst وwerdet وSie الاحترام.

مراجع متصلة: PASSIVE, FUTUR, ELECTION, COUNCIL.

### card-04

- **die Wahl / der Stadtrat / die Sitzung** → عملية انتخاب / مجلس المدينة / الجلسة (معاني هذا السياق).

**الحكم:** معاني Wahl وStadtrat وSitzung لهذا السياق، لا حصر لجميع معاني الكلمات.

مراجع متصلة: PASSIVE, FUTUR, ELECTION, COUNCIL.

### DL-A2-08-T01

1. Der Bericht ______ heute veröffentlicht.
2. Die Nachrichten ______ um acht Uhr gesendet.
3. Ich ______ zu einem Interview eingeladen.
4. Ihr ______ über das Thema informiert.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الشكل والتعريف والعدد والحدث مرتبطون بالمطلوب.

مراجع متصلة: PASSIVE, PART, SEND.

- **Der Bericht ______ heute veröffentlicht.** → wird — Der Bericht مفرد فيحتاج wird.

- **Die Nachrichten ______ um acht Uhr gesendet.** → werden — Nachrichten جمع فيحتاج werden؛ ليست werdet الخاصة بـihr.

- **Ich ______ zu einem Interview eingeladen.** → werde — ich أول شخص مفرد فيحتاج werde، لا مجرد wird.

- **Ihr ______ über das Thema informiert.** → werdet — ihr ثاني شخص جمع فيحتاج werdet.

### DL-A2-08-T02

1. veröffentlichen → ______
2. beantworten → ______
3. organisieren → ______
4. einladen → ______

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الشكل والتعريف والعدد والحدث مرتبطون بالمطلوب.

مراجع متصلة: PASSIVE, PART, SEND.

- **veröffentlichen → ______** → veröffentlicht — veröffentlicht هي الصيغة المطلوبة دون ge.

- **beantworten → ______** → beantwortet — beantwortet بالبادئة be- بلا ge.

- **organisieren → ______** → organisiert — organisiert مع -ieren دون ge.

- **einladen → ______** → eingeladen — eingeladen فيها ge بعد ein- ونهاية -en.

### DL-A2-08-T03

حوّل إلى Vorgangspassiv im Präsens، واحذف المنفذ؛ ابدأ بالأسماء المعطاة دون تغيير التعريف أو العدد.

1. **Die Zeitung veröffentlicht den Bericht.** → Der Bericht ______ ______.
2. **Der Radiosender sendet die Nachrichten.** → Die Nachrichten ______ ______.
3. **Die Stadt lädt die Einwohner ein.** → Die Einwohner ______ ______.
4. **Die Redaktion beantwortet die Fragen.** → Die Fragen ______ ______.

**تطبيق P02 — كتابة فقط:**

أعد كتابة الجمل1–3 من تمرين3 كاملة في Vorgangspassiv im Präsens، كتابة فقط: نشر التقرير، وبث الأخبار، ودعوة السكان. ابدأ بالأسماء المعطاة Der Bericht وDie Nachrichten وDie Einwohner، واحفظ التعريف والعدد والحدث، واحذف منفذ الفعل دون إضافة von. اكتب ثلاث جمل تامة، لا الفراغات وحدها؛ لا جهر أو تسجيل أو شريك مطلوب.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الشكل والتعريف والعدد والحدث مرتبطون بالمطلوب.

مراجع متصلة: PASSIVE, PART, SEND.

- ****Die Zeitung veröffentlicht den Bericht.** → Der Bericht ______ ______.** → wird veröffentlicht — المفعول den Bericht يصبح Der Bericht مرفوعًا؛ يحذف الناشر.

- ****Der Radiosender sendet die Nachrichten.** → Die Nachrichten ______ ______.** → werden gesendet — تبقى الأخبار جمعًا مع werden وgesendet؛ حذف Radiosender لا يغير البث.

- ****Die Stadt lädt die Einwohner ein.** → Die Einwohner ______ ______.** → werden eingeladen — المدينة تدعو السكان؛ يصبح السكان المسند إليه الجمع، لا المنفذ.

- ****Die Redaktion beantwortet die Fragen.** → Die Fragen ______ ______.** → werden beantwortet — الأسئلة جمع مع werden وbeantwortet؛ حذفت Redaktion حسب التعليمات.

### DL-A2-08-T04

اختر Vorgangspassiv im Präsens، لا وصف الحالة باستخدام sein:

1. أ. Die Sitzung wird übertragen. ب. Die Sitzung werden übertragen.
2. أ. Die Fragen werden beantwortet. ب. Die Fragen wird beantwortet.
3. أ. Der Bericht wird veröffentlicht. ب. Der Bericht wird veröffentlichen.
4. أ. Am Freitag wird eine Veranstaltung organisiert. ب. Am Freitag ist eine Veranstaltung organisiert.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الشكل والتعريف والعدد والحدث مرتبطون بالمطلوب.

مراجع متصلة: PASSIVE, PART, SEND.

- **أ. Die Sitzung wird übertragen. ب. Die Sitzung werden übertragen.** → أ — أ يطابق Sitzung المفرد؛ werden في ب لا يطابقه.

- **أ. Die Fragen werden beantwortet. ب. Die Fragen wird beantwortet.** → أ — أ يطابق Fragen الجمع؛ wird في ب لا يطابقه.

- **أ. Der Bericht wird veröffentlicht. ب. Der Bericht wird veröffentlichen.** → أ — أ فيه Partizip II؛ ب فيه مصدر وليس صيغة الحدث المطلوبة.

- **أ. Am Freitag wird eine Veranstaltung organisiert. ب. Am Freitag ist eine Veranstaltung organisiert.** → أ — أ صيغة الحدث؛ ب قد يصح لوصف الحالة لكنه لا يحقق الطلب المحدد.

### DL-A2-08-T05

حدّد صحيحًا أو خطأ:

1. Die Sitzung wird am Mittwoch organisiert.
2. Ein neuer Platz im Zentrum wird geplant.
3. Die Sitzung wird nicht im Internet übertragen.
4. Die Informationen werden am nächsten Tag veröffentlicht.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الشكل والتعريف والعدد والحدث مرتبطون بالمطلوب.

مراجع متصلة: PASSIVE, PART, SEND.

- **Die Sitzung wird am Mittwoch organisiert.** → صحيح — مطابق لأول جملة وموعد الأربعاء.

- **Ein neuer Platz im Zentrum wird geplant.** → صحيح — التخطيط صريح؛ لا ادعاء أن الساحة بنيت.

- **Die Sitzung wird nicht im Internet übertragen.** → خطأ: Die Sitzung wird im Internet übertragen. — nicht يناقض النقل المصرح به؛ أزيل الادعاء القديم عن الإذاعة حتى لا يحتاج استنتاج حصر البث.

- **Die Informationen werden am nächsten Tag veröffentlicht.** → صحيح — مطابق لليوم التالي؛ لا يطلب تاريخًا تقويميًا.

### DL-A2-08-T06

أكمل من البنك، واستعمل كل كلمة مرة: **Herbst — zwei — Freitag — Internetseite**.

1. Die neue Buslinie wird im ______ eröffnet.
2. Es werden ______ Haltestellen gebaut.
3. Die Informationsveranstaltung wird am ______ organisiert.
4. Die Einladung wird auf der ______ der Stadt veröffentlicht.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الشكل والتعريف والعدد والحدث مرتبطون بالمطلوب.

مراجع متصلة: PASSIVE, PART, SEND.

- **Die neue Buslinie wird im ______ eröffnet.** → Herbst — Herbst فصل الافتتاح، لا يوم الفعالية.

- **Es werden ______ Haltestellen gebaut.** → zwei — zwei يحفظ العدد؛ المطابقة مع Haltestellen رغم es في البداية.

- **Die Informationsveranstaltung wird am ______ organisiert.** → Freitag — Freitag يوم الفعالية فقط.

- **Die Einladung wird auf der ______ der Stadt veröffentlicht.** → Internetseite — Internetseite من البنك؛ تستعمل كل كلمة مرة.

### DL-A2-08-T07

في1–4 اكتب **معلوم** أو **مجهول**، وعيّن werden المصرف وPartizip II في جملتي المجهول. في5 اختر ما يركز عليه النمط:

1. Die Zeitung veröffentlicht einen Bericht.
2. Ein Bericht wird veröffentlicht.
3. Die Stadt lädt die Einwohner ein.
4. Die Einwohner werden eingeladen.
5. في Ein Bericht wird veröffentlicht، التركيز على **نشر التقرير / هوية الناشر**.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الشكل والتعريف والعدد والحدث مرتبطون بالمطلوب.

مراجع متصلة: PASSIVE, PART, SEND.

- **Die Zeitung veröffentlicht einen Bericht.** → معلوم — الصحيفة منفذ والبناء معلوم رغم نهاية الفعل -t.

- **Ein Bericht wird veröffentlicht.** → مجهول: wird / veröffentlicht — wird مصرف وveröffentlicht هو Partizip II؛ صيغتان محددتان في المطلوب.

- **Die Stadt lädt die Einwohner ein.** → معلوم — lädt…ein معلوم؛ الفصل لا يجعل الفعل مبنيًا للمجهول.

- **Die Einwohner werden eingeladen.** → مجهول: werden / eingeladen — werden مصرف وeingeladen هو Partizip II؛ السكان يتلقون الدعوة.

- **في Ein Bericht wird veröffentlicht، التركيز على **نشر التقرير / هوية الناشر**.** → نشر التقرير — الناشر محذوف؛ التركيز على نشر التقرير لا إثبات هوية الناشر.

### DL-A2-08-T08

**P01 — خبر مع الجهر:**

اكتب ثلاث جمل لخبر محلي خيالي: الجملة1 تنظيم جلسة يوم الأربعاء؛ الجملة2 الإجابة عن الأسئلة؛ الجملة3 نشر المعلومات في اليوم التالي على صفحة المدينة. استعمل Vorgangspassiv im Präsens مع werden وPartizip II في الجمل الثلاث، وراعِ المفرد والجمع، ثم اقرأ الجميع بصوت مرتفع. لا تتحدث عن حدث حقيقي أو تنشر الخبر، ولا شريك أو تسجيل مطلوب.

**الحكم:** ثلاث جمل بمعطيات محددة مع الجهر؛ ليست كتابة ثلاثة أخبار مفتوحة أو طلب نشرها.

مراجع متصلة: PASSIVE, PART, WEB.

- **P01 مطلب 1** → 1. Am Mittwoch wird eine Sitzung organisiert. — المنفذ محذوف؛ Sitzung مفرد مع wird، والأربعاء مطابق للمعطى.

- **P01 مطلب 2** → 2. Die Fragen werden beantwortet. — Fragen جمع مع werden وbeantwortet دون ge؛ الحدث الثاني المطلوب.

- **P01 مطلب 3** → 3. Am nächsten Tag werden die Informationen auf der Webseite der Stadt veröffentlicht. — المعلومات جمع، ونشرها في اليوم التالي على الصفحة؛ Partizip II أخير. تقرأ الجمل الثلاث جهرًا.

### DL-A2-08-Q01

أكمل: Die Nachrichten ___ um acht Uhr gesendet.

**الحكم:** الأخبار جمع، لذلك نستخدم werden؛ ويأتي Partizip II gesendet في نهاية الجملة.

مراجع متصلة: PASSIVE, PART.

**المفتاح:** werden

- بديل1 (الصحيح): **werden** — werden يطابق Nachrichten الجمع.

- بديل2 (غير المختار): **wird** — wird للغائب المفرد فلا يطابق Nachrichten.

- بديل3 (غير المختار): **werdet** — werdet لـihr وليس للأخبار.

### DL-A2-08-Q02

ما صيغة Partizip II للفعل **veröffentlichen**؟

**الحكم:** صيغة Partizip II هي veröffentlicht، وتأتي في نهاية جملة المبني للمجهول.

مراجع متصلة: PASSIVE, PART.

**المفتاح:** veröffentlicht

- بديل1 (غير المختار): **veröffentlichte** — veröffentlichte قد يكون ماضيًا أو وصفًا مصرفًا، لا Partizip II المجرد المطلوب.

- بديل2 (الصحيح): **veröffentlicht** — veröffentlicht هو المطلوب.

- بديل3 (غير المختار): **veröffentlichen** — veröffentlichen مصدر وليس Partizip II.

### DL-A2-08-Q03

أي جملة في المبني للمجهول صحيحة؟

**الحكم:** المبني للمجهول في المضارع: werden مصرّفًا + Partizip II.

مراجع متصلة: PASSIVE, PART.

**المفتاح:** Der Bericht wird veröffentlicht.

- بديل1 (غير المختار): **Der Bericht wird veröffentlichen.** — werden مع مصدر ليس صيغة الحدث المطلوبة.

- بديل2 (غير المختار): **Der Bericht veröffentlicht werden.** — لا يوجد فعل شخصي مصرف مناسب مع Der Bericht.

- بديل3 (الصحيح): **Der Bericht wird veröffentlicht.** — wird مع المفرد وveröffentlicht في النهاية؛ صحيح.

### DL-A2-08-Q04

لماذا يستخدم الخبر المبني للمجهول أحيانًا؟

**الحكم:** يبرز الحدث بدل منفذه، وقد يكون المنفذ معروفًا لكنه غير مذكور أو ليس محور الخبر؛ لا تعني الصيغة أن الخبر صحيح تلقائيًا.

مراجع متصلة: PASSIVE, PART.

**المفتاح:** لأن المهم هو الحدث أو متلقي الفعل، لا الفاعل.

- بديل1 (غير المختار): **لأن الجملة تتحدث عن المستقبل فقط.** — المجهول ليس مقصورًا على المستقبل.

- بديل2 (الصحيح): **لأن المهم هو الحدث أو متلقي الفعل، لا الفاعل.** — تقديم الحدث بدل منفذه هو الوظيفة المستهدفة.

- بديل3 (غير المختار): **لأن الفاعل يجب أن يكون ich.** — ليس شرطًا أن يكون المسند إليه ich؛ تتعدد الأسماء والضمائر.

### DL-A2-08-Q05

متى تُنظّم جلسة مجلس المدينة؟

**الحكم:** النص يقول am Mittwoch.

**المفتاح:** يوم الأربعاء.

- بديل1 (الصحيح): **يوم الأربعاء.** — الأربعاء صريح في القراءة.

- بديل2 (غير المختار): **يوم السبت.** — السبت غير مذكور.

- بديل3 (غير المختار): **في الخريف.** — الخريف في الاستماع لا القراءة.

### DL-A2-08-Q06

ماذا يُخطط له في وسط المدينة؟

**الحكم:** يقول النص: Ein neuer Platz im Zentrum wird geplant. الاسم Ein neuer Platz في الرفع بعد التحويل؛ التخطيط لا يعني أن الساحة بُنيت.

**المفتاح:** ساحة جديدة.

- بديل1 (غير المختار): **محطة قطار.** — لا مشروع محطة قطار مذكور.

- بديل2 (غير المختار): **مهرجان رياضي.** — لا مهرجان رياضي مذكور.

- بديل3 (الصحيح): **ساحة جديدة.** — ساحة جديدة في الوسط؛ صُحح شرح الرفع إلى Ein neuer Platz.

### DL-A2-08-Q07

أين تُنقل جلسة المجلس؟

**الحكم:** Die Sitzung wird im Internet übertragen.

**المفتاح:** في الإنترنت.

- بديل1 (غير المختار): **في الإذاعة فقط.** — فقط تناقض وجود النقل عبر الإنترنت؛ لا حاجة لافتراض غياب أي بث إضافي.

- بديل2 (الصحيح): **في الإنترنت.** — im Internet هو الدليل.

- بديل3 (غير المختار): **في المسرح.** — المسرح غير مذكور.

### DL-A2-08-Q08

في **Zwei Haltestellen werden gebaut**، ما عدد محطات التوقف المذكورة؟

**الحكم:** zwei Haltestellen تعني محطتين. الصيغة مضارع مبني للمجهول؛ لا نستنتج المستقبل من werden وحدها.

**المفتاح:** محطتان.

- بديل1 (الصحيح): **محطتان.** — zwei تعني محطتين.

- بديل2 (غير المختار): **محطة واحدة.** — واحدة ليست العدد المذكور.

- بديل3 (غير المختار): **أربع محطات.** — أربع ليست العدد المذكور.

### DL-A2-08-Q09

في **Die Informationen werden morgen veröffentlicht**، ما الفعل الذي جاء في نهاية الجملة؟

**الحكم:** Partizip II veröffentlicht يأتي في النهاية.

مراجع متصلة: PASSIVE, PART.

**المفتاح:** veröffentlicht

- بديل1 (غير المختار): **werden** — werden هو المصرف في أول الإطار الفعلي، لا نهايته.

- بديل2 (غير المختار): **morgen** — morgen ظرف وقت وليس فعلًا.

- بديل3 (الصحيح): **veröffentlicht** — veröffentlicht هو Partizip II المتأخر.

### DL-A2-08-Q10

أكمل بصيغة الحدث في المضارع **Vorgangspassiv im Präsens**، لا وصف الحالة: Am Freitag ___ eine Veranstaltung ___. (organisieren)

**الحكم:** eine Veranstaltung مفرد فتأخذ wird، وPartizip II هو organisiert. ist … organisiert قد يصف الحالة، لكنه ليس صيغة الحدث المطلوبة.

مراجع متصلة: PASSIVE, PART.

**المفتاح:** wird … organisiert

- بديل1 (غير المختار): **werden … organisieren** — werden لا يطابق المفرد وorganisieren مصدر؛ لا يحقق النمط.

- بديل2 (الصحيح): **wird … organisiert** — wird للمفرد وorganisiert هو Partizip II؛ صيغة الحدث المطلوبة.

- بديل3 (غير المختار): **ist … organisiert** — قد يصح لوصف الحالة؛ مستبعد لأن المطلوب Vorgangspassiv لا لأنه خطأ مطلق.

### DL-A2-08-P01

اكتب ثلاث جمل لخبر محلي خيالي: الجملة1 تنظيم جلسة يوم الأربعاء؛ الجملة2 الإجابة عن الأسئلة؛ الجملة3 نشر المعلومات في اليوم التالي على صفحة المدينة. استعمل Vorgangspassiv im Präsens مع werden وPartizip II في الجمل الثلاث، وراعِ المفرد والجمع، ثم اقرأ الجميع بصوت مرتفع. لا تتحدث عن حدث حقيقي أو تنشر الخبر، ولا شريك أو تسجيل مطلوب.

**الحكم:** مطابقة المصدر والنموذج: ثلاث جمل مع الجهر، حد130 وT08. لا تسجيل أو شريك أو نشر خبر مطلوب.

مراجع متصلة: PASSIVE, PART.

- معيار `taskCompletion`: ثلاث جمل عن تنظيم الجلسة الأربعاء والإجابة عن الأسئلة ونشر المعلومات في اليوم التالي على صفحة المدينة؛ قرأت الجميع جهرًا. — عدد الجمل وقناة الأداء محددان؛ النموذج يفي بهما لكن التطبيق لا يحكم آليًا على المعنى.

- معيار `meaningClarity`: الحدث واليوم ووسيلة النشر واضحة وفق المعطيات الخيالية؛ لا ادعاء نشر خبر حقيقي أو تحديد منفذ غير مذكور. — المعطيات الخيالية أو التعريف والعدد والحدث محفوظة؛ لا اختلاق منفذ عند حذفه.

- معيار `targetSkill`: werden بحسب الاسم: wird مع Sitzung وwerden مع Fragen/Informationen، وPartizip II في نهاية كل جملة. — werden يطابق الاسم وPartizip II في النهاية؛ هذا معيار إقرار، لا مصحح لغة أو نطق.

الدليل المحلي: `{"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 130, "speakAloud": true, "audioRequired": false}`

### DL-A2-08-P02

أعد كتابة الجمل1–3 من تمرين3 كاملة في Vorgangspassiv im Präsens، كتابة فقط: نشر التقرير، وبث الأخبار، ودعوة السكان. ابدأ بالأسماء المعطاة Der Bericht وDie Nachrichten وDie Einwohner، واحفظ التعريف والعدد والحدث، واحذف منفذ الفعل دون إضافة von. اكتب ثلاث جمل تامة، لا الفراغات وحدها؛ لا جهر أو تسجيل أو شريك مطلوب.

**الحكم:** مطابقة المصدر والنموذج: أول ثلاث جمل منT03 كاملة كتابة فقط، حد90. لا تسجيل أو شريك أو نشر خبر مطلوب.

مراجع متصلة: PASSIVE, PART.

- معيار `taskCompletion`: ثلاث جمل تامة محولة من البنود1–3، كتابة فقط، عن التقرير والأخبار والسكان، دون ذكر المنفذ. — عدد الجمل وقناة الأداء محددان؛ النموذج يفي بهما لكن التطبيق لا يحكم آليًا على المعنى.

- معيار `meaningClarity`: التعريف والعدد والحدث محفوظة؛ Der Bericht في الرفع بدل den Bericht، ولا تبديل بين الأخبار والتقرير أو السكان. — المعطيات الخيالية أو التعريف والعدد والحدث محفوظة؛ لا اختلاق منفذ عند حذفه.

- معيار `targetSkill`: wird veröffentlicht وwerden gesendet وwerden eingeladen، مع Partizip II في نهاية كل جملة لا المصدر. — werden يطابق الاسم وPartizip II في النهاية؛ هذا معيار إقرار، لا مصحح لغة أو نطق.

الدليل المحلي: `{"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 90, "speakAloud": false, "audioRequired": false}`

### DL-A2-08-AUD-PHR-01

Die Nachricht. Die Schlagzeile. Der Bericht. Die Redaktion. Die Zeitung. Der Radiosender. Das Interview. Die Wahl. Der Stadtrat. Die Sitzung. Die Bevölkerung. Die Webseite. Der Vorschlag. Der Einwohner. Die Einwohnerin. Veröffentlichen. Berichten über. Beantworten. Einladen. Organisieren. Bauen. Eröffnen. Senden. Übertragen.

**الحكم:** كلمات الأصل ومقاطعه وأصواته ومساراته وحالته محفوظة؛ المراجعة نصية فقط، مع قيد صريح على تعدادMODEL، لا اعتماد صوتي جديد.

مراجع متصلة: PASSIVE, PART, FUTUR.

- **Die Nachricht.** — خبر مفرد Nachricht وأخبار Nachrichten؛ الأخير جمع نحوي.

- **Die Schlagzeile.** — Schlagzeile العنوان الرئيسي؛ مؤنث وجمعه Schlagzeilen.

- **Der Bericht.** — Bericht تقرير؛ مذكر وجمعه Berichte، فلا يخلط بالخبر المفرد.

- **Die Redaktion.** — Redaktion هيئة تحرير؛ مؤنث وجمعه Redaktionen، لا شخص معين.

- **Die Zeitung.** — Zeitung صحيفة؛ مؤنث وجمعه Zeitungen، وليست محطة إذاعة.

- **Der Radiosender.** — Radiosender محطة إذاعة؛ الجمع بالصيغة نفسها، وليس شخصًا بالضرورة.

- **Das Interview.** — Interview مقابلة؛ محايد وجمعه Interviews.

- **Die Wahl.** — Wahl عملية انتخاب هنا، وقد تعني اختيارًا؛ الجمع Wahlen.

- **Der Stadtrat.** — Stadtrat مجلس المدينة هنا، وله أيضًا معنى عضو مجلس بحسب السياق.

- **Die Sitzung.** — Sitzung جلسة؛ الجمع Sitzungen، وorganisiert لا تثبت أنها انعقدت فعلًا.

- **Die Bevölkerung.** — Bevölkerung السكان؛ اسم جمعي مفرد نحويًا، لا رأس عبارة Fragen aus der Bevölkerung.

- **Die Webseite.** — Webseite صفحة ويب، وجمعها Webseiten؛ صُححت مساواتها دائمًا بموقع كامل.

- **Der Vorschlag.** — Vorschlag اقتراح وجمعه Vorschläge؛ جمع الاقتراح لا يعني قبوله.

- **Der Einwohner.** — Einwohner اسم مذكر للساكن؛ لا جنسية أو حق اقتراع مستنتج.

- **Die Einwohnerin.** — Einwohnerin اسم مؤنث للساكنة؛ الجمع في الجدول.

- **Veröffentlichen.** — veröffentlichen ينشر؛ veröffentlicht حاضر أو Partizip II بحسب البناء.

- **Berichten über.** — حُفظ über في التصريف؛ berichten über يقدم تقريرًا عن موضوع.

- **Beantworten.** — beantworten يجيب عن؛ beantwortet بلا ge في Partizip II.

- **Einladen.** — einladen يدعو؛ lädt ein منفصل، وPartizip II هو eingeladen.

- **Organisieren.** — organisieren ينظم؛ organisiert دون ge مع -ieren.

- **Bauen.** — bauen يبني؛ gebaut صيغة الحدث، لا مجرد تخطيطه.

- **Eröffnen.** — eröffnen يفتتح؛ eröffnet بلا ge، وهو الحدث المرتبط بالخط.

- **Senden.** — senden يبث أو يرسل؛ gesendet للبث هنا دون تعميم على كل المعاني واللهجات.

- **Übertragen.** — übertragen ينقل أو يبث هنا؛ überträgt حاضر وübertragen صيغة Partizip II غير منفصلة.

### DL-A2-08-AUD-MODEL-01

Ich werde. Du wirst. Er, sie und es wird. Wir werden. Ihr werdet. Sie werden. Der Bericht wird veröffentlicht. Die Nachrichten werden um acht Uhr gesendet. Ein Interview wird im Radio gesendet. Die Zeitung berichtet über die Wahl. Die Zeitung veröffentlicht einen Bericht. Ein Bericht wird veröffentlicht. Heute wird eine Sitzung übertragen. Der Bericht wird veröffentlicht. Die Nachrichten werden gesendet. Die Einwohner werden eingeladen. Die Fragen werden beantwortet.

**الحكم:** كلمات الأصل ومقاطعه وأصواته ومساراته وحالته محفوظة؛ المراجعة نصية فقط، مع قيد صريح على تعدادMODEL، لا اعتماد صوتي جديد.

مراجع متصلة: PASSIVE, PART, FUTUR.

- **Ich werde.** — Ich werde سرد تصريف، وليس جملة مجهول كاملة.

- **Du wirst.** — Du wirst سرد تصريف يختلف عن wird.

- **Er, sie und es wird.** — Er, sie und es wird تعداد ملتبس؛ ليس جملة صحيحة بفاعل مركب. التصحيح المكتوب: Er wird. Sie wird. Es wird. لم يتغير الصوت أو التفريغ ولم يُستمع إليهما.

- **Wir werden.** — Wir werden سرد صيغة الجمع.

- **Ihr werdet.** — Ihr werdet سرد صيغة المخاطبين.

- **Sie werden.** — Sie werden للجمع أو الاحترام، لا الأنثى المفردة.

- **Der Bericht wird veröffentlicht.** — Bericht مفرد مع wird وveröffentlicht؛ لا يذكر المنفذ.

- **Die Nachrichten werden um acht Uhr gesendet.** — Nachrichten جمع مع werden وgesendet؛ الثامنة موعد البث.

- **Ein Interview wird im Radio gesendet.** — Interview مفرد محايد مع wird؛ im Radio وسيلة البث.

- **Die Zeitung berichtet über die Wahl.** — معلوم عن الانتخاب؛ über متعلق بالفعل berichtet، ولا werden هنا.

- **Die Zeitung veröffentlicht einen Bericht.** — معلوم: الصحيفة تنشر einen Bericht في النصب.

- **Ein Bericht wird veröffentlicht.** — مجهول: Ein Bericht في الرفع مع wird؛ لا تغيير التنكير إلى التعريف.

- **Heute wird eine Sitzung übertragen.** — Heute في البداية وwird بعده؛ eine Sitzung مفرد وübertragen صيغة البث.

- **Der Bericht wird veröffentlicht.** — den Bericht صار Der Bericht مع حفظ التعريف وحذف الصحيفة؛ wird veröffentlicht.

- **Die Nachrichten werden gesendet.** — جمع الأخبار محفوظ وحُذف Radiosender؛ werden gesendet للبث.

- **Die Einwohner werden eingeladen.** — جمع السكان محفوظ وحُذفت Die Stadt؛ eingeladen لا einladen، والأداء كتابة فقط.

- **Die Fragen werden beantwortet.** — الأسئلة جمع مع werden وbeantwortet؛ يطابق المساعدة وبند التحويل الرابع.

### DL-A2-08-AUD-READ-01

In der Stadt Linden wird am Mittwoch eine Sitzung des Stadtrats organisiert. Ein neuer Platz im Zentrum wird geplant. Die Sitzung wird im Internet übertragen. Fragen aus der Bevölkerung werden beantwortet. Am Ende werden mehrere Vorschläge gesammelt. Die Informationen werden am nächsten Tag auf der Webseite der Stadt veröffentlicht.

**الحكم:** كلمات الأصل ومقاطعه وأصواته ومساراته وحالته محفوظة؛ المراجعة نصية فقط، مع قيد صريح على تعدادMODEL، لا اعتماد صوتي جديد.

مراجع متصلة: PASSIVE, PART, FUTUR.

- **In der Stadt Linden wird am Mittwoch eine Sitzung des Stadtrats organisiert.** — تنظيم جلسة المجلس الأربعاء في Linden؛ خبر خيالي لا يسمي المنظم.

- **Ein neuer Platz im Zentrum wird geplant.** — تخطيط ساحة جديدة في الوسط؛ Ein neuer Platz مرفوع، لا einen، ولا إثبات للبناء.

- **Die Sitzung wird im Internet übertragen.** — النقل عبر الإنترنت صريح؛ لا يستنتج انحصار البث فيه دون نص.

- **Fragen aus der Bevölkerung werden beantwortet.** — الأسئلة من السكان هي المسند إليه الجمع مع werden؛ لا نفترض أن السكان يجيبون.

- **Am Ende werden mehrere Vorschläge gesammelt.** — تُجمع عدة اقتراحات في النهاية؛ mehrere ليس عددًا دقيقًا، ولا يفيد ذلك الموافقة عليها.

- **Die Informationen werden am nächsten Tag auf der Webseite der Stadt veröffentlicht.** — تنشر المعلومات في اليوم التالي على صفحة المدينة؛ جمع Informationen مع werden.

### DL-A2-08-AUD-LST-01

In den Nachrichten geht es heute um eine neue Buslinie. Die Buslinie wird im Herbst eröffnet. Zwei Haltestellen werden gebaut. Eine Informationsveranstaltung wird am Freitag organisiert. Die Einladung wird auf der Internetseite der Stadt veröffentlicht.

**الحكم:** كلمات الأصل ومقاطعه وأصواته ومساراته وحالته محفوظة؛ المراجعة نصية فقط، مع قيد صريح على تعدادMODEL، لا اعتماد صوتي جديد.

مراجع متصلة: PASSIVE, PART, FUTUR.

- **In den Nachrichten geht es heute um eine neue Buslinie.** — موضوع الأخبار خط جديد؛ In den Nachrichten geht es … ليست صيغة مجهول.

- **Die Buslinie wird im Herbst eröffnet.** — افتتاح الخط في الخريف؛ صيغة مضارع مع سياق زمني، لا قاعدة أن werden تعني المستقبل.

- **Zwei Haltestellen werden gebaut.** — محطتا توقف مذكورتان؛ عدد اثنين وجمع werden، لا محطتا قطار مفترضتان.

- **Eine Informationsveranstaltung wird am Freitag organisiert.** — فعالية إعلامية تنظم الجمعة؛ مفرد مع wird، لا جلسة الأربعاء في القراءة.

- **Die Einladung wird auf der Internetseite der Stadt veröffentlicht.** — الدعوة على صفحة المدينة؛ لا وقت نشر أو إثبات أنها صفحة Linden.

## البصمات

SHA-256 للمصدر والتقييم ولكل كائن صوت كامل فيJSON المناظر،مع نتيجة مطابقة474MP3 ببصماتGit السابقة. هذه مطابقة نصوص وملفات،لا إثبات نطق أو إصلاح لقيدMODEL الصوتي.
