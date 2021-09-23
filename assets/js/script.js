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
}]

// let questionKey = Math.floor((Math.random() * questions.length) + 1);
// no sure why I set this up
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
    console.log("displayQuestion");
    if (questionNumber === 0) {
        questionBlock.textContent = questions[questionNumber].question;
        for (i = 0; i < questions[questionNumber].multiChoice.length; i++) {
            console.log(questionNumber);
            item = document.createElement('li');          
            item.textContent = questions[questionNumber].multiChoice[i];
            item.value=i;
            item.addEventListener("click", markAnswer);
            multiChoiceBlock.appendChild(item);
            console.log(questions[questionNumber].correctAnswer[0]);
        }
    } else {
        questionBlock.textContent = questions[questionNumber].question;
        for (i = 0; i < questions[questionNumber].multiChoice.length; i++) {
            item.textContent = questions[questionNumber].multiChoice[i];
            item.value= i;
            item.addEventListener("click", markAnswer());
            multiChoiceBlock.appendChild(item);
            item = document.replaceChildren('li', 'li');
            console.log(questions[questionNumber].correctAnswer);
        }
    }
}

function markAnswer(event) {
console.log("markanswer")
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
    timeRemain  = timeRemain - 5;
    questionNumber++
    displayQuestion();
}

function winGame() {
    console.log("wingame")
    wins++; 
    timeRemain  = timeRemain + 5;
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
