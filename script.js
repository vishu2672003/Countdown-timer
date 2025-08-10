const endDate = new Date("10 August, 2025 17:30:00").getTime(); // ending date 
const startDate = new Date().getTime();                       // starting date based on present time

// jo function baar baar timer ko update kre
// we have to calculate 3 timer current,start,end


// used to call funct again and again based on time
let x = setInterval(function updateTimer() {
     const now = new Date().getTime();

     const distanceCovered = now - startDate;
     const distancePending = endDate - now;

     // calc days,hrs,min,secs
     // days calc = jitna pending hai time usko divide kr diya ek din me kitne ghante hote hai usse (24*60*60*1000)
     // hrs nikalne ke liye mod krenge 1 din se fer apne paas remaining ghnte aa jaenge usko divide kr dena hai 1ghnte me jitne min hote hai

     const oneDayInMiliSec = (24 * 60 * 60 * 1000);
     const oneHrInMillis = (60 *60 *1000);
     const oneMinInMillis = (60*1000);
     const oneSecInMillis = 1000;
     const days = Math.floor(distancePending / oneDayInMiliSec);
     const hrs =  Math.floor(distancePending % oneDayInMiliSec / oneHrInMillis);
     const mins =  Math.floor(distancePending % oneHrInMillis / oneMinInMillis);
     const secs =  Math.floor(distancePending % oneMinInMillis / oneSecInMillis);

     // populate in ui 

     document.getElementById("days").innerHTML = days;
     document.getElementById("hrs").innerHTML = hrs;
     document.getElementById("min").innerHTML = mins;
     document.getElementById("sec").innerHTML = secs;

     // calc width percentage for progress bar 

     const totalDistance = endDate - startDate;
     const percentageDistance = (distanceCovered / totalDistance) * 100;

     // set width for progress bar
     // clear interval used for cler the funtion which we used for set time interval

     document.getElementById("progress-bar").style.width = percentageDistance + "%";

     if(distancePending < 0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Time Over !";
        document.getElementById("progress-bar").style.width = "100%";
     }
},1000);