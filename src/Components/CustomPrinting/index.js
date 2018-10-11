import React, { Component } from 'react';
import ItemCard from '../Utils/ItemCard';
import Fade from 'react-reveal/Fade';

import plaid from '../../Resources/images/plaid.jpg';
import { firebaseItems, firebase } from '../../firebase';
import { firebaseLooper } from '../Utils/Misc';
import { Promise } from 'core-js';

class CustomPrinting extends Component {
  state = {
    loading: true,
    items: [],
  };

  componentDidMount() {
    firebaseItems.once('value').then(snapshot => {
      const items = firebaseLooper(snapshot);
      let promises = [];

      for (let key in items) {
        promises.push(
          new Promise((resolve, reject) => {
            firebase
              .storage()
              .ref('items')
              .child(items[key].image)
              .getDownloadURL()
              .then(url => {
                items[key].url = url;
                resolve();
              });
          }),
        );
      }

      Promise.all(promises).then(() => {
        this.setState({
          loading: false,
          items,
        });
      });
    });
  }

  showDesignsByCategory = category =>
    this.state.items
      ? this.state.items.map((item, i) => {
          return item.position === category ? (
            <Fade left delay={i * 20} key={i}>
              <div className="item">
                <ItemCard
                  number={item.number}
                  name={item.name}
                  lastname={item.lastname}
                  bck={item.url}
                />
              </div>
            </Fade>
          ) : null;
        })
      : null;

  render() {
    return (
      <div
        className="customDesign_container"
        style={{
          width: '1200px',
          height: '1000px',
          background: `url(${plaid}) repeat`,
        }}
      >
        {!this.state.loading ? (
          <div>
            <div
              style={{ width: '250px', height: '250px' }}
              className="customDesign_wrapper"
            >
              <div className="title">level1</div>
              <div className="title_cards">
                {this.showDesignsByCategory('level1')}
              </div>
            </div>

            <div
              style={{ width: '250px', height: '250px' }}
              className="customDesign_wrapper"
            >
              <div className="title">level2</div>
              <div className="title_cards">
                {this.showDesignsByCategory('level2')}
              </div>
            </div>

            <div
              style={{ width: '250px', height: '250px' }}
              className="customDesign_wrapper"
            >
              <div className="title">level3</div>
              <div className="title_cards">
                {this.showDesignsByCategory('level3')}
              </div>
            </div>

            <div
              style={{ width: '250px', height: '250px' }}
              className="customDesign_wrapper"
            >
              <div className="title">level4</div>
              <div className="title_cards">
                {this.showDesignsByCategory('level4')}
              </div>
            </div>

            <div
              style={{ width: '250px', height: '250px' }}
              className="customDesign_wrapper"
            >
              <div className="title">level5</div>
              <div className="title_cards">
                {this.showDesignsByCategory('level5')}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
export default CustomPrinting;
