import React from 'react';
import PropTypes from 'prop-types';

const Square = ({className, scroll}) => {
    return (
        <div className={className} onClick={className === 'square square__7' ? scroll : undefined}></div> // je sais pas ...
    );
};

Square.propTypes = {
    className: PropTypes.string.isRequired,
    scroll: PropTypes.func.isRequired,
}

export default Square;