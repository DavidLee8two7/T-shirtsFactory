import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCFJtYPQLzsntWDfZJCPeRKpYcSSq7Govs',
  authDomain: 'tshirtsfactory-47911.firebaseapp.com',
  databaseURL: 'https://tshirtsfactory-47911.firebaseio.com',
  projectId: 'tshirtsfactory-47911',
  storageBucket: 'tshirtsfactory-47911.appspot.com',
  messagingSenderId: '116687664021',
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseProducts = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseItems = firebaseDB.ref('players');

export {
  firebase,
  firebaseProducts,
  firebasePromotions,
  firebaseTeams,
  firebaseItems,
  firebaseDB,
};
