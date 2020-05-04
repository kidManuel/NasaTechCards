import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleOnOff extends Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            on: false
        }
    }

    onClick() {
        this.changeState();
    }

    changeState(callback) {
        const newStatus = !(this.state.on);
        this.setState({ on: newStatus });
        callback && callback(newStatus);
        return newStatus;
    }

    render() {
        const { customClass } = this.props;
        const { on } = this.state;
        return <div onClick={this.onClick} className={`simpleOnOff ${on} ${customClass}`}></div>
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
