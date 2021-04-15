import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import Square from './Square.js';
import GridDesktop from './GridDesktop';

const Grid = ({ scroll }) => {
  const isDesktop = useMediaQuery({
    query: '(min-device-width: 500px',
  });
  const squares = Array.from(Array(14));

  return (
    <div>
      {isDesktop
        ? <GridDesktop scroll={scroll}/>
        : <div className="grid-container">{squares.map((_, index) => <Square key={index} className={`square square__${index}`} scroll={scroll} />)}</div>}
    </div>
  );
};

Grid.propTypes = {
  scroll: PropTypes.func.isRequired,
};

export default Grid;
