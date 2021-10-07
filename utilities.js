export function doesUserWin(userChoice, cpuChoice) {
    if (userChoice === cpuChoice){return 'tie'}
    else if (userChoice === 'grass' && cpuChoice === 'water'){return 'win'}
    else if (userChoice === 'fire' && cpuChoice === 'grass'){return 'win'}
    else if (userChoice === 'water' && cpuChoice === 'fire'){return 'win'}
    else {return 'lose'};
}

export function getRandomChoice() {
    return ['grass', 'fire', 'water'] [Math.round(Math.random() * 2)]
}