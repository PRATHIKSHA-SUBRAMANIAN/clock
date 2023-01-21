let time = document.getElementById("time");
let dates = document.getElementById("dates");
function mytime() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let dayLight = "AM"; 
    let date = currentTime.getDate();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let month = currentTime.getMonth();
    let year = currentTime.getFullYear();
    // console.log(hours, minutes, seconds, dayLight);
    dayLight = hours > 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    console.log(hours, minutes, seconds);
    time.innerHTML = `${hours}:${minutes}:${seconds} ${dayLight}`;
    dates.innerHTML = `${date}-${months[month]}-${year}`;
}
setInterval(mytime, 500);



