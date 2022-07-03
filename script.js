'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayQuetion = function (quetion) {
  document.querySelector('.question').textContent = quetion;
};
const displayQuetionFont = function (font) {
  document.querySelector('.question').style.fontSize = font;
};
const displayBgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.number-input').value);
  if (!guessNumber) {
    displayGuessMessage('Введите число от 1 до 20');
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessNumber < secretNumber ? 'Слишком мало!' : 'Слишком много!'
      );
      score--;
      displayScore(score);
    } else {
      displayGuessMessage('Вы проиграли!');
      displayScore(0);
    }
  } else if (guessNumber === secretNumber) {
    displayGuessMessage('Вы победили!');
    displayQuetion(secretNumber);
    displayBgColor('rgb(9, 250, 21)');
    displayQuetionFont('6rem');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayBgColor('rgb(0, 0, 0)');
  displayQuetionFont('4rem');
  displayGuessMessage('Начни угадывать!');
  displayScore(score);
  displayQuetion('???');
  document.querySelector('.number-input').value = '';
});
