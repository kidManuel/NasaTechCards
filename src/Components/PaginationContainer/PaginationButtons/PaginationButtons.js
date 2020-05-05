import React from 'react';
import PropTypes from 'prop-types';

const PaginationButtons = ({
    maxNumber,
    prevCallback,
    nextCallback,
    goToX,
    label,
}) => {
    const NumberedPaginationButton = ({ id }) => (
        <button
            className="paginationButton numberedPaginationButton"
            id={id}
            type="button"
            key={id}
            onClick={() => goToX(id)}
            onKeyDown={() => goToX(id)}
            tabIndex={0}
        >
            {id + 1}
        </button>
    );

    const getNumberButtons = () => {
        const buttons = [];
        for (let e = 0; e < maxNumber; e++) {
            buttons.push(
                <NumberedPaginationButton id={e} key={e} />,
            );
        }
        return buttons;
    };

    return (
        <div className="paginationButtonsTrack">
            <div className="paginationLabel">{label}</div>
            <div className="paginationButtonList">
                <button aria-label="Previous" type="button" className="prevSlide paginationMoveOne paginationButton" onClick={prevCallback} />
                {
                    getNumberButtons()
                }
                <button aria-label="Next" type="button" className="nextSlide paginationMoveOne paginationButton" onClick={nextCallback} />
            </div>
        </div>
    );
};

export default PaginationButtons;


PaginationButtons.propTypes = {
    maxNumber: PropTypes.number.isRequired,
    prevCallback: PropTypes.func,
    nextCallback: PropTypes.func,
    goToX: PropTypes.func,
    label: PropTypes.string,
};

PaginationButtons.defaultProps = {
    nextCallback: null,
    prevCallback: null,
    goToX: null,
    label: '',
};
