import React, { Component } from 'react';
import markerProp from './marker.props';
import styles from './marker.module.css';

class Marker extends Component {
    render() {
        return (
            <li
                className={`${styles.marker} ${styles.selected}`}
                style={{backgroundColor: this.props.color}}
            />
        );
    }
}

Marker.propTypes = { ...markerProp };

export default Marker;
