export function capitalizeObjectKeys(obj) {
  return Object.keys(obj).map(key => key.toUpperCase());
}

export function sortedKeys(obj) {
  return Object.keys(obj).sort((a, b) => {
    return a.length - b.length;
  });
}

export function getFilteredKey(obj) {
  return Object.keys(obj).filter(key => {
    if (key === 'age') return key;
  });
}

export function getArrayOfKeysAndValues(obj) {

}

export function sortedArraysByValuesLength(obj) {

}