import React from 'react';
import { Tag } from '../../Utils/Misc';
import ProductShowcase from './ProductShowcase';
import styled from 'styled-components';

const ProductCategory = () => {
  const StyledProducts = styled.div`
    grid-column: center-start / center-end;
    grid-row: 2;
  `;

  return (
    <StyledProducts className="products">
      <div className="container">
        <Tag bck="#0e1731" size="50px" color="#ffffff">
          Main Products
        </Tag>

        <ProductShowcase />

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
    </StyledProducts>
  );
};

export default ProductCategory;
