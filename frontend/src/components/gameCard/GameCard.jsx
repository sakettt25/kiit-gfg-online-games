import styles from './GameCard.module.css'

function GameCard({ onCardClick,gameName, playerCount, gameDuration}) {
    return (
        <div className={styles.gameCard} onClick={onCardClick}>
            <img src="src/assets/tictactoe-banner.png" />

            <div className="cardDescription">
                <span>{gameName} |</span>
                <img src="src/assets/players-icon.svg" alt="" />
                <span> {playerCount} |</span>
                <img src="src/assets/timer-icon.svg" alt="" />
                <span>{gameDuration} &nbsp; minutes</span>
            </div>
        </div>
    );
}
export default GameCard;