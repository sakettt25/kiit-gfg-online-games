import { useState } from "react";
import Square from "./square";
function Board() {
    const [squares, setSquare] = useState(Array(9).fill(null))
    function handleClick(i) {
        const nextSquares = squares.slice();
        nextSquares[i] = 'X';
        setSquare(nextSquares);
    }

    return (<div className="board">
        <div className="row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(1)} />

        </div>
        <div className="row">
            <Square value={squares[3]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(1)} />
        </div>
        <div className="row">
            <Square value={squares[6]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(1)} />

        </div>
    </div>);
}
export default Board