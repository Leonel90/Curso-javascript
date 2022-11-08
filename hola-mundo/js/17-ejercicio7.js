'use strict'

// Tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt('¿De q numero quieres la tabla?', 1));// aki pedimos al ususario q ingrese el numero x teclado

document.write("<h1>Tabla del " + numero + "</h1>");
for (var i = 1; i <= 10; i++) {
    document.write(i + " x " + numero + " = " + i * numero + "<br/>");// asi enviamos la salida x la web

    console.log(i + " x " + numero + " = " + i * numero);// asi enviamos la salida x la consola
}


// Todas las tabas de multiplicar
for (var c = 1; c <= 10; c++) {
    document.write("<h1>Tabla del " + c + "<h1>");
    for (var i = 1; i <= 10; i++) {
        document.write(i + " x " + c + " = " + (i * c) + "<br/>");
    }
}