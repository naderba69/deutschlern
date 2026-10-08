# مراجعة CR25 — A2.7: تعلّم اللغات والسفر والغاية

رُوجع **A2.7 — تعلّم اللغات والسفر والغاية بـum … zu** في **94 وحدة و34 بندًا أو مطلبًا داخل التمارين**، مع **10 مراجع مقروءة كاملة**. ضُبطت الغاية والفاصلة وموضعzu مع المصدر، وفُرق بين نفس المنفذ واختلافه وبين mich وsich. حُذف افتراض جنس متكلم الاستماع دون تغيير التسجيل، وقُيدت روابط التوصيل بأهداف معطاة وصُحح بند قراءة ليستند إلى دليل صريح. **P01/T08أ أربع جمل مع الجهر**؛ **P02/T08ب ثلاث جمل كتابة فقط**، بمعايير ونموذجين مطابقين. Q02/Q10→T07 وQ08→T05 محفوظ وصُحح سجله في الكتالوج. الخيارات الثلاثون وفهارس المفاتيح و80% محفوظة. الإصدار `a2-07-v2` والمخزن `v72`. أربعة أصول/10 مقاطع محفوظة دون توليد أو استماع أو اعتماد جديد. **الحملة24/53 درسًا والبوابة منفصلة؛ تبقى29 درسًا، والتاليCR26/A2.8.** هذا سجل مراجعة وفحوص، لا شهادة مستوى أو إعلان اكتمال الدمج.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم `content/A2/lesson-07-language-learning-travel-purpose.md/.assessment.json`، والحزمة `data/course.json`، و20 صفًا في `data/production-task-catalog.csv` وأربعة صفوف مرجعية فقط في `data/audio-asset-register.csv`.
- `service-worker.js` واختباراه، و`tools/test_progression.cjs` و`tools/test_accessibility_audit.cjs` والحارس `tools/test_a2_07_review.py`.
- السجلان `data/reviews/a2-07-review.json/.md`، وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.31 وتقرير المتصفح وملفا التسليم. لا تعديلplaylist أوMP3 أوapp.js أوCSS.
- **زوال عائق الدفع السابق:** رُفع التنفيذ في **361d33ef92af796fc11af44a9d323d3083445307** وتطابق معorigin. نجح دفعGitHub في هذا الدور؛ لا نطلب أي كلمات مرور أوPAT أو رموز.
- كانتmetadata قد عادت إلى88f3c06، بينما بقيت التعديلات. قورنت695 ملفًا بخط الأساس:12 ملفًا متغيرًا متوقعًا وحارس جديد متوقع، وبقية الملفات مطابقة. أُجريreset --mixed للmetadata فقط مع فحص بقاء بايتات كل ملف متغير وجديد، ثم أعيدcommit العمل على **نفس الفرع**. المعرفان المحليان القديمان3a82c8a و9fbad15 غير مرفوعين بهويتهما؛ محتواهما محفوظ في361d33e. لا reset أعمى أو حذف عمل.
- مجموعة السجل بعنوان `Record CR25 granular A2.7 review and cumulative checks` تُرفع فور فحصها؛ معرفها فيgit log بعد الدفع، ثم يسجل إيصالها. الفرع الوحيد `arena/01a1036f-deutschlern`؛ لا تبديل أو دمجPR#1.
- لا واجهة بعيدة أو نشرProduction مدّعى. لا ننسب حالةVercel القديمة إلى هذه المجموعة ولا نطلب إعادة نشر متكررة أو ترقية مدفوعة بسبب حد الخدمة السابق.
- التالي **CR26/A2.8 — الإعلام والأخبار والسياسة: المبني للمجهول**: اقرأ عنوان ومصدر الدرس الفعلي وتقييمه وأصوله، ثم راجع كل نص ودور وتمرين وبديل ومعيار بالمراجع قبل التعديل. لا حاجة إلى إعادةA2.7 أو تسجيلاته.
- القيود مستمرة: كل تعديل يُرفع فور فحص مجموعته؛ المحتوى والتقييم والتطبيق قبل الصوت؛ لا مراجع بشري شرطًا للمتابعة. لا إخفاء أو إعادة توليد أو تغييرready/نهائي بلا موافقة؛ حد10طلبات صوت/رد. B1.9/B1.10 معلقان، واختيارB1.11 محفوظ. احفظHiba02/Maha00 وA2.7Q08→T05 واتساقA2.9 وتاريخB2.6 دون إعادة تسميتهB2.7.

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

## طريقة العد وحدود الدليل

94 وحدة:6 للنطاق والشرح العام،17 صف مفردات،3 أمثلة قواعد،8 مساعدات،7 أدوار حوار،5 جمل قراءة و5 أسئلتها،4 جمل استماع و4 أسئلته،4 جمل نموذج الجهر،3 جمل نموذج الكتابة،4 بطاقات،8 تمارين،10 أسئلة تقييم،مهمتا أداء،و4 أصول صوت. بنود التمارين34 =4+3+3+5+4+4+4+7. البدائل والمعايير وغايتا جملة القراءة الثالثة و20 وحدةPHR تظهر تحت وحداتها ولا تضخم العدد. القصص خيالية؛ دليل فهمها النص المحلي، لا تحقق خارجي من حياة أشخاص.

## المراجع المقروءة — 2026-10-08

- **INF — Lingolia — Infinitivsätze**: https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/infinitivsaetze
  - الغاية بـum … zu، وإحالة الغاية إلى الفاعل في النمط البسيط، وموضع المصدر وzu داخل المنفصل؛ لا نعمم ذلك على المصدر المرتبط بمفعول بعد empfehlen مثلًا. الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **ZU — Lingolia — Infinitiv mit/ohne zu**: https://deutsch.lingolia.com/de/grammatik/verben/infinitiv
  - المصدر بلاzu بعد möchten/wollen، ومعzu في تركيب الغاية، ودمجzu داخل الفعل المنفصل؛ لا نعتمد غياب الفاصلة في بعض أمثلة الصفحة لتعليم الغاية. الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **SEP — Lingolia — Trennbare Verben**: https://deutsch.lingolia.com/de/grammatik/verben/trennbare
  - an-/mit-/nach-/vor- قابلة للفصل في أمثلة الدرس؛be-/ver-/er- غير منفصلة. لا تعميم على كل بادئة ألمانية. الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **MODAL — Lingolia — Modalverben**: https://deutsch.lingolia.com/de/grammatik/verben/modalverben
  - möchten/wollen مع مصدر؛ تحويل النية إلى غاية التدريب دون نسخ الفعل الناقص إلى الفراغ. الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **NACH — Duden — nachschlagen**: https://www.duden.de/rechtschreibung/nachschlagen
  - البحث عن مدخل وقراءته في قاموس أو كتاب؛ لا خلطه بالمعنى الآخر «يشبه أحدًا». الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **VOR — Duden — vorbereiten**: https://www.duden.de/rechtschreibung/vorbereiten
  - sich auf/für etwas vorbereiten، والفصل bereitet vor؛ على الهدف والمصدر تقديم الضمير الانعكاسي الصحيح. الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **INFO — Duden — informieren**: https://www.duden.de/rechtschreibung/informieren
  - sich über etwas informieren اكتساب معلومات، مقابل jemanden informieren إعلام شخص. الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **ANM — Duden — anmelden**: https://www.duden.de/rechtschreibung/anmelden
  - التسجيل في دورة وسياق المشاركة؛ meldet an / hat angemeldet. الحوار يخبر بتسجيل سابق لا يطلب تنفيذ تسجيل خارجي. الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **ERF — Duden — erfahren**: https://www.duden.de/rechtschreibung/erfahren_feststellen
  - الحصول على معرفة أو معلومات؛ erfährt/hat erfahren. ليس مجردfahren ولا صفةخبير في هذا السياق. الصفحة كاملة؛ الأجزاء المقروءة: [0].
- **COMMA — IDS — Amtliches Regelwerk §73**: https://grammis.ids-mannheim.de/rechtschreibung/6203
  - الفاصلة مع المجموعة المصدرية التابعة المبدوءة بـum؛ موضعها قبل الرابط في النمط المتأخر المدروس. قُرئ الجزآن0و1 كاملين، ولا ننقل استثناء المصدر غير الموسع إلىum … zu. الصفحة كاملة؛ الأجزاء المقروءة: [0, 1].

### صفحات مستبعدة أو غير مستخدمة

