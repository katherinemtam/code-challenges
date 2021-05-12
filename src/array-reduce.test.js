import { toLastNames, addValues, addPurchases, countNumberOfElements, returnNames } from './array-reduce';

test("iterates over an array of people objects and creates a new list of each person's full name using the array method 'map'", () => {
  const input = [{ firstName:'Jane', lastName:'Doe' }, { firstName:'James', lastName:'Bond' }];
  const output = ['Jane Doe', 'James Bond'];
  expect(toLastNames(input)).toStrictEqual(output);
});

test('uses reduce to add the values in the array', () => {
  const input = [1, 2, 3, 4, 5];
  const output = 15;
  expect(addValues(input)).toStrictEqual(output);
});

test('uses reduce to count the number of elements in the array', () => {
  const input = [
    {
      item: 'switch',
      purchasePrice: 299
    },
    {
      item: 'xbox one',
      purchasePrice: 399
    },
    {
      item: 'play station 5',
      purchasePrice: 499
    }
  ];
  const output = 1197;
  expect(addPurchases(input)).toStrictEqual(output);
});

test('uses reduce to count the number of elements in the array', () => {
  const input = [2, 4, 6, 8, 10];
  const output = 5;
  expect(countNumberOfElements(input)).toStrictEqual(output);
});

// test(' uses reduce to return an array containing the names of the characters', () => {
//   let starWarsData = [{
//     name: 'Luke Skywalker',
//     height: '172',
//     mass: '77',
//     hair_color: 'blond',
//     skin_color: 'fair',
//     eye_color: 'blue',
//     birth_year: '19BBY',
//     gender: 'male',
//   },
//   {
//     name: 'C-3PO',
//     height: '167',
//     mass: '75',
//     hair_color: 'n/a',
//     skin_color: 'gold',
//     eye_color: 'yellow',
//     birth_year: '112BBY',
//     gender: 'n/a' },
//   {
//     name: 'R2-D2',
//     height: '96',
//     mass: '32',
//     hair_color: 'n/a',
//     skin_color: 'white, blue',
//     eye_color: 'red',
//     birth_year: '33BBY',
//     gender: 'n/a'
//   },
//   {
//     name: 'Darth Vader',
//     height: '202',
//     mass: '136',
//     hair_color: 'none',
//     skin_color: 'white',
//     eye_color: 'yellow',
//     birth_year: '41.9BBY',
//     gender: 'male'
//   },
//   {
//     name: 'Leia Organa',
//     height: '150',
//     mass: '49',
//     hair_color: 'brown',
//     skin_color: 'light',
//     eye_color: 'brown',
//     birth_year: '19BBY',
//     gender: 'female'
//   }];
//   const output = ['Luke Skywalker', 'C-3PO', 'R2-D2', 'Darth Vader', 'Leia Organa'];
//   expect(returnNames(starWarsData)).toStrictEqual(output);
// });