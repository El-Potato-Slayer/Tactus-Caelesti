import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAqTROuJ2QgADbkJLTvrd-uUTkbe_moDtE',
  authDomain: 'tactus-caelesti.firebaseapp.com',
  projectId: 'tactus-caelesti',
  storageBucket: 'tactus-caelesti.appspot.com',
  messagingSenderId: '863366712399',
  appId: '1:863366712399:web:50e3791f646c2de50bae3a',
  measurementId: 'G-P88RGV21E9',
});

const db = firebaseConfig.firestore();

export default db;
