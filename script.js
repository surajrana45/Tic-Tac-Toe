let music = new Audio("computerwav-14702.mp3");
let reset = document.getElementById("reset");
let image = document.getElementById("wonImg");

let Turn = "X";
let gameOver = false;

function changeTurn() {
  return Turn == "X" ? "0" : "X";
}

// Function to check win

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      image.style.width = "19vw";
      gameOver = true;
    }
  });
};

// Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = Turn;
      Turn = changeTurn();
      music.play();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + Turn;
      }
    }
  });
});
//Add click listener to reset Button

reset.addEventListener("click", () => {
  let boxtext = document.getElementsByClassName("boxText");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  Turn = "X";
  gameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
  image.style.width = "0vw";
});
