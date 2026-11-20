import {voucherEmail} from '../runtime.js?v=46';

if (voucherEmail) {
  const address = document.createElement('span');
  address.className = 'gift-address';
  address.textContent = voucherEmail;

  const subject = encodeURIComponent('Vánoční poukaz');
  const body = encodeURIComponent('Dobrý den, mám zájem o vánoční poukaz na setkání s Evou. Prosím o podrobnosti. Děkuji.');
  const link = document.createElement('a');
  link.className = 'gift-email';
  link.href = 'mailto:' + voucherEmail + '?subject=' + subject + '&body=' + body;
  link.textContent = 'Napsat o poukaz';

  const status = document.getElementById('gift-status');
  status.replaceChildren(address);
  status.before(link);
  document.querySelector('.gift-lead').innerHTML = 'Darujte dítěti a rodiči hravé setkání. <span>Poukaz Vám po domluvě pošleme e-mailem.</span>';
}
