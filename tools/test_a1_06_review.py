#!/usr/bin/env python3
"""CR12 consistency guard; not independent linguistic or acoustic certification."""
import csv,hashlib,json,re
from pathlib import Path
R=Path(__file__).resolve().parents[1]
p=R/'content/A1/lesson-06-yesterday-perfekt.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert 'Am Sonntag ______ sie nach Sousse' not in s, 'T03.3 sie permits singular ist and plural sind, unlike the single key'
assert 'Am Sonntag ______ Rania nach Sousse' in s
assert a['assessment']['version']=='a1-06-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,1,1,1,0,0,1,0,1,0]
for q,n in zip(a['quiz'],[1,1,2,2,4,3,3,3,2,4]):
 assert q['sourceTaskIds']==[f'DL-A1-06-T{n:02}'] and len(set(q['options']))==3
assert 'مدينة تونس' in a['quiz'][9]['prompt']
t={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert len(t)==8 and 'Gestern' in t[4] and 'Rania' in t[4]
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,90,False),(a['performanceTasks'][1],4,90,True)]:
 assert task['prompt'] in t[n] and task['sourceTaskIds']==[f'DL-A1-06-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][0]['modality']==['writing']
assert 'فعلين على الأقل مع haben' in t[8] and 'فعلًا واحدًا على الأقل مع sein' in t[8]
assert '| er/sie/es | hat | ist |' in s and 'الماضي القريب **Perfekt**' not in s
assert 'gearbeitet' in s and 'zurückgekommen' in s and 'فقط' in s
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-06-yesterday-perfekt']
assert len(assets)==2 and all(len(x['segments'])==1 and x['status']=='ready' and x['transcriptPolicy']=='offer' for x in assets)
for x in assets:
 assert '> '+x['segments'][0]['text'] in s
 assert x['segments'][0]['voiceId']==('voice-02' if x['kind']=='reading' else 'voice-03')
d=json.loads((R/'data/reviews/a1-06-review.json').read_text())
ids={'scope','perfekt-scope','formation','regular-rule','prefix-rule','auxiliary-scope','word-order','question-order','extra-forms-scope','reading-limit','listening-limit','self-check-limit'}
for k,n in [('vocab',8),('contrast',2),('regular-example',3),('movement',2),('fronted-time',2),('auxiliary-row',6),('extra-verb',7),('gloss',12),('reading',6),('reading-question',4),('listening',4),('listening-question',4),('writing-model',4),('transfer-input',3),('transfer-model',3),('card',4),('T',8),('Q',10),('P',2)]:
 ids|={f'DL-A1-06-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==d['unitCount']==len(ids) and {x['id'] for x in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([5,6,3,6,3,3,4,4],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-06-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==34
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A1-06-T{i:02}';row=c[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-06-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==d['lessonId'])
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
assert len(l['vocabulary'])==8
print(f'PASS: A1.6 {len(ids)} reviewed units/34 subitems; unambiguous subject, bounded Perfekt rules, aligned writing/transfer, keys/catalog/hashes, unchanged two audio clips. Not language/acoustic certification.')
