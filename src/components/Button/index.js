import React, { Component } from 'react';
import styles from './button.module.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handleCallback = this.handleCallback.bind(this);
    }

    handleCallback() {
        this.props.callback();
    }

    render() {
        return (
            <button className={styles.button} onClick={this.handleCallback}>{this.props.text}</button>
        );
    }
}

export default Button;
