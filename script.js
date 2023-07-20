
let selectedColor = "red"
let boardSize = 16;
eraserMode = false;
let mouseDown = false

document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


function createBoard(size) {
    pixelNumber = 0;
    boardSize = size;

    const container = document.querySelector(".container")

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++){
           let square = document.createElement("div");
           square.classList.add("pixel");
           square.setAttribute('id', "p" + pixelNumber);
           row.appendChild(square);
           pixelNumber++;
        }
        container.appendChild(row)
    }
}

function clearBoard(size) {
    for (let i = 0; i < size*size; i++){
        let currentPixel = document.querySelector("#p" + i)
        currentPixel.setAttribute('style', 'background-color: white')
    }
    return;
}

function removeBoard(size) {
    var board = document.querySelector('.container');
    while ( board.firstChild ) board.removeChild( board.firstChild );
    pixelNumber = 0;
    return;
}

function colorPixel(pixel,selectedColor) {
    if (!eraserMode) {
    let id = String(pixel)
    let color = selectedColor
    let currentPixel = document.querySelector("#" + id)
    currentPixel.setAttribute('style', 'background-color: ' + color + ';')
    return;
    } else {
        let id = String(pixel)
        let color = "white"
        let currentPixel = document.querySelector("#" + id)
        currentPixel.setAttribute('style', 'background-color: ' + color + ';')
    }
}


const board = document.querySelector(".container")
board.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';

    let pixelID = event.target.id
    selectedColor = document.getElementById("colorChoice").value; 
    colorPixel(pixelID, selectedColor)

})

board.addEventListener('mouseover', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!mouseDown) {
        return;
    }
    let pixelID = event.target.id
    selectedColor = document.getElementById("colorChoice").value; 
    colorPixel(pixelID, selectedColor)

})

const menu = document.querySelector(".menu")
menu.addEventListener('click', (event) => {
    let clickedButton = event.target.className
    switch(clickedButton) {
        case 'clear':
          clearBoard(boardSize)
          break;
        default:
          break;
      }
})

var checkbox = document.querySelector(".eraserbtn");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    eraserMode = true;
  } else {
    eraserMode = false
  }
});

const slider = document.querySelector('.sizeslider')
const sliderDisplay = document.querySelector('.sliderdisplay')

slider.oninput = function () {
    sliderDisplay.innerHTML = slider.value
    removeBoard(boardSize)
    boardSize = slider.value
    createBoard(boardSize)
}

createBoard(boardSize);



