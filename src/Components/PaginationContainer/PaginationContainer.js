import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import style from './styles';

class PaginationContainer extends Component {
    constructor(props) {
        super(props);

        const { initialSlide } = this.props;

        this.state = {
            currentSlide: initialSlide,
        };
    }

    getCurrentSlideElements() {
        const { itemsPerSlide, children } = this.props;
        console.log(children);
        const { currentSlide } = this.state;
        let slideElements = [];

        /* I'm sure we can do some magic with slice but I'd rather KISS */
        for (let e = (itemsPerSlide * currentSlide); e < itemsPerSlide; e++) {
            const singleElement = children[e];
            if (singleElement) slideElements.push(singleElement);
        }

        if (!slideElements.length) {
            throw new Error('Somethign went wrong and you shouldnt be in this slide');
        }
        return slideElements;
    }

    render() {
        const { customClassName, classes } = this.props;
        const { paginationContainerClass } = classes;

        return (
            <div className={`${paginationContainerClass} ${customClassName}`}>
                {
                    this.getCurrentSlideElements()
                        .map((item) => item)
                }
            </div>
        );
    }
}


export default injectSheet(style)(PaginationContainer);

PaginationContainer.propTypes = {
    initialSlide: PropTypes.number,
    itemsPerSlide: PropTypes.number.isRequired,
    customClassName: PropTypes.string,
    classes: PropTypes.shape({
        paginationContainerClass: PropTypes.object,
    }).isRequired,
};

PaginationContainer.defaultProps = {
    initialSlide: 0,
    customClassName: '',
};
