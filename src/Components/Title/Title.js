import React from 'react';
import PropTypes from 'prop-types';
import { TextClamp } from '../';

function Title({ text, customClass, textClamp }) {
    const getText = () => {
        return textClamp ? <TextClamp params={textClamp} text={text} /> : text;
    }

    return (
        <div className={`title ${customClass}`} >{
            // ensure component degrades gracefully if a bad textClamp param is passed
            getText() || text
        }</div>
    );
}

export default Title;

Title.propTypes = {
    text: PropTypes.string.isRequired,
};
