var divs = document.getElementsByTagName("DIV");
console.log(divs.length);



divs[0].onclick = function(){
    console.log("clicked first div");
};
divs[1].onclick = function(){
    console.log("clicked second div");
};
divs[2].onclick = function(){
    console.log("clicked third div");
};

divs[0].onmouseover = function(){
    divs[0].innerHTML = "hey";
};
divs[1].onmouseover = function(){
    divs[1].innerHTML = "hello";
};
divs[2].onmouseover = function(){
    divs[2].innerHTML = "how are you?";
};

divs[0].onmouseleave = function(){
    divs[0].innerHTML = "";
};
divs[1].onmouseleave = function(){
    divs[1].innerHTML = "";
};
divs[2].onmouseleave = function(){
    divs[2].innerHTML = "";
};

