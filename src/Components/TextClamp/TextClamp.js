import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'

const TextClamp = ({ params, text }) => {
    const { lines } = params;
    if (!(lines && typeof lines === 'number')) {
        throw new Error('You must provide a number of lines to clamp to')
    }

    return (
        <LinesEllipsis ellipsis="-" text={text} maxLine={2} />
    );
};

export default TextClamp;

TextClamp.propTypes = {
    params: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
}
