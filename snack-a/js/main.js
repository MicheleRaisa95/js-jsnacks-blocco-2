'use strict'

// creo un array con degli elementi

const array = [1, 2, 3, 4, 410, 80];
console.log(array)

// creo la funzione contaElementi e all'interno creo un ciclo for

function contaElementi (array) {
    let conteggio = 0;
for (let i = 0; i < array.length; i++) {
    conteggio++;
}
return conteggio;
}

// stampo i risultati in console

console.log(contaElementi(array));
