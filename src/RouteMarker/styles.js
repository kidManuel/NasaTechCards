import { createUseStyles } from 'react-jss'
import { colors } from '../Components';

const styles = createUseStyles({
    container: {
        position: 'fixed',
        right: 0,
        bottom: 0,
        zIndex: 0,
        backgroundColor: colors.bgContrast,
        borderTopLeftRadius: 30,
        '&.LastUpdated': {
            width: '75vw',
            height: '93vh',
            '& $text': {
                bottom: 25,
                left: '30%',
            },
        },
        '&.About': {
            height: '93vh',
            width: '30vw',
            '& $text': {
                top: '40%',
                transform: 'rotateZ(-90deg)',
            }
        }
    },
    text: {
        position: 'absolute',
        fontSize: 180,
        color: 'white',
        fontFamily: 'tussilago',
        fontWeight: 700,
    }
});

export default styles;
