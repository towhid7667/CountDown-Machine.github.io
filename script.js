const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minEl  = document.getElementById("min");
const secondEl= document.getElementById("second");

const newYears = "1 Jan 2022";



function countdown(){
    
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    

    const totalseconds = (newYearsDate - currentDate) / 1000;
    const days = Math.floor(totalseconds / 3600 / 24);

    const hours = Math.floor(totalseconds / 3600) % 24;
    const munites = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formattime(hours);
    minEl.innerHTML = formattime(munites);
    secondEl.innerHTML = formattime(seconds);
    
}

function formattime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
  
