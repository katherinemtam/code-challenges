export const toLastNames = people => {
  return people.map(person => person.firstName + ' ' + person.lastName);
};

export const addValues = arr => {
  return arr.reduce((total, value) => total += value, 0);
};
