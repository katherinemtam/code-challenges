export function returnTen(str) {
  return str.split('').slice(-10);
}

export function findMax(matrix) {
  const maxOfEachArray = matrix.map(arr => Math.max.apply(null, arr));
  return Math.max.apply(null, maxOfEachArray);
}

export function totalSum(matrix) {
  let total = 0;
  matrix.map(arr => arr.map(n => total += n));
  return total;
}

export function grandTotal(stores){
  const arr = [];
  for (let i = 0; i < stores[0].length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < stores.length; j++) {
      hourlyTotal += stores[j][i];
    }
    arr.push(hourlyTotal);
  }
  console.log(arr);
  return arr;
}

export function salesData(hours, data){
  const result = [];
  data.forEach((hourlyTotal, index) => {
    result.push({ sales: `${hourlyTotal} cookies`, time: hours[index] });
  });
  return result;
}