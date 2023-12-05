console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let turnMusic = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let turn = "X";
let isgameOver = false;
let changeC = false;

//Function to change Turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//Function to chk for a win
const checkWin = () => {
  let boxTexts = document.getElementsByClassName("boxText");
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
      boxTexts[e[0]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[2]].innerText === boxTexts[e[1]].innerText &&
      boxTexts[e[0]].innerText !== ""
    ) {
      // Change the color only for the winning cells
      changeC = e.forEach((index) => {
        boxTexts[index].style.color = "red"; // Change to your desired color
      });

      //Describe the winner
      document.querySelector(".turn").innerText =
        boxTexts[e[0]].innerText + " Won";
      isgameOver = true;
      document
        .querySelector(".gameInfo")
        .getElementsByTagName("img")[0].style.width = "200px";
      turn = null;
      turnMusic.pause();
    }
  });
};

//Game logic
let boxes = document.getElementsByClassName("box"); //Getting each element from the boxText
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  //Method for clicking boxes when they are clicked
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn(); //Changing the turn value
      console.log(turn);
      turnMusic.play();
      checkWin(); //Calling win function to chk win
      if (!isgameOver) {
        document.querySelector(".turn").innerText = "Turn for: " + turn;
      }
    }
  });
});

//Add Listner to onclick to Reset Button
button.addEventListener("click", () => {
  let boxTexts = document.querySelectorAll(".boxText");
  Array.from(boxTexts).forEach((element) => {
    element.innerText = "";
    element.style.color = ""; //Set the color of the box text element null
  });
  turn = "X";
  isgameOver = false;
  document.getElementsByClassName("turn")[0].innerText = "Turn for: " + turn;
  document
    .querySelector(".gameInfo")
    .getElementsByTagName("img")[0].style.width = "0px";
});
