'use strict';


let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let heighScore = 0;


let button = document.querySelector('.check');
let message = document.querySelector('.message');
let body = document.querySelector('body');
let number = document.querySelector('.number');
let heighScoreInfo = document.querySelector('.highscore');

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};


button.addEventListener('click', function (e) {
    let guess = Number(document.querySelector('.guess').value);

    // COMMENT
    // console.log(typeof quess);

    // INFO  No Input Handeling
    if (!guess) {
        console.error('No quess!');
        displayMessage('No Number!😒');

        // INFO When Player Wins
    } else if (guess === secretNumber) {
        body.style.backgroundColor = "#60b347";
        number.style.width = '30rem';
        number.textContent = secretNumber;
        console.log(score);
        console.log(heighScore);
        if (score > heighScore) {
            heighScore = score;
            heighScoreInfo.textContent = heighScore;
        }
        // INFO when Guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            message = guess > secretNumber ? 'Too heigh!' : 'Too low!';
            displayMessage(message);
            score--;
        } else {
            body.style.backgroundColor = "red";
            displayMessage('You lost the game!')
            score = 0;
        }


    }


    //     // INFO When Number is to Heigh
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         message.textContent = 'Too heigh!';
    //         score--;
    //     } else {
    //         body.style.backgroundColor = "red";
    //         message.textContent = 'You lost the game!';
    //         score = 0;
    //     }
    //     // INFO When Number is to Low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         message.textContent = 'Too low!';
    //         score--;
    //     } else {
    //         body.style.backgroundColor = "red";
    //         message.textContent = 'You lost the game!';
    //         score = 0;
    //     }
    document.querySelector('.score').textContent = score;
});


let again = document.querySelector('.again');

again.addEventListener('click', (e) => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    body.style.backgroundColor = "#222";
    document.querySelector('.score').textContent = score;
    number.style.width = '15rem';
    document.querySelector('.guess').value = '';
    number.textContent = '?';
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...')


})