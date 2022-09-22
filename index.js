// get the container and make it as base to create
// node elements with JavaScript
const container = document.getElementById("container");

// create element function

function createElement(elm, cls, parrent) {
  const element = document.createElement(elm);
  element.classList.add(cls);
  parrent.appendChild(element);
}

const rows = 3;
const columns = 3;

for (let i = 0; i < rows; i++) {
  // create wrapper elements
  createElement("div", "wrapper", container);
  const wrapper = document.querySelectorAll(".wrapper");

  for (let j = 0; j < columns; j++) {
    // create tile elements
    createElement("div", "tile", wrapper[i]);
  }
}

const clickedTiles = [];

container.addEventListener("click", () => {
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
