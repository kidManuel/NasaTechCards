import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
    overlayWrapper: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2,

    },
    cardFullContainer: {
        width: '70vw',
        height: '95vh',
        paddingTop: '20vh',
        paddingLeft: '6vw',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        display: 'grid',
        gridTemplateColumns: '[leftAligned] auto [mainBody] 45% [rightAligned] auto',
    },
    status: {
        gridColumn: 'leftAligned / leftAligned',
        alignSelf: 'start',
        height: 25,
    },

});

export default styles;
