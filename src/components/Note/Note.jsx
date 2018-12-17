import React, { Component } from 'react';
import noteProps from './note.props';
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

Note.propTypes = { ...noteProps };

export default Note;
