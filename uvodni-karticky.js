const illustrations = new URL('./assets/illustrations/', import.meta.url);

export function pictureCards() {
  return `<figure class="picture-pair" role="img" aria-label="Dvě obrázkové kartičky se sovou a husou">
    <div class="picture-card picture-card-goose" aria-hidden="true"><div class="picture-card-print">
      <img src="${illustrations}goose.webp" width="640" height="640" alt="" loading="lazy" decoding="async">
    </div></div>
    <div class="picture-card picture-card-owl" aria-hidden="true"><div class="picture-card-print">
      <img src="${illustrations}owl.webp" width="640" height="640" alt="" loading="lazy" decoding="async">
    </div></div>
  </figure>`;
}

// Older cached versions of the home page import this name.
export {pictureCards as heroArtwork};
