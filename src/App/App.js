import React, { useEffect, useState } from 'react';
import './App.css';
import API from './TechportApiUtil';
import PaginationContainer from '../Components/PaginationContainer';
import TechportCard from '../TechportCard';

function App() {
    const [exampleProject, setExampleProject] = useState();

    useEffect(() => {
        async function fetchData() {
            const data = await API.getExampleProject();
            setExampleProject(data);
        }
        fetchData();
    }, []);

    return (
        <div className="App">
            {
                exampleProject && (
                    <PaginationContainer>
                        <TechportCard
                            title={exampleProject.title}
                            paragraph={exampleProject.description}
                        />
                        <TechportCard
                            title={exampleProject.title}
                            paragraph={exampleProject.description}
                        />
                    </PaginationContainer>
                )
            }
        </div>
    );
}

export default App;
