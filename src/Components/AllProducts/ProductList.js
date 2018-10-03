import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

class ProductList extends Component {
  state = {
    productList: [],
  };

  static getDerivedStateFromProps(props, state) {
    return (state = {
      productList: props.matches,
    });
  }

  showProducts = () =>
    this.state.productList ? (
      <NodeGroup
        data={this.state.productList}
        keyAccessor={d => d.id}
        start={() => ({
          opacity: 0,
          x: -200,
        })}
        enter={(d, i) => ({
          opacity: [1],
          x: [0],
          timing: { duration: 800, delay: i * 80, ease: easePolyOut },
        })}
        update={(d, i) => ({
          opacity: [1],
          x: [0],
          timing: { duration: 800, delay: i * 80, ease: easePolyOut },
        })}
        leave={(d, i) => ({
          opacity: [1],
          x: [-200],
          timing: { duration: 800, delay: i * 80, ease: easePolyOut },
        })}
      >
        {nodes => (
          <div>
            {nodes.map(({ key, data, state: { x, opacity } }) => (
              <div
                key={key}
                className="match_box_big"
                style={{
                  opacity,
                  transform: `translate(${x}px)`,
                }}
              >
                inser component here
              </div>
            ))}
          </div>
        )}
      </NodeGroup>
    ) : null;

  render() {
    console.log();
    return <div>{this.showProducts()}</div>;
  }
}

export default ProductList;
