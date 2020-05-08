import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    Slices,
    StatusIndicator,
    TechportTheme,
    techportStatusColors,
    SimpleOnOff,
} from '../../Components';

import styles from './styles';


const CardFull = ({ data }) => {
    const classes = styles();
    const theme = TechportTheme();

    const {
        cardFullContainer,
        overlayWrapper,
        status: statusClass,
    } = classes;

    const {
        modalContainer,
        textRead,
        title: themeTitle,
        status: themedStatus,
    } = theme;

    const { status } = data;

    return (
        <div className={overlayWrapper}>
            <Card customClass={`${cardFullContainer} ${modalContainer}`}>
                <StatusIndicator
                    label="status"
                    currentStatus={status}
                    customClass={`${themedStatus} ${statusClass}`}
                    statusTheme={techportStatusColors}
                />
            </Card>
        </div>
    );
};

export default CardFull;

CardFull.propTypes = {
    data: PropTypes.object.isRequired,
};
