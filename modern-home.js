import {routeParams,pageHref} from './pages-router.js?v=pages-1';
const art='/eva-dvorakova-web/assets/illustrations/';
const variantUrl=avatar=>`${art}avatars/${avatar.gender}-${avatar.hair}-${avatar.eyes}-${avatar.outfit}.webp`;
const startingAvatar={gender:'boy',hair:'blond',eyes:'blue',outfit:'purple'};
const recordedAvatar={gender:'boy',hair:'brown',eyes:'brown',outfit:'purple'};
let rememberedAvatar={...startingAvatar};
const choices={hair:[['brown','Hnědé','#77513d'],['blond','Blond','#dfbd7e']],eyes:[['brown','Hnědé','#795341'],['blue','Modré','#729cbe']],outfit:[['purple','Fialové','#aa92d4'],['mint','Mátové','#9bcbb8']]};
function applyAvatarQuery(){const avatarQuery=routeParams();for(const [key,values] of Object.entries({gender:['boy','girl'],hair:['brown','blond'],eyes:['brown','blue'],outfit:['purple','mint']})){const value=avatarQuery.get(key);if(values.includes(value))rememberedAvatar[key]=value;}}
applyAvatarQuery();
function description(a){return `${a.gender==='boy'?'Chlapeček':'Holčička'}, ${a.hair==='brown'?'hnědé':'blond'} vlasy, ${a.eyes==='brown'?'hnědé':'modré'} oči, ${a.outfit==='purple'?'fialové':'mátové'} oblečení`;}
function img(name,alt,cls='',eager=false){return `<img class="${cls}" src="${art+name}" alt="${alt}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;}
export function renderModernHome(config,{icon,escape:esc}){
 applyAvatarQuery();
 const a=rememberedAvatar;
 const intro='Máte otázky k řeči svého dítěte? Nejprve si promluvíme. Další kroky domluvíme podle jeho potřeb.';
 const title='Podpora řeči.<br><em>Podle vašeho dítěte.</em>';
 return `<main id="main" class="mh-home">
  <section class="mh-hero shell" aria-labelledby="modern-title">
   <div class="mh-copy"><h1 class="mh-display" id="modern-title">${title}</h1><p class="mh-lead">${intro}</p><div class="mh-actions"><a class="mh-button" href="/rezervace/" data-link>Domluvit úvodní rozhovor ${icon('arrow')}</a><a class="mh-button ghost" href="#app-preview">Prohlédnout aplikaci ${icon('arrow')}</a></div></div>
   <div class="mh-scene">${img('story-world.webp','Papírový svět modrých stromů, sovy a husy vyrůstající z otevřené knihy','mh-world',true)}</div>
  </section>
  <section class="mh-app-section shell" id="app-preview" aria-labelledby="app-title">
   <div class="mh-app-grid">
    <div class="mh-app-copy"><span class="mh-kicker">Připravovaná aplikace mluvíme</span><h2 id="app-title">Průvodce pro<br><em>společné chvíle.</em></h2><p>Vyberte si průvodce, poslechněte český pozdrav a prohlédněte obrázkové kartičky.</p>
     <div class="mh-benefits" role="group" aria-label="Části ukázky"><button type="button" data-demo-view="choose" class="is-active" aria-pressed="true"><span>01</span>Vybrat průvodce ${icon('arrow')}</button><button type="button" data-demo-view="video" aria-pressed="false"><span>02</span>Poslechnout pozdrav ${icon('play')}</button><button type="button" data-demo-view="story" aria-pressed="false"><span>03</span>Obrázkové kartičky ${icon('book')}</button></div>
    </div>
    <div class="mh-device-wrap"><div class="mh-device"><div class="iphone-status" aria-hidden="true"><span class="iphone-clock">9:41</span><span class="iphone-island"></span><span class="iphone-indicators"><svg viewBox="0 0 60 14" fill="currentColor"><path d="M1 9h3v4H1zm5-3h3v7H6zm5-3h3v10h-3zm5-3h3v13h-3z"/><path d="M24 4c4-4 10-4 14 0l-2 2c-3-3-7-3-10 0zm3 4c2-2 6-2 8 0l-2 2c-1-1-3-1-4 0zm4 3 2 2h-4z"/><rect x="43" y="2" width="14" height="10" rx="2" fill="none" stroke="currentColor"/><rect x="45" y="4" width="10" height="6" rx="1"/><path d="M58 5h2v4h-2z"/></svg></span></div><div class="mh-device-top"><span>mluvíme<span class="mh-logo-dot">.</span></span><span class="mh-preview-badge">Ukázka</span></div><div class="mh-device-screen" id="demo-screen"></div><div class="mh-device-bottom"><span></span></div></div><p class="mh-device-note">Ukázka připravované aplikace.<br>Pro společné chvíle s dospělým.</p></div>
    <div class="mh-app-options">
     <div class="mh-customizer" aria-label="Vzhled průvodce"><fieldset><legend>Kdo půjde s vámi?</legend><div class="mh-gender">${[['boy','Chlapeček'],['girl','Holčička']].map(([gender,label])=>`<button type="button" data-avatar="gender" data-value="${gender}" aria-pressed="${a.gender===gender}">${img(`avatars/${gender}-${gender==='boy'?'blond':'brown'}-${gender==='boy'?'blue':'brown'}-purple.webp`,'')}<span>${label}</span>${icon('check')}</button>`).join('')}</div></fieldset><div class="mh-swatches">${Object.entries(choices).map(([key,values])=>`<fieldset><legend>${{hair:'Vlasy',eyes:'Oči',outfit:'Oblečení'}[key]}</legend><div>${values.map(([value,label,color])=>`<button type="button" data-avatar="${key}" data-value="${value}" aria-label="${{hair:'Vlasy',eyes:'Oči',outfit:'Oblečení'}[key]}: ${label}" aria-pressed="${a[key]===value}" style="--swatch:${color}"><span class="mh-swatch-color" aria-hidden="true"></span><span class="mh-swatch-label">${label}</span></button>`).join('')}</div></fieldset>`).join('')}</div><p class="mh-screen-status" aria-live="polite">${esc(description(a))}</p></div>
     <a class="mh-open-app" href="/aplikace/" data-open-full>Otevřít celou ukázku ${icon('arrow')}</a>
    </div>
   </div>
  </section>
  <section class="mh-source-section shell" aria-labelledby="source-title"><span class="mh-kicker">Z autorských materiálů Evy Dvořákové</span><h2 id="source-title">Materiály pro<br><em>společné procvičování.</em></h2><div class="mh-source-grid"><article><span>01</span><h3>S — Had</h3><p>Kamarádi na návštěvě. Sova, husa, kos, slimák, sojka a vosa.</p></article><article><span>02</span><h3>L — Zpěvák</h3><p>Slabiky, rytmus, koncert a grafomotorika.</p></article><article><span>03</span><h3>Mluvidla</h3><p>Jazyk, rty, tváře a zuby.</p></article></div><a class="mh-open-app" href="/materialy/" data-link>Prohlédnout materiály ${icon('arrow')}</a></section>
  <section class="mh-parent-section shell" aria-labelledby="parents-title"><div><h2 id="parents-title">Jak začíná<br><em>spolupráce.</em></h2></div><div class="mh-faq"><details><summary>Co probereme při prvním rozhovoru? ${icon('arrow')}</summary><p>Co vás trápí, co potřebujete a s čím chcete dítěti pomoci. První telefonický rozhovor patří vám, rodičům.</p></details><details><summary>Co následuje při setkání s dítětem? ${icon('arrow')}</summary><p>Eva se zaměří na řeč a mluvidla — jazyk, rty, tváře a zuby. Zjistí, které hlásky potřebují pozornost a zda je vhodná péče dalšího odborníka.</p></details><details><summary>Bude mít dítě vlastní plán? ${icon('arrow')}</summary><p>Podle setkání vzniknou konkrétní cíle a plán péče. Eva pro dítě připraví obrázkové kartičky se slovy k vybrané hlásce.</p></details></div></section>
  <section class="mh-final shell"><div><h2>Začneme<br><em>rozhovorem.</em></h2><p>Povězte Evě, co vás trápí a co vaše dítě právě potřebuje.</p><a class="mh-button secondary" href="/rezervace/" data-link>Domluvit úvodní rozhovor ${icon('arrow')}</a></div></section>
 </main>`;
}

export function renderAppPreview(config,helpers){
 const html=renderModernHome(config,helpers);
 const start=html.indexOf('  <section class="mh-app-section');
 const end=html.indexOf('  <section class="mh-source-section',start);
 const app=html.slice(start,end).replace(/<a class="mh-open-app"[^>]*data-open-full[^>]*>.*?<\/a>/,'');
 return `<main id="main" class="mh-home mh-app-only"><div class="shell subhero"><span class="eyebrow">Návrh aplikace</span><h1>Ukázka aplikace</h1></div>${app}</main>`;
}

export function mountModernHome(container,{icon,escape:esc}){
 if(!container)return ()=>{};
 const screen=container.querySelector('#demo-screen');
 if(!screen)return ()=>{};
 let active=true,view='choose',storyStep=0,storyBranch='',playAttempt=0;
 let avatar={...rememberedAvatar};
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const stateLabel=container.querySelector('.mh-screen-status');
 let observer=null;
 function stopVideo(){playAttempt++;const v=screen.querySelector('video');if(v){v.pause();v.removeAttribute('src');v.load();}}
 function updateChoice(){
  for(const button of container.querySelectorAll('[data-avatar]'))button.setAttribute('aria-pressed',String(avatar[button.dataset.avatar]===button.dataset.value));
  for(const button of container.querySelectorAll('[data-demo-view]')){const on=button.dataset.demoView===view || (view==='done' && button.dataset.demoView==='story');button.setAttribute('aria-pressed',String(on));button.classList.toggle('is-active',on);}
  stateLabel.textContent=description(avatar);
  rememberedAvatar={...avatar};
  const fullLink=container.querySelector('[data-open-full]');if(fullLink)fullLink.href=pageHref('/aplikace/?'+new URLSearchParams({avatar:'1',gender:avatar.gender,hair:avatar.hair,eyes:avatar.eyes,outfit:avatar.outfit}));
  container.querySelector('.mh-customizer').hidden=view!=='choose';
 }
 function phone(){
  stopVideo();
  if(view==='choose')screen.innerHTML=`<div class="mh-preview-title"><span>Tvůj průvodce</span><h3>Vyber si průvodce.</h3></div><div class="mh-portrait-container"><img class="mh-portrait-img" src="${variantUrl(avatar)}" alt="${esc(description(avatar))}" decoding="async"></div><div class="mh-screen-actions"><button type="button" class="mh-play" data-phone="story">Ukázka materiálu ${icon('arrow')}</button><button type="button" class="mh-screen-text" data-phone="video">${icon('play')} Pozdrav chlapečka</button></div><div class="mh-screen-progress" aria-label="První část ukázky"><i class="on"></i><i></i><i></i></div>`;
  else if(view==='video')screen.innerHTML=`<div class="mh-preview-title"><span>Český pozdrav · chlapeček</span><h3>Nejdřív já. Potom ty.</h3></div><div class="mh-preview-video"><video src="/eva-dvorakova-web/assets/video/boy-intro-heygen.mp4" playsinline preload="metadata" poster="${variantUrl(recordedAvatar)}" aria-label="Český pozdrav animovaného chlapečka"></video><button type="button" class="mh-video-replay" data-phone="play" aria-hidden="true" tabindex="-1" aria-label="Přehrát český pozdrav">${icon('play')}</button></div><p class="mh-video-caption" role="status">Pusť si mě a zaposlouchej se.</p><div class="mh-screen-actions"><button type="button" class="mh-play" data-phone="play">Přehrát pozdrav ${icon('play')}</button><button type="button" class="mh-screen-text" data-phone="choose">Zpět k mému průvodci</button></div><div class="mh-screen-progress" aria-label="Druhá část ukázky"><i></i><i class="on"></i><i></i></div>`;
  else if(view==='story' && storyStep===0)screen.innerHTML=`<div class="mh-preview-title"><span>Materiál Evy · S — Had</span><h3>Kamarádi na návštěvě</h3></div><div class="mh-preview-story"><p>Vyber si obrázek.</p><div class="mh-animal-choices"><button type="button" data-animal="owl">${img('owl.webp','')}<span>SOVA</span></button><button type="button" data-animal="goose">${img('goose.webp','')}<span>HUSA</span></button></div><p class="mh-source-credit">Z části Kamarádi na návštěvě</p></div><div class="mh-screen-progress" aria-label="Ukázka autorského materiálu"><i></i><i></i><i class="on"></i></div>`;
  else screen.innerHTML=`<div class="mh-preview-title"><span>Materiál Evy · S — Had</span><h3>Obrázková kartička</h3></div><div class="mh-preview-done"><img src="${art}${storyBranch==='goose'?'goose':'owl'}.webp" alt="${storyBranch==='goose'?'Husa':'Sova'}"><p class="mh-source-word"><strong>${storyBranch==='goose'?'HUSA':'SOVA'}</strong></p><span class="mh-source-credit">Kamarádi na návštěvě · KLC S</span><button type="button" class="mh-play" data-phone="restart">Zpět k obrázkům ${icon('back')}</button></div>`;
  updateChoice();
 }
 async function play(){
  const v=screen.querySelector('video');if(!v)return;
  if(!v.paused){v.pause();return;}
  const token=++playAttempt;
  const label=screen.querySelector('.mh-video-caption');
  if(v.ended)v.currentTime=0;
  label.textContent='Načítám pozdrav…';
  const paint=()=>{if(!active||!v.isConnected)return;const playing=!v.paused&&!v.ended;screen.querySelector('.mh-preview-video')?.classList.toggle('is-playing',playing);for(const b of screen.querySelectorAll('[data-phone="play"]')){b.setAttribute('aria-label',playing?'Zastavit pozdrav':'Přehrát český pozdrav');if(b.classList.contains('mh-play'))b.innerHTML=`${playing?'Zastavit pozdrav':'Přehrát znovu'} ${icon(playing?'close':'play')}`;}label.textContent=playing?'Ahoj! Půjdeme si spolu hrát?':v.ended?'Teď můžeš odpovědět ty.':'Pusť si mě a zaposlouchej se.';};
  v.onplaying=paint;v.onpause=paint;v.onended=paint;
  v.onerror=()=>{if(active&&v.isConnected)label.textContent='Pozdrav se nepodařilo načíst. Zkus to prosím znovu.';};
  try{await v.play();if(!active||token!==playAttempt)v.pause();}catch{if(active&&token===playAttempt)label.textContent='Klepni prosím ještě jednou na Přehrát pozdrav.';}
 }
 async function onClick(event){
  const button=event.target.closest('button');if(!button||!container.contains(button))return;
  if(button.dataset.avatar){const key=button.dataset.avatar,value=button.dataset.value;const valid=key==='gender'?['boy','girl']:choices[key]?.map(v=>v[0]);if(!valid?.includes(value))return;avatar[key]=value;if(key==='gender'){avatar.hair=value==='boy'?'blond':'brown';avatar.eyes=value==='boy'?'blue':'brown';}view='choose';phone();button.focus({preventScroll:true});}
  if(button.dataset.demoView){view=button.dataset.demoView;storyStep=0;phone();if(view==='video')await play();}
  if(button.dataset.animal){storyBranch=button.dataset.animal;storyStep=1;phone();}
  if(button.dataset.phone){const action=button.dataset.phone;if(action==='play')await play();else{if(action==='restart'){view='story';storyStep=0;}else{view=action;if(action==='story')storyStep=0;}phone();if(view==='video')await play();}}
 }
 function stopWhenHidden(){if(document.hidden){const v=screen.querySelector('video');v?.pause();playAttempt++;}}
 function onPageHide(){playAttempt++;screen.querySelector('video')?.pause();}
 container.addEventListener('click',onClick);document.addEventListener('visibilitychange',stopWhenHidden);window.addEventListener('pagehide',onPageHide);
 phone();
 if(!motion.matches && 'IntersectionObserver' in window){observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('mh-visible');observer.unobserve(entry.target);}},{threshold:.08});for(const el of container.querySelectorAll('.mh-bento-card,.mh-parent-section,.mh-final')){el.classList.add('mh-reveal');observer.observe(el);}}
 return ()=>{active=false;stopVideo();observer?.disconnect();container.removeEventListener('click',onClick);document.removeEventListener('visibilitychange',stopWhenHidden);window.removeEventListener('pagehide',onPageHide);};
}
