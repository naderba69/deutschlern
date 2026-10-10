# سجل المراجعة والإنتاج التفاعلي الشامل CR63 — مساحات الحل الذاتي للتمارين ودليل الحوارات وتشخيص الأخطاء والمهارات

- **معرّف المراجعة:** `CR63` (`exercise-self-practice-and-study-diagnostics`)
- **الإصدار:** `exercise-self-practice-diagnostics-v1` · **تاريخ المراجعة:** `2026-10-10`
- **نسخة مخزن Service Worker:** `deutsch-pfad-v112`
- **عدد وحدات الفحص والمراجعة:** `68` وحدة (`53` درسًا + بوابة `A0` + `14` وحدة معمارية وتراكمية)
- **المصادر الإلكترونية المتحقق منها:** `20` مصدرًا (`6` مقتطفات بحث `search_snippet_only` + `14` صفحة مرجعية كاملة `full_fetched_page` بـ`hasMore == false`)
- **حدود الفحص:** المراجعة السمعية البشرية لملفات MP3 الـ80 المعلقة في `B1.9–B2.12` غير مدّعاة (`acousticReviewed: false`)، ولا تُعد هذه المراجعة شهادة CEFR رسمية (`cefrCertification: false`).

## ملخص الإنتاج والترقيات المنفذة على كامل المشروع (100%)

1. **مساحات الحل والتطبيق الذاتي التفاعلية لجميع التمارين الـ`428/428` (`<details class="exercise-practice-workspace">`):** زُوّد كل تمرين في الدروس الـ`53` بحقل مسودة ألمانية معنوَن صراحةً بـ`<label for="ex-draft-...">` وفق `WCAG 2.1 Technique H44` مع حفظ محلي فوري في `state.exercisePractice` وزر تسجيل الإنجاز وعداد حي في شريط مراحل الدرس.
2. **دليل التدرب التفاعلي وتقمّص الأدوار لجميع أقسام الحوار الـ`61/61` (`<details class="dialogue-roleplay-guide">`):** أُضيف دليل منهجي من 3 خطوات (الاستماع الشامل، والترديد الجهرى `Aussprache`، وتقمّص الأدوار `Dialog`) في جميع أقسام الحوار الـ`61` عبر الدروس الـ`53`.
3. **تحليل الأخطاء وتصحيح الإجابات بعد الاختبارات (`renderQuizMistakeDiagnostics`) ولوحة مؤشرات التمكّن التراكمية (`renderCumulativeSkillDiagnostics`):** يعرض التطبيق بعد كل اختبار درس أو بوابة قائمة الأسئلة المتعثرة مع مقارنة إجابة المتعلم بالصواب والتفسير اللغوي (`Fehleranalyse & Berichtigung`)، ويعرض في صفحة المراجعة مؤشرات التمكّن الأربعة (`53` درسًا · `428` تمرينًا · `754` مفردة · `109` مهام أداء).
4. **مزامنة الوثائق التراكمية السبع:** زُومنت `README.md` و`content/PROGRESS.md` و`data/reviews/README.md` و`data/browser-qa-report.md` و`data/curriculum-audit.md` و`data/curriculum-production-matrix.md` و`data/course-improvement-plan.md` حتى `CR63`.

## سجل الوحدات المفحوصة (68 وحدة)

