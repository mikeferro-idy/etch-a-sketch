function draw (size) {
    const WINDOW_SIZE = 400;
    const SIZE = size;
    const grid = document.querySelector('.grid');
    for( let i = 0; i < SIZE; ++i){
        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        row.classList.add('pixel');
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


draw(10);
const grid = document.querySelector('.grid');
grid.addEventListener('mouseover', function(e) {
    e.target.style.background = 'black';
    
});
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', function(e) {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.background = 'white';
    })
const resizeBtn = document.querySelector('.resizeBtn');
resizeBtn.addEventListener('click', function(e){
    pixels.forEach((pixel) => {
        pixel.style.background = 'white';
    })
})
});