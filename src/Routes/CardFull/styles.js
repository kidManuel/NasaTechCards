import { createUseStyles } from 'react-jss';
import { themedScrollbar } from '../../Components/TechportTheme';

const styles = createUseStyles({
    overlayWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2,
    },
    cardFullContainer: {
        width: '70vw',
        height: '95vh',
        paddingTop: '20vh',
        paddingLeft: '6vw',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        display: 'grid',
        gridTemplateColumns: '[leftAligned] min-content [mainBody] 50% [rightAligned] auto',
        position: 'relative'
    },
    status: {
        gridColumn: 'leftAligned / leftAligned',
        alignSelf: 'start',
        height: 25,
    },
    bodyContent: {
        marginTop: 100,
        marginBottom: 25,
        paddingRight: 25,
        extend: themedScrollbar,
    },
    paragraph: {
        gridColumn: 'mainBody / mainBody',
    },
    title: {
        gridColumn: 'mainBody / mainBody',
        '&.benefits': {
            marginTop: 50,
        }
    },
    labeledData: {
        marginLeft: 100,
        gridColumn: 'rightAligned / rightAligned',
        '& .labeledDataEntry': {
            marginBottom: 40,
        }
    },
    viewLess: {
        gridColumn: 'rightAligned / rightAligned',
        justifySelf: 'end',
        alignSelf: 'end',
    },
    acroHighlight: {
        position: 'fixed',
        transform: 'rotateZ(-10deg)',
        top: '30%',
        left: '10%',
    },
    bookmark: {
        position: 'absolute',
        top: '7vh',
        right: 25,
    }
});

export default styles;
