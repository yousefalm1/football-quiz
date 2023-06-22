// Questions that will be asked
const Questions = [{
    q: "What is the capital of India?",
    a: [{ text: "Gandhinagar", isCorrect: false },
    { text: "Surat", isCorrect: false },
    { text: "Delhi", isCorrect: true },
    { text: "Mumbai", isCorrect: false }
    ]
},
{
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false },
    { text: "Phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]
},
{
    q: "What is the capital of Gujarat",
    a: [{ text: "Surat", isCorrect: false },
    { text: "Vadodara", isCorrect: false },
    { text: "Gandhinagar", isCorrect: true },
    { text: "Rajkot", isCorrect: false }
    ]
}
];

let currQuestion = 0;
let score = 0;

function loadQues() {
    const question = document.getElementById("question");
    const options = document.getElementsByClassName("btn");

    question.textContent = Questions[currQuestion].q;

    for (let i = 0; i < options.length; i++) {
        options[i].textContent = Questions[currQuestion].a[i].text;
        options[i].addEventListener("click", checkAnswer);
    }
}

function loadScore() {
    const correctScore = document.getElementById("num-correct");
    const incorrectScore = document.getElementById("num-incorrect");

    correctScore.textContent = score;
    incorrectScore.textContent = currQuestion - score;
}

function nextQuestion() {
    currQuestion++;
    if (currQuestion < Questions.length) {
        loadQues();
    } else {
        document.getElementsByClassName("options-btn")[0].style.display = "none";
        document.getElementsByClassName("next-container")[0].style.display = "none";
        loadScore();
    }
}

function checkAnswer() {
    const selectedAnswer = this.textContent;
    const correctAnswer = Questions[currQuestion].a.find(answer => answer.isCorrect).text;

    if (selectedAnswer === correctAnswer) {
        score++;
    }
    nextQuestion();
}

loadQues();