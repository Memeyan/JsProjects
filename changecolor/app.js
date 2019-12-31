let button = document.getElementById("button");
let body = document.getElementById("body");




button.addEventListener("click", changeColor);


function changeColor() {
    let color = ["red", "blue", "yellow", "white"]
    let i = Math.floor(Math.random() * 5)
    body.style.backgroundColor = color[i];
}