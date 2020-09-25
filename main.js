const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
const box3 = document.querySelector('.box-3');
const box4 = document.querySelector('.box-4');
const box5 = document.querySelector('.box-5');
const box6 = document.querySelector('.box-6');
const box7 = document.querySelector('.box-7');
const box8 = document.querySelector('.box-8');
const box9 = document.querySelector('.box-9');
const winnerName = document.querySelector('#winner');
const resetButton = document.querySelector('button');
const allBoxes = document.querySelectorAll(".box-container-boxes");

const wingame = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];

let isXTurn = true;
let moveCount = 0;
let isGameDone = false;


winnerName.innerHTML = 'X to play';
winnerName.classList.add('winner-display');

const tickBox = (e) => {

    if (!(e.target.classList.contains('x')) || !(e.target.classList.contains('x'))) {

        if (isXTurn) {
            e.target.classList.add('x');
            e.target.textContent = "X";
            isXTurn = false;
            moveCount++;
            winnerName.innerHTML = 'O to play';
            // winnerName.classList.add('winner-display');
        }
        else {
            e.target.classList.add('o');
            e.target.textContent = "O";
            isXTurn = true;
            moveCount++;
            winnerName.innerHTML = 'X to play';
            // winnerName.classList.add('winner-display');
        }

    }
    isDraw = gameDone();
    let winnerIs = checkWinner();
    // console.log(winnerName);
    if (isGameDone) {
        // console.log('The winner is '.concat(winnerIs));
        if (isDraw == 'Draw') {
            winnerName.innerHTML = 'Game Drawn'.toUpperCase();
        }
        else {
            winnerName.innerHTML = 'The winner is '.concat(winnerIs).toUpperCase();
        }
        winnerName.classList.add('winner-display');
        winnerName.classList.add('blinking');

        for (const grid of allBoxes) {
            grid.removeEventListener('click', tickBox);
        }
    }
};

box1.addEventListener('click', tickBox);
box2.addEventListener('click', tickBox);
box3.addEventListener('click', tickBox);
box4.addEventListener('click', tickBox);
box5.addEventListener('click', tickBox);
box6.addEventListener('click', tickBox);
box7.addEventListener('click', tickBox);
box8.addEventListener('click', tickBox);
box9.addEventListener('click', tickBox);


function gameDone() {
    if (moveCount == 9) {
        isGameDone = true;
        return 'Draw';
    } else
        isGameDone = false;

}

resetButton.addEventListener('click', function (e) {

    winnerName.innerHTML = '';
    winnerName.classList.remove('winner-display');

    box1.classList.remove('x');
    box2.classList.remove('x');
    box3.classList.remove('x');
    box4.classList.remove('x');
    box5.classList.remove('x');
    box6.classList.remove('x');
    box7.classList.remove('x');
    box8.classList.remove('x');
    box9.classList.remove('x');

    for (const eachBox of allBoxes) {
        eachBox.textContent = "";
        eachBox.classList.remove('o');
        eachBox.classList.remove('x');
        eachBox.addEventListener('click', tickBox);
    }
    moveCount = 0;

    winnerName.innerHTML = 'X to play';
    winnerName.classList.add('winner-display');
    winnerName.classList.add('blinking');

});

function checkWinner() {

    let boxNumber = 0;
    let xPoints = [];
    let oPoints = [];
    for (const eachBox of allBoxes) {
        // console.log(eachBox);
        boxNumber++;
        // console.log(eachBox.textContent);
        if (eachBox.textContent == 'X') {
            xPoints.push(boxNumber);
        }
        else if (eachBox.textContent == 'O') {
            oPoints.push(boxNumber);
        }
    }
    for (winPostion of wingame) {
        let winJourney = 0;
        for (winWin of winPostion) {
            for (position of xPoints) {
                if (position == winWin)
                    winJourney++;
            }
        }
        if (winJourney == 3) {
            isGameDone = true;
            return "X";
        }

    }

    for (winPostion of wingame) {
        let winJourney = 0;
        for (winWin of winPostion) {
            for (position of oPoints) {
                if (position == winWin)
                    winJourney++;
            }
        }
        if (winJourney == 3) {
            isGameDone = true;
            return "O";
        }
    }
}