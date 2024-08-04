import styles from './header.module.css'
function Header({text}){
return (
    <div className={styles.header}>
        <img src="src/assets/online game logo.png" alt="" />
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