- https://deutsch.lingolia.com/de/grammatik/satzbau/infinitivsaetze — أعادت محتوى404؛ لم تعتمد كمرجع.
- https://www.duden.de/rechtschreibung/erfahren_kennenlernen_erleben — أعادت محتوى404؛ لم تعتمد كمرجع.
- https://www.duden.de/rechtschreibung/erfahren — أعادت محتوى404؛ لم تعتمد كمرجع.
- https://grammis.ids-mannheim.de/rechtschreibung/6200 — قُرئ الجزء0 فقط؛ موضوعه علامات إنهاء الجمل، ولم يستخدم كمرجع للفاصلة. المرجع المعتمد6203 قُرئ بجزأيه.

## المراجعة الفردية

### scope-01

# A2.7 — تعلّم اللغات والسفر والغاية بـum … zu

**الحكم:** عنوان مناسب لشرح الغاية في سياق تعلم اللغة والسفر، لا خدمة سفر حقيقية.

مراجع متصلة: INF, ZU, COMMA.

### scope-02

**المدة:** نحو 35–40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري

**الحكم:** 35–40 دقيقة تقدير مرن؛ يجوز التقسيم، وقناة الاستماع اختيارية ولا تخفي التسجيلات.

مراجع متصلة: INF, ZU, COMMA.

### scope-03

**الهدف:** أستطيع أن أشرح لماذا أتعلم لغة أو أسافر، وأذكر هدفًا باستخدام um … zu.

**الحكم:** الهدف ممثل في مهمتي خطة واستعداد مع غايات واضحة؛ لا ادعاء بلوغ مستوى لغوي من جمل معدودة.

مراجع متصلة: INF, ZU, COMMA.

### scope-04

نستعمل **um … zu** لشرح غاية الفعل في الأنماط البسيطة هنا، عندما ينفذ الفاعل نفسه النشاط والغاية. قد يكون فردًا أو مجموعة. لا نكرر الفاعل داخل تركيب الغاية، ويأتي المصدر مع zu في نهايته. الغاية تشرح ما يريد الشخص تحقيقه، ولا تثبت أنه حققه فعلًا:

**الحكم:** نفس منفذ النشاط والغاية في الأنماط البسيطة؛ قد يكون فردًا أو مجموعة. لا يكرر الفاعل داخل المصدر، ولا تثبت الغاية تحقق النتيجة.

مراجع متصلة: INF, ZU, COMMA.

### scope-05

نضع فاصلة قبل **um** في النمط المتأخر المدروس هنا؛ ليست اختيارية. أنا أتعلم وأنا أدرس؛ ومها تسافر وهي التي تنوي حضور الدورة. مع الفعل المنفصل تدخل **zu** بين البادئة وبقية الفعل في كلمة واحدة: **vorbereiten → vorzubereiten**، **nachschlagen → nachzuschlagen**. أما **verbessern → zu verbessern** و**verstehen → zu verstehen** فغير منفصلين. لا يلزم وجود مفعول دائمًا: **um zu reisen** تركيب صحيح.

**الحكم:** الفاصلة لازمة في النمط المتأخر؛ zu داخل المنفصل وخارجه مع غير المنفصل. um zu reisen ينفي تعميم ضرورة المفعول.

مراجع متصلة: INF, ZU, COMMA.

### scope-06

النموذجان خياليان وغير مسجلين، ولا يستبدلان المقاطع القائمة. الهدف المطلوب ليس ضمان تحقيقه؛ والتحقق الذاتي ليس تصحيحًا آليًا للغة أو النطق.

**الحكم:** النموذجان خياليان وغير مسجلين؛ لا استبدال للصوت أو ادعاء أن الإقرار والطول يصححان اللغة أو النطق.

مراجع متصلة: INF, ZU, COMMA.

### vocab-01

| die Fremdsprache | die Fremdsprachen | اللغة الأجنبية |

**الحكم:** اسم مؤنث وجمعه Fremdsprachen؛ لغة أجنبية، لا مستوى محدد.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-02

| die Sprachschule | die Sprachschulen | مدرسة اللغات |

**الحكم:** Sprachschule مدرسة لغات، وجمعها Sprachschulen؛ ليست Sprachkurs.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-03

| das Wörterbuch | die Wörterbücher | القاموس |

**الحكم:** اسم محايد وجمعه Wörterbücher؛ القاموس أداة تعلم، لا ضمان فهم كل الكلمات.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-04

| das Reiseziel | die Reiseziele | وجهة السفر |

**الحكم:** Reiseziel وجهة سفر، وجمعه Reiseziele؛ لا يخلط بغاية الفعل النحوية.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-05

| der Reisepass | die Reisepässe | جواز السفر |

**الحكم:** جواز سفر وجمعه Reisepässe؛ المثال لا يقرر وجوبه لكل انتقال.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-06

| die Unterkunft | die Unterkünfte | مكان الإقامة |

**الحكم:** مكان إقامة وجمعه Unterkünfte؛ لا يختزل في الفندق.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-07

| die Gastfamilie | die Gastfamilien | الأسرة المضيفة |

**الحكم:** أسرة مضيفة وجمعها Gastfamilien؛ ليست بالضرورة أسرة المتعلم الأصلية.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-08

| die Sprachreise | die Sprachreisen | رحلة لتعلّم اللغة |

**الحكم:** رحلة لتعلم اللغة وجمعها Sprachreisen؛ ليست مجرد أي رحلة.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-09

| mitnehmen | nimmt mit | يأخذ معه |

**الحكم:** nimmt mit مع تغير الجذر والفصل؛ يأخذ معه، وليس بالضرورة يحضر إلى المتكلم.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-10

| üben | — | يتدرّب |

**الحكم:** üben يتدرب؛ لا يعني أن الإتقان حصل بالفعل.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-11

| sich anmelden | meldet sich an | يسجّل نفسه |

**الحكم:** meldet sich an مع الفصل والانعكاس؛ تسجيل في السياق، لا إجراء خارجي يطلبه التطبيق.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-12

| sich informieren über | informiert sich über | يستعلم عن |

**الحكم:** حُفظ über في خانة التصريف؛ sich informieren استعلام، لا إعلام شخص آخر.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-13

| die Gelegenheit | die Gelegenheiten | الفرصة |

**الحكم:** Gelegenheit فرصة، وجمعها Gelegenheiten؛ لا تعني موعدًا مثبتًا.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-14

| nützlich | — | مفيد |

**الحكم:** nützlich مفيد؛ صفة وليست اسم فائدة.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-15

| verbessern | — | يحسّن |

**الحكم:** verbessern يحسن وغير منفصل؛ zu verbessern وليس verzubessern.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-16

| erfahren | erfährt | يعرف/يحصل على معلومات |

**الحكم:** erfahren هنا يحصل على معلومات، وتصريفه erfährt؛ ليس fahren أو صفة خبرة.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### vocab-17

| nachschlagen | schlägt nach | يراجع كلمة/معلومة في قاموس أو مرجع |

**الحكم:** nachschlagen يراجع مدخلًا في مرجع؛ schlägt nach مع الفصل، لا معنى مشابهة أحد الوالدين.

مراجع متصلة: SEP, INFO, ANM, NACH, ERF.

### grammar-01

- **Ich lerne Deutsch, um in Österreich zu studieren.** — أتعلم الألمانية لكي أدرس في النمسا.

**الحكم:** أنا أتعلم وأنا أنوي الدراسة؛ in Österreich مكان الدراسة وzu studieren آخر الغاية. لا قبول جامعي مثبت.

مراجع متصلة: INF, ZU, COMMA.

### grammar-02

- **Maha fährt nach Wien, um einen Sprachkurs zu besuchen.** — تسافر مها إلى فيينا لكي تحضر دورة لغة.

**الحكم:** Maha تسافر وهي التي تنوي حضور الدورة؛ القاعدة لا تسند الحضور إلى Hiba ولا تثبت أنه وقع.

مراجع متصلة: INF, ZU, COMMA.

### grammar-03

- **Wir benutzen ein Wörterbuch, um neue Wörter zu verstehen.** — نستخدم قاموسًا لكي نفهم كلمات جديدة.

**الحكم:** المجموعة نفسها تستخدم القاموس وتريد فهم الكلمات؛ zu verstehen، لا فعل مصرف جديد.

مراجع متصلة: INF, ZU, COMMA.

### helper-01