### CR63-L01-a0-01-alphabet
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a0-01-alphabet (7 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (0) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L02-a0-02-greetings
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a0-02-greetings (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L03-a0-03-numbers-personal-info
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a0-03-numbers-personal-info (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L04-a0-04-first-sentences
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a0-04-first-sentences (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (0) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L05-a0-05-classroom-phrases
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a0-05-classroom-phrases (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L06-a1-01-introductions-languages-hobbies
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-01-introductions-languages-hobbies (10 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (0) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L07-a1-02-work-family
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-02-work-family (9 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (0) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L08-a1-03-city-cafe-hotel
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-03-city-cafe-hotel (9 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L09-a1-04-daily-routine-time
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-04-daily-routine-time (9 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (0) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L10-a1-05-food-drink
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-05-food-drink (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L11-a1-06-yesterday-perfekt
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-06-yesterday-perfekt (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (0) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L12-a1-07-travel-weather
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-07-travel-weather (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L13-a1-08-shopping-clothes
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-08-shopping-clothes (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L14-a1-09-work-appointments
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-09-work-appointments (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L15-a1-10-hobbies-health
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-10-hobbies-health (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L16-a1-11-home-directions
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-11-home-directions (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L17-a1-12-trip-invitations
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a1-12-trip-invitations (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L18-a2-01-routines-abilities-experiences
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-01-routines-abilities-experiences (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L19-a2-02-travel-comparisons
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-02-travel-comparisons (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L20-a2-03-food-nutrition-shopping
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-03-food-nutrition-shopping (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L21-a2-04-office-phone-appointments
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-04-office-phone-appointments (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L22-a2-05-training-routine-wenn
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-05-training-routine-wenn (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L23-a2-06-family-happiness-gifts
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-06-family-happiness-gifts (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L24-a2-07-language-learning-travel-purpose
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-07-language-learning-travel-purpose (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L25-a2-08-media-news-passive
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-08-media-news-passive (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (0) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L26-a2-09-products-technology-complaints
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-09-products-technology-complaints (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L27-a2-10-sports-health-feelings-weil
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-10-sports-health-feelings-weil (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L28-a2-11-housing-neighborhood-wohin
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-11-housing-neighborhood-wohin (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L29-a2-12-holidays-festivals-culture
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس a2-12-holidays-festivals-culture (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L30-b1-01-daily-life-hobbies-experiences
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-01-daily-life-hobbies-experiences (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L31-b1-02-food-habits-obwohl
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-02-food-habits-obwohl (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L32-b1-03-work-communication-konjunktiv
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-03-work-communication-konjunktiv (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L33-b1-04-continuing-education-damit
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-04-continuing-education-damit (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L34-b1-05-cities-relative-clauses
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-05-cities-relative-clauses (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L35-b1-06-health-fitness-advice
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-06-health-fitness-advice (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L36-b1-07-lifestyles-customs-cultures
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-07-lifestyles-customs-cultures (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L37-b1-08-consumption-advertising-je-desto
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-08-consumption-advertising-je-desto (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L38-b1-09-travel-transport-environment
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-09-travel-transport-environment (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L39-b1-10-media-news-formal-communication
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-10-media-news-formal-communication (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L40-b1-11-history-politics-passive-past
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-11-history-politics-passive-past (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L41-b1-12-innovation-research-future
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b1-12-innovation-research-future (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L42-b2-01-time-management-habits-reading
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-01-time-management-habits-reading (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L43-b2-02-career-formal-communication-konjunktiv1
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-02-career-formal-communication-konjunktiv1 (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L44-b2-03-consumption-environment-passive-modal
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-03-consumption-environment-passive-modal (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L45-b2-04-cities-housing-participles
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-04-cities-housing-participles (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L46-b2-05-health-fitness-medical-information
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-05-health-fitness-medical-information (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L47-b2-06-study-applications-verb-noun-phrases
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-06-study-applications-verb-noun-phrases (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L48-b2-07-travel-experiences-prepositional-relatives
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-07-travel-experiences-prepositional-relatives (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L49-b2-08-food-nutrition-data-passives
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-08-food-nutrition-data-passives (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L50-b2-09-business-marketing-employment-prepositions
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-09-business-marketing-employment-prepositions (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L51-b2-10-wishes-probabilities-technology-konjunktiv2-past
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-10-wishes-probabilities-technology-konjunktiv2-past (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L52-b2-11-humans-nature-environment-nominalization
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-11-humans-nature-environment-nominalization (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-L53-b2-12-leisure-media-reported-speech
- **النوع:** `lesson_exercise_workspace_and_dialogue_guide` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد جميع تمارين الدرس b2-12-leisure-media-reported-speech (8 تمارين) بمساحة الحل والتطبيق الذاتي التفاعلية (<details class="exercise-practice-workspace">) مع حقل <textarea> معنوَن بـ<label for> وحفظ محلي مستمر، وأقسام الحوار (1) بدليل التدرب وتقمّص الأدوار (<details class="dialogue-roleplay-guide">)، وتشخيص أخطاء أسئلة التقييم الـ10.

### CR63-U54-a0-a1-gate
- **النوع:** `gate_quiz_mistake_diagnostics` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تم تزويد شاشة نتيجة بوابة الانتقال A0→A1 (a0-a1-gate) بتقرير تحليل الأخطاء وتصحيح الإجابات (renderQuizMistakeDiagnostics) لأسئلة البوابة الـ10 مع عرض إجابة المتعلم والصواب والتفسير اللغوي.

### CR63-U55-exercise-practice-state
- **النوع:** `state_persistence` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** إضافة normalizeExercisePractice وحفظ مسودات وحالة إنجاز جميع التمارين الـ428 في state.exercisePractice مع دعم التصدير والاستيراد الاحتياطي JSON.

### CR63-U56-exercise-workspace-dom
- **النوع:** `exercise_self_practice_ui` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** حقن <details class="exercise-practice-workspace" data-exercise-workspace="N"> قبل كل مفتاح حل فردي في جميع التمارين الـ428/428 عبر الدروس الـ53.

### CR63-U57-wcag-h44-exercise-labels
- **النوع:** `accessibility_h44` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** ربط كل حقل <textarea id="ex-draft-..."> بعنصر <label for="ex-draft-..."> صريح ومرئي وفق تقنية WCAG 2.1 Technique H44 بصفر مخالفات في axe-core.

### CR63-U58-stage-bar-exercise-counter
- **النوع:** `lesson_stage_progress` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** تحديث شريط مراحل الدرس (renderLessonStagesBar) ليعرض حيًا عدد التمارين المطبّقة من إجمالي تمارين الدرس (done/total) أثناء الكتابة أو التسجيل.

### CR63-U59-dialogue-roleplay-guides
- **النوع:** `dialogue_pedagogy` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** إضافة دليل التدرب التفاعلي وتقمّص الأدوار من 3 خطوات (<details class="dialogue-roleplay-guide">) في جميع أقسام الحوار الـ61 عبر الدروس الـ53.

### CR63-U60-quiz-mistake-diagnostics
- **النوع:** `post_quiz_fehleranalyse` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** إضافة دالة renderQuizMistakeDiagnostics(quiz, answers) لعرض تحليل الأخطاء وتصحيح الإجابات (Fehleranalyse & Berichtigung) فور انتهاء تقييم الدرس أو البوابة.

### CR63-U61-cumulative-skill-diagnostics
- **النوع:** `review_skill_diagnostics` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** إضافة لوحة مؤشرات التمكّن والتشخيص التراكمي (renderCumulativeSkillDiagnostics) في صفحة المراجعة لمتابعة 53 درسًا و428 تمرينًا و754 مفردة و109 مهام أداء.

### CR63-U62-styles-contrast-and-reflow
- **النوع:** `css_a11y_reflow` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** إضافة تنسيقات .exercise-practice-workspace و.dialogue-roleplay-guide و.quiz-mistake-diagnostics و.skill-diagnostics-panel بتباين ألوان يتجاوز 4.5:1 وصفر تجاوز أفقي عند 320px.

### CR63-U63-service-worker-v112
- **النوع:** `offline_pwa_cache` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** ترقية CACHE_NAME في service-worker.js إلى deutsch-pfad-v112 لضمان تحديث التطبيق والأنماط الجديدة دون اتصال.

### CR63-U64-browser-exhaustive-dom-check
- **النوع:** `browser_verification` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** توسيع tools/test_browser.cjs للتحقق من وجود 428 مساحة حل ذاتي للتمارين و61 دليل حوار تفاعلي و428 مفتاح حل فوري و754 مثال مفردات في DOM الحي.

### CR63-U65-axe-349-states-zero-violations
- **النوع:** `axe_exhaustive_audit` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** اجتياز فحص axe-core الشامل عبر جميع حالات الشاشة الـ349 (174 سطح مكتب + 175 جوال) بصفر مخالفات وصفر فحوص غير حاسمة.

### CR63-U66-narrow-348-states-zero-overflow
- **النوع:** `narrow_layout_audit` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** اجتياز فحص العرض الضيق الشامل عبر جميع الحالات الـ348 (174 في 320×900 + 174 في 568×320) بصفر تجاوز أفقي.

### CR63-U67-cumulative-docs-synchronization
- **النوع:** `documentation_sync` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** مزامنة الوثائق التراكمية السبع (README.md وcontent/PROGRESS.md وdata/reviews/README.md وdata/browser-qa-report.md وdata/curriculum-audit.md وdata/curriculum-production-matrix.md وdata/course-improvement-plan.md) حتى CR63.

### CR63-U68-regression-guards-63
- **النوع:** `regression_suite` · **الحكم:** `upgraded_and_verified`
- **النتيجة:** إضافة الحارس رقم 63 (tools/test_exercise_self_practice_and_study_diagnostics_review.py) ومزامنة البصمات عبر جميع ملفات المراجعة الـ63.
