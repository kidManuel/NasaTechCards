import React from 'react';
import PropTypes from 'prop-types';

function CardTitle({ text, customStyle }) {
    return (
        <h2 className="CardTitle" style={customStyle}>{text}</h2>
    );
}

export default CardTitle;

CardTitle.propTypes = {
    text: PropTypes.string.isRequired,
};
