import { createUseStyles } from 'react-jss'

import { colors } from '../../Components'

const styles = createUseStyles({
    container: {
        width: '55vw',
        height: '80vh',

        '& .simpleOnOff': {
            display: 'none',
        }
    },
    titleClass: {
        color: colors.bgMain,
        maxWidth: '55vw'
    }
});

export default styles;
