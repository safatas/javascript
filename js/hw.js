const itemMarkplaats = [
    { 
      title: 'Glc 63s amg', 
      description: 'Nette Mercedes. Motorisch uitstekend. 510 pk. Heeft geen schade het rijd prima.', 
      price: 99500.00, 
      kilometer: 69000, 
      buildYear: 2018
  },
  { 
      title: 'Glc 250d 4matic', 
      description: 'Nette Mercedes. Motorisch uitstekend. 240 pk. Heeft geen schade het rijd prima met een panoramadak.', 
      price: 25000.00, 
      kilometer: 288000, 
      buildYear: 2015
   },
   { 
      title: 'Porche cayenne 4.8 turbo tiptronic', 
      description: 'Nette Porche. Motorisch uitstekend. 501 pk. Heeft geen schade het rijd prima.', 
      price: 21950.00, 
      kilometer: 267826, 
      buildYear: 2010
   },
   { 
      title: 'volksagen gti 2.0', 
      description: 'Nette Golf. Motorisch uitstekend. 310 pk. Heeft geen schade het rijd prima.', 
      price: 22500.00, 
      kilometer: 142000, 
      buildYear: 2017
   },
   { 
      title: 'Golf 7 volksagen', 
      description: 'Nette golf. Motorisch uitstekend. 150 pk. Heeft geen schade het rijd prima.', 
      price: 16000.00, 
      kilometer: 117000, 
      buildYear: 2016
   }
];
const myDiv = document.querySelector('.div');

for (i = 0; i < itemMarkplaats.length; i++ ) {
  let item  = itemMarkplaats[i]
  document.body.innerHTML += `Title: ${item.title} <br>`
  document.body.innerHTML += `Description: ${item.description} <br>`
  document.body.innerHTML += `Price: ${item.price} <br>`
  document.body.innerHTML += `Kilometers: ${item.kilometer} <br>`
  document.body.innerHTML += `Build year: ${item.buildYear} <br>`
  document.body.innerHTML += `******************** <br>`
}

const  itemsDrink = [
     { 
     title: 'Danerolles croissants', 
     description: '240 g', 
     actie: 'per blik 1.39', 
     price: 1.39 
    },
    { 
     title: 'Yakulr drink light', 
     description: '520 ml', 
     actie: 'per blik 3.45', 
     price: 3.45
    },
    { 
     title: 'Alpro kokosnootdrink', 
     description: '1 liter', 
     actie: 'per pak 1.99', 
     price: 1.99
    },
    { 
    title: 'Slammers energie drink', 
     description: '250 ml', 
     actie: 'per blik 0,42', 
     price: 0.42
    },
    { 
     title: 'Redbull energie derink no sugar', 
     description: '4 * 250 ml', 
    actie: 'per doos 5.49', 
     price: 5.49
    } 
]

const  itemsTweakers = [
    { 
    title: 'Samsung Galaxy A52s', 
    description: 'A 52 s 5g  6gb 128 gb opslag Zwart', 
    seller: 'twekers', 
    price: 304.85 
   },
   { 
    title: 'Samsung Galaxy s21', 
    description: 's21 6gb ram 128gb opslag zwart', 
    seller: 'tweakers', 
    price: 547.80
   },
   { 
    title: 'Iphone 13', 
    description: '128gb opslag zwart', 
    seller: 'tweakers', 
    price: 823.80 
   },
   { 
    title: 'Google pixel 6', 
    description: '128gb ram zwart', 
    seller: 'Tweakers', 
    price: 634
   },
   { 
    title: 'Iphone 13 pr', 
    description: '128gb opslag zwart', 
    seller: 'tweakers', 
    price: 1123.80
   },,
]


    