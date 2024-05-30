let timer;
let isRunning = false;
let elapsedTime = 0;

function watchStart() {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
  }
}

function watchStop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
}

function watchReset() {
  clearInterval(timer);
  isRunning = false;
  elapsedTime = 0;
  updateDisplay(0, 0, 0);
}

function updateTime() {
  elapsedTime++;
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  updateDisplay(hours, minutes, seconds);
}

function updateDisplay(hours, minutes, seconds) {
  document.getElementById("displayTime").textContent = `${pad(hours)}:${pad(
    minutes
  )}:${pad(seconds)}`;
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}
