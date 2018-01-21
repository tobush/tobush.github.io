'use strict';
/* My */
/*function submitClick() {
    var fNameValue = document.getElementById("fname").value;
    console.log(fNameValue);
    var lNameValue = document.getElementById("lname").value;
    console.log(lNameValue);
    event.preventDefault();
}

document.getElementsByTagName('input')[2].addEventListener('click', submitClick);*/

/* How should work */

document.getElementById('formularz').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(document.getElementById('fname').value);
    console.log(document.getElementById('lname').value);
    console.log(document.getElementById('check').checked);
})