export function doubleNumbers(arr) {
  return arr.map(n => n * 2);
}

export function stringItUp(arr) {
  return arr.map(n => JSON.stringify(n));
}

export function capitalizeNames(arr) {
  const lowercased = arr.map(n => n.toLowerCase());
  return lowercased.map(n => n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
}

export function namesOnly(arr) {
  return arr.map(n => n.name);
}

export function makeStrings(arr) {
  return arr.map(n => {
    if (n.age >= 18)
      return `${n.name} can go to The Matrix`;
    else return `${n.name} is under age!!`;
  });
}

export function readyToPutInTheDOM(arr) {
  return arr.map(n => `<h1>${n.name}</h1><h2>${n.age}</h2>`);
}