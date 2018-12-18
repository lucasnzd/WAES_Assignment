import React, { Component } from 'react';
import colorFilterProps from './colorFilter.props';
import Marker from '../Marker';
import Button from '../Button';
import styles from './colorFilter.module.css';

class ColorFilter extends Component {
    constructor(props) {
        super(props);
        this.handleShowAll = this.handleShowAll.bind(this);
    }

    handleShowAll(event) {
        // event.preventDefault();
        console.log('event', event);
    }

    render() {
        return (
            <div>
                <div className={styles.colorFilter}>
                    <span>Filter by:</span>
                    <ul className={styles.colorMarkers}>
                        { this.props.markerColors.map( color =>
                            <Marker
                                key={color} 
                                color={color}
                                className={styles.filterMarker}
                            />
                        )}
                    </ul>
                    <div className={styles.showAllBtn}>
                        <Button text="show all" callback={this.handleShowAll} />
                    </div>
                </div>
            </div>
        );
    }
}

ColorFilter.propTypes = { ...colorFilterProps };

export default ColorFilter;
