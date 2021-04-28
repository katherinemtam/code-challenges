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

export function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(n => {
    return n.member === true;
  });
}

export function ofAge(arr) {
  return arr.filter(n => {
    return n.age >= 18;
  });
}