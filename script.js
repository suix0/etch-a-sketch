function createGrid (size = 16) {
  // Create a 16x16 grid and append it to container
  const gridContainerDiv = document.querySelector('.container');
  const containerGridWidth = gridContainerDiv.clientWidth;
  const containerGridHeight = gridContainerDiv.clientHeight;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let grid = document.createElement('div');
      grid.classList.add('grid');
      gridContainerDiv.appendChild(grid);
      // Dynamically change cell size 
      let cellSizeWidth = (containerGridWidth - 4 * size) / size;
      let cellSizeHeight = (containerGridHeight - 4 * size) / size;

      grid.style.width = cellSizeWidth + 'px';
      grid.style.height = cellSizeHeight + 'px';
    }
  }
}

function hoveringEffect () {
  // Add hovering effect to each square grids
  const grid = document.getElementsByClassName('grid');
  const eraseButton = document.querySelector('.button.erase');
  const rainbowButton = document.querySelector('.button.rainbow');
  const blackButton = document.querySelector('.button.black');
  const gridArr = [...grid];

  let red = 0;
  let green = 0;
  let blue = 0;

  // Change hovering effect color to Random colors
  rainbowButton.addEventListener('click', () => {
    gridArr.forEach(function(gridSquare) {
      gridSquare.addEventListener('mouseenter', () => {
        red = Math.random() * 255;
        green = Math.random() * 255;
        blue = Math.random() * 255;
        gridSquare.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      });
    });
  });

  eraseButton.addEventListener('click', () => {
    gridArr.forEach((currentGrid) => {
      currentGrid.style.backgroundColor = 'transparent';
    });
  });

  blackButton.addEventListener('click', () => {
    gridArr.forEach(function(gridSquare) {
      gridSquare.addEventListener('mouseenter', () => {
        gridSquare.style.backgroundColor = 'black';
      });
    });
  });
}

function changeGridSize () {
  // Change grid size based on user input
  const button = document.querySelector('.newGrid');
  
  button.addEventListener('click', (newSize) => {
    // Get new size of sketchpad based on user input
    do {
      newSize = parseInt(prompt('Enter new size\ne.g., 64 equals to 64x64 sketchpad\nLimit of 100x100!'));
    } while (newSize > 100 || isNaN(newSize));

    // Remove and Replace current grid using size that user input
    const grid = document.getElementsByClassName('grid');
    const removeCurrentGridArr = [...grid];
    removeCurrentGridArr.forEach((currentGrid) => {
      currentGrid.remove();
    });
    createGrid(newSize);
    hoveringEffect();
  });
}

createGrid();
hoveringEffect();
changeGridSize();
