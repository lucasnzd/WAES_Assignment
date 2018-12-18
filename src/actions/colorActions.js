import { SET_CURRENT_COLOR } from './actionTypes';

export const setCurrentColor = (color) => {
    return { type: SET_CURRENT_COLOR, color };
};

export default {
    setCurrentColor
};
