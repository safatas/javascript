
const myButton = document.querySelector('.submit');
myButton.addEventListener('click',myVragen);

const questions = [
    {
        "question": "Wat is mijn naam",
        "optionA": "Safa Tas",
        "optionB": "Berdan yilmaz",
        "optionC": "Senna oudshoorn",
        "optionD": "Bronco miete",
        "answer": "Safa Tas"
    },

    {
        "question": "Waar woon ik ?",
        "optionA": "DenHaag",
        "optionB": "Rotterdam",
        "optionC": "China",
        "optionD": "Turkije",
        "answer": "DenHaag"
    },

    {
        "question": "Welke school ga ik ",
        "optionA": "Roc mondriaan",
        "optionB": "Mbo rijnland",
        "optionC": "Rijswijks lyceum",
        "optionD": "Safa college",
        "answer": "Roc mondriaan"
    },

    {
        "question": "Welke auto heb ik",
        "optionA": "Golf 7",
        "optionB": "Mercedes",
        "optionC": "Porsche",
        "optionD": "skoda",
        "answer": "Golf 7"
    },

];

function myVragen() {
    const container = document.querySelector(".container");

    let html = '<div class="row">';

    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];
    
        html += `
            <div class="question">
                <h4 class="title">Question ${i} ${question.question}</h4>
                <p class="option">${question.optionA}</p>
                <p class="option">${question.optionB}</p>
                <p class="option">${question.optionC}</p>
                <p class="option">${question.optionD}</p>
            </div>
            <br>
        `;
    }

    html += '</div>';

    container.innerHTML += html;

    const quizQuestions = document.querySelectorAll('.question');

    for(let i = 0; i < quizQuestions.length; i++) {
        
        const quizQuestion = quizQuestions[i];

        const quizQuestionOptions = quizQuestion.querySelectorAll('.option');

        for(let a = 0; a < quizQuestionOptions.length; a++) {
            const quizQuestionOption = quizQuestionOptions[a];
            
            quizQuestionOption.addEventListener('click', function() {
                checkAnswer(i, quizQuestionOption.textContent);
            });        
        }
    }

    function checkAnswer(i, givenAnswer) {
        let currentQuizQuestion = questions[i];
        
        if(currentQuizQuestion.answer === givenAnswer) {
            alert("Correct!")
        } else {
            alert("Wrong!")
        }
    }
}

