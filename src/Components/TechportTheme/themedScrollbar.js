import { createUseStyles } from 'react-jss';
import colors from './colors';

const {
    bgMainAlpha,
    bgSecondaryAlpha,
} = colors;

const themedScrollbar = createUseStyles({
    withThemedScrollbar: {
        scrollbarWidth: 'thin',
        scrollbarcolor: 'rgba(19, 19, 19, 0.5) rgba(18, 18, 18, 0.7)',
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
        }
    }
})

export default themedScrollbar;
