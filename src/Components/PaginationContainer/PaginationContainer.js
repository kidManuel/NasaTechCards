import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

function PaginationContainer({ children }) {
    const elements = children.length ? children : [children];
    const { paginationContainer } = styles;

    return (
        <div className="paginationContainer" style={paginationContainer}>
            {
                elements.map((item, index) => <div key={index} className="paginationContainerElement">{item}</div>)
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
    children: [],
};
