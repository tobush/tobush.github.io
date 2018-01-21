'use strict';

function paragraphClick() {
    console.log('kliknąłem w paragraf');
}

function changeHeaderText() {
    document.querySelector('h1').innerText = 'Zmiana';
}

document.querySelector('h1').onclick = changeHeaderText;

function changeBackground() {
    document.getElementById('parFirst').style.backgroundColor = 'red';
}

document.getElementById('parFirst').addEventListener('click', changeBackground);

document.querySelectorAll('.superlink')[1].addEventListener('click', function() {
    console.log('click w link');
    document.getElementById('parFirst').removeEventListener('click', changeBackground);
})

document.getElementsByTagName('a')[1].addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('nie przeadowuje strony');
    console.log(event.type);
    this.style.backgroundColor = 'green';
})