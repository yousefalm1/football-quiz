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
    // retrieves the current question from the questions array based on currentQuestionIndex
    let currentQuestion = questions[currentQuestionIndex];
    // Instead of it starting at 0 1 2 3 it starts at 1 2 3 4 (got this idea from ......)
    let questionNo = currentQuestionIndex + 1;
    // updates the the questionDisplay by adding the question number a . and the question
    questionDisplay.innerHTML = questionNo + ". " + currentQuestion.question
    
    // this iterates over each element in the currentQuestion.answers array using the foreach method.
    // This will allow to prefrom a spcified operation for each element.
    currentQuestion.answers.forEach(answer => {
        // creates a new button for the each element that it iterates over
        const button = document.createElement("button");
        // each answer element is assigned the answer text
        button.innerHTML = answer.text;
        // Add the class that is found in the css to the new buttons being created.
        button.classList.add("btn");
        // displays the new buttons into the div where the buttons are located.
        answerButtons.appendChild(button);

        // if answer is "ture" then the button data set is set to "true"
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // when the user clicks one of the answer buttons it will call the select answer function
         button.addEventListener("click", selectAnswer);
    })
}

function removeBasicButtons() {
}


function selectAnswer(event) {
    // the selected button is stored in the selectedBtn variable which is done by the event.target
    const selectedBtn =  event.target;
    // if the selectedbtn is true it means the selected answer is correct
    const isCorrect = selectedBtn.dataset.correct === "true";

    // If isCrrect is true it adds the "correct" CSS to the selected btn
    if(isCorrect) {
        selectedBtn.classList.add("correct");
    // If  IsCorrect is false which means the selected answer was wrong iis add '"incorrect" css to the answer that was selected 
    } else {
        selectedBtn.classList.add("incorrect");
    }
}

function showScoreFinish() {

}

function advanceToNextQuestion() {

}

startQuiz()