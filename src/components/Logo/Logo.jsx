import React, { Component } from 'react';
import logoProps from './logo.props';
import styles from './logo.module.css';

class Logo extends Component {
    render = () => {
        return (
            <div className={styles.logoContainer}>
                <img src={this.props.src} alt={this.props.alt} />
            </div>
        );
    }
}

Logo.propTypes = { ...logoProps };

export default Logo;
