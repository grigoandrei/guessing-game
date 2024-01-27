'use strict';

// document.querySelector('.message').textContent = 'Correct Number 🎉';
// document.querySelector('.guess').value = 19;
// console.log(document.querySelector('.guess').value);

//EVENT LISTENER

let answer = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number !';
  } else if (guess === answer) {
    document.querySelector('.number').textContent = answer;
    document.querySelector('.message').textContent = 'Correct Number 🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > answer) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high ! 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ! 💥';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < answer) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low ! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ! 💥';
      score = 0;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  answer = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').style.width = '15rem';
});