- **نفس الفاعل:** في **Wir lernen Deutsch, um zusammen zu reisen.** المجموعة نفسها تتعلم وتسافر. إذا كانت Maha تأخذ القاموس لكي تستعمله Hiba، فلا ندمج الفعلين بهذا النمط؛ نتركهما جملتين في هذا التدريب. لا نعمم قاعدة فاعل um … zu على كل تراكيب المصدر في الألمانية.

**الحكم:** wir يجيز المجموعة نفسها؛ اختلاف Maha وHiba يغير المعنى إذا دمج بلا تمييز. لا تعميم على كل مصدر ألماني.

مراجع متصلة: INF, ZU, MODAL, VOR, INFO, ANM, ERF.

### helper-02

- **sich vorbereiten / sich informieren über** — يستعد / يستعلم عن. **Ich lerne Deutsch, um mich auf die Reise vorzubereiten.** مقابل **Sie lernt Deutsch, um sich auf die Reise vorzubereiten.** نطابق mich/sich مع الفاعل. **Ich informiere mich über die Stadt.** لا ننقل über إلى الفعل vorbereiten الذي يستعمل auf هنا.

**الحكم:** mich مع ich وsich مع sie؛ auf die Reise مع vorbereiten، وüber die Stadt مع informieren.

مراجع متصلة: INF, ZU, MODAL, VOR, INFO, ANM, ERF.

### helper-03

- **sich anmelden / mitnehmen / nachschlagen** — يسجل نفسه / يأخذ معه / يراجع في مرجع. **Ich habe mich angemeldet.** فعل ماضٍ مركب، لا طلب تسجيل حالي. **Ich nehme ein Wörterbuch mit.** رئيسية بفعل منفصل؛ **um neue Wörter nachzuschlagen** غاية بكلمة nachzuschlagen الواحدة.

**الحكم:** تمييز angemeldet الماضي عن طلب التسجيل، وnehme…mit في الرئيسية عن nachzuschlagen في الغاية.

مراجع متصلة: INF, ZU, MODAL, VOR, INFO, ANM, ERF.

### helper-04

- **möchten / wollen / um … zu** — **Ich möchte dort lernen.** بلا zu بعد möchte؛ وعند دمج الهدف في تمرين3 نقول **…, um dort zu lernen.** لا ننسخ möchte أو wollen إلى الفراغ، ولا نضيف فاعلًا ثانيًا.

**الحكم:** بعد möchte وwollen مصدر بلا zu؛ في التحويل لا ننسخ الفعل الناقص أو الفاعل إلى فراغ الغاية.

مراجع متصلة: INF, ZU, MODAL, VOR, INFO, ANM, ERF.

### helper-05

- **erfahren / üben / verbessern / benutzen / wiederholen** — يحصل على معلومات / يتدرب / يحسن / يستعمل / يراجع أو يكرر. **mehr über die Stadt erfahren** معرفة المزيد عن المدينة؛ ليست هنا صفة «خبير». **passende Orte** أماكن مناسبة، و**im Alltag** في الحياة اليومية، و**das Museum / die Museen** متحف/متاحف.

**الحكم:** erfahren معرفة معلومات، وüben تدريب، وverbessern تحسين؛ دعم المفردات اللازمة دون تغيير الصوت.

مراجع متصلة: INF, ZU, MODAL, VOR, INFO, ANM, ERF.

### helper-06

- **القراءة والاستماع منفصلان:** Maha تريد السفر صيفًا إلى Wien في النمسا؛ متكلم الاستماع يصف رحلة إلى München لزيارة Freundin. كلمة Freundin تحدد صديقة مؤنثة، لكن ich لا يحدد جنس الراوي ولا اسمه. عبارة **meine Freundin und ich** تعني شخصين؛ وصوت التسجيل لا يثبت أن الراوي Maha أو Hiba. القراءة بصوت Maha تظل نصًا عنها بضمير الغائب.

**الحكم:** فصل رحلة Maha إلى Wien عن الراوي في München؛ Freundin مؤنثة لكن ich لا يحدد الجنس. صوت Maha لا يحول نص الغائب إلى سيرة ذاتية.

مراجع متصلة: INF, ZU, MODAL, VOR, INFO, ANM, ERF.

### helper-07

- **الأهداف لا تعني نتائج مضمونة:** الذهاب إلى مدرسة لغات لا يضمن تحسنًا محددًا. روابط تمرين1 مقيدة بالأهداف المعطاة، وليست كل العلاقات الممكنة واقعيًا. حمل الجواز مثال لغوي للسفر، لا شرطًا قانونيًا شاملًا أو دليل تأشيرة أو حجز. **die Unterkunft** مكان إقامة، و**die Gastfamilie** أسرة مضيفة لا أسرة الشخص الأصلية.

**الحكم:** الغاية لا تثبت النتيجة؛ T01 مقيد بالمعطيات، والجواز والأسرة المضيفة ليسا شرطًا قانونيًا أو دعوى حجز.

مراجع متصلة: INF, ZU, MODAL, VOR, INFO, ANM, ERF.

### helper-08

- **طريقة العمل:** P01 أربع جمل مع الجهر، وP02 ثلاث جمل كتابة فقط؛ البيانات خيالية، ولا شريك أو تسجيل أو حجز أو سفر حقيقي مطلوب. حاول الاستماع قبل فتح التفريغ؛ قراءة النص لا تثبت فهمًا مسموعًا مستقلًا. حد الطول والإقرار لا يصححان اللغة أو النطق.

**الحكم:** P01 مع الجهر وP02 كتابة فقط؛ لا بيانات شخصية أو شريك أو تسجيل. التفريغ ليس دليل فهم مسموع مستقل.

مراجع متصلة: INF, ZU, MODAL, VOR, INFO, ANM, ERF.

### dialogue-01

Warum fährst du im Sommer nach Wien?

**الحكم:** Hiba تسأل عن غرض رحلة الصيف إلى Wien؛ Warum يستقبل هنا جواب غاية.

مراجع متصلة: INF, ZU, SEP, ANM, ERF, COMMA.

### dialogue-02

Ich mache eine Sprachreise, um mein Deutsch zu verbessern.

**الحكم:** Maha تعلل الرحلة بتحسين الألمانية؛ zu verbessern غير منفصل، ولا ضمان لتحسن حاصل.

مراجع متصلة: INF, ZU, SEP, ANM, ERF, COMMA.

### dialogue-03

Besuchst du eine Sprachschule?

**الحكم:** سؤال Hiba عن مدرسة لغات؛ الفعل أولًا في سؤال نعم أو لا.

مراجع متصلة: INF, ZU, SEP, ANM, ERF, COMMA.

### dialogue-04

Ja. Ich habe mich angemeldet, um jeden Vormittag Deutsch zu üben.

**الحكم:** Maha تخبر بتسجيل سابق: habe mich angemeldet؛ الغاية التدريب كل قبل الظهر، لا إثبات تحققه.

مراجع متصلة: INF, ZU, SEP, ANM, ERF, COMMA.

### dialogue-05

Und was machst du am Nachmittag?

**الحكم:** السؤال عن نشاط بعد الظهر مستقل عن وقت الدراسة.

مراجع متصلة: INF, ZU, SEP, ANM, ERF, COMMA.

### dialogue-06

Ich besuche Museen, um mehr über die Stadt zu erfahren.

**الحكم:** زيارة المتاحف لمعرفة المزيد عن المدينة؛ zu erfahren مصدر غير منفصل.

مراجع متصلة: INF, ZU, SEP, ANM, ERF, COMMA.

### dialogue-07

Das klingt interessant. Gute Reise!

**الحكم:** تقييم Hiba وتمني رحلة طيبة؛ Gute Reise! ليس حجزًا أو تأكيد سفر.

مراجع متصلة: INF, ZU, SEP, ANM, ERF, COMMA.

### reading-01

Maha möchte im Sommer nach Wien reisen.

**الحكم:** Maha ترغب في السفر صيفًا إلى Wien؛ möchte مع reisen بلا zu، وليس خبرًا عن سفر تم.

مراجع متصلة: INF, ZU, VOR, INFO, COMMA.

### reading-02

Sie lernt Deutsch, um sich auf die Reise vorzubereiten.

**الحكم:** تعلم اللغة للاستعداد؛ sich مع sie وvorzubereiten كلمة واحدة.

مراجع متصلة: INF, ZU, VOR, INFO, COMMA.

### reading-03

Sie benutzt ein Wörterbuch, um neue Wörter zu lernen, und informiert sich über die Stadt, um passende Orte zu finden.

