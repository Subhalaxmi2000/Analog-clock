var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var Analogclock = document.getElementById("Analogclock");



function setClockTime(){
  const day = new Date();
  const hh = day.getHours(); //0-23
  const mm = day.getMinutes(); //0-59
  const ss = day.getSeconds();  //0-59

  const hourDeg = (hh * 30) + (mm * 0.5);
  const minuteDeg = (mm * 6) ;
  const secondDeg = (ss * 6);


  hour.style.transform = `rotatez(${hourDeg}deg)`;
  minute.style.transform = `rotatez(${minuteDeg}deg)`;
  second.style.transform = `rotatez(${secondDeg}deg)`;
}

setClockTime();

setInterval(setClockTime,1000);
















