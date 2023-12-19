const question = [
  {
    ques: "Which of the following is a markup language?",

    a: "HTML",
    b: "Javascript",
    c: "Java",
    d: "C++",
    correct: "a",
  },
  {
    ques: "which year javascript was launched?",

    a: "1996",
    b: "1995",
    c: "1994",
    d: "1933",
    correct: "b",
  },

  {
    ques: "what does css stand for?",

    a: "Hyper text markup language",
    b: "Cascading style sheet",
    c: "Jason object 67tation",
    d: "central processing unit",
    correct: "b",
  },
];
let total = question.length;
let right = 0;
let wrong = 0;
let index = 0;
let que = document.getElementById("question");
let options = document.querySelectorAll(".option");
const load = function () {
  if (total === index) {
    return end();
  }
  let data = question[index];
  que.innerText = `${index + 1}) ${data.ques}`;
  options[0].nextElementSibling.innerText = data.a;
  // yeh nextElementSibling [0]position input ke next sibling label ko define kr rha hai
  options[1].nextElementSibling.innerText = data.b;
  options[2].nextElementSibling.innerText = data.c;
  options[3].nextElementSibling.innerText = data.d;
};

const getanswer = function () {
  let data = question[index];

  let key = me();
  if (key === undefined) {
    alert("Please select an option before proceeding.");
    return;
  }
  if (key === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;

  options.forEach((input) => {
    input.checked = false;
  });

  load();
  return;
};

const me = () => {
  let answer;
  options.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

const end = () => {
  document.querySelector("#box").innerHTML = `<div style="text-align:center">
      <h3>Thank you for playing, </h3>
      <h2>
        your right guesses are ${right} and wrong guesses are ${wrong} 
      </h2>
      ;
    </div>`;
};

load();
