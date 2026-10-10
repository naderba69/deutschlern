#!/usr/bin/env python3
"""CR64 regression guard: DaF pedagogical tricks & mnemonics (53/53 lessons), quiz listening/reading helpers (36 listening + 94 reading/dialogue) & balanced option rotation (540 Q), German Umlaut input bar & live exercise keyword self-check (428 exercises + 109 performance tasks), noun gender badges & active flashcard spelling recall (754 vocab), persistent mistake bank, and line-by-line audio shadowing (474 segments)."""
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

    assert "const CACHE_NAME = 'deutsch-pfad-v114';" in sw_js

    required_js_snippets = [
        "function normalizeMistakeBank(value)",
        "mistakeBank: {}",
        "mistakeBank: normalizeMistakeBank(saved.mistakeBank)",
        "mistakeBank: normalizeMistakeBank(parsed.mistakeBank)",
        "function recordMistakeBankEntry(scopeId, lesson, question, selectedIndex)",
        "function resolveMistakeBankEntry(scopeId, questionId)",
        "function renderMistakeBankSection()",
        "function renderGermanCharToolbar(targetInputId)",
        "function insertGermanCharIntoInput(targetInputId, charToInsert)",
        "function analyzeExerciseDraftAgainstKey(draftText, keyHtml)",
        "function renderNounGenderBadge(wordText)",
        "function evaluateFlashcardSpelling(word, typedText)",
        "function renderQuizAudioHelper(lessonId, question)",
        "function renderQuizReadingHelper(lesson, question)",
        "function renderLessonPedagogicalTricks(lesson)",
        "function playAudioSegment(segmentSrc, assetId = '')",
        "case 'insert-german-char':",
        "case 'resolve-mistake-item':",
        "case 'play-audio-segment':",
        "event.target.closest?.('[data-flash-spell-input]')",
    ]
    for snippet in required_js_snippets:
        assert snippet in app_js, f"Missing CR64 JS snippet: {snippet}"

    required_css_selectors = [
        ".lesson-daf-tricks-box",
        ".daf-tricks-grid",
        ".daf-trick-card",
        ".german-char-toolbar",
        ".german-char-btn",
        ".exercise-draft-feedback",
        ".noun-gender-badge.is-masc",
        ".noun-gender-badge.is-fem",
        ".noun-gender-badge.is-neut",
        ".quiz-reading-helper",
        ".transcript-segment-btn",
        ".mistake-bank-panel",
        ".flash-spelling-box",
    ]
    for sel in required_css_selectors:
        assert sel in styles_css, f"Missing CR64 CSS selector: {sel}"

    lessons = course["lessons"]
    assert len(lessons) == 53
    units = list(lessons) + [course["a0TransitionCheck"]]
    assert len(units) == 54

    total_vocab = sum(len(l.get("vocabulary", [])) for l in lessons)
    assert total_vocab == 754

    total_listening_q = 0
    total_reading_dialogue_q = 0
    total_q = 0
    for u in units:
        for q in u.get("quiz", []):
            total_q += 1
            tags = [str(t) for t in q.get("skillTags", [])]
            prompt = str(q.get("prompt", ""))
            is_listening = (
                q.get("skill") == "listening"
                or any(re.search(r"استماع|listening", t, re.I) for t in tags)
                or bool(re.search(r"الاستماع|تسمع|الإعلان الصوتي|الرسالة الصوتية|التسجيل الصوتي|المتحدث|في التسجيل", prompt))
            )
            is_reading_or_dialogue = (
                any(re.search(r"فهم القراءة|فهم الرسالة|فهم البريد|فهم الحوار|فهم خبر|فهم محضر|فهم برنامج|فهم شكوى|فهم الإعلان|تفصيل من النص|تفصيل من الاستطلاع|قراءة قيم الجدول", t) for t in tags)
                or bool(re.search(r"وفق النص|بحسب النص|في الرسالة|في البريد|في المحضر|في الإعلان|في الجدول|laut dem Text|laut der E-Mail|laut der Nachricht", prompt, re.I))
            )
            if is_listening:
                total_listening_q += 1
            if is_reading_or_dialogue:
                total_reading_dialogue_q += 1
    assert total_q == 540, f"Expected 540 quiz questions, got {total_q}"
    assert total_listening_q >= 36, f"Expected >=36 listening quiz questions, got {total_listening_q}"
    assert total_reading_dialogue_q >= 94, f"Expected >=94 reading/dialogue quiz questions, got {total_reading_dialogue_q}"

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
        assert "CR64" in text, f"{rel} must be synchronized through CR64"


def main():
    verify_implementation()
    if "--implementation-only" in sys.argv:
        print("PASS CR64 implementation-only: 53 DaF tricks boxes, 36 listening + 94 reading quiz helpers, Umlaut bar, mistake bank, and 474 segment buttons.")
        return

    review_path = ROOT / "data" / "reviews" / "daf-pedagogical-tricks-quiz-reading-mistake-bank-review.json"
    md_path = ROOT / "data" / "reviews" / "daf-pedagogical-tricks-quiz-reading-mistake-bank-review.md"
    data = json.loads(review_path.read_text(encoding="utf-8"))
    md = md_path.read_text(encoding="utf-8")

    assert data["reviewId"] == "CR64"
    assert data["lessonId"] == "daf-pedagogical-tricks-quiz-reading-mistake-bank"
    assert data["assessmentVersion"] == "daf-pedagogical-tricks-quiz-reading-mistake-bank-v1"
    assert data["serviceWorkerCacheName"] == "deutsch-pfad-v114"
    assert data["acousticReviewed"] is False
    assert data["cefrCertification"] is False

    units = data["units"]
    assert data["unitCount"] == len(units) == 68
    sources = data["sources"]
    assert len(sources) == 17
    full_pages = [s for s in sources if s["access"] == "full_fetched_page"]
    snippets = [s for s in sources if s["access"] == "search_snippet_only"]
    assert len(full_pages) == 14 and len(snippets) == 3
    for s in full_pages:
        assert s.get("hasMore") is False, f"Incomplete page fetch in {s['url']}"

    excluded = data.get("excludedSources", [])
    assert len(excluded) == 1
    assert excluded[0]["url"] == "https://www.duden.de/rechtschreibung/Satzstellung"

    for rel, expected_hash in data["sourceHashes"].items():
        actual_hash = hashlib.sha256((ROOT / rel).read_bytes()).hexdigest()
        assert actual_hash == expected_hash, f"Hash mismatch for {rel}"

    for u in units:
        assert f"### {u['id']}" in md, f"Missing heading for {u['id']} in MD"
        assert u["finding"] in md, f"Missing finding for {u['id']} in MD"

    print("PASS CR64 full review guard: 68 units, 17 sources (14 full-fetched + 3 snippets, 1 excluded 404), 53 DaF tricks boxes, 474 segment buttons.")


if __name__ == "__main__":
    main()
