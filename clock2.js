window.onload = function () {
var seconds = 0
var tens = 0
var getTens = document.getElementById("tens")
var getseconds = document.getElementById("seconds")
var Start = document.getElementById("start")
var Stop = document.getElementById("stop")
var Reset = document.getElementById("reset")
var interval;
Start.onclick = function () {
 interval = setInterval(startTimer,10);
}
Stop.onclick = function () {
 clearInterval(interval);
}
Reset.onclick = function () {
 clearInterval(interval);
tens = "00";
seconds = "00";
getseconds.innerHTML = seconds;
gettens.innerHTML = tens;
}
 function startTimer() {
tens++;
if ( tens < 0 ) {
getTens.innerHTML = "0" + tens;
}
if ( tens < 9 ) {
 getTens.innerHTML = tens;
}
if ( tens > 99 ) {
tens++
getTens.innerHTML =  "0" + tens;
tens = 0;
getTens.innerHTML = "0" 
}
if(seconds > 9) {
getSeconds.innerHTML = seconds;
}
}
}