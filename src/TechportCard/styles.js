import { createUseStyles } from 'react-jss'
import { colors } from '../Components';

const styles = createUseStyles({
    base: {
        maxHeight: 415,
        maxWidth: 550,
        width: '47%',
        marginBottom: 25,
        '&:nth-child(odd)': {
            marginRight: 25,
        },
        display: 'grid',
        gridTemplateColumns: '[leftAligned] auto [rightAligned] auto',
        gridTemplateRows: '[header] 25px [title] auto [padding] 25px [textShort] 50px [footer] 95px',
        '&:hover': {
            boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.6)',
        },
    },
    title: {
        gridColumn: 'leftAligned / span 2',
        gridRow: 'title / title',
        alignSelf: 'end',
        margin: {
            top: 45,
            left: 25,
        },
        overflow: 'hidden',
    },
    paragraph: {
        gridColumn: 'leftAligned / span 2',
        gridRow: 'textShort / textShort',
        alignSelf: 'start',

        textAlign: 'left',
        maxHeight: 50,
        overflow: 'hidden',
        marginLeft: 25,
        marginBottom: 45,
    },
    bookmark: {
        gridColumn: 'rightAligned / rightAligned',
        gridRow: 'header / header',
        width: 25,
        height: 25,
        backgroundImage: 'url("./media/bookmarkIcon.svg")',
        backgroundSize: 'auto 100%',
        cursor: 'pointer',
        justifySelf: 'end',
        '&.true': {
            backgroundPositionX: 25,
        },
        '&.false': {
            backgroundPositionX: 0,
        },
    },
    projectDates: {
        gridColumn: 'leftAligned / leftAligned',
        gridRow: 'footer / footer',
        display: 'flex',
        height: 50,
        flexDirection: 'row',
        textAlign: 'left',
        alignSelf: 'end',
        marginLeft: 25,
        '& .labeledDataEntry': {
            marginRight: 25,
        },
    },
    viewMore: {
        gridColumn: 'rightAligned / rightAligned',
        gridRow: 'footer / footer',
        justifySelf: 'end',
        alignSelf: 'end',
    },
    status: {
        gridColumn: 'leftAligned / leftAligned',
        gridRow: 'header / header',
    }
});

export default styles;
