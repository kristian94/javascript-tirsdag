

var table = document.createElement("table");

document.body.appendChild(table);

var thr = document.createElement("tr");

var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");
var th4 = document.createElement("th");

th1.innerHTML = "Name";
th2.innerHTML = "Age";
th3.innerHTML = "Gender";
th4.innerHTML = "Hobbies";

thr.appendChild(th1);
thr.appendChild(th2);
thr.appendChild(th3);
thr.appendChild(th4);

table.appendChild(thr);

document.getElementById("btn").onclick = function () {

    var name;
    var age;
    var gender;
    var hobbies = [];

    name = document.getElementById("name").value;
    age = document.getElementById("age").value;

    if (document.getElementById("male").checked)
        gender = "male";
    else
        gender = "female";

    if (document.getElementById("fishing").checked)
        hobbies.push("Fishing");
    if (document.getElementById("hiking").checked)
        hobbies.push("Hiking");
    if (document.getElementById("stamps").checked)
        hobbies.push("Collecting Stamps");

    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Gender: " + gender);
    console.log("Hobbies: " + hobbies);

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.innerHTML = name;
    td2.innerHTML = age;
    td3.innerHTML = gender;
    td4.innerHTML = hobbies;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);


};



