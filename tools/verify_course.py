#!/usr/bin/env python3
"""Regression checks for the full course bundle and source-backed lesson rendering."""
from __future__ import annotations

import html
import json
import re
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COURSE = json.loads((ROOT / "data" / "course.json").read_text(encoding="utf-8"))
EXPECTED = {"A0": 5, "A1": 12, "A2": 12, "B1": 12, "B2": 12}
VOID_TAGS = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


class BalanceChecker(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.stack: list[str] = []
        self.errors: list[str] = []

    def handle_starttag(self, tag: str, attrs) -> None:
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


def main() -> None:
    lessons = COURSE.get("lessons", [])
    assert len(lessons) == sum(EXPECTED.values()) == 53, f"Expected 53 lessons; found {len(lessons)}"
    counts = Counter(lesson.get("level") for lesson in lessons)
    assert dict(counts) == EXPECTED, f"Unexpected level distribution: {dict(counts)}"
    assert len({lesson.get("id") for lesson in lessons}) == len(lessons), "Duplicate lesson IDs"

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
        rendered_exercises = [heading for heading in rendered_h3 if "تمرين" in plain_text(heading)]
        assert len(rendered_exercises) == len(source_exercises), (
            f"Exercise headings not fully carried into HTML for {source_name}: "
            f"{len(source_exercises)} source vs {len(rendered_exercises)} rendered"
        )
        total_exercises += len(source_exercises)

        source_dialogues = [
            match.group(1).strip()
            for match in re.finditer(r"(?m)^#{2,3}\s+(.+(?:حوار|محادثة|المحادثة).*)$", markdown)
        ]
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
    check_parser = BalanceChecker()
    check_parser.feed(check["contentHtml"])
    check_parser.close()
    assert not check_parser.errors and not check_parser.stack, "Unbalanced transition-test HTML"

    print(f"PASS: {len(lessons)} lessons ({dict(counts)}) match all Markdown sources.")
    print(f"PASS: {total_exercises} exercise headings and {total_dialogue_sections} dialogue sections are rendered.")
    print(f"PASS: {total_answer_keys} lesson answer keys, the A0 transition test, and {total_vocabulary} reviewable vocabulary items are present.")
    print("PASS: generated HTML is balanced and contains no script tags.")


if __name__ == "__main__":
    main()
