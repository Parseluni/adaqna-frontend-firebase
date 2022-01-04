import firebase from "firebase";


const API_KEY = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "adaqna-frontend-d3e67.firebaseapp.com",
  projectId: "adaqna-frontend-d3e67",
  storageBucket: "adaqna-frontend-d3e67.appspot.com",
  messagingSenderId: "1069449123564",
  appId: "1:1069449123564:web:63928f083f51a2bc8d37c9",
  measurementId: "G-QE0QJX8Z5C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();

export default db;
