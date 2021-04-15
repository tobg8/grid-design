import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ className, scroll }) => (
  <div className={className} onClick={className === 'square square__7' ? scroll : undefined} /> // je sais pas ...
);

Square.propTypes = {
  className: PropTypes.string.isRequired,
  scroll: PropTypes.func.isRequired,
};

export default Square;
