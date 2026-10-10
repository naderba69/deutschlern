#!/usr/bin/env python3
"""Build the static course data bundle from the reviewed Arabic/German lesson Markdown."""
from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE_PATH = ROOT / "data" / "course.json"
AUDIO_PLAYLIST_PATH = ROOT / "data" / "audio-playlists.json"
LEVELS = ["A0", "A1", "A2", "B1", "B2"]
A0_SUPPORT_FILES = {"lesson-01-overview.md", "lesson-06-placement-check.md"}
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


def cells(line: str) -> list[str]:
    return [cell.strip() for cell in line.strip().strip("|").split("|")]


def is_table_separator(line: str) -> bool:
    values = cells(line)
    return bool(values) and all(re.fullmatch(r":?-{3,}:?", value.replace(" ", "")) for value in values)


def safe_inline(text: str) -> str:
    """Render the small, controlled Markdown inline subset used in lesson files."""
    code_parts: list[str] = []
    link_parts: list[str] = []

    def hold_code(match: re.Match[str]) -> str:
        raw_code = match.group(1)
        escaped = html.escape(raw_code)
        if re.search(r"[\u0600-\u06FF]", raw_code):
            code_parts.append(f'<code dir="auto">{escaped}</code>')
        elif re.search(r"[A-Za-zÄÖÜäöüß]", raw_code):
            code_parts.append(f'<code dir="ltr" lang="de">{escaped}</code>')
        else:
            code_parts.append(f'<code dir="ltr">{escaped}</code>')
        return f"@@COURSECODE{len(code_parts) - 1}@@"

    text = re.sub(r"`([^`]+)`", hold_code, text)

    def hold_link(match: re.Match[str]) -> str:
        label, url = match.group(1), match.group(2)
        if not url.startswith(("https://", "http://", "mailto:")):
            return label
        link_parts.append(f'<a href="{html.escape(url, quote=True)}" target="_blank" rel="noopener noreferrer">{html.escape(label)}</a>')
        return f"@@COURSELINK{len(link_parts) - 1}@@"

    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", hold_link, text)
    text = html.escape(text, quote=False)
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<!\*)\*([^*\n]+?)\*(?!\*)", r"<em>\1</em>", text)
    text = re.sub(r"__([^_\n]+?)__", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<!_)_([^_\n]+?)_(?!_)", r"<em>\1</em>", text)
    text = re.sub(r"</strong>(\s*→\s*)<strong>", r"\1", text)
    for index, rendered in enumerate(code_parts):
        text = text.replace(f"@@COURSECODE{index}@@", rendered)
    for index, rendered in enumerate(link_parts):
        text = text.replace(f"@@COURSELINK{index}@@", rendered)
    return text


def is_german_html_fragment(fragment: str) -> bool:
    plain = html.unescape(re.sub(r"<[^>]+>", "", fragment)).strip()
    return bool(plain) and not re.search(r"[\u0600-\u06FF]", plain) and bool(re.search(r"[A-Za-zÄÖÜäöüß]", plain))


def tag_inline_german_in_mixed_block(fragment: str) -> str:
    def replace_tag(match: re.Match[str]) -> str:
        tag_name, inner = match.group(1), match.group(2)
        if is_german_html_fragment(inner):
            return f'<{tag_name} lang="de">{inner}</{tag_name}>'
        return match.group(0)

    return re.sub(r"<(strong|em)>(.*?)</\1>", replace_tag, fragment)


def render_block_tag(tag: str, inner_html: str, extra_attrs: str = "") -> str:
    if is_german_html_fragment(inner_html):
        return f'<{tag}{extra_attrs} dir="auto" lang="de">{inner_html}</{tag}>'
    return f'<{tag}{extra_attrs} dir="auto">{tag_inline_german_in_mixed_block(inner_html)}</{tag}>'


