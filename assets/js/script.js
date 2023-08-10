
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
        question: 'Who won the FIFA World Cup in 2018?',
        answers: [
            { text: 'France', correct: true },
            { text: 'Brazil', correct: false },
            { text: 'Brazil', correct: false },
            { text: 'Argentina', correct: false },
        ]
    },
    {
        question: 'Which player has won the most Ballon D`Or awards?',
        answers: [
            { text: 'Lionel Messi', correct: true },
            { text: 'Cristiano Ronaldo', correct: false },
            { text: 'Diego Maradona', correct: false },
            { text: 'Pelé', correct: false },
        ]
    },
    {
        question: 'Which team has won the UEFA Champions League the most times?',
        answers: [
            { text: 'Liverpool', correct: false },
            { text: 'Barcelona', correct: false },
            { text: 'Real Madrid', correct: true },
            { text: 'Bayern Munich', correct: false },
        ]
    },
    {
        question: 'Who is the all-time leading goal scorer in the English Premier League?',
        answers: [
            { text: 'Wayne Rooney', correct: false },
            { text: 'Thierry Henry', correct: false },
            { text: 'Sergio Agüero', correct: false },
            { text: 'Alan Shearer', correct: true },
        ]
    },
    {
        question: 'Which player has the record for the most goals scored in a single FIFA World Cup tournament?',
        answers: [
            { text: 'Gerd Müller', correct: true },
            { text: 'Just Fontaine', correct: false },
            { text: 'Ronaldo', correct: false },
            { text: 'Miroslav Klose', correct: false },
        ]
    },
    {
        question: 'Which country has won the most Copa America titles?',
        answers: [
            { text: 'Uruguay', correct: false },
            { text: 'Argentina', correct: false },
            { text: 'Brazil', correct: true },
            { text: 'Chile', correct: false },
        ]
    },
    {
        question: 'Which club has won the most English Premier League titles?',
        answers: [
            { text: 'Manchester United', correct: true },
            { text: 'Liverpool', correct: false },
            { text: 'Arsenal', correct: false },
            { text: 'Chelsea', correct: false },
        ]
    },
    {
        question: 'Which player has won the most European Golden Shoe awards?',
        answers: [
            { text: 'Luis Suárez', correct: false },
            { text: 'Lionel Messi ', correct: true },
            { text: 'Cristiano Ronaldo', correct: false },
            { text: 'Thierry Henry', correct: false },
        ]
    },
    {
        question: 'Which country hosted the 2014 FIFA World Cup?',
        answers: [
            { text: 'Germany', correct: false },
            { text: 'Russia', correct: false },
            { text: 'Argentina', correct: false },
            { text: 'Brazil', correct: true },
        ]
    },
    {
        question: 'Who is the manager of the Manchester City football club?',
        answers: [
            { text: 'Mikel Arteta', correct: false },
            { text: 'Jose Mourinho', correct: false },
            { text: 'Pep Guardiola', correct: true },
            { text: 'Jurgen Klopp', correct: false },
        ]
    },
    {
        question: 'Which player has the record for the most appearances in the UEFA Champions League?',
        answers: [
            { text: 'Ryan Giggs', correct: false },
            { text: 'Iker Casillas', correct: true },
            { text: 'Cristiano Ronaldo', correct: false },
            { text: 'Xavi Hernandez', correct: false },
        ]
    },
    {
        question: 'Which country won the UEFA Euro 2020 tournament?',
        answers: [
            { text: 'Spain', correct: false },
            { text: 'Belgium', correct: false },
            { text: 'England', correct: false },
            { text: 'Italy', correct: true },
        ]
    },
    {
        question: 'Who is the current manager of the Barcelona football club?',
        answers: [
            { text: 'Ronald Koeman', correct: false },
            { text: 'Pep Guardiola', correct: false },
            { text: 'Diego Simeone', correct: false },
            { text: 'Xavi Hernandez', correct: true },
        ]
    },
    {
        question: 'Which player has scored the most goals in a single season of the Bundesliga?',
        answers: [
            { text: 'Robert Lewandowski', correct: true },
            { text: 'Gerd Muller', correct: false },
            { text: 'Pierre-Emerick Aubameyang', correct: false },
            { text: 'Claudio Pizarro', correct: false },
        ]
    },
    {
        question: 'Who is the current captain of the Liverpool football club?',
        answers: [
            { text: 'Darwin Nunez', correct: false },
            { text: 'Jordan Henderson', correct: true },
            { text: 'Mohamed Salah', correct: false },
            { text: 'Virgil van Dijk', correct: false },
        ]
    },
    {
        question: 'Which club has won the most Serie A titles in the history of Italian football?',
        answers: [
            { text: 'Inter Milan', correct: false },
            { text: 'Roma', correct: false },
            { text: 'Juventus', correct: true },
            { text: 'AC Milan', correct: false },
        ]
    },
    {
        question: 'Who is the all-time leading goal scorer for the Spanish national team?',
        answers: [
            { text: 'David Villa', correct: true },
            { text: 'Raul', correct: false },
            { text: 'Fernando Torres', correct: false },
            { text: 'David Silva', correct: false },
        ]
    },
    {
        question: 'Which club has won the most FA Cup titles in England?',
        answers: [
            { text: 'Liverpool', correct: false },
            { text: 'Chelsea', correct: false },
            { text: 'Manchester United', correct: false },
            { text: 'Arsenal', correct: true },
        ]
    },
    {
        question: 'Who is the current top scorer in the English Premier League for the 2021-2022 season?',
        answers: [
            { text: 'Bruno Fernandes', correct: false },
            { text: 'Mohamed Salah', correct: true },
            { text: 'Harry Kane', correct: false },
            { text: 'Son Heung-min', correct: false },
        ]
    },

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


// Timer
// set the starting minutes to 1 min
const startingMinutes = 1.0;
// convert the starting minutes to seconds
let time = startingMinutes * 60;
let timerInterval;
const countdownEl = document.getElementById('countdown');

/**
 * Starts the countdown timer and updates the timer display in the UI.
 *
 * This function calculates the minutes and seconds remaining based on the 'time' variable, which represents the remaining time in seconds.
 * It then updates the timer display in the HTML element with the formatted countdown in "minutes:seconds" format.
 *
 * The function also checks if the value of 'seconds' is less than 10, and if it is, it adds a leading zero to the value to ensure proper formatting.
 *
 * The countdown updates every second (time decremented by 1) using the 'setInterval' method.
 * If the 'time' variable reaches 0, the function calls 'stopTimer' to stop the timer and perform end-of-quiz actions.
 */
function startTimer() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countdownEl.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    if (time > 0) {
        time--;
    } else {
        stopTimer();
    }
}
/**
 * Stops the countdown timer, displays "Time's up!" in the UI, and performs end-of-quiz actions.
 *
 * This function clears the interval timer set by 'startTimer' using 'clearInterval(timerInterval)' to stop the countdown.
 * It then updates the timer display in the HTML element with the message "Time's up!" to indicate that the quiz time has elapsed.
 *
 * The function calls 'showScoreFinish' to handle end-of-quiz actions, displaying the user's final score and stopping the timer.
 */
function stopTimer() {
    clearInterval(timerInterval);
    countdownEl.innerHTML = "Time's up!";
    showScoreFinish();
}

/**
 * Resets the countdown timer to the initial time and updates the timer display in the UI.
 *
 * This function sets the 'time' variable back to the initial time in seconds, calculated from 'startingMinutes'.
 * It then updates the timer display in the HTML element with the formatted countdown in "minutes:seconds" format.
 */
function resetTimer() {
    time = startingMinutes * 60;
    countdownEl.innerHTML = `${startingMinutes}:00`;

}
/**
 * Shuffles the elements of the input array in place using the Fisher-Yates (Knuth) shuffle algorithm.
 * https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Starts the quiz and displays the first question.
 *
 * This function is called when the user initiates the quiz, typically by clicking the "Start Quiz" button.
 *
 * It first shuffles the 'questions' array using the 'shuffle' function to randomise the order of the questions,
 * ensuring a different question sequence each time the quiz starts.
 *
 * The function sets the 'currentQuestionIndex' to 0 to make sure that the first question in the shuffled 'questions' array is displayed initially.
 * It also sets the 'score' to 0 to initialize the user's score at the start of the quiz.
 *
 * The 'nextButton' innerHTML is set to "Next" to indicate that it will be used for navigating to the next question during the quiz.
 *
 * Next, the function calls the 'showQuestion' function, which will display the first question in the shuffled 'questions' array to the user.
 *
 * Finally, the function starts the timer by calling the 'startTimer' function to begin the countdown for each question.
*/
function startQuiz() {
    shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    startTimer();
}

/**
 * Displays the current question and its answer options in the UI.
 *
 * This function is called when moving to the next question in the quiz.
 * It first calls the 'resetState' function to clear the state of the answer buttons and prepare the UI for displaying the current question.
 *
 * The function retrieves the current question object from the 'questions' array based on the 'currentQuestionIndex'.
 * It then sets the inner text of the 'questionDisplay' element to the text of the current question, updating the question UI to show the question.
 *
 * Next, the function iterates over each answer in the 'answers' array of the current question using the 'forEach' method.
 * For each answer, it creates a new button element, sets its inner text property to the text of the current answer,
 * adds the "btn" class to the new button to apply appropriate styling, and appends the newly created button as a child element to the 'answerButtons' element.
 * This process adds the buttons to the UI, displaying the answer options for the current question.
 *
 * While iterating through the answers, the function checks if the current answer is marked as correct (answer.correct),
 * and if it is, it assigns the text of 'answer.text' to the 'correctAnswer' variable. This allows the 'selectAnswer' function to identify the correct answer later.
 *
 * The function attaches a click event listener to each button, and when a button is clicked, the 'selectAnswer' function is called to handle the user's answer selection.
 */
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionDisplay.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            correctAnswer = answer.text;
        }
        button.addEventListener("click", selectAnswer);
    });
}
/**
 * Resets the quiz state by hiding the "Next" button and clearing answer buttons.
 *
 * This function is called when moving to the next question or when the quiz ends.
 * It hides the "Next" button in the UI by setting its style display property to "none".
 *
 * The function clears the answer buttons' content by removing all child elements from the 'answerButtons' container.
 * This ensures that the buttons from the previous question are cleared and ready to display new answer options for the next question.
 */
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Handles the user's selection of an answer and displays feedback.
 *
 * This function is called when the user clicks on an answer button during the quiz.
 * It takes the event object as a parameter to identify which button was clicked (selected).
 * The function compares the text of the selected button's inner text with the correct answer to determine if the user's choice is correct.
 *
 * If the selected answer is correct, the function adds the "correct" CSS class to the selected button,
 * visually indicating that the answer is correct. It also increments the global variable 'score',
 * which tracks the number of correct answers by the user.
 *
 * If the selected answer is incorrect, the function adds the "incorrect" CSS class to the selected button,
 * visually indicating that the answer is incorrect.
 *
 * After the user selects an answer, the function disables all the answer buttons in the UI using a loop,
 * preventing the user from selecting another answer after making their choice.
 *
 * Finally, the "Next" button is displayed in the UI to allow the user to move to the next question after selecting an answer.
 */
function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.innerText === correctAnswer;
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    for (let button of answerButtons.children) {
        button.disabled = true;
    }
    nextButton.style.display = "block";
}

/**
 * Displays the final score and end-of-quiz actions.
 * 
 * This function first calls the 'resetState()' function to clear the question display and answer buttons,
 * Setting up the interface to display the final score and end-of-quiz message.
 * 
 * It updates the question display in the HTML Element with a message showing the user's score in the format "You scored x out of y!",
 * where 'x' represents the user's score and 'y' is the total number of questions in the 'questions' array.
 * 
 * The function changes the innerHTML of the 'nextButton' to display "Go Back Home" and adds a click event listener to it.
 * When the 'nextButton' is clicked, the function redirects the user to the home page (index.html) using 'window.location.href'.
 * 
 * The 'nextButton' style is set to "block" to make it visible, while 'countdownEl' and 'questionDisplay' styles are adjusted to hide them.
 * The 'easyBtn' and 'hardBtn' styles are set to "none" to hide the difficulty selection buttons, as they are not needed after the quiz ends.
*/
function showScoreFinish() {
    resetState();
    questionDisplay.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Go Back Home";
    nextButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Redirect to the home page
    });
    nextButton.style.display = "block";
    countdownEl.style.display = "none";
    questionDisplay.style.display = "block";
    easyBtn.style.display = "none";
    hardBtn.style.display = "none";
}

/**
 * Advances the quiz to the next question and handles end-of-quiz actions.
 * 
 * This function advances to the next question in the 'questions' array by incrementing the 'currentQuestionIndex' by one.
 * It then checks if there are more questions to display by comparing 'currentQuestionIndex' with the length of the 'questions' array.
 * If there are more questions to display, the function calls 'showQuestion()' to display the next question using the updated 'currentQuestionIndex'.
 * 
 * If there are no more questions to display, the function calls 'showScoreFinish()' to display the user's final score, and then it stops the timer using 'stopTimer()'.
 */
function advanceToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
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
        countdownEl.style.display = "block";
        resetTimer();
    }
});
startQuiz();


const easyBtn = document.getElementById('easy');
const hardBtn = document.getElementById('hard');
const container = document.getElementsByClassName('mode-con')[0];
const optionsBtn = document.getElementById('options-btn');

easyBtn.addEventListener("click", function (e) {
    container.classList.remove("mode-con");
    countdownEl.style.display = "none";
    easyBtn.style.display = "none";
    questionDisplay.style.display = "block"; // Display the question
    optionsBtn.style.display = "grid";
    hardBtn.style.display = "none";

});

hardBtn.addEventListener("click", function (e) {
    container.classList.remove("mode-con");
    countdownEl.style.display = "block";
    easyBtn.style.display = "none";
    questionDisplay.style.display = "block"; // Display the question
    optionsBtn.style.display = "grid";
    hardBtn.style.display = "none";
    setInterval(startTimer, 1000);
});



