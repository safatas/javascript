
const cars = [
    {
        merk: 'ford',
        type: 'a1'
    },
    {
        merk: 'volkswagen',
        type: 'golf 7'
    },
    {
        merk: 'mercedes',
        type: 's klasse'
    }
    ];

  

console.log(cars[1]);

let i = 0;

while (i < cars.length) {
    console.log(cars[i].merk);
    i++;
}

for (i = 0; i < cars.length; i++){
    console.log(cars[i]);
}




// let number = 1;
// //Dit blijft doorgaan zolang number kleiner is dan 10;
// while (number < 10) {
//     console.log(number);
//     number++; //Verhoog number met 1;
// }