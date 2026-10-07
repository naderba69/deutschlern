#!/usr/bin/env python3
"""CR8 content/evidence regression guard, not language or acoustic certification."""
import csv, hashlib, json, re
from pathlib import Path
R=Path(__file__).resolve().parents[1]
p=R/'content/A1/lesson-02-work-family.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'الأسئلة الثلاثة' in a['performanceTasks'][1]['criteria']['taskCompletion'], 'P02 asks three topics but its old rubric accepts only two questions'
assert a['assessment']['version']=='a1-02-v2' and a['assessment']['minimumScore']==80
assert len(t)==9 and len(a['quiz'])==10 and len(a['performanceTasks'])==2
answers=['الأخ','Meine','Meine','arbeitest','Meine Schwester ist Ärztin.','Was bist du von Beruf?','في نابل','في تونس العاصمة','ist','Hast du Geschwister?']
links=[1,2,2,3,4,5,6,6,4,9]
for q,answer,n in zip(a['quiz'],answers,links):
    assert q['options'][q['answerIndex']]==answer and len(set(q['options']))==len(q['options'])
    assert q['sourceTaskIds']==[f'DL-A1-02-T{n:02}']
assert 'Nominativ' in s and 'meinen Bruder' in s and 'einen Bruder' in s
assert '| الضمير | arbeiten |\n|---|---|' in s
assert 'Sami studiert in Nabeul.' in t[6] and 'Sami arbeitet in Nabeul.' not in t[6]
assert 'ابدأ كل جملة' in t[4] and 'من الأسئلة الثلاثة' in t[5]
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,80,False),(a['performanceTasks'][1],9,140,True)]:
    assert task['prompt'] in t[n] and task['sourceTaskIds']==[f'DL-A1-02-T{n:02}']
    assert task['selfCheck']['minimumResponseCharacters']==minimum
    assert task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
    assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][0]['modality']==['writing']
assert 'خمس جمل' in t[8] and 'خيالية' in t[8] and 'جملتين' in t[9]
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-02-work-family']
assert len(assets)==2 and sum(len(x['segments']) for x in assets)==2
for asset in assets:
    assert asset['segments'][0]['voiceId']==('voice-02' if asset['kind']=='reading' else 'voice-03')
    assert asset['status']=='ready' and asset['transcriptPolicy']=='offer'
    assert '> '+asset['segments'][0]['text'] in s
review=json.loads((R/'data/reviews/a1-02-review.json').read_text())
ids={'scope','profession-rule','possession-rule','case-contrast','table-header','audio-boundary','reference-links'}
for kind,count in [('family',11),('profession',8),('possessive-row',4),('dein',2),('introduction',4),('arbeiten',6),('studieren',4),('phrase',6),('gloss',18),('reading',8),('reading-question',5),('listening',7),('listening-question',3),('profile-model',5),('practice-dialogue',8),('card',4)]:ids|={f'{kind}-{i:02}' for i in range(1,count+1)}
for kind,count in [('T',9),('Q',10),('P',2)]:ids|={f'DL-A1-02-{kind}{i:02}' for i in range(1,count+1)}
ids|={x['assetId'] for x in assets}
assert len(review['units'])==len(ids)==review['unitCount'] and {u['id'] for u in review['units']}==ids
for u in review['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in review['sources']}
for i,n in enumerate([4,4,4,3,3,4,3,5,5],1):assert len(next(u for u in review['units'] if u['id']==f'DL-A1-02-T{i:02}')['items'])==n
for q in a['quiz']:
    u=next(u for u in review['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for filename,h in review['sourceHashes'].items():assert hashlib.sha256((R/filename).read_bytes()).hexdigest()==h
for x in assets:assert review['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:catalog={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,10):
    tid=f'DL-A1-02-T{i:02}';row=catalog[tid]
    assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
    linked={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
    assert set(re.findall(r'DL-A1-02-[QP]\d+',row['current_representation']))==linked
for q in a['quiz']+a['performanceTasks']:assert catalog[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==review['lessonId'])
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
assert len(l['vocabulary'])==11
assert '<th dir="auto">arbeiten</th>' in l['contentHtml']
print(f'PASS: A1.2 {len(ids)} review units/35 exercise sub-items, scoped possessives, three-question rubric, written/oral modes, keys/catalog, source/audio hashes and bundle; not linguistic/acoustic certification.')
