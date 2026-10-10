#!/usr/bin/env python3
"""Regression guard for CR61 (full-project-exhaustive-audit-review)."""

from __future__ import annotations

import csv
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JSON_PATH = ROOT / "data" / "reviews" / "full-project-exhaustive-audit-review.json"
MD_PATH = ROOT / "data" / "reviews" / "full-project-exhaustive-audit-review.md"


def format_inline_md(val: str) -> str:
    def _code_repl(m: re.Match[str]) -> str:
        inner = m.group(1)
        if re.search(r"[\u0600-\u06FF]", inner):
            return f'<code dir="auto">{inner}</code>'
        if inner.strip() and not re.search(r"[\u0600-\u06FF]", inner) and re.search(r"[A-Za-zÄÖÜäöüß]", inner):
            return f'<code dir="ltr" lang="de">{inner}</code>'
        return f'<code dir="ltr">{inner}</code>'

    def _bold_repl(m: re.Match[str]) -> str:
        inner = m.group(1)
        if inner.strip() and not re.search(r"[\u0600-\u06FF]", inner) and re.search(r"[A-Za-zÄÖÜäöüß]", inner):
            return f'<strong lang="de">{inner}</strong>'
        return f"<strong>{inner}</strong>"

    return re.sub(r"\*\*([^*]+)\*\*", _bold_repl, re.sub(r"`([^`]+)`", _code_repl, val))


