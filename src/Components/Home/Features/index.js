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
    `;

    return (
      <Zoom
        fraction={0.45}
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
            position: 'relative',
          }}
        >
          <FeaturedText className="Features-title">features</FeaturedText>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gridTemplateRows: 'min-content',
              gridColumnGap: '1.5rem',
              alignItems: 'center',
            }}
          >
            <Feature show={this.state.show} />
          </div>
        </div>
      </Zoom>
    );
  }
}

export default MainProducts;
