'use strict'

//Funciones anónimas
//Es una función que no tiene nombre
//la funciones anónimas son una funcion dentro de otra o simplemente un colback

/*var pelicula = function(nombre){
    return "La pelicula es: " + nombre;
}*/

function sumame(numero1, numero2, sumaYmustra, sumaporDos){
    var sumar = numero1 + numero2;

    //Invocacion de las funciones de callbacks
    sumaYmustra(sumar);
    sumaporDos(sumar);

    return sumar;
}

//funcion de callbacks
sumame(5, 7, function(dato){
    console.log("La suma es: " + dato);
},
function(dato){
    console.log("La suma por dos es: " + (dato*2));
}
)

//Funciones flecha
function sumame(numero1, numero2, sumaYmustra, sumaporDos){
    var sumar = numero1 + numero2;

    //Invocacion de las funciones de callbacks
    sumaYmustra(sumar);
    sumaporDos(sumar);

    return sumar;
}
 
//funcion de callbacks
sumame(5, 7, dato => {
    console.log("La suma es: " + dato);
},
dato => {
    console.log("La suma por dos es: " + (dato*2));
}
)