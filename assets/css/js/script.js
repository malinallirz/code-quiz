// dependancies

//data (global variables or imported data)

var startbtn = document.querySelector("#start-btn");
//timer display
var timerEl = document.querySelector("#timer");

var timerInterval;

var quizPoints = 0;

var score = document.getElementById("score");

//helper functions

function startTimer() {
  var timeLeft = 10;
  var interval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft === 0) {
      //stop timer
      clearInterval(interval);
      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("quiz-end").style.display = "block";
      score.innerHTML = quizPoints * 25;
    }
  }, 1000);
  return interval;
}

//array of questions for quiz
var questions = [
  {
    question: "What is 2*10?",
    options: ["20", "12", "200"],
  },
  {
    question: "what is 3 cubed?",
    options: ["27", "6", "9"],
  },
  {
    question: "how many sides does a triangle have?",
    options: ["3", "6", "4"],
  },
  {
    question: "complete the pattern: 25,26,28,31,35,_ ",
    options: ["40", "36", "38"],
  },
];

var currentQuestionIndex = 0;

//display questions and answer options
function displayQuestion() {
  var question = questions[currentQuestionIndex];
  document.getElementById("question").textContent = question.question;

  var optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  question.options.forEach(function (option) {
    var li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", handleOptionSelection);
    optionsList.appendChild(li);
  });
}

function startQuiz() {
  //console.log("button works.game will start");
  // pressing this button will take user to the quiz questions
  //timer starts
  var timerInterval = startTimer();
  document.getElementById("start-page").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  displayQuestion();
  // questions pop up
}

function handleOptionSelection() {
  var selectedOption = this.textContent;

  var question = questions[currentQuestionIndex];
  var answer = question.options[0];
  if (selectedOption === answer) {
    console.log("correct");
    quizPoints++;
    console.log(quizPoints);
  } else {
    console.log("wrong");
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    console.log("complete");
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("quiz-end").style.display = "block";
    score.innerHTML = quizPoints * 25;
  } else {
    displayQuestion();
  }
}

//user interactions
startbtn.addEventListener("click", startQuiz);

//initialization
