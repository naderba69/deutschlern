# CR38 — مراجعة B1.8: المنتجات والاستهلاك والإعلان

رُوجع **B1.8 — المنتجات والاستهلاك والإعلان: je … desto/umso …** في **110 وحدات و39 بندًا داخل التمارين، و30 خيار تقييم و6 معايير**. استُخدمت **9 صفحات كاملة وأجزاء محددة من مرجع عاشر**. صُحح Q07 من «مادتين» إلى «معلومتين»، وقُيد Q05 بالحاضر، ووُضحت وحدة المقارنة وموقع المصرف وحدود الاستدلال الإعلاني. **P01 خمس جمل كتابة فقط؛ P02 أربع جمل كتابة وجهر**، بمعايير ومصدر ونموذجين متطابقة. جميع الخيارات30 والفهارس والروابط و80% وحدا150/130 محفوظة. الإصدار `b1-08-v2` والمخزن `v86`؛ خمسة أصول/10 مقاطع ثابتة دون استماع أو توليد أو اعتماد جديد. **الحملة37/53 درسًا والبوابة منفصلة؛ تبقى16، والتالي CR39/B1.9.** هذه مراجعة نصية مفحوصة، لا دمج أو اكتمال المشروع أو شهادة مستوى.

**التاريخ:**2026-10-08. **التنفيذ المرفوع:**`331b7d3fc29fafe05aeab96d7a1f3ec45be0fccb` على`arena/01a1036f-deutschlern`. PR#1 مفتوحة وغير مدمجة. نجحPreview لهذا التنفيذ حسبAPI: https://deutschlern-2cmsg88ie-balinader-2671s-projects.vercel.app ؛ لا اختبار للواجهة البعيدة أوProduction. التقرير يرفع فور فحص مجموعته ثم يوثق إيصال الرفع.

## أبرز التصحيحات

- Q07: معلومتان لا مادتان؛ Q05: حاضر مطلوب لا رفض للماضي بوصفه خطأ صرفيًا.
- T01 يدعم Endpreis، وT02 يدعم استبدال desto بـumso؛ T03 يطلب التصريف لا إيجاد موقع معطى أصلًا.
- P01 خمس جمل كتابة فقط، وP02 أربع جمل كتابة وجهر؛ المصدر والدليل والمعايير والنموذجان متطابقة.
- الموقع النحوي الثاني لوحدة المقارنة، والمصدر آخر الجزء الرئيسي قبل السؤال غير المباشر؛ ليست كل جملةفعلية ترتيبًا واحدًا.
- بيانات الإعلان قابلة للتحقق وليست مثبتة لمجرد ورودها؛ لا افتراض جنس الراوي أو شراء تحقق أو سعر يمكن حسابه من20% وحدها.

## الفحوص التراكمية — CR38

- **PASS:** البناء والتحقق و38 حارس مراجعة وخمس مجموعاتNode وسلامةJS وgit diff. الحزمة **2,094,031 بايت**؛53 درسًا،428 عنوان تمرين،61 قسم حوار،754 مفردة،530 سؤال درس+10 بوابة،109 مهمات،1080 صفcatalog،217 أصلًا/474 مقطعًا،137ready و80 معلقة.
- **المتصفح:** Chromium143.0.7499.0، Playwright1.58.2، axe4.11.0؛ نجحت المجموعات الخمس browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout. فحص1440×900 و390×844 شملRTL والقفل والتنقل والتفريغات وتشغيلMP3 آليًا بسرعتي1 و0.8 والتوقف عند الانتقال، دون أخطاء صفحة في الاختبار العام.
- **دون اتصال والتحديث:** إعادة التحميل والتنقل والصوت الكامل ونطاقات البايت/اللاحقة و416/503؛ تحديثfixture v42 إلىv86 دون إعادة تحميل قسرية، وحفظ التقدم والإجابات وعزل المخازن وإعادة تخزين الصوت عند الاتصال. لا ضمان لبقاء كل الملفات مخزنة أو اختبار لكل ترحيل تاريخي.
- **الدليل والتدرج:** سجلB1.8 القديمv1 محفوظ لكنه لا يمنح إتقانv2 أو يفتحB1.9؛ المسودة القديمة مرفوضة. الدرجة والدليل الحاليان يفتحان التالي، وحذف الدليل يغلقه. P01 دون مربع جهر وP02 تتطلبه؛ ثلاثة إقرارات وحدا150/130 لازمة. النموذجان415/370 حرفًا؛ لا تصحيح آلي لعدد الجمل أو جودة اللغة والنطق.
- **axe:**165 حالة ممثلة وصفر مخالفات للقواعد المختارة؛ **115 ظهورًا غير حاسم تشمل262 ظهورًا لعقد**. ليست شهادةWCAG ولا تأكيدًا بأن غير الحاسم مخالفة؛ لا مراجع بشري شرطًا للاستمرار.
- **العرض الضيق:**126 حالة،63 لكل من320×900 و568×320، تشمل53 درسًا بجميع التفريغات والجداول والقائمة. ليست اختبارات هاتف فعلي أو تكبير أصلي.
- **التعثرات وحدود الإصلاح:** توقف مولدCSV عند اختلاف مسافة عنوان القواعد؛ أعيد العنوان الأصلي ونفذ الجزء المتبقي فقط. فشلprogression الأول قبل وصول التنفيذ إلى تحديث عقد المهمتين ثم نجح؛ وصُحح بحث لفظي في الحارس عن«مستبدلًا». لا تغيير للنص الألماني المسجل بسبب ذلك. نجحت مجموعات المتصفح من أول تشغيل هنا؛ نجحforms_keyboard بالعرضين دون تعديل اختباره، لكن تذبذبnative chooser التاريخي غير محلول.
- **الصوت والنشر:** تشغيل آلي صامت ومطابقة نصية وبنيةMP3، لا استماع أو اعتماد جديد. نجح نشر التنفيذ331b7d3 إلىPreview حسبGitHub API؛ لم تختبر الواجهة البعيدة أوProduction. نجاح التنفيذ لا يُنسب تلقائيًا إلى أيcommit لاحق.

## الحفظ والحدود

مقارنة بالأساس`7247ff7ed7eb308459e47be3e42cb3b280af07a5`:52 درسًا آخر وكل مفاتيح الحزمة الأخرى،1060 صفcatalog و212 صفaudio-register ثابتة، وأربعة صفوفB1.8 تغير فيهاsource_line فقط. حُفظت590 ملفًا تشمل474MP3 وplaylist مطابقة بالبايت. خمسة أصول/10 مقاطع ثابتة بأصواتMira02/Bilal05 والقراءة04 والمفردات/النماذج02 والاستماع03. النموذجان415/370 حرفًا مكتوبان غير مسجلين.

- مراجعة مصدرية نصية بالذكاء الاصطناعي، لا شهادة CEFR أو WCAG أو تقييم لمتعلم حقيقي.
- لا استماع أو توليد أو اعتماد صوتي جديد، ولا اختبار شراء أو حقوق قانونية أو منتجات فعلية.
- 9 صفحات كاملة ومرجع مقروء جزئيًا؛ لا الدراسات أو PDF أو الصوت المرتبط.
- 165 حالةaxe وصفر مخالفات للقواعد المختارة لا تعني اجتيازWCAG كاملًا؛115 ظهورًا غير حاسم تشمل262 ظهورًا لعقد، ليست مخالفات مؤكدة.
- تشغيلMP3 آلي صامت لا استماع لكل ملف، ومقاساتCSS ليست هواتف فعلية أو تكبيرًا أصليًا.
- اختبار تحديثfixture v42 إلىv86 لا يثبت كل مسار ترحيل تاريخي أوProduction.
- الحروف والإقرارات ليست تصحيحًا آليًا للجمل أو النطق أو ادعاءات الإعلان؛ لا مراجع بشري شرطًا للاستمرار.
- أسماء المنتجات والأرقام الجديدة خيالية مستقلة عن القراءة؛ لا تحقق تجريبي من السعر أو الوزن أو جودة المنتجات.

## المراجع ونطاق القراءة

