export function leastToGreatest(arr) {
  return arr.sort((a, b) => {
    return a - b;
  });
}

export function greatestToLeast(arr) {
  return arr.sort((a, b) => {
    return b - a;
  });
}

export function lengthSort(arr) {
  return arr.sort((a, b) => {
    return a.length - b.length;
  });
}