#!/usr/bin/env python3
"""Regression checks for the full course bundle and source-backed lesson rendering."""
from __future__ import annotations

import csv
import hashlib
import html
import json
import re
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

def dialogue_headings(markdown: str) -> list[str]:
    """Count actual numbered dialogue sections/tasks, not explanatory mentions."""
    headings = re.findall(r"(?m)^#{2,3}\s+(.+)$", markdown)
    return [h.strip() for h in headings if re.match(
        r"^(?:\d+\)\s*(?:حوار|محادثة)\b|تمرين\s+\d+\s*—.*(?:حوار|محادثة|المحادثة))", h
    )]


ROOT = Path(__file__).resolve().parents[1]
COURSE = json.loads((ROOT / "data" / "course.json").read_text(encoding="utf-8"))
EXPECTED = {"A0": 5, "A1": 12, "A2": 12, "B1": 12, "B2": 12}
AUDIO_LESSON_BY_PREFIX = {
    "DL-A0-01": "a0-01-alphabet",
    "DL-A0-02": "a0-02-greetings",
    "DL-A0-03": "a0-03-numbers-personal-info",
    "DL-A0-04": "a0-04-first-sentences",
    "DL-A0-05": "a0-05-classroom-phrases",
    "DL-A0-GATE": "a0-a1-gate",
    "DL-A1-01": "a1-01-introductions-languages-hobbies",
    "DL-A1-02": "a1-02-work-family",
    "DL-A1-03": "a1-03-city-cafe-hotel",
    "DL-A1-04": "a1-04-daily-routine-time",
    "DL-A1-05": "a1-05-food-drink",
    "DL-A1-06": "a1-06-yesterday-perfekt",
    "DL-A1-07": "a1-07-travel-weather",
    "DL-A1-08": "a1-08-shopping-clothes",
    "DL-A1-09": "a1-09-work-appointments",
    "DL-A1-10": "a1-10-hobbies-health",
    "DL-A1-11": "a1-11-home-directions",
    "DL-A1-12": "a1-12-trip-invitations",
    "DL-A2-01": "a2-01-routines-abilities-experiences",
    "DL-A2-02": "a2-02-travel-comparisons",
    "DL-A2-03": "a2-03-food-nutrition-shopping",
    "DL-A2-04": "a2-04-office-phone-appointments",
    "DL-A2-05": "a2-05-training-routine-wenn",
    "DL-A2-06": "a2-06-family-happiness-gifts",
    "DL-A2-07": "a2-07-language-learning-travel-purpose",
    "DL-A2-08": "a2-08-media-news-passive",
    "DL-A2-09": "a2-09-products-technology-complaints",
    "DL-A2-10": "a2-10-sports-health-feelings-weil",
    "DL-A2-11": "a2-11-housing-neighborhood-wohin",
    "DL-A2-12": "a2-12-holidays-festivals-culture",
    "DL-B1-01": "b1-01-daily-life-hobbies-experiences",
    "DL-B1-02": "b1-02-food-habits-obwohl",
    "DL-B1-03": "b1-03-work-communication-konjunktiv",
    "DL-B1-04": "b1-04-continuing-education-damit",
    "DL-B1-05": "b1-05-cities-relative-clauses",
    "DL-B1-06": "b1-06-health-fitness-advice",
    "DL-B1-07": "b1-07-lifestyles-customs-cultures",
    "DL-B1-08": "b1-08-consumption-advertising-je-desto",
    "DL-B1-09": "b1-09-travel-transport-environment",
    "DL-B1-10": "b1-10-media-news-formal-communication",
    "DL-B1-11": "b1-11-history-politics-passive-past",
    "DL-B1-12": "b1-12-innovation-research-future",
    "DL-B2-01": "b2-01-time-management-habits-reading",
    "DL-B2-02": "b2-02-career-formal-communication-konjunktiv1",
    "DL-B2-03": "b2-03-consumption-environment-passive-modal",
    "DL-B2-04": "b2-04-cities-housing-participles",
    "DL-B2-05": "b2-05-health-fitness-medical-information",
    "DL-B2-06": "b2-06-study-applications-verb-noun-phrases",
    "DL-B2-07": "b2-07-travel-experiences-prepositional-relatives",
    "DL-B2-08": "b2-08-food-nutrition-data-passives",
    "DL-B2-09": "b2-09-business-marketing-employment-prepositions",
    "DL-B2-10": "b2-10-wishes-probabilities-technology-konjunktiv2-past",
    "DL-B2-11": "b2-11-humans-nature-environment-nominalization",
    "DL-B2-12": "b2-12-leisure-media-reported-speech",
}
VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


