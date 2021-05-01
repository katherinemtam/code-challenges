export function capitalizeObjectKeys(obj) {
  return Object.keys(obj).map(key => key.toUpperCase());
}

export function sortedKeys(obj) {
  return Object.keys(obj).sort((a, b) => {
    return a.length - b.length;
  });
}

export function getFilteredKey(obj) {

}

export function getArrayOfKeysAndValues(obj) {

}

export function sortedArraysByValuesLength(obj) {

}