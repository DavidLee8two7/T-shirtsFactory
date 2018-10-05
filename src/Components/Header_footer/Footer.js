import React, { Component } from 'react';
import styled from 'styled-components';

import Enroll from '../Home/Promotions/Enroll';
import { Logo } from '../Utils/Icons';
import SvgIcon from './SVGIcons';

class Footer extends Component {
  render() {
    const StyledFooter = styled.footer`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: minimum-content;
      justify-content: center;
      align-items: center;
      background-color: var(--color-primary);
      color: var(--color-primary-dark);
      padding: 3px;
      border-top: var(--line);
    `;

    const DivLeft = styled.div`
      justify-self: center;
      text-align: left;
      margin: 2.5rem 0 3.5rem 2.5rem;
      padding: 0.2rem;
      font-size: 1rem;

      p {
        z-index: 1;
        text-shadow: var(--shadow-dark);
        font-size: 1.5rem;
        font-weight: 600;
      }

      ul {
        list-style: none;
        margin: 2.5rem 0;
      }

      li {
        line-height: 2.5;
        margin-bottom: 0.25rem;
        font-size: 1.3rem;
      }

      a {
        font-size: 1.3rem;
        border-bottom: 0.1rem solid var(--color-primary-dark);
      }
    `;

    const middleStyle = {};

    const rightStyle = {};

    return (
      <StyledFooter className="footer">
        <DivLeft className="left">
          <p>T - Shirts Factory, Inc.</p>
          <ul>
            <li>Hours</li>
            <li>Mon - Sat &nbsp;10am - 8pm</li>
            <li>
              Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;11am - 7pm
            </li>
          </ul>
          <ul>
            <li>2337 S Bristol St.</li>
            <li>Santa Ana, CA 92704</li>
            <li>714 545 3231</li>
            <li>
              <a href="mailto:2337tshirtsfactory@gmail.com" className="email">
                2337tshirtsfactory@gmail.com
              </a>
            </li>
          </ul>
          <a
            href="https://www.yelp.com/biz/t-shirts-factory-santa-ana-4?osq=t+shirt+factory"
            className="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgIcon
              name={'yelp'}
              style={{
                display: 'inline-block',
                width: '5rem',
                height: '5rem',
                fill: '#d32323',
              }}
            />
            Feedback for 10% off !
          </a>
        </DivLeft>
        <div className="middle">
          <ul>
            <li>
              <a href="mailto:2337tshirtsfactory@gmail.com" className="email">
                2337tshirtsfactory@gmail.com
              </a>
            </li>
            <li>Santa Ana, CA 92704</li>
            <li>714 545 3231</li>
          </ul>
        </div>
        <div className="right">
          <Logo width="120px" height="90px" link={true} linkTo="/" />
          <Enroll />
          <p>
            &copy; {new Date().getFullYear()}
            T-Shirts Factory, Inc. All rights reserved.
          </p>
        </div>
      </StyledFooter>
    );
  }
}

export default Footer;
