// The problem: You can have two functions, the first function calculate a sum of the two numbers AND the second function will print the result of the sum results

const arrNumbers = [1, 14, -87, 54, 23, -45, 87, 23, -12, 16, 16, 90];

function posNumbers(numbers, fn) {
   const newArray = [];
   for(const x of numbers) {
      if(fn(x)) {
         newArray.push(x);
      };
   };
   console.log(newArray);
   return newArray;
};

const posN = posNumbers(arrNumbers, (x) => x >= 0);
const bigN = posNumbers(arrNumbers, (x) => x >= 18);
