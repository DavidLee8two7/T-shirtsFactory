import React from 'react';

const DisplayBlock = ({ product }) => {
  return (
    <div className="display_block">
      <div className="product_title">
        {product.published
          ? product.title
          : `product not published yet: ${product.title}`}
      </div>

      <div className="product_wrapper">
        <div className="product_display">
          <div
            className="icon"
            style={{
              background: `url(/images/products/${product.image}.jpg)`,
            }}
          />
        </div>

        <div className="product_name">{product.brand}</div>
        <div className="product_name">{product.description}</div>
        <div className="product_name">{product.price}</div>
      </div>
    </div>
  );
};

export default DisplayBlock;
