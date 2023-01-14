function arrConcat(arr, el, pos) {
  arr.splice(pos, 0, el);
  return arr;
}
let numbers = [1, 2, 3, 4, 5, 6];
console.log(arrConcat(numbers, 432, 2));