function verifyNum(num) {
  if(num >= 0 || num <= 100) {
    return console.log(`${num} esta entre 0 e 100`);
  }
  return console.log(`${num} nao esta entre 0 e 100`);
}

verifyNum(2);
verifyNum(1200);