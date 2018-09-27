import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: '#98c5e9',
          boxShadow: 'none',
          padding: '10px 0',
          borderBottom: '2px solid #00285e',
        }}
      >
        <Toolbar styles={{ display: 'flex' }}>
          <div styles={{ flexGrow: 1 }}>
            <div className="header_logo">LOGO</div>
          </div>

          <Link to="/custom_printing">
            <Button color="inherit">Customer Printing</Button>
          </Link>

          <Link to="/items">
            <Button color="inherit">All Products</Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;