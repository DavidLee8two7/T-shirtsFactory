import React, { Component } from 'react';
import styled from 'styled-components';
import EmailRegister from './EmailRegister';

class RegisterCustomer extends Component {
  render() {
    const RegisterCustomer = styled.div`
      justify-self: center;
      align-self: start;
      margin-top: 2rem;
      padding: 0.2rem;
      p {
        z-index: 1;
        text-align: left;
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 2rem;
      }
    `;

    return (
      <RegisterCustomer className="right">
        <p style={{ textShadow: `var(--shadow-dark)` }}>Newsletter</p>
        <EmailRegister style={{}} />
      </RegisterCustomer>
    );
  }
}

export default RegisterCustomer;
