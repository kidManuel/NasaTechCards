import React from 'react';
import PropTypes from 'prop-types';
import TextClamp from '../../TextClamp';

function CardTitle({ text, customClass, textClamp }) {
    const getText = () => {
        return textClamp ? <TextClamp params={textClamp} text={text} /> : text;
    }

    return (
        <h2 className={`CardTitle ${customClass}`} >{
            // ensure component degrades gracefully if a bad textClamp param is passed
            getText() || text
        }</h2>
    );
}

export default CardTitle;

CardTitle.propTypes = {
    text: PropTypes.string.isRequired,
};
