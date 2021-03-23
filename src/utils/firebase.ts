import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDiYWw6sqxGsFHNFEHZGNlVjpog9eCrDck',
  authDomain: 'netflix-clone-98a87.firebaseapp.com',
  projectId: 'netflix-clone-98a87',
  storageBucket: 'netflix-clone-98a87.appspot.com',
  messagingSenderId: '185757045390',
  appId: '1:185757045390:web:68d27a254ace33e04e6fdf',
};

const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

const auth: firebase.auth.Auth = firebase.auth();
const db: firebase.firestore.Firestore = app.firestore();

export { auth, db };
