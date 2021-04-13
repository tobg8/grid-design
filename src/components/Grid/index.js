import React from 'react';
import './styles.scss';

import Square from './Square.js';

const Grid = () => {
    const squares = Array.from(Array(14));
    return (
        <div className="grid-container">
            {/* {squares.map((square, index) => <div className={`square square__${index}`}>{index}</div>)} */}
            {squares.map((square, index) => <Square key={index} className={`square square__${index}`} /> )}
        </div>
    );
};

export default Grid;