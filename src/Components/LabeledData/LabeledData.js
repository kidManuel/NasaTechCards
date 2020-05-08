import React from 'react';
import PropTypes from 'prop-types';

const LabeledData = ({ data, customClass }) => {
    const keys = Object.keys(data);

    return (
        <div className={`LabeledData ${customClass}`}>
            {
                keys.map((key) => (
                    <div className="labeledDataEntry" key={key}>
                        <h5 className="labeledDataLabel">{key}</h5>
                        <h4 className="labeledDataValue">{data[key]}</h4>
                    </div>
                ))
            }
        </div>
    );
};

export default LabeledData;

LabeledData.propTypes = {
    data: PropTypes.object.isRequired,
    customClass: PropTypes.string,
};

LabeledData.defaultProps = {
    customClass: '',
};
