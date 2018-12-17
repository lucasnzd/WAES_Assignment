import React, { Component }from 'react';
import Section from '../../components/Section';
import TextEditor from '../../components/TextEditor';

class Highlighter extends Component {
    render() {
        return (
            <Section title="highlighter">
                <TextEditor />
            </Section>
        );
    }
}

export default Highlighter;
