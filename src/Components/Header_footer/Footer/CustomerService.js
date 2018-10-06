import React, { Component } from 'react';
import styled from 'styled-components';

class CustomerService extends Component {
  render() {
    const CustomerService = styled.div`
      justify-self: center;
      align-self: start;
      text-align: left;
      margin-top: 2.5rem;
      padding: 0.2rem;
      font-size: 1rem;
      p {
        z-index: 1;
        margin-left: 2.1rem;
        text-align: center;
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
        margin-top: 0.25rem;
        font-size: 1.3rem;
        border-bottom: 0.1rem solid var(--color-primary-dark);
      }
    `;

    return (
      <CustomerService className="middle">
        <p>Customer Service</p>
        <ul>
          <li>
            <a href="/about_us" className="about-us">
              About Us
            </a>
          </li>
          <li>
            <a href="/about_us" className="about-us">
              Payment
            </a>
          </li>
          <li>
            <a href="/about_us" className="about-us">
              Shipping and Handling
            </a>
          </li>
          <li>
            <a href="/about_us" className="about-us">
              Returns and Exchanges
            </a>
          </li>
          <li>
            <a href="/about_us" className="about-us">
              International
            </a>
          </li>
        </ul>
      </CustomerService>
    );
  }
}

export default CustomerService;
