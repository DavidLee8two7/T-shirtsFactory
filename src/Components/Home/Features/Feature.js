import React, { Component } from 'react';
import ItemCard from '../../Utils/ItemCard';

import coffeeTable from '../../../Resources/images/home/coffeeTable.jpg';
import tshirts from '../../../Resources/images/home/tshirts.jpg';
import pinkhood from '../../../Resources/images/home/pinkhood.jpg';

class Feature extends Component {
  state = {
    show: this.props.show,
    cards: [coffeeTable, tshirts, pinkhood],
  };

  render() {
    return this.state.cards.map((card, i) => (
      <div className="featured" key={i} show={this.props.show}>
        <ItemCard
          className="featured items"
          brandName="Nike"
          itemName="good tshirts"
          src={card}
        />
      </div>
    ));
  }
}

export default Feature;
