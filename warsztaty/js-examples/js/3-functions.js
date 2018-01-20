'use strict';

/* Deklaracja funkcji */

function example() {
    console.log('this is function example');
}

example();

var anonim = function() {
    console.log('this is fun');
}

anonim();

/* Funkcja z parametrami */

function dodajDwieLiczby(num1, num2) {
    //console.log(num1+num2);
    
    return num1+num2;

}

dodajDwieLiczby(15, 30);
dodajDwieLiczby(4, 5);

/* MFT */

function addNameSurnameAge (name, surname, age) {
    console.log('My name is ' + name + ' my surname is ' + surname +' and ' + age);
}

addNameSurnameAge('Denys', 'Vladyshevskyi', 22);

var wynikDodawania = dodajDwieLiczby (2, 2);

