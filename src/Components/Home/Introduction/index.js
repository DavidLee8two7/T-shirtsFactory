import React, { Component } from 'react';
import GreetingCard from './GreetingCard';
import styled from 'styled-components';

class Introduction extends Component {
  render() {
    const StyledIntroduction = styled.div`
      grid-column: center-start / center-end;
      grid-row: 1;
      overflow: hidden;
    `;

    return (
      <StyledIntroduction className="landing_page">
        <GreetingCard />
      </StyledIntroduction>
    );
  }
}

export default Introduction;
