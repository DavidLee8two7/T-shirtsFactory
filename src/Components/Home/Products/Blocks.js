import React, { Component } from 'react';
import { firebaseProducts } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../Utils/Misc';

import DisplayBlock from '../../Utils/DisplayBlock';
import Slide from 'react-reveal/Slide';

class Blocks extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    firebaseProducts
      .limitToLast(6)
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
          <Slide bottom key={product.id}>
            <div className="item">
              <div className="wrapper">
                <DisplayBlock product={product} />
              </div>
            </div>
          </Slide>
        ))
      : null;

  render() {
    return (
      <div className="items">{this.showProducts(this.state.products)}</div>
    );
  }
}

export default Blocks;
