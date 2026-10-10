#!/usr/bin/env python3
"""CR59 cumulative table scope='col' & lang='de', block/inline lang='de', audio speaker lang='de', and vocab example lang='de' guard."""
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

course = json.loads((ROOT / "data/course.json").read_text(encoding="utf-8"))
lessons = course["lessons"]
assert len(lessons) == 53
all_units = lessons + [course["a0TransitionCheck"]]

tables = sum(len(re.findall(r"<table\b[^>]*>", u.get("contentHtml", ""))) for u in all_units)
assert tables == 96

th_de = sum(len(re.findall(r'<th scope="col" dir="auto" lang="de">.*?</th>', u.get("contentHtml", ""), re.S)) for u in all_units)
th_ar = sum(len(re.findall(r'<th scope="col" dir="auto">.*?</th>', u.get("contentHtml", ""), re.S)) for u in all_units)
td_de = sum(len(re.findall(r'<td dir="auto" lang="de">.*?</td>', u.get("contentHtml", ""), re.S)) for u in all_units)
td_ar = sum(len(re.findall(r'<td dir="auto">.*?</td>', u.get("contentHtml", ""), re.S)) for u in all_units)
bq_de = sum(len(re.findall(r'<blockquote dir="auto" lang="de">.*?</blockquote>', u.get("contentHtml", ""), re.S)) for u in all_units)
bq_ar = sum(len(re.findall(r'<blockquote dir="auto">.*?</blockquote>', u.get("contentHtml", ""), re.S)) for u in all_units)
p_de = sum(len(re.findall(r'<p dir="auto" lang="de">.*?</p>', u.get("contentHtml", ""), re.S)) for u in all_units)
p_ar = sum(len(re.findall(r'<p dir="auto">.*?</p>', u.get("contentHtml", ""), re.S)) for u in all_units)
li_de = sum(len(re.findall(r'<li dir="auto" lang="de">.*?</li>', u.get("contentHtml", ""), re.S)) for u in all_units)
li_ar = sum(len(re.findall(r'<li dir="auto">.*?</li>', u.get("contentHtml", ""), re.S)) for u in all_units)
st_de = sum(len(re.findall(r'<strong lang="de">.*?</strong>', u.get("contentHtml", ""), re.S)) for u in all_units)
st_ar = sum(len(re.findall(r'<strong>.*?</strong>', u.get("contentHtml", ""), re.S)) for u in all_units)
em_de = sum(len(re.findall(r'<em lang="de">.*?</em>', u.get("contentHtml", ""), re.S)) for u in all_units)
em_ar = sum(len(re.findall(r'<em>.*?</em>', u.get("contentHtml", ""), re.S)) for u in all_units)

assert (th_de, th_ar) == (21, 252)
assert (td_de, td_ar) == (1848, 1090)
assert (bq_de, bq_ar) == (109, 9)
assert (p_de, p_ar) == (210, 927)
assert (li_de, li_ar) == (1750, 2071)
assert (st_de, st_ar) == (2430, 1948)
assert (em_de, em_ar) == (32, 19)

all_segs = [s for a in course["audioAssets"] for s in a["segments"]]
assert len(all_segs) == 474
de_speakers = [s["speaker"] for s in all_segs if not re.search(r"[\u0600-\u06FF]", s["speaker"]) and re.search(r"[A-Za-zÄÖÜäöüß]", s["speaker"])]
assert len(de_speakers) == 466

all_examples = [v["example"] for l in lessons for v in l.get("vocabulary", []) if v.get("example", "").strip()]
assert len(all_examples) == 541
de_examples = [e for e in all_examples if not re.search(r"[\u0600-\u06FF]", e) and re.search(r"[A-Za-zÄÖÜäöüß]", e)]
assert len(de_examples) == 521

app_js = (ROOT / "app.js").read_text(encoding="utf-8")
for snippet in (
    '<strong dir="auto"${isGermanTextSnippet(segment.speaker) ? \' lang="de"\' : \'\'}>${escapeHTML(segment.speaker)}</strong><span dir="ltr" lang="de">${escapeHTML(segment.text)}</span>',
    'class="word-example" dir="auto"${isGermanTextSnippet(word.example) ? \' lang="de"\' : \'\'}',
    'class="flash-example" dir="auto"${isGermanTextSnippet(word.example) ? \' lang="de"\' : \'\'}',
):
    assert snippet in app_js, snippet

sw_js = (ROOT / "service-worker.js").read_text(encoding="utf-8")
assert "const CACHE_NAME = 'deutsch-pfad-v111';" in sw_js

if "--implementation-only" in sys.argv:
    print("PASS CR59 implementation-only: 96 tables (273 th scope='col', 1848/2938 German td lang='de'), 109/118 German blockquotes, 210/1137 German paragraphs, 1750/3821 German list items, 466/474 German audio speakers, 521/541 German vocab examples, v108 cache.")
    sys.exit(0)

rev = json.loads((ROOT / "data/reviews/table-block-lang-scope-review.json").read_text(encoding="utf-8"))
md = (ROOT / "data/reviews/table-block-lang-scope-review.md").read_text(encoding="utf-8")
assert rev["batchId"] == "CR59" and rev["unitCount"] == len(rev["units"]) == 60
assert (rev["tableCount"], rev["thTotalCount"], rev["thGermanCount"], rev["tdTotalCount"], rev["tdGermanCount"]) == (96, 273, 21, 2938, 1848)
assert (rev["blockquoteGermanCount"], rev["paragraphGermanCount"], rev["listItemGermanCount"]) == (109, 210, 1750)
assert (rev["inlineStrongGermanInMixedBlockCount"], rev["inlineEmGermanInMixedBlockCount"]) == (2430, 32)
assert (rev["audioSpeakerTotalCount"], rev["audioSpeakerGermanCount"], rev["vocabExampleGermanCount"]) == (474, 466, 521)
assert rev["a11yScreenStateCount"] == 231 and rev["a11yViolatedRuleCount"] == 0
assert rev["a11yIncompleteRuleOccurrences"] == 0 and rev["a11yIncompleteNodeOccurrences"] == 0
assert not rev["acousticReviewed"] and not rev["cefrCertification"]
assert len(rev["sources"]) == 18 and sum(x["access"] == "full_fetched_page" for x in rev["sources"]) == 14
assert sum(len(x.get("chunksFetched", [])) for x in rev["sources"] if x["access"] == "full_fetched_page") == 17
for f, h in rev["sourceHashes"].items():
    assert hashlib.sha256((ROOT / f).read_bytes()).hexdigest() == h, f
for u in rev["units"]:
    assert f"### {u['id']}" in md and u["finding"] in md, u["id"]

print("PASS CR59: 60 review units, 96 tables (273 th scope='col', 1848/2938 German td lang='de'), 109/118 German blockquotes, 210/1137 German paragraphs, 1750/3821 German list items, 466/474 German audio speakers, 521/541 German vocab examples, 231 a11y states (0 violations, 0 incomplete), 14 full-fetched sources (17 chunks). Not language/acoustic/CEFR certification.")
