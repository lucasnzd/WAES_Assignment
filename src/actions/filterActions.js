import { FILTER_BY, SHOW_ALL } from './actionTypes';

export const filterBy = (options) => {
    return { type: FILTER_BY, options };
};

export const showAll = () => {
    return { type: SHOW_ALL };
};

export default {
    filterBy,
    showAll
};
