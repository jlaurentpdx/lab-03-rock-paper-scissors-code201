import { doesUserWin, getRandomChoice } from "./utilities.js";

const playButton = document.getElementById('play-button');
const result = document.getElementById('result');
const winCount = document.getElementById('win-count');
const lossCount = document.getElementById('loss-count');
const tieCount = document.getElementById('tie-count');
const error = document.getElementById('error');

let wins = 0;
let losses = 0;
let ties = 0;

playButton.addEventListener('click', () => {
    const chosen = document.querySelector('input[type=radio]:checked')
    if(!chosen) {
        return error.classList.remove('hidden');
    }
    error.classList.add('hidden');
    const userChoice = chosen.value;
    const cpuChoice = getRandomChoice();

    if (doesUserWin(userChoice, cpuChoice) === 'tie'){
        ties++; tieCount.textContent = ties; 
        result.textContent = 'You tied!'
    } else if (doesUserWin(userChoice, cpuChoice) === 'win') {
        wins++; winCount.textContent = wins; 
        result.textContent = 'You won!';
    } else if (doesUserWin(userChoice, cpuChoice) === 'lose') {
        losses++; lossCount.textContent = losses; 
        result.textContent = 'You lost!'
    } else {
        console.log('weird bug');
    }

    // function applyFilter(cpuChoice) {
    //     cpuChoice.classList.remove('player-lost', 'player-win');
    //     cpuChoice.classList.remove('player-lost');
    //     cpuChoice.classList.add('player-win');
    //     cpuChoice.classList.remove('player-win');
    //     cpuChoice.classList.add('player-lost');
    // }
})


