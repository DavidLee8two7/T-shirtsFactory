import React from 'react';
import Featured from './Featured/Featured';
import Products from './Products/Products';
import BestSellers from './BestSellers/BestSellers';

const Home = () => {
  return (
    <div className="bck_blue">
      <Featured />
      <Products />
      <BestSellers />
    </div>
  );
};

export default Home;
