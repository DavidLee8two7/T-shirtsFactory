import React from 'react';
import Introduction from './Introduction';
import Showcase from './Showcase';
import MainProducts from './MainProducts';
import Reviews from './Reviews';

import styled from 'styled-components';

const Home = () => {
  const StyledHome = styled.div`
    display: grid;
    grid-template-columns:
      [full-start] minmax(6rem, 1fr)
      [center-start] repeat(8, [col-start] minmax(min-content, 15rem) [col-end])
      [center-end] minmax(6rem, 1fr)
      [full-end];
    grid-template-rows: 100vh repeat(3, minmax(min-content, max-content));
  `;

  return (
    <StyledHome className="Home">
      <Introduction />
      <MainProducts />
      <Showcase />
      <Reviews />
    </StyledHome>
  );
};

export default Home;
