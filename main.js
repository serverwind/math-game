let myApp = {}; //один класс, в котором собраны переменные функций, которые должны передаваться из одной ф-ии в другую.
let hearts = 3; //количество жизней (возможностей ошибиться) на начало игры

//HTML разметка
const firstNumHtml = document.getElementById('first-num');
const secondNumHtml = document.getElementById('second-num');
const signHtml = document.getElementById('sign');
const rightAnswerHtml = document.getElementById('right-answer');
const userAnswerHtml = document.getElementById('user-answer');
const sendAnswerHtml = document.getElementById('send-answer');
const heartsAmount = document.getElementById('hearts-amount');

sendAnswerHtml.addEventListener('click', checkAnswer);

function generateQuiz() {
	
  if (hearts == 0) {
  console.log('stop');
  }

  myApp.firstNum = Math.floor(Math.random() * 10) + 1; // генерация первого числа
  myApp.secondNum = Math.floor(Math.random() * 10) + 1; // генерация второго числа
  myApp.signArr = ['+', '-', '*', '/'];

  myApp.sign = Math.floor(Math.random() * 4); // генерация символа

  //Вывод примера в HTML
  firstNumHtml.innerHTML = myApp.firstNum;
  secondNumHtml.innerHTML = myApp.secondNum;
  signHtml.innerHTML = myApp.signArr[myApp.sign];

}

//Расчет правильного ответа
function calcAnswer() {
  generateQuiz(); //вызов функции генерации примера

  if (myApp.signArr[myApp.sign] == '+') {
    myApp.rightAnswer = myApp.firstNum + myApp.secondNum;
  } else if (myApp.signArr[myApp.sign] == '-') {
    myApp.rightAnswer = myApp.firstNum - myApp.secondNum;
  } else if (myApp.signArr[myApp.sign] == '*') {
    myApp.rightAnswer = myApp.firstNum * myApp.secondNum;
  } else {
    myApp.rightAnswer = myApp.firstNum / myApp.secondNum;
  }
}

//Функция проверки правильный ли юзер дал ответ
function checkAnswer() {
  if (myApp.rightAnswer == userAnswerHtml.value) { //получаем его ответ
    console.log('ye');
    hearts = 3;
  } else {
    console.log('naw');
    hearts -= 1;
  }
 
  calcAnswer(); //Сравниваем
  
  heartsAmount.innerHTML = hearts;
}
