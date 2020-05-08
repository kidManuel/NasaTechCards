import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleOnOff extends Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.state = {
            on: false
        }
    }

    changeState(callback) {
        const newStatus = !(this.state.on);
        this.setState({ on: newStatus });
        callback && callback(newStatus);
        return newStatus;
    }

    render() {
        const { customClass, stateChangeCallback } = this.props;
        const { on } = this.state;
        return <div onClick={() => this.changeState(stateChangeCallback)} className={`simpleOnOff ${on} ${customClass}`}></div>
    };
}

export default SimpleOnOff;

SimpleOnOff.propTypes = {
    initialStatus: PropTypes.bool,
    customClass: PropTypes.string,
}

SimpleOnOff.defaultProps = {
    initialState: false,
    customClass: '',
};
