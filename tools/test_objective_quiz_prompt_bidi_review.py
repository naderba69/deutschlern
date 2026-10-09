#!/usr/bin/env python3
"""Regression guard for CR60 (objective-quiz-prompt-bidi-review)."""

from __future__ import annotations

import csv
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JSON_PATH = ROOT / "data" / "reviews" / "objective-quiz-prompt-bidi-review.json"
MD_PATH = ROOT / "data" / "reviews" / "objective-quiz-prompt-bidi-review.md"


def is_de(s: str) -> bool:
    val = (s or "").strip()
    return bool(val) and not re.search(r"[\u0600-\u06FF]", val) and bool(re.search(r"[A-Za-zÄÖÜäöüß]", val))


def main() -> None:
    assert JSON_PATH.exists(), f"Missing {JSON_PATH}"
    assert MD_PATH.exists(), f"Missing {MD_PATH}"

    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    md_text = MD_PATH.read_text(encoding="utf-8")

    assert data["schemaVersion"] == 1
    assert data["batchId"] == "CR60"
    assert data["reviewSlug"] == "objective-quiz-prompt-bidi-review"
    assert data["unitCount"] == 60
    assert data["lessonCount"] == 53
    assert data["cleanedObjectiveLessonCount"] == 21
    assert data["quizQuestionTotalCount"] == 540
    assert data["quizPromptGermanCount"] == 26
    assert data["quizExplanationGermanCount"] == 1
    assert data["uiGermanKickerSpanCount"] == 7
    assert data["audioAssetTitleBidiCount"] == 217
    assert data["vocabTranslationBidiCount"] == 754
    assert data["a11yScreenStateCount"] == 231
    assert data["a11yViolatedRuleCount"] == 0
    assert data["a11yIncompleteRuleOccurrences"] == 0
    assert data["a11yIncompleteNodeOccurrences"] == 0
    assert data["serviceWorkerCacheName"] == "deutsch-pfad-v109"
    assert data["acousticReviewed"] is False
    assert data["cefrCertification"] is False
    assert data["excludedSources"] == []

    sources = data["sources"]
    assert len(sources) == 22
    full_pages = [s for s in sources if s["access"] == "full_fetched_page"]
    snippets = [s for s in sources if s["access"] == "search_snippet_only"]
    assert len(full_pages) == 14
    assert len(snippets) == 8
    for s in full_pages:
        assert s["chunksFetched"] == list(range(s["totalChunks"]))

    units = data["units"]
    assert len(units) == 60
    for u in units:
        assert u["status"] == "reviewed_synced"
        assert u["sourceRefs"], f"Empty sourceRefs in {u['id']}"
        assert f"### {u['id']}" in md_text, f"Missing heading in Markdown report: {u['id']}"
        assert u["finding"] in md_text, f"Missing finding in Markdown report: {u['id']}"

    for rel_path, expected_hash in data["sourceHashes"].items():
        actual_hash = hashlib.sha256((ROOT / rel_path).read_bytes()).hexdigest()
        assert actual_hash == expected_hash, f"Hash mismatch for {rel_path}: {actual_hash} != {expected_hash}"

    course = json.loads((ROOT / "data" / "course.json").read_text(encoding="utf-8"))
    lessons = course["lessons"]
    gate = course["a0TransitionCheck"]
    assert len(lessons) == 53

    with (ROOT / "data" / "curriculum-file-audit.csv").open("r", encoding="utf-8-sig", newline="") as f:
        audit_rows = {r["lesson_id"]: r for r in csv.DictReader(f)}
    assert len(audit_rows) == 53

    for l in lessons:
        obj = l["objective"]
        assert "**" not in obj and "`" not in obj and ".؛" not in obj, f"Dirty objective in {l['id']}: {obj}"
        assert audit_rows[l["id"]]["source_objective"] == obj, f"Audit source_objective mismatch for {l['id']}"

    all_units = lessons + [gate]
    all_questions = [q for u in all_units for q in u.get("quiz", [])]
    assert len(all_questions) == 540
    de_prompts = [q for q in all_questions if is_de(q.get("prompt", ""))]
    de_exps = [q for q in all_questions if is_de(q.get("explanation", ""))]
    assert len(de_prompts) == 26
    assert len(de_exps) == 1
    assert de_exps[0]["id"] == "DL-A2-08-Q07"

    app_js = (ROOT / "app.js").read_text(encoding="utf-8")
    for snippet in (
        '<small><span lang="de">AUFGABE</span> · الأداء العملي</small>',
        '<small><span lang="de">TAGESPLAN</span> · خطة مرنة</small>',
        '<span><span lang="de">Deutsch</span> على مقاسك.</span>',
        '<span><span lang="de">WORTSCHATZ</span> · 01</span>',
        '<small><span lang="de">HÖREN</span> · الاستماع</small>',
        '<small><span lang="de">WORTSCHATZ</span> · بطاقات المراجعة</small>',
        '<small><span lang="de">LEKTION</span> · الدرس الكامل</small>',
        '<h1 dir="auto"${isGermanTextSnippet(q.prompt) ? \' lang="de"\' : \'\'}>${escapeHTML(q.prompt)}</h1>',
        '<span dir="auto"${isGermanTextSnippet(q.explanation) ? \' lang="de"\' : \'\'}>${escapeHTML(q.explanation)}</span>',
        '<div class="audio-asset-title"><strong dir="auto">${escapeHTML(asset.title)}</strong>',
        '<h1 dir="auto">${escapeHTML(lesson.title)}</h1><p dir="auto">${escapeHTML(lesson.objective)}</p>',
        '<div class="word-translation" dir="auto">${escapeHTML(word.translation)}</div>',
        '<div class="flash-translation" dir="auto">${translation}</div>',
    ):
        assert snippet in app_js, f"Missing snippet in app.js: {snippet}"

    sw_js = (ROOT / "service-worker.js").read_text(encoding="utf-8")
    assert "const CACHE_NAME = 'deutsch-pfad-v109';" in sw_js

    print("PASS: CR60 objective, quiz prompt/explanation lang=de, UI German kickers, and bidi review guard verified.")


if __name__ == "__main__":
    main()
