'use strict'

// Crea due array che hanno un numero di elementi diversi

const max = [1, 2, 3, 4, 5, 6];

const min = [7, 8, 9];

// trova array piu corto

//const minLunghezzaArray = Math.min(max.length, min.length);

//console.log(Math.min(max.length, min.length));



//fai si che alla fine i due array abbiano gli stessi elementi

while (max.length !== min.length) {

    if (max.length < min.length) {
        // Aggiungi elementi casuali all’array che ha meno elementi
        
        max.push(Math.floor(Math.random() * 10));
    } else {
        
        min.push(Math.floor(Math.random() * 10));
    }
}


console.log("Array 1:",max);
console.log("Array 2:",min);