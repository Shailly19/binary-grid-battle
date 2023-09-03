import gameflow from './modules/gameflow';

const playbtn = document.querySelector('.play-btn');
const startbtn = document.querySelector('#startgame');
const resetbtn = document.querySelector('#reset');
const board = document.querySelector('.board');
const resultText = document.querySelector('#text');
const selection = document.querySelector('.selection-pane');

playbtn.addEventListener('click', () => {
    if (selection) {
        selection.style.display = 'grid';
        playbtn.style.display = 'none';
    }
});

startbtn.addEventListener('click', () => {
    if (board && resultText) {
        gameflow.playgame();
        playbtn.style.display = 'none';
        resetbtn.style.display = 'block';
        board.style.display = 'grid';
        resultText.style.display = 'block';
        startbtn.style.display = 'none';
        selection.style.display = 'none';
    }
});

resetbtn.addEventListener('click', gameflow.resetgame);
