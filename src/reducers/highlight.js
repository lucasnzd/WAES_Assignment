import { HIGHLIGHT_TEXT, ADD_NOTE, ADD_TEXT } from '../actions/actionTypes';

const initialState = {
    textInput: '',
    selections: [],
    notes: []
};

const highlightReducer = (state = initialState, action) => {
    switch (action.type) {
        case HIGHLIGHT_TEXT: {
            return {
                ...state,
                selections: [ ...state.selections, action.selection ]
            };
        }
        case ADD_NOTE: {
            return {
                ...state,
                notes: [ ...state.notes, action.note ]
            };
        }
        case ADD_TEXT: {
            return {
                ...state,
                textInput: action.text
            };
        }
        default:
            return state;
    }
};

export default highlightReducer; 
