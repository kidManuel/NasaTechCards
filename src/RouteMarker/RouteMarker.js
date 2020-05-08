import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';


function RouteMarker({ currentRoute }) {
    const classes = styles();
    const { container, text } = classes;
    const routeClass = currentRoute.replace(' ', '');

    return (
        <div className={`${container} ${routeClass}`}>
            <div className={text}>
                <h3>{currentRoute}</h3>
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
