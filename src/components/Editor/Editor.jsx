import React, { Component }from 'react';
import editorProps from './editor.props';
import styles from './editor.module.css';

class Editor extends Component {

    handleChange = (event) => {
        event.preventDefault();
        this.props.onTextInput(event.target.value);
    }

    highlightText = () => {
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

    render() {
        return (
            <div className={styles.highlighterArea}>
                <label htmlFor="highlighter_area">Enter some text to highlight and take notes</label>
                <textarea
                    name="highlighter_area"
                    className={`${styles.editor} ${styles[this.props.currentColor]}`}
                    onChange={this.handleChange}
                    placeholder="Enter some text here..."
                    value={this.highlightText()}
                    onSelect={this.handleSelectedText}
                />
            </div>
        );
    }
}

Editor.propTypes = { ...editorProps };

export default Editor;
