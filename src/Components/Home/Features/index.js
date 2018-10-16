import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import Feature from './Feature';
import styled from 'styled-components';

class MainProducts extends Component {
  state = {
    show: false,
  };

  render() {
    const FeaturedText = styled.div`
      width: 100%;
      margin-top: 3rem;
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      grid-column-gap: 1.5rem;
      align-items: center;
      font-family: var(--font-display);
      font-weight: 500;
      font-size: 2.3rem;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      color: var(--color-primary-dark);
      text-align: center;
      ::before,
      ::after {
        content: '';
        height: 1px;
        display: block;
        background-color: var(--color-primary-dark);
      }
      transition: var(--timing);
    `;

    return (
      <Zoom
        fraction={0.9}
        onReveal={() => {
          this.setState({ show: true });
        }}
      >
        <div
          className="Features"
          style={{
            gridColumn: 'center-start / center-end',
            gridRow: '2',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'min-content minmax(40rem, min-content)',
            gridColumnGap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FeaturedText className="Features-title">features</FeaturedText>
          <div>
            <Feature show={this.state.show} />
          </div>
        </div>
      </Zoom>
    );
  }
}

export default MainProducts;
