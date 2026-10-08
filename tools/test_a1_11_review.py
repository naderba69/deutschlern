#!/usr/bin/env python3
"""CR17 source/bundle regression guard, not independent language/acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A1/lesson-11-home-directions.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text())
assert a['assessment']['version']=='a1-11-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,0,1,2,0,0,2,0,0,0]
for q,n in zip(a['quiz'],[1,1,2,2,4,4,3,4,5,2]):assert q['sourceTaskIds']==[f'DL-A1-11-T{n:02}']
assert all('أداة التعريف' not in str(q['skillTags']) for q in a['quiz'])
assert 'Karim besucht Omar am Sonntag, nicht am Samstag.' in s
assert '4. Das Haus ist neben dem Park.' not in s
assert '1. Nach welchem Ort fragt die Person?' in s and '**أسئلة الاستماع:** 1. Nach der Post.' in s
assert 'die Balkone / die Balkons' in s and 'Gehen Sie geradeaus, bitte.' in s
T={int(m[1]):m[2] for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
for task,n,minimum,spoken in [(a['performanceTasks'][0],8,90,False),(a['performanceTasks'][1],7,160,True)]:
 assert task['prompt'] in T[n] and task['sourceTaskIds']==[f'DL-A1-11-T{n:02}']
 assert task['selfCheck']['minimumResponseCharacters']==minimum and task['selfCheck']['speakAloud'] is spoken and task['selfCheck']['audioRequired'] is False
 assert set(task['criteria'])==set(task['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][0]['modality']==['writing'] and 'speaking' in a['performanceTasks'][1]['modality']
assert '5. Es gibt ______ Tisch.' in T[2]
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']=='a1-11-home-directions']
assert len(assets)==3 and sum(len(x['segments']) for x in assets)==7
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 for seg in x['segments']:assert seg['text'] in s
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-02','voice-02','voice-00','voice-02','voice-00','voice-02']
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']=='a1-11-home-directions')
for key in ['assessment','quiz','performanceTasks']:assert l[key]==a[key]
for seg in next(x for x in assets if x['kind']=='dialogue')['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={row['task_id']:row for row in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A1-11-T{i:02}';row=c[tid];assert s.splitlines()[int(row['source_line'])-1]==row['source_heading']
 assert set(re.findall(r'DL-A1-11-[QP]\d+',row['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
assert len(l['vocabulary'])==13
if sys.argv[1:]==['--implementation-only']:
 print('PASS A1.11 implementation source/keys/catalog/audio/bundle checks; detailed artifact not checked.');raise SystemExit
D=R/'data/reviews/a1-11-review.json';d=json.loads(D.read_text());ids=set()
for k,n in [('scope',10),('vocab',13),('existence',4),('route-phrase',6),('direction',8),('addressing',1),('helper',12),('dialogue',5),('reading',7),('reading-question',5),('listening',4),('listening-question',4),('speaking-model',5),('writing-model',4),('card',4),('T',8),('Q',10),('P',2)]:
 ids|={f'DL-A1-11-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets}
assert len(d['units'])==d['unitCount']==len(ids)==115 and {u['id'] for u in d['units']}==ids
for u in d['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in d['sources']}
for i,n in enumerate([4,5,4,3,4,4,6,4],1):assert len(next(u for u in d['units'] if u['id']==f'DL-A1-11-T{i:02}')['items'])==n
assert d['exerciseSubItemCount']==34
for q in a['quiz']:
 u=next(u for u in d['units'] if u['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for f,h in d['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert d['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS A1.11: 115 units/34 subitems; indefinite accusative/evidence, written home vs spoken route, hashes/catalog/bundle and unchanged 3 assets/7 clips. Not language/acoustic certification.')
