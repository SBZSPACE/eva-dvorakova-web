import {pageHref} from './pages-router.js?v=eva-notes-13';
const assetBase='/eva-dvorakova-web/assets/illustrations/auticka/';
// Text follows the two supplied scans. Illustration and UI are new; no speech assessment.
export const journeySteps=[
 {title:'Doma v garáži',story:'Bylo jedno malé jazykoauto, které bydlelo ve velké pusogaráži.',instruction:'Tvůj jazýček je autíčko. Mezi každým cvičením si odpočiň, jazýček schovej do pusinky.',alt:'Červené autíčko odpočívá v útulné garáži.'},
 {title:'Dobré ráno',story:'Ráno autíčko vyjelo z garáže a zamávalo sluníčku.',instruction:'Otevři doširoka ústa a zamávej špičkou jazyka opakovaně nahoru a dolů. Brada se nehýbe.',alt:'Autíčko vyjíždí z garáže do slunečného rána.'},
 {title:'Podíváme se vpravo',story:'Rozhlédlo se vpravo a zablikalo světlem.',instruction:'Otevři doširoka ústa a vyplázni jazyk do pravého koutku, chvilku tam vydrž.',alt:'Červené autíčko se obrací doprava a bliká světlem.'},
 {title:'A také vlevo',story:'Rozhlédlo se vlevo a zablikalo.',instruction:'Otevři doširoka ústa a vyplázni jazyk do levého koutku, chvilku tam vydrž.',alt:'Červené autíčko se obrací doleva a bliká světlem.'},
 {title:'Cesta po rovince',story:'Potom se pomalu rozjelo po rovince.',instruction:'Otevři doširoka ústa a vyplázni jazyk rovně ven z úst.',alt:'Autíčko jede po rovné cestičce mezi zelenými kopečky.'},
 {title:'Začalo pršet',story:'Začalo pršet, a tak zapnulo stěrače.',instruction:'Vyplázni jazyk z úst a olizuj horní ret zprava doleva a zpět – pohyb stěračů.',alt:'Na autíčko padají kapky a stěrače otírají přední sklo.'},
 {title:'Z kopečka dolů',story:'Sjelo dolů z kopečka.',instruction:'Pomalým pohybem vyplázni jazyk z úst směrem na bradu.',alt:'Autíčko sjíždí mírný zelený kopeček.'},
 {title:'Zastávka u pumpy',story:'Pod kopcem stála pumpa, autíčko radostí zamlaskalo.',instruction:'Výrazně zamlaskej jazykem a rty.',alt:'Autíčko přijíždí k malé čerpací stanici.'},
 {title:'Doplníme energii',story:'Hladově pilo, až to v nádrži cvakalo.',instruction:'Mlaskáme jazykem o horní patro (koník).',alt:'Autíčko doplňuje palivo u čerpací stanice.'},
 {title:'Jedeme do myčky',story:'Potom autíčko zamířilo do myčky, která ho celé umyla.',instruction:'Olizuj se jazykem okolo úst. Po chvilce změň směr olizování.',alt:'Autíčko projíždí myčkou s měkkými kartáči a bublinkami.'},
 {title:'Zase do kopečka',story:'Potom spokojeně vyjelo na kopeček.',instruction:'Pomalým pohybem vyplázni jazyk z úst směrem nahoru k nosu.',alt:'Čisté autíčko vyjíždí po cestě do mírného kopce.'},
 {title:'Ahoj, sluníčko',story:'Na rozloučenou ještě pozdravilo sluníčko.',instruction:'Otevři doširoka ústa a zamávej špičkou jazyka opakovaně nahoru a dolů. Brada se nehýbe.',alt:'Autíčko zdraví sluníčko u své garáže.'},
 {title:'Zpátky domů',story:'A zacouvalo zpátky do garáže.',instruction:'Otevři doširoka ústa a pomalu posouvej jazyk po spodině směrem dovnitř úst.',alt:'Autíčko couvá do útulné garáže.'},
 {title:'Dobrou noc, autíčko',story:'Ještě za sebou zavřelo vrata a zamklo.',instruction:'Zavři ústa a otírej jeden ret o druhý několikrát za sebou.',alt:'Garáž je zavřená a autíčko uvnitř odpočívá.'}
];
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function scene(index,cls=''){
 const sheet=index<7?1:2,cell=index%7,x=(cell%2)*100,y=Math.floor(cell/2)*(100/3);
 return `<div class="car-scene ${cls}" role="img" aria-label="${esc(journeySteps[index].alt)}" style="--scene:url('${assetBase}atlas-${sheet}.png');--sx:${x}%;--sy:${y}%"></div>`;
}
export function renderJourney(){return `<main id="main" class="journey-page"><section class="shell journey-intro"><a class="text-link" href="/materialy/" data-link>← Zpět k materiálům</a><span class="eyebrow">Příběh pro společnou chvíli</span><h1>Malé autíčko.<br><em>Velký výlet.</em></h1><p>Čtrnáct obrázků, jedna společná cesta. Přečtěte dítěti příběh a prohlédněte si, co autíčko potkává.</p></section><section class="shell journey-layout" aria-label="Obrázkový příběh Jazýčkoauto"><div class="journey-reader" id="journey-reader"></div><aside class="journey-overview"><h2>Kam nás cesta zavede</h2><p>Můžete se kdykoli vrátit nebo si dát pauzu.</p><ol>${journeySteps.map((s,i)=>`<li><button type="button" data-journey-step="${i}" aria-label="Obrázek ${i+1}: ${esc(s.title)}"><span>${String(i+1).padStart(2,'0')}</span>${esc(s.title)}</button></li>`).join('')}</ol></aside></section><section class="shell journey-parent"><h2>Pro společné použití s dospělým</h2><p>Pokyny k pusince rozbalíte u jednotlivých obrázků. Používejte aktivity, které jsme pro Vaše dítě vybrali a společně si ukázali. Nemusíte projít všech čtrnáct kroků najednou.</p><p class="journey-source">Výtvarná ukázka podle dodaného pracovního listu „Jazýčkoauto“. Ilustrace jsou nově vytvořené; pokyny jsou převzaté z podkladu a čekají na autorskou revizi pro tuto aplikaci. Obrázky vyprávějí příběh, nepředvádějí přesnou polohu jazyka. Náhled dítě nenahrává ani nehodnotí jeho řeč.</p><a class="text-link" href="/konzultace/" data-link>Jak vybereme aktivity pro Vaše dítě →</a></section></main>`;}
export function mountJourney(container){
 if(!container)return ()=>{};
 let index=0,paused=false,finished=false;const reader=container.querySelector('#journey-reader');if(!reader)return ()=>{};
 function paint(focus=false){
  const step=journeySteps[index];
  reader.innerHTML=finished?`<div class="journey-finish">${scene(13)}<div class="journey-copy"><span class="eyebrow">Dnešní příběh je u konce</span><h2 tabindex="-1">Děkujeme za společnou chvíli.</h2><p>Autíčko už je doma. Můžete si povědět, která zastávka se Vám líbila nejvíc.</p><button class="btn" type="button" data-journey-action="restart">Prohlédnout znovu ↺</button><a class="text-link" href="${pageHref('/materialy/')}" data-link>Zpět k materiálům →</a></div></div>`:`<div class="journey-scene-wrap">${scene(index)}<span class="journey-count">${String(index+1).padStart(2,'0')} / 14</span>${paused?'<div class="journey-pause"><span>Chvilka pro Vás.</span><p>Až budete chtít, pokračujte dál.</p><button class="btn" type="button" data-journey-action="pause">Pokračovat v příběhu →</button></div>':''}</div><div class="journey-copy"><div class="journey-title-line"><h2 tabindex="-1">${esc(step.title)}</h2><button class="journey-pause-button" type="button" data-journey-action="pause" aria-pressed="${paused}">${paused?'Pokračovat':'Dát si pauzu'}</button></div><p class="journey-story">${esc(step.story)}</p><details class="journey-instruction"><summary>Pro dospělého: pokyn k pusince <span aria-hidden="true">+</span></summary><p>${esc(step.instruction)}</p><small>Text z dodaného pracovního listu. Mezi kroky si odpočiňte.</small></details><div class="journey-controls"><button class="btn outline" type="button" data-journey-action="prev" ${index===0||paused?'disabled':''}>← Zpět</button><button class="btn" type="button" data-journey-action="next" ${paused?'disabled':''}>${index===13?'Dokončit příběh':'Další obrázek'} →</button></div></div>`;
  for(const b of container.querySelectorAll('[data-journey-step]')){const on=Number(b.dataset.journeyStep)===index&&!finished;b.setAttribute('aria-current',on?'step':'false');b.disabled=paused;}
  if(focus)reader.querySelector('h2')?.focus({preventScroll:true});
 }
 function click(e){
  const b=e.target.closest('button');if(!b||!container.contains(b)||b.disabled)return;
  if(b.dataset.journeyStep!==undefined){index=Number(b.dataset.journeyStep);paused=false;finished=false;paint(true);reader.scrollIntoView({behavior:'auto',block:'start'});return;}
  const action=b.dataset.journeyAction;if(!action)return;
  if(action==='pause'){paused=!paused;paint();reader.querySelector('[data-journey-action="pause"]')?.focus({preventScroll:true});return;}
  if(action==='restart'){index=0;paused=false;finished=false;}
  if(action==='next'){if(index===13)finished=true;else index++;}
  if(action==='prev')index=Math.max(0,index-1);
  paint(true);
 }
 container.addEventListener('click',click);paint();return()=>container.removeEventListener('click',click);
}
