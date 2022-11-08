'use strict'

//PARAMETROS REST Y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto_de_Frutas){
    console.log("Frta1: " , fruta1);
    console.log("Frta2: " , fruta2);
    console.log(resto_de_Frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Pera", "Melón", "Coco");

//var frutas = ["Naranja", "Manzana"]
//listadoFrutas(...frutas, "Sandia", "Pera", "Melón", "Coco");