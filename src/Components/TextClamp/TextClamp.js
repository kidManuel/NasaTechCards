import React from 'react';
import PropTypes from 'prop-types';
import ClampLines from 'react-clamp-lines';

const TextClamp = ({ params, text }) => {
    const { lines } = params;
    if (!(lines && typeof lines === 'number')) {
        throw new Error('You must provide a number of lines to clamp to')
    }

    return (
        <ClampLines buttons={false} text={text} {...params} />
    );
};

export default TextClamp;

TextClamp.propTypes = {
    params: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
}
