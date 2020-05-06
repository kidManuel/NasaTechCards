import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import PaginationButtons from './PaginationButtons';
import style from './styles';

class PaginationContainer extends Component {
    constructor(props) {
        super(props);

        const { initialSlide, itemsPerSlide, children } = this.props;
        const totalSlides = Math.ceil(children.length / itemsPerSlide);

        this.getCurrentSlideElements = this.getCurrentSlideElements.bind(this);
        this.goToNext = this.goToNext.bind(this);
        this.goToPrev = this.goToPrev.bind(this);
        this.goToX = this.goToX.bind(this);

        this.state = {
            currentSlide: initialSlide,
            totalSlides,
        };
    }

    getCurrentSlideElements() {
        const { itemsPerSlide, children } = this.props;
        const { currentSlide } = this.state;
        const slideElements = [];
        const startingItem = (itemsPerSlide * currentSlide);
        const targetItem = startingItem + itemsPerSlide;


        /* I'm sure we can do some magic with slice but I'd rather KISS */
        for (let e = startingItem; e < targetItem; e++) {
            const singleElement = children[e];
            if (singleElement) slideElements.push(singleElement);
        }

        if (!slideElements.length) {
            throw new Error('Somethign went wrong and you shouldnt be in this slide');
        }
        return slideElements;
    }

    goToNext() {
        const { currentSlide, totalSlides } = this.state;
        if (currentSlide + 1 < totalSlides) {
            this.goToX(currentSlide + 1);
        }
    }

    goToPrev() {
        const { currentSlide } = this.state;
        if (currentSlide > 0) {
            this.goToX(currentSlide - 1);
        }
    }

    goToX(target) {
        const { totalSlides } = this.state;
        if (target <= totalSlides) {
            this.setState({
                currentSlide: target,
            });
        }
    }

    render() {
        const { customClassName, classes } = this.props;
        const { totalSlides, currentSlide } = this.state;
        const { paginationContainerClass } = classes;

        return (
            <div className={`${paginationContainerClass} ${customClassName}`}>
                <div className="paginationSlides">
                    {
                        this.getCurrentSlideElements()
                            .map((item) => item)
                    }
                </div>
                <PaginationButtons
                    maxNumber={totalSlides}
                    nextCallback={this.goToNext}
                    prevCallback={this.goToPrev}
                    goToX={this.goToX}
                    label="page"
                    currentSlide={currentSlide}
                />
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
    children: PropTypes.arrayOf(
        PropTypes.object,
    ),
};

PaginationContainer.defaultProps = {
    initialSlide: 0,
    customClassName: '',
    children: [],
};
