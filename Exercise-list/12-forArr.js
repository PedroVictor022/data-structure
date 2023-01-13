function lengthArr(arr) {
  let bigEl = arr[0];
  for(let i = 0;i < arr.length;i++) {
    if(arr[i] > bigEl) {
      bigEl = arr[i];
    }
  }
  return console.log(bigEl);
}

const numbers = [100, 2, 3, 44, 5, 12, 70];
lengthArr(numbers);