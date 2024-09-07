let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false; 
let startTime, elapsedTime = 0;

startBtn.addEventListener('click', function () {
    if (!timer) {  
        timer = true;
        startTime = Date.now() - elapsedTime;
        stopWatch();
    }
});

stopBtn.addEventListener('click', function () {
    if (timer) {
        timer = false;
        elapsedTime = Date.now() - startTime;
    }
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    elapsedTime = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        let now = Date.now();
        let diff = now - startTime; 

        
        hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
        minute = Math.floor((diff / (1000 * 60)) % 60);
        second = Math.floor((diff / 1000) % 60);
        count = Math.floor((diff % 1000) / 10); 

       
        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopWatch, 10); 
    }
}












































 /* let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;
let timer = false; // Declare the timer variable
let startTime, elapsedTime = 0;

startBtn.addEventListener('click', function () {
    if (!timer) {  // Prevent multiple clicks on start
        timer = true;
        startTime = Date.now() - elapsedTime;
        stopWatch();
    }
});

stopBtn.addEventListener('click', function () {
    if (timer) {
        timer = false;
        elapsedTime = Date.now() - startTime;
    }
});

resetBtn.addEventListener('click', function () {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    elapsedTime = 0;
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        let now = Date.now();
        let diff = now - startTime; // Time difference in milliseconds

        // Calculate hours, minutes, seconds, and hundredths of a second
        hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
        minute = Math.floor((diff / (1000 * 60)) % 60);
        second = Math.floor((diff / 1000) % 60);
        count = Math.floor((diff % 1000) / 10); // Hundredths of a second

        // Add leading zeros for display
        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;

        setTimeout(stopWatch, 10); // Call again after 10ms
    }
} */