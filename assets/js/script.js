const questions = [
    {
        question: 'What team is the most popular team in the UK?',
        answers: [
            { text: 'Man United', correct: true },
            { text: 'Arsenal', correct: false },
            { text: 'Liverpool', correct: false },
            { text: 'Man City', correct: false }
        ]
    },
    {
        question: 'who is the top goal scorer in the prem',
        answers : [
            {text: 'num1', correct: false},
            {text: 'num2', correct: false},
            {text: 'num3', correct: false},
            {text: 'num4', correct: true},
        ]
    }
    
];

// Declare and assigns variables
const questionDisplay = document.getElementById("question");
const answerButtons = document.getElementById("options-btn");
const nextButton = document.getElementById("next-btn");


// Decalre and assign intial values to the variables.
// These Two variables will be used to keep track of the current question and the score. 
let currentQuestionIndex = 0;
let score = 0;



function startQuiz() {
    // To make sure that the first question in the question array is displayed in the start
    currentQuestionIndex = 0;
    // To make sure that the users score is zero in the start
    score = 0;
    nextButton.innerHTML = "Next"
    // calls the show question function which will display the first question in the array
    showQuestion();
}


function showQuestion() {
    // removes the orginal buttons from the html and hides the next button
    resetState();
    // retrieves the current question from the questions array based on currentQuestionIndex
    const currentQuestion = questions[currentQuestionIndex];
    questionDisplay.innerText = currentQuestion.question;
    // this iterates over each element in the currentQuestion.answers array using the foreach method.
    // This will allow to prefrom a spcified operation for each element.
    currentQuestion.answers.forEach(answer => {
        // creates a new button for the each element that it iterates over
        const button = document.createElement("button");
        // each answer element is assigned the answer text
        button.innerText = answer.text;
        // Add the class that is found in the css to the new buttons being created.
        button.classList.add("btn");
        // displays the new buttons into the div where the buttons are located.
        answerButtons.appendChild(button);
        // if answer is "ture" then the button data set is set to "true"
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        // when the user clicks one of the answer buttons it will call the select answer function
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(event) {
    // the selected button is stored in the selectedBtn variable which is done by the event.target
    const selectedBtn = event.target;
    // if the selectedbtn is true it means the selected answer is correct
    const isCorrect = selectedBtn.dataset.correct === "true";
    // If isCrrect is true it adds the "correct" CSS to the selected btn
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
        // If  IsCorrect is false which means the selected answer was wrong iis add '"incorrect" css to the answer that was selected 
    } else {
        selectedBtn.classList.add("incorrect");
    }
    // Converts the collection of child elements within the answerbutton into an array then iterates over each btn.
    Array.from(answerButtons.children).forEach(button => {
        // Inside the iteration, it checks if the correct data attribute of each button is equal to the string "true". 
        // If it is, the CSS class "correct" is added to that button as well. This is done to highlight the correct answers even after the user has made their selection.
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        // After iterating through all the buttons, this line sets the disabled property of each button to true
        // which means means the user will not be able to select another answer.
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScoreFinish() {
    resetState();
    questionDisplay.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display  = "block";
}

function advanceToNextQuestion() {
    // this increments the currentQuestionIndex (which we declared) by 1 when moving to the next question in the questions array
    currentQuestionIndex ++;
    // this checks if there are more questions to dispaly this is done by compairng currentQuestionIndex with the length of the questions array
    // if the currentQuestionIndex is less than the questions.length there are still more questions to show
    if(currentQuestionIndex < questions.length) {
        // if there are more questions to display the showQuestion fuction will be called to dispaly the next questoin using the updated currentQuestionIndex
        showQuestion();
        // if there are no more questions to display the showScoreFinish function is called to dispay how much the user got
    } else {
        showScoreFinish()
    }
}
// the nextButton element has an event listener  attached to it with the click event
// when the next button is clicked it will execute the arrow function 
nextButton.addEventListener("click", () =>{
    // insdie the arrow function the if statement this is to check if there a more questions to dispaly by comparing the currentQuestionIndex with the length of the questions array.
    if(currentQuestionIndex < questions.length) {
        // if currentQuestionIndex is less than questions.length then that means there are more questions to display.
        // so the advanceToNextQuestion function is called 
        advanceToNextQuestion();
        // if not then the startQuiz function is called which restarts the quiz
    } else {
        startQuiz();
    }
});
// To call the function
startQuiz();
