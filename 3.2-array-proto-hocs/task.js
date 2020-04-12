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
  return arr1.length === arr2.length 
           ? arr1.every((el, i) => el === arr2[i]) 
           : false;
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

function memorize (fn, limit) {
    const memory = [];

    return function (...args) {
      const argsArr = Array.from(arguments);
      const found = memory.find(obj => compareArrays(argsArr, obj.args));
      if (found) {
        return found.result;
      }
      memory.push({args: args, result: fn(...args)});
      memory.length > limit ? memory.shift() : console.log("Memory is not full yet. Continue.");
      console.log(memory);
      return fn(...args);
  }
}

function testCase (testFunction, timer) {
  const arr = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
  console.time("Time start");
  console.timeEnd("Time end");
}

const mSum = memorize(sum, 5);
// console.log(mSum(3,4));
// mSum(3,6);
// mSum(6,10);
mSum(3,6);
mSum(3,6);
mSum(3,6);
mSum(3,6);
mSum(3,6);
mSum(3,6);
mSum(5,6);
mSum(3,16);
mSum(32,6);
console.log(mSum(3,6));








// console.log(mSum(3, 4));
// console.log(argsOfSum);


// function memorize (fn, limit) {
//   const memory = [];

//   return function (...args) {
//     const argsArr = Array.from(arguments);
//     const found = memory.find(el => compareArrays(argsArr, el.args));
//     // console.log(found.result);
//     found ? found.result : console.log("Not found");
//     console.log(found.result);
//     memory.push({args: args, result: fn(...args)});

//     memory.length > limit ? memory.shift() : console.log("Memory is not full yet. Continue.");

//     console.log(memory);

//     return fn(...args);
// }
// }
