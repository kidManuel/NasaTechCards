/*
    Decided against creatin a fully generic API component, since making a serious,
    reliable, fully agnostic, plug-and-play API component is no easy task,
    and outside the scope of this project. This component is heavily coupled
    to Techport's API and shouldn't be exported to other projects.
*/

import { getExampleProject } from './TechportApiUtil';

const API = {
    getExampleProject,
};

export default API;
