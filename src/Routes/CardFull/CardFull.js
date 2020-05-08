import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    Card,
    Slices,
    StatusIndicator,
    TechportTheme,
    techportStatusColors,
    SimpleOnOff,
    LabeledData,
} from '../../Components';
import styles from './styles';

const { CardTitle, CardParagraph, LabeledButton } = Slices;


const CardFull = ({ data }) => {
    const classes = styles();
    const theme = TechportTheme();

    const {
        cardFullContainer,
        overlayWrapper,
        status: statusClass,
        title: titleClass,
        paragraph: paragraphClass,
        bodyContent,
        labeledData: fullInfo,
        viewLess
    } = classes;

    const {
        modalContainer,
        textRead,
        title: themeTitle,
        status: themedStatus,
        labeledData,
        labeledButton,
    } = theme;

    const {
        status,
        title,
        description,
        benefits,
        endDate,
        destinations,
        lastUpdated,
        startDate,
        acronym,
        id
    } = data;

    const getLabeledData = () => (
        {
            'Last Updated': lastUpdated,
            'Start Date': startDate,
            'End Date': endDate,
            'Destinations': destinations,
            'Acronym': acronym,
            'ID': id,
        }
    );

    const getViewLessButton = () => (
        <Link
            to={`/card/${id}`}
            className="anchor"
        >
            <div className="labeledButton">-</div>
        </Link>
    );

    return (
        <div className={overlayWrapper}>
            <Card customClass={`${cardFullContainer} ${modalContainer}`}>
                <StatusIndicator
                    label="status"
                    currentStatus={status}
                    customClass={`${themedStatus} ${statusClass}`}
                    statusTheme={techportStatusColors}
                />
                <div className={bodyContent}>
                    <CardTitle
                        text={title}
                        customClass={`${themeTitle} ${titleClass}`}
                    />
                    <CardParagraph
                        text={description}
                        customClass={`${textRead} ${paragraphClass} `}
                    />
                    <CardTitle
                        text="Benefits"
                        customClass={`${themeTitle} ${titleClass} benefits`}
                    />
                    <CardParagraph
                        text={benefits}
                        customClass={`${textRead} ${paragraphClass} `}
                    />
                </div>
                <LabeledData
                    data={getLabeledData()}
                    customClass={`${labeledData} ${fullInfo} `}
                />
                <LabeledButton
                    label="Less"
                    button={getViewLessButton()}
                    customClass={`${labeledButton} ${viewLess}`}
                />
            </Card>
        </div>
    );
};

export default CardFull;

CardFull.propTypes = {
    data: PropTypes.object.isRequired,
};
