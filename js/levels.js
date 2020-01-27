var level ;

var icons = document.querySelectorAll(".level");

icons.forEach(button => button.onclick = function (e) {
    level = e.target.parentNode.querySelector("h2").innerText;
    localStorage.setItem("level", level);
    window.location = "rules-facile.html";
}
)