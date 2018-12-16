import React, { Component } from 'react';
import Marker from '../Marker';
import Button from '../Button';
import styles from './markersBar.module.css';

class MarkersBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {
        // green, yellow, red
        const colors = ['#00E676', '#FFFF00', '#E57373'];
        const toggle = this.state.toggle;
        return (
            <nav className={styles.navbar}>
                <div className={`${styles.markersContainer} ${toggle && styles.open}`}>
                    <ul className={styles.markers}>
                        { colors.map(color => <Marker key={color} color={color} /> ) }
                    </ul>
                    <div className={styles.navButton}>
                        <Button text={toggle ? 'hide' : 'show'} callback={this.handleToggle} />
                    </div>
                </div>
            </nav>
        );
    }
}

export default MarkersBar;
