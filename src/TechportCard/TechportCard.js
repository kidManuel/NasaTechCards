import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
    Card,
    StatusIndicator,
    TechportTheme,
    techportStatusColors,
    SimpleOnOff,
    LabeledData,
    Title,
    Paragraph,
    LabeledButton
} from '../Components';
import styles from './styles';


function TechportCard({ cardData, toggleSelectedCallback }) {
    const [selected, setSelected] = useState(false);

    const {
        title,
        description,
        status,
        id,
        lastUpdated,
        startDate,
    } = cardData;
    const classes = styles();
    const themeClasses = TechportTheme();

    const {
        modalContainer,
        textRead,
        title: themeTitle,
        status: themedStatus,
        labeledData,
        labeledButton,
        selectCheckbox,
    } = themeClasses;

    const {
        base,
        title: titleClass,
        paragraph: paragraphClass,
        select,
        viewMore,
        projectDates,
        status: statusClass,
    } = classes;


    const getViewMoreButton = () => (
        <Link
            to={`/card/${id}`}
            className="anchor"
        >
            <div className="labeledButton">+</div>
        </Link>
    );

    const getLabeledData = () => (
        {
            'Last Updated': lastUpdated,
            'Start Date': startDate,
        }
    );

    const toggleSelected = (newState) => {
        setSelected(newState);
    }

    return (
        <Card customClass={`${base} ${modalContainer} ${selected ? 'selected' : null}`}>
            <StatusIndicator
                label="status"
                currentStatus={status}
                customClass={`${themedStatus} ${statusClass}`}
                statusTheme={techportStatusColors}
            />
            <SimpleOnOff
                customClass={`${selectCheckbox} ${select}`}
                stateChangeCallback={toggleSelected}
            />
            <Title
                text={title}
                customClass={`${themeTitle} ${titleClass}`}
                textClamp={{ lines: 2 }}
            />
            <Paragraph
                text={description}
                customClass={`${textRead} ${paragraphClass}`}
                textClamp={{ lines: 2 }}
            />
            <LabeledData data={getLabeledData()} customClass={`${labeledData} ${projectDates} `} />
            <LabeledButton
                label="More"
                button={getViewMoreButton()}
                customClass={`${labeledButton} ${viewMore}`}
            />
        </Card>
    );
}

export default TechportCard;

TechportCard.propTypes = {
    cardData: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        status: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
};
