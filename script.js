let gridSize = 200;
let squareSize = 100 / 16;
let buttonWidth = gridSize / 2;
let squares = [];
let color = "black";
let newSize = 16;
let clearButton;
let changeColorButton;
let changeSizeButton;

let gameContainer = document.querySelector(".game-container");

let gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
gridContainer.style.width = `${gridSize}px`;
gridContainer.style.height = `${gridSize}px`;

function initializeGrid() {
  createGrid();
}

function createButtons() {
  changeSizeButton = document.createElement("button");
  changeSizeButton.textContent = "Change Size";
  changeSizeButton.style.width = `${buttonWidth}px`;

  changeColorButton = document.createElement("button");
  changeColorButton.textContent = "Change Color";
  changeColorButton.style.width = `${buttonWidth}px`;

  clearButton = document.createElement("button");
  clearButton.textContent = "Clear Board";
  clearButton.style.width = `${buttonWidth*2}px`;


  changeSize();
  changeColor();
  clear();
}

function initializeGame() {
  initializeGrid();
  createButtons();

  gameContainer.append(changeSizeButton);
  gameContainer.append(changeColorButton);
  gameContainer.append(gridContainer);
  gameContainer.append(clearButton);
}

function changeSize() {
  changeSizeButton.addEventListener("click", () => {
    newSize = 101;
    while (newSize > 100) {
      newSize = prompt("Enter size for new grid (Less than 100)");
    }
    squareSize = 100 / newSize;

    removeGrid();
    createGrid();
  });
}

function removeGrid() {
  for (let i = squares.length - 1; i >= 0; i--) {
    squares[i].remove();
    squares.pop();
  }
}

function createGrid() {
  for (let i = 0; i < newSize * newSize; i++) {
    squares[i] = document.createElement("div");
    squares[i].classList.add("grid-square");
    squares[i].style.width = `${squareSize}%`;
    squares[i].style.height = `${squareSize}%`;
    squares[i].addEventListener("mouseenter", () => {
      squares[i].style.backgroundColor = color;
    });
    gridContainer.append(squares[i]);
  }
}

function changeColor() {
  changeColorButton.addEventListener("click", () => {
    let cWheel = document.createElement("input");
    cWheel.setAttribute("type", "color");
    cWheel.setAttribute("value", "#FF0000");
    cWheel.click();

    cWheel.addEventListener("input", () => {
      color = cWheel.value;
    });
  });
}

function clear() {
  clearButton.addEventListener("click", () => {
    removeGrid();
    createGrid();
  });
}

initializeGame();
