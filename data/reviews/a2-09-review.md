# مراجعة CR27 — A2.9: المنتجات والتقنية وتقديم شكوى

## إيصال الرفع والتحقق — CR27، 2026-10-08

- رُفع التنفيذ **`d962694d98cecb1b11bbe376fbafbb55beef93f2`**، ثم سجل المراجعة **`3c1fd5d0b45dec2f3dc4cd86f0ad04526073ef06`** إلى `arena/01a1036f-deutschlern`. تطابق HEAD مع origin بعد كل دفع، وكانت شجرة العمل نظيفة بعد رفع السجل.
- PASS:27 حارس مراجعة، وخمس مجموعات Node، وخمس مجموعات متصفح، والبناء والتحقق والصياغة وdiff؛109 وحدات و36 بندًا، مع30 بديلًا وستة معايير. المقارنة تحفظ52 درسًا آخر و474 ملف MP3. التقرير أدناه يفصل حدود الفحوص؛ لا استماع أو اعتماد صوتي جديد.
- **قيد PHR باقٍ:** `Er und sie könnte.` تعداد ملتبس وليس نموذج جملة بفاعل مركب. أضيفت البدائل المكتوبة الصحيحة والجدول؛ لم يُصلح التسجيل أو التفريغ نفسه. لا إعادة توليد أو تغيير الحالة بلا موافقة، ولا مراجع بشري شرطًا لمواصلة المراجعة النصية.
- PR#1 **OPEN**، وmergedAt=null، ورأسه وقت الفحص `3c1fd5d`. لا دمج ولا إعلان اكتمال المشروع. يُرفع هذا الإيصال فور فحصه بعنوان `Record CR27 delivery and preserved audio caveat`؛ معرفه في git log بعد الدفع. حالة نشر الإيصال نفسه لم تُفحص.
- التنفيذ `d962694` له Vercel **success** وPreview deployment **6943089520** بحالةsuccess: https://deutschlern-n769cs62v-balinader-2671s-projects.vercel.app . هذه بيانات نشر فقط، وليست فحص واجهة بعيدة أو نشر Production.
- سجل المراجعة `3c1fd5d` له Vercel **failure** برسالة `Deployment rate limited — retry in 24 hours.`؛ واستعلام deployments له أعاد قائمة فارغة. لا نجاح نشر مدّعى لهذا السجل، ولا إعادة نشر متكررة أو ترقية مدفوعة؛ رفع GitHub ناجح ومستقل.
- الحملة **26/53 درسًا** والبوابة منفصلة؛ تبقى27. التالي **CR28/A2.10 — الرياضة والصحة والمشاعر وweil**. اقرأ المصدر والتقييم والأصول كاملة، واحفظ أصوات Lina00/Rania02/Omar03 واتساق الدروس السابق. لا تعد A2.9 أو تسجيلاته؛ حدّث ملفّي التسليم وارفع كل مجموعة فور فحصها، مع استمرار جميع القرارات أدناه.

رُوجع **A2.9 — المنتجات والتقنية وتقديم شكوى** في **109 وحدات و36 بندًا أو مطلبًا داخل التمارين**، مع **10 مراجع مقروءة كاملة**. فُصل طلب الزبونة عن عرض الموظف، وأزيل افتراض حالة المكبر الأيسر وحمل Karim للإيصال الآن. أضيف تدريب صريح على ob وصُحح Q10→T07، وقُيد Q09 بنمط السؤال الذي يبدأ بالفعل. **P01/T08أ رسالة كتابة فقط** من تحية وخمس جمل وختام واسم؛ **P02/T08ب أربعة أدوار مع الجهر**، بنموذجين ومعايير متطابقة. الخيارات الثلاثون والمفاتيح وعتبة80% محفوظة. الإصدار `a2-09-v2` والمخزن `v74`. أربعة أصول/10 مقاطع محفوظة دون توليد أو استماع أو اعتماد جديد؛ وُضح تعداد الضمائر الملتبس في PHR كتابة، ولم يُصلح التسجيل نفسه. **الحملة26/53 درسًا والبوابة منفصلة؛ تبقى27، والتالي CR28/A2.10.** هذا سجل مراجعة وفحوص وحدود معلنة، لا شهادة مستوى أو إعلان اكتمال الدمج.

## الملفات والرفع والخطوة التالية

- المصدر والتقييم: `content/A2/lesson-09-products-technology-complaints.md/.assessment.json`؛ الحزمة `data/course.json`؛20 صفًا في `data/production-task-catalog.csv` وأربعة صفوف مرجعية فقط في `data/audio-asset-register.csv`.
- `service-worker.js` واختباراه؛ `tools/test_progression.cjs` و`tools/test_accessibility_audit.cjs`؛ الحارس الجديد `tools/test_a2_09_review.py`.
- السجلان `data/reviews/a2-09-review.json/.md` وفهرس المراجعات وREADME وPROGRESS وخطة التحسين2.33 وتقرير المتصفح وملفا التسليم. لا تعديل playlist أو MP3 أو app.js أو CSS.
- رُفع التنفيذ **`d962694d98cecb1b11bbe376fbafbb55beef93f2`** إلى الفرع الوحيد `arena/01a1036f-deutschlern`، وتطابق HEAD مع origin. مجموعة السجل والفحوص بعنوان `Record CR27 granular A2.9 review and cumulative checks` تُرفع فور فحصها؛ معرفها في git log ثم يوثق إيصالها.
- PR#1 فُحص على رأس التنفيذ: **OPEN** وmergedAt=null. لا تبديل فرع ولا دمج ولا ادعاء أن المشروع اكتمل. حالة Vercel لهذه المجموعة لم تفحص بعد؛ نجاح رفع GitHub مستقل عن النشر، ولا إعادة نشر متكررة أو ترقية مدفوعة بسبب حدود الخدمة.
- في بداية الدور قورنت701 ملفًا بخط الأساس بعدfetch، بصفر اختلاف أو ملفات إضافية، ثم استعيدت metadata بـreset --mixed دون فقد عمل. لا تكرر الاستعادة أو أي تنظيف دون مقارنة جديدة.
- **التالي CR28/A2.10 — الرياضة والصحة والمشاعر وweil:** اقرأ مصدر `lesson-10-sports-health-feelings-weil` وتقييمه وأصوله كاملة، ثم راجع كل نص وتمرين وبديل ومعيار بالمراجع. الأصوات القائمة Lina00/Rania02/Omar03 محفوظة؛ لا حاجة لإعادة تسجيل A2.9.
- القرارات مستمرة: كل تعديل يُرفع فور فحص مجموعته؛ المحتوى والتقييم والتطبيق قبل الصوت؛ لا مراجع بشري شرطًا للمتابعة. لا إخفاء أو إعادة توليد أو تعيين ready/نهائي بلا موافقة؛ حد10 طلبات صوت لكل رد. B1.9/B1.10 معلقان واختيار B1.11 محفوظ. احفظ A2.7 Q08→T05 وفحوص اتساق A2.9 وأصوات الشخصيات وتاريخ B2.6 دون إعادة تسميته B2.7.

## قيد نص التسجيل القائم — ليس إصلاحًا صوتيًا

في `DL-A2-09-AUD-PHR-01.mp3` يقول التفريغ **Er und sie könnte.** هذه صياغة تعداد ملتبسة، وليست نموذجًا صحيحًا لجملة ذات فاعل مركب. أضيفت البدائل المنفصلة **Er könnte. Sie könnte. Es könnte.** إلى الشرح، وأضيف es إلى جدول التصريف، مع تمييز sie للجمع وSie للاحترام مع könnten.

**التسجيل والتفريغ لم يتغيرا، ولم يُجرَ استماع أو اعتماد جديد.** لذلك لا يوصف الأصل بأنه صُحح صوتيًا أو خالٍ من الملاحظات. الملاحظة محفوظة في `audioTextIssues` وhelper-09 ووحدة PHR؛ بقي الأصل ظاهرًا بحالته التاريخية. لا إعادة توليد أو تغيير حالة بلا موافقة، ولا تجعل مراجعًا بشريًا شرطًا لمتابعة بقية المحتوى. وقيد MODEL السابق في A2.8 ما زال موثقًا كذلك.

## الفحوص وحدودها — CR27

- **PASS:** البناء والتحقق؛ الحزمة **1,960,928 بايت** والمخزن **v74**. بقيت53 درسًا، و428 عنوان تمرين، و55 عنوان حوار وفق نمط العداد، و754 مفردة. 530 سؤال درس+10 للبوابة، و109 مهمات أداء، و1080 صف كتالوج. الصوت217 أصلًا/474 مقطعًا؛137ready و80pending. الأعداد ليست شهادة مراجعة لكل محتوى المنهج أو للصوت.
- **PASS:27 حارس مراجعة تراكميًا** تشمل A0.1–5 والبوابة وA1.1–12 وA2.1–9. حارس A2.9 يطابق109 وحدات و36 بندًا، ومفاتيح الأسئلة و30 بديلًا وستة معايير والبصمات والكتالوج. يراجع سجل PHR في25 وحدة داخل الأصل، بما فيها التعداد الملتبس؛ لا يثبت جودته الصوتية.
- **PASS:خمس مجموعات Node:** progression/service_worker/session_persistence/study_time/daily_plan؛ وصياغة app.js وservice-worker.js وكل tools/test_*.cjs، وgit diff --check.
- **PASS:خمس مجموعات متصفح:** browser/accessibility_update/accessibility_audit/forms_keyboard/narrow_layout على **Chromium143.0.7499.0**. ثُبتت حزم package-lock القائمة دون تعديلها، واستُخدم @sparticuz/chromium143.0.4 خارج Git. فشل الإطلاق الأول لنقص libnspr4.so؛ استُخرجت مكتبات al2023 المرفقة ثم نجحت المجموعات الخمس، دون تعديل التطبيق لتجاوز خطأ.
- الاختبار العام عند1440×900 و390×844: تنقل وRTL والتفريغات وتشغيل MP3 بسرعتي1 و0.8 وإيقافه عند التنقل، والعمل دون اتصال ونطاقات البايت. التشغيل الآلي صامت وليس استماعًا، ولا ضمان تخزين كل التسجيلات إلى الأبد.
- تحديث عامل الخدمة من fixture الإصدارv42 إلىv74 دون إعادة تحميل قسرية، مع حفظ الإجابات والتقدم وعزل المخازن وتوضيح فقد صوت غير مخزن بـ503 وإعادة تخزينه عند الاتصال. ليس اختبار كل ترحيل تاريخي منفصلًا.
- **progression:** سجل A2.9 القديمv1 يبقى، لكنه لا يمنح إتقانv2 أو يفتحA2.10؛ ومسودةv1 مرفوضة. تُقبل النسخة الجديدة مع الدرجة والدليل المطلوبين. P01 كتابة فقط دون خانة جهر؛ P02 يتطلب إقرار الجهر. النموذجان258/242 حرفًا يمران بحدي220/180؛ والإجابة القصيرة أو الإقرارات الناقصة لا تمر. هذا ضبط للدليل المحلي لا تصحيح لغة أو نطق.
- **axe-core4.11.0:**121 حالة ممثلة، وصفر مخالفات للقواعد الآلية المختارة؛ مع **81 ظهورًا لفحوص غير حاسمة تشمل185 ظهورًا لعقد**. هذه ليست شهادة WCAG ولا مخالفات مؤكدة؛ لا مراجع بشري شرطًا للاستمرار.
- **النماذج:** PASS من أول تشغيل لاختبار التطبيق بعد إصلاح بيئة المتصفح، عند1440 و390؛ حفظ وإعادة تحميل وتصدير واستيراد ومسودات. لا ادعاء بإصلاح سبب تذبذب filechooser التاريخي.
- **العرض الضيق:**126 حالة؛63 عند320×900 و63 عند568×320، مع جميع الدروس والتفريغات والجداول. viewport ليس تكبير نظام أو جهازًا فعليًا.
- **الحفظ مقابل `368125120421de02fd0a044ac40bcbf81f4cb593`:**52 درسًا آخر و1060 صف كتالوج آخر و115 ملفًا محميًا لم تتغير؛ تشمل المصادر والبوابة وapp.js وCSS وpackage/lock وأداتي build/verify. تغير20 صفًا تخص A2.9 فقط في الكتالوج.
- playlist مطابق بايتًا ببايت؛474 ملف MP3 طابقت بصمات Git السابقة. تغيرت4 صفوف تخص A2.9 في audio-register في source_line/source_heading فقط، وبقيت213 صفًا أخرى. لا تغيير أصوات أو مسارات أو حالات: Narrator02، Kundin03/Mitarbeiter02، Salma02، Karim03. فحوص اتساق A2.9 السابقة محفوظة ولم تُضعف.
- المقارنة تحفظ الخيارات الثلاثين وفهارس المفاتيح العشرة؛ المراجع تسند قواعد ومعاني محددة، ولا تثبت حق ضمان لدولة معينة أو تصنيف CEFR مستقلًا لكل مفردة. لا واجهة بعيدة أو نشر Production اختُبرا.

