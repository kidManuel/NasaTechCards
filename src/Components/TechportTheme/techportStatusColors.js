import colors from './colors';

const {
    bgMain,
    highlight,
    statusPositive,
    statusMedium,
    statusPasive,
} = colors;


const techportStatusColors = {
    Active: {
        statusText: 'active',
        statusColor: statusPasive,
        statusTextColor: bgMain
    },
    Completed: {
        statusText: 'completed',
        statusColor: statusPositive,
        statusTextColor: bgMain
    },
    Canceled: {
        statusText: 'canceled',
        statusColor: highlight,
        statusTextColor: bgMain
    }

};

export default techportStatusColors; 
