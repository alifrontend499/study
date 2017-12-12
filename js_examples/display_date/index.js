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

var data = function(){
    var timeMain = "<p style='text-align:center;'>The time is <span style='color:purple'>" + hours + ":" + minutes + ":" + seconds + " " + meridian + "</span></p>";
    var timeMainTwo = + hours + ":" + minutes + ":" + seconds + " " + meridian;
    return timeMainTwo;
}

console.log(setInterval(data,1000));