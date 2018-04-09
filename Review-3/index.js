const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

const puzzle = [
	[8, 9, 5, 7, 4, 2, 1, 3, 6],
	[2, 7, 1, 9, 6, 3, 4, 8, 5],
	[4, 6, 3, 5, 8, 1, 7, 9, 2],
	[9, 3, 4, 6, 1, 7, 2, 5, 8],
	[5, 1, 7, 2, 3, 8, 9, 6, 4],
	[6, 8, 2, 4, 5, 9, 3, 7, 1],
	[1, 5, 9, 8, 7, 4, 6, 2, 3],
	[7, 4, 6, 3, 2, 5, 8, 1, 9],
	[3, 2, 8, 1, 9, 6, 5, 4, 7],
];

class SudokuBoard {
  constructor (grid) {
    this.internalGrid = grid;
    this.valid = false;
  }

  get grid () {
    return this.internalGrid;
  }

  get theGrid () {
    this.valid = this.createSections(this.internalGrid).every(this.validArr);
    return this.internalGrid;
  }

  validArr (arr) {
    const validity = new Array(9).every((cell, i) => arr.includes(i + 1));
    if (!validity) console.log('Invalid Section: ', arr);

    return validity;
  }

  createSections (grid) {
    const sections = [];

    grid.forEach((row, i) => {
      sections.push(this.getRow(i));
      sections.push(this.getColumn(i));

      const y = Math.floor(i / 3);
      const x = i % 3;
      sections.push(this.getSection(x, y));
    });

    return sections;
  }

  getRow (y) {
    return this.grid[y];
  }

  getColumn (x) {
    return this.grid.map(row => row[x]);
  }

  getSection (xSec, ySec) {
    const section = [];

    for (let i = 0; i < 9; ++i) {
      const y = Math.floor(i / 3);
      const x = i % 3;

      const currentRow = this.grid[y + (ySec * 3)];
      const currentCell = currentRow[x + (xSec * 3)];

      section.push(currentCell);
    }

    return section;
  }

  setGrid (grid) {
    return new SudokuBoard(grid);
  }

  showStatus () {
    console.log('Current Grid: ');
    console.log(this.theGrid);
    console.log('Valid: ', this.valid);
  }
}

const ourSudokuBoard = new SudokuBoard(puzzle);

ourSudokuBoard.showStatus();
