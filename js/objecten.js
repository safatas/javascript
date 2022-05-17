const myCars = [
    {

        title : 'Poresche Macan',
        description : 'The Porsche Macan (Type 95B) is a high-performance five-door luxury crossover SUV produced by the German car manufacturer Porsche from 2014',
        price : 100000,
        image: "images/porchemacam.jpg"
       
    
    },
    {
        title : 'Poresche Panemara',
        description : 'The Porsche Panamera is a mid/full-sized luxury car (E-segment/F-segment in Europe) manufactured by the German automobile manufacturer Porsche.',
        price : 80000,
        image : 'images/porsche panemara.jpg'
    },
    {
        title : 'Poresche 911',
        description : 'The Porsche 911 (pronounced Nine Eleven or in German: Neunelfer) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG ',
        price : 120000,
        image :  'images//porsche911.png'
    },
    {
        title : 'Poresche Taycan',
        description : 'Most Taycan models feature dual electric motors, with one powering the front wheels and the other powering the rears car introduced in September 1964 by Porsche AG  German automobile manufacturer ',
        price : 170000,
        image : 'images/Porsche-Taycan.jpg'
    },
];

const myDiv =  document.querySelector('.div');

for (i = 0; i < myCars.length; i++ ) {
    let item  = myCars[i]

    document.body.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.description}</p>
    <p class="card-text">$${item.price}</p>
  </div>
</div>`

}
