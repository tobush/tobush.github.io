'use strict'

var number = 10;

/* Warunek if*/

if (number > 5) {
    console.log('liczba jest większa od 5');
}

/* Warunek if-else */

if (number < 3) {
    console.log('Liczba jest mniejsza od 3');
} else {
    console.log('Liczba jest większa od 3');
}


/* Warunek elae-if */

if (number < 10) {
    console.log('liczba jest mniejsza od 5');
} else if (number >= 10 && number <= 20) {
    console.log('liczba jest z przedziału 10-20');
} else if (number == 10) {
    console.log('liczba jest równa 10');
} else {
    console.log('Liczba jest większa od 20');
}

/*Warunek switch */

var color = 'green';

switch (color) {
    case 'red':
        console.log('Kolor jest czerwony');
        break;
    case 'green':
        console.log('Kolor jest zielony');
        break;

    default:
        console.log('Kolor jest zielony lub czerwony');
}

/*
function Person(personName, personWeight, personHeight) {
    this.name = personName;
    this.weight = personWeight;
    this.height = personHeight;
    this.indexBmi = function () {
        return this.weight / Math.pow(this.height, 2);
    }
}

*/

class Person {
    constructor(personName, personWeight, personHeight) {
        this.name = personName;
        this.weight = personWeight;
        this.height = personHeight;
    }

    indexBmi() {
        return this.weight / (this.height * this.height);
    }

    bmiMessage () {
        if (this.indexBmi() > 26) {
            console.log('You\'re a fat bitch');
        } else if (this.indexBmi() < 26 && this.indexBmi() > 18) {
            console.log('norma');
        } else {
            console.log('niedowaga');
        }
    }
}

var currentPerson = new Person('Denys', 78, 1.72);

console.log(currentPerson.indexBmi());
console.log(currentPerson.bmiMessage());

/*
switch(currentPerson.indexBmi) {
    case 0.1 - 18.5:
        console.log('Feed me more');
    break;
    case 18.6 - 24.9:
        console.log('Your index BMI is correct')
    break;
    case 100 - 25:
        console.log('You\'re a fat, bitch!');
    break;
}

*/