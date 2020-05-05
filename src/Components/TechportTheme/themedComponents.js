import { createUseStyles } from 'react-jss';
import colors from './colors';

const {
    bgSecondary,
} = colors;


const theme = createUseStyles({
    modalContainer: {
        borderRadius: 30,
        boxShadow: '10px 10px 25px 0px rgba(0,0,0,0.7)',
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
        textTransform: 'uppercase',
        overflowWrap: 'break-word',
        fontWeight: 700,
    },
    textRead: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'acumin-pro',
        color: 'white',
    }
});

export default theme; 
