import { replaceZeros, validatePin, validateWord, hasNumber, validateEmail, validatePhoneNumber, findTagNames } from './code-challenge-14';

describe('Testing challenge 1', () => {
  test("It should replace all '0' with the word 'zero'", () => {
    expect(replaceZeros('I have 0 pet kangaroos, and I have petted 0 kangaroos.')).toStrictEqual('I have zero pet kangaroos, and I have petted zero kangaroos.');
    expect(replaceZeros('00102')).toStrictEqual('zerozero1zero2');
  });
});

describe.only('Testing challenge 2', () => {
  test('It should return true if the PIN is four numerical digits long. Otherwise, return false', () => {
    expect(validatePin(1234)).toStrictEqual(true);
    expect(validatePin(123456789)).toStrictEqual(false);
  });
});

describe('Testing challenge 3', () => {
  test('It should return true if the word is between 5 and 10 characters long. Otherwise, return false. ', () => {
    expect(validateWord('pen')).toStrictEqual(false);
    expect(validateWord('apple')).toStrictEqual(true);
    expect(validateWord('applepen')).toStrictEqual(true);
    expect(validateWord('pineapple')).toStrictEqual(true);
    expect(validateWord('pineapplepen')).toStrictEqual(false);
    expect(validateWord('penpineappleapplepen')).toStrictEqual(false);
  });
});

describe('Testing challenge 4', () => {
  test('It should return true if a string has one or more letter followed by one or more digit. Otherwise, return false. ', () => {
    expect(hasNumber('2fast2furious')).toStrictEqual(true);
    expect(hasNumber('cars go vroom')).toStrictEqual(false);
  });
});

describe('Testing challenge 5', () => {
  test('It should return true if an email contains the following: 1.one word, or two words separated by a period, before the @ symbol, 2.can contain numbers, 3.can have any of the following top-level domains: .net, .com, or .org, 4.no other special characters, and 5.no subdomains, ports, etc: must be of the form name@place.com, not name@sub.place.com:3000 ', () => {
    expect(validateEmail('peanut@butter.com')).toStrictEqual(true);
    expect(validateEmail('astronaut.not@space.org')).toStrictEqual(true);
    expect(validateEmail('fluffy_doggo@furry.net')).toStrictEqual(false);
    expect(validateEmail('corny@corn.co')).toStrictEqual(false);
    expect(validateEmail('4pp13b33s*@fruithoney.org')).toStrictEqual(false);
    expect(validateEmail('name@sub.place.com:3000')).toStrictEqual(false);
  });
});

describe('Testing challenge 6', () => {
  test('It should match any of these formats: (555) 555-5555, (555)555 5555, 555 555-5555, 555-5555555, 555-555 5555, 555-555-5555, 555 555 5555, 555555-5555, 5555555555 ', () => {
    expect(validatePhoneNumber('(555) 555-5555')).toStrictEqual(true);
    expect(validatePhoneNumber('354873-7683')).toStrictEqual(true);
    expect(validatePhoneNumber('123 456 7890')).toStrictEqual(true);
    expect(validatePhoneNumber('253.481.3254')).toStrictEqual(false);
    expect(validatePhoneNumber('(111)111_1111')).toStrictEqual(false);
  });
});

describe('Testing challenge 7', () => {
  test('It should eturn the closing tags of HTML strings', () => {
    const example = ['<h1>Hello, world!</h1>', '<p>Welcome to my site</p>'];
    expect(findTagNames(example)).toStrictEqual(['/h1', '/p']);
  });
});

