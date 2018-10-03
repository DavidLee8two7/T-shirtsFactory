import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';

class ProductList extends Component {
  state = {
    productList: [],
  };

  static getDerivedStateFromProps(props, state) {
    return (state = {
      productList: props.products,
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
                className="product_box_big"
                style={{
                  opacity,
                  transform: `translate(${x}px)`,
                }}
              >
                <div className="block_wrapper">
                  <div className="block">
                    <div
                      className="icon"
                      style={{
                        background: `url(/images/products/brand_logos/${
                          data.localThmb
                        }.png)`,
                      }}
                    />
                    <div className="item"> {data.local} </div>
                    <div className="price"> {data.resultLocal} </div>
                  </div>
                  <div className="block">
                    <div
                      className="icon"
                      style={{
                        background: `url(/images/products/brand_logos/${
                          data.awayThmb
                        }.png)`,
                      }}
                    />
                    <div className="item"> {data.away} </div>
                    <div className="price"> {data.resultAway} </div>
                  </div>
                </div>
                <div className="block_wrapper nfo">
                  <div>
                    {' '}
                    <strong>Date:</strong> {data.date}{' '}
                  </div>
                  <div>
                    {' '}
                    <strong>stadium:</strong> {data.stadium}{' '}
                  </div>
                  <div>
                    {' '}
                    <strong>Referee:</strong> {data.Referee}{' '}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </NodeGroup>
    ) : null;

  render() {
    return <div>{this.showProducts()}</div>;
  }
}

export default ProductList;
