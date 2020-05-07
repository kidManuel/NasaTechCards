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
} from '../Components';
import styles from './styles';


function TechportCard({ title, paragraph, projectStatus }) {
    const { CardTitle, CardParagraph, ViewMore } = Slices;
    const classes = styles();
    const themeClasses = TechportTheme();

    const { modalContainer, textRead, title: themeTitle } = themeClasses;
    const {
        base,
        title: titleClass,
        paragraph: paragraphClass,
        status: statusClass,
        bookmark,
        viewMore
    } = classes;


    const getViewMoreButton = () => (
        <Link to="/card/:cardId" className="anchor">
            <div className="viewMoreButton">+</div>
        </Link>
    );


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
            <ViewMore
                label="More"
                button={getViewMoreButton()}
                customClass={viewMore}
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
