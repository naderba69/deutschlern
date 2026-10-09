#!/usr/bin/env python3
"""CR57 cumulative vocabulary plural/conjugation extraction, WCAG 3.1.2 lang='de', W3C bidi dir='auto', and deterministic contrast guard."""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

course = json.loads((ROOT / "data/course.json").read_text(encoding="utf-8"))
lessons = course["lessons"]
assert len(lessons) == 53

all_vocab = [v for l in lessons for v in l.get("vocabulary", [])]
assert len(all_vocab) == 754
detailed_vocab = [v for v in all_vocab if v.get("example", "").strip()]
assert len(detailed_vocab) == 541
detailed_lessons = [l for l in lessons if any(v.get("example", "").strip() for v in l.get("vocabulary", []))]
assert len(detailed_lessons) == 45

for l in lessons:
    for idx, v in enumerate(l.get("vocabulary", []), 1):
        assert v["id"] == f"{l['id']}-word-{idx}"
        assert v["word"].strip() and v["translation"].strip()
        assert not re.search(r"[\u0600-\u06FF]", v["word"])
        assert not re.search(r"\*\*|`", v["word"] + v["translation"] + v.get("example", ""))

a1_02 = next(l for l in lessons if l["id"] == "a1-02-work-family")
assert a1_02["vocabulary"][0]["word"] == "die Familie" and a1_02["vocabulary"][0]["example"] == "die Familien"
a2_02 = next(l for l in lessons if l["id"] == "a2-02-travel-comparisons")
assert a2_02["vocabulary"][1]["word"] == "die Sehenswürdigkeit" and a2_02["vocabulary"][1]["example"] == "die Sehenswürdigkeiten"

app_js = (ROOT / "app.js").read_text(encoding="utf-8")
for snippet in (
    'class="german-word" dir="ltr" lang="de"',
    'class="flash-word" dir="ltr" lang="de"',
    'class="art-word" dir="ltr" lang="de"',
    'class="art-example" dir="ltr" lang="de"',
    '<span dir="ltr" lang="de">${escapeHTML(segment.text)}</span>',
    'class="word-example" dir="auto"',
    'class="flash-example" dir="auto"',
    "window.speechSynthesis.cancel();",
    "stopAudioPlayback();",
):
    assert snippet in app_js, snippet

styles_css = (ROOT / "styles.css").read_text(encoding="utf-8")
assert "linear-gradient" not in styles_css
assert ".hero-banner::before" not in styles_css and ".art-circle::before" not in styles_css
assert "unicode-bidi: plaintext" in styles_css

sw_js = (ROOT / "service-worker.js").read_text(encoding="utf-8")
assert "const CACHE_NAME = 'deutsch-pfad-v108';" in sw_js

if "--implementation-only" in sys.argv:
    print("PASS CR57 implementation-only: 754 vocabulary items (541 with plural/conjugation/example detail across 45 lessons), WCAG 3.1.2 lang='de' & bidi dir='auto', deterministic contrast CSS, v106 cache.")
    sys.exit(0)

rev = json.loads((ROOT / "data/reviews/vocab-contrast-bidi-review.json").read_text(encoding="utf-8"))
md = (ROOT / "data/reviews/vocab-contrast-bidi-review.md").read_text(encoding="utf-8")
assert rev["batchId"] == "CR57" and rev["unitCount"] == len(rev["units"]) == 56
assert rev["totalVocabularyCount"] == 754 and rev["detailedVocabularyCount"] == 541 and rev["detailedLessonCount"] == 45
assert rev["a11yScreenStateCount"] == 231 and rev["a11yViolatedRuleCount"] == 0
assert rev["a11yIncompleteRuleOccurrences"] == 120 and rev["a11yIncompleteNodeOccurrences"] == 266
assert not rev["acousticReviewed"] and not rev["cefrCertification"]
assert len(rev["sources"]) == 16 and sum(x["access"] == "full_fetched_page" for x in rev["sources"]) == 12
assert sum(len(x.get("chunksFetched", [])) for x in rev["sources"] if x["access"] == "full_fetched_page") == 15
for f, h in rev["sourceHashes"].items():
    assert hashlib.sha256((ROOT / f).read_bytes()).hexdigest() == h, f
for u in rev["units"]:
    assert f"### {u['id']}" in md and u["finding"] in md, u["id"]

print("PASS CR57: 56 review units, 754/541 vocabulary flashcards (45 lessons), WCAG 3.1.2 lang='de' & bidi dir='auto', 231 a11y screen states (0 violations, 120/266 incomplete), 12 full-fetched sources (15 chunks). Not language/acoustic/CEFR certification.")
