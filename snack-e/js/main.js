'use strict'

//creo array A

const arrayA = [ 'a', 'b', 'c', 'd', 'e' ]

//creo la funzione per eliminare ultimo elemento array A

function rimuoviDallaTesta(arrayA) {
    const arrayVuoto = []
    for (let i = 1; i < arrayA.length; i++) {
        arrayVuoto.push(arrayA[i]);
    }
    return arrayVuoto
}

const arrayB = rimuoviDallaTesta(arrayA)

console.log(arrayB);