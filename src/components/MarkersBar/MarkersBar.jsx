import React, { Component } from 'react';
import markersBarProps from './markersBar.props';
import Marker from '../Marker';
import Button from '../Button';
import styles from './markersBar.module.css';

class MarkersBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        };
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    handleOnClick = (color) => {
        this.props.onColorChange(color);
    }

    generateMarkers = () => {
        const markers = this.props.markersColors;
        if (markers.length === 0) return;

        return markers.map((color, i) =>
            <Marker
                key={`${color}_${i}`}
                color={color}
                handleClick={this.handleOnClick}
                clickParam="color"
                selected={this.props.highlightColor === color}
            />
        );
    }

    render = () => {
        const toggle = this.state.toggle;
        return (
            <nav className={styles.navbar}>
                <div className={`${styles.markersContainer} ${toggle && styles.open}`}>
                    <ul className={styles.markers}>
                        { this.generateMarkers() }
                    </ul>
                    {/* TODO: REFACTOR THIS FOR ANOTHER MARKER BAR BTN COMPONENT */}
                    <div className={styles.navButton}>
                        <Button
                            text={toggle ? 'hide' : 'show'}
                            callback={this.handleToggle}
                        />
                    </div>
                </div>
            </nav>
        );
    }
}

MarkersBar.propTypes = { ...markersBarProps };

export default MarkersBar;
