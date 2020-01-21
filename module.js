var dropeZone = document.querySelectorAll(".grid-item");
var blocks = document.querySelectorAll(".block");
var words = document.querySelectorAll(".word");
var answerPlaceholder = document.querySelector(".answer-placeholder");
var wordsPlaceholder = document.querySelector(".words-placeholder");
var answerBlocks = document.querySelectorAll(".grid-item .block");
var scorePlaceholder = document.getElementById("score");
var fTradPlaceholder = document.querySelector(".f-trad-placeholder");
var playZone = document.querySelector(".play-zone");

var Exp1 = {
  expression: "Bèf douvan bwè dlo klè",
  seqMots: ["bèf", "douvan", "bwè", "dlo", "klè"],
  mots: [
    { mot: "Bèf",indice: "Boeuf" },
    { mot: "Douvan",indice: "Devant" },
    { mot: "Bwè",indice: "Boire" },
    { mot: "Dlo",indice: "Eau" },
    { mot: "Klè",indice: "Claire" }
  ]
};

var scoreTot = 0;
var scoreSeq = 2;


dropeZone.forEach(zone => {
  zone.addEventListener("dragover", function(e) {
    e.preventDefault(); // Annule l'interdiction de drop
  });
});

var dndHandler = {
  draggedElement: null,

  applyDragEvents: function(element) {
    element.ondragstart = function(e) {
      dndHandler.draggedElement = e.target;
      e.dataTransfer.setData("text/plain", "");

      dropeZone.forEach(zone => {
        zone.ondrop = function() {
          let draggedElement = dndHandler.draggedElement,
            clonedElement = draggedElement.cloneNode(true);
          zone.appendChild(clonedElement);
          draggedElement.style.visibility = "hidden";
          dndHandler.moveBlocks(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()
          
        };
      });
    };
  },
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
    if (answer.toLowerCase() == "bèf douvan bwè dlo klè ") { setTimeout (correctAnswer,500)}
    else if (answer.length === 23) {setTimeout (wrongAnswer,300)}
  });
}

function correctAnswer () {
        document
        .querySelectorAll(".grid-item .block")
        .forEach(block => (block.parentNode.removeChild(block)));
      scoreTot = Math.max(scoreSeq, 1);
      scorePlaceholder.innerText =`Score : ${scoreTot}`;
      discloseAnswer();
      setTimeout(refreshPage,1000);
}

function wrongAnswer () {
        console.log(answerPlaceholder);
        answerPlaceholder.classList.add("wrong-answer")
        setTimeout(function(){answerPlaceholder.classList.remove("wrong-answer")} , 500);
        console.log(answerPlaceholder);
}

function discloseAnswer (){
        answerPlaceholder.classList.add("block");
        answerPlaceholder.style.backgroundColor = "#208075";
        answerPlaceholder.innerText = "Bèf douvan bwè dlo klè";
        let litTrad = document.createElement("div");
        playZone.appendChild(litTrad);
        litTrad.innerText = "Le premier boeuf boit de l'eau clair";
        litTrad.classList.add("disclosure-lit-trad");
}

function disclosePlaces() {
  let place = -1;
  scoreSeq --;
  console.log(score);
  document.querySelectorAll(".grid-item .block").forEach(block => {
    place++;
    let mot = block.querySelector(".word").innerText.toLowerCase();
    let index = Exp1.seqMots.indexOf(mot);
    if (place !== index) {
      block.style.backgroundColor = "#600613";
    } else {
      block.style.backgroundColor = "#208075";
    }
  });
}

blocks.forEach(block => dndHandler.applyDragEvents(block));

answerPlaceholder.ondrop = validateAnswer;

document.querySelector(".fas").onclick = disclosePlaces;

blocks.forEach(block => {
  block.onmouseover = function() {
    let text = block.innerText.toLowerCase();
    let i = Exp1.seqMots.indexOf(text);
    block.querySelector(".hint").style.visibility = "visible";
    block.querySelector(".hint").innerText = `${Exp1.mots[i].indice}`
  };
  block.onmouseout = function() {
        block.querySelector(".hint").style.visibility = "hidden";
      };
});
// New game

function refreshPage () {
        fTradPlaceholder.innerHTML ="";
        // words.forEach(word.innerHTML ="") ;
        scoreSeq = 2 ;
        answerPlaceholder.innerHTML = "";
        console.log("héhooo");
        answerPlaceholder.classList.toggle("block");
        answerPlaceholder.style.backgroundColor = "rgba(0, 0, 0, 0.295)";
        let litTrad = document.querySelector(".disclosure-lit-trad")
        litTrad.parentElement.removeChild(litTrad);
}


// Chronometer
class Chronometer {
        constructor() {
          this.currentTime = 120 ;
          this.intervalId;
        }
      
        startClick(clbk1, clbk2) {
          this.intervalId = setInterval( () => {
            let time = this.currentTime --;
            let minutes = (this.twoDigitsNumber(this.getMinutes()));
            let seconds = (this.twoDigitsNumber (this.getSeconds()));
            if (time <= 5){ clbk1(time)
            } else { clbk2(minutes, seconds) };
            if (time <= 0) { this.stopClick()};
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

      function printTime(argument1, argument2) {
          circle.innerText = `${argument1} : ${argument2} `
      }

      function printTimeRed(argument1) {
        circle.innerText = `${argument1}`;
        circle.style.color ="red"
        circle.style.fo;
    }
      
      
      // Start/Stop Button
      window.onload = function () {
          chronometer.startClick(printTimeRed, printTime);
        }
//       // Reset/Split Button
      
//       btnRight.onclick = function () {
//           if (btnRight.innerText=="SPLIT") {
//               splits.innerHTML+=`<li> ${minDec.innerText}${minUni.innerText}:${secDec.innerText}${secUni.innerText} </li>`
//           }
//           if (btnRight.innerText=="RESET") {
//               chronometer.currentTime = 0;
//               splits.innerHTML = "";
//               minDec.innerHTML =0;
//               minUni.innerHTML =0;
//               secDec.innerHTML =0;
//               secUni.innerHTML =0;
//       }
//       }

