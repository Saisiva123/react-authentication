import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyAQzb-F7AtlTaKm-9ZV9aPWygC-GrIcvtk",
    authDomain: "react-authentication-b8cb1.firebaseapp.com",
    projectId: "react-authentication-b8cb1",
    storageBucket: "react-authentication-b8cb1.appspot.com",
    messagingSenderId: "379155283348",
    appId: "1:379155283348:web:abf984c73cbb1b16fa2381",
    measurementId: "G-RX6X02PSQV"
});


// initialize the app
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();