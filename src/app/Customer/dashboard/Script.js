let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0;
let progressEndValue = 55;
let speed = 100;

let progress = setInterval(() => {
    progressStartValue++;
    // progressValue.textContent = `${progressStartValue}%`
    //console.log(progressValue.textContent);
    console.log(progressStartValue);
    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
    progressValue.textContent = `${progressStartValue}%`;
    circularProgress.style.background = `conic-gradient(#0ce80c ${progressStartValue *3.6}deg,#ededed 0deg)`;
    
   // circularProgress.style.background = ``
}, speed);
// Script.js
/*
let circularProgress = document.querySelector('.circular-progress');
let progressValue = document.querySelector('.progress-value');

let progressStartValue = 0;
let progressEndValue = 20;
let speed = 10000;
`conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
let progress = setInterval(() => {
    progressStartValue++;
    progressValue.textContent = `${progressStartValue}%`;

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed / (progressEndValue - progressStartValue + 1)); // Adjust the speed for even intervals.


*/

