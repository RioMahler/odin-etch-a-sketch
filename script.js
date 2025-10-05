let container = [];
let containerElement = document.querySelector("#container");

function createGrid() {
  for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");

    containerElement.appendChild(square);
    for (let i = 0; i < 16; i++) {
      const field = document.createElement("div");
      square.appendChild(field);
    }
  }
}

createGrid();
