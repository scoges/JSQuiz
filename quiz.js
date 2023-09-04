const questions = [
  {
      question: "What data type is not used in Javascript?",
      a: "Boolean",
      b: "Strings",
      c: "Byte",
      correct: "c"
  },
  {
      question: "Which keyword is used to define a variable in Javascript?",
      a: "Var",
      b: "Let",
      c: "For",
      correct: "a"
  },
  
  {
    question: "Javascript was originally created for what web browser?",
    a: "Google",
    b: "Netscape",
    c: "AOL",
    correct: "b"
},

{
    question: "Javascripts programming with promises is reffered to as...",
    a: "Ask/Wait",
    b: "Demand/Hold",
    c: "Async/Await",
    correct: "c"
},

{
    question: "Javascript is used on what percentage of websites?",
    a: "90%",
    b: "50%",
    c: "75%",
    correct: "a"
},

{
    question: "Javascript was originally named what?",
    a: "coffeescript",
    b: "livescript",
    c: "printscript",
    correct: "b"
},
];

const questionElem = document.getElementById('question');
const aElem = document.getElementById('a_label');
const bElem = document.getElementById('b_label');
const cElem = document.getElementById('c_label');
const submitButton = document.getElementById('submit');
const allAnswers = document.querySelectorAll('.answer');

let index = 0;
let score = 0;
let timeleft = 45;
const timerElem = document.getElementById("timer");
let timerId;

function getQuiz() {
  questionElem.textContent = questions[index].question;
  aElem.textContent = questions[index].a;
  bElem.textContent = questions[index].b;
  cElem.textContent = questions[index].c;
}

function endQuiz() {
  clearInterval(timerId);
  alert('Score: ' + score);
  const initials = prompt("Enter your initials to post your score:");
  const highScore = { initials, score };
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(highScore);
  localStorage.setItem("highScores", JSON.stringify(highScores));
  const showHighScores = confirm("See high scores?");
    if (showHighScores) {
        window.location.href = "highcore/high.html";
}
}
function countdown() {
  if (timeleft === 0) {
      endQuiz();
  } else {
      timerElem.textContent = timeleft + ' seconds remaining';
      timeleft--;
  }
}

function select() {
  let selectedAnswer;
  allAnswers.forEach((el) => {
      if (el.checked) {
          selectedAnswer = el.id;
      }
  });
  return selectedAnswer;
}

function startQuiz() {
  getQuiz();
  timerId = setInterval(countdown, 1000);
  submitButton.addEventListener('click', () => {
      const selectedAnswer = select();
      if (selectedAnswer) {
          if (selectedAnswer === questions[index].correct) {
              score++;
          } else {
              timeleft -= 5;
          }
      }
      index++;
      if (index < questions.length) {
          getQuiz();
      } else {
          endQuiz();
      }
  });
}

startQuiz();