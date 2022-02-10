console.log ('file loaded');

const myName = ('Safa Tas') ;
console.log(myName);

let temPrature = 6;
temPrature = temPrature + 5 ;
console.log(temPrature);
alert(`de tempratuur van vandaag is ${temPrature}`);


document.body.innerHTML+=`IK ben safa <br> het is vandaag ${temPrature} geraden`;

let userName = prompt('Wat is jouw naam');
alert(`jouw naam is ${userName}`);

const result = confirm('Wilt u cookies gaan accepteren');
if (result ) {
    alert('U heeft de cookies geaccepteerd');
} else {
    alert('u heeft de cookies niet geaccepteerd');
}