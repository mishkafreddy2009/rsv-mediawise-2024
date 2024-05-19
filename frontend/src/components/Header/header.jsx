import React from "react";
import styles from './Header.module.css'

const Header = (props) => {

    return (
        
        <header className={styles.header}>
            <p className={styles.naming}>pied piper</p>
            <img src={require('./../../img/logo.jpg')} />
        </header>
    );
};

export default Header;