**الحكم:** غايتان: القاموس لتعلم كلمات جديدة، والاستعلام لإيجاد أماكن مناسبة. الفاصلة بعد lernen تغلق الغاية الأولى قبل und.

مراجع متصلة: INF, ZU, VOR, INFO, COMMA.

- **Sie benutzt ein Wörterbuch, um neue Wörter zu lernen** — القاموس مرتبط بتعلم الكلمات الجديدة، لا بحجز فندق أو تذكرة.

- **und informiert sich über die Stadt, um passende Orte zu finden.** — الاستعلام عن المدينة مرتبط بإيجاد أماكن مناسبة؛ الغاية الثانية لا تستبدل الأولى.

### reading-04

In Wien besucht sie eine Sprachschule, um täglich Deutsch zu üben.

**الحكم:** تصف الخطة مدرسة لغات في Wien للتدريب يوميًا؛ لا عدد ساعات محدد.

مراجع متصلة: INF, ZU, VOR, INFO, COMMA.

### reading-05

Sie möchte auch mit ihrer Gastfamilie sprechen, um die Sprache im Alltag zu benutzen.

**الحكم:** رغبة إضافية بالحديث مع الأسرة المضيفة لاستعمال اللغة يوميًا؛ لا حصر للمحادثات أو نتائج طلاقة مثبتة.

مراجع متصلة: INF, ZU, VOR, INFO, COMMA.

### reading-question-01

1. Wohin möchte Maha reisen?

**الحكم:** الوجهة صريحة؛ لا خلط مع München من الاستماع.

**المفتاح:** Nach Wien.

### reading-question-02

2. Warum lernt sie Deutsch?

**الحكم:** الاستعداد للرحلة هو غرض تعلم الألمانية، وsich يعود إلى Maha.

**المفتاح:** Um sich auf die Reise vorzubereiten.

### reading-question-03

3. Wozu benutzt sie ein Wörterbuch?

**الحكم:** غرض القاموس تعلم الكلمات؛ لا يستبدل بغرض المتاحف.

**المفتاح:** Um neue Wörter zu lernen.

### reading-question-04

4. Wo übt sie in Wien täglich Deutsch?

**الحكم:** المدرسة مكان التدريب يوميًا؛ ليست الفندق أو المحطة.

**المفتاح:** In einer Sprachschule.

### reading-question-05

5. Mit wem möchte sie sprechen, um Deutsch im Alltag zu benutzen?

**الحكم:** الأسرة المضيفة هي الطرف المذكور؛ لا اختلاق لطرف آخر.

**المفتاح:** Mit ihrer Gastfamilie.

### listening-01

Ich reise nach München, um meine Freundin zu besuchen.

**الحكم:** الراوي يسافر إلى München لزيارة صديقة؛ لا اسم أو جنس للراوي في ich.

مراجع متصلة: INF, ZU, SEP, NACH.

### listening-02

Ich nehme ein kleines Wörterbuch mit, um neue Wörter nachzuschlagen.

**الحكم:** قاموس صغير لمراجعة الكلمات؛ nehme…mit في الرئيسية وnachzuschlagen في الغاية.

مراجع متصلة: INF, ZU, SEP, NACH.

### listening-03

Am Vormittag besuche ich einen Sprachkurs, um mein Deutsch zu verbessern.

**الحكم:** دورة قبل الظهر لتحسين الألمانية؛ zu verbessern غير منفصل، وليس مدرسة قراءة Maha.

مراجع متصلة: INF, ZU, SEP, NACH.

### listening-04

Am Abend gehen meine Freundin und ich in ein Café, um zusammen zu sprechen.

**الحكم:** الصديقة والراوي يذهبان إلى مقهى مساء للحديث معًا؛ فاعل جمع، والغاية للمجموعة نفسها.

مراجع متصلة: INF, ZU, SEP, NACH.

### listening-question-01

1. Wohin reist die Person?

**الحكم:** السؤال عن وجهة الشخص؛ die Person اسم مؤنث نحويًا، لا دليل جنس بشري.

**المفتاح:** Nach München.

### listening-question-02

2. Warum nimmt sie ein Wörterbuch mit?

**الحكم:** sie تعود إلى Person؛ السؤال عن غرض القاموس، لا شكله أو حجمه.

**المفتاح:** Um neue Wörter nachzuschlagen.

### listening-question-03

3. Was besucht sie am Vormittag?

**الحكم:** Sprachkurs نشاط قبل الظهر؛ لا وقت بدء دقيق مذكور.

**المفتاح:** Einen Sprachkurs.

### listening-question-04

4. Warum gehen die beiden Personen in ein Café?

**الحكم:** صُححت Freundinnen إلى die beiden Personen؛ الحديث معًا دون افتراض جنس المتكلم.

**المفتاح:** Um zusammen zu sprechen.

### speaking-model-01

1. Im Sommer mache ich eine Sprachreise nach Wien.

**الحكم:** الصيف والرحلة اللغوية وWien مذكورة، والكاتب بضمير ich.

مراجع متصلة: INF, ZU, ERF, COMMA.

### speaking-model-02

2. Ich besuche eine Sprachschule, um Deutsch zu üben.

**الحكم:** مدرسة لغات للتدرب على الألمانية؛ فاصلة وum … zu والمنفذ نفسه.

مراجع متصلة: INF, ZU, ERF, COMMA.

### speaking-model-03

3. Ich besuche Museen, um mehr über die Stadt zu erfahren.

**الحكم:** متاحف لمعرفة المزيد عن المدينة؛ erfahren غير منفصل.

مراجع متصلة: INF, ZU, ERF, COMMA.

### speaking-model-04

4. Ich spreche mit meiner Gastfamilie, um die Sprache im Alltag zu benutzen.

**الحكم:** حديث مع الأسرة المضيفة لاستعمال اللغة يوميًا؛ أربع جمل وثلاث غايات، وتقرأ جميعها جهرًا.

مراجع متصلة: INF, ZU, ERF, COMMA.

### writing-model-01

1. Ich lerne Deutsch, um mich auf die Reise vorzubereiten.

**الحكم:** غاية الاستعداد مع mich العائد إلى ich، وvorzubereiten صحيحة.

مراجع متصلة: INF, ZU, VOR, INFO, NACH, COMMA.

### writing-model-02

2. Ich nehme ein Wörterbuch mit, um neue Wörter nachzuschlagen.

**الحكم:** القاموس لمراجعة الكلمات؛ nehme…mit في الرئيسية وnachzuschlagen في الغاية.

مراجع متصلة: INF, ZU, VOR, INFO, NACH, COMMA.

### writing-model-03

3. Ich informiere mich über die Stadt, um passende Orte zu finden.

**الحكم:** استعلام عن المدينة لإيجاد أماكن مناسبة؛ informiere mich über وzu finden. ثلاث جمل كتابة فقط.

مراجع متصلة: INF, ZU, VOR, INFO, NACH, COMMA.

### card-01

- **Ich lerne Deutsch, um zu reisen.** → أتعلم الألمانية لكي أسافر.

**الحكم:** غاية سفر صحيحة بلا مفعول؛ لا وجوب لكلمة بين um وzu.

مراجع متصلة: INF, ZU, MODAL.

### card-02

- **um neue Wörter zu verstehen** → لكي أفهم كلمات جديدة.

**الحكم:** neue Wörter قبل zu verstehen؛ المصدر ليس فعلًا مصرفًا.

مراجع متصلة: INF, ZU, MODAL.

### card-03

- **das Reiseziel** → وجهة السفر.

**الحكم:** Reiseziel اسم محايد لوجهة السفر.

مراجع متصلة: INF, ZU, MODAL.

### card-04

- **Ich möchte mein Deutsch verbessern.** → أريد تحسين لغتي الألمانية.

**الحكم:** möchte مع verbessern بلا zu؛ الرغبة بالتحسين ليست تركيب الغاية نفسه.

مراجع متصلة: INF, ZU, MODAL.

### DL-A2-07-T01

اعتمد فقط هذه الأهداف المعطاة، واستعمل كل حرف مرة: القاموس لفهم الكلمات الجديدة؛ مدرسة اللغات لحضور الدروس؛ حمل الجواز للسفر في الخارج في هذا المثال؛ تدريب اللغة للتحدث بالألمانية بصورة أفضل. لا تختر بحسب كل ما قد يكون ممكنًا خارج المعطيات.

1. ein Wörterbuch benutzen · 2. eine Sprachschule besuchen · 3. den Reisepass mitnehmen · 4. eine Sprache üben

