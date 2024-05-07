'use strict'

// Crea due array che hanno un numero di elementi diversi

const max = [1, 2, 3, 4, 5, 6];

const min = [7, 8, 9];

// trova array piu corto

const minLunghezzaArray = Math.min(max.length, min.length);

//console.log(Math.min(max.length, min.length));

// Aggiungi elementi casuali all’array che ha meno elementi

while (max.length !== min.length) {
    if (max.length < min.length) {
        // Aggiungi un elemento casuale 
        max.push(Math.floor(Math.random() * 10));
    } else {
        // Aggiungi un elemento casuale 
        min.push(Math.floor(Math.random() * 10));
    }
}

// fino a quando ne avrà tanti quanti l’altro

console.log("Array 1:",max);
console.log("Array 2:",min);