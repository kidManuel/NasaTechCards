import React from 'react';
import PropTypes from 'prop-types';
import Card, { Slices } from '../Components/Card';
import styles from './styles'

function TechportCard({ title, paragraph }) {
    const { CardTitle, CardParagraph } = Slices;
    const { techportCardTitle, techportCardParagraph, techportCardBase } = styles;
    return (
        <Card customStyle={techportCardBase}>
            <CardTitle text={title} customStyle={techportCardTitle} />
            <CardParagraph text={paragraph} customStyle={techportCardParagraph} />
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
