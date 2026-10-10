#!/usr/bin/env python3
"""CR56 cumulative catalog, audio-register, bidi form, and 53/53 accessibility audit guard."""
import csv
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

course = json.loads((ROOT / "data/course.json").read_text(encoding="utf-8"))
lessons = {l["id"]: l for l in course["lessons"]}
gate = course["a0TransitionCheck"]
assert len(lessons) == 53

with (ROOT / "data/production-task-catalog.csv").open(encoding="utf-8-sig", newline="") as f:
    cat_rows = list(csv.DictReader(f))
assert len(cat_rows) == 1080
cat_by_id = {r["task_id"]: r for r in cat_rows}
assert cat_by_id["DL-A0-03-T05"]["status"] == "catalogued; source practice, not independently scored"
assert cat_by_id["DL-B2-03-T02"]["source_heading"] == "### تمرين 2 — أكمل الفعل الناقص أو اسم المفعول بصيغة المبني للمجهول"
assert cat_by_id["DL-B2-11-P02"]["source_exercise_number"] == "5;6;7;8"

for r in cat_rows:
    tid = r["task_id"]
    lid = r["lesson_id"]
    unit_obj = gate if lid == "a0-a1-gate" else lessons[lid]
    if "-T" in tid or (lid == "a0-a1-gate" and "-Q" in tid):
        lines = (ROOT / r["source_file"]).read_text(encoding="utf-8").splitlines()
        assert lines[int(r["source_line"]) - 1] == r["source_heading"], tid
    if "-T" in tid:
        items = unit_obj["quiz"] + unit_obj["performanceTasks"]
        actual_linked = {x["id"].split("-")[-1] for x in items if tid in x["sourceTaskIds"]}
        rep = r["current_representation"]
        mentioned = set(re.findall(r"\b([QP]\d{2})\b", rep)) | {
            m.split("-")[-1] for m in re.findall(r"DL-[A-Z0-9-]+-[QP]\d{2}", rep)
        }
        assert mentioned == actual_linked, tid
        assert "not yet structured" not in r["status"], tid

with (ROOT / "data/audio-asset-register.csv").open(encoding="utf-8-sig", newline="") as f:
    aud_rows = list(csv.DictReader(f))
assert len(aud_rows) == 217
for r in aud_rows:
    aid = r["asset_id"]
    if aid == "DL-A0-GATE-AUD-LST-01":
        assert r["source_file"] == "data/audio-playlists.json"
        continue
    sf = ROOT / r["source_file"].split(";")[0]
    text = sf.read_text(encoding="utf-8")
    lines = text.splitlines()
    for part in r["source_heading"].split(";"):
        assert part.strip() in text, aid
    nums = [int(n) for n in r["source_line"].split(";")]
    assert all(1 <= n <= len(lines) and lines[n - 1].strip() for n in nums), aid
    if r["level"] in ("A0", "A1", "A2"):
        assert "; ".join(lines[n - 1] for n in nums) == r["source_heading"], aid

app_js = (ROOT / "app.js").read_text(encoding="utf-8")
assert 'dir="auto" data-performance-response' in app_js
assert 'id="profile-name" name="name" dir="auto"' in app_js
assert app_js.count("window.scrollTo({ top: 0, behavior: 'smooth' });") >= 12

a11y_js = (ROOT / "tools/test_accessibility_audit.cjs").read_text(encoding="utf-8")
for l in course["lessons"]:
    assert f"openLesson('{l['id']}')" in a11y_js, l["id"]
assert "'A0.2-reviewed-source'" in a11y_js and "'A0.2-practical-form-fixture'" in a11y_js

sw_js = (ROOT / "service-worker.js").read_text(encoding="utf-8")
assert "const CACHE_NAME = 'deutsch-pfad-v114';" in sw_js

if "--implementation-only" in sys.argv:
    print("PASS CR56 implementation-only: 1080 catalog rows, 217 audio register rows, 53/53 lessons in a11y audit, dir='auto' forms, v105 cache.")
    sys.exit(0)

rev = json.loads((ROOT / "data/reviews/catalog-accessibility-review.json").read_text(encoding="utf-8"))
md = (ROOT / "data/reviews/catalog-accessibility-review.md").read_text(encoding="utf-8")
assert rev["batchId"] == "CR56" and rev["unitCount"] == len(rev["units"]) == 42
assert rev["catalogRowCount"] == 1080 and rev["audioRegisterRowCount"] == 217 and rev["a11yScreenStateCount"] == 231
assert not rev["acousticReviewed"] and not rev["cefrCertification"]
assert len(rev["sources"]) == 20 and sum(x["access"] == "full_fetched_page" for x in rev["sources"]) == 17
assert sum(len(x.get("chunksFetched", [])) for x in rev["sources"] if x["access"] == "full_fetched_page") == 32
for f, h in rev["sourceHashes"].items():
    assert hashlib.sha256((ROOT / f).read_bytes()).hexdigest() == h, f
for u in rev["units"]:
    assert f"### {u['id']}" in md and u["finding"] in md, u["id"]

print("PASS CR56: 42 review units, 1080 catalog rows, 217 audio register rows, 231 a11y screen states (53/53 lessons + gate), 17 full-fetched sources (32 chunks). Not language/acoustic/CEFR certification.")
