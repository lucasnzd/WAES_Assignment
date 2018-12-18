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
        this.generateMarkers = this.generateMarkers.bind(this);
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
        if (this.props.markersColors.length === 0) return;
        const markersColors = this.props.markersColors;
        return markersColors.map((color, i) => <Marker
                key={`${color}_${i}`}
                color={color}
                handleClick={this.handleOnClick}
                clickParam="color"
                selected={false}
            />
        );
    }

    render() {
        const toggle = this.state.toggle;
        return (
            <nav className={styles.navbar}>
                <div className={`${styles.markersContainer} ${toggle && styles.open}`}>
                    <ul className={styles.markers}>
                        { this.generateMarkers() }
                    </ul>
                    {/* REFACTOR THIS FOR ANOTHER MARKER BAR BTN COMPONENT */}
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
