import React, { Component } from 'react';
import { firebaseProducts } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../Utils/Misc';
import styled from 'styled-components';
import DisplayBlock from '../../Utils/DisplayBlock';
import Swing from 'react-reveal/Swing';

class ProductShowcase extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    firebaseProducts
      .limitToLast(3)
      .once('value')
      .then(snapshot => {
        const products = firebaseLooper(snapshot);

        this.setState({
          products: reverseArray(products),
        });
      });
  }

  showProducts = products =>
    products
      ? products.map(product => (
          <Swing bottom key={product.id}>
            <div className="item">
              <div className="wrapper">
                <DisplayBlock product={product} />
              </div>
            </div>
          </Swing>
        ))
      : null;

  render() {
    const CategoryCard = styled.div`
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: min-content auto;
    `;

    return (
      <CategoryCard
        className="items"
        styles={{ width: '30rem', height: '30rem' }}
      >
        <div>{this.showProducts(this.state.products)}</div>
        <div>{this.showProducts(this.state.products)}</div>
        <div>{this.showProducts(this.state.products)}</div>
        <div>{this.showProducts(this.state.products)}</div>
        <div>{this.showProducts(this.state.products)}</div>
      </CategoryCard>
    );
  }
}

export default ProductShowcase;
