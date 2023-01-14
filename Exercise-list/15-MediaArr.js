function mediaArr(arr) {
  let soma = 0;
  for (let i = 0;i < arr.length;i++) {
    soma += arr[i];
  }
  return soma / arr.length;
}

const n = [2, 2, 2, 4];
console.log(mediaArr(n));