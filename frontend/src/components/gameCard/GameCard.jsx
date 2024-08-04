import styles from './GameCard.module.css'

function GameCard({ onCardClick,imgPath,gameName, playerCount, gameDuration}) {
    return (
        <div className={styles.gameCard} onClick={onCardClick}>
            <img src={imgPath} />

            <div className="cardDescription">
                <span>{gameName} |</span>
                <img src="src/assets/players-icon.svg" alt="" />
                <span> {playerCount} |</span>
                <img src="src/assets/timer-icon.svg" alt="" />
                <span>{gameDuration}</span>
            </div>
        </div>
    );
}
export default GameCard;