import {pageHref} from './pages-router.js?v=pages-1';
/** Standalone public demonstration. No network calls or real personal data.
 * Storage is per-tab and contains only generated identifiers and sample times.
 * Availability is illustrative, never Eva's actual calendar. */
const TZ='Europe/Prague';
const STORAGE_KEY='eva.booking-preview.v1';
const DURATION=30*60000;
const NAME='Ukázkový rodič',EMAIL='ukazka@example.test';
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const clockParts=new Intl.DateTimeFormat('en-CA',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23',weekday:'short'});
const timeLabel=new Intl.DateTimeFormat('cs-CZ',{timeZone:TZ,hour:'2-digit',minute:'2-digit'});
const service={id:'intro',name:'Úvodní rozhovor s rodičem',description:'Ukázka online rezervace. Délku, cenu a skutečné termíny Eva potvrdí před spuštěním.',durationMinutes:30,priceLabel:'Bude doplněna',active:true,provisional:true};
export const previewConfig={publicPreview:true,mode:'demo',demo:true,timezone:TZ,bookingUrl:'',services:[service],content:{heroTitle:'Podpora řeči podle potřeb dítěte.',heroIntro:'Nejprve rozhovor s rodiči. Potom setkání s dítětem a další kroky podle jeho potřeb.',profile:'Rozhovor s rodiči, poznání potřeb dítěte a individuální plán péče.',materials:'Materiály Evy Dvořákové.',contactEmail:''},settings:{timezone:TZ,minNoticeHours:24,maxAdvanceDays:60,slotStepMinutes:30,bufferMinutes:15,workingHours:{'1':[['09:00','12:00'],['14:00','17:00']],'2':[['09:00','12:00']],'3':[['14:00','18:00']],'4':[['09:00','12:00']],'5':[['09:00','12:00']]}},integrations:{google:{provider:'preview',connected:false,ready:false},email:{provider:'preview',enabled:false,ready:false}}};
const copy=x=>JSON.parse(JSON.stringify(x));
const fail=(status,code,message)=>{const e=new Error(message);e.status=status;e.code=code;throw e;};
function parts(value){const p=Object.fromEntries(clockParts.formatToParts(new Date(value)).map(x=>[x.type,x.value]));return {date:`${p.year}-${p.month}-${p.day}`,year:+p.year,month:+p.month,day:+p.day,hour:+p.hour,minute:+p.minute,weekday:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].indexOf(p.weekday)};}
function validDate(value){return typeof value==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(value)&&Number.isFinite(Date.parse(`${value}T12:00:00Z`))&&new Date(`${value}T12:00:00Z`).toISOString().slice(0,10)===value;}
const addDays=(date,n)=>new Date(Date.parse(`${date}T12:00:00Z`)+n*86400000).toISOString().slice(0,10);
function instant(value){if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2}(?:\.\d{1,3})?)?(?:Z|[+-]\d{2}:\d{2})$/.test(value))return NaN;return Date.parse(value);}
// Probe offsets on both sides of the requested date and verify wall time.
// This preserves both repeated autumn instants and omits skipped spring times.
function wallInstants(date,minute){const rough=Date.parse(`${date}T00:00:00Z`)+minute*60000,offsets=new Set(),out=[];for(const delta of [-2,-1,0,1,2]){const t=rough+delta*86400000,p=parts(t);offsets.add(Date.UTC(p.year,p.month-1,p.day,p.hour,p.minute)-Math.floor(t/60000)*60000);}for(const offset of offsets){const ts=rough-offset,p=parts(ts);if(p.date===date&&p.hour*60+p.minute===minute)out.push(ts);}return [...new Set(out)].sort((a,b)=>a-b);}
let memory=null;
function load(){if(memory)return memory;memory={bookings:[],requests:[]};try{const saved=JSON.parse(sessionStorage.getItem(STORAGE_KEY)||'null');if(saved&&Array.isArray(saved.bookings)){memory.bookings=saved.bookings.slice(-100).filter(b=>UUID.test(b.id||'')&&UUID.test(b.token||'')&&Number.isFinite(instant(b.start))&&['demo_confirmed','cancelled'].includes(b.status)).map(b=>({id:b.id,token:b.token,start:new Date(instant(b.start)).toISOString(),status:b.status}));}if(saved&&Array.isArray(saved.requests)){memory.requests=saved.requests.slice(-200).filter(r=>UUID.test(r.key||'')&&UUID.test(r.id||'')&&['create','reschedule'].includes(r.action)&&Number.isFinite(instant(r.start))).map(r=>({key:r.key,id:r.id,action:r.action,start:new Date(instant(r.start)).toISOString()}));}}catch{}return memory;}
function persist(){const state=load();state.bookings=state.bookings.slice(-100);state.requests=state.requests.slice(-200);try{sessionStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch{/* Browsing with storage disabled still supports a page-local demo. */}}
function uuid(){return crypto.randomUUID();}
function requireService(id){if(id!=='intro')fail(400,'service_unavailable','V ukázce vyberte úvodní rozhovor.');}
function requestKey(input){if(typeof input!=='string'||!UUID.test(input))fail(400,'invalid_idempotency','Obnovte prosím ukázku a zkuste rezervaci znovu.');return input;}
function candidates(date){const settings=previewConfig.settings,now=Date.now(),weekday=parts(`${date}T12:00:00Z`).weekday,ranges=settings.workingHours[String(weekday)]||[],out=[];for(const [first,last]of ranges){const [h,m]=first.split(':').map(Number),[eh,em]=last.split(':').map(Number);for(let n=h*60+m;n+30<=eh*60+em;n+=settings.slotStepMinutes){for(const start of wallInstants(date,n)){const end=start+DURATION,p=parts(end);if(start<now+settings.minNoticeHours*3600000||start>now+settings.maxAdvanceDays*86400000||p.date!==date||p.hour*60+p.minute!==n+30)continue;out.push({start,end});}}}return out;}
function taken(start,end,excludeId){const pad=previewConfig.settings.bufferMinutes*60000;return load().bookings.some(b=>b.status!=='cancelled'&&b.id!==excludeId&&instant(b.start)-pad<end&&instant(b.start)+DURATION+pad>start);}
function validateSlot(start,excludeId){const ts=instant(start);if(!Number.isFinite(ts))fail(400,'invalid_slot','Vyberte den a čas z ukázkového kalendáře.');const slot=candidates(parts(ts).date).find(x=>x.start===ts);if(!slot)fail(409,'slot_unavailable','Tento ukázkový termín již není dostupný. Vyberte jiný.');if(taken(slot.start,slot.end,excludeId))fail(409,'slot_taken','V této ukázce už je termín obsazený. Vyberte jiný.');return slot;}
function response(row){const start=instant(row.start),token=row.token;return {demo:true,publicPreview:true,mode:'demo',service:copy(service),booking:{id:row.id,status:row.status,start:new Date(start).toISOString(),end:new Date(start+DURATION).toISOString(),serviceId:'intro',serviceName:service.name,durationMinutes:30,name:NAME,email:EMAIL,note:'',timezone:TZ,meetUrl:null,notificationStatus:'demo_not_sent',syncError:null},manageToken:token,manageUrl:pageHref(`/sprava-rezervace/?token=${encodeURIComponent(token)}`),tokenExpiresAt:new Date(start+DURATION+30*86400000).toISOString()};}
function body(options){if(options.body&&typeof options.body==='object')return options.body;if(typeof options.body==='string'){try{return JSON.parse(options.body);}catch{fail(400,'invalid_body','Ukázku se nepodařilo zpracovat.');}}return {};}
function priorRequest(key,action,start,id){const prior=load().requests.find(r=>r.key===key);if(!prior)return null;if(prior.action!==action||prior.start!==start||(id&&prior.id!==id))fail(409,'idempotency_mismatch','Tento pokus patří jiné ukázkové rezervaci. Obnovte stránku.');const row=load().bookings.find(b=>b.id===prior.id);if(!row)fail(404,'booking_not_found','Ukázková rezervace už není v tomto prohlížeči dostupná.');return row;}
/** Compatible subset of the local server API, entirely inside the browser. */
export async function previewApi(path,options={}){
 const url=new URL(path,'https://eva-preview.invalid'),method=(options.method||'GET').toUpperCase(),data=body(options),route=url.pathname;
 if(route==='/api/public'&&method==='GET')return copy(previewConfig);
 if(route==='/api/availability'&&method==='GET'){
  requireService(url.searchParams.get('serviceId')||'intro');const today=parts(Date.now()).date,from=url.searchParams.get('from')||today;if(!validDate(from)||from<today||from>addDays(today,previewConfig.settings.maxAdvanceDays))fail(400,'invalid_date','Vyberte den v dostupném období ukázky.');const days=[];for(let i=0;i<14;i++){const date=addDays(from,i),slots=candidates(date).filter(x=>!taken(x.start,x.end)).map(x=>({start:new Date(x.start).toISOString(),end:new Date(x.end).toISOString(),label:timeLabel.format(new Date(x.start))}));days.push({date,slots});}return {demo:true,publicPreview:true,mode:'demo',timezone:TZ,service:copy(service),days,generatedAt:new Date().toISOString()};
 }
 if(route==='/api/bookings'&&method==='POST'){
  requireService(data.serviceId);const key=requestKey(data.idempotencyKey),ts=instant(data.start);if(!Number.isFinite(ts))fail(400,'invalid_slot','Vyberte ukázkový termín.');const start=new Date(ts).toISOString(),prior=priorRequest(key,'create',start);if(prior)return response(prior);validateSlot(start);const row={id:uuid(),token:uuid(),start,status:'demo_confirmed'};load().bookings.push(row);load().requests.push({key,id:row.id,action:'create',start});persist();return response(row);
 }
 if(route.startsWith('/api/manage/')){
  let token;try{token=decodeURIComponent(route.slice('/api/manage/'.length));}catch{fail(404,'booking_not_found','Odkaz na ukázkovou rezervaci není platný.');}const row=UUID.test(token||'')?load().bookings.find(b=>b.token===token):null;if(!row||instant(row.start)+DURATION+30*86400000<Date.now())fail(404,'booking_not_found','Ukázková rezervace není v tomto prohlížeči dostupná. Vytvořte novou ukázku.');
  if(method==='GET')return response(row);
  if(method==='POST'&&data.action==='cancel'){row.status='cancelled';persist();return response(row);}
  if(method==='POST'&&data.action==='reschedule'){
   if(row.status==='cancelled')fail(409,'cancelled_booking','Zrušenou ukázkovou rezervaci nelze přesunout.');const key=requestKey(data.idempotencyKey),ts=instant(data.start);if(!Number.isFinite(ts))fail(400,'invalid_slot','Vyberte nový ukázkový termín.');const start=new Date(ts).toISOString(),prior=priorRequest(key,'reschedule',start,row.id);if(prior)return response(prior);validateSlot(start,row.id);row.start=start;load().requests.push({key,id:row.id,action:'reschedule',start});persist();return response(row);
  }
 }
 fail(404,'preview_only','Tato část není ve veřejné ukázce dostupná.');
}
