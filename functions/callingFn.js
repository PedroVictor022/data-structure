function factorial(n) {
  if(n === 0 || n === 1) {
    return 1;
  } 
  return n * factorial(n - 1);
}

const a = factorial(1);
const b = factorial(3);
const c = factorial(580);

console.log(a, b, c);