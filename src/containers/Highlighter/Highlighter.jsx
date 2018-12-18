import React, { Component }from 'react';
import { connect } from 'react-redux'
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

const mapStateToProps = state => {
    return {
        // TODO: add state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // TODO: add dispatch actions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Highlighter);
