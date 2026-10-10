#!/usr/bin/env python3
"""CR39 textual/evidence guards. Not linguistic, acoustic, or CEFR certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/B1/lesson-09-travel-transport-environment.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='b1-09-travel-transport-environment'
assert a['assessment']['version']=='b1-09-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[0,2,2,0,1,2,0,0,1,0]
for q,ns in zip(a['quiz'],[[1],[1],[2],[3],[3,7],[4],[5],[5],[6],[6]]):assert q['sourceTaskIds']==[f'DL-B1-09-T{n:02}' for n in ns]
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert '**die Verspätung / die Ankunft**' in T[1]
for cue in ['الفحص أولًا','القراءة أثناء الانتظار','الوصول أولًا','شراء التذاكر أولًا']:assert cue in T[2]
assert 'الحاضر' in a['quiz'][3]['prompt'] and 'رحلة مواصلة / انتقال إلى مركبة أخرى.' in s
assert 'Lena' in T[3] and 'Lena' in a['quiz'][4]['prompt']
assert 'Perfekt' in T[4] and 'Präsens' in a['quiz'][5]['prompt']
assert 'مراعاة المناخ' in T[5] and 'لا نتيجة قياس علمي' in T[5]
assert 'sehe ich mir ______ an.' in T[6] and 'Wenn die Strecke ______ ist' in T[6]
assert 'die Nachrichten؛ kurz.' in s
assert 'Plusquamperfekt' in T[7] and 'Nachdem der Zug angekommen war, suchten wir den Anschluss.' in s
assert 'المتحدثة' not in a['quiz'][9]['prompt'] and 'غير مذكور' in a['quiz'][9]['explanation']
assert '| مراعٍ للمناخ / ملتزم بالوقت |' in s and 'Während der Zugfahrt lese ich einen Reiseführer.' in s
for t,spoken in zip(a['performanceTasks'],[False,True]):
 assert t['sourceTaskIds']==(['DL-B1-09-T06','DL-B1-09-T08'] if spoken else ['DL-B1-09-T08']) and t['prompt'] in T[8]
 assert t['modality']==(['writing','speaking'] if spoken else ['writing'])
 assert t['selfCheck']['minimumResponseCharacters']==(145 if spoken else 130) and t['selfCheck']['speakAloud'] is spoken and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
models=[]
for heading,n in [('### نموذج P01 — خمس جمل كتابة فقط',5),('### نموذج P02 — ست جمل مع الجهر',6)]:
 lines=re.findall(r'^\d\. (.+)$',s.split(heading)[1].split('\n\n')[1],re.M);assert len(lines)==n and len(' '.join(lines))>=145;models.append(lines)
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10
assert [seg['voiceId'] for x in assets for seg in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
for x in assets:
 assert x['status']=='ready' and x['transcriptPolicy']=='offer'
 if x['kind'] in ['dialogue','reading','listening']:
  for seg in x['segments']:assert seg['text'] in s
 if x['kind']=='model_sentences':
  for sentence in re.split(r'(?<=\.) ',x['segments'][0]['text']):assert sentence in s
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==16
with (R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline='') as f:c={r['task_id']:r for r in csv.DictReader(f)}
for i in range(1,9):
 tid=f'DL-B1-09-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-B1-09-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
with (R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='') as f:
 for r in csv.DictReader(f):
  if r['lesson_id']==lid:
   assert all(h in s for h in r['source_heading'].split(';'))
   for n in r['source_line'].split(';'):assert s.splitlines()[int(n)-1].startswith(('| ','- **','بعد **nachdem**','**Mina:','**Karim:','> '))
if sys.argv[1:]==['--implementation-only']:
 print('PASS B1.9 implementation: contexts/mappings/evidence/bundle/audio; granular report not checked.');raise SystemExit
D=json.loads((R/'data/reviews/b1-09-review.json').read_text());U={u['id']:u for u in D['units']};expected=set()
for k,n in [('scope',7),('vocab',16),('grammar',6),('helper',10),('dialogue',6),('reading',8),('reading-question',7),('listening',5),('listening-question',5),('plan-model',5),('fallback-model',6),('card',4),('T',8),('Q',10),('P',2)]:
 expected|={f'DL-B1-09-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets}
assert set(U)==expected and len(U)==D['unitCount']==len(D['units'])==110
assert len(D['sources'])==11 and all(x['access']=='full_fetched_page' and x['chunksRead']==[0] and x['totalChunks']==1 for x in D['sources'])
for u in D['units']:
 assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
 if u['id'].startswith(('scope-','vocab-','grammar-','connector-','helper-','card-','reading-question-','listening-question-')):assert u['text'] in s
 for x in u.get('items',[]):assert x['text'] and x['finding']
for k in ['dialogue','reading','listening']:
 texts=[u['text'] for u in D['units'] if re.match(k+r'-\d+$',u['id'])]
 assert ' '.join(texts)==' '.join(seg['text'] for x in assets if x['kind']==k for seg in x['segments'])
for x in assets:
 items=U[x['assetId']]['items']
 assert len(items)=={'phrase_bank':17,'model_sentences':6,'dialogue':6,'reading':8,'listening':5}[x['kind']]
 assert ' '.join(i['text'] for i in items)==' '.join(seg['text'] for seg in x['segments'])
for kind,lines in zip(['plan-model','fallback-model'],models):assert lines==[u['text'] for u in D['units'] if u['id'].startswith(kind+'-')]
for i,n in enumerate([5,4,4,3,6,5,4,11],1):assert U[f'DL-B1-09-T{i:02}']['text']==T[i] and len(U[f'DL-B1-09-T{i:02}']['items'])==n
assert D['exerciseSubItemCount']==42
for q in a['quiz']:
 u=U[q['id']];assert u['text']==q['prompt'] and u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']] and u['sourceTaskIds']==q['sourceTaskIds']
 assert len(u['optionReview'])==3
 for i,x in enumerate(u['optionReview']):assert x['text']==q['options'][i] and x['correct']==(i==q['answerIndex']) and x['finding']
for t in a['performanceTasks']:
 u=U[t['id']];assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck']
 assert {x['key']:x['text'] for x in u['criterionReview']}==t['criteria'] and all(x['finding'] for x in u['criterionReview'])
assert D['preservation']['baseline']=='e0727a6e5e81bf5dfc91e19eba6b066f42bc503b'
assert D['preservation']['changedOptionTexts']==[] and D['preservation']['unchangedOptionTexts']==30
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS B1.9: 110 units/42 subitems, 30 options/6 criteria; five assets/10 clips preserved. Not language/acoustic certification.')
