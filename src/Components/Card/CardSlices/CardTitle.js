import React from 'react';
import PropTypes from 'prop-types';

function CardTitle({ text, customClass }) {
    return (
        <h2 className={`CardTitle ${customClass}`} >{text}</h2>
    );
}

export default CardTitle;

CardTitle.propTypes = {
    text: PropTypes.string.isRequired,
};
