#!/usr/bin/env python3
"""CR58 cumulative inline code lang/bidi, quiz option lang='de', feedback/rubric dir='auto', and zero-incomplete axe audit guard."""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

course = json.loads((ROOT / "data/course.json").read_text(encoding="utf-8"))
lessons = course["lessons"]
assert len(lessons) == 53

de_codes = sum(len(re.findall(r'<code dir="ltr" lang="de">.*?</code>', l.get("contentHtml", ""))) for l in lessons)
ar_codes = sum(len(re.findall(r'<code dir="auto">.*?</code>', l.get("contentHtml", ""))) for l in lessons)
num_codes = sum(len(re.findall(r'<code dir="ltr">.*?</code>', l.get("contentHtml", ""))) for l in lessons)
assert (de_codes, ar_codes, num_codes) == (910, 2, 14)

for l in lessons:
    assert not re.search(r"</strong>\s*→\s*<strong>", l.get("contentHtml", "")), l["id"]

all_qs = [q for l in lessons for q in l.get("quiz", [])] + course["a0TransitionCheck"]["quiz"]
assert len(all_qs) == 540
all_opts = [o for q in all_qs for o in q.get("options", [])]
assert len(all_opts) == 1622
de_opts = [
    o for o in all_opts
    if o.strip() and not re.search(r"[\u0600-\u06FF]", o) and re.search(r"[A-Za-zÄÖÜäöüß]", o)
]
assert len(de_opts) == 1070

all_ptasks = [p for l in lessons for p in l.get("performanceTasks", [])] + course["a0TransitionCheck"]["performanceTasks"]
assert len(all_ptasks) == 109
assert sum(len(p.get("criteria", {})) for p in all_ptasks) == 327

app_js = (ROOT / "app.js").read_text(encoding="utf-8")
for snippet in (
    "function isGermanTextSnippet(text)",
    'isGermanTextSnippet(option) ? \' lang="de"\' : \'\'',
    'class="quiz-feedback ${isCorrect ? \'good\' : \'try-again\'}" dir="auto"',
    '<p dir="auto">${escapeHTML(task.prompt)}</p>',
    '<li dir="auto"><strong>${escapeHTML(checkLabels[key])}:</strong>',
    '<span class="hero-spark one"></span><span class="hero-spark two"></span>',
    '<div class="art-levels" dir="ltr"><span>A0 → B2</span></div>',
):
    assert snippet in app_js, snippet

styles_css = (ROOT / "styles.css").read_text(encoding="utf-8")
assert "overflow-x: hidden; overflow-y: auto;" in styles_css
assert ".quiz-feedback {" in styles_css and "unicode-bidi: plaintext;" in styles_css

sw_js = (ROOT / "service-worker.js").read_text(encoding="utf-8")
assert "const CACHE_NAME = 'deutsch-pfad-v109';" in sw_js

a11y_js = (ROOT / "tools/test_accessibility_audit.cjs").read_text(encoding="utf-8")
assert "assert.deepEqual(incompletes, [], 'automated accessibility incomplete checks; set A11Y_REPORT for node details');" in a11y_js

if "--implementation-only" in sys.argv:
    print("PASS CR58 implementation-only: 926 inline code spans (910 lang='de', 2 dir='auto', 14 numeric), 1070/1622 German quiz options with lang='de', dir='auto' feedback & rubrics, 0 axe incomplete checks, v107 cache.")
    sys.exit(0)

rev = json.loads((ROOT / "data/reviews/code-quiz-a11y-review.json").read_text(encoding="utf-8"))
md = (ROOT / "data/reviews/code-quiz-a11y-review.md").read_text(encoding="utf-8")
assert rev["batchId"] == "CR58" and rev["unitCount"] == len(rev["units"]) == 62
assert (rev["inlineCodeGermanCount"], rev["inlineCodeArabicCount"], rev["inlineCodeNumericCount"]) == (910, 2, 14)
assert (rev["quizOptionTotalCount"], rev["quizOptionGermanCount"], rev["quizOptionArabicOrMixedCount"]) == (1622, 1070, 552)
assert rev["a11yScreenStateCount"] == 231 and rev["a11yViolatedRuleCount"] == 0
assert rev["a11yIncompleteRuleOccurrences"] == 0 and rev["a11yIncompleteNodeOccurrences"] == 0
assert not rev["acousticReviewed"] and not rev["cefrCertification"]
assert len(rev["sources"]) == 18 and sum(x["access"] == "full_fetched_page" for x in rev["sources"]) == 14
assert sum(len(x.get("chunksFetched", [])) for x in rev["sources"] if x["access"] == "full_fetched_page") == 17
assert len(rev["excludedSources"]) == 2
for f, h in rev["sourceHashes"].items():
    assert hashlib.sha256((ROOT / f).read_bytes()).hexdigest() == h, f
for u in rev["units"]:
    assert f"### {u['id']}" in md and u["finding"] in md, u["id"]

print("PASS CR58: 62 review units, 910/926 German <code> spans, 1070/1622 German quiz options with lang='de', 231 a11y screen states (0 violations, 0 incomplete), 14 full-fetched sources (17 chunks). Not language/acoustic/CEFR certification.")