def main() -> None:
    assert JSON_PATH.exists(), f"Missing {JSON_PATH}"
    assert MD_PATH.exists(), f"Missing {MD_PATH}"

    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    md_text = MD_PATH.read_text(encoding="utf-8")

    assert data["schemaVersion"] == 1
    assert data["batchId"] == "CR61"
    assert data["reviewSlug"] == "full-project-exhaustive-audit-review"
    assert data["unitCount"] == 68
    assert data["lessonCount"] == 53
    assert data["gateCount"] == 1
    assert data["levelViewCount"] == 5
    assert data["quizQuestionTotalCount"] == 540
    assert data["quizOptionTotalCount"] == 1622
    assert data["quizExplanationTotalCount"] == 540
    assert data["performanceTaskTotalCount"] == 109
    assert data["inlineMarkdownQuizPromptCount"] == 137
    assert data["inlineMarkdownQuizExplanationCount"] == 65
    assert data["inlineMarkdownPerformancePromptCount"] == 12
    assert data["a11yDesktopStateCount"] == 174
    assert data["a11yMobileStateCount"] == 175
    assert data["a11yTotalScreenStateCount"] == 349
    assert data["a11yViolatedRuleCount"] == 0
    assert data["a11yIncompleteRuleOccurrences"] == 0
    assert data["a11yIncompleteNodeOccurrences"] == 0
    assert data["narrowPortraitStateCount"] == 174
    assert data["narrowLandscapeStateCount"] == 174
    assert data["narrowTotalStateCount"] == 348
    assert data["narrowOverflowCount"] == 0
    assert data["curriculumAuditRows"] == 53
    assert data["curriculumAuditColumns"] == 29
    assert data["taskCatalogRows"] == 1080
    assert data["taskCatalogColumns"] == 15
    assert data["audioRegisterRows"] == 217
    assert data["audioRegisterColumns"] == 23
    assert data["serviceWorkerCacheName"] == "deutsch-pfad-v110"
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
    assert len(units) == 68
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
        audit_reader = csv.DictReader(f)
        assert len(audit_reader.fieldnames or []) == 29
        audit_rows = list(audit_reader)
    assert len(audit_rows) == 53

    for r in audit_rows:
        md_src = (ROOT / r["source_file"]).read_text(encoding="utf-8")
        m_sk = re.search(r"\*\*المهارات:\*\*\s*(.+)", md_src)
        raw_skills = m_sk.group(1).strip() if m_sk else ""
        clean_skills = re.sub(r"<br\s*/?>$", "", re.split(r"\s*·\s*\*\*الهدف:\*\*", raw_skills)[0].strip()).strip()
        assert r["declared_skills"] == clean_skills, f"declared_skills mismatch for {r['lesson_id']}"

    with (ROOT / "data" / "production-task-catalog.csv").open("r", encoding="utf-8-sig", newline="") as f:
        cat_reader = csv.DictReader(f)
        assert len(cat_reader.fieldnames or []) == 15
        cat_rows = list(cat_reader)
    assert len(cat_rows) == 1080
    lessons_by_id = {l["id"]: l for l in lessons}
    for r in cat_rows:
        tid = r["task_id"]
        lid = r["lesson_id"]
        unit_obj = gate if lid == "a0-a1-gate" else lessons_by_id[lid]
        if lid != "a0-a1-gate" and "-Q" in tid:
            item = next(x for x in unit_obj["quiz"] if x["id"] == tid)
            idx = unit_obj["quiz"].index(item)
            assert r["source_heading"] == f"quiz[{idx}] — {tid}", f"source_heading mismatch for {tid}"
        elif "-P" in tid:
            item = next(x for x in unit_obj["performanceTasks"] if x["id"] == tid)
            idx = unit_obj["performanceTasks"].index(item)
            assert r["source_heading"] == f"performanceTasks[{idx}] — {tid}", f"source_heading mismatch for {tid}"

    q_p_md, q_e_md, p_p_md = 0, 0, 0
    for u in lessons + [gate]:
        for q in u["quiz"]:
            if "**" in q["prompt"] or "`" in q["prompt"]:
                q_p_md += 1
            if "**" in q["explanation"] or "`" in q["explanation"]:
                q_e_md += 1
            for field in (q["prompt"], q["explanation"], *q["options"]):
                out = format_inline_md(field)
                assert "**" not in out and "`" not in out
        for p in u["performanceTasks"]:
            if "**" in p["prompt"] or "`" in p["prompt"]:
                p_p_md += 1
            out = format_inline_md(p["prompt"])
            assert "**" not in out and "`" not in out
    assert (q_p_md, q_e_md, p_p_md) == (137, 65, 12)

    app_js = (ROOT / "app.js").read_text(encoding="utf-8")
    for snippet in (
        "function formatInlineMarkdown(value)",
        '<p dir="auto">${formatInlineMarkdown(task.prompt)}</p>',
        '<li dir="auto"><strong>${escapeHTML(checkLabels[key])}:</strong> ${formatInlineMarkdown(detail)}</li>',
        '<h1 dir="auto"${isGermanTextSnippet(q.prompt) ? \' lang="de"\' : \'\'}>${formatInlineMarkdown(q.prompt)}</h1>',
        '<span dir="auto"${isGermanTextSnippet(q.explanation) ? \' lang="de"\' : \'\'}>${formatInlineMarkdown(q.explanation)}</span>',
        '<div><small><span lang="de">AUFGABE</span> · الأداء العملي</small><h1>طبّق ما تعلمته</h1>',
        '<section class="performance-task-rubric"><h2>معايير التحقق المحلي</h2>',
        '<h2>دروس المستوى ${escapeHTML(level.id)}</h2>',
        'return `aria-label="جدول الدرس ${tableIdx} — استخدم أسهم الاتجاه للتمرير"`;',
        '<nav class="nav-list" aria-label="أقسام التطبيق">',
    ):
        assert snippet in app_js, f"Missing snippet in app.js: {snippet}"

    css_text = (ROOT / "styles.css").read_text(encoding="utf-8")
    for snippet in (
        ".vocab-card { min-width: 0; min-height: 118px; padding: 13px; border: 1px solid #edf0e9; border-radius: 14px; background: #fdfdf9; overflow-wrap: anywhere; }",
        '.german-word { min-width: 0; color: #214f3c; font-family: Georgia, "Times New Roman", serif; font-size: 17px; font-weight: 700; direction: ltr; text-align: left; line-height: 1.35; overflow-wrap: anywhere; }',
        ".vocab-grid { grid-template-columns: minmax(0, 1fr); gap: 8px; }",
    ):
        assert snippet in css_text, f"Missing snippet in styles.css: {snippet}"

    sw_js = (ROOT / "service-worker.js").read_text(encoding="utf-8")
    assert "const CACHE_NAME = 'deutsch-pfad-v113';" in sw_js

    print("PASS: CR61 full-project exhaustive audit, 100% catalog sync, and inline Markdown assessment rendering guard verified.")


if __name__ == "__main__":
    main()
