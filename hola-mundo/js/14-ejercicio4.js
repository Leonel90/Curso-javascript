'use strict'

/**
 * Mostrar todos los numeros impares q ahy entre dos numeros introducidos por el ususario
 */

var nuemero1 = parseInt(prompt("Introduce el primer numero", 0));
var nuemero2 = parseInt(prompt("Introduce el segundo numero", 0));

while (nuemero1 < nuemero2) {// comparamos los dos numeros he inclementa
    nuemero1++;

    if (nuemero1 % 2 != 0) {// aki ponemos la condicion para encontrar el numero impar
        console.log("El " + nuemero1 + " Es impar");
    }

}