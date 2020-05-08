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
import { Title } from '../Components';

import NavBar from './NavBar';
import styles from './styles';


class App extends Component {
    constructor(props) {
        super(props);
        this.dataMemoization = this.dataMemoization.bind(this);
        this.getSingleProjectData = this.getSingleProjectData.bind(this);
        this.getDefaultContent = this.getDefaultContent.bind(this);
        this.routeChangeCallback = this.routeChangeCallback.bind(this);
        this.handleItemsSelection = this.handleItemsSelection.bind(this);
        this.deleteElements = this.deleteElements.bind(this);
        this.favouriteElements = this.favouriteElements.bind(this);

        this.state = {
            memo: {},
            favorited: [],
            selected: [],
            currentPage: 'Last Updated',
            currentDisplay: null,
            expandedCard: null,
            isMounting: true,
            hasSelected: false,
        };
    }

    componentDidMount() {
        this.setState({ isMounting: false });
    }

    getDefaultContent() {
        const { memo, currentDisplay } = this.state;
        if (!currentDisplay) {
            getProjectsUpdatedLastWeek(memo).then((newDefaultContent) => {
                this.setState({
                    memo: this.dataMemoization(newDefaultContent),
                    currentDisplay: newDefaultContent,
                });
            });
            return null;
        }
        return currentDisplay;
    }

    getSingleProjectData(idToFind) {
        const { memo, expandedCard } = this.state;
        if ((!expandedCard) || (expandedCard.id !== Number(idToFind))) {
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

    routeChangeCallback(newRoute) {
        this.setState({
            currentPage: newRoute,
        })
    }

    handleItemsSelection(id, newState) {
        const { selected } = this.state;
        const newSelected = [...selected];
        const itemPosition = newSelected.indexOf(id);
        const inArray = itemPosition >= 0;

        if (newState && !inArray) {
            newSelected.push(id);
        }
        if (!newState && inArray) {
            newSelected.splice(itemPosition, 1)
        };

        this.setState({
            selected: newSelected,
            hasSelected: (!!newSelected.length),
        })
    }

    deleteElements() {
        const { selected, currentDisplay } = this.state;
        const newCurrentDisplay = [...currentDisplay];
        selected.forEach((idToDelete) => {
            const position = newCurrentDisplay.findIndex((currentElement) => {
                return currentElement.id === idToDelete
            })

            newCurrentDisplay.splice(position, 1);
        })

        this.setState({
            selected: [],
            currentDisplay: newCurrentDisplay,
        })
    }

    favouriteElements() {

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
            actions
        } = classes;
        const { currentDisplay, isMounting, currentPage, hasSelected } = this.state;

        return (
            <Router>
                <div className={base}>
                    <header className={header}>
                        <img className={logo} alt="Techport Logo" src="/media/logo.svg" />
                        {
                            (hasSelected)
                            && (
                                <div className={actions}>
                                    <h3 className="actionsLabel">Actions:</h3>
                                    <div onClick={this.deleteElements} className={"actionButton delete"} />
                                    <div onClick={this.favouriteElements} className={"actionButton bookmark"} />
                                </div>
                            )
                        }
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
                                                content={currentDisplay}
                                                enterCallback={this.routeChangeCallback}
                                                itemSelection={this.handleItemsSelection}
                                            />
                                        )
                                    }
                                </Route>

                                <Route
                                    path="/card/:cardId"
                                    render={({ match }) => (
                                        this.getSingleProjectData(match.params.cardId)
                                        && (<CardFull enterCallback={this.routeChangeCallback} data={this.getSingleProjectData(match.params.cardId)} />)
                                    )}
                                />

                                <Route exact path="/about">
                                    <About
                                        customClass={bodyContent}
                                        enterCallback={this.routeChangeCallback}
                                    />
                                </Route>
                            </Switch>
                        )
                    }
                    <NavBar customClass={navigation} />
                    <RouteMarker currentRoute={currentPage} />
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
