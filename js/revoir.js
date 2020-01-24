localStorage.getItem("Expressions");
var listCrExp = localStorage.getItem("listCrExp").split(" ,");
var listFrTrad= localStorage.getItem("listFrTrad").split(".,")
var listLitTrad= localStorage.getItem("listLitTrad").split(".,")

console.log(listFrTrad)

for (let i =0; i<listCrExp.length; i++) {
let expression = document.createElement("div");
document.getElementById("list-exp").appendChild(expression);
expression.classList.add("list-element");
expression.innerHTML = `<div> <h1>${listCrExp[i]}</h1><i>${listLitTrad[i]}</i><br>${listFrTrad[i]}</div>`;
}
