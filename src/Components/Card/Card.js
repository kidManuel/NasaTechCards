import React from 'react';
import PropTypes from 'prop-types';

function CardBase({ children }) {
    return (
        <div className="CardBody">
            {
                children.map((slice, index) => <div key={index} className="CardComponent">{slice}</div>)
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
