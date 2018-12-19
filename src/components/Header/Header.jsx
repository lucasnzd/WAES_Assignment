import React, { Component } from 'react';
import headerProps from './header.props';
import Logo from '../Logo';
import styles from './header.module.css';

class Header extends Component {
    render = () => {
        return (
            <header className={styles.header}>
                <Logo src="./waes.svg" alt="Waes company logo"/> 
            </header>
        );
    }
}

Header.propTypes = { ...headerProps };

export default Header;
