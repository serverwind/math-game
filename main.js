let myApp = {}; //один класс, в котором собраны переменные функций, которые должны передаваться из одной ф-ии в другую.
let hearts = 3; //количество жизней (возможностей ошибиться) на начало игры

//HTML разметка
const startGameHtml = document.getElementById('start-game');
const firstNumHtml = document.getElementById('first-num');
const secondNumHtml = document.getElementById('second-num');
const signHtml = document.getElementById('sign');
const rightAnswerHtml = document.getElementById('right-answer');
const userAnswerHtml = document.getElementById('user-answer');
const sendAnswerHtml = document.getElementById('send-answer');
const heartsHtml = document.querySelector('.hearts');
const heartsAmountHtml = document.getElementById('hearts-amount');
const mainDivHtml = document.getElementById('main');
const answerHtml = document.querySelector('.answer');
const gameOverHtml = document.getElementById('game-over');

startGameHtml.addEventListener('click', showGame);
sendAnswerHtml.addEventListener('click', checkAnswer);

//Показываем все блоки игры и генерируем первый пример
function showGame() {
  startGameHtml.style.display = 'none';
  heartsHtml.style.display = 'block';
  mainDivHtml.style.display = 'flex';
  answerHtml.style.display = 'block';

  generateQuiz();
  calcAnswer();
}

function generateQuiz() {
  if (hearts == 0) { //Проверяем остались ли у игрока жизни. Если нет - закрываем игру
    mainDivHtml.style.display = 'none';
    answerHtml.style.display = 'none';
    gameOverHtml.style.display = 'block';
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
  console.log(myApp.rightAnswer)
}

//Функция проверки правильный ли юзер дал ответ
function checkAnswer() {
  if (myApp.rightAnswer == userAnswerHtml.value) { //получаем его ответ
    console.log('ye');
  } else {
    console.log('naw');
    hearts -= 1;
  }

  calcAnswer(); //Сравниваем

  heartsAmountHtml.innerHTML = hearts;
}
