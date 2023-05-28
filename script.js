const questions = [


{question: "What data type is not used in Javascript?",
a: "Boolean",
b: "Strings",
c: "Byte",
correct: "c"
},

{question: "Which keyword is used to define a variable in Javascript?",

a: "Var",
b: "Let",
c: "For",
correct: "a"},

{question: ""}




]


const question = document.getElementById('question');
const a = document.getElementById('a+');
const b = document.getElementById('b+');
const c = document.getElementById('c+');
const btn = document.getElementById('submit');
const all_answer = document.querySelectorAll('.answer');


let index = 0;
let score = 0;
//get the getSelected answer
function getSelected() {
  let ans = undefined;
  all_answer.forEach((el) => {
    if (el.checked) {
      ans = el.id;
    }
  });
  return ans;
}
//disselect all answer
function deselectans() {
  all_answer.forEach((el) => {
    el.checked = false;
  });
}
//load the quiz data
function getquiz() {
  deselectans();
  question.innerText = questions[index].question;
  a.innerText = questions[index].a;
  b.innerText = questions[index].b;
  c.innerText = questions[index].c;
}
//move forward the quiz
function startquiz() {
  btn.addEventListener('click', () => {
    let ans = getSelected();
    if (ans) {
      if (ans == questions[index].correct) {
        score++;
      }
    }
    index++;
    if (index < questions.length) {
      getquiz();
    } else {
      alert('score :' + score);
      location.reload();
    }
  });
}
getquiz();
startquiz();