import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import injectSheet from 'react-jss';
import API from '../TechportApiUtil';

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
            defaultContent: [],
            isLoading: true
        };
        this.dataMemoization = this.dataMemoization.bind(this);
    }

    componentDidMount() {
        const { memo } = this.state;
        API.getProjectsUpdatedLastWeek(memo).then((newDefaultContent) => {
            this.setState({
                memo: this.dataMemoization(newDefaultContent),
                defaultContent: newDefaultContent,
                isLoading: false,
            });
        });
    }

    dataMemoization(data) {
        // Some entries in the data could potentially be lost
        // due to shallow cloning.
        // Potential solution is using external libraries
        // such as lodash.cloneDeep
        const { memo } = this.state;
        const newMemo = { ...memo };
        data.forEach((singleProject) => {
            const { id } = singleProject;
            if (!newMemo[id]) {
                newMemo[id] = singleProject;
            }
        });
        return newMemo;
    }


    render() {
        const { About, LastUpdated } = Routes;
        const { classes } = this.props;
        const { base, logo, navigation } = classes;
        const { defaultContent, isLoading } = this.state;

        return (
            <Router>
                <div className={base}>
                    <img className={logo} alt="Techport Logo" src="./media/logo.svg" />
                    <NavBar customClass={navigation} />
                    <Switch>
                        <Route exact path="/">
                            {
                                (!isLoading) && <LastUpdated content={defaultContent} />
                            }
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

App.propTypes = {
    classes: PropTypes.shape({
        base: PropTypes.string,
        logo: PropTypes.string,
        navigation: PropTypes.string,
    }).isRequired,
};
