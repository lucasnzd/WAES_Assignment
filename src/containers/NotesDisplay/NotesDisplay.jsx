import React, { Component }from 'react';
import Section from '../../components/Section';
import ColorFilter from '../../components/ColorFilter';
import Display from '../../components/Display';

class NotesDisplay extends Component {
    render() {
        return (
            <Section title="my notes">
                <ColorFilter />
                <Display />
            </Section>
        );
    }
}

export default NotesDisplay;
