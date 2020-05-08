import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import injectSheet from 'react-jss';
import { getProjectsUpdatedLastWeek, getSingleProject } from '../TechportApiUtil';

import Routes from '../Routes';
import RouteMarker from '../RouteMarker';

import NavBar from './NavBar';
import styles from './styles';


class App extends Component {
    constructor(props) {
        super(props);
        this.dataMemoization = this.dataMemoization.bind(this);
        this.getSingleProjectData = this.getSingleProjectData.bind(this);
        this.getDefaultContent = this.getDefaultContent.bind(this);

        this.state = {
            memo: {},
            favorited: [],
            selected: [],
            currentPage: '',
            defaultContent: null,
            expandedCard: null,
            isMounting: true,
        };
    }

    componentDidMount() {
        this.setState({ isMounting: false });
    }

    getDefaultContent() {
        const { memo, defaultContent } = this.state;
        if (!defaultContent) {
            getProjectsUpdatedLastWeek(memo).then((newDefaultContent) => {
                this.setState({
                    memo: this.dataMemoization(newDefaultContent),
                    defaultContent: newDefaultContent,
                });
            });
            return null;
        }
        return defaultContent;
    }

    getSingleProjectData(idToFind) {
        const { memo, expandedCard } = this.state;
        if (!expandedCard) {
            getSingleProject(idToFind, memo).then((currentProjectData) => {
                this.setState({
                    memo: this.dataMemoization([currentProjectData]),
                    expandedCard: currentProjectData,
                });
            });
            return null;
        }
        return expandedCard;
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
        const { About, LastUpdated, CardFull } = Routes;
        const { classes } = this.props;
        const {
            base,
            logo,
            navigation,
            header,
            bodyContent,
        } = classes;
        const { defaultContent, isMounting } = this.state;

        return (
            <Router>
                <div className={base}>
                    <header className={header}>
                        <img className={logo} alt="Techport Logo" src="/media/logo.svg" />
                    </header>
                    {
                        (!isMounting)
                        && (
                            <Switch>
                                <Route exact path="/">
                                    {
                                        (this.getDefaultContent()) && (
                                            <LastUpdated
                                                customClass={bodyContent}
                                                content={defaultContent}
                                            />
                                        )
                                    }
                                </Route>

                                <Route
                                    path="/card/:cardId"
                                    render={({ match }) => (
                                        this.getSingleProjectData(match.params.cardId)
                                        && (<CardFull data={this.getSingleProjectData(match.params.cardId)} />)
                                    )}
                                />

                                <Route exact path="/about">
                                    <About customClass={bodyContent} />
                                </Route>
                            </Switch>
                        )
                    }
                    <NavBar customClass={navigation} />
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
        header: PropTypes.string,
        bodyContent: PropTypes.string,
    }).isRequired,
};
