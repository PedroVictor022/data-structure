function smallNumber(arr) {
  let smallNumber = arr[0];
  for (let i = 0;i < arr.length;i++) {
    if (arr[i] < smallNumber) {
      smallNumber = arr[i];
    }
  }
  return console.log(smallNumber);
}

const numbers = [123, 43234, 4, 1235, 543];
smallNumber(numbers);