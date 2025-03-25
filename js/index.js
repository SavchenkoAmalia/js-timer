const input = document.getElementById('input');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');

start.addEventListener('click', onStart);
stop.addEventListener('click', onStop);
restart.addEventListener('click', onRestart);

let seconds;
let interval;

function onStart(params) {
    seconds = Number(input.value);
    interval = setInterval(() => {
        seconds--;
        console.log(seconds);
        if(seconds === 0){
            clearInterval(interval);
        }
    }, 1000);
}

function onStop(params) {
    clearInterval(interval);
}

function onRestart(params) {
    interval = setInterval(() => {
        seconds--;
        console.log(seconds);
        if(seconds === 0){
            clearInterval(interval);
        }
    }, 1000);
}