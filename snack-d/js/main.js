'use strict'

//creo array A

const arrayA = [ 'a', 'b', 'c', 'd', 'e' ]

//creo la funzione per eliminare ultimo elemento array A

function rimuoviDallaCoda(arrayA) {
    const arrayVuoto = []
    for (let i = 0; i < arrayA.length - 1; i++) {
        arrayVuoto.push(arrayA[i]);
    }
    return arrayVuoto
}

const arrayB = rimuoviDallaCoda(arrayA)

console.log(arrayB);