import React from 'react';
import PropTypes from 'prop-types';

function CardParagraph({ text, customClass }) {
    return (
        <p className={`cardParagraph ${customClass}`}>{text}</p>
    );
}

export default CardParagraph;

CardParagraph.propTypes = {
    text: PropTypes.string.isRequired,
};
