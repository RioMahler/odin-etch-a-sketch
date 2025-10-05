let containerSize = 100;
let containerElement = document.querySelector("#container");

function createGrid() {
  for (let i = 0; i < containerSize; i++) {
    const square = document.createElement("div");

    containerElement.appendChild(square);
    for (let i = 0; i < containerSize; i++) {
      const field = document.createElement("div");
      field.classList.add("square");
      field.addEventListener("mouseenter", (e) => {
        e.target.classList.add("black");
      });

      square.appendChild(field);
    }
  }
}

createGrid();
