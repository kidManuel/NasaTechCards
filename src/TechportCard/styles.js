import { createUseStyles } from 'react-jss'

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
        gridTemplateColumns: '[leftAligned] auto [rightAligned] 25px',
        gridTemplateRows: '[header] 25px [title] auto [padding] 25px [textShort] 50px [footer] 50px',
    },
    title: {
        gridColumn: 'leftAligned / leftAligned',
        gridRow: 'title / title',
        alignSelf: 'end',

        margin: {
            top: 45,
            left: 25,
        },
        overflow: 'hidden',
    },
    paragraph: {
        gridColumn: 'leftAligned / leftAligned',
        gridRow: 'textShort / textShort',
        alignSelf: 'start',

        textAlign: 'left',
        maxHeight: 50,
        overflow: 'hidden',
        marginLeft: 25,
    },
    status: {
        gridColumn: 'leftAligned / leftAligned',
        gridRow: 'header / header',
        border: 'solid 2px white',
        justifySelf: 'start',
        display: 'flex',
        alignItems: 'center',

        lineHeight: '25px',
        paddingLeft: 12,
        borderRadius: 25,

        '& .statusPill': {
            display: 'inline-block',
            borderRadius: 18,
            padding: '0 15px',
            marginLeft: 25,
            textTransform: 'capitalize',

            /* cute hack to get the alignment right */
            marginRight: -2,
        },
        '& .statusLabel': {
            textTransform: 'uppercase',
            display: 'inline-block',
            fontSize: 11,
            fontFamily: 'tussilago',
        },
    },
    bookmark: {
        gridColumn: 'rightAligned / rightAligned',
        gridRow: 'header / header',
        width: 25,
        height: 25,
        backgroundImage: 'url("./media/bookmarkIcon.svg")',
        backgroundSize: 'auto 100%',
        cursor: 'pointer',
        '&.true': {
            backgroundPositionX: 25,
        },
        '&.false': {
            backgroundPositionX: 0,
        },
    },
});

export default styles;
