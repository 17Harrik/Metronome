// metronome
console.log("Setting up metronome");
const btnDecreaseBPM = document.getElementById("btnDecreaseBPM");
const btnIncreaseBPM = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");
const btnStartStop = document.getElementById("btnStartStop");
const logo = document.getElementById("logo");
const highContrastBtn = document.getElementById("highContrastBtn");
const MAX_BPM = 120;
const MIN_BPM = 50;
var running = false;
var bpm = 60;   // beats per minute
var callback = undefined;
var indicatorVisible = false;
var highContrast = false;
let beat = new Audio("beat.wav");

btnStartStop.addEventListener("click", function (e) {

    running = !running;
    btnStartStop.value = running ? "Stop" : "Start";

    if (running) {
        setSpeedAndStart(); 
    }
});

function setSpeedAndStart() {
    clearInterval(callback);
    var ms = 60000 / bpm;
    callback = setInterval(onTick, ms);
}

function onTick() {
    indicatorVisible = !indicatorVisible;
    
    if (running) {
        console.log("Tick");
        logo.style.borderColor = indicatorVisible ? "red" : "white";
        beat.load();
        beat.play();
    }
    
}

// add event handlers
bpmInput.onchange = function (e) {

    bpm = parseInt(bpmInput.value);
    if (isNaN(bpm)) {
        bpm = 50;
    }
    console.log(bpm);
}

btnDecreaseBPM.onclick = function (e) {
    bpm -= 5;
    updateBPM();
}

btnIncreaseBPM.onclick = function (e) {
    bpm += 5;
    updateBPM();
}

highContrastBtn.onclick = function (e) {
    if (highContrast) {
        normalToggle();
        highContrast = !highContrast;
        console.log("low")
    }
    else {
        highContrastToggle();
        highContrast = !highContrast;
        console.log("high")
    }
}

function highContrastToggle() {
    var body = document.querySelector("body");
    body.style.filter = "grayscale(100%)";
}

function normalToggle() {
    var body = document.querySelector("body");
    body.removeAttribute("style");
}

function updateBPM() {

    // range check
    if (bpm > MAX_BPM) {
        bpm = MAX_BPM;
    }

    if (bpm < MIN_BPM) {
        bpm = MIN_BPM;
    }

    bpmInput.value = bpm;
}