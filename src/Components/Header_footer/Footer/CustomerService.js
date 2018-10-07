import React, { Component } from 'react';
import styled from 'styled-components';

class CustomerService extends Component {
  render() {
    const CustomerService = styled.div`
      justify-self: center;
      align-self: start;
      margin-top: 2rem;
      padding: 0.2rem;
      p {
        z-index: 1;
        margin-left: 3.3rem;
        text-align: center;
        text-shadow: var(--shadow-light);
        font-size: 2rem;
        font-weight: 400;
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
        margin-top: 0.25rem;
        font-size: 1.3rem;
      }
    `;

    return (
      <CustomerService className="Customer_service">
        <p>Customer Service</p>
        <ul>
          <li>
            <a href="/info" className="about">
              About Us
            </a>
          </li>
          <li>
            <a href="/info" className="payment">
              Payment
            </a>
          </li>
          <li>
            <a href="/info" className="return">
              Returns and Exchanges
            </a>
          </li>
          <li>
            <a href="/info" className="Terms">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="/info" className="policy">
              Privacy Policy
            </a>
          </li>
        </ul>
      </CustomerService>
    );
  }
}

export default CustomerService;
