console.log('objecten2.js');

const myArray = [
    {
        name : 'Safa Tas',
        street: 'schalkburgerstraat 152',
        city : 'DenHaag',
    },
    {
        name : 'ahmet TAS',
        street: 'schalkburgerstraat 152',
        city : 'DenHaag',
    },
    {
        name : 'ALI Tas',
        street: 'schalkburgerstraat 152',
        city : 'DenHaag',
    },
    {
        name : 'Zeliha  Tas',
        street: 'schalkburgerstraat 152',
        city : 'DenHaag',
    },
];

const myText = document.querySelector('.div');

for (let i = 0 ; i < myArray.length ; i++) {
    let items = myArray[i]

    document.body.innerHTML += `
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${items.name}</h5>
    <p class="card-text">${items.street}</p>
    <p class="card-text">${items.city}</p>
  </div>
</div>
    `
}