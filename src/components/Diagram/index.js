/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import './styles.scss';
import GrowElementOnScroll from '../../hooks/GrowElementOnScroll';

import world from '../../assets/world.svg';
import company from '../../assets/company.svg';
import team from '../../assets/team.svg';
import product from '../../assets/product.svg';
import human from '../../assets/human.svg';

const Diagram = () => {
  const [sentence, setSentence] = useState('');
  const [isClicked, setIsClicked] = useState('');

  const [circleRef, isVisible] = GrowElementOnScroll({
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
  });

  return (
    <div className="diagram">
      <h3 className="diagram__title">Understand how to lead prople and build design-led businesses, while making your life and the world better.</h3>
      <div className="diagram__big-container">
        <div className="diagram__titles">
          <div className="diagram__goal">{sentence}</div>
          <div
            className={isClicked === 'person' ? 'diagram__unit diagram__unit--modifier' : 'diagram__unit'}
            onMouseEnter={() => {
              setSentence('being a better');
              setIsClicked('person');
            }}
            onMouseLeave={() => {
              setSentence('');
              setIsClicked('');
            }}
            onClick={() => {
              setSentence('being a better');
              setIsClicked('person');
            }}
          >
            person
          </div>
          <div
            className={isClicked === 'product' ? 'diagram__unit diagram__unit--modifier' : 'diagram__unit'}
            onMouseEnter={() => {
              setSentence('building a better');
              setIsClicked('product');
            }}
            onMouseLeave={() => {
              setSentence('');
              setIsClicked('');
            }}
            onClick={() => {
              setSentence('building a better');
              setIsClicked('product');
            }}
          >
            product
          </div>
          <div
            className={isClicked === 'team' ? 'diagram__unit diagram__unit--modifier' : 'diagram__unit'}
            onMouseEnter={() => {
              setSentence('building a better');
              setIsClicked('team');
            }}
            onMouseLeave={() => {
              setSentence('');
              setIsClicked('');
            }}
            onClick={() => {
              setSentence('building a better');
              setIsClicked('team');
            }}
          >
            team
          </div>
          <div
            className={isClicked === 'company' ? 'diagram__unit diagram__unit--modifier' : 'diagram__unit'}
            onMouseEnter={() => {
              setSentence('building a better');
              setIsClicked('company');
            }}
            onMouseLeave={() => {
              setSentence('');
              setIsClicked('');
            }}
            onClick={() => {
              setSentence('building a better');
              setIsClicked('company');
            }}
          >
            company
          </div>
          <div
            className={isClicked === 'world' ? 'diagram__unit diagram__unit--modifier' : 'diagram__unit'}
            onMouseEnter={() => {
              setSentence('building a better');
              setIsClicked('world');
            }}
            onMouseLeave={() => {
              setSentence('');
              setIsClicked('');
            }}
            onClick={() => {
              setSentence('building a better');
              setIsClicked('world');
            }}
          >
            world
          </div>
        </div>
        <section className="diagram__container">
          <div className="diagram__world">
            <img
              onClick={() => {
                setIsClicked('world');
                setSentence('building a better');
              }}
              onMouseEnter={() => {
                setIsClicked('world');
                setSentence('building a better');
              }}
              onMouseLeave={() => {
                setIsClicked('');
                setSentence('');
              }}
              className={isVisible ? 'diagram__svg diagram__svg-in-view' : 'diagram__svg'}
              src={world}
              alt=""
              style={isClicked === 'world' ? { opacity: '1' } : { opacity: '0.3' }}
            />
          </div>
          <div className="diagram__company">
            <img
              onClick={() => {
                setIsClicked('company');
                setSentence('building a better');
              }}
              onMouseEnter={() => {
                setIsClicked('company');
                setSentence('building a better');
              }}
              onMouseLeave={() => {
                setIsClicked('');
                setSentence('');
              }}
              className={isVisible ? 'diagram__svg diagram__svg-in-view' : 'diagram__svg diagram__svg--modifier'}
              src={company}
              alt=""
              style={isClicked === 'company' ? { opacity: '1' } : { opacity: '0.3' }}
            />
          </div>
          <div className="diagram__team">
            <img
              onMouseEnter={() => {
                setIsClicked('team');
                setSentence('building a better');
              }}
              onMouseLeave={() => {
                setIsClicked('');
                setSentence('');
              }}
              onClick={() => {
                setIsClicked('team');
                setSentence('building a better');
              }}
              className={isVisible ? 'diagram__svg diagram__svg-in-view' : 'diagram__svg'}
              src={team}
              alt=""
              style={isClicked === 'team' ? { opacity: '1' } : { opacity: '0.3' }}
              ref={circleRef}
            />
          </div>
          <div className="diagram__product">
            <img
              onMouseEnter={() => {
                setIsClicked('product');
                setSentence('building a better');
              }}
              onMouseLeave={() => {
                setIsClicked('');
                setSentence('');
              }}
              onClick={() => {
                setIsClicked('product');
                setSentence('building a better');
              }}
              className={isVisible ? 'diagram__svg diagram__svg-in-view' : 'diagram__svg diagram__svg--modifier'}
              src={product}
              alt=""
              style={isClicked === 'product' ? { opacity: '1' } : { opacity: '0.3' }}
            />
          </div>
          <div className="diagram__human">
            <img
              onMouseEnter={() => {
                setIsClicked('person');
                setSentence('being a better');
              }}
              onMouseLeave={() => {
                setIsClicked('');
                setSentence('');
              }}
              onClick={() => {
                setIsClicked('person');
                setSentence('being a better');
              }}
              className={isVisible ? 'diagram__svg diagram__svg-in-view' : 'diagram__svg'}
              src={human}
              alt=""
              style={isClicked === 'person' ? { opacity: '1' } : { opacity: '0.3' }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Diagram;
