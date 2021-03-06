import { createUseStyles } from 'react-jss';
import colors from './colors';
import themedScrollbar from './themedScrollbar';

const {
    bgMain,
    bgSecondary,
    bgContrast,
    bgTertiary,
} = colors;


const theme = createUseStyles({
    modalContainer: {
        borderRadius: 30,
        backgroundColor: bgSecondary,
        padding: 25,
        overflow: 'hidden',
        color: 'white',
        boxSizing: 'border-box',
        transition: 'all 0.3s',
        '&.selected': {
            backgroundColor: bgTertiary,
        },
    },
    title: {
        fontFamily: 'tussilago',
        color: 'white',
        fontSize: 20,
        lineHeight: '20px',
        marginBottom: 20,
        textTransform: 'uppercase',
        overflowWrap: 'break-word',
        fontWeight: 700,
        pointerEvents: 'none',
    },
    textRead: {
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'acumin-pro',
        color: 'white',
    },
    status: {
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
        width: 25,
        height: 25,
        backgroundImage: 'url("/media/bookmarkIcon.svg")',
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
    pagination: {
        '& .paginationSlides': {
            extend: themedScrollbar,
            paddingTop: 10,
        },
        '& .paginationButtonsTrack': {
            position: 'absolute',
            right: 0,
            bottom: '5vh',
            background: bgMain,
            color: 'white',
            height: 40,
            borderRadius: 20,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 20,

            '& .paginationLabel': {
                color: 'white',
                fontFamily: 'tussilago',
                textTransform: 'uppercase',
                fontSize: 22,
            },

            '& .paginationButtonList': {
                marginLeft: 15,
                marginRight: 2,
                background: bgContrast,
                height: 36,
                borderRadius: 20,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',

                '& .paginationButton': {
                    border: 'none',
                    backgroundColor: 'transparent',

                    '&.numberedPaginationButton': {
                        width: 25,
                        height: 25,
                        borderRadius: 25,
                        '&.active': {
                            border: `solid 1px ${bgMain}`,
                        },
                    },
                    '&.paginationMoveOne': {
                        width: 17,
                        height: 17,
                        margin: '0 15px',
                        '&.prevSlide': {
                            backgroundImage: 'url("./media/arrow-page-backwards.svg")',
                        },
                        '&.nextSlide': {
                            backgroundImage: 'url("./media/arrow-page-forwards.svg")',
                        },
                    },
                },
            },
        },
    },
    labeledData: {
        '& .labeledDataEntry': {
            display: 'flex',
            flexDirection: 'column',
            '& .labeledDataLabel': {
                fontSize: 12,
                order: 2,
            },
            '& .labeledDataValue': {
                fontSize: 20,
                order: 1,
            },
        },
    },
    labeledButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '& .labeledButtonLabel': {
            textTransform: 'uppercase',
            fontFamily: 'tussilago',
            fontSize: 11,
            marginRight: 15,
        },
        '& .anchor': {
            textDecoration: 'none',
        },
        '& .labeledButton': {
            width: 50,
            height: 50,
            border: 'solid 1px white',
            borderRadius: 25,
            fontSize: 30,
            lineHeight: '40px',
            color: 'white',
            textAlign: 'center',
            transition: 'all 0.3s',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: colors.highlight,
                border: 'solid 1px transparent',
            },
        },
    },
    superHighlight: {
        fontSize: 100,
        fontWeight: 700,
        color: bgMain,
        border: `solid 15px ${bgMain}`,
        textAlign: 'center',
        borderRadius: 100,
        padding: '25px 100px'
    },
    selectCheckbox: {
        justifySelf: 'end',
        '&:after': {
            fontSize: 12,
            content: '""',
            display: 'inline-block',
            border: 'solid 1px white',
            padding: '5px 0',
            borderRadius: 20,
            width: 100,
            textTransform: 'uppercase',
            textAlign: 'center',
            cursor: 'pointer',
        },
        '&.true:after': {
            content: '"deselect"',
        },
        '&.false:after': {
            content: '"select"',
        }
    }
});

export default theme;
