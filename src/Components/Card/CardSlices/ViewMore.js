import React from 'react';
import PropTypes from 'prop-types';

const ViewMore = ({ label, button, customClass }) => (
    <div className={`viewMore ${customClass}`}>
        <h4 className="viewMoreLabel">
            {label}
        </h4>
        {button || <div className="viewMoreButton" />}
    </div>
);

export default ViewMore;

ViewMore.propTypes = {
    label: PropTypes.string,
    customClass: PropTypes.string,
    button: PropTypes.element,
};

ViewMore.defaultProps = {
    label: '',
    customClass: '',
    button: null,
};
