import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import { Logo } from '../../Utils/Icons';

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
        timing: { duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div
            className="featured_number"
            style={{
              opacity,
              transform: `translate(330px, 170px) rotateY(${rotate}deg)`,
            }}
          >
            <div style={{ flexGrow: 1 }}>
              <div className="header_logo">
                <Logo width="150px" height="150px" />
              </div>
            </div>
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

  render() {
    return (
      <div className="featured_text">
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    );
  }
}

export default Text;
