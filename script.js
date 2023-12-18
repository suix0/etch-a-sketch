const gridContainerDiv = document.querySelector('.container');

// Create a 16x16 grid and append it to container 
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let grid = document.createElement('div');
    grid.classList.add('grid');
    gridContainerDiv.appendChild(grid);
  }
}