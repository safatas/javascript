
const quizOpdracht = [
    {
        questions : 'Wat is mijn nnaam',
        answerWrong1 : 'MAthijs',
        answerWrong2: 'Eren',
        answerWrong3 : 'Daryan',
        answerGood :   'Safa',
    },
    {
        questions : 'Welke school ga ik',
        answerWrong1 : 'ROcmondriaan',
        answerWrong2 : 'Mborijnlanf',
        answerWrong3 : 'Grafisch lyceum',
        answerGood :   'Rocmondriaan',
    },
    {
        questions : 'WAt voor werk doe ik',
        answerWrong1 : 'Bezorger',
        answerWrong2 : 'Dokter',
        answerWrong3 : 'POlitie',
        answerGood :   'Bezorger',
    },
    {
        questions : 'Waar ben ik geboren',
        answerWrong1 : 'Turkije',
        answerWrong2 : 'Senegal',
        answerWrong3 : 'Nederland',
        answerGood :   'Turkije',
    },
    {
        questions : 'Waar woon ik',
        answerWrong1 : 'DenHaag',
        answerWrong2 : 'Elazig',
        answerWrong3 : 'Rijswijk',
        answerGood :   'DenHAag',
    },
 
]

let html = '<div class="row">;'

for(let i = 0; i < quizOpdracht.length; i++) {
    let items = quizOpdracht[i];

    document.body.innerHTML += `
    <h1 class="question">${items.quistion}</h1>
    <h5 class="answerWrong"><input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">${items.answerWrong1}</label><br></h5>
    <h5 class="answerWrong"><input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">${items.answerWrong2}</label><br></h5>
    <h5 class="answerWrong"><input type="radio" id="html" name="fav_language" value="HTML">
    <label for="html">${items.answerWrong3}</label><br></h5>
`
};

html += '</div>';

const quizQuestions = document.querySelectorAll('.question');



for(let i = 0; i < quizQuestions.length; i++) {

    const quizQuestion = quizQuestions[i];

    const quizQuestionOptions = quizQuestion.querySelectorAll('.answerWrong');
    console.log(`quizQuestionOptions = ${quizQuestionOptions.length}`);

    
    for(let a = 0; a < quizQuestionOptions.length; a++) {
        const quizQuestionOption = quizQuestionOptions[a];
       

        quizQuestionOption.addEventListener('click', function() {
            checkAnswer(i, quizQuestionOption.textContent);
            console.log("quizQuestionOption.textConten: " + quizQuestionOption.textConten);
        });        
    }
 
};

function checkAnswer(i, givenAnswer) {
    let currentQuizQuestion = questions[i];
   
    
    if(currentQuizQuestion.answer === givenAnswer) {
        alert("Correct!")
    } else {
        alert("Wrong!")
    }
};


