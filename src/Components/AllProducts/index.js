import React, { Component } from 'react';
// import CircularProgress from '@material-ui/core/CircularProgress';

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
    sizeFilter: 'All',
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

  showPublished = published => {
    const list = this.state.products.filter(product => {
      return product.final === published;
    });
    this.setState({
      filterProducts: published === 'All' ? this.state.products : list,
      itemFilter: published,
      sizeFilter: 'All',
    });
  };

  showSizes = size => {
    const list = this.state.products.filter(product => {
      return product.result === size;
    });

    this.setState({
      filterProducts: size === 'All' ? this.state.products : list,
      itemFilter: 'All',
      sizeFilter: size,
    });
  };

  render() {
    const state = this.state;
    return (
      <div className="products_container">
        <div className="products_wrapper">
          <div className="left">
            <div className="product_filters">
              <div className="product_filters_box">
                <div className="tag">Publish Products</div>
                <div className="cont">
                  <div
                    className={`option ${
                      state.itemFilter === 'All' ? 'active' : ''
                    }`}
                    onClick={() => this.showPublished('All')}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      state.itemFilter === 'Yes' ? 'active' : ''
                    }`}
                    onClick={() => this.showPublished('Yes')}
                  >
                    Yes
                  </div>
                  <div
                    className={`option ${
                      state.itemFilter === 'No' ? 'active' : ''
                    }`}
                    onClick={() => this.showPublished('No')}
                  >
                    No
                  </div>
                </div>
              </div>
              <div className="product_filters_box">
                <div className="tag">Show Sizes</div>
                <div className="cont">
                  <div
                    className={`option ${
                      state.sizeFilter === 'All' ? 'active' : ''
                    }`}
                    onClick={() => this.showSizes('All')}
                  >
                    All
                  </div>
                  <div
                    className={`option ${
                      state.sizeFilter === 'W' ? 'active' : ''
                    }`}
                    onClick={() => this.showSizes('W')}
                  >
                    W
                  </div>
                  <div
                    className={`option ${
                      state.sizeFilter === 'L' ? 'active' : ''
                    }`}
                    onClick={() => this.showSizes('L')}
                  >
                    L
                  </div>
                  <div
                    className={`option ${
                      state.sizeFilter === 'D' ? 'active' : ''
                    }`}
                    onClick={() => this.showSizes('D')}
                  >
                    D
                  </div>
                </div>
              </div>
            </div>
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
