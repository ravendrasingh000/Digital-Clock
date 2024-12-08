let hr = document.querySelector("#hr");
let mins = document.querySelector("#mins");
let sec = document.querySelector("#sec");
let meridiem = document.querySelector(".meridiem");

document.addEventListener('DOMContentLoaded', function() {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // hours = hours%12 || 12;

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    hr.innerText = hours;
    mins.innerText = minutes;
    sec.innerText = seconds;

    meridiem.innerText = hours >= 12 ? "PM" : "AM";

};
