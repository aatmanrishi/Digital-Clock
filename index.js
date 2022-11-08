setInterval(currentTime,1000);

function currentTime(){
let time = new Date();
let date = time.getDate();
let day = time.getDay();
let month = time.getMonth();
let hour = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
let year = time.getFullYear();
let am_pm = 'pm';
if(hour ==12){
    am_pm = "pm"
}else if(hour >= 12){
    am_pm = "pm"
}else if(hour == 0){
    am_pm = "am"
}else{
    am_pm = "am";
}
let weaks = ['Mondy','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
let Months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
let exactDay = weaks[day-1];
let exactMonth = Months[month];
let CurrentDay = `${exactDay}, ${date}, ${exactMonth}, ${year}`;
let CurrentTime = `${hour}hrs : ${min}min : ${sec}s ${am_pm}`;
let  clock = document.getElementById('currentDay');
let Day = document.getElementById('currentTime');
clock.innerText = CurrentTime;
Day.innerText = CurrentDay ;

}

currentTime();
