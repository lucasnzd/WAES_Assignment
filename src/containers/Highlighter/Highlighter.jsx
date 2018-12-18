import React, { Component }from 'react';
import { connect } from 'react-redux';
import {
    addNote,
    addText,
    highlightText,
    setCurrentColor } from '../../actions';
import Section from '../../components/Section';
import TextEditor from '../../components/TextEditor';

class Highlighter extends Component {
    render() {
        return (
            <Section title="highlighter">
                <TextEditor
                    highlightColor={this.props.highlightColor}
                    markersColors={this.props.markersColors}
                    currentText={this.props.textInput}
                    onSelection={this.props.onSelection}
                    handleSelection={this.props.handleSelection}
                    onTextInput={this.props.onTextInput}
                    onColorChange={this.props.onColorChange}
                />
            </Section>
        );
    }
}

const mapStateToProps = state => {
    return {
        highlightColor: state.color.highlight_color,
        markersColors: state.color.marker_colors,
        textInput: state.highlight.textInput
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelection: selection => dispatch(highlightText(selection)),
        handleSelection: note => dispatch(addNote(note)),
        onTextInput: text => dispatch(addText(text)),
        onColorChange: color => dispatch(setCurrentColor(color))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Highlighter);
