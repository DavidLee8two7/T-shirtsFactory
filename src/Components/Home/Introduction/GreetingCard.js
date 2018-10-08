import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import styled from 'styled-components';

import entrance from '../../../Resources/images/entrance.jpg';
import storeView from '../../../Resources/images/store_view.jpg';
import brickWall from '../../../Resources/images/brick_wall.png';

class Greeting extends Component {
  animateImage = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 300,
        y: 0,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledImage = styled.div`
          grid-column: 3 / span 2;
          grid-row: 1 / span 2;
          z-index: 2;
          opacity: ${opacity};
          background: url(${entrance});
          background-size: contain;
          background-repeat: no-repeat;
          border-radius: 0.8rem;
          filter: contrast(125%);
          border: 1px solid var(--color-primary-dark);
          box-shadow: var(--shadow-dark);
          transform: translate(${x}px, ${y}px);
          transition: all 0.3s ease-in-out;
          &:hover {
            background: url(${storeView});
            background-size: contain;
            background-repeat: no-repeat;
            transition: all 0.3s ease-in-out;
          }
        `;
        return <StyledImage className="company_image" />;
      }}
    </Animate>
  );

  animateInfo = () => (
    <Animate
      start={{
        opacity: 0,
        x: 300,
        y: 0,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const BusinessInfo = styled.div`
          z-index: 3;
          grid-column: 3 / span 2;
          grid-row: 2;
          padding: 2rem;
          opacity: ${opacity};
          color: var(--color-primary-dark);
          font-family: var(--font-display);
          text-shadow: var(--shadow-light);
          transform: translate(${x}px, ${y}px);
        `;

        return (
          <BusinessInfo className="business_info">
            <p style={{ fontSize: '3.3rem' }}>
              Custom T-shirts Printing
              <br />& Family Clothing Shop
              <br />
              <span style={{ fontSize: '2.4rem' }}>
                Since 1996 - 2337 S Bristol st Santa Ana CA
              </span>
            </p>
          </BusinessInfo>
        );
      }}
    </Animate>
  );

  animateProduct = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 0,
        y: -300,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledProduct = styled.div`
          grid-column: 1;
          grid-row: 1;
          z-index: 2;
          opacity: ${opacity};
          background: url(${brickWall});
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 0.8rem;
          filter: contrast(125%);
          border: 1px solid var(--color-primary-dark);
          box-shadow: var(--shadow-dark);
          transform: translate(${x}px, ${y}px);
          transition: all 0.3s ease-in-out;
        `;
        return <StyledProduct className="product_image" />;
      }}
    </Animate>
  );

  animateProduct2 = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 0,
        y: -300,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledProduct = styled.div`
          grid-column: 2;
          grid-row: 1;
          z-index: 2;
          opacity: ${opacity};
          background: url(${brickWall});
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 0.8rem;
          filter: contrast(125%);
          border: 1px solid var(--color-primary-dark);
          box-shadow: var(--shadow-dark);
          transform: translate(${x}px, ${y}px);
          transition: all 0.3s ease-in-out;
        `;
        return <StyledProduct className="product_image" />;
      }}
    </Animate>
  );

  animateProduct3 = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: -300,
        y: 0,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledProduct = styled.div`
          grid-column: 1 / span 2;
          grid-row: 2;
          z-index: 2;
          opacity: ${opacity};
          background: url(${brickWall});
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 0.8rem;
          filter: contrast(125%);
          border: 1px solid var(--color-primary-dark);
          box-shadow: var(--shadow-dark);
          transform: translate(${x}px, ${y}px);
          transition: all 0.3s ease-in-out;
        `;
        return <StyledProduct className="product_image" />;
      }}
    </Animate>
  );

  render() {
    const GreetingCards = styled.div`
      margin-top: 15rem;
      display: grid;
      grid-template-columns: repeat(4, 25rem);
      grid-template-rows: repeat(2, 25rem);
      grid-gap: 0.5rem;
      position: absolute;
    `;

    return (
      <GreetingCards className="featured_text">
        {this.animateImage()}
        {this.animateInfo()}
        {this.animateProduct()}
        {this.animateProduct2()}
        {this.animateProduct3()}
      </GreetingCards>
    );
  }
}

export default Greeting;
