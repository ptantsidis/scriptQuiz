let timerEl = document.querySelector(".time-remain");
let startButton = document.querySelector(".start-button");
let questionBlock = document.querySelector("#question-list");
let multiChoiceBlock = document.querySelector("#multi-choice-list");

// let questionKey = Math.floor((Math.random() * questions.length) + 1);
let timeRemain = 15;
let wins = false;
let loss = false;
let timer;
let questions = [{
    question: "JavaScript is ______ Side scripting language.",
    multiChoice: ["a. Server", " b. Client", "c. ISP", "d. Browser"],
    correct: "Answer : d"
},
{
    question: "The behaviour of the document elements can be defined by",
    multiChoice: ["a. Using document object", "b. Registering appropriate event handlers", " c. Using element object", "d. All of the above."],
    correct: "Answer: b"
},
{
    question: " ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    multiChoice: ["A.  <SCRIPT>", "B.   <BODY>", "C.  <HEAD>", "D.  <TITLE>"],
    correct: "Answer: A ]"
}]


function startGame() {
    startTime();
    displayQuestion();
    markAnswer();
    addWinLoss();
}

function startTime() {
    // timeRemain = 15;
    // timer = setInterval(function () {
    //     timeRemain--;
    //     timerEl.textContent = timeRemain;
    //     console.log(timeRemain)

    //     if (timeRemain === 0) {
    //         clearInterval(timer);
    //     }
    // }, 1000);
}
startButton.addEventListener("click", startGame);

function displayQuestion() {
    // let questionKey = Math.floor((Math.random() * questions.length) + 1);
    // let answerKey = Math.floor((Math.random() * multiChoice.length) + 1);
    let i = 0;
    // for (let i = 0; i < questions.length; i++) {
        questionBlock.textContent = questions[i].question;
        multiChoiceBlock.document.createElement("li");
        multiChoiceBlock.textContent = questions[i].multiChoice[0];
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


    }
    function markAnswer() {


    }

    function addWinLoss(winLoss) {

    }

