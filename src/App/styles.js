import { createUseStyles } from 'react-jss';
import { colors } from '../Components';

const styles = createUseStyles({
    base: {
        position: 'relative',
        width: '88vw',
        margin: '0 auto',
        paddingTop: 200,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logo: {
        position: 'fixed',
        top: 75,
        left: '6vw',
    },
    navigation: {
        order: 1,
        textAlign: 'right',
        '& .routeLink': {
            textDecoration: 'none',
            fontSize: 60,
            marginBottom: 20,
            transition: 'all 0.2s',
            color: colors.bgMain,
            '&:hover': {
            },
            '&:active,:visited': {
                color: colors.bgSecondary,
            },
            '&.active': {
                fontWeight: 700,
                color: colors.highlight,
            }
        }
    }
});

export default styles;
