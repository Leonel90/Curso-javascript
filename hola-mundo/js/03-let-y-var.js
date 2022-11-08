'use strict'

// Prueba con Let y var

// Prueba con var
var numero = 40;
console.log(numero);

if (true) {
    var numero = 50;// "var" crea una variable global
    console.log(numero);//valor 50
}
console.log(numero);

// Prueba con Let
var texto = "Curso JS Leonel";
console.log(texto);// var js

if (true) {
    let texto = "Curso Laravel 5 Leonel";// "let" crea la variable soo al nivel de este bloque
    console.log(texto);// valor laravel 5
}

console.log(texto); //valor js