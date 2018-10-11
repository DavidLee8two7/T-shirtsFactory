import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Utils/Icons';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import styled from 'styled-components';
import plaid from '../../Resources/images/plaid.jpg';
import bookColored from '../../Resources/images/bookColored.png';
import shopColored from '../../Resources/images/shopColored.png';

class Header extends Component {
  render() {
    const ButtonDiv = styled.div`
      display: flex;
      &:hover {
        background-image: linear-gradient(
            rgba(254, 219, 208, 0.5),
            rgba(254, 219, 208, 0.5)
          ),
          url(${plaid});
        p {
          opacity: 1;
        }
        .Products_showcase div {
          background: rgba(68, 44, 46, 1);
        }
        .Customer_printing div {
          background: rgba(68, 44, 46, 1);
        }
      }
    `;

    const LineDiv = styled.div`
      width: 100%;
      height: 0.2rem;
      background: rgba(68, 44, 46, 0.5);
    `;

    const StyledImage = {
      width: '5rem',
      height: '7.5rem',
      overflow: 'hidden',
    };

    const buttonStyle = {
      color: 'var(--color-primary-dark)',
      fontSize: '1.3rem',
      letterSpacing: '0.3rem',
      lineHeight: '1.4rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      textAlign: 'left',
      borderRadius: '0',
      backgroundColor: 'transparent',
    };

    const StyledParagraph = styled.p`
      opacity: 0.5;
      color: var(--color-primary-dark);
      font-size: 1rem;
      letter-spacing: 0.1rem;
      line-height: 0;
      font-weight: 500;
      text-transform: uppercase;
      text-align: center;
    `;

    return (
      <AppBar
        position="fixed"
        style={{
          zIndex: '4',
          backgroundColor: 'var(--color-primary)',
          boxShadow: 'none',
          padding: '3px 0',
          borderBottom: 'var(--line)',
        }}
      >
        <Toolbar style={{ display: 'flex' }} className="Toolbar">
          <div style={{ flexGrow: 1 }}>
            <div className="company_logo">
              <Logo link={true} linkTo="/" width="90px" height="90px" />
            </div>
          </div>
          <Link to="/custom_printing" style={{ marginRight: '1rem' }}>
            <ButtonDiv>
              <img src={`${shopColored}`} style={{ StyledImage }} />
              <div className="Customer_printing">
                <Button style={buttonStyle}>shop</Button>
                <LineDiv />
                <StyledParagraph>Buy a Gift</StyledParagraph>
              </div>
            </ButtonDiv>
          </Link>

          <Link to="/products">
            <ButtonDiv>
              <img src={`${bookColored}`} style={{ StyledImage }} />
              <div className="Products_showcase">
                <Button style={buttonStyle}>Custome Design</Button>
                <LineDiv />
                <StyledParagraph>Look Gallery</StyledParagraph>
              </div>
            </ButtonDiv>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
