import constants from './const';
import moment from 'moment';
import mockData from './mock-data';

const {
    API_BASE,
    API_KEY,
    API_SEARCH_BY_DATE,
    EXAMPLE_PROJECT,
    CURRENT_MAX_ITEMS,
} = constants;

// TO BE USED ONLY IN DEVELOPMENT
const useMockData = true;

async function getExampleProject() {
    const endpoint = API_BASE + EXAMPLE_PROJECT + API_KEY;
    let exampleProjectInfo;

    await fetch(endpoint)
        .then(
            (nasa) => {
                if (!nasa.ok) console.error('something is wrong');
                return nasa.json();
            },
        )
        .then(
            (response) => {
                exampleProjectInfo = response.project;
            },
        );
    return exampleProjectInfo;
}

function itemsToIds(items) {
    console.log(items, 'iTEMS')
    if (!Array.isArray(items)) {
        console.error('You must provide an array of projects to be parsed')
        return null;
    }

    let ids = [];

    /* Can't believe the api has no offset ammount of items */
    for (let c = 0; c < CURRENT_MAX_ITEMS; c++) {
        ids.push(Number(items[c].id));
    }

    return ids;
}

async function getProjectsByDate(horizonDate) {
    const idsEndpoint = API_BASE + API_KEY + API_SEARCH_BY_DATE + horizonDate;
    console.log(idsEndpoint);
    let projectIdsRaw = [];
    let projectsDataPromises = [];
    let projectsDataSolved = [];

    await fetch(idsEndpoint)
        .then(
            response => response.json()
        ).then(
            (rawProjects) => {
                projectIdsRaw = itemsToIds(rawProjects.projects.projects);
            }
        ).catch(
            (error) => {
                console.error(`Something went terribly wrong. Here's the error message if you want it ${error} `)
            }
        )



    projectIdsRaw.forEach((singleProject) => {
        const projectEndpoint = API_BASE + '/' + singleProject + API_KEY;
        projectsDataPromises.push(
            fetch(projectEndpoint)
                .then(
                    response => response.json()
                ).then(
                    response => response.project
                )
        )
    })

    await Promise.all(projectsDataPromises).then(
        (results) => projectsDataSolved = results
    )

    return projectsDataSolved;
}

async function getProjectsUpdatedLastWeek() {
    if (useMockData) {
        return mockData;
    } else {
        // not even going to pretend like im going to get the string for one week ago by hand. 
        const oneWeekAgo = moment().subtract(1, 'week').format('YYYY-MM-DD');
        let projectsUpdatedLastWeek = getProjectsByDate(oneWeekAgo);

        await projectsUpdatedLastWeek;
        return projectsUpdatedLastWeek;
    }
}

export {
    getExampleProject,
    getProjectsByDate,
    getProjectsUpdatedLastWeek
};
