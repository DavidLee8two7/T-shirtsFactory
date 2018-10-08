import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import styled from 'styled-components';

import entrance from '../../../Resources/images/entrance.jpg';
import storeView from '../../../Resources/images/storeView.jpg';

class Greeting extends Component {
  animateNumber = () => (
    <Animate
      start={{
        opacity: 0,
        x: -300,
        y: 0,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 400, duration: 1200, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="since1996"
            style={{
              zIndex: '3',
              gridColumn: '3 / span 2',
              gridRow: '2',
              padding: '2rem',
              opacity,
              color: 'var(--color-primary-dark)',
              fontFamily: 'var(--font-display)',
              textShadow: 'var(--shadow-light)',
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <p style={{ fontSize: '3.3rem' }}>
              Custom T-shirts Printing
              <br />& Family Clothing Shop
              <br />
              <span style={{ fontSize: '2.4rem' }}>
                Since 1996 - 2337 S Bristol st Santa Ana CA
              </span>
            </p>
          </div>
        );
      }}
    </Animate>
  );

  animateFirst = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 450,
      }}
      enter={{
        opacity: [1],
        x: [200],
        y: [450],
        timing: { delay: 300, duration: 600, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_first"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            T-shirts
          </div>
        );
      }}
    </Animate>
  );

  animateSecond = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 586,
      }}
      enter={{
        opacity: [1],
        x: [300],
        y: [586],
        timing: { delay: 400, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div
            className="featured_second"
            style={{
              opacity,
              transform: `translate(${x}px, ${y}px)`,
              gridColumn: '1',
              gridRow: '1',
              background: 'var(--color-primary-light)',
              color: 'var(--color-primary-dark)',
              fontSize: '4rem',
              textTransform: 'uppercase',
              textAlign: 'left',
              padding: '0px 2rem',
              position: 'absolute',
            }}
          >
            Factory
          </div>
        );
      }}
    </Animate>
  );

  animateImage = () => (
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
        timing: { delay: 400, duration: 1200, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledBlur = styled.div`
          grid-column: 3 / span 2;
          grid-row: 1 / span 2;
          z-index: 2;
          opacity: 1;
          background: url(${entrance});
          background-size: contain;
          background-repeat: no-repeat;
          border-radius: 0.8rem;
          filter: contrast(125%);
          border: 1px solid var(--color-primary-dark);
          box-shadow: var(--shadow-dark);
          transform: translate(${x}px, ${y}px);
          &:hover {
            background: url(${storeView});
            background-size: contain;
            background-repeat: no-repeat;
          }
        `;
        return <StyledBlur className="featured_image" />;
      }}
    </Animate>
  );

  render() {
    const StyledGreeting = styled.div`
      margin-top: 15rem;
      display: grid;
      grid-template-columns: repeat(4, 25rem);
      grid-template-rows: repeat(2, 25rem);
      position: absolute;
    `;

    return (
      <StyledGreeting className="featured_text">
        {this.animateImage()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </StyledGreeting>
    );
  }
}

export default Greeting;
