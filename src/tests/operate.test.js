import operate from '../logic/operate';

test('Sum 2 + 4 equal to 6', () => {
  expect(operate('2', '4', '+')).toBe('6');
});

test('Substraction 2 - 4 equal to -2', () => {
  expect(operate('2', '4', '-')).toBe('-2');
});

test('Multiplication 2 x 4 equal to 8', () => {
  expect(operate('2', '4', 'x')).toBe('8');
});

test('Division 2 ÷ 4 equal to 0.5', () => {
  expect(operate('2', '4', '÷')).toBe('0.5');
});

test('Division 2 ÷ 0 to throw error', () => {
  expect(operate('2', '0', '÷')).toBe("Can't divide by 0.");
});