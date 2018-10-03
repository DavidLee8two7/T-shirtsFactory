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

  showPublished = published => {
    const list = this.state.products.filter(product => {
      {
        return product.final === published;
      }
    });
    this.setState({
      filterProducts: published === 'All' ? this.state.products : list,
      itemFilter: published,
      resultFilter: 'All',
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
                <div className="tag">Show Products</div>
                <div className="cont">
                  <div
                    className={`option`}
                    onClick={() => this.showPublished('All')}
                  >
                    All
                  </div>
                  <div
                    className={`option`}
                    onClick={() => this.showPublished('Yes')}
                  >
                    Yes
                  </div>
                  <div
                    className={`option`}
                    onClick={() => this.showPublished('No')}
                  >
                    No
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
