import React, { useState, useEffect } from 'react';
import './styles.scss';

import arrowRight from '../../assets/arrow-right.svg';
import arrowLeft from '../../assets/arrow-left.svg';

const Teachers = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [expertName, setExpertName] = useState('');
  const [expertCompany, setExpertCompany] = useState('');
  const [expertNameSecond, setExpertNameSecond] = useState('');
  const [expertCompanySecond, setExpertCompanySecond] = useState('');

  useEffect(() => {
    if (window.screen.availWidth > 800) {
      switch (sliderValue) {
        case 0:
          setExpertName('Joanna Peña-Bickley');
          setExpertCompany('Amazon');
          setExpertNameSecond('Mickael Wolff');
          setExpertCompanySecond('Wolff Olins');
          break;
        case -90:
          setExpertName('Helena Fuchs');
          setExpertCompany('ustwo');
          setExpertNameSecond('James Hilton');
          setExpertCompanySecond('AKQA/Native');
          break;
        case -180:
          setExpertName('Luke Powell');
          setExpertCompany('Pentagram');
          setExpertNameSecond('Charly Lester');
          setExpertCompanySecond('Lumen');
          break;
        case -230:
          setExpertName('Charly Lester');
          setExpertCompany('Lumen');
          setExpertNameSecond("Steve 'BUZZ' Pearce");
          setExpertCompanySecond('Skyscanner');
          break;
        default:
      }
    }
    switch (sliderValue) {
      case 0:
        setExpertName('Joanna Peña-Bickley');
        setExpertCompany('Amazon');
        break;
      case -80:
        setExpertName('Mickael Wolff');
        setExpertCompany('Wolff Olins');
        break;
      case -160:
        setExpertName('Helena Fuchs');
        setExpertCompany('ustwo');
        break;
      case -240:
        setExpertName('James Hilton');
        setExpertCompany('AKQA/Native');
        break;
      case -320:
        setExpertName('Luke Powell');
        setExpertCompany('Pentagram');
        break;
      case -400:
        setExpertName('Charly Lester');
        setExpertCompany('Lumen');
        break;
      case -480:
        setExpertName("Steve 'BUZZ' Pearce");
        setExpertCompany('Skyscanner');
        break;
      default:
        console.log(sliderValue);
    }
  }, [sliderValue]);

  const handleArrowLeftDesktop = () => {
    if (sliderValue === 0) {
      return setSliderValue(-230);
    }
    if (sliderValue === -50) {
      return setSliderValue(0);
    }

    return setSliderValue(sliderValue + 90);
  };

  const handleArrowRightDesktop = () => {
    if (sliderValue === -180) {
      return setSliderValue(-230);
    }
    if (sliderValue === -230) {
      return setSliderValue(0);
    }
    return setSliderValue(sliderValue - 90);
  };

  const handleArrowLeft = () => {
    if (sliderValue === 0) {
      return setSliderValue(-480);
    }
    return setSliderValue(sliderValue + 80);
  };
  const handleArrowRight = () => {
    if (sliderValue === -480) {
      return setSliderValue(0);
    }
    return setSliderValue(sliderValue - 80);
  };
  return (
    <div className="teachers">
      <p className="teachers__title">Who is behind it</p>
      <div className="teachers__container" style={{ transform: `translateX(${sliderValue}vw)` }}>
        <div className="teachers__picture teachers__picture--1" />
        <div className="teachers__picture teachers__picture--2" />
        <div className="teachers__picture teachers__picture--3" />
        <div className="teachers__picture teachers__picture--4" />
        <div className="teachers__picture teachers__picture--5" />
        <div className="teachers__picture teachers__picture--6" />
        <div className="teachers__picture teachers__picture--7" />
      </div>
      <section className="teachers__infosContainer">
        <div className="teachers__expert-infos">
          <p className="teachers__expert-name">{expertName}</p>
          <p className="teachers__expert-company">{expertCompany}</p>
        </div>

        <div className="teachers__expert-infos--desktop">
          <p className="teachers__expert-name--desktop">{expertName}</p>
          <p className="teachers__expert-company--desktop">{expertCompany}</p>
        </div>
        <div className="teachers__expert-infos--desktop teachers__expert-infos--desktop--modifier">
          <p className="teachers__expert-name--desktop">{expertNameSecond}</p>
          <p className="teachers__expert-company--desktop">{expertCompanySecond}</p>
        </div>

        <div className="teachers__arrowContainer">
          <img
            src={arrowLeft}
            alt="icon arrow left"
            className="teachers__arrow"
            onClick={window.screen.availWidth > 800 ? handleArrowLeftDesktop : handleArrowLeft}
          />
          <img
            src={arrowRight}
            alt="icon arrow right"
            className="teachers__arrow"
            onClick={window.screen.availWidth > 800 ? handleArrowRightDesktop : handleArrowRight}
          />
        </div>
      </section>
    </div>
  );
};

export default Teachers;
