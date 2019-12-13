let computerGuess = 0,
    numberOfGuesses = 0,
    a = 0,
    b = 100;

function writeMessage(elementId, message, appendMessage) {
    let elemToUpdate = document.getElementById(elementId);
    if (appendMessage) {
        elemToUpdate.innerHTML = elemToUpdate.innerHTML + message;
    } else {
        elemToUpdate.innerHTML = message;
    }
};

function newGame() {
    computerGuess = 0;
    numberOfGuesses = 1;
    a = 0;
    b = 100;
    writeMessage('historyList', '');
    document.getElementById('buttonLower').disabled = true;
    document.getElementById('buttonHigher').disabled = true;
    document.getElementById('buttonBingo').disabled = true;
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function computerGuessed() {
    let compGuess = document.getElementById('compGuess'),
        butStart = document.getElementById('buttonStart'),
        butLower = document.getElementById('buttonLower'),
        butHigher = document.getElementById('buttonHigher'),
        butBingo = document.getElementById('buttonBingo'),
        statusArea = document.getElementById('statusArea'),
        historyList = document.getElementById('historyList');

    butStart.disabled = true;
    butLower.disabled = false;
    butHigher.disabled = false;
    butBingo.disabled = false;
    computerGuess = randomNumber(a, b);

    writeMessage('compGuess', '<p>' + computerGuess + '</p>', true);
    writeMessage('statusArea', '<p>Choose a number between 1-100 and click the button.</p>');
}

window.onload = function () {
    newGame();
    let butStart = document.getElementById('buttonStart'),
        butLower = document.getElementById('buttonLower'),
        butHigher = document.getElementById('buttonHigher'),
        butBingo = document.getElementById('buttonBingo');
    butStart.addEventListener('click', computerGuessed);

    butLower.addEventListener("click", function () {
        writeMessage('historyList', '<li>' + computerGuess + ' (too high)</li>', true);
        b = computerGuess;
        computerGuessed();
        writeMessage('compGuess', '<p>' + '' + '</p>', false);
        writeMessage('compGuess', '<p>' + computerGuess + '</p>', true);
        numberOfGuesses++;
    });

    butHigher.addEventListener("click", function () {
        writeMessage('historyList', '<li>' + computerGuess + ' (too low)</li>', true);
        a = computerGuess;
        computerGuessed();
        writeMessage('compGuess', '<p>' + '' + '</p>', false);
        writeMessage('compGuess', '<p>' + computerGuess + '</p>', true);
        numberOfGuesses++;
    });

    butBingo.addEventListener("click", function () {
        writeMessage('statusArea', '<p>You got me in ' + numberOfGuesses + ' guesses, I was thinking ' + computerGuess + '. Let\'s go again...</p>');
        writeMessage('compGuess', '<p>' + '' + '</p>', false);
        butStart.disabled = false;
        newGame();
    });
};