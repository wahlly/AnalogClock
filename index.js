const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

//setting a variable to the date method...

const date = new Date();
        console.log(date);
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    
        console.log('Hour: ' + hour + ' Minute: ' + minute + ' second: ')

// setting variables for the clock hands degree values 

    let hourDegree = (hour*360/12)+(minute*(360/60)/12);
    let minuteDegree = (minute*360/60)+(second*(360/60)/60);
    let secondDegree = second*360/60;

function runClock() {
    
    hourDegree = hourDegree+(3/360);
    minuteDegree = minuteDegree+(6/60);
    secondDegree = secondDegree+6;

    hourHand.style.transform = 'rotate('+ hourDegree + 'deg)';
    minuteHand.style.transform = 'rotate('+ minuteDegree + 'deg)'
    secondHand.style.transform = 'rotate('+ secondDegree + 'deg)'
};

//to be able to call runClock function continually every second...

const interval = setInterval(runClock, 1000)