import React, { Component } from 'react';
// import Stripes from './Stripes';
import Greeting from './Greeting';
import styled from 'styled-components';

class Featured extends Component {
  render() {
    const StyledFeatures = styled.div`
      grid-column: center-start / center-end;
      grid-row: 1;
      overflow: hidden;
    `;

    return (
      <StyledFeatures className="landing_page">
        <Greeting />
        {/* <Stripes /> */}
      </StyledFeatures>
    );
  }
}

export default Featured;
