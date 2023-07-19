
let selectedColor = "black"
let boardSize = 16;


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

function colorPixel(pixel,selectedColor) {
    let id = String(pixel)
    let color = selectedColor
    let currentPixel = document.querySelector("#" + id)
    currentPixel.setAttribute('style', 'background-color: ' + color + ';')
    return
}

createBoard(boardSize);

const board = document.querySelector(".container")
board.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';

    let pixelID = event.target.id
    console.log(pixelID)
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




