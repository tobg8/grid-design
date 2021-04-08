import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';


const LinkSocial = ({
    href,
    sourceImg,
    alt,
}) => {
    return (
        <a 
            href={href}
            target="_blank" 
            rel="noreferrer" 
            className="social-bar__icon"
        >
            <img 
                src={sourceImg} 
                alt={alt} 
            />
        </a>
    );
};

LinkSocial.propTypes = {
    href:PropTypes.string.isRequired,
    sourceImg: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default LinkSocial;