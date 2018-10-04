import React, { Component } from 'react';
import { Logo } from '../Utils/Icons';
import Radium from 'radium';

class Footer extends Component {
  render() {
    const footerStyle = {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 2fr',
      gridTemplateRows: 'minimum-content',
      justfyContent: 'center',
      alignItems: 'center',
      background: 'var(--color-primary)',
      color: 'var(--color-primary-dark)',
      padding: '3px',
      borderTop: 'var(--line)'
    }

    const leftStyle = {
      justfyItems: 'center',
      textAlign: 'left',
      margin: '5px',
      padding: '2px',
      fontSize: '1rem',
      lineHeight: '2',
    }

    const middleStyle = {
      
    }

    const rightStyle = {
      
    }
    
    const year = new Date().getFullYear();

    return (
      <footer className="footer" style={footerStyle}>
        <div className="left" style={leftStyle}>
        <p style={{zIndex: '1', fontSize: '1.1', fontWeight: '600'}}>T - Shirts Factory, Inc.</p>
        <ul>
          <li>Hours</li>
          <li>Mon - Sat 10am - 8am</li>
          <li>Sun 11am - 7pm</li>
        </ul>
        <ul>
          <li>2337 S Bristol St.</li>
          <li>Santa Ana, CA</li>
          <li>714 545 3231</li>
          <a href='mailto:2337tshirtsfactory@gmail.com' 
            className='email'
          >
            2337tshirtsfactory@gmail.com
          </a>
        </ul>
        </div>

        <div className="middle" style={middleStyle}>
          middle
        </div>

        <div className="right" style={rightStyle}>
          <Logo width="120px" height="90px" link={true} linkTo="/" />
          &copy; {year} T-Shirts Factory, Inc.  All rights reserved.
        </div>
      </footer>
    )
  }
};

export default Radium(Footer);
