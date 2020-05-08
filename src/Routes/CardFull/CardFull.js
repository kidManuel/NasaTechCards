import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

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
} from '../../Components';
import styles from './styles';

const CardFull = ({ data }) => {
    const classes = styles();
    const theme = TechportTheme();
    const history = useHistory();

    const {
        cardFullContainer,
        overlayWrapper,
        status: statusClass,
        title: titleClass,
        paragraph: paragraphClass,
        bodyContent,
        labeledData: fullInfo,
        viewLess,
        acroHighlight,
        bookmark,
    } = classes;

    const {
        modalContainer,
        textRead,
        title: themeTitle,
        status: themedStatus,
        labeledData,
        labeledButton,
        superHighlight,
        bookmark: themedBookmark,
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

    const handleClick = () => (
        history.length > 2 ? () => { history.goBack() } : () => { history.push('/') }
    );

    const getViewLessButton = () => (
        <div onClick={handleClick()} className="labeledButton">-</div>
    );

    return (
        <div className={overlayWrapper}>
            <Card customClass={`${cardFullContainer} ${modalContainer}`}>
                <SimpleOnOff
                    customClass={`${themedBookmark} ${bookmark}`}
                />
                <StatusIndicator
                    label="status"
                    currentStatus={status}
                    customClass={`${themedStatus} ${statusClass}`}
                    statusTheme={techportStatusColors}
                />

                {
                    acronym ? <div className={`${superHighlight} ${acroHighlight}`}><h1 >{acronym}</h1></div> : null
                }

                <div className={bodyContent}>
                    <Title
                        text={title}
                        customClass={`${themeTitle} ${titleClass}`}
                    />
                    <Paragraph
                        text={description}
                        customClass={`${textRead} ${paragraphClass}`}
                    />
                    <Title
                        text="Benefits"
                        customClass={`${themeTitle} ${titleClass} benefits`}
                    />
                    <Paragraph
                        text={benefits}
                        customClass={`${textRead} ${paragraphClass}`}
                    />
                </div>
                <LabeledData
                    data={getLabeledData()}
                    customClass={`${labeledData} ${fullInfo}`}
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
