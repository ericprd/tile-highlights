const tiles = [
  ["⬜", "⬜", "⬜"],
  ["⬜", "⬜", "⬜"],
  ["⬜", "⬜", "⬜"],
];

const selectedTilesIndex = [];

const changeTileColor = (tileRow, tileColumn) => {
  if (tileRow > 2 || tileColumn > 2) {
    console.log("Row or column is exceeds the limit");
  } else if (typeof tileRow === "number" && typeof tileColumn === "number") {
    tiles[tileRow][tileColumn] = "⬛";
    selectedTilesIndex.push([tileRow, tileColumn]);
    console.log(tiles);
  } else {
    console.log("Row or column is not valid");
  }
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

if (selectedTilesIndex.length >= 9) {
  const interval = setInterval(() => {
    revertTileColor(selectedTilesIndex[0][0], selectedTilesIndex[0][1]);
    selectedTilesIndex.shift();
    if (selectedTilesIndex.length === 0) clearInterval(interval);
  }, 500);
}
