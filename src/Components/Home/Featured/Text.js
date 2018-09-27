import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import entrance from '../../../Resources/images/entrance.jpg';

class Text extends Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0,
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { delay: 800, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(330px, 270px) rotateY(${rotate}deg)`,
            }}
          >
            Since 1996
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
        timing: { delay: 300, duration: 500, ease: easePolyOut },
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
      }}
      enter={{
        opacity: [1],
        timing: { delay: 800, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity }) => {
        return (
          <div
            className="featured_image"
            style={{
              opacity,
              background: `url(${entrance})`,
              transform: `translate(450px, 96px)`,
            }}
          />
        );
      }}
    </Animate>
  );

  render() {
    return (
      <div className="featured_text">
        {this.animateImage()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    );
  }
}

export default Text;
