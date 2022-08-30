stopwatch = document.querySelector(".stopwatch-number");
startBtn = document.querySelector("#start-btn");
stopBtn = document.querySelector("#stop-btn");
resetBtn = document.querySelector('#reset-btn');

startBtn.addEventListener('click', handleStartBtnClick);
stopBtn.addEventListener('click', handleStopBtnClick);
resetBtn.addEventListener('click', handleResetBtnClick);

let now = null;
let time = null;
let interval = null;
let difference = 0;
let centesimo = 0;
let segundos = 0;
let minutos = 0;
let limit = 10;
let test = null;
let firstClick = true;

function handleStartBtnClick() {
    if (firstClick) {
        now = new Date();
        firstClick = false;
    }

    interval = setInterval(startCount, 1);
}

function startCount() {

    time = new Date();
    difference = time.getTime() - now.getTime();


    if (difference >= limit) {
        centesimo += 1;
        limit += 10;
        if (centesimo == 100) {
            segundos += 1;
            centesimo = 0;
            if (segundos == 60) {
                minutos += 1;
                segundos = 0;
            }
        }
    }
    console.log(difference);
    stopwatch.innerHTML = checkNumber(minutos) + ':' + checkNumber(segundos) + ':' + checkNumber(centesimo);
}

function checkNumber(n) {
    if (n < 10) {
        n = '0' + n;
    }
    return n;
}

function handleStopBtnClick() {
    clearInterval(interval);

}

function handleResetBtnClick() {
    centesimo = 0;
    segundos = 0;
    minutos = 0;
    stopwatch.innerHTML = '0' + minutos + ':0' + segundos + ':0' + centesimo;
}


