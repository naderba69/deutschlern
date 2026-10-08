#!/usr/bin/env python3
"""CR31: textual coverage and evidence invariants, not language/acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/B1/lesson-01-daily-life-hobbies-experiences.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='b1-01-daily-life-hobbies-experiences'
def norm(t):
 for x,y in [('sechzehn','16'),('siebzehn','17'),('vierzehn','14')]:t=t.replace(x,y)
 return t
assert a['assessment']['version']=='b1-01-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,2,0,2,1,2,0,2,1,0]
for q,n in zip(a['quiz'],[4,4,2,3,4,5,5,5,5,7]):assert q['sourceTaskIds']==[f'DL-B1-01-T{n:02}']
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'كلتا الجملتين' in T[7] and 'Präteritum' in T[2]
assert 'das Erlebnis' in T[4] and 'an einem Kurs teilnehmen' in T[4]
assert 'Lina war 14 Jahre alt, als sie die Kamera bekam.' in T[5]
assert 'zuerst' not in T[5] and 'erste Kamera' not in a['quiz'][5]['prompt']
assert 'Von wem bekam sie die Kamera?' in s
assert 'حدث مستقبلي واحد' in s and 'كل نشاط داخلها وقع مرة واحدة' in s
for t,minimum in zip(a['performanceTasks'],[180,220]):
 assert t['sourceTaskIds']==['DL-B1-01-T08'] and t['prompt'] in T[8]
 assert t['modality']==['writing','speaking']
 assert t['selfCheck']['minimumResponseCharacters']==minimum and t['selfCheck']['speakAloud'] is True and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-02']+['voice-00','voice-03']*3+['voice-02','voice-03']
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] in ['dialogue','reading','listening']:
  for seg in x['segments']:assert norm(seg['text']) in s
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==13
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-B1-01-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-B1-01-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:
   assert r['source_heading'] in s
   for n in r['source_line'].split(';'):assert s.splitlines()[int(n)-1].startswith(('| ','- **','**Lina:','**Karim:','> '))
models=[]
for heading,count,minimum in [('### نموذج P01 — خمس جمل مع الجهر',5,180),('### نموذج P02 — أربعة أسطر مع الجهر',4,220)]:
 lines=re.findall(r'^\d\. (.+)$',s.split(heading)[1].split('\n\n')[1],re.M);assert len(lines)==count and len(' '.join(lines))>=minimum;models.append(lines)
if sys.argv[1:]==['--implementation-only']:
 print('PASS B1.1 implementation: source/tasks/versions/mappings/bundle/audio; detailed review not checked.');raise SystemExit
D=json.loads((R/'data/reviews/b1-01-review.json').read_text());expected=set()
for k,n in [('scope',6),('vocab',13),('grammar',4),('helper',10),('dialogue',6),('reading',7),('reading-question',5),('listening',4),('listening-question',4),('paragraph-model',5),('dialogue-model',4),('card',4),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-B1-01-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets};U={u['id']:u for u in D['units']}
assert set(U)==expected and len(expected)==D['unitCount']==len(D['units'])==97
assert len(D['sources'])==11 and all(x['access']=='full_fetched_page' for x in D['sources'])
for u in D['units']:
 assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
 if u['id'].startswith(('vocab-','helper-','card-','scope-')):assert u['text'] in s
 for x in u.get('items',[]):assert x['text'] and x['finding']
for k in ['dialogue','reading','listening']:
 texts=[u['text'] for u in D['units'] if re.match(k+r'-\d+$',u['id'])]
 assert ' '.join(texts)==' '.join(seg['text'] for x in assets if x['kind']==k for seg in x['segments'])
for x in assets:
 if x['kind'] in ['phrase_bank','model_sentences']:
  items=U[x['assetId']]['items'];assert len(items)==(13 if x['kind']=='phrase_bank' else 4)
  assert ' '.join(i['text'] for i in items)==x['segments'][0]['text']
  if x['kind']=='model_sentences':
   assert [i['text'] for i in items]==[u['text'] for u in D['units'] if u['id'].startswith('grammar-')]
   assert all(norm(i['text']) in s for i in items)
for kind,lines in zip(['paragraph-model','dialogue-model'],models):assert lines==[u['text'] for u in D['units'] if u['id'].startswith(kind+'-')]
for i,n in enumerate([4,3,2,4,5,4,2,9],1):assert U[f'DL-B1-01-T{i:02}']['text']==T[i] and len(U[f'DL-B1-01-T{i:02}']['items'])==n
assert D['exerciseSubItemCount']==33
for q in a['quiz']:
 u=U[q['id']];assert u['text']==q['prompt'] and u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']] and u['sourceTaskIds']==q['sourceTaskIds']
 assert len(u['optionReview'])==3
 for i,x in enumerate(u['optionReview']):assert x['text']==q['options'][i] and x['correct']==(i==q['answerIndex']) and x['finding']
for t in a['performanceTasks']:
 u=U[t['id']];assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
 assert {x['key']:x['text'] for x in u['criterionReview']}==t['criteria'] and all(x['finding'] for x in u['criterionReview'])
assert D['preservation']['baseline']=='c5876d7d5e0be70c3baa48bc88926737c368209f'
assert D['preservation']['changedOptionTexts']==[] and D['preservation']['unchangedOptionTexts']==30
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS B1.1: 97 units/33 subitems, 30 options/6 criteria, models/mappings/hashes; five assets/10 clips preserved. Not language/acoustic certification.')
