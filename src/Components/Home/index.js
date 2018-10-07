import React from 'react';
import Featured from './Featured';
import Products from './Products';
import BestSellers from './BestSellers';
import Promotions from './Promotions';

const Home = () => {
  return (
    <div className="Home">
      <Featured />
      <Products />
      <BestSellers />
      <Promotions />
    </div>
  );
};

export default Home;
