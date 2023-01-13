function pali(str) {
  const text = str.toLowerCase();
  const a = text[0];
  const b = text.slice(-1);

  if(a === b) return console.log(`${str} this is a palindrome`);
  return console.log(`${str} this is a word is not palindrome`);
}

const teste1 = 'Ola mundo';
pali(teste1);