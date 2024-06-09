function getComputerChoice() {
  let chance = Math.random() * 100
  if (chance > 66) {
    return 'scissor'
  } else if (chance < 33) {
    return 'paper'
  } else {
    return 'rock'
  }
}

function getHumanChoice() {
  let choice = prompt("Enter Choice: ").toLowerCase()
  let moves = ['rock', 'paper', 'scissor']
  if (moves.includes(choice)) {
    return choice
  }
}

let humanScore = 0
let computerScore = 0
function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice == 'rock' && computerChoice == 'scissor') ||
    (humanChoice == 'paper' && computerChoice == 'rock') ||
    (humanChoice == 'scissor' && computerChoice == 'paper')
  ) {
    console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
    humanScore++
  } else if (
    (humanChoice == 'paper' && computerChoice == 'scissor') ||
    (humanChoice == 'scissor' && computerChoice == 'rock') ||
    (humanChoice == 'rock' && computerChoice == 'paper')
  ) {
    console.log(`You Lose! ${humanChoice} beats ${computerChoice}`)
    computerScore++
  } else {
    console.log("Tie!")
  }
}

function playGame(times) {
  computerScore = 0;
  humanScore = 0;
  for (let i = 0; i < times; i++) {
    playRound(getHumanChoice(), getComputerChoice())
  }
  console.log("Final Score")
  if (humanScore > computerScore) {
    console.log(`You Win! Your Score = ${humanScore}, Computer Score = ${computerScore}`)
  } else if (humanScore < computerScore) {
    console.log(`You Lose! Your Score = ${humanScore}, Computer Score = ${computerScore}`)
  } else {
    console.log("It's A Tie")
  }
}

playGame(5)
