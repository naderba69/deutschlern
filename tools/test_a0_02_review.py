#!/usr/bin/env python3
"""Source-backed A0.2 regression guards, not acoustic or CEFR certification."""
import csv
import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
source_path = ROOT / 'content/A0/lesson-02-greetings.md'
assessment_path = source_path.with_suffix('.assessment.json')
source = source_path.read_text(encoding='utf-8')
a = json.loads(assessment_path.read_text(encoding='utf-8'))
# A concrete original defect is checked first, before any version/snapshot checks.
assert a['quiz'][7]['sourceTaskIds'] == ['DL-A0-02-T05'], 'Q08 response to a well-being question belongs to response practice T05, not word ordering T04'
assert a['performanceTasks'][1]['sourceTaskIds'] == ['DL-A0-02-T08'], 'P02 must use the explicit written task, not the unrelated informal fill-in dialogue'
assert a['assessment']['version'] == 'a0-02-v2'
answers = ['Guten Morgen!', 'Gute Nacht!', 'Auf Wiedersehen!', 'heiße', 'ما اسم حضرتك؟ بصيغة رسمية', 'Sie', 'Freut mich auch.', 'Gut, danke. Und Ihnen?', 'مع صديق في وداع غير رسمي', 'auch']
assert len(a['quiz']) == 10 and a['assessment']['minimumScore'] == 80
for i, (q, expected) in enumerate(zip(a['quiz'], answers), 1):
    assert q['id'] == f'DL-A0-02-Q{i:02}'
    assert q['options'][q['answerIndex']] == expected, q['id']
    assert len(q['options']) == len(set(q['options'])), q['id']

exercises = {int(m[1]): m[3] for m in re.finditer(r'^### تمرين (\d+) — (.+)\n([\s\S]*?)(?=^### |^## |\Z)', source, re.M)}
assert set(exercises) == set(range(1, 9))
assert 'Gute Nacht' in exercises[1] and 'قبل النوم' in exercises[1], 'Q02 must have matching practice'
assert 'Wie geht es Ihnen?' in exercises[5] and 'Gut, danke. Und Ihnen?' in exercises[5]
assert 'Gut, danke. Und Ihnen?' in source.split('## 5)')[0], 'teach the formal response before testing it'
assert 'heißt?' not in exercises[4] and 'Guten!' not in exercises[4], 'punctuation must not be attached to the wrong scrambled token'
assert 'علامة الترقيم' in exercises[4]
assert 'الدورين' in exercises[7] and 'A/B/A/B' in exercises[7]
assert 'ثلاث عبارات' in exercises[8] and 'اكتب ثلاث جمل' not in exercises[8]
assert '| er / sie / es | heißt |' in source
assert 'Ihnen' in source.split('## 3)')[0]
p1, p2 = a['performanceTasks']
assert p1['sourceTaskIds'] == ['DL-A0-02-T07']
assert p1['modality'] == ['writing', 'speaking'] and p1['selfCheck']['speakAloud'] is True
assert 'الدورين' in p1['prompt'] and p1['selfCheck']['minimumResponseCharacters'] == 100
assert p2['modality'] == ['writing'] and p2['selfCheck']['speakAloud'] is False
assert p2['selfCheck']['audioRequired'] is False and 'Hallo!' in p2['prompt']

# Keep all eight recorded dialogue turns matched to the unchanged audio texts.
assets = json.loads((ROOT / 'data/audio-playlists.json').read_text(encoding='utf-8'))['audioAssets']
lesson_assets = [x for x in assets if x['lessonId'] == 'a0-02-greetings']
turns = re.findall(r'^\*\*[AB]:\*\* (.+)$', source.split('## 3)')[1].split('## 4)')[0], re.M)
assert len(turns) == 8
recorded_turns = [s['text'] for asset in lesson_assets if asset['kind'] == 'dialogue' for s in asset['segments']]
assert [t.strip() for t in turns] == recorded_turns

review = json.loads((ROOT / 'data/reviews/a0-02-review.json').read_text(encoding='utf-8'))
expected_ids = {'goal-and-scope', 'register-and-context'}
for prefix, count in [('phrase', 10), ('name', 3), ('conjugation', 6), ('dialogue', 8), ('wellbeing', 6), ('card', 4)]:
    expected_ids |= {f'{prefix}-{i:02}' for i in range(1, count + 1)}
for kind, count in [('T', 8), ('Q', 10), ('P', 2)]:
    expected_ids |= {f'DL-A0-02-{kind}{i:02}' for i in range(1, count + 1)}
expected_ids |= {x['assetId'] for x in lesson_assets}
assert len(review['units']) == len(expected_ids) and {u['id'] for u in review['units']} == expected_ids
for u in review['units']:
    assert u['finding'] and u['decision'] in ['retained', 'corrected', 'clarified', 'text-only-reviewed']
    assert set(u['sourceIds']).issubset({r['id'] for r in review['sources']})
for i, count in enumerate([5, 4, 4, 4, 4, 5, 2, 3], 1):
    unit = next(u for u in review['units'] if u['id'] == f'DL-A0-02-T{i:02}')
    assert len(unit['items']) == count and all(unit['items'])
for filename, digest in review['sourceHashes'].items():
    assert hashlib.sha256((ROOT / filename).read_bytes()).hexdigest() == digest, f'Review stale: {filename}'
for asset in lesson_assets:
    assert hashlib.sha256(json.dumps(asset, ensure_ascii=False, sort_keys=True).encode()).hexdigest() == review['audioSnapshotHashes'][asset['assetId']]

with (ROOT / 'data/production-task-catalog.csv').open(encoding='utf-8-sig', newline='') as f:
    catalog = {r['task_id']: r for r in csv.DictReader(f)}
for i in range(1, 9):
    row = catalog[f'DL-A0-02-T{i:02}']
    assert source.splitlines()[int(row['source_line']) - 1] == row['source_heading']
    expected = {q['id'] for q in a['quiz'] + a['performanceTasks'] if row['task_id'] in q['sourceTaskIds']}
    actual = set(re.findall(r'DL-A0-02-[QP]\d+', row['current_representation']))
    assert expected == actual, row['task_id']
assert catalog['DL-A0-02-Q08']['source_exercise_number'] == '5'
assert catalog['DL-A0-02-P02']['source_exercise_number'] == '8'
course = json.loads((ROOT / 'data/course.json').read_text(encoding='utf-8'))
lesson = next(l for l in course['lessons'] if l['id'] == 'a0-02-greetings')
assert lesson['assessment'] == a['assessment'] and lesson['quiz'] == a['quiz'] and lesson['performanceTasks'] == a['performanceTasks']
print(f'PASS: A0.2 {len(expected_ids)} reviewed units/31 exercise sub-items, ten keys, source links, independent written task, all eight unchanged dialogue turns, source/audio snapshots and generated bundle. Not an independent linguistic/acoustic verdict.')
