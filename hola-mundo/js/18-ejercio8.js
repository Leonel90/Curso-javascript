'use strict'

/**
 * Calculadora
 * - Pida dos numeros por pantalla
 * -- Si metemos uno mal q nos los vuela a pedir
 * - En l cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir
 * esas dos cifras
 */

var numero1 = parseInt(prompt('Indroduce la primera cifra', 0));
var nuemro2 = parseInt(prompt('Introduce la segunda cifra', 0));

while (numero1 < 0 || nuemro2 < 0 || isNaN(numero1) || isNaN(nuemro2)) {//aki comprobamos si estos son numeros o no y si estan correctos o no
    numero1 = parseInt(prompt('Indroduce la primera cifra', 0));
    nuemro2 = parseInt(prompt('Introduce la segunda cifra', 0));
}
// asi para q salga en el cuerpo de la pagina web 
var resultado = "La suma es: " + (numero1 + nuemro2) + "<br/>" +
                "La resta es: " + (numero1 - nuemro2) + "<br/>" +
                "La multiplicacion es: " + (numero1 * nuemro2) + "<br/>" +
                "La division es: " + (numero1 / nuemro2) + "<br/>";


// asi para q salga en la alerta y en al consola
var resultadoCMD = "La suma es: " + (numero1 + nuemro2) + " \n" +
                   "La resta es: " + (numero1 - nuemro2) + " \n" +
                   "La multiplicacion es: " + (numero1 * nuemro2) + " \n" +
                   "La division es: " + (numero1 / nuemro2) + " \n";


document.write(resultado);// devuelve el resultado en el cuerpo de la pagina web
alert(resultadoCMD);// nos muestra el resultado por una ventanita en la pagina
console.log(resultadoCMD);// nos muestra el resultado por consola