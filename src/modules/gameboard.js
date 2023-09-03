const gameBoard = (() => {
    
    let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
  
    const renderBoard = () => board;
  
    const updateBoard = (i, j, marker) => {
        if (i >= 0 && i < 3 && j >= 0 && j < 3 && board[i][j] === "") {
            board[i][j] = marker;
            return true;
        }
        return false;
    };
  
    const winningCombinations = [

        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]],

    ];
  
    const checkWin = (marker) => {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if(
                board[a[0]][a[1]] === marker &&
                board[b[0]][b[1]] === marker &&
                board[c[0]][c[1]] === marker
            ){
            return true;
            }
        }
        return false;
    };
  
    const checkTie = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "") {
                    return false;
                }
            }
        }
        return true;
    };
  
    const resetBoard = () => {
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];
    };

    return {
        renderBoard,
        updateBoard,
        checkWin,
        checkTie,
        resetBoard,
    };
})();

export default gameBoard;
