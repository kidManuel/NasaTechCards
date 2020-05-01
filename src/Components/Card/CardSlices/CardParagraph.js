import React from 'react';
import PropTypes from 'prop-types';

function CardParagraph({ text }) {
    return (
        <h2 className="CardParagraph">{text}</h2>
    );
}

export default CardParagraph;

CardParagraph.propTypes = {
    text: PropTypes.string.isRequired,
};