أ. um Deutsch besser zu sprechen · ب. um neue Wörter zu verstehen · ج. um im Ausland zu reisen · د. um Unterricht zu haben

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الربط بالتقييم يحفظ المهارة المتدرب عليها.

مراجع متصلة: INF, ZU, COMMA, NACH, VOR.

- **ein Wörterbuch benutzen** → ب: um neue Wörter zu verstehen — الهدف المعطى للقاموس فهم الكلمات؛ غيره لا يطابق المطلوب ولو أمكن ربطه واقعيًا.

- **eine Sprachschule besuchen** → د: um Unterricht zu haben — المدرسة لحضور الدروس بحسب المعطيات؛ لا اختيار السفر في الخارج لها هنا.

- **den Reisepass mitnehmen** → ج: um im Ausland zu reisen — الجواز مرتبط بالسفر في هذا المثال؛ لا تعميم قانوني لضرورته.

- **eine Sprache üben** → أ: um Deutsch besser zu sprechen — التدريب للتحدث بصورة أفضل؛ لا ضمان طلاقة من التدريب وحده.

### DL-A2-07-T02

1. Ich lerne Deutsch, ______ in Wien ______ studieren.
2. Maha fährt nach München, ______ ihre Freundin ______ besuchen.
3. Wir nehmen ein Wörterbuch mit, ______ neue Wörter ______ verstehen.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الربط بالتقييم يحفظ المهارة المتدرب عليها.

مراجع متصلة: INF, ZU, COMMA, NACH, VOR.

- **Ich lerne Deutsch, ______ in Wien ______ studieren.** → um … zu — ich يتعلم ويدرس؛ um قبل المكمل وzu قبل studieren.

- **Maha fährt nach München, ______ ihre Freundin ______ besuchen.** → um … zu — جملة مستقلة عن قراءة Maha إلى Wien؛ هدف زيارة الصديقة في München لا يغير القراءة.

- **Wir nehmen ein Wörterbuch mit, ______ neue Wörter ______ verstehen.** → um … zu — wir يأخذ القاموس ويفهم الكلمات؛ zu verstehen غير منفصل.

### DL-A2-07-T03

1. **Ich gehe in die Bibliothek. Ich möchte dort lernen.** → Ich gehe in die Bibliothek, um ______.
2. **Wir machen eine Sprachreise. Wir wollen Deutsch üben.** → Wir machen eine Sprachreise, um ______.
3. **Er benutzt eine App. Er möchte Wörter wiederholen.** → Er benutzt eine App, um ______.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الربط بالتقييم يحفظ المهارة المتدرب عليها.

مراجع متصلة: INF, ZU, COMMA, NACH, VOR.

- ****Ich gehe in die Bibliothek. Ich möchte dort lernen.** → Ich gehe in die Bibliothek, um ______.** → dort zu lernen — ich نفسه؛ dort zu lernen دون تكرار ich أو möchte.

- ****Wir machen eine Sprachreise. Wir wollen Deutsch üben.** → Wir machen eine Sprachreise, um ______.** → Deutsch zu üben — wir هي المجموعة نفسها؛ Deutsch zu üben دون نسخ wollen.

- ****Er benutzt eine App. Er möchte Wörter wiederholen.** → Er benutzt eine App, um ______.** → Wörter zu wiederholen — er يستعمل التطبيق ويريد مراجعة الكلمات؛ wiederholen غير منفصل بهذا المعنى وzu قبله.

### DL-A2-07-T04

1. Ich fahre nach Wien, um Deutsch **lernen / zu lernen**.
2. Sie besucht die Sprachschule, um ihr Deutsch **verbessern / zu verbessern**.
3. Wir lesen den Plan, um das Museum **finden / zu finden**.
4. Ich nehme ein Wörterbuch mit, um neue Wörter **zu nachschlagen / nachzuschlagen**.
5. Ich lerne Deutsch, um mich auf die Reise **vorzubereiten / zu vorbereiten**.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الربط بالتقييم يحفظ المهارة المتدرب عليها.

مراجع متصلة: INF, ZU, COMMA, NACH, VOR.

- **Ich fahre nach Wien, um Deutsch **lernen / zu lernen**.** → zu lernen — zu lernen لازم بعد um؛ lernen وحده ناقص.

- **Sie besucht die Sprachschule, um ihr Deutsch **verbessern / zu verbessern**.** → zu verbessern — zu verbessern صحيح؛ verbessern وحده يفتقد zu بعد um.

- **Wir lesen den Plan, um das Museum **finden / zu finden**.** → zu finden — zu finden صحيح؛ finden وحده يفتقد zu.

- **Ich nehme ein Wörterbuch mit, um neue Wörter **zu nachschlagen / nachzuschlagen**.** → nachzuschlagen — nachzuschlagen بدمج zu داخل الفعل؛ zu nachschlagen ليس صحيحًا هنا.

- **Ich lerne Deutsch, um mich auf die Reise **vorzubereiten / zu vorbereiten**.** → vorzubereiten — vorzubereiten صحيح؛ zu vorbereiten ليس صحيحًا لهذا الفعل، وmich مع ich موجود.

### DL-A2-07-T05

حدّد صحيحًا أو خطأ:

1. Maha möchte im Sommer nach Wien reisen.
2. Sie benutzt ein Wörterbuch, um neue Wörter zu lernen.
3. In Wien besucht sie eine Sprachschule.
4. Maha benutzt kein Wörterbuch.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الربط بالتقييم يحفظ المهارة المتدرب عليها.

مراجع متصلة: INF, ZU, COMMA, NACH, VOR.

- **Maha möchte im Sommer nach Wien reisen.** → صحيح — مطابق لرغبة الصيف والوجهة في أول جملة.

- **Sie benutzt ein Wörterbuch, um neue Wörter zu lernen.** → صحيح — مطابق لغاية القاموس في الجملة الثالثة.

- **In Wien besucht sie eine Sprachschule.** → صحيح — مطابق لمدرسة اللغات في Wien في الجملة الرابعة.

- **Maha benutzt kein Wörterbuch.** → خطأ: تستعمل قاموسًا. — kein يناقض استعمال القاموس صراحة؛ أزيل استنتاج حصر الحديث بالسياح.

### DL-A2-07-T06

أكمل من البنك، واستعمل كل عبارة مرة: **München — nachzuschlagen — Sprachkurs — Café**. الضمير sie في السؤال يعود نحويًا إلى die Person ولا يحدد جنس المتكلم.

1. Die Person reist nach ______.
2. Sie nimmt ein Wörterbuch mit, um neue Wörter ______.
3. Am Vormittag besucht sie einen ______.
4. Am Abend gehen die beiden Personen in ein ______.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الربط بالتقييم يحفظ المهارة المتدرب عليها.

مراجع متصلة: INF, ZU, COMMA, NACH, VOR.

- **Die Person reist nach ______.** → München — München من الاستماع، لا Wien من القراءة.

- **Sie nimmt ein Wörterbuch mit, um neue Wörter ______.** → nachzuschlagen — nachzuschlagen من البنك؛ لا تكرار zu خارجها.

- **Am Vormittag besucht sie einen ______.** → Sprachkurs — Sprachkurs بعد einen؛ نوع النشاط قبل الظهر.

- **Am Abend gehen die beiden Personen in ein ______.** → Café — Café بعد ein؛ لا يسمى الشخصان Freundinnen دون دليل جنس الراوي.

### DL-A2-07-T07

في 1–3 حدد منفذ كل فعل، ثم قل هل يمكن استعمال نمط um … zu المدروس مع بقاء المعنى. في4 أضف الفاصلة فقط:

1. Ich reise nach Wien. Ich möchte Deutsch lernen.
2. Maha besucht die Sprachschule. Maha möchte dort lernen.
3. Maha nimmt ein Wörterbuch mit. Hiba möchte neue Wörter nachschlagen.
4. Wir benutzen ein Wörterbuch um neue Wörter zu verstehen.

**الحكم:** فُحص كل بند ومفتاحه وبدائله؛ الربط بالتقييم يحفظ المهارة المتدرب عليها.

مراجع متصلة: INF, ZU, COMMA, NACH, VOR.

- **Ich reise nach Wien. Ich möchte Deutsch lernen.** → نعم: ich ينفذ الفعلين. — المنفذ ich في الفعلين؛ يجوز النمط مع المعنى المعطى.

- **Maha besucht die Sprachschule. Maha möchte dort lernen.** → نعم: Maha تنفذ الفعلين. — Maha تنفذ زيارة المدرسة والتعلم.

