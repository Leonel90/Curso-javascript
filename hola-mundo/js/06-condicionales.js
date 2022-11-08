'use strict'

// CONDICIONAL IF
// Si A es igual a B entonces haz algo

var edad1 = 30;
var edad2 = 12;

// si pasa esto
if (edad1 > edad2) {
    //ejecuta esto
    console.log("edad1 es mayor q edad2");
} else {
    //sino
    console.log("La edad1 es inferior");
}

// ejercicio 

/**
 * Operadore relacionales
 * Mayor : >
 * Menor: <
 * Mayor o igual: >=
 * Menor o igual: <=
 * Igual: ==
 * Distinto: !=
 */

var edad = 10;
var nombre = "David Suarez";

if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre + "tiene" + edad + "años, es mayor de edad");
} else {
    // Es menor de edad
    console.log(nombre + "tiene" + edad + "años, es menor de edad");
}

// if anidados

var edad = 12;
var nombre = "David Suarez";

if (edad >= 18) {
    // Es mayor de edad
    console.log(nombre + "tiene" + edad + "años, es mayor de edad");
    if (edad <= 33) {
        console.log("Todavia eres millenial");
    } else if (edad >= 70) {
        console.log("Eres anciano");
    } else {
        console.log("Ya no eres millenial");
    }
} else {
    // Es menor de edad
    console.log(nombre + " tiene " + edad + " años, es menor de edad ");
}

/**
 * Operadores Logicos
 * AND(Y): &&
 * OR(O): ||
 * Negacion: !
 */

var year = 2048;

// Negacion
if (year != 2016) {
    console.log("El año no es 2016 realmente es " + year);
}

// AND
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("Estamos en la era post moderna");
}

// OR
if (year == 2008 || year == 2018 && year == 2028) {
    console.log("El año acaba en 8");
} else {
    console.log("AÑO NO REGISTRADO");
}