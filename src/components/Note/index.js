import React, { Component } from 'react';
import styles from './note.module.css';

class Note extends Component {
    render() {
        return (
            <span
                className={styles.note}
                style={{backgroundColor: this.props.color}}>
                { this.props.text }
            </span>
        );
    }
}

export default Note;