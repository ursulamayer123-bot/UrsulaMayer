const prompt = require ('prompt-sync') ();
let numero = parseFloat (prompt ('Ingrese un número: '));
 
//Verificamos si el numero es positivo, negativo o cero.
if (numero > 0){
    console.log("El número es positivo.");
} else if (numero < 0){
    console.log("El número es negativo.");
} else{
    console.log("El número es cero.")
}