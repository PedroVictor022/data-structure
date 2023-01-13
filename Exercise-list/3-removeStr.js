function removeStr(str, pos) {
  return str.slice(0, pos) + str.slice(pos + 1);
}

const text = 'Hello world';
console.log(removeStr(text, 3));