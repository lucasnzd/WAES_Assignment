import { FILTER_BY, SHOW_ALL } from '../actions/actionTypes';

const initialState = {
    options: {
        first_color: true,
        second_color: true,
        third_color: true
    }
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY: {
            return {
                ...state,
                options: { ...action.options }
            };
        }
        case SHOW_ALL: {
            return {
                ...state,
                options: { ...initialState.options }
            };
        }
        default:
            return state;
    }
};

export default filterReducer;
