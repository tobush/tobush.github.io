'use strict';

var newParagraph = document.createElement('p');
console.log(newParagraph);

var paragraphText = document.createTextNode('This is text to created p');
console.log(paragraphText);

newParagraph.appendChild(paragraphText);
console.log(newParagraph);

newParagraph.setAttribute('class', 'new-par-class');
console.log(newParagraph);


document.getElementById('sectionFirst').insertBefore(newParagraph,
document.getElementById('parSecond'));

var parSecond = document.getElementById('parSecond');
parSecond.parentElement.insertBefore(newParagraph, parSecond);

parSecond.parentElement.insertBefore(newParagraph, parSecond.nextSibling);

//document.getElementById('sectionFirst').insertBefore(newParagraph, parSecond);

parSecond.parentElement.replaceChild(newParagraph, parSecond);

document.getElementById('sectionFirst').removeChild(document.querySelector('header'));

var parFirst = document.getElementById('parFirst');

parFirst.innerHTML = '<h1>Cześć</h1>';
parFirst.innerText = '<h1>Cześć</h1>';
parFirst.outerHTML = '<h1>Cześć</h1>';