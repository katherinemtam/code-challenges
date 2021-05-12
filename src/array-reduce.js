export const toLastNames = people => {
  return people.map(person => person.firstName + ' ' + person.lastName);
};
