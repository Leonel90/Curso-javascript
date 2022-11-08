'use strict'

// OPERADORES
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 + numero2;

alert("El Resultado de la operacion es" + operacion);

// TIPOS DE DATOS
var nuemero_entero = 44;// entero
var cadena_texto = "Hola que tal";// cadena de texto
var verdadero_o_falso = true;// booleano

var numero_faslo = "33";

// funciones para convertir datos 
console.log(numero_faslo);// su salida es como texto
console.log(Number(numero_faslo)+7);// su salida es como entero y lo suma ya q con Number convertimos la cadena de texto en numero
console.log(parseInt(numero_faslo)+7);// su salida es numero entero y lo suma ya q con parseInt se transforma a numero entero la cadena de texto
console.log(parseFloat(numero_faslo)+7);//su salida es numero decimal y lo suma ya q con parseFloat se transforma a numero decimal la cadena de texto

// o tambien podemos hacerlo viseversa un numero entero convertirlo en cadena de texto
console.log(nuemero_entero+7);//suma sin problema los dos xq son numeros
console.log(nuemero_entero+"Texto concatenado");// concatenacion de un entero y texto
console.log(String(nuemero_entero)+4);// su salida es cadena de texto es concatenacion de texto ya q con String convertimos el numero entero en texto

// con "typeof" podemos saber q tipo de dato es la variable
console.log(typeof nuemero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_faslo); 