'use strict'

/**
 * Muestre todos los numeros divisores de un numero introducido en un prompt
 */

var numero = parseInt(prompt("Mete un numero", 0));

for (var i = 1; i <= numero; i++) {

    if (numero % i == 0) {
        console.log("Divisor: " + i);// aki encontramos el numero divisor con resto 0
    }
}