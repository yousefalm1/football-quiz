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

## Technologies Used
### Languages
* HTML
* CSS
* JavaScript















