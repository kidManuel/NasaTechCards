import { colors } from '../Components';

const styles = {
    base: {
        position: 'relative',
        width: '88vw',
        margin: '0 auto',
        paddingTop: '7vh',
        display: 'grid',
        gridTemplateRows: '[header] auto [body] auto',
        gridTemplateColumns: '[leftAligned] auto [rightAligned] auto',
    },
    header: {
        height: '9vh',
        marginBottom: '4vh',
        width: '55vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'end',
    },
    logo: {
        height: '100%',
        position: 'relative',
        zIndex: 3,
    },
    actions: {
        flex: '0 0 auto',
        backgroundColor: colors.bgSecondary,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '15px 25px',
        borderRadius: 50,
        '& .actionsLabel': {
            color: colors.bgContrast,
            fontFamily: 'tussilago',
            fontSize: 15,
            fontWeight: 700,
            marginRight: 10,
        },
        '& .actionButton': {
            width: 30,
            height: 30,
            backgroundRepeat: 'no-repeat',
            margin: '0 15px',
            cursor: 'pointer',
            position: 'relative',
            top: 0,
            transition: 'all 0.3s',
            '&:hover': {
                top: -5,
            },
            '&.delete': {
                backgroundImage: 'url("/media/delete.svg")',
            },
            '&.bookmark': {
                backgroundImage: 'url("/media/bookmark.svg")',
            }
        }
    },
    bodyContent: {
        gridRow: 'body / body',
        gridColumn: 'leftAligned / leftAligned',
    },
    navigation: {
        gridRow: 'body / body',
        gridColumn: 'rightAligned / rightAligned',
        textAlign: 'right',
        pointerEvents: 'none',
        '& .routeLink': {
            textDecoration: 'none',
            fontSize: 60,
            marginBottom: 20,
            transition: 'all 0.2s',
            color: colors.bgMain,
            position: 'relative',
            pointerEvents: 'auto',
            '&.selected': {
                fontWeight: 700,
                color: colors.highlight,
            },
            '&:hover:before': {
                content: '""',
                width: 60,
                height: 60,
                display: 'block',
                position: 'absolute',
                left: -90,
                top: 0,
                bottom: 0,
                margin: 'auto',
                backgroundImage: 'url("/media/arrow-hover.svg")',
            },
            '&:active,:visited': {
                color: colors.bgSecondary,
            },
            '&.active': {
                fontWeight: 700,
                color: colors.highlight,
            },
        },
    },
};

export default styles;
