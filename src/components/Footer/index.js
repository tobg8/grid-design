import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__brand">
            ©2019 future london Academy <span className="footer__rights"> all right reserved</span>
            </p>
            <div className="footer__credits">
                <a className="footer__work" href="https://vishvish.design/">design: <br /> <span className="footer__author">syvat vishnyakov</span></a>
                <a className="footer__work footer__work--modifier" href="https://sergeyzakharov.dev/">development: <br /><span className="footer__author">sergey zakharov</span></a>
            </div>
        </div>
    );
};

export default Footer;