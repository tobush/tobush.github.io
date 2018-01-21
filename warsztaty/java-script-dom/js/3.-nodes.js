'use strict';

var parent = document.getElementById('parSecond').parentElement;
console.log(parent);

//parent.style.backgroundColor = 'red';

var parFirst = document.getElementById('parFirst');
console.log(parFirst.childNodes);
console.log(parFirst.childNodes[10]);
console.log(parFirst.children);
console.log(parFirst.children[4]);
console.log(parFirst.firstElementChild);
console.log(parFirst.lastElementChild);

var parSecond = document.getElementById('parSecond');
console.log(parSecond.nextElementSibling);
console.log(parSecond.previousElementSibling);