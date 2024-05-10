import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmE0qlNTqCb31URcrHj3q4hKGfulsE69Y",
    authDomain: "querulous-5a08f.firebaseapp.com",
    projectId: "querulous-5a08f",
    storageBucket: "querulous-5a08f.appspot.com",
    messagingSenderId: "405949316971",
    appId: "1:405949316971:web:794e8690d9d8c91343162e",
    measurementId: "G-YLCL770JHD"
};


firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
