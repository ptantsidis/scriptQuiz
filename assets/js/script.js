let timerEl = document.querySelector(".time-remain");
let startButton = document.querySelector(".start-button");
let logButton = document.querySelector(".log-button");
let questionBlock = document.querySelector("#question-list");
let multiChoiceBlock = document.querySelector("#multi-choice-list");
let item = document.createElement('li');

let timeRemain = 15;
let losses = 0;
let wins = 0;
let timer;
let questionNumber = 0;
let i = 0;
let h = 0;

let questions = [{
    question: "JavaScript is ______ Side scripting language.",
    multiChoice: ["Server", "Client", "ISP", "Browser"],
    correctAnswer: "3"
},
{
    question: "The behaviour of the document elements can be defined by",
    multiChoice: ["Using document object", "Registering appropriate event handlers", "Using element object", "All of the above."],
    correctAnswer: "1"
},
{
    question: " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    multiChoice: ["<SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>"],
    correctAnswer: "0"
},
{
    question: "What should appear at the very end of your JavaScript? The <script LANGUAGE=”JavaScript”>tag",
    multiChoice: ["The </script>", "The <script>", "The END statement", "All of the above."],
    correctAnswer: "0"
},
{
    question: "What is the correct syntax for referring to an external script called ” abc.js”?",
    multiChoice: ["<script href=” abc.js”>", " <script name=” abc.js”>", "<script src=” abc.js”>", "None of the above"],
    correctAnswer: "2"

}]


function startGame() {
    initApp();
    startTime();
    displayQuestion();
}

function initApp() {
    losses = 0;
    wins = 0;
    startButton.disabled = false;
    questionNumber = 0
}
function startTime() {
    console.log(event.target.value)
    startButton.disabled = true;
    timeRemain = 15;
    timer = setInterval(function () {
        timeRemain--;
        timerEl.textContent = timeRemain;
        if (timeRemain === 0) {
            clearInterval(timer);
            markAnswer();
        }
    }, 1000);
}

function displayQuestion() {
   if (questionNumber != questions.length) {
        multiChoiceBlock.innerHTML = "";
        questionBlock.textContent = questions[questionNumber].question;
        for (i = 0; i < questions[questionNumber].multiChoice.length; i++) {
            item = document.createElement('li');
            item.textContent = questions[questionNumber].multiChoice[i];
            item.value = i;
            item.addEventListener("click", markAnswer);
            multiChoiceBlock.appendChild(item);
        }
    } else {
        winGame();
    }
}


function markAnswer(event) {
    console.log(questions[questionNumber].correctAnswer)
    if (timeRemain === 0) {
        clearInterval(timer);
        lostGame();
    }

    if (!event.target.value == questions[questionNumber].correctAnswer) {
        lostGame();
    } else {
        winGame();
    }
}

function lostGame() {
    console.log("lostgame")
    losses++;
    timeRemain = timeRemain - 5;
    questionNumber++
    if ((timeRemain > 0) && (questionNumber != questions.length)) {
        displayQuestion();
    } else {
        return;
    }
}

function winGame() {
    console.log("wingame")
    wins++;
    timeRemain = timeRemain + 5;
    questionNumber++;
    displayQuestion();
}
function logGame() {
    // // write to local storage
    //     let gameLog = {
    //         // name: name.value,
    //         losses: losses.value,
    //         wins: wins.value,
    //     }
}

localStorage.setItem("logGame", JSON.stringify(logGame));


startButton.addEventListener("click", startGame);


logButton.addEventListener("click", logGame);
