#!/usr/bin/env python3
"""CR40 source/mapping/evidence guards; not language, CEFR, WCAG or acoustic certification."""
import csv,hashlib,json,re,sys
from pathlib import Path
R=Path(__file__).resolve().parents[1];p=R/'content/B1/lesson-10-media-news-formal-communication.md';s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());lid='b1-10-media-news-formal-communication'
assert a['assessment']['version']=='b1-10-v2' and a['assessment']['minimumScore']==80
assert [q['answerIndex'] for q in a['quiz']]==[1,0,1,0,1,2,0,0,0,0]
for q,n in zip(a['quiz'],[1,2,2,3,4,7,5,5,6,6]):assert q['sourceTaskIds']==[f'DL-B1-10-T{n:02}']
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
assert 'ولو كانت الرئيسية' in T[1] and 'الحاضر' in T[3] and 'Wer ruft heute an?' in T[4]
assert '4. anruft.' in s and 'الفاعل' in a['quiz'][3]['explanation']
assert 'Welche Information möchte Noor zur Verfügbarkeit des Podcasts erhalten?' in s
assert 'Was möchte er über das Archiv wissen?' in s
assert 'Wann möchte sie den Podcast verfügbar wissen?' not in s and 'Wo möchte er das Archiv finden?' not in s
assert 'لا إثبات أنه تم' in a['quiz'][9]['explanation']
assert 'Mit freundlichen Grüßen بلا فاصلة أو نقطة' in s
for t,spoken in zip(a['performanceTasks'],[False,True]):
 assert t['prompt'] in T[8] and t['sourceTaskIds']==(['DL-B1-10-T06','DL-B1-10-T08'] if spoken else ['DL-B1-10-T08'])
 assert t['modality']==(['writing','speaking'] if spoken else ['writing']) and t['selfCheck']['speakAloud'] is spoken
 assert t['selfCheck']['minimumResponseCharacters']==(125 if spoken else 120) and t['selfCheck']['audioRequired'] is False
 assert set(t['criteria'])==set(t['selfCheck']['requiredChecks'])=={'taskCompletion','meaningClarity','targetSkill'}
email=s.split('### نموذج P01 — رسالة كتابة فقط')[1].split('### نموذج P02')[0].strip().split('\n\n');phone=re.findall(r'^\d\. (.+)$',s.split('### نموذج P02 — أربعة أسطر مع الجهر')[1].split('النموذجان')[0],re.M)
assert len(email)==9 and len(phone)==4 and email[-2]=='Mit freundlichen Grüßen' and email[2].startswith('ich ')
assert [len('\n'.join(x)) for x in [email,phone]]==[401,272]
assets=[x for x in json.loads((R/'data/audio-playlists.json').read_text())['audioAssets'] if x['lessonId']==lid]
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==12
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02']+['voice-02','voice-03']*4+['voice-02','voice-03']
words=lambda t:re.findall(r'\w+',t.lower())
for x in assets:
 assert x['status']=='generated_pending_acoustic_review' and x['transcriptPolicy']=='offer'
 if x['kind'] in ['dialogue','listening']:
  for z in x['segments']:assert z['text'] in s
 if x['kind']=='reading':
  source=s.split('## 4) رسالة استفسار رسمية أصلية')[1].split('### أسئلة الفهم')[0];assert words(source)==words(x['segments'][0]['text'])
 if x['kind']=='model_sentences':
  for sentence in re.split(r'(?<=[.?])\s+',x['segments'][0]['text']):assert sentence in s
l=next(x for x in json.loads((R/'data/course.json').read_text())['lessons'] if x['id']==lid)
for k in ['assessment','quiz','performanceTasks']:assert l[k]==a[k]
assert len(l['vocabulary'])==16
c={r['task_id']:r for r in csv.DictReader((R/'data/production-task-catalog.csv').open(encoding='utf-8-sig',newline=''))}
for i in range(1,9):
 tid=f'DL-B1-10-T{i:02}';r=c[tid];assert s.splitlines()[int(r['source_line'])-1]==r['source_heading']
 assert set(re.findall(r'DL-B1-10-[QP]\d+',r['current_representation']))=={q['id'] for q in a['quiz']+a['performanceTasks'] if tid in q['sourceTaskIds']}
for q in a['quiz']+a['performanceTasks']:assert c[q['id']]['source_exercise_number']==';'.join(str(int(x[-2:])) for x in q['sourceTaskIds'])
for r in csv.DictReader((R/'data/audio-asset-register.csv').open(encoding='utf-8-sig',newline='')):
 if r['lesson_id']==lid:
  assert all(h in s for h in r['source_heading'].split(';'))
  for n in r['source_line'].split(';'):assert s.splitlines()[int(n)-1].startswith(('| ','**Leila:','**Redakteur:','> '))
if sys.argv[1:]==['--implementation-only']:print('PASS B1.10 implementation; granular report not checked.');raise SystemExit
D=json.loads((R/'data/reviews/b1-10-review.json').read_text());U={u['id']:u for u in D['units']};expected=set()
for k,n in [('scope',7),('vocab',16),('grammar',6),('helper',10),('dialogue',8),('reading',7),('reading-question',5),('listening',5),('listening-question',5),('email-model',1),('phone-model',1),('card',4),('T',8),('Q',10),('P',2)]:expected|={f'DL-B1-10-{k}{i:02}' if k in ['T','Q','P'] else f'{k}-{i:02}' for i in range(1,n+1)}
expected|={x['assetId'] for x in assets};assert set(U)==expected and len(U)==len(D['units'])==D['unitCount']==100
assert len(D['sources'])==10 and sum(x['access']=='full_fetched_page' for x in D['sources'])==9
for u in D['units']:
 assert u['finding'] and set(u['sourceIds'])<={x['id'] for x in D['sources']}
 if re.match(r'(scope|vocab|grammar|helper|card|reading-question|listening-question)-',u['id']):assert u['text'] in s
 for item in u.get('items',[]):assert item['text'] and item['finding']
for k in ['dialogue','reading','listening']:
 assert ' '.join(u['text'] for u in D['units'] if re.match(k+r'-\d+$',u['id']))==' '.join(z['text'] for x in assets if x['kind']==k for z in x['segments'])
for x in assets:
 assert ' '.join(y['text'] for y in U[x['assetId']]['items'])==' '.join(z['text'] for z in x['segments'])
 assert len(U[x['assetId']]['items'])=={'phrase_bank':17,'model_sentences':6,'dialogue':8,'reading':7,'listening':5}[x['kind']]
for i,n in enumerate([4,4,3,4,5,4,3,9],1):assert U[f'DL-B1-10-T{i:02}']['text']==T[i] and len(U[f'DL-B1-10-T{i:02}']['items'])==n
assert D['exerciseSubItemCount']==36
for k,ts in [('email-model-01',email),('phone-model-01',phone)]:assert [i['text'] for i in U[k]['items']]==ts
for q in a['quiz']:
 u=U[q['id']];assert u['text']==q['prompt'] and u['options']==q['options'] and u['answer']==q['options'][q['answerIndex']] and u['sourceTaskIds']==q['sourceTaskIds'];assert len(u['optionReview'])==3
 for i,x in enumerate(u['optionReview']):assert x['text']==q['options'][i] and x['correct']==(i==q['answerIndex']) and x['finding']
for t in a['performanceTasks']:
 u=U[t['id']];assert u['text']==t['prompt'] and u['criteria']==t['criteria'] and u['selfCheck']==t['selfCheck'];assert {x['key']:x['text'] for x in u['criterionReview']}==t['criteria'] and all(x['finding'] for x in u['criterionReview'])
assert D['preservation']['baseline']=='96d70c9a65892351f08a56d9b8e07473c5d1a804' and D['preservation']['changedOptionTexts']==[] and D['preservation']['unchangedOptionTexts']==30
for f,h in D['sourceHashes'].items():assert hashlib.sha256((R/f).read_bytes()).hexdigest()==h
for x in assets:assert D['audioSnapshotHashes'][x['assetId']]==hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()
print('PASS B1.10: 100 units/36 exercise subitems/13 model parts/30 options/6 criteria; five pending assets/12 clips. Not language/acoustic certification.')
