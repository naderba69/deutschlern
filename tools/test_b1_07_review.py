#!/usr/bin/env python3
"""CR37 textual/evidence guards. Not linguistic, acoustic, or CEFR certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/B1/lesson-07-lifestyles-customs-cultures.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='b1-07-lifestyles-customs-cultures'
assert a['assessment']['version']=='b1-07-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,0,1,2,1,2,0,0,0,1]
for q,ns in zip(a['quiz'],[[1],[2],[2],[3],[3,7],[4],[2,4],[6],[5],[5]]):assert q['sourceTaskIds']==[f'DL-B1-07-T{n:02}' for n in ns]
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'Rücksicht aufeinander nehmen' in T[1] and 'ليس الأمر الأول وحده' in T[1]
assert 'كل رابط من الأربعة مرة واحدة' in T[2] and 'في 5 استعمل sowohl' in T[2] and 'Samir liest nicht ______ Nachrichten, ______ Romane.' in T[2]
assert 'Sowohl die Nachbarn als auch die Gäste ______ beim Fest.' in T[2]
assert 'المقاصد معطاة' in T[3] and 'Am Freitag treffen wir uns' in T[3] and 'schwarzen Tee' in T[3]
assert 'ثم الضمير ich مباشرة' in T[4] and 'المحايد' in a['quiz'][5]['prompt']
assert 'تعمل نورة متأخرة أحيانًا' in T[5] and 'ينتهي متأخرًا' not in T[5]
assert 'Wir wechseln die Aufgaben ______.' in T[6] and 'Museum' in T[6]
assert 'لا يُلزم أحد' in a['quiz'][9]['options'][1] and 'الأخبار وحدها' in a['quiz'][2]['prompt']
assert '**Austäusche / Austausche**' in s and 'عملية' in s and 'و Guests' not in s
for t,spoken in zip(a['performanceTasks'],[False,True]):
 assert t['sourceTaskIds']==['DL-B1-07-T08'] and t['prompt'] in T[8]
 assert t['modality']==(['writing','speaking'] if spoken else ['writing'])
 assert t['selfCheck']['minimumResponseCharacters']==160 and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
models=[]
for heading,n in [('### نموذج P01 — خمس جمل كتابة فقط',5),('### نموذج P02 — ستة أدوار مع الجهر',6)]:
 lines=re.findall(r'^\d\. (.+)$',s.split(heading)[1].split('\n\n')[1],re.M);assert len(lines)==n and len(' '.join(lines))>=160;models.append(lines)
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==12
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] in ['dialogue','reading','listening']:
  for seg in x['segments']:assert seg['text'] in s
 if x['kind']=='model_sentences':
  for sentence in re.split(r'(?<=\.) ',x['segments'][0]['text']):assert sentence in s
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==14
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-B1-07-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-B1-07-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:
   assert all(h in s for h in r['source_heading'].split(';'))
   for n in r['source_line'].split(';'):assert s.splitlines()[int(n)-1].startswith(('| ','في مثال **','**Laila:','**Omar:','> '))
if sys.argv[1:]==['--implementation-only']:
 print('PASS B1.7 implementation: contexts/mappings/evidence/bundle/audio; granular report not checked.');raise SystemExit
D=json.loads((R/'data/reviews/b1-07-review.json').read_text());U={u['id']:u for u in D['units']};expected=set()
for k,n in [('scope',7),('vocab',14),('connector',4),('grammar',5),('helper',10),('dialogue',8),('reading',8),('reading-question',6),('listening',6),('listening-question',5),('comparison-model',5),('agreement-model',6),('card',5),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-B1-07-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets}
assert set(U)==expected and len(U)==D['unitCount']==len(D['units'])==114
assert len(D['sources'])==10 and all(x['access']=='full_fetched_page' and len(x['chunksRead'])==x['totalChunks'] for x in D['sources'])
for u in D['units']:
 assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
 if u['id'].startswith(('scope-','vocab-','grammar-','connector-','helper-','card-','reading-question-','listening-question-')):assert u['text'] in s
 for x in u.get('items',[]):assert x['text'] and x['finding']
for k in ['dialogue','reading','listening']:
 texts=[u['text'] for u in D['units'] if re.match(k+r'-\d+$',u['id'])]
 assert ' '.join(texts)==' '.join(seg['text'] for x in assets if x['kind']==k for seg in x['segments'])
for x in assets:
 items=U[x['assetId']]['items']
 assert len(items)=={'phrase_bank':14,'model_sentences':5,'dialogue':8,'reading':8,'listening':6}[x['kind']]
 assert ' '.join(i['text'] for i in items)==' '.join(seg['text'] for seg in x['segments'])
for kind,lines in zip(['comparison-model','agreement-model'],models):assert lines==[u['text'] for u in D['units'] if u['id'].startswith(kind+'-')]
for i,n in enumerate([5,7,6,3,5,5,3,11],1):assert U[f'DL-B1-07-T{i:02}']['text']==T[i] and len(U[f'DL-B1-07-T{i:02}']['items'])==n
assert D['exerciseSubItemCount']==45
for q in a['quiz']:
 u=U[q['id']];assert u['text']==q['prompt'] and u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']] and u['sourceTaskIds']==q['sourceTaskIds']
 assert len(u['optionReview'])==3
 for i,x in enumerate(u['optionReview']):assert x['text']==q['options'][i] and x['correct']==(i==q['answerIndex']) and x['finding']
for t in a['performanceTasks']:
 u=U[t['id']];assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
 assert {x['key']:x['text'] for x in u['criterionReview']}==t['criteria'] and all(x['finding'] for x in u['criterionReview'])
assert D['preservation']['baseline']=='e9e8ba23e1de795f90432496c9daaa06b111d1f6'
assert D['preservation']['changedOptionTexts']==['DL-B1-07-Q10:1'] and D['preservation']['unchangedOptionTexts']==29
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS B1.7: 114 units/45 subitems, 30 options/6 criteria; five assets/12 clips preserved. Not language/acoustic certification.')
