import React from 'react';
import PropTypes from 'prop-types';
import TextClamp from '../../TextClamp';

function CardTitle({ text, customClass, textClamp }) {
    const getText = () => {
        return textClamp ? <TextClamp params={textClamp} text={text} /> : text;
    }

    return (
        <div className={`CardTitle ${customClass}`} >{
            // ensure component degrades gracefully if a bad textClamp param is passed
            getText() || text
        }</div>
    );
}

export default CardTitle;

CardTitle.propTypes = {
    text: PropTypes.string.isRequired,
};
