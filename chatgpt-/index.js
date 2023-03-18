// JavaScript code
let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

function displayTime() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent =
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds > 9 ? seconds : "0" + seconds);
}

function startStop() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    } else {
        timer = setInterval(runTimer, 1000);
    }
}

function runTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
}
