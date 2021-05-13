export const sortByChildren = (charArray) => {
  return charArray.sort((a, b) => {
    const childrenLength = a.children.length - b.children.length;
    if (childrenLength !== 0) return childrenLength;
    return (a.name < b.name);
  });
};

export const containsW = (str) => {

};

export const isNum = (input) => {

};

export const containsWorld = (input) => {

};

export const isCapitalized = (str) => {

};