const preview = document.getElementById('poukaz-detail');
const triggers = document.querySelectorAll('[data-unwrap]');

if (typeof preview.showModal === 'function') {
  for (const trigger of triggers) {
    trigger.setAttribute('aria-haspopup', 'dialog');
    trigger.setAttribute('aria-controls', preview.id);
    trigger.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      preview.showModal();
    });
  }
  preview.addEventListener('click', event => {
    if (event.target !== preview) return;
    const box = preview.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right ||
        event.clientY < box.top || event.clientY > box.bottom) preview.close();
  });
}
