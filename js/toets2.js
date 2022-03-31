


// let mijnLeeftijd = 18;

// function checkLeeftijd(){
//     if(mijnLeeftijd >= 18){
//         alert("Je bent ouder dan 18");
//     }
//     else{
//         alert("je bent jonger dan 18")
//     }
// }

// checkLeeftijd();

//maak een button aan in de index.html
//zorg ervoor dat je deze button selecteerd in js
//maak een functie die controleerd of je oud genoeg bent om je rijbewijs te halen
//zorg ervoor dat de uitkomst in een alertbox wordt getoond NADAT je op de button hebt geklikt.

// const myButton = document.querySelector('.button');



// function rijbewijs(){
//     let myLeeftijd = prompt('wat is je leeftijd?');
//     if (myLeeftijd >= 18) {
//         alert('je kan je rijbewijs halen')
//     } else {
//         alert('je kan je rijbewijs nog niet halen.');
//     }
// }

// rijbewijs();

// myButton.addEventListener('click', rijbewijs);



//functie met een array van je lessen op school
//loop door de array heen
//druk de inhoud van de array op de browser nadat je op een button klikt.

const myButton = document.querySelector('.button');
const myArrays = document.querySelector('.arrays');

function mylessen() {
    const myArray = ['rekenen', 'Engels', 'Html', 'Javascript'];
        for (let i = 0; i < myArray.length; i++) {
            const heleArray = myArray[i];
            console.log(heleArray);
            myArrays.innerHTML = heleArray;
        }
}   
