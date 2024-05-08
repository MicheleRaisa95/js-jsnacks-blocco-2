'use strict'

//crea un array

const array = [1, 2, 3, 4, 5];
console.log(array);

 //crea un prompt dove l'utente inserisce un valore da cercare dentro l'array

const numeroUser = parseInt(prompt('inserisci un numero'));
console.log(numeroUser);

//scrivo la funzione che restituisca la posiziene dentro l'array

function trovaIndice (array, elemento) {
for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) return i;
}
return -1;
}

const indice = trovaIndice(array,numeroUser);
console.log(indice);