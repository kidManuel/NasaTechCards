import constants from './const';

async function getExampleProject() {
    const {
        API_BASE,
        API_KEY,
        EXAMPLE_PROJECT,
    } = constants;

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

export { getExampleProject };
