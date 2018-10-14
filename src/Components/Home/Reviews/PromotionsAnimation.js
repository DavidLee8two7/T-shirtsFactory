import React from 'react';
import Zoom from 'react-reveal/Zoom';
import promotion1 from '../../../Resources/images/home/promotion1.jpg';

const PromotionAnimation = () => {
  return (
    <div className="promotion_animation">
      <div className="left">
        <Zoom>
          <span>Win a </span>
          <span>T-shi</span>
        </Zoom>
      </div>
      <div className="right">
        <Zoom>
          <div style={{ background: `url(${promotion1}) no-repeat` }} />
        </Zoom>
      </div>
    </div>
  );
};

export default PromotionAnimation;
