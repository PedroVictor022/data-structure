const square = function(number) {
  return number * number;
}

const x = square(2);
const y = square(4);

console.log(x, y);

console.log('-----------------------------');

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n -1);
}
console.log(factorial(5));

console.log('-----------------------------');

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function(z) {
  return z * z * z;
}

const numbers = [0, 12, 23, 34, 23];

console.log(map(f, numbers));