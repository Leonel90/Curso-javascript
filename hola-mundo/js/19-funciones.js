'use strict'

// funciones
// Una funcion es un agrupacion reutilizable de un conjunto de instrucciones


// Así creamos una funcion
/*function  calculadora(){
    console.log("Hola soy la calculadora");
    console.log("Si soy la calculadora");

    return "Hola soy la calculadora!!";
}
//Invocar o llamar a la función
//console.log(calculadora(),calculadora(),calculadora(),calculadora());
calculadora();
calculadora();
calculadora();
calculadora();

var resultado = calculadora();

console.log(resultado);*/

//****FUNCION COMPLETA CON FUNCIONALIDAD Y REUTILIZANDO FUNCION CON PARA METROS */
function calculadora1(numero1,numero2){
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 + numero2));
    console.log("Multiplicación: " + (numero1 + numero2));
    console.log("División: " + (numero1 + numero2));
    console.log("****************************************");

    return "Hola soy la calculadora";
}
calculadora1(12, 8);
calculadora1(98, 2);

//con bucle reetitivo
for (var i = 1; i < 10; i++) {
    console.log(i);
    calculadora1(i, 8);
    
}