const result = document.querySelector('.result');
const myScore = document.querySelector('#human')
const mcScore = document.querySelector('#machine')
let humanScore = 0
let machineScore = 0

const GAME_OPTION = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}

const playHuman = (humanChoise) => {

    playTheGame(humanChoise, playMachine())
}

const playMachine = () => {
    const choises = [GAME_OPTION.ROCK, GAME_OPTION.PAPER, GAME_OPTION.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choises[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Empatou !!"
    } else if (human === GAME_OPTION.PAPER && machine === GAME_OPTION.SCISSORS || human === GAME_OPTION.ROCK && machine === GAME_OPTION.PAPER || human === GAME_OPTION.SCISSORS && machine === GAME_OPTION.ROCK) {
        humanScore++
        myScore.innerHTML = humanScore
        result.innerHTML = "Você ganhou !!!"
    } else {
        machineScore++
        mcScore.innerHTML = machineScore
        result.innerHTML = "A Maquina ganhou!!"
    }
}

const resetar = () => {
    humanScore = 0
    machineScore = 0

    myScore.innerHTML = humanScore
    mcScore.innerHTML = machineScore

    result.innerHTML = ""
}