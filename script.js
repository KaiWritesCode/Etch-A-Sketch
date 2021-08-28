let sizeInput = document.querySelector('#range')
const boxes = document.querySelectorAll('.box')
const clearBtn = document.querySelector('.clear')
let sizeDisplay = document.querySelector('.size-display')
let gridContainer = document.querySelector('#container')
const eraser = document.querySelector('.eraser-icon')
const colorPicker = document.querySelector('#color-input')



sizeInput.addEventListener('input', function () {
    sizeInput = this;
    sizeDisplay.textContent = `${sizeInput.value}x${sizeInput.value}`;
})

createDivs()
//create layout
function createDivs() {
    clearBoard()
    gridContainer.style.gridTemplateColumns = `repeat(${sizeInput.value}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${sizeInput.value}, 1fr)`
    let i = 0;
    while (i < sizeInput.value * sizeInput.value) {
        const div = document.createElement('div')
        div.classList.add('box')
        div.addEventListener('mouseenter', changeColor)
        gridContainer.appendChild(div);
        i++;
    }
}

clearBtn.addEventListener('click', createDivs)
// eraser.addEventListener('click', eraseBox)

let penColor = document.querySelector('#color-input')

// function eraseBox(e) {
//     e.target.classList.add('active-eraser')
//     if (e.target.classList.contains = 'active-eraser') {
//         console.log('yes')
//         penColor = "eraser"
//     }

// }


function changeColor(e) {
    // if (penColor == "eraser") {
    //     e.target.style.backgroundColor = 
    // } 
    e.target.style.backgroundColor = penColor.value;
}

// colorPicker.addEventListener('click', removeEraser)

// function removeEraser(e) {
//     let active = document.querySelector('.active-eraser')
//     if (active) {
//         active.classList.remove('active-eraser')
//     }
// }









function clearBoard() {
    let elements = document.getElementsByClassName("box");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}
