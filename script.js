let squareAmount = 50;
let containerElement = document.querySelector("#container");

let btn = document.querySelector("button").addEventListener("click", (e) => {
  let userInput = prompt("How big should the grid be?");

  if (userInput < 101) {
    removeGrid();
    squareAmount = userInput;
    createGrid();
  } else {
    return;
  }
});

function createGrid() {
  for (let i = 0; i < squareAmount; i++) {
    const square = document.createElement("div");

    containerElement.appendChild(square);
    for (let i = 0; i < squareAmount; i++) {
      const field = document.createElement("div");
      field.classList.add("square");
      field.addEventListener("mouseenter", (e) => {
        e.target.classList.add("black");
      });

      square.appendChild(field);
    }
  }
}

function removeGrid() {
  for (let i = 0; i < squareAmount; i++) {
    let columns = containerElement.childNodes;
    columns.forEach(function (listObject) {
      listObject.remove();
    });
  }
}

createGrid();
