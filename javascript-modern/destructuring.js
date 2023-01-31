const user = {
  firstname: 'Pedro',
  lastname: 'Victor',
  full_name: 'Pedro Victor',
  age: 20,
  skills: ['Backend', 'Frontend', 'Mobile']
}

console.log(user);
// Destructuring

const { firstname, age, skills, full_name: fullName } = user;
const [primary, secondary, tertiary] = skills;

console.log(firstname, fullName);
console.log(primary, secondary, tertiary);