import React, { Component }from 'react';
import editorProps from './editor.props';
import styles from './editor.module.css';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '.....'
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
            <div className={styles.highlighterArea}>
                <label htmlFor="highlighter_area">Enter some text to highlight and take notes</label>
                <textarea
                    name="highlighter_area"
                    className={styles.editor}
                    onChange={this.handleChange}
                    value={this.state.text}
                />
            </div>
        );
    }
}

Editor.propTypes = { ...editorProps };

export default Editor;
