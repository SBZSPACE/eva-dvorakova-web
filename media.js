// Schválené soubory uložte do assets/foceni/. Zde vyplňte jejich názvy a popis
// skutečného záběru. Dokud je název prázdný, používá web svou běžnou grafiku.
const media = {
  session: {
    file: '',            // široká fotografie, ideálně 1800 × 1200 px
    mobileFile: '',      // samostatný mobilní záběr, 800 × 1000 px
    alt: 'Eva při společné hře s dítětem',
  },
  portrait: {
    file: '',            // 1000 × 1250 px
    alt: 'Eva Dvořáková',
  },
  video: {
    file: '',            // MP4, 1280 × 720 px
    poster: '',          // úvodní obrázek ve stejném poměru
    captions: '',        // české titulky ve formátu WebVTT, pokud video obsahuje řeč
    label: 'Jak si spolu hrajeme s Jazýčkoautem',
  },
};

function fileUrl(name) {
  return new URL('./assets/foceni/' + encodeURIComponent(name), import.meta.url).href;
}

function attribute(text) {
  return text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
}

export function sessionPhoto() {
  const {file, mobileFile, alt} = media.session;
  if (!file) return '';

  const mobile = mobileFile
    ? `<source media="(max-width: 700px)" srcset="${fileUrl(mobileFile)}" width="800" height="1000">`
    : '';
  return `<figure class="eva-session-photo">
    <picture>${mobile}<img src="${fileUrl(file)}" width="1800" height="1200" alt="${attribute(alt)}" fetchpriority="high" decoding="async"></picture>
  </figure>`;
}

export function portraitPhoto() {
  const {file, alt} = media.portrait;
  if (!file) return '';

  return `<figure class="eva-portrait-photo">
    <img src="${fileUrl(file)}" width="1000" height="1250" alt="${attribute(alt)}" loading="lazy" decoding="async">
  </figure>`;
}

export function sessionVideo() {
  const {file, poster, captions, label} = media.video;
  if (!file || !poster) return '';

  const track = captions
    ? `<track kind="captions" srclang="cs" label="Česky" src="${fileUrl(captions)}" default>`
    : '';
  return `<figure class="eva-session-video">
    <video controls playsinline preload="none" width="1280" height="720" src="${fileUrl(file)}" poster="${fileUrl(poster)}" aria-label="${attribute(label)}">${track}</video>
  </figure>`;
}