def render_table(table_lines: list[str]) -> str:
    parsed = [cells(line) for line in table_lines]
    if len(parsed) < 2:
        return ""
    separator_index = next((i for i, line in enumerate(table_lines) if is_table_separator(line)), None)
    if separator_index is None:
        body = parsed
        header = None
    else:
        header = parsed[separator_index - 1] if separator_index > 0 else None
        body = parsed[separator_index + 1 :]
    column_count = max((len(row) for row in parsed), default=0)
    if not column_count:
        return ""

    def render_row(row: list[str], tag: str) -> str:
        row = (row + [""] * column_count)[:column_count]
        extra = ' scope="col"' if tag == "th" else ""
        return "<tr>" + "".join(render_block_tag(tag, safe_inline(cell), extra) for cell in row) + "</tr>"

    parts = ['<div class="lesson-table-wrap" tabindex="0" role="region" aria-label="جدول الدرس — استخدم أسهم الاتجاه للتمرير"><table class="lesson-table">']
    if header:
        parts.append("<thead>" + render_row(header, "th") + "</thead>")
    parts.append("<tbody>")
    for row in body:
        if row and all(re.fullmatch(r":?-{3,}:?", cell.replace(" ", "")) for cell in row):
            continue
        parts.append(render_row(row, "td"))
    parts.append("</tbody></table></div>")
    return "".join(parts)


def markdown_to_html(markdown: str) -> str:
    lines = markdown.splitlines()
    out: list[str] = []
    paragraph: list[str] = []
    list_items: list[str] = []
    list_kind: str | None = None
    quote_lines: list[str] = []
    table_lines: list[str] = []
    in_answer_details = False
    skip_title = True

    def flush_paragraph() -> None:
        nonlocal paragraph
        if not paragraph:
            return
        fragments: list[str] = []
        for index, raw in enumerate(paragraph):
            hard_break = raw.endswith("  ")
            fragments.append(safe_inline(raw.rstrip()))
            if index < len(paragraph) - 1:
                fragments.append("<br>" if hard_break else " ")
        out.append(render_block_tag("p", "".join(fragments)))
        paragraph = []

    def flush_list() -> None:
        nonlocal list_items, list_kind
        if not list_items or not list_kind:
            return
        tag = "ol" if list_kind == "ol" else "ul"
        rendered = "".join(render_block_tag("li", safe_inline(item)) for item in list_items)
        out.append(f'<{tag}>{rendered}</{tag}>')
        list_items = []
        list_kind = None

    def flush_quote() -> None:
        nonlocal quote_lines
        if quote_lines:
            text = "<br>".join(safe_inline(line.strip()) for line in quote_lines)
            out.append(render_block_tag("blockquote", text))
            quote_lines = []

    def flush_table() -> None:
        nonlocal table_lines
        if table_lines:
            rendered = render_table(table_lines)
            if rendered:
                out.append(rendered)
            table_lines = []

    def flush_blocks() -> None:
        flush_paragraph()
        flush_list()
        flush_quote()
        flush_table()

    index = 0
    while index < len(lines):
        line = lines[index]
        stripped = line.strip()

        if not stripped:
            # Keep ordered/unordered lists together across Markdown blank lines.
            next_nonempty = index + 1
            while next_nonempty < len(lines) and not lines[next_nonempty].strip():
                next_nonempty += 1
            next_line = lines[next_nonempty].strip() if next_nonempty < len(lines) else ""
            next_list_kind = "ol" if re.match(r"\d+\.\s+", next_line) else "ul" if re.match(r"[-*+]\s+", next_line) else None
            if list_items and next_list_kind == list_kind:
                index = next_nonempty
                continue
            flush_blocks()
            index += 1
            continue

        heading = re.match(r"^(#{1,6})\s+(.+?)\s*#*\s*$", stripped)
        if heading:
            flush_blocks()
            level = len(heading.group(1))
            raw_heading = heading.group(2).strip()
            if in_answer_details and level <= 2:
                out.append("</div></details>")
                in_answer_details = False
            if level == 1 and skip_title:
                skip_title = False
                index += 1
                continue
            if level == 2 and "مفتاح الإجابات" in raw_heading:
                out.append('<details class="answer-key"><summary>مفتاح الإجابات</summary><div class="answer-key-body">')
                in_answer_details = True
                index += 1
                continue
            out.append(f'<h{level} dir="auto">{safe_inline(raw_heading)}</h{level}>')
            index += 1
            continue

        if re.fullmatch(r"(?:---+|\*\*\*+|___+)", stripped):
            flush_blocks()
            out.append("<hr>")
            index += 1
            continue

        if stripped.startswith("|") and stripped.endswith("|"):
            flush_paragraph()
            flush_list()
            flush_quote()
            table_lines.append(stripped)
            index += 1
            continue
        else:
            flush_table()

        if stripped.startswith(">"):
            flush_paragraph()
            flush_list()
            quote_lines.append(re.sub(r"^>\s?", "", stripped))
            index += 1
            continue
        else:
            flush_quote()

        unordered = re.match(r"^\s*[-*+]\s+(.+)$", line)
        ordered = re.match(r"^\s*\d+\.\s+(.+)$", line)
        if unordered or ordered:
            flush_paragraph()
            kind = "ul" if unordered else "ol"
            if list_kind and list_kind != kind:
                flush_list()
            list_kind = kind
            list_items.append((unordered or ordered).group(1).rstrip())
            index += 1
            continue
        flush_list()

        fenced = re.match(r"^\s*```", line)
        if fenced:
            flush_paragraph()
            index += 1
            code_lines: list[str] = []
            while index < len(lines) and not lines[index].strip().startswith("```"):
                code_lines.append(lines[index])
                index += 1
            if index < len(lines):
                index += 1
            out.append(f'<pre><code dir="ltr">{html.escape(chr(10).join(code_lines))}</code></pre>')
            continue

        paragraph.append(line)
        index += 1

    flush_blocks()
    if in_answer_details:
        out.append("</div></details>")
    return "\n".join(out)


