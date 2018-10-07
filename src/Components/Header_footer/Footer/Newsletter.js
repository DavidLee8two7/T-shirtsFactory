import React, { Component } from 'react';
import styled from 'styled-components';
import EmailRegister from './EmailRegister';

class Newsletter extends Component {
  render() {
    const Newsletter = styled.div`
      justify-self: center;
      align-self: start;
      margin-top: 2rem;
      padding: 0.2rem;
      p {
        z-index: 1;
        margin-bottom: 2rem;
        text-align: left;
        text-shadow: var(--shadow-light);
        font-size: 2.1rem;
        font-weight: 400;
      }
    `;

    return (
      <Newsletter className="Newsletter">
        <p>Newsletter</p>
        <EmailRegister />
      </Newsletter>
    );
  }
}

export default Newsletter;
