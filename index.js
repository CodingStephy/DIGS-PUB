
function addTime(){
    var timeEl = document.getElementById("time-el")
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    timeEl.innerText = dateTime
}

function appear(){
    var numberEl = document.getElementById("number")
    var numberEl2 = document.getElementById("number2")
    numberEl.style.display ='block';
    numberEl2.style.display ='block';
}

function disappear(){
    var numberEl = document.getElementById("number")
    var numberEl2 = document.getElementById("number2")
    numberEl.style.display ='none';
    numberEl2.style.display ='none';
}