import { evensOnly, fiveCharactersOrFewerOnly } from './array-filter.js';

test('evens only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = evensOnly(input); // act
  expect(output).toEqual([6, 8, 2]); // assert
});

test('five characters or fewer only', () => {
  const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
  const output = fiveCharactersOrFewerOnly(input); // act
  expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']); // assert
});