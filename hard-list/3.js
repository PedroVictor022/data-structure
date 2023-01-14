function maiorNumero(a, b, c) {
  if(a > b && a > c) {
    return console.log(`${a} e maior que ${b} e ${c}`);
  } else if(b > c && b > a) {
    return console.log(`${b} e maior que ${a} e ${c}`);
  } else if(c > a && c > b){
    return console.log(`${c} e maior que ${a} e ${b}`);
  }
}

maiorNumero(1011212, 90, 40);