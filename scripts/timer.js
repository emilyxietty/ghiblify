const studyButton = document.getElementById("study-btn");
const breakButton = document.getElementById("break-btn");

const timerDisplay = document.querySelector(".timer-display");
const pauseTimerButton = document.querySelector(".pause-btn");
const resetBtn = document.querySelector(".reset-btn");
const progressBar = document.querySelector(".progress-bar");
const playPauseIcon = document.getElementById("playpause");

var startTime;
var updatedTime;
var difference = 0;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
var isStudy = 1;
var totalTime = 25 * 60 * 1000;

studyButton.addEventListener("click", function () {
  isStudy = true;
  startStudyTimer();
});

breakButton.addEventListener("click", function () {
  isStudy = false;
  startBreakTimer();
});

function startStudyTimer() {
  isStudy = true;
  totalTime = 25 * 60 * 1000;
  document.querySelector(".timer-container").style.backgroundImage =
    'url("/icons/break/break1.png")';
  resetTimer();
}

function startBreakTimer() {
  isStudy = false;
  totalTime = 10 * 60 * 1000;
  document.querySelector(".timer-container").style.backgroundImage =
    'url("/icons/break/break3.jpg")';

  resetTimer();
}

function resetTimer() {
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  playPauseIcon.innerHTML = "play_arrow";
  timerDisplay.style.color = "white";
  progressBar.style.width = "0%";
  timerDisplay.innerHTML = `${totalTime / 60000}:00`;
}

function pauseTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    playPauseIcon.innerHTML = "pause";
    timerDisplay.style.color = "white";
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    playPauseIcon.innerHTML = "play_arrow";
    timerDisplay.style.color = "#465994";
  } else {
    startTimer();
  }
}

pauseTimerButton.addEventListener("click", pauseTimer);

function getShowTime() {
  if (isStudy) {
    totalTime = 25 * 60 * 1000;
  } else {
    totalTime = 10 * 60 * 1000;
  }
  updatedTime = new Date().getTime();
  if (savedTime) {
    difference = updatedTime - startTime + savedTime;
  } else {
    difference = updatedTime - startTime;
  }
  var elapsed = totalTime - difference;
  var progress = (difference / totalTime) * 100;
  progressBar.style.width = `${progress}%`;
  var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerDisplay.innerHTML = minutes + ":" + seconds;
}
