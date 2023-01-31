// Recebendo multiplos parametros

// Caracter especial do JAVASCRIPT
function soma() {
  console.log(arguments);
}

soma(1, 2, 3)

// REST OPERATOR
function soma1(...args) {
  console.log(args);
}

soma1(12, 12, 1231)