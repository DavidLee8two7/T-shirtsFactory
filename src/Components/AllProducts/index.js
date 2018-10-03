import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseProducts } from '../../firebase';
import { firebaseLooper, reverseArray } from '../Utils/Misc';

import ProductTable from './Table';
import ProductList from './ProductList';

class AllProducts extends Component {
  state = {
    loading: true,
    products: [],
    filterProducts: [],
    itemFilter: 'All',
    resultFilter: 'All',
  };

  componentDidMount() {
    firebaseProducts.once('value').then(snapshot => {
      const products = firebaseLooper(snapshot);

      this.setState({
        loading: false,
        products: reverseArray(products),
        filterProducts: reverseArray(products),
      });
    });
  }

  render() {
    const state = this.state;
    return (
      <div className="products_container">
        <div className="products_wrapper">
          <div className="left">
            <div className="product_filters" />
            <ProductList products={state.filterProducts} />
          </div>
          <div className="right">
            <ProductTable />
          </div>
        </div>
      </div>
    );
  }
}

export default AllProducts;
