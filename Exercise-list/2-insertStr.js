function insertStr(str, char, pos) {
  return str.slice(0, pos) + char + str.slice(pos);
};

const text = 'Hello world';
console.log(insertStr(text, '00', 3));