import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import injectSheet from 'react-jss';

import Routes from '../Routes';
import RouteMarker from '../RouteMarker';

import NavBar from './NavBar';
import styles from './styles';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memo: {},
            favorited: [],
            selected: [],
            currentPage: '',
        };
    }

    render() {
        const { About, LastUpdated } = Routes;
        const { classes } = this.props;
        const { base, logo, navigation } = classes;
        return (
            <Router>
                <div className={base}>
                    <img className={logo} alt="Techport Logo" src="./media/logo.svg" />
                    <NavBar customClass={navigation} />
                    <Switch>
                        <Route exact path="/">
                            <LastUpdated />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                    </Switch>
                    <RouteMarker />
                </div>
            </Router>
        );
    }
}

export default injectSheet(styles)(App);
