import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
    container: {
        width: '55vw',
        height: '76vh',
        paddingTop: 25,
        '& .paginationSlides': {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
        },
    },
});

export default styles;
