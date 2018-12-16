import React, { Component } from 'react';
import styles from './marker.module.css';

class MarkersBar extends Component {
    render() {
        return (
            <li
                className={`${styles.marker} ${styles.selected}`}
                style={{backgroundColor: this.props.color}}
            />
        );
    }
}

export default MarkersBar;
