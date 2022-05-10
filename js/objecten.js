const myCars = [
    {

        title : 'Poresche Macan',
        description : 'The Porsche Macan (Type 95B) is a high-performance five-door luxury crossover SUV produced by the German car manufacturer Porsche from 2014',
        price : 100000,
    
    },
    {
        title : 'Poresche Panemara',
        description : 'The Porsche Panamera is a mid/full-sized luxury car (E-segment/F-segment in Europe) manufactured by the German automobile manufacturer Porsche.',
        price : 80000,
    },
    {
        title : 'Poresche 911',
        description : 'The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart, Germany.',
        price : 120000,
    },
    {
        title : 'Poresche Taycan',
        description : 'Most Taycan models feature dual electric motors, with one powering the front wheels and the other powering the rears',
        price : 170000,
    },
];

const myDiv =  document.querySelector('.div');

for (i = 0; i < myCars.length; i++ ) {
    let item  = myCars[i]
    document.body.innerHTML += `Title: ${item.title} <br>`
    document.body.innerHTML += `Description: ${item.description} <br>`
    document.body.innerHTML += `Price: ${item.price} <br><br>`
 
}