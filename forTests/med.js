function userNum(num) {
   if(num % 2 !== 0) {
      return console.log('Numero primo');
   };
   return console.log('Numero nao e primo');
};

// userNum(10);
// userNum(2);
// userNum(3);
// userNum(11);
// userNum(16);

function tableMult(num) {
   for(let i = 0;i < 10;i++) {
      let resultado = num * i;
      console.log(resultado);
   };
};

tableMult(10)