'use strict';

/*var denys = {
    customerName: 'Denys',
    customerSurname: 'Vladyshevskyi',
    phoneNumber: 536227940,
    orderConfirmation: function () {
        console.log(this.customerName + ' ' + this.customerSurname + ' has created an order');
    }
}
var lalka = {
    customerName: 'Lol',
    customerSurname: 'Kekowic',
    phoneNumber: 590667940,
    orderConfirmation: function () {
        console.log('Lol has created an order');
    }
}

console.log(lalka.phoneNumber);

console.log(lalka['customerName']);

denys.orderConfirmation();
*/
/*
class Customer {
    constructor(customerName, customerSurname, phoneNumber) {
        this.name = customerName;
        this.surname = customerSurname;
        this.phone = phoneNumber;
    }
    
    orderConfirmation() {
        console.log(this.name + ' ' + this.surname + ' has created an order')
    }
}


var currentCustomer = new Customer('Denys', 'Vladyshevskyi', 536227940);

console.log(currentCustomer);
console.log(currentCustomer.name);

currentCustomer = new Customer('Lol', 'Kekowic', 454038534);

console.log(currentCustomer);
console.log(currentCustomer.name);

class Person {
    constructor(personName, personWeight, personHeight) {
        this.name = personName;
        this.weight = personWeight;
        this.height = personHeight;
    }
    
    indexBmi() {
        return this.weight / (this.height * this.height);
    }
}



class Person {
    constructor(personName, personWeight, personHeight) {
        this.name = personName;
        this.weight = personWeight;
        this.height = personHeight;
    }
    
    indexBmi() {
        return this.weight / Math.pow(this.height, 2);
    }
}

*/

function Person(personName, personWeight, personHeight) {
        this.name = personName;
        this.weight = personWeight;
        this.height = personHeight;
        this.indexBmi = function() {
            return this.weight / Math.pow(this.height, 2);
        }
}

var currentPerson = new Person('Denys', 74, 1.75);

console.log(currentPerson.indexBmi());

