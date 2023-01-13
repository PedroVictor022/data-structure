function sunArr(arr) {
  let sun = 0
  for (let i = 0;i < arr.length;i++) {
    sun += arr[i];
  }
  return console.log(sun);
}

const numbers = [1, 1, 3, 10];
sunArr(numbers);