import PropTypes from 'prop-types';

export default {
    markerColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    notes: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })).isRequired,
    options: PropTypes.object.isRequired
};
