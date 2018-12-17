import React, { Component } from 'react';
import displayProps from './display.props';
import Note from '../Note';
import styles from './display.module.css';

const notes = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    'Cras eu velit nec sem facilisis efficitur.',
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    'Donec pellentesque odio at felis lacinia luctus. Phasellus bibendum efficitur faucibus.',
    'Vestibulum augue velit, elementum ut est id, consectetur commodo velit.',
    'Donec euismod odio at odio consequat, euismod placerat quam tincidunt.',
    'Donec nunc nisl, gravida vitae feugiat consequat, aliquam interdum ipsum.'
];

class Display extends Component {
    constructor(props) {
        super(props);
        this.mappedNotes = this.mappedNotes.bind(this);
    }

    mappedNotes() {
        // TODO: REPLACE THIS FOR THE STATE NOTES
        return notes.map(
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
