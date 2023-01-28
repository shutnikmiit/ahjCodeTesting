import luhnCheck from './luhnCheck';
import checkPaySystem from './checkPaySystem';

const input = document.querySelector('#card-form-text');
const form = document.querySelector('#card-form');

const visa = document.querySelector('.visa');
const dns = document.querySelector('.dns');
const discover = document.querySelector('.discover');
const express = document.querySelector('.express');
const mir = document.querySelector('.mir');
const jcb = document.querySelector('.jcb');
const mastercard = document.querySelector('.mastercard');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (luhnCheck(input.value)) {
    const result = document.createElement('p');
    result.classList = 'success';
    result.textContent = 'Номер карты валиден!';
    document.body.appendChild(result);
  } else {
    const result = document.createElement('p');
    result.classList = 'fail';
    result.textContent = 'Ошибка! Карта не прошла валидацию';
    document.body.appendChild(result);
  }
});

form.addEventListener('submit', () => {
  const paySystem = checkPaySystem(input.value);

  switch (paySystem) {
    case 'VISA':
      visa.classList.remove('hidden');
      break;
    case 'Diners Club':
      dns.classList.remove('hidden');
      break;
    case 'Discover':
      discover.classList.remove('hidden');
      break;
    case 'American Express':
      express.classList.remove('hidden');
      break;
    case 'Mir':
      mir.classList.remove('hidden');
      break;
    case 'MasterCard':
      mastercard.classList.remove('hidden');
      break;
    case 'JCB International':
      jcb.classList.remove('hidden');
      break;
    default:
      // nothing
  }
});
