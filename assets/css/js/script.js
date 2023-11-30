// dependancies

//data (global variables or imported data)

var startbtn = document.querySelector("#start-btn");
//timer display
var timerEl = document.querySelector("#timer");

var timerInterval;
//helper functions

function startTimer() {
  var timeLeft = 10;
  var interval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      //stop timer
      clearInterval(interval);
    }
  }, 1000);
  return interval;
}

//array of questions for quiz
var questions = [
  {
    question: "Question 1",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    question: "Question 2",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    question: "Question 3",
    options: ["Option 1", "Option 2", "Option 3"],
  },
  {
    question: "Question 4",
    options: ["Option 1", "Option 2", "Option 3"],
  },
];

function startQuiz() {
  console.log("button works.game will start");
  // pressing this button will take user to the quiz questions
  //timer starts
  var timerInterval = startTimer();
  // questions pop up
}

//user interactions
startbtn.addEventListener("click", startQuiz);

//initialization
