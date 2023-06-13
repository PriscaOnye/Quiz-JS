const questions = [

    {
        question: "How many countries are in Africa?",
        answers: [
            {text: "60", correct: false},
            {text: "68", correct: false},
            {text: "45", correct: false},
            {text: "54", correct: true},
        ]
    },

    {
        question: "Which country is known as the cleanest any maybe natural is Africa?",
        answers: [
            {text: "Egypt", correct: false},
            {text: "Rwanda", correct: true},
            {text: "Algeria", correct: false},
            {text: "Kenya", correct: false},
        ]
    },

    {
        question: "Which Africa country has the largest population?",
        answers: [
            {text: "Sudan", correct: false},
            {text: "Mali", correct: false},
            {text: "Nigeria", correct: true},
            {text: "Burundi", correct: false},
        ]
    },

    {
        question: "What Africa Country is without a name?",
        answers: [
            {text: "South Africa", correct: true},
            {text: "Tunsia", correct: false},
            {text: "Congo", correct: false},
            {text: "Benin", correct: false},
        ]
    },

    {
        question: "Name an Africa country that starts with 'S' and end with 'A' in one word",
        answers: [
            {text: "South Africa", correct: false},
            {text: "Somalia", correct: true},
            {text: "slovakia", correct: false},
            {text: "Saudi Arabia", correct: false},
        ]
    },

];


const questionTitle = document.getElementById("question");
const answerButtons = document.getElementById("answer_button");
const nextButton = document.getElementById("interact_btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionTitle.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();
