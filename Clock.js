const divContainer = document.getElementById("divContainer");
const divContainer2 = document.getElementById("divContainer2");
var hID = [];
var mID = [];
var getTime = new Date();
let hour = getTime.getHours();
let min = getTime.getMinutes();
let sec = getTime.getSeconds();
let test = 0;

function makeNumHour(){
    for(var i=0; i<60; i++){
        var newDiv = document.createElement("div");
        newDiv.id = "h"+i;
        newDiv.className = "hourItem";
        newDiv.innerHTML = i
        if (i < 10){
            newDiv.innerHTML = "0"+i
            console.log("add")
            divContainer.appendChild(newDiv)
        }
        else{
            newDiv.innerHTML = i
            divContainer.appendChild(newDiv)
            console.log("add")
        }
    }
}

function makeNumMin(){
    for(var i=0; i<60; i++){
        var newDiv = document.createElement("div");
        newDiv.id = "m"+i;
        newDiv.className = "minItem";
        if (i < 10){
            newDiv.innerHTML = "0"+i
            divContainer2.appendChild(newDiv)
        }
        else{
            newDiv.innerHTML = i
            divContainer2.appendChild(newDiv)
        }
    }
}

function genHours(){
    for(var i=0; i<60; i++){
        var newID = "h"+i;
        hID.push(newID);
    }
}

function genMins(){
    for(var i=0; i<60; i++){
        var newID = "m"+i;
        mID.push(newID);
    }
}

function updateTime(){
    setInterval(function(){

        if (sec <59){
            sec ++;
        }
        else if (sec > 58 && min <59){
            min++
            sec = 00
        }
        else if (min > 58 && hour <12){
            min = 0;
            sec = 0;
            sec++;
            hour++
        }
        else if(hour === 12 && min === 59){
            hour = 0;
            min = 0;
            sec = 0;
            sec++;
            hour++
        }
    }, 1000);
}


makeNumHour()
makeNumMin()
genHours()
updateTime()
