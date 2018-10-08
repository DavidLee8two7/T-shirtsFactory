import React from 'react';
import Introduction from './Introduction';
import Products from './Products';
import BestSellers from './BestSellers';
import Promotions from './Promotions';

import styled from 'styled-components';

const Home = () => {
  const StyledHome = styled.div`
    display: grid;
    grid-template-columns:
      [full-start] minmax(6rem, 1fr)
      [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
      [center-end] minmax(6rem, 1fr)
      [full-end];
    grid-template-rows: 100vh min-content 40vw repeat(3, min-content);
  `;

  return (
    <StyledHome className="Home">
      <Introduction />
      <Products />
      {/* <BestSellers />
      <Promotions /> */}
    </StyledHome>
  );
};

export default Home;
