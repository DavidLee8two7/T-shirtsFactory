import React from 'react';
import { Tag } from '../../Utils/Misc';
import Blocks from './Blocks';

const Products = () => {
  return (
    <div className="products">
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

export default Products;
