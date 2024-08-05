
function Square({ value, onSquareClick }) {
    if (value == null)
        return <div className="square" onClick={onSquareClick}>{value}</div>
    else if (value == 'X')
        return <img className="square-img" onClick={onSquareClick} src="src/assets/cross.png"></img>
    else
        return <img className="square-img" onClick={onSquareClick} src="src/assets/letter-o.png"></img>
}

export default Square