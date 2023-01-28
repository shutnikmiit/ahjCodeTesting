import checkPaySystem from '../checkPaySystem';

describe('should determine payment system', () => {
  test('should check visa card', () => {
    const card = checkPaySystem('4111111111111111');
    expect(card).toBe('VISA');
  });

  test('should check dns card', () => {
    const card = checkPaySystem('30569309025904');
    expect(card).toBe('Diners Club');
  });

  test('should check discover card', () => {
    const card = checkPaySystem('6011111111111117');
    expect(card).toBe('Discover');
  });

  test('should check express card', () => {
    const card = checkPaySystem('371449635398431');
    expect(card).toBe('American Express');
  });

  test('should check mir card', () => {
    const card = checkPaySystem('2200000000000000');
    expect(card).toBe('Mir');
  });

  test('should check mastercard', () => {
    const card = checkPaySystem('5555555555554444');
    expect(card).toBe('MasterCard');
  });

  test('should check jcb card', () => {
    const card = checkPaySystem('3530111333300000');
    expect(card).toBe('JCB International');
  });

  test('should receive undefined status', () => {
    const card = checkPaySystem('0000000000000000');
    expect(card).toBe(undefined);
  });
});
