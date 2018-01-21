'use strict';

var paragraf = document.getElementById('sectionFirst');
console.log(paragraf);

var klasy = document.getElementsByClassName('link');
console.log(klasy);

var paragrafy = document.getElementsByTagName('p');
console.log(paragrafy);

var linkiWDivach = document.querySelectorAll('div .link:first-of-type');
console.log(linkiWDivach);

var pierwszyParagraf = document.querySelector('p');
console.log(pierwszyParagraf);

//pierwszyParagraf.style.backgroundColor = 'red';