def clean_objective_text(value: str) -> str:
    return re.sub(r"\*\*|`", "", value).strip()


def lesson_objective(markdown: str) -> str:
    for pattern in (
        r"\*\*الهدف:\*\*\s*([^\n]+)",
        r"\*\*هدف التواصل:\*\*\s*([^\n]+)",
    ):
        match = re.search(pattern, markdown)
        if match:
            value = clean_objective_text(match.group(1).split("·")[0])
            if value:
                return value
    lines = markdown.splitlines()
    for i, line in enumerate(lines):
        if re.match(r"^##\s+أستطيع أن", line.strip()):
            bullets: list[str] = []
            for candidate in lines[i + 1 :]:
                if candidate.strip().startswith("## "):
                    break
                match = re.match(r"^\s*[-*+]\s+(.+)$", candidate)
                if match:
                    bullets.append(clean_objective_text(match.group(1)))
            if bullets:
                ends_with_dot = bullets[-1].endswith(".")
                joined = "؛ ".join(item.rstrip(".؛ ").strip() for item in bullets)
                return f"{joined}." if ends_with_dot and not joined.endswith(".") else joined
    for line in lines[1:]:
        stripped = line.strip()
        if stripped and not stripped.startswith(("**", ">", "|", "#")):
            return clean_objective_text(stripped)
    return "درس ألماني شامل مع أمثلة وتمارين أصلية."


def lesson_minutes(markdown: str) -> tuple[int, str]:
    match = re.search(r"\*\*المدة:\*\*\s*(\d+)(?:\s*[–-]\s*(\d+))?\s*دقيقة", markdown)
    if not match:
        return 30, "30 دقيقة"
    start = int(match.group(1))
    end = match.group(2)
    label = f"{start}–{end} دقيقة" if end else f"{start} دقيقة"
    return start, label