class BalanceChecker(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.stack: list[str] = []
        self.errors: list[str] = []

    def handle_starttag(self, tag: str, attrs) -> None:
        attributes = dict(attrs)
        if tag == "div" and "lesson-table-wrap" in attributes.get("class", "").split():
            if attributes.get("tabindex") != "0" or attributes.get("role") != "region" or not attributes.get("aria-label"):
                self.errors.append("lesson table scroll region needs tabindex=0, role=region and an accessible name")
        if tag not in VOID_TAGS:
            self.stack.append(tag)

    def handle_endtag(self, tag: str) -> None:
        if tag in VOID_TAGS:
            return
        if not self.stack:
            self.errors.append(f"unexpected closing tag </{tag}>")
        elif self.stack[-1] == tag:
            self.stack.pop()
        elif tag in self.stack:
            self.errors.append(f"misnested closing tag </{tag}>; expected </{self.stack[-1]}>")
            self.stack = self.stack[: self.stack.index(tag)]
        else:
            self.errors.append(f"closing tag </{tag}> has no opener")


def plain_text(fragment: str) -> str:
    return html.unescape(re.sub(r"<[^>]*>", "", fragment))


def source_files() -> dict[str, Path]:
    output: dict[str, Path] = {}
    for level in EXPECTED:
        for path in sorted((ROOT / "content" / level).glob("lesson-*.md")):
            if level == "A0" and path.name in {"lesson-01-overview.md", "lesson-06-placement-check.md"}:
                continue
            output[path.relative_to(ROOT).as_posix()] = path
    return output


def mp3_duration_seconds(path: Path) -> float:
    data = path.read_bytes()
    offset = 0
    if data[:3] == b"ID3":
        assert len(data) >= 10, f"Truncated ID3 header: {path}"
        size_bytes = data[6:10]
        tag_size = sum((size_bytes[index] & 0x7F) << (7 * (3 - index)) for index in range(4))
        offset = 10 + tag_size
    base_rates = [44100, 48000, 32000]
    mpeg1_layer3_bitrates = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 0]
    mpeg2_layer3_bitrates = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, 0]
    frames = 0
    duration = 0.0
    while offset + 4 <= len(data):
        header = int.from_bytes(data[offset : offset + 4], "big")
        if (header >> 21) != 0x7FF:
            break
        version = (header >> 19) & 0b11
        layer = (header >> 17) & 0b11
        bitrate_index = (header >> 12) & 0b1111
        sample_rate_index = (header >> 10) & 0b11
        padding = (header >> 9) & 1
        if version == 0b01 or layer != 0b01 or sample_rate_index == 0b11 or bitrate_index in {0, 15}:
            break
        bitrates = mpeg1_layer3_bitrates if version == 0b11 else mpeg2_layer3_bitrates
        bitrate = bitrates[bitrate_index]
        divisor = 1 if version == 0b11 else 2 if version == 0b10 else 4
        sample_rate = base_rates[sample_rate_index] // divisor
        frame_size = (144 if version == 0b11 else 72) * bitrate * 1000 // sample_rate + padding
        if frame_size <= 4 or offset + frame_size > len(data):
            break
        frames += 1
        duration += (1152 if version == 0b11 else 576) / sample_rate
        offset += frame_size
    assert frames > 0 and duration > 0, f"No valid MPEG Layer III audio frames found: {path}"
    assert offset == len(data), f"Unexpected/truncated data after MP3 frames: {path}"
    return duration


