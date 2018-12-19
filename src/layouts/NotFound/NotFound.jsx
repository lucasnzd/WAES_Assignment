import React, { Component }from 'react';
import Header from '../../components/Header';
import Section from '../../components/Section';
import { Link } from 'react-router-dom';
import styles from './notFound.module.css';

class NotFound extends Component {
    render = () => {
        return (
            <main>
                <Header />
                <Section title="Sorry, it wasn't possible to reach that url :(">
                    <div className={styles.link}>
                        <Link to="/">Go back to the Highlighter app</Link>
                    </div>
                </Section>
            </main>
        );
    }
}

export default NotFound;
