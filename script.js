let minutes = 00;
let seconds = 00;
let tens = 00;
let getMinutes = document.querySelector('.minutes')
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let startBtn = document.querySelector('.btn-start');
let pauseBtn = document.querySelector('.btn-pause');
let resetBtn = document.querySelector('.btn-reset');
let interval ;

startBtn.addEventListener('click',()=>{
    interval = setInterval(StartTimer, 10);
});
pauseBtn.addEventListener('click', ()=>{
    clearInterval(interval);
});
resetBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    getSeconds.innerHTML = seconds ;
    getTens.innerHTML = tens ;
});

function StartTimer (){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens ;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0'+ seconds;
        tens = 0;
        getTens.innerHTML = '0', 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        getMinutes.innerHTML = '0'+ minutes;
        seconds = 0;
        getSeconds.innerHTML = '0',0;
    }
    if (minutes > 9){
        getMinutes.innerHTML = minutes;
    }
    
}
