import React, { Component }from 'react';
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

export default TextEditor;
