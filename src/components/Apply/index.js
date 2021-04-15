import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import GrowElementOnScroll from '../../hooks/GrowElementOnScroll';

const Apply = ({ paragraph1, paragraph2, title }) => {
  const [circleRef, isVisible] = GrowElementOnScroll({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  return (
    <div className="apply">
      <h1 className="apply__title"><div className={isVisible ? 'apply__circle apply__circle--modifier' : 'apply__circle'} />{title}</h1>
      <div className="apply__container">
        <p className="apply__paragraphs apply__paragraphs--modifier" ref={circleRef}>{paragraph1}</p>
        <p className="apply__paragraphs apply__paragraphs--border">{paragraph2}</p>
      </div>

    </div>
  );
};

Apply.propTypes = {
  paragraph1: PropTypes.string.isRequired,
  paragraph2: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Apply;
