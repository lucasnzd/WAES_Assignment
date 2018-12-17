import React, { Component } from 'react';
import sectionProps from './section.props';
import SectionLabel from '../SectionLabel';
import styles from './section.module.css';

class Section extends Component {
    render() {
        const title = this.props.title;
        return (
            <section className={styles.sectionCard}>
                { title && <SectionLabel text={title} /> }
                { this.props.children }
            </section>
        );
    }
}

Section.propTypes = { ...sectionProps };

export default Section;
