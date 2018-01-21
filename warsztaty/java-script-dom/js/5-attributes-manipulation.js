'use strict';

//document.getElementsByTagName('a')[1].href = 'https://google.com';

function getAllHrefs() {
    var hrefsArray = [];
    var linksCollection = document.getElementsByTagName('a');
    
    for(var i = 0; i < linksCollection.length; i++) {
        hrefsArray.push(linksCollection[i].href);
    }
    
    return hrefsArray;
}

console.log(getAllHrefs());


var parFirst = document.getElementById('parFirst');

parFirst.className = 'nowa-klasa';
parFirst.classList.add('jeszcze-nowasza-klasa', 'lol');
parFirst.className += ' i-kolejna-nowa';
parFirst.classList.remove('lol');
//parFirst.removeAttribute('class');

//console.log(document.getElementsByTagName('a')[0].href);
document.querySelector('header').style.backgroundColor = '#f0f';