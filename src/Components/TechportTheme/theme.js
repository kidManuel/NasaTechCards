import { createUseStyles } from 'react-jss';
import colors from './colors';

const {
    bgMain,
    bgSecondary,
    bgContrast,
    highlight,
    statusPositive,
    statusMedium,
    statusPasive,
} = colors;


const theme = createUseStyles({
    modalContainer: {
        borderRadius: 30,
        boxShadow: '0 10px 40px 0 black',
        backgroundColor: bgSecondary,
        padding: 25,
        overflow: 'hidden',
        color: 'white',
        boxSizing: 'border-box'
    },
    title: {
        fontFamily: 'tussilago',
        color: 'white',
        fontSize: 32,
        lineHeight: '30px',
        marginBottom: 20,
        textTransform: 'uppercase'
    },
    textRead: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'acumin-pro',
        color: 'white',
    }
});

export default theme; 