- **Maha nimmt ein Wörterbuch mit. Hiba möchte neue Wörter nachschlagen.** → لا بهذا النمط: Maha تأخذ وHiba تراجع. — المنفذ مختلف؛ الدمج بهذا النمط ينسب المراجعة إلى Maha فيغير المعنى.

- **Wir benutzen ein Wörterbuch um neue Wörter zu verstehen.** → Wir benutzen ein Wörterbuch, um neue Wörter zu verstehen. — الفاصلة قبل um دون تغيير الكلمات؛ تدريب مباشر لـQ09 وQ10.

### DL-A2-07-T08

**أ — P01: خطة مع الجهر**

اكتب أربع جمل عن رحلة لغوية خيالية بضمير ich: الجملة1 تذكر رحلة لغوية إلى Wien في الصيف؛ الجملة2 زيارة مدرسة لغات بهدف التدرب على الألمانية؛ الجملة3 زيارة متاحف بهدف معرفة المزيد عن المدينة؛ الجملة4 التحدث مع الأسرة المضيفة بهدف استعمال اللغة في الحياة اليومية. استعمل um … zu في الجمل2–4 مع الفاصلة ونفس منفذ النشاط والغاية، ثم اقرأ الجمل الأربع بصوت مرتفع. لا سفر أو شريك أو تسجيل مطلوب.

**ب — P02: استعداد كتابة فقط**

اكتب ثلاث جمل عن استعداد خيالي لرحلة، كتابة فقط وبضمير ich. الجملة1 تعلم الألمانية للاستعداد للرحلة، وفي نهايتها mich auf die Reise vorzubereiten؛ الجملة2 أخذ قاموس لمراجعة كلمات جديدة وفي نهايتها neue Wörter nachzuschlagen؛ الجملة3 الاستعلام عن المدينة لإيجاد أماكن مناسبة وفي نهايتها passende Orte zu finden. استعمل um … zu والفاصلة في كل جملة، وطابق mich مع ich. لا جهر أو تسجيل أو حجز أو معلومات شخصية مطلوبة.

**الحكم:** أربع جمل خطة مع الجهر وثلاث جمل استعداد كتابة فقط؛ قناتان مختلفتان بنموذجين ومعايير مطابقين.

مراجع متصلة: INF, ZU, VOR, NACH, INFO, COMMA.

- **P01 مطلب 1** → 1. Im Sommer mache ich eine Sprachreise nach Wien. — الصيف والرحلة اللغوية وWien مذكورة، والكاتب بضمير ich.

- **P01 مطلب 2** → 2. Ich besuche eine Sprachschule, um Deutsch zu üben. — مدرسة لغات للتدرب على الألمانية؛ فاصلة وum … zu والمنفذ نفسه.

- **P01 مطلب 3** → 3. Ich besuche Museen, um mehr über die Stadt zu erfahren. — متاحف لمعرفة المزيد عن المدينة؛ erfahren غير منفصل.

- **P01 مطلب 4** → 4. Ich spreche mit meiner Gastfamilie, um die Sprache im Alltag zu benutzen. — حديث مع الأسرة المضيفة لاستعمال اللغة يوميًا؛ أربع جمل وثلاث غايات، وتقرأ جميعها جهرًا.

- **P02 مطلب 1** → 1. Ich lerne Deutsch, um mich auf die Reise vorzubereiten. — غاية الاستعداد مع mich العائد إلى ich، وvorzubereiten صحيحة.

- **P02 مطلب 2** → 2. Ich nehme ein Wörterbuch mit, um neue Wörter nachzuschlagen. — القاموس لمراجعة الكلمات؛ nehme…mit في الرئيسية وnachzuschlagen في الغاية.

- **P02 مطلب 3** → 3. Ich informiere mich über die Stadt, um passende Orte zu finden. — استعلام عن المدينة لإيجاد أماكن مناسبة؛ informiere mich über وzu finden. ثلاث جمل كتابة فقط.

### DL-A2-07-Q01

اختر المطابقة الصحيحة بين الفعل والغاية كما في التمرين.

**الحكم:** استخدام القاموس يساعد على فهم كلمات جديدة؛ وهذا هو الربط الصحيح بين الفعل والغاية.

مراجع متصلة: INF, ZU, COMMA.

**المفتاح:** ein Wörterbuch benutzen — um neue Wörter zu verstehen

- بديل1 (الصحيح): **ein Wörterbuch benutzen — um neue Wörter zu verstehen** — مطابق لغرض القاموس المعطى فيT01؛ ليس حكمًا باستحالة كل غرض آخر.

- بديل2 (غير المختار): **eine Sprachschule besuchen — um im Ausland zu reisen** — ليس الربط المعطى للمدرسة؛ المطلوب حضور الدروس ولو أمكن السفر لمدرسة بالخارج.

- بديل3 (غير المختار): **den Reisepass mitnehmen — um Unterricht zu haben** — ليس الربط المعطى للجواز؛ حضور الدروس ليس هدفه في المعطيات.

### DL-A2-07-Q02

متى نستخدم **um … zu** وفق الدرس؟

**الحكم:** في الأنماط البسيطة المدروسة نذكر الغاية عندما يكون منفذ النشاط والغاية نفسه؛ لا نكرر الفاعل داخل تركيب المصدر.

مراجع متصلة: INF, ZU, COMMA.

**المفتاح:** عندما يكون فاعل الجزأين هو نفسه لذكر الهدف.

- بديل1 (غير المختار): **عندما يتغير الفاعل دائمًا.** — تغير الفاعل ليس شرط هذا النمط؛ الدمج هنا يغير الإحالة كما فيT07.3.

- بديل2 (الصحيح): **عندما يكون فاعل الجزأين هو نفسه لذكر الهدف.** — المنفذ نفسه في الأنماط البسيطة، والوظيفة ذكر الغاية.

- بديل3 (غير المختار): **للسؤال عن الماضي.** — ليست أداة استفهام أو علامة ماضٍ.

### DL-A2-07-Q03

أي تركيب صحيح لمعنى «لكي أتعلم كلمات جديدة»؟

**الحكم:** um في البداية، ثم الكلمات المكملة، ثم zu lernen في النهاية في هذا المثال.

مراجع متصلة: INF, ZU, COMMA.

**المفتاح:** um neue Wörter zu lernen

- بديل1 (غير المختار): **um zu neue Wörter lernen** — zu في غير موضعها أمام المكمل؛ نحتاج zu lernen معًا.

- بديل2 (غير المختار): **um neue Wörter lernen zu** — zu بعد المصدر خطأ في هذا النمط.

- بديل3 (الصحيح): **um neue Wörter zu lernen** — um ثم المكمل ثم zu lernen؛ صحيح.

### DL-A2-07-Q04

ما صيغة **nachschlagen** مع zu؟

**الحكم:** مع الفعل المنفصل تدخل zu بين البادئة والفعل: nachzuschlagen.

مراجع متصلة: INF, ZU, COMMA.

**المفتاح:** nachzuschlagen

- بديل1 (غير المختار): **zu nachschlagen** — zu لا تسبق nachschlagen كله؛ الفعل قابل للفصل.

- بديل2 (الصحيح): **nachzuschlagen** — nach وzu وschlagen في كلمة واحدة.

- بديل3 (غير المختار): **nachschlagen zu** — zu بعد المصدر غير صحيحة.

### DL-A2-07-Q05

إلى أين تريد Maha السفر؟

**الحكم:** النص يذكر أنها تريد السفر إلى Wien.

**المفتاح:** إلى Wien.

- بديل1 (الصحيح): **إلى Wien.** — Wien وجهة Maha الصريحة في القراءة.

- بديل2 (غير المختار): **إلى München.** — München وجهة الاستماع وتدريب مستقل، لا قراءة Maha.

- بديل3 (غير المختار): **إلى Bremen.** — Bremen غير مذكورة في القراءة.

### DL-A2-07-Q06

لماذا تستخدم Maha القاموس؟

**الحكم:** تستخدم القاموس um neue Wörter zu lernen.

**المفتاح:** لكي تتعلم كلمات جديدة.

- بديل1 (غير المختار): **لكي تحجز فندقًا.** — حجز الفندق غير مذكور غرضًا للقاموس.

- بديل2 (غير المختار): **لكي تشتري تذكرة.** — شراء التذكرة غير مذكور.