## منهج العد والمراجعة

109 وحدات تشمل عناصر الدرس والتقييم والأصول؛ البنود36 داخل التمارين ليست36 تمرينًا. في T08 تحية وخمس جمل وختام واسم =8 مكونات، ثم أربعة أدوار =12 مطلبًا. التفريغ ذو25 جزءًا داخل PHR لا يحسب25 ملفًا. لكل خيار ومعيار وبند نتيجة مستقلة أدناه؛ تفاصيل المصدر المحلية تراجع نصيًا، والمراجع الخارجية تستخدم في نطاقها المعلن فقط.

## المراجع التي قُرئت — 2026-10-08

- **KII — [Lingolia — Konjunktiv](https://deutsch.lingolia.com/de/grammatik/verben/konjunktiv)**: Konjunktiv II للطلب المهذب، والتصريف والفرق بين könnte وkonnte؛ hätte من haben. لا تعميم أن كل سؤال غير مباشر يحتاج Konjunktiv. قراءة كاملة؛ الأجزاء [0, 1].
- **MODAL — [Lingolia — Modalverben](https://deutsch.lingolia.com/de/grammatik/verben/modalverben)**: الفعل الناقص المصرف مع مصدر؛ können وصيغ الحاضر والماضي وKonjunktiv II. möchte مع مصدر، لا تصريف من können. قراءة كاملة؛ الأجزاء [0].
- **OB — [Lingolia — Indirekte Fragen](https://deutsch.lingolia.com/de/grammatik/satzbau/nebensaetze/indirekte-fragen)**: ob للسؤال بلا أداة استفهام؛ الفعل المصرف آخر التابعة، والفاصلة وعلامة النهاية بحسب الجملة الرئيسية. قراءة كاملة؛ الأجزاء [0].
- **EXCHANGE — [Duden — umtauschen](https://www.duden.de/rechtschreibung/umtauschen)**: استبدال المشتري أو قبول المتجر للاستبدال؛ tauscht um / hat umgetauscht. لا يثبت تعريف الفعل حقًا قانونيًا أو موافقة المتجر. قراءة كاملة؛ الأجزاء [0].
- **RETURN — [Duden — zurückgeben](https://www.duden.de/rechtschreibung/zurueckgeben)**: إعادة الشيء أو السلعة؛ gibt zurück / hat zurückgegeben. ليست مرادفًا لازمًا للاستبدال ولا إثبات استرداد مال في السيناريو. قراءة كاملة؛ الأجزاء [0].
- **DEFECT — [Duden — defekt](https://www.duden.de/rechtschreibung/defekt)**: schadhaft / nicht in Ordnung؛ قد يتداخل معنى العطل مع الضرر، وليس تشخيصًا فنيًا. قراءة كاملة؛ الأجزاء [0].
- **DAMAGE — [Duden — beschädigen](https://www.duden.de/rechtschreibung/beschaedigen)**: إحداث ضرر/جعل الشيء تالفًا؛ beschädigt. لا اشتراط أن الضرر مرئي، ولا فصل مطلق عن defekt. قراءة كاملة؛ الأجزاء [0].
- **GUARANTEE — [Duden — Garantie](https://www.duden.de/rechtschreibung/Garantie)**: مؤنث وجمع Garantien، ومعنى الوعد/الضمان التجاري. قاموس لا مرجع قانوني لدولة معينة؛ لا مدة أو استبدال أو رد مال مضمون يُستنتج منه. قراءة كاملة؛ الأجزاء [0].
- **TIME — [Lingolia — Temporale Präpositionen](https://deutsch.lingolia.com/de/grammatik/praepositionen/temporal)**: vor لوقت سابق وseit لبداية ممتدة حتى الآن، مع الداتيف في العبارات الاسمية؛ am مع اليوم. لا تواريخ فعلية مستنتجة من Montag أوmorgen. قراءة كاملة؛ الأجزاء [0].
- **INF — [Lingolia — Infinitiv](https://deutsch.lingolia.com/de/grammatik/verben/infinitiv)**: مصدر دون zu مع الفعل الناقص؛ لا نعمم حذف zu على كل مصدر أو كل فعل. قراءة كاملة؛ الأجزاء [0].

## سجل الوحدات الفردية

### scope-01

**النص:**

> # A2.9 — المنتجات والتقنية وتقديم شكوى

**نتيجة المراجعة:** العنوان يطابق المنتجات والشكاوى لا مجالًا تقنيًا متخصصًا أو إرشادًا قانونيًا.

**المراجع ذات الصلة:** KII, MODAL, INF.

### scope-02

**النص:**

> **المدة:** نحو 35–40 دقيقة (تقدير مرن؛ يمكن تقسيم الدرس) · **المهارات:** مفردات، قراءة، كتابة، كلام، قواعد، واستماع اختياري

**نتيجة المراجعة:** أضيفت الكتابة وكلام مستقل، والزمن تقدير قابل للتقسيم والاستماع اختياري، لا ضمان إنجاز خلال مدة ثابتة.

**المراجع ذات الصلة:** KII, MODAL, INF.

### scope-03

**النص:**

> **الهدف:** أستطيع أن أصف مشكلة في جهاز أو منتج، وأطلب المساعدة بأدب.

**نتيجة المراجعة:** الهدف وصف عطل وطلب المساعدة، ويُمارس برسالة وحوار؛ النتيجة لا تعني تنفيذ خدمة خارج التطبيق.

**المراجع ذات الصلة:** KII, MODAL, INF.

### scope-04

**النص:**

> نستعمل هنا **Konjunktiv II** من **können** لصياغة طلب مهذب. **könnte** ليست **konnte**: الأولى صيغة الطلب المدروسة، والثانية ماضي können. اختيار الصيغة يتبع الضمير، ولا يعني الطلب أن الطرف الآخر وافق أو أن الخدمة أُنجزت:

**نتيجة المراجعة:** فرق könnte عن konnte مع الحفاظ على معنى الطلب لا القدرة الماضية؛ المطابقة بحسب الضمير والطلب ليس موافقة.

**المراجع ذات الصلة:** KII, MODAL, INF.

### scope-05

**النص:**

> في سؤال الطلب المباشر المدروس يبدأ السؤال بالفعل الناقص المصرف، ثم الضمير، ويأتي المصدر بلا zu في النهاية: **Könnten Sie das Gerät prüfen?** هذه ليست قاعدة لكل سؤال ألماني؛ مع كلمة استفهام مثل Wann يأتي الفعل بعدها. أما **Ich hätte gern einen Umtausch.** فعبارة رغبة بـhätte من haben، لا تصريف من können.

**نتيجة المراجعة:** حُصرت قاعدة الفعل أولًا في سؤال الطلب المباشر؛ مع Wann تختلف البداية. hätte من haben وليس من können، والمصدر دون zu مع الفعل الناقص هنا.

**المراجع ذات الصلة:** KII, MODAL, INF.

### scope-06

**النص:**

> النموذجان خياليان وغير مسجلين،ولا يستبدلان المقاطع القائمة. الأول رسالة مستقلة لا نسخة من رسالة Salma،والثاني تدريب على الأدوار لا إثبات حق قانوني أو تنفيذ حل. الإقرار والطول ليسا تصحيحًا آليًا للغة أو النطق.

**نتيجة المراجعة:** حدود النموذجين واضحة: صياغات مكتوبة خيالية غير مسجلة، دون استبدال الأصول أو منح تصحيح لغوي آلي.

**المراجع ذات الصلة:** KII, MODAL, INF.

### vocab-01

**النص:**

> | das Gerät | die Geräte | الجهاز |

**نتيجة المراجعة:** das Gerät مفرد محايد، Geräte جمع مع أوملاوت؛ لفظ عام للجهاز لا تشخيص بعينه.

### vocab-02

**النص:**

> | das Smartphone | die Smartphones | الهاتف الذكي |

**نتيجة المراجعة:** Smartphone محايد وجمعه Smartphones؛ الهاتف الذكي لا يلزم أن يكون منتج Salma أو Karim.

### vocab-03

**النص:**

> | der Kopfhörer | die Kopfhörer | سمّاعة الرأس |

**نتيجة المراجعة:** Kopfhörer مذكر وجمعه لا يتغير في الشكل؛ سماعة الرأس لا تعني مكبر الصوت وحده.

### vocab-04

**النص:**

> | der Bildschirm | die Bildschirme | الشاشة |

**نتيجة المراجعة:** Bildschirm مذكر وجمعه Bildschirme؛ الشاشة ليست إيصالًا أو بطارية.

### vocab-05

**النص:**

> | der Akku | die Akkus | البطارية |

**نتيجة المراجعة:** Akku مذكر وجمعه Akkus؛ البطارية غير الشاحن، ولا دليل أنها سبب الشاشة السوداء.

### vocab-06

**النص:**

> | das Ladegerät | die Ladegeräte | الشاحن |

**نتيجة المراجعة:** Ladegerät محايد وجمعه Ladegeräte؛ الشاحن، وهو منتج Karim تحديدًا.

### vocab-07

**النص:**

> | der Lautsprecher | die Lautsprecher | مكبّر الصوت |

**نتيجة المراجعة:** Lautsprecher مذكر وجمعه مطابق في الشكل؛ نميز المكبر الأيمن عن السماعة كلها.

### vocab-08

**النص:**

> | die Garantie | die Garantien | الضمان |

**نتيجة المراجعة:** Garantie مؤنث وجمعها Garantien؛ المعنى القاموسي لا يثبت شروط ضمان قانونية.

**المراجع ذات الصلة:** GUARANTEE.

### vocab-09

**النص:**

> | der Kassenbon | die Kassenbons | إيصال الشراء |

**نتيجة المراجعة:** Kassenbon مذكر وجمعه Kassenbons؛ إيصال شراء، وليس بطاقة صعود أو دليل استخدام.

### vocab-10

**النص:**

> | die Bedienungsanleitung | die Bedienungsanleitungen | دليل الاستخدام |

**نتيجة المراجعة:** Bedienungsanleitung مؤنث وجمعها Bedienungsanleitungen؛ دليل استخدام لا جزء مادي من الجهاز.

### vocab-11

**النص:**

> | defekt / beschädigt | — | معطّل / متضرّر |

**نتيجة المراجعة:** defekt / beschädigt صفات متداخلة المعنى؛ ليستا فصلًا علميًا بين عطل وظيفي وضرر مرئي فقط.

**المراجع ذات الصلة:** DEFECT, DAMAGE.

### vocab-12

**النص:**

> | reparieren | — | يصلح |

**نتيجة المراجعة:** reparieren مصدر بمعنى يصلح؛ لا يعني أن الإصلاح انتهى بمجرد اقتراحه.

### vocab-13

**النص:**

> | umtauschen | — | يستبدل |

**نتيجة المراجعة:** umtauschen مصدر منفصل في الجملة المصرفة؛ معنى الاستبدال لا رد نقود مضمون.

**المراجع ذات الصلة:** EXCHANGE.

### vocab-14

**النص:**

> | zurückgeben | — | يعيد (المنتج) |

**نتيجة المراجعة:** zurückgeben إعادة المنتج؛ لا تساوي استبداله بالضرورة.

**المراجع ذات الصلة:** RETURN.

### vocab-15

**النص:**

> | prüfen | — | يفحص |

**نتيجة المراجعة:** prüfen يفحص؛ يسبق تشخيصًا أو قرارًا محتملًا ولا يساوي إصلاحًا مكتملًا.

### conjugation-01

**النص:**

> | ich | könnte |

**نتيجة المراجعة:** ich يقابله könnte؛ الأوملاوت يميز الصيغة عن الماضي konnte.

**المراجع ذات الصلة:** KII, MODAL.

### conjugation-02

**النص:**

> | du | könntest |

**نتيجة المراجعة:** du يقابله könntest؛ ليس Könnten حين يكون الفاعل du.

**المراجع ذات الصلة:** KII, MODAL.

### conjugation-03

**النص:**

> | er / sie / es | könnte |

**نتيجة المراجعة:** أضيف es إلى بدائل المفرد؛ er أو sie أو es، لا فاعل مركب بصيغة مفرد.

**المراجع ذات الصلة:** KII, MODAL.

### conjugation-04

**النص:**

> | wir | könnten |

**نتيجة المراجعة:** wir يقابله könnten؛ يمكن أن يكون طلبًا باسم مجموعة.

**المراجع ذات الصلة:** KII, MODAL.

### conjugation-05

**النص:**

> | ihr | könntet |

**نتيجة المراجعة:** ihr يقابله könntet؛ مخاطبة مجموعة أصدقاء وليست Sie للاحترام.

**المراجع ذات الصلة:** KII, MODAL.

### conjugation-06

**النص:**

> | Sie / sie | könnten |

**نتيجة المراجعة:** sie للجمع و Sie للاحترام يقابلهما könnten؛ الاحترام ممكن لشخص واحد.

**المراجع ذات الصلة:** KII, MODAL.

### grammar-01

**النص:**

> - **Könnten Sie das Gerät bitte prüfen?** — هل يمكنكم فحص الجهاز من فضلكم؟

**نتيجة المراجعة:** طلب فحص جهاز: Könnten مع Sie ومصدر prüfen بلا zu في النهاية؛ لا يفترض موافقة.

**المراجع ذات الصلة:** KII, MODAL, INF.

### grammar-02

**النص:**

> - **Könnten Sie mir bitte helfen?** — هل يمكنكم مساعدتي من فضلكم؟

**نتيجة المراجعة:** طلب مساعدة مع mir بالداتيف و helfen في النهاية؛ bitte تلطف الطلب.

**المراجع ذات الصلة:** KII, MODAL, INF.

### grammar-03

**النص:**

> - **Ich hätte gern einen Umtausch.** — أودّ استبدال المنتج.

**نتيجة المراجعة:** hätte من haben و einen Umtausch منصوب مذكر؛ رغبة في استبدال وليست فعل استبدال تم.

**المراجع ذات الصلة:** KII, MODAL, INF.

### helper-01

**النص:**

> - **Sie / Ihnen / ihr / mir:** Sie للاحترام، حتى مع شخص واحد؛ يقابله könnten. ihr لمجموعة مخاطبين غير رسمية ويقابله könntet. **bei Ihnen** عندكم، و**Ihr Geschäft** متجركم بصيغة الاحترام. **Könnten Sie mir bitte helfen?** فيها mir بالداتيف مع helfen؛ لا نقول mich helfen.

**نتيجة المراجعة:** يمنع خلط Sie باحترامه مع ihr، ويفسر Ihnen / Ihr في النصين و mir مع helfen.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-02

**النص:**

> - **hätte / könnte / möchte:** **Ich hätte gern einen Umtausch.** رغبة في استبدال؛ einen مع الاسم المذكر Umtausch في النصب. **Ich möchte wissen …** أريد أن أعرف؛ wissen مصدر دون zu بعد möchte. هذه الطلبات لا تثبت أن الاستبدال متاح أو تم فعليًا.

**نتيجة المراجعة:** يفصل hätte و möchte عن könnte؛ einen Umtausch و wissen دون zu مدعومان، والطلب غير النتيجة.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-03

**النص:**

> - **ob وترتيب التابعة:** **Ich möchte wissen, ob ein Umtausch möglich ist.** فاصلة قبل ob وist في نهاية التابعة، ونقطة لأن الجملة الرئيسية خبرية. **Könnten Sie mir bitte sagen, ob ich es umtauschen kann?** سؤال مباشر يحتوي سؤالًا غير مباشر؛ نهايته علامة استفهام، وداخل التابعة umtauschen ثم kann. لا نعكسهما ولا نضيف zu.

**نتيجة المراجعة:** يدرب ob بعد عبارة خبرية وسؤال مباشر؛ يميز النهاية بالنقطة أوالاستفهام، و umtauschen kann آخر التابعة.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-04

**النص:**

> - **vor / seit / am / morgen:** شراء Salma قبل عشرة أيام: **vor zehn Tagen**؛ بداية العطل منذ أمس: **seit gestern**. لا نجعل وقت الشراء بداية العطل. Kundin اشترت قبل أسبوعين، وKarim اشترى يوم الاثنين ويقول إنه سيأتي غدًا؛ ذلك وصف خطة، لا دليل أنه وصل أو يحمل الإيصال الآن.

**نتيجة المراجعة:** يحفظ ثلاثة أزمنة شراء مختلفة وبداية عطل محددة في رسالة Salma فقط؛ زيارة Karim غدًا خطة.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-05

**النص:**

> - **العطل والضرر:** defekt معطّل، وbeschädigt متضرر؛ قد تتداخل الكلمتان ولا تمثلان تشخيصين منفصلين دائمًا. Salma تقول إن السماعة غير متضررة وتصف تعطل المكبر الأيمن؛ ننقل كلامها دون فحص تقني. لا نستنتج أن الأيسر يعمل أو أن العطل سببه بطارية أو شاشة مكسورة. **Der Bildschirm bleibt schwarz.** تظل الشاشة سوداء، ولا تحدد الجملة سببًا تقنيًا.

**نتيجة المراجعة:** ينقل نفي Salma للضرر دون تحويله إلى تشخيص؛ العطل الأيمن لا يثبت حالة الأيسر ولا سبب العطل.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-06

**النص:**

> - **prüfen / reparieren / umtauschen / zurückgeben:** يفحص / يصلح / يستبدل / يعيد المنتج. الفحص ليس إصلاحًا منجزًا؛ والاستبدال ليس تلقائيًا استرداد نقود. **Ich tausche das Gerät um.** و**Ich gebe es zurück.** رئيسيتان بفعل منفصل؛ مع الفعل الناقص يبقى المصدر كاملًا: **Könnten wir das Produkt umtauschen?**

**نتيجة المراجعة:** يفصل الفحص والإصلاح والاستبدال والإعادة؛ مثالان للمصدر المنفصل مع التصريف، لا ادعاء مالي.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-07

**النص:**

> - **حدود الضمان:** الموظف يقول إن جهاز الحوار ما زال تحت الضمان ويعرض إصلاحًا أو استبدالًا في هذا الموقف الخيالي. هذا ليس حكمًا عامًا بأن كل ضمان يمنح استبدالًا أو رد مال، ولا موعدًا أو تكلفة مؤكدة. لا ننقل الضمان إلى سماعة Salma أو شاحن Karim، ولا نستنتج أن إيصال الشراء وحده يثبت كل شروط الاستبدال.

**نتيجة المراجعة:** عرض الضمان محصور في حوار Tablet؛ لا مدة أو تكلفة أو حقوق دولة مفترضة.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-08

**النص:**

> - **ثلاثة سياقات مستقلة:** Tablet للزبونة في الحوار؛ Kopfhörer لـSalma في الرسالة؛ Ladegerät لـKarim في الاستماع. **das Tablet** جهاز لوحي، و**rechts / links** يمين/يسار، و**ein Umtausch ist möglich** الاستبدال ممكن. النصوص خيالية للتعلم، لا طلب خدمة أو معلومات شراء حقيقية.

**نتيجة المراجعة:** تفصل المنتجات والأشخاص؛ Tablet جهاز لوحي وممكن لا تعني تم الاستبدال.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-09

**النص:**

> - **تنبيه تسجيل التصريف:** ترد في نص بنك العبارات القديم **Er und sie könnte.** وهي صياغة تعداد ملتبسة، لا نموذج صحيح لجملة ذات فاعل مركب. نتعلم البدائل المنفصلة **Er könnte. Sie könnte. Es könnte.** أما sie للجمع وSie للاحترام فمع könnten. أضيف هذا التوضيح والجدول؛ التسجيل والتفريغ محفوظان دون تغيير أو استماع أو اعتماد جديد.

**نتيجة المراجعة:** يثبت قيد النص الصوتي القديم دون إصلاح التسجيل؛ بدائل مفرد منفصلة مع جمع/احترام könnten.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### helper-10

**النص:**

> - **طريقة العمل:** P01 رسالة كتابة فقط: تحية وخمس جمل وختام واسم خيالي. P02 أربعة أدوار مع قراءة الدورين جهرًا. لا شريك أو تسجيل أو إرسال شكوى حقيقية. حاول الاستماع قبل التفريغ؛ قراءة النص لا تثبت فهمًا مسموعًا مستقلًا، والطول والإقرار لا يصححان اللغة أو النطق.

**نتيجة المراجعة:** يوضح كتابة P01 وجهر P02 والاستماع الاختياري وحدود الإقرار، بلا شريك أو تسجيل إلزامي.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, EXCHANGE, RETURN, DEFECT, DAMAGE, GUARANTEE, INF.

### dialogue-01

**النص:**

> Guten Tag. Dieses Tablet ist defekt. Der Bildschirm bleibt schwarz.

**نتيجة المراجعة:** الزبونة تصف Tablet معطلًا وشاشة تظل سوداء؛ لا سبب تقني أو كسر مثبت.

**المراجع ذات الصلة:** KII, MODAL, TIME, GUARANTEE, EXCHANGE, INF.

### dialogue-02

**النص:**

> Wann haben Sie das Gerät gekauft?

**نتيجة المراجعة:** سؤال الموظف عن وقت الشراء بـ Wann، لا عن مدة العطل؛ الفعل بعد أداة السؤال.

**المراجع ذات الصلة:** KII, MODAL, TIME, GUARANTEE, EXCHANGE, INF.

### dialogue-03

**النص:**

> Vor zwei Wochen. Hier ist der Kassenbon.

**نتيجة المراجعة:** تجيب قبل أسبوعين وتقدم الإيصال هنا؛ هذا الدليل يخص الزبونة لا Karim.

**المراجع ذات الصلة:** KII, MODAL, TIME, GUARANTEE, EXCHANGE, INF.

### dialogue-04

**النص:**

> Danke. Könnten Sie mir das Ladegerät auch geben?

**نتيجة المراجعة:** طلب الشاحن أيضًا بـ Könnten و mir؛ لا وصف للشاحن نفسه بأنه معطل.

**المراجع ذات الصلة:** KII, MODAL, TIME, GUARANTEE, EXCHANGE, INF.

### dialogue-05

**النص:**

> Ja, natürlich. Könnten Sie das Tablet bitte prüfen?

**نتيجة المراجعة:** توافق على تقديمه ثم تطلب فحص Tablet؛ طلب الفحص يخص الزبونة.

**المراجع ذات الصلة:** KII, MODAL, TIME, GUARANTEE, EXCHANGE, INF.

### dialogue-06

**النص:**

> Ja. Das Gerät ist noch unter Garantie. Wir können es reparieren oder umtauschen.

**نتيجة المراجعة:** يؤكد الموظف الضمان ويعرض إصلاحًا أو استبدالًا في السيناريو، دون القول إن الفحص/الحل أُنجز أو أنه مجاني عالميًا.

**المراجع ذات الصلة:** KII, MODAL, TIME, GUARANTEE, EXCHANGE, INF.

### dialogue-07

**النص:**

> Ich hätte gern einen Umtausch, bitte.

**نتيجة المراجعة:** الزبونة تفضل الاستبدال بـ hätte gern؛ الرغبة لا إثبات حصول الاستبدال.

**المراجع ذات الصلة:** KII, MODAL, TIME, GUARANTEE, EXCHANGE, INF.

### reading-01

**النص:**

> Guten Tag.

**نتيجة المراجعة:** تحية في الرسالة، وتختلف فاصلتها الكتابية عن نقطة التفريغ فقط؛ ليست ادعاء واقعيًا.

**المراجع ذات الصلة:** KII, OB, TIME, DAMAGE, INF.

### reading-02

**النص:**

> Vor zehn Tagen habe ich bei Ihnen einen Kopfhörer gekauft.

**نتيجة المراجعة:** Salma اشترت Kopfhörer قبل عشرة أيام؛ لا سبعة مثل النموذج ولا أسبوعين مثل الحوار.

**المراجع ذات الصلة:** KII, OB, TIME, DAMAGE, INF.

### reading-03

**النص:**

> Seit gestern funktioniert der rechte Lautsprecher nicht.

**نتيجة المراجعة:** عدم عمل المكبر الأيمن منذ أمس؛ لا نعرف حالة الأيسر من ذلك.

**المراجع ذات الصلة:** KII, OB, TIME, DAMAGE, INF.

### reading-04

**النص:**

> Der Kopfhörer ist nicht beschädigt, und ich habe den Kassenbon noch.

**نتيجة المراجعة:** تنفي الضرر وتذكر أنها ما زالت تحتفظ بالإيصال؛ ننسبهما لكلامها لا لفحص خارجي.

**المراجع ذات الصلة:** KII, OB, TIME, DAMAGE, INF.

### reading-05

**النص:**

> Könnten Sie das Gerät bitte prüfen?

**نتيجة المراجعة:** طلب فحص مهذب، مع المصدر الأخير؛ لا دليل أنه أُنجز.

**المراجع ذات الصلة:** KII, OB, TIME, DAMAGE, INF.

### reading-06

**النص:**

> Ich möchte wissen, ob ein Umtausch möglich ist.

**نتيجة المراجعة:** تريد معرفة إمكان الاستبدال؛ ob مع ist أخيرًا، ونقطة للجملة الرئيسية الخبرية.

**المراجع ذات الصلة:** KII, OB, TIME, DAMAGE, INF.

### reading-07

**النص:**

> Vielen Dank.

**نتيجة المراجعة:** ختام شكر، لا موافقة على حل معين.

**المراجع ذات الصلة:** KII, OB, TIME, DAMAGE, INF.

### reading-08

**النص:**

> Salma Ben Youssef.

**نتيجة المراجعة:** اسم كاتبة المثال الخيالي لا بيانات مطلوبة من المتعلم.

**المراجع ذات الصلة:** KII, OB, TIME, DAMAGE, INF.

### reading-question-01

**النص:**

> Was hat Salma gekauft?

**نتيجة المراجعة:** einen Kopfhörer؛ المنتج في الجملة الأولى لا Tablet الحوار.

**المراجع ذات الصلة:** OB, TIME, DAMAGE.

### reading-question-02

**النص:**

> Seit wann funktioniert der rechte Lautsprecher nicht?

**نتيجة المراجعة:** Seit gestern؛ وقت ظهور العطل وليس وقت الشراء vor zehn Tagen.

**المراجع ذات الصلة:** OB, TIME, DAMAGE.

### reading-question-03

**النص:**

> Ist der Kopfhörer beschädigt?

**نتيجة المراجعة:** بحسب رسالتها: Nein, er ist nicht beschädigt. لا تشخيص مستقل.

**المراجع ذات الصلة:** OB, TIME, DAMAGE.

### reading-question-04

**النص:**

> Was möchte Salma wissen?

**نتيجة المراجعة:** Ob ein Umtausch möglich ist؛ سؤال الإمكان لا حق مكتسب أو استبدال أُنجز.

**المراجع ذات الصلة:** OB, TIME, DAMAGE.

### listening-01

**النص:**

> Guten Tag, hier spricht Karim.

**نتيجة المراجعة:** تحية وتعريف باسم Karim؛ لا هوية متعلم أو طرف حقيقي.

**المراجع ذات الصلة:** KII, OB, TIME, EXCHANGE, INF.

### listening-02

**النص:**

> Mein neues Ladegerät funktioniert nicht.

**نتيجة المراجعة:** الشاحن الجديد لا يعمل؛ لا يحدد سبب العطل أو تاريخ بدايته.

**المراجع ذات الصلة:** KII, OB, TIME, EXCHANGE, INF.

### listening-03

**النص:**

> Ich habe es am Montag gekauft.

**نتيجة المراجعة:** اشتراه يوم الاثنين؛ لا اليوم الذي يصادفه الاثنين ولا أنه من عشرة أيام.

**المراجع ذات الصلة:** KII, OB, TIME, EXCHANGE, INF.

### listening-04

**النص:**

> Könnten Sie mir bitte sagen, ob ich es umtauschen kann?

**نتيجة المراجعة:** طلب جواب عن إمكان الاستبدال؛ ob ich es umtauschen kann، والفعل الناقص آخر التابعة.

**المراجع ذات الصلة:** KII, OB, TIME, EXCHANGE, INF.

### listening-05

**النص:**

> Ich habe den Kassenbon und komme morgen in Ihr Geschäft.

**نتيجة المراجعة:** يمتلك الإيصال وينوي زيارة المتجر غدًا؛ لا إثبات وجوده الآن أو حمل الإيصال معه أو تنفيذ الزيارة.

**المراجع ذات الصلة:** KII, OB, TIME, EXCHANGE, INF.

### listening-06

**النص:**

> Vielen Dank.

**نتيجة المراجعة:** شكر ختامي، وليس جواب موظف أو قبول للاستبدال.

**المراجع ذات الصلة:** KII, OB, TIME, EXCHANGE, INF.

### listening-question-01

**النص:**

> Was funktioniert nicht?

**نتيجة المراجعة:** Sein neues Ladegerät؛ لا سماعة Salma أو شاشة الحوار.

**المراجع ذات الصلة:** OB, TIME.

### listening-question-02

**النص:**

> Wann hat Karim das Gerät gekauft?

**نتيجة المراجعة:** Am Montag؛ لا تاريخ تقويمي مستنتج.

**المراجع ذات الصلة:** OB, TIME.

### listening-question-03

**النص:**

> Welche Frage stellt er?

**نتيجة المراجعة:** يسأل ob ich es umtauschen kann؛ سؤال لا موافقة.

**المراجع ذات الصلة:** OB, TIME.

### listening-question-04

**النص:**

> Was hat Karim noch?

**نتيجة المراجعة:** Den Kassenbon؛ استبدل dabei بسؤال الملكية، فلا نستنتج وجوده في المتجر الآن.

**المراجع ذات الصلة:** OB, TIME.

### writing-model-01

**النص:**

> Guten Tag,

**نتيجة المراجعة:** تحية، تتبعها فاصلة وبداية vor بحرف صغير كما في رسالة واحدة.

**المراجع ذات الصلة:** KII, OB, TIME, INF.

### writing-model-02

**النص:**

> vor sieben Tagen habe ich bei Ihnen einen Kopfhörer gekauft.

**نتيجة المراجعة:** جملة المتن 1: شراء سماعة الرأس قبل سبعة أيام كما يطلب P01، وليست نسبة إلى Salma.

**المراجع ذات الصلة:** KII, OB, TIME, INF.

### writing-model-03

**النص:**

> Seit gestern funktioniert der rechte Lautsprecher nicht.

**نتيجة المراجعة:** جملة 2: تعطل المكبر الأيمن منذ أمس؛ لا نخلط ذلك بوقت الشراء.

**المراجع ذات الصلة:** KII, OB, TIME, INF.

### writing-model-04

**النص:**

> Ich habe den Kassenbon noch.

**نتيجة المراجعة:** جملة 3: احتفاظ بالإيصال دون إضافة ضمان.

**المراجع ذات الصلة:** KII, OB, TIME, INF.

### writing-model-05

**النص:**

> Könnten Sie das Gerät bitte prüfen?

**نتيجة المراجعة:** جملة 4: Könnten Sie … bitte prüfen? تطابق المصدر ومطلب الفحص، لا الحل المنجز.

**المراجع ذات الصلة:** KII, OB, TIME, INF.

### writing-model-06

**النص:**

> Ich möchte wissen, ob ein Umtausch möglich ist.

**نتيجة المراجعة:** جملة 5: سؤال غير مباشر بعد Ich möchte wissen بفاصلة و ob و ist أخيرًا ونقطة.

**المراجع ذات الصلة:** KII, OB, TIME, INF.

### writing-model-07

**النص:**

> Vielen Dank

**نتيجة المراجعة:** ختام شكر خارج جمل المتن الخمس.

**المراجع ذات الصلة:** KII, OB, TIME, INF.

### writing-model-08

**النص:**

> Nora

**نتيجة المراجعة:** اسم Nora الخيالي المطلوب؛ كتابة فقط ولا بيانات شخصية للمتعلم.

**المراجع ذات الصلة:** KII, OB, TIME, INF.

### speaking-model-01

**النص:**

> Kundin: Guten Tag. Mein Tablet ist defekt. Könnten Sie das Gerät bitte prüfen?

**نتيجة المراجعة:** دور 1 للزبونة: يصف Tablet ويطلب الفحص؛ عدة جمل في دور واحد، لا نخلط عدد الأدوار بعدد الجمل.

**المراجع ذات الصلة:** KII, MODAL, GUARANTEE, EXCHANGE, INF.

### speaking-model-02

**النص:**

> Mitarbeiter: Haben Sie den Kassenbon?

**نتيجة المراجعة:** دور 2 للموظف: سؤال عن الإيصال كما يطلب P02.

**المراجع ذات الصلة:** KII, MODAL, GUARANTEE, EXCHANGE, INF.

### speaking-model-03

**النص:**

> Kundin: Ja, hier ist der Kassenbon.

**نتيجة المراجعة:** دور 3 للزبونة: تقديم الإيصال؛ هنا تصريح حيازة حاضر يختلف عن استماع Karim.

**المراجع ذات الصلة:** KII, MODAL, GUARANTEE, EXCHANGE, INF.

### speaking-model-04

**النص:**

> Mitarbeiter: Das Gerät ist noch unter Garantie. Wir können es reparieren oder umtauschen.

**نتيجة المراجعة:** دور 4 للموظف: الضمان فرضية هذا التمرين، ويقترح إصلاحًا أو استبدالًا دون موعد أو تكلفة أو إنجاز.

**المراجع ذات الصلة:** KII, MODAL, GUARANTEE, EXCHANGE, INF.

### card-01

**النص:**

> - **Das Gerät ist defekt.** → الجهاز معطّل.

**نتيجة المراجعة:** وصف عطل، ليس تشخيصًا تقنيًا محددًا.

**المراجع ذات الصلة:** KII, MODAL, DEFECT, INF.

### card-02

**النص:**

> - **Könnten Sie mir bitte helfen?** → هل يمكنكم مساعدتي من فضلكم؟

**نتيجة المراجعة:** طلب مهذب مع mir و helfen النهائي بلا zu.

**المراجع ذات الصلة:** KII, MODAL, DEFECT, INF.

### card-03

**النص:**

> - **Ich hätte gern einen Umtausch.** → أود استبدال المنتج.

**نتيجة المراجعة:** رغبة بـ hätte gern لا من können ولا استبدال منجز.

**المراجع ذات الصلة:** KII, MODAL, DEFECT, INF.

### card-04

**النص:**

> - **Haben Sie den Kassenbon?** → هل لديكم إيصال الشراء؟

**نتيجة المراجعة:** سؤال حيازة الإيصال، وليس شرطًا قانونيًا كافيًا وحده.

**المراجع ذات الصلة:** KII, MODAL, DEFECT, INF.

### DL-A2-09-T01

**النص:**

> 1. أحتفظ به لإثبات الشراء: **der Kassenbon / der Bildschirm**
> 2. أشحن به الهاتف: **das Ladegerät / die Garantie**
> 3. أقرأه لمعرفة طريقة استخدام الجهاز: **die Bedienungsanleitung / der Akku**
> 4. فعل يعني استبدال المنتج بآخر: **umtauschen / fotografieren**

**نتيجة المراجعة:** اختيار معجمي بأزواج محددة، مع معنى الاستبدال لا إجراء شراء حقيقي.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**البنود:**

1. أحتفظ به لإثبات الشراء: **der Kassenbon / der Bildschirm**
   - الإيصال لإثبات الشراء؛ الشاشة لا تقوم بوظيفته. الجواب: der Kassenbon.
2. أشحن به الهاتف: **das Ladegerät / die Garantie**
   - الشاحن لشحن الهاتف؛ الضمان وعد/ترتيب لا جهاز شحن. الجواب: das Ladegerät.
3. أقرأه لمعرفة طريقة استخدام الجهاز: **die Bedienungsanleitung / der Akku**
   - دليل الاستخدام يشرح التشغيل؛ البطارية ليست كتاب إرشادات. الجواب: die Bedienungsanleitung.
4. فعل يعني استبدال المنتج بآخر: **umtauschen / fotografieren**
   - umtauschen للاستبدال؛ fotografieren تصوير لا استبدال. الجواب: umtauschen.

### DL-A2-09-T02

**النص:**

> 1. ______ Sie das Gerät prüfen? (طلب رسمي)
> 2. ______ ich bitte ein neues Ladegerät bekommen? (طلب مهذّب)
> 3. ______ ihr mir bitte helfen? (طلب من مجموعة أصدقاء)
> 4. ______ du den Kassenbon zeigen? (طلب من صديق)

**نتيجة المراجعة:** أربع صيغ مرتبطة بضمير الطلب بدل حفظ könnte وحدها.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**البنود:**

1. ______ Sie das Gerät prüfen? (طلب رسمي)
   - صيغة Sie هي Könnten للاحترام ولو لشخص واحد. الجواب: Könnten.
2. ______ ich bitte ein neues Ladegerät bekommen? (طلب مهذّب)
   - مع ich الصيغة Könnte، و bekommen مصدر نهائي. الجواب: Könnte.
3. ______ ihr mir bitte helfen? (طلب من مجموعة أصدقاء)
   - ihr لجماعة أصدقاء يقابله Könntet لا Könnten. الجواب: Könntet.
4. ______ du den Kassenbon zeigen? (طلب من صديق)
   - du يقابله Könntest مع مصدر zeigen. الجواب: Könntest.

### DL-A2-09-T03

**النص:**

> 1. Könnten Sie das Gerät bitte ______? (prüfen)
> 2. Könntest du den Kopfhörer ______? (reparieren)
> 3. Könnten wir das Produkt ______? (umtauschen)

**نتيجة المراجعة:** ثلاثة مصادر في موضعها دون zu؛ كل جملة طلب لا تنفيذ.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**البنود:**

1. Könnten Sie das Gerät bitte ______? (prüfen)
   - المصدر prüfen دون zu في آخر الطلب، ولا نعيد تصريفه. الجواب: prüfen.
2. Könntest du den Kopfhörer ______? (reparieren)
   - reparieren مصدر مع Könntest و du؛ Kopfhörer مفعول في النصب. الجواب: reparieren.
3. Könnten wir das Produkt ______? (umtauschen)
   - umtauschen مصدر كامل بعد Könnten wir؛ لا نفصله هنا. الجواب: umtauschen.

### DL-A2-09-T04

**النص:**

> اختر العبارة المناسبة للدور المحدد، لا مجرد أي جملة صحيحة:
> 
> 1. الزبونة تصف شاشة سوداء وتطلب الفحص: أ. Könnten Sie das Gerät bitte prüfen? ب. Guten Appetit! ج. Ich wohne am Bildschirm.
> 2. الموظف يعرض إصلاحًا أو استبدالًا كما في الحوار: أ. Ich bin der Kassenbon. ب. Wir können es reparieren oder umtauschen. ج. Das Gerät fährt morgen.

**نتيجة المراجعة:** فصل الطلب من جهة الزبونة عن عرض الحل من جهة الموظف؛ أضيف بند ثان يدعم Q04.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**البنود:**

1. الزبونة تصف شاشة سوداء وتطلب الفحص: أ. Könnten Sie das Gerät bitte prüfen? ب. Guten Appetit! ج. Ich wohne am Bildschirm.
   - طلب الزبونة هو الفحص؛ Guten Appetit خاص بالأكل و Ich wohne am Bildschirm ليس طلب فحص. الجواب: أ: Könnten Sie das Gerät bitte prüfen?.
2. الموظف يعرض إصلاحًا أو استبدالًا كما في الحوار: أ. Ich bin der Kassenbon. ب. Wir können es reparieren oder umtauschen. ج. Das Gerät fährt morgen.
   - عرض الموظف إصلاح/استبدال؛ ليس هو الإيصال ولا سفر الجهاز غدًا، ولا يضيف الرد فحصًا منجزًا. الجواب: ب: Wir können es reparieren oder umtauschen..

### DL-A2-09-T05

**النص:**

> حدّد صحيحًا أو خطأ:
> 
> 1. Salma hat einen Kopfhörer gekauft.
> 2. Der rechte Lautsprecher funktioniert.
> 3. Der Kopfhörer ist beschädigt.
> 4. Salma möchte wissen, ob ein Umtausch möglich ist.

**نتيجة المراجعة:** أربعة أحكام بحسب الرسالة فقط؛ أزيل الاستدلال غير اللازم عن المكبر الأيسر.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**البنود:**

1. Salma hat einen Kopfhörer gekauft.
   - النص يذكر einen Kopfhörer صراحة. الجواب: صحيح.
2. Der rechte Lautsprecher funktioniert.
   - تنفي الرسالة عمل الأيمن؛ صيغ هذا البند ليناقض الدليل مباشرة بدل استنتاج حالة الأيسر. الجواب: خطأ.
3. Der Kopfhörer ist beschädigt.
   - تنفي Salma الضرر؛ نحكم بحسب كلامها لا فحص مستقل. الجواب: خطأ.
4. Salma möchte wissen, ob ein Umtausch möglich ist.
   - تسأل عن الإمكان بـ ob؛ لا تطلب تثبيت موافقة موجودة. الجواب: صحيح.

### DL-A2-09-T06

**النص:**

> أكمل من البنك، واستعمل كل كلمة مرة: **Ladegerät — Montag — umtauschen — Kassenbon**.
> 
> 1. Das neue ______ funktioniert nicht.
> 2. Er hat es am ______ gekauft.
> 3. Er fragt, ob er es ______ kann.
> 4. Er hat den ______.

**نتيجة المراجعة:** أضيف بنك كلمات وحُذف افتراض حمل الإيصال الآن؛ تبقى حدود الاستماع/التفريغ واضحة.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**البنود:**

1. Das neue ______ funktioniert nicht.
   - الشاحن الجديد لا يعمل؛ اختيار من بنك لا يخمن منتجًا آخر. الجواب: Ladegerät.
2. Er hat es am ______ gekauft.
   - ورد am Montag لا morgen الذي يخص الزيارة. الجواب: Montag.
3. Er fragt, ob er es ______ kann.
   - مصدر umtauschen قبل kann في التابعة؛ لا zu. الجواب: umtauschen.
4. Er hat den ______.
   - يمتلك Kassenbon؛ أزيل dabei لأنه غير مثبت في النص. الجواب: Kassenbon.

### DL-A2-09-T07

**النص:**

> ابدأ في1 بـKönnten Sie،وفي2 بـIch،وفي3 بـIch möchte wissen. استعمل كل كتلة مرة وأضف الفاصلة وعلامة النهاية المناسبة دون تغيير الصيغ:
> 
> 1. Sie / Könnten / bitte / helfen / mir
> 2. gern / Ich / einen Umtausch / hätte
> 3. möglich / Ich möchte wissen / ist / ob / ein Umtausch

**نتيجة المراجعة:** قُيدت البدايات وأضيفت مهمة ob؛ المصدر يدعم Q09 و Q10 مباشرة.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**البنود:**

1. Sie / Könnten / bitte / helfen / mir
   - بداية Könnten Sie المحددة تقيد جواب السؤال المباشر؛ bitte يمكن أن تتحرك في صيغ أخرى لكن ليس المصدر في وسط هذا النمط. الجواب: Könnten Sie mir bitte helfen?.
2. gern / Ich / einen Umtausch / hätte
   - البداية Ich والصيغة hätte مع einen Umtausch؛ لا مصدر فعل مطلوب في نهاية هذه العبارة الاسمية. الجواب: Ich hätte gern einen Umtausch..
3. möglich / Ich möchte wissen / ist / ob / ein Umtausch
   - الجملة الرئيسية ثابتة ثم فاصلة و ob والصفة möglich قبل ist؛ تدريب مباشر يدعم Q10 و P01. الجواب: Ich möchte wissen, ob ein Umtausch möglich ist..

### DL-A2-09-T08

**النص:**

> **أ — P01: رسالة كتابة فقط**
> 
> اكتب باسم Nora رسالة شكوى خيالية، كتابة فقط: تحية، ثم خمس جمل في المتن، ثم ختام واسم. الجملة1 شراء سماعة رأس قبل سبعة أيام؛ الجملة2 تعطل المكبر الأيمن منذ أمس؛ الجملة3 الاحتفاظ بإيصال الشراء؛ الجملة4 طلب الفحص بـKönnten Sie … bitte prüfen?؛ الجملة5 السؤال عن إمكان الاستبدال بـIch möchte wissen, ob مع ist في نهاية التابعة. لا تدّع موافقة المتجر أو ضمانًا غير مذكور. لا جهر أو إرسال أو بيانات شخصية مطلوبة.
> 
> **ب — P02: أربعة أدوار مع الجهر**
> 
> اكتب أربعة أدوار خيالية بين Kundin وMitarbeiter، ثم اقرأ الدورين بصوت مرتفع: الدور1 للزبونة يصف Tablet معطلًا ويطلب فحصه بـKönnten Sie … bitte prüfen?؛ الدور2 للموظف يسأل عن إيصال الشراء؛ الدور3 للزبونة تقدم فيه الإيصال؛ الدور4 للموظف يذكر أن الجهاز تحت الضمان في هذا السيناريو فقط ويعرض إصلاحًا أو استبدالًا بـWir können es reparieren oder umtauschen. لا تقل إن الحل نُفذ أو حُددت تكلفته. لا شريك أو تسجيل أو بيانات شراء حقيقية مطلوبة.

**نتيجة المراجعة:** مهمتان معلنتان لا إضافة خفية في التقييم: رسالة من 8 مكونات كتابة فقط وحوار من 4 أدوار مع الجهر؛ 12 مطلبًا موزعة لا 12 جملة. النموذجان يفيان بحدي 220/180 حرفًا.

**المراجع ذات الصلة:** KII, OB, GUARANTEE, INF.

**البنود:**

1. P01، المكوّن 1: Guten Tag,
   - تحية، تتبعها فاصلة وبداية vor بحرف صغير كما في رسالة واحدة.
2. P01، المكوّن 2: vor sieben Tagen habe ich bei Ihnen einen Kopfhörer gekauft.
   - جملة المتن 1: شراء سماعة الرأس قبل سبعة أيام كما يطلب P01، وليست نسبة إلى Salma.
3. P01، المكوّن 3: Seit gestern funktioniert der rechte Lautsprecher nicht.
   - جملة 2: تعطل المكبر الأيمن منذ أمس؛ لا نخلط ذلك بوقت الشراء.
4. P01، المكوّن 4: Ich habe den Kassenbon noch.
   - جملة 3: احتفاظ بالإيصال دون إضافة ضمان.
5. P01، المكوّن 5: Könnten Sie das Gerät bitte prüfen?
   - جملة 4: Könnten Sie … bitte prüfen? تطابق المصدر ومطلب الفحص، لا الحل المنجز.
6. P01، المكوّن 6: Ich möchte wissen, ob ein Umtausch möglich ist.
   - جملة 5: سؤال غير مباشر بعد Ich möchte wissen بفاصلة و ob و ist أخيرًا ونقطة.
7. P01، المكوّن 7: Vielen Dank
   - ختام شكر خارج جمل المتن الخمس.
8. P01، المكوّن 8: Nora
   - اسم Nora الخيالي المطلوب؛ كتابة فقط ولا بيانات شخصية للمتعلم.
9. P02، الدور 1: Kundin: Guten Tag. Mein Tablet ist defekt. Könnten Sie das Gerät bitte prüfen?
   - دور 1 للزبونة: يصف Tablet ويطلب الفحص؛ عدة جمل في دور واحد، لا نخلط عدد الأدوار بعدد الجمل.
10. P02، الدور 2: Mitarbeiter: Haben Sie den Kassenbon?
   - دور 2 للموظف: سؤال عن الإيصال كما يطلب P02.
11. P02، الدور 3: Kundin: Ja, hier ist der Kassenbon.
   - دور 3 للزبونة: تقديم الإيصال؛ هنا تصريح حيازة حاضر يختلف عن استماع Karim.
12. P02، الدور 4: Mitarbeiter: Das Gerät ist noch unter Garantie. Wir können es reparieren oder umtauschen.
   - دور 4 للموظف: الضمان فرضية هذا التمرين، ويقترح إصلاحًا أو استبدالًا دون موعد أو تكلفة أو إنجاز.

### DL-A2-09-Q01

**النص:**

> ما معنى **der Kassenbon**؟

**نتيجة المراجعة:** Kassenbon هو إيصال الشراء.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** إيصال الشراء.

**البدائل:**

1. إيصال الشراء. — الصحيح
   - المعنى المطلوب مباشرة من المفردات.
2. الشاحن. — غير المختار في هذا السؤال
   - الشاحن Ladegerät لا Kassenbon.
3. دليل الاستخدام. — غير المختار في هذا السؤال
   - دليل الاستخدام Bedienungsanleitung لا الإيصال.

### DL-A2-09-Q02

**النص:**

> أكمل الطلب بأدب: ___ Sie das Gerät bitte prüfen?

**نتيجة المراجعة:** مع Sie نستخدم صيغة الطلب المهذب Könnten.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** Könnten

**البدائل:**

1. Könntest — غير المختار في هذا السؤال
   - Könntest مع du لا Sie هنا.
2. Könnten — الصحيح
   - مطابقة Sie للاحترام مع Könnten.
3. Könnte — غير المختار في هذا السؤال
   - Könnte مع ich/er/sie/es المفرد لا Sie للاحترام.

### DL-A2-09-Q03

**النص:**

> في **Könnten Sie das Gerät bitte prüfen?**، أين يأتي المصدر prüfen؟

**نتيجة المراجعة:** في سؤال الطلب المباشر المدروس يأتي الفعل الناقص المصرف أولًا، والمصدر prüfen في النهاية دون zu.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** في نهاية السؤال.

**البدائل:**

1. بعد Könnten مباشرةً. — غير المختار في هذا السؤال
   - بعد Könnten مباشرة Sie في المثال، لا المصدر.
2. في بداية السؤال. — غير المختار في هذا السؤال
   - البداية بالفعل المصرف Könnten وليس prüfen.
3. في نهاية السؤال. — الصحيح
   - prüfen آخر السؤال المعروض ودون zu.

### DL-A2-09-Q04

**النص:**

> أي رد مناسب من خدمة العملاء؟

**نتيجة المراجعة:** يعرض الموظف إصلاحًا أو استبدالًا؛ لا تذكر هذه الجملة الفحص ولا تثبت تنفيذ أي حل.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** Wir können es reparieren oder umtauschen.

**البدائل:**

1. Ich bin der Kassenbon. — غير المختار في هذا السؤال
   - أنا الإيصال ليست استجابة خدمة مناسبة لهذا الموقف.
2. Wir können es reparieren oder umtauschen. — الصحيح
   - عرض إصلاح أو استبدال كما في الحوار و T04.2.
3. Das Gerät fährt morgen. — غير المختار في هذا السؤال
   - ذهاب/سير الجهاز غدًا لا يعرض حل العطل المقصود.

### DL-A2-09-Q05

**النص:**

> ماذا اشترت Salma؟

**نتيجة المراجعة:** الرسالة تقول einen Kopfhörer.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** سماعة رأس.

**البدائل:**

1. سماعة رأس. — الصحيح
   - einen Kopfhörer صريح في الرسالة.
2. حاسوبًا. — غير المختار في هذا السؤال
   - لا تذكر شراء حاسوب.
3. هاتفًا جديدًا. — غير المختار في هذا السؤال
   - لا تذكر شراء هاتف.

### DL-A2-09-Q06

**النص:**

> منذ متى لا يعمل مكبر السماعة الأيمن؟

**نتيجة المراجعة:** يقول النص Seit gestern.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** منذ أمس.

**البدائل:**

1. منذ عشرة أيام. — غير المختار في هذا السؤال
   - عشرة أيام وقت الشراء لا بداية العطل.
2. منذ شهر. — غير المختار في هذا السؤال
   - شهر غير مذكور.
3. منذ أمس. — الصحيح
   - Seit gestern يطابق منذ أمس.

### DL-A2-09-Q07

**النص:**

> وفق رسالة Salma،هل تقول إن السماعة متضررة؟

**نتيجة المراجعة:** تقول Salma: Der Kopfhörer ist nicht beschädigt. هذا نقل لكلامها، لا فحص تقني يثبت أن كل أجزائها تعمل.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** لا، ليست متضررة.

**البدائل:**

1. نعم، الشاشة مكسورة. — غير المختار في هذا السؤال
   - لا شاشة مكسورة في رسالة Salma، كما أنها تنفي الضرر.
2. لا، ليست متضررة. — الصحيح
   - تقول غير متضررة؛ هذا نقل نص لا فحص.
3. لا يذكر النص ذلك. — غير المختار في هذا السؤال
   - تذكر ذلك صراحة فلا يصح نفي الذكر.

### DL-A2-09-Q08

**النص:**

> في المثال **Ich habe den Kassenbon und komme morgen**، ماذا يملك Karim؟

**نتيجة المراجعة:** Kassenbon تعني إيصال الشراء.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** إيصال الشراء.

**البدائل:**

1. إيصال الشراء. — الصحيح
   - Ich habe den Kassenbon دليل حيازة إيصال فقط.
2. بطاقة صعود الطائرة. — غير المختار في هذا السؤال
   - لا ذكر لبطاقة صعود.
3. قائمة الطعام. — غير المختار في هذا السؤال
   - لا ذكر لقائمة طعام.

### DL-A2-09-Q09

**النص:**

> اختر سؤال طلب المساعدة بالنمط المباشر المدروس: الفعل المصرف أولًا ثم Sie،والمصدر في النهاية.

**نتيجة المراجعة:** Könnten Sie mir bitte helfen? يطابق نمط السؤال المباشر المطلوب؛ لا نعمم الحكم على كل سؤال تأكيدي أو استعمال محكي.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** Könnten Sie mir bitte helfen?

**البدائل:**

1. Könnten Sie helfen mir bitte? — غير المختار في هذا السؤال
   - helfen ليس في الموضع الأخير في هذا النمط المطلوب.
2. Sie könnten bitte mir helfen? — غير المختار في هذا السؤال
   - لا تبدأ بالفعل؛ يمكن تصوّر سؤال تأكيدي بترتيب خبري، لكن ذلك خارج النمط المحدد وليس حكمًا مطلقًا على الألمانية.
3. Könnten Sie mir bitte helfen? — الصحيح
   - الفعل المصرف أولًا ثم Sie و mir مع helfen، والمصدر أخيرًا.

### DL-A2-09-Q10

**النص:**

> أي جملة صحيحة للسؤال إن كان الاستبدال ممكنًا؟

**نتيجة المراجعة:** بعد ob يأتي الفعل المصرف في نهاية الجملة التابعة.

**المراجع ذات الصلة:** KII, MODAL, OB, TIME, INF.

**الجواب:** Ich möchte wissen, ob ein Umtausch möglich ist.

**البدائل:**

1. Ich möchte wissen, ob ist ein Umtausch möglich. — غير المختار في هذا السؤال
   - ist مباشرةبعد ob لا يطابق التابعة المطلوبة.
2. Ich möchte wissen, ob ein Umtausch möglich ist. — الصحيح
   - ob ein Umtausch möglich ist يضع الفعل أخيرًا بعد الجملة الرئيسية.
3. Ich möchte ob wissen, ein Umtausch ist möglich. — غير المختار في هذا السؤال
   - يدمج ob في الرئيسية ويترك التابعة بترتيب خبري، فلا يطابق البنية المطلوبة.

### DL-A2-09-P01

**النص:**

> اكتب باسم Nora رسالة شكوى خيالية، كتابة فقط: تحية، ثم خمس جمل في المتن، ثم ختام واسم. الجملة1 شراء سماعة رأس قبل سبعة أيام؛ الجملة2 تعطل المكبر الأيمن منذ أمس؛ الجملة3 الاحتفاظ بإيصال الشراء؛ الجملة4 طلب الفحص بـKönnten Sie … bitte prüfen?؛ الجملة5 السؤال عن إمكان الاستبدال بـIch möchte wissen, ob مع ist في نهاية التابعة. لا تدّع موافقة المتجر أو ضمانًا غير مذكور. لا جهر أو إرسال أو بيانات شخصية مطلوبة.

**نتيجة المراجعة:** مطابقة المصدر والمعايير والنموذج ونمط الدليل؛ الإقرار والحد الحرفي لا يثبتان صحة اللغة أو النطق.

**المراجع ذات الصلة:** KII, OB, INF, GUARANTEE.

**المعايير:**

1. تحية وخمس جمل وختام واسم Nora؛ سماعة الرأس قبل سبعة أيام،عطل الأيمن منذ أمس،الإيصال،طلب الفحص وسؤال الاستبدال؛ كتابة فقط.
   - المكونات الثمانية واضحة ويقابلها نموذج 258 حرفًا، فوق 220؛ لا جهر في المصدر أو التقييم.
2. وقت الشراء منفصل عن بداية العطل،والطلبات لا تثبت موافقة المتجر أو ضمانًا لم يذكر؛ البيانات خيالية.
   - يميز قبل سبعة أيام عن منذ أمس، ويمنع افتراض ضمان أوإذن؛ نموذج خيالي باسم Nora.
3. Könnten Sie في بداية سؤال الفحص وprüfen بلاzu في نهايته؛ فاصلة قبلob وist آخر التابعة،مع نقطة بعدجملةIch möchte wissen.
   - يفحص نص معيار الطلبو ob فقط؛ التطبيق لا يحلل النحو آليًا ولا يشترط استنساخ النموذج.

**الدليل المحلي:** حد 220 حرفًا؛ كتابة فقط دون جهر؛ لا تسجيل مطلوب.

### DL-A2-09-P02

**النص:**

> اكتب أربعة أدوار خيالية بين Kundin وMitarbeiter، ثم اقرأ الدورين بصوت مرتفع: الدور1 للزبونة يصف Tablet معطلًا ويطلب فحصه بـKönnten Sie … bitte prüfen?؛ الدور2 للموظف يسأل عن إيصال الشراء؛ الدور3 للزبونة تقدم فيه الإيصال؛ الدور4 للموظف يذكر أن الجهاز تحت الضمان في هذا السيناريو فقط ويعرض إصلاحًا أو استبدالًا بـWir können es reparieren oder umtauschen. لا تقل إن الحل نُفذ أو حُددت تكلفته. لا شريك أو تسجيل أو بيانات شراء حقيقية مطلوبة.

**نتيجة المراجعة:** مطابقة المصدر والمعايير والنموذج ونمط الدليل؛ الإقرار والحد الحرفي لا يثبتان صحة اللغة أو النطق.

**المراجع ذات الصلة:** KII, OB, INF, GUARANTEE.

**المعايير:**

1. أربعة أدوار متناوبة:شكوى وطلب،سؤال الإيصال،تقديم الإيصال،ثم الضمان وعرض إصلاح أو استبدال؛ قرأت الدورين جهرًا.
   - الأدوار الأربعة مدعومة في T08 ب ونموذج 242 حرفًا فوق 180؛ إقرار الجهر للدورين مطلوب وليس شريكًا.
2. أدوار الزبونة والموظف واضحة،والضمان فرضية هذا السيناريو فقط؛ لا تكلفة أو موعد أو حل منفذ مختلق.
   - الضمان صريح في السيناريو فقط؛ لا إنجاز حل أو تكلفة مختلقة.
3. طلب بـKönnten Sie مع مصدرprüfen في النهاية،وردبـkönnen معreparieren/umtauschen دونzu؛ ذكرالإيصال مطابق للدور.
   - طلب prüfen وعرض reparieren/umtauschen بمصدر دون zu، ومعنى الإيصال في مكانه؛ لا أداة تصحيح نطق.

**الدليل المحلي:** حد 180 حرفًا؛ الجهر مطلوب؛ لا تسجيل مطلوب.

### DL-A2-09-AUD-PHR-01

**النص:**

> Das Gerät. Das Smartphone. Der Kopfhörer. Der Bildschirm. Der Akku. Das Ladegerät. Der Lautsprecher. Die Garantie. Der Kassenbon. Die Bedienungsanleitung. Defekt. Beschädigt. Reparieren. Umtauschen. Zurückgeben. Prüfen. Ich könnte. Du könntest. Er und sie könnte. Wir könnten. Ihr könntet. Sie könnten. Könnten Sie das Gerät bitte prüfen? Könnten Sie mir bitte helfen? Ich hätte gern einen Umtausch.

**نتيجة المراجعة:** مطابقة نصية مع المصدر والأدوار؛ الروابط والأصوات والحالة محفوظة. لا استماع أو توليد أو اعتماد جديد. قيد تعداد PHR باقٍ مع تصحيح مكتوب فقط.

**البنود:**

1. Das Gerät.
   - das Gerät مفرد محايد، Geräte جمع مع أوملاوت؛ لفظ عام للجهاز لا تشخيص بعينه.
2. Das Smartphone.
   - Smartphone محايد وجمعه Smartphones؛ الهاتف الذكي لا يلزم أن يكون منتج Salma أو Karim.
3. Der Kopfhörer.
   - Kopfhörer مذكر وجمعه لا يتغير في الشكل؛ سماعة الرأس لا تعني مكبر الصوت وحده.
4. Der Bildschirm.
   - Bildschirm مذكر وجمعه Bildschirme؛ الشاشة ليست إيصالًا أو بطارية.
5. Der Akku.
   - Akku مذكر وجمعه Akkus؛ البطارية غير الشاحن، ولا دليل أنها سبب الشاشة السوداء.
6. Das Ladegerät.
   - Ladegerät محايد وجمعه Ladegeräte؛ الشاحن، وهو منتج Karim تحديدًا.
7. Der Lautsprecher.
   - Lautsprecher مذكر وجمعه مطابق في الشكل؛ نميز المكبر الأيمن عن السماعة كلها.
8. Die Garantie.
   - Garantie مؤنث وجمعها Garantien؛ المعنى القاموسي لا يثبت شروط ضمان قانونية.
9. Der Kassenbon.
   - Kassenbon مذكر وجمعه Kassenbons؛ إيصال شراء، وليس بطاقة صعود أو دليل استخدام.
10. Die Bedienungsanleitung.
   - Bedienungsanleitung مؤنث وجمعها Bedienungsanleitungen؛ دليل استخدام لا جزء مادي من الجهاز.
11. Defekt.
   - defekt / beschädigt صفات متداخلة المعنى؛ ليستا فصلًا علميًا بين عطل وظيفي وضرر مرئي فقط. هذا جزء defekt.
12. Beschädigt.
   - defekt / beschädigt صفات متداخلة المعنى؛ ليستا فصلًا علميًا بين عطل وظيفي وضرر مرئي فقط. هذا جزء beschädigt.
13. Reparieren.
   - reparieren مصدر بمعنى يصلح؛ لا يعني أن الإصلاح انتهى بمجرد اقتراحه.
14. Umtauschen.
   - umtauschen مصدر منفصل في الجملة المصرفة؛ معنى الاستبدال لا رد نقود مضمون.
15. Zurückgeben.
   - zurückgeben إعادة المنتج؛ لا تساوي استبداله بالضرورة.
16. Prüfen.
   - prüfen يفحص؛ يسبق تشخيصًا أو قرارًا محتملًا ولا يساوي إصلاحًا مكتملًا.
17. Ich könnte.
   - ich يقابله könnte؛ الأوملاوت يميز الصيغة عن الماضي konnte.
18. Du könntest.
   - du يقابله könntest؛ ليس Könnten حين يكون الفاعل du.
19. Er und sie könnte.
   - التفريغ يقول Er und sie könnte.؛ تعداد ملتبس وغير صحيح كجملة بفاعل منسق. التنبيه المكتوب والجدول يوضحان بدائل المفرد؛ التسجيل نفسه محفوظ ولم يُصلح.
20. Wir könnten.
   - wir يقابله könnten؛ يمكن أن يكون طلبًا باسم مجموعة.
21. Ihr könntet.
   - ihr يقابله könntet؛ مخاطبة مجموعة أصدقاء وليست Sie للاحترام.
22. Sie könnten.
   - sie للجمع و Sie للاحترام يقابلهما könnten؛ الاحترام ممكن لشخص واحد.
23. Könnten Sie das Gerät bitte prüfen?
   - طلب فحص جهاز: Könnten مع Sie ومصدر prüfen بلا zu في النهاية؛ لا يفترض موافقة.
24. Könnten Sie mir bitte helfen?
   - طلب مساعدة مع mir بالداتيف و helfen في النهاية؛ bitte تلطف الطلب.
25. Ich hätte gern einen Umtausch.
   - hätte من haben و einen Umtausch منصوب مذكر؛ رغبة في استبدال وليست فعل استبدال تم.

### DL-A2-09-AUD-DLG-01

**النص:**

> Guten Tag. Dieses Tablet ist defekt. Der Bildschirm bleibt schwarz. Wann haben Sie das Gerät gekauft? Vor zwei Wochen. Hier ist der Kassenbon. Danke. Könnten Sie mir das Ladegerät auch geben? Ja, natürlich. Könnten Sie das Tablet bitte prüfen? Ja. Das Gerät ist noch unter Garantie. Wir können es reparieren oder umtauschen. Ich hätte gern einen Umtausch, bitte.

**نتيجة المراجعة:** مطابقة نصية مع المصدر والأدوار؛ الروابط والأصوات والحالة محفوظة. لا استماع أو توليد أو اعتماد جديد.

**البنود:**

1. Guten Tag. Dieses Tablet ist defekt. Der Bildschirm bleibt schwarz.
   - الزبونة تصف Tablet معطلًا وشاشة تظل سوداء؛ لا سبب تقني أو كسر مثبت.
2. Wann haben Sie das Gerät gekauft?
   - سؤال الموظف عن وقت الشراء بـ Wann، لا عن مدة العطل؛ الفعل بعد أداة السؤال.
3. Vor zwei Wochen. Hier ist der Kassenbon.
   - تجيب قبل أسبوعين وتقدم الإيصال هنا؛ هذا الدليل يخص الزبونة لا Karim.
4. Danke. Könnten Sie mir das Ladegerät auch geben?
   - طلب الشاحن أيضًا بـ Könnten و mir؛ لا وصف للشاحن نفسه بأنه معطل.
5. Ja, natürlich. Könnten Sie das Tablet bitte prüfen?
   - توافق على تقديمه ثم تطلب فحص Tablet؛ طلب الفحص يخص الزبونة.
6. Ja. Das Gerät ist noch unter Garantie. Wir können es reparieren oder umtauschen.
   - يؤكد الموظف الضمان ويعرض إصلاحًا أو استبدالًا في السيناريو، دون القول إن الفحص/الحل أُنجز أو أنه مجاني عالميًا.
7. Ich hätte gern einen Umtausch, bitte.
   - الزبونة تفضل الاستبدال بـ hätte gern؛ الرغبة لا إثبات حصول الاستبدال.

### DL-A2-09-AUD-READ-01

**النص:**

> Guten Tag. Vor zehn Tagen habe ich bei Ihnen einen Kopfhörer gekauft. Seit gestern funktioniert der rechte Lautsprecher nicht. Der Kopfhörer ist nicht beschädigt, und ich habe den Kassenbon noch. Könnten Sie das Gerät bitte prüfen? Ich möchte wissen, ob ein Umtausch möglich ist. Vielen Dank. Salma Ben Youssef.

**نتيجة المراجعة:** مطابقة نصية مع المصدر والأدوار؛ الروابط والأصوات والحالة محفوظة. لا استماع أو توليد أو اعتماد جديد.

**البنود:**

1. Guten Tag.
   - تحية في الرسالة، وتختلف فاصلتها الكتابية عن نقطة التفريغ فقط؛ ليست ادعاء واقعيًا.
2. Vor zehn Tagen habe ich bei Ihnen einen Kopfhörer gekauft.
   - Salma اشترت Kopfhörer قبل عشرة أيام؛ لا سبعة مثل النموذج ولا أسبوعين مثل الحوار.
3. Seit gestern funktioniert der rechte Lautsprecher nicht.
   - عدم عمل المكبر الأيمن منذ أمس؛ لا نعرف حالة الأيسر من ذلك.
4. Der Kopfhörer ist nicht beschädigt, und ich habe den Kassenbon noch.
   - تنفي الضرر وتذكر أنها ما زالت تحتفظ بالإيصال؛ ننسبهما لكلامها لا لفحص خارجي.
5. Könnten Sie das Gerät bitte prüfen?
   - طلب فحص مهذب، مع المصدر الأخير؛ لا دليل أنه أُنجز.
6. Ich möchte wissen, ob ein Umtausch möglich ist.
   - تريد معرفة إمكان الاستبدال؛ ob مع ist أخيرًا، ونقطة للجملة الرئيسية الخبرية.
7. Vielen Dank.
   - ختام شكر، لا موافقة على حل معين.
8. Salma Ben Youssef.
   - اسم كاتبة المثال الخيالي لا بيانات مطلوبة من المتعلم.

### DL-A2-09-AUD-LST-01

**النص:**

> Guten Tag, hier spricht Karim. Mein neues Ladegerät funktioniert nicht. Ich habe es am Montag gekauft. Könnten Sie mir bitte sagen, ob ich es umtauschen kann? Ich habe den Kassenbon und komme morgen in Ihr Geschäft. Vielen Dank.

**نتيجة المراجعة:** مطابقة نصية مع المصدر والأدوار؛ الروابط والأصوات والحالة محفوظة. لا استماع أو توليد أو اعتماد جديد.

**البنود:**

1. Guten Tag, hier spricht Karim.
   - تحية وتعريف باسم Karim؛ لا هوية متعلم أو طرف حقيقي.
2. Mein neues Ladegerät funktioniert nicht.
   - الشاحن الجديد لا يعمل؛ لا يحدد سبب العطل أو تاريخ بدايته.
3. Ich habe es am Montag gekauft.
   - اشتراه يوم الاثنين؛ لا اليوم الذي يصادفه الاثنين ولا أنه من عشرة أيام.
4. Könnten Sie mir bitte sagen, ob ich es umtauschen kann?
   - طلب جواب عن إمكان الاستبدال؛ ob ich es umtauschen kann، والفعل الناقص آخر التابعة.
5. Ich habe den Kassenbon und komme morgen in Ihr Geschäft.
   - يمتلك الإيصال وينوي زيارة المتجر غدًا؛ لا إثبات وجوده الآن أو حمل الإيصال معه أو تنفيذ الزيارة.
6. Vielen Dank.
   - شكر ختامي، وليس جواب موظف أو قبول للاستبدال.

## البصمات والحفظ

```json
{
  "sourceHashes": {
    "content/A2/lesson-09-products-technology-complaints.md": "268513c72637d6b686453340bdb5de96f3f63146005dfffe77818500c2a5f701",
    "content/A2/lesson-09-products-technology-complaints.assessment.json": "89296005467026a74727ae8fc6c950b9b1d74d78a00129a0ab420922a7fe428d"
  },
  "audioSnapshotHashes": {
    "DL-A2-09-AUD-PHR-01": "5e47f8623eb69b0e3b61a0480b3378e6471dec2b5855b833a2746fa55a7d1671",
    "DL-A2-09-AUD-DLG-01": "dc4d4ef07758b2668ffdd698f0300948230125cba83b4bf84c12fb294cee1924",
    "DL-A2-09-AUD-READ-01": "046b13be83ca2e2b4f94bb4833b06ee6dcf17c5bb50c4a16873da15fee793182",
    "DL-A2-09-AUD-LST-01": "e27c92c929e33e48d0be55696504754056491d9fb840fea746d16f1ac0ae0738"
  },
  "preservation": {
    "baseline": "368125120421de02fd0a044ac40bcbf81f4cb593",
    "otherLessonsUnchanged": 52,
    "otherCatalogRowsUnchanged": 1060,
    "mp3GitHashesUnchanged": 474,
    "playlistBytesUnchanged": true,
    "audioRegisterChanges": [
      {
        "assetId": "DL-A2-09-AUD-PHR-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-09-AUD-DLG-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-09-AUD-READ-01",
        "fields": [
          "source_line"
        ]
      },
      {
        "assetId": "DL-A2-09-AUD-LST-01",
        "fields": [
          "source_line"
        ]
      }
    ],
    "answerIndicesUnchanged": true,
    "unchangedOptionTexts": 30,
    "changedOptionTexts": [],
    "protectedFilesCompared": 115
  }
}
```
