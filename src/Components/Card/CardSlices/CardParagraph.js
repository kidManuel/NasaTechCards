import React from 'react';
import PropTypes from 'prop-types';
import TextClamp from '../../TextClamp';

function CardParagraph({ text, customClass, textClamp }) {
    const getText = () => {
        return textClamp ? <TextClamp params={textClamp} text={text} /> : text;
    }

    return (
        <div className={`cardParagraph ${customClass}`}>{
            // ensure component degrades gracefully if a bad textClamp param is passed
            getText() || text
        }</div>
    );
}

export default CardParagraph;

CardParagraph.propTypes = {
    text: PropTypes.string.isRequired,
    customClass: PropTypes.string,
    clampLines: PropTypes.number
};

CardParagraph.defaultProps = {
    customClass: '',
    clampLines: null
}
