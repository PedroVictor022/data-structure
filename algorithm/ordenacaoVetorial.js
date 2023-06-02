// PASSO A PASSO  | VARIAVEL QUE LE O TAMANHO DO ARR QUE ESTA SENDO PASSADO COMO PARAMETRO | PERCORRA A VARIAVEL COM UM FOR |  PERCORRA O VALOR RETORNADO DO FOR ANTERIOR SENDO A DO MEIO IGUAL A VARIAVEL_TAM_ARR - 1  | SE O ARR[LAST_FOR] > ARR[LAST_FOR] + 1 | DENTRO DO ESCOPO DO IF | CRIE UMA VARIAVEL TEMPORARIA QUE RECEBE ARR[LAST_FOR] | ARR[LAST_FOR] = ARR[LAST_FOR + 1] | ARR[LAST_FOR + 1] = VARIAVEL TEMPORARIA | RETURN ARR

function orderArr(arr) {
   let len = arr.length;
   for(let f = 0;f < len;f++) {
      for(let i = 0;i < len - 1;i++) {
         if(arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
         }
      }
   }
   console.log(arr);
   return arr;
}

const arrNumbers = [12, 34, -9,23, 1, 2, 64, 63, 76, 28];
orderArr(arrNumbers)