import React, { Component } from 'react';
import displayProps from './display.props';
import Note from '../Note';
import styles from './display.module.css';

class Display extends Component {
    constructor(props) {
        super(props);
        this.mappedNotes = this.mappedNotes.bind(this);
    }

    mappedNotes() {
        if (this.props.notes.length === 0) return;

        return this.props.notes.map(
            (noteText, index) =>
                <Note
                    key={`${this.props.color}_${index}`}
                    text={noteText}
                    color={this.props.color}
                />
        );
    }

    render() {
        return (
            <div className={styles.display}>
                { this.mappedNotes() }
            </div>
        );
    }
}

Display.propTypes = { ...displayProps };

export default Display;
