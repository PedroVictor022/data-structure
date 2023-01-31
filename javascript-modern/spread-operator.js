const user = {
  firstname: 'Pedro',
  lastname: 'Victor',
  full_name: 'Pedro Victor',
  age: 20,
  email: 'pedro@mail.com',
  skills: ['Backend', 'Frontend', 'Mobile'],
  active: false,
}

// Spread (espalhar) operator

// Merge de dois objetos - Quebra do principio da imutabilidade - Nao recomendado
// Object.assign(user, {
//   active: true
// })

const updateUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true
};

console.log({user}, {updateUser});

setTimeout(() => {
  console.clear();
}, 5000);