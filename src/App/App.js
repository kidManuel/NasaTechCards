import React, { useEffect, useState } from 'react';
import './App.css';
import API from './TechportApiUtil';
import PaginationContainer from '../Components/PaginationContainer';
import TechportCard from '../TechportCard';

function App() {
    const [lastWeekProjects, setLastWeekProjects] = useState();

    useEffect(() => {
        async function fetchData() {
            const data = await API.getProjectsUpdatedLastWeek();
            setLastWeekProjects(data);
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            {
                lastWeekProjects && (
                    <PaginationContainer>
                        {
                            lastWeekProjects.map((singleProject, index) => {
                                return <TechportCard
                                    title={singleProject.title}
                                    key={index}
                                    paragraph={singleProject.description}
                                />
                            })
                        }
                    </PaginationContainer>
                )
            }
        </div>
    );
}

export default App;
