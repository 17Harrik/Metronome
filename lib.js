// metronome
console.log("Setting up metronome");
const btnDecreaseBPM = document.getElementById("btnDecreaseBPM");
const btnIncreaseBPM = document.getElementById("btnIncreaseBPM");
const bpmInput = document.getElementById("txtBPM");

var bpm = 60;   // beats per minute

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
}