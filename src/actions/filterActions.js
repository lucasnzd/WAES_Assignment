import { FILTER_BY, SHOW_ALL } from './actionTypes';

const filterBy = options => {
    return { type: FILTER_BY, options };
};

const showAll = () => {
    return { type: SHOW_ALL };
};

export {
    filterBy,
    showAll
};
