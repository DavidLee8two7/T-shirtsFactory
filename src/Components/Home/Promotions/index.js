import React from 'react';
import PromotionAnimation from './PromotionsAnimation';
import Enroll from './Enroll';

const Promotions = () => {
  return (
    <div className="promotion_wrapper" style={{ background: '#ffffff' }}>
      <div className="container">
        <PromotionAnimation />
        <Enroll />
      </div>
    </div>
  );
};

export default Promotions;
