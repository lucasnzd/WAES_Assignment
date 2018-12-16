import React, { Component } from 'react';
import SectionLabel from '../SectionLabel';
import styles from './section.module.css';

class Logo extends Component {
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

export default Logo;
