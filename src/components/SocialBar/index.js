import React from 'react';
import './styles.scss';
import LinkSocial from './LinkSocial';

import insta from '../../assets/insta.svg';
import fb from '../../assets/fb.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';
import rss from '../../assets/rss.svg';
import lastIcon from '../../assets/last-icon.svg';

const SocialBar = () => (
  <div className="social-bar">
    <LinkSocial
      href="https://www.instagram.com/"
      sourceImg={insta}
      alt="icon instagram"
    />
    <LinkSocial
      href="https://www.facebook.com/"
      sourceImg={fb}
      alt="icon facebook"
    />
    <LinkSocial
      href="https://twitter.com/tobg_"
      sourceImg={twitter}
      alt="icon twitter"
    />
    <LinkSocial
      href="https://github.com/TheoB-png"
      sourceImg={github}
      alt="icon github"
    />
    <div href="#" className="social-bar__icon">
      <img src={rss} alt="icon rss-feed" />
    </div>
    <div href="#" target="_blank" className="social-bar__icon">
      <img src={lastIcon} alt="icon of idk what" />
    </div>
  </div>
);

export default SocialBar;
