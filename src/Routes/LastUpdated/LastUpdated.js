import React, { useEffect, useState } from 'react';
import API from '../../TechportApiUtil';
import { PaginationContainer, TechportTheme } from '../../Components';
import TechportCard from '../../TechportCard';
import styles from './styles';


const LastUpdated = () => {
    const classes = styles();
    const theme = TechportTheme();
    const [lastWeekProjects, setLastWeekProjects] = useState();

    useEffect(() => {
        async function fetchData() {
            const data = await API.getProjectsUpdatedLastWeek();
            setLastWeekProjects(data);
        }
        fetchData();
    }, []);

    return (
        <div className="lastUpdated">
            {
                lastWeekProjects && (
                    <PaginationContainer
                        itemsPerSlide={6}
                        customClassName={`
                            ${theme.pagination}
                            ${classes.container}
                        `}
                    >
                        {
                            lastWeekProjects.map((singleProject, index) => (
                                <TechportCard
                                    key={index}
                                    title={singleProject.title}
                                    paragraph={singleProject.description}
                                    projectStatus={singleProject.status}
                                />
                            ))
                        }
                    </PaginationContainer>
                )
            }
        </div>
    );
};

export default LastUpdated;
