// function delaydisplay;

function hideElement (element) {
    element.classList.add("hide");
};

function displayElement (element) {
    element.classList.remove("hide");
}
function displayElement2 (element) {
    element.style.display = "inline";
}
var intro = document.querySelector("#intro");
var consigne = document.querySelector("#consigne");
var vidéo = document.querySelector("video");
var explanations = document.querySelectorAll(".icn-explanation")

setTimeout(function(){
    hideElement(intro);
    displayElement(consigne);
},5000)

setTimeout(function(){
    hideElement(vidéo);
    explanations.forEach(exp => displayElement2(exp));
},5000)

document.getElementById("skip-rules").onclick = function (){
    window.location = "./jeu.html"
}


