import React from 'react';
import './styles.scss';
import GrowElementOnScroll from '../../hooks/GrowElementOnScroll';

const Price = () => {

    const [circleRef, isVisible] = GrowElementOnScroll ({
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    });
    
    return (
        <div className="infos">
            <h1 className="infos__title"><div className={isVisible ? 'infos__circle infos__circle--modifier' : 'infos__circle'} />Dates & Cost</h1>
            <p className="infos__paragraphs infos__paragraphs--modifier" ref={circleRef}>
                Start date: 19 July 2021 <br />
                Cost: £35,000 for all 5 modules 
            </p>
        </div>
    );
};

export default Price;