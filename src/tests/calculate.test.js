import calculate from '../logic/calculate';

describe('Calculate operations', () => {
  test('Add', () => {
    const objresult = calculate({
      total: '5',
      next: '3',
      operation: '+',
    }, '=');

    expect((objresult.total)).toBe('8');
  });
  test('Subtract', () => {
    const objresult = calculate({
      total: '5',
      next: '3',
      operation: '-',
    }, '=');

    expect((objresult.total)).toBe('2');
  });
  test('Multiply', () => {
    const objresult = calculate({
      total: '5',
      next: '3',
      operation: 'x',
    }, '=');

    expect((objresult.total)).toBe('15');
  });
  test('Division', () => {
    const objresult = calculate({
      total: '5',
      next: '2',
      operation: '÷',
    }, '=');

    expect((objresult.total)).toBe('2.5');
  });
  test('modulus', () => {
    const objresult = calculate({
      total: '5',
      next: '2',
      operation: '%',
    }, '=');

    expect((objresult.total)).toBe('1');
  });
  test('plus-minus', () => {
    const objresult = calculate({
      total: '5',
      next: '',
      operation: '',
    }, '+/-');

    expect((objresult.total)).toBe('-5');
  });
});
