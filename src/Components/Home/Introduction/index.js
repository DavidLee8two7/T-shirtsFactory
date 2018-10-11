import React, { Component } from 'react';
import BusinessInfo from './BusinessInfo';
import styled from 'styled-components';
import plaid from '../../../Resources/images/plaid.jpg';

class Introduction extends Component {
  render() {
    const StyledIntroduction = styled.div`
      grid-column: full-start / full-end;
      grid-row: 1;

      background-image: linear-gradient(
          rgba(254, 234, 230, 0.8),
          rgba(254, 234, 230, 0.8)
        ),
        url(${plaid});
      background-repeat: repeat;
      display: flex;
      justify-content: center;
    `;

    return (
      <StyledIntroduction className="landing_page">
        <BusinessInfo />
      </StyledIntroduction>
    );
  }
}

export default Introduction;
