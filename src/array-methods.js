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
  let arr = [];
  recipe.ingredients.map(n => {
    const split = n.split(' ');
    const amount = `${split[0]} ${split[1]}`;
    arr.push(n.replace(`${amount} `, ''));
    return arr;
  });
  return arr;
}

export function stepActions(recipe) {
  let arr = [];
  recipe.steps.map(n => {
    const split = n.split(' ');
    const action = `${split[0]}`;
    arr.push(action);
    return arr;
  });
  return arr;
}

export function removeLastCharacters(str, numberOfCharacters) {
  if (numberOfCharacters > 0) return str.substr(0, str.length - numberOfCharacters);
  if (numberOfCharacters < 0) return str;
}

// stretch goals 
export function totalSumCSV(str) {

}

export function removeVowels(str) {

}

export function extractVowels(str) {

}