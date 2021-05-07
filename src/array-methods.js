export function howMuchPencil(str) {
  let arr = [];
  for (let i = 0; i <= str.length; i++) {
    arr.push(str.slice(i));
  }
  return arr;
}

export function wordsToCharList(str) {
  let arr = [];
  for (let letter of str) {
    arr.push(letter);
  }
  return arr;
}

export function listFoods(recipe) {

}

export function stepActions(recipe) {

}

export function removeLastCharacters(str, numberOfCharacters) {

}

// stretch goals 
export function totalSumCSV(str) {

}

export function removeVowels(str) {

}

export function extractVowels(str) {

}