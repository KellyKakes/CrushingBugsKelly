console.log("JavaScript is connected");

//variables
const theButtons = document.querySelectorAll("#buttonHolder img");
const puzzleBoard = document.querySelector(".puzzle-board");
const puzzlePieces = document.querySelectorAll(".puzzle-pieces img");
const dropZones = document.querySelectorAll(".drop-zone");
let draggedPiece;

//functions

function changeBGImage(event) {
<<<<<<< Updated upstream
    //console.log("changeBGImage called");
    //method 1
    //console.log(this.id);
    //background-image: url('../images/backGround0.jpg');
    //puzzleBoard.style.backgroundImage = `url('../images/backGround${this.id}.jpg')`;

    //Method 2
    console.log(event.currentTarget.id);
    puzzleBoard.style.backgroundImage = `url('../images/backGround${event.currentTarget.id}.jpg')`;

=======
    //fix goes here
    puzzlePieces.forEach(piece => puzzlePieceDiv.appendChild(piece));
    console.log(event.currentTarget.id);
    //puzzlePieces.forEach(piece => {puzzlePieceDiv appendchild(piece)})
    //Wait I just changed the {} these things and it worked?

    //Method 2
    puzzleBoard.style.backgroundImage = `url('./images/backGround${event.currentTarget.id}.jpg')`;
>>>>>>> Stashed changes
}

function handleStartDrag() {
    console.log(`started dragging ${this}`);
    draggedPiece = this;
}

function handleOver(e) {
    e.preventDefault();
    console.log("Dragged Over");
}

function handleDrop() {
<<<<<<< Updated upstream
=======
    //this is where the fix will go

    //going to use an if statement

    //One piece can no longer be in the same Container Drop Zone. but it doesn't reset into default position.
    if(this.children.length >=1) {
     return;
    }
>>>>>>> Stashed changes
    this.appendChild(draggedPiece);
    console.log(event.currentTarget.id);
}

console.log(puzzlePieces);
//eventListeners

theButtons.forEach(button => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));