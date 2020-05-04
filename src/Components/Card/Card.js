import React from 'react';
import PropTypes from 'prop-types';

function CardBase({ children, customClass }) {
    return (
        <div className={`CardBody ${customClass}`}>
            {
                React.Children.map(children, (child) => child)
            }
        </div>
    );
}

export default CardBase;

CardBase.propTypes = {
    children: PropTypes.arrayOf(
        PropTypes.object,
    ).isRequired,
};
