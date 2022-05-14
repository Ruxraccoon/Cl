const divContainer = document.getElementById("divContainer");
const divContainer2 = document.getElementById("divContainer2");
var hID = [];
var mID = [];
var removeNum = []
var zeroNums = [1,2,3,11,13,21,23,31,33,41,43,51,52,53];
var oneNums = [1,2,12,22,32,42,51,52,53];
var twoNums = [1,2,3,13,23,22,21,31,41,51,52,53];
var threeNums = [1,2,3,13,23,22,21,33,43,53,52,51];
var fourNums = [3,12,21,23,13,33,43,53,31,32,34];
var fiveNums = [1,2,3,11,21,31,32,33,43,53,52,51];
var sixNums = [1,2,3,11,21,31,32,33,41,43,53,52,51];
var sevenNums = [1,2,3,13,23,33,43,53];
var eightNums = [1,2,3,11,13,21,23,31,32,33,41,43,51,52,53,22];
var nineNums = [1,2,3,11,13,21,22,23,33,43,53];
var numDic = [zeroNums,oneNums,twoNums,threeNums,fourNums,
fiveNums,sixNums,sevenNums,eightNums,nineNums]
var getTime = new Date();
let hour = getTime.getHours();
let min = getTime.getMinutes();
let sec = getTime.getSeconds();

function genRemove(){
    for(var i=0; i<60; i++){
        removeNum.push(i)
    }
}

function makeNumHour(){
    for(var i=0; i<60; i++){
        var newDiv = document.createElement("div");
        newDiv.id = "h"+i;
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

function opacitySet(ID){
    setInterval(function(){
        for(var i=0; i<60; i++){
            document.getElementById(ID[i])
            .classList.add("opacity");
        }
    },1000)
}

function changeColor(position){
    document.getElementById(position)
    .classList.add("colorChange1");
    document.getElementById(position)
    .classList.add("bold");
}

function remove(position){
    document.getElementById(position)
    .classList.remove("colorChange1");
    document.getElementById(position)
    .classList.remove("bold")
}

function reset(ID){
    var length = removeNum.length

    for (var i=0; i<length; i++){
        remove(ID[removeNum[i]])
    }
}

function draw(position,NumArray,ID){
    var length = NumArray.length
    if (position === 0 ){
        for (var i=0; i<length; i++){
            changeColor(ID[NumArray[i]])
        }
    }
    else{
        for (var i=0; i<length; i++){
            changeColor(ID[NumArray[i]+5])
        }
    }
}

function displayHour(){

    setInterval(function(){
        reset(hID)
        if(hour<10){
            draw(0,zeroNums,hID)
            draw(1,numDic[hour],hID)
        }
        else{
            var digits = (""+hour).split("");
            draw(0,numDic[digits[0]],hID)
            draw(1,numDic[digits[1]],hID)
        }
    },1000)
}

function displayMins(){

    setInterval(function(){
        reset(mID)
        if(min<10){
            draw(0,zeroNums,mID)
            draw(1,numDic[min],mID)
            reset(numDic[0])
            reset(numDic[min])
        }
        var digits = (""+min).split("");
        draw(0,numDic[digits[0]],mID)
        draw(1,numDic[digits[1]],mID)
    },1000)
}

function opacitySec(){

   setInterval(function(){
       for(var i=0; i<sec+1; i++){
        document.getElementById(mID[i])
        .classList.remove("opacity");
       }
   },1000)
}
function opacityMin(){

    setInterval(function(){
        for(var i=0; i<min+2; i++){
         document.getElementById(hID[i])
         .classList.remove("opacity");
        }
    },1000)
 }
 
genRemove()
makeNumHour()
makeNumMin()
genHours()
genMins()
updateTime()
opacitySet(hID)
opacitySet(mID)
displayHour()
displayMins()
opacitySec()
opacityMin()


