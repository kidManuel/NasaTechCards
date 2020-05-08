import React from 'react';
import PropTypes from 'prop-types';

const LabeledData = ({ data, customClass }) => {
    const keys = Object.keys(data);

    return (
        <div className={`LabeledData ${customClass}`}>
            {
                keys.map((key) => {
                    const currentKey = data[key];
                    if (currentKey) {
                        return (
                            <div className="labeledDataEntry" key={key}>
                                <h5 className="labeledDataLabel">{key}</h5>
                                {
                                    Array.isArray(currentKey) ?
                                        <ul className="labeledDataValueList">
                                            {
                                                currentKey.map((currentValue) => {
                                                    return <li>
                                                        <h4 className="labeledDataValue">{currentValue}</h4>
                                                    </li>
                                                })
                                            }
                                        </ul> :
                                        <h4 className="labeledDataValue">{currentKey}</h4>
                                }
                            </div>)
                    } else return null;
                })
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
