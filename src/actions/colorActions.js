import { SET_CURRENT_COLOR } from './actionTypes';

const setCurrentColor = color => {
    return { type: SET_CURRENT_COLOR, color };
};

export {
    setCurrentColor
};
