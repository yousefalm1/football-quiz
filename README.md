# Football Quiz

"Football Quiz" is an exciting multiple-choice quiz with two levels: easy and hard. Test your football knowledge with fun questions about players, teams, and history. Choose the easy level for beginners or challenge yourself with the hard level, which includes a thrilling timer to keep you on your toes [here](https://yousefalm1.github.io/football-quiz/)

![am i responsive](assets/documentation-webp/amiresponsive.webp)

## User Experience
### User Stories
* As a parent, I wanted to bond with my children by participating in a family-friendly quiz, and this quiz did just that.

* I'd like to take an interactive quiz as a football fan to learn interesting facts and trivia about football teams, players, and historical events, and this quiz really tested my knowledge.

* As a football trivia fan, I'd like to participate in a quiz with difficult and obscure questions that will put even the most ardent football fans to the test, and this quiz showed me some difficult questions.
## Features

### The Home Page 

* The Home Page welcomes users and gives them access to key options as the quiz application's entry point.
* The entire content of the home page is enclosed in a white box that will remain constant throughout the quiz. The background of the home page is a football pitch to match the quiz's theme, and there is a football logo at the top left of the page that can be clicked to return the user to the home page.
* The "Welcome To The Football Quiz!" huge, attention-grabbing title greets users, followed by a brief sentence encouraging them to begin the quiz.
* Below the brief sentence, there are two light green buttons stacked one on top of the other with a hover effect that changes the colour to dark green as the mouse is moved over them. The "Pick Game Mode" button takes the user to a page where they can choose between two game modes, easy and hard. The "How To Play" button, which is the second, takes the user to a page that describes how the game functions.

![Image of home page](/documentation/home-page.jpg)

### How To Play Page

* The how to play page provides a comprehensive guide on how the quiz works, ensuring that the user understands the rules and mechanics before beginning the quiz.
* The page content is enclosed in a white box to maintain consistency with the overall design. 
* In the top left corner is a clickable football logo that, when clicked, returns the user to the home page.
* Inside the white container, there is a large and bold heading that says "How To Play The Football Quiz" to clearly display the purpose of the page. 
* There is a small intrdouction under the heading that welcomes the user to the quiz and instructs them to follow the instructions.
* The instructions on this page are divided into six sections. Game Objective, Game Modes, Question Format, Scoring System Finish the quiz and try again.
* Under the main content section is a button that is designed to match the quiz's consistent colour scheme, using a light green colour that complements the overall theme. When the user hovers their mouse over the button, it undergoes a visual transformation and turns into a dark green colour. This hover effect provides visual feedback, indicating that the button is interactive. By clicking the button, the user will be taken to a dedicated page where they can select between different game modes, such as easy and hard.

![Image of how to play](/documentation/how-to-play.jpg)

### Pick A Game Mode  
* The "pick a game mode" page is part of quiz.html, which utilises JavaScript to dynamically modify the html, by removing the option buttons, question, next question, and timer, and only showing the two game mode buttons.
* The contnet of the page is enclosed in a  white box to maintain the consistent design theme of the quiz.
* When a user clicks the "pick a game mode" button on the main page or the how to play page, they are brought to this page.
* Two light green buttons appear on the page, matching the colour scheme used throughout the quiz. When hovered over, these buttons change colour from light green to dark green, indicating interactivity.
* The first button displays the word "Easy" and, when clicked, removes the timer from the quiz, allowing the user to answer questions at their own pace. 
* The second option displays the term "Hard" and, when clicked, adds a 1-minute timer into the quiz, making it more difficult for the user to answer questions within the time limit.

![Image of pick a game mode](/documentation/game-mode.jpg)

### The Quiz


* The "quiz" page is part of index.html and is responsible for showing the quiz questions and answer possibilities by dynamically modifying the html with JavaScript.
* The page content is enclosed in a white box, ensuring a consistent design throughout the quiz.
* The question is shown at the top centre of the box, providing the user with a clear focus. Following the question are four buttons, each of which represents an answer option. These buttons are designed in the same way as the buttons used throughout the quiz, ensuring visual consistency.
* When the user selects an answer, JavaScript code is executed to determine whether the answer is right. To indicate correctness, the selected response button is highlighted in either red or green.
* A smaller button but the with the same style as the other buttons in the quiz, appears in the bottom centre of the white box, with the word "next" displayed which loads a new question with new answer options when clicked.
* When the timer reaches 00:00 in the "Hard" mode, JavaScript code redirects the user to the "show score" page, signifying the conclusion of the quiz and displaying the final result; if the user picked easy mode the "next" button on the last question redirects the user to the "show score" page.
* The Fisher-Yates shuffle algorithm (https://www.youtube.com/watch?v=TdOUjGfv1Gs) is used to shuffle the questions displayed.

![Image of easy quiz mode](/documentation/easy-quiz.jpg)
![Image of hard quiz mode](/documentation/hard-quiz.jpg)


## Design
### Images Used
* Background : The background image of the quiz is a cartoon bird's-eye view of a football pitch. This was chosen because it is relevant to the quiz's topic and gives users the impression that the questions are part of the game, creating a strong connection between the quiz and football.
![Image of football pitch used as background](/assets/images/football-pitch.jpg) 
* Logo : The football-themed logo was chosen to complement the quiz's theme 
![Image of football used as logo](/assets/images/logo.png) 


### Colour Scheme

* The color scheme is inspired by football pitches, incorporating black, green, and white.

* Lime Green: Used for buttons before hover interactions due to its strong visibility.
![Image of lime green](/documentation/lime-green.png)

* Dark Green (Hover): When users hover over buttons, a dark green shade creates contrast and indicates interactivity.
![Image of dark green](/documentation/dark-green.png)

* Correct Answer Green: Another shade of green highlights correct answers, distinguishing them from standard button color.
![Image of correct green](/documentation/correct-green.png)

* Incorrect Answer Red: To retain the quiz's aesthetically pleasing appearance, incorrect answers are marked with a colour similar to the correct answer's green.
![Image of correct red](/documentation/incorrect-red.png)



## Technologies Used
### Languages
* HTML - https://www.w3schools.com/whatis/whatis_html.asp
* CSS - https://www.w3schools.com/whatis/whatis_css.asp
* JavaScript - https://www.w3schools.com/whatis/whatis_js.asp

## Deployment
* The following steps were used to deploy the site to GitHub pages:
    * Sign in to GitHub and select the football-quiz from Your profile.
    * Go to the top of the screen and select settings .
    * Navigate to pages listed on the left side menu.
    * Locate the source and choose "Deploy from a branch".
    * Locate branch  and select the "Main".
    * Select Save.
    * Allow a few moments for the live site with the URL https://yousefalm1.github.io/football-quiz/ to load.


## Testing
### Validator Testing
* HTML
    * index.html: When the code was validated using the official W3C validator, no errors were found.
    ![Image of index.html W3C](/documentation/index-w3c.jpg)
    * quiz.html: When the code was validated using the official W3C validator, no errors were found.
    ![Image of quiz.html W3C](/documentation/quiz-w3c.jpg)
    * how-to-play.html: When the code was validated using the official W3C validator, no errors were found.
    ![Image of how-to-play.html W3C](/documentation/how-to-play-w3c.jpg)

* CSS
    * style.css: When the code was validated using the official W3C CSS validator, no errors were found.
    ![Image of style.css W3C CSS](/documentation/style-w3c.jpg)

* JavaScript
    * No errors were found when passing through the official JSHint validator.
    * These are the metrics returned:
        * There are 15 functions in this file.
        * Function with the largest signature take 1 arguments, while the median is 0.
        * Largest function has 9 statements in it, while the median is 5.
        * The most complex function has a cyclomatic complexity value of 3 while the median is 1.

### Lighthouse
* Lighthouse Testing on desktop.
    ![Image of lighthouse on desktop](/documentation/lighthouse-desktop.png)
* Lighthouse Testing on mobile.
    ![Image of lighthouse on mobile](/documentation/lighthouse-mobile.png)

* Responsiveness
* The website is responsive to all devices within the ranges specified below.
    * 310px - 380px
    * 381px - 600px
    * 601px - and above

* Bugs 
    * Problem 1: When the user picked easy mode the timer is remvoed however when the time reaches zero it redirects the user to the show score.
    - Solution 1: Moving setInterval(startTimer, 1000) to the hardBtn.addEventListener("click", function(e)) 

    * Problem 2: The game mode btns didnt go away when the clicked either mode btns.
    - Solution 2: Added a [0] to the const container = document.getElementsByClassName('mode-con')[0] this make the class i added to the game mode btns to go away when i click either mode btns.

    * Problem 3: The margins on the how to play looked off.
    - Solution 3: Added  margin-top: 55px to how-to-play.

    * Problem 4: The background picture file was too big which made it take a while to load which affected the user experience.
    * Solution 4 : Used tinyPng to make it smaller which improved load times.

* Unfixed Bugs
    * None

### Code
* I used https://www.youtube.com/watch?v=x7WJEmxNlEs for the timer to help me understand how to incorporate a timer into the quiz.

* I used the Fisher-Yates algorithm to shuffle the questions (https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/). 

* The show score, reset state, and show question javaScript code was adapted from https://www.youtube.com/watch?v=PBcqGxrr9g8. 

### Media
* All meida came from https://www.pexels.com/
### Technologies Used
* [Favicon](https://www.favicon.cc/) Generator
* Image Converters
    * [Pixelied](https://pixelied.com/convert/jpg-converter/jpg-to-webp)
    * [Tiny Img](https://tiny-img.com/webp/)
* [Google Fonts](https://fonts.google.com/) for fonts

## Wireframes

### Home Page
![Image of home page wireframe](/documentation/wireframe-home.png)

### How To Play
![Image of how to play page wireframe](/documentation/wireframe-howtoplay.png)

### Pick Game Mode
![Image of pick game mode page wireframe](/documentation/wireframe-pickgamemode.png)

### Quiz
![Image of quiz page wireframe](/documentation/wireframe-quiz.png)

### Score
![Image of score page wireframe](/documentation/wireframe-score.png)




