#!/usr/bin/env python3
"""Regression guard for CR62 (pedagogical-methodology-interactive-learning-review)."""

from __future__ import annotations

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JSON_PATH = ROOT / "data" / "reviews" / "pedagogical-methodology-interactive-learning-review.json"
MD_PATH = ROOT / "data" / "reviews" / "pedagogical-methodology-interactive-learning-review.md"


def main() -> None:
    assert JSON_PATH.exists(), f"Missing {JSON_PATH}"
    assert MD_PATH.exists(), f"Missing {MD_PATH}"

    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    md_text = MD_PATH.read_text(encoding="utf-8")

    assert data["schemaVersion"] == 1
    assert data["batchId"] == "CR62"
    assert data["reviewSlug"] == "pedagogical-methodology-interactive-learning-review"
    assert data["unitCount"] == 68
    assert data["lessonCount"] == 53
    assert data["gateCount"] == 1
    assert data["levelViewCount"] == 5
    assert data["totalExercisesCount"] == 428
    assert data["inlineExerciseSelfCheckCount"] == 428
    assert data["listeningSectionCount"] == 48
    assert data["listeningScriptGuardCount"] == 48
    assert data["lessonStagePillsCount"] == 159
    assert data["vocabTotalCount"] == 754
    assert data["vocabSourceExampleCount"] == 541
    assert data["vocabGeneratedContextHintCount"] == 213
    assert data["vocabContextualCoverageCount"] == 754
    assert data["quizQuestionTotalCount"] == 540
    assert data["quizOptionTotalCount"] == 1622
    assert data["performanceTaskTotalCount"] == 109
    assert data["performanceHeuristicCoachCount"] == 109
    assert data["performanceModelCompareCount"] == 109
    assert data["cumulativeGrammarSummaryLevels"] == 5
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
    assert data["serviceWorkerCacheName"] == "deutsch-pfad-v111"
    assert data["acousticReviewed"] is False
    assert data["cefrCertification"] is False
    assert len(data["excludedSources"]) == 2

    sources = data["sources"]
    assert len(sources) == 24
    full_pages = [s for s in sources if s["access"] == "full_fetched_page"]
    snippets = [s for s in sources if s["access"] == "search_snippet_only"]
    assert len(full_pages) == 15
    assert len(snippets) == 9
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

    # Verify all 428 exercises across 53 lessons match answer-key entries
    total_ex = 0
    total_lst_sections = 0
    total_vocab = 0
    src_examples = 0
    for l in lessons:
        html = l["contentHtml"]
        ex_nums = [int(x) for x in re.findall(r'<h3 dir="auto">تمرين\s*(\d+)\b', html)]
        total_ex += len(ex_nums)
        ak_m = re.search(r'<details class="answer-key">(.*?)</details>', html, re.S)
        assert ak_m, f"Missing answer-key in {l['id']}"
        ak = ak_m.group(1)
        for num in ex_nums:
            m1 = re.search(rf'<li dir="auto"><strong>[^<]*تمرين\s*{num}\b[^<]*</strong>.*?</li>', ak, re.S)
            m2 = re.search(rf'<h3 dir="auto">[^<]*(?:التمرين|تمرين)\s*{num}\b[^<]*</h3>', ak, re.S)
            assert m1 or m2, f"Unmatched exercise {num} in {l['id']}"
        lst_matches = re.findall(r'<h2 dir="auto">[^<]*(?:الاستماع|استماع)[^<]*</h2>', html)
        total_lst_sections += len(lst_matches)
        for v in l.get("vocabulary", []):
            total_vocab += 1
            if (v.get("example") or "").strip():
                src_examples += 1

    assert total_ex == 428
    assert total_lst_sections == 48
    assert total_vocab == 754
    assert src_examples == 541
    assert total_vocab - src_examples == 213

    all_ptasks = [p for l in lessons for p in l.get("performanceTasks", [])] + gate["performanceTasks"]
    assert len(all_ptasks) == 109

    app_js = (ROOT / "app.js").read_text(encoding="utf-8")
    for snippet in (
        "function getLessonFocusDomains(lesson)",
        "function getLessonStageBreakdown(lesson)",
        "function getWordContextHint(word, lesson = null)",
        "function getNounArticleInfo(wordText)",
        "function renderDailyPlanAdaptiveGuide(plan)",
        "function renderLevelMasteryCheckpointPanel(level)",
        "function renderLessonStagesBar(lesson)",
        "function enhanceLessonDocumentHtml(lesson, rawHtml)",
        "function renderQuizAudioHelper(lessonId, question)",
        "function getDisplayedQuizOptionIndices(question, retryAttempt = 0)",
        "function analyzePerformanceDraft(task, responseText)",
        "function renderPerformanceTaskHeuristics(task, evidence)",
        "function renderPerformanceModelComparison(scopeKey, task, index)",
        "function buildSpiralSession(levelFilter = 'ALL')",
        "function renderSpiralReviewSection()",
        "function renderCumulativeLexiconAndGrammarSection()",
        'class="exercise-inline-key"',
        'class="listening-script-guard"',
        'class="performance-heuristic-box"',
        'class="performance-model-compare"',
        'class="flash-direction-bar"',
    ):
        assert snippet in app_js, f"Missing CR62 snippet in app.js: {snippet}"

    css_text = (ROOT / "styles.css").read_text(encoding="utf-8")
    for snippet in (
        ".daily-plan-adaptive {",
        ".level-checkpoint-panel {",
        ".lesson-stages-bar {",
        ".listening-script-guard, .exercise-inline-key, .performance-model-compare, .grammar-ref-card {",
        ".performance-heuristic-box {",
        ".spiral-review-panel, .cumulative-reference-panel {",
    ):
        assert snippet in css_text, f"Missing CR62 CSS rule in styles.css: {snippet}"

    sw_js = (ROOT / "service-worker.js").read_text(encoding="utf-8")
    assert "const CACHE_NAME = 'deutsch-pfad-v111';" in sw_js

    print("PASS: CR62 cumulative pedagogical methodology, interactive lesson flow, 754/754 contextual vocabulary, bidirectional SRS, heuristic coach, spiral review, and cumulative lexicon/grammar guard verified.")


if __name__ == "__main__":
    main()
