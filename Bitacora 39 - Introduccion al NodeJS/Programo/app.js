const calculator = require('./calculator.js');
console.log(calculator);

console.log(calculator.sumar(45,6));

console.log(calculator.multiplicar(7,4));
console.log(calculator.restar(10,4));
console.log(calculator.dividir(15,3));
/* Destructuring
const { sumar, restar, multiplicar, dividir } = require('./calculator.js'); //Destructuring
console.log(sumar(45,6)) */