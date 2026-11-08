import styles from "./footer.module.css";

function Footer() {
    return(
        <footer className={styles.footerCont}>
            <h2 className={styles.footer_h1}>© All Rights Reserved | {new Date().getFullYear()}</h2>
        </footer>
    )
}

export default Footer