// metronome
console.log("Setting up metronome");
const btnDecreaseBPM = document.getElementById("btnDecreaseBPM");
const btnIncreaseBPM = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");
const btnStartStop = document.getElementById("btnStartStop");
const logo = document.getElementById("logo");
const MAX_BPM = 120;
const MIN_BPM = 50;
var running = false;
var bpm = 60;   // beats per minute
var callback = undefined;
var indicatorVisible = false;

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
    console.log("Tick")
    indicatorVisible = !indicatorVisible
    logo.style.borderColor = indicatorVisible? "red":"white"
}

// add event handlers
bpmInput.onchange = function (e) {

    bpm = parseInt(bpmInput.value);
    if (isNaN(bpm)) {
        bpm = 50;
    }
    console.log(bpm)
}

btnDecreaseBPM.onclick = function (e) {
    bpm -= 5;
    updateBPM();
}

btnIncreaseBPM.onclick = function (e) {
    bpm += 5;
    updateBPM();
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