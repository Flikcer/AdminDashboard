// Get all elements with class "cardTitle"
const cards = document.querySelectorAll(".cardTitle");

let draggedCard = null;

// Add event listeners for each card to handle dragging
cards.forEach((card) => {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
});

// Define the functions to handle drag events
function dragStart() {
  draggedCard = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragEnd() {
  draggedCard.style.display = "block";
  draggedCard = null;
}

// Add event listeners for the drop zones to handle dropping
const dropZones = document.querySelectorAll(".dropZone");

dropZones.forEach((zone) => {
  zone.addEventListener("dragover", dragOver);
  zone.addEventListener("dragenter", dragEnter);
  zone.addEventListener("dragleave", dragLeave);
  zone.addEventListener("drop", dragDrop);
});

// Define the functions to handle drop events
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.style.background = "rgba(0, 0, 0, 0.2)";
}

function dragLeave() {
  this.style.background = "none";
}

function dragDrop() {
  this.style.background = "none";
  this.appendChild(draggedCard);
}
