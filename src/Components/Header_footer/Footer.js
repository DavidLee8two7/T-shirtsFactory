import React from 'react';
import { Logo } from '../Utils/Icons';

const Footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer_logo">
        <Logo width="70px" height="70px" link={true} linkTo="/" />
      </div>
      <div className="footer_discl">
        T - Shirts Factory 2018. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;