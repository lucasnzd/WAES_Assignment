import React, { Component }from 'react';
import editorProps from './editor.props';
import styles from './editor.module.css';

class Editor extends Component {

    handleChange = (event) => {
        event.preventDefault();
        this.props.onTextInput(event.target.value);
    }

    highlightText = () => {
        // TODO: Add functionality to add markup into the textarea
        return this.props.currentText
    }

    getTextSelection = () => {
        let text = '';
        if (window.getSelection) {
            text = window.getSelection().toString(); 
        } else if (document.selection && document.selection.type !== "Control") {
            text = document.selection.createRange().text;
        }
        return text;
    }

    handleSelectedText = (event) => {
        event.preventDefault();
        let selection = this.getTextSelection();

        if (selection) {
            this.props.onSelection(selection);
            this.props.handleSelection({
                color: this.props.highlightColor,
                value: selection
            });
        };
    }

    render = () => {
        return (
            <div className={styles.highlighterArea}>
                <label htmlFor="highlighter_area">
                    Enter some text to highlight and take notes
                </label>
                <textarea
                    className={`${styles.editor} ${styles[this.props.currentColor]}`}
                    name="highlighter_area"
                    onChange={this.handleChange}
                    onSelect={this.handleSelectedText}
                    placeholder="Enter some text here..."
                    value={this.highlightText()}
                />
            </div>
        );
    }
}

Editor.propTypes = { ...editorProps };

export default Editor;
