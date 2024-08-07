import './connect4.css'
import C4tile from './C4tile';
function Connect4() {
    return (
        <div className='c4board'>

            <div className='column'>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
            </div>
            <div className='column'>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
            </div>
            <div className='column'>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
            </div>
            <div className='column'>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
            </div>
            <div className='column'>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
            </div>
            <div className='column'>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
                <C4tile></C4tile>
            </div>

        </div>
    );
}
export default Connect4;