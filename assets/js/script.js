
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
            { text: 'Lionel Messi',correct: true },
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
            { text: 'Pep Guardiola', correct: true},
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




// TIMER


// set the starting minutes to 2
const startingMinutes = 2;
// convert the starting minutes to seconds
let time = startingMinutes * 60;
let timerInterval;

const countdownEl = document.getElementById('countdown');
// this calls the startTimer function every second

// setInterval(startTimer, 1000);

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

function resetTimer() {
    time = startingMinutes * 60;
    countdownEl.innerHTML = `${startingMinutes}:00`;

}

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
    nextButton.innerHTML = "Go Back Home";
    nextButton.addEventListener("click", () => {
        window.location.href = "/index.html"; // Redirect to the home page
    });
    // the next button style is  set to block to be visable
    nextButton.style.display = "block";
    countdownEl.style.display = "none";
    questionDisplay.style.display = "block"
    easyBtn.style.display = "none"
    hardBtn.style.display = "none"
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
nextButton.addEventListener("click",() => {
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


const easyBtn =  document.getElementById('easy');
const answerBtn = document.getElementsByClassName('btn')
const container = document.getElementsByClassName('mode-con')[0]
const startGameBtn = document.getElementById('start-game-btn');
const optionsBtn = document.getElementById('options-btn');

easyBtn.addEventListener("click", function(e) {
    container.classList.remove("mode-con");  
    countdownEl.style.display = "none";
    easyBtn.style.display = "none";
    questionDisplay.style.display = "block"; // Display the question
    optionsBtn.style.display = "grid"
    hardBtn.style.display = "none"
});

const hardBtn = document.getElementById('hard');

hardBtn.addEventListener("click", function(e) {
    container.classList.remove("mode-con");  
    countdownEl.style.display = "block";
    easyBtn.style.display = "none";
    questionDisplay.style.display = "block"; // Display the question
    optionsBtn.style.display = "grid"
    hardBtn.style.display = "none";
    setInterval(startTimer, 1000);

  
});








// bugs i fixed
// make it that the timer only starts when you click the game modes on hard mode 
// the timer on the easy game mode still works but dosent show so it redirects you the show score screen same as hard mode
// added a [0] to the const container = document.getElementsByClassName('mode-con')[0] this make the class i added to the game mode btns to go away when i click either mode btns
// used https://www.youtube.com/watch?v=x7WJEmxNlEs to help