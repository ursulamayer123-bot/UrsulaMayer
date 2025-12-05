const prompt = require ('prompt-sync')();

let numero1 = parseFloat (prompt ('Ingrese el primer número:'));
let numero2 = parseFloat (prompt ('Ingrese el segundo número:'));

let suma = numero1 + numero2;

console.log('La suma de los números es: ' + suma)

