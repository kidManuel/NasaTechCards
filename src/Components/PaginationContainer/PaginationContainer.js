import React from 'react';
import PropTypes from 'prop-types';

import './PaginationContainer.css';

function PaginationContainer({ children }) {
    return (
        <div className="PaginationContainer">
            {children.map((content, index) => <div key={index} className="CardComponent">{content}</div>)}
        </div>
    );
}

export default PaginationContainer;

PaginationContainer.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.object,
    ),
};

PaginationContainer.defaultProps = {
    children: null,
};
