import React from 'react';
import PropTypes from 'prop-types';

import {
    Card,
    Slices,
    StatusIndicator,
    TechportTheme,
    techportStatusColors,
    SimpleOnOff,
} from '../Components';
import styles from './styles';


function TechportCard({ title, paragraph, projectStatus }) {
    const classes = styles();
    const themeClasses = TechportTheme();

    const { modalContainer, textRead, title: themeTitle } = themeClasses;
    const {
        base,
        title: titleClass,
        paragraph: paragraphClass,
        status: statusClass,
        bookmark,
    } = classes;

    const { CardTitle, CardParagraph } = Slices;

    return (
        <Card customClass={`${base} ${modalContainer}`}>
            <StatusIndicator
                label="status"
                currentStatus={projectStatus}
                customClass={statusClass}
                statusTheme={techportStatusColors}
            />
            <SimpleOnOff
                customClass={bookmark}
            />
            <CardTitle
                text={title}
                customClass={`${themeTitle} ${titleClass}`}
                textClamp={{ lines: 2 }}
            />
            <CardParagraph
                text={paragraph}
                customClass={`${textRead} ${paragraphClass}`}
                textClamp={{ lines: 2 }}
            />
        </Card>
    );
}

export default TechportCard;

TechportCard.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    projectStatus: PropTypes.string,
};

TechportCard.defaultProps = {
    title: '',
    paragraph: '',
    projectStatus: '',
};
