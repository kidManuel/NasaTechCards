import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Routes from '../Routes'
import NavBar from './NavBar'
import './App.css';


function App() {
    const { About, LastUpdated } = Routes;

    return (
        <Router>

            <div className="App">
                <NavBar />
                <Switch>
                    <Route exact={true} path="/">
                        <LastUpdated />
                    </Route>

                    <Route exact={true} path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>

        </Router>
    );
}

export default App;
