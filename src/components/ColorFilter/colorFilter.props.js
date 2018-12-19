import PropTypes from 'prop-types';

export default {
    markerColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onFilterClick: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired
};
