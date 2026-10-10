#!/usr/bin/env python3
"""CR7 regression guard: source alignment, not independent language/acoustic grading."""
import csv
import hashlib
import json
import re
from pathlib import Path
R=Path(__file__).resolve().parents[1]
p=R/'content/A1/lesson-01-introductions-languages-hobbies.md'
s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'Arabisch / sprichst / du / ?' in t[3], 'T03.4 cannot form Sprichst du Arabisch? from spricht; supply sprichst'
assert 'Arabisch / spricht / du' not in t[3]
assert a['assessment']['version']=='a1-01-v2' and a['assessment']['minimumScore']==80
assert len(t)==10 and len(a['quiz'])==10 and len(a['performanceTasks'])==2
answers=['اللغة','wohnst','spreche','Wir hören gern Musik.','Ich lese gern.','lernt','Wo wohnst du?','Deutsch (اسم اللغة)','Welche Sprachen sprichst du?','Ich lese gern.']
links=[1,2,2,3,4,3,8,9,8,10]
for q,answer,n in zip(a['quiz'],answers,links):
    assert q['options'][q['answerIndex']]==answer and len(set(q['options']))==len(q['options'])
    assert q['sourceTaskIds']==[f'DL-A1-01-T{n:02}']
assert 'موقع' in s and 'ليس بالضرورة الكلمة الثانية' in s
assert 'du **liest**' in s and 'er/sie/es **liest**' in s and 'ihr **lest**' in s
assert 'Wann spielt Mila laut Text Volleyball?' in t[6] and 'jeden Tag' not in t[6]
assert 'ابدأ الجمل الثلاث الأولى بالفاعل' in t[3]
assert 'ستة أسطر' in t[9] and 'حرف كبير' in t[9]
assert 'الأربعة' in t[10] and 'جملتين' in t[10] and 'بصوت مرتفع' in t[10]
p1,p2=a['performanceTasks']
for task,n,minimum,spoken in [(p1,9,100,False),(p2,10,180,True)]:
    assert task['prompt'] in t[n]
    assert task['sourceTaskIds']==[f'DL-A1-01-T{n:02}']
    assert task['selfCheck']['minimumResponseCharacters']==minimum
    assert task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
    assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert p1['modality']==['writing'] and 'الأربعة' in p2['criteria']['taskCompletion']
assert 'إن أمكن' not in p1['prompt'] and 'جملتين' in p2['prompt']
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-01-introductions-languages-hobbies']
assert len(assets)==2 and sum(len(x['segments']) for x in assets)==2
for asset,voice in zip(sorted(assets,key=lambda x:x['kind']),['voice-03','voice-02']):
    assert asset['segments'][0]['voiceId']==voice and asset['transcriptPolicy']=='offer'
    assert '> '+asset['segments'][0]['text'] in s
review=json.loads((R/'data/reviews/a1-01-review.json').read_text())
ids={'scope','language-rule','word-order','gern-rule'}
for kind,count in [('vocab',12),('phrase',9),('regular',6),('sprechen',6),('lesen',6),('gern-example',3),('gloss',17),('reading',7),('reading-question',5),('listening',6),('listening-question',4),('practice-dialogue',10),('card',5)]:
    ids|={f'{kind}-{i:02}' for i in range(1,count+1)}
for kind,count in [('T',10),('Q',10),('P',2)]:ids|={f'DL-A1-01-{kind}{i:02}' for i in range(1,count+1)}
ids|={x['assetId'] for x in assets}
assert len(review['units'])==len(ids)==review['unitCount'] and {u['id'] for u in review['units']}==ids
for u in review['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in review['sources']}
for i,n in enumerate([5,5,4,3,4,3,4,4,6,6],1):assert len(next(u for u in review['units'] if u['id']==f'DL-A1-01-T{i:02}')['items'])==n
for q in a['quiz']:
    u=next(u for u in review['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for filename,h in review['sourceHashes'].items():assert hashlib.sha256((R/filename).read_bytes()).hexdigest()==h
for x in assets:assert review['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:catalog={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,11):
    tid=f'DL-A1-01-T{i:02}';row=catalog[tid]
    assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
    linked={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
    assert set(re.findall(r'DL-A1-01-[QP]\d+',row['current_representation']))==linked
for q in a['quiz']+a['performanceTasks']:assert catalog[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==review['lessonId'])
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
assert len(l['vocabulary'])==12
print(f'PASS: A1.1 {len(ids)} review units/44 exercise sub-items; corrected rearrangement, keys/source links, reading limits, written/oral evidence, unchanged audio, catalog/hashes/bundle. Not linguistic/acoustic certification.')
