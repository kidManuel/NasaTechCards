import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    aboutBody: {
        gridRow: 'body / body',
        gridColumn: 'leftAligned / leftAligned',
        width: '55vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    teamPhoto: {
        flexBasis: '100%',
        marginBottom: 30,
    },
    dataColumn: {
        flexGrow: 1,
        width: 'min-content',
        marginLeft: 30
    }
});

export default styles;
