'use strict'

function example() {
    var exampleVariable = 10;
    
    
    return exampleVariable;
}

function newExample() {
    var exampleVariable = 20;
    
    return exampleVariable;
}

var variableOutsideFunction = example();
var variableOutsideFunction2 = newExample();

console.log(variableOutsideFunction);
console.log(variableOutsideFunction2);