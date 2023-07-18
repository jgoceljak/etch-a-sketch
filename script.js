



function createBoard(size) {
    pixelNumber = 0;

    const container = document.querySelector(".container")

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; j++){
           let square = document.createElement("div");
           console.log("run")
           square.classList.add("pixel");
           square.setAttribute('id', pixelNumber)
           row.appendChild(square)
           pixelNumber++
        }
        container.appendChild(row)
    }
}


createBoard(16);


