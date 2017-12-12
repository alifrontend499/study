var hours,minutes,seconds,meridian;
var d = new Date();

hours = d.getHours();

if(hours > 12){
	hours = hours - 12;	
}

minutes = d.getMinutes();
if(minutes < 10){
	minutes = "0" + minutes;
}

seconds = d.getSeconds();
    if(seconds < 10){
    seconds = "0" + seconds;
}
if(hours >= 12){
	meridian = "AM";
} else{
	meridian = "PM";
}

var days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
document.write("Today is <span style='color:red'>" + days[d.getDay()] + "</span><br>");
document.write("Current time is <span style='color:red'>" + hours + meridian + ":" + minutes + ":" + seconds + "</span>");