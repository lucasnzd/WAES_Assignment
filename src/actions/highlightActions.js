import { ADD_NOTE, ADD_TEXT, HIGHLIGHT_TEXT } from './actionTypes';

const addNote = (note) => {
    return { type: ADD_NOTE, note };
};

const addText = (text) => {
    return { type: ADD_TEXT, text };
};

const highlightText = (selection) => {
    return { type: HIGHLIGHT_TEXT, selection };
};

export {
    addNote,
    addText,
    highlightText
};
