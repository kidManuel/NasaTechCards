import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { PaginationContainer, TechportTheme, Title } from '../../Components';
import TechportCard from '../../TechportCard';
import styles from './styles';


const Favorites = ({ content, customClass, enterCallback, itemSelection }) => {
    const classes = styles();
    const theme = TechportTheme();

    useEffect(() => {
        enterCallback('Favorites');
    }, []);

    const { title } = theme;
    const { titleClass } = classes;

    return (
        <div className={`Favorites ${customClass}`}>
            {
                content.length ? (
                    <PaginationContainer
                        itemsPerSlide={6}
                        customClassName={`
                    ${theme.pagination}
                    ${classes.container}
                `}
                    >
                        {
                            content.map((singleProject) => (
                                <TechportCard
                                    cardData={singleProject}
                                    key={singleProject.id}
                                    toggleSelectedCallback={itemSelection}
                                />
                            ))
                        }
                    </PaginationContainer>
                ) : <Title
                        text={
                            `You have not selected your favorite projects yet!
                            Go to the Last Updated Sections and pick a few!`
                        }
                        customClass={`${title} ${titleClass}`}
                    />

            }
        </div>
    );
};

export default Favorites;

Favorites.propTypes = {
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
    customClass: PropTypes.string,
};

Favorites.defaultProps = {
    customClass: '',
};