- بديل3 (الصحيح): **لكي تتعلم كلمات جديدة.** — تعلم كلمات جديدة مطابق لـum neue Wörter zu lernen.

### DL-A2-07-Q07

أين تدرس Maha الألمانية يوميًا في Wien؟

**الحكم:** تدرس في einer Sprachschule.

**المفتاح:** في مدرسة لغات.

- بديل1 (غير المختار): **في محطة القطار.** — المحطة غير مذكورة مكانًا لتدريبها.

- بديل2 (الصحيح): **في مدرسة لغات.** — مدرسة اللغات هي المكان المذكور.

- بديل3 (غير المختار): **في الفندق.** — الفندق غير مذكور مكانًا لتدريبها.

### DL-A2-07-Q08

في **Maha fährt nach Wien, um einen Sprachkurs zu besuchen**، من سيحضر الدورة؟

**الحكم:** Maha هي التي تسافر وتنوي حضور الدورة في هذه الجملة؛ الغاية لا تثبت وحدها أنها حضرت فعلًا.

مراجع متصلة: INF, ZU, COMMA.

**المفتاح:** Maha نفسها.

- بديل1 (الصحيح): **Maha نفسها.** — Maha تنفذ الغاية؛ لا يعني أن الحضور وقع فعلًا.

- بديل2 (غير المختار): **صديقتها فقط.** — الصديقة ليست منفذة الغاية المعطاة.

- بديل3 (غير المختار): **الأسرة المضيفة.** — الأسرة المضيفة ليست منفذة الغاية المعطاة.

### DL-A2-07-Q09

في النمط المدروس: Wir benutzen ein Wörterbuch … um neue Wörter zu verstehen، أين تلزم الفاصلة؟

**الحكم:** تلزم الفاصلة قبل um في هذا النمط؛ ليست مجرد اختيار أسلوبي.

مراجع متصلة: INF, ZU, COMMA.

**المفتاح:** قبل تركيب um … zu.

- بديل1 (غير المختار): **بعد zu مباشرةً.** — الفاصلة بعد zu تفصلها عن مصدرها.

- بديل2 (غير المختار): **لا تستخدم فاصلة.** — حذف الفاصلة خطأ في النمط المحدد.

- بديل3 (الصحيح): **قبل تركيب um … zu.** — قبل um؛ تحد تركيب الغاية.

### DL-A2-07-Q10

اختر جملة صحيحة:

**الحكم:** um ثم المكمل neue Wörter ثم zu verstehen في النهاية، وفاصلة قبل um؛ لا يلزم وجود مفعول في كل غاية، مثل um zu reisen.

مراجع متصلة: INF, ZU, COMMA.

**المفتاح:** Wir benutzen ein Wörterbuch, um neue Wörter zu verstehen.

- بديل1 (غير المختار): **Wir benutzen ein Wörterbuch, um zu neue Wörter verstehen.** — zu مفصولة عن verstehen بالمكمل؛ ترتيب خاطئ.

- بديل2 (الصحيح): **Wir benutzen ein Wörterbuch, um neue Wörter zu verstehen.** — فاصلة قبل um وzu verstehen في النهاية؛ صحيح.

- بديل3 (غير المختار): **Wir benutzen ein Wörterbuch um neue Wörter verstehen zu.** — الفاصلة مفقودة وzu بعد المصدر؛ كلاهما خطأ.

### DL-A2-07-P01

اكتب أربع جمل عن رحلة لغوية خيالية بضمير ich: الجملة1 تذكر رحلة لغوية إلى Wien في الصيف؛ الجملة2 زيارة مدرسة لغات بهدف التدرب على الألمانية؛ الجملة3 زيارة متاحف بهدف معرفة المزيد عن المدينة؛ الجملة4 التحدث مع الأسرة المضيفة بهدف استعمال اللغة في الحياة اليومية. استعمل um … zu في الجمل2–4 مع الفاصلة ونفس منفذ النشاط والغاية، ثم اقرأ الجمل الأربع بصوت مرتفع. لا سفر أو شريك أو تسجيل مطلوب.

**الحكم:** مطابقة T08أ: أربع جمل وثلاث غايات مع الجهر، حد180. لا شريك أو تسجيل أو سفر فعلي مطلوب.

مراجع متصلة: INF, ZU, COMMA, VOR, NACH, INFO.

- معيار `taskCompletion`: أربع جمل: رحلة إلى Wien صيفًا، ومدرسة لغات، ومتاحف، وحديث مع الأسرة المضيفة، مع الأهداف المطلوبة وقراءة الجميع جهرًا. — عدد الجمل وقناة الأداء متفقان في المصدر والنموذج؛ لا يتحقق التطبيق آليًا من المضمون.

- معيار `meaningClarity`: هدف كل نشاط واضح ومتسق مع الخطة الخيالية دون ادعاء تحقق التحسن أو السفر فعلًا. — كل غاية مناسبة لنشاطها؛ لا يتحول الخيال إلى حجز أو بيانات حقيقية.

- معيار `targetSkill`: ثلاثة تراكيب um … zu بفاصلة ومصدر في النهاية، ومنفذ النشاط والغاية نفسه دون تكرار الفاعل. — الشكل المطلوب مدرب عليه؛ الإقرار والطول ليسا تصحيحًا لصحة اللغة.

الدليل المحلي: `{"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 180, "speakAloud": true, "audioRequired": false}`

### DL-A2-07-P02

اكتب ثلاث جمل عن استعداد خيالي لرحلة، كتابة فقط وبضمير ich. الجملة1 تعلم الألمانية للاستعداد للرحلة، وفي نهايتها mich auf die Reise vorzubereiten؛ الجملة2 أخذ قاموس لمراجعة كلمات جديدة وفي نهايتها neue Wörter nachzuschlagen؛ الجملة3 الاستعلام عن المدينة لإيجاد أماكن مناسبة وفي نهايتها passende Orte zu finden. استعمل um … zu والفاصلة في كل جملة، وطابق mich مع ich. لا جهر أو تسجيل أو حجز أو معلومات شخصية مطلوبة.

**الحكم:** مطابقة T08ب: ثلاث جمل وثلاث غايات كتابة فقط، حد150. لا شريك أو تسجيل أو سفر فعلي مطلوب.

مراجع متصلة: INF, ZU, COMMA, VOR, NACH, INFO.

- معيار `taskCompletion`: ثلاث جمل عن تعلم الألمانية وأخذ القاموس والاستعلام عن المدينة، مع غاية لكل نشاط، كتابة فقط. — عدد الجمل وقناة الأداء متفقان في المصدر والنموذج؛ لا يتحقق التطبيق آليًا من المضمون.

- معيار `meaningClarity`: الاستعداد للرحلة ومراجعة الكلمات وإيجاد الأماكن مناسبة للأفعال المذكورة؛ لا حجز أو بيانات حقيقية. — كل غاية مناسبة لنشاطها؛ لا يتحول الخيال إلى حجز أو بيانات حقيقية.

- معيار `targetSkill`: um … zu والفاصلة في كل جملة؛ mich مع ich، وvorzubereiten/nachzuschlagen كلمتان صحيحتان، مع nehme…mit في الرئيسية. — الشكل المطلوب مدرب عليه؛ الإقرار والطول ليسا تصحيحًا لصحة اللغة.

الدليل المحلي: `{"method": "local_self_check", "requiredChecks": ["taskCompletion", "meaningClarity", "targetSkill"], "minimumResponseCharacters": 150, "speakAloud": false, "audioRequired": false}`

### DL-A2-07-AUD-PHR-01

Die Fremdsprache. Die Sprachschule. Das Wörterbuch. Das Reiseziel. Der Reisepass. Die Unterkunft. Die Gastfamilie. Die Sprachreise. Mitnehmen. Üben. Sich anmelden. Sich informieren über. Die Gelegenheit. Nützlich. Verbessern. Erfahren. Nachschlagen. Ich lerne Deutsch, um in Österreich zu studieren. Maha fährt nach Wien, um einen Sprachkurs zu besuchen. Wir benutzen ein Wörterbuch, um neue Wörter zu verstehen.

**الحكم:** مراجعة نص التسجيل وربطه بالمصدر؛ الأصوات والمسارات والحالات محفوظة، ولا استماع أو اعتماد صوتي جديد.

مراجع متصلة: INF, ZU.

- **Die Fremdsprache.** — اسم مؤنث وجمعه Fremdsprachen؛ لغة أجنبية، لا مستوى محدد.

- **Die Sprachschule.** — Sprachschule مدرسة لغات، وجمعها Sprachschulen؛ ليست Sprachkurs.

