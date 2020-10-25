const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const refs = {body : document.querySelector(`body`), 
  startBtn : document.querySelector(`[data-action="start"]`), 
  stopBtn : document.querySelector(`[data-action="stop"]`)};
  
refs.startBtn.addEventListener(`click`, onColorChange);
refs.stopBtn.addEventListener(`click`, offColorChange);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;
// let isColorChangeOn = false;

function onColorChange(){
    // if (isColorChangeOn){
    //     return;
    // }
    intervalId = setInterval(() => {
        // isColorChangeOn = true;
        refs.startBtn.disabled = true;
       const randomColor =  colors[randomIntegerFromInterval(0, colors.length - 1)];
       refs.body.style.background = randomColor;
}, 1000);
};

function offColorChange(){
    // isColorChangeOn = false;
    refs.startBtn.disabled = false;
    clearInterval(intervalId);
};


