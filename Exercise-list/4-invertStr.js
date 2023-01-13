function invertStr(str) {
  const splitStr = str.split('');
  const revertStr = splitStr.reverse();
  const joinStr = revertStr.join('');
  return joinStr;
}

const text = 'Hello world!';
console.log(invertStr(text));