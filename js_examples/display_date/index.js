function displayDate() {
    var hours, minutes, seconds, meridian, secData = "";
    //DATE
    var d = new Date();
    //HOURS
    hours = d.getHours();
    if (hours > 12) {
        hours = hours - 12;
    }
    //MINUTES
    minutes = d.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    //SECONDS
    seconds = d.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    secData += seconds;
    //HOURS
    if (hours >= 12) {
        meridian = "PM";
    } else {
        meridian = "AM";
    }
    //DISPLAY DATE
    var dateElem = document.getElementById("date");
    var timeElem = document.getElementById("time");
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    dateElem.innerHTML = "Today is <span style='color:red'>" + days[d.getDay()] + "</span><br>";
    timeElem.innerHTML = "Current time is <span style='color:red'>" + hours + ":" + minutes + ":" + secData + " " + meridian + " </span>";
}
setInterval(displayDate, 1000);
