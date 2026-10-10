#!/usr/bin/env python3
"""Regression guards for reviewed A0.1 content; not an acoustic/CEFR certificate."""
import csv
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
source_path = ROOT / 'content/A0/lesson-01-alphabet.md'
assessment_path = source_path.with_suffix('.assessment.json')
source = source_path.read_text(encoding='utf-8')
a = json.loads(assessment_path.read_text(encoding='utf-8'))
assert a['assessment']['version'] == 'a0-01-v2', 'corrected requirements need a new assessment version'
assert len(a['quiz']) == 10 and a['assessment']['minimumScore'] == 80
expected_answers = ['ei', 'ie', 'ش', 'تس', 'قريب من v الإنجليزية', 'قريب من f', 'ش ثم پ تقريبًا', 'h', 'S-c-h', 'El – I – En – A']
for number, (q, answer) in enumerate(zip(a['quiz'], expected_answers), 1):
    assert q['id'] == f'DL-A0-01-Q{number:02}'
    assert q['options'][q['answerIndex']] == answer, q['id']
    assert q['options'].count(answer) == 1, q['id']
    assert len(q['options']) == len(set(q['options'])), q['id']

exercises = {}
for match in re.finditer(r'^### تمرين (\d+) — (.+)\n([\s\S]*?)(?=^### |^## |\Z)', source, re.M):
    exercises[int(match[1])] = match[3]
assert set(exercises) == set(range(1, 8))
assert 'vier' in exercises[2] and 'Sport' in exercises[2], 'Q06/Q07 must be taught in their linked task T02'
assert 'الاسم — الحروف — أسماء الحروف' in exercises[4], 'P01 response format must be taught before the assessment'
assert all(word in exercises[6] for word in ['Mina', 'Berlin', 'sieben', 'Schule'])
p1, p2 = a['performanceTasks']
assert p1['sourceTaskIds'] == ['DL-A0-01-T04']
assert p2['sourceTaskIds'] == ['DL-A0-01-T06']
assert p2['modality'] == ['writing'] and p2['selfCheck']['speakAloud'] is False
assert p2['selfCheck']['audioRequired'] is False
assert all(word in p2['prompt'] for word in ['Mina', 'Berlin', 'sieben', 'Schule'])
assert 'ei' not in p2['criteria']['targetSkill'], 'T06 words do not contain ei'
assert all(word in source for word in ['[jɔt]', '[oː]', '[uː]', '[ˈʏpsilɔn]', '[tsɛt]', 'ẞ'])
assert '| U u | U | أو طويلة |' not in source
assert '| Y y | Ypsilon | أوبسيلون' not in source

# Every review unit is named individually, with a finding rather than an empty tick.
review = json.loads((ROOT / 'data/reviews/a0-01-review.json').read_text(encoding='utf-8'))
assert review['lessonId'] == 'a0-01-alphabet'
expected_ids = {f'letter-{c}' for c in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
expected_ids |= {f'pattern-{x}' for x in ['ei', 'ie', 'sch', 'z', 'w', 'v', 'sp-st', 'ch']}
expected_ids |= {f'example-{x}' for x in ['mein', 'vier', 'Schule', 'zwei', 'Wasser']}
expected_ids |= {f'DL-A0-01-T{i:02}' for i in range(1, 8)}
expected_ids |= {f'DL-A0-01-Q{i:02}' for i in range(1, 11)}
expected_ids |= {'DL-A0-01-P01', 'DL-A0-01-P02', 'goal-and-scope', 'umlauts-eszett'}
expected_ids |= {f'card-{x}' for x in ['ei', 'ie', 'sch', 'z']}
expected_ids |= {'DL-A0-01-AUD-ABC-01', 'DL-A0-01-AUD-PHON-01', 'DL-A0-01-AUD-WORDS-01'}
assert len(review['units']) == len(expected_ids)
assert {u['id'] for u in review['units']} == expected_ids
assert all(u['finding'].strip() and u['decision'] in ['retained', 'corrected', 'clarified', 'text-only-reviewed'] for u in review['units'])
for exercise_id, item_count in enumerate([4, 5, 4, 3, 4, 4, 2], 1):
    unit = next(u for u in review['units'] if u['id'] == f'DL-A0-01-T{exercise_id:02}')
    assert len(unit['items']) == item_count and all(unit['items']), unit['id']
for filename, digest in review['sourceHashes'].items():
    assert hashlib.sha256((ROOT / filename).read_bytes()).hexdigest() == digest, f'Review snapshot stale: {filename}'

assets = json.loads((ROOT / 'data/audio-playlists.json').read_text(encoding='utf-8'))['audioAssets']
lesson_assets = [asset for asset in assets if asset['lessonId'] == review['lessonId']]
assert len(lesson_assets) == 3
for asset in lesson_assets:
    digest = hashlib.sha256(json.dumps(asset, ensure_ascii=False, sort_keys=True).encode()).hexdigest()
    assert review['audioSnapshotHashes'][asset['assetId']] == digest, 'A0.1 audio text/metadata changed since review'
assert all(set(unit['sourceIds']).issubset({source['id'] for source in review['sources']}) for unit in review['units'])

with (ROOT / 'data/production-task-catalog.csv').open(encoding='utf-8-sig', newline='') as f:
    rows = list(csv.DictReader(f))
for number in range(1, 8):
    row = next(r for r in rows if r['task_id'] == f'DL-A0-01-T{number:02}')
    assert source.splitlines()[int(row['source_line']) - 1] == row['source_heading']

course = json.loads((ROOT / 'data/course.json').read_text(encoding='utf-8'))
lesson = next(l for l in course['lessons'] if l['id'] == review['lessonId'])
assert lesson['assessment'] == a['assessment']
assert lesson['quiz'] == a['quiz'] and lesson['performanceTasks'] == a['performanceTasks']
assert '[ˈʏpsilɔn]' in lesson['contentHtml'] and 'ẞ' in lesson['contentHtml']
print(f'PASS: A0.1 {len(expected_ids)} review units/26 exercise sub-items, all ten reviewed keys, task/source consistency, written P02, catalog lines, source hashes, and generated bundle. Not an independent linguistic or acoustic verdict.')