- **Das Wörterbuch.** — اسم محايد وجمعه Wörterbücher؛ القاموس أداة تعلم، لا ضمان فهم كل الكلمات.

- **Das Reiseziel.** — Reiseziel وجهة سفر، وجمعه Reiseziele؛ لا يخلط بغاية الفعل النحوية.

- **Der Reisepass.** — جواز سفر وجمعه Reisepässe؛ المثال لا يقرر وجوبه لكل انتقال.

- **Die Unterkunft.** — مكان إقامة وجمعه Unterkünfte؛ لا يختزل في الفندق.

- **Die Gastfamilie.** — أسرة مضيفة وجمعها Gastfamilien؛ ليست بالضرورة أسرة المتعلم الأصلية.

- **Die Sprachreise.** — رحلة لتعلم اللغة وجمعها Sprachreisen؛ ليست مجرد أي رحلة.

- **Mitnehmen.** — nimmt mit مع تغير الجذر والفصل؛ يأخذ معه، وليس بالضرورة يحضر إلى المتكلم.

- **Üben.** — üben يتدرب؛ لا يعني أن الإتقان حصل بالفعل.

- **Sich anmelden.** — meldet sich an مع الفصل والانعكاس؛ تسجيل في السياق، لا إجراء خارجي يطلبه التطبيق.

- **Sich informieren über.** — حُفظ über في خانة التصريف؛ sich informieren استعلام، لا إعلام شخص آخر.

- **Die Gelegenheit.** — Gelegenheit فرصة، وجمعها Gelegenheiten؛ لا تعني موعدًا مثبتًا.

- **Nützlich.** — nützlich مفيد؛ صفة وليست اسم فائدة.

- **Verbessern.** — verbessern يحسن وغير منفصل؛ zu verbessern وليس verzubessern.

- **Erfahren.** — erfahren هنا يحصل على معلومات، وتصريفه erfährt؛ ليس fahren أو صفة خبرة.

- **Nachschlagen.** — nachschlagen يراجع مدخلًا في مرجع؛ schlägt nach مع الفصل، لا معنى مشابهة أحد الوالدين.

- **Ich lerne Deutsch, um in Österreich zu studieren.** — أنا أتعلم وأنا أنوي الدراسة؛ in Österreich مكان الدراسة وzu studieren آخر الغاية. لا قبول جامعي مثبت.

- **Maha fährt nach Wien, um einen Sprachkurs zu besuchen.** — Maha تسافر وهي التي تنوي حضور الدورة؛ القاعدة لا تسند الحضور إلى Hiba ولا تثبت أنه وقع.

- **Wir benutzen ein Wörterbuch, um neue Wörter zu verstehen.** — المجموعة نفسها تستخدم القاموس وتريد فهم الكلمات؛ zu verstehen، لا فعل مصرف جديد.

### DL-A2-07-AUD-DLG-01

Warum fährst du im Sommer nach Wien? Ich mache eine Sprachreise, um mein Deutsch zu verbessern. Besuchst du eine Sprachschule? Ja. Ich habe mich angemeldet, um jeden Vormittag Deutsch zu üben. Und was machst du am Nachmittag? Ich besuche Museen, um mehr über die Stadt zu erfahren. Das klingt interessant. Gute Reise!

**الحكم:** مراجعة نص التسجيل وربطه بالمصدر؛ الأصوات والمسارات والحالات محفوظة، ولا استماع أو اعتماد صوتي جديد.

مراجع متصلة: INF, ZU.

- **Warum fährst du im Sommer nach Wien?** — Hiba تسأل عن غرض رحلة الصيف إلى Wien؛ Warum يستقبل هنا جواب غاية.

- **Ich mache eine Sprachreise, um mein Deutsch zu verbessern.** — Maha تعلل الرحلة بتحسين الألمانية؛ zu verbessern غير منفصل، ولا ضمان لتحسن حاصل.

- **Besuchst du eine Sprachschule?** — سؤال Hiba عن مدرسة لغات؛ الفعل أولًا في سؤال نعم أو لا.

- **Ja. Ich habe mich angemeldet, um jeden Vormittag Deutsch zu üben.** — Maha تخبر بتسجيل سابق: habe mich angemeldet؛ الغاية التدريب كل قبل الظهر، لا إثبات تحققه.

- **Und was machst du am Nachmittag?** — السؤال عن نشاط بعد الظهر مستقل عن وقت الدراسة.

- **Ich besuche Museen, um mehr über die Stadt zu erfahren.** — زيارة المتاحف لمعرفة المزيد عن المدينة؛ zu erfahren مصدر غير منفصل.

- **Das klingt interessant. Gute Reise!** — تقييم Hiba وتمني رحلة طيبة؛ Gute Reise! ليس حجزًا أو تأكيد سفر.

### DL-A2-07-AUD-READ-01

Maha möchte im Sommer nach Wien reisen. Sie lernt Deutsch, um sich auf die Reise vorzubereiten. Sie benutzt ein Wörterbuch, um neue Wörter zu lernen, und informiert sich über die Stadt, um passende Orte zu finden. In Wien besucht sie eine Sprachschule, um täglich Deutsch zu üben. Sie möchte auch mit ihrer Gastfamilie sprechen, um die Sprache im Alltag zu benutzen.

**الحكم:** مراجعة نص التسجيل وربطه بالمصدر؛ الأصوات والمسارات والحالات محفوظة، ولا استماع أو اعتماد صوتي جديد.

مراجع متصلة: INF, ZU.

- **Maha möchte im Sommer nach Wien reisen.** — Maha ترغب في السفر صيفًا إلى Wien؛ möchte مع reisen بلا zu، وليس خبرًا عن سفر تم.

- **Sie lernt Deutsch, um sich auf die Reise vorzubereiten.** — تعلم اللغة للاستعداد؛ sich مع sie وvorzubereiten كلمة واحدة.

- **Sie benutzt ein Wörterbuch, um neue Wörter zu lernen, und informiert sich über die Stadt, um passende Orte zu finden.** — غايتان: القاموس لتعلم كلمات جديدة، والاستعلام لإيجاد أماكن مناسبة. الفاصلة بعد lernen تغلق الغاية الأولى قبل und.

- **In Wien besucht sie eine Sprachschule, um täglich Deutsch zu üben.** — تصف الخطة مدرسة لغات في Wien للتدريب يوميًا؛ لا عدد ساعات محدد.

- **Sie möchte auch mit ihrer Gastfamilie sprechen, um die Sprache im Alltag zu benutzen.** — رغبة إضافية بالحديث مع الأسرة المضيفة لاستعمال اللغة يوميًا؛ لا حصر للمحادثات أو نتائج طلاقة مثبتة.

### DL-A2-07-AUD-LST-01

Ich reise nach München, um meine Freundin zu besuchen. Ich nehme ein kleines Wörterbuch mit, um neue Wörter nachzuschlagen. Am Vormittag besuche ich einen Sprachkurs, um mein Deutsch zu verbessern. Am Abend gehen meine Freundin und ich in ein Café, um zusammen zu sprechen.

**الحكم:** مراجعة نص التسجيل وربطه بالمصدر؛ الأصوات والمسارات والحالات محفوظة، ولا استماع أو اعتماد صوتي جديد.

مراجع متصلة: INF, ZU.

- **Ich reise nach München, um meine Freundin zu besuchen.** — الراوي يسافر إلى München لزيارة صديقة؛ لا اسم أو جنس للراوي في ich.

- **Ich nehme ein kleines Wörterbuch mit, um neue Wörter nachzuschlagen.** — قاموس صغير لمراجعة الكلمات؛ nehme…mit في الرئيسية وnachzuschlagen في الغاية.

- **Am Vormittag besuche ich einen Sprachkurs, um mein Deutsch zu verbessern.** — دورة قبل الظهر لتحسين الألمانية؛ zu verbessern غير منفصل، وليس مدرسة قراءة Maha.

- **Am Abend gehen meine Freundin und ich in ein Café, um zusammen zu sprechen.** — الصديقة والراوي يذهبان إلى مقهى مساء للحديث معًا؛ فاعل جمع، والغاية للمجموعة نفسها.

## البصمات

توجدSHA-256 للمصدر والتقييم وكل كائن صوت كامل فيJSON المناظر، مع نتائج مقارنة474MP3 ببصماتGit السابقة. هذه مطابقة ملفات ونصوص، لا استماع أو إثبات جودة نطق.
