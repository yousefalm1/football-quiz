const questions = [
    {
        question: 'what team is the most popular team In the UK',
        answers: [
            {Text: 'Man United', correct : true},
            {Text: 'Arsenal', correct : false},
            {Text: 'Liverpool', correct : false},
            {Text: 'Man City', correct: false}

        ],

        question: 'what team is the most popular team In the UK',
        answers: [
            {Text: 'Man United', correct : true},
            {Text: 'Arsenal', correct : false},
            {Text: 'Liverpool', correct : false},
            {Text: 'Man City', correct: false}

        ],

    }
]


// Declare and assigns variables
const questionDisplay = document.getElementById("question");
const answerButtons = document.getElementById("options-btn");
const nextButton = document.getElementsByClassName("next-btn");


// Decalre and assign intial values to the variables.
// These Two variables will be used to keep track of the current question and the score. 
let currentQuestionIndex = 0;
let score = 0;



function startQuiz() {
    // To make sure that the first question in the question array is displayed in the start
    currentQuestionIndex = 0;
    // To make sure that the users score is zero in the start
    score = 0;
    // nextButton.innerHTML = "next"
    // calls the show question function which will display the first question in the array
    showQuestion()
}

function showQuestion() {
    // removes the orginal buttons from the html and hides the next button
   removeBasicButtons()
}

function removeBasicButtons() {
nextButton.style.diplay = "none"
while(answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
}
}

function selectAnswer() {

}

function showScoreFinish() {

}

function advanceToNextQuestion() {

}