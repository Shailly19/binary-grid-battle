import createPlayer from './player';

const gameplay = (() => {
    
    let currentPlayer = null;
    let toswitchPlayer = null;
  
    const player1 = createPlayer("Player 1", "X");
    const player2 = createPlayer("Player 2", "O");
  
    const computer2 = createPlayer("Computer", "O");
  
    const p1element = document.getElementById("player01");
        p1element.addEventListener("click", () => {
        if (currentPlayer === null) {
            currentPlayer = player1;
        } else if (currentPlayer !== null) {
            toswitchPlayer = player1;
        }
        p1element.classList.add("active1");
        p2element.disabled = false;
        c2element.disabled = false;
    });
  
    const p2element = document.getElementById("player02");
        p2element.disabled = true;
        p2element.addEventListener("click", () => {
        if (currentPlayer === null) {
            currentPlayer = player2;
        } else if (currentPlayer !== null) {
            toswitchPlayer = player2;
        }
        p2element.classList.add("active2");
        c2element.disabled = false;
    });
  
    const c2element = document.getElementById("computer02");
        c2element.disabled = true;
        c2element.addEventListener("click", () => {
        if (currentPlayer === null) {
            currentPlayer = computer2;
        } else if (currentPlayer !== null) {
            toswitchPlayer = computer2;
        }
        c2element.classList.add("active2");
        p2element.disabled = false;
    });
  
    const getCurrentPlayer = () => currentPlayer;
  
    const getToswitchPlayer = () => toswitchPlayer;

    const switchPlayer = () => {

        const tempPlayer = currentPlayer;
        currentPlayer = toswitchPlayer;
        toswitchPlayer = tempPlayer;

    };
  
    const resetCurrentPlayer = () => {

        currentPlayer = null;
        toswitchPlayer = null;

    };

    return {
        getCurrentPlayer,
        getToswitchPlayer,
        switchPlayer,
        resetCurrentPlayer,
    };
})();

export default gameplay;
