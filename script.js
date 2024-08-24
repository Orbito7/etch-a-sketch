let gridContainer = document.querySelector(".grid-container");
let squares = [];
for (let i = 0; i < 256; i++) {
  squares[i] = document.createElement("div");
  squares[i].classList.add("grid-square");
  squares[i].addEventListener("mouseenter", () => {
    squares[i].style.backgroundColor = "red";
  });
  gridContainer.append(squares[i]);
}
