'use strict';

function buttonClick() {
    document.getElementsByTagName('p')[0].style.backgroundColor = 'red';
    document.getElementsByTagName('p')[1].style.backgroundColor = 'yellow';
}

document.querySelector('button').addEventListener('click', buttonClick);

