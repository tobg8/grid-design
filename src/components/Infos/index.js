import React from 'react';
import './styles.scss';

const Infos = () => {
    return (
        <div className="infos">
            <h1 className="infos__title"><div className="infos__circle" />What is it</h1>
            <p className="infos__paragraphs infos__paragraphs--modifier">An executive programme broken down into 5 intense 2-week modules in London and California</p>
            <p className="infos__paragraphs">
                Forget boring professors and outdated business knowledge. 
                You will be taught by CEOs, CTOs and Heads of Design from the top businesses, startups and products companies.
            </p>
        </div>
    );
};

export default Infos;