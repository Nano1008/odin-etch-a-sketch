const CONTAINER_SIZE = 400;
const DEFAULT_GRID_SIZE = 16;
const MAX_GRID_SIZE = 100;

const container = document.querySelector(".grid-container");
const button = document.querySelector("button");

// Generate random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function createGrid(gridSize) {
    const squareSize = CONTAINER_SIZE / gridSize;

    // Create squares
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.className = "grid-square";

        // Set all styles
        square.style.cssText = `
        width: ${squareSize}px;
        height: ${squareSize}px;
        flex: 0 0 ${squareSize}px
        `;

        square.addEventListener("mouseenter", handleHover);

        container.appendChild(square);
    }
}

// Handle hover with random color
function handleHover(e) {
    e.target.style.backgroundColor = getRandomColor();
}

// Handle grid size prompt
function promptGridSize() {
    let size;
    do {
        size = parseInt(prompt("The number of squares per side: (no more than 100)"));
    } while (size > MAX_GRID_SIZE);
    return size;
}

button.addEventListener("click", () => {
    const size = promptGridSize();
    container.innerHTML = "";
    createGrid(size);
})

createGrid(DEFAULT_GRID_SIZE);

