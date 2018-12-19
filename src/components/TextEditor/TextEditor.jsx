import React, { Component }from 'react';
import textEditorProps from './textEditor.props';
import MarkersBar from '../MarkersBar';
import Editor from '../Editor';
import styles from './textEditor.module.css';

class TextEditor extends Component {

    getCurrentColor = () => {
        const highlightColor  = this.props.highlightColor;
        const options = this.props.markersColors;
        if (options[0] === highlightColor) return 'firstColor';
        if (options[1] === highlightColor) return 'secondColor';
        if (options[2] === highlightColor) return 'thirdColor';
    }

    render = () => {
        return (
            <div className={styles.editorContainer}>
                <MarkersBar
                    markersColors={this.props.markersColors}
                    onColorChange={this.props.onColorChange}
                    highlightColor={this.props.highlightColor}
                />
                <Editor
                    currentColor={this.getCurrentColor()}
                    currentText={this.props.currentText}
                    highlightColor={this.props.highlightColor}
                    onSelection={this.props.onSelection}
                    handleSelection={this.props.handleSelection}
                    onTextInput={this.props.onTextInput}
                />
            </div>
        );
    }
}

TextEditor.propTypes = { ...textEditorProps };

export default TextEditor;
