import PropTypes from 'prop-types';

export default {
    currentColor: PropTypes.string.isRequired,
    currentText: PropTypes.string,
    handleSelection: PropTypes.func.isRequired,
    highlightColor: PropTypes.string.isRequired,
    onSelection: PropTypes.func.isRequired,
    onTextInput: PropTypes.func.isRequired
};
