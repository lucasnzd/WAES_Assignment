import PropTypes from 'prop-types';

export default {
    currentText: PropTypes.string,
    handleSelection: PropTypes.func.isRequired,
    highlightColor: PropTypes.string.isRequired,
    markersColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    onColorChange: PropTypes.func.isRequired,
    onSelection: PropTypes.func.isRequired,
    onTextInput: PropTypes.func.isRequired
};
