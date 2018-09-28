import React from 'react';
import { Tag } from '../../Utils/misc';
import Blocks from '../Category/Blocks';

const Catagory = () => {
  return (
    <div className="categories">
      <div className="container">
        <Tag bck="#0e1731" size="50px" color="#ffffff">
          Main Products
        </Tag>

        <Blocks />

        <Tag
          bck="#ffffff"
          size="22px"
          color="#0e1731"
          link={true}
          linkto="/products"
        >
          See All Products
        </Tag>
      </div>
    </div>
  );
};

export default Catagory;
