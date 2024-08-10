import './connect4.css'
import C4tile from './C4tile';
import { useState } from 'react';
function Connect4() {

    const [tiles, setTile] = useState(Array(7).fill(Array(6).fill(null)));

    function onColumnClick(colNumber) {
        let position = null;
        for (let i = 5; i >= 0; i--) {
            if (tiles[i][colNumber] == null) {
                position = i;
                break;
            }
        }

        if (position == null)
            return;

        const nextTiles = JSON.parse(JSON.stringify(tiles));
        nextTiles[position][colNumber] = 1;
        setTile(nextTiles);
    }

    return (
        <div className='c4board'>

            <div className='column' onClick={() => onColumnClick(0)}>
                <C4tile value={tiles[0][0]} />
                <C4tile value={tiles[1][0]} />
                <C4tile value={tiles[2][0]} />
                <C4tile value={tiles[3][0]} />
                <C4tile value={tiles[4][0]} />
                <C4tile value={tiles[5][0]} />
            </div>
            <div className='column' onClick={() => onColumnClick(1)}>
                <C4tile value={tiles[0][1]} />
                <C4tile value={tiles[1][1]} />
                <C4tile value={tiles[2][1]} />
                <C4tile value={tiles[3][1]} />
                <C4tile value={tiles[4][1]} />
                <C4tile value={tiles[5][1]} />
            </div>
            <div className='column' onClick={() => onColumnClick(2)}>
                <C4tile value={tiles[0][2]} />
                <C4tile value={tiles[1][2]} />
                <C4tile value={tiles[2][2]} />
                <C4tile value={tiles[3][2]} />
                <C4tile value={tiles[4][2]} />
                <C4tile value={tiles[5][2]} />
            </div>
            <div className='column' onClick={() => onColumnClick(3)}>
                <C4tile value={tiles[0][3]} />
                <C4tile value={tiles[1][3]} />
                <C4tile value={tiles[2][3]} />
                <C4tile value={tiles[3][3]} />
                <C4tile value={tiles[4][3]} />
                <C4tile value={tiles[5][3]} />
            </div>
            <div className='column' onClick={() => onColumnClick(4)}>
                <C4tile value={tiles[0][4]} />
                <C4tile value={tiles[1][4]} />
                <C4tile value={tiles[2][4]} />
                <C4tile value={tiles[3][4]} />
                <C4tile value={tiles[4][4]} />
                <C4tile value={tiles[5][4]} />
            </div>

            <div className='column' onClick={() => onColumnClick(5)}>
                <C4tile value={tiles[0][5]} />
                <C4tile value={tiles[1][5]} />
                <C4tile value={tiles[2][5]} />
                <C4tile value={tiles[3][5]} />
                <C4tile value={tiles[4][5]} />
                <C4tile value={tiles[5][5]} />
            </div>
            <div className='column' onClick={() => onColumnClick(6)}>
                <C4tile value={tiles[0][6]} />
                <C4tile value={tiles[1][6]} />
                <C4tile value={tiles[2][6]} />
                <C4tile value={tiles[3][6]} />
                <C4tile value={tiles[4][6]} />
                <C4tile value={tiles[5][6]} />
            </div>
        </div>
    );
}
export default Connect4;