#!/usr/bin/env python3
from pathlib import Path
import json,re,sys,hashlib
p=Path('content/B2/lesson-10-wishes-probabilities-technology-konjunktiv2-past.md');s=p.read_text();a=json.loads(p.with_suffix('.assessment.json').read_text());c=next(x for x in json.load(open('data/course.json'))['lessons'] if x['id']=='b2-10-wishes-probabilities-technology-konjunktiv2-past');assets=[x for x in json.load(open('data/audio-playlists.json'))['audioAssets'] if x['lessonId']=='b2-10-wishes-probabilities-technology-konjunktiv2-past']
assert a['assessment']['version']==c['assessment']['version']=='b2-10-v2' and a['assessment']['status']=='ready' and a['assessment']['minimumScore']==80 and a['assessment']['minimumItems']==10
assert [q['answerIndex'] for q in a['quiz']]==[0,0,1,2,1,2,0,2,1,1] and sum(len(q['options']) for q in a['quiz'])==30
assert [q['sourceTaskIds'] for q in a['quiz']]==[['DL-B2-10-T01'],['DL-B2-10-T02'],['DL-B2-10-T02'],['DL-B2-10-T03'],['DL-B2-10-T03'],['DL-B2-10-T04'],['DL-B2-10-T05'],['DL-B2-10-T05'],['DL-B2-10-T06'],['DL-B2-10-T07']]
t1,t2=a['performanceTasks']
assert t1['modality']==['writing'] and not t1['selfCheck']['speakAloud'] and t1['selfCheck']['minimumResponseCharacters']==180 and t1['sourceTaskIds']==['DL-B2-10-T08']
assert t2['modality']==['writing','speaking'] and t2['selfCheck']['speakAloud'] and t2['selfCheck']['minimumResponseCharacters']==200 and t2['sourceTaskIds']==['DL-B2-10-T05','DL-B2-10-T06','DL-B2-10-T07','DL-B2-10-T08']
for t in (t1,t2):assert t['selfCheck']['audioRequired'] is False and t['selfCheck']['requiredChecks']==['taskCompletion','meaningClarity','targetSkill']
for x in ['ملاحظة حول الجمع وتصريف الأفعال في الجدول:','### مساعدة قبل النصوص والمهمات','3. Was hätte das Team bei früheren Tests auf mehreren Geräten wahrscheinlich vor der Vorführung bemerkt?','2. Was wäre nach dem Gerätefehler leichter gewesen, wenn sie eine Sicherungskopie erstellt hätte?','5. شرط يجب توفّره قبل تشغيل ميزة أو تثبيت تحديث: **die Voraussetzung / der Zugriff**','4. Wenn die Verbindung stabiler gewesen wäre, ______ die Datei schneller übertragen ______.','3. **Die Einstellungen wurden nicht früh geprüft. Die Störung trat beim ersten Versuch auf.**','4. شرط ماضٍ بالمبني للمجهول: **Wenn die Schnittstelle vor der Vorführung geprüft ______ wäre, wäre keine Störung aufgetreten.**','1. Die Person hätte früher eine ______ erstellen sollen.','4. **Die Testphase war zu kurz. Deshalb wurde das Update noch nicht veröffentlicht.**','- **تمرين 1:** 1. die Schnittstelle، 2. die Störung، 3. kompatibel، 4. zurücksetzen، 5. die Voraussetzung.','- **تمرين 6:** 1. Sicherungskopie، 2. wiederherstellen، 3. Schnittstelle، 4. unterstützt، 5. überprüfen.','الجزء (أ) — المهمة الكتابية الأساسية (`DL-B2-10-P01` — كتابة فقط):','الجزء (ب) — المهمة التراكمية المتكاملة (`DL-B2-10-P02` — كتابة + قراءة بصوت واضح):','## 8) نماذج مكتوبة للمهمات العملية','In unserem fiktiven Testprojekt gab es gestern eine kurze Störung','In der fiktiven Leseübung testet ein Entwicklungsteam eine neue Planungs-App','## 9) بطاقات مراجعة']:assert x in s,x
T={int(m[1]):m[2].strip() for m in re.finditer(r'^### تمرين (\d+) — [^\n]+\n([\s\S]*?)(?=^### |^## |\Z)',s,re.M)}
counts=[len(re.findall(r'^\d\. ',T[i],re.M)) for i in range(1,8)]+[10]
assert counts==[5,4,4,4,5,5,4,10] and sum(counts)==41,counts
assert len(assets)==5 and sum(len(x['segments']) for x in assets)==10 and all(x['status']=='generated_pending_acoustic_review' and x['transcriptPolicy']=='offer' for x in assets)
assert [z['voiceId'] for x in assets for z in x['segments']]==['voice-02','voice-02','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03','voice-02','voice-03']
if '--implementation-only' in sys.argv:
 print('PASS B2.10 implementation-only: b2-10-v2, 41 exercise subitems, 10 model parts, 5 pending assets/10 clips.');sys.exit(0)
r=json.load(open('data/reviews/b2-10-review.json'));md=Path('data/reviews/b2-10-review.md').read_text();U=r['units']
assert r['lessonId']=='b2-10-wishes-probabilities-technology-konjunktiv2-past' and r['assessmentVersion']=='b2-10-v2' and r['unitCount']==len(U)==91 and r['exerciseSubItemCount']==41 and r['modelPartCount']==10 and not r['acousticReviewed'] and not r['cefrCertification']
assert len(r['sources'])==40 and sum(x['access']=='full_fetched_page' for x in r['sources'])==40 and len(r['excludedSources'])==4
assert sum(len(u.get('items',[])) for u in U if u['id'].startswith('DL-B2-10-T'))==41
assert sum(len(u.get('items',[])) for u in U if u['id'].endswith('model-01'))==10
assert [len(u['items']) for u in U if '-AUD-' in u['id']]==[15,5,6,8,5]
assert sum(len(u.get('optionReview',[])) for u in U if u['id'].startswith('DL-B2-10-Q'))==30
assert sum(len(u.get('criterionReview',[])) for u in U if u['id'].startswith('DL-B2-10-P'))==6
for f,h in r['sourceHashes'].items():assert hashlib.sha256(Path(f).read_bytes()).hexdigest()==h,f
for x in assets:assert hashlib.sha256(json.dumps(x,ensure_ascii=False,sort_keys=True).encode()).hexdigest()==r['audioSnapshotHashes'][x['assetId']]
for u in U:assert f"### {u['id']}" in md and u['finding'] in md,u['id']
print('PASS B2.10: 91 units/41 exercise subitems/10 model parts/30 options/6 criteria; five pending assets/10 clips. Not language/acoustic certification.')
