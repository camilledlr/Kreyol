
console.log(localStorage.getItem("Total"));


var scoreTot = localStorage.getItem("Total");
document.querySelector(".display-score h2").innerText = `Score : ${scoreTot}`;

document.querySelector("aside").onclick = function() {
    window.location = "revoir.html"
}
document.getElementById("restart").onclick = function() {
    window.location = "index.html"
}
