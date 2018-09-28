import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

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

firebaseDB
  .ref('matches')
  .once('value')
  .then(snapshot => {
    console.log(snapshot.val());
  });
