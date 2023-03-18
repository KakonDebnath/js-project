const displayCounter = document.getElementById('display-counter');
const secondCounter = document.getElementById('second-counter');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const clearBtn = document.getElementById('clear-btn');
let counter = 0;
let counter2 = 0;
let setIntervalId;
let setIntervalId2;

startBtn.addEventListener('click', function () {
    setIntervalId = setInterval(() => {
        displayCounter.innerText = ++counter;
        if (counter === 9) {
            counter = 0;
        }
    }, 100)
    setIntervalId2 = setInterval(() => {
        secondCounter.innerText = ++counter2;
    }, 1000)
})

stopBtn.addEventListener('click', function () {
    clearInterval(setIntervalId);
    clearInterval(setIntervalId2);
})

clearBtn.addEventListener('click', function () {
    clearInterval(setIntervalId);
    counter = 0;
    displayCounter.innerText = counter;

    
    clearInterval(setIntervalId2);
    counter2 = 0;
    secondCounter.innerText = counter2;
});

// function resetCounter (){
//     clearInterval(setIntervalId);
//     counter = 0;
//     displayCounter.innerText = counter;
// }