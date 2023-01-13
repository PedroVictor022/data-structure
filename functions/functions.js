function square(number) {
  return number * number;
}

function makeObj(theObj) {
  theObj.make = 'Honda'
};

const myBike = {
  make: 'Yamaha',
  model: 'CBR 600 RR',
  price: 'R$ 45.000.900'
}

makeObj(myBike);

console.log(myBike);
console.log(square(10));