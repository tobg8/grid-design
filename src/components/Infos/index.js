import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import GrowElementOnScroll from '../../hooks/GrowElementOnScroll';

const Infos = ({
  paragraph1, paragraph2, title, modifier,
}) => {
  const [circleRef, isVisible] = GrowElementOnScroll({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  return (
    <div className={modifier ? 'infos infos--modifier' : 'infos'}>
      <h1 className="infos__title"><div className={isVisible ? 'infos__circle infos__circle--modifier' : 'infos__circle'} />{title}</h1>
      <div className="infos__container">
        <p className="infos__paragraphs infos__paragraphs--modifier" ref={circleRef}>{paragraph1}</p>
        <p className="infos__paragraphs test">{paragraph2}</p>
      </div>

    </div>
  );
};

Infos.propTypes = {
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  modifier: PropTypes.string
};

export default Infos;
