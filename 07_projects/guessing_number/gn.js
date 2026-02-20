const num = parseInt(Math.random()*100)+1;

const submitbtn = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guesslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startover = document.querySelector('.resultParas')

const paragraph = document.createElement('p')

let prevguess = [];
let numguesses = 1;
let playgame = true;

if(playgame){
    submitbtn.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userinput.value);
        console.log(guess);
        validateguess(guess);
    })
}
function validateguess(guess){
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } 
    else if (guess < 1) {
        alert("Number must be greater than 1");
    } 
    else if (guess > 100) {
        alert("Number must be less than 100");
    } 
    else {
        prevguess.push(guess);

        if (numguesses === 10) {
            displayguess(guess);
            displaymessage(`Game Over. Random number was ${num}`);
            endgame();
        } else {
            displayguess(guess);
            checkguess(guess);
        }
    }
}

function checkguess(guess){
    if (guess === num) {
        displaymessage("You guessed it right!");
        endgame();
    } 
    else if (guess < num) {
        displaymessage("Number is TOO low");
    } 
    else {
        displaymessage("Number is TOO high");
    }
}

function displayguess(guess){
    userinput.value = '';
    guesslot.innerHTML += `${guess} `;
    numguesses++;
    remaining.innerHTML = `${11 - numguesses}`;
}

function displaymessage(message){
    loworhigh.innerHTML = `<h2>${message}</h2>`;
}

function newgame(){
    userinput.value = '';
    userinput.setAttribute('disabled', '');
    paragraph.classList.add('button');
    paragraph.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startover.appendChild(paragraph);
    playgame = false;
    newgame();
}

function endgame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function() {
        num = Math.floor(Math.random() * 100) + 1;
        prevguess = [];
        numguesses = 1;
        guesslot.innerHTML = '';
        remaining.innerHTML = '10';
        userinput.removeAttribute('disabled');
        startover.removeChild(paragraph);
        playgame = true;
    });
}