import moment from 'moment';
import constants from './const';
import mockData from './mock-data';

const {
    API_BASE,
    API_KEY,
    API_SEARCH_BY_DATE,
    CURRENT_MAX_ITEMS,
} = constants;

// TO BE USED ONLY IN DEVELOPMENT
const useMockData = true;

function itemsToIds(items) {
    if (!Array.isArray(items)) {
        throw new Error('You must provide an array of projects to be parsed')
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

async function getSingleProject(projectId, memo) {
    const projectEndpoint = `${API_BASE}/${projectId}${API_KEY}`;
    let data;

    if (memo[projectId]) {
        return memo[projectId];
    }

    if (useMockData) {
        data = mockData.find((element) => element.id === Number(projectId));

        return data;
    }

    data = fetch(projectEndpoint)
        .then(
            (response) => response.json(),
        ).then(
            (response) => response.project,
        );


    await data;
    return data;
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
                throw new Error(`Something went terribly wrong. Here's the error message if you want it ${error} `);
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
    getSingleProject,
    getProjectsByDate,
    getProjectsUpdatedLastWeek,
};
