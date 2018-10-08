import React, { Component } from 'react';
// import Stripes from './Stripes';
import GreetingCard from './GreetingCard';
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
        <GreetingCard />
        {/* <Stripes /> */}
      </StyledFeatures>
    );
  }
}

export default Featured;
