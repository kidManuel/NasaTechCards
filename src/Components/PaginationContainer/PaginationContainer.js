import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

function PaginationContainer({ children, customClassName }) {
    const classes = styles();
    const elements = children.length ? children : [children];
    const { paginationContainer } = classes;

    return (
        <div className={`${paginationContainer} ${customClassName}`}>
            {
                elements.map((item) => item)
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
    customClassName: PropTypes.string
};

PaginationContainer.defaultProps = {
    children: [],
    customClassName: ''
};
