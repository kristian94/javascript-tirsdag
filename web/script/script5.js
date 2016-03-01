var hidden;
var displayed;

var divs = document.getElementsByTagName("div");
for (var i = 1, max = divs.length-1; i < max; i++) {
    
    
    (function(i){
        divs[i].onclick = function(){
            if(displayed !== undefined)displayed += divs[i].innerHTML;
            else displayed = divs[i].innerHTML;
            update();
        };
    })(i);
}

var update = function(){
    //var n = document.createTextNode(displayed);
    document.getElementById("display").innerHTML = displayed;
    hidden = (eval(displayed));
};

var eq = document.getElementById("equal").onclick = function(){
    document.getElementById("display").innerHTML = hidden;
    displayed = hidden;
};