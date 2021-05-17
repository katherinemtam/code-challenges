export const sortByChildren = (charArray) => {
  return charArray.sort((a, b) => {
    const childrenLength = a.children.length - b.children.length;
    if (childrenLength !== 0) return childrenLength;
    return (a.name < b.name);
  });
};

export const containsW = (str) => {
  if (str.match(/w/)) return true;
  return false;
};

export const isNum = (input) => {
  if (input.toString().match(/[0-9]/g)) return true;
  return false;
};

export const containsWorld = (input) => {
  if (input.match(/world/)) return true;
  return false;
};

export const isCapitalized = (str) => {
  return str.match(/[A-Z][a-zA-Z]*/g) || [];
};