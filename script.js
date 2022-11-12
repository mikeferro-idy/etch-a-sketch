function draw (size) {
    const WINDOW_SIZE = 600;
    const SIZE = size;
    const grid = document.querySelector('.grid');
    for( let i = 0; i < SIZE; ++i){
        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        row.classList.add('pixel');
        row.classList.add('row');
        grid.appendChild(row);
        
        for ( let j = 0; j < SIZE; ++j){
            const currentRow = document.querySelector(`.row${i}`)
            const col = document.createElement('div');
            col.classList.add(`col${j}`);
            col.classList.add('pixel')
            col.style.backgroundColor = 'white';
            col.style.padding = `${WINDOW_SIZE/SIZE}px`;
            col.style.flex = '1';
            col.style.flexBasis = '100%';

            currentRow.appendChild(col);
        }
    }
}
function clear(){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.background = 'white';
    })
}
function resize(size){
    const grid = document.querySelector('.grid');
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        grid.removeChild(row);
    })
    draw(size);
}
function randomColor(){
    let num = Math.floor(Math.random()*16777215).toString(16);
    return num;
}

draw(10);
const grid = document.querySelector('.grid');
grid.addEventListener('mouseover', function(e) {
    e.target.style.background = 'black';
});

const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', clear);

const resizeBtn = document.querySelector('.resizeBtn');
resizeBtn.addEventListener('click', () => {
    let size = prompt("New window size");
    resize(size); 
});