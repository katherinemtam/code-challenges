export function evensOnly(arr) {
  return arr.filter(n => {
    return n % 2 === 0;
  });
}