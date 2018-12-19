import React, { Component } from 'react';
import displayProps from './display.props';
import Note from '../Note';
import styles from './display.module.css';

class Display extends Component {

    checkConditions = color => {
        const colors = this.props.markerColors;
        const options = this.props.options;
        if (options.first_color  && color === colors[0]) return true;
        if (options.second_color && color === colors[1]) return true;
        if (options.third_color  && color === colors[2]) return true;
        return false;
    }

    checkNotesWithFilters = () => {
        return this.props.notes.filter(
            note => this.checkConditions(note.color)
        ).map(
            (note, index) =>
                <Note
                    key={`${note.color}_${index}`}
                    text={note.value}
                    color={note.color}
                />
        );
    }

    mappedNotes = () => {
        return !!this.props.notes.length !== 0
            ? this.checkNotesWithFilters()
            : null ;
    }

    render = () => {
        return (
            <div className={styles.display}>
                { this.mappedNotes() }
            </div>
        );
    }
}

Display.propTypes = { ...displayProps };

export default Display;
