import React, { Component } from 'react';
import colorFilterProps from './colorFilter.props';
import Marker from '../Marker';
import styles from './colorFilter.module.css';

class ColorFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keys: Object.keys(this.props.options)
        }
    }

    handleClick = (index) => {
        const keys = this.state.keys;

        let options = { ...this.props.options };
        options[keys[index]] = !options[keys[index]];

        this.props.onFilterClick(options);
    }

    render = () => {
        const options = this.props.options;
        const keys = this.state.keys;
        return (
            <div className={styles.colorFilter}>

                <span>Filter by:</span>

                <ul className={styles.colorMarkers}>
                    { this.props.markerColors.map( (color, i) =>
                        <Marker
                            key={color}
                            id={i}
                            color={color}
                            className={styles.filterMarker}
                            handleClick={this.handleClick}
                            clickParam="id"
                            selected={options[keys[i]]}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

ColorFilter.propTypes = { ...colorFilterProps };

export default ColorFilter;
