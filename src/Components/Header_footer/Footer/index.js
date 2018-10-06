import React, { Component } from 'react';
import styled from 'styled-components';

import ContactInfo from './ContactInfo';
import CustomerService from './CustomerService';
import RegisterCustomer from './RegisterCustomer';

class Footer extends Component {
  render() {
    const StyledFooter = styled.footer`
      display: grid;
      grid-template-columns: 1fr 1fr 40vw;
      grid-template-rows: minimum-content;
      justify-content: center;
      align-items: center;
      background-color: var(--color-primary);
      color: var(--color-primary-dark);
      padding: 3px;
      border-top: var(--line);
    `;

    return (
      <StyledFooter className="footer">
        <ContactInfo className="left" />
        <CustomerService className="middle" />
        <RegisterCustomer className="right" />
      </StyledFooter>
    );
  }
}

export default Footer;
