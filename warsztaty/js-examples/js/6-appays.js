'use strict'

/* Deklaracja zmiennej przechowującej tablice */
var emptyArray = [];
console.log(emptyArray);

var exampleArray = [1, 'Cześć', true, null];
console.log(exampleArray);

/* Zwracanie elementów tablicy */

var arrayElement = exampleArray[1];
console.log(arrayElement);

exampleArray[3] = 'lol';
console.log(exampleArray);

exampleArray[2] = 'mate';
console.log(exampleArray);

exampleArray[4] = 'false';
console.log(exampleArray);


/*
exampleArray[10] = 'undef';
console.log(exampleArray);
*/


/* Metody tablicowe */

exampleArray.push('Hello, World!');
console.log(exampleArray);

exampleArray.pop();
console.log(exampleArray);

var lastArrayElement = exampleArray.pop();
console.log(lastArrayElement);
console.log(exampleArray);


exampleArray.unshift('siema');
console.log(exampleArray);

exampleArray.shift();
console.log(exampleArray);

/* Zadanie */

exampleArray.splice(1, 0, 'lol', 12);
console.log(exampleArray);

/* Długość tablicy*/

console.log(exampleArray.length);

/* Tablica dwuwymiarowa */

var tablicaDwuwymiarowa = [
    ['Cześć', 'kolego'], 
    ['Denys', 'Vladyshevskyi']
];
console.log(tablicaDwuwymiarowa[0][1]);

/* Odwracanie i sortowanie */

exampleArray.reverse();
console.log(exampleArray);

exampleArray.sort();
console.log(exampleArray);


