console.log("aa")



let button = document.getElementById("button");
let hex = document.getElementById("hex");
let body =document.getElementById("body");



button.addEventListener("click",changeColor);






function changeColor(){
    let random = Math.floor(Math.random()*16777215).toString(16);
    let rcolor = "#"+random;               
    
    body.style.backgroundColor =rcolor;
    hex.innerHTML=rcolor;


}