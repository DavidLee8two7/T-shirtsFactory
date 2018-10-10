import React from 'react';
import PromotionAnimation from './PromotionsAnimation';

const Promotions = () => {
  return (
    <div
      style={{
        gridColumn: 'center-start / center-end',
        gridRow: '4',
        display: 'grid',
      }}
      className="promotion_wrapper"
    >
      <div className="container">
        <PromotionAnimation />
      </div>
    </div>
  );
};

export default Promotions;
