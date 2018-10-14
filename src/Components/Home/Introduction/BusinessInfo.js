import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import styled from 'styled-components';
import storeEntrance from '../../../Resources/images/home/storeEntrance.jpg';
import storeInside from '../../../Resources/images/home/storeInside.jpg';
import pinkhood from '../../../Resources/images/home/pinkhood.jpg';
import coffeeTable from '../../../Resources/images/home/coffeeTable.jpg';
import skirtLady from '../../../Resources/images/home/skirtLady.jpg';

class BusinessInfo extends Component {
  animateImage = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 50,
        y: 0,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 500, duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledImage = styled.div`
          grid-column: 3 / span 2;
          grid-row: 1 / span 2;
          z-index: 2;
          opacity: ${opacity};
          background: url(${storeEntrance});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          border-radius: 0.3rem;
          filter: contrast(125%);
          border: 1px solid var(--color-primary-dark);
          box-shadow: var(--shadow-dark);
          transform: translate(${x}px, ${y}px);
          transition: transform 0.3s ease-in-out;
          &:hover {
            background: url(${storeInside});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
          }
        `;
        return <StyledImage className="company_image" />;
      }}
    </Animate>
  );

  animateProduct = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 0,
        y: -50,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 500, duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledProduct = styled.div`
          grid-column: 1;
          grid-row: 1;
          z-index: 2;
          opacity: ${opacity};
          background: url(${pinkhood});
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 0.3rem;
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
        y: -50,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 500, duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledProduct = styled.div`
          grid-column: 2;
          grid-row: 1;
          z-index: 2;
          opacity: ${opacity};
          background: url(${coffeeTable});
          background-size: cover;
          background-repeat: no-repeat;
          border-radius: 0.3rem;
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
        x: -50,
        y: 0,
      }}
      enter={{
        opacity: [1],
        x: [0],
        y: [0],
        timing: { delay: 500, duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        const StyledProduct = styled.div`
          grid-column: 1 / span 2;
          grid-row: 2;
          z-index: 2;
          opacity: ${opacity};
          background: url(${skirtLady});
          background-size: cover;
          background-position: bottom;
          background-repeat: no-repeat;
          border-radius: 0.3rem;
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
    const BusinessInfo = styled.div`
      margin-top: 20rem;
      display: grid;
      grid-template-columns: repeat(4, 30rem);
      grid-template-rows: repeat(2, 30rem);
      grid-gap: 0.4rem;
      position: absolute;
    `;

    return (
      <BusinessInfo className="featured_text">
        {this.animateImage()}
        {this.animateProduct()}
        {this.animateProduct2()}
        {this.animateProduct3()}
      </BusinessInfo>
    );
  }
}

export default BusinessInfo;
