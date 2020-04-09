"use strict"

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

  function compareArrays(arr1, arr2) {
    let theSame;
    if (arr1.length === arr2.length) {
     theSame = arr1.every(el => arr1[el] === arr2[el]);
     return theSame;
    }
    return false;
}

//   function compareArrays(arr1, arr2) {
//     arr1.length === arr2.length ? arr1.every(el => arr1[el] === arr2[el]) : false;
// }
       
console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize (fn, limit) {
    
}