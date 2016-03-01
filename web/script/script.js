//var divs = document.getElementsByTagName("div");
//divs[0].style.backgroundColor = 'green';


var divs = document.getElementsByTagName("div");
divs[0].style.backgroundColor = "red";
divs[1].style.backgroundColor = "red";
divs[2].style.backgroundColor = "red";

var Person = function (firstName, lastName, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
};

var p1 = new Person("Bob", "Ross", 70707070, "br@mail.com");
var p2 = new Person("Jacque", "Ophf", 70747070, "jo@mail.com");
var p3 = new Person("Jill", "Goodacre", 70707570, "jg@mail.com");
var p4 = new Person("James", "Johnson", 80707070, "jj@mail.com");

var persons = [p1, p2, p3, p4];

var table = document.createElement("TABLE");
var body = document.getElementsByTagName("BODY");
body[0].appendChild(table);
var makePeeps = function () {
    persons.forEach(function (person) {
        var tr = document.createElement("TR");
        var data = [person.firstName, person.lastName, person.phone, person.email];
        for (var i = 0, max = 4; i < max; i++) {
            var td = document.createElement("TD");
            var node = document.createTextNode(data[i]);
            td.appendChild(node);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    });
};