def validate_assessment_items(questions, performance_tasks, assessment, label, task_goals, item_registry):
    assert isinstance(questions, list), f"Invalid assessment items: {label}"
    assert isinstance(performance_tasks, list), f"Invalid performance tasks: {label}"
    objectives = set(assessment.get("objectiveIds", []))
    covered: set[str] = set()
    question_covered: set[str] = set()
    required_evidence = assessment.get("performanceEvidenceRequired")
    implemented_evidence = assessment.get("performanceEvidenceImplemented")
    assert isinstance(required_evidence, bool) and isinstance(implemented_evidence, bool), f"Performance-evidence readiness must be explicit: {label}"
    question_ids: set[str] = set()
    answer_positions: set[int] = set()
    for question in questions:
        assert isinstance(question, dict), f"Assessment item must be an object: {label}"
        question_id = question.get("id")
        assert isinstance(question_id, str) and question_id and question_id not in question_ids, f"Missing/duplicate question ID: {label}"
        question_ids.add(question_id)
        assert question_id not in item_registry, f"Assessment item ID is reused: {question_id}"
        item_registry.add(question_id)
        assert question_id in task_goals, f"Assessment question ID is missing from the task catalog: {question_id}"
        assert question.get("prompt") and isinstance(question.get("options"), list) and len(question["options"]) >= 2, f"Invalid assessment question: {label}"
        assert all(isinstance(option, str) and option.strip() for option in question["options"]), f"Invalid answer option: {label}"
        assert len({option.strip().casefold() for option in question["options"]}) == len(question["options"]), f"Assessment question repeats an answer option: {label}"
        assert isinstance(question.get("answerIndex"), int) and 0 <= question["answerIndex"] < len(question["options"]), f"Invalid answer key: {label}"
        answer_positions.add(question["answerIndex"])
        assert question.get("explanation"), f"Assessment question has no explanation: {label}"
        question_objectives = set(question.get("objectiveIds", []))
        source_task_ids = question.get("sourceTaskIds", [])
        assert question_objectives and question_objectives <= objectives, f"Assessment item has invalid objective tags: {label}"
        assert question_objectives <= {task_goals[question_id]}, f"Assessment question ID is linked to a different objective: {question_id}"
        assert isinstance(source_task_ids, list) and source_task_ids and set(source_task_ids) <= task_goals.keys(), f"Assessment item references unknown source tasks: {label}"
        source_goals = {task_goals[task_id] for task_id in source_task_ids}
        assert question_objectives <= source_goals, f"Assessment item is not linked to a source goal: {label}"
        covered.update(question_objectives)
        question_covered.update(question_objectives)
    if len(questions) >= 5:
        assert len(answer_positions) >= 2, f"Correct answer positions are not varied enough: {label}"
    performance_ids: set[str] = set()
    for task in performance_tasks:
        assert isinstance(task, dict), f"Performance task must be an object: {label}"
        task_id = task.get("id")
        assert isinstance(task_id, str) and task_id and task_id not in performance_ids, f"Missing/duplicate performance task ID: {label}"
        performance_ids.add(task_id)
        assert task_id not in item_registry, f"Assessment item ID is reused: {task_id}"
        item_registry.add(task_id)
        assert task_id in task_goals, f"Performance-task ID is missing from the task catalog: {task_id}"
        task_objectives = set(task.get("objectiveIds", []))
        source_task_ids = task.get("sourceTaskIds", [])
        criteria = task.get("criteria", {})
        assert task_objectives and task_objectives <= objectives, f"Invalid performance-task objective tags: {label}"
        assert task_objectives <= {task_goals[task_id]}, f"Performance-task ID is linked to a different objective: {task_id}"
        assert isinstance(source_task_ids, list) and source_task_ids and set(source_task_ids) <= task_goals.keys(), f"Performance task references unknown source tasks: {label}"
        assert task_objectives <= {task_goals[source_id] for source_id in source_task_ids}, f"Performance task is not linked to a source goal: {label}"
        assert isinstance(criteria, dict) and all(criteria.get(key) for key in ("taskCompletion", "meaningClarity", "targetSkill")), f"Performance task lacks the agreed rubric criteria: {label}"
        assert task.get("prompt") and task.get("evaluationStatus"), f"Performance task needs instructions and evaluation status: {label}"
        if assessment.get("status") == "ready" and required_evidence:
            self_check = task.get("selfCheck", {})
            assert self_check.get("method") == "local_self_check", f"Ready task has no local evaluation method: {task_id}"
            assert self_check.get("requiredChecks") == ["taskCompletion", "meaningClarity", "targetSkill"], f"Ready task is missing rubric checks: {task_id}"
            assert isinstance(self_check.get("minimumResponseCharacters"), int) and self_check["minimumResponseCharacters"] >= 1, f"Ready task has no response-length check: {task_id}"
            assert self_check.get("audioRequired") is False, f"This production batch must not depend on audio: {task_id}"
            assert self_check.get("speakAloud") is ("speaking" in task.get("modality", [])), f"Ready task does not match its speaking modality: {task_id}"
        covered.update(task_objectives)
    return question_covered, covered


def main() -> None:
    lessons = COURSE.get("lessons", [])
    assert len(lessons) == sum(EXPECTED.values()) == 53, f"Expected 53 lessons; found {len(lessons)}"
    counts = Counter(lesson.get("level") for lesson in lessons)
    assert dict(counts) == EXPECTED, f"Unexpected level distribution: {dict(counts)}"
    assert len({lesson.get("id") for lesson in lessons}) == len(lessons), "Duplicate lesson IDs"
    assert "diagnostic" not in COURSE, "Placement diagnostic must not be included in the learner bundle"
    progression = COURSE.get("progression", {})
    assert progression.get("startingLevel") == "A0", "The course must start at A0"
    assert progression.get("masteryThreshold") == 80, "The mastery threshold must be 80 percent"

    task_catalog_path = ROOT / "data" / "production-task-catalog.csv"
    with task_catalog_path.open(encoding="utf-8-sig", newline="") as catalog_file:
        task_rows = list(csv.DictReader(catalog_file))
    task_goals = {row["task_id"]: row["goal_id"] for row in task_rows}
    assert len(task_goals) == len(task_rows) and task_goals, "Task catalog IDs must be unique and non-empty"

    audio_assets = COURSE.get("audioAssets")
    assert isinstance(audio_assets, list), "Audio asset manifest must be included in the course bundle"
    audio_playlist = json.loads((ROOT / "data" / "audio-playlists.json").read_text(encoding="utf-8"))
    assert audio_assets == audio_playlist.get("audioAssets"), "Course bundle audio manifest is stale; rebuild it"
    selected_audio_voice_ids = audio_playlist.get("selectedVoiceIds")
    assert (
        isinstance(selected_audio_voice_ids, list)
        and selected_audio_voice_ids
        and all(isinstance(voice_id, str) and re.fullmatch(r"voice-\d+", voice_id) for voice_id in selected_audio_voice_ids)
        and len(set(selected_audio_voice_ids)) == len(selected_audio_voice_ids)
    ), "Audio playlist must list unique, auditioned selectedVoiceIds"
    selected_audio_voice_ids = set(selected_audio_voice_ids)
    audio_register_path = ROOT / "data" / "audio-asset-register.csv"
    with audio_register_path.open(encoding="utf-8-sig", newline="") as register_file:
        audio_register_rows = list(csv.DictReader(register_file))
    audio_register = {row["asset_id"]: row for row in audio_register_rows}
    playlist_asset_ids = {asset.get("assetId") for asset in audio_assets if isinstance(asset, dict)}
    assert len(audio_register) == len(audio_register_rows) and set(audio_register) == playlist_asset_ids, "Audio register must list every playlist asset exactly once"
    audio_ids: set[str] = set()
    referenced_audio_paths: set[str] = set()
    audio_status_counts = Counter()
    ready_audio_speaker_voices: dict[str, str] = {}
    valid_audio_lessons = {lesson["id"] for lesson in lessons} | {COURSE.get("a0TransitionCheck", {}).get("id")}
    for asset in audio_assets:
        assert isinstance(asset, dict) and asset.get("assetId") and asset.get("assetId") not in audio_ids, "Missing/duplicate audio asset ID"
        audio_ids.add(asset["assetId"])
        asset_prefix = "-".join(asset["assetId"].split("-")[:3])
        expected_lesson_id = AUDIO_LESSON_BY_PREFIX.get(asset_prefix)
        assert expected_lesson_id is not None and asset.get("lessonId") == expected_lesson_id, f"Audio is assigned to the wrong lesson: {asset['assetId']}"
        assert asset.get("lessonId") in valid_audio_lessons, f"Audio references an unknown lesson: {asset['assetId']}"
        status = asset.get("status")
        assert status in {"not_generated", "partial", "generated_pending_acoustic_review", "ready"}, f"Unknown audio status: {asset['assetId']}"
        register_row = audio_register[asset["assetId"]]
        assert register_row["lesson_id"] == asset["lessonId"], f"Audio register assigns the asset to the wrong lesson: {asset['assetId']}"
        assert register_row["production_status"] == status, f"Audio register status is stale: {asset['assetId']}"
        assert register_row["transcript_policy"] == asset.get("transcriptPolicy", "offer"), f"Audio register transcript policy is stale: {asset['assetId']}"
        if "sectionHeading" in asset:
            heading = asset["sectionHeading"]
            assert isinstance(heading, str) and heading.strip(), f"Invalid inline heading: {asset['assetId']}"
            assert register_row["source_heading"] == "## " + heading, f"Inline audio heading differs from register: {asset['assetId']}"
            lesson = next(item for item in COURSE["lessons"] if item["id"] == asset["lessonId"])
            assert lesson["contentHtml"].count(f'<h2 dir="auto">{html.escape(heading)}</h2>') == 1, f"Inline audio heading missing or duplicated: {asset['assetId']}"
        registered_voice_mapping = {}
        for entry in register_row["voice_id_mapping"].split(";"):
            speaker, separator, voice_id = entry.strip().partition("=")
            if separator:
                registered_voice_mapping[speaker.strip()] = voice_id.strip()
        audio_status_counts[status] += 1
        segments = asset.get("segments")
        assert isinstance(segments, list) and segments, f"Audio asset needs at least one segment: {asset['assetId']}"
        present = 0
        present_asset_paths: set[str] = set()
        asset_audio_speaker_voices: dict[str, str] = {}
        for segment in segments:
            assert isinstance(segment, dict) and all(isinstance(segment.get(key), str) and segment[key].strip() for key in ("src", "speaker", "text", "voiceId")), f"Invalid audio segment: {asset['assetId']}"
            assert segment["voiceId"] in selected_audio_voice_ids, f"Audio uses an unselected voice: {asset['assetId']}"
            assert registered_voice_mapping.get(segment["speaker"]) == segment["voiceId"], f"Audio register voice mapping is stale: {asset['assetId']} / {segment['speaker']}"
            previous_asset_voice = asset_audio_speaker_voices.setdefault(segment["speaker"], segment["voiceId"])
            assert previous_asset_voice == segment["voiceId"], f"Speaker voice changes within an asset: {segment['speaker']}"
            if status == "ready":
                previous_ready_voice = ready_audio_speaker_voices.setdefault(segment["speaker"], segment["voiceId"])
                assert previous_ready_voice == segment["voiceId"], f"An approved speaker changes voice across assets: {segment['speaker']}"
            relative = Path(segment["src"])
            assert not relative.is_absolute() and ".." not in relative.parts and relative.suffix.lower() == ".mp3", f"Unsafe audio path: {segment['src']}"
            assert relative.stem == asset["assetId"] or relative.stem.startswith(asset["assetId"] + "-"), f"Audio file belongs to another asset: {segment['src']}"
            path = ROOT / relative
            if path.is_file():
                present += 1
                present_asset_paths.add(relative.as_posix())
                referenced_audio_paths.add(relative.as_posix())
                assert mp3_duration_seconds(path) >= 0.25, f"Audio segment is too short: {path}"
        registered_audio_paths = {path for path in register_row["generated_segment_paths"].split(";") if path}
        assert registered_audio_paths == present_asset_paths, f"Audio register file paths are stale: {asset['assetId']}"
        if status in {"ready", "generated_pending_acoustic_review"}:
            assert present == len(segments), f"Audio asset is missing segments: {asset['assetId']}"
        elif status == "partial":
            assert 0 < present < len(segments), f"Partial audio asset needs both present and missing segments: {asset['assetId']}"
        else:
            assert present == 0, f"Audio marked not_generated already has files: {asset['assetId']}"
    disk_audio_paths = {path.relative_to(ROOT).as_posix() for path in (ROOT / "assets" / "audio").glob("*.mp3")}
    assert disk_audio_paths == referenced_audio_paths, "Generated MP3 files and the audio manifest do not match"

    assessment_ready_count = 0
    assessment_draft_count = 0
    draft_question_count = 0
    assessment_item_ids: set[str] = set()
    for item in lessons:
        assessment = item.get("assessment")
        questions = item.get("quiz")
        performance_tasks = item.get("performanceTasks")
        label = item.get("id")
        assert isinstance(assessment, dict), f"Missing assessment metadata: {label}"
        assert assessment.get("minimumScore") == 80, f"Wrong mastery threshold: {label}"
        status = assessment.get("status")
        assert status in {"ready", "draft", "not_ready"}, f"Unknown assessment status: {label}"
        if label == "a0-01-alphabet":
            assert assessment.get("performanceEvidenceRequired") is True, "A0.1 must require practical evidence, not multiple-choice alone"
        question_covered, covered = validate_assessment_items(questions, performance_tasks, assessment, label, task_goals, assessment_item_ids)
        draft_question_count += len(questions)
        if status in {"ready", "draft"}:
            assert assessment.get("version"), f"Assessment has no version: {label}"
            assert isinstance(assessment.get("minimumItems"), int) and assessment["minimumItems"] > 0, f"Assessment has no minimum item count: {label}"
            assert len(questions) >= assessment["minimumItems"], f"Assessment has fewer questions than its minimum: {label}"
            assert set(assessment.get("objectiveIds", [])) <= covered, f"Assessment does not cover all declared goals: {label}"
        if status == "ready":
            assessment_ready_count += 1
            assert assessment.get("goalCriteriaVerified") is True, f"Ready assessment lacks goal review: {label}"
            assert set(assessment.get("objectiveIds", [])) == question_covered, f"Ready assessment questions do not cover all lesson goals: {label}"
            if assessment["performanceEvidenceRequired"]:
                assert assessment["performanceEvidenceImplemented"] is True, f"Ready assessment lacks implemented performance evidence: {label}"
                assert performance_tasks and all(task.get("evaluationStatus") == "ready" for task in performance_tasks), f"Ready assessment has unfinished performance tasks: {label}"
        elif status == "draft":
            assessment_draft_count += 1
            assert assessment.get("goalCriteriaVerified") is False, f"Draft assessment cannot claim verified goals: {label}"

    sources = source_files()
    assert len(sources) == 53, f"Expected 53 Markdown lesson files; found {len(sources)}"
    indexed = {lesson.get("sourceFile"): lesson for lesson in lessons}
    assert set(indexed) == set(sources), "Generated lesson/source files do not match"

    total_exercises = 0
    total_dialogue_sections = 0
    total_answer_keys = 0
    total_vocabulary = 0
    for source_name, path in sources.items():
        lesson = indexed[source_name]
        markdown = path.read_text(encoding="utf-8")
        rendered = lesson.get("contentHtml", "")
        assert rendered, f"No rendered content: {source_name}"
        assert "<script" not in rendered.lower(), f"Unexpected script markup: {source_name}"

        source_exercises = re.findall(r"(?m)^###\s*(?:\d+\)?[).]?\s*)?تمرين\b.*$", markdown)
        rendered_h3 = re.findall(r"<h3\b[^>]*>(.*?)</h3>", rendered, flags=re.S)
        rendered_exercises = [heading for heading in rendered_h3 if re.match(r"^\s*(?:\d+\)?[).]?\s*)?تمرين\b", plain_text(heading))]
        assert len(rendered_exercises) == len(source_exercises), (
            f"Exercise headings not fully carried into HTML for {source_name}: "
            f"{len(source_exercises)} source vs {len(rendered_exercises)} rendered"
        )
        total_exercises += len(source_exercises)

        source_dialogues = dialogue_headings(markdown)
        rendered_text = plain_text(rendered)
        for heading in source_dialogues:
            visible_heading = re.sub(r"[`*_]", "", heading).strip()
            assert visible_heading in rendered_text, f"Dialogue section heading missing from app data: {source_name}: {heading}"
        total_dialogue_sections += len(source_dialogues)

        answer_keys = rendered.count('class="answer-key"')
        assert answer_keys == 1, f"Expected one hidden/revealable answer key in {source_name}; got {answer_keys}"
        total_answer_keys += answer_keys
        total_vocabulary += len(lesson.get("vocabulary", []))

        parser = BalanceChecker()
        parser.feed(rendered)
        parser.close()
        assert not parser.errors and not parser.stack, (
            f"Unbalanced generated HTML in {source_name}: {parser.errors}; open={parser.stack}"
        )

    check = COURSE.get("a0TransitionCheck", {})
    assert check.get("sourceFile") == "content/A0/lesson-06-placement-check.md", "A0 transition test is missing"
    assert check.get("contentHtml") and 'class="answer-key"' in check["contentHtml"], "Transition-test questions or answer key missing"
    gate_assessment = check.get("assessment", {})
    assert gate_assessment.get("minimumScore") == 80, "A0-to-A1 gate must require at least 80 percent"
    assert gate_assessment.get("performanceEvidenceRequired") is True, "A0-to-A1 transition must require practical evidence"
    assert isinstance(check.get("quiz"), list), "A0-to-A1 gate questions must be structured"
    assert gate_assessment.get("status") in {"ready", "draft", "not_ready"}, "Invalid A0 gate readiness status"
    gate_question_covered, _ = validate_assessment_items(check["quiz"], check.get("performanceTasks", []), gate_assessment, "A0-A1 gate", task_goals, assessment_item_ids)
    if gate_assessment.get("status") == "ready":
        assert gate_assessment.get("goalCriteriaVerified") is True, "Ready A0 gate lacks goal review"
        assert len(check["quiz"]) >= gate_assessment.get("minimumItems", 0) > 0, "Ready A0 gate has too few questions"
        assert set(gate_assessment.get("objectiveIds", [])) == gate_question_covered, "Ready A0 gate questions do not cover all objectives"
        if gate_assessment["performanceEvidenceRequired"]:
            tasks = check.get("performanceTasks", [])
            assert gate_assessment["performanceEvidenceImplemented"] is True, "Ready A0 gate lacks implemented performance evidence"
            assert tasks and all(task.get("evaluationStatus") == "ready" for task in tasks), "Ready A0 gate has unfinished performance tasks"
    check_parser = BalanceChecker()
    check_parser.feed(check["contentHtml"])
    check_parser.close()
    assert not check_parser.errors and not check_parser.stack, "Unbalanced transition-test HTML"

    overview_text = (ROOT / "content" / "A0" / "lesson-01-overview.md").read_text(encoding="utf-8")
    for item in [l for l in lessons if l["level"] == "A0"]:
        assert item["id"] in overview_text and item["assessment"]["version"] in overview_text, (
            f"A0 overview is out of sync with {item['id']}"
        )
    assert check["id"] in overview_text and gate_assessment["version"] in overview_text, (
        "A0 overview is out of sync with A0 transition gate"
    )

    audit_csv_path = ROOT / "data" / "curriculum-file-audit.csv"
    with audit_csv_path.open(encoding="utf-8", newline="") as audit_file:
        audit_rows = list(csv.DictReader(audit_file))
    assert len(audit_rows) == len(lessons) == 53, f"Expected 53 file-audit rows; found {len(audit_rows)}"
    lessons_by_id = {item["id"]: item for item in lessons}
    assets_by_lesson: dict[str, list[dict]] = {}
    for asset in audio_assets:
        assets_by_lesson.setdefault(asset["lessonId"], []).append(asset)
    for row in audit_rows:
        lid = row["lesson_id"]
        assert lid in lessons_by_id, f"Unknown lesson in curriculum-file-audit.csv: {lid}"
        lesson_obj = lessons_by_id[lid]
        lesson_assets = assets_by_lesson.get(lid, [])
        lesson_clips = sum(len(a["segments"]) for a in lesson_assets)
        lesson_statuses = sorted(set(a["status"] for a in lesson_assets))
        expected_status = lesson_statuses[0] if len(lesson_statuses) == 1 else "|".join(lesson_statuses)
        assert row["title"] == lesson_obj["title"], f"Stale title in curriculum-file-audit.csv: {lid}"
        assert row["minutes"] == str(lesson_obj["minutes"]), f"Stale minutes in curriculum-file-audit.csv: {lid}"
        assert int(row["generated_audio_clips"]) == lesson_clips, f"Stale clip count in curriculum-file-audit.csv: {lid}"
        assert row["audio_review_status"] == expected_status, f"Stale audio status in curriculum-file-audit.csv: {lid}"
        assert row["assessment_status"] == lesson_obj["assessment"]["status"], f"Stale assessment status in curriculum-file-audit.csv: {lid}"

    assert len(task_rows) == 1080, f"Expected 1080 task catalog rows; found {len(task_rows)}"
    for row in task_rows:
        tid = row["task_id"]
        lid = row["lesson_id"]
        unit_obj = check if lid == "a0-a1-gate" else lessons_by_id.get(lid)
        assert unit_obj is not None, f"Unknown lesson_id in production-task-catalog.csv: {tid}"
        if "-T" in tid or (lid == "a0-a1-gate" and "-Q" in tid):
            source_lines = (ROOT / row["source_file"]).read_text(encoding="utf-8").splitlines()
            line_no = int(row["source_line"])
            assert 1 <= line_no <= len(source_lines) and source_lines[line_no - 1] == row["source_heading"], (
                f"Stale source_line/source_heading in production-task-catalog.csv: {tid}"
            )
        if "-T" in tid:
            items = unit_obj.get("quiz", []) + unit_obj.get("performanceTasks", [])
            actual_linked = {x["id"].split("-")[-1] for x in items if tid in x.get("sourceTaskIds", [])}
            rep = row["current_representation"]
            mentioned = set(re.findall(r"\b([QP]\d{2})\b", rep)) | {
                m.split("-")[-1] for m in re.findall(r"DL-[A-Z0-9-]+-[QP]\d{2}", rep)
            }
            assert mentioned == actual_linked, f"Stale linked items in production-task-catalog.csv: {tid}"
            assert "not yet structured" not in row["status"], f"Stale status in production-task-catalog.csv: {tid}"
        if "-Q" in tid or "-P" in tid:
            items = unit_obj.get("quiz", []) + unit_obj.get("performanceTasks", [])
            item = next((x for x in items if x["id"] == tid), None)
            assert item is not None, f"Missing assessment item for catalog row: {tid}"
            assert row["goal_id"] == ";".join(item.get("objectiveIds", [])), f"Stale goal_id in production-task-catalog.csv: {tid}"
            if lid != "a0-a1-gate":
                expected_ex = ";".join(str(int(x.split("-T")[1])) for x in item.get("sourceTaskIds", []))
                assert row["source_exercise_number"] == expected_ex, (
                    f"Stale source_exercise_number in production-task-catalog.csv: {tid}"
                )

    for row in audio_register_rows:
        aid = row["asset_id"]
        if aid == "DL-A0-GATE-AUD-LST-01":
            assert row["source_file"] == "data/audio-playlists.json", f"Unexpected source_file for {aid}"
            continue
        source_path = ROOT / row["source_file"].split(";")[0]
        source_text = source_path.read_text(encoding="utf-8")
        source_lines = source_text.splitlines()
        for heading_part in row["source_heading"].split(";"):
            assert heading_part.strip() in source_text, f"Missing source_heading in {aid}: {heading_part}"
        line_nums = [int(n) for n in row["source_line"].split(";")]
        assert all(1 <= n <= len(source_lines) and source_lines[n - 1].strip() for n in line_nums), (
            f"Invalid source_line in audio-asset-register.csv: {aid}"
        )
        if row["level"] in {"A0", "A1", "A2"}:
            assert "; ".join(source_lines[n - 1] for n in line_nums) == row["source_heading"], (
                f"Stale source_line/source_heading in audio-asset-register.csv: {aid}"
            )

    review_files = sorted((ROOT / "data" / "reviews").glob("*-review.json"))
    assert len(review_files) == 56, f"Expected 56 granular review JSON files; found {len(review_files)}"
    for review_path in review_files:
        review_data = json.loads(review_path.read_text(encoding="utf-8"))
        for tracked_rel, expected_hash in review_data.get("sourceHashes", {}).items():
            actual_hash = hashlib.sha256((ROOT / tracked_rel).read_bytes()).hexdigest()
            assert actual_hash == expected_hash, f"Stale sourceHash in {review_path.name} for {tracked_rel}"

    print(f"PASS: {len(lessons)} lessons ({dict(counts)}) match all Markdown sources.")
    print(f"PASS: {total_exercises} exercise headings and {total_dialogue_sections} dialogue sections are rendered.")
    print(f"PASS: {total_answer_keys} lesson answer keys, the A0 transition test, and {total_vocabulary} reviewable vocabulary items are present.")
    gate_task_count = len(check.get("performanceTasks", []))
    lesson_task_count = sum(len(lesson.get("performanceTasks", [])) for lesson in lessons)
    print(f"PASS: A0 is the fixed starting point; 80% mastery is enforced; {assessment_ready_count}/{len(lessons)} lesson assessments are ready, {assessment_draft_count} are draft, {draft_question_count} lesson questions and {len(check.get('quiz', []))} gate questions are preserved; gate status: {gate_assessment.get('status')}.")
    print(f"PASS: {lesson_task_count + gate_task_count} practical tasks are catalogued; {len(audio_assets)} audio assets are catalogued; {len(disk_audio_paths)} generated MP3 clips have valid audio frames; asset statuses: {dict(audio_status_counts)}.")
    print("PASS: generated HTML is balanced and contains no script tags.")


if __name__ == "__main__":
    main()
