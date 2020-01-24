var dropeZone = document.querySelectorAll(".grid-item");
var blocks = document.querySelectorAll(".block");
var words = document.querySelectorAll(".word");
var answerPlaceholder = document.querySelector(".answer-placeholder");
var wordsPlaceholder = document.querySelector(".words-placeholder");
var answerBlocks = document.querySelectorAll(".grid-item .block");
var scorePlaceholder = document.getElementById("score");
var fTradPlaceholder = document.querySelector(".f-trad-placeholder h2");
var playZone = document.querySelector(".play-zone");

var scoreTot = 0;
var scoreSeq = 2;
var tour = 0;


dropeZone.forEach(zone => {
  zone.addEventListener("dragover", function(e) {
    e.preventDefault(); // Annule l'interdiction de drop
  });
});

document.querySelectorAll(".words-placeholder .grid-word").forEach(item => {
  item.addEventListener("dragover", function(e) {
  e.preventDefault(); // Annule l'interdiction de drop
  });
})

var dndHandler = {
  draggedElement: null,

  applyDragEvents: function(element) {
    element.draggable = true;
    element.ondragstart = function(e) {
      dndHandler.draggedElement = e.target;
      e.dataTransfer.setData("text/plain", "");

      document.querySelectorAll(".grid-item").forEach(zone => {
        zone.ondrop = function() {
          if(zone.childElementCount == 0) {
          let draggedElement = dndHandler.draggedElement,
            clonedElement = draggedElement.cloneNode(true);
          zone.appendChild(clonedElement);
          draggedElement.parentNode.removeChild(draggedElement);
          dndHandler.moveBlocks(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()
          }
        };
      });
      document.querySelectorAll(".grid-word").forEach(item => {
        item.ondrop = function() {
          let draggedElement = dndHandler.draggedElement,
            clonedElement = draggedElement.cloneNode(true);
          item.appendChild(clonedElement);
          draggedElement.parentNode.removeChild(draggedElement);
          dndHandler.moveBlocks(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()
        };
      })
    }
  },

  //     wordsPlaceholder.ondrop = function() {
  //       let draggedElement = dndHandler.draggedElement,
  //       clonedElement = draggedElement.cloneNode(true);
  //       wordsPlaceholder.appendChild(clonedElement);
  //       draggedElement.parentNode.removeChild(draggedElement);
  //       dndHandler.moveBlocks(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()
  //     };
  //   };
  // },

  moveBlocks: function(element) {
    element.ondragstart = function(e) {
      dndHandler.draggedElement = e.target;
      e.dataTransfer.setData("text/plain", "");
      dropeZone.forEach(zone => {
        zone.ondrop = function() {
          let draggedElement = dndHandler.draggedElement,
            clonedElement = draggedElement.cloneNode(true);
          zone.appendChild(clonedElement);
          draggedElement.parentNode.removeChild(draggedElement);
          dndHandler.moveBlocks(clonedElement);
        };
      });
    };
  },

};

function validateAnswer() {
  var answer = "";
  document.querySelectorAll(".grid-item .block .word").forEach(item => {
    answer += `${item.innerText} `;
    if (answer.toLowerCase() == currentExpression.crExp.toLowerCase()) { setTimeout (correctAnswer,500)}
    else if (answer.length == currentExpression.crExp.length ){setTimeout (wrongAnswer,300)}
  });
}

function correctAnswer () {
        document
        .querySelectorAll(".grid-item .block")
        .forEach(block => (block.parentNode.removeChild(block)));
      scoreTot += Math.max(scoreSeq, 1);
      scorePlaceholder.innerText =`Score : ${scoreTot}`;
      document.querySelector("#correct-answer").play();
      discloseAnswer();
      setTimeout(refreshPage,3000);
}

function wrongAnswer () {
        console.log(answerPlaceholder);
        answerPlaceholder.classList.add("wrong-answer");
        document.querySelector("#wrong-answer").play();
        setTimeout(function(){answerPlaceholder.classList.remove("wrong-answer")} , 500);
        console.log(answerPlaceholder);
}

function discloseAnswer (){
        answerPlaceholder.classList.add("block");
        answerPlaceholder.style.backgroundColor = "#208075";
        answerPlaceholder.innerText = currentExpression.crExp;
        let litTrad = document.createElement("div");
        playZone.appendChild(litTrad);
        litTrad.innerText = currentExpression.litTrad;
        litTrad.classList.add("disclosure-lit-trad");
}

function disclosePlaces() {
  let place = -1;
  scoreSeq --;
  document.querySelectorAll(".grid-item .block .word").forEach(word => {
    place++;
    let mot = word.innerText.toLowerCase();
    let index = currentExpression.seqMots.indexOf(mot);
    if (place !== index) {
      word.parentElement.style.backgroundColor = "#600613";
    } else {
      word.parentElement.style.backgroundColor = "#208075";
    }
  });
}

blocks.forEach(block => dndHandler.applyDragEvents(block));

answerPlaceholder.ondrop = function () {
  document.querySelector("#place").play();
  validateAnswer();
};

document.querySelector(".fa-eye").onclick = disclosePlaces;
document.querySelector(".fa-forward").onclick = function(){
  document.querySelectorAll(".grid-word").forEach(item=> item.parentElement.removeChild(item));
  discloseAnswer();
  setTimeout(refreshPage,3000);
}

  // block.onmouseout = function() {
  //       block.querySelector(".hint").style.visibility = "hidden";
  //     };
// New game

function refreshPage () {
        fTradPlaceholder.innerHTML ="";
        // words.forEach(word.innerHTML ="") ;
        scoreSeq = 2 ;
        answerPlaceholder.innerHTML = "";
        answerPlaceholder.classList.toggle("block");
        answerPlaceholder.style.backgroundColor = "rgba(0, 0, 0, 0.295)";
        let litTrad = document.querySelector(".disclosure-lit-trad")
        litTrad.parentElement.removeChild(litTrad);
        tour ++;
        document.querySelectorAll(".grid-word").forEach(item=> item.parentElement.removeChild(item));
        fillPage ();
}

var newCollection = shuffle(collection);
var questionCollection = [];
var currentExpression;
// console.log ("question:",questionCollection,"new:", newCollection, "-------------");

function addBlocks () {
  let nbMots = currentExpression.mots.length;
  let newmots = shuffle(currentExpression.mots);
  wordsPlaceholder.querySelectorAll(".grid-word").forEach(item =>{
    let newBlock = document.createElement("div");
    item.appendChild(newBlock);
    newBlock.classList.add("block");
    let newWord = document.createElement("div");
    newBlock.appendChild(newWord);
    newWord.classList.add("word");
    newWord.innerText= `${newmots[0].mot}`;
    let newIndice= document.createElement("div");
    newBlock.appendChild(newIndice);
    newIndice.classList.add("hint");
    newIndice.innerText= `${newmots[0].indice}`;
    newmots.shift();
  }) 
  }

// function fillBlocks (){
//   let newmots = shuffle(currentExpression.mots);
//   console.log(newmots);
//   console.log(newmots[0]);
//   console.log(newmots[0].mot);
//   blocks.forEach(block => {
//     block.innerHTML = `${newmots[0].mot}`;
//     newmots.shift();
//   })
// };

function fillGrid (){
  let nbMots = currentExpression.mots.length;
  answerPlaceholder.style.gridTemplateColumns = `repeat(${nbMots}, 1fr)`;
  wordsPlaceholder.style.gridTemplateColumns = `repeat(${nbMots}, 1fr)`;
  for (let i=0; i < nbMots; i++){
    let newGridItem = document.createElement("div");
    answerPlaceholder.appendChild(newGridItem);
    newGridItem.classList.add("grid-item");
    let newGridWord= document.createElement("div");
    wordsPlaceholder.appendChild(newGridWord);
    newGridWord.classList.add("grid-word");
    }
  }
var listCrExp =[];
var listFrTrad =[];
var listLitTrad =[];

function fillPage (){
  currentExpression = newCollection[0];
  fTradPlaceholder.innerText = newCollection[0].frTrad;
  questionCollection.push(newCollection[0]);
  listCrExp.push(newCollection[0].crExp);
  listLitTrad.push(newCollection[0].litTrad);
  listFrTrad.push(newCollection[0].frTrad);
  newCollection.shift()
  // console.log ("question:",questionCollection,"new:", newCollection, "-------------");
  fillGrid ();
  addBlocks();
  document.querySelectorAll(".grid-item").forEach(item => {
    item.addEventListener("dragover", function(e) {
      e.preventDefault(); // Annule l'interdiction de drop
    });
  });
  document.querySelectorAll(".words-placeholder .grid-word").forEach(item => {
    item.addEventListener("dragover", function(e) {
    e.preventDefault(); // Annule l'interdiction de drop
    });
  })

  document.querySelectorAll(".words-placeholder .block").forEach(block => {
      dndHandler.applyDragEvents(block)});
  localStorage.setItem("listCrExp", listCrExp);
  localStorage.setItem("listFrTrad", listFrTrad);
  localStorage.setItem("listLitTrad", listLitTrad);
}


// {
//   crExp: "Anba latè, pa ni plézi ",
//   litTrad: "Sous terre, il n'y a pas de plaisir.",
//   frTrad: "Carpe Diem",
//   seqMots: ["anba","latè", "pa", "ni", "plézi"],
//   mots: [{ mot: "Anba", indice: "Sous" },{ mot: "Latè", indice: "La terre" },{ mot: "Pa", indice: "Marque la négation" },{ mot: "Ni", indice: "Il y a" },{ mot: "Plézi", indice: "Plaisir" }]
// },
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
// Chronometer
class Chronometer {
        constructor() {
          this.currentTime = 5 ;
          this.intervalId;
        }
      
        startClick(clbk1, clbk2) {
          this.intervalId = setInterval( () => {
            let time = this.currentTime --;
            let minutes = (this.twoDigitsNumber(this.getMinutes()));
            let seconds = (this.twoDigitsNumber (this.getSeconds()));
            if (time <= 5){ clbk1(time)
            } else { clbk2(minutes, seconds) };
            if (time == 0) { 
              this.stopClick();
              localStorage.setItem("Total", scoreTot);
              window.location = "endGame.html"
            };
            }, 1000 );
        }
      
        getMinutes() {
          let timeInMinutes = this.currentTime / 60;
          return Math.trunc(timeInMinutes);
        }
        getSeconds() {
          return this.currentTime%60 ;
        }
      
        twoDigitsNumber(number) {
         let twoDigits = String(number);
         if(twoDigits.length ===1 ) return "0"+twoDigits;
         if(twoDigits.length > 1) return twoDigits;
        }
        stopClick() {
          clearInterval (this.intervalId)
        }
        resetClick() {
          this.currentTime = 0;
        }
      }
      
      var chronometer = new Chronometer();
      var circle = document.getElementById("circle2");
      var circle1 = document.getElementById("circle1");

      function printTime(argument1, argument2) {
          circle.innerText = `${argument1} : ${argument2} `
      }

      function printTimeRed(argument1) {
        circle.innerText = `${argument1}`;
        circle.style.color ="rgb(228, 71, 15)";
        circle.style.border = "2px dashed rgb(228, 71, 15)";
        circle1.style.border = "2px solid rgb(228, 71, 15)";
        circle1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        circle.style.fontWeight = "bolder";
        circle.style.fontSize = "60px";
    }
      
      
      // Start/Stop Button
      window.onload = function () {
          chronometer.startClick(printTimeRed, printTime);
          fillPage ();
        }

// localStorage.setItem("scoreTot");



