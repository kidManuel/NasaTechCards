import React from 'react';
import PropTypes from 'prop-types';

import Card, { Slices } from '../Components/Card';
import StatusIndicator from '../Components/StatusIndicator';
import theme, { techportStatusColors } from '../Components/TechportTheme';
import styles from './styles';


function TechportCard({ title, paragraph, status }) {
    const classes = styles();
    const themeClasses = theme();

    const { modalContainer, textRead, title: themeTitle } = themeClasses;
    const { base, title: titleClass, paragraph: paragraphClass, status: statusClass } = classes;

    const { CardTitle, CardParagraph } = Slices;

    return (
        <Card customClass={`${base} ${modalContainer}`}>
            <StatusIndicator label='status' currentStatus={status} customClass={statusClass} statusTheme={techportStatusColors} />
            <CardTitle text={title} customClass={`${themeTitle} ${titleClass}`} textClamp={{ lines: 2 }} />
            <CardParagraph text={paragraph} customClass={`${textRead} ${paragraphClass}`} textClamp={{ lines: 2 }} />
        </Card>
    );
}

export default TechportCard;

TechportCard.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
};

TechportCard.defaultProps = {
    title: '',
    paragraph: '',
};
