 vragen = document.querySelector('quizs');


const quizOpdracht = [
    {
        quistion : 'Wat is mijn naam',
        answerWrong1 : 'MAthijs',
        answerWrong2: 'Eren',
        answerWrong3 : 'Daryan',
        answerGood :   'Safa',
    },
    {
        quistion : 'Welke school ga ik',
        answerWrong1 : 'ROcmondriaan',
        answerWrong2 : 'Mborijnlanf',
        answerWrong3 : 'Grafisch lyceum',
        answerGood :   'Rocmondriaan',
    },
    {
        quistion : 'WAt voor werk doe ik',
        answerWrong1 : 'Bezorger',
        answerWrong2 : 'Dokter',
        answerWrong3 : 'POlitie',
        answerGood :   'Bezorger',
    },
    {
        quistion : 'Waar ben ik geboren',
        answerWrong1 : 'Turkije',
        answerWrong2 : 'Senegal',
        answerWrong3 : 'Nederland',
        answerGood :   'Turkije',
    },
    {
        quistion : 'Waar woon ik',
        answerWrong1 : 'DenHaag',
        answerWron2 : 'Elazig',
        answerWrong3 : 'Rijswijk',
        answerGood :   'DenHAag',
    },

    
]

for(let i = 0; i < quizOpdracht.length; i++) {
    let items = quizOpdracht[i];

    document.body.innerHTML += `
    <h1 class="question">${items.quistion}</h1>
    <h5 class="answerWrong1">${items.answerWrong1}</h5>
    <h5 class="answerWrong2">${items.answerWrong2}</h5>
    <h5 class="answerWrong3">${items.answerWrong3}</h5>
  
`
}

