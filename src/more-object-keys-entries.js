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
  let charCount = 0;

  arr.forEach(family => {
    Object.keys(family).forEach(property => {

      const value = family[property];

      if (property !== 'house' && property !== 'children') {

        if (value) charCount++;
      }

      if (property === 'children') value.forEach(child => charCount++);

    });
  });

  return charCount;
}

export function hasChildrenEntries(arr, character) {
  let children = 0;
  Object.entries(arr).forEach(family => {
    family.forEach(person => {
      if (person.name === character) {
        children = person.children.length > 0 ? true : false;
      }
    });
  });
  return children;
}

export function sortByChildren(arr) {
  return arr.sort((a, b) => {
    const childrenLength = a.children.length - b.children.length;
    if (childrenLength !== 0) return childrenLength;
    return (a.name < b.name);
  });
}