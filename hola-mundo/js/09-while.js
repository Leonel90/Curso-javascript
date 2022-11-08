'use strict'

// Bucle while

var year = 2018;

// Incremento 
/*while(year <= 2051){
    // ejecuta esto
    console.log("Estamos en el año: "+year);
    
    year++;
}*/

// Decremento
while (year != 1991) {
    // ejecuta esto
    console.log("Estamoe en el año" + year);

    if(year == 2000){// usuamos break cuando queremos detener en algun numero determinado xq corta el bucle de repeticion
        break;
    }
    year--;
}

// Do while
var year = 31;

do {
    alert("SOLO CUANDO SEA DIFERENTE A 20");
    year--;
} while (year > 25)