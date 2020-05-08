import React from 'react';

export default class TextClamp extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            displayedText: '',
        };

        this.id = uuid.v4();

        this.produceLines = this.produceLines.bind(this);
        this.handleShowAll = this.handleShowAll.bind(this);
        this.adjustDisplay = this.adjustDisplay.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        // create a div and set some styles that will allow us to measure the width of each
        // word in our text
        const measurementEl = document.createElement('div');
        measurementEl.style.visibility = 'hidden';
        measurementEl.style.position = 'absolute';
        measurementEl.style.top = '-9999px';
        measurementEl.style.left = '-9999px';
        measurementEl.style.height = 'auto';
        measurementEl.style.width = 'auto';
        measurementEl.style.display = 'inline-block';

        // get computedStyles so we ensure we measure with the correct font-size and letter-spacing
        const computedStyles = window.getComputedStyle(this.textDisplayEl, null);
        measurementEl.style.fontSize = computedStyles.getPropertyValue('font-size');
        measurementEl.style.letterSpacing = computedStyles.getPropertyValue('letter-spacing');

        // add measurementEl to the dom
        document.body.appendChild(measurementEl);

        // destructure props
        const { text, lines, resize } = this.props;

        // reference container, linesToProduce, startAt, and wordArray on this
        this.container = document.getElementById(this.id);
        this.linesToProduce = lines;
        this.startAt = 0;
        this.wordArray = text.split(' ');

        // measure each word and store reference to their widths
        let i; const wordArrayLength = this.wordArray.length; const { wordArray } = this; const
            wordWidths = {};
        for (i = 0; i < wordArrayLength; i++) {
            measurementEl.innerHTML = wordArray[i];
            if (!wordWidths[wordArray[i]]) {
                wordWidths[wordArray[i]] = measurementEl.offsetWidth;
            }
        }

        measurementEl.innerHTML = '&nbsp;';
        wordWidths.WHITESPACE = measurementEl.offsetWidth;

        // reference wordWidths on this
        this.wordWidths = wordWidths;


        // produce lines from ( startAt, maxWidth, wordArray, wordWidths, linesToProduce )
        this.produceLines(
            this.startAt,
            this.container.offsetWidth,
            this.wordArray,
            this.wordWidths,
            this.linesToProduce,
        );

        this.resize = resize === false ? reisze : true;

        // if resize prop is true, enable resizing
        if (this.resize) {
            window.addEventListener('resize', this.handleResize, false);
        }
    }

    produceLines(startAt, maxWidth, wordArray, wordWidths, linesToProduce) {
        // use _produceLine function to recursively build our displayText
        const displayText = _produceLine(startAt, maxWidth, wordArray, wordWidths, linesToProduce);

        // update state with our displayText
        this.setState({
            ...this.state,
            displayedText: displayText,
        });
    }

    adjustDisplay() {
        this.produceLines(
            this.startAt,
            this.container.offsetWidth,
            this.wordArray,
            this.wordWidths,
            this.linesToProduce,
        );
    }

    handleResize() {
        console.log('resizing');
        // reproduce lines when resizing ( could throttle this, but it doesn't cause a big hit )
        this.adjustDisplay();
    }

    componentWillUnmount() {
        // unsubscribe to resize event if resize is enabled
        if (this.resize) {
            window.removeEventListener('resize', this.handleResize, false);
        }
    }

    render() {
        // render the displayText
        const { displayedText } = this.state;
        return (
            <div id={this.id} className="_text_clamp_container">
                <span className="_clamped_text" ref={(el) => { this.textDisplayEl = el; }}>{displayedText}</span>
            </div>
        );
    }
}

function _produceLine(startAt, maxWidth, wordArray, wordWidths, linesToProduce, lines) {
    let i; let
        width = 0;
    // format and return displayText if all lines produces
    if (!(linesToProduce > 0)) {
        let lastLineArray = lines[lines.length - 1].split(' ');

        width = _getWidthOfLastLine(wordWidths, lastLineArray);

        width - wordWidths.WHITESPACE;

        lastLineArray = _trimResponseAsNeeded(width, maxWidth, wordWidths, lastLineArray);

        lastLineArray.pop();

        lines[lines.length - 1] = lastLineArray.join(' ');

        const formattedDisplay = <span>{lines.join(' ')}</span>;

        return formattedDisplay;
    }

    // increment i until width is > maxWidth
    for (i = startAt; width < maxWidth; i++) {
        width += wordWidths[wordArray[i]] + wordWidths.WHITESPACE;
    }

    // remove last whitespace width
    width - wordWidths.WHITESPACE;

    // use wordArray.slice with the startAt and i - 1 to get the words for the line and
    // turn them into a string with .join
    const newLine = wordArray.slice(startAt, i - 1).join(' ');

    // return the production of the next line adding the lines argument
    return _produceLine(
        i - 1,
        maxWidth,
        wordArray,
        wordWidths,
        linesToProduce - 1,
        lines ? [...lines, newLine] : [newLine],
    );
}

function _getWidthOfLastLine(wordWidths, lastLine) {
    let _width = 0; const { length } = lastLine; let
        i;
    _width = (wordWidths.WHITESPACE * 2);
    for (i = 0; i < length; i++) {
        _width += wordWidths[lastLine[i]] + wordWidths.WHITESPACE;
    }

    return _width;
}

function _trimResponseAsNeeded(width, maxWidth, wordWidths, lastLine) {
    let _width = width;
    const _maxWidth = maxWidth;
    const _lastLine = lastLine;

    if (_width > _maxWidth) {
        _lastLine.splice(length - 2, 2);
        _width = _getWidthOfLastLine(wordWidths, _lastLine);
        if (_width > _maxWidth) {
            return _trimResponseAsNeeded(_width, _maxWidth, wordWidths, _lastLine);
        }
        _lastLine.splice(length - 2, 2);
        _lastLine.push(showAll.indicatorText);
        if (_getWidthOfLastLine(wordWidths, lastLine) > maxWidth) {
            return _trimResponseAsNeeded(_width, _maxWidth, wordWidths, _lastLine);
        }
    } else {
        _lastLine.splice(length - 1, 1);
    }

    return _lastLine;
}
