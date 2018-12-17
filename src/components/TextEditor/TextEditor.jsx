import React, { Component }from 'react';
import textEditorProps from './textEditor.props';
import MarkersBar from '../MarkersBar';
import Editor from '../Editor';
import styles from './textEditor.module.css'; 

class TextEditor extends Component {
    render() {
        return (
            <div className={styles.editorContainer}>
                <MarkersBar />
                <Editor />
            </div>
        );
    }
}

TextEditor.propTypes = { ...textEditorProps };

export default TextEditor;
