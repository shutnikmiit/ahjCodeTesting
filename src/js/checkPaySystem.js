/* eslint consistent-return:0 */ // --> OFF

export default function checkPaySystem(card) {
  if (card.startsWith('2')) {
    return 'Mir';
  }

  if (card.startsWith('30') || card.startsWith('36') || card.startsWith('38')) {
    return 'Diners Club';
  }

  if (card.startsWith('31') || card.startsWith('35')) {
    return 'JCB International';
  }

  if (card.startsWith('34') || card.startsWith('37')) {
    return 'American Express';
  }

  if (card.startsWith('4')) {
    return 'VISA';
  }

  if (card.startsWith('51') || card.startsWith('52') || card.startsWith('53') || card.startsWith('54') || card.startsWith('55')) {
    return 'MasterCard';
  }

  if (card.startsWith('60')) {
    return 'Discover';
  }
}
