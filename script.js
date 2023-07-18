
let selectedColor = "black"


function createBoard(size) {
    pixelNumber = 0;

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

function colorPixel(pixel,selectedColor) {
    let id = String(pixel)
    let color = selectedColor
    let currentPixel = document.querySelector("#" + id)
    currentPixel.setAttribute('style', 'background-color: ' + color + ';')
    return
}

createBoard(16);

const board = document.querySelector(".container")
board.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';

    let pixelID = event.target.id
    console.log(pixelID)
    colorPixel(pixelID, selectedColor)

})



