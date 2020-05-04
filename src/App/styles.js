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
            position: 'relative',
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
                backgroundImage: 'url("./media/arrow-hover.svg")',
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
