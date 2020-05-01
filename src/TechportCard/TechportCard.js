import React from 'react';
import PropTypes from 'prop-types';
import Card, { Slices } from '../Components/Card';

function TechportCard({ title, paragraph }) {
    const { CardTitle, CardParagraph } = Slices;

    return (
        <Card>
            <CardTitle text={title} />
            <CardParagraph text={paragraph} />
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