- **COMP — Lingolia — Adjektive** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive): المقارنة والتمييز عن التفضيل الأعلى، وباب je … desto/umso وترتيب المصرف. الصفحة تبسط العلاقة بزيادة مع زيادة؛ الدرس يوضح أيضًا علاقة länger/seltener، ولا يحول التركيب إلى برهان سببي أو تناسب حسابي ثابت. **قرئت كاملة**؛ الأجزاء [0, 1] من 2، بتاريخ 2026-10-08.
- **DESTO — Duden — desto** [DESTO](https://www.duden.de/rechtschreibung/desto): أمثلة المقارنة مع je ومع mehr/weniger؛ مرادف umso في النمط المستهدف، لا حصر جميع الاستعمالات في جملتين كاملتين. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-08.
- **UMSO — Duden — umso** [UMSO](https://www.duden.de/rechtschreibung/umso): كلمة واحدة، ومعناها المقارن مع je؛ المصدر يعرض أيضًا استعمالات دون je فلا نعمم قيد النمط المدرّس. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-08.
- **V2 — Lingolia — Hauptsätze** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze): المصرف ثاني وحدة نحوية في الرئيسية الخبرية؛ الصورة غير المصرفة في نهاية الجزء الرئيسي. لا نعمم تبسيطات ترتيب العناصر في الصفحة على كل نبر أو سياق. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-08.
- **QUALITY — Duden — Qualität** [QUALITY](https://www.duden.de/rechtschreibung/Qualitaet): مؤنث وجمع Qualitäten، مع معاني الجودة والخصائص؛ الشرطة في الدرس تعليمية للجودة المجردة هنا وليست نفيًا لكل جمع. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-08.
- **DURABLE — Duden — Haltbarkeit** [DURABLE](https://www.duden.de/rechtschreibung/Haltbarkeit): مؤنث ومعناه صفة قابلية البقاء/المتانة. ترجمة مدة الصلاحية أو المتانة مقيدة بالسياق، وليست مدة رقمية أو ضمانًا لكل منتج. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-08.
- **SUSTAIN — Duden — nachhaltig** [SUSTAIN](https://www.duden.de/rechtschreibung/nachhaltig): أثر طويل المدى ومعنى الاستدامة البيئية؛ لا تساوي الكلمة langlebig في كل سياق ولا تثبت الاستدامة بمجرد ورودها في إعلان. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-08.
- **PRICE — Duden — Endpreis** [PRICE](https://www.duden.de/rechtschreibung/Endpreis): المذكر وجمع Endpreise؛ السعر النهائي بما فيه الإضافات والتكاليف. لا يثبت ذلك أن رقمًا ناقصًا في إعلان حقيقي شامل لكل شيء. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-08.
- **AD — Duden — Werbung** [AD](https://www.duden.de/rechtschreibung/Werbung): المدخل يذكر Werbungen جمعًا، لكنه يقيد معنى النشاط الإعلاني العام بعدم الجمع. حافظنا على الشرطة مع توضيح نطاقها. **قرئت كاملة**؛ الأجزاء [0] من 1، بتاريخ 2026-10-08.
- **1 — Verbraucherzentrale — Online-Bewertungen / Fake-Reviews** [1](https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/kann-man-onlinebewertungen-trauen-so-erkennen-sie-fakereviews-124728): قرئت الأجزاء 0 و 1 من 11، وتشمل متن المقال عن مخاطر عدم الأصالة وتضارب المصالح وحدود مؤشرات الكشف. لم تقرأ بقية الصفحة أو الدراسات والروابط؛ لم تنقل نسب أو أحكام قانونية. المرجع لا يثبت تزييف تقييمي القصة الخيالية. **قرئت أجزاء محددة فقط**؛ الأجزاء [0, 1] من 11، بتاريخ 2026-10-08.

**مستبعد:** https://www.duden.de/rechtschreibung/je — صفحة غير موجودة، وليست مرجعًا. صفحةLingolia أعادت التوجيه منsteigerungsformen إلىadjektive؛ لا تُعد مرجعين. لم تُقرأ الروابط أو الدراسات أو ملفاتPDF التابعة.

## الوحدات الفردية — 110 وحدات

التقسيم:7 نطاقات،17 صف مفردات،5 أمثلة مسجلة،10 مساعدات،6 أدوار حوار،9 جمل قراءة و6 أسئلة،6 جمل استماع و5 أسئلة،8 تمارين،10 أسئلة تقييم،مهمتا أداء،9 جمل نماذج،5 بطاقات،5 أصول صوت. بنود التمارين39 بتوزيع5/5/3/3/5/5/4/9، لا تعد ضمن110 مرة ثانية؛ وصيغ المقارنة12 داخل المساعدة ليست بنود تمرين إضافية. تكرار النص ضمن الأصل الصوتي فحص مطابقة مستقل، لا ادعاء محتوى جديد.

### scope-01

**المدة المقترحة:** 40–45 دقيقة، ويمكن تقسيم العمل · **المهارات:** قراءة إعلان، استماع اختياري، مقارنة، قواعد، كتابة وجهر

**نتيجة المراجعة:** المدة تقدير يقبل التقسيم؛ الاستماع اختياري للتقييم المكتوب، والجهر مطلوب في P02 فقط. لا قياس زمن تعلم حقيقي.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### scope-02

**الهدف:** أستطيع أن أقارن بين المنتجات، وأستخدم **je … desto/umso …** للحديث عن علاقة متدرجة بين أمرين.

**نتيجة المراجعة:** الهدف مقارنة منتجات وعلاقة متدرجة؛ مهام التدريب خيالية ولا تمنح شهادة B1 أو جاهزية شراء.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive)

### scope-03

تنبيه معجمي: الشرطة تعني أننا لا نقدم جمعًا في هذا الاستعمال، لا أنه مستحيل في كل معنى. لـ**Qualität** جمع **Qualitäten**، ولـ**Werbung** جمع **Werbungen** في استعمالات أخرى؛ Werbung بمعنى النشاط الإعلاني العام هنا دون جمع. **langlebig** طويل العمر، و**nachhaltig** مستدام في السياق البيئي، وليسا مترادفين أو شهادة جودة. هذه توضيحات مكتوبة لا إضافات إلى التسجيل.

**نتيجة المراجعة:** Qualitäten و Werbungen موجودتان معجميًا مع اختلاف المعاني. الشرطة مقيدة هنا، و langlebig ليست شهادة استدامة. التوضيح مكتوب دون تغيير النطق.


**مصادر القاعدة/المنهج:** [QUALITY](https://www.duden.de/rechtschreibung/Qualitaet), [AD](https://www.duden.de/rechtschreibung/Werbung), [SUSTAIN](https://www.duden.de/rechtschreibung/nachhaltig)

### scope-04

نستخدم **je + صيغة المقارنة** في الجزء الأول، و**desto/umso + صيغة المقارنة** في الجزء الثاني. في النمط الكامل المدروس يأتي الفعل المصرف في نهاية الجزء الذي يبدأ بـ**je**، وتتصدر **desto/umso + المقارنة** الجزء الرئيسي كوحدة واحدة، ثم يأتي المصرف ثم الفاعل. المقصود الموقع النحوي الثاني لا الكلمة الثانية بعد الرابط. ويمكن استعمال **desto** و**umso** بالمعنى نفسه هنا.

**نتيجة المراجعة:** قُيد الموقع الثاني بوحدة الرابط والمقارنة؛ المصرف لا يأتي ثاني كلمة بعد desto وحدها. القاعدة للنمط الكامل المستهدف.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [DESTO](https://www.duden.de/rechtschreibung/desto), [UMSO](https://www.duden.de/rechtschreibung/umso)

### scope-05

تذكّر أن **je** تفتتح جملة تابعة تنتهي بالفعل، بينما يبدأ الجزء الثاني بـ**desto/umso** ويستمر بترتيب الجملة الرئيسية:

**نتيجة المراجعة:** تذكير بنهاية المصرف في التابعة، مع المثال التالي؛ المساعدات تميز المصرف عن المصدر وحدود كل جزء.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### scope-06

دليل التطبيق: P01 كتابة فقط بحد 150 حرفًا، و P02 كتابة ثم جهر بحد 130 حرفًا؛ لكل منهما الإقرارات الثلاثة. لا يعد التطبيق الجمل أو الروابط آليًا.

**نتيجة المراجعة:** 150 حرفًا لـ P01 و 130 لـ P02 وثلاثة إقرارات؛ P01 كتابة فقط و P02 جهر. العد والإقرارات ليست تدقيق لغة أو عدد جمل.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### scope-07

النموذجان مكتوبان خياليان وغير مسجلين. الضميران sie sie في جملة الحمل يعنيان: Nora تستطيع حمل القارورة؛ الأول فاعل والثاني مفعول. الأرقام معطيات تدريب لا أسعار فعلية، ولا تعني عبارة überprüfbar أن فحصًا حقيقيًا أُجري.

**نتيجة المراجعة:** نماذج أصلية مكتوبة غير مسجلة. ضميرا sie sie صحيحان نحويًا: Nora فاعل والقارورة مفعول. الأرقام خيالية وقابلية الفحص لا تعني إجراءه.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-01

| das Produkt | die Produkte | المنتج |

**نتيجة المراجعة:** das Produkt وجمع Produkte: المنتج. الضبط والمعنى راجعا لغويًا؛ لا ربط بمنتج حقيقي.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-02

| die Werbung | — | الإعلان / الدعاية |

**نتيجة المراجعة:** die Werbung: النشاط الإعلاني العام هنا دون جمع؛ المدخل يذكر Werbungen لمعانٍ أخرى، فلا نعد الشرطة حكمًا مطلقًا.


**مصادر القاعدة/المنهج:** [AD](https://www.duden.de/rechtschreibung/Werbung)

### vocab-03

| die Anzeige | die Anzeigen | الإعلان المنشور |

**نتيجة المراجعة:** die Anzeige وجمع Anzeigen: إعلان منشور في السياق. لا نعني كل معاني Anzeige مثل البلاغ الرسمي.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-04

| die Zielgruppe | die Zielgruppen | الفئة المستهدفة |

**نتيجة المراجعة:** die Zielgruppe وجمع Zielgruppen: من يوجه إليهم الإعلان. ليست السعر أو مراجعات العملاء.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-05

| die Marke | die Marken | العلامة التجارية |

**نتيجة المراجعة:** die Marke وجمع Marken: العلامة التجارية في هذا السياق، لا ملكية حقيقة أو وعد جودة.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-06

| der Rabatt | die Rabatte | التخفيض |

**نتيجة المراجعة:** der Rabatt وجمع Rabatte: تخفيض على سعر، لا السعر النهائي نفسه ولا ضمان أن الصفقة مناسبة.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-07

| der Preis | die Preise | السعر |

**نتيجة المراجعة:** der Preis وجمع Preise: السعر هنا، لا الجائزة وهي معنى آخر. لا أرقام أصلية لسعر القارورة في القراءة.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-08

| die Qualität | — | الجودة |

**نتيجة المراجعة:** die Qualität: الجودة؛ الجمع Qualitäten موجود لخصائص أو أنواع بحسب السياق، وقد قُيدت الشرطة كتابة.


**مصادر القاعدة/المنهج:** [QUALITY](https://www.duden.de/rechtschreibung/Qualitaet)

### vocab-09

| die Verpackung | die Verpackungen | التغليف / العبوة |

**نتيجة المراجعة:** die Verpackung وجمع Verpackungen: العبوة أو التغليف. الفرق بين الشيء المعدود وعملية التغليف تحدده الجملة.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-10

| die Haltbarkeit | — | مدة الصلاحية / المتانة بحسب السياق |

**نتيجة المراجعة:** die Haltbarkeit: مدة البقاء صالحًا أو المتانة بحسب السياق، لا رقم مدة محدد أو دليل شهادة.


**مصادر القاعدة/المنهج:** [DURABLE](https://www.duden.de/rechtschreibung/Haltbarkeit)

### vocab-11

| die Kundenbewertung | die Kundenbewertungen | تقييم العملاء |

**نتيجة المراجعة:** die Kundenbewertung وجمع Kundenbewertungen: تقييم عميل. ليس وجود التقييم برهان أصالة أو خبرة فنية.


**مصادر القاعدة/المنهج:** [1](https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/kann-man-onlinebewertungen-trauen-so-erkennen-sie-fakereviews-124728)

### vocab-12

| die Eigenschaft | die Eigenschaften | خاصية |

**نتيجة المراجعة:** die Eigenschaft وجمع Eigenschaften: خاصية. ليست كل خاصية مقياسًا عدديًا ولا كل وصف خاصية مثبتة.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-13

| der Endpreis | die Endpreise | السعر النهائي |

**نتيجة المراجعة:** der Endpreis وجمع Endpreise: النهائي مع الإضافات والتكاليف؛ Q02 و T01 يدعمان هذا التمييز.


**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### vocab-14

| langlebig / nachhaltig | — | طويل العمر / مستدام |

**نتيجة المراجعة:** langlebig طويل العمر و nachhaltig مستدام بيئيًا هنا؛ كلمتان في صف واحد، ومنطوقتان كوحدتين منفصلتين. لا تساوٍ مطلق بينهما.


**مصادر القاعدة/المنهج:** [SUSTAIN](https://www.duden.de/rechtschreibung/nachhaltig)

### vocab-15

| vergleichen | vergleicht | يقارن |

**نتيجة المراجعة:** vergleichen وتصريف vergleicht للغائب المفرد؛ في الاستماع verglichen مع haben. المقارنة لا تستلزم شراء.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### vocab-16

| versprechen | verspricht | يَعِد / يَعِدُ بـ |

**نتيجة المراجعة:** versprechen وتصريف verspricht: يَعِد في الإعلان، لا أنه وفّى الوعد؛ لا نخلطه مع معنى الخطأ في الكلام للانعكاسي.


**مصادر القاعدة/المنهج:** [AD](https://www.duden.de/rechtschreibung/Werbung)

### vocab-17

| werben für | wirbt | يروّج لـ |

**نتيجة المراجعة:** werben für وتصريف wirbt مع für؛ الترويج لشيء، لا شراء الشيء أو إثبات صفاته.


**مصادر القاعدة/المنهج:** [AD](https://www.duden.de/rechtschreibung/Werbung)

### grammar-01

Je länger ein Gerät hält, desto seltener muss man es ersetzen.

**نتيجة المراجعة:** länger مع hält في نهاية je؛ desto seltener وحدة ثم muss و man، و ersetzen مصدر. زيادة العمر يقابلها قلة التكرار لا زيادته؛ ليست ضمانًا لجهاز محدد.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### grammar-02

Je genauer man die Angaben prüft, desto leichter kann man Produkte vergleichen.

**نتيجة المراجعة:** genauer مع prüft للمفرد man؛ desto leichter ثم kann ثم man والمصدر vergleichen. فحص المعلومات ليس مجرد زيادة عدد المراجعات.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### grammar-03

Je klarer die Beschreibung ist, umso besser können Kundinnen das Produkt beurteilen.

**نتيجة المراجعة:** klarer مع ist؛ umso besser ثم können للجمع Kundinnen، وهي عميلات بصيغة المؤنث الجمع، لا جنس كل المستهلكين.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### grammar-04

Je niedriger der Preis ist, desto attraktiver wirkt das Angebot.

**نتيجة المراجعة:** niedriger مع ist؛ desto attraktiver ثم wirkt و das Angebot. الجاذبية انطباع وليست جودة مؤكدة. هذا المثال مسجل وموجود في مفتاح T04 لا ضمن القائمة الأولى وحدها.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### grammar-05

Je genauer wir vergleichen, desto leichter fällt die Entscheidung.

**نتيجة المراجعة:** genauer مع vergleichen للفاعل wir؛ في الرئيسية fällt مفرد لأن الفاعل Entscheidung مفرد. لا يتبع فاعل التابعة تلقائيًا.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### helper-01

**المقارنة لا التفضيل الأعلى:** lang → länger، langlebig → langlebiger، selten → seltener، genau → genauer، leicht → leichter، niedrig → niedriger، attraktiv → attraktiver، klar → klarer، gründlich → gründlicher، gut → besser، viel → mehr، wenig → weniger. لا نستبدل seltener بـ selten أو am seltensten في هذا النمط. الكم بعد mehr/weniger قد يصاحبه اسم: mehr Produkte، weniger Verpackung.

**نتيجة المراجعة:** اثنتا عشرة صيغة مقارنة مفردة؛ länger بها Umlaut و besser/mehr غير منتظمتين، و weniger تحدد الكمية. المقارنة غير التفضيل الأعلى؛ لا فرض als داخل je.

- وحدة نصية: lang → länger
  - المقارنة مع Umlaut، وليست lang فقط.
- وحدة نصية: langlebig → langlebiger
  - تضاف-er مع بقاء جذع الكلمة.
- وحدة نصية: selten → seltener
  - المقارنة في التكرار، لا selten أو am seltensten.
- وحدة نصية: genau → genauer
  - المقارنة في الدقة دون حرف جر إلزامي.
- وحدة نصية: leicht → leichter
  - المقارنة في السهولة أو الوزن بحسب السياق.
- وحدة نصية: niedrig → niedriger
  - انخفاض السعر مع المحافظة على-g في الجذع.
- وحدة نصية: attraktiv → attraktiver
  - الجاذبية أكبر، ولا تثبت الجودة.
- وحدة نصية: klar → klarer
  - وضوح الوصف لا حقيقته بالضرورة.
- وحدة نصية: gründlich → gründlicher
  - درجة التدقيق، مع-er.
- وحدة نصية: gut → besser
  - صيغة غير منتظمة.
- وحدة نصية: viel → mehr
  - كمية أكثر وصيغة غير منتظمة.
- وحدة نصية: wenig → weniger
  - كمية أقل؛ وقد تسبق اسمًا غير معدود.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive)

### helper-02

**فكك المواضع:** في **desto leichter kann man Produkte vergleichen** تشغل desto leichter الموقع الأول، ثم kann المصرف، ثم man الفاعل؛ vergleichen مصدر في نهاية الجزء الرئيسي. وفي **Je mehr Produkte ich verglichen habe** ينتهي الجزء بالمصرف habe بعد Partizip II. الفاصلة تفصل الجزأين، ولا ننقل قاعدة المصرف إلى كل كلمة فعلية.

**نتيجة المراجعة:** الرابط والمقارنة وحدة أولى؛ kann مصرف و vergleichen مصدر. في Perfekt ينتهي جزء je بـ habe لا بالمشاركة verglichen.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### helper-03

**نهاية الجزء لا كل النص:** في الاستماع **desto leichter konnte ich entscheiden, welches Modell zu meinem Alltag passt** ينتهي الجزء الرئيسي بالمصدر entscheiden ثم تأتي جملة السؤال غير المباشر، ومصرفها passt في نهايتها. لا ننقل entscheiden إلى نهاية النص كله.

**نتيجة المراجعة:** المصدر entscheiden يختم الرئيسية قبل الجملة التابعة، و passt يختم السؤال غير المباشر؛ لا نقل المصدر إلى نهاية النص كله.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### helper-04

**نطاق البديلين:** desto و umso متبادلان في النمط المقارن هنا؛ نكتب umso كلمة واحدة. لا نعمم أن لهما استعمالًا واحدًا فقط أو أن كل ظهور لهما يحتاج جملة je كاملة. التصريف في T03 و Q05 مطلوب في الحاضر؛ beschreibt للمفرد، و beschrieb ماضٍ لا خطأ صرفي مطلق.

**نتيجة المراجعة:** desto/umso مترادفان هنا لا في حصر كل استعمال؛ umso كلمة واحدة. وصف الماضي لا يصبح خطأ صرفيًا عند تقييد سؤال بالحاضر.


**مصادر القاعدة/المنهج:** [DESTO](https://www.duden.de/rechtschreibung/desto), [UMSO](https://www.duden.de/rechtschreibung/umso)

### helper-05

**العلاقة المعروضة ليست برهانًا:** قد تقل قيمة مع ازدياد أخرى: länger / seltener. الأمثلة تصف علاقة أو اقتراحًا داخل موقف، لا قانونًا بأن كل مقارنة أكثر تحسن القرار أو كل سعر أقل يعني جودة أعلى. klingt و wirkt تتعلقان بالانطباع، و sollte توصية. في دمج T04 نفترض العلاقة لأغراض التدريب؛ لا تثبتها جملتان منفصلتان وحدهما.

**نتيجة المراجعة:** التركيب يصف علاقة سياقية، ومنها عكس اتجاه القيم. افتراض التدريب ليس إثباتًا سببيًا أو توصية شراء مطلقة.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive)

### helper-06

**البيان ووعد الإعلان:** المادة والسعة والوزن معلومات محددة يمكن التحقق منها، لكن ذكرها في إعلان لا يثبت صحتها خارج القصة. «الأفضل للجميع» هنا ترويج عام بلا معيار اختبار؛ لا يعني ذلك أن كل إعلان كاذب أو أن التفضيل لا يمكن تحديد معاييره في سياق آخر. Edelstahl مادة، و 600 Milliliter سعة، و 320 Gramm وزن؛ ليست كلها مواد.

**نتيجة المراجعة:** المادة والسعة والوزن أنواع بيانات مختلفة. قابلية التحقق لا تعني الثبوت؛ الترويج العام هنا بلا معيار، ولا نصف كل إعلان بالكذب.


**مصادر القاعدة/المنهج:** [AD](https://www.duden.de/rechtschreibung/Werbung)

### helper-07

**الأسعار والحدود:** Endpreis السعر النهائي بما فيه الإضافات والتكاليف، لا مبلغ التخفيض. القراءة تنقل وعدًا بتخفيض 20% ولا تعطينا سعرًا أصليًا أو نهائيًا رقميًا لنحسبه. وجود شروط إرجاع لا يخبرنا بمحتواها أو بمهلة قانونية. لا نختلق حقوقًا أو أسعارًا فعلية؛ الدرس ليس مشورة شراء أو قانون.

**نتيجة المراجعة:** Endpreis ليس Rabatt، و 20% لا تكفي لحساب مبلغ دون أساس؛ لا نخترع مهلة إرجاع أو حكمًا قانونيًا.


**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### helper-08

**التقييم ليس شهادة:** قد تكون تقييمات العملاء غير أصيلة أو متأثرة بمصلحة؛ لا يجعل العدد وحده الحكم موثوقًا، ولا نثبت أن تقييمي القصة مزيفان. هذا حد عام مستند إلى Verbraucherzentrale، لا اختبار لتلك القصة: [1](https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/kann-man-onlinebewertungen-trauen-so-erkennen-sie-fakereviews-124728).

**نتيجة المراجعة:** حدود الاعتماد على التقييمات مستندة إلى الأقسام المقروءة من المصدر؛ لا يُحكم على أصالة رواية خيالية أو يتهم أشخاص.


**مصادر القاعدة/المنهج:** [1](https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/kann-man-onlinebewertungen-trauen-so-erkennen-sie-fakereviews-124728)

### helper-09

**افصل القصص والضمائر:** Mira و Bilal يناقشان سماعات ووعد البطارية. Salma تقارن ثلاثة نماذج قوارير ثم تؤجل الشراء. راوي الاستماع غير مسمى وجنسه غير مذكور؛ قارن ثلاثة نماذج حقائب وقرأ تقييمين، لا ثلاثة تقييمات. die Person مؤنث نحويًا، لذلك نقول ihr alter Rucksack عند التلخيص، لا نستنتج جنس الشخص من الصوت.

**نتيجة المراجعة:** السماعات والقوارير والحقائب قصص منفصلة؛ ثلاثة نماذج مقابل تقييمين. ضمير Person مؤنث نحوي لا تعريف جنس بشري.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### helper-10

**قرار ودليل محلي:** nur, wenn شرط لازم للشراء في الحوار، لا تأكيد بأن الشراء وقع. vorerst تأجيل الآن لا امتناع أبدي. P01 كتابة فقط و P02 كتابة ثم جهر بنفسك، دون شريك أو تسجيل أو شراء حقيقي؛ إقرارات التطبيق وحد الحروف لا تصحح اللغة أو النطق أو صحة ادعاء إعلاني آليًا.

**نتيجة المراجعة:** شرط الشراء لا يدل على تنفيذه، و vorerst ليس للأبد. المصدر يطابق الكتابة والجهر وحدود الدليل دون اشتراط شريك أو ملف صوت.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### dialogue-01

Diese Kopfhörer sind heute im Angebot.

**نتيجة المراجعة:** سماعات معروضة اليوم في سياق خيالي؛ Kopfhörer جمع مع sind، ولا سعر محدد.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### dialogue-02

Je niedriger der Preis klingt, desto genauer sollte man die Bedingungen lesen.

**نتيجة المراجعة:** klingt يعبر عن الانطباع كما يبدو السعر، و sollte توصية لفحص الشروط. لا يثبت أن السعر الفعلي أقل أو أن كل إعلان احتيال.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive)

### dialogue-03

Die Werbung verspricht eine besonders lange Akkulaufzeit.

**نتيجة المراجعة:** وعد بإطالة البطارية، لا تقرير اختبار أو مدة رقمية. verspricht غائب مفرد يتبع Werbung.


**مصادر القاعدة/المنهج:** [AD](https://www.duden.de/rechtschreibung/Werbung)

### dialogue-04

Dann prüfen wir, ob die Anzeige konkrete Angaben enthält. Je genauer ein Anbieter die Eigenschaften erklärt, desto leichter können wir vergleichen.

**نتيجة المراجعة:** فحص ما إذا كان الإعلان يحتوي تفاصيل؛ enthält ينهي ob. Anbieter مفرد مع erklärt، و wir جمع مع können ثم vergleichen.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive)

### dialogue-05

Ich vergleiche auch den Endpreis und die Rückgabebedingungen.

**نتيجة المراجعة:** Mira تقارن السعر النهائي وشروط الإرجاع؛ لم تذكر مهلة أو ضمانًا أو تنفيذ شراء.


**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### dialogue-06

Gute Idee. Wir kaufen nur, wenn das Produkt wirklich zu unserem Bedarf passt.

**نتيجة المراجعة:** nur, wenn قيد لازم للشراء، وليس إعلان وقوعه. zu unserem Bedarf دلالة الملاءمة للحاجة لا الجودة العامة.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-01

Im fiktiven Onlineshop „AlltagPlus“ wird eine Trinkflasche beworben.

**نتيجة المراجعة:** المتجر خيالي صراحة والمنتج قارورة؛ wird … beworben مبني للمجهول لا إعلان عن متجر واقعي.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-02

Die Anzeige nennt sie „die beste Flasche für jeden Tag“ und verspricht einen Rabatt von 20 Prozent.

**نتيجة المراجعة:** وصف الأفضل منسوب إلى الإعلان مع وعد 20%؛ لا مبلغ أساس أو شراء أو إثبات أفضلية.


**مصادر القاعدة/المنهج:** [AD](https://www.duden.de/rechtschreibung/Werbung)

### reading-03

In der Produktbeschreibung stehen konkrete Angaben: Die Flasche fasst 600 Milliliter, besteht aus Edelstahl und wiegt 320 Gramm.

**نتيجة المراجعة:** 600 ملليلتر سعة، Edelstahl مادة،320 غرامًا وزن. النص ينقل بيانات محددة قابلة للتحقق، لا اختبارًا مخبريًا مستقلًا.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-04

Auch der Endpreis und die Rückgabebedingungen sind angegeben.

**نتيجة المراجعة:** السعر النهائي وشروط الإرجاع مذكوران لكن محتواهما غير معطى. لا نستنتج رقمًا أو حقًا قانونيًا محددًا.


**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### reading-05

Salma hat bereits eine Flasche, die sie gern benutzt.

**نتيجة المراجعة:** Salma تملك قارورة تحب استعمالها؛ لا يذكر النص عمرها أو مواصفاتها أو أنها رخيصة.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-06

Sie vergleicht trotzdem drei Modelle und liest Kundenbewertungen.

**نتيجة المراجعة:** تقارن رغم ذلك ثلاثة نماذج وتقرأ تقييمات؛ لا تشتري ثلاثة منتجات ولا يحدد هذا الجزء عدد التقييمات.


**مصادر القاعدة/المنهج:** [1](https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/kann-man-onlinebewertungen-trauen-so-erkennen-sie-fakereviews-124728)

### reading-07

Die Aussage „die beste Flasche“ ist eine Werbeformulierung, keine messbare Eigenschaft.

**نتيجة المراجعة:** الأفضل صيغة ترويجية عامة في النص لا خاصية مقيسة بذاتها؛ لا تعميم على كل مقارنة ذات اختبار محدد.


**مصادر القاعدة/المنهج:** [AD](https://www.duden.de/rechtschreibung/Werbung)

### reading-08

Je klarer Eigenschaften und Zusatzkosten angegeben sind, desto einfacher kann man Produkte vergleichen.

**نتيجة المراجعة:** خصائص وتكاليف إضافية جمع مع sind؛ في الرئيسية kann يتبع man والمصدر vergleichen. الوضوح ييسر المقارنة دون إثبات صحة كل بيان.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### reading-09

Salma entscheidet sich, vorerst nichts zu kaufen.

**نتيجة المراجعة:** تقرر عدم الشراء حاليًا؛ vorerst لا تعني قرارًا أبديًا أو شراءً تحقق بعد ذلك.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-question-01

Was wird im fiktiven Onlineshop angeboten?

**نتيجة المراجعة:** السؤال عن المنتج، لا اسم المتجر وحده.

**الجواب:** Eine Trinkflasche.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-question-02

Was verspricht die Anzeige?

**نتيجة المراجعة:** الوعد بالتخفيض لا قيمة مالية معطاة؛ ينسب القول للإعلان.

**الجواب:** Einen Rabatt von 20 Prozent.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-question-03

Nenne zwei konkrete Angaben aus der Produktbeschreibung.

**نتيجة المراجعة:** صُحح المفتاح ليعطي مثالين ملموسين بدل مجرد أسماء فئات بيانات. يمكن قبول زوج آخر من المعلومات المصرح بها.

**الجواب:** Zum Beispiel: Sie fasst 600 Milliliter und besteht aus Edelstahl.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-question-04

Was vergleicht Salma, bevor sie entscheidet?

**نتيجة المراجعة:** ثلاثة نماذج مع قراءة التقييمات، لا ثلاثة مشتريات.

**الجواب:** Sie vergleicht drei Modelle und liest Kundenbewertungen.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-question-05

Warum ist „die beste Flasche“ keine messbare Eigenschaft?

**نتيجة المراجعة:** Weil ثم المصرف ist في النهاية؛ الأفضل هنا بلا معيار قياس محدد.

**الجواب:** Weil es eine allgemeine Werbeformulierung und keine messbare Produkteigenschaft ist.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### reading-question-06

Was entscheidet Salma am Ende?

**نتيجة المراجعة:** القرار تأجيل حالي، لا الامتناع الدائم أو شراء ثلاث قوارير.

**الجواب:** Sie entscheidet, vorerst nichts zu kaufen.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### listening-01

Ich wollte einen neuen Rucksack kaufen.

**نتيجة المراجعة:** رغبة سابقة في حقيبة جديدة، لا شراء منجز؛ جنس الراوي واسمه غير مذكورين.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### listening-02

In einer Anzeige gab es einen Rabatt.

**نتيجة المراجعة:** تخفيض في إعلان بلا نسبة معطاة؛ لا تنقل 20% من قصة القارورة.


**مصادر القاعدة/المنهج:** [AD](https://www.duden.de/rechtschreibung/Werbung)

### listening-03

Bevor ich mich entschieden habe, habe ich Größe, Material, Gewicht und Endpreis von drei Modellen verglichen.

**نتيجة المراجعة:** مقارنة الحجم والمادة والوزن والسعر النهائي لثلاثة نماذج؛ Perfekt في bevor مع habe أخيرًا ثم habe رئيسية ثانية.


**مصادر القاعدة/المنهج:** [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### listening-04

Je mehr Produkte ich verglichen habe, desto leichter konnte ich entscheiden, welches Modell zu meinem Alltag passt.

**نتيجة المراجعة:** خبرة الراوي في سهولة الاختيار؛ mehr Produkte مع verglichen habe، ثم konnte … entscheiden قبل السؤال غير المباشر. ليست قانونًا أن المزيد أفضل دائمًا.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### listening-05

Ich habe auch zwei Kundenbewertungen gelesen und am Ende gewartet.

**نتيجة المراجعة:** قرأ تقييمين ثم انتظر؛ لا ثلاثة تقييمات ولا شراء محسوم. العدد ليس إثبات أصالة.


**مصادر القاعدة/المنهج:** [1](https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/kann-man-onlinebewertungen-trauen-so-erkennen-sie-fakereviews-124728)

### listening-06

Mein alter Rucksack ist noch in Ordnung, und ein Rabatt allein ist kein Grund zum Kaufen.

**نتيجة المراجعة:** حقيبته القديمة ما زالت بحالة جيدة والتخفيض وحده ليس سبب الشراء في هذا السياق. Mein يعود للراوي دون تحديد جنس.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### listening-question-01

Was wollte die Person kaufen?

**نتيجة المراجعة:** يريد حقيبة لا قارورة أو سماعات.

**الجواب:** Einen Rucksack.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### listening-question-02

Wo sah sie einen Rabatt?

**نتيجة المراجعة:** مكان ورود التخفيض إعلان؛ لا متجر أو بلد مسمى.

**الجواب:** In einer Anzeige.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### listening-question-03

Wie viele Modelle verglich sie?

**نتيجة المراجعة:** ثلاثة نماذج، لا تقييمان.

**الجواب:** Drei Modelle.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### listening-question-04

Was konnte die Person nach dem Vergleich leichter entscheiden?

**نتيجة المراجعة:** قرار ما يلائم الحياة اليومية أصبح أسهل بحسب الرواية، ولم يصرح باسم النموذج الفائز.

**الجواب:** Sie konnte leichter entscheiden, welches Modell zu ihrem Alltag passt.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### listening-question-05

Warum kaufte sie am Ende nicht sofort?

**نتيجة المراجعة:** Ihr بدل Sein يحفظ المرجع die Person؛ بقاء القديمة صالحة مع عدم كفاية التخفيض وحده يفسر الانتظار.

**الجواب:** Ihr alter Rucksack ist noch in Ordnung; ein Rabatt allein ist kein Grund zum Kaufen.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### comparison-model-01

Flasche A kostet zwanzig Euro und ist günstiger als Flasche B für vierundzwanzig Euro.

**نتيجة المراجعة:** A أرخص من B بحسب 20 و 24 يورو فقط؛ لا توصية عامة بأن الأرخص أفضل.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### comparison-model-02

Mit dreihundert Gramm ist A leichter als B mit vierhundert Gramm.

**نتيجة المراجعة:** A أخف:300 مقابل 400 غرام. Mit مع Dativ والمصرف ist بعد العبارة المتقدمة.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### comparison-model-03

A fasst sechshundert Milliliter, B dagegen achthundert Milliliter.

**نتيجة المراجعة:** 600 مقابل 800 ملليلتر؛ B أكبر سعة. الحذف في الجزء الثاني مفهوم من fasst ولا يقلب المقارنة.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### comparison-model-04

Die Werbung nennt A die beste Flasche für alle, aber das ist eine allgemeine Werbeaussage.

**نتيجة المراجعة:** عبارة الأفضل منسوبة إلى الإعلان ثم توصيفها بالترويج العام؛ لا دليل تفوق مثبت.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### comparison-model-05

Je genauer ich vor dem Kauf das angegebene Gewicht prüfe, desto besser kann ich diese Angabe beurteilen.

**نتيجة المراجعة:** je genauer مع prüfe في النهاية، ثم desto besser و kann والمصدر beurteilen. يحدد التحقق من الوزن قبل الشراء.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### recommendation-model-01

Nach den fiktiven Angaben empfehle ich Nora Flasche A, weil sie eine günstige und leichte Flasche sucht.

**نتيجة المراجعة:** التوصية لـ Nora مشروطة ببيانات خيالية وحاجة السعر والخفة؛weil تنتهي sucht ولا شهادة جودة.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### recommendation-model-02

Je niedriger der Endpreis ist, desto weniger Geld muss Nora ausgeben.

**نتيجة المراجعة:** انخفاض السعر وانخفاض المبلغ مع niedriger/weniger؛desto weniger Geld وحدة أولى ثم muss ثم Nora و ausgeben.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### recommendation-model-03

Je leichter die Flasche ist, umso einfacher kann sie sie tragen.

**نتيجة المراجعة:** خفة القارورة تسهل الحمل في السيناريو؛umso einfacher ثم kann. sie الأولى Nora والثانية القارورة، لا تكرار خطأ.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### recommendation-model-04

Die Angabe von dreihundert Gramm ist überprüfbar, aber die Werbung mit der besten Flasche für alle beweist keine bessere Qualität.

**نتيجة المراجعة:** 300 غرام معلومة قابلة للتحقق، بينما عبارة الأفضل لا تثبت جودة أكبر؛ لا ادعاء إجراء اختبار حقيقي.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### DL-B1-08-T01

1. المجموعة التي يوجّه الإعلان رسالته إليها: **die Zielgruppe / die Qualität**
2. تخفيض على السعر: **der Rabatt / die Verpackung**
3. رأي يكتبه مستخدم عن منتج: **die Kundenbewertung / die Marke**
4. معلومة عن متانة المنتج أو مدة بقائه صالحًا: **die Haltbarkeit / die Anzeige**
5. السعر النهائي بما فيه الإضافات والتكاليف: **der Endpreis / der Rabatt**

**نتيجة المراجعة:** خمسة أزواج مفردات؛ كل بديل خاطئ مميز بالمعنى، وإضافة Endpreis تعالج نقص دعم Q02.

- T01.1: المجموعة التي يوجّه الإعلان رسالته إليها: **die Zielgruppe / die Qualität**
  - الجواب: die Zielgruppe؛ Zielgruppe جمهور مستهدف؛ Qualität جودة لا مجموعة أشخاص.
- T01.2: تخفيض على السعر: **der Rabatt / die Verpackung**
  - الجواب: der Rabatt؛ Rabatt تخفيض؛ Verpackung تغليف لا مبلغ خصم.
- T01.3: رأي يكتبه مستخدم عن منتج: **die Kundenbewertung / die Marke**
  - الجواب: die Kundenbewertung؛ Kundenbewertung رأي عميل؛ Marke علامة لا مراجعة.
- T01.4: معلومة عن متانة المنتج أو مدة بقائه صالحًا: **die Haltbarkeit / die Anzeige**
  - الجواب: die Haltbarkeit؛ Haltbarkeit متانة/بقاء صالح؛ Anzeige الإعلان نفسه.
- T01.5: السعر النهائي بما فيه الإضافات والتكاليف: **der Endpreis / der Rabatt**
  - الجواب: der Endpreis؛ Endpreis النهائي؛ Rabatt التخفيض فقط. أضيف دعم مباشر لـ Q02.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-T02

1. Je ______ ein Produkt ist, desto ______ muss man es ersetzen. (langlebig / selten)
2. Je ______ man vergleicht, desto ______ fällt die Entscheidung. (genau / leicht)
3. Je ______ der Preis ist, desto ______ wirkt das Angebot oft. (niedrig / attraktiv)
4. Je ______ Verpackung verwendet wird, desto ______ Müll entsteht. (wenig / wenig)
5. أعد كتابة جملة البند 2 مستبدلًا **desto** بـ**umso** مع حفظ المعنى والترتيب.

**نتيجة المراجعة:** أربع صيغ مقارنة وبند تبديل umso؛ لا خلط بين بناء المقارنة والتفضيل الأعلى.

- T02.1: Je ______ ein Produkt ist, desto ______ muss man es ersetzen. (langlebig / selten)
  - الجواب: langlebiger / seltener؛ langlebiger مع-er، و seltener قلة التكرار؛ لا ثبوت لعمر جهاز معين.
- T02.2: Je ______ man vergleicht, desto ______ fällt die Entscheidung. (genau / leicht)
  - الجواب: genauer / leichter؛ genauer و leichter بالمقارنة؛ fällt يتبع Entscheidung لا man في التابعة.
- T02.3: Je ______ der Preis ist, desto ______ wirkt das Angebot oft. (niedrig / attraktiv)
  - الجواب: niedriger / attraktiver؛ niedriger و attraktiver؛ oft قيد للتكرار و wirkt انطباع لا ضمان جودة.
- T02.4: Je ______ Verpackung verwendet wird, desto ______ Müll entsteht. (wenig / wenig)
  - الجواب: weniger / weniger؛ weniger في الفراغين؛ Verpackung و Müll استعمالان غير معدودين. لا استنتاج شامل لأثر بيئي من عامل واحد.
- T02.5: أعد كتابة جملة البند 2 مستبدلًا **desto** بـ**umso** مع حفظ المعنى والترتيب.
  - الجواب: Je genauer man vergleicht, umso leichter fällt die Entscheidung.؛ تبديل desto بـ umso دون قلب الفعل أو تغيير المعنى؛ دعم مباشر لـ Q04.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-T03

موضع الفراغ محدد أصلًا؛ اكتب مصرف Präsens الموافق للفاعل في نهاية جزء je.

1. Je länger das Gerät ______, desto seltener müssen wir es ersetzen. (halten)
2. Je genauer die Anzeige die Eigenschaften ______, desto leichter können Kundinnen mehrere Produkte vergleichen. (beschreiben)
3. Je mehr Bewertungen ich ______, desto besser kann ich mir ein Bild machen. (lesen)

**نتيجة المراجعة:** ثلاثة تصريفات حاضر؛ العنوان الجديد يطابق أن الفراغ محدد الموقع أصلًا.

- T03.1: Je länger das Gerät ______, desto seltener müssen wir es ersetzen. (halten)
  - الجواب: hält؛ das Gerät مفرد و Präsens مطلوب؛hält لا halten.
- T03.2: Je genauer die Anzeige die Eigenschaften ______, desto leichter können Kundinnen mehrere Produkte vergleichen. (beschreiben)
  - الجواب: beschreibt؛ die Anzeige فاعل مفرد، لا Eigenschaften المفعول الجمع. Präsens يحدد beschreibt بدل beschrieb.
- T03.3: Je mehr Bewertungen ich ______, desto besser kann ich mir ein Bild machen. (lesen)
  - الجواب: lese؛ ich في الحاضر يقتضي lese؛mehr Bewertungen مفعول لا فاعل الجمع.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-T04

افترض العلاقة المتدرجة لأغراض التدريب، وحوّل الصفتين إلى المقارنة مع الفاصلة. لا تعد الجملتين المنفصلتين دليلًا علميًا على علاقة سببية:

1. **Der Preis ist niedrig. Das Angebot wirkt attraktiv.**
2. **Wir vergleichen gründlich. Die Entscheidung wird leicht.**
3. **Die Beschreibung ist klar. Man kann das Produkt gut beurteilen.**

**نتيجة المراجعة:** ثلاث عمليات دمج وفق علاقة مفترضة للتدريب، لا إثبات سببية من جملتين.

- T04.1: **Der Preis ist niedrig. Das Angebot wirkt attraktiv.**
  - الجواب: Je niedriger der Preis ist, desto attraktiver wirkt das Angebot.؛ العلاقة مفترضة للتدريب؛ niedriger و attraktiver، ثم ist آخر التابعة و wirkt بعد وحدة المقارنة في الرئيسية.
- T04.2: **Wir vergleichen gründlich. Die Entscheidung wird leicht.**
  - الجواب: Je gründlicher wir vergleichen, desto leichter wird die Entscheidung.؛ wir جمع مع vergleichen؛ القرار مفرد مع wird. تتحول gründlich و leicht إلى المقارنة.
- T04.3: **Die Beschreibung ist klar. Man kann das Produkt gut beurteilen.**
  - الجواب: Je klarer die Beschreibung ist, desto besser kann man das Produkt beurteilen.؛ klarer مع ist، ثم desto besser و kann و man والمصدر beurteilen في نهاية الرئيسية.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-T05

حدّد صحيحًا أو خطأ:

1. المتجر المذكور في النص متجر خيالي يعلن عن قارورة.
2. يتضمن الإعلان تخفيضًا بنسبة 20 بالمئة.
3. تذكر مواصفات المنتج سعته ومادته ووزنه.
4. تشتري سلمى ثلاث قوارير في النهاية.
5. عبارة «أفضل قارورة» وصف تسويقي وليست خاصية قابلة للقياس بذاتها.

**نتيجة المراجعة:** خمسة أحكام صحيح/خطأ تحفظ الوعد والمقارنة والتأجيل.

- T05.1: المتجر المذكور في النص متجر خيالي يعلن عن قارورة.
  - الجواب: صحيح.؛ المتجر خيالي ويعلن عن قارورة صراحة.
- T05.2: يتضمن الإعلان تخفيضًا بنسبة 20 بالمئة.
  - الجواب: صحيح.؛ ينقل النص وعد 20% دون مبلغ أساس أو إثبات عرض حقيقي.
- T05.3: تذكر مواصفات المنتج سعته ومادته ووزنه.
  - الجواب: صحيح.؛ السعة والمادة والوزن مذكورة بأنواعها ووحداتها.
- T05.4: تشتري سلمى ثلاث قوارير في النهاية.
  - الجواب: خطأ: تؤجل الشراء.؛ مقارنة ثلاثة نماذج لا تعني شراء ثلاث قوارير، والختام يؤجل الشراء.
- T05.5: عبارة «أفضل قارورة» وصف تسويقي وليست خاصية قابلة للقياس بذاتها.
  - الجواب: صحيح.؛ الأفضل هنا شعار عام بلا قياس؛ لا تساوي قابلية التحقق الثبوت.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-T06

أكمل من نص الاستماع بالألمانية. بنك الكلمات: **Rucksack — drei — Endpreis — Kundenbewertungen — Ordnung**. ضمير sie و Ihr يعودان إلى die Person نحويًا، ولا يحددان جنس الراوي.

1. Die Person wollte einen neuen ______ kaufen.
2. Sie verglich ______ Modelle.
3. Sie verglich Größe, Material, Gewicht und ______.
4. Sie las zwei ______.
5. Ihr alter Rucksack ist noch in ______.

**نتيجة المراجعة:** خمسة فراغات وبنك ألماني؛ ضمائر Person لا تعين جنس الراوي.

- T06.1: Die Person wollte einen neuen ______ kaufen.
  - الجواب: Rucksack؛ حقيبة مع einen neuen، لا نقل منتج القراءة إلى الاستماع.
- T06.2: Sie verglich ______ Modelle.
  - الجواب: drei؛ drei نماذج؛ zwei عدد التقييمات لا النماذج.
- T06.3: Sie verglich Größe, Material, Gewicht und ______.
  - الجواب: Endpreis؛ Endpreis المعيار الرابع، لا Rabatt.
- T06.4: Sie las zwei ______.
  - الجواب: Kundenbewertungen؛ Kundenbewertungen تقييمان؛ لم يصرح النص بأصالتهما أو تزييفهما.
- T06.5: Ihr alter Rucksack ist noch in ______.
  - الجواب: Ordnung؛ in Ordnung تصف حالة الحقيبة القديمة؛ Ihr يعود إلى Person المؤنث النحوي.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-T07

اكتب **معلومة محددة قابلة للتحقق** أو **عبارة إعلانية عامة**. التصنيف يصف نوع القول، وليس إثباتًا أنه صحيح في الواقع:

1. **Fassungsvermögen: 600 Milliliter.**
2. **Die beste Flasche für alle Menschen.**
3. **Die Flasche besteht aus Edelstahl.**
4. **Dieses Produkt macht jeden Tag perfekt.**

**نتيجة المراجعة:** أربعة تصنيفات لنوع القول؛ القابل للتحقق ليس بالضرورة مثبتًا.

- T07.1: **Fassungsvermögen: 600 Milliliter.**
  - الجواب: معلومة محددة قابلة للتحقق.؛ 600 ملليلتر سعة يمكن التحقق منها؛ لا تعني إجراء فحص.
- T07.2: **Die beste Flasche für alle Menschen.**
  - الجواب: عبارة إعلانية عامة.؛ الأفضل لكل البشر تعميم ترويجي دون معيار معين.
- T07.3: **Die Flasche besteht aus Edelstahl.**
  - الجواب: معلومة محددة قابلة للتحقق.؛ Edelstahl مادة قابلة للتحقق؛ التصنيف لا يثبت صدق إعلان حقيقي.
- T07.4: **Dieses Produkt macht jeden Tag perfekt.**
  - الجواب: عبارة إعلانية عامة.؛ جعل كل يوم مثاليًا وعد عام لا خاصية محددة قابلة للقياس.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-T08

دليل التطبيق: P01 كتابة فقط بحد 150 حرفًا، و P02 كتابة ثم جهر بحد 130 حرفًا؛ لكل منهما الإقرارات الثلاثة. لا يعد التطبيق الجمل أو الروابط آليًا.

**أ — P01: خمس جمل كتابة فقط**

اكتب خمس جمل تقارن بين منتجين خياليين، قارورتين A و B: بيانات التدريب لـ A هي 20 يورو و 300 غرام و 600 ملليلتر، ولـ B هي 24 يورو و 400 غرام و 800 ملليلتر. قارن السعر النهائي ثم الوزن ثم السعة في ثلاث جمل؛ في الرابعة انسب عبارة «die beste Flasche für alle» إلى إعلان A ولا تجعلها حقيقة مثبتة؛ في الخامسة استخدم je … desto/umso … واذكر فحصًا محددًا قبل الشراء، مثل التحقق من الوزن المعلن. البيانات خيالية مستقلة عن نص القراءة؛ هذه كتابة فقط دون جهر أو علامة حقيقية أو شراء أو تسجيل.

**ب — P02: أربع جمل مع الجهر**

اكتب توصية خيالية من أربع جمل عن القارورتين A و B بالبيانات نفسها: Nora تبحث عن قارورة قليلة التكلفة وخفيفة. في الأولى أوصِ بـ A بحسب بيانات التدريب ووضح حاجتها؛ في الثانية اربط انخفاض السعر بانخفاض المبلغ المدفوع باستخدام je … desto …؛ في الثالثة اربط خفة القارورة بسهولة حملها باستخدام je … umso …؛ في الرابعة ميّز وزن A المعلن 300 غرام القابل للتحقق عن عبارة «die beste Flasche für alle» التي لا تثبت جودة أفضل. اكتبها ثم اقرأها بصوت واضح بنفسك دون شريك؛ لا يلزم تسجيل الصوت أو شراء حقيقي.

**نتيجة المراجعة:** تسعة مطالب محتوى:خمس جمل كتابة وأربع توصية مع الجهر؛ المعايير والبيانات والدليل متطابقة.

- T08.1: P01: قارن السعر النهائي
  - الجواب: Flasche A kostet zwanzig Euro und ist günstiger als Flasche B für vierundzwanzig Euro.؛ A أرخص من B بحسب 20 و 24 يورو فقط؛ لا توصية عامة بأن الأرخص أفضل.
- T08.2: P01: قارن الوزن
  - الجواب: Mit dreihundert Gramm ist A leichter als B mit vierhundert Gramm.؛ A أخف:300 مقابل 400 غرام. Mit مع Dativ والمصرف ist بعد العبارة المتقدمة.
- T08.3: P01: قارن السعة
  - الجواب: A fasst sechshundert Milliliter, B dagegen achthundert Milliliter.؛ 600 مقابل 800 ملليلتر؛ B أكبر سعة. الحذف في الجزء الثاني مفهوم من fasst ولا يقلب المقارنة.
- T08.4: P01: انسب العبارة للإعلان
  - الجواب: Die Werbung nennt A die beste Flasche für alle, aber das ist eine allgemeine Werbeaussage.؛ عبارة الأفضل منسوبة إلى الإعلان ثم توصيفها بالترويج العام؛ لا دليل تفوق مثبت.
- T08.5: P01: علاقة متدرجة وفحص قبل الشراء
  - الجواب: Je genauer ich vor dem Kauf das angegebene Gewicht prüfe, desto besser kann ich diese Angabe beurteilen.؛ je genauer مع prüfe في النهاية، ثم desto besser و kann والمصدر beurteilen. يحدد التحقق من الوزن قبل الشراء.
- T08.6: P02: توصية بحسب حاجتي Nora
  - الجواب: Nach den fiktiven Angaben empfehle ich Nora Flasche A, weil sie eine günstige und leichte Flasche sucht.؛ التوصية لـ Nora مشروطة ببيانات خيالية وحاجة السعر والخفة؛weil تنتهي sucht ولا شهادة جودة.
- T08.7: P02: علاقة السعر والمبلغ
  - الجواب: Je niedriger der Endpreis ist, desto weniger Geld muss Nora ausgeben.؛ انخفاض السعر وانخفاض المبلغ مع niedriger/weniger؛desto weniger Geld وحدة أولى ثم muss ثم Nora و ausgeben.
- T08.8: P02: علاقة الوزن والحمل
  - الجواب: Je leichter die Flasche ist, umso einfacher kann sie sie tragen.؛ خفة القارورة تسهل الحمل في السيناريو؛umso einfacher ثم kann. sie الأولى Nora والثانية القارورة، لا تكرار خطأ.
- T08.9: P02: بيان قابل للتحقق مقابل الإعلان
  - الجواب: Die Angabe von dreihundert Gramm ist überprüfbar, aber die Werbung mit der besten Flasche für alle beweist keine bessere Qualität.؛ 300 غرام معلومة قابلة للتحقق، بينما عبارة الأفضل لا تثبت جودة أكبر؛ لا ادعاء إجراء اختبار حقيقي.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-Q01

ما المقصود بـ**die Zielgruppe**؟

**نتيجة المراجعة:** die Zielgruppe هي الفئة المستهدفة التي يحاول الإعلان الوصول إليها.

**الجواب:** الفئة التي يوجّه الإعلان رسالته إليها.

**التتبع:** DL-B1-08-T01

- الخيار 1 (المفتاح): الفئة التي يوجّه الإعلان رسالته إليها. — الجمهور المقصود يوافق Zielgruppe.
- الخيار 2 (مشتت): السعر النهائي بعد إضافة التكاليف. — السعر النهائي هو Endpreis، لا جمهور الإعلان.
- الخيار 3 (مشتت): المعلومات التي يكتبها عميل عن منتج. — تقييم عميل، لا الفئة المستهدفة.

**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-Q02

أي كلمة تعني «السعر النهائي»؟

**نتيجة المراجعة:** der Endpreis السعر النهائي بما فيه الإضافات والتكاليف، لا مبلغ التخفيض. النص لا يعطينا رقمًا لذلك السعر لنحسبه.

**الجواب:** der Endpreis

**التتبع:** DL-B1-08-T01

- الخيار 1 (مشتت): die Verpackung — Verpackung العبوة أو التغليف.
- الخيار 2 (المفتاح): der Endpreis — Endpreis النهائي مع الإضافات والتكاليف.
- الخيار 3 (مشتت): die Haltbarkeit — Haltbarkeit مدة البقاء صالحًا أو المتانة، لا السعر.

**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-Q03

أكمل العلاقة المنطقية: **Je länger ein Gerät hält, desto ___ muss man es ersetzen.**

**نتيجة المراجعة:** كلما طال عمر الجهاز، قلّ تكرار استبداله؛ لذلك نستخدم صيغة المقارنة seltener.

**الجواب:** seltener

**التتبع:** DL-B1-08-T02

- الخيار 1 (المفتاح): seltener — seltener صيغة المقارنة مع desto وتقليل التكرار.
- الخيار 2 (مشتت): selten — selten الصيغة الأساسية، لا المقارنة المطلوبة.
- الخيار 3 (مشتت): am seltensten — am seltensten تفضيل أعلى، لا المقارنة هنا.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-08-Q04

أي عبارة صحيحة عن **desto** و**umso** في هذا التركيب؟

**نتيجة المراجعة:** يمكن استعمال desto و umso بالمعنى نفسه في هذا النمط؛ عبارة الرابط والمقارنة معًا في الموقع الأول من الجزء الرئيسي، ثم المصرف ثم الفاعل، لا الكلمة الثانية بعد الرابط وحده.

**الجواب:** لهما المعنى نفسه في هذا النمط.

**التتبع:** DL-B1-08-T02

- الخيار 1 (مشتت): لا يمكن أن يأتيا في الجزء الثاني من الجملة. — ينفي موضعهما في الجزء الثاني خلاف أمثلة الدرس.
- الخيار 2 (المفتاح): لهما المعنى نفسه في هذا النمط. — المعنى نفسه في النمط المقارن المستهدف، لا حصر جميع الاستعمالات.
- الخيار 3 (مشتت): يجب أن يسبقهما الفعل المصرف في نهاية الجملة. — لا يسبق المصرف وحدة الرابط والمقارنة هنا ولا يؤخر إلى نهاية الرئيسية.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-08-Q05

أكمل بالفعل المصرف الصحيح في الحاضر **Präsens**: **Je genauer die Anzeige die Eigenschaften ___, desto leichter können Kundinnen vergleichen.**

**نتيجة المراجعة:** die Anzeige مفرد و Präsens مطلوب، لذا beschreibt في نهاية جزء je. beschrieb ماضٍ صحيح صرفيًا لكنه ليس الزمن المطلوب، و beschreiben لا يوافق هذا الفاعل في الحاضر.

**الجواب:** beschreibt

**التتبع:** DL-B1-08-T03

- الخيار 1 (مشتت): beschreiben — beschreiben لا يوافق Anzeige المفردة في Präsens.
- الخيار 2 (المفتاح): beschreibt — beschreibt حاضر غائب مفرد، والمصرف في نهاية جزء je.
- الخيار 3 (مشتت): beschrieb — beschrieb ماضٍ صحيح صرفيًا لكنه ليس الحاضر المطلوب؛ لا يوصف بأنه غير ألماني.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-08-Q06

اختر دمجًا سليمًا: **Der Preis ist niedrig. Das Angebot wirkt attraktiv.**

**نتيجة المراجعة:** تأتي صيغة المقارنة بعد je وينتهي الجزء الأول بالفعل ist؛ ثم يأتي الطرف الثاني بـ desto وصيغة المقارنة مع ترتيب الجملة الرئيسية.

**الجواب:** Je niedriger der Preis ist, desto attraktiver wirkt das Angebot.

**التتبع:** DL-B1-08-T04

- الخيار 1 (المفتاح): Je niedriger der Preis ist, desto attraktiver wirkt das Angebot. — المقارنتان صحيحتان؛ ist آخر التابعة ثم desto attraktiver مع wirkt فالفاعل.
- الخيار 2 (مشتت): Je niedriger ist der Preis, desto das Angebot attraktiv wirkt. — ist متقدم في جزء je، و desto منفصل عن المقارنة مع ترتيب رئيسية غير سليم.
- الخيار 3 (مشتت): Je niedrig der Preis ist, desto attraktiver das Angebot wirkt. — niedrig ليست مقارنة، والمصرف wirkt متأخر بدل موضعه في الرئيسية.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze)

### DL-B1-08-Q07

أي معلومتين يذكرهما نص القراءة عن القارورة؟

**نتيجة المراجعة:** يذكر النص أن القارورة من الفولاذ المقاوم للصدأ وتتسع لـ 600 ملليلتر، ويذكر وزنها أيضًا وهو 320 غرامًا.

**الجواب:** الفولاذ المقاوم للصدأ والسعة 600 ملليلتر.

**التتبع:** DL-B1-08-T05

- الخيار 1 (المفتاح): الفولاذ المقاوم للصدأ والسعة 600 ملليلتر. — Edelstahl مادة و 600 ملليلتر سعة. صُحح السؤال من مادتين إلى معلومتين.
- الخيار 2 (مشتت): الزجاج والوزن 600 غرام. — الزجاج غير مذكور و 600 سعة بالملليلتر، لا وزن بالغرام.
- الخيار 3 (مشتت): البلاستيك والسعة 320 ملليلتر. — البلاستيك غير مذكور و 320 وزن بالغرام، لا سعة.

**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-Q08

لماذا لا تُعد عبارة **„die beste Flasche für jeden Tag“** خاصية قابلة للقياس؟

**نتيجة المراجعة:** يوضح النص أن وصف «الأفضل» صياغة إعلانية عامة، على خلاف السعة والمادة والوزن التي يمكن التحقق منها.

**الجواب:** لأنها صياغة ترويجية عامة وليست قياسًا محددًا.

**التتبع:** DL-B1-08-T05, DL-B1-08-T07

- الخيار 1 (المفتاح): لأنها صياغة ترويجية عامة وليست قياسًا محددًا. — صياغة عامة بلا معيار قياس؛ ليست خاصية ثبتت باختبار.
- الخيار 2 (مشتت): لأنها تذكر وزن القارورة بدقة. — الأفضل لا تذكر الوزن 320 غرامًا، ولو ورد الوزن في موضع آخر.
- الخيار 3 (مشتت): لأنها تحدد سعر المنتج النهائي. — الأفضل لا تحدد السعر النهائي أو رقمه.

**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-Q09

اقرأ نص الاستماع: كم نموذجًا من حقائب الظهر قارن الشخص؟

**نتيجة المراجعة:** ورد von drei Modellen مع مقارنة الحجم والمادة والوزن والسعر النهائي؛ النموذج الثالث ليس تقييمًا ثالثًا، فقد قرأ الشخص تقييمين. جنس الراوي غير مذكور، ولا يلزم MP3 للإجابة.

**الجواب:** ثلاثة نماذج.

**التتبع:** DL-B1-08-T06

- الخيار 1 (مشتت): نموذجين. — نموذجان لا يوافقان drei؛ لا نخلط العدد بتقييمين.
- الخيار 2 (المفتاح): ثلاثة نماذج. — ثلاثة نماذج مذكورة صراحة.
- الخيار 3 (مشتت): خمسة نماذج. — خمسة غير مذكورة؛ لا نجمع عدد النماذج والتقييمات.

**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-Q10

أي عبارة تقدم معلومة محددة يمكن التحقق منها؟

**نتيجة المراجعة:** يمكن التحقق من مادة القارورة؛ أما جعل كل يوم مثاليًا أو وصف المنتج بأنه الأفضل فعبارتان ترويجيتان عامتان.

**الجواب:** Die Flasche besteht aus Edelstahl.

**التتبع:** DL-B1-08-T07

- الخيار 1 (مشتت): Dieses Produkt macht jeden Tag perfekt. — كل يوم مثالي شعار عام، لا معلومة محددة.
- الخيار 2 (مشتت): Die beste Flasche für alle Menschen. — الأفضل لجميع الناس تعميم بلا معيار.
- الخيار 3 (المفتاح): Die Flasche besteht aus Edelstahl. — Edelstahl مادة يمكن فحصها، دون ادعاء اختبار حقيقي أو صدق بيان واقعي.

**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis), [AD](https://www.duden.de/rechtschreibung/Werbung)

### DL-B1-08-P01

اكتب خمس جمل تقارن بين منتجين خياليين، قارورتين A و B: بيانات التدريب لـ A هي 20 يورو و 300 غرام و 600 ملليلتر، ولـ B هي 24 يورو و 400 غرام و 800 ملليلتر. قارن السعر النهائي ثم الوزن ثم السعة في ثلاث جمل؛ في الرابعة انسب عبارة «die beste Flasche für alle» إلى إعلان A ولا تجعلها حقيقة مثبتة؛ في الخامسة استخدم je … desto/umso … واذكر فحصًا محددًا قبل الشراء، مثل التحقق من الوزن المعلن. البيانات خيالية مستقلة عن نص القراءة؛ هذه كتابة فقط دون جهر أو علامة حقيقية أو شراء أو تسجيل.

**نتيجة المراجعة:** مطابقة T08 أ: كتابة فقط، حد 150، نموذج 415 حرفًا. الإقرارات ليست تصحيحًا آليًا للجمل أو اللغة أو النطق.

**التتبع:** DL-B1-08-T08

- معيار `taskCompletion`: خمس جمل: مقارنة السعر والوزن والسعة للقارورتين، ونسبة عبارة الإعلان إلى مصدرها، وعلاقة متدرجة مع فحص محدد قبل الشراء؛ كتابة فقط. — خمس جمل كتابة فقط: المعايير الثلاثة ثم الإعلان ثم فحص محدد. الجهر غير مطلوب.
- معيار `meaningClarity`: بيانات A و B من التدريب الخيالي؛ الأرخص والأخف A والأكبر سعة B. الترويج منسوب للإعلان لا حقيقة مثبتة، وقابلية التحقق ليست فحصًا منجزًا. — A أرخص وأخف، و B أكبر سعة. بيانات التدريب مستقلة عن القارورة 320 غرامًا في القراءة.
- معيار `targetSkill`: je مع desto أو umso مرة على الأقل؛ المقارنة والفاصلة والمصرف آخر جزء je، وعبارة desto/umso مع المقارنة تتقدم المصرف في الرئيسية. — علاقة واحدة على الأقل مع المقارنة والفاصلة؛ المصرف آخر je وبعد وحدة المقارنة في الرئيسية.

**دليل التطبيق:** حد150 حرفًا وثلاثة إقرارات؛ دون تأكيد جهر. لا تسجيل مطلوب.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### DL-B1-08-P02

اكتب توصية خيالية من أربع جمل عن القارورتين A و B بالبيانات نفسها: Nora تبحث عن قارورة قليلة التكلفة وخفيفة. في الأولى أوصِ بـ A بحسب بيانات التدريب ووضح حاجتها؛ في الثانية اربط انخفاض السعر بانخفاض المبلغ المدفوع باستخدام je … desto …؛ في الثالثة اربط خفة القارورة بسهولة حملها باستخدام je … umso …؛ في الرابعة ميّز وزن A المعلن 300 غرام القابل للتحقق عن عبارة «die beste Flasche für alle» التي لا تثبت جودة أفضل. اكتبها ثم اقرأها بصوت واضح بنفسك دون شريك؛ لا يلزم تسجيل الصوت أو شراء حقيقي.

**نتيجة المراجعة:** مطابقة T08 ب: كتابة وجهر، حد 130، نموذج 370 حرفًا. الإقرارات ليست تصحيحًا آليًا للجمل أو اللغة أو النطق.

**التتبع:** DL-B1-08-T08

- معيار `taskCompletion`: أربع جمل تقدم توصية لـ Nora بحسب البيانات وتوضح أثر السعر على المبلغ وأثر الوزن على الحمل، ثم تفصل وزنًا معلنًا عن ترويج؛ كتابة ثم جهر. — أربع جمل توصية ثم جهر؛ سبب مرتبط بالسعر وآخر بالحمل، دون شريك أو تسجيل.
- معيار `meaningClarity`: التوصية بـ A مرتبطة بحاجتي السعر والوزن، لا ادعاء أن A أفضل للجميع؛300 غرام بيان قابل للفحص لا شهادة جودة. — A تناسب حاجة Nora وفق البيانات، لا الجميع ولا إثبات جودة أكبر.
- معيار `targetSkill`: علاقتان متدرجتان، واحدة je … desto وأخرى je … umso، مع صيغ المقارنة والفاصلة والمصرف في نهاية التابعة وبعد عبارة المقارنة في الرئيسية. — علاقة السعر بالمبلغ، والوزن بالحمل، مع الرابطين وترتيب المصرف.

**دليل التطبيق:** حد130 حرفًا وثلاثة إقرارات؛ مع تأكيد الجهر. لا تسجيل مطلوب.

**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive), [V2](https://deutsch.lingolia.com/de/grammatik/satzbau/hauptsaetze), [AD](https://www.duden.de/rechtschreibung/Werbung), [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### card-01

**Je länger ein Gerät hält, desto seltener muss man es ersetzen.** → كلما طال عمر الجهاز، قلّت الحاجة إلى استبداله.

**نتيجة المراجعة:** طول العمر وقلة تكرار الاستبدال؛ لا ضمان عن منتج حقيقي.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive)

### card-02

**die Zielgruppe** → الفئة المستهدفة.

**نتيجة المراجعة:** الفئة المستهدفة لا السعر أو تقييم العميل.


**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### card-03

**der Endpreis** → السعر النهائي.

**نتيجة المراجعة:** السعر النهائي لا التخفيض وحده.


**مصادر القاعدة/المنهج:** [PRICE](https://www.duden.de/rechtschreibung/Endpreis)

### card-04

**die Kundenbewertung** → تقييم العملاء.

**نتيجة المراجعة:** تقييم عميل لا شهادة جودة أو أصالة.


**مصادر القاعدة/المنهج:** [1](https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/kundenrechte/kann-man-onlinebewertungen-trauen-so-erkennen-sie-fakereviews-124728)

### card-05

**Je genauer man vergleicht, desto leichter fällt die Entscheidung.** → كلما دقّق المرء في المقارنة، سهل اتخاذ القرار.

**نتيجة المراجعة:** genauer مع vergleicht، و leichter مع fällt لأن القرار مفرد.


**مصادر القاعدة/المنهج:** [COMP](https://deutsch.lingolia.com/de/grammatik/adjektive)

### DL-B1-08-AUD-PHR-01

Das Produkt, die Produkte. Die Werbung. Die Anzeige, die Anzeigen. Die Zielgruppe, die Zielgruppen. Die Marke, die Marken. Der Rabatt, die Rabatte. Der Preis, die Preise. Die Qualität. Die Verpackung, die Verpackungen. Die Haltbarkeit. Die Kundenbewertung, die Kundenbewertungen. Die Eigenschaft, die Eigenschaften. Der Endpreis, die Endpreise. Langlebig. Nachhaltig. Vergleichen, vergleicht. Versprechen, verspricht. Werben für, wirbt für.

**نتيجة المراجعة:** 18 وحدة منطوقة تقابل 17 صفًا بسبب فصل langlebig و nachhaltig. توضيحات الجمع الجديدة غير مسجلة. حالة ready محفوظة باعتماد سابق؛ لا استماع أو اعتماد جديد.

- وحدة نصية: Das Produkt, die Produkte.
  - das Produkt وجمع Produkte: المنتج. الضبط والمعنى راجعا لغويًا؛ لا ربط بمنتج حقيقي.
- وحدة نصية: Die Werbung.
  - die Werbung: النشاط الإعلاني العام هنا دون جمع؛ المدخل يذكر Werbungen لمعانٍ أخرى، فلا نعد الشرطة حكمًا مطلقًا.
- وحدة نصية: Die Anzeige, die Anzeigen.
  - die Anzeige وجمع Anzeigen: إعلان منشور في السياق. لا نعني كل معاني Anzeige مثل البلاغ الرسمي.
- وحدة نصية: Die Zielgruppe, die Zielgruppen.
  - die Zielgruppe وجمع Zielgruppen: من يوجه إليهم الإعلان. ليست السعر أو مراجعات العملاء.
- وحدة نصية: Die Marke, die Marken.
  - die Marke وجمع Marken: العلامة التجارية في هذا السياق، لا ملكية حقيقة أو وعد جودة.
- وحدة نصية: Der Rabatt, die Rabatte.
  - der Rabatt وجمع Rabatte: تخفيض على سعر، لا السعر النهائي نفسه ولا ضمان أن الصفقة مناسبة.
- وحدة نصية: Der Preis, die Preise.
  - der Preis وجمع Preise: السعر هنا، لا الجائزة وهي معنى آخر. لا أرقام أصلية لسعر القارورة في القراءة.
- وحدة نصية: Die Qualität.
  - die Qualität: الجودة؛ الجمع Qualitäten موجود لخصائص أو أنواع بحسب السياق، وقد قُيدت الشرطة كتابة.
- وحدة نصية: Die Verpackung, die Verpackungen.
  - die Verpackung وجمع Verpackungen: العبوة أو التغليف. الفرق بين الشيء المعدود وعملية التغليف تحدده الجملة.
- وحدة نصية: Die Haltbarkeit.
  - die Haltbarkeit: مدة البقاء صالحًا أو المتانة بحسب السياق، لا رقم مدة محدد أو دليل شهادة.
- وحدة نصية: Die Kundenbewertung, die Kundenbewertungen.
  - die Kundenbewertung وجمع Kundenbewertungen: تقييم عميل. ليس وجود التقييم برهان أصالة أو خبرة فنية.
- وحدة نصية: Die Eigenschaft, die Eigenschaften.
  - die Eigenschaft وجمع Eigenschaften: خاصية. ليست كل خاصية مقياسًا عدديًا ولا كل وصف خاصية مثبتة.
- وحدة نصية: Der Endpreis, die Endpreise.
  - der Endpreis وجمع Endpreise: النهائي مع الإضافات والتكاليف؛ Q02 و T01 يدعمان هذا التمييز.
- وحدة نصية: Langlebig.
  - Langlebig طويل العمر؛ صفة منفصلة في النطق.
- وحدة نصية: Nachhaltig.
  - Nachhaltig في السياق مستدام؛ لا مرادف مطلقًا لطول العمر.
- وحدة نصية: Vergleichen, vergleicht.
  - vergleichen وتصريف vergleicht للغائب المفرد؛ في الاستماع verglichen مع haben. المقارنة لا تستلزم شراء.
- وحدة نصية: Versprechen, verspricht.
  - versprechen وتصريف verspricht: يَعِد في الإعلان، لا أنه وفّى الوعد؛ لا نخلطه مع معنى الخطأ في الكلام للانعكاسي.
- وحدة نصية: Werben für, wirbt für.
  - werben für وتصريف wirbt مع für؛ الترويج لشيء، لا شراء الشيء أو إثبات صفاته.

**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### DL-B1-08-AUD-MODEL-01

Je länger ein Gerät hält, desto seltener muss man es ersetzen. Je genauer man die Angaben prüft, desto leichter kann man Produkte vergleichen. Je klarer die Beschreibung ist, umso besser können Kundinnen das Produkt beurteilen. Je niedriger der Preis ist, desto attraktiver wirkt das Angebot. Je genauer wir vergleichen, desto leichter fällt die Entscheidung.

**نتيجة المراجعة:** خمسة أمثلة؛ جملة السعر في مفتاح T04، وقد أضيف مرجعها المكتوب إلى السجل. حالة ready محفوظة باعتماد سابق؛ لا استماع أو اعتماد جديد.

- وحدة نصية: Je länger ein Gerät hält, desto seltener muss man es ersetzen.
  - länger مع hält في نهاية je؛ desto seltener وحدة ثم muss و man، و ersetzen مصدر. زيادة العمر يقابلها قلة التكرار لا زيادته؛ ليست ضمانًا لجهاز محدد.
- وحدة نصية: Je genauer man die Angaben prüft, desto leichter kann man Produkte vergleichen.
  - genauer مع prüft للمفرد man؛ desto leichter ثم kann ثم man والمصدر vergleichen. فحص المعلومات ليس مجرد زيادة عدد المراجعات.
- وحدة نصية: Je klarer die Beschreibung ist, umso besser können Kundinnen das Produkt beurteilen.
  - klarer مع ist؛ umso besser ثم können للجمع Kundinnen، وهي عميلات بصيغة المؤنث الجمع، لا جنس كل المستهلكين.
- وحدة نصية: Je niedriger der Preis ist, desto attraktiver wirkt das Angebot.
  - niedriger مع ist؛ desto attraktiver ثم wirkt و das Angebot. الجاذبية انطباع وليست جودة مؤكدة. هذا المثال مسجل وموجود في مفتاح T04 لا ضمن القائمة الأولى وحدها.
- وحدة نصية: Je genauer wir vergleichen, desto leichter fällt die Entscheidung.
  - genauer مع vergleichen للفاعل wir؛ في الرئيسية fällt مفرد لأن الفاعل Entscheidung مفرد. لا يتبع فاعل التابعة تلقائيًا.

**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### DL-B1-08-AUD-DLG-01

Diese Kopfhörer sind heute im Angebot. Je niedriger der Preis klingt, desto genauer sollte man die Bedingungen lesen. Die Werbung verspricht eine besonders lange Akkulaufzeit. Dann prüfen wir, ob die Anzeige konkrete Angaben enthält. Je genauer ein Anbieter die Eigenschaften erklärt, desto leichter können wir vergleichen. Ich vergleiche auch den Endpreis und die Rückgabebedingungen. Gute Idee. Wir kaufen nur, wenn das Produkt wirklich zu unserem Bedarf passt.

**نتيجة المراجعة:** ستة أدوار بأصوات Mira02/Bilal05، لا تغيير صوت Bilal إلى 03. حالة ready محفوظة باعتماد سابق؛ لا استماع أو اعتماد جديد.

- وحدة نصية: Diese Kopfhörer sind heute im Angebot.
  - سماعات معروضة اليوم في سياق خيالي؛ Kopfhörer جمع مع sind، ولا سعر محدد.
- وحدة نصية: Je niedriger der Preis klingt, desto genauer sollte man die Bedingungen lesen.
  - klingt يعبر عن الانطباع كما يبدو السعر، و sollte توصية لفحص الشروط. لا يثبت أن السعر الفعلي أقل أو أن كل إعلان احتيال.
- وحدة نصية: Die Werbung verspricht eine besonders lange Akkulaufzeit.
  - وعد بإطالة البطارية، لا تقرير اختبار أو مدة رقمية. verspricht غائب مفرد يتبع Werbung.
- وحدة نصية: Dann prüfen wir, ob die Anzeige konkrete Angaben enthält. Je genauer ein Anbieter die Eigenschaften erklärt, desto leichter können wir vergleichen.
  - فحص ما إذا كان الإعلان يحتوي تفاصيل؛ enthält ينهي ob. Anbieter مفرد مع erklärt، و wir جمع مع können ثم vergleichen.
- وحدة نصية: Ich vergleiche auch den Endpreis und die Rückgabebedingungen.
  - Mira تقارن السعر النهائي وشروط الإرجاع؛ لم تذكر مهلة أو ضمانًا أو تنفيذ شراء.
- وحدة نصية: Gute Idee. Wir kaufen nur, wenn das Produkt wirklich zu unserem Bedarf passt.
  - nur, wenn قيد لازم للشراء، وليس إعلان وقوعه. zu unserem Bedarf دلالة الملاءمة للحاجة لا الجودة العامة.

**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### DL-B1-08-AUD-READ-01

Im fiktiven Onlineshop „AlltagPlus“ wird eine Trinkflasche beworben. Die Anzeige nennt sie „die beste Flasche für jeden Tag“ und verspricht einen Rabatt von 20 Prozent. In der Produktbeschreibung stehen konkrete Angaben: Die Flasche fasst 600 Milliliter, besteht aus Edelstahl und wiegt 320 Gramm. Auch der Endpreis und die Rückgabebedingungen sind angegeben. Salma hat bereits eine Flasche, die sie gern benutzt. Sie vergleicht trotzdem drei Modelle und liest Kundenbewertungen. Die Aussage „die beste Flasche“ ist eine Werbeformulierung, keine messbare Eigenschaft. Je klarer Eigenschaften und Zusatzkosten angegeben sind, desto einfacher kann man Produkte vergleichen. Salma entscheidet sich, vorerst nichts zu kaufen.

**نتيجة المراجعة:** تسع جمل براوية مستقلة Erzählerin B1.8 بصوت 04 لا Mira02. حالة ready محفوظة باعتماد سابق؛ لا استماع أو اعتماد جديد.

- وحدة نصية: Im fiktiven Onlineshop „AlltagPlus“ wird eine Trinkflasche beworben.
  - المتجر خيالي صراحة والمنتج قارورة؛ wird … beworben مبني للمجهول لا إعلان عن متجر واقعي.
- وحدة نصية: Die Anzeige nennt sie „die beste Flasche für jeden Tag“ und verspricht einen Rabatt von 20 Prozent.
  - وصف الأفضل منسوب إلى الإعلان مع وعد 20%؛ لا مبلغ أساس أو شراء أو إثبات أفضلية.
- وحدة نصية: In der Produktbeschreibung stehen konkrete Angaben: Die Flasche fasst 600 Milliliter, besteht aus Edelstahl und wiegt 320 Gramm.
  - 600 ملليلتر سعة، Edelstahl مادة،320 غرامًا وزن. النص ينقل بيانات محددة قابلة للتحقق، لا اختبارًا مخبريًا مستقلًا.
- وحدة نصية: Auch der Endpreis und die Rückgabebedingungen sind angegeben.
  - السعر النهائي وشروط الإرجاع مذكوران لكن محتواهما غير معطى. لا نستنتج رقمًا أو حقًا قانونيًا محددًا.
- وحدة نصية: Salma hat bereits eine Flasche, die sie gern benutzt.
  - Salma تملك قارورة تحب استعمالها؛ لا يذكر النص عمرها أو مواصفاتها أو أنها رخيصة.
- وحدة نصية: Sie vergleicht trotzdem drei Modelle und liest Kundenbewertungen.
  - تقارن رغم ذلك ثلاثة نماذج وتقرأ تقييمات؛ لا تشتري ثلاثة منتجات ولا يحدد هذا الجزء عدد التقييمات.
- وحدة نصية: Die Aussage „die beste Flasche“ ist eine Werbeformulierung, keine messbare Eigenschaft.
  - الأفضل صيغة ترويجية عامة في النص لا خاصية مقيسة بذاتها؛ لا تعميم على كل مقارنة ذات اختبار محدد.
- وحدة نصية: Je klarer Eigenschaften und Zusatzkosten angegeben sind, desto einfacher kann man Produkte vergleichen.
  - خصائص وتكاليف إضافية جمع مع sind؛ في الرئيسية kann يتبع man والمصدر vergleichen. الوضوح ييسر المقارنة دون إثبات صحة كل بيان.
- وحدة نصية: Salma entscheidet sich, vorerst nichts zu kaufen.
  - تقرر عدم الشراء حاليًا؛ vorerst لا تعني قرارًا أبديًا أو شراءً تحقق بعد ذلك.

**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

### DL-B1-08-AUD-LST-01

Ich wollte einen neuen Rucksack kaufen. In einer Anzeige gab es einen Rabatt. Bevor ich mich entschieden habe, habe ich Größe, Material, Gewicht und Endpreis von drei Modellen verglichen. Je mehr Produkte ich verglichen habe, desto leichter konnte ich entscheiden, welches Modell zu meinem Alltag passt. Ich habe auch zwei Kundenbewertungen gelesen und am Ende gewartet. Mein alter Rucksack ist noch in Ordnung, und ein Rabatt allein ist kein Grund zum Kaufen.

**نتيجة المراجعة:** ست جمل بصوت 03 دون استنتاج اسم الراوي أو جنسه. حالة ready محفوظة باعتماد سابق؛ لا استماع أو اعتماد جديد.

- وحدة نصية: Ich wollte einen neuen Rucksack kaufen.
  - رغبة سابقة في حقيبة جديدة، لا شراء منجز؛ جنس الراوي واسمه غير مذكورين.
- وحدة نصية: In einer Anzeige gab es einen Rabatt.
  - تخفيض في إعلان بلا نسبة معطاة؛ لا تنقل 20% من قصة القارورة.
- وحدة نصية: Bevor ich mich entschieden habe, habe ich Größe, Material, Gewicht und Endpreis von drei Modellen verglichen.
  - مقارنة الحجم والمادة والوزن والسعر النهائي لثلاثة نماذج؛ Perfekt في bevor مع habe أخيرًا ثم habe رئيسية ثانية.
- وحدة نصية: Je mehr Produkte ich verglichen habe, desto leichter konnte ich entscheiden, welches Modell zu meinem Alltag passt.
  - خبرة الراوي في سهولة الاختيار؛ mehr Produkte مع verglichen habe، ثم konnte … entscheiden قبل السؤال غير المباشر. ليست قانونًا أن المزيد أفضل دائمًا.
- وحدة نصية: Ich habe auch zwei Kundenbewertungen gelesen und am Ende gewartet.
  - قرأ تقييمين ثم انتظر؛ لا ثلاثة تقييمات ولا شراء محسوم. العدد ليس إثبات أصالة.
- وحدة نصية: Mein alter Rucksack ist noch in Ordnung, und ein Rabatt allein ist kein Grund zum Kaufen.
  - حقيبته القديمة ما زالت بحالة جيدة والتخفيض وحده ليس سبب الشراء في هذا السياق. Mein يعود للراوي دون تحديد جنس.

**مصادر القاعدة/المنهج:** مراجعة لغوية ومقارنة داخلية بالمصدر؛ لا ينسب مصدر خارجي وقائع القصة الخيالية.

## الخطوة التالية

CR39/B1.9: السفر والمواصلات والبيئة؛ اقرأ الهدف النحوي من المصدر وراجع كل بند بالمصادر. احفظ Mina02/Karim03 والرواة02/03؛ اعتماد الصوت النهائي معلق، ولا إعادة توليد. كل تغيير يرفع فور فحصه، ولا مراجع بشري شرطًا للاستمرار.
