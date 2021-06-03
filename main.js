//HTML разметка
const firstNumHtml = document.getElementById('first-num');
const secondNumHtml = document.getElementById('second-num');
const signHtml = document.getElementById('sign');
const rightAnswerHtml = document.getElementById('right-answer');
const userAnswerHtml = document.getElementById('user-answer');
const sendAnswerHtml = document.getElementById('send-answer');
sendAnswerHtml.addEventListener('click', checkAnswer);

function generateQuiz() {
  let firstNum = Math.floor(Math.random() * 10) + 1; // генерация первого числа
  let secondNum = Math.floor(Math.random() * 10) + 1; // генерация второго числа
  let signArr = ['+', '-', '*', '/'];

  let sign = Math.floor(Math.random() * 4); // генерация символа

  return firstNum, secondNum, sign, signArr;
}

function renderHtml(signArr, firstNum, secondNum, sign) {
	//Вывод примера в HTML
  firstNumHtml.innerHTML = firstNum;
  secondNumHtml.innerHTML = secondNum;
  signHtml.innerHTML = signArr[sign];
}

function checkAnswer(signArr, firstNum, secondNum, sign) {
  let rightAnswer;
  console.log(firstNum, secondNum, sign)

  if (signArr[sign] == '+') {
    rightAnswer = firstNum + secondNum;
  } else if (signArr[sign] == '-') {
    rightAnswer = firstNum - secondNum;
  } else if (signArr[sign] == '*') {
    rightAnswer = firstNum * secondNum;
  } else {
    rightAnswer = firstNum / secondNum;
  }

  if (rightAnswer == userAnswerHtml.value) {
    console.log('ye')
  } else {
    console.log('naw')
  }
  generateQuiz();
  renderHtml();
}
