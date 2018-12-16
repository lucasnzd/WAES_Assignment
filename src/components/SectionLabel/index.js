import React, { Component }from 'react';
import styles from './sectionLabel.module.css';

class NotesDisplay extends Component {
    render() {
        return (
            <h2 className={styles.sectionLabel}>
                { this.props.text }
            </h2>
        );
    }
}

export default NotesDisplay;
