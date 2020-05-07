import { createUseStyles } from 'react-jss'
import { colors } from '../Components';

const styles = createUseStyles({
    container: {
        position: 'fixed',
        right: 0,
        bottom: 0,
        width: '75vw',
        height: '93vh',
        zIndex: 0,
        backgroundColor: colors.bgContrast,
        borderTopLeftRadius: 30,
    },
    text: {
        position: 'absolute',
        bottom: 25,
        left: '30%',
        fontSize: 180,
        color: 'white',
        fontFamily: 'tussilago',
        fontWeight: 700,
    }
});

export default styles;
