import { useState } from "react";
import Square from "./square";
function Board() {
    const [squares,setSquare] = useState(Array(9).fill(null)) 




    return (<div className="board">
        <div className="row">
            <Square value = {squares[1]} />
            <Square value = {squares[2]}/>
            <Square value = {squares[3]}/>

        </div>
        <div className="row">
            <Square value = {squares[4]}/>
            <Square value = {squares[5]}/>
            <Square value = {squares[6]}/>
        </div>
        <div className="row">
            <Square value = {squares[7]}/>
            <Square value = {squares[8]}/>
            <Square value = {squares[9]}/>

        </div>
    </div>);
}
export default Board