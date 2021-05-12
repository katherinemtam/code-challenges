export const toLastNames = people => {
  return people.map(person => person.firstName + ' ' + person.lastName);
};

export const addValues = arr => {
  return arr.reduce((total, value) => total += value, 0);
};

export const addPurchases = arr => {
  return arr.reduce((accumulator, value) => {
    accumulator += value.purchasePrice;
    return accumulator;
  }, 0); 
};

export const countNumberOfElements = arr => {
  return arr.reduce((accumulator) => {
    return accumulator + 1;
  }, 0);
};

// export const returnNames = arr => {
//   return arr.reduce((accumulator, value) => {
//     console.log(accumulator[value.name]);
//     return accumulator;
//   }, []);
// };

