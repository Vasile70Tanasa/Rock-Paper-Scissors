let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

// if (!score) {
//   score = {
//     wins: 0,
//     losses: 0,
//     ties: 0,
//   };
// }

function playgame(playerMove) {
  const computerMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (computerMove === "rock") result = "You lose.";
    else if (computerMove === "paper") result = "You win.";
    else result = "Tie.";
  } else if (playerMove === "paper") {
    if (computerMove === "rock") result = "You win.";
    else if (computerMove === "paper") result = "Tie.";
    else result = "You lose.";
  } else {
    if (computerMove === "rock") result = "Tie.";
    else if (computerMove === "paper") result = "You lose.";
    else result = "You win.";
  }

  if (result === "You win.") {
    score.wins += 1;
  } else if (result === "You lose.") {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(".js-result").innerHTML = result;

  if (result === "You lose.") 
    text = `You lose. <img src="images/crying-emoji.gif" class="result-icon" />`
  else if (result === "You win.")
    text = `You win. <img src="images/happy-emoji.gif" class="result-icon" />`
  else
    text = `Tie. <img src="images/equality.gif" class="result-icon" />`

  document.querySelector(
    ".js-result"
  ).innerHTML = text;

  document.querySelector(
    ".js-moves"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon" /> vs 
<img src="images/${computerMove}-emoji.png" class="move-icon" />Computer`;

// document.querySelector(
//   ".js-result"
// ).innerHTML = `${result} <img src="images/disappointed-emoji.png" class="move-icon" />`;
}




function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  let computerMove = "";

  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) computerMove = "rock";
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
    computerMove = "paper";
  else computerMove = "scissors";
  return computerMove;
}