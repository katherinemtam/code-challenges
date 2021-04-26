export function doubleNumbers(arr) {
  return arr.map(n => n * 2);
}

export function stringItUp(arr) {
  return arr.map(n => JSON.stringify(n));
}

// export function capitalizeNames(arr) {

// }

export function namesOnly(arr) {
  return arr.map(n => n.name);
}