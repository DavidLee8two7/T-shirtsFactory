import React, { Component } from 'react';
import stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../Utils/Misc';
import Reveal from 'react-reveal/Reveal';
import Cards from './Cards';

class BestSeller extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          className="best_sellers"
          style={{ background: `#ffffff url(${stripes}` }}
        >
          <div className="containers">
            <div className="best_sellers_wrapper">
              <div className="home_card_wrapper">
                <Cards show={this.state.show} />
              </div>
              <div className="home_text_wrapper">
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    custom={{
                      display: 'inline-block',
                      marginBottom: '20px',
                    }}
                  >
                    Meet
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    custom={{
                      display: 'inline-block',
                      marginBottom: '20px',
                    }}
                  >
                    Best
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#0e1731"
                    size="100px"
                    color="#ffffff"
                    custom={{
                      display: 'inline-block',
                      marginBottom: '20px',
                    }}
                  >
                    Sellers
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck="#ffffff"
                    size="27px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_bestsellers"
                    custom={{
                      display: 'inline-block',
                      marginBottom: '27px',
                      border: '1px solid #0e1731',
                    }}
                  >
                    See more items
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default BestSeller;
