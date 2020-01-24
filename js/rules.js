// function delaydisplay;

function hideElement (element) {
    element.classList.add("hide");
};

function displayElement (element) {
    element.classList.remove("hide");
}
var intro = document.querySelector("#intro");
var consigne = document.querySelector("#consigne");
var vidéo = document.querySelector("video");

setTimeout(function(){
    hideElement(intro);
    displayElement(consigne);
    displayElement(vidéo);
},5000)

setTimeout(function(){
    hideElement(vidéo);
},15000)

document.getElementById("skip-rules").onclick = function (){
    window.location = "./jeu.html"
}


