let secretNumber = Math.floor(Math.random() * 41) - 20;
let previousGuess = null;
console.log(secretNumber);

function makeGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < -20 || guess > 20) {
    message.textContent = "Please enter a valid number between -20 and 20.";
    return;
  }

  if (guess === secretNumber) {
    message.textContent = "Congratulations! You guessed the number!";
    message.style.color = "green";
    return;
  }

  if (previousGuess !== null) {
    if (
      Math.abs(secretNumber - guess) < Math.abs(secretNumber - previousGuess)
    ) {
      message.textContent = "Hotter!";
      message.style.color = "red";
    } else {
      message.textContent = "Colder!";
      message.style.color = "blue";
    }
  } else {
    message.textContent = "Try again!";
  }

  previousGuess = guess;
  guessInput.value = "";
  guessInput.focus();
}
