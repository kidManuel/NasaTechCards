import React from 'react';
import PropTypes from 'prop-types';

const LabeledButton = ({ label, button, customClass }) => (
    <div className={`labeledButtonWrapper ${customClass}`}>
        <h4 className="labeledButtonLabel">
            {label}
        </h4>
        {button || <div className="labeledButton" />}
    </div>
);

export default LabeledButton;

LabeledButton.propTypes = {
    label: PropTypes.string,
    customClass: PropTypes.string,
    button: PropTypes.element,
};

LabeledButton.defaultProps = {
    label: '',
    customClass: '',
    button: null,
};
