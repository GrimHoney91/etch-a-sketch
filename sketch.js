const sketchPad = document.getElementById('sketch-pad');

let number = 16;
let gridSpace = number ** 2;

for (i = 0; i < gridSpace; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    sketchPad.appendChild(div);
    }
    
    let grid = document.querySelectorAll('.grid');
    grid.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.setAttribute('style', 'background: black');
        });
    });

    function createGrid() {
        let question = prompt("How many squares do you want on each side?", '16');
        let answer = Number(question);
        if (answer >= 101 || answer <= 0) {
            alert('You must enter a number from 1 to 100');
        }
        else {
        gridSpace = answer ** 2;
        grid.forEach((div) => {
            sketchPad.removeChild(div);
        });
        sketchPad.style.gridTemplateRows = `repeat(${answer}, ${1}fr)`;
        sketchPad.style.gridTemplateColumns = `repeat(${answer}, ${1}fr)`;
        for (i = 0; i < gridSpace; i++) {
            const div = document.createElement('div');
            div.classList.add('grid');
            sketchPad.appendChild(div);
            div.addEventListener('mouseover', () => {
                div.setAttribute('style', 'background: black');
            });
            }
            grid = document.querySelectorAll('.grid');
        }
    }

    const clear = document.querySelector('#clear');
    clear.addEventListener('click', createGrid);
    