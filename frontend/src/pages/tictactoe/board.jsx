import { useState } from "react";
import Square from "./square";
function Board() {

    const [squares, setSquare] = useState(Array(3).fill(Array(3).fill(null)));


    const [turn, changeTurn] = useState(1);
    const [winState, declareWinner] = useState(0);
    const [message, setMessage] = useState("Turn of X");
    function handleClick(i, j) {
        if (winState != 0 || turn > 9 || squares[i][j] != null) {
            return 0;
        }

        //the JSON.parse technique is from gemini AI
        const nextSquares = JSON.parse(JSON.stringify(squares));


        if (turn % 2 == 1)
            nextSquares[i][j] = 'X';
        else
            nextSquares[i][j] = 'O';
        setSquare(nextSquares);

        let result = checkWin(i, j, nextSquares);
        if (result != 0) {
            setMessage(nextSquares[i][j] + " is the winner.");
            declareWinner(nextSquares[i][j]);
            return 0;
        }

        setMessage("Turn of " + ((turn + 1) % 2 == 1 ? "X" : "O"));
        changeTurn(turn + 1);

    }

    function checkWin(row, col, grid) {
        const currentPlayer = grid[row][col];
        let rowFlag = 1;
        let colFlag = 1;
        let d1Flag = 1;
        let d2Flag = 1;
        for (let i = 0; i < 3; i++) {
            if (grid[row][i] != currentPlayer)
                rowFlag = 0;
            if (grid[i][col] != currentPlayer)
                colFlag = 0;
            if (grid[i][i] != currentPlayer)
                d1Flag = 0;
            if (grid[i][2 - i] != currentPlayer)
                d2Flag = 0;
        }

        if (rowFlag == 1 || colFlag == 1 || d1Flag == 1 || d2Flag == 1)
            return currentPlayer;
        else
            return 0;
    }

    return (<div className="board">
        <div className="prompt-box">{message} </div>
        <div className="row">
            <Square value={squares[0][0]} onSquareClick={() => handleClick(0, 0)} />
            <Square value={squares[0][1]} onSquareClick={() => handleClick(0, 1)} />
            <Square value={squares[0][2]} onSquareClick={() => handleClick(0, 2)} />

        </div>
        <div className="row">
            <Square value={squares[1][0]} onSquareClick={() => handleClick(1, 0)} />
            <Square value={squares[1][1]} onSquareClick={() => handleClick(1, 1)} />
            <Square value={squares[1][2]} onSquareClick={() => handleClick(1, 2)} />
        </div>
        <div className="row">
            <Square value={squares[2][0]} onSquareClick={() => handleClick(2, 0)} />
            <Square value={squares[2][1]} onSquareClick={() => handleClick(2, 1)} />
            <Square value={squares[2][2]} onSquareClick={() => handleClick(2, 2)} />

        </div>
    </div>);
}
export default Board