// get the container and make it as base to create
// node elements with JavaScript
const container = document.getElementById("container");

// create element function

function createElement(elm, cls, ParentNode) {
  const element = document.createElement(elm);
  element.classList.add(cls);
  ParentNode.appendChild(element);
}

const rows = 3;
const columns = 3;

for (let row = 0; row < rows; row++) {
  // create wrapper elements
  createElement("div", "wrapper", container);
  const wrapper = document.querySelectorAll(".wrapper");

  for (let column = 0; column < columns; column++) {
    // create tile elements
    createElement("div", "tile", wrapper[row]);
  }
}

const clickedTiles = [];

container.addEventListener("click", (event) => {
  if (!event.target.classList.contains("tile")) return;
  if (clickedTiles.includes(event.target)) return;
  event.target.classList.add("selected");
  clickedTiles.push(event.target);

  // when all the tiles clicked, remove the "selected" class from tile and,
  // remove tile from clickedTiles array

  if (clickedTiles.length >= rows * columns) {
    const interval = setInterval(() => {
      const tile = clickedTiles.shift();
      tile.classList.remove("selected");
      if (clickedTiles.length === 0) clearInterval(interval);
    }, 400);
  }
});
