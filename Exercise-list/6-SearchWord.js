function countWord(str, word) {
  const regex = new RegExp(word, "gi");
  return (str.match(regex) || []).length
}

let teste = "No galinheiro haviam 3 frangos, frangos que seria criados para comer no natal, no natal os frangos seriam assados!";

console.log(countWord(teste, "frango"));