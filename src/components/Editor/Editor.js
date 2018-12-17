import React, { Component }from 'react';
import editorProps from './editor.props';
import styles from './editor.module.css';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Enter some text to highlight and take notes...'
        };
        this.handleChange = this.handleChange.bind(this);
    } 

    handleChange(event) {
        event.preventDefault();
        this.setState({
            text: event.target.value
        });
    }

    render() {
        return (
            <textarea className={styles.editor} onChange={this.handleChange} value={this.state.text} />
        );
    }
}

Editor.propTypes = { ...editorProps };

export default Editor;
