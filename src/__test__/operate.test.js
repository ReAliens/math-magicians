import operate from '../logic/operate';

test('plus sign should add up numbers', () => {
  expect(operate('7', '5', '+')).toStrictEqual('12');
});

test('subtraction sign should minus numbers', () => {
  expect(operate('10', '5', '-')).toStrictEqual('5');
});

test('multiplication sign should multiply numbers', () => {
  expect(operate('2', '5', 'x')).toStrictEqual('10');
});

test('division sign should divide numbers', () => {
  expect(operate('15', '5', '÷')).toStrictEqual('3');
});

test('any number divisible by zero should return zero', () => {
  expect(operate('5', '0', '÷')).toStrictEqual("Can't divide by 0.");
});
