import React, { Component } from 'react';
import Stripes from './Stripes';
import Text from './Text';
import styled from 'styled-components';

class Featured extends Component {
  render() {
    const MainImage = styled.div`
      margin: 0 auto;
      width: 100%;
      margin-top: 90px;
      height: 100vh;
      overflow: hidden;
    `;

    return (
      <MainImage className="main_image">
        <Stripes />
        <Text />
      </MainImage>
    );
  }
}

export default Featured;
