import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
    base: {
        maxHeight: 415,
        maxWidth: 550,
        marginBottom: 25,
        '&:nth-child(odd)': {
            marginRight: 25
        },
        display: 'grid',
        gridTemplateColumns: '[leftAligned] auto [rightAligned] 25px',
        gridTemplateRows: '[header] 25px [title] 135px [padding] 25px [textShort] 50px [footer] 50px',
    },
    title: {
        gridColumn: 'leftAligned / leftAligned',
        gridRow: 'title / title',
        alignSelf: 'start',

        margin: {
            left: 25,
        },
        maxHeight: 135,
        overflow: 'hidden',
    },
    paragraph: {
        gridColumn: 'leftAligned / leftAligned',
        gridRow: 'textShort / textShort',
        alignSelf: 'start',

        textAlign: 'left',
        maxHeight: 50,
        overflow: 'hidden',
        marginLeft: 25
    }
});

export default styles;
