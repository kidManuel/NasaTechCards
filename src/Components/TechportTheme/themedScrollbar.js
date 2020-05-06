import colors from './colors';

const {
    bgMainAlpha,
    bgSecondaryAlpha,
} = colors;

const themedScrollbar = {
    withThemedScrollbar: {
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(19, 19, 19, 0.7) rgba(18, 18, 18, 0.3)',
        overflowY: 'scroll',
        '&::-webkit-scrollbar': {
            width: 11,
        },
        '&::-webkit-scrollbar-track': {
            background: bgSecondaryAlpha,
            borderRadius: 6,
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: bgMainAlpha,
            borderRadius: 6,
        },
    },
};


export default themedScrollbar;