def vocab_table(markdown: str, lesson_id: str) -> list[dict[str, str]]:
    lines = markdown.splitlines()
    in_first_section = False
    for index, line in enumerate(lines):
        if re.match(r"^##\s*1[)\.]?\s+", line.strip()):
            in_first_section = True
        elif line.startswith("## ") and in_first_section:
            break
        if not in_first_section or not (line.strip().startswith("|") and line.strip().endswith("|")):
            continue
        table_lines = []
        cursor = index
        while cursor < len(lines) and lines[cursor].strip().startswith("|") and lines[cursor].strip().endswith("|"):
            table_lines.append(lines[cursor].strip())
            cursor += 1
        if len(table_lines) < 3:
            continue
        header = cells(table_lines[0])
        separator_index = next((i for i, row in enumerate(table_lines) if is_table_separator(row)), None)
        if separator_index is None or separator_index == 0:
            continue
        header = cells(table_lines[separator_index - 1])
        headers_normalized = [h.replace("**", "").lower() for h in header]
        meaning_index = next((i for i, h in enumerate(headers_normalized) if "المعنى" in h or "ترجمة" in h or "translation" in h), None)
        if meaning_index is None:
            continue
        example_index = next((i for i, h in enumerate(headers_normalized) if "مثال" in h or "example" in h), None)
        if example_index is None:
            example_index = next((i for i, h in enumerate(headers_normalized) if any(k in h for k in ("الجمع", "التصريف", "ملاحظة"))), None)
        output: list[dict[str, str]] = []
        for row in table_lines[separator_index + 1 :]:
            if is_table_separator(row):
                continue
            values = cells(row)
            if not values or len(values) <= meaning_index:
                continue
            term = values[0].strip()
            translation = values[meaning_index].strip()
            if not term or not translation or term in {"—", "-"}:
                continue
            term = re.sub(r"\*\*|`", "", term).strip()
            translation = re.sub(r"\*\*|`", "", translation).strip()
            example = values[example_index].strip() if example_index is not None and example_index < len(values) else ""
            example = re.sub(r"\*\*|`", "", example).strip()
            if example in {"—", "-"}:
                example = ""
            output.append({
                "id": f"{lesson_id}-word-{len(output) + 1}",
                "word": term,
                "translation": translation,
                "example": example,
            })
        if output:
            return output
    return []


