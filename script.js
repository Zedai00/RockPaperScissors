function log(text) {
  let p = document.createElement('p')
  p.textContent = text
  document.querySelector("#logs").append(p)
}

function clearLogs() {
  document.querySelector("#player-score").textContent = `Player Score: 0`
  document.querySelector("#comp-score").textContent = `Computer Score: 0`
  document.querySelector("#logs").textContent = ''
}

function logPlayerScore(score) {
  document.querySelector("#player-score").textContent = `Player Score: ${score}`
}

function logComputerScore(score) {
  document.querySelector("#comp-score").textContent = `Computer Score: ${score}`
}

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


let playerScore = 0
let computerScore = 0
let turn = 0
function playRound(playerChoice, computerChoice) {
  if (turn <= 0) {
    clearLogs()
  }
  turn++

  if (
    (playerChoice == 'rock' && computerChoice == 'scissor') ||
    (playerChoice == 'paper' && computerChoice == 'rock') ||
    (playerChoice == 'scissor' && computerChoice == 'paper')
  ) {
    log(`You Win! ${playerChoice} beats ${computerChoice}`)
    playerScore++
    logPlayerScore(playerScore)
  } else if (
    (playerChoice == 'paper' && computerChoice == 'scissor') ||
    (playerChoice == 'scissor' && computerChoice == 'rock') ||
    (playerChoice == 'rock' && computerChoice == 'paper')
  ) {
    log(`You Lose! ${playerChoice} beats ${computerChoice}`)
    computerScore++
    logComputerScore(computerScore)
  } else {
    log("Tie!")
  }
}

function printWinner() {
  log("Final Score")
  if (playerScore > computerScore) {
    log(`You Win! Your Score = ${playerScore}, Computer Score = ${computerScore}`)
  } else if (playerScore < computerScore) {
    log(`You Lose! Your Score = ${playerScore}, Computer Score = ${computerScore}`)
  } else {
    log("It's A Tie")
  }
  playerScore = 0
  computerScore = 0
  turn = 0
}

let moves = Array.from(document.querySelector(".moves").children)
moves.forEach((move) => {
  move.addEventListener("click", (e) => {
    if (turn >= 5) {
      printWinner()
    } else {
      switch (e.currentTarget.id) {
        case 'rock':
          playRound('rock', getComputerChoice())
          break
        case 'paper':
          playRound('paper', getComputerChoice())
          break
        case 'scissor':
          playRound('scissor', getComputerChoice())
          break
      }
    }
  })
})



// playGame(5)
