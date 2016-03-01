var ul = document.createElement("ul");
var persons = ["Bob", "Jan", "Jonas", "Thomas", "Simon", "Lasse", "Alex", "Nicole", "Helle", "Benny"];

var clickMe = function (element) {
    console.log("Greetings, " + element.innerHTML);
};

for (var i = 0, max = 10; i < max; i++) {
    (function (i) {
        var node = document.createTextNode(persons[i]);
        var li = document.createElement("li");
        li.appendChild(node);
        li.onclick = function () {
            clickMe(li);
        };
        li.onmouseover = function(){
            li.style.lineHeight = 2.3;
        };
        li.onmouseleave = function(){
            li.style.lineHeight = 1.15;
        };
        if (i % 2 === 0)
            li.style.backgroundColor = "orange";
        
        else
            li.style.backgroundColor = "green";
        ul.appendChild(li);
    })(i);
}

var b = document.getElementsByTagName("body");
b[0].appendChild(ul);

