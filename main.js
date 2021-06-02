let firstNum = Math.floor(Math.random() * 10) + 1; // генерация первого числа
let secondNum = Math.floor(Math.random() * 10) + 1; // генерация второго числа
let signArr = ['+', '-', '*', '/'];

let sign = Math.floor(Math.random() * 4); // генерация символа

console.log(quiz) 

if (signArr[sign] == '+') {
	console.log(firstNum + secondNum);
} 
else if (signArr[sign] == '-') {
	console.log(firstNum - secondNum);
}
else if (signArr[sign] == '*') {
	console.log(firstNum * secondNum);
} else {
	console.log(firstNum / secondNum);
}
