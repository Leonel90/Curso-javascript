'use strict'
/**
 * Utilizar un bucle, mostrar la suma y la media d los numeros introducidos
 * hasta introducir un numero negativo y ahi mostrar el resultado
 */

var suma = 0;
var contador = 0;


do{
    var numero = parseInt(prompt("Introduce numeros hasta q metas uno negativo",0));

    if(isNaN(numero)){// aki validamos q si no es un numero lo q introduce el usuario le asignamos el valor d cero
         numero = 0;

    }else if(numero >= 0){// y sino entra aca y comprueba q si es mayor q cero y realiza la suma + suma + numero
        suma = suma + numero;// podemos hacer el proceso asi 
        //suma += numero;// o asi q es lo mismo

        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(numero >= 0)// mientras se cumpla esto haga esto aqui dice la condicion

alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: " + (suma/contador));
