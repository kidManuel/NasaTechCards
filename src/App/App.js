import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Routes from '../Routes'
import RouteMarker from '../RouteMarker'

import NavBar from './NavBar'
import styles from './styles';


function App() {
    const classes = styles();
    const { About, LastUpdated } = Routes;
    const { base, logo, navigation } = classes;


    return (
        <Router>
            <div className={base}>
                <img className={logo} alt='Techport Logo' src='./media/logo.svg' />
                <NavBar customClass={navigation} />
                <Switch>
                    <Route exact={true} path="/">
                        <LastUpdated />
                    </Route>
                    <Route exact={true} path="/about">
                        <About />
                    </Route>
                </Switch>
                <RouteMarker />
            </div>

        </Router>
    );
}

export default App;
