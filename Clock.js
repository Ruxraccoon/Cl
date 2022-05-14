const divContainer = document.getElementById("divContainer");
const divContainer2 = document.getElementById("divContainer2");

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
            console.log("add")
            divContainer2.appendChild(newDiv)
        }
        else{
            newDiv.innerHTML = i
            divContainer2.appendChild(newDiv)
            console.log("add")
        }
    }
}

makeNumHour()
makeNumMin()
