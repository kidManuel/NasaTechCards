import React from 'react';
import PropTypes from 'prop-types';

function CardParagraph({ text, customStyle }) {
    return (
        <p className="CardParagraph" style={customStyle}>{text}</p>
    );
}

export default CardParagraph;

CardParagraph.propTypes = {
    text: PropTypes.string.isRequired,
};