def assessment_source(path: Path) -> tuple[dict, list[dict], list[dict]]:
    default_assessment = {
        "status": "not_ready",
        "version": None,
        "minimumScore": 80,
        "minimumItems": None,
        "objectiveIds": [],
        "goalCriteriaVerified": False,
        "performanceEvidenceRequired": False,
        "performanceEvidenceImplemented": False,
    }
    assessment_path = path.with_suffix(".assessment.json")
    if not assessment_path.exists():
        return default_assessment, [], []
    try:
        source = json.loads(assessment_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise SystemExit(f"Invalid assessment JSON in {assessment_path.relative_to(ROOT)}: {error}") from error
    if not isinstance(source, dict) or source.get("schemaVersion") != 1:
        raise SystemExit(f"Assessment sidecar must use schemaVersion 1: {assessment_path.relative_to(ROOT)}")
    assessment = source.get("assessment")
    quiz = source.get("quiz", [])
    performance_tasks = source.get("performanceTasks", [])
    if not isinstance(assessment, dict) or not isinstance(quiz, list) or not isinstance(performance_tasks, list):
        raise SystemExit(f"Invalid assessment shape in {assessment_path.relative_to(ROOT)}")
    assessment = {**default_assessment, **assessment}
    if assessment.get("status") not in {"draft", "not_ready", "ready"}:
        raise SystemExit(f"Unknown assessment status in {assessment_path.relative_to(ROOT)}")
    if assessment.get("minimumScore") != 80:
        raise SystemExit(f"Assessment threshold must remain 80 in {assessment_path.relative_to(ROOT)}")
    return assessment, quiz, performance_tasks


def audio_source() -> list[dict]:
    try:
        source = json.loads(AUDIO_PLAYLIST_PATH.read_text(encoding="utf-8"))
    except json.JSONDecodeError as error:
        raise SystemExit(f"Invalid audio playlist JSON: {error}") from error
    if not isinstance(source, dict) or source.get("schemaVersion") != 1 or not isinstance(source.get("audioAssets"), list):
        raise SystemExit("Audio playlist must use schemaVersion 1 and include an audioAssets list")
    assets = source["audioAssets"]
    selected_voice_ids = source.get("selectedVoiceIds")
    if (
        not isinstance(selected_voice_ids, list)
        or not selected_voice_ids
        or any(not isinstance(voice_id, str) or not re.fullmatch(r"voice-\d+", voice_id) for voice_id in selected_voice_ids)
        or len(set(selected_voice_ids)) != len(selected_voice_ids)
    ):
        raise SystemExit("Audio playlist must list unique, auditioned selectedVoiceIds")
    selected_voice_ids = set(selected_voice_ids)
    allowed_statuses = {"not_generated", "partial", "generated_pending_acoustic_review", "ready"}
    seen_ids: set[str] = set()
    ready_speaker_voices: dict[str, str] = {}
    for asset in assets:
        if not isinstance(asset, dict) or not isinstance(asset.get("assetId"), str) or not asset["assetId"]:
            raise SystemExit("Every audio asset needs a stable assetId")
        if asset["assetId"] in seen_ids:
            raise SystemExit(f"Duplicate audio asset ID: {asset['assetId']}")
        seen_ids.add(asset["assetId"])
        asset_prefix = "-".join(asset["assetId"].split("-")[:3])
        expected_lesson_id = AUDIO_LESSON_BY_PREFIX.get(asset_prefix)
        if expected_lesson_id is None or asset.get("lessonId") != expected_lesson_id:
            raise SystemExit(f"Audio asset is assigned to the wrong lesson: {asset['assetId']} -> {asset.get('lessonId')}")
        if asset.get("status") not in allowed_statuses or not isinstance(asset.get("segments"), list) or not asset["segments"]:
            raise SystemExit(f"Invalid audio asset status or segments: {asset['assetId']}")
        if asset.get("transcriptPolicy", "offer") not in {"offer", "hide_until_first_attempt"}:
            raise SystemExit(f"Invalid transcript policy: {asset['assetId']}")
        present = 0
        asset_speaker_voices: dict[str, str] = {}
        for segment in asset["segments"]:
            if not isinstance(segment, dict) or not all(isinstance(segment.get(key), str) and segment[key].strip() for key in ("src", "speaker", "text", "voiceId")):
                raise SystemExit(f"Every audio segment needs a path, speaker, voice ID, and transcript: {asset['assetId']}")
            if segment["voiceId"] not in selected_voice_ids:
                raise SystemExit(f"Audio segment uses an unselected voice ID: {asset['assetId']}")
            previous_asset_voice = asset_speaker_voices.setdefault(segment["speaker"], segment["voiceId"])
            if previous_asset_voice != segment["voiceId"]:
                raise SystemExit(f"A speaker changes voice within an asset: {segment['speaker']}")
            if asset["status"] == "ready":
                speaker_key = f"{asset['lessonId']}:{segment['speaker']}" if segment["speaker"] in {"Verkäufer"} else segment["speaker"]
                previous_ready_voice = ready_speaker_voices.setdefault(speaker_key, segment["voiceId"])
                if previous_ready_voice != segment["voiceId"]:
                    raise SystemExit(f"An approved speaker changes voice across assets: {segment['speaker']}")
            path = Path(segment["src"])
            if path.is_absolute() or ".." in path.parts or path.suffix.lower() != ".mp3":
                raise SystemExit(f"Audio paths must be safe relative MP3 paths: {segment['src']}")
            if path.stem != asset["assetId"] and not path.stem.startswith(asset["assetId"] + "-"):
                raise SystemExit(f"Audio file does not belong to its asset ID: {segment['src']}")
            present += (ROOT / path).is_file()
        segment_count = len(asset["segments"])
        if asset["status"] in {"ready", "generated_pending_acoustic_review"} and present != segment_count:
            raise SystemExit(f"Audio asset is missing generated segments: {asset['assetId']}")
        if asset["status"] == "partial" and not 0 < present < segment_count:
            raise SystemExit(f"Partial audio asset must have both generated and missing segments: {asset['assetId']}")
        if asset["status"] == "not_generated" and present:
            raise SystemExit(f"Audio marked not_generated already contains files: {asset['assetId']}")
    return assets


def build_lesson(level: str, path: Path) -> dict:
    markdown = path.read_text(encoding="utf-8")
    assessment, quiz, performance_tasks = assessment_source(path)
    raw_title = next((line[2:].strip() for line in markdown.splitlines() if line.startswith("# ")), path.stem)
    unit_match = re.match(rf"{re.escape(level)}\.(\d+)\s*[—-]\s*(.*)", raw_title)
    title = unit_match.group(2).strip() if unit_match else raw_title
    unit_number = int(unit_match.group(1)) if unit_match else 0
    lesson_id = f"{level.lower()}-{path.stem.removeprefix('lesson-').replace('_', '-')}"
    minutes, duration_label = lesson_minutes(markdown)
    return {
        "id": lesson_id,
        "level": level,
        "unit": unit_number,
        "title": title,
        "minutes": minutes,
        "durationLabel": duration_label,
        "objective": lesson_objective(markdown),
        "sourceFile": path.relative_to(ROOT).as_posix(),
        "contentHtml": markdown_to_html(markdown),
        "vocabulary": vocab_table(markdown, lesson_id),
        "quiz": quiz,
        "assessment": assessment,
        "performanceTasks": performance_tasks,
    }


def main() -> None:
    if not COURSE_PATH.exists():
        raise SystemExit("Missing data/course.json; restore its course-level seed first.")
    current = json.loads(COURSE_PATH.read_text(encoding="utf-8"))
    lessons: list[dict] = []
    for level in LEVELS:
        folder = ROOT / "content" / level
        for path in sorted(folder.glob("lesson-*.md")):
            if level == "A0" and path.name in A0_SUPPORT_FILES:
                continue
            lessons.append(build_lesson(level, path))
    expected = 5 + 12 * 4
    if len(lessons) != expected:
        raise SystemExit(f"Expected {expected} course lessons, found {len(lessons)}")
    seen = {lesson["id"] for lesson in lessons}
    if len(seen) != len(lessons):
        raise SystemExit("Duplicate generated lesson IDs detected")
    audio_assets = audio_source()
    valid_audio_lessons = seen | {"a0-a1-gate"}
    for asset in audio_assets:
        if asset.get("lessonId") not in valid_audio_lessons:
            raise SystemExit(f"Audio asset references an unknown lesson: {asset['assetId']}")
        if "sectionHeading" in asset:
            heading = asset["sectionHeading"]
            lesson = next((item for item in lessons if item["id"] == asset["lessonId"]), None)
            if not isinstance(heading, str) or not heading.strip() or lesson is None:
                raise SystemExit(f"Invalid inline audio heading: {asset['assetId']}")
            marker = f'<h2 dir="auto">{html.escape(heading)}</h2>'
            if lesson["contentHtml"].count(marker) != 1:
                raise SystemExit(f"Inline audio heading must match one lesson section: {asset['assetId']}")
    transition_path = ROOT / "content" / "A0" / "lesson-06-placement-check.md"
    transition_markdown = transition_path.read_text(encoding="utf-8")
    transition_title = next((line[2:].strip() for line in transition_markdown.splitlines() if line.startswith("# ")), "اختبار انتقال إلى A1")
    _, transition_duration = lesson_minutes(transition_markdown)
    transition_assessment, transition_quiz, transition_tasks = assessment_source(transition_path)
    transition_assessment["performanceEvidenceRequired"] = True
    if not transition_path.with_suffix(".assessment.json").exists():
        transition_assessment["minimumItems"] = 10

    current["version"] = 3
    current.pop("diagnostic", None)
    current["progression"] = {
        "startingLevel": "A0",
        "masteryThreshold": 80,
    }
    current["lessons"] = lessons
    current["audioAssets"] = audio_assets
    current["a0TransitionCheck"] = {
        "id": "a0-a1-gate",
        "title": transition_title,
        "durationLabel": transition_duration,
        "sourceFile": transition_path.relative_to(ROOT).as_posix(),
        "contentHtml": markdown_to_html(transition_markdown),
        "quiz": transition_quiz,
        "assessment": transition_assessment,
        "performanceTasks": transition_tasks,
    }
    current["contentSource"] = "content/ Markdown lessons"
    COURSE_PATH.write_text(json.dumps(current, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Built {len(lessons)} full lessons into {COURSE_PATH.relative_to(ROOT)}")
    print(f"Bundle size: {COURSE_PATH.stat().st_size:,} bytes")


if __name__ == "__main__":
    main()
