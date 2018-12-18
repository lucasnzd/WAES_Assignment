import { SET_CURRENT_COLOR } from '../actions/actionTypes';

const initialState = {
    highlight_color: '#606060',
    marker_colors: ['#00E676', '#FFFF00', '#E57373']
};

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_COLOR: {
            return {
                ...state,
                highlight_color: action.color
            };
        }
        default:
            return state;
    }
};

export default colorReducer;
