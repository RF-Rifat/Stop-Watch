const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const mil = document.getElementById("mil");

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let milSec = 0;
let running = false;
let intervalId;

start.addEventListener("click", () => {
    if (!running) {
        running = true;
        intervalId = setInterval(stopWatch, 10);
    }
});

stop.addEventListener("click", () => {
    running = false;
    clearInterval(intervalId);
});

reset.addEventListener("click", () => {
    running = false;
    clearInterval(intervalId);
    hour = 0;
    minute = 0;
    second = 0;
    milSec = 0;
    updateDisplay();
});

function stopWatch() {
    milSec += 1;
    if (milSec >= 100) {
        second += 1;
        milSec = 0;
        if (second >= 60) {
            minute += 1;
            second = 0;
            if (minute >= 60) {
                hour += 1;
                minute = 0;
            }
            if (hour >= 24) {
                hour = 0;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    mil.innerText = milSec < 10 ? "0" + milSec : milSec;
    sec.innerText = second < 10 ? "0" + second : second;
    min.innerText = minute < 10 ? "0" + minute : minute;
    hr.innerText = hour < 10 ? "0" + hour : hour;
}
