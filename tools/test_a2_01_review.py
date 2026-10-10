#!/usr/bin/env python3
"""CR19 source alignment and regression guard; not language/acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/A2/lesson-01-routines-abilities-experiences.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='a2-01-routines-abilities-experiences'
assert a['assessment']['version']=='a2-01-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,1,2,1,0,2,1,0,2,1]
for q,n in zip(a['quiz'],[1,1,2,3,4,5,6,6,8,6]):assert q['sourceTaskIds']==[f'DL-A2-01-T{n:02}']
assert 'ولا يثبت انتهاء الدورة' in a['quiz'][0]['options'][0] and 'مدة انتهت' not in s
assert 'Seitdem lernt sie regelmäßig' in s and 'الجزء المنفصل teil' in s
assert 'Sie beginnt in der Bäckerei um neun Uhr, nicht um sieben Uhr.' in s
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert '4. kurze Texte / lesen / Ich / kann' in T[5] and 'acht — Gespräche — Mahdia — Freund' in T[7]
for t,minimum,spoken in zip(a['performanceTasks'],[120,130],[True,False]):
 assert t['prompt'] in T[8] and t['sourceTaskIds']==['DL-A2-01-T08']
 assert t['selfCheck']['minimumResponseCharacters']==minimum and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assert a['performanceTasks'][1]['modality']==['writing'] and 'speaking' in a['performanceTasks'][0]['modality']
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] in ['phrase_bank','model_sentences']:
  marker='### عبارات المقطع' if x['kind']=='phrase_bank' else '### أمثلة المقطع'
  block=s.split(marker)[1];block=re.split(r'\n##+ ',block)[0]
  assert ' '.join(re.findall(r'^- \*\*(.*?)\*\*',block,re.M))==x['segments'][0]['text']
 else:
  for seg in x['segments']:assert seg['text'] in s
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02']+['voice-03','voice-02']*3+['voice-02','voice-03','voice-02']
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
for x in assets:
 if x['kind']=='dialogue':
  for seg in x['segments']:assert f"</strong> {seg['text']}</p>" in l['contentHtml']
assert len(l['vocabulary'])==15
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-A2-01-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-A2-01-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
if sys.argv[1:]==['--implementation-only']:
 print('PASS A2.1 implementation: temporal meaning/tasks/keys/catalog/rendered turns/audio/bundle. Detailed review artifact not checked.');raise SystemExit
D=json.loads((R/'data/reviews/a2-01-review.json').read_text());ids=set()
for k,n in [('scope',10),('vocab',15),('separation',3),('temporal',6),('ability',3),('experience',3),('audio-phrase',5),('audio-model',6),('helper',10),('dialogue',6),('reading',7),('reading-question',5),('listening',5),('listening-question',4),('speaking-model',4),('writing-model',4),('card',4),('T',8),('Q',10),('P',2)]:ids|={f'DL-A2-01-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
ids|={x['assetId'] for x in assets};assert len(ids)==D['unitCount']==len(D['units'])==125 and {u['id'] for u in D['units']}==ids
for u in D['units']:assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
for i,n in enumerate([4,3,4,4,4,6,4,8],1):
 u=next(x for x in D['units'] if x['id']==f'DL-A2-01-T{i:02}');assert len(u['items'])==n and u['text']==T[i]
assert D['exerciseSubItemCount']==37
for q in a['quiz']:
 u=next(x for x in D['units'] if x['id']==q['id']);assert u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']]
for t in a['performanceTasks']:
 u=next(x for x in D['units'] if x['id']==t['id']);assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS A2.1: 125 units/37 subitems; vor/seit/dative/separation; spoken routine vs written learning record; source hashes/catalog/bundle and unchanged 5 assets/10 clips. Not independent language/acoustic certification.')
