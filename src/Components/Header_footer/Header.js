import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Logo } from '../Utils/Icons';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const buttonStyle = {
      color: 'var(--color-primary-dark)',
      fontSize: '1.5rem',
      fontWeight: '400',
    };

    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: 'var(--color-primary)',
          boxShadow: 'none',
          padding: '3px 0',
          borderBottom: 'var(--line)',
        }}
      >
        <Toolbar style={{ display: 'flex' }}>
          <div style={{ flexGrow: 1 }}>
            <div>
              <Logo link={true} linkTo="/" width="90px" height="90px" />
            </div>
          </div>

          <Link to="/custom_printing">
            <Button style={buttonStyle}>Custom T-Shirts</Button>
          </Link>

          <Link to="/products">
            <Button style={buttonStyle}>Brand</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
