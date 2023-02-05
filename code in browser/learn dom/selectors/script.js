console.log(document.querySelector('.message'));
console.log(document.querySelector('#message'));
console.log(document.querySelector('h2'));

console.log(document.getElementById('message'));
console.log(document.getElementsByClassName('message'));
console.log(document.getElementsByTagName('h2'));

document.getElementById('message').innerHTML ='<span>This is get element by id</span>';