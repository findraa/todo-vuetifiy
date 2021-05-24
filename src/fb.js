import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyADlQiLTTf13OEQFQz28250KWkuSYdNHII',
  authDomain: 'findraa-porto.firebaseapp.com',
  databaseURL: 'https://findraa-porto.firebaseio.com',
  projectId: 'findraa-porto',
  storageBucket: 'findraa-porto.appspot.com',
  messagingSenderId: '581776586408',
  appId: '1:581776586408:web:e4e782346e75e00602b49d',
  measurementId: 'G-21HCVH238M'
};

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings();

export default db;
