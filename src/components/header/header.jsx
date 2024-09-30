import styles from './header.module.css'
function Header({ text, onImgClick }) {
    return (
        <div className={styles.header}>
            <img src="../../images/online game logo.png" alt="" onClick={onImgClick} />
            <h1 className="title">{text}</h1>
            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Feedback</li>

            </ul>
        </div>
    );
}
export default Header