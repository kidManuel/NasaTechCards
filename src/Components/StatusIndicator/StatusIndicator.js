import React from 'react';
import PropTypes from 'prop-types';

const StatusIndicator = ({ label, currentStatus, statusTheme, customClass }) => {
    // No functionality to change status 'on-the-fly' to keep it stateless.
    const { statusText, statusColor, statusTextColor } = statusTheme[currentStatus];

    const pillStyles = {
        backgroundColor: statusColor,
        color: statusTextColor
    }

    return (
        <div className={`statusIndicator ${currentStatus} ${customClass}`}>
            {label ? <span className='statusLabel'>{label}</span> : null}
            <div className='statusPill' style={pillStyles}>
                {statusText}
            </div>
        </div>
    );
};

export default StatusIndicator;

StatusIndicator.propTypes = {
    label: PropTypes.string,
    initialStatus: PropTypes.string.isRequired,
    customClass: PropTypes.string,
    statusTheme: PropTypes.arrayOf([
        PropTypes.object
    ])
}
