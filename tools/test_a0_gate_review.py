#!/usr/bin/env python3
"""CR6: gate/source/evidence regression checks, not linguistic or acoustic proof."""
import csv, hashlib, json, re
from pathlib import Path
R=Path(__file__).resolve().parents[1]
p=R/'content/A0/lesson-06-placement-check.md'
s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert 'Langsamer, bitte.' in a['performanceTasks'][1]['prompt'], 'P02 must explicitly request slower speech, not call repetition alone a slow request'
assert a['assessment']['version']=='a0-gate-v2' and a['assessment']['minimumScore']==80
assert len(a['quiz'])==10 and len(a['performanceTasks'])==3
answers=['ei في mein قريب من «آي»','heiße','Guten Morgen','ما اسمك؟','vierzehn','bist','haben','Wie heißen Sie?','Ich verstehe nicht.','Ich habe eine Frage.']
for i,(q,answer) in enumerate(zip(a['quiz'],answers),1):
    assert q['id']==f'DL-A0-GATE-Q{i:02}' and q['options'][q['answerIndex']]==answer
    assert q['sourceTaskIds']==[q['id']] and len(q['options'])==len(set(q['options']))
    assert f'### سؤال {i} — {q["id"]}' in s and q['prompt'] in s
    for option in q['options']:assert option in s
assert 'vierzig' not in json.dumps(a,ensure_ascii=False)
for i,(task,minimum,spoken) in enumerate(zip(a['performanceTasks'],[120,50,60],[True,True,False]),1):
    assert task['sourceTaskIds']==[f'DL-A0-GATE-T{i:02}']
    assert task['prompt'] in s
    assert task['selfCheck']['minimumResponseCharacters']==minimum
    assert task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
    assert 'writing' in task['modality']
    assert set(task['selfCheck']['requiredChecks'])==set(task['criteria'])=={'taskCompletion','meaningClarity','targetSkill'}
assert '18 أو 20' in a['performanceTasks'][0]['prompt'] and 'Wie alt bist du?' in a['performanceTasks'][0]['prompt']
assert 'بصوت Lina' in a['performanceTasks'][2]['prompt'] and 'Öffnen' not in a['performanceTasks'][1]['prompt']
assert '**المدة:** 25–35 دقيقة' in s and '7/10' not in s
c=json.loads((R/'data/course.json').read_text());g=c['a0TransitionCheck']
assert len(c['lessons'])==53 and g['durationLabel']=='25–35 دقيقة'
for key in ['assessment','quiz','performanceTasks']:assert g[key]==a[key]
assert 'توصيات النسخة القديمة' not in g['contentHtml']
assets=[x for x in c['audioAssets'] if x['lessonId']=='a0-a1-gate']
assert len(assets)==1 and len(assets[0]['segments'])==1
assert assets[0]['segments'][0]['text']=='Guten Tag! Ich heiße Nora und wohne in Nabeul. Ich bin achtzehn Jahre alt. Meine Kursnummer ist zwei sechs, vier eins, null acht. Entschuldigung, ich verstehe die letzte Zahl nicht. Können Sie sie bitte wiederholen?'
assert assets[0]['segments'][0]['voiceId']=='voice-02' and assets[0]['transcriptPolicy']=='hide_until_first_attempt'
review=json.loads((R/'data/reviews/a0-gate-review.json').read_text())
ids={'scope','archive-boundary','coverage','audio-boundary','catalog','duration'}
ids|={f'legacy-Q{i:02}' for i in range(1,11)}
ids|={f'DL-A0-GATE-Q{i:02}' for i in range(1,11)}
for k in ['T','P']:ids|={f'DL-A0-GATE-{k}{i:02}' for i in range(1,4)}
ids|={f'audio-sentence-{i:02}' for i in range(1,7)}
ids|={assets[0]['assetId']}
assert len(review['units'])==len(ids) and {u['id'] for u in review['units']}==ids
for u in review['units']:
    assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in review['sources']}
for q in a['quiz']:
    unit=next(u for u in review['units'] if u['id']==q['id'])
    assert unit['options']==q['options'] and unit['answer']==q['options'][q['answerIndex']]
for i,n in enumerate([6,3,3],1):assert len(next(u for u in review['units'] if u['id']==f'DL-A0-GATE-T{i:02}')['items'])==n
for f,h in review['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
assert hashlib.sha256(json.dumps(assets[0],ensure_ascii=False,sort_keys=True).encode()).hexdigest()==review['audioSnapshotHash']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:rows=list(csv.DictReader(f))
gate={x['task_id']:x for x in rows if x['task_id'].startswith('DL-A0-GATE-')}
assert len(gate)==16
for id,row in gate.items():
    assert row['lesson_id']=='a0-a1-gate'
    if '-P' not in id:assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
for i in range(1,4):assert f'DL-A0-GATE-P{i:02}' in gate[f'DL-A0-GATE-T{i:02}']['current_representation']
app=(R/'app.js').read_text()
assert 'الاستماع غير مقاس' in app and app.count('${renderA0GateScopeNote()}')==3
print(f'PASS: gate {len(ids)} review units/12 practical sub-items, keys, three explicit source tasks, evidence modes, archive/source/audio hashes, catalog, bundle and visible measurement limits. Not acoustic/CEFR certification.')
