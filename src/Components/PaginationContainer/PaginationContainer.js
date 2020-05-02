import React from 'react';
import PropTypes from 'prop-types';

import './PaginationContainer.css';

function PaginationContainer({ children }) {
    const elements = children.length ? children : [children];

    return (
        <div className="PaginationContainer">
            {
                elements.map((item, index) => <div key={index} className="PaginationContainerElement">{item}</div>)
            }
        </div>
    );
}

export default PaginationContainer;

PaginationContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.object,
        ),
        PropTypes.object,
    ]),
};

PaginationContainer.defaultProps = {
    children: null,
};
