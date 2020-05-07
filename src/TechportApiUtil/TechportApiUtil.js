import moment from 'moment';
import constants from './const';
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
    if (!Array.isArray(items)) {
        console.error('You must provide an array of projects to be parsed')
        return null;
    }

    const ids = [];

    /* Can't believe the api has no offset ammount of items */
    if (CURRENT_MAX_ITEMS) {
        for (let c = 0; c < CURRENT_MAX_ITEMS; c++) {
            ids.push(Number(items[c].id));
        }
    }

    return ids;
}

function getSingleProject(projectId) {
    const projectEndpoint = `${API_BASE}/${projectId}${API_KEY}`;
    return fetch(projectEndpoint)
        .then(
            (response) => response.json(),
        ).then(
            (response) => response.project,
        );
}

async function getProjectsByDate(horizonDate, memo) {
    const idsEndpoint = `${API_BASE}${API_KEY}${API_SEARCH_BY_DATE}${horizonDate}`;
    const projectsDataPromises = [];
    let projectIdsRaw = [];
    let projectsDataSolved = [];

    await fetch(idsEndpoint)
        .then(
            (response) => response.json(),
        ).then(
            (rawProjects) => {
                projectIdsRaw = itemsToIds(rawProjects.projects.projects);
            },
        ).catch(
            (error) => {
                console.error(`Something went terribly wrong. Here's the error message if you want it ${error} `);
            },
        );


    projectIdsRaw.forEach((singleProject) => {
        projectsDataPromises.push(
            memo[singleProject] || getSingleProject(singleProject),
        );
    });

    await Promise.all(projectsDataPromises).then(
        (results) => {
            projectsDataSolved = results;
        },
    );

    return projectsDataSolved;
}


async function getProjectsUpdatedLastWeek(memo) {
    if (useMockData) {
        return mockData;
    }

    // not even going to pretend like im going to get the string for one week ago by hand.
    const oneWeekAgo = moment().subtract(1, 'week').format('YYYY-MM-DD');
    const projectsUpdatedLastWeek = getProjectsByDate(oneWeekAgo, memo);

    await projectsUpdatedLastWeek;
    return projectsUpdatedLastWeek;
}

export {
    getExampleProject,
    getProjectsByDate,
    getProjectsUpdatedLastWeek,
};
