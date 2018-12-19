import PropTypes from 'prop-types';

export default {
    onColorChange: PropTypes.func.isRequired,
    markersColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlightColor: PropTypes.string.isRequired
};
