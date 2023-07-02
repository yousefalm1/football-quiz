
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
        answers: [
            { text: 'num1', correct: false },
            { text: 'num2', correct: false },
            { text: 'num3', correct: false },
            { text: 'num4', correct: true },
        ]
    }

];


// Declare and assigns variables
const questionDisplay = document.getElementById("question");
const answerButtons = document.getElementById("options-btn");
const nextButton = document.getElementById("next-btn");
let correctAnswer;

// Decalre and assign intial values to the variables.
// These Two variables will be used to keep track of the current question and the score. 
let currentQuestionIndex = 0;
let score = 0;

let timerInterval;



// used https://www.youtube.com/watch?v=x7WJEmxNlEs to help
// TIMER

// set the starting minutes to 2
const startingMinutes = 2;
// convert the starting minutes to seconds
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');
// this calls the startTimer function every second

setInterval(startTimer, 1000);

/**
 * starts the timer, this functin will be called in the startQuiz function
 */
function startTimer() {
    // Calculate the minutes and seconds remaining

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // display the countdown in the HTML Element

    // the seconds part checks if the value of 'seconds' is less than 10, and if it is then it adds a leading zero to the value 
    // if seconds is not less than 10, it will use the the orgianl value of 'seconds'
    countdownEl.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    // if the time variable (which represents the remaining time in seconds) is greater than 0, it will decrement it by 1.
    // if the time reaches 0 the stopTimer function will be called to stop the timer.
    if (time > 0) {
        time--;
    } else {
        stopTimer();
    }
}

function stopTimer() {
    clearInterval(timerInterval);
    countdownEl.innerHTML = "Time's up!";
    showScoreFinish();
}

timerInterval = setInterval(startTimer, 1000);

function shuffle(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    // Shuffle the questions array
    const shuffledQuestions = shuffle(questions);
    // To make sure that the first question in the question array is displayed in the start
    currentQuestionIndex = 0;
    // To make sure that the users score is zero in the start
    score = 0;
    nextButton.innerHTML = "Next"
    // calls the show question function which will display the first question in the array
    showQuestion();
    startTimer();
}


function showQuestion() {
    // calls resetState function which clears the state of the answer buttons and prepares the UI for displaying the current question.
    resetState();
    // retrieves the current question obejct from the questions array based on the currentQuestionIndex
    // then assings the current Question object to the currentQuestion variable for easier access.
    const currentQuestion = questions[currentQuestionIndex];
    // this sets the inner text of the questionDisplay element to the text of the current question, it updates the question UI to show the questioin
    questionDisplay.innerText = currentQuestion.question;
    // iterates over each answer in the answers array of the current question using forEach
    currentQuestion.answers.forEach(answer => {
        // inside the forEach it creates a new button element for each answer and assings the newly created buttons the "button" variable
        const button = document.createElement("button");
        // sets the inner text property of the button to the text of the current answer
        button.innerText = answer.text;
        // adds the btn class to the new buttons
        button.classList.add("btn");
        // adds the newly created button as a child elemnet to the answerButtons element (this would add the btn to the UI)
        answerButtons.appendChild(button);
        // this checks if the current answers is marked as correct (answer.correct) and if it is the "correctAnswer" is assigned the text of 'answer.text'
        if (answer.correct) {
            correctAnswer = answer.text;
        }
        // Attached a click event listener to each button, and when the button is clicked the select answer function is called.
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
    // retrieves the button element that was the clicked and assigns the button element to the selectedBtn 
    const selectedBtn = event.target;
    // compares the text of the selectedBtn.inner text with the correctAnswer 
    const isCorrect = selectedBtn.innerText === correctAnswer;
    // checks if the selected answer is correct, if "isCorrect" is true means the selected answer is correct and the code inside the 'if' block excutes.
    // if false the code inside else block excutes
    if (isCorrect) {
        // inside the if block it adds the correct css class to the selected btn which adds css style to visually show that the selected answer is correct
        selectedBtn.classList.add("correct");
        // this increments the score variable tracking the number of correct answers
        score++;
        // Adds the incorrect Css class to the selected btn. this isi to visually indicate that the selected answer is incorrect. 
    } else {
        selectedBtn.classList.add("incorrect");
    }
    // this loops iterates over each child button element of the answerButtons container; And sets the disabled property to each btn to true 
    // (Which prevents the user from selecting another answer after making their choice.)
    for (let button of answerButtons.children) {
        button.disabled = true;
    }
    // "Next" button is displayed in the UI after the user has selected an answer.
    nextButton.style.display = "block";
}

/**
 * this function is to disply the final score and provide the user the option to play again
 */
function showScoreFinish() {
    // the resetState function is called to clear the question display and answer buttons.
    resetState();
    // updates question display with a message
    questionDisplay.innerHTML = `You scored ${score} out of ${questions.length}!`;
    // the innterHTML for next button is changed to play again
    nextButton.innerHTML = "Play Again";
    // the next button style is  set to block to be visable
    nextButton.style.display = "block";
    

    countdownEl.style.display = "none";
    
}

function advanceToNextQuestion() {
    // this increments the currentQuestionIndex (which we declared) by 1 when moving to the next question in the questions array
    currentQuestionIndex++;
    // this checks if there are more questions to dispaly this is done by compairng currentQuestionIndex with the length of the questions array
    // if the currentQuestionIndex is less than the questions.length there are still more questions to show
    if (currentQuestionIndex < questions.length) {
        // if there are more questions to display the showQuestion fuction will be called to dispaly the next questoin using the updated currentQuestionIndex
        showQuestion();
        // if there are no more questions to display the showScoreFinish function is called to dispay how much the user got
    } else {
        showScoreFinish();
        stopTimer();
    }
}
// the nextButton element has an event listener  attached to it with the click event
// when the next button is clicked it will execute the arrow function 
nextButton.addEventListener("click", () => {
    // insdie the arrow function the if statement this is to check if there a more questions to dispaly by comparing the currentQuestionIndex with the length of the questions array.
    if (currentQuestionIndex < questions.length) {
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