import { doubleNumbers, stringItUp } from './array-map';

test('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const output = doubleNumbers(input); // act
  expect(output).toEqual([4, 10, 200]); // assert
});

test('string it up', () => {
  const input = [2, 5, 100]; // arrange
  const output = stringItUp(input); // act
  expect(output).toEqual(['2', '5', '100']); // assert
});