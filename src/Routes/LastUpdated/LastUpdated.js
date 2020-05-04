import React, { useEffect, useState } from 'react';
import API from '../../TechportApiUtil';
import { PaginationContainer } from '../../Components'
import { themedScrollbar } from '../../Components'
import TechportCard from '../../TechportCard';
import styles from './styles';


const LastUpdated = () => {
    const classes = styles();
    const scrollbar = themedScrollbar();
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
                    <PaginationContainer customClassName={`${classes.container} ${scrollbar.withThemedScrollbar}`}>
                        {
                            lastWeekProjects.map((singleProject, index) => {
                                return <TechportCard
                                    key={index}
                                    title={singleProject.title}
                                    paragraph={singleProject.description}
                                    status={singleProject.status}
                                />
                            })
                        }
                    </PaginationContainer>
                )
            }
        </div>
    );

};

export default LastUpdated;
