import luhnCheck from '../luhnCheck';

describe('should check card number', () => {
  test('should receive valid value', () => {
    const card = luhnCheck('30569309025904');
    expect(card).toBeTruthy();
  });

  test('should receive invalid value', () => {
    const card = luhnCheck('123456789');
    expect(card).toBeFalsy();
  });
});
