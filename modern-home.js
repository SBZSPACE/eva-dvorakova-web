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

export function renderModernHome({icon}){
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
  ${gameNotice()}
  <section class="mh-source-section shell" id="materialy" aria-labelledby="source-title"><h2 id="source-title">Hrajeme si.<br><em>Objevujeme.</em></h2><p class="eva-material-intro">Obrázky a hry podle potřeb Vašeho dítěte.</p><div class="mh-source-grid eva-compact-grid"><article><span class="mh-tile-art mh-tile-car" aria-hidden="true"></span><h3><a href="/auticka/" data-link>Jazýčkoauto</a></h3></article><article><span class="mh-tile-art mh-tile-owl" aria-hidden="true"><img src="/eva-dvorakova-web/assets/illustrations/owl.webp" alt=""></span><h3><a href="/materialy/" data-link>Obrázkové kartičky</a></h3></article><article><span class="mh-tile-art mh-tile-goose" aria-hidden="true"><img src="/eva-dvorakova-web/assets/illustrations/goose.webp" alt=""></span><h3><a href="/materialy/" data-link>Hry pro každý den</a></h3></article><article><span class="mh-tile-art mh-tile-breath" aria-hidden="true">✦</span><h3><a href="/materialy/" data-link>Mluvidla a dech</a></h3></article></div><a class="mh-open-app" href="/materialy/" data-link>Prohlédnout materiály ${icon('arrow')}</a></section>
  <section class="shell eva-example" id="ukazka-karticky" aria-labelledby="example-title"><div class="eva-example-illustration"><img src="/eva-dvorakova-web/assets/illustrations/owl.webp" alt="Ilustrace sovičky" loading="lazy"></div><div><h2 id="example-title">Stačí jeden obrázek.</h2><p>Kartička je obrázek. Hra začíná společným povídáním.</p><div class="eva-dialogue"><p><span>Vy</span> Co vidíš?</p><p><span>Dítě</span> Sovu.</p><p><span>Vy</span> Kde asi sedí?</p></div></div></section>
  <section class="shell eva-book" id="knizka" aria-labelledby="book-title"><div class="eva-book-art" role="img" aria-label="Ilustrace příběhového světa se sovičkou a husou"></div><div><p class="eva-book-note">PŘIPRAVUJEME</p><h2 id="book-title">Příběhy, ke kterým<br><em>se můžete vracet.</em></h2><p>Evin svět obrázků a her také mimo obrazovku.</p></div></section>
  <section class="shell eva-contact" id="kontakt-doma" aria-labelledby="contact-home-title"><div><h2 id="contact-home-title">Začněme<br><em>rozhovorem.</em></h2><p>První rozhovor je zdarma.</p><a class="mh-button" href="/kontakt/" data-link>Domluvit rozhovor ${icon('arrow')}</a><p class="eva-contact-note">Telefon a e-mail připravujeme.</p></div><img src="/eva-dvorakova-web/assets/illustrations/owl.webp" alt="" loading="lazy"></section>
 </main>`;
}
