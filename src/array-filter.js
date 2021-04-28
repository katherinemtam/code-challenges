export function evensOnly(arr) {
  return arr.filter(n => {
    return n % 2 === 0;
  });
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(n => {
    return n.length <= 5;
  });
}