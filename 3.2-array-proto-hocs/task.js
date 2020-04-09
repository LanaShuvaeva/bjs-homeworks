"use strict"

// let argsOfSum;

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    // argsOfSum = Array.from(arguments);
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

  function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length 
             ? arr1.every(el => arr1[el] === arr2[el]) 
             : false;
}
       
console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

class ObjMem {
    constructor(args, result) {
        this.args = args;
        this.result = result;
    }
}

function memorize (fn, limit) {
    const memory = [];
    const argsOfSum = Array.from(fn(arguments));
    console.log(argsOfSum);
    if (memory.length <= limit) {
      memory.push(new ObjMem(argsOfSum, fn()));
      console.log(memory);
      console.log(argsOfSum);
      console.log(fn());
    }
    return fn;
}

const mSum = memorize(sum, 5);
console.log(mSum(3,4));

// console.log(mSum(3, 4));
// console.log(argsOfSum);


// function memorize (fn, limit) {
//     const memory = [];
//     if (memory.length <= limit) {
//       memory.push(new ObjMem(argsOfSum, fn()));
//       console.log(memory);
//     }
//     return fn;
// }
 

