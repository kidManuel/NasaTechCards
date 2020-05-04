import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';


function RouteMarker({ currentRoute }) {
    const classes = styles();
    const { container, text } = classes;
    const editedText = currentRoute.replace(' ', '\n')

    return (
        <div className={container}>
            <div className={text}>
                <h3>{editedText}</h3>
            </div>
        </div>
    );
}

export default RouteMarker;

RouteMarker.propTypes = {
    currentRoute: PropTypes.string,
};

RouteMarker.defaultProps = {
    currentRoute: 'Last Updated',
};
