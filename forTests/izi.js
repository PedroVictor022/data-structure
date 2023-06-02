function izi() {
   for(let i = 10; i > 0;i--) {
      console.log(i)
   }
}

function sumPars() {
   for(let i = 0;i <= 10;i++) {
      if(i % 2 == 0) {
         console.log(`${i} + ${i} = ${i + i}`);
      };
   };
};

sumPars()