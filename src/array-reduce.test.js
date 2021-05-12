import { toLastNames, addValues, addPurchases } from './array-reduce';

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

test('uses reduce to find the total amount purchased', () => {
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