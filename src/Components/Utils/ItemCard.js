import React from 'react';
import styled from 'styled-components';

const ItemCard = props => {
  const FeatureWrapper = styled.div`
    z-index: 2;
    box-shadow: var(--shadow-dark);
    display: flex;
    margin: auto;
    width: 33rem;
    height: 33rem;
    background: var(--color-white) url(${props.src});
  `;

  const FeatureThumb = styled.div`
    z-index: 3;
    align-self: flex-end;
    flex-grow: 1;
    background-image: linear-gradient(
      to right,
      rgba(68, 44, 46, 0.9),
      rgba(68, 44, 46, 0.25)
    );
    color: transparent;
  `;

  const FeatureTitle = styled.div`
    z-index: 4;
    margin-left: 0.3rem;
    padding: 0.5rem;
    padding-bottom: 0;
    font-size: 1.2rem;
    font-family: var(--font-display);
    font-weight: 6;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--color-white);
  `;

  const FeatureDescription = styled.div`
    z-index: 4;
    display: flex;
    justify-content: space-between;
    margin: 0 0.3rem;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 6;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: var(--color-white);
  `;

  return (
    <FeatureWrapper className="feature_wrapper">
      <FeatureThumb className="feature_thmb">
        <a
          className="feature_thmb_info"
          href="/"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <FeatureTitle className="feature_title">{props.title}</FeatureTitle>
          <FeatureDescription className="feature_description">
            <span>{props.descrption}</span>
            <img src={props.icon} style={{ marginRight: '.9rem' }} />
          </FeatureDescription>
        </a>
      </FeatureThumb>
    </FeatureWrapper>
  );
};

export default ItemCard;
