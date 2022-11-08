'use strict'

/**
 * Hacer un programa q muestre todos los numeros entre dos numero introducidos por 
 * el susario
 */

var nuemro1 = parseInt(prompt("Introduce el primer numero", 0));
var nuemro2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write("<h1>De " + nuemro1 + " a " + nuemro2 + " estan estos numeros:</h1>");
for (var i = nuemro1; i <= nuemro2; i++) {
    document.write(i + "<br/>");
}