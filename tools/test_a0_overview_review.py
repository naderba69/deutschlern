#!/usr/bin/env python3
from pathlib import Path
import csv, hashlib, json, re, sys

overview = Path("content/A0/lesson-01-overview.md").read_text(encoding="utf-8")
source_plan = Path("data/source-plan.md").read_text(encoding="utf-8")
matrix = Path("data/curriculum-production-matrix.md").read_text(encoding="utf-8")
audit_md = Path("data/curriculum-audit.md").read_text(encoding="utf-8")
audit_rows = list(csv.DictReader(Path("data/curriculum-file-audit.csv").open(encoding="utf-8")))
course = json.loads(Path("data/course.json").read_text(encoding="utf-8"))
playlists = json.loads(Path("data/audio-playlists.json").read_text(encoding="utf-8"))["audioAssets"]

for snippet in [
    "# A0 — وصف المستوى وأهدافه",
    "حروف الإمالة الثلاثة (`Ä ä, Ö ö, Ü ü`) وحرف `Eszett` (`ß / ẞ`",
    "الأعداد الأساسية `0–20`",
    "تبقى الأعداد المركّبة `21–100` توسعة تعرّف اختيارية",
    "1. **A0.1 — الحروف والأصوات الألمانية** (`a0-01-alphabet` · التقييم `a0-01-v2`",
    "2. **A0.2 — التحية والتعارف** (`a0-02-greetings` · التقييم `a0-02-v2`",
    "3. **A0.3 — الأرقام والبيانات الشخصية** (`a0-03-numbers-personal-info` · التقييم `a0-03-v3`",
    "4. **A0.4 — الضمائر وأول جمل بـ `sein` و`haben`** (`a0-04-first-sentences` · التقييم `a0-04-v2`",
    "5. **A0.5 — عبارات الصف وطلب المساعدة** (`a0-05-classroom-phrases` · التقييم `a0-05-v2`",
    "6. **بوابة الانتقال من A0 إلى A1** (`a0-a1-gate` · التقييم `a0-gate-v2`",
    "`hide_until_first_attempt`",
]:
    assert snippet in overview, snippet

for snippet in [
    "تاريخ التحديث: 2026-10-09.",
    "`428` عنوان تمرين في الدروس + `3` مهام مصدرية صريحة في بوابة `A0` (`431` معرّف `T` في السجل)",
    "`61` قسم حوار",
    "`754` مفردة قابلة للمراجعة",
    "`1080` معرّفًا إجمالًا",
    "`b2-12-v2`",
    "`217` أصلًا صوتيًا و`474` مقطع MP3",
]:
    assert snippet in source_plan, snippet

assert "**الإصدار:** 1.5" in matrix
assert "`1080` معرّفًا فريدًا" in matrix
assert "`217` أصلًا و`474` مقطع MP3" in matrix
assert "b2-12-v1" not in matrix and "b2-12-v1" not in source_plan and "b2-12-v1" not in audit_md

assert len(audit_rows) == 53
lessons_by_id = {l["id"]: l for l in course["lessons"]}
assets_by_lesson = {}
for a in playlists:
    assets_by_lesson.setdefault(a["lessonId"], []).append(a)

for r in audit_rows:
    lid = r["lesson_id"]
    lesson = lessons_by_id[lid]
    assets = assets_by_lesson[lid]
    clips = sum(len(a["segments"]) for a in assets)
    statuses = sorted(set(a["status"] for a in assets))
    status_str = statuses[0] if len(statuses) == 1 else "|".join(statuses)
    assert r["title"] == lesson["title"], lid
    assert r["minutes"] == str(lesson["minutes"]), lid
    assert int(r["generated_audio_clips"]) == clips, lid
    assert r["audio_review_status"] == status_str, lid
    assert r["assessment_status"] == "ready", lid
    assert "v1" not in r["audit_note"], lid

assert sum(int(r["exercise_count"]) for r in audit_rows) == 428
assert sum(int(r["dialogue_section_count"]) for r in audit_rows) == 61
assert sum(int(r["generated_audio_clips"]) for r in audit_rows) == 473

if "--implementation-only" in sys.argv:
    print("PASS A0 overview & cross-course audit implementation-only: 53 audit rows, 474 clips, v1.5 matrix.")
    sys.exit(0)

r = json.loads(Path("data/reviews/a0-overview-review.json").read_text(encoding="utf-8"))
md = Path("data/reviews/a0-overview-review.md").read_text(encoding="utf-8")
U = r["units"]
assert r["lessonId"] == "a0-01-overview" and r["assessmentVersion"] == "a0-overview-audit-v2"
assert r["unitCount"] == len(U) == 12 and not r["acousticReviewed"] and not r["cefrCertification"]
assert len(r["sources"]) == 25 and sum(x["access"] == "full_fetched_page" for x in r["sources"]) == 25
assert len(r["excludedSources"]) == 1
for f, h in r["sourceHashes"].items():
    assert hashlib.sha256(Path(f).read_bytes()).hexdigest() == h, f
for u in U:
    assert f"### {u['id']}" in md and u["finding"] in md, u["id"]
print("PASS A0 overview & cumulative audit review: 12 units, 25 full-fetched sources, 53 synced CSV rows.")
