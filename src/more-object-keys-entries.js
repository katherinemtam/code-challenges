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

export function hasChildrenEntries(arr, character) {
  let children = 0;
  Object.entries(arr).forEach(n => {
    n.forEach(person => {
      if (person.name === character) {
        children = person.children.length > 0 ? true : false;
      }
    });
  });
  return children;
}

export function sortByChildren(arr) {
}
