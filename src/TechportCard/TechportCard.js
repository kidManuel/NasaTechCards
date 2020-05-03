import React from 'react';
import PropTypes from 'prop-types';
import Card, { Slices } from '../Components/Card';
import theme from '../Components/TechportTheme';
import styles from './styles';


function TechportCard({ title, paragraph }) {
    const classes = styles();
    const themeClasses = theme();

    const { modalContainer, textRead, title: themeTitle } = themeClasses;
    const { base, title: titleClass, paragraph: paragraphClass } = classes;

    const { CardTitle, CardParagraph } = Slices;

    return (
        <Card customClass={`${base} ${modalContainer}`}>
            <CardTitle text={title} customClass={`${themeTitle} ${titleClass}`} />
            <CardParagraph text={paragraph} customClass={`${textRead} ${paragraphClass}`} />
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
