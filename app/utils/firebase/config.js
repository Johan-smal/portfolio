import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAhS1DohUnzG54PJyjzKkKneBuCCOHGTZM',
  authDomain: 'portfolio-525bb.firebaseapp.com',
  databaseURL: 'https://portfolio-525bb.firebaseio.com',
  projectId: 'portfolio-525bb',
  storageBucket: 'portfolio-525bb.appspot.com',
  messagingSenderId: '714027035562',
};
firebase.initializeApp(config);

export default firebase;
