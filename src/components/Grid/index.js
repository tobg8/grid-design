import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

import Square from './Square.js';

const Grid = ({scroll}) => {
    const squares = Array.from(Array(14));
    
    return (
        <div className="grid-container">
            
            {/* {squares.map((square, index) => <div className={`square square__${index}`}>{index}</div>)} */}
            {squares.map((_, index) => <Square key={index} className={`square square__${index}`} scroll={scroll}/> )}
        </div>
    );
};

Grid.propTypes = {
    scroll: PropTypes.func.isRequired,
}

export default Grid;