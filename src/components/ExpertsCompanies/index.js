import React from 'react';
import './styles.scss';

import virgin from './../../assets/virgin.svg';
import apple from './../../assets/apple.svg';
import swoosh from './../../assets/swoosh.svg';
import wolff from './../../assets/wolff.svg';
import facebookFull from './../../assets/facebook-full.svg';
import google from './../../assets/google.svg';
import ustwo from './../../assets/ustwo.svg';
import twitch from './../../assets/twitch.svg';
import ethereum from './../../assets/ethereum.svg';

const ExpertsCompanies = () => {
    return (
        <div className="container">
            <h1 className="container__title">
                Our experts work in some
                of the leading companies
                around the world
            </h1>
            <div className="container__companies container__companies--modifier">
                <div className="container__company">
                    <img 
                        src={virgin} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-virgin"
                    />
                </div>
                <div className="container__company">
                    <img 
                        src={apple} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-apple"
                    /> 
                </div>
            </div>
            <div className="container__companies">
                <div className="container__company">
                    <img 
                        src={swoosh} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-swoosh"
                    /> 
                </div>
                <div className="container__company">
                    <img 
                        src={wolff} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-wolf"
                    /> 
                </div>
            </div>
            <div className="container__companies">
                <div className="container__company">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Windows_logo_2012-Black.svg" 
                        alt="ok"
                        className="container__company-logo"
                    /> 
                </div>
                <div className="container__company">
                    <img 
                        src={facebookFull} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-fb"
                    /> 
                </div>
            </div>
            <div className="container__companies">
                <div className="container__company">
                    <img 
                        src={google}
                        alt="ok"
                        className="container__company-logo"
                    /> 
                </div>
                <div className="container__company">
                    <img 
                        src={ustwo} 
                        alt="ok"
                        className="container__company-logo"
                    /> 
                </div>
            </div>
            <div className="container__companies">
                <div className="container__company">
                    <img 
                        src={twitch}
                        alt="ok"
                        className="container__company-logo  container__company-logo--modifier-twitch"
                    /> 
                </div>
                <div className="container__company">
                    <img 
                        src={ethereum}
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-eth"
                    /> 
                </div>
            </div>
        </div>
    );
};

export default ExpertsCompanies;