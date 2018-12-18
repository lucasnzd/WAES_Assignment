import { ADD_NOTE, ADD_TEXT, HIGHLIGHT_TEXT } from './actionTypes';

export const addNote = (note) => {
    return { type: ADD_NOTE, note };
};

export const addText = (text) => {
    return { type: ADD_TEXT, text };
};

export const highlightText = (selection) => {
    return { type: HIGHLIGHT_TEXT, selection };
};

export default {
    addNote,
    addText,
    highlightText
};
