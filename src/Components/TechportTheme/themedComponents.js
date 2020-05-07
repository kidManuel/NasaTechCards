import { createUseStyles } from 'react-jss';
import colors from './colors';
import themedScrollbar from './themedScrollbar';

const {
    bgMain,
    bgSecondary,
    bgContrast
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
        '&:hover': {
            boxShadow: '10px 10px 10px 0px rgba(0,0,0,0.6)',
        },
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
    },
    pagination: {
        '& .paginationSlides': {
            extend: themedScrollbar.withThemedScrollbar,
            paddingTop: 10,
        },
        '& .paginationButtonsTrack': {
            position: 'absolute',
            right: 0,
            bottom: 0,
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
});

export default theme;
