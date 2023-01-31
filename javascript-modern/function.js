// FUNCTION
function myFunction() {
  this.name = "Pedro";
  const lastName = () => {
    this.lastName = "Borges";
  }
  lastName();
}; 

console.log(new myFunction());

// ARROW FUNCTION
const myFunction2 = () => {
 this.name = 'Pedro';
}; 
myFunction2();
console.log(this);