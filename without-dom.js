const tiles = [
  ["⬜", "⬜", "⬜"],
  ["⬜", "⬜", "⬜"],
  ["⬜", "⬜", "⬜"],
];

const selectedTilesIndex = [];

const changeTileColor = (tileRow, tileColumn) => {
  tiles[tileRow][tileColumn] = "⬛";
  selectedTilesIndex.push([tileRow, tileColumn]);
  console.log(tiles);
};

const revertTileColor = (tileRow, tileColumn) => {
  tiles[tileRow][tileColumn] = "⬜";
  console.log(tiles);
};

changeTileColor(0, 1);
changeTileColor(2, 2);
changeTileColor(1, 0);
changeTileColor(0, 2);
changeTileColor(1, 2);
changeTileColor(2, 0);
changeTileColor(1, 1);
changeTileColor(0, 0);
changeTileColor(2, 1);

console.log();

let play = confirm("Let's start the game");
while (play) {
  let row;
  let column;
  if (selectedTilesIndex.length < 9) {
    row = Number(prompt("Input Row"));
    column = Number(prompt("Input column"));
  }

  if (selectedTilesIndex.length > 8) {
    const interval = setInterval(() => {
      revertTileColor(selectedTilesIndex[0][0], selectedTilesIndex[0][1]);
      selectedTilesIndex.shift();
      const next = confirm("Continue?");
      if (!next) return;
    }, 500);
    if (selectedTilesIndex.length === 0) clearInterval(interval);
    const playAgain = confirm("Continue?");
    if (!playAgain) play = false;
  }
  if (row == "null" || column == "null") break;
  if (isNaN(row) || isNaN(column)) {
    alert("Input is not a number");
    play = false;
    break;
  }
  changeTileColor(row, column);
  console.log(tiles);
  play = confirm("Continue?");
}
