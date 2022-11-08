'use strict'

/**
 * Que nos diga si un numero es par o impar
 * 1. Ventana prompt q nos pida q ingrese el numero al usuario
 * 2. Si no es valido q nos pida de nuevo el numero
 */

var number = parseInt(prompt('Introduce un numero', 0));

while (isNaN(number)) {
    number = parseInt(prompt('Introduce un numero', 0));
}

if (number % 2 == 0) {
    alert("Es un numero par");
} else {
    alert(" Es un numero impar");
}