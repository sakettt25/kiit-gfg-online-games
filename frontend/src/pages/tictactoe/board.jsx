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

        //the JSON.parse technique is froom gemini AI
        const nextSquares = JSON.parse(JSON.stringify(squares));


        if (turn % 2 == 1)
            nextSquares[i][j] = 'X';
        else
            nextSquares[i][j] = 'O';


        setMessage("Turn of " + ((turn + 1) % 2 == 1 ? "X" : "O"));
        changeTurn(turn + 1);
        setSquare(nextSquares);
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