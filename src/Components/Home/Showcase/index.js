import React from 'react';
import { Tag } from '../../Utils/Misc';
import ProductShowcase from './ProductShowcase';
import styled from 'styled-components';

const ProductCategory = () => {
  const StyledProducts = styled.div`
    grid-column: center-start / center-end;
    grid-row: 3;

    display: flex;
  `;

  const ProductWrapper = styled.div`
    border: var(--line);
    padding: 3rem;
  `;

  return (
    <StyledProducts className="products">
      <ProductWrapper className="container">
        <Tag
          bck="var(--color-primary-light)"
          size="50px"
          color="var(--color-primary-dark)"
        >
          Populars!
        </Tag>

        <ProductShowcase />

        <Tag
          bck="var(--color-primary-light)"
          size="50px"
          color="var(--color-primary-dark)"
          link={true}
          linkto="/products"
        >
          See All Products
        </Tag>
      </ProductWrapper>
    </StyledProducts>
  );
};

export default ProductCategory;
