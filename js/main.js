console.log ('file loaded');

let outsideTemp = prompt('Vul hier wat');

 function outSideTemp () {
     if (outsideTemp <= 9 ) {
         alert('Het is koud');
     } else if (outsideTemp < 16 ) {
         document.body.innerHTML +=  `Dat het niet warm is, en dat deze beter een jas aan kan doen.`;
     } else if (outsideTemp  < 24 ) {
         document.body.innerHTML += ` dat het niet koud en niet heel warm is.`;
     } else if (outsideTemp > 24 ) {
         document.body.innerHTML += `dat de gebruiker geen jas aan hoeft vandaag.`;
     }
 }

