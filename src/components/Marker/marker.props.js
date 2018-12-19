import PropTypes from 'prop-types';

export default {
    clickParam: PropTypes.string,
    color: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    selected: PropTypes.bool
};
