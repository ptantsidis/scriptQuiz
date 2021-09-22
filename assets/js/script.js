let timerEl = document.querySelector(".time-remain");
let startButton = document.querySelector(".start-button");
let questionBlock = document.querySelector("#question-list");
let multiChoiceBlock = document.querySelector("#multi-choice-list");

let timeRemain = 15;
let win = false;
let loss = false;
let losses = 0;
let wins = 0;
let timer;
let questionNumber = 0;

let questions = [{
    question: "JavaScript is ______ Side scripting language.",
    multiChoice: ["Server", "Client", "ISP", "Browser"],
    correct: "4"
},
{
    question: "The behaviour of the document elements can be defined by",
    multiChoice: ["Using document object", "Registering appropriate event handlers", "Using element object", "All of the above."],
    correct: "2"
},
{
    question: " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    multiChoice: ["<SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>"],
    correct: "1"
}]

let questionKey = Math.floor((Math.random() * questions.length) + 1);

function startGame() {
    initApp();
    startTime();
    displayQuestion();
    markAnswer();
    addWinLoss();
}

function initApp() {
    losses = 0;
    wins = 0;
    win = false;
    loss = false;
    }
function startTime() {
    timeRemain = 15;
    timer = setInterval(function () {
        timeRemain--;
        timerEl.textContent = timeRemain;
        console.log(timeRemain)

        if (timeRemain === 0) {
            clearInterval(timer);
            markAnswer();
        
        }
    }, 1000);
}


function displayQuestion() {
    // console.log(questions[3].multiChoice.length);
    if (questionNumber === 0) {
        questionBlock.textContent = questions[questionNumber].question;
        for (let i = 0; i < questions[i].multiChoice.length; i++) {
            const item = document.createElement('li');
            item.textContent = questions[i].multiChoice[i];
            multiChoiceBlock.appendChild(item);
            // make selectable
        }
    } else {
        questionBlock.textContent = questions[questionNumber].question;
        for (let i = 0; i < questions[i].multiChoice.length; i++) {
            item.textContent = questions[i].multiChoice[i];
            multiChoiceBlock.appendChild(item);
           // make selectable
        }
    }
}
    // let questionKey = Math.floor((Math.random() * questions.length) + 1);
    // let answerKey = Math.floor((Math.random() * multiChoice.length) + 1);
    //do once

    // for (let i = 0; i < questions[i].multiChoice.length ; i++) {
    //     //create
    //     const item = document.createElement('li');
    //     // define
    //    item.textContent = questions[i].multiChoice[i];
    //     //append
    //     multiChoiceBlock.appendChild(item);
    // this is where it stops

    // questionBlock.textContent = questions[i].question;
    //     for (let h = 0; h <  questions[i].multiChoice.length; h++) { 
    //         multiChoiceBlock.document.createElement(li);
    //         multiChoiceBlock.textContent = questions[i].multiChoice[h];
    //         console.log(multiChoice.length);
    //     }
    // }
    //    let li = document.createElement("li");
    //   |   multiChoiceBlock.textContent = questions[i].multiChoice[i];
    // need to split off text of array
    // multiChoiceBlock.textContent = 



    function markAnswer() {
        if (timeRemain === 0) {
            -- losses
            loss = true;
            win = false;
        }
        if win =
        //is what they selected correct
        // if true 
        //add to timer
        // add a win
        //get next question
        // if false 
        // let correctAnswer = 1
        // if questions.correct === 1

    }

    function addWinLoss(winLoss) {

    }
    //later on
    // function evalAnswer(e){
    //     //code to eval answer here ...  youll need to use something called  this.target to evaluate 
    //     questionNum ++ 
    //    displayQuestion()

}
startButton.addEventListener("click", startGame);
