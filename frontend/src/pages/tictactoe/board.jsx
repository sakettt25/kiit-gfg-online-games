import { useState } from "react";
import Square from "./square";
function Board() {
    const [squares, setSquare] = useState(Array(9).fill(null))
    const [turn, changeTurn] = useState(1);
    const [winState,declareWinner] = useState(0);
    function handleClick(i) {
        if(winState != 0 || turn > 9 || squares[i] != null)
        {
            return 0;
        }

        const nextSquares = squares.slice();
        if(turn % 2 == 1)
            nextSquares[i] = 'X';
        else
            nextSquares[i] = 'O';

        changeTurn(turn + 1);
        setSquare(nextSquares);
    }

    return (<div className="board">
        <div className="row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

        </div>
        <div className="row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />

        </div>
    </div>);
}
export default Board