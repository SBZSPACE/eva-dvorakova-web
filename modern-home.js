import {routeParams,pageHref} from './pages-router.js?v=eva-notes-13';
const art='/eva-dvorakova-web/assets/illustrations/';
const variantUrl=avatar=>`${art}avatars/${avatar.gender}-${avatar.hair}-${avatar.eyes}-${avatar.outfit}.webp`;
const startingAvatar={gender:'boy',hair:'blond',eyes:'blue',outfit:'purple'};
let rememberedAvatar={...startingAvatar};
const choices={hair:[['brown','Hnědé','#77513d'],['blond','Blond','#dfbd7e']],eyes:[['brown','Hnědé','#795341'],['blue','Modré','#729cbe']],outfit:[['purple','Fialové','#aa92d4'],['mint','Mátové','#9bcbb8']]};
function applyAvatarQuery(){const avatarQuery=routeParams();for(const [key,values] of Object.entries({gender:['boy','girl'],hair:['brown','blond'],eyes:['brown','blue'],outfit:['purple','mint']})){const value=avatarQuery.get(key);if(values.includes(value))rememberedAvatar[key]=value;}}
applyAvatarQuery();
function description(a){return `${a.gender==='boy'?'Chlapeček':'Holčička'}, ${a.hair==='brown'?'hnědé':'blond'} vlasy, ${a.eyes==='brown'?'hnědé':'modré'} oči, ${a.outfit==='purple'?'fialové':'mátové'} oblečení`;}
function img(name,alt,cls='',eager=false){return `<img class="${cls}" src="${art+name}" alt="${alt}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;}
export function renderPricing({icon,id='pricing'}) {
 return `<section class="eva-pricing shell" aria-labelledby="${id}"><div class="eva-pricing-heading"><div><h2 id="${id}">Nejprve si<br><em>promluvíme.</em></h2></div></div><div class="eva-price-grid"><article><h3>Úvodní rozhovor</h3><p class="eva-price">Zdarma</p><p>Probereme Vaše otázky a možnosti další spolupráce.</p></article><article><h3>Další spolupráce</h3><p>Cenu a další postup si společně domluvíme.</p></article></div></section>`;
}

export function renderModernHome(config,{icon,escape:esc}){
 applyAvatarQuery();
 const a=rememberedAvatar;
 const intro='Společně najdeme cestu, která bude vyhovovat právě Vašemu dítěti.';
 const title='Pomáhám dětem<br><em>rozvíjet řeč.</em>';
 return `<main id="main" class="mh-home">
  <section class="mh-hero shell" aria-labelledby="modern-title">
   <div class="mh-copy"><h1 class="mh-display" id="modern-title">${title}</h1><p class="mh-lead">${intro}</p><div class="mh-actions"><a class="mh-button" href="/kontakt/" data-link>Domluvit rozhovor ${icon('arrow')}</a><a class="mh-button ghost" href="#spoluprace">Jak to probíhá ${icon('arrow')}</a></div><p class="eva-intro-free">První rozhovor s rodičem je zdarma.</p></div>
   <div class="mh-scene hero-kids" aria-label="Ukázka dětských průvodců budoucí aplikace"><div class="hero-kid hero-boy">${img('avatars/boy-blond-blue-mint.webp','Usměvavý chlapeček, průvodce budoucí aplikací','',true)}</div><div class="hero-kid hero-girl">${img('avatars/girl-brown-brown-purple.webp','Usměvavá holčička, průvodkyně budoucí aplikací','',true)}</div></div>
  </section>
  <section class="shell eva-profile eva-profile-compact" id="o-eve" aria-labelledby="eva-profile-title"><div class="eva-profile-head"><h2 id="eva-profile-title">Dobrý den,<br><em>jsem Eva.</em></h2><a class="mh-open-app" href="/o-mne/" data-link>Více o mně ${icon('arrow')}</a></div><dl class="eva-profile-facts"><div><dt>Od roku 1985</dt><dd>ve školství</dd></div><div><dt>34 let</dt><dd>ve speciální logopedické třídě</dd></div><div><dt>20 let</dt><dd>vedení mateřské školy</dd></div></dl></section>
  <section class="shell eva-flow" id="spoluprace" aria-labelledby="flow-title"><div class="eva-section-heading"><h2 id="flow-title">Začneme rozhovorem.</h2></div><div class="eva-flow-grid"><article><span>01</span><h3>Promluvíme si</h3><p>Řeknete mi, co Vás trápí a co Vaše dítě potřebuje.</p></article><article><span>02</span><h3>Poznáme se</h3><p>Při setkání s dítětem společně zjistíme, na co se zaměřit.</p></article><article><span>03</span><h3>Najdeme další krok</h3><p>Domluvíme si postup a vybereme vhodné hry a materiály.</p></article></div><a class="mh-open-app" href="/kontakt/" data-link>Domluvit rozhovor ${icon('arrow')}</a></section>
  <section class="shell eva-voucher" id="vanocni-poukaz" aria-labelledby="voucher-title">
   <div class="voucher-copy">
    <p class="voucher-season">Vánoční poukaz</p>
    <h2 id="voucher-title">Darujte <br><em>společné chvíle.</em></h2>
    <p>Dárkový poukaz na setkání s Evou pro malé objevitele a jejich rodiče.</p>
    <a class="btn" href="/eva-dvorakova-web/assets/poukaz/vanocni-poukaz-vzor.pdf" download>Stáhnout vzor (PDF) ${icon('arrow')}</a>
    <small>Prodej poukazů připravujeme.</small>
   </div>
   <div class="voucher-paper"><img src="/eva-dvorakova-web/assets/poukaz/vanocni-poukaz-vzor.webp" alt="Náhled vánočního poukazu na setkání s Evou" width="1380" height="973" loading="lazy"></div>
  </section>
  <section class="mh-app-section shell" id="app-preview" aria-labelledby="app-title">
   <div class="mh-app-grid">
    <div class="mh-app-copy"><h2 id="app-title">Malý průvodce.<br><em>Velké objevování.</em></h2><p class="eva-app-intro">Hravý svět obrázků a společných úkolů, který pro Vás připravujeme.</p>
     <div class="mh-benefits" role="group" aria-label="Části ukázky"><button type="button" data-demo-view="choose" class="is-active" aria-pressed="true"><span>01</span>Průvodce ${icon('arrow')}</button><button type="button" data-demo-view="video" aria-pressed="false"><span>02</span>Pozdrav ${icon('arrow')}</button><button type="button" data-demo-view="story" aria-pressed="false"><span>03</span>Kartičky ${icon('book')}</button></div>
    </div>
    <div class="mh-device-wrap"><div class="mh-device"><div class="iphone-status" aria-hidden="true"><span class="iphone-clock">9:41</span><span class="iphone-island"></span><span class="iphone-indicators"><svg viewBox="0 0 60 14" fill="currentColor"><path d="M1 9h3v4H1zm5-3h3v7H6zm5-3h3v10h-3zm5-3h3v13h-3z"/><path d="M24 4c4-4 10-4 14 0l-2 2c-3-3-7-3-10 0zm3 4c2-2 6-2 8 0l-2 2c-1-1-3-1-4 0zm4 3 2 2h-4z"/><rect x="43" y="2" width="14" height="10" rx="2" fill="none" stroke="currentColor"/><rect x="45" y="4" width="10" height="6" rx="1"/><path d="M58 5h2v4h-2z"/></svg></span></div><div class="mh-device-top"><span>mluvíme<span class="mh-logo-dot">.</span></span><span class="mh-preview-parent">Pro rodiče ↗</span></div><div class="mh-device-screen" id="demo-screen"></div><div class="mh-device-bottom"><span></span></div></div></div>
    <div class="mh-app-options">
     <details class="mh-customizer-disclosure"><summary>Vybrat dítě a vzhled <span aria-hidden="true">＋</span></summary><div class="mh-customizer" aria-label="Vzhled průvodce"><fieldset><legend>Kdo půjde s Vámi?</legend><div class="mh-gender">${[['boy','Chlapeček'],['girl','Holčička']].map(([gender,label])=>`<button type="button" data-avatar="gender" data-value="${gender}" aria-pressed="${a.gender===gender}">${img(`avatars/${gender}-${gender==='boy'?'blond':'brown'}-${gender==='boy'?'blue':'brown'}-purple.webp`,'')}<span>${label}</span>${icon('check')}</button>`).join('')}</div></fieldset><div class="mh-swatches">${Object.entries(choices).map(([key,values])=>`<fieldset><legend>${{hair:'Vlasy',eyes:'Oči',outfit:'Oblečení'}[key]}</legend><div>${values.map(([value,label,color])=>`<button type="button" data-avatar="${key}" data-value="${value}" aria-label="${{hair:'Vlasy',eyes:'Oči',outfit:'Oblečení'}[key]}: ${label}" aria-pressed="${a[key]===value}" style="--swatch:${color}"><span class="mh-swatch-color" aria-hidden="true"></span><span class="mh-swatch-label">${label}</span></button>`).join('')}</div></fieldset>`).join('')}</div><p class="mh-screen-status screen-reader-only" aria-live="polite">${esc(description(a))}</p></div></details>
     <a class="mh-open-app" href="/aplikace/" data-link data-open-full>Prohlédnout ukázku ${icon('arrow')}</a>
    </div>
   </div>
  </section>
  <section class="mh-source-section shell" id="materialy" aria-labelledby="source-title"><h2 id="source-title">Hrajeme si.<br><em>Objevujeme.</em></h2><p class="eva-material-intro">Obrázky a hry podle potřeb Vašeho dítěte.</p><div class="mh-source-grid eva-compact-grid"><article><span class="mh-tile-art mh-tile-car" aria-hidden="true"></span><h3><a href="/auticka/" data-link>Jazýčkoauto</a></h3></article><article><span class="mh-tile-art mh-tile-owl" aria-hidden="true"><img src="/eva-dvorakova-web/assets/illustrations/owl.webp" alt=""></span><h3><a href="/materialy/" data-link>Obrázkové kartičky</a></h3></article><article><span class="mh-tile-art mh-tile-goose" aria-hidden="true"><img src="/eva-dvorakova-web/assets/illustrations/goose.webp" alt=""></span><h3><a href="/materialy/" data-link>Hry pro každý den</a></h3></article><article><span class="mh-tile-art mh-tile-breath" aria-hidden="true">✦</span><h3><a href="/materialy/" data-link>Mluvidla a dech</a></h3></article></div><a class="mh-open-app" href="/materialy/" data-link>Prohlédnout materiály ${icon('arrow')}</a></section>
  <section class="shell eva-example" aria-labelledby="example-title"><div class="eva-example-illustration"><img src="/eva-dvorakova-web/assets/illustrations/owl.webp" alt="Ilustrace sovičky" loading="lazy"></div><div><h2 id="example-title">Stačí jeden obrázek.</h2><p>Kartička je obrázek. Hra začíná společným povídáním.</p><div class="eva-dialogue"><p><span>Vy</span> Co vidíš?</p><p><span>Dítě</span> Sovu.</p><p><span>Vy</span> Kde asi sedí?</p></div></div></section>
  <section class="shell eva-book" id="knizka" aria-labelledby="book-title"><div class="eva-book-art" role="img" aria-label="Ilustrace příběhového světa se sovičkou a husou"></div><div><p class="eva-book-note">PŘIPRAVUJEME</p><h2 id="book-title">Příběhy, ke kterým<br><em>se můžete vracet.</em></h2><p>Evin svět obrázků a her také mimo obrazovku.</p></div></section>
  <section class="shell eva-contact" id="kontakt-doma" aria-labelledby="contact-home-title"><div><h2 id="contact-home-title">Začněme<br><em>rozhovorem.</em></h2><p>První rozhovor je zdarma.</p><a class="mh-button" href="/kontakt/" data-link>Domluvit rozhovor ${icon('arrow')}</a><p class="eva-contact-note">Telefon a e-mail připravujeme.</p></div><img src="/eva-dvorakova-web/assets/illustrations/owl.webp" alt="" loading="lazy"></section>
 </main>`;
}

export function renderAppPreview(config,helpers){
 const html=renderModernHome(config,helpers);
 const start=html.indexOf('  <section class="mh-app-section');
 const end=html.indexOf('  <section class="mh-source-section',start);
 const app=html.slice(start,end).replace(/<a class="mh-open-app"[^>]*data-open-full[^>]*>.*?<\/a>/,'').replace('<details class="mh-customizer-disclosure">','<details class="mh-customizer-disclosure" open>');
 return `<main id="main" class="mh-home mh-app-only"><div class="shell subhero"><span class="eyebrow">Návrh aplikace</span><h1>Ukázka aplikace</h1></div>${app}</main>`;
}

export function mountModernHome(container,{icon,escape:esc}){
 if(!container)return ()=>{};
 const screen=container.querySelector('#demo-screen');
 if(!screen)return ()=>{};
 let view='video',storyStep=0,storyBranch='';
 let avatar={...rememberedAvatar};
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const stateLabel=container.querySelector('.mh-screen-status');
 let observer=null;
 function updateChoice(){
  for(const button of container.querySelectorAll('[data-avatar]')){button.setAttribute('aria-pressed',String(avatar[button.dataset.avatar]===button.dataset.value));if(button.dataset.avatar==='gender'){const portrait=button.querySelector('img');if(portrait)portrait.src=variantUrl({...avatar,gender:button.dataset.value});}}
  for(const button of container.querySelectorAll('[data-demo-view]')){const on=button.dataset.demoView===view || (view==='done' && button.dataset.demoView==='story');button.setAttribute('aria-pressed',String(on));button.classList.toggle('is-active',on);}
  stateLabel.textContent=description(avatar);
  rememberedAvatar={...avatar};
  const fullLink=container.querySelector('[data-open-full]');if(fullLink)fullLink.href=pageHref('/aplikace/?'+new URLSearchParams({avatar:'1',gender:avatar.gender,hair:avatar.hair,eyes:avatar.eyes,outfit:avatar.outfit}));
  container.querySelector('.mh-customizer').hidden=view!=='choose';
  container.querySelector('.mh-customizer-disclosure').hidden=view!=='choose';
 }
 function phone(){
  if(view==='choose')screen.innerHTML=`<div class="mh-preview-title"><span>Tvůj průvodce</span><h3>Vyber si průvodce.</h3></div><div class="mh-portrait-container"><img class="mh-portrait-img" src="${variantUrl(avatar)}" alt="${esc(description(avatar))}" decoding="async"></div><div class="mh-screen-actions"><button type="button" class="mh-play" data-phone="story">Obrázkové kartičky ${icon('arrow')}</button><button type="button" class="mh-screen-text" data-phone="video">${icon('arrow')} Náhled pozdravu</button></div><div class="mh-screen-progress" aria-label="První část ukázky"><i class="on"></i><i></i><i></i></div>`;
  else if(view==='video')screen.innerHTML=`<div class="mh-greeting-title"><span>01 / SPOLEČNĚ</span><h3>Ahoj!</h3><p>Jsem ${avatar.gender==='girl'?'připravená':'připravený'} na společné hraní.</p></div><div class="mh-greeting-card"><img src="${variantUrl(avatar)}" alt="${esc(description(avatar))}" decoding="async"><div class="mh-greeting-card-bubble">Půjdeme si spolu hrát? <span aria-hidden="true">✦</span></div></div><div class="mh-greeting-actions"><button type="button" class="mh-play" data-phone="story">Prohlédnout obrázky ${icon('arrow')}</button><button type="button" class="mh-screen-text" data-phone="choose">Změnit průvodce</button></div>`;
  else if(view==='story' && storyStep===0)screen.innerHTML=`<div class="mh-preview-title"><span>Pracovní list · S — Had</span><h3>Kamarádi na návštěvě</h3></div><div class="mh-preview-story"><p>Vyber si obrázek.</p><div class="mh-animal-choices"><button type="button" data-animal="owl">${img('owl.webp','')}<span>SOVA</span></button><button type="button" data-animal="goose">${img('goose.webp','')}<span>HUSA</span></button></div><p class="mh-source-credit">Z části Kamarádi na návštěvě</p></div><div class="mh-screen-progress" aria-label="Ukázka autorského materiálu"><i></i><i></i><i class="on"></i></div>`;
  else screen.innerHTML=`<div class="mh-preview-title"><span>Pracovní list · S — Had</span><h3>Obrázková kartička</h3></div><div class="mh-preview-done"><img src="${art}${storyBranch==='goose'?'goose':'owl'}.webp" alt="${storyBranch==='goose'?'Husa':'Sova'}"><p class="mh-source-word"><strong>${storyBranch==='goose'?'HUSA':'SOVA'}</strong></p><span class="mh-source-credit">Kamarádi na návštěvě</span><button type="button" class="mh-play" data-phone="restart">Zpět k obrázkům ${icon('back')}</button></div>`;
  updateChoice();
 }
 async function onClick(event){
  const button=event.target.closest('button');if(!button||!container.contains(button))return;
  if(button.dataset.avatar){const key=button.dataset.avatar,value=button.dataset.value;const valid=key==='gender'?['boy','girl']:choices[key]?.map(v=>v[0]);if(!valid?.includes(value))return;avatar[key]=value;view='choose';phone();button.focus({preventScroll:true});}
  if(button.dataset.demoView){view=button.dataset.demoView;storyStep=0;phone();}
  if(button.dataset.animal){storyBranch=button.dataset.animal;storyStep=1;phone();}
  if(button.dataset.phone){const action=button.dataset.phone;if(action==='restart'){view='story';storyStep=0;}else{view=action;if(action==='story')storyStep=0;}phone();}
 }
 container.addEventListener('click',onClick);
 phone();
 if(!motion.matches && 'IntersectionObserver' in window){observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){entry.target.classList.add('mh-visible');observer.unobserve(entry.target);}},{threshold:.08});for(const el of container.querySelectorAll('.mh-bento-card,.mh-parent-section,.mh-final')){el.classList.add('mh-reveal');observer.observe(el);}}
 return ()=>{observer?.disconnect();container.removeEventListener('click',onClick);};
}
