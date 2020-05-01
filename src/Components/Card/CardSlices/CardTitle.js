import React from 'react';
import PropTypes from 'prop-types';

function CardTitle({ text }) {
    return (
        <h2 className="CardTitle">{text}</h2>
    );
}

export default CardTitle;

CardTitle.propTypes = {
    text: PropTypes.string.isRequired,
};
