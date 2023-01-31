const user = {
  firstname: 'Pedro',
  lastname: 'Victor',
  full_name: 'Pedro Victor',
  age: 20,
  skills: ['Backend', 'Frontend', 'Mobile']
}
// Retorna o resto dos itens de um objeto
const { firstname, ...rest } = user;

console.log(firstname, rest);

setTimeout(() => {
  console.clear();
}, 5000);