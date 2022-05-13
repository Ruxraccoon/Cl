function makeNumHour(){
    for(var i=0; i<60; i++){
        var newDiv = document.createElement("div");
        newDiv.id = +i;
        newDiv.className = "Hour";
        newDiv.innerHTML = i
        if (i < 10){
            newDiv.innerHTML = "0"+i
            console.log("add")
            document.body.appendChild(newDiv)
        }
        else{
            newDiv.innerHTML = i
            document.body.appendChild(newDiv)
            console.log("add")
        }
    }
}

function makeNumMin(){
    for(var i=0; i<60; i++){
        var newDiv = document.createElement("div");
        newDiv.id = +i;
        newDiv.className = "Min";
        if (i < 10){
            newDiv.innerHTML = "0"+i
            console.log("add")
            document.body.appendChild(newDiv)
        }
        else{
            newDiv.innerHTML = i
            document.body.appendChild(newDiv)
            console.log("add")
        }
    }
}

makeNumHour()
makeNumMin()
