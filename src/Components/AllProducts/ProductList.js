import React, { Component } from 'react';

class ProductList extends Component {
  state = {
    productList: [],
  };

  static getDerivedStateFromProps(props, state) {
    return (state = {
      productList: props.matches,
    });
  }

  render() {
    return <div>List</div>;
  }
}

export default ProductList;
