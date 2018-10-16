import React, { Component } from 'react';
import styled from 'styled-components';
import ItemCard from '../../Utils/ItemCard';
import coffeeTable from '../../../Resources/images/home/coffeeTable.jpg';
import tshirts from '../../../Resources/images/home/tshirts.jpg';
import memphis from '../../../Resources/images/home/memphis.png';
import arrowSmall from '../../../Resources/images/home/arrowSmall.png';

class Feature extends Component {
  state = {
    show: this.props.show,
  };

  render() {
    const Features = styled.div`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: min-content;
      grid-column-gap: 1.5rem;
    `;

    return (
      <Features className="featured" show={this.props.show}>
        <ItemCard
          className="design"
          src={tshirts}
          title="Design Studio"
          descrption="Design tools, samples and more"
          icon={arrowSmall}
        />
        <ItemCard
          className="sales"
          src={tshirts}
          title="Special Sales"
          descrption="Time to buy items"
          icon={arrowSmall}
          style={{
            backgroundColor: 'blue',
          }}
        />
        <ItemCard
          className="gallery"
          src={coffeeTable}
          title="Look Book"
          descrption="Fashion Advise"
          icon={arrowSmall}
        />
      </Features>
    );
  }
}

export default Feature;
