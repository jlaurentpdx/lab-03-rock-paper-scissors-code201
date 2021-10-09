import { doesUserWin, getRandomChoice } from './utilities.js';

const playButton = document.getElementById('play-button');
const result = document.getElementById('result');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const tieCount = document.getElementById('tie-count');
const error = document.getElementById('error');
const bulbImg = document.getElementById('bulb-img');
const charImg = document.getElementById('char-img');
const squiImg = document.getElementById('squi-img');

let wins = 0;
let losses = 0;
let ties = 0;

playButton.addEventListener('click', () => {
    const chosen = document.querySelector('input[type=radio]:checked');
    const chosenLabel = chosen.parentNode;
     
    if (!chosen) {
        return error.classList.remove('hidden');
    }
    error.classList.add('hidden');
    const userChoice = chosen.value;
    const cpuChoice = getRandomChoice();

    const applyAnimation = (winner, result) => {
        bulbImg.classList.remove('win', 'tie');
        charImg.classList.remove('win', 'tie');
        squiImg.classList.remove('win', 'tie');
    
        setTimeout(() => { 
            if (result === 'tie') {
                chosenLabel.classList.add(result);
            } else if (winner === 'grass') {
                bulbImg.classList.add(result);
            } else if (winner === 'fire') {
                charImg.classList.add(result);
            } else if (winner === 'water') {
                squiImg.classList.add(result);
            };
        }, 10);
    };

    if (doesUserWin(userChoice, cpuChoice) === 'tie'){
        ties++; tieCount.textContent = ties; 
        result.textContent = 'You tied!';
        result.style.color = 'lightgray';
        applyAnimation(userChoice, 'tie');
    } else if (doesUserWin(userChoice, cpuChoice) === 'win') {
        wins++; winCount.textContent = wins; 
        result.textContent = 'You won!';
        result.style.color = 'green';
        applyAnimation(userChoice, 'win');
    } else {
        losses++; lossCount.textContent = losses; 
        result.textContent = 'You lost!';
        result.style.color = 'red';
        applyAnimation(cpuChoice, 'win');
    }
});


