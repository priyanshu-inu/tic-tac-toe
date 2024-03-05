let allBox = document.querySelectorAll(".box");
let resetAll = document.querySelector(".reset");
let newGame = document.querySelector(".new-game");
let msgNew = document.querySelector(".msgs-new");
let winMsg = document.querySelector(".win");
let hide = document.querySelector(".hide");

let turnO = true;

let wins = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

allBox.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerText = "O";
      turnO = false;
      box.disabled = true;
    } else {
      box.innerText = "X";
      box.disabled = true;
      turnO = true;
    }
    checkWinner();
  });
});

let showWinner = (posThree) => {
  winMsg.innerText = `Congratulation 🥳 Winner is ${posThree}`;
  hide.classList.remove("hide");
  disableBtn();
};

let match;

function checkWinner() {
  for (match of wins) {
    let posOne = allBox[match[0]].innerText;
    let posTwo = allBox[match[1]].innerText;
    let posThree = allBox[match[2]].innerText;

    if (posOne != "" && posTwo != "" && posThree != "") {
      if (posOne === posTwo && posTwo === posThree) {
        console.log("winner");
        showWinner(posThree);
      }
    }
  }
}

let resetGame = () => {
  console.log("work");
  turnO = true;
  enableBtn();
  msgNew.classList.add("hide");
};

let disableBtn = () => {
  for (let box of allBox) {
    box.disabled = true;
  }
};

let enableBtn = () => {
  for (let box of allBox) {
    box.disabled = false;
    box.innerText = "";
  }
};

newGame.addEventListener("click", resetGame);
resetAll.addEventListener("click", resetGame);
