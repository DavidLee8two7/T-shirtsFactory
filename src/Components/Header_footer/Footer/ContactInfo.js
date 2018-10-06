import React, { Component } from 'react';
import styled from 'styled-components';

class ContactInfo extends Component {
  render() {
    const DivLeft = styled.div`
      justify-self: center;
      align-self: start;
      margin-top: 2rem;
      padding: 0.2rem;
      p {
        z-index: 1;
        margin-left: 3.5rem;
        text-shadow: var(--shadow-dark);
        font-size: 1.5rem;
        font-weight: 600;
        text-align: left;
      }
      ul {
        list-style: none;
        margin: 2rem 0;
      }
      li {
        line-height: 2.5;
        margin-bottom: 0.25rem;
        font-size: 1.3rem;
      }
      a {
        margin-top: 0.25rem;
        font-size: 1.5rem;
        font-weight: 400;
        border-bottom: 0.1rem solid var(--color-primary-dark);
        textshadow: var(--shadow-light);
      }
    `;

    return (
      <DivLeft className="left">
        <div>
          <p>T - Shirts Factory, Inc.</p>
          <ul>
            <li>Hours</li>
            <li>Mon - Sat &nbsp;10am - 8pm</li>
            <li>
              Sun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;11am - 7pm
            </li>
          </ul>
        </div>
        <div>
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
        </div>
      </DivLeft>
    );
  }
}

export default ContactInfo;
