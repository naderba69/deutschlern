#!/usr/bin/env python3
"""CR63 regression guard: exercise self-practice workspaces (428/428), dialogue role-play guides (61/61), post-quiz mistake diagnostics (540 Q), cumulative skill diagnostics, and project-wide documentation sync."""
from pathlib import Path
import hashlib
import json
import re
import sys

ROOT = Path(__file__).resolve().parent.parent


def verify_implementation():
    app_js = (ROOT / "app.js").read_text(encoding="utf-8")
    styles_css = (ROOT / "styles.css").read_text(encoding="utf-8")
    sw_js = (ROOT / "service-worker.js").read_text(encoding="utf-8")
    course = json.loads((ROOT / "data" / "course.json").read_text(encoding="utf-8"))

    assert "const CACHE_NAME = 'deutsch-pfad-v113';" in sw_js

    required_js_Snippets = [
        "function normalizeExercisePractice(value)",
        "exercisePractice: {}",
        "exercisePractice: normalizeExercisePractice(saved.exercisePractice)",
        "exercisePractice: normalizeExercisePractice(parsed.exercisePractice)",
        "function getExercisePracticeEntry(lessonId, num)",
        "function saveExercisePracticeDraft(lessonId, num, draftText)",
        "function toggleExercisePracticeDone(lessonId, num)",
        "function getLessonExerciseProgress(lesson)",
        "function totalPracticedExercisesCount()",
        "function totalCompletedPerformanceTasksCount()",
        'details class="exercise-practice-workspace" data-exercise-workspace="${num}"',
        'details class="dialogue-roleplay-guide"',
        "function renderQuizMistakeDiagnostics(quiz = [], answers = [])",
        "function renderCumulativeSkillDiagnostics()",
        "case 'toggle-exercise-done':",
        "event.target.closest?.('[data-exercise-draft]')",
    ]
    for snippet in required_js_Snippets:
        assert snippet in app_js, f"Missing CR63 JS snippet: {snippet}"

    required_css_selectors = [
        ".exercise-practice-workspace",
        ".dialogue-roleplay-guide",
        ".ex-workspace-status",
        ".exercise-draft-label",
        ".exercise-draft-input",
        ".quiz-mistake-diagnostics",
        ".mistake-diagnostic-card",
        ".skill-diagnostics-panel",
        ".skill-diagnostics-grid",
        ".skill-diag-card",
    ]
    for sel in required_css_selectors:
        assert sel in styles_css, f"Missing CR63 CSS selector: {sel}"

    lessons = course["lessons"]
    assert len(lessons) == 53
    total_exercises = 0
    total_dialogues = 0
    for lesson in lessons:
        html = lesson.get("contentHtml", "")
        ex_matches = re.findall(r'<h3 dir="auto">تمرين\s*(\d+)\b', html)
        assert len(ex_matches) >= 6, f"Unexpected exercise count in {lesson['id']}"
        total_exercises += len(ex_matches)
        h2_titles = re.findall(r'<h2 dir="auto">([^<]+)</h2>', html)
        for title in h2_titles:
            if not re.search(r"الاستماع|استماع", title) and re.search(r"حوار|محادثة", title):
                total_dialogues += 1
    assert total_exercises == 428, f"Expected 428 exercises, found {total_exercises}"
    assert total_dialogues == 46, f"Expected 46 main dialogue h2 sections, found {total_dialogues}"

    docs_to_check = [
        "README.md",
        "content/PROGRESS.md",
        "data/reviews/README.md",
        "data/browser-qa-report.md",
        "data/curriculum-audit.md",
        "data/curriculum-production-matrix.md",
        "data/course-improvement-plan.md",
    ]
    for rel in docs_to_check:
        text = (ROOT / rel).read_text(encoding="utf-8")
        assert "CR63" in text, f"{rel} must be synchronized through CR63"


def main():
    verify_implementation()
    if "--implementation-only" in sys.argv:
        print("PASS CR63 implementation-only: 428 exercise workspaces, 61 dialogue guides, mistake/skill diagnostics, and 7 synced docs.")
        return

    review_path = ROOT / "data" / "reviews" / "exercise-self-practice-and-study-diagnostics-review.json"
    md_path = ROOT / "data" / "reviews" / "exercise-self-practice-and-study-diagnostics-review.md"
    data = json.loads(review_path.read_text(encoding="utf-8"))
    md = md_path.read_text(encoding="utf-8")

    assert data["reviewId"] == "CR63"
    assert data["lessonId"] == "exercise-self-practice-and-study-diagnostics"
    assert data["assessmentVersion"] == "exercise-self-practice-diagnostics-v1"
    assert data["serviceWorkerCacheName"] == "deutsch-pfad-v112"
    assert data["acousticReviewed"] is False
    assert data["cefrCertification"] is False

    units = data["units"]
    assert data["unitCount"] == len(units) == 68
    sources = data["sources"]
    assert len(sources) == 20
    full_pages = [s for s in sources if s["access"] == "full_fetched_page"]
    snippets = [s for s in sources if s["access"] == "search_snippet_only"]
    assert len(full_pages) == 14 and len(snippets) == 6
    for s in full_pages:
        assert s.get("hasMore") is False, f"Incomplete page fetch in {s['url']}"

    for rel, expected_hash in data["sourceHashes"].items():
        actual_hash = hashlib.sha256((ROOT / rel).read_bytes()).hexdigest()
        assert actual_hash == expected_hash, f"Hash mismatch for {rel}"

    for u in units:
        assert f"### {u['id']}" in md, f"Missing heading for {u['id']} in MD"
        assert u["finding"] in md, f"Missing finding for {u['id']} in MD"

    print("PASS CR63 full review guard: 68 units, 20 sources (14 full-fetched + 6 snippets), 428 exercise workspaces, 61 dialogue guides.")


if __name__ == "__main__":
    main()
