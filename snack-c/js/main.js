'use strict'

const array = [30, 60, 90, 56]

function stampa(array) {
    let result = '';
for (let i = 0; i < array.length; i++)  {
    result += array[i];
    if (i !== array.length - 1) {
result += ',';
    }
}
return result;
}

const stampaArray = stampa(array);

console.log(stampaArray);