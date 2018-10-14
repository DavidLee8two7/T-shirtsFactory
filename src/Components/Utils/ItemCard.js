import React from 'react';

const ItemCard = props => {
  return (
    <div className="feature_wrapper">
      <div
        className="item_card_thmb"
        style={{
          width: '30rem',
          height: '30rem',
          background: `var(--color-white) url(${props.src})`,
        }}
      />
      <div className="item_card_info">
        <div className="item_card_number">{props.price}</div>
        <div className="item_card_name">
          <span>{props.brandName}</span>
          <span>{props.itemName}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
