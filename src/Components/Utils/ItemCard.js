import React from 'react';

const ItemCard = props => {
  return (
    <div
      style={{ width: '350px', height: '350px' }}
      className="item_card_wrapper"
    >
      <div
        className="item_card_thmb"
        style={{ background: `#f2f9ff url(${props.bck})` }}
      />
      <div className="item_card_info">
        <div className="item_card_number">{props.number}</div>
        <div className="item_card_name">
          <span>{props.name}</span>
          <span>{props.lastname}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
