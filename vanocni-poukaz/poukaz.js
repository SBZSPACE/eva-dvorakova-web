const preview = document.getElementById('poukaz-detail');
const envelope = document.querySelector('[data-unwrap]');

if (typeof preview.showModal === 'function') {
  envelope.setAttribute('aria-haspopup', 'dialog');
  envelope.setAttribute('aria-controls', preview.id);
  envelope.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    preview.showModal();
  });
  preview.addEventListener('click', event => {
    if (event.target !== preview) return;
    const box = preview.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right ||
        event.clientY < box.top || event.clientY > box.bottom) preview.close();
  });
}
