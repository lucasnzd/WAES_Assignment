import React, { Component } from 'react';
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
    render() {
        return (
            <div className={styles.display}>
                { notes.map( noteText => <Note text={noteText} color="#00E676"/> ) }
            </div>
        );
    }
}

export default Display;