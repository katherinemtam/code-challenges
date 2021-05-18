export const replaceZeros = (string) => {
  return string.replace(/0/g, 'zero');
};

export const validatePin = (pin) => {
  return /\b\d{4}\b/.test(pin);
};

export const validateWord = (word) => {
  return /\b\w{5,10}\b/.test(word);
};

export const hasNumber = (string) => {
  return /[a-zA-Z]+\d+/.test(string);
};

export const validateEmail = (email) => {
  //<solution>
};

export const validatePhoneNumber = (phoneNumber) => {
  //<solution>
};

export const findTagNames = elements => {
  ///Solution 
};