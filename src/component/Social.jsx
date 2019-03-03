import React, { Component } from 'react';

import iconFacebook from '../images/FacebookIcon.png';
import iconInstagram from '../images/InstagramIcon.png';
import iconGithub from '../images/GithubIcon.png';
import iconTwitter from '../images/TwitterIcon.png';

const Social = () => (
  <section className="social">
    <a className="social_link" href="https://www.facebook.com/">
      <img className="social_link_img" src={iconFacebook} alt ="Facebook Icon" />            
    </a>

    <a className="social_link" href="https://www.instagram.com/">
      <img className="social_link_img" src={iconInstagram} alt="Instagram Icon" />
    </a>

     <a className="social_link" href="https://github.com/">
      <img className="social_link_img" src={iconGithub} alt="Github Icon" />
    </a>

    <a className="social_link" href="https://twitter.com/">
      <img className="social_link_img" src={iconTwitter} alt="Twitter Icon" />
    </a>
  </section>
)

export default Social;