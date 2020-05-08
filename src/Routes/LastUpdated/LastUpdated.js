import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PaginationContainer, TechportTheme } from '../../Components';
import TechportCard from '../../TechportCard';
import styles from './styles';


const LastUpdated = ({
    content, customClass, enterCallback, itemSelection,
}) => {
    const classes = styles();
    const theme = TechportTheme();

    useEffect(() => {
        enterCallback('Last Updated');
    }, []);

    return (
        <div className={`lastUpdated ${customClass}`}>

            <PaginationContainer
                itemsPerSlide={6}
                customClassName={`
                    ${theme.pagination}
                    ${classes.container}
                `}
            >
                {
                    content.map((singleProject) => {
                        if (singleProject) {
                            return (
                                <TechportCard
                                    cardData={singleProject}
                                    key={singleProject.id}
                                    toggleSelectedCallback={itemSelection}
                                />
                            );
                        }
                    })
                }
            </PaginationContainer>
        </div>
    );
};

export default LastUpdated;

LastUpdated.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
    customClass: PropTypes.string,
};

LastUpdated.defaultProps = {
    customClass: '',
};
