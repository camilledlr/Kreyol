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
},10000)

document.getElementById("skip-rules").onclick = function (){
    let level = localStorage.getItem("level");
    if (level == "Facile") window.location = "./jeuFacile.html";
    if (level == "Moyen") window.location = "./jeuMoyen.html";
    if (level == "Difficile") window.location = "./jeuDifficile.html";
}


