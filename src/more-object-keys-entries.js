export function getHouses(obj) {
  return Object.values(obj).map(n => n.house);
}

export function updateNumbers(obj) {
  const arr = [];
  Object.keys(obj).forEach(key => {
    arr.push(`${key}: ${obj[key]}`);
  });
  return arr;
}

export function totalCharacters(arr) {
}

export function hasChildrenEntries(array, character) {

}

export function sortByChildren(arr) {
}
