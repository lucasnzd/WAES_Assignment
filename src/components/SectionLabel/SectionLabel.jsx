import React, { Component }from 'react';
import sectionLabelProps from './sectionLabel.props';
import styles from './sectionLabel.module.css';

class SectionLabel extends Component {
    render = () => {
        return (
            <h2 className={styles.sectionLabel}>
                { this.props.text }
            </h2>
        );
    }
}

SectionLabel.propTypes = { ...sectionLabelProps };

export default SectionLabel;
