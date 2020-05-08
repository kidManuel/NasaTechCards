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
        const { memo, currentDisplay } = this.state;
        if (!currentDisplay) {
            getProjectsUpdatedLastWeek(memo).then((newDefaultContent) => {
                const filteredContent = newDefaultContent.filter((entry) => !!entry);
                this.setState({
                    isMounting: false,
                    memo: this.dataMemoization(filteredContent),
                    currentDisplay: filteredContent,
                });
            });
        }
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

    getFavoritesData() {
        // For an item to be able to be favorited, it necessarily has to be in memo
        // So no need to async
        const { favorited, memo } = this.state;
        return favorited.map((favoriteId) => memo[favoriteId]);
    }

    routeChangeCallback(newRoute) {
        this.setState({
            currentPage: newRoute,
            hasSelected: false,
            selected: [],
        });
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
            newSelected.splice(itemPosition, 1);
        }

        this.setState({
            selected: newSelected,
            hasSelected: (!!newSelected.length),
        });
    }

    deleteElements() {
        const { selected, currentDisplay } = this.state;
        const newCurrentDisplay = [...currentDisplay];
        selected.forEach((idToDelete) => {
            const position = newCurrentDisplay.findIndex((currentElement) => currentElement.id === idToDelete);

            newCurrentDisplay.splice(position, 1);
        });

        this.setState({
            selected: [],
            hasSelected: false,
            currentDisplay: newCurrentDisplay,
        });
    }

    favouriteElements() {
        const { selected, favorited } = this.state;
        const newFavorited = [...favorited];

        selected.forEach((favorite) => {
            if (newFavorited.indexOf(favorite) < 0) newFavorited.push(favorite);
        });

        this.setState({
            selected: [],
            hasSelected: false,
            favorited: newFavorited,
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
            if (singleProject) {
                const { id } = singleProject;
                if (!newMemo[id]) {
                    newMemo[id] = singleProject;
                }
            }
        });
        return newMemo;
    }

    render() {
        const {
            About, LastUpdated, CardFull, Favorites,
        } = Routes;
        const { classes } = this.props;
        const {
            base,
            logo,
            navigation,
            header,
            bodyContent,
            actions,
        } = classes;
        const {
            currentDisplay, isMounting, currentPage, hasSelected,
        } = this.state;

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
                                    <button onClick={this.deleteElements} className="actionButton delete" />
                                    <button onClick={this.favouriteElements} className="actionButton bookmark" />
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
                                        (currentDisplay) && (
                                            <LastUpdated
                                                customClass={bodyContent}
                                                content={currentDisplay}
                                                enterCallback={this.routeChangeCallback}
                                                itemSelection={this.handleItemsSelection}
                                            />
                                        )
                                    }
                                </Route>

                                <Route exact path="/favorites">
                                    <Favorites
                                        customClass={bodyContent}
                                        content={this.getFavoritesData()}
                                        enterCallback={this.routeChangeCallback}
                                    />
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
        actions: PropTypes.string,
    }).isRequired,
};
