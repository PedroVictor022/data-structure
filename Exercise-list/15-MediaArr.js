function mediaArr(arr) {
  let soma = 0;
  let media;
  for (let i = 0;i < arr.length;i++) {
    soma += arr[i];
  }
  media = soma / arr.length;
  return console.log(media);
}

const n = [2, 2, 2, 4];
mediaArr(n);