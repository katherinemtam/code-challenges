import { capitalizeObjectKeys, sortedKeys, getFilteredKey, getArrayOfKeysAndValues, sortedArraysByValuesLength } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});

test('sorted keys', () => {
  const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; //arrange
  const output = sortedKeys(dataObject); //act
  expect(output).toEqual(['age', 'name', 'isDog', 'friends']); //assert
});

test('get filtered key', () => {
  const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, }; //arrange
  const output = getFilteredKey(dataObject); //act
  expect(output).toEqual(['age']); //assert
});
