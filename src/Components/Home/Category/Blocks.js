import React, { Component } from 'react';
import { firebaseCategory } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../Utils/misc';

class Blocks extends Component {
  state = {
    category: [],
  };

  componentDidMount() {
    firebaseCategory
      .limitToLast(6)
      .once('value')
      .then(snapshot => {
        const category = firebaseLooper(snapshot);

        this.setState({
          category: reverseArray(category),
        });
      });
  }

  showCategory = () => <div>Category</div>;

  render() {
    console.log(this.state.category);
    return (
      <div className="category">{this.showCategory(this.state.category)}</div>
    );
  }
}

export default Blocks;
