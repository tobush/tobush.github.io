'use strict';

/*var checkboxOne = document.getElementById('zgoda-marketingowa-1');
var checkboxTwo = document.getElementById('zgoda-marketingowa-2');
var checkboxMain = document.getElementById('wszystkie-zgody');*/

function checkAll() {
    console.log(this.checked);
    document.getElementById('zgoda-marketingowa-1').checked = this.checked;
    document.getElementById('zgoda-marketingowa-1').disabled = this.checked;
    document.getElementById('zgoda-marketingowa-2').checked = this.checked;
    document.getElementById('zgoda-marketingowa-2').disabled = this.checked;
}

document.getElementById('wszystkie-zgody').addEventListener('change', checkAll);

function validateForm(event) {
    event.preventDefault();
    console.log('test');
    document.getElementById('wiadomosc').outerHTML = '<ul id="wiadomosc"></ul>';
/* If field name and surname is empty... */

    if(document.getElementById('name').value == '') {
        var msgName = document.createElement('li');
        msgName.innerText = "Wpisz imię";
        document.getElementById('wiadomosc').appendChild(msgName);
    }
    
    if(document.getElementById('email').value == '') {
        var msgEmail = document.createElement('li');
        msgEmail.innerText = "Wpisz email";
        document.getElementById('wiadomosc').appendChild(msgEmail);
    }
    
    if(!document.getElementById('zgoda-marketingowa-1').checked) {
        event.preventDefault();
        var msgCheck = document.createElement('li');
        msgCheck.innerText = "Zgodź się1";
        document.getElementById('wiadomosc').appendChild(msgCheck);
    }    
    if(!document.getElementById('zgoda-marketingowa-2').checked) {
        event.preventDefault();
        var msgCheckTwo = document.createElement('li');
        msgCheckTwo.innerText = "Zgodź się2";
        document.getElementById('wiadomosc').appendChild(msgCheckTwo);
    }    
    if(!document.getElementById('wszystkie-zgody').checked) {
        event.preventDefault();
        var msgCheckMain = document.createElement('li');
        msgCheckMain.innerText = "Zgodź się3";
        document.getElementById('wiadomosc').appendChild(msgCheckMain);
    }
    
    
/*    if(this.name = "") {
        var newList = document.createElement('ul');
        var newListItem = document.createElement('li');
        var newListItemText = document.createTextNode('Your name is not filled in');
    }*/
}


document.getElementById('form').addEventListener('submit', validateForm);