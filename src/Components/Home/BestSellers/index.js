import React, { Component } from 'react';
// import stripes from '../../../Resources/images/stripes.png';
import { Tag } from '../../Utils/Misc';
// import Reveal from 'react-reveal/Reveal';
import BestsellerShowcase from './BestsellerShowcase';
// import styled from 'styled-components';

class BestSeller extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div
        style={{
          gridColumn: 'center-start / center-end',
          gridRow: '3',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '60rem',
        }}
        className="home_card_wrapper"
      >
        <div>
          <BestsellerShowcase show={this.state.show} />
        </div>
        <div>
          <div>
            <Tag
              bck="#0e1731"
              color="red"
              custom={{
                marginBottom: '2rem',
              }}
            >
              Meet
            </Tag>
          </div>
          <div>
            <Tag
              bck="#0e1731"
              color="red"
              custom={{
                marginBottom: '2rem',
              }}
            >
              Best
            </Tag>
          </div>
          <div>
            <Tag
              bck="#0e1731"
              color="red"
              custom={{
                marginBottom: '2rem',
              }}
            >
              Sellers
            </Tag>
          </div>
          <div>
            <Tag
              bck="red"
              size="27px"
              color="#0e1731"
              link={true}
              linkto="/custom_printing"
              custom={{
                marginBottom: '27px',

                border: '1px solid #0e1731',
              }}
            >
              See more items
            </Tag>
          </div>
        </div>
      </div>
    );
  }
}

export default BestSeller;

// <Reveal
// fraction={0.7}
// onReveal={() => {
//   this.setState({ show: true });
// }}
// > </Reveal>
