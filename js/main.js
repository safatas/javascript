console.log ('file loaded');

const myDiv = document.querySelector('.button');

function showAlert () {
  alert('Je heb de button geclikt') ;
}

if (myDiv) {
  myDiv.addEventListener('click' , showAlert);
}