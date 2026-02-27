<!DOCTYPE html>
<html>
<head>
    <title>Position Practice</title>
</head>
<body>

<div id="parent" style="position: relative; width: 600px; height: 400px; border: 3px solid black; margin: 30px;">
    
    <div id="myBox">
        Aakash Sharma
    </div>

</div>

<br>

<button onclick="toggleDisplay()">Toggle Display</button>
<button onclick="toggleBoxSizing()">Toggle BoxSizing</button>

<script>

let box = document.getElementById("myBox");
let parent = document.getElementById("parent");

box.style.width = "200px";
box.style.height = "100px";
box.style.padding = "20px";
box.style.border = "3px solid blue";
box.style.boxShadow = "8px 8px 8px gray";
box.style.backgroundColor = "lightblue";
box.style.position = "absolute";
box.style.top = "100px";
box.style.left = "200px";
box.style.zIndex = "1";

let box2 = document.createElement("div");
box2.innerText = "On Top";
box2.style.width = "200px";
box2.style.height = "100px";
box2.style.backgroundColor = "red";
box2.style.position = "absolute";
box2.style.top = "120px";
box2.style.left = "220px";
box2.style.zIndex = "2";
parent.appendChild(box2);

let box3 = document.createElement("div");
box3.innerText = "Top Right";
box3.style.width = "100px";
box3.style.height = "80px";
box3.style.backgroundColor = "green";
box3.style.position = "absolute";
box3.style.top = "20px";
box3.style.right = "20px";
parent.appendChild(box3);

let box4 = document.createElement("div");
box4.innerText = "Bottom Left";
box4.style.width = "100px";
box4.style.height = "80px";
box4.style.backgroundColor = "pink";
box4.style.position = "absolute";
box4.style.bottom = "20px";
box4.style.left = "20px";
parent.appendChild(box4);

let box5 = document.createElement("div");
box5.innerText = "Inset Box";
box5.style.width = "100px";
box5.style.height = "80px";
box5.style.backgroundColor = "orange";
box5.style.position = "absolute";
box5.style.inset = "150px 40px auto auto";
parent.appendChild(box5);

let styledBox = document.createElement("div");
styledBox.innerText = "Border & Background Practice";
styledBox.style.width = "250px";
styledBox.style.height = "150px";
styledBox.style.padding = "20px";
styledBox.style.marginTop = "20px";
styledBox.style.color = "white";
styledBox.style.fontWeight = "bold";

styledBox.style.borderTop = "5px solid red";
styledBox.style.borderRight = "5px dashed blue";
styledBox.style.borderBottom = "5px dotted green";
styledBox.style.borderLeft = "5px double purple";

styledBox.style.borderRadius = "20px";
styledBox.style.borderTopLeftRadius = "40px";
styledBox.style.borderBottomRightRadius = "40px";

styledBox.style.background = "#363640";
styledBox.style.background = "linear-gradient(90deg, rgba(54, 54, 64, 1) 0%, rgba(9, 9, 121, 1) 60%, rgba(0, 212, 255, 1) 100%)";

styledBox.style.outline = "4px solid black";
styledBox.style.outlineOffset = "10px";

document.body.appendChild(styledBox);

function toggleDisplay() {
    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

box.style.boxSizing = "content-box";

function toggleBoxSizing() {
    if (box.style.boxSizing === "content-box") {
        box.style.boxSizing = "border-box";
    } else {
        box.style.boxSizing = "content-box";
    }
}

let para = document.createElement("p");
para.innerText = "this is my assignment , given by sonu sir";

para.style.fontFamily = "Arial, sans-serif";
para.style.fontSize = "22px";
para.style.fontWeight = "bold";

para.style.textTransform = "uppercase";
para.style.textDecoration = "underline line-through";

para.style.letterSpacing = "3px";
para.style.wordSpacing = "10px";

para.style.textShadow = "3px 3px 5px blue";

para.style.marginTop = "40px";

document.body.appendChild(para);

let span1 = document.createElement("span");
span1.innerText = "Normal Text ";

let span2 = document.createElement("span");
span2.innerText = "Vertical Align Text";
span2.style.fontSize = "30px";
span2.style.color = "red";
span2.style.verticalAlign = "super"; 

let container = document.createElement("div");
container.style.marginTop = "20px";

container.appendChild(span1);
container.appendChild(span2);

document.body.appendChild(container);

</script>

</body>
</html>
