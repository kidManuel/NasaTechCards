import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
    container: {
        width: '55vw',
        height: '76vh',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingTop: 25,
        overflowY: 'scroll'
    }
})

export default styles;
