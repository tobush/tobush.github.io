'use strict';

/* Operatory arytmetyczne*/
var resztaZDzielenia = 6 % 4;
console.log(resztaZDzielenia);

console.log(resztaZDzielenia++);
console.log(resztaZDzielenia++);

var liczba = 1;

console.log(++liczba);
console.log(++liczba);

/* Operatory przypisania */

var number = 100;
console.log(number);

number += 20; //alternatywa dla number = number + 20
console.log(number);

number *= 2;
console.log(number);

/* Operatory logiczne*/

console.log(2 == 2);
console.log(3 != 3);

console.log(2 === 2);
console.log(3 !== 3);

console.log(3 > 3);
console.log(3 >= 3);

/* Operatory logiczne */

console.log((2 == 2) && (3 < 2));
console.log((2 == 2) && (3 > 2));

console.log((2 == 2) || (3 < 2));
console.log((2 == 2) || (3 > 2));

console.log((2 > 2) || (3 < 2));

console.log(!(2 == 2));

console.log((2 > 1) || (1 > 2) && (2 == 2));

console.log((2 == 2) && (2 > 1) || (1 > 2));

var parzystaCzyNieparzysta = (number%2 == 0)? 'parzysta' : 'nieparzysta';
console.log(parzystaCzyNieparzysta);