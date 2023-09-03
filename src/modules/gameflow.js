import gameplay from './gameplay';
import gameBoard from './gameboard';

const gameflow = (() => {
    
    let gameover = false;
  
    const resultText = document.querySelector("#text");
    const board = document.querySelector(".board");
    const boxes = board.querySelectorAll(".box");
  
    const playerMove = (box, index) => {

        if (gameover) return;
    
        const i = Math.floor(index / 3);
        const j = index % 3;
    
        const cp = gameplay.getCurrentPlayer();

        if (cp.getMarker() === "X") {
            box.classList.add("marker-text-x");
          } else if (cp.getMarker() === "O") {
            box.classList.add("marker-text-o");
          }
      
        const tsp = gameplay.getToswitchPlayer();
    
        if (gameBoard.updateBoard(i, j, cp.getMarker())) {
            box.textContent = cp.getMarker();
    
            if (gameBoard.checkWin(cp.getMarker())) {

                console.log(cp.getName() + " is the winner");
                resultText.textContent = cp.getName() + " wins!";
                gameover = true;

            } 
            else if (gameBoard.checkTie()){

                resultText.textContent = "It's a tie!";
                console.log("It's a tie");
                gameover = true;

            }
            else{

            gameplay.switchPlayer();

            if (gameplay.getCurrentPlayer().getName().includes("Computer")){
                
                computerMove();
            }
            }
        }
        else{
            console.log("Invalid move. Try again.");
        }
    };
  
    const computerMove = () => {

        const nullBoxes = findNullBoxes();
        const randomIndex = Math.floor(Math.random() * nullBoxes.length);
        const [i, j] = nullBoxes[randomIndex];
    
        setTimeout(() => {
            const boxIndex = i * 3 + j;
            playerMove(boxes[boxIndex], boxIndex);
        }, 500);

    };
  
    const findNullBoxes = () => {

        const nullBoxes = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gameBoard.renderBoard()[i][j] === "") {
                    nullBoxes.push([i, j]);
                }
            }
        }
        return nullBoxes;
    };
  
    const playgame = () => {
        boxes.forEach((box) => {
            box.addEventListener("click", boxClickHandler);
        });
    };

    const boxClickHandler = (event) => {
        const box = event.target;
        const index = Array.from(boxes).indexOf(box);
        playerMove(box, index);
    };
  
    const resetgame = () => {

        gameBoard.resetBoard();
        
        boxes.forEach((box) => {
            box.textContent = "";
            box.classList.remove("marker-text-x");
            box.classList.remove("marker-text-o");
            box.removeEventListener("click", boxClickHandler);
        });

        gameplay.resetCurrentPlayer();

        const selectionBtns = document.querySelectorAll(".select");
        const board = document.querySelector(".board");
        const resetbtn = document.querySelector("#reset");
        const resultText = document.querySelector("#text");
        const playbtn = document.querySelector(".play-btn");
        const startbtn = document.querySelector("#startgame");

        if (board, resetbtn, resultText, playbtn, startbtn) {
            board.style.display = "none";
            resetbtn.style.display = "none";
            resultText.textContent = "";
            startbtn.style.display = "block";
            playbtn.style.display = "block";
        }

        selectionBtns.forEach((btn) => {
            btn.disabled = false;
            btn.classList.remove("active1");
            btn.classList.remove("active2");
        });
        
        gameover = false;
    };

    return {
        playgame,
        resetgame,
    };
})();

export default gameflow;
