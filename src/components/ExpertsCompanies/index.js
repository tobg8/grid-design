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
    if (window.screen.availWidth > 800) {
        return(
            <div className="container">
                <h1 className="container__title">
                    Our experts work in some
                    of the leading companies
                    around the world
                </h1>
                <div className="container__companies">
                    <div className="container__company">
                        <img 
                            src={virgin} 
                            alt="ok"
                            className="container__company-logo "
                        />
                        <a className="container__hover-circle" href="https://virgin.com" target="_blank" rel="noreferrer">
                            Virgin
                        </a>
                    </div>
                    <div className="container__company">
                        <img 
                            src={apple} 
                            alt="ok"
                            className="container__company-logo container__company-logo--modifier-apple"
                        />
                        <a className="container__hover-circle" href="https://apple.com" target="_blank" rel="noreferrer">
                            Apple
                        </a>
                    </div>
                    <div className="container__company">
                        <img 
                            src={swoosh} 
                            alt="ok"
                            className="container__company-logo container__company-logo--modifier-swoosh"
                        />
                        <a className="container__hover-circle container__hover-circle--modifier" href="https://nike.com" target="_blank" rel="noreferrer">
                            Nike
                        </a>
                    </div>
                    <div className="container__company">
                        <img 
                            src={wolff} 
                            alt="ok"
                            className="container__company-logo container__company-logo--modifier-wolf"
                        />
                         <a className="container__hover-circle container__hover-circle--modifier" href="https://www.wolffolins.com/" target="_blank" rel="noreferrer">
                            Wolff Olins
                        </a>
                    </div>
                    <div className="container__company">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Windows_logo_2012-Black.svg" 
                            alt="ok"
                            className="container__company-logo"
                        />
                        <a className="container__hover-circle container__hover-circle--modifier" href="https://microsoft.com/" target="_blank" rel="noreferrer">
                            Microsoft
                        </a>
                    </div>
                </div>
                <div className="container__companies container__companies--modifier">
                    <div className="container__company">
                        <img 
                            src={facebookFull} 
                            alt="ok"
                            className="container__company-logo container__company-logo--modifier-fb"
                        />
                        <a className="container__hover-circle container__hover-circle--modifier" href="https://facebook.com/" target="_blank" rel="noreferrer">
                            Facebook
                        </a>
                    </div>
                    <div className="container__company">
                        <img 
                            src={google}
                            alt="ok"
                            className="container__company-logo"
                        />
                        <a className="container__hover-circle container__hover-circle--modifier" href="https://google.com/" target="_blank" rel="noreferrer">
                            Google
                        </a>
                    </div>
                    <div className="container__company">
                        <img 
                            src={ustwo} 
                            alt="ok"
                            className="container__company-logo"
                        />
                        <a className="container__hover-circle container__hover-circle--modifier" href="https://ustwo.com/" target="_blank" rel="noreferrer">
                            Ustwo
                        </a>
                    </div>
                    <div className="container__company">
                        <img 
                            src={twitch}
                            alt="ok"
                            className="container__company-logo  container__company-logo--modifier-twitch"
                        /> 
                        <a className="container__hover-circle container__hover-circle--modifier" href="https://twitch.com/" target="_blank" rel="noreferrer">
                            Twitch
                        </a>
                    </div>
                    <div className="container__company">
                        <img 
                            src={ethereum}
                            alt="ok"
                            className="container__company-logo container__company-logo--modifier-eth"
                        /> 
                        <a className="container__hover-circle container__hover-circle--modifier" href="https://ethereum.org/fr/" target="_blank" rel="noreferrer">
                            Ethereum
                        </a>
                    </div>
                </div>
            </div>
        );
    };
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
                    <a className="container__hover-circle" href="https://virgin.com" target="_blank" rel="noreferrer">
                        Virgin
                    </a>
                </div>
                <div className="container__company">
                    <img 
                        src={apple} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-apple"
                    />
                    <a className="container__hover-circle" href="https://apple.com" target="_blank" rel="noreferrer">
                        Apple
                    </a>
                </div>
            </div>
            <div className="container__companies">
                <div className="container__company">
                    <img 
                        src={swoosh} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-swoosh"
                    />
                    <a className="container__hover-circle container__hover-circle--modifier" href="https://nike.com" target="_blank" rel="noreferrer">
                        Nike
                    </a>
                </div>
                <div className="container__company">
                    <img 
                        src={wolff} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-wolf"
                    />
                    <a className="container__hover-circle container__hover-circle--modifier" href="https://www.wolffolins.com/" target="_blank" rel="noreferrer">
                        Wolff Olins
                    </a>
                </div>
            </div>
            <div className="container__companies">
                <div className="container__company">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Windows_logo_2012-Black.svg" 
                        alt="ok"
                        className="container__company-logo"
                    />
                    <a className="container__hover-circle container__hover-circle--modifier" href="https://microsoft.com/" target="_blank" rel="noreferrer">
                        Microsoft
                    </a>
                </div>
                <div className="container__company">
                    <img 
                        src={facebookFull} 
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-fb"
                    />
                    <a className="container__hover-circle container__hover-circle--modifier" href="https://facebook.com/" target="_blank" rel="noreferrer">
                        Facebook
                    </a>
                </div>
            </div>
            <div className="container__companies">
                <div className="container__company">
                    <img 
                        src={google}
                        alt="ok"
                        className="container__company-logo"
                    />
                    <a className="container__hover-circle container__hover-circle--modifier" href="https://google.com/" target="_blank" rel="noreferrer">
                        Google
                    </a>
                </div>
                <div className="container__company">
                    <img 
                        src={ustwo} 
                        alt="ok"
                        className="container__company-logo"
                    />
                    <a className="container__hover-circle container__hover-circle--modifier" href="https://ustwo.com/" target="_blank" rel="noreferrer">
                        Ustwo
                    </a>
                </div>
            </div>
            <div className="container__companies">
                <div className="container__company">
                    <img 
                        src={twitch}
                        alt="ok"
                        className="container__company-logo  container__company-logo--modifier-twitch"
                    /> 
                    <a className="container__hover-circle container__hover-circle--modifier" href="https://twitch.com/" target="_blank" rel="noreferrer">
                        Twitch
                    </a>
                </div>
                <div className="container__company">
                    <img 
                        src={ethereum}
                        alt="ok"
                        className="container__company-logo container__company-logo--modifier-eth"
                    /> 
                    <a className="container__hover-circle container__hover-circle--modifier" href="https://ethereum.org/fr/" target="_blank" rel="noreferrer">
                        Ethereum
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExpertsCompanies;