function makeNumHour(){
    var toAddHour = document.createDocumentFragment();
    for(var i=0; i<60; i++){
        var newDiv = document.createElement("div");
        newDiv.id = +i;
        newDiv.className = "Hours";
        toAdd.app(newDiv);
    }
    document.appendChild(toAddHour)
}

function makeNumMin(){
    var toAddMin = document.createDocumentFragment();
    for(var i=0; i<60; i++){
        var newDiv = document.createElement("div");
        newDiv.id = +i;
        newDiv.className = "Min";
        toAdd.app(newDiv);
    }
    document.appendChild(toAddMin)
}