function verifyArr(arr, char) {
  const verify = arr.find(item => item.value === char);
  if (!verify) {
    return false;
  }
  return true;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(verifyArr(numbers, 2000));