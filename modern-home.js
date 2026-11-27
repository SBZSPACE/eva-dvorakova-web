import {sessionPhoto, sessionVideo} from './media.js?v=48';
import {pictureCards} from './uvodni-karticky.js?v=50';
const art='/eva-dvorakova-web/assets/illustrations/';
function img(name,alt,cls='',eager=false){return `<img class="${cls}" src="${art+name}" alt="${alt}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;}
export function renderPricing({icon,id='pricing'}) {
 return `<section class="eva-pricing shell" aria-labelledby="${id}"><div class="eva-pricing-heading"><div><h2 id="${id}">Nejprve si<br><em>promluvíme.</em></h2></div></div><div class="eva-price-grid"><article><h3>Úvodní rozhovor</h3><p class="eva-price">Zdarma</p><p>Probereme Vaše otázky a možnosti další spolupráce.</p></article><article><h3>Další spolupráce</h3><p>Cenu a další postup si společně domluvíme.</p></article></div></section>`;
}

function gameNotice(standalone = false) {
 const heading = standalone ? 'h1' : 'h2';
 return `<section id="app-preview" class="shell game-notice" aria-labelledby="app-title">
  <div class="game-guides" aria-hidden="true">
   ${img('avatars/boy-blond-blue-mint.webp','')}${img('avatars/girl-brown-brown-purple.webp','')}
  </div>
  <${heading} id="app-title"><span>Hru pro děti</span> připravujeme.</${heading}>
 </section>`;
}

export function gameNoticePage() {
 return `<main id="main">${gameNotice(true)}</main>`;
}

export function renderModernHome({contactAvailable = false}) {
 const photo = sessionPhoto() || `<div class="mh-scene hero-kids" role="img" aria-label="Chlapeček a holčička, ilustrovaní průvodci připravovanou aplikací">
   <div class="hero-kid hero-boy">${img('avatars/boy-blond-blue-mint.webp','','',true)}</div>
   <div class="hero-kid hero-girl">${img('avatars/girl-brown-brown-purple.webp','','',true)}</div>
  </div>`;
 const video = sessionVideo();
 const firstLink = contactAvailable
  ? `<a class="ed-button" href="/kontakt/" data-link>Domluvit první rozhovor</a>`
  : `<a class="ed-button" href="#spoluprace">Jak probíhá první setkání</a>`;
 return `<main id="main" class="mh-home ed-home">
  <section class="ed-wrap ed-hero" aria-labelledby="ed-title">
   <div class="ed-intro"><h1 id="ed-title">Pomáhám dětem <em>rozvíjet řeč.</em></h1>
    <p>Jsem Eva Dvořáková. Společně zjistíme, co Vaše dítě potřebuje, a vybereme hru, kterou si můžete zahrát i doma.</p>
    <div class="ed-invite">${firstLink}<span>Úvodní telefonát je zdarma.</span></div>
   </div>
   <div class="ed-hero-art">${photo}</div>
  </section>

  <section class="ed-wrap ed-trust" id="o-eve" aria-label="Zkušenosti Evy Dvořákové">
   <dl><div><dt>34 let</dt><dd>ve speciální logopedické třídě</dd></div>
    <div><dt><span class="ed-since">Od roku</span> 1985</dt><dd>ve školství</dd></div>
    <div><dt>20 let</dt><dd>jsem zároveň vedla mateřskou školu</dd></div></dl>
   <a class="ed-link" href="/o-mne/" data-link>Více o mně</a>
  </section>

  <a class="shell ed-wrap gift-banner gift-night" id="vanocni-poukaz" href="/eva-dvorakova-web/vanocni-poukaz/" aria-label="Prohlédnout vánoční poukaz na setkání s Evou">
   <div class="gift-banner-copy"><h2>Hravé setkání <em>pod stromeček.</em></h2></div>
   <div class="gift-banner-art" aria-hidden="true"><img src="/eva-dvorakova-web/assets/poukaz/darkova-obalka.webp?v=45" width="1080" height="840" alt="" loading="lazy"></div>
  </a>

  <section class="ed-wrap ed-section" id="spoluprace" aria-labelledby="ed-first">
   <div class="ed-section-head"><h2 id="ed-first">Jak probíhá první setkání</h2><a class="ed-link" href="/konzultace/" data-link>Průběh a ceny</a></div>
   <ol class="ed-steps">
    <li><h3>Zavoláme si</h3><p>Řeknete mi, čeho si doma všímáte a s čím byste chtěli poradit.</p></li>
    <li><h3>Poznám Vaše dítě</h3><p>Při hře si všímám pohybu rtů a jazyka a poslouchám, které hlásky už dítě používá.</p></li>
    <li><h3>Vybereme hru na doma</h3><p>Ukážu Vám, jak si s dítětem hrát nad obrázkem nebo slovem, které spolu vybereme.</p></li>
   </ol>
  </section>

  <section class="ed-library" id="materialy" aria-labelledby="ed-materials"><div class="ed-wrap">
   <div class="ed-section-head"><h2 id="ed-materials">Zkuste si to doma</h2><a class="ed-link" href="/materialy/" data-link>Všechny materiály</a></div>
   <div class="ed-games">
    <a class="ed-game ed-car" href="/auticka/" data-link><span class="ed-car-img" aria-hidden="true"></span><div><h3>Jazýčkoauto</h3><p>Kam dnes pojede jazýček?</p><span class="ed-link">Otevřít příběh</span></div></a>
    <article class="ed-game ed-picture-game" id="ukazka-karticky">${pictureCards()}<div><h3>Co vidíš?</h3><p>„Sovu.“</p><p>„A kde asi sedí?“</p></div></article>
   </div>
   ${video ? `<section class="ed-film"><h3>Jak si spolu hrajeme s Jazýčkoautem</h3>${video}</section>` : ''}
  </div></section>

  <div class="ed-wrap ed-future">
   <section id="knizka" class="ed-edition"><div><h2>Knížka Říkám svět</h2><p>Připravujeme obrázkové příběhy pro společné čtení.</p></div>${img('story-world.webp','', 'ed-book-img')}</section>
   <section id="app-preview" class="ed-edition"><div><h2>Dětští průvodci</h2><p>V aplikaci, kterou vyvíjíme, si dítě vybere svého průvodce.</p></div><div class="ed-guides" aria-hidden="true">${img('avatars/boy-blond-blue-mint.webp','')}${img('avatars/girl-brown-brown-purple.webp','')}</div></section>
  </div>
 </main>`;
}
