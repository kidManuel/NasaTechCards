import React from 'react';
import PropTypes from 'prop-types';

import { PaginationContainer, TechportTheme } from '../../Components';
import TechportCard from '../../TechportCard';
import styles from './styles';


const LastUpdated = ({ content }) => {
    const classes = styles();
    const theme = TechportTheme();

    return (
        <div className="lastUpdated">

            <PaginationContainer
                itemsPerSlide={6}
                customClassName={`
                    ${theme.pagination}
                    ${classes.container}
                `}
            >
                {
                    content.map((singleProject, index) => (
                        <TechportCard
                            key={index}
                            title={singleProject.title}
                            paragraph={singleProject.description}
                            projectStatus={singleProject.status}
                        />
                    ))
                }
            </PaginationContainer>
        </div>
    );
};

export default LastUpdated;

LastUpdated.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
};
