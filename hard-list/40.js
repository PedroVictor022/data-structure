function verifyStr(str, char) {
  const text = str;
  for(let i =0;i < text.length;i++){
    if (text[i] == char) {
      return console.log(`Na palavra ${text} foi encotrado a letra ${char}`);
    }
  }
}

verifyStr('Ola mundo', 'o')