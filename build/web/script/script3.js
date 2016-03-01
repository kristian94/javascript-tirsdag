var formSub = function(){
    console.log("hey");
    var n = document.createTextNode("Some text");
    var p = document.createElement("p");
    p.appendChild(n);
    document.getElementsByTagName("body")[0].appendChild(p);
    
};

