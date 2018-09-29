import React from 'react';
import Featured from './Featured';
import Products from './Products';
import BestSellers from './BestSellers';
import Promotions from './Promotions';

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Products />
      <BestSellers />
      <Promotions />
    </div>
  );
};

export default Home;
