import React, { Component } from 'react';
import markerProp from './marker.props';
import styles from './marker.module.css';

class Marker extends Component {

    handleOnClick = () => {
        this.props.handleClick(
            this.props[this.props.clickParam]
        );
    }

    render = () =>  {
        return (
            <li
                className={`${styles.marker} ${this.props.selected && styles.selected}`}
                style={{backgroundColor: this.props.color}}
                onClick={this.handleOnClick}
            />
        );
    }
}

Marker.propTypes = { ...markerProp };

export default Marker;
