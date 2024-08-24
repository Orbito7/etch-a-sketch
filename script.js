let gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
let gridSize = 200;
gridContainer.style.width = `${gridSize}px`;
gridContainer.style.height = `${gridSize}px`;
let squareSize = gridSize / 16;

let gameContainer = document.querySelector(".game-container");
let squares = [];

let changeSizeButton = document.createElement("button");
changeSizeButton.textContent = "Change Size";
changeSizeButton.style.width = `${gridSize}px`;

gameContainer.append(changeSizeButton);
gameContainer.append(gridContainer);

for (let i = 0; i < 256; i++) {
  squares[i] = document.createElement("div");
  squares[i].classList.add("grid-square");
  squares[i].style.width = `${squareSize}px`;
  squares[i].style.height = `${squareSize}px`;
  squares[i].addEventListener("mouseenter", () => {
    squares[i].style.backgroundColor = "red";
  });
  gridContainer.append(squares[i]);
}

changeSizeButton.addEventListener("click", () => {
  let newSize = 101;
  while (newSize > 100) {
    newSize = prompt("Enter size for new grid (Less than 100)");
  }
  squareSize = 100 / newSize;

  for (let i = squares.length - 1; i >= 0; i--) {
    squares[i].remove();
    squares.pop();
  }
  for (let i = 0; i < newSize * newSize; i++) {
    squares[i] = document.createElement("div");
    squares[i].classList.add("grid-square");
    squares[i].style.width = `${squareSize}%`;
    squares[i].style.height = `${squareSize}%`;
    squares[i].addEventListener("mouseenter", () => {
      squares[i].style.backgroundColor = "red";
    });
    gridContainer.append(squares[i]);
  }